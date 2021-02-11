'use strict';

const MEMES_KEY = 'memes';

var gMemes;
var gCurrMemeId = 1
var gLine = 0;
var gCount = 0;
var gSavedMemes = [];

var gElCanvas = document.querySelector('.canvas');
var gCtx = gElCanvas.getContext('2d');
var gKeywords = [
    { 'happy': 5 },
    { 'dog': [2, 3] },
    { 'donald-trump': 1 },
    { 'animal': [3, 4] },
    { 'baby': [3, 5] },
    { 'sarcastic': 6 },
    { 'crazy': 6 }
]

var gImgs = [
    { id: 0, url: 'img/1.jpg', keywords: ['donald trump'], lines: 2 },
    { id: 1, url: 'img/2.jpg', keywords: ['dog'], lines: 2 },
    { id: 2, url: 'img/3.jpg', keywords: ['dog', 'animal', 'baby'], lines: 2 },
    { id: 3, url: 'img/4.jpg', keywords: ['cat', 'animal'], lines: 2 },
    { id: 4, url: 'img/5.jpg', keywords: ['baby', 'happy'], lines: 2 },
    { id: 5, url: 'img/6.jpg', keywords: ['carzy', 'sarcastic'], lines: 2 },
    { id: 6, url: 'img/7.jpg', keywords: ['carzy', 'sarcastic'], lines: 2 },
    { id: 7, url: 'img/8.jpg', keywords: ['carzy', 'sarcastic'], lines: 2 },
    { id: 8, url: 'img/9.jpg', keywords: ['carzy', 'sarcastic'], lines: 2 },
    { id: 9, url: 'img/10.jpg', keywords: ['carzy', 'sarcastic'], lines: 2 },
    { id: 10, url: 'img/11.jpg', keywords: ['carzy', 'sarcastic'], lines: 2 },
    { id: 11, url: 'img/12.jpg', keywords: ['carzy', 'sarcastic'], lines: 2 },
    { id: 12, url: 'img/13.jpg', keywords: ['carzy', 'sarcastic'], lines: 2 },
    { id: 13, url: 'img/14.jpg', keywords: ['carzy', 'sarcastic'], lines: 2 },
    { id: 14, url: 'img/15.jpg', keywords: ['carzy', 'sarcastic'], lines: 2 },
    { id: 15, url: 'img/16.jpg', keywords: ['carzy', 'sarcastic'], lines: 2 },
    { id: 16, url: 'img/17.jpg', keywords: ['carzy', 'sarcastic'], lines: 2 },
    { id: 17, url: 'img/18.jpg', keywords: ['carzy', 'sarcastic'], lines: 2 },
    { id: 18, url: 'img/19.jpg', keywords: ['carzy', 'sarcastic'], lines: 2 },
    { id: 19, url: 'img/20.jpg', keywords: ['carzy', 'sarcastic'], lines: 2 }
];

