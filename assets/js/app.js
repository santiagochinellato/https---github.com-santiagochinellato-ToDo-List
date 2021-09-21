// // variables
// const listaTweets = document.querySelector("#lista-tweets");

// // event listeners
// eventListeners();
// function eventListeners() {
//   // cuando se envia el formulario
//   document
//     .querySelector("#formulario")
//     .addEventListener("submit", agregarTweet);
//   // borrar tweets
//   listaTweets.addEventListener("click", borrarTweet);
//   // contenido cargado
//   document.addEventListener("DOMContentLoaded", localStorageListo);
// }

// // funciones

// // añadir tweet del formulario

// function agregarTweet(e) {
//   e.preventDefault();
//   // leer el valor del textarea
//   const tweet = document.getElementById("tweet").value;

//   // crear elemento eliminar
//   const botonBorrar = document.createElement("a");
//   botonBorrar.classList = "borrar-tweet";
//   botonBorrar.innerText = "X";

//   // crear elemento y agregar a la lista
//   const li = document.createElement("li");
//   li.innerText = tweet;

//   // añade el boton de borrar
//   li.appendChild(botonBorrar);

//   // añade el tweet a la lista
//   listaTweets.appendChild(li);

//   // añadir al localStorage
//   agregarTweetLocalStorage(tweet);
// }
// // borra el tweet de la lista
// function borrarTweet(e) {
//   e.preventDefault();
//   if (e.target.className === "borrar-tweet") {
//     e.target.parentElement.remove();
//     borrarTweetLocalStorage(e.target.parentElement.innerText);
//   }
// }
// // mostrar datos del localStorage en la lista

// function localStorageListo() {
//   let tweets;

//   tweets = obtenerTweetsLocalStorage();
//   tweets.forEach(function (tweet) {
//     // crear elemento eliminar
//     const botonBorrar = document.createElement("a");
//     botonBorrar.classList = "borrar-tweet";
//     botonBorrar.innerText = "X";

//     // crear elemento y agregar a la lista
//     const li = document.createElement("li");
//     li.innerText = tweet;

//     // añade el boton de borrar
//     li.appendChild(botonBorrar);

//     // añade el tweet a la lista
//     listaTweets.appendChild(li);
//   });
// }

// // agregar tweet al local storage

// function agregarTweetLocalStorage(tweet) {
//   let tweets;
//   tweets = obtenerTweetsLocalStorage();
//   // añadir el nuevo tweet
//   tweets.push(tweet);
//   // convertir en string
//   localStorage.setItem("tweets", JSON.stringify(tweets));
// }
// // comprobar que hay elementos en el  localStorage, retorna un arreglo
// function obtenerTweetsLocalStorage() {
//   let tweets;
//   // revisamos los valores del local storage
//   if (localStorage.getItem("tweets") === null) {
//     tweets = [];
//   } else {
//     tweets = JSON.parse(localStorage.getItem("tweets"));
//   }
//   return tweets;
// }
// // eliminar tweet del localStorage
// function borrarTweetLocalStorage(tweet) {
//   let tweets, tweetborrar;
//   // elimina la x del tweet
//   tweetborrar = tweet.substring(0, tweet.length - 1);

//   tweets = obtenerTweetsLocalStorage();

//   tweets.forEach(function (tweet, index) {
//     if (tweetborrar === tweet) {
//       tweets.splice(index, 1);
//     }
//   });
//   localStorage.setItem("tweets", JSON.stringify(tweets));
// }

// Info date
const dateNumber = document.getElementById("dateNumber");
const dateText = document.getElementById("dateText");
const dateMonth = document.getElementById("dateMonth");
const dateYear = document.getElementById("dateYear");

// Tasks Container
const tasksContainer = document.getElementById("tasksContainer");

const setDate = () => {
  const date = new Date();
  dateNumber.textContent = date.toLocaleString("es", { day: "numeric" });
  dateText.textContent = date.toLocaleString("es", { weekday: "long" });
  dateMonth.textContent = date.toLocaleString("es", { month: "short" });
  dateYear.textContent = date.toLocaleString("es", { year: "numeric" });
};

const addNewTask = (event) => {
  event.preventDefault();
  const { value } = event.target.taskText;
  if (!value) return;
  const task = document.createElement("div");
  task.classList.add("task", "roundBorder");
  task.addEventListener("click", changeTaskState);
  task.textContent = value;
  tasksContainer.prepend(task);
  event.target.reset();
};

const changeTaskState = (event) => {
  event.target.classList.toggle("done");
};

const order = () => {
  const done = [];
  const toDo = [];
  tasksContainer.childNodes.forEach((el) => {
    el.classList.contains("done") ? done.push(el) : toDo.push(el);
  });
  return [...toDo, ...done];
};

const renderOrderedTasks = () => {
  order().forEach((el) => tasksContainer.appendChild(el));
};

setDate();

function startTime() {
  var today = new Date();
  var hr = today.getHours();
  var min = today.getMinutes();
  var sec = today.getSeconds();
  //Add a zero in front of numbers<10
  min = checkTime(min);
  sec = checkTime(sec);
  document.getElementById("clock").innerHTML = hr + " : " + min;
  var time = setTimeout(function () {
    startTime();
  }, 500);
}
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
