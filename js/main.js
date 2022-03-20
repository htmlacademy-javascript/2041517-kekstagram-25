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
// 
const similarCount = 25;

const getRandomInt = (min, max) => {
    if (min < 0 || max < 0) {return - 1; };
    if (min > max) { [min, max] = [max, min]};
    return Math.floor((Math.random() * (max - min + 1) + min));
};

const userId = Array.from({length: 10}, (v, i) => ++i);

const getUniqueImgNumber = () => {
    const imgNumber = userId.splice(getRandomInt(0, (userId.length - 1)), 1);
    return imgNumber < 10 ? '0${imgNumber}' :  '${imgNumber}';
};

const someArr = []
for (let i = 0; i < similarCount; i++) {
    let k = getUniqueImgNumber();
    someArr.push(k);
};
console.log(someArr);
/*
  function generateArrayRandomNumber (min, max) {
	var totalNumbers 		= max - min + 1,
		arrayTotalNumbers 	= [],
		arrayRandomNumbers 	= [],
		tempRandomNumber;

	while (totalNumbers--) {
		arrayTotalNumbers.push(totalNumbers + min);
	}

	while (arrayTotalNumbers.length) {
		tempRandomNumber = Math.round(Math.random() * (arrayTotalNumbers.length - 1));
		arrayRandomNumbers.push(arrayTotalNumbers[tempRandomNumber]);
		arrayTotalNumbers.splice(tempRandomNumber, 1);
	}

	return arrayRandomNumbers;
}
*/
//	Нужно учесть что в диапазоне участвуют и минимальное и максимальное число
//	тоесть если задать (0, 100) то на выходе получим массив из 101-го числа
//	от 1 до 100 и плюс число 0



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
    return elements[getRandomNumber(0, elements.length - 1)];
  };

 const getComment ={
    id: generateArrayRandomNumber(1, 250),
    avatar: 'img/avatar-'+getRandomInt(1, 6)+'.svg',
    message: getRandomArrayElement(getMessage),
    name: getRandomArrayElement(getName),
  }; 



 const createObject = () => {
    return {
      id: someArr,
      url: 'photos/'+ getRandomInt(1, 25) +'.jpg,',
      description: getRandomArrayElement(getDescription),
      likes: getRandomInt(15, 200),
      comment: getComment,
    };
  };

const similarObjects = Array.from({length: similarCount}, createObject);

console.log(similarObjects);
