//que.1 Construct a flowchart to find a maximum between 3 numbers.
// const prompt=require('prompt-sync')();
// let a=parseFloat(prompt("Enter the Number:"))
// let b=parseFloat(prompt("Enter the Number:"))
// let c=parseFloat(prompt("Enter the Number:"))
// if(a>b && a>c){
//     console.log(a)
// }
// else if(b>c){
//     console.log(b)
// }
// else{
//     console.log(c)
// }


// que.2 Validate a given year.  
// const prompt =require('prompt-sync')();
// let d=parseFloat(prompt("Enter the Day:"))
// let m=parseFloat(prompt("Enter the month"))
// let Y=parseFloat(prompt("Enter the Year"))
// if(Y>0 ){
//         if( m<=12) {
//               if(m==1|| m==3|| m==5|| m==7|| m==8|| m==10|| m==12 ){
//        if(d<=31){
//         console.log("valid date")
//           }else {("invallid")}

//          } else if(m==2){
//          if(d<=29){
//         console.log("valid date")
//     }else{console.log("invalid")}
//    }else if(m==4,7,11){
//     if(d<=30){
//         console.log("valid date")
//     }else{console.log("invalid")}

// }
//  }   else{console.log("invalid month")}

// }else{console.log("invalid year")}



//que.3 Construct a flowchart to input electricity unit charges. Calculate the total electricity bill according to given condition.
// const prompt=require('prompt-sync')();
// let u=parseFloat(prompt("Enter the unit:"))
// if (u<=50){
//     a=(u*0.50);
//     Surcharge=((a*20)/100)
//     Totalbill=(Surcharge+a)
//     console.log("Total bill",Totalbill,a)}

// else if(u<=150){
// a=((0.50*50)+(u-50)*0.75);
// Surcharge=((a*20)/100)
//     Totalbill=(Surcharge+a)
//     console.log("Total bill",Totalbill,a)

// }else if (u<=250){
// a=((0.50*50)+(100*0.75)+(u-100)*1.20);
// Surcharge=((a*20)/100)
//     Totalbill=(Surcharge+a)
//     console.log("Total bill",Totalbill,a);}

// else if (u>250){
// a=((0.50*50)+(100*0.75)+(100*1.20)+(u-250)*1.50);
// Surcharge=((a*20)/100)
//     Totalbill=(Surcharge+a)
//     console.log("Total bill",Totalbill,a);}


//que.4 Construct a flowchart to calculate the electricity bill according the following criteria.
// const prompt=require('prompt-sync')();
// let u=parseFloat (prompt("Enter the unit:"))
// if (u<=100){
//     console.log("No charge")
// }
// else if(u<=200){
//     B=((u-100)*5)
//     console.log("Bill",B)
// }
// else{
//     B=((100*5)+(u-200)*10)
//     console.log("Bill",B)
// }

//que.5 Accept the age, gender, (M,F), and display the wages accordingly.
// const prompt=require('prompt-sync')();
// let age=parseFloat (prompt("Enter the age:"))
// let sex=parseFloat (prompt("Enter the sex:"))
// let wage=parseFloat (prompt("Enter the wage:"))
// if(age>30 && sex==m ){
//     wage=(D*750)
//     console.log("wage")
// }
// else if 





//que.6 Accept the number of days from the user and calculate the charge for the library according to the following.
// const prompt=require('prompt-sync')();
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


// que.7 You have denominations of rupee notes in the following from 1,2,5,10,20,100,200,500,2000. Take any amounts from the 
// user and print the minimum no. of notes needed to add up to that number.
// const prompt=require('prompt-sync')();
// let a=parseFloat (prompt("Enter the note:"))
// if (a>=2000){
//     n=Math.floor(a/2000)
//     p=(a%2000)
//     console.log("note",n)
// }
// else if (a>=500){
//     n=Math.floor(a/500)
//     p=(a%500)
//     console.log("note",n)
// }
// else if (a>=200){
//     n=Math.floor(a/200)
//     p=(a%200)
//     console.log("note",n)}

//     else if (a>=100){
//         n=Math.floor(a/100)
//         p=(a%100)
//         console.log("note",n)
//     }
//     else if (a>=20){
//         n=Math.floor(a/20)
//         p=(a%20)
//         console.log("note",n)
//     }

//     else if (a>=10){
//         n=Math.floor(a/10)
//         p=(a%10)
//         console.log("note",n)
//     }

//     else if(a>=5){
//         n=Math.floor(a/5)
//         p=(a%5)
//         console.log("note",n)
//     }

//     else if (a>=2){
//         n=Math.floor(a/2)
//         p=(a%2)
//         console.log("note",n)
//     }
//     else if (a>=1){
//         n=Math.floor(a/1)
//         p=(a%1)
//         console,log("note",n)
//     }

//     else{
//         console.log("Invalid")
//     }

