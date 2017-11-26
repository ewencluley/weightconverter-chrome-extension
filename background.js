chrome.browserAction.onClicked.addListener(function (tab) { //Fired when User Clicks ICON
        chrome.tabs.executeScript(tab.id, {
            "file": "convert.js"
        }, function () { // Execute your code
            console.log("Weights converted!"); // Notification on Completion
        });
});