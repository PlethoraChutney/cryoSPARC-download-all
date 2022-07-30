function sendDownloads() {
    let allNames = document.getElementsByClassName('name');
    let urlComponents = window.location.href.split('/');
    let downloadUrl = `${urlComponents[0]}//${urlComponents[2]}/download_result_file/${urlComponents[4]}/${urlComponents[6]}.`;
    
    for (let boxName of allNames) {
        if (boxName.innerText.includes('volume')) {
            let mapLocation = downloadUrl + boxName.innerText + '.map';
            browser.runtime.sendMessage({
                'url': mapLocation,
                'filename': `${urlComponents[4]}-${urlComponents[6]}-${boxName.innerText}.mrc`
            });
        }
    }
}

sendDownloads();