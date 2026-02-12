let gift_box = document.getElementById('gift_box');
let gift_box_anim = ['sprites/gift_box/gift_box1.png', 'sprites/gift_box/gift_box2.png', 'sprites/gift_box/gift_box3.png', 'sprites/gift_box/gift_box4.png']

let envelope = document.getElementById('envelope');
let card_opened = document.getElementById('card_inside');
let card_closed = document.getElementById('card_closed');  // closed card
let overlay = document.getElementById('overlay');


gift_box.addEventListener('click', function() {
    for (let i = 0; i < gift_box_anim.length; i++){
        setTimeout(function() {
            gift_box.src = gift_box_anim[i];
        }, i * 150);
    }

    setTimeout(function() {
        card.style.display = 'block';
        setTimeout(function() {
            card.classList.add('show');  // Trigger grow animation
        }, 50);
    }, gift_box_anim.length * 100);

})

envelope.addEventListener('click', function() {
    overlay.style.display = 'block';
    envelope.style.display = 'none';
    card_opened.style.display = 'block';
});

// Click overlay to close
overlay.addEventListener('click', function() {
    overlay.style.display = 'none';
    card_inside.style.display = 'none';
    card.style.display = 'block';
});

document.getElementById('replay_btn').addEventListener('click', function() {
    window.location.href = 'index.html';  // Go back to start
});
