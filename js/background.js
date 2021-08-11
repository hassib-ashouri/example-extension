console.log("From background script");
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (
    changeInfo.status === "complete" &&
    tab.url.includes("https://twitter.com/home")
  ) {
    chrome.tabs.executeScript(
      tabId,
      { file: "foreground.bundle.js" },
      function (err) {
        console.log("foreground loaded.", err);
      }
    );
  }
});