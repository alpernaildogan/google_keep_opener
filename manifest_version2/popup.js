chrome.windows.create({
    url: 'https://keep.google.com/',
    type: 'popup',
    width: 800,
    height: 600,
  }, function(window) {
    // Move the new window to the front
    chrome.windows.update(window.id, { focused: true });
    // Close the popup window
    //window.close();
  });
  