/From learning Path.

// const prompt = require('prompt-sync')();

// let arr = [];
// let i = 0, j = 0;

// while (i < 5) {
//     arr[i] = [];
//     j = 0;
//     while (j < 2) {
//         arr[i][j] = prompt('Enter value for arr[' + i + '][' + j + ']: ');
//         j = j + 1;
//     }
//     i = i + 1;
// }

// console.log(arr); 




//que.1 Write a program to create a list of natural numbres till 20 and print it.
// const naturalNumbers =[];
// for (let i=1;i<=20; i++){
//     naturalNumbers[i-1]=i;
// }
// console.log("List of natural numbers till 20:");
// console.log(naturalNumbers);


//que.2 Write a Program to input 5 names from the user and print them.

// const prompt= require ('prompt-sync')();
// let names=[];
// for (let i=0; i<5; i++ ){
//     let name =prompt(`Enter name ${i+1}:`);
//     names[i]=name;
// }
// console.log("Names entered:");
// for (let i=0; i<5;i++){
//     console.log(names[i]);
// }


// //que.3 Given a list and its size, print the list inreverse order.(i=[5,4,9,2,1,0])

//# Reverse array in vertical line.

// const prompt = require('prompt-sync')();

// let arrays = [5, 4, 9, 2, 1, 0];
// let n = 6;
// console.log("Reverse number :");
// for (let i = n - 1; i >= 0; i--) {
//     console.log(arrays[i]);
// }

//Reverse array in Horizontal line.

// const prompt = require('prompt-sync')();

// let arrays = [5, 4, 9, 2, 1, 0];
// let n = 6;

// console.log("Reverse number:");
// let reversedHorizontalLine = "";
// for (let i = n - 1; i >= 0; i--) {
//     reversedHorizontalLine += arrays[i] + " ";
// }
// console.log(reversedHorizontalLine);



// //que.4 Given a list and its size, Print alternate elements from the last.(i=[5,4,9,2,1,0]).

// const prompt=require('prompt-sync')();
// let arrays=[5,4,9,2,1,0];
// let n=6;
// console.log("Alternate number:")
// for (let i=n-1; i>=0; i=i-2){
//     console.log(arrays[i]);
// }

//que.5 Given a list [a,1,2,5,b,q] print the last 'i' elements of any given list "i" accepted 
//from the user.
 
// const prompt = require('prompt-sync')();
// let arrays = ['a', 1, 2, 5, 'b', 'q'];

// let i = parseFloat(prompt("Enter the value of i: "));

// for (let j = i; j < 6; j++) {
//     console.log(arrays[j]);
// }

// que.6 Given a list [1,2,3,4,5,6,7]take a number from the user and check whether it 
// exists in the list or not.

// const prompt=require('prompt-sync')();
// let arrays =[1,2,3,4,5,6,7]
// let number=parseFloat(prompt("Enter the number:"));
// for (i=0;arrays[i]<7;i++){
//     if (arrays[i]==number){
//         console.log("Exists")
//     }
// }


//  que.7 Write a program to create a list of 7 numbers from the user, and print true if the
//  complete list consists of consecutive numbers or not.

// const prompt = require('prompt-sync')();
// let array = [];

// for (let i = 0; i < 7; i++) {
//     let number = parseFloat(prompt("Enter number " + (i + 1) + ": "));
//     array[i] = number;
// }

// let isConsecutive = true;

// for (let i = 1; i < 7; i++) {
//     if (array[i] !== array[i - 1] + 1) {
//         isConsecutive = false;
//     }
// }

//  const prompt = require('prompt-sync')();
// let array = [];
// let sum = 0;

// const n = parseFloat(prompt("Enter the number of elements: "));

// for (let i = 0; i < n; i++) {
//     let element = parseFloat(prompt(`Enter element ${i + 1}: `));
//     array[i] = element;
// }
// for (let i = 0; i < n; i++) {
//     sum += array[i];
// }
// const average = sum / n;

// console.log("Sum:", sum);
// console.log("Average:", average);


// // que.9 Make a flowchart to count the total occurance of a number in the list.
// // Take elemnets as input from the user.

// const prompt = require('prompt-sync')();


// let array = [];
// let count = 0;

// const n = parseFloat(prompt("Enter the number of elements: "));

// for (let i = 0; i < n; i++) {
//     let number = parseFloat(prompt(`Enter number ${i + 1}: `));
//     array[i] = number;
// }

// let b = parseFloat(prompt("Enter the number to count occurrences: "));
// for (let i = 0; i < n; i++) {
//     if (array[i] === b) {
//         count++;
//     }
// }
// console.log(`Total occurrences of ${b} in the list: ${count}`);


//  que.10 Make a flowchart to count positive and negative elements in a list.
//  Take elements as input from the user.

// const prompt = require('prompt-sync')();

// let array = [];
// let positiveCount = 0;
// let negativeCount = 0;