// que.8 Construct a flowchart to categorise the shape of a quadilateral as either a square, rhombus, rectanlge, parallelogram
// or irregular quadilateral ,having inputs the length of the four sides and one internal angle.

// const prompt=require('prompt-sync')();
// let a=parseFloat(prompt("Enter the angle:"))
// let b=parseFloat(prompt("Enter the angle:"))
// let c=parseFloat(prompt("Enter the angle:"))
// let d=parseFloat(prompt("Enter the angle:"))
// let angle=parseFloat(prompt("Enter the angle:"))
// if (a==b){
//     if(b==c){
//         if(c===d){
//             if(d==a){
//                 if(angle==90){
//                     console.log("square")
//                 } else{
//                     console.log("rhombus")}
//             } else{
//                 console.log("irregular q")}
//         }   else{
//             console.log("irregular q")}

//     }    else{
//         console.log("irregular q")}

// }else if(a!==b){
//     if(a===c){
//         if(c!==d){
//             if(c===a){
//                 if(angle==90){
//                   console.log("rectangle")
//                 }else(console.log("porallelo"))
//             }
//         }
//     }
// }
//console.log("irregularq q")

// que.9 The grade in a certain class are determined by coursework and a written examination. Both components of assessment
// carry a maximum of 50 points.
// const prompt=require('prompt-sync')();
// let a=parseFloat(prompt("Enter the number:"))
//  let b=parseFloat(prompt("Enter the number:"))
//  if (a>=20){
//     if(b>=20){
//         Total=(a+b)
//         P=((Total/100)*100)
//         if(P>=45){
//             console.log("Pass")
//         }else if (Total>=44){
//             console.log("Moderate")
//         }else{
//             console.log("Technical Fail")
//         }
//          }else{
//             console.log("fail")
//          } 
//  }else{
//     console.log("Fail")
//  }

//que.10 The following rules are used to calculate the bonus for the employees of an organisation .
// const prompt=require('prompt-sync')();
//  let P=parseFloat(prompt("Enter the number:"))
//   if      ( P>3000){
//     Bonus=(300)
//     console.log("Bonus",Bonus)
//  }
//  else if (P>1600 && P<=3000){
//     Bonus=(0.10*P)
//     console.log("Bonus",Bonus)
//  }
//  else if (P<=1600 && P>0){
//     Bonus=(0.15*P)
//     console.log("Bonus",Bonus)
// }
//   else{
//         console.log("Invalid")
//     }

//que.11 A certain steel is graded according to the following conditions.
// const prompt=require('prompt-sync')();
//  let Rc=parseFloat(prompt("Enter the number:"))
//  let Cc=parseFloat(prompt("Enter the number:"))
//  let Ts=parseFloat(prompt("Enter the number:"))
//  if (Rc>50){
//     if(Cc>0.7){
//         if (Ts>5600){
//             console.log("Grade 10")
//         }else {
//             console.log("Grade 9")
//         }
//     }else if (Ts>5600){
//         console.log("Grade 7")
//     }else {
//         console.log("Grade 0")
//     }
//  }else if (Cc>0.7){
//     if (Ts>5600){
//         console.log("Grade 8")

//     }else {
//         console.log("Grade 0")
//     }
//  }
    
 
//que. 12 Find whether a given year is a leap year.
// 

// const prompt=require('prompt-sync')();
//   let Y=parseFloat(prompt("Enter the Year:"))
//   if (Y%4==0){
//     if (Y%100!==0){
//         console.log("Leap Year")
//     }else if (Y%400==0){
//         console.log("Leap Year")
//     }
//   else {
//     console.log ("Not leap year")
//   }
// }else if(Y%400==0) {
//     console.log(" leap year")
//   } else{
//       console.log ("Not leap year")}

//que. 13 In the above question take the first condition as divisibility of year by 100 and construct the flowchart.
// const prompt=require('prompt-sync')();
//  let Y=parseFloat(prompt("Enter the Year:"))
//  if (Y%100==0){
//     console.log("No leap Year")
//  }
//  else if (Y%4==0){
//     console.log("leap Year")
//  } 
//  else {
//     console.log("Not Year")
//  }

//que.14 Year by 400.
// const prompt=require('prompt-sync')();
//  let Y=parseFloat(prompt("Enter the Year:"))
//  if (Y%400==0){
//     if (Y%100==0){
//         console.log("leap year")
//     }else {
//         console.log("Not Leap year")
//     }
//  }else if (Y%4==0){
//      if (Y%100!==0){
//         console.log("leap year")
//     }else {
//         console.log("not leap year")
//     }
//  }else {
//     console.log("not leap year")
//  }


