let round = 1;
let punch_cnt = 0;
let punch_cnt_display = document.getElementById("punch_cnt");

let rat_life = 3;
let rat = document.getElementById("rat");
let rat_move = ['sprites/rat/rat_move1.png', 'sprites/rat/rat_move2.png', 'sprites/rat/rat_move3.png', 'sprites/rat/rat_move4.png'];
let rat_currMove = 0;

let yes_btn = document.getElementById("yes_btn");
let no_btn = document.getElementById("no_btn");

let question_page = document.getElementById("question_page");
let punch_game = document.getElementById("punch_game");
let punch_btn = document.getElementById("punch_btn");

let timer = document.getElementById("timer");

yes_btn.addEventListener('click', function() {
    if (rat_life>0){
        ratMove();
    }
    else{
        window.location.href = 'gift.html';
    }
});
no_btn.addEventListener('click', function(){
    question_page.style.display = 'none';
    gift.style.display = 'block';
})

function ratMove(){
    rat.style.display = 'block';
    
    let frameInterval = setInterval(function() {
        rat_currMove = (rat_currMove + 1) % 4;
        rat.src = rat_move[rat_currMove];
    }, 100);
}