// const n = parseFloat(prompt("Enter the number of elements: "));
// for (let i = 0; i < n; i++) {
//     let number = parseFloat(prompt(`Enter number ${i + 1}: `));
//     array[i] = number;
// }

// for (let i = 0; i < n; i++) {
//     if (array[i] > 0) {
//         positiveCount++;
//     } else if (array[i] < 0) {
//         negativeCount++;
//     }
// }

// console.log("Positive count:", positiveCount);
// console.log("Negative count:", negativeCount);


//que.11 Make a flowchart to print duplicates in a list.

// const prompt = require('prompt-sync')();

// let array = [];
// const n = parseFloat(prompt("Enter the number of elements: "));
// for (let i = 0; i < n; i++) {
//     let number = parseFloat(prompt(`Enter number ${i + 1}: `));
//     array[i] = number;
// }

// let b = -1; 
// for (let i = 0; i < n; i++) {
//     let c = 0;
//     let j = i + 1; 
//     if (array[i] !== b) {
//         while (j < n) { 
//             if (array[i] === array[j]) {
//                 c++;
//                 array[j] = b;
//             }
//             j++; 
//         }
//         if (c > 0) {
//             console.log(array[i]); 
//         }
//     }
// }


// //que.12 Create a list that stores first n even numbers. Take n as input from the user.

// const prompt = require('prompt-sync')();
// let array = [];
// let n = parseFloat(prompt("Enter the number of elements:"));
// let b = 2;
// for (let i = 0; i < n; i++) {
//     array[i] = b;
//     b = b + 2;
// }
// console.log(array); 


//que.13 Create a list that stores first n odd numbers. Take n as input from user.

// const prompt=require('prompt-sync')();
// let array=[];
// let n=parseFloat(prompt("Enter the number:"));
// let b=1;
// for (let i=0; i<n; i++){
//     array[i]=b;
//     b=b+2;
// }
// console.log(array);


//que.14 Create a list that stores factor.
// const prompt = require('prompt-sync')();
// let array = [];
// let n = parseFloat(prompt("Enter the number:"));
// let b=0;
// for (let i = 1; i < n; i++) {
//     if (n % i === 0) {
//        array[b]=i;
//       b++;
//     }
// }

// console.log("factors",n,array);

 
// que.15 Create a list that stores all the prime numbers up to n. Take n as input from the user.

// const prompt = require('prompt-sync')();
// let array = [];
// let k = 0;
// let n = parseFloat(prompt("Enter the number:"));

// for (let i = 2; i <= n; i++) {
//     let c = 0;
//     for (let j = 1; j <= i; j++) {
//         if (i % j == 0) {
//             c++;
//         }
//     }
//     if (c == 2) {
//         array[k] = i;
//         k++;
//     }
// }

// console.log("Prime numbers up to", n, "are:", array);


//que. 16 Create a list that stores perfect numbers up to  n. Take as input from user.


// const prompt = require('prompt-sync')();
// let array = [];
// let k = 0;
// let n = parseFloat(prompt("Enter the number:"));

// for (let i = 1; i <= n; i++) {
//     let sum = 0;
//     for (let j = 1; j < i; j++) {
//         if (i % j == 0) {
//             sum += j;
//         }
//     }
//     if (sum == i) {
//         array[k] = i;
//         k++;
//     }
// }

// console.log("Perfect numbers up to", n, "are:", array);


//que.17 Create a list that stores the Armstrong numbers up to n. Take n as a input from user.

// const prompt=require('prompt-sync')();
// let array=[];
// let k=0;
// let c=0;
// for (i=1; i<=n; i++){
//     let i=j;
//     if(j>0){
//         d=j%10;
//         c++;
//         j=Math.floor(j/10);
//     }else if {
//         let s=0; 
//         let i=v;

//     }
// }

//que.18 Create a list that stores the factorial of fisrt n natural number.Take n as user.

// const prompt=require('prompt-sync')();
// let array=[];
// let n=parseFloat(prompt("Enter the number:"));
// let f=1;
// let b=1;
// for (i=0; i<n; i++){
//     f=f*b;
//     array[i]=f;
//     b++;
// }
// console.log(array)


// que.19 Write a programm to create a list of 10 numbers from the user, and count the number
// from the user, and count the number of odd and even numbers.

// const prompt=require('prompt-sync')();
// let array=[];
// let odd=0;
// let even=0;

// let n=parseFloat(prompt("Enter the number:"));
// for (i=0; i<n;i++){
//     let number=parseFloat(prompt(`enter the number ${i+1}:`));
//     array[i]=number;
// }
// for(let j=0; j<n; j++){
//     if (array[j]%2==0){
//     even++;
//     }else {
//     odd++;}
// }
// console.log(odd);
// console.log(even);

//que.20 Write a program to create a list of 10 numbers from the user, and sum the elememts
//on odd positon as odds and on even position as evens.

// const prompt=require('prompt-sync')();
//  let array=[];
//  let sumofeven=0;
//  let sumofodd=0;

