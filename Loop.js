//que.1 Draw a flowchart to find the sum of the first n natural number where n is any given integrer.
// const prompt=require('prompt-sync')();
// let n=parseFloat(prompt("Enter the number:"))
// let sum=0;
// for (i=1; i<=n;i++){
//     sum=(sum+i); 
//      console.log(sum)}
    

//que.2 Draw a flowchart to find the sum of the 15 even numbers.
//const prompt=require('prompt-sync')();
//  let n=parseFloat(prompt("Enter the number:"))
//  let sum=0; i=2
//  for (c=0; c<n; c++ ){
//     sum=sum+i
//     i=i+2;
//   console.log(sum)}
 

// que.3 Construct a flowchart to show how consecutive even numbers starting from 2 are summed up until the sum just exceeds 
// 1000 and then show the sum  and the number of even numbers added.
// const prompt=require('prompt-sync')();
// let n=parseFloat(prompt("Enter the number:"))
// let  i=0; c=0
// for (s=0; s<=n; s=s+i){
//     i=i+2;
//     c++;
// console.log("sum",s,"count",c)
// }

//que.4 Construct a flowchart to point the number below that are divisible by 7.
// const prompt=require('prompt-sync')();
// let n=parseFloat(prompt("Enter the number:"))
// let i=1;
// while (i<n){
//     if(i%7==0){
//         console.log(i);
//         i++;
//     }else{
//         i++;
//     }
// }


//que.5 Construct a flowchart to show how to find the product of n natural number .
// const prompt=require('prompt-sync')();
// let n=parseFloat(prompt("Enter the number:"))
// let P=1
// for (i=1; i<=n; i++){
//     P=(P*i) 
// }console.log(P)


//que.6 Draw a flowchart to show how to find all even natural numbers that divisible by seven in a given range. 


// const prompt= require ('prompt-sync')();
// let lower= parseFloat(prompt("Enter the lower:"))
//  let upper= parseFloat(prompt("Enter the upper:"))
// let i=lower;

// while (i<=upper){
//     if (i%2==0 && i%7===0)
// {
//     console.log(i);
// }
// i++;
// }

//que. 7 Construct a flowchart to find the sum of the squares of the first 9 natural number that are divisible by 3.
// const prompt=require('prompt-sync')();
// let= sum=0; i=3
// for(c=0; c<9; c++){
//     sum=(i**2+sum)
//     i+=3;
// console.log(sum)}




//que.8 Construct a flowchart to find calculate sum of the following series where n is input.
// const prompt=require('prompt-sync')();
//  let n=parseFloat(prompt("Enter the number:"))
// let= sum=0; c=1
// for (i=1; i<=n; i++){
//     c=(1/i);
//     sum=(sum+c)
// console.log(sum)}

// que.9 Construct a flowchart to show how to find the sum of all the number that are divisible by P but not divisible by q.
// const prompt= require('prompt-sync')(); 
// let lower= parseFloat(prompt("Enter the lower:"))
//  let upper= parseFloat(prompt("Enter the upper:"))
//  let P= parseFloat(prompt("Entet the value of P:"))
//  let Q= parseFloat(prompt("Enter the value of Q:"))
//  let sum=0 ; i=lower
//  while(i<=upper){
//     if (i%P==0 && i%Q!==0){
//     sum=(sum+i);
//      i++;
//     }else{
//      i++;
//    }

// }console.log(sum)


// que.10 Draw a flowchart to show to obtain HCF and LCM.
// const prompt=require ('prompt-sync')();
// let a=parseFloat(prompt("Enter the Number:"))
// let b=parseFloat(prompt("Enter the Number:"))
// let i=1;
// while(i<a){
//    if (a%i==0 && b%i==0){
//       HCF=(i);
//       i++;
//    }else {
//       i++;
//    }
// } 
// LCM=((a*b)/HCF)
// console.log(HCF,LCM)


//que.11 Draw a flowchart to show how the sum of the digit of a given number can be obtained.
// const prompt=require ('prompt-sync')();
// let n= parseFloat(prompt("Enter the number:"))
// let sum=0;
// for (  n=143; n>0 ;){
//    L=(n%10)
//    sum=sum+L;
//    n=Math.floor(n/10);

// }
// console.log(sum)

// const prompt=require ('prompt-sync')();
// let n=parseFloat(prompt("Enter the Number:"))
// let sum=0;
// while(n>0){
//    L=n%10;
//    sum=(sum+L);
//    n=Math.floor(n/10)
// }
// console.log(sum);

