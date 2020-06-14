// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(function (currentUser) {
  let inputUsuario = document.getElementById("usuario");
  if (currentUser) {
    var user = currentUser;
    sessionStorage.usuario = user.email;
    inputUsuario.innerHTML = sessionStorage.usuario;
  } else {
    window.location.href = "./index.html";
  }
});
function modificarAtributo() {
  document.getElementById("soyMayor").style.backgroundColor = "red";
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("fotoPunno").style.display = "none";
}
function eliminarAltavoz() {
  if (document.getElementById("altavoz") != null) {
    document
      .getElementById("altavoz")
      .parentNode.removeChild(document.getElementById("altavoz"));
    flagIcono = true;
  }
}
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
function verEdad() {
  let inputEdad = document.getElementById("edad");
  let inputimagenOjo = document.getElementById("ojo");
  console.log(inputimagenOjo);
  console.log(inputEdad);
  if (inputEdad.type == "password") {
    inputEdad.type = "text";
    inputimagenOjo.src = "./img/esconder.png";
  } else if ((inputEdad.type = "text")) {
    inputEdad.type = "password";
    inputimagenOjo.src = "./img/ojo.png";
  }
}
let flag = true;
let flagIcono = true;

function daMensaje() {
  document.getElementById("iframe").src = "";

  document.getElementById("tituloPrincipal").innerHTML = "FELICIDADES";
  document.getElementById("soyMayor").innerHTML = "¿SOY YA MUY MAYOR?";
  let edad = document.getElementById("edad").value;
  let name = document.getElementById("name").value;
  name = name.toUpperCase();
  let apellido = document.getElementById("apellido").value;
  apellido = apellido.toUpperCase();
  document.getElementById("tituloPrincipal").innerHTML =
    document.getElementById("tituloPrincipal").innerHTML +
    " " +
    name +
    " " +
    apellido;

  if (isNaN(edad)) {
    document.getElementById("soyMayor").innerHTML =
      "QUE YO SEPA LA EDAD ES UN NÚMERO";
    modificarAtributo();
    eliminarAltavoz();
  } else if (edad.includes(" ") || edad === "") {
    document.getElementById("soyMayor").innerHTML =
      "QUE YO SEPA LA EDAD ES UN NÚMERO";
    modificarAtributo();
    eliminarAltavoz();
  } else if (edad < 0) {
    document.getElementById("soyMayor").innerHTML = "NO ME ENGAÑES";
    modificarAtributo();
    eliminarAltavoz();
  } else if (edad >= 0 && edad < 20) {
    document.getElementById("soyMayor").innerHTML = "ERES MUY JÓVEN";
    modificarAtributo();
    eliminarAltavoz();
  } else if (edad >= 20 && edad < 30) {
    document.getElementById("soyMayor").innerHTML =
      "LO BUENO ESTÁ AÚN POR LLEGAR";
    modificarAtributo();
    eliminarAltavoz();
  } else if (edad >= 30 && edad < 40) {
    if (edad == 30) {
      flag = true;
      console.log("estás dentro de 30 años");
      let divSilenciar = document.getElementById("botonSilenciar");

      if (flag == true) {
        document.getElementById("iframe").src = "./audio/cumpleaudio2.mp3";
        let altavoz = document.createElement("img");
        if (flagIcono == true) {
          altavoz.setAttribute("src", "/img/altavoz.png");
          altavoz.setAttribute("id", "altavoz");
          altavoz.setAttribute("onclick", "controlarAudio()");
          divSilenciar.appendChild(altavoz);
          flagIcono = false;
        }
        flag = false;
      }
    } else {
      eliminarAltavoz();
    }
    document.getElementById("soyMayor").innerHTML =
      "¡QUÉ VA!, QUIZÁS CON ALGUNA CANA MÁS, PERO, ¿QUÉ MÁS DA? ";
    document.getElementById("soyMayor").style.backgroundColor = "green";
    document.getElementById("resultado").innerHTML =
      name + " " + apellido + " ESTÁS EN LO MEJOR DE LA VIDA ASÍ QUE";
    document.getElementById("fotoPunno").style.display = "initial";
    document.getElementById("fotoPunno").src = "./img/brazo.png";
  } else {
    document.getElementById("soyMayor").innerHTML = "YA SE VERÁ...";
    modificarAtributo();
    eliminarAltavoz();
  }
}
function controlarAudio() {
  console.log("estás en la funcion");
  document.getElementById("iframe").src = "";
  flag = true;
}
