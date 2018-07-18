  chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({installedDate: new Date()}, function() {
      console.log("LinkCurator WebEx installed - " + new Date());
    });

   chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([{
     conditions: [new chrome.declarativeContent.PageStateMatcher({
      pageUrl: { urlMatches: '' },
     })
     ],
     actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
   });

  });