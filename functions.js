//que.1
// function collectThings(x,...y){
    //     console.log(x);
    //     console.log(y);
    // }
    
    // collectThings(1,2,3,4,5,6,7,8,9)///
    
    // function outer(x)  {
    //     function inner(y){
    //         return x+y;
    //     }
    //     return inner;
    // }


    //que.2 
    //const outerReturn=outer(10);
    // outerReturn
    //  inner(y)
    //     return x+y;
    
    // outerReturn(2)


      
    // que.3
    // function sayGreeting(name){
        // return `Hello ${name}`;
    // }
    // sayGreeting('Anjali');


    
//    que.4 
//function foo(){
//         console.log('foo');
//         foo()
//     }
    
    // que.5 
    //const printMeAgainWithParam = function(a,b){
    //         console.log(a,b);
    //     }


        
    //que.6
    // process.stdin.setEncoding('utf8');

        //process.stdin.on('data', function (input) {
        //    var num = 4; 
        //    console.log("The number is:", num);
        
        
        // que.7
        // process.stdin.setEncoding('utf8');
        // process.stdin.on('data', function(input) {
        //     const nums = input.trim().split('\n');
        //     let x = parseInt(nums[0]);
        //     let y = parseInt(nums[1]);
        //      addition=x+y;
        //     Sub=x-y;
            
        // }); 
        // console.log(addition,Sub)
        
        
        // que.8
        // let a=new Date()
        // let h=a.getHours()
        // let m=a.getMinutes()
        // let s=a.getSeconds()
        // let d=a.getDate()
        // console.log(h,m,s,d)
        
        
        
        // que.9 
        //const prompt=require('prompt-sync')();
        // let a= prompt("What is your name?>");
        // let b= prompt("What is your age?>");
        // let c= prompt("What is your favorite color?>");
        // console.log(a +  "is"   +   b +  "years old and has" +   c +  "favorite color.");

        
        //que .10
        // setTimeout(()=>{
        
        //     console.log("Hacking wifi....Please wait....")
        // }, 1000)
        
        
        // setTimeout(()=>{
        //     console.log("Fetching username and password.....please wait....")
        // },  2000)
        
        // setTimeout(()=>{
        //     console.log("Hacking Rahul's facebook id....Please wait...")
            
        // }, 3000)
      
        
        //que.11 
        // function myFunction(p1, p2) {
        //     return p1 * p2;
        //   }
        // const result = myFunction(3, 4);
        // console.log(result); // Outputs: 12
    
        //que.12 
        // function myFunction(a, b) {
        //   return a * b;
        // }
        // const x=myFunction(4,3);
        // console.log(x);


        //que.13 
        // function greet(name) {
        //     return `Hello, ${name}!`;
        // }
        
        // const greeting = greet('Alice');
        // console.log(greeting); 


     //que. 14

        //     greet = function(name) {
        //     return `Hello, ${name}!`;
        // };
    
        // const greeting = greet('Alice');
        // console.log(grconsteeting); 

        //que.15
         
        
//         const prompt=require('prompt-sync')();
//         let seat=parseFloat(prompt("Enter the seat number:"));
// if (seat<=100){
//     if (seat<=50){
//         console.log("Left")
//     } else {
//         console.log("Right")
//     }
// }

// que.16
//const prompt=require('prompt-sync')();
//      let seat=parseFloat(prompt("Enter the seat number:"));
//      if (seat<=50){
//         console.log("Left")
//      }else if (seat<=100){
//         console.log("Right")
//      }
   



//que .17
// let str = " ABC";
// let n = str.length;

// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//         if (j != i) {
//             for (let k = 0; k < n; k++) {
//                 if (k != i && k != j) {
//                     for (let l = 0; l < n; l++) {
//                         if (l != i && l != j && l != k) {
//                             console.log(str[i] + str[j] + str[k] + str[l]);
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }



// que. 18
// let problems = [1, 2, 2, 3, 4]; 

// let isNonDecreasing = true;

// for (let i = 1; i < problems.length; i++) {
//     if (problems[i] < problems[i - 1]) {
//         isNonDecreasing = false;
//     }
// }

// console.log(isNonDecreasing);


