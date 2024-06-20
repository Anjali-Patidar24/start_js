// const prompt=require('prompt-sync')();
// array=[];
// let length=parseFloat(prompt("Enter the number:"))
// let sumlength=parseFloat(prompt("Enter sum lenght:"))
// for(i=0;i<length;i++){
//     let num=parseFloat(prompt(`Enter the value${i+1}:`));
//     array[i]=num;
// }
// let sum=0;
// let j=0;
// while(j<=sumlength-1){
//     sum=array[j]+sum 
//     j++;   
//  } 

// console.log(sum)

const prompt = require('prompt-sync')();

let n = parseInt(prompt("Enter the number of elements: "));
let array = [];

for (let i = 0; i < n; i++) {
    let num = parseFloat(prompt(`Enter the value ${i + 1}: `));
    array.push(num);
}

let longest = 0;
let current = 1;

for (let i = 1; i < array.length; i++) {
    if (array[i] === array[i - 1]) {
        current++;
    } else {
        longest = Math.max(longest, current);
        current = 1;
    }
}
longest = Math.max(longest, current);

console.log("Output:");
console.log(longest);












