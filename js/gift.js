let gift_box = document.getElementById('gift_box');
let gift_box_anim = ['sprites/gift_box/gift_box1.png', 'sprites/gift_box/gift_box2.png', 'sprites/gift_box/gift_box3.png', 'sprites/gift_box/gift_box4.png']

let envelope = document.getElementById('envelope');
let card_opened = document.getElementById('card_opened');
let card_closed = document.getElementById('card_closed');  // closed card
let overlay = document.getElementById('overlay');

let replay_btn = document.getElementById('replay_btn');

gift_box.style.pointerEvents = 'auto';
gift_box.addEventListener('click', function() {
    for (let i = 0; i < gift_box_anim.length; i++){
        setTimeout(function() {
            gift_box.src = gift_box_anim[i];
        }, i * 150);
    }

    setTimeout(function() {
        envelope.style.display = 'block';
        setTimeout(function() {
            envelope.classList.add('show');  // Trigger grow animation
        }, 50);
        gift_box.style.pointerEvents = 'none';
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
    card_opened.style.display = 'none';
    envelope.style.display = 'block';
});

replay_btn.addEventListener('click', function() {
    window.location.href = 'index.html';  // Go back to start
});
