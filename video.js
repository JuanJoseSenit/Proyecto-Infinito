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
window.onload = function () {
    let arrayVideos = ["https://www.youtube.com/embed/umdC0verLlM","https://www.youtube.com/embed/6vBxuATWxGc","https://www.youtube.com/embed/N1aa0uyyLps","https://www.youtube.com/embed/gEhG7z0m62Q","https://www.youtube.com/embed/9IqIBLkxSQw","https://www.youtube.com/embed/yMJFoqVuikY","https://www.youtube.com/embed/vfwnESKBXyw","https://www.youtube.com/embed/dVOzNsraiG8"];
  
    let divVideos = document.getElementById("divVideos");
    for (let i = 0; i < arrayVideos.length; i++) {
        
      let video = document.createElement("iframe");
      video.setAttribute("src", arrayVideos[i]);
      video.setAttribute("id", i);
      video.setAttribute("class","videos");
      video.setAttribute("width", "30%");
      
      
      video.setAttribute("allowfullscreen",true);
      divVideos.appendChild(video);
    }

  };
  