
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
    for (let i=0; i<answer.length; i++){
        document.getElementById("hint").innerText += " _";
    }
    console.log(document.getElementById("hint").innerText);
}






// アルファベットボタンとBSボタンを押したときの処理
// 予想が正しいかの判定
function checkAnswer(val){
    for (let i=0; i<answer.length; i++){
        if(val == answer.substr(i,1)){
            console.log(val);
        }
    }

}

function reset(){
    setAnswer();
    hint();
}


// メインの処理
setAnswer();
hint();