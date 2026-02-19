// =====================================
// Q1: Remove state names starting with vowels
// =====================================
const states = ["Andhra Pradesh", "Bihar", "Odisha", "Uttar Pradesh", "Maharashtra", "Assam", "Kerala"];

const filteredStates = states.filter(state => {
    return !/^[aeiou]/i.test(state);   // remove names starting with vowels
});

console.log("Q1 Output:", filteredStates);


// =====================================
// Q2: Reverse word order
// =====================================
let str = 'I love my India';

let reversedSentence = str.split(" ").reverse().join(" ");
console.log("Q2 Output:", reversedSentence);


// =====================================
// Q3: INDIA -> INDONESIA using splice
// =====================================
let string = 'INDIA';
let arr = string.split('');

arr.splice(3, 0, 'O', 'N', 'E', 'S');  // insert letters

console.log("Q3 Output:", arr.join(''));


// =====================================
// Q4: Count vowels and consonants
// =====================================
function countVowelsConsonants(text) {
    text = text.toLowerCase();
    let vowels = 0, consonants = 0;

    for (let char of text) {
        if (/[aeiou]/.test(char)) vowels++;
        else if (/[a-z]/.test(char)) consonants++;
    }

    console.log("Q4 Output:");
    console.log("Vowels:", vowels);
    console.log("Consonants:", consonants);
}

countVowelsConsonants("This is a simple JavaScript string");


// =====================================
// Q5: Replace wrong word with correct word
// =====================================
function correctfn(string, wrong, correct) {
    return string.replace(wrong, correct);
}

console.log("Q5 Output:", correctfn("I have a blak pen", "blak", "black"));


// =====================================
// Q6: Filter numbers greater than 5
// =====================================
const inputArr = [1,2,3,9,10,7,5,4,3];

const answer = inputArr.filter(num => num > 5);

console.log("Q6 Output:", answer);


// =====================================
// Q7: Calculate average using map & reduce
// =====================================
const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
];

const averages = students.map(student => {
    const total = student.scores.reduce((sum, score) => sum + score, 0);
    return {
        name: student.name,
        average: total / student.scores.length
    };
});

console.log("Q7 Output:", averages);


// =====================================
// Q8: Repeated sum of digits
// =====================================
function repeatedDigitSum(num) {
    while (num >= 10) {
        num = num.toString().split('').reduce((sum, digit) => sum + Number(digit), 0);
    }
    return num;
}

console.log("Q8 Output:", repeatedDigitSum(456));


// =====================================
// Q9: Count number of words in paragraph
// =====================================
function countWords(paragraph) {
    return paragraph.trim().split(/\s+/).length;
}

console.log("Q9 Output:", countWords("India is my country and I love it very much"));


// =====================================
// Q10: Reverse a string
// =====================================
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log("Q10 Output:", reverseString("Hello"));


// =====================================
// Q11: Find average marks using object methods
// =====================================
const marksData = {
    student1: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
    student2: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
    student3: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 }
};

const result = {};

for (let student in marksData) {
    const scores = Object.values(marksData[student]);
    const avg = scores.reduce((sum, val) => sum + val, 0) / scores.length;
    result[student] = { average: avg };
}

console.log("Q11 Output:", result);
