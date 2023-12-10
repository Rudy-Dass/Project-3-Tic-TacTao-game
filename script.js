console.log("Hello");
let music=new Audio("music.mp3");//Background music
let turn=new Audio("ting.mp3");
let gameover=new Audio("gameover.mp3");
let t="X";//variable to specify which player rturn 0 or X
let isgameover=false;
const changeturn=() =>{
    return t==="X"?"0":"X" 
}
const checkwin=()=>{
    //It is the main function for the winning logic
    let boxtext=document.getElementsByClassName("boxtext");
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    wins.forEach(e =>{
        if(boxtext[e[0]].innerText===(boxtext[e[1]].innerText)&&(boxtext[e[2]].innerText)===(boxtext[e[1]].innerText) && boxtext[e[0]].innerText!==""){
            document.querySelector('.info').innerText=boxtext[e[0]].innerText+"Wins";
        document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width='200px';
            isgameover=true;
            //my code
            Array.from(boxtext).forEach(element=>{
                element.innerText="";  
        });
        }
    })

}
//GameLogic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector(".boxtext");
    element.addEventListener('click',()=>{
        if(boxtext.innerText==='')
        {
            boxtext.innerText=t;
            t=changeturn();
            turn.play();
            checkwin();
           if(!isgameover)
           {
            document.getElementsByClassName('info')[0].innerText="Turn for"+t;
           }
        }
    })
})
//An OnClick listener for reset bnutton
reset.addEventListener('click',()=>
{
    let boxtext=document.querySelectorAll(".boxtext");
    Array.from(boxtext).forEach(element=>{
        element.innerText="";  
});
t="X";
isgameover=false;
document.getElementsByClassName('info')[0].innerText="Turn for"+t;
document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width='0';
})