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
/*
const getRandomNumber = function (min, max) {
    if (min >= 0 & min <= max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
      return 'Ошибка'
    }
 };
*/

const getRandomInt = (min, max) => {
  if (min < 0 || max < 0) {return - 1; };
  if (min > max) { [min, max] = [max, min]};
  return Math.floor((Math.random() * (max - min + 1) + min));
};


const getRandomArrayElement = (elements) => {
    return elements[getRandomInt(0, elements.length - 1)];
  };




const generateId = function () {
  let arrayId = [];
  for (let i = 0; i < 25; ++i) {
    let random = getRandomInt(1, 25);
    if (arrayId.indexOf(random) === -1) {
    arrayId.push(random);
    };
  };
  return getRandomArrayElement(arrayId);
};

const generateAvatar = function () {
  return 'img/avatar-' + getRandomInt(1, 6) + '.svg';
};


const generatePhotoUrl = function () {
    let arrayId = [];    
    for (let i = 0; i < 25; ++i) {
      let randomNumber = getRandomInt(1, 25);
      if (arrayId.indexOf(randomNumber) === -1) {
      arrayId.push(randomNumber);
       };
      };     
  return 'photos/' + getRandomArrayElement(arrayId) + '.jpg,';
};
  
  
  const createComment = function() {
    return {
      id: generateId(),
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


