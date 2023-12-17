// val.onclick = () => {
//     document.body.style.backgroundColor="black";
//     console.log("This container was used or clicked by user");
// }
// val.addEventListener("click", () => {
    //     console.log("This event is used");
    //     document.body.style.backgroundColor = "grey";
    // });
    
    
// let val = document.querySelector(".container");
// let va=document.querySelector("#box");
// va.addEventListener("click",()=>{
//     va.style.backgroundColor="black";
//     val.style.backgroundColor="black";
//     va.style.color="white";
//     va.innerText="lotrdfdgfgdfgfdgfgfggggfggdfgdfgfgggfgdgfgdfgdfgdfgfgdfgfwho";
//     val.innerText="Hello How are you";
// });





let btn=document.querySelector("#btn1");
let color=document.querySelector("body");
let d="white";
console.log(d);
btn.addEventListener("click",()=>{
    if(d==="white"){
        d="black";
        
        
        color.classList.add("black");
        color.classList.remove("white");
    }
    else{
        d="white";
       
        color.classList.add("white");
        color.classList.remove("black")

    }
    console.log(d)

})








