

//Iniciar juego
var divMessage = document.getElementById("container-message");
var contenedorJuegoUno = document.getElementById("containerGameOne");
var contenedorJuegoDos = document.getElementById("containerGameTwo");
var contenedorJuegoTres = document.getElementById("containerGameThree");


function ocultarDiv(id) {
    id.style.display = "none";
}

function showDiv(id) {
    id.style.display = "block";
}



function showComparative(originalImage, comparativeImage){
     originalImage.style.display = "none";
     comparativeImage.style.display = "block";
}

function firstScene() {
    let imageOne = document.getElementById('firstImageGameOne');
    let imageComparative = document.getElementById('imageComparativeOne');

    showDiv(imageOne);
    setTimeout(function () {
        showComparative(imageOne, imageComparative)
    }, 10000);
}

function secondScene() {
    let imageOne = document.getElementById('firstImageGameTwo');
    let imageComparative = document.getElementById('imageComparativeTwo');
    showDiv(imageOne);
    setTimeout(function () {
        showComparative(imageOne, imageComparative)
    }, 10000);
}

function thirdScene() {
    let  imageOne= document.getElementById('firstImageGameThree');
    let imageComparative = document.getElementById('imageComparativeThree');
    showDiv(imageOne);
    setTimeout(function () {
        showComparative(imageOne, imageComparative)
    }, 10000);
}


function IniciarJuego() {
    let valorAleatorio = Math.floor(Math.random() * (4 - 1)) + 1;
    ocultarDiv(divMessage);

    if (valorAleatorio === 1) {
        ocultarDiv(contenedorJuegoDos);
        ocultarDiv(contenedorJuegoTres);
        showDiv(contenedorJuegoUno);
        firstScene();

    } else if (valorAleatorio === 2) {
        ocultarDiv(contenedorJuegoUno);
        ocultarDiv(contenedorJuegoTres);
        showDiv(contenedorJuegoDos);
        secondScene();

    } else if (valorAleatorio === 3) {
        ocultarDiv(contenedorJuegoUno);
        ocultarDiv(contenedorJuegoDos);
        showDiv(contenedorJuegoTres);
        thirdScene();
    }
}

function redirigirVideo(){
    alert("Redirigiendo al video.")
}

function comprobar(id){

   // let radios = document.querySelectorAll(".radioB");

    let radioSceneOne1 = document.getElementById("radio1");
    let radioSceneOne2 = document.getElementById("radio2");
    let radioSceneTwo1 = document.getElementById("radio3");
    let radioSceneTwo2 = document.getElementById("radio4");
    let radioSecenThree1 = document.getElementById("radio5");
    let radioSceneThree2 = document.getElementById("radio6");

     switch(id){
         case "buttonOneGame":
      
         if(radioSceneOne1.checked === true){
            Swal.fire(
                'Felicidades!',
                'Ganaste: Gotas oftálmicas!',
                'success'
            )

            redirigirVideo();
         }else{
             
           

            Swal.fire({
                title: 'Error',
                text: "Lo siento intentalo de nuevo",
                icon: 'error',
                confirmButtonColor: '#d33',
                confirmButtonText: 'Aceptar'
              }).then((result) => {
                if (result.isConfirmed) {
                    location.reload()
                }});
           
           
               
         }

        

         break;

         case "buttonSecondGame":
         
             if(radioSceneTwo2.checked === true){
                Swal.fire(
                    'Felicidades!',
                    'Ganaste: kit de limpieza para tus lentes!',
                    'success'
                )

                redirigirVideo();
             }else{

                Swal.fire({
                    title: 'Error',
                    text: "Lo siento intentalo de nuevo",
                    icon: 'error',
                    confirmButtonColor: '#d33',
                    confirmButtonText: 'Aceptar'
                  }).then((result) => {
                    if (result.isConfirmed) {
                        location.reload()
                }});
             }

           
         break;


         case "buttonThirdGame":
            
            if(radioSecenThree1.checked === true){
                Swal.fire({
                    title: 'Felicidades',
                    text: "Ganaste: accesorios para tus gafas!",
                    icon: 'success',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'Aceptar'
                  }).then((result) => {
                    if (result.isConfirmed) {
                        video();
                    }});

                redirigirVideo();
               
             }else{
                Swal.fire({
                    title: 'Error',
                    text: "Lo siento intentalo de nuevo",
                    icon: 'error',
                    confirmButtonColor: '#d33',
                    confirmButtonText: 'Aceptar'
                  }).then((result) => {
                    if (result.isConfirmed) {
                        location.reload()
                    }});
             }

           
         break;

         
     }
    
 
    
}


function video(){
   
    let videoLink = "videos.html";
    window.location.href = videoLink;
    alert("hola")
    console.log(videoLink)
    let valorAleatorio = Math.floor(Math.random() * (8 - 1) + 1);
    let divMostrar = document.getElementById("videoContainer"+valorAleatorio)
    alert(divMostrar)
    divMostrar.style.display = "block"
}