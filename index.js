
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

  function registerUsername(){
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let repPassword=document.getElementById("repPassword").value;
    let mensaje=document.getElementById("mensajeRegistro");

    if(password===repPassword){
        firebase.auth().createUserWithEmailAndPassword(email, password).then(function(error) {
            // Handle Errors here.
            console.log("registro correcto");
            window.location.href="./login.html";
          }).catch(function(error){
            console.log("Has entrado en el catch"+error);
            mensaje.innerHTML="Usuario ya registrado";
          });
    }

  }
  