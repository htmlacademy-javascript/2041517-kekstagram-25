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
const photosCount = 25;


const getRandomInt = (min, max) => {
  if (min < 0 || max < 0) return - 1;
  if (min > max) [min, max] = [max, min];
  return Math.floor((Math.random() * (max - min + 1) + min));
};

const getRandomArrayElement = (elements) => {
  return elements[getRandomInt(0, elements.length - 1)];
};

const arrayId = [];
const generateRandomId = function (min, max) {  
  return function () {
    let currentIdValue = getRandomInt(min, max);
    if (arrayId.length >= (max - min + 1)) {
      console.error('Перебраны все числа из диапазона от ' + min + ' до ' + max);
      return null
    }
    while (arrayId.includes(currentIdValue)) {
      currentIdValue = getRandomInt(min, max);
    }
    arrayId.push(currentIdValue);
    return currentIdValue;
  };
};


const introId = 0;
const generateId = function () {
  return ++introId;
};

const generateAvatar = function () {
  return 'img/avatar-' + getRandomInt(1, 6) + '.svg';
};
const introPhotoUrl = 0;
const generatePhotoUrl = function () {
   return 'photos/' + ++introPhotoUrl + '.jpg,';
  };

const minRangeInt = 1;
const maxRangeInt = 500;
const createRandomId = generateRandomId(minRangeInt, maxRangeInt);


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

const photos = Array.from({length: photosCount}, createObject);

console.log(photos);