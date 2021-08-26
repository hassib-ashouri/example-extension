import React, { createElement } from 'react';
import { render } from 'react-dom';
import Foreground from './components/Foreground';

console.log("From foreground.");
debugger;

// const nd_referenceNode = document.querySelector("#react-root > didiv > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-aqfbo4.r-zso239.r-1hycxz > div > div.css-1dbjc4n.r-gtdqiz.r-1hycxz > div > div > div > div:nth-child(3)v");
const nd_sideColumn = document.querySelector("#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-aqfbo4.r-zso239.r-1hycxz > div > div.css-1dbjc4n.r-gtdqiz.r-1hycxz").children[0].children[0].children[0]; 

const nd_sideBarContainer = document.createElement("div");
nd_sideBarContainer.style.display = "block";
nd_sideBarContainer.style.all = "initial";
nd_sideBarContainer.style.font = "inherit";


if(nd_sideColumn){
    nd_sideColumn.insertBefore(nd_sideBarContainer, nd_sideColumn.children[2]);
    debugger;
    console.log("element to render in", nd_sideColumn);    
    render(<Foreground/>, nd_sideColumn.children[2]);
}

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