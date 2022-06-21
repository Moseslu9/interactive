let button1 = document.getElementById('button-1');
let button2 = document.getElementById('button-2');
let button3 = document.getElementById('button-3');
let button4 = document.getElementById('button-4');
let button5 = document.getElementById('button-5');
let submit = document.getElementById('submit');
let output = document.getElementById('output');
let thanks = document.getElementById('thanks-card');
let main = document.getElementById('main-card');





button1.addEventListener('click', clickfunction);
button2.addEventListener('click', clickfunction);
button3.addEventListener('click', clickfunction);
button4.addEventListener('click', clickfunction);
button5.addEventListener('click', clickfunction);
button1.addEventListener('mouseover', hoverfunction);
button2.addEventListener('mouseover', hoverfunction);
button3.addEventListener('mouseover', hoverfunction);
button4.addEventListener('mouseover', hoverfunction);
button5.addEventListener('mouseover', hoverfunction);


function hoverfunction (e) {
    document.querySelector('#'+e.target.id).style.backgroundColor = 'grey';
}


let button = document.getElementsByClassName('button')
function reset () {
    for (i=0;i<button.length;i++)
    button[i].style.backgroundColor = 'hsl(218, 13%, 24%)';
}

function clickfunction (e) {
    reset()
    document.querySelector('#'+e.target.id).style.backgroundColor = 'orange';
    document.querySelector('#'+e.target.id).style.color = 'white';
    const buttonclicked = e.target.value;
    submit.addEventListener('click', submitfunction);
    function submitfunction () {
        thanks.style.display = 'flex';
        main.style.display = 'none';
        output.textContent = 'You selected '+buttonclicked+' out of 5';
    }
}