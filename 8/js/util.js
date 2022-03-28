const getRandomInt = (min, max) => {
    if (min < 0 || max < 0) return - 1;
    if (min > max) [min, max] = [max, min];
    return Math.floor((Math.random() * (max - min + 1) + min));
};

const getRandomArrayElement = (elements) => {
    return elements[getRandomInt(0, elements.length - 1)];
};

export {getRandomInt};
export {getRandomArrayElement};