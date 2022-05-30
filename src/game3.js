const diveMessage = document.getElementById("container-message");
const escenarioUno = document.getElementById("containerGameOne");
const escenarioDos = document.getElementById("containerGameTwo");
const escenarioTres = document.getElementById("containerGameThree");
const escenarioCuatro = document.getElementById("containerGameFour");

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

function firstScene() {

    let imageOne = document.getElementById('firstImageGameOne');
    let imageComparative = document.getElementById('containerArrastreOne');

    const draggableElements = document.querySelectorAll(".draggable");
    const droppableElements = document.querySelectorAll(".droppable");
    var terminado = droppableElements.length;

    showDiv(imageOne);
    setTimeout(function () {
        showComparative(imageOne, imageComparative)
    }, 5000);

    draggableElements.forEach(e => {
        e.addEventListener("dragstart", dragStart);
    })


    droppableElements.forEach(e => {
        e.addEventListener("dragenter", dragEnter);
        e.addEventListener("dragover", dragOver);
        e.addEventListener("dragleave", dragLeave);

        e.addEventListener("drop", drop);
    })


    function dragStart(event) {

        event.dataTransfer.setData("text", event.target.id);
    }


    function dragEnter(event) {
        event.target.classList.add("droppable-hover");

    }

    function dragOver(event) {
        event.preventDefault();
    }

    function dragLeave(event) {
        event.target.classList.remove("droppable-hover")
    }


    function drop(event) {
        event.preventDefault();
        const draggableElementData = event.dataTransfer.getData("text");
        const droppableElementData = event.target.getAttribute("data-draggable-id");
        if (draggableElementData === droppableElementData) {
            event.target.classList.add("dropped2");
            const draggableElement = document.getElementById(draggableElementData);
            event.target.style.backgroundColor = draggableElement.style.color;
            draggableElement.classList.add("dragged");
            draggableElement.setAttribute("draggable", "false");
            event.target.insertAdjacentHTML("afterbegin", `<i class="fa fa-${draggableElementData}"></i>`);
            terminado--;
        }else{
            alert('Posición no correcta')
        }


        if (terminado === 0) {

            Swal.fire({
                title: 'Felicidades',
                text: "10% en lentes para un familiar ",
                icon: 'success',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Aceptar'
            }).then((result) => {
                if (result.isConfirmed) {
                    video();
                }
            });

           
        }

    }
}


function secondSceneGame3() {
    let imageOne = document.getElementById('firstImageGameTwo');
    let imageComparative = document.getElementById('containerArrastreTwo');
    const draggableElements = document.querySelectorAll(".draggable2");
    const droppableElements = document.querySelectorAll(".droppable2");
    var terminado = droppableElements.length;

    showDiv(imageOne);
    setTimeout(function () {
        showComparative(imageOne, imageComparative)
    }, 5000);

    draggableElements.forEach(e => {
        e.addEventListener("dragstart", dragStart);
    })


    droppableElements.forEach(e => {
        e.addEventListener("dragenter", dragEnter);
        e.addEventListener("dragover", dragOver);
        e.addEventListener("dragleave", dragLeave);

        e.addEventListener("drop", drop);
    })


    function dragStart(event) {

        event.dataTransfer.setData("text", event.target.id);
    }


    function dragEnter(event) {
        event.target.classList.add("droppable-hover2");

    }

    function dragOver(event) {
        event.preventDefault();
    }

    function dragLeave(event) {
        event.target.classList.remove("droppable-hover2")
    }


    function drop(event) {
        event.preventDefault();
        const draggableElementData = event.dataTransfer.getData("text");
        const droppableElementData = event.target.getAttribute("data-draggable-id");
        if (draggableElementData === droppableElementData) {
            event.target.classList.add("dropped2");
            const draggableElement = document.getElementById(draggableElementData);
            event.target.style.backgroundColor = draggableElement.style.color;
            draggableElement.classList.add("dragged2");
            draggableElement.setAttribute("draggable2", "false");
            event.target.insertAdjacentHTML("afterbegin", `<i class="fa fa-${draggableElementData}"></i>`);
            terminado--;
        }else{
            alert('Posición no correcta')
        }


        if (terminado === 0) {
            
            Swal.fire({
                title: 'Felicidades',
                text: "Ganaste: 50% de descuento en lentes tránsitions  ",
                icon: 'success',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Aceptar'
              }).then((result) => {
                if (result.isConfirmed) {
                    video();
                }});
        }

    }
}



