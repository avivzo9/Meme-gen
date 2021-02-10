'use strict';

function saveToStorage(key, val) {
    val.map((meme) => {
        localStorage.setItem(key, meme.toDataURL());
    })
}

function loadFromStorage(key) {
    var val = localStorage.getItem(key)
    return JSON.parse(val)
}