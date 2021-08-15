import React from 'react';
import { render } from 'react-dom'

console.log("From foreground.");
debugger;

let sCardTemplate = `
<div style="width:100px; height:100px;background-color: blue; position: relative; top: 25px; left: 25px;">
    Text iside div {{name}}
</div>
`;
let oData = {name: "hassib"};
// let sCompiledCardTemplate = Handlebars.compile(sCardTemplate, {data: oData});
// console.log("compiled tempalte", sCompiledCardTemplate);

var nd_sideColumn = document.querySelector("#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-aqfbo4.r-zso239.r-1hycxz");


const sPageUrl = location.href;
console.log("current  url: ", sPageUrl);

setTimeout(sendSetupMessage,10);

function sendSetupMessage(){
    chrome.runtime.sendMessage({type: "userSetup", userData: {name: "hassib", username: "@hassibsis"}}, function (response){
        if(response.status == 'ok'){
            console.log("extension setup successfully");
        } else {
            console.log("problem seting up extension");
        }
    });
}