//  let n=parseFloat(prompt("Enter the number:"));
//  for (i=0; i<n;i++){
//     let number=parseFloat(prompt(`enter the number ${i+1}:`));
//      array[i]=number;
//  }
//  for (let j=0; j<n; j++){
//     if (array[j]%2==0){
//         sumofeven=sumofeven+array[j];
//     }else {
//         sumofodd=sumofodd+array[j];
//     }
//  }
//  console.log("sum of even",sumofeven);
//  console.log("sum of odd",sumofodd);


//  que.21 Construct a flowchart to create a list of n items where n is input from the user 
//  and add them to the list.

// const prompt = require('prompt-sync')();
// let array = [];
// let n = parseInt(prompt("Enter the number of name:"));

// for (let i = 0; i < n; i++) {
//     let names = prompt("Enter names " + (i + 1) + ": ");
//     array[i] = names;
// }

// console.log("names in the list:", array);


// //que. 22 In the flowchart of the above question. Print the names input by the user in reverse order.

// const prompt = require('prompt-sync')();
// let array = [];
// let n = parseFloat(prompt("Enter the number of names:"));


// for (let i = 0; i < n; i++) {
//     let name = prompt(`Enter name ${i + 1}: `);
//     array[i] = name;
// }
// let reversedArray = [];
// let j=n-1;
// for (let i = 0; i < n; i++) {
//     reversedArray[i] = array[j];
//     j--;
// }

// console.log("Names in reverse order:", reversedArray);


// que.23 Construct a flowchart to show how to rearrange the elements in an array so that 
// they appear in reverse order.

// const prompt = require('prompt-sync')();
// let array = [];
// let n = parseFloat(prompt("Enter the number of elements:"));

// for (let i = 0; i < n; i++) {
//     let num = parseFloat(prompt(`Enter number ${i + 1}: `));
//     array[i] = num;
// }

// for (let i = 0; i < (n / 2); i++) {
//     let temp = array[i];
//     array[i] = array[n - 1 - i];
//     array[n - 1 - i] = temp;
// }
// console.log("Array in reverse order:");
// for (let j = 0; j < n; j++) {
//     console.log(array[j]);
// }

// que.24 Construct a flowchart to input n numbers from the user. store them in a list ,
// then show have to determine the maximum number.

// const prompt=require('prompt-sync')();
// let array=[];
// let n=parseFloat(prompt("Enter the name:"));
// for(let i=0; i<n;i++){
//     let num=parseFloat(prompt(`Enter the name ${i+1}:`));
//     array[i]=num;
// }
//  let max=0;
//  for (let i=0;i<n;i++){
//     if (array[i]>max){
//         max=array[i];
//     }
//  }console.log(max)




//  que.25 Construct a flowchart to show how to store the first 100 natural numbers in an array 
//  and then show them in the reverse sequence.

// const array = new Array(100); 
// const n = 100; 

// for (let i = 0; i < n; i++) {
//     array[i] = i + 1;
// }

// for (let i = n - 1; i >= 0; i--) {
//     console.log(array[i]);
// }


// //que.26  Find Max and min.

// const prompt = require('prompt-sync')();
//  let array = [];
//  let n = parseFloat(prompt("Enter the number:"));


//  for (let i = 0; i < n; i++) {
//     let name = prompt(`Enter name ${i + 1}: `);
//     array[i] = name;
// } 
// let s=0;
// for (i=0;i<n;i++){
//     s=s+array[i];
// }
// mean=s/n;
// let max=0;
// for (i=0;i<n;i++){
//     if (array[i]>max){
//         max=array[i];
//     }
// }

// let min=array[i];
// for (let i=0; i<n;i++){
//     if(array[i]<min){
//         min=array[i];
//     }
// }console.log(max,min);



//que.27 Matrix.

// let matrixA = [[1, 2], [3, 4]];
// let matrixB = [[5, 6], [7, 8]];


// let sum = [];
// let difference = [];

// for (let i = 0; i < matrixA.length; i++) {
//     sum[i] = [];
//     difference[i] = [];

//     for (let j = 0; j < matrixA[0].length; j++) {
        
//         sum[i][j] = matrixA[i][j] + matrixB[i][j];
        
//         difference[i][j] = matrixA[i][j] - matrixB[i][j];
//     }
// }
// console.log("Matrix Sum:",sum);

// console.log("\nMatrix Difference:",difference);











//que 28 
//const prompt=require('prompt-sync')();
// let array=[]
// let n=parseFloat(prompt("Enter the number:"));
// for(i=0;i<n;i++){
//     let num=parseFloat(prompt(`Enter the value ${i+1}:`))
//     array[i]=num;
// }
// for (let i = 0; i <n; i++) {
//     if (i % 2 !== 0) {
//         array[i]=array[i]+5; // we have to add 5 except 1 element in each.....
//     }
// }

// console.log(array); 







































































