//que.15 Accept three integers representing the angles of a triangle in degrees to determine weather they form a valid set ..
// const prompt=require('prompt-sync')();
//   let a=parseFloat(prompt("Enter the Year:"))
//   let b=parseFloat(prompt("Enter the Year:"))
//   let c=parseFloat(prompt("Enter the Year:"))
// if (a>0){
//     if (b>0){
//         if(c>0){
//             if (a+b+c==180){
//                 if (a==b){
//                     if(b==c){
//                         console.log("Equilateral")
//                     }
//                 }else if (a==90){
//                     console.log("Right Angle")
//                 }else if(b==90){
//                     console.log("Right Angle")
//                 }else if(c==90){
//                     console.log("Right Angle")
                      
                    
//                 }else if (a>90){
//                     console.log("obtuse")
//                 }else if(b>90){
//                     console.log("obtuse")
//                 }else if (c>90){
//                     console.log("obtuse")
//                 }else {
//                     console.log("Acute")
//                 }
//             }else {
//                 console.log("invalid")
//             }

            

//         }else {
//             console.log("Invalid")
//         }
//     }else {
//         console.log("Invalid")
//     }
// }else {
//     console,log("Invalid")
// }

//que. 16 Accept the length of three sides of a triangle to validate whether they can be the sides of a triangle.


















// que .17 Write a programm to check if the given number is divisible by 5 and 11 , both or none.
// const prompt=require('prompt-sync')();
// let n=parseFloat(prompt("Enter the number:"))
// if (n%5==0){
//     if (n%11==0){
//         console.log("Both")
//     }else {
//         console.log("5")
//     }
// }else if (n%11==0){
//     console.log("11")
// }else {
//     console.log("none")
// }


//que.18 Find the second max of three  numbers.
// const prompt=require('prompt-sync')();
//   let a=parseFloat(prompt("Enter the Number:"))
//    let b=parseFloat(prompt("Enter the Number:"))
//   let c=parseFloat(prompt("Enter the Number:"))
//   if (a>b){
//     if (a>c){
//         max=(a)
//         smax=(c)
//         console.log("s",smax)
//     }else{
//         max=(c)
//         smax=(a)
//         console.log("s",smax)
//     }
//   }else if (b>c){
//     max=(b)
//     smax=(c)
//     console.log("s",smax)
//   }else{
//     max=(c)
//     smax=(b)
//     console.log("s",smax)
  //}

//   const prompt=require('prompt-sync')();
//    let a=parseFloat(prompt("Enter the Number:"))
//       let b=parseFloat(prompt("Enter the Number:"))
//       let c=parseFloat(prompt("Enter the Number"))
//       if (a>b){
//         if(a<c){
//             console.log(a)
//         }else if (b>c){
//             console.log(b)
//         }else{
//             console.log(c)

//         }
//         }else if (b<c){
//         console.log(b)
//       }else if(a>c){
//         console.log(a)
//       }else {
//         console.log(c)
//       }

    
//que. 19 Find the second max of 4 numbers .

// const prompt=require('prompt-sync')();
//    let a=parseFloat(prompt("Enter the Number:"))
//    let b=parseFloat(prompt("Enter the Number:"))
//   let c=parseFloat(prompt("Enter the Number:"))
//    let d=parseFloat(prompt("Enter the Number:"))
// if (a>b){
//        max=(a);
//         smax=(b);
//          } else {
//             max=(b);
//         smax=(a);
//         }
       
//     if (c>d){
//         max1=(c);
//         smax1=(d);
//      } else{
//         max1=(d)
//          smax1=(c)
//      }
        
//     if(max>max1){
//     if(max1>smax1){
//         console.log(max1)
//         }else{
//           console.log(smax)
// }
// }else if(max>smax1){
//     console.log(max)
// }else{
//     console.log(smax1)
// }




//que. 20 Find the third max of 4 numbers .
// const prompt=require('prompt-sync')();
//    let a=parseFloat(prompt("Enter the Number:"))
//    let b=parseFloat(prompt("Enter the Number:"))
//    let c=parseFloat(prompt("Enter the Number:"))
//    let d=parseFloat(prompt("Enter the Number:"))
// if (a<b){
//     min=a
//     Smin=b
// }else {
//     min=b
//     Smin=a
    
// }
// if (c>d){
// min1=c
// Smin1=d
// }else {
//     min1=d
//     Smin1=c
// }
// if (min<min1){ 
//     if(min1<Smin){
//         console.log(min1)
//     }else{
//         console.log(Smin)
//     }
// }else if (min<Smin1){
//     console.log(min)
// }else{
//     console.log(Smin1)
// }





const prompt=require('prompt-sync')();
   let a=parseFloat(prompt("Enter the Number:"))
  let b=parseFloat(prompt("Enter the Number:"))
 let c=parseFloat(prompt("Enter the Number:"))
    let d=parseFloat(prompt("Enter the Number:"))
if (a>b){
    max=a
    Smax=b
}else {
    max=b
    Smax=a
}
if (c>max){
    Smax=(max)
    max=c
    }else {
        Smax=c
        console.log(c)
    }
if (d>max){
    Smax=(max)
    max=d
}else {
    Smax=d
    console.log(d)
}



































































































