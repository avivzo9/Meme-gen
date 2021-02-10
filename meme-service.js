'use strict';

const MEMES_KEY = 'memes';

var gMemes;
var gCurrMemeId = 1
var gSize = 50;
var gSize2 = 50;
var gLine = 0;
var gCount = 0;
var gSavedMemes = [];

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
            x: 110,
            y: 65,
            color: 'red',
            borderColor: 'white'
        },
        {
            txt: 'Type another thing',
            size: gSize,
            align: 'left',
            x: 80,
            y: 505,
            color: 'black',
            borderColor: 'white'
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
    gCtx.fillStyle = gMeme.lines[0].borderColor;
    gCtx.fill();
    gCtx.strokeStyle = gMeme.lines[0].color;
    gCtx.font = `${gSize}px IMPACT`;
    gCtx.fillText(gMeme.lines[0].txt, gMeme.lines[0].x, gMeme.lines[0].y);
    gCtx.strokeText(gMeme.lines[0].txt, gMeme.lines[0].x, gMeme.lines[0].y);
}

function drawSecondText() {
    if (gMeme.selectedLineIdx > 1) {
        gCtx.beginPath();
        gCtx.lineWidth = 2;
        gCtx.fillStyle = gMeme.lines[1].borderColor;
        gCtx.fill();
        gCtx.strokeStyle = gMeme.lines[1].color;
        gCtx.font = `${gSize2}px IMPACT`;
        gCtx.fillText(gMeme.lines[1].txt, gMeme.lines[1].x, gMeme.lines[1].y);
        gCtx.strokeText(gMeme.lines[1].txt, gMeme.lines[1].x, gMeme.lines[1].y);
    } else return;
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
    gMeme.lines[gLine].y -= 10;
}

function moveDown() {
    gMeme.lines[gLine].y += 10;
}

function increaseFont() {
    if (!gLine) gSize += 5;
    else gSize2 += 5;
}

function decreaseFont() {
    if (!gLine) gSize -= 5;
    else gSize2 -= 5;
}

function switchLine() {
    if (gImgs[gCurrMemeId].lines === 1) return;
    if (!gCount) {
        gLine++
        gMeme.lines[1].color = 'red';
        gMeme.lines[0].color = 'black';
        gCount++
    } else {
        gLine--
        gMeme.lines[0].color = 'red';
        gMeme.lines[1].color = 'black';
        gCount--
    }
}

function saveAndRestore() {
    var canvas = gElCanvas;
    gSavedMemes.push(canvas);
    console.log('canvas:', canvas);
    console.log('gSavedMemes:', gSavedMemes)
    _SaveMemesToStorage();
}

function _SaveMemesToStorage() {
    saveToStorage(MEMES_KEY, gSavedMemes);
}

function downLoadCanvas(elLink) {
    const data = gElCanvas.toDataURL();
    elLink.href = data;
    elLink.download = 'my-meme.jpeg';
}

function getGSavedMemes() {
    return gSavedMemes;
}