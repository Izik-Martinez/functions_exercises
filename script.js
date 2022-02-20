// Exercise #1

// function isShortsWeather(temp){

// if(temp >= 75){

//  return true;

// }
//  return false;
// }



// Exercise #2

// function lastElement(array){

//     if(array.length === 0){

//         return null;
//     }
// return array[array.length - 1];

// }

// Exercise #3

// function capitalize(str){

// return str.charAt(0).toUpperCase() + str.slice(1);

// }

// Exercise #4

// function sumArray(anArray){
//     let total = 0;
//     for(let i = 0; i < anArray.length; i++){
//         total += anArray[i];
//     }
//     return total;
// }

// Exercise #5

function returnDay(num){
let daysOfWeek = {
1: "Monday",
2:"Tuesday",
3:"Wednesday",
4:"Thuesday",
5:"Friday",
6:"Saturday",
7:"Sunday"
};

if (num < 1 || num > 7){
return null;
} else {
    return daysOfWeek[num];
}



}