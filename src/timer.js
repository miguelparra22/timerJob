const timeStart = 1;
let time = timeStart * 60;

const countDown = document.getElementById("tiempo");

const alarma = new Audio('./Assets/sounds/alarm.mp3');


function iniciarTiempo(){
    
    setInterval(updateCountdown, 1000);

}


function updateCountdown(){
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    const buttonDetener = document.getElementById("detener");
    countDown.innerHTML = `${minutes}: ${seconds}`;
    const btn = document.getElementById("work");

    btn.style.display ="none"
    
    if(time === 0){
        clearInterval(updateCountdown);
        alarma.play();
        buttonDetener.style.display = "block"
        

    }else{
        time--;
    }

}

function pauseSound(){
    alarma.pause();
    redireccion();
}

function redireccion()
{
    let valorAleatorio = Math.floor(Math.random() * (4 - 1) + 1);
    let gameOne = 'juego1.html';
    let gameTwo = 'juego2.html';
    let gameThree = 'juego3.html';

    switch (valorAleatorio) {
        case 1:
            window.location.href = gameOne
        break;

        case 2:
            window.location.href = gameTwo
        break;

        case 3:
            window.location.href = gameThree
        break;
    
    }
}


