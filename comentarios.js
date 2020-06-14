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

function mensajeComentario(){
  alert("No funciona muy allá asi que lo he deshabilitado")
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

function writeUserData(userId, name,comentario) {
    firebase.database().ref('chat/' + userId).set({
      username: name,
      comentario:comentario
    });
  }
function annadirComentario(){
  let numeroAleatorio=Math.random().toString();
  console.log(numeroAleatorio);
  numeroAleatorio=numeroAleatorio.replace(".","");
  console.log(numeroAleatorio);
    let comentario=document.getElementById("comentario");
    
    console.log(comentario.value);
    writeUserData(numeroAleatorio,sessionStorage.usuario,comentario.value);
}
let matriz =[];
firebase.database().ref('chat/').on('child_added',function(snapshot) {
  let divComentarios=document.getElementById("divComentarios");
  divComentarios.innerHTML="";
  matriz.push(snapshot.val());
  for(let i=0;i<matriz.length;i++){
    divComentarios.innerHTML=divComentarios.innerHTML+matriz[i].username +" : "+ matriz[i].comentario+"</br>";
    
  }
  
});

//writeUserData(2,sessionStorage.usuario,"estoy probando la bbdd");