let boxes = document.querySelectorAll(".box");
let game = document.querySelector(".gamebox");
let reset = document.querySelector("audio")
let restart = document.querySelector(".reset")
let val = true;
let winChance = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]

]
let show = document.querySelector(".msg");

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("button was clicked");
        if (val) {
            document.querySelector(".box").style.transform="scale(1)";
            document.querySelector(".audio").play();
            box.innerText = "O";
            val = false;
            box.disabled = true;
        }
        else {
            
            document.querySelector(".box").style.transform="scale(1)";
            document.querySelector(".audio2").play();
            box.innerText = "X";
            val = true;
            box.disabled = true;
        }
        winProbability();

    })
});
console.log(show);
restart.addEventListener("click", () => {
    location.reload();
    reset.play();
})
let winProbability = () => {
    for (let value of winChance) {
        let probable = boxes[value[0]].innerText;
        let probable1 = boxes[value[1]].innerText;
        let probable2 = boxes[value[2]].innerText;

        if (probable != "" && probable1 != "" && probable2 != "") {

            if (probable === probable1 && probable1 === probable2) {
                console.log("Winner is ", probable);
                let showmsg = () => {

                    game.style.display = "none";
                    show.innerText = "CONGRATULATION! YOU WON THE GAME"

                }
                showmsg();
            }



        }
    }
}