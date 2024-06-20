// que.1 Take an array from the user as input and reverse it before printing it to the user.

// const prompt=require('prompt-sync')();
// let array=[];
// let n=parseFloat(prompt("Enter the number:"));

// for (let i= 0; i<n;i++){
// let num=parseFloat(prompt(`Enter the number ${i + 1}:`));
// array[i]=num;
// }
// for (let i= 0; i<(n/2);i++){
//    let Temp=array[i];
//     array[i]=array[n-i-1];
//     array[n-i-1]=Temp;
// }
// for (let j=0;j<n; j++){
//     console.log(array[j]);
// }


//  que.2 Take two sorted of size m and n from the user as input and return the median 
// of the two soretd array.

// const prompt = require('prompt-sync')();

// let array = [];
// let n = parseFloat(prompt("Enter the size of the first sorted array: "));
// for (let i = 0; i < n; i++) {
//     array[i] = parseFloat(prompt(`Enter element ${i + 1}: `));
// }


// let b = [];
// let m = parseFloat(prompt("Enter the size of the second sorted array: "));
// for (let i = 0; i < m; i++) {
//     b[i] = parseFloat(prompt(`Enter element ${i + 1}: `));
// }

// let k = n / 2;
// let median = (n % 2 === 0) ? (array[k] + array[k - 1]) / 2 : array[k];

// let k2 = m / 2;
// let median1 = (m % 2 === 0) ? (b[k2] + b[k2 - 1]) / 2 : b[k2];

// console.log("Median of the first sorted array:", median);
// console.log("Median of the second sorted array:", median1);

//que.3 Take a Soretd array from the user as input and find a number using binary search.
   
// const prompt = require('prompt-sync')();
// let array = [1, 2, 3, 4, 5, 6, 7];
// let num = parseFloat(prompt("Enter the number:"));

// let i = 0;
// let mid;

// while (i < num) {
//     mid = Math.floor((i + num) / 2);
//     if (array[mid] === num) {
//         console.log("Index of the number:", mid);
//         i = num;
//     } else if (array[mid] > num) {
//        num=mid;
//     } else {
//         i = mid;
//     }
// }


//que.4 Take an array from the user as input and find duplicate elments in an array.
  
// const prompt = require('prompt-sync')();
// let array = [];
// let n = parseFloat(prompt("Enter the Number:"));
// for (let i = 0; i < n; i++) {
//     let num = parseFloat(prompt(`Enter the number ${i + 1}:`));
//     array[i]=num;
// }

// for (let i = 0; i < n; i++) {
//     let c = 0; 
//     if (array[i] !== -1) {
//         for (let j = i + 1; j < n; j++) {
//             if (array[i] === array[j]) {
//                 c++; 
//                 array[j] = -1;
//             }
//         }
//         if (c > 0) {
//             console.log("Duplicate number:", array[i]);
//         }
//     }
// }

// //que.5 Take two sorted arrays from the user as input and merge them into oa single sorted array.

// const prompt = require('prompt-sync')();

// let array = [];
// let n = parseFloat(prompt("Enter the number of elements in the first array:"));

// for (let i = 0; i < n; i++) {
//     let num = parseFloat(prompt(`Enter the number ${i + 1} for the first array:`));
//     array[i] = num;
// }

// let b = [];
// let m = parseFloat(prompt("Enter the number of elements in the second array:"));

// for (let i = 0; i < m; i++) {
//     let num = parseFloat(prompt(`Enter the number ${i + 1} for the second array:`));
//     b[i] = num;
// }

// let c = [];
// let i = 0;
// let j = 0;
// let k = 0;

// while (i < n && j < m) {
//     if (array[i] < b[j]) {
//         c[k++] = array[i++];
//     } else {
//         c[k++] = b[j++];
//     }
// }

// while (i < n) {
//     c[k++] = array[i++];
// }

// while (j < m) {
//     c[k++] = b[j++];
// }

// console.log("Merged and sorted array:", c);


// que.6 Given a unsorted array of size N that contains only non-negative integers. Find a contiguous 
// subarray that added to a given number s. In case of multiple subarray return the subarray 
// which comes first on moving from left to right array is 3, 6, 7, 5, 20 and s=12.

// const prompt=require('prompt-sync')();
// let array=[3,6,7,5,10]
// n=5;
// let s=12;
// for (i=0; i<n; i++){
//     let j=i+1;
//     k=array[i]+array[j];
//     if(j<n){
//         if(s==k){
//             console.log(k, i,j+1)
//         }else if (s>k){
//             j++;
//         }
//     }
// }

// //que.7 Take an array of size N and a number k from the user as a rotated manner with a  gape of k.
// //Eg.let us say the array is 3,6,7,5,10 and value of k=3. The output should be 7,3,10,6,5.


