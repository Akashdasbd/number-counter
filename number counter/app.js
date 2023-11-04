const go = document.getElementById('go');
const stop = document.getElementById('stop');
const text = document.getElementById('add');
const reset = document.getElementById('reset');
const start = document.getElementById('Start');
const inprt = document.getElementById('input');
const inputText = document.getElementById('inputText');
const procasbar = document.querySelector('.procasbar');



let counter = 0;
let conterset;


go.addEventListener('click', function() {
    conterset = setInterval(() => {
        go.style.pointerEvents = 'none'
        text.innerHTML = counter;
        counter++;

    }, 1000);
});

stop.addEventListener('click', function() {
    clearInterval(conterset);
    go.style.pointerEvents = 'auto';

});
reset.addEventListener('click', function() {
    counter = 0;
    text.innerHTML = counter;
    clearInterval(conterset);
    go.style.pointerEvents = 'auto';

});


let contorValo;

let contorvaloInt;


start.addEventListener('click', function() {
    contorValo = inprt.value;

    contorvaloInt = setInterval(() => {
        inputText.innerHTML = contorValo;
        start.style.pointerEvents = 'none';
        let widthe = whitecal(inprt.value, contorValo);

        procasbar.style.width = `${widthe}%`;

        if (widthe > 80 && widthe <= 100) {
            procasbar.style.backgroundColor = 'green';




        } else if (widthe > 60 && widthe <= 80) {
            procasbar.style.backgroundColor = 'yellow';

        } else if (widthe > 50 && widthe <= 60) {
            procasbar.style.backgroundColor = 'aquamarine';

        } else if (widthe > 30 && widthe <= 50) {
            procasbar.style.backgroundColor = 'indianred';


        } else {
            procasbar.style.backgroundColor = 'red';
        };




        if (contorValo == 0) {
            clearInterval(contorvaloInt)
            start.style.pointerEvents = 'auto'
        }
        contorValo--;

    }, 1000);

})