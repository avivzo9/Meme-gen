'use strict';

const MEMES_KEY = 'memes';

var gMemes;
var gSavedMemes = [];
var gCurrMemeId = 1
var gX = 110;
var gY = 65;
var gSize = 50;
var gLine = 0;
var gCount = 0;

var gElCanvas = document.querySelector('.canvas');
var gCtx = gElCanvas.getContext('2d');

var gKeywords = { 'happy': 5, 'dog': [2, 3], 'donald trump': 1, 'animal': [3, 4], 'baby': [3, 5], 'sarcastic': 6, 'crazy': 6 }

var gImgs = [
    { id: 0, url: 'img/1.jpg', keywords: ['donald trump'], lines: 2 },
    { id: 1, url: 'img/2.jpg', keywords: ['dog'], lines: 2 },
    { id: 2, url: 'img/3.jpg', keywords: ['dog', 'animal', 'baby'], lines: 2 },
    { id: 3, url: 'img/4.jpg', keywords: ['cat', 'animal'], lines: 1 },
    { id: 4, url: 'img/5.jpg', keywords: ['baby', 'happy'], lines: 1 },
    { id: 5, url: 'img/6.jpg', keywords: ['carzy', 'sarcastic'], lines: 2 }
];

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: gImgs[gCurrMemeId].lines,
    lines: [{
            txt: 'Type something',
            size: gSize,
            align: 'left',
            color: 'red'
        },
        {
            txt: 'Type another thing',
            size: gSize,
            align: 'left',
            color: 'red'
        }
    ]
}



_createMemes()

function _createMemes() {
    var memes = gImgs.map((img) => {
        return img;
    })
    gMemes = memes;
}

function drawImg(elImg) {
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height);
}

function drawText(imgIdx) {
    gCurrMemeId = imgIdx;
    gMeme.selectedImgId = gCurrMemeId;
    gMeme.selectedLineIdx = gImgs[gCurrMemeId].lines;
    gCtx.beginPath();
    gCtx.lineWidth = 2;
    gCtx.fillStyle = 'white';
    gCtx.fill();
    gCtx.strokeStyle = 'black';
    gCtx.font = `${gSize}px IMPACT`;
    gCtx.fillText(gMeme.lines[0].txt, gX, gY);
    gCtx.strokeText(gMeme.lines[0].txt, gX, gY);
    if (gMeme.selectedLineIdx > 1) {
        gCtx.beginPath();
        gCtx.lineWidth = 2;
        gCtx.fillStyle = 'white';
        gCtx.fill();
        gCtx.strokeStyle = 'black';
        gCtx.font = `${gSize}px IMPACT`;
        gCtx.fillText(gMeme.lines[1].txt, gX - 30, gY + 450);
        gCtx.strokeText(gMeme.lines[1].txt, gX - 30, gY + 450);
        if (gMeme.selectedLineIdx > 2) {
            gCtx.beginPath();
            gCtx.lineWidth = 2;
            gCtx.fillStyle = 'white';
            gCtx.fill();
            gCtx.strokeStyle = 'black';
            gCtx.font = `${gSize}px IMPACT`;
            gCtx.fillText(gMeme.lines[1].txt, gX - 30, gY + 250);
            gCtx.strokeText(gMeme.lines[1].txt, gX - 30, gY + 250);
        }
    }
}


function changeText(txt) {
    gMeme.lines[gLine].txt = txt;
}

function getElCanvas() {
    return gElCanvas;
}

function getGMemes() {
    return gMemes;
}

function getImgById(ImgId) {
    return gMemes.find((img) => {
        return ImgId === img.id;
    })
}

function moveUp() {
    gY -= 10;
    console.log('gY:', gY)
}

function moveDown() {
    gY += 10;
    console.log('gY:', gY)
}

function increaseFont() {
    gSize += 5;
}

function decreaseFont() {
    gSize -= 5;
}

function switchLine() {
    if (gImgs[gCurrMemeId].lines === 1) return;
    if (gCount === 0) {
        gLine++
        gCount--
    } else {
        gLine--
        gCount++
    }
}

function saveAndRestore() {
    gCtx.save();
    _SaveMemesToStorage()
}

function _SaveMemesToStorage() {
    saveToStorage(MEMES_KEY, gElCanvas);
}

function downLoadCanvas(elLink) {
    const data = gElCanvas.toDataURL();
    elLink.href = data;
    elLink.download = 'my-meme.jpeg';
}