'use strict';

const MEMES_KEY = 'memes';

var gMemes;
var gCurrMemeId = 1
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
    { id: 5, url: 'img/6.jpg', keywords: ['carzy', 'sarcastic'], lines: 3 }
];

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: gImgs[gCurrMemeId].lines,
    lines: [{
            txt: 'Type something',
            size: 50,
            align: 'left',
            x: 110,
            y: 65,
            color: 'black',
            borderColor: 'red',
            font: 'impact',
        },
        {
            txt: 'Type another thing',
            size: 50,
            align: 'left',
            x: 80,
            y: 505,
            color: 'black',
            borderColor: 'white',
            font: 'impact'
        },
        {
            txt: 'Type another thing',
            size: 50,
            align: 'left',
            x: 80,
            y: gElCanvas.height / 2,
            color: 'black',
            borderColor: 'white',
            font: 'impact'
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
    gCtx.lineWidth = 1;
    gCtx.fillStyle = gMeme.lines[0].color;
    gCtx.fill();
    gCtx.strokeStyle = gMeme.lines[0].borderColor;
    gCtx.font = `${gMeme.lines[0].size}px ${gMeme.lines[0].font}`;
    gCtx.fillText(gMeme.lines[0].txt, gMeme.lines[0].x, gMeme.lines[0].y);
    gCtx.strokeText(gMeme.lines[0].txt, gMeme.lines[0].x, gMeme.lines[0].y);
}

function drawSecondText() {
    if (gMeme.selectedLineIdx > 1) {
        gCtx.beginPath();
        gCtx.lineWidth = 1;
        gCtx.fillStyle = gMeme.lines[1].color;
        gCtx.fill();
        gCtx.strokeStyle = gMeme.lines[1].borderColor;
        gCtx.font = `${gMeme.lines[1].size}px ${gMeme.lines[0].font}`;
        gCtx.fillText(gMeme.lines[1].txt, gMeme.lines[1].x, gMeme.lines[1].y);
        gCtx.strokeText(gMeme.lines[1].txt, gMeme.lines[1].x, gMeme.lines[1].y);
    } else return;
}

function drawText3() {
    if (gMeme.selectedLineIdx > 2) {
        gCtx.beginPath();
        gCtx.lineWidth = 1;
        gCtx.fillStyle = gMeme.lines[2].color;
        gCtx.fill();
        gCtx.strokeStyle = gMeme.lines[2].borderColor;
        gCtx.font = `${gMeme.lines[2].size}px ${gMeme.lines[0].font}`;
        gCtx.fillText(gMeme.lines[2].txt, gMeme.lines[2].x, gMeme.lines[2].y);
        gCtx.strokeText(gMeme.lines[2].txt, gMeme.lines[2].x, gMeme.lines[2].y);
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
    gMeme.lines[gLine].size += 5;
}

function decreaseFont() {
    gMeme.lines[gLine].size -= 5;
}

function switchLine() {
    if (gImgs[gCurrMemeId].lines === 1) return;
    else if (gImgs[gCurrMemeId].lines === 2) {
        if (!gCount) {
            gLine++
            gMeme.lines[0].borderColor = 'white';
            gMeme.lines[1].borderColor = 'red';
            gCount++
        } else if (gCount === 1) {
            gLine--
            gMeme.lines[0].borderColor = 'red';
            gMeme.lines[1].borderColor = 'white';
            gCount--
        }
    } else if (gImgs[gCurrMemeId].lines === 3) {
        if (!gCount) {
            gLine = 2;
            gMeme.lines[0].borderColor = 'white';
            gMeme.lines[2].borderColor = 'red';
            gMeme.lines[1].borderColor = 'white';
            gCount = 2;
            console.log('gCount:', gCount)
        } else if (gCount === 2) {
            gLine = 1;
            gMeme.lines[0].borderColor = 'white';
            gMeme.lines[2].borderColor = 'white';
            gMeme.lines[1].borderColor = 'red';
            gCount = 1;
            console.log('gCount:', gCount)
        } else if (gCount === 1) {
            gLine = 0;
            gMeme.lines[0].borderColor = 'red';
            gMeme.lines[2].borderColor = 'white';
            gMeme.lines[1].borderColor = 'white';
            gCount = 0;
            console.log('gCount:', gCount)
        }
    }
}


function saveAndRestore() {
    gMeme.lines[0].borderColor = 'white';
    gMeme.lines[1].borderColor = 'white';
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

function changeTextColor(color) {
    gMeme.lines[gLine].color = color;
}

function changeFont(font) {
    gMeme.lines[0].font = font;
}