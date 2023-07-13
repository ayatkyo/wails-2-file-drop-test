import './style.scss';

let resultList = document.querySelector('#result-list')
let resultSource = document.querySelector('#result-source')

// INPUT ZONE
let inputElem = document.querySelector(`#input-test`);
inputElem.addEventListener('change', function (e) {
  let files = e.target.files;
  
  if (files.length === 0) {
    return;
  }

  // send to native
  chrome.webview.postMessageWithAdditionalObjects('wails-file-select', files);
});

// DROP ZONE
let dropElem = document.querySelector(`#drop-section`);
let dropText = document.querySelector(`#drop-text`);
dropElem.addEventListener('dragover', function (e) {
  e.preventDefault();
  dropElem.classList.add('_dragover');  
  dropText.innerHTML = "DRAG OVER";
});
dropElem.addEventListener('dragleave', function (e) {
  e.preventDefault();
  dropElem.classList.remove('_dragover');  
  dropText.innerHTML = "DROP ZONE";
});
dropElem.addEventListener('drop', function (e) {
  e.preventDefault();
  dropElem.classList.remove('_dragover');  
  dropText.innerHTML = "FILES DROPED";

  // process files
  let files = [];
  if (e.dataTransfer.items) {
    files = [...e.dataTransfer.items].map((item, i) => {
      if (item.kind === 'file') {
        const file = item.getAsFile();
        return file;
      }
    });
  } else {
    files = [...e.dataTransfer.files];
  }

  // send to native
  chrome.webview.postMessageWithAdditionalObjects('wails-file-drop', files);
});

chrome.webview.addEventListener("message", function (e) {
  if (!e.data?.event) {
    return
  }

  resultSource.innerText = e.data.event;
  resultList.innerHTML = "";

  for (var item of e.data.data) {
    const listItem = document.createElement('li');
    listItem.innerText = item.path;
    resultList.appendChild(listItem);
  }
});
