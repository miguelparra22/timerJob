window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
  });

let valorAleatorio = Math.floor(Math.random() * (8 - 1) + 1);
    let divMostrar = document.getElementById("videoContainer"+valorAleatorio)
    alert(divMostrar)
    divMostrar.style.display = "block"