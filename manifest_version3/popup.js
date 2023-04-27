chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.windows.create({
      url: 'https://keep.google.com',
      type: 'popup',
      focused: true,
      width: 800,
      height: 700
    });
  });
  