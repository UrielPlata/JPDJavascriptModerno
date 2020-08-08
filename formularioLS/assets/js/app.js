// Variables
const listaTweets = document.getElementById('lista-tweets');

// Event Listeners
eventListeners();

function eventListeners(){
  document.querySelector('#formulario').addEventListener('submit',agregrarTweet);
  // Borrar Tweets
  listaTweets.addEventListener('click', borrarTweet);

  // Contenido cargado
  document.addEventListener('DOMContentLoaded',localStorageListo);
}

// Funciones

function agregrarTweet(e){
  e.preventDefault();
  // usar el valor del textarea
  const tweet =  document.getElementById('tweet').value;
  // crear el boton de eliminar
  const botonBorrar = document.createElement('a');
  botonBorrar.classList = 'borrar-tweet';
  botonBorrar.innerText = 'X';
  // crear el elemento li del tweet
  const li =  document.createElement('li');
  li.innerText = tweet;
  // insertar el boton al li
  li.appendChild(botonBorrar);
  // instertar el li a la lista de tweets
  listaTweets.appendChild(li);

  // Añadir a localStorage
  agregrarTweetLocalStorage(tweet);
}

// Funcion para eliminar tweets
function borrarTweet(e) {
  e.preventDefault();
  if(e.target.className === 'borrar-tweet') {
    e.target.parentElement.remove();
    borrarTweetLocalStorage(e.target.parentElement.innerText);
  }
}
// Funcion para agregar en local storage los Tweets
function agregrarTweetLocalStorage(tweet) {
  let tweets;
  tweets = obtenerTweetsLocalStorage();
  // Agregar el tweet al arreglo
  tweets.push(tweet);
  // Convertir de string a arreglo para local storage
  localStorage.setItem('tweets', JSON.stringify(tweets) );
}
// Funcion para obtener los tweets del localstorage
function obtenerTweetsLocalStorage(){
  let tweets;
  // Revisamos los valores de local storage
  if(localStorage.getItem('tweets') === null){
    tweets = [];
  } else {
    tweets = JSON.parse(localStorage.getItem('tweets'));
  }
  return tweets;
}

// Funcion para cargar al DOM los tweets del localStorage
function localStorageListo(){
  let tweets;

  tweets = obtenerTweetsLocalStorage();

  tweets.forEach(function(tweet) {
    // crear el boton de eliminar
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';
    // crear el elemento li del tweet
    const li =  document.createElement('li');
    li.innerText = tweet;
    // insertar el boton al li
    li.appendChild(botonBorrar);
    // instertar el li a la lista de tweets
    listaTweets.appendChild(li);
  });
}

// Funcion para eliminar tweets de local localStorage
function borrarTweetLocalStorage(tweet){
  let tweets, tweetBorrar;
  // Elimina la x del tweet
  tweetBorrar = tweet.substring(0, tweet.length - 1);
  console.log(tweetBorrar)
  tweets = obtenerTweetsLocalStorage();

  tweets.forEach(function(tweet, index) {
    if(tweetBorrar === tweet) {
      tweets.splice(index,1);
    }
  });

  localStorage.setItem('tweets',JSON.stringify(tweets));
}
