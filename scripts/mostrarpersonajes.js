import { personajes } from "../data/data.js"
let botonComenzar = document.getElementById("comenzar");
let contenedorMostrarPersonaje = document.getElementById("contenedorMostrarPersonaje")


botonComenzar.addEventListener('click', comenzar);
function comenzar() {
    // se genera un numero aleatorio//
    let numeroAleatorio = Math.floor(Math.random() * personajes.length);
    let personajeAleatorio = personajes.filter((elemento) => elemento.id == numeroAleatorio);
    //mostrar imagen del personaje //
    let itemFotoPersonaje = document.createElement('img');
    itemFotoPersonaje.setAttribute('src', personajeAleatorio[0].img)
    contenedorMostrarPersonaje.appendChild(itemFotoPersonaje)
    //mostrar nombre del personaje//
    let itemPersonaje = document.createElement('h1');
    itemPersonaje.textContent = `${personajeAleatorio[0].nombre} ${personajeAleatorio[0].apellido}`;
    contenedorMostrarPersonaje.appendChild(itemPersonaje);
    //mostrar Casa del personaje//
    let itemCasaPersonaje = document.createElement('h1');
    itemCasaPersonaje.textContent = `${personajeAleatorio[0].casa}`;
    contenedorMostrarPersonaje.appendChild(itemCasaPersonaje);

    const botonNuevoPersonaje = document.createElement('button');
    botonNuevoPersonaje.setAttribute('id', "nuevoPersonaje");
    botonNuevoPersonaje.textContent = `Nuevo personaje`;
    contenedorMostrarPersonaje.appendChild(botonNuevoPersonaje)

    botonNuevoPersonaje.addEventListener('click', (e)=>{
        e.addEventListener(location.reload());
    
    })

}

