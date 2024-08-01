//Variable  data type

let name = "string";
let number = 1;
let booleans = true;
let undefined;
let nulls = null;
// let arrays = [12, 12, 22, 33, 41, 13, 155, 33];
// let symbols = symbol

//object
let object = {
  fristName: "Toey",
  lastName: "Pheat",
  ages: "23",
};

// object whit array

let objects = [
  {
    fristName: "Toey",
    lastName: "Pheat",
    ages: "23",
  },
  {
    fristName: "T",
    lastName: "s",
    ages: "22",
  },
];

//chapter 2
//method array,object//

let arrays = [55, 22, 12, 66, 23, 88];
// push
arrays.push(99, 98);

// arrays.pop()
// console.log(`Cerrnt array ${arrays}`)

//inculdes result True and False
if (arrays.includes(11)) {
  console.log(`True inculdes`);
} else {
  console.log(`False`);
}

//sort
arrays.sort();

// map
arrays.map((s) => {
  console.log(`Map ${s}`);
});


//foreach
arrays.forEach((s) => {
  console.log(`ForEach ${s}`);
});

//length sum round
console.log(`Length ${arrays.length}`);

//push in object
objects.push([
  {
    fristName: "O",
    lastName: "sds",
    ages: "1112",
  },
]);
console.log(objects);


//Object
/* pop push find map filter forEach */
//pop in object
objects.pop();
console.log(objects);
