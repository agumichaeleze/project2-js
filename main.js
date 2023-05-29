console.log('1==============================')
// 1. Print numbers from 5 to 15
for(let i = 5; i <= 15; i++){
    console.log(i)
};

console.log('2==============================')
// 2. Print number from 12 to 30
for(let i = 12; i <=30; i++){
    console.log(i);
};
console.log('3==============================')
// 3. Print the odd numbers less than 50
for(let i = 1; i < 50; i+=2){
    console.log(i);
};
console.log('4==============================')
// 4. Print the multiplication table with 4
const multiplicationTable = (num) => {
        for(let i = 1; i <= 4; i++){
           console.log(`${i} x ${num} =  ${i * num}`)
       }
     };
     multiplicationTable(4);
console.log('5==============================')
// 5. Calculate the sum of numbers from 1 to 7
const sumOfNum = () => {
    let num = 0;
    for(let i = 1; i <= 7; i++){
        num = num + i
    }
    return num
}
console.log(sumOfNum());

console.log('6==============================')
// 6. Calculate 6!	
const calFactorial = (num) => {
    let factorial = 1;
    for(let i = 1; i <=num; i++){
        factorial = factorial * i
    }
    return factorial
}
console.log(calFactorial(6));

console.log('7==============================')
// 7. Calculate the sum of odd numbers greater than 9 and less than 22	
const sumOfOddNum = () => {
    let num = 0;
    for(let i = 11; i < 22; i =+2 ){
        num = num + i;
    }
    return num;
}
console.log(sumOfOddNum());

console.log('8==============================')
// 8. Create a function that will convert from Fahrenheit to Celsius Reminder: C = F – 32 / 1.8
/*
f = 1.8c - 32 
*/
let c = 5;
let f = 1.8 *c + 32;
console.log(f);
// //OR
// const fahrenheitToCelsius = (deg) => {
//      return (deg * 1.8) + 32
// }

// console.log(fahrenheitToCelsius(5));
console.log('9==============================')
/*
9. Calculate the sum of numbers in an array of numbers
Example array: [2, 3, -1, 5, 7, 9, 10] Expected output: 
*/
function sumArray(array) {
    const ourArray = [2, 3, -1, 5, 7, 9, 10];
    let sum = 0;
    for (let i = 0; i < ourArray.length; i += 1) {
      sum += ourArray[i];
    }
    return sum;
  }
  console.log(sumArray([2, 3, -1, 5, 7, 9, 10]));
  console.log('10==============================')
  /*
  Calculate the average of the numbers in an array of numbers 
Example array: [10, 32, 19, 15, 9] Expected output: 
 */
console.log('11==============================')
const ourArray = [10, 32, 19, 15, 9];
function average(array){
    let sum = 0;
    for (let i = 0; i < ourArray.length; i += 1) {
      sum += ourArray[i]/5;
    }
    return sum;
  }
  console.log(average([10, 32, 19, 15, 9]));

  /*
 11.  Create a function that receives an array of numbers as argument and returns an array
   containing only the positive numbers.
   Example array = [ -5, 10, -3, 12, -9, 5, 90, 0 ,1]
 */
const  argument = [-5, 10, -3, 12, -9, 5, 90, 0 ,1];
    arrayOfNum = () =>{
    let sum = 0;
    for (let i = 0; i < argument.length; i +=1 ){
        sum += argument[i]
    }
    return  argument
 }
 console.log(arrayOfNum([-5, 10, -3, 12, -9, 5, 90, 0 ,1]))





