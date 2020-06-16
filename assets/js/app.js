//Variables
const listaTweets = document.querySelector('#lista-tweets');

//Event Listeners

EventListener();

function EventListener(){
   //Accion de envio de formulario
   let formulario = document.querySelector('#formulario');
   formulario.addEventListener('submit', agregarTweet);

   //Borrar Tweets
   listaTweets.addEventListener('click', borrarTweet);
}

//Funciones
//Crear Lista de Tweets
function agregarTweet(e){
   e.preventDefault();
   //Capturando valor del textArea
   let tweet = document.querySelector('#tweet').value;

   //Crear boton de eliminar Tweet
   let botonBorrar = document.createElement('a');
   botonBorrar.classList = 'borrar-tweet';
   botonBorrar.innerText = 'x'

   //Crear Lista de Tweet nuevo
   let li = document.createElement('li');
   li.innerText = tweet;
   li.appendChild(botonBorrar);
   listaTweets.appendChild(li);

   //Añadir a Local Starage

   agregarTweetLocalStorage();
}

//Eliminar Tweets
function borrarTweet(e){
   e.preventDefault();

   if(e.target.className === 'borrar-tweet'){
      e.target.parentElement.remove();
      console.log('Tweet Eliminado');
   }
}
