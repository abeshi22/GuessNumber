
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let answer = 0;
let turn = 0;
let rader = new Array(100);


function drawRader(){
    for(let i=0; i<100 ;i++){
        if(rader[i]==true){
            ctx.beginPath();
            ctx.rect(5*i+10,20,4,30);
            ctx.fillStyle = "#00ff00";
            ctx.fill();
            ctx.closePath();
        }
    }
    ctx.font = "16px Arial";
    ctx.fillStyle = "#000000";
    ctx.fillText("0", 5, 15);
    ctx.fillText("99",500,15);
}

// 答えの設定
function setAnswer(){
    answer = Math.floor(Math.random()*100);
    turn = 0;
    for (let i=0; i<100; i++){
        rader[i] = true;
    }
}


function hint(){
    document.getElementById("hint").innerText = "答えを設定しました。\n";
}

// 数字ボタンとBSボタンを押したときの処理
function push(val){
        let temp = document.getElementById("input_answer").value;
    if(val=="bs"){
        if(temp.length==1){
            document.getElementById("input_answer").value = "";
        }else if(temp.length==2){
            document.getElementById("input_answer").value = temp.substr(0,1);
        }
    }else if(temp.length>1){
        alert("答えは0～99です")
    }else{
        document.getElementById("input_answer").value += val;
    }
}

// 決定ボタンを押したときの処理
// 予想が正しいかの判定
function guessNumber(){
    if(document.getElementById("input_answer").value == ""){
        alert("答えを入力してください");
    }else if(isNaN(document.getElementById("input_answer").value)){
        alert("答えには数字を入力してください");
        document.getElementById("input_answer").value = "";
    }else{
        var guess = Number(document.getElementById("input_answer").value);
        turn++;
        if(guess < answer){
            document.getElementById("hint").innerText += ("答えは" + guess + "より大きいです。\n");
            for(let i=0; i<=guess; i++){rader[i]=false;}
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawRader();
            document.getElementById("input_answer").value = "";
            document.getElementById("hint").scrollTo(0, document.getElementById("hint").scrollHeight);
        }else if(guess > answer){
            document.getElementById("hint").innerText += ("答えは" + guess + "より小さいです。\n");
            for(let i=guess; i<100; i++){rader[i]=false;}
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawRader();
            document.getElementById("input_answer").value = "";
            document.getElementById("hint").scrollTo(0, document.getElementById("hint").scrollHeight);
        }else{
            document.getElementById("hint").innerText += ("あたり！" + turn + "回目で正解です！");
            document.getElementById("hint").scrollTo(0, document.getElementById("hint").scrollHeight);
        }
    }
    
}

function reset(){
    setAnswer();
    drawRader();
    hint();
    document.getElementById("input_answer").value = "";
}


// メインの処理
setAnswer();
drawRader();
hint();