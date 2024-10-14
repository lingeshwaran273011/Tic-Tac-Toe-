let boxes = document.querySelectorAll(".num");
let turn = "X";
let GameOver = false;


boxes.forEach(e =>{
    e.innerHTML=""
    e.addEventListener("click", ()=>{
        if(!GameOver && e.innerHTML ===""){
            e.innerHTML =turn;
            cheakWin()
            cheakturn()
            cheakDraw()
        }
    })
})



function cheakturn(){
    if(turn ==="X"){
        turn = "O"
    document.querySelector(".as").style.left = "80px"
    }
    else{
        turn = "X"
    document.querySelector(".as").style.left = "0"
    }
}


function cheakWin(){
    let winer =[
        [0 , 1, 2], [3 , 4 , 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]
    for (let i = 0; i<winer.length; i++){
        let v0 = boxes[winer[i][0]].innerHTML;
        let v1 = boxes[winer[i][1]].innerHTML;
        let v2 = boxes[winer[i][2]].innerHTML;
        
        if(v0 != "" && v0=== v1 && v0 === v2){
            GameOver = turn;
            document.querySelector("#result").innerHTML = turn + "win"
            document.querySelector("#playagine").style.display = "inline"

            for(j = 0; j<3; j++){
                boxes[winer[i][j]].style.backgroundColor = "#08D9D6"
                boxes[winer[i][j]].style.color = "#000"
            }
        }
    }
}


function cheakDraw(){
    if(!GameOver){
        let isDraw = turn
        boxes.forEach(e =>{
            if (e.innerHTML ==="") isDraw = false;
        })

        if(isDraw){
            GameOver = turn;
            document.querySelector("#result").innerHTML ="Draw"
            document.querySelector("#playagine").style.display = "inline"
        }

    }
}

document.querySelector("#playagine").addEventListener("click", ()=>{
    GameOver = false;
    turn = "X";
    document.querySelector(".as").style.left= "0";
    document.querySelector("#result").innerHTML = "";
    document.querySelector("#playagine").style.display = "none";


    boxes.forEach(e =>{
        e.innerHTML = "";
        e.style.removeProperty("background-Color");
        e.style.color ="#fff";  
    })
})