//que. 19
// const prompt=require('prompt-sync')();
// let x1=parseFloat(prompt("Enter the number:"))
// let y1=parseFloat(prompt("Enter the number:"))
// let x2=parseFloat(prompt("Enter the number:"))
// let y2=parseFloat(prompt("Enter the number:"))
// firststyle=x1+y1;
// secondstyle=x2+y2;
// if (firststyle<secondstyle){
//     console.log(firststyle)
// }else {
//     console.log(secondstyle)
// }



// que. 20
// const prompt=require('prompt-sync')();
// let n=parseFloat(prompt("Enter the number:"))
// if (n%4==0){
//     num=n+1;
//     console.log(num)
// }else {
//     num=n-1
//     console.log(num)
// }


//que. 21
// const prompt=require('prompt-sync')();
// let x=parseFloat(prompt("Enter the rupees:"))
// let coins5=0;
// let coins10=0;
// while(x>=10){
//     coins10++;
//     x=x-10;
// }
// while(x>=5){
//     coins5++;
//     x=x-5;
// }
// if (x!==0){
//     console.log(-1);
// }else {
//     console.log("Number of 5-unit coins:",coins5)
//     console.log(":Number of 10-unit coins:",coins10)
// }



//que. 22

// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// // Function to convert Fahrenheit to Celsius
// function toCelsius(fahrenheit) {
//   return (5/9) * (fahrenheit - 32);
// }

// // Prompt the user for input
// rl.question('Enter temperature in Fahrenheit: ', (input) => {
//     let fahrenheit = parseFloat(input); // Parse the input as a float
//     if (!isNaN(fahrenheit)) {
//         let celsius = toCelsius(fahrenheit);
   

//         console.log(`Temperature in Celsius: ${celsius.toFixed(2)}`);
//     } else {
//         console.log('Please enter a valid number.');
//     }
//     rl.close();
// });


// que. 23
// try{
// throw new ReferenceError("Harry is not good")
// }catch (error){
//     console.log(error.name)
//     console.log(error.message)
// }

//que.24 
// console.log(document.cookie)
// document.cookie="name=harry1122334400"
// document.cookie="name2=harry11223344002"
// document.cookie-="name=hardy"
// console.log(document.cookie)

//que .25

// message="Good Global"
// function hello1(){
//     let message="Good Morning"
//     {
//         let message="Good afternoon"
//         console.log("Hello 1:"+message)
//     }
//     let c=function hello2(){
//         console.log("I am c"+message)
//     }
//     return c
// }
// c=hello1()
// c()

//que .26

// function sum(a,b,c){
//     return a+b+c
// }
// let x=[1,3,5]
// console.log(sum(...x))

// function sub(a,b,c){
//     return a*b-c
// }
// let x=[6,5,2]
// console.log(sub(...x))


//que .27

// const car = {type:"Fiat", model:"500", color:"white"};
// console.log(car)


// const aboutme ={ name:"Anjali", Age:"22", city:"Ujjain"};
// console.log(aboutme)


//que .28
// prompt = require('prompt-sync')();

// function compareNumbers() {
//     let a = parseFloat(prompt("Enter the first number: "));
//     let b = parseFloat(prompt("Enter the second number: "));
    
//     if (a > b) {
//         console.log(a, "is greater");
//     } else if (b > a) {
//         console.log(b, "is greater");
//     } else {
//         console.log("Both numbers are equal");
//     }
// }

// // Call the function to compare numbers
// compareNumbers();

//que 29


// const prompt =require ('prompt-sync')();
// function compareNumbers(){
// let sp=parseFloat(prompt("enter the number:"))
// let cp=parseFloat(prompt ("enter the number:"))
// if (sp>cp){
// profit= (sp-cp )
// profitpercentage = (profit/cp)*100 
//     console.log ("profit percentage",profitpercentage)
// }
//     else {
//         console.log( "Invalid")
// }
// }

// que.30
// const prompt=require('prompt-sync')();
// function meraMun(){
// let l= parseFloat(prompt("enter the number:"))
// let b= parseFloat(prompt("enter the number:"))
// if (l==b){
//     console.log("square")
// }
//     else{
//         console.log("Rectangle")
//     }
// }
// meraMun();

