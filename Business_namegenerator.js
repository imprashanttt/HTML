// SAAS product namegenerator;

let shopName = "Engine";
let shopName1 = "foods";
let shopName2 = "Garments";
let twistWord = "Bros";
let twistWord1 = "limited";
let twistWord2 = "HUb";
let rand=Math.random();
let first, second,third;
if (rand < 0.33) {
    first= "carzy";
    



    
}
else if (rand<=0.66 && rand>=.33) {
    first="amazing";
    
    
}
else {
    first="fire";

   
    
}  
rand=Math.random() ;
if (rand < 0.33) {
    second="Engine";
    



    
}
else if (rand<=0.66 && rand>=.33) {
    second="food";
    
    
}
else {
   second="Garment";
    
}   
rand=Math.random();
if (rand < 0.33) {
    third="Bros";



    
}
else if (rand<=0.66 && rand>=.33) {
   third="limited";
    
    
}
else {
    third="Hub"

    
}   
console.log(`${first}${second}${third}`)
        