//que.12 Draw a flowchart to show the logic of obtained reversed form of a given whole number .
// const prompt=require ('prompt-sync')();
// let n=parseFloat(prompt("Enter the Number:"))
// let r=0;
// while (n>0){
//    r=((r*10)+(n%10));
//    n=Math.floor(n/10)
// }
// console.log(r)

//que.13 Construct a flowchart to show how the factors of a given number can be obtained number.
// const prompt=require ('prompt-sync')();
// let n=parseFloat(prompt("Enter the Number:"))
// let i=1;
// while(i<=n){
//    if (n%i==0){
//       console.log(i)
//       i++;
//    }else {
//       i++;
//    }
// }


//que.14 Construct a flowchart to show how determine the number whether a given number is a perfect number.
// const prompt=require ('prompt-sync')();
//  let n=parseFloat(prompt("Enter the Number:"))
// let i=1; sum=0;
// while(i<n){
//    if (n%i==0){
//       sum=sum+i;
//       i++;
//     }else {
//       i++;
//     }
// }
// if (sum==n)
// {
//    console.log("Perfect number")
// }else {
//    console.log("Not perfect number")
// }


//que.15 Construct a flowchart to show how you can decide if a given number is prime or not.
// const prompt=require ('prompt-sync')();
//   let n=parseFloat(prompt("Enter the Number:"))
//   let i=1; c=0
//   while(i<=n){
//    if (n%i==0){
//       c++;
//       i++;
//    }else {
//       i++;
//    }
//   }if (c==2){
//    console.log("Prime")
//   }else {
//    console.log("Not Prime")
//   }



//que.16 Construct a flowchart for obtaining the sum of a given number of terms (n) for a given value of x in the series.
// const prompt=require ('prompt-sync')();
//  let n=parseFloat(prompt("Enter the Number:"))
// let x=parseFloat(prompt("Enter the value:"))
// let  sum=0;
// for (i=1; i<=n; i++){
//    sum=((x**i/i)+sum)
// }
// console.log(sum)


// const prompt=require ('prompt-sync')();
//  let n=parseFloat(prompt("Enter the Number:"))
//  let x=parseFloat(prompt("Enter the Number:"))
//  let i=1; sum=0;
//  while(i<=n){
//    sum=((x**i/i)+sum);
//    i++;
//  }
//  console.log(sum)

// //que.17 Construct a flowchart to find out the sum of first N terms of the following series.5+55+555+5555.
// const prompt=require ('prompt-sync')();
//  let n=parseFloat(prompt("Enter the Number:"))
//  let c=0; t=0; sum=0;
//  while(c<=n){
//    sum=(sum+t);
//    t=((t*10)+5);
//    c++;
 
//  console.log(t,sum)}


// const prompt=require ('prompt-sync')();
// let n=parseFloat(prompt("Enter the Number:"))
// let t=0; sum=0;
// for(c=0; c<=n; c++){
//    sum=sum+t;
//    t=((t*10)+5)
//    console.log(t,sum)
// }


//que.18 Construct a flowchart to print multiplication table from 1 to 5.
// const prompt=require ('prompt-sync')();
//  let n=parseFloat(prompt("Enter the Number:"))
// let i=1; 
// while(i<=n){
//     let j=1;
//     let m;
//     while(j<=10){
//         m=j*i;
//         console.log(m);
//         j++
//     }i++;
// }


// //que.19 Develop a flowchart to show how to find all the perfect number 10,000.
// const prompt=require ('prompt-sync')();
//  let n=10000;
 
//  for (i=1;i<=n;i++){
//     let s=0;
//     for(let j=1; j<i;j++){
//         if(i%j===0){
//             s+=j;
//         }
          
//     }
//     if(s===i){
//         console.log(i+" is a perfect number")
//          }
//  }


// que.20 Develop a flowchart to show how to the 3 digit Armstrong number A is called an armstrong number. If the sum of the value 
// of the digit each raised to the power equal to the number of digit in the equals the number for ex.

// const prompt = require('prompt-sync')();
// let n = parseFloat(prompt("Enter the Number:"));
// let c = 0;
// let temp = n;
// let sum = 0;


// while (temp > 0) {
//     temp = Math.floor(temp / 10);
//     c++;
// }

// temp = n; 
// while (temp > 0) {
//     let lastDigit = temp % 10;
//     sum=sum+lastDigit**c
//     temp = Math.floor(temp / 10);
// }

