//Variables
const listaTweets = document.querySelector('#lista-tweets');
const formulario = document.querySelector('#formulario');

//Event Listeners

EventListener();

function EventListener(){
   //Accion de envio de formulario
   formulario.addEventListener('submit', agregarTweet);

   //Borrar Tweets
   listaTweets.addEventListener('click', borrarTweet);

   //Contenido Cargado
   document.addEventListener('DOMContentLoaded',localStorageListo);
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
   agregarTweetLocalStorage(tweet);
   formulario.reset();
}

//Eliminar Tweets
function borrarTweet(e){
   e.preventDefault();

   if(e.target.className === 'borrar-tweet'){
      let lista = e.target.parentElement;
      lista.remove();
      borrarTweetLocalStorage(lista.innerText);
   }
}

//Mostrar los valores del local storage en la lista de tweets
function localStorageListo(){
   let tweets;
   tweets = obtenerTweetLocalStorage();
   tweets.forEach(tweet => {
      //Crear boton de eliminar Tweet
      let botonBorrar = document.createElement('a');
      botonBorrar.classList = 'borrar-tweet';
      botonBorrar.innerText = 'x'

      //Crear Lista de Tweet nuevo
      let li = document.createElement('li');
      li.innerText = tweet;
      li.appendChild(botonBorrar);
      listaTweets.appendChild(li);
   });
}

//Agregar Tweets a local storage
function agregarTweetLocalStorage(tweet){
   let tweets;
   tweets = obtenerTweetLocalStorage();
   //Añadir el nuevo Tweet
   tweets.push(tweet);
   //Convertir el string a array
   localStorage.setItem('tweets', JSON.stringify(tweets));
}

//Captura los tweets anteriores para no sobre escribir valores
function obtenerTweetLocalStorage(){
   let tweets;
   if(localStorage.getItem('tweets') === null){
      tweets = [];
   }else{
      tweets = JSON.parse(localStorage.getItem('tweets'));
   }
   return tweets;
}

//Eliminar Tweet de local storage
function borrarTweetLocalStorage(tweet){
   let tweets, tweetBorrar;
   tweetBorrar = tweet.substring(0, tweet.length -1);
   tweets = obtenerTweetLocalStorage();
   tweets.forEach(function(tweet, index){
      if(tweetBorrar === tweet){
         tweets.splice(index, 1);
      }
   })
   localStorage.setItem('tweets', JSON.stringify(tweets));
}