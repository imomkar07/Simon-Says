let gameseq = [];
let userseq = [];
let Highscore = 0 ;

let started = false ;
let level = 0;

let h2 = document.querySelector("h2");
let btns = ["red","yellow","green","purple"];

document.addEventListener("keypress", function (){
    if(started == false)
    {
        console.log("Game started");
        started = true ;
        levelup();
    } 
});

function levelup()
{
    userseq =[];
    level++;
    h2.innerText = `Level ${level}`;

    let randnum = Math.floor(Math.random() * 4);
    let randcolor = btns[randnum];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    gameflash(randbtn);
}

function  gameflash(btn)
{
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    },250);
}

function  userflash(btn)
{
    btn.classList.add("userflash");
    setTimeout(function (){
        btn.classList.remove("userflash");
    },250);
}

function checkAns(idx)
{
    if(userseq[idx] === gameseq[idx])
    {
        if(userseq.length == gameseq.length)
        {
            setTimeout(levelup , 1000);
        }
    }else{
        h2.innerHTML = `Gameover ,<b> Your Score is ${level}</b> <br>Press any key to start`;
        setTimeout(reset , 1000);
    }
}

function btnPress (){
    let btn = this;
    userflash(btn);
    userColor = btn.getAttribute("id");
    userseq.push(userColor);
    console.log(userseq);
    checkAns(userseq.length -1);
}


let allBtns = document.querySelectorAll(".btn");
for (const btn of allBtns) {
    btn.addEventListener("click",btnPress);
}

function reset ()
{
    high = document.querySelector(".highscore");
    if(Highscore <= level)
    {
        Highscore = level;
    }
    high.innerText = `HighScore = ${Highscore}`;
    started = false;
    gameseq = [];
    userseq = [];
    level = 0 ;
}