// if (sum === n) {
//     console.log("Armstrong number");
// } else {
//     console.log("Not Armstrong number");
// }

// que.21 Some three digit numbers show the properly that the sum of the factors of the digit equals the number ..145=1!+4!=5!.
// const prompt=require('prompt-sync')();
// let n=parseFloat(prompt("Enter the number:"));
// let a=n;
// let s=0;
// while(a>0){
//     let i=1; P=1;
//     a=a%10;
// }
// a=n;
// while(i<a){
//     P=P*i;
// i++;
// }
// s=s+P;
// a=Math.floor(a/10);
// if (s==n){
//     console.log("The number is a factor")
// }
// else {
//     console.log("The number is not a special");
// }



// //que. 22 Construct a flowchart to input a positive integer, if the number is even, odd up its digits. Otherwise multiply the individual digit and print the result.

// const prompt=require('prompt-sync')();
// let n=parseFloat(prompt("Enter the number:"));
// while(n>0){
//     if(n%2===0){
//         let s=0;
//         d=n%10;
//         s=s+d;
//     console.log(s)
//     n=Math.floor(n/10);
    
// } else {
// let p=1;
// d=n%10;
// p=p*d;
// console.log(p);
// n=Math.floor(n/10);
// }
// }

//que.23 Construct a flowchart to determine the hcf og n given number. Input the value n from user then input n=3 no from the user.
// const prompt=require('prompt-sync')();
//  let n=parseFloat(prompt("Enter the number:"));
//  let a=parseFloat(prompt("Enter the number:"));
//  let i=1;
//  while(i<n-1){


    

//  }if (a!==b){
//     if(a>b){
//         a=a-b;
//  }else {
//     b=b-a;
//  }HCF=(a);
//  i++;
//  }console.log(HCF)


// const prompt= require('prompt-sync')();
// let n= parseFloat(prompt("Enter the number of values:"));
// let hcf;
// let a=parseFloat (prompt("Enter number 1:")); 
// for (let i=2; i<=n; i++){
//    let b=parseFloat(prompt('Enter the numbre {i}'));
//    while (a!==b){
//       if (a>b){
//          a=a-b;
//       }else {
//          b=b-a;
//       }
//    }
//    hcf=a;
// }
//console.log("hcf",hcf);


//que.24 Construct a flowchart to determine the maximum and the minimum out of n given Number.
// const prompt= require('prompt-sync')();
//  let n= parseFloat(prompt("Enter the number:"));
// let max=parseFloat(prompt("Enter the max:"))
// let min=parseFloat (prompt("Enter the min:"))
// while(max>min){
//   let i=1;
//   if (i<=n-2)
  
// }

//que.25 Construct a flowchart to input a number .N and print first n prime number.
// const prompt=require('prompt-sync')();
// let n=parseFloat(prompt("Enter the number:"))
// let i=2;
// let count=0;
// while(count<n){
//    let c=0;

//    for (let j=1;j<=i;j++){
//       if(i%j==0){
//          c++;
//       }
//    }
//    if(c==2){
//       console.log(i);
//       count++;
//    }
//    i++;
//}

//que.26 Write a programm to find the sum of all prime number between 1 to n.
// const prompt=require('prompt-sync')();
//  let n=parseFloat(prompt("Enter the number:"))
//  let i=1; 
//  let s=0;
//  while(i<=n){
//    let c=0;
//    for (let j=1; j<=i;j++){
//       if(i%j==0){
//          c++;
//       }
//    } if (c==2){
//       s=s+i;
   
//    }
//    i++;
//  }console.log(s)


// que.27 Construct a flowchart to print only factors of a given number n.
// const prompt=require('prompt-sync')();
// let n=parseFloat(prompt("Enter the number:"));
// let i=2;
// while(i<=n){
//    if (n%i==0){
//       console.log(i)
//       n=Math.floor(n/i)
//       i++;
//    }
//    i++;
// }

// que.28 Construct a flowchart to show the logic of printing the first n fibonacci number.
// const prompt=require('prompt-sync')();
//  let n=parseFloat(prompt("Enter the number:"));
// let x=0;
// let y=1;
// let z=0;
// while(z<=n){
//    console.log(z)
//    x=y;
//    y=z;
//    z=x+y
// }



