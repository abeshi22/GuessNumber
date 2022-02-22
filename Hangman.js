
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let answer = "";            //正解の単語
let correctAnswer = false;  //解答状況フラグ
let alphabet = "";          //未使用文字
let mistakeCount = 0;       //誤答回数

let answerWord = ["BOY", "CAT", "FOX", "HAT", "TEN", 
                "BABY", "GIRL", "HEAT", "LION", "WOLF", 
                "TIGER", "ZEBRA", 
                "FATHER", "MOTHER", 
                "PENGUIN", 
                "ELEPHANT"
                ];


// 答えの設定
function setAnswer(){
    answer = answerWord[Math.floor(Math.random()*answerWord.length)];
    console.log(answer);
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