let getRandomNumber = function (min, max) {
    if (min >= 0 & min <= max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
        return 'Ошибка'
    }
 
 };
 
 let checkCommentLength = function (string, length) {
    
     if (string <= length & string >= 0) {
         return true;
 
 
     } else {
         return false;
     }
     
   
 };
 
 commentLength(3, 140);
 randomNumber(6, 56);
 