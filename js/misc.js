function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomPlusOrMinus() {
        return Math.random() < 0.5 ? -1 : 1;
}