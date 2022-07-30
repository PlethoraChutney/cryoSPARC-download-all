function findMaps(tab) {
    browser.tabs.executeScript({file: 'map-downloader.js'});
}

browser.browserAction.onClicked.addListener(findMaps);

function downloadMap(map) {
    browser.downloads.download({
        url: map.url,
        filename: map.filename
    })
}

browser.runtime.onMessage.addListener(downloadMap);

