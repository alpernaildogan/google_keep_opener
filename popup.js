chrome.storage.sync.get(['url'], function(result) {
  let url = result.url || 'https://www.google.com';
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.windows.create({
      url: url,
      type: 'popup',
      focused: true,
      width: 800,
      height: 700
    });
  });
});
