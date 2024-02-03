document.getElementById('navigateButton').addEventListener('click', function() {
    let url = document.getElementById('urlInput').value;
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'http://' + url; // Ensure the URL starts with http:// or https://
    }
    chrome.tabs.create({url: url});
});