// que.29 Some two digit no have the property that the sum of the squares of the number with reversed digit.
// const prompt=require('prompt-sync')();
//  let n=parseFloat(prompt("Enter the number:"));
// let i=1;
// rev=0;
// s=0;
// a=n;
// let s1=0;
// while(i<=a){
// n=n;
// if(n>0){
//    rev=((rev*10)+(n%10))
//    n=Math.floor(n/10)
// }else {
//    s=s+rev**2


//    s1=s1+n**2;
//    i++;
// }
// }if (s==s1){
//    console.log("equal")
// }


//Pattern

//que.30
// const prompt=require('prompt-sync')();
//  let n=parseFloat(prompt("Enter the number:"));
// let i=1;
// let output= "";
// while(i<=n){
//     let j=1;
//    while(j<=n){
//       output+="*";
//       j++;
//    } 
//    output+="\n";
    
//       i++;
//    }
//     console.log(output)

 
//que.31

//const LINE_COUNT= 4;

// for (let i = 1; i<=LINE_COUNT; i++){
//    let star="*";
//    for(let j=1; j<i; j++){
//       star += "*";
//    }
//    console.log(star);
// }
// console.clear();
// for (let i=1; i<=LINE_COUNT;i++){
//    console.log("*".repeat(i));
// }

//que 32.

// const prompt=require('prompt-sync')();
//  let n=parseFloat(prompt("Enter the number:"));
//  let i=1;
//  while(i<=n){
//     j=1;
//     if(j<=2*n-1){
//         if (j>=n+1){
//             if(j<=n-1+i){
//                 console.log("*")
//                 j++;
//             }else {
//                 console.log(" ")
//                 j++;
//             }
//         }else {
//             console.log(" ")
//             j++;
//         }
//     }else {
//         console.log("\n")
//         i++;
//     }
//  }

// que.33

//   const prompt=require('prompt-sync')();
//    let n=parseFloat(prompt("Enter the number:"));
//  for (let i=1; i<=n; i++){
//     for(let j=1; j<n-1; j++);
//      output ='';
//    for (let k=0; k<=2*i-1; k++)
//     {
// output+='*';
//    }
//      console.log(output)
//  }


 //que.34
// const prompt=require('prompt-sync')();
//  let n=parseFloat(prompt("Enter the number:"));
// for (let i=1; i<=n; i++){
//     let output="";
//     for (let j=1; j<=i; j++){
//         output+="*"
//     }
//     console.log(output)
// }

//que.35 

// const prompt=require('prompt-sync')();
//   let n=parseFloat(prompt("Enter the number:"));
//   for (let i=1; i<=n; i++){
//     let output="";
//     for (let j=1; j<=2*n-1; j++)
//     {
// if (j>=n+1-i && j<=n-1+i){
//     output+= "*"
// }else {
//     output+="";
// }
//     }
//     console.log(output)
//   } 


//que.36
// const prompt=require('prompt-sync')();
//   let n=parseFloat(prompt("Enter the number:"));
//   for(i=1; i<=n; i++){
//    let j=1;
//    while(j<=n-i){
//     console.log(" ")
//     j++;
//    } {
//     let k=1;
//     ((k<=(2*i)-1))
//       console.log("*")
//       k++;
//     }
//     i++;
//    }


//que. 37 Max between n numbers.

// const prompt=require('prompt-sync')();
//   let n=parseFloat(prompt("Enter the number:"));
//   let max= Number.NEGATIVE_INFINITY;
//   for (let i=1; i<=n; i++){
//      let a = parseFloat(prompt(`Enter value ${i}: `));
//     if(a>max){
//       max=a;
//     }
//     }
//   console.log(max)


//que.38 Second max between N Number.

// const prompt=require('prompt-sync')();
//   let n=parseFloat(prompt("Enter the number:"));
// for (let i=1; i<=n; i++){
//     let a=parseFloat(prompt("Enter the value:"));
//     if (i==1){
//       max=a;
//       Smax=a;
//     }else if (a>max){
//       Smax=max;
//       max=a;

//     }else if (a>Smax){
//       Smax=a;
//     }else {
//       i++
//     }
      
// }console.log(Smax)



 //This is the right way.


// const prompt = require('prompt-sync')();
// let n = parseFloat(prompt("Enter the number: "));
// let max = Number.NEGATIVE_INFINITY;
// let Smax = Number.NEGATIVE_INFINITY;

// for (let i = 1; i <= n; i++) {
//     let a = parseFloat(prompt(`Enter value ${i}: `));
//     if (i == 1) {
//         max = a;
//         Smax = a;
//     } else if (a > max) {
//         Smax = max;
//         max = a;
//     } else if (a > Smax) {
//         Smax = a;
//     }
// }