// const prompt=require('prompt-sync')();
// let array=[3,6,7,5,10];
// let b=[];
// n=5;
// let p=0;
// let c=1;
// let k=3;
// for (i=0;i<n;i++){
    
//     for(j=0;j<n;j++){
//         if (array[j]==-1){
//             j++;
//         }else if (c==k){
//             b[p]=array[j];
//             array[j]=-1;
//             p++;
//             let c=1;
//         }
//         c++;
//     }
// }console.log(b)


// const prompt = require('prompt-sync')();
// let array = [3, 6, 7, 5, 10];
// let n = array.length;
// let k = 3;

// let rotatedArray = [];
// for (let i = 0; i < n; i++) {
//     let newIndex = (i + k) % n;
//     rotatedArray[newIndex] = array[i];
// }

// console.log(rotatedArray);

//que. 8 magic square.
// const prompt = require('prompt-sync')();

// let n = parseFloat(prompt("Enter the size of the magic square: "));
// let array = [];
// for (let i = 0; i < n; i++) {
//     array.push([]);
//     for (let j = 0; j < n; j++) {
//         array[i].push(0);
//     }
// }

// let i = parseFloat(n / 2);
// let j = n - 1;
// let num = 1;

// while (num <= n * n) {
//     if (i === -1 && j === n) {
//         j = n - 2;
//         i = 0;
//     } else {
//         if (j === n) {
//             j = 0;
//         }
//         if (i < 0) {
//             i = n - 1;
//         }
//     }
//     if (array[i][j] !== 0) {
//         j -= 2;
//         i++;
//         continue;
//     } else {
//         array[i][j] = num++;
//     }
//     j++;
//     i--;
// }

// // Printing the magic square
// console.log("Magic Square:");
// for (let i = 0; i < n; i++) {
//     console.log(array[i].join(' '));
// }

//que.9 Rotated array Anti-clock wise. If the input is 1,2,3,4,5. then if the value of k is 2 then
//the output should be 4,5,1,2,3,

// const prompt = require('prompt-sync')();
// let array = [];
// let n = parseFloat(prompt("Enter the number of elements:"))

// for (let i = 0; i < n; i++) {
//     let num = parseFloat(prompt(`Enter the number ${i + 1}:`));
//     array[i]=num;
// }

// let k = 2;


// let rotatedArray = [];


// for (let i = 0; i < n; i++) {
//     if (i < k) {
//         rotatedArray[i] = array[n - k + i];
//     } else {
//         rotatedArray[i] = array[i - k];
//     }
// }

// console.log("Rotated Array:");
// console.log(rotatedArray.join(', '));


//que.10  K time.

// const prompt = require('prompt-sync')();
//  let array = [];
//  let n = parseFloat(prompt("Enter the number of elements:"))

// for (let i = 0; i < n; i++) {
//      let num = parseFloat(prompt(`Enter the number ${i + 1}:`));
//      array[i]=num;
// }
// let i=0;
// let k=3;
// let  b=array[0];

// if (i<k){
//     for (j=0;j<n; j++){
    
//         array[j]=array[j+1]
//     }array[j-1]=b
// }
// console.log(array.join(', '))

//que.11 Number Pattern.

// 15
// 14  10
// 13  9   6
// 12  8   5  3 
// 11  7   4  2  1

// const prompt = require('prompt-sync')();
// let array = [];
// let n = parseFloat(prompt("Enter the number: "));

// for (let i = 0; i < n; i++) {
//     let num = parseFloat(prompt(`Enter the number ${i + 1}: `));
//     array[i]=[];
//     for (let j = 0; j <= i; j++) {

//        array[i][j]=num;
//     }
// }

// let k = 1;

// for (let i = n - 1; i >= 0; i--) {
//     for (let j = n - 1; j >= i; j--) {
//         array[j][i] = k;
//         k++;
//     }
// }
// console.log(array);


//que.12 
// 1
// 2 9
// 3 8 10
// 4 7 11 14
// 5 6 12 13 15

// const prompt=require('prompt-sync')();
// let array=[];
// let n=parseFloat(prompt("Enter the number:"))
// for (i=0;i<n;i++){
//     let num=parseFloat(prompt(`Enter the number ${i+1}:`));
//     array[i]=[];
//     for (let j=0;j<n;j++){
//         array[i][j]=num;
//     }
// }
// let k=1;
// for (let j=0; j<n; j++){
//     if(j%2==0){
//         for (i=j;i<n;i++){
//             array[i][j]=k
//             k++;
//         }

//     }
//  for (i=n-1;i>=j;i--){
//         array[i][j]=k
//         k++;
//     }
// }console.log(array)


print("Hello, World!")
