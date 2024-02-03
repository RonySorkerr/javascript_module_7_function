// function evensOnly(numbers) {
//     const evens = [];
//     for(const number of numbers){
//         // console.log(number);
//         if(number % 2 === 0){
//             console.log(number);
//             evens.push(number); // in this push statement we will be pushing the element what we want to make a new array...........
//         }
//     }
//     return evens;

// }

// const numbers = [5, 4, 5, 6, 8, 1, 56, 5, 5, 5, 6];
// const evens = evensOnly(numbers)
// console.log('even numbers are : ', evens);

function sumOfEvens(numbers){
    let sum = 0;
    for(number of numbers){
        if(number % 2 === 0){
            sum += number;
        }
    }
    return sum;
}

const numbers = [5,8,7,9,3,1,11,25,4,7,88,96];
const sum =  sumOfEvens(numbers)
console.log('sum of the even numbers are : ', sum);