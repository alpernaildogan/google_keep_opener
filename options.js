const urlInput = document.getElementById('url');
const saveBtn = document.getElementById('saveBtn');
const messageElement = document.getElementById('message');

// Load the current URL from storage and set it as the default value of the input
chrome.storage.sync.get(['url'], function(result) {
  if (result.url) {
    urlInput.value = result.url;
  }
});

// Save the new URL to storage and display a message
saveBtn.addEventListener('click', function() {
  const newUrl = urlInput.value;
  chrome.storage.sync.set({url: newUrl}, function() {
    console.log('New URL saved: ' + newUrl);
    messageElement.textContent = 'URL saved successfully!';
  });
});
