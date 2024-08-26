// querySelector
const heading = document.querySelector(".header__texto h2"); // retorna 0 o 1 Elementos (Se limita a maximo 1 aunque haya varios <a> o <h2> etc..)
heading.textContent = 'Nuevo Heading'; // manipular el HTML cambiando el texto
console.log(heading);

// querySelector All
const enlaces = document.querySelectorAll(".navegacion a");
enlaces[0].textContent = 'Nuevo Texto en Enlace'; // modificando el primer elemento de enlaces
// enlaces[0].href = 'https://youtube.com'; Cambiar la direccion de enlace
enlaces[0].classList.add('nueva-clase'); // Agregar una nueva clase al elemento seleccionado
// enlaces[0].classList.remove('nueva-clase'); // Eliminando una clase al elemento seleccionado


// getElementById
const heading2 = document.getElementById("heading");
console.log(heading2);


// Generar nuevo enlace
const nuevoEnlace = document.createElement('A') //Generar HTML -- Las etiquetas van en mayusculas

// Agregar href
nuevoEnlace.href = 'nuevoEnlace.html'
// Agregar Texto
nuevoEnlace.textContent = 'Nuevo Enlace'
// Agregar CLase
nuevoEnlace.classList.add('navegacion__enlace');
// Agregarlo al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);


console.log(nuevoEnlace);


// Eventos en JS

console.log(1);

window.addEventListener('load', function(){ // load espera a que el Js y los archivos que dependen del HTML esten listos
    console.log(2);
}); // window hace referencia a todas las funciones (document es todo el html)

window.onload = function(){ 
    console.log(4);
}


window.addEventListener('load', imprimir);

function imprimir(){
    console.log('imprimir');
}

document.addEventListener("DOMContentLoaded", ()=>{ // DOMContentLoaded Solo espera que el HTML este listo y no espera a CSS imagenes o demas
    console.log(10);
})

console.log(5);


window.onscroll = function(){
    console.log('Esta haciendo Scroll')
}


// Seleccionar elementos y asociarles un evento

// // Evento click (Se puede asignar en cualquier elemento)
// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(e){ // El evento se pasa en automatico
//     e.preventDefault(); // Prevenir la accion default del elemento (Es util para validar un formulario)
//     console.log(e);
//     console.log('Enviando');
// });

// // Evento Submit (Si vas a escuchar por un submit tienes que enviar el formulario y tiene que ser type submit )
// const formulario = document.querySelector(".formulario");
// formulario.addEventListener('submit', function(e){
//     e.preventDefault();
//     console.log('Enviando form')
// })

// En que momentos usar submit y en que usar click / submit es para formularios / click puede ser para lo que sea



const datos = { // objeto
    nombre:'',
    email:'',
    mensaje:''
}

const nombreForm = document.querySelector('#nombre');
const emailForm = document.querySelector('#email');
const mensajeForm = document.querySelector('#mensaje');

// nombreForm.addEventListener('input', function(e){ // input lee lo que se esta escribiendo
//     console.log(e.target.value); // value y target leen lo que esta escribiendo el usuario
// });

// Evento Submit (Si vas a escuchar por un submit tienes que enviar el formulario y tiene que ser type submit )
const formulario = document.querySelector(".formulario");
formulario.addEventListener('submit', function(e){
    e.preventDefault();
    // Validar el formulario
    const {nombre,email,mensaje} = datos;
    if(nombre === '' || email === '' || mensaje === ''){
        mostarAlerta('Todos los campos con obligatorios', true);
        return; // previene la ejecucion de un codigo
    }

    // Enviar el formulario
    mostarAlerta('Los datos fueron enviados correctamente');
});

nombreForm.addEventListener('input', leerTexto);
emailForm.addEventListener('input', leerTexto);
mensajeForm.addEventListener('input', leerTexto);

function leerTexto(e){
     console.log(`${e.target.value}`); // value tiene el valor de lo que el usuario escriba
     datos[e.target.id] =  e.target.value;
     console.log(e.target);
     console.log(datos);
}


// una funcion con las 2 alertas, teniamos 2 funciones una para mostrar el mensaje correcto y otro incorrecto hubo un restructuring
function mostarAlerta(mensaje, error = null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    if(error){
        alerta.classList.add('error');
    }else{
        alerta.classList.add('correcto');
    }
    formulario.appendChild(alerta);
    setTimeout(() => {
        alerta.remove();
    }, 3000);

}