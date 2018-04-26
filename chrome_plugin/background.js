'use strict';
// chrome.browserAction.onClicked.addListener(function(tab) { alert('icon clicked')});
chrome.runtime.onInstalled.addListener(function() {
  document.body.addEventListener('click', yourListenerFunction, true);
    chrome.storage.sync.set({color: '#3aa757'}, function() {
      console.log("The color is green.");
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {urlMatches: '([a-z])\w+'},
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
  });


// chrome.tabs.executeScript(tabId, {file:"yourScriptFile.js"});

