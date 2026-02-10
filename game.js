let round = 1;
let punch_cnt = 0;
let punch_cnt_display = document.getElementById("punch_cnt");
let punch_required = [8, 15, 35];
let time_limit = [1, 2, 5];
let timer_display = document.getElementById("timer");
let startTime = null;
let checkTimer = null;
let rat_punch = document.getElementById("rat_punch");

let hearts = [
    document.getElementById("heart1"),
    document.getElementById("heart2"),
    document.getElementById("heart3")
];

let rat_life = 3;
let rat = document.getElementById("rat");
let rat_move = ['sprites/rat/rat_move1.png', 'sprites/rat/rat_move2.png', 'sprites/rat/rat_move3.png', 'sprites/rat/rat_move4.png'];
let rat_currMove = 0;
let yes_anim = document.getElementById("yes_anim");
let yes_anim_frames = ['sprites/yes_btn/yes_btn1.png', 'sprites/yes_btn/yes_btn2.png', 'sprites/yes_btn/yes_btn3.png', 'sprites/yes_btn/yes_btn4.png', 'sprites/yes_btn/yes_btn5.png'];

let yes_btn = document.getElementById("yes_btn");
let no_btn = document.getElementById("no_btn");
let punch_btn = document.getElementById("punch_btn");
let try_again = document.getElementById("try_again");

let question_page = document.getElementById("question_page");
let punch_game = document.getElementById("punch_game");

yes_btn.addEventListener('click', function() {
    if (rat_life>0){
        yes_btn.style.visibility = 'hidden';  // Hide real button
        yes_anim.style.display = 'block';
        yes_anim.src = yes_anim_frames[0];
        ratMove();
    }
    else{
        window.location.href = 'gift.html';
    }
});
no_btn.addEventListener('click', function(){
    question_page.style.display = 'none';
    punch_game.style.display = 'block';
    
    rat.style.display = 'none';
    rat_punch.style.display = 'block';
    
    yes_btn.style.visibility = 'visible';
    yes_anim.style.display = 'none';
    
    punch_game_start();
})
punch_btn.addEventListener('click', function(){
    if (startTime === null){
        startTime = Date.now();
        punch_game_start();
    }

    punch_cnt++;
    punch_cnt_display.textContent = punch_cnt + "/" + punch_required[round - 1];

    if (punch_cnt >= punch_required[round - 1]){
        round++;
        rat_life--;
        
        hearts[rat_life].src = 'sprites/heart/heart_damage.png';
        
        if (rat_life === 0){
            no_btn.style.display = 'none';
        }

        punch_game.style.display = 'none';
        question_page.style.display = 'block';
        yes_btn.disabled = false;
        yes_btn.style.visibility = 'visible';
        yes_anim.style.display = 'none';

        clearInterval(checkTimer);
    }

    rat_punch.src = 'sprites/rat/rat_damage.png';

    setTimeout(function() {
        rat_punch.src = 'sprites/rat/rat_move1.png';
    }, 100);
})
try_again.addEventListener('click', function(){
    punch_cnt = 0;
    startTime = null;

    punch_game_start();  // Restart the game
});

function punch_game_start(){
    punch_btn.disabled = false;
    try_again.style.display = 'none';
    punch_cnt_display.textContent = "0/" + punch_required[round - 1];

    if (startTime !== null){
        checkTimer = setInterval(function(){
            let elapsed = (Date.now() - startTime) / 1000;
            timer_display.textContent = "Time: " + (Math.abs((time_limit[round - 1] - elapsed)).toFixed(2)) + "s";

            if (elapsed > time_limit[round - 1]){
                clearInterval(checkTimer);
                punch_btn.disabled = true;
                try_again.style.display = 'block';
            }
        }, 50)
    }
}

function ratMove(){
    yes_btn.disabled = true;
    rat.style.display = 'block';
    
    let startX = 1500;
    let startY = 110
    let targetX = yes_btn.offsetLeft;
    let targetY = 340;

    // console.log("Start X:", startX, "Start Y:", startY);
    // console.log("Target X:", targetX, "Target Y:", targetY);

    let currX = startX;
    let currY = startY;

    let frames = 100;
    let stepX = (targetX - startX) / frames;
    let stepY = (targetY - startY) / frames;

    let currFrame = 0
    // rat move animation
    let frameInterval = setInterval(function() {
        rat_currMove = (rat_currMove + 1) % 4;
        rat.src = rat_move[rat_currMove];
    }, 100);

    let moveInterval = setInterval(function() {
        // rat position change
        currX += stepX;
        currY += stepY;
    
        rat.style.left = currX + 'px';
        rat.style.top = currY + 'px';
        
        currFrame++;

        if (currFrame >= frames){
            clearInterval(frameInterval);
            clearInterval(moveInterval);
            for (let i = 0; i < 5; i++){
                setTimeout(function() {
                    yes_anim.src = yes_anim_frames[i];
                }, i*100);
            }
        }
    }, 30)
}

