
const prompt=require('prompt-sync')();
function charge(){
let n=parseFloat (prompt("Enter the number:"))
if (n<=5){
    c=(n*2)
    console.log("Charge",c)
}
else if (n<=10){
    c=((5*2)+(n-5)*3)
    console.log("Charge",c)
}
else if(n<=15){
    c=((5*2)+(5*3)+(n-10*4))
    console.log("Charge",c)
}
    else {
        c=((5*2)+(5*3)+(5*4)+(n-15)*5)
        console.log("Charge",c)
    }
}
charge();












