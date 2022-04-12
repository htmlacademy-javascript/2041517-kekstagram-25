import {getRandomInt, getRandomArrayElement} from './util.js';

const DESCRIPTIONS = [
    'Красота',
    'Это я увидел в отпуске',
    'Аж сердце замерло',
    'Аппетитный вид',
    'Прикольно, да?:)',
];
  
const MESSAGES = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
  
const NAMES = [
    'Сергей',
    'Максим',
    'Нина',
    'Иван',
    'Дмитрий',
    'Мария',
    'Анна',
    'Станислав',
    'Виталия',
    'Алексей',
    'Родион',
    'Алла',
    'Екатерина',
    'Надежда',
    'Капитолина',
    'Марина'
];
const MAX_COMMENTS_COUNT = 15;
const PHOTOS_COUNT = 25;
  
const arrayIds = [];
const generateRandomId = function (min, max) {  
    return function () {
      let currentIdValue = getRandomInt(min, max);
      if (arrayIds.length >= (max - min + 1)) {
        console.error('Перебраны все числа из диапазона от ' + min + ' до ' + max);
        return null
      }
      while (arrayIds.includes(currentIdValue)) {
        currentIdValue = getRandomInt(min, max);
      }
      arrayIds.push(currentIdValue);
      return currentIdValue;
    };
};
  
  
let introId = 0;
const generateId = function () {
    return ++introId;
};
  
const generateAvatar = function () {
    return 'img/avatar-' + getRandomInt(1, 6) + '.svg';
};
let introPhotoUrl = 0;
const generatePhotoUrl = function () {
    return 'photos/' + ++introPhotoUrl + '.jpg,';
};
  
const MIN_RANGE_INT = 1;
const MAX_RANGE_INT = 500;
const createRandomId = generateRandomId(MIN_RANGE_INT, MAX_RANGE_INT);
  
  
const createComment = () => {
    return {
      id: createRandomId(),
      avatar: generateAvatar(),
      message: getRandomArrayElement(MESSAGES),
      name: getRandomArrayElement(NAMES),
    };
};
  
const createObject = () => {
    return {
      id: generateId(),
      url: generatePhotoUrl(),
      description: getRandomArrayElement(DESCRIPTIONS),
      likes: getRandomInt(15, 200),
      comments: Array.from({length: getRandomInt(0, MAX_COMMENTS_COUNT)}, createComment),
    };
};
  
const generatePhotos = () => Array.from({length: PHOTOS_COUNT}, createObject);

export {generatePhotos};