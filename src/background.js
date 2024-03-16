chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "authenticate") {
    chrome.identity.getAuthToken({interactive: true}, function(token) {
      if (chrome.runtime.lastError) {
        sendResponse({error: chrome.runtime.lastError.message});
        return;
      }
      sendResponse({token: token});
    });
    return true; // indicates you are sending a response asynchronously
  }
});
