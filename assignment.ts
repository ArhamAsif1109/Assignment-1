// question no 1


console.log("hello world");

// question no 2

let temperature1: number = 10;
if (temperature1 < 20)
{
    console.log ("it's a cold day");
}

// question no 3

let apples: number =10;
let givenaway: number=3;
let remainingapples= apples- givenaway;
console.log ("remainingapples");

 // question no 4

let firstName: string ="Arham";
let secondName : string ="Asif";
let fullName: string= (`${"firstName"}${"secondName"}`);
console.log ("fullName");

// question no 5 

let num1= 5;
let num2= 3;
if (num1>num2 )
    {
        console.log("yes");
    }
else
{
    console.log("no");
} 


// question no 6 


function calculateArea( radius:number)
{
    const area= 3.14 * radius* radius;
}


// question no 7

for(let i=1;i<=50;i++)
{
    if(i%3===0 &&i%5===0){
        console.log("fizzbuzz");
    }else
    if(i%3===0){
        console.log("fizz");
    }else
    if(i%5===0){
        console.log("buzz");
    }else{
        console.log(i);
    }
}

// question no 8 

const temp:number=[22,34,45,30,40];
let  highest temp: number =temp [0];
 
for(let i=1;1<temperature;i++)
    {
        if(temp [i]> highest temp){
highest tem= temp[i;]
        }
    }


 //   question no 9

    let age: string= prompt("enter your age");
    if (age)
        {
            const age: number =parseInt(age);
        if(age <18)
{ 
    console.log("you ara a minor");
}else{
    console .log("ypu are an adult");
}
} else {
    console.log("invalid input");
}


//question no 10


function countPositiveNumber(numbers:number[]):number{
     let count : number=0;{
if(num>0){
            count++;
        }
     }
     return count;
    }
    
    //question no 11
    function filterWordsStartingWithA(words:string[]):string[]{
     const filteredWords:string[]=[];

     for (const word of words){
        if(word.toLowerCase().startsWith('a')){
            filteredWords.push(word);
        }
     }
     return filteredWords;
    }

    const words:string[]=["apple","grapes","banana","orange","apricot"];
    console.log("Words starting with 'a':",filterWordsStartingWithA(words));


    //question no 12

    const fruits:string[]=["apple","banana","orange","grapes","apricot"];
    if (fruits.length>=2){
        const secondToLast: string =fruits[fruits.length - 2];
        console.log("the second to last element"); 
    }else{
        console.log("the array does not enough elements.");
    }


    //question no 13

    function squareNumbers(number: number[]): number[] {
const squaredNumbers: number[]=[];

for (const num of numbers){
    squaredNumbers.push (num * num);
} return squaredNumbers;
    }

const numbers: number[]=[1,2,3,4,5];
console.log("Squared numbers:", squareNumbers(numbers));


//question no 14

function reserseArray<t>(array:T[]):T[]{
    const reversedArray: T[]=[];
     
    for (let i=array.length - 1;i>=0;i--){
        reversedArray.push(array[i]);
    }
    return reversedArray
} 
 
const originalArray: number []=[1,2,3,4,5];
console.log ("original array:");

const reversedArray: number []=reserseArray(originalArray);
console.log("Reversed Array:");


//question no 15

function analyzeScores(scores: number[]):void{
    let maxScore : number= scores[0];
     let minScore : number= scores[0];
     let countExceedMax:number =0;
       let countBelowMin:number =0;

for (const score of scores){
    if ( score> maxScore){
        maxScore= score;
    }
    if (score< minScore){
        minScore= score;
    }
}

for ( const score of scores ){
    if (score > maxScore){
        countExceededMax++;
        
    }
    if (score< minScore){
        countBelowMin++;
    }
}

console.log("number of the times score exceeded maximum score:",);
console.log("number of the times score fell below minimum score:",);


//question no 16


function removeFalseyValues (arr:any[]):any[] {
    return arr.filters(Boolean);
} 

const arrayWithFalseyValues =[0,1,false ,true,'','hello',null,undefined,NaN];
const filteredArray =removeFalseyValues(arrayWithFalseyValues);
cpnsole.log("filteredArray");


//question no 17

function concatenateArrays<T>(arr1: T[], arr2: T[]): T[] {
    return [...arr1, ...arr2];
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const concatenatedArray = concatenateArrays(array1, array2);
console.log("concatenatedArray"); 

//question no 18

function sumOfElements(arr: number[], isEven: boolean): number {
    return arr.reduce((sum, num) => {
        if ((num % 2 === 0 && isEven) || (num % 2 !== 0 && !isEven)) {
            return sum + num;
        }
        return sum;
    }, 0);
}

const array = [1, 2, 3, 4, 5, 6];
const sumOfEvenElements = sumOfElements(array, true);
const sumOfOddElements = sumOfElements(array, false);

console.log("Sum of even elements:");
console.log("Sum of odd elements:"); 


//question no 19


function indexOfElement<T>(arr: T[], element: T): number {
    return arr.indexOf(element);
}


const array = [1, 2, 3, 4, 5];
const elementToFind = 3;
const index = indexOfElement(array, elementToFind);

if (index !== -1) {
    console.log(Element ${elementToFind} found at index ${index});
} else {
    console.log(Element ${elementToFind} not found in the array);
}


//question no 20

function findSmallestNumber(arr: number[]): number {
    if (arr.length === 0) {
        throw new Error("Array is empty");
    }
    
    let smallest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
}


const array = [4, 2, 7, 1, 9, -3];
const smallestNumber = findSmallestNumber(array);
console.log("The smallest number is:", smallestNumber);
    
}

//question no 21

function calculateProduct(arr: number[]): number {
    if (arr.length === 0) {
        throw new Error("Array is empty");
    }
    
    return arr.reduce((product, num) => product * num, 1);
}

const array = [2, 3, 4, 5];
const product = calculateProduct(array);
console.log("The product of all elements is:", product); 


//question no22


function filterByLength(arr: string[], n: number): string[] {
    return arr.filter(str => str.length > n);
}

const strings = ["apple", "banana", "orange", "kiwi", "grape"];
const minLength = 5;
const filteredStrings = filterByLength(strings, minLength);
console.log("Strings longer than", minLength, "characters:", filteredStrings);


//question no 23


function findDuplicates<T>(arr: T[]): void {
    const duplicates: T[] = [];
    const seen: { [key: string]: boolean } = {};

    arr.forEach(item => {
        if (seen.hasOwnProperty(item.toString())) {
            if (!duplicates.includes(item)) {
                duplicates.push(item);
            }
        } else {
            seen[item.toString()] = true;
        }
    });

    if (duplicates.length > 0) {
        console.log("Duplicates found:", duplicates);
    } else {
        console.log("No duplicates found.");
    }
}


const array = [1, 2, 3, 4, 2, 5, 3, 6];
findDuplicates(array);


//question no 24


function incrementAll(arr: number[]): number[] {
    return arr.map(num => num + 1);
}

const array = [1, 2, 3, 4, 5];
const newArray = incrementAll(array);
console.log("Original array:", array); 
console.log("Array with each element incremented by one:", newArray); 

//question no 25


function countOccurrences<T>(arr: T[], element: T): number {
    return arr.reduce((count, current) => {
        if (current === element) {
            return count + 1;
        }
        return count;
    }, 0);
}


const array = [1, 2, 3, 4, 2, 5, 3, 6, 2];
const elementToCount = 2;
const occurrences = countOccurrences(array, elementToCount);
console.log(The element `${elementToCount}appears `${occurrences}`times in the array.);
































