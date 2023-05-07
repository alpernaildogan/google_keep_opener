const urlInput = document.getElementById('url');
const saveBtn = document.getElementById('saveBtn');

// Load the current URL from storage and set it as the default value of the input
chrome.storage.sync.get(['url'], function(result) {
  if (result.url) {
    urlInput.value = result.url;
  }
});

// Save the new URL to storage
saveBtn.addEventListener('click', function() {
  const newUrl = urlInput.value;
  chrome.storage.sync.set({url: newUrl}, function() {
    console.log('New URL saved: ' + newUrl);
  });
});
