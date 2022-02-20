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

function sumArray(anArray){
    let total = 0;
    for(let i = 0; i < anArray.length; i++){
        total += anArray[i];
    }
    return total;
}