// console.log("Second max:", Smax);


//que.39 Third max between N numbers.

// const prompt=require('prompt-sync')();
// let n=parseFloat(prompt("Enter the Number:"))
// let max =Number. NEGATIVE_INFINITY;
// let Smax= Number.NEGATIVE_INFINITY;
// let Tmax=Number.NEGATIVE_INFINITY;
// for (i=1; i<=n; i++){
//   let a=parseFloat(prompt(`Enter the value ${i}:`));
//   if (a>max){
//     Tmax=Smax;
//     Smax=max;
//     max=a;
//   }else if (a>Smax){
//     Tmax=Smax;
//     Smax=a;
//   }else if(a>Tmax){
//     Tmax=a;
//   }
// }console.log("Third max",Tmax);


//que.40 Number Pattern.
// const prompt=require('prompt-sync')();
// let n=parseFloat(prompt("Enter the Number:"))
// for (i=n; i>0;i--){
//   for (j=1; j<=n;j++){
//     process. stdout.write(` ${i}`);
//   }
//      console.log('\n')

// }


// const prompt=require('prompt-sync')();
// let n=parseFloat(prompt("Enter the Number:"))
// for (i=n; i>0;i--){
//   let output='';
//   for (j=1; j<=n;j++)
//   {
//     output+=`${i}`;
//   }

//      console.log(output)

// }


//que.41

// const prompt=require('prompt-sync')();
//  let n=parseFloat(prompt("Enter the Number:"))
 
//  for (i=1;i<=n;i++){
//    let output='';

//   for (j=1;j<=n;j++){
//     output+=`${i}`;
//   }
//   console.log(output)
//  }



// const prompt = require('prompt-sync')();
// let poojaScore = parseFloat(prompt("Enter Pooja's marks: "));
// let roshaniScore = parseFloat(prompt("Enter Roshani's marks: "));
// if (poojaScore >= roshaniScore * 2) {
//     console.log("yes");
// } else {
//     console.log("no");
// }



// const prompt=require('prompt-sync')();
// let n = parseFloat(prompt("Enter the size of the first sorted array: "));
// let array=[];
// for (let i = 0; i < n; i++) {
//     let num =parseFloat(prompt(`Enter element ${i + 1}: `));
//     array[i]=num
// }


// let b = [];
// let m = parseFloat(prompt("Enter the size of the second sorted array: "));
// for (let i = 0; i < m; i++) {
//     let num = parseFloat(prompt(`Enter element ${i + 1}: `));
//     b[i]=0;
// }

// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < b.length; j++) {
//         if (array[i] === b[j]) {
//             sum += array[i];
//             break;
//         }
//     }
// }

// console.log("Sum of common elements:", sum);


// let array=[1,2,3,4]
// and b=[2,3,6,7,8]
// so output will be 5


// const prompt = require('prompt-sync')();

// let n = parseFloat(prompt("Enter the size of the first sorted array: "));
// let array = [];
// for (let i = 0; i < n; i++) {
//     let num = parseFloat(prompt(`Enter element ${i + 1}: `));
//     array.push(num);
// }

// let m = parseFloat(prompt("Enter the size of the second sorted array: "));
// let b = [];
// for (let i = 0; i < m; i++) {
    // let num = parseFloat(prompt(`Enter element ${i + 1}: `));
//     b.push(num);
// }
// 
// let sum = 0;
// let j = 0
// for (let i = 0; i < array.length; i++) {
//     while (j < b.length && b[j] < array[i]) {
//         j++;
//     }
    
//     if (j < b.length && array[i] === b[j]) {
//         sum += array[i];
//         j++;
//     }
// }
// console.log("Sum of common elements:", sum);/






// const prompt=require('prompt-sync')();
// let n=parseFloat(prompt("Enter the number:"))
// let sum=0;
// for(i=1;i<=n/2;i++){
//    if  (n%i==0){
//     sum+=i;
//     if(sum==n){
//         console.log("Perfect number")
//     } else {
//         console.log("not perfect")
//     }
//    }

const prompt=require ('prompt-sync')();
 let n=parseFloat(prompt("Enter the Number:"))
let i=1; sum=0;
while(i<n){
   if (n%i==0){
      sum=sum+i;
      i++;
    }else {
      i++;
    }
}
if (sum==n)
{
   console.log("Perfect number")
}else {
   console.log("Not perfect number")
}





