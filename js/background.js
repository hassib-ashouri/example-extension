log("info", "Starting up from background script...");
startup()
.then(() => log("info", "Startup done."))
.catch((err) => log("err", err));

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (
    changeInfo.status === "complete" &&
    tab.url.includes("https://twitter.com/home")
  ) {
      setTimeout(function () {
        chrome.tabs.executeScript(
          tabId,
          { file: "foreground.bundle.js" },
          function (err) {
            console.log("foreground loaded.");
          }
        );

      },5000);
  }
});


/**
 * startup function
 * check if there is data from previous initialization
 */
function startup(){
  return new Promise(function(resolve, reject){
    let existingData, 
    oDefaulStartupData = {bIsSetup: false, userData: null};

    // see what data exists already
    chrome.storage.local.get(null, async function(data){
        existingData = data;
        try {
          // Initialize with existing data if it exists      
          if(existingData && existingData.username){
            await chrome.storage.local.set({...existingData, bIsSetup: true});
            log("debug", "Found existing data that will be used for startup", existingData);
          } else {
            await chrome.storage.local.set({ ...oDefaulStartupData});
            log("debug", "Setting up with fresh data. Extension is not setup with a user.");
          }
          resolve();
          
        } catch (error) {
          reject(error);
        }

     });
  });
}
// listen to a message from the foreground and determine action based on message
chrome.runtime.onMessage.addListener(async function(req, sender, sendResponse) {
  log("info", `Message from ${sender.tab.url} foreground script`);

  if(req.type && req.type == "userSetup"){
    // This is an important step so we could wait untill the setup is complete
    try {
      await setupExtensionWithUserData(req);
      sendResponse({status: "ok"});
    } catch (error) {
      log("error", "Problem setting up us", error);
      sendResponse({});
    }
  }
  else
  {
    log("error", "Request type is not specified or unknown from " + sender.tab.url);
  }
});

// extension setup logic
/**
 * 
 * @param {*} req request data from the foreground script
 */
async function setupExtensionWithUserData(req){
  const userData = req.userData;

  if(!userData){
    log('error', "User data is missing from setup data");
    return;
  }

  await chrome.storage.local.set({username: userData.username, bIsSetup: true, userData: userData});
  log('debug', `user ${userData.username} is setup successfully`);
}
// Logger
function log(sLogType, ...sMsg){
  const messageTemplates = {
    error : "Error message:",
    info : "Info message:",
    debug: "Debug message:"
  }

  console.log(messageTemplates[sLogType], ...sMsg);
}