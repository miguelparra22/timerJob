
//Declaracion de los codigos del teclado.
const arriba = 38;
const abajo = 40;
const izquierda = 37;
const derecha = 39;
//Escenarios.
const escenarioUno = document.getElementById("containerGameOne");
const escenarioDos = document.getElementById("containerGameTwo");
const escenarioTres = document.getElementById("containerGameThree");
const divMessage = document.getElementById("container-message")


//Declaracion clase combo.
class Combo {
    constructor(cadena) {

        this.botones;
        this.indice = 0;
        this.codigoBoton;
        this.tiempoPermitido = 5000;
        this.tiempoUltimaPulsación;  // hara
        this.botones = cadena;  //Asignacion de teclas al Array
    }
    //Metodo llamada al pulsar una tecla.
    pulsada(codigo) {
        var exito = false;
        this.codigoBoton = codigo;
        var hora = new Date();
        hora = hora.getTime()
        //comparar hora
        if (hora > this.tiempoUltimaPulsación + this.tiempoPermitido) {
            this.indice = 0;
        }
        //si hay botones por revisar.
        if (this.indice < this.botones.length) {
            //miramos si la tecla pulsda corresponde con la ultima que se pulso.
            if (this.botones[this.indice] == this.codigoBoton) {

                //Si quedan mas teclas por revisar

                if (this.indice < this.botones.length - 1) {
                    this.indice++;
                }

                else {
                    exito = true;
                    this.indice = 0;

                }
            }

            else {
                this.indice = 0;
            }


        }

        this.tiempoUltimaPulsación = hora;
        return exito;
    }
}



function ocultarDiv(id) {
    id.style.display = "none";
}

function showDiv(id) {
    id.style.display = "block";
}

function showComparative(originalImage, comparativeImage) {
    originalImage.style.display = "none";
    comparativeImage.style.display = "block";
}

//Declaracion juego 

function firstScene() {
    let divOne = document.getElementById('firstImageGameOne');
    let divTwo = document.getElementById('containerComboOne');
    showDiv(divOne);

    setTimeout(function () {
        showComparative(divOne, divTwo)
    }, 20000);


    var konami = new Combo([derecha, arriba, izquierda, abajo,derecha])
    document.addEventListener('keydown', function (tecla) {
        var codigoTecla = tecla.keyCode;
        var valorTecla = "";



        if (codigoTecla === arriba) {
            valorTecla = "Arriba";
        } else if (codigoTecla === abajo) {
            valorTecla = "Abajo";
        } else if (codigoTecla === derecha) {
            valorTecla = "Derecha";
        } else if (codigoTecla === izquierda) {
            valorTecla = "Izquierda";
        }


        document.getElementById("containerF").innerHTML = valorTecla;

        setTimeout(function(){valorTecla =""}, 15000);

        if (konami.pulsada(codigoTecla) === true) {
            Swal.fire({
                title: 'Felicidades',
                text:  "Ganaste: gafas de sol !",
                icon: 'success',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Aceptar'
              }).then((result) => {
                if (result.isConfirmed) {
                    video();
                }});
        }
    });
}

function secondScene() {
    let imageOne = document.getElementById('firstImageGameTwo');
    let imageComparative = document.getElementById('containerComboTwo');
    showDiv(imageOne);

    setTimeout(function () {
        showComparative(imageOne, imageComparative)
    }, 10000);

    var konami2 = new Combo([arriba, derecha, izquierda, abajo,abajo,derecha])
    document.addEventListener('keydown', function (tecla) {
        var codigoTecla = tecla.keyCode;
        var valorTecla = "";



        if (codigoTecla === arriba) {
            valorTecla = "Arriba";
        } else if (codigoTecla === abajo) {
            valorTecla = "Abajo";
        } else if (codigoTecla === derecha) {
            valorTecla = "Derecha";
        } else if (codigoTecla === izquierda) {
            valorTecla = "Izquierda";
        }
        
        setTimeout(function(){valorTecla =""}, 15000);
        document.getElementById("containerF2").innerHTML = valorTecla;

        if (konami2.pulsada(codigoTecla) === true) {

            Swal.fire({
                title: 'Felicidades',
                text:  "Ganaste:  Examen sin costo!",
                icon: 'success',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Aceptar'
              }).then((result) => {
                if (result.isConfirmed) {
                    video();
                }});
        }else if(konami2.pulsada(codigoTecla) === false){
            alert("has cometido un error")
        }
    });
    
}


function thirdScene() {
    let imageOne = document.getElementById('firstImageGameThree');
    let imageComparative = document.getElementById('containerComboThree');
    showDiv(imageOne);

    setTimeout(function () {
        showComparative(imageOne, imageComparative)
    }, 10000);

    var konami3 = new Combo([arriba, arriba, arriba, derecha,izquierda,abajo,abajo])
    document.addEventListener('keydown', function (tecla) {
        var codigoTecla = tecla.keyCode;
        var valorTecla = "";



        if (codigoTecla === arriba) {
            valorTecla = "Arriba";
        } else if (codigoTecla === abajo) {
            valorTecla = "Abajo";
        } else if (codigoTecla === derecha) {
            valorTecla = "Derecha";
        } else if (codigoTecla === izquierda) {
            valorTecla = "Izquierda";
        }
        
        document.getElementById("containerF3").innerHTML = valorTecla;
        setTimeout(function(){valorTecla =""}, 15000);

        if (konami3.pulsada(codigoTecla) === true) {

            Swal.fire({
                title: 'Felicidades',
                text:  "Ganaste: Montura oftalmica !",
                icon: 'success',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Aceptar'
              }).then((result) => {
                if (result.isConfirmed) {
                    video();
                }});
        }
    });
}

//Inicio del juego
function Iniciar() {

    let valorAleatorio = Math.floor(Math.random() * (4 - 1)) + 1;
    ocultarDiv(divMessage);

    switch (valorAleatorio) {
        case 1:
            ocultarDiv(divMessage);
            ocultarDiv(escenarioDos);
            ocultarDiv(escenarioTres);
            showDiv(escenarioUno);
            firstScene();
            break;

        case 2:
            ocultarDiv(divMessage);
            ocultarDiv(escenarioUno);
            ocultarDiv(escenarioTres);
            showDiv(escenarioDos);
            secondScene();
            break;


        case 3:
            ocultarDiv(divMessage);
            ocultarDiv(escenarioDos);
            ocultarDiv(escenarioUno);
            showDiv(escenarioTres);
            thirdScene()
            break;
    }
}


function video(){
    let videoLink = "videos.html";
    window.location.href = videoLink;
}
function reload(){
    location.reload();
}
function home(){
    let home = "index.html";
    window.location.href = home;
}