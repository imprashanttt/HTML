let a=prompt("Enter your Number:-");
let b=prompt("Enter your Operator:-");
let c=prompt("Enter your  2nd Number:-");
const obj={
    "+":"-",
    "-":"*",
    "*":"/",
    "/":"**"
}
let random=Math.random();
console.log(random);
if(random > 0.1){
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`);
}
else{
    c=obj[c];
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`);
    
}