//que. 31

// const prompt=require ('prompt-sync')();
// function divisible(){
// let n=parseFloat(prompt("enter the number:"))
// if (n%7==0){
//     console.log("divisible")
// }
//     else {
//         console.log("not")
//     }
// }
// divisible();

//que.32
// const prompt = require('prompt-sync')();

// function calculateTotalBill() {
//     let u = parseFloat(prompt("Enter the unit: "));
//     let a, Surcharge, Totalbill;

//     if (u <= 50) {
//         a = u * 0.50;
//     } else if (u <= 150) {
//         a = (0.50 * 50) + ((u - 50) * 0.75);
//     } else if (u <= 250) {
//         a = (0.50 * 50) + (100 * 0.75) + ((u - 150) * 1.20);
//     } else {
//         a = (0.50 * 50) + (100 * 0.75) + (100 * 1.20) + ((u - 250) * 1.50);
//     }

//     Surcharge = (a * 20) / 100;
//     Totalbill = Surcharge + a;

//     console.log("Total bill:", Totalbill.toFixed(2), "Base amount:", a.toFixed(2));
// }

// calculateTotalBill();


//que.33

// const prompt=require('prompt-sync')();
// function charge(){
// let n=parseFloat (prompt("Enter the number:"))
// if (n<=5){
//     c=(n*2)
//     console.log("Charge",c)
// }
// else if (n<=10){
//     c=((5*2)+(n-5)*3)
//     console.log("Charge",c)
// }
// else if(n<=15){
//     c=((5*2)+(5*3)+(n-10*4))
//     console.log("Charge",c)
// }
//     else {
//         c=((5*2)+(5*3)+(5*4)+(n-15)*5)
//         console.log("Charge",c)
//     }
// }
// charge();

//que.34
//// function charge(){
// let n=parseFloat (prompt("Enter the number:"))
// if (n<=5){
//     c=(n*2)
//     console.log("Charge",c)
// }
// else if (n<=10){
//     c=((5*2)+(n-5)*3)
//     console.log("Charge",c)
// }
// else if(n<=15){
//     c=((5*2)+(5*3)+(n-10*4))
//     console.log("Charge",c)
// }
//     else {
//         c=((5*2)+(5*3)+(5*4)+(n-15)*5)
//         console.log("Charge",c)
//     }
// }
// charge();
//que .35 

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
//   };
  
//   delete person.age;  // Deletes the age property from the person object
  
//   console.log(person);  // Logs the person object to the console


//que .36

// const family={
//     name: "Anjali",
//     fatherName: "Arjun",
//     mumma: "Madhu",
//     broandsis: "Shinu and vishu",
//     nanuandnani: "Radheshyam shyamu",
//     family: "patidar"
    
// };
// delete family.family;
// console.log(family)

//que. 37
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   };

//   console.log(person)

//que. 38 Lower Case


// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     name: function() {
//       return (this.firstName + " " + this.lastName).toLowerCase();
//     }
//   };
  
//   console.log(person.name());


//que.39 Upper Case

// const medicine={
//     bodypain: 'combiflame',
//     fever: 'dolo 650',
//     stomach: 'maftal spas',
//     medicine: function(){
//         return (this.bodypain +" "+ this.fever + " " + this.stomach +" " + this.medicine).toUpperCase();
//

//que 40.
// function parkingCharge(X, Y, H) {
//     let totalCharge;
//     if (H === 1) {
//         totalCharge = X;
//     } else {
//         totalCharge = X + (H - 1) * Y;
//     }
//     console.log(totalCharge);
// }

// // Example usage with predefined input values
// const X = 10;
// const Y = 1;
// const H = 5;
// parkingCharge(X, Y, H); 

//que. 41
// const prompt = require('prompt-sync')();

// function parkingCharge() {
//     let X = parseFloat(prompt("Enter the value of X: "));
//     let Y = parseFloat(prompt("Enter the value of Y: "));
//     let H = parseFloat(prompt("Enter the value of H: "));

//     let totalCharge;
//     if (H === 1) {
//         totalCharge = X;
//     } else {
//         totalCharge = X + (H - 1) * Y;
//     }

//     console.log(totalCharge);
// }

// parkingCharge();





























