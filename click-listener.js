function findMaps(tab) {
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        files: ['map-downloader.js']
    });
}

chrome.action.onClicked.addListener(findMaps);

function downloadMap(map) {
    chrome.downloads.download({
        url: map.url,
        filename: map.filename
    })
}

chrome.runtime.onMessage.addListener(downloadMap);

