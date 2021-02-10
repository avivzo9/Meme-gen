'use strict';

function saveToStorage(key, val) {
    localStorage.setItem(key, val.toDataURL());
}

function loadFromStorage(key) {
    var val = localStorage.getItem(key)
    return JSON.parse(val)
}