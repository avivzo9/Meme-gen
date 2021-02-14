'use strict';

var gElImgPick = document.querySelector('.img-pick');
var gElEditor = document.querySelector('.editor-container');
var gElMemes = document.querySelector('.saved-memes');
var gElFooter = document.querySelector('.footer-container');
var gCurrImg;
var gImg;

function init() {
    renderImages();
    gElEditor.style.display = 'none';
}

function renderImages() {
    var elGrid = document.querySelector('.img-grid');
    var strHtml = '';
    var memes = getGMemes();
    memes.map((img) => {
        var str = `<img class="img-${img.id} img-design" onclick="onLoadPng(${img.id})" src="${img.url}">`
        strHtml += str;
    }).join('');
    elGrid.innerHTML = strHtml;
}

function onLoadPng(img) {
    var elImg = document.querySelector(`.img-${img}`);
    gCurrImg = elImg;
    gElImgPick.style.display = 'none';
    gElEditor.style.display = 'flex';
    drawImg(gCurrImg);
    drawText(img);
}

function onChangeText(ev) {
    ev.preventDefault();
    var elText = document.querySelector('input[name="txt"]');
    changeText(elText.value);
    renderCanvas();
}

function renderCanvas() {
    var ctx = getGCtx();
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, gElCanvas.width, gElCanvas.height);
    if (gImg !== undefined) ctx.drawImage(gImg, 0, 0, gElCanvas.width, gElCanvas.height);
    else drawImg(gCurrImg);
    drawText(gCurrMemeId);
}

function onMoveUp() {
    moveUp();
    renderCanvas();
}

function onMoveDown() {
    moveDown();
    renderCanvas();
}

function onIncreaseFont() {
    increaseFont();
    renderCanvas();
}

function onDecreaseFont() {
    decreaseFont();
    renderCanvas();
}

function onSwitchLine() {
    var elText = document.querySelector('input[name="txt"]');
    switchLine();
    renderCanvas();
    elText.value = '';
}

function onMemesShow() {
    gElFooter.style.position = 'absolute';
    gElFooter.style.bottom = 0;
    gElImgPick.style.display = 'none';
    gElMemes.style.display = 'block';
    gElEditor.style.display = 'none';
    renderSavedImg();
}

function onGalleryView() {
    gElMemes.style.display = 'none';
    gElImgPick.style.display = 'block';
    gElEditor.style.display = 'none';
    gElFooter.style.position = '';
    clearCanvas();
    var elText = document.querySelector('input[name="txt"]');
    elText.value = '';
}

function onAboutView() {
    onGalleryView();
}

function onDownloadCanvas(elLink) {
    downLoadCanvas(elLink);
}

function onSaveAndRestore() {
    saveAndRestore();
}

function renderSavedImg() {
    var memes = loadFromStorage(MEMES_KEY);
    var elSavedMemes = document.querySelector('.saved-memes-container');
    elSavedMemes.innerHTML = '';
    if (!memes) elSavedMemes.innerHTML = '<h1>There are no saved Memes</h1>';
    else {
        memes.map((meme) => {
            var img = new Image;
            img.src = meme;
            elSavedMemes.appendChild(img);
        })
    }
}

function onTxtColorChange() {
    var elColor = document.querySelector('input[name="txt-color"]');
    changeTextColor(elColor.value);
    renderCanvas();
}

function onFontChange(font) {
    changeFont(font);
    renderCanvas();
}

function onAddTextLine() {
    addTextLine();
    renderCanvas();
}

function onDeleteTextLine() {
    deleteTextLine();
    renderCanvas();
}

function onTxtBorderColorChange() {
    var elColor = document.querySelector('input[name="txt-border-color"]');
    txtBorderColorChange(elColor.value);
    renderCanvas();
}

function onLeftAlign() {
    alignLeft();
    renderCanvas();
}

function onRightAlign() {
    alignRight();
    renderCanvas();
}

function onCenterAlign() {
    alignCenter();
    renderCanvas();
}

function downloadImg(elLink) {
    var imgContent = gElCanvas.toDataURL('image/jpeg')
    elLink.href = imgContent;
}

function onImgInput(ev) {
    loadImageFromInput(ev, renderUploadImg)
}

function loadImageFromInput(ev, onImageReady) {
    gElImgPick.style.display = 'none';
    gElEditor.style.display = 'flex';
    var reader = new FileReader()

    reader.onload = function(event) {
        var img = new Image()
        img.onload = onImageReady.bind(null, img)
        img.src = event.target.result
    }
    reader.readAsDataURL(ev.target.files[0])
}

function renderUploadImg(img) {
    gImg = img;
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
    drawText(getGCurrMemeId());
}

function onSearchByWord(word) {
    searchByWord(word);
}

function openMenu() {
    var elNav = document.querySelector('.nav-container');
    elNav.style.visibility = 'visible';
}

function closeMenu() {
    var elNav = document.querySelector('.nav-container');
    if (elNav.style.visibility === 'visible') elNav.style.visibility = 'hidden';
}