function thirdScene() {
   

    let imageOne = document.getElementById('firstImageGameThree');
    let imageComparative = document.getElementById('containerArrastreThree');
    const draggableElements = document.querySelectorAll(".draggable3");
    const droppableElements = document.querySelectorAll(".droppable3");
    var terminado = droppableElements.length;

    showDiv(imageOne);
    setTimeout(function () {
        showComparative(imageOne, imageComparative)
    }, 5000);

    draggableElements.forEach(e => {
        e.addEventListener("dragstart", dragStart);
    })


    droppableElements.forEach(e => {
        e.addEventListener("dragenter", dragEnter);
        e.addEventListener("dragover", dragOver);
        e.addEventListener("dragleave", dragLeave);

        e.addEventListener("drop", drop);
    })


    function dragStart(event) {

        event.dataTransfer.setData("text", event.target.id);
    }


    function dragEnter(event) {
        event.target.classList.add("droppable-hover3");

    }

    function dragOver(event) {
        event.preventDefault();
    }

    function dragLeave(event) {
        event.target.classList.remove("droppable-hover3")
    }


    function drop(event) {
        event.preventDefault();
        const draggableElementData = event.dataTransfer.getData("text");
        const droppableElementData = event.target.getAttribute("data-draggable-id");
        if (draggableElementData === droppableElementData) {
            event.target.classList.add("dropped3");
            const draggableElement = document.getElementById(draggableElementData);
            event.target.style.backgroundColor = draggableElement.style.color;
            draggableElement.classList.add("dragged3");
            draggableElement.setAttribute("draggable3", "false");
            event.target.insertAdjacentHTML("afterbegin", `<i class="fa fa-${draggableElementData}"></i>`);
            terminado--;
        }else{
            alert('Posición no correcta')
        }


        if (terminado === 0) {
           
            Swal.fire({
                title: 'Felicidades',
                text: "Ganaste: lentes blue block  ",
                icon: 'success',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Aceptar'
              }).then((result) => {
                if (result.isConfirmed) {
                    video();
                }});
        }

    }
}


function fourScene() {
   

    let imageOne = document.getElementById('firstImageGameFour');
    let imageComparative = document.getElementById('containerArrastreFour');
    const draggableElements = document.querySelectorAll(".draggable4");
    const droppableElements = document.querySelectorAll(".droppable4");
    var terminado = droppableElements.length;

    showDiv(imageOne);
    setTimeout(function () {
        showComparative(imageOne, imageComparative)
    }, 5000);

    draggableElements.forEach(e => {
        e.addEventListener("dragstart", dragStart);
    })


    droppableElements.forEach(e => {
        e.addEventListener("dragenter", dragEnter);
        e.addEventListener("dragover", dragOver);
        e.addEventListener("dragleave", dragLeave);

        e.addEventListener("drop", drop);
    })


    function dragStart(event) {

        event.dataTransfer.setData("text", event.target.id);
    }


    function dragEnter(event) {
        event.target.classList.add("droppable-hover4");

    }

    function dragOver(event) {
        event.preventDefault();
    }

    function dragLeave(event) {
        event.target.classList.remove("droppable-hover4")
    }


    function drop(event) {
        event.preventDefault();
        const draggableElementData = event.dataTransfer.getData("text");
        const droppableElementData = event.target.getAttribute("data-draggable-id");
        if (draggableElementData === droppableElementData) {
            event.target.classList.add("dropped4");
            const draggableElement = document.getElementById(draggableElementData);
            event.target.style.backgroundColor = draggableElement.style.color;
            draggableElement.classList.add("dragged4");
            draggableElement.setAttribute("draggable4", "false");
            event.target.insertAdjacentHTML("afterbegin", `<i class="fa fa-${draggableElementData}"></i>`);
            terminado--;
        }else{
            alert('Posición no correcta')
        }


        if (terminado === 0) {
           
            Swal.fire({
                title: 'Felicidades',
                text: "Ganaste: bono de 50.000 para tus gafas ",
                icon: 'success',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Aceptar'
              }).then((result) => {
                if (result.isConfirmed) {
                    video();
                }});
           
        }

    }
}





function Iniciar() {
    let valorAleatorio = Math.floor(Math.random() * (5 - 1) + 1);
    ocultarDiv(diveMessage);



    if (valorAleatorio === 1) {
        ocultarDiv(escenarioDos);
        ocultarDiv(escenarioTres);
        ocultarDiv(escenarioCuatro);
        showDiv(escenarioUno);
        firstScene();

    } else if (valorAleatorio === 2) {
        ocultarDiv(escenarioUno);
        ocultarDiv(escenarioTres);
        ocultarDiv(escenarioCuatro);
        showDiv(escenarioDos);
        secondSceneGame3();
    } else if (valorAleatorio === 3) {
        ocultarDiv(escenarioUno);
        ocultarDiv(escenarioDos);
        ocultarDiv(escenarioCuatro);
        showDiv(escenarioTres);
        thirdScene();
    } else if (valorAleatorio === 4) {
        ocultarDiv(escenarioUno);
        ocultarDiv(escenarioDos);
        ocultarDiv(escenarioTres);
        showDiv(escenarioCuatro);
        fourScene();
    }

}

function video(){
    let videoLink = "videos.html";
    window.location.href = videoLink;
}

function home(){
    let home = "index.html";
    window.location.href = home;
}