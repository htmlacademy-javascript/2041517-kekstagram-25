let randomNumber = function (a, b) {
    if (a >= 0 & a <= b) {
     Math.random (a, b);
    } else {
        return 'Ошибка'
    }
 
 };
 
 let commentLength = function (a) {
     if (a <= 140 & a >= 0) {
         return true;
 
 
     } else {
         return false;
     }
     
   
 };
 
 commentLength(3, 140);
 randomNumber(6, 56);
 