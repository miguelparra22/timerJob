window.addEventListener('load', (event) => {
    let valorAleatorio = Math.floor(Math.random() * (8 - 1) + 1);
    let divMostrar = document.getElementById("videoContainer" + valorAleatorio)
    divMostrar.style.display = "block"
});

function playVideo(id){
   video = document.getElementById(id);
   video.play();
}

function pauseVideo(id){
    video = document.getElementById(id);
   video.pause();
    
}

function home(){
    let home = "index.html";
    window.location.href = home;
}