// var gSavedMeme;
var gMemeId = 1;
const KEY = 'savedMemesDB';

function createSavedMeme(meme, url) {
    const savedMeme = {
        id: gMemeId++,
        meme: meme,
        url: url
    }
    return savedMeme;
}

function getSavedMemes() {
    // if (!gSavedMemes) gSavedMemes = []
    return loadFromStorage(KEY);
}
