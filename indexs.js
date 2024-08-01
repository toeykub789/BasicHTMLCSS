// let n = 5

// for(let i = n; i >= 1; i--){
//     n = n * (n - 1)
//     console.log(n)
// }

// let input = 5; // ค่า n ที่ต้องการคำนวณแฟคทอเรียล
// let factorial = 1; // ตัวแปรที่ใช้เก็บผลลัพธ์

// for (let i = 1; i <= input; i++) {
//   factorial *= i; // คูณค่า i เข้าไปในตัวแปร factorial
// }

// console.log(factorial); // พิมพ์ผลลัพธ์

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 == 0) {
//     console.log(`${i} เลขคู่`);
//   } else {
//     console.log(`${i} เลขคี่`);
//   }
// }

// let number = 7;

// if (number % 2 === 0) {
//   console.log(`${number} is a Even number`);
// } else {
//   console.loxg(`${number} is a odd number`);
// }

// let i = 1
// while(i <= 20){
//     if(i % 2 === 0){
//         console.log(`${i} is a Even number`)
//     }else{
//         console.log(`${i} is a Odd number`)
//     }
//     i++
// }

// for (let i = 1; i <= 10; i++) {
//   let row = "";
//   for (let j = 1; j <= 10; j++) {
//     row += i * j;
//   }
//   console.log(row);
// }

// let numbers = [3, 5, 7, 2, 8, -1, 4, 10, 12];
// // หาค่ามากที่สุดและค่าน้อยที่สุดในอาเรย์นี้
// let max = numbers[0];
// let min = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] > max) {
//     max = numbers[i];
//   }
//   if (numbers[i] < min) {
//     min = numbers[i];
//   }
// }

// console.log(max);
// console.log(min);

// let numbers = [3, 5, 7, 2, 8, -1, 4, 10, 12];
// let max = numbers[0];
// let min = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] > max) {
//     max = numbers[i];
//   }
//   if (numbers[i] < min) {
//     min = numbers[i];
//   }
// }

// console.log(`Max: ${max}`);
// console.log(`Min: ${min}`);

// let input = 9
// let factorial = 1

// for(let i = 1; i <= input; i++){
//     factorial *= i
// }
// console.log(factorial)

// let sum = 120 * 6
// console.log(sum)

// for(let i = 1; i <= 10; i++){
//     let row = ''
//     for(let j = 1; j <= 10; j++){
//         row += (i * j)
//     }
//     console.log(row)
// }

// let numbersz = [-100,11,2,2,33,45,50,11,3,66,32,34,22]

// let maxs = numbersz[0]
// let mins = numbersz[0]

// for(let i = 1; i <= numbersz.length; i++){
//     if(numbersz[i] > maxs){
//         maxs = numbersz[i]
//     }
//     if(numbersz[i] < min){
//         maxs = numbersz[i]
//     }
// }

// console.log(`${maxs} is a max`)
// console.log(`${mins} is a min`)

// for (let i = 1; i <= 10; i++) {
//   let row = "";
//   for (let j = 1; j <= 10; j++) {
//     row += j * i;
//   }
//   console.log(row);
// }

// let input = 5;
// let factorial = 1;

// for (let i = 1; i <= input; i++) {
//   factorial *= i
// }

// console.log(factorial);

// let day = 'www'
// switch(day){
//   case "www" : console.log("wwwww")
//   break;
//   case 2 : console.log('Sunday')
//   break;
// }

// let count = 1
// while (true){
//   if(count === 20) break;
//   count++
//   console.log(count)
// }

// let textDom = document.getElementById('Text1').value
// console.log(textDom.value)

// const clickDom = () => {
//   let fristName = document.getElementById("fname").value;
//   let lastName = document.getElementById("lname").value;
//   let numberOne = document.getElementById("numberone").value;

//   console.log(fristName)
//   console.log(lastName)
//   console.log(numberOne);
// }

// const deleteForm = () => {
//   let fristName = document.getElementById("fname").value = '';
//   let lastName = document.getElementById("lname").value = '';
//   let numberOne = document.getElementById("numberone").value = "";
// }

// let factorial = 1;
// let input = 5;

// for (let i = 1; i <= input; i++) {
//   factorial = factorial * i;
//   console.log(factorial);
// }

// Operator
// let number1 = 5;
// let number2 = 20;
// let number3 = number1 / number2;
// console.log(`this is number result  ${number3}`);

// condition
// let score = 45;
// if (score >= 80) {
//   console.log(`you are A`);
// } else if (score >= 70) {
//   console.log(`you are B`);
// } else if (score >= 60) {
//   console.log(`you are C`);
// } else if (score >= 50) {
//   console.log(`you are D`);
// } else {
//   console.log(`You are F`);
// }

// loop

// let counter = 1;

// while (counter <= 10) {
//   // true -> false
//   console.log(`Hello world ${counter}`);
//   counter++;
// }

// for (let i = 1; i <= 10; i++) {

//   console.log(`Hello world ${i}`);
// }

// Array

// let ages = [30, 20, 40, 10];

// ages.push(222)cls

// ages.pop();

// if (!ages.includes(43)) {
//   console.log(`${ages}`);
// } else {
//   console.log(`This is Not!`);
// }

// ages.sort();

// console.log(`${ages}`);
// console.log(`${ages.length}`);

// //////sort includes pop push//////////////sort includes pop push

// object

// let objects = [
//   {
//     fristName: `toey`,
//     lastName: `Khanchai`,
//     ages: 23,
//   },
//   {
//     fristName: `bew`,
//     lastName: `piyapron`,
//     ages: 21,
//   },
// ];

// for (let i = 0; i < objects.length; i++) {
//   console.log(`Student number ${i + 1}`);
//   console.log(`Fristname ${objects[i].fristName}`);
//   console.log(`Lastname ${objects[i].lastName}`);
//   console.log(`Age ${objects[i].ages}`);

// }

/*filter*/
// let score = [30,40,44,65,88,50,60,10,25,22,21,33]
// let newScore = score.filter((sqsq) => {
//     return sqsq <= 30
// })

// console.log(newScore)

// const array = [5, 12, 8, 130, 44];
// const found = array.find((s) => s >= 10);
// console.log(found); // 12

// const numbers = [5, 44, 12, 4];
// const newArr = numbers.map((s) => s * 10);
// console.log(newArr)

const numbers = [1, 2, 3, 4, 5];

// พิมพ์แต่ละตัวเลขใน Array
numbers.forEach( (s) => {
  console.log(s);
});
