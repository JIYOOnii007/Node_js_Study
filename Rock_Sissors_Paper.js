// 가위바위보 게임 (computer, player) , 1 : 가위/ 2: 바위/ 3: 보
// 비기는 경우 : 3경우 (1,1)(2,2)(3,3)
// (내가)지는 경우 (1,3)(2,1)(3,2)
// (내가)이기는 경우 (1,2)(2,3)(3,1)

const { appendFile } = require("fs");
const readline = require("readline"); //입력 모듈
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

var com = randomeplay();
//console.log(num_to_string(com));
var player;
var computer;

rl.question('가위, 바위 ,보 중 하나를 입력하세요: ', (answer) => {
    player = string_to_num(answer);
    if(answer == "가위")
        answer = '가위✂️'
    else if(answer == "바위")
        answer = '바위 🪨'
    else answer = '보✋'

    if(num_to_string(com) == "가위")
        computer = '가위✂️'
    else if(num_to_string(com) == "바위")
        computer = '바위🪨'
    else computer = '보✋'

    console.log(`Computer : ${computer}\nPlayer : ${answer}`);
    play(com, player);
    rl.close();
});

function randomeplay(){
    return Math.floor(Math.random()*3)+1; //1 2 3
}

function string_to_num(input){
    if(input == "가위")
        return 1;
    else if(input == "바위")
        return 2;
    else
        return 3;
}

function num_to_string(input){
    if(input == 1)
        return '가위';
    else if(input == 2)
        return '바위';
    else
        return '보';
}

function play(a, b){
    if(a == b)
        console.log("무승부입니다.");
    else if((a == 1 && b == 3) || (a == 2 && b == 1) || (a == 3 && b == 2))
        console.log("You lose");
    else
        console.log("You win");
}
