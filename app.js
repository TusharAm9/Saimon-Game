let gameQ=[];
let userQ=[];

let color=["red","yellow","blue","green"];

let gameStatus= false;
let level=0;

document.addEventListener("keypress",function(){
    if(gameStatus==false){
        gameStatus=true;
        levelUp();
    }
    
})
function flashBtn(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },300);
}
function cheeckAns(index){
    if(userQ[index]==gameQ[index]){
        if(userQ.length==gameQ.length){
            setTimeout(levelUp,1500);
        }
    }else{
        let h2=document.querySelector("h2");
        h2.innerHTML=`Game Over!, Your score is <b> ${level} </b> <br>Press any key to Start`;
        reset();
    }
}


function levelUp(){
    userQ=[];
    level++
    let h2=document.querySelector("h2");

    let randomChoice=Math.floor(Math.random() * 4 );
    let randomColor = color[randomChoice];
    let randomBtn=document.querySelector(`.${randomColor}`);
    gameQ.push(randomColor);
    console.log(gameQ);
    flashBtn(randomBtn);

    h2.innerText=`Level ${level}`;
}

function btnPress(){
    let btn=this;
    flashBtn(btn);
    userInp=btn.getAttribute("id");
    userQ.push(userInp);
    let index=userQ.length-1;
    cheeckAns(index);
}

let btns=document.querySelectorAll(".btn");
for(btn of btns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    gameStatus= false;
    gameQ=[];
    userQ=[];
    level=0;
}