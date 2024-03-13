// console.log("aqui");

// let contenidoTitulo = "Nombre";
// let titulo = document.querySelector(".logo .fuente-acento");
// titulo.innerHTML = contenidoTitulo;

//condic.
// let textoTitulo = titulo.innerText;
// console.log(textoTitulo);

// if(textoTitulo == "Nombre"){
//     titulo.innerHTML ="Otro titulo";
// }else {
//     console.log("no se cumple");
// }

//funciones 
// let nombre = "ani";
// let  ciudad = "bs as";
// let gusto ="chocolate";

// let parrafo = document.querySelector(".parrafo2");

// function cambiarTexto(nombre, ciudad, gusto){
//     let contenido = `Me llamo ${nombre}", naci en ${ciudad} y me gusta el ${gusto}`;

//     return contenido;
// }

// parrafo.innerText = cambiarTexto(nombre,ciudad,gusto);


const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `(*)El nombre debe contener más de 4 caracteres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}
 


form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    e.preventDefault();
    alert('Formulario enviado');
    // formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});