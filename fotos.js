// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(function (currentUser) {
  let inputUsuario = document.getElementById("usuario2");
  if (currentUser) {
    /* var user = currentUser;
   console.log(user.email,typeof(user.email)); */

    inputUsuario.innerHTML = sessionStorage.usuario;
  } else {
    window.location.href = "./index.html";
  }
});

function salir() {
  firebase
    .auth()
    .signOut()
    .then(function () {
      // Sign-out successful.
      console.log("Sesión cerrada");
      window.location.href = "./login.html";
    })
    .catch(function (error) {
      // An error happened.
    });
}
function mensajeComentario(){
  alert("No funciona muy allá asi que lo he deshabilitado")
}
function darmensaje(e, mensaje) {
  let fotos = document.getElementsByClassName("fotosNuestras");

  for (let i = 0; i < fotos.length; i++) {
    if (e.target.src == fotos[i].src) {
      fotos[i].style.border = "solid 3px rgb(51, 199, 255)";
      fotos[i].style.filter = "grayscale(0%)";
    } else {
      fotos[i].style.border = "";
      fotos[i].style.filter = "grayscale(100%)";
    }
  }

  let inputmensaje = document.getElementById("mensajeNuestro");
  inputmensaje.innerHTML = mensaje;
  inputmensaje.style.border = "solid 5px rgb(51, 199, 255)";
}
window.onload = function () {
  let arrayFotos = [
    {
      foto: "/img/fotosnuestras/adrian.jpg",
      mensaje: "Pilaaaar!! Ya llegaste a los 30 años! Que sepas que no se está tan mal, son todo habladurías, pero ten en cuenta que te salen canas, arrugas, te cansas mucho más, tienes que ir más al médico, estás mas irritada, aguantas menos tonterias, te duelen los huesos.. salvo eso en realidad sigue más o menos igual! A por otros 30!! Felicidades!!!!!!",
    },
    {
      foto: "/img/fotosnuestras/alvaro.jpg",
      mensaje:
        "Equidistante entre la candidez</br>De aquella lejana veintena</br>Y la consolidada madurez</br>De la temida cuarentena</br>Hállase el perfecto equilibrio, la esplendidez,</br>De la presente treintena.</br>Por la crisis de los treinta es conocida</br>Mas añorada por aquellos que peinan canas</br>Disfruta de esta década  escogida</br>Y torna en especiales las vivencias cotidianas.",
    },
    {
      foto: "/img/fotosnuestras/andrea.jpg",
      mensaje:
        "Muchísimas felicidades Pilar, espero que la nueva decada que empiezas te traiga mucha felicidad y que tus deseos se cumplan, besos. Andrea y Jamie",
    },
    {
      foto: "/img/fotosnuestras/barbara.jpg",
      mensaje:
        "No es mi mejor foto pero representa mucho para mí. Independientemente de lo dolorida, sucia y cansada que estés hay que disfrutar del camino que te lleva a un objetivo o que simplemente te lleva. Eres una tía fuerte y un modelo a seguir, ve siempre con la cabeza bien alta.¡A reventar la década!",
    },
    {
      foto: "/img/fotosnuestras/esther.jpg",
      mensaje: "Muchisimas felicidades!!! Este es solo un cumpleaños más de los que nos quedan por celebrar y espero que sean juntas. Un beso enorme y a disfrutar de los 30",
    },
    {
      foto: "/img/fotosnuestras/jose.jpg",
      mensaje:
        "Pilar, felicidades!!! Aunque creas que 30 años son muchos... en el fondo somos jóvenes, así que debemos seguir disfrutando de nuestra juventud. ¡A tope con ello! Un abrazo fortísimo",
    },
    { foto: "/img/fotosnuestras/juanjo.jpg", mensaje: "Gracias Pilar por ser como eres, por estar ahí siempre. Gracias por el café de la tarde y tus palabras.</br> Aunque los años pasen, seguimos juntos que es lo más importante. ¡Felicidades!" },
    {
      foto: "/img/fotosnuestras/selene.jpg",
      mensaje:
        "Muchísimas felicidades Pilar ☺️☺️☺️ Te deseo lo mejor para esta nueva década y que todos tus deseos se cumplan. Un beso muy grande. Selene",
    },
    { foto: "/img/fotosnuestras/vito.jpg", mensaje: "Pilar, ha llegado el temido momento, ya eres una treintañera, nos hacemos viejos... Pero hay que mirarlo por el lado bueno, aún te queda 10 años para ser una cuarentona! Feliz 30 cumpleaños Pilar!" },
  ];

  let divImagenes = document.getElementById("divImagenes");
  for (let i = 0; i < arrayFotos.length; i++) {
    let foto = document.createElement("img");
    foto.setAttribute("src", arrayFotos[i].foto);
    foto.setAttribute("class", "fotosNuestras");
    foto.setAttribute("id", i);
    foto.setAttribute("width", "30%");
    let mensaje = arrayFotos[i].mensaje;

    foto.setAttribute("onclick", "darmensaje(event, '" + mensaje + "' )");
    divImagenes.appendChild(foto);
  }
};