// 
var gMeme = {
    // selectedImgId: 1,
    selectedLineIdx: gImgs[gCurrMemeId].lines,
    lines: [{
            txt: 'Type something',
            size: 50,
            align: 'center',
            x: 270,
            y: 65,
            color: 'black',
            borderColor: 'white',
            font: 'impact',
            shadowBlur: 15
        },
        {
            txt: 'Type another thing',
            size: 50,
            align: 'center',
            x: 270,
            y: 505,
            color: 'black',
            borderColor: 'white',
            font: 'impact',
            shadowBlur: 0
        },
        {
            txt: 'Type another thing',
            size: 50,
            align: 'center',
            x: 270,
            y: gElCanvas.height / 2,
            color: 'black',
            borderColor: 'white',
            font: 'impact',
            shadowBlur: 0
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
    console.log('imgIdx:', imgIdx)
    gCurrMemeId = imgIdx;
    gMeme.selectedImgId = gCurrMemeId;
    gMeme.selectedLineIdx = gImgs[gCurrMemeId].lines;
    gCtx.beginPath();
    gCtx.lineWidth = 1.5;
    gCtx.fillStyle = gMeme.lines[0].color;
    gCtx.fill();
    gCtx.shadowColor = 'red';
    gCtx.shadowBlur = gMeme.lines[0].shadowBlur;
    gCtx.strokeStyle = gMeme.lines[0].borderColor;
    gCtx.font = `${gMeme.lines[0].size}px ${gMeme.lines[0].font}`;
    gCtx.textAlign = gMeme.lines[0].align;
    gCtx.fillText(gMeme.lines[0].txt, gMeme.lines[0].x, gMeme.lines[0].y);
    gCtx.strokeText(gMeme.lines[0].txt, gMeme.lines[0].x, gMeme.lines[0].y);
    if (gMeme.selectedLineIdx > 1) drawSecondText();
    if (gMeme.selectedLineIdx > 2) drawText3();
}

function drawSecondText() {
    gCtx.beginPath();
    gCtx.lineWidth = 1.5;
    gCtx.fillStyle = gMeme.lines[1].color;
    gCtx.fill();
    gCtx.shadowColor = 'red';
    gCtx.shadowBlur = gMeme.lines[1].shadowBlur;
    gCtx.strokeStyle = gMeme.lines[1].borderColor;
    gCtx.font = `${gMeme.lines[1].size}px ${gMeme.lines[0].font}`;
    gCtx.textAlign = gMeme.lines[1].align;
    gCtx.fillText(gMeme.lines[1].txt, gMeme.lines[1].x, gMeme.lines[1].y);
    gCtx.strokeText(gMeme.lines[1].txt, gMeme.lines[1].x, gMeme.lines[1].y);
}

function drawText3() {
    gCtx.beginPath();
    gCtx.lineWidth = 1.5;
    gCtx.fillStyle = gMeme.lines[2].color;
    gCtx.fill();
    gCtx.shadowColor = 'red';
    gCtx.shadowBlur = gMeme.lines[2].shadowBlur;
    gCtx.strokeStyle = gMeme.lines[2].borderColor;
    gCtx.font = `${gMeme.lines[2].size}px ${gMeme.lines[0].font}`;
    gCtx.textAlign = gMeme.lines[2].align;
    gCtx.fillText(gMeme.lines[2].txt, gMeme.lines[2].x, gMeme.lines[2].y);
    gCtx.strokeText(gMeme.lines[2].txt, gMeme.lines[2].x, gMeme.lines[2].y);
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
            gMeme.lines[0].shadowBlur = 0;
            gMeme.lines[1].shadowBlur = 15;
            gCount++
        } else if (gCount === 1) {
            gLine--
            gMeme.lines[0].shadowBlur = 15;
            gMeme.lines[1].shadowBlur = 0;
            gCount--
        }
    } else if (gImgs[gCurrMemeId].lines === 3) {
        if (!gCount) {
            gLine = 2;
            gMeme.lines[0].shadowBlur = 0;
            gMeme.lines[2].shadowBlur = 15;
            gMeme.lines[1].shadowBlur = 0;
            gCount = 2;
            console.log('gCount:', gCount)
        } else if (gCount === 2) {
            gLine = 1;
            gMeme.lines[0].shadowBlur = 0;
            gMeme.lines[2].shadowBlur = 0;
            gMeme.lines[1].shadowBlur = 15;
            gCount = 1;
            console.log('gCount:', gCount)
        } else if (gCount === 1) {
            gLine = 0;
            gMeme.lines[0].shadowBlur = 15;
            gMeme.lines[2].shadowBlur = 0;
            gMeme.lines[1].shadowBlur = 0;
            gCount = 0;
            console.log('gCount:', gCount)
        }
    }
}


function saveAndRestore() { //////////////
    console.log('gSavedMemes:', gSavedMemes)
    gSavedMemes.push(gElCanvas);
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

function addTextLine() {
    if (gImgs[gCurrMemeId].lines > 2) return;
    else gImgs[gCurrMemeId].lines++;
}

function deleteTextLine() {
    if (gImgs[gCurrMemeId].lines === 1) return;
    else gImgs[gCurrMemeId].lines--;
}

function txtBorderColorChange(color) {
    gMeme.lines[gLine].borderColor = color;
}

function alignLeft() {
    gMeme.lines[gLine].align = 'right';
}

function alignRight() {
    gMeme.lines[gLine].align = 'left';
}

function alignCenter() {
    gMeme.lines[gLine].align = 'center';
}

function getGCurrMemeId() {
    return gCurrMemeId;
}

function clearCanvas() {
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height);
}

function restartBrowser() {
    chrome.send('restartBrowser');
}

// function searchImgByKeyword(ev, word) {
//     ev.preventDefault();
//     var sw = gImgs.find((keyword) => {
//         console.log('keyword:', ...keyword.keywords)
//         return keyword.keywords === word;
//     })
//     console.log(sw);
// }

function searchByWord(word) {
    console.log('word:', word)
    var imgs = [];
    var sw = gImgs.map((keyword) => {
        console.log('keyword:', ...keyword.keywords)
        if (keyword.keywords === word) imgs.push(keyword.keywords);
    })
    console.log('imgs:', imgs)
    console.log('sw:', sw)
}

// function drawSticker() {}