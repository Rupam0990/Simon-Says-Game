let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let btns = ["yellow", "red", "purple", "green"];

let h3 = document.querySelector("h3");

let body = document.querySelector("body");

let highestScore = 0;



document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("Game stared");
        started = true;

        levelUp();


    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}



function levelUp() {
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;
    // Random btn choose 
    let randNbr = Math.floor(Math.random() * 4);
    let ranColor = btns[randNbr];
    let btn = document.querySelector(`.${ranColor}`);
    gameSeq.push(ranColor);
    console.log(gameSeq);
    gameFlash(btn);
}

function checkAns(idx)
{
    
    if (gameSeq[idx] === userSeq[idx])
    {
        if(gameSeq.length == userSeq.length )
        {
            setTimeout(levelUp , 1000);
        }

        checkHighest(level);

    }
    else 
    {
        h3.innerHTML = `game over !! your score was<b> ${level} </b>. <br> press any key to start`;
        started = false;
        userSeq = [];
        gameSeq = [];
        level = 0;

        body.style.backgroundColor = "red";
        setTimeout(function (){
                    body.style.backgroundColor = "white";

        },150);
        


    }
}

function checkHighest(level)
{
    if (level > highestScore)
    {
        highestScore = level;
        highScore.innerHTML = `Highest Score : <b> ${highestScore} </b>`;
    }
}


function btnPressed()
{
    let btn = this;
    userFlash(btn);
    let userColor = btn.id;
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
    
} 

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns)
{
    btn.addEventListener("click",btnPressed);
}

let highScore = document.querySelector(".high-score");



