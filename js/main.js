const getDescription = [
    'Красота',
    'Это я увидел в отпуске',
    'Аж сердце замерло',
    'Аппетитный вид',
    'Прикольно, да?:)',
  ];

 const getMessage = [
 'Всё отлично!',
 'В целом всё неплохо. Но не всё.',
 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
 ];

 const getName = [
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

const similarCount = 25;
/*
const getRandomInt = (min, max) => {
  if (min < 0 || max < 0) {return - 1; };
  if (min > max) { [min, max] = [max, min]};
  return Math.floor((Math.random() * (max - min + 1) + min));
};
*/
let numReserve = []
while (numReserve.length < similarCount) {  
  let foundSimilar = false;
  for (var i = 0; i < numReserve.length; i++) {
  if (numReserve[i] === getRandomNumber){
   foundSimilar = true;
   break;
  }
  }
  if (!foundSimilar) { numReserve[numReserve.length]=getRandomNumber; }
};


 const getRandomNumber = function (min, max) {
    if (min >= 0 & min <= max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
      return 'Ошибка'
    }
 };


const getRandomArrayElement = (elements) => {
    return elements[getRandomInt(0, elements.length - 1)];
  };

 const getComment = {
    id: numReserve,
    avatar: 'img/avatar-'+getRandomNumber(1, 6)+'.svg',
    message: getRandomArrayElement(getMessage),
    name: getRandomArrayElement(getName),
  }; 



 const createObject = () => {
    return {
      id: numReserve,
      url: 'photos/'+ getRandomNumber(1, 25) +'.jpg,',
      description: getRandomArrayElement(getDescription),
      likes: getRandomNumber(15, 200),
      comment: getComment,
    };
  };

const similarObjects = Array.from({length: similarCount}, createObject);

console.log(similarObjects);
