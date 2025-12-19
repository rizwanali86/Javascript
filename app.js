// var isPositive = false;
// var number = 11;

// if (number  % 2 === 0) {
//     alert("Number is Even");
// } else {
//     alert("Number is Odd");
// }

// const students = ['Ali', 'Ahmed', 'Alisha', 'Ayesha', 'Amir'];
// console.table(students);

// let age = 17;
// if (age >= 18) {
//     console.log('Adult');
// }else {
//     console.log('Minor');
// }

// let marks = 85;
// if (marks > 90) {
//     console.log('A');
// } else if (marks > 75) {
//     console.log('B');
// } else console.log('C');


// let marks = prompt("Enter your marks:");

// if  (marks < 0 || marks > 100) {
//     alert("Invalid marks");
// } else if (marks >= 90) {
//     alert("COngratulations! You got A* grade.");
// } else if (marks >= 80) {
//     alert("Hurray! You got A+ garde.");
// } else if (marks >= 70) {
//     alert("You got A grade.");
// } else if (marks < 70 && marks >= 60) {
//     alert("Failed")
// }

// for (let i = 1; i <= 10; i++) {
//     console.log("Count:", i);
// }

// let Count = 1;
// while(count <= 3) {
//     console.log(count); count ++;
// } 

// for (let i = 1; i <= 10; i++) {
// if (i === 5) continue; console.log(i); }

// function hello() { console.log("Hello, World!"); }
// hello();
// hello();
// hello();
// hello();

// function add(a,b) { document.writeln("Hello")
//     return a + b;
// }

// let sum = add (5,3);
// console.log(sum);


// function substract (a,b) {
//     return a - b;
// }

// let substraction = substract (5,3);
// console.log(substraction);

// function multiple(a,b) {
//     return a * b;
// }

// let multiplilication = multiple (5,3);
// console.log(multiplilication);

// function divide(a,b) {
//     return a / b;
// }

// let division = divide (10,2);
// console.log(division);



// const add=(a,b) => a+b;
// console.log(add(5,6))

// const greet = (name) => `Hello, ${name}!`;
// console.log (greet('Rizwan'))

// const clickButton = document.getElementById("click-me");

// clickButton.addEventListener("click", () => {
//     alert('Clicked Button');
// })

// const nav = document.createElement('nav');
// nav.textContent = 'Home, About, Contact';
// console.log(nav);
// document.body.appendChild(nav)

// 

// const user = {name: "RIZWAN,Ali,Ahmed,", age: 20};
// console.log(user.name);
// console.log(user.age);

// const car = {
//     make: "Suzuki",
//     model: "Alto",
//     varient: "vxr",
//     start(){console.log("started")},
//     stop(){console.log("stoped")},
// }

// console.log(car);
// console.log(car.start(), car.stop());


// class car {
//     constructor(make, model, variant) {
//         this.make = make;
//         this.model = model;
//         this.variant = variant;
//     }

//     start() {
//         console.log(
//             `The car ${this.model} by ${this.make} (${this.variant}) is STARTING!!!`
//         );
//     }
// }

// const toyota = new car("Toyota", "Grande", "1.6");
// const kia = new car("KIA", "Sportage", "GLX Cvt");

// toyota.start();
// kia.start();

// class animal {
//     constructor(type, name, sound) {
//         this.type = type
//         this.name = name
//         this.sound = sound
//     }

//     makesound () {
//         console.log(
//             `The ${this.type} ${this.name} sound is ${this.sound}`
//         );
//     }
// }

// const dog = new animal("Animal", "Dog", "Bark");
// dog.makesound();

function sum() {
    console.log(6+4);
}

sum(console.log);

function add(number1, number2, func) {
    func(number1 * number2);
}

add(8, 5, console.log);

function divide(func, number1, number2) {
    func(number1 / number2);
}

divide(console.log, 16, 3);

const p = new Promise((res, rej) => {
    rej("Araa bhai fail hop gaya!")
});

p.then((res) => console.log("Then called", res))
.catch((rej) => console.log("Catch called:", rej))
.finally(() => console,log("Promise done!"));