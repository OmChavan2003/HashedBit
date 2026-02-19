// =====================================
// 1. let, const, var scope difference
// =====================================
function scopeExample() {
    var a = "I am var";
    let b = "I am let";
    const c = "I am const";

    console.log("Inside function:");
    console.log(a, b, c);
}

scopeExample();

// var → function scoped
// let & const → block scoped


// =====================================
// 2. Return second fruit from array
// =====================================
const fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];

function getSecondFruit(arr) {
    return arr[1];
}

console.log("Second Fruit:", getSecondFruit(fruits));


// =====================================
// 3. push() then pop()
// =====================================
function modifyArray(arr) {
    arr.push("New Element"); // add
    arr.pop();               // remove last
    return arr;
}

console.log("Modified Array:", modifyArray([1,2,3,4]));


// =====================================
// 4. Square numbers using map()
// =====================================
const numbers1 = [1,2,3,4,5];

function squareNumbers(arr) {
    return arr.map(num => num * num);
}

console.log("Squared Numbers:", squareNumbers(numbers1));


// =====================================
// 5. Filter out even numbers (return odd)
// =====================================
function getOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
}

console.log("Odd Numbers:", getOddNumbers([1,2,3,4,5,6,7]));


// =====================================
// 6. Object greeting message
// =====================================
const person = {
    name: "Om",
    age: 22,
    occupation: "Student"
};

function greetPerson(obj) {
    console.log(`Hello, my name is ${obj.name}. I am ${obj.age} years old and I am a ${obj.occupation}.`);
}

greetPerson(person);


// =====================================
// 7. Area of rectangle
// =====================================
function rectangleArea(rect) {
    return rect.width * rect.height;
}

console.log("Rectangle Area:", rectangleArea({width: 10, height: 5}));


// =====================================
// 8. Return object keys
// =====================================
function getObjectKeys(obj) {
    return Object.keys(obj);
}

console.log("Object Keys:", getObjectKeys({a:1, b:2, c:3}));


// =====================================
// 9. Merge two objects
// =====================================
function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}

console.log("Merged Object:", mergeObjects({a:1}, {b:2}));


// =====================================
// 10. Sum of array using reduce()
// =====================================
const numbers2 = [10, 20, 30, 40];

function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

console.log("Sum of Numbers:", sumArray(numbers2));
