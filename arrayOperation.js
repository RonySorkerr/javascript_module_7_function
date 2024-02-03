function sumOfNumbs(numbers) {
    let sum = 0; //here the numbers of the array will be added with the last number
    for (const number of numbers) {
        console.log(number); //watching if the number is coming out properly
        sum = sum + number; //adding the numbers one by one with the last number
    }
    return sum; //always return after the condition....
}

const numbss = [4, 5, 6, 7, 89, 9, 5, 65467489]; //the array
const sum = sumOfNumbs(numbss); //a variable for calling the function
console.log('sum of numb is :', sum); //consoling the result. If I don't console it it wont show the result.