
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function validar(){
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let divRespuesta=document.getElementById("divRespuesta");
    firebase.auth().signInWithEmailAndPassword(email, password).then(function(error) {
        // Handle Errors here.

        console.log("login correcto");
        window.location.href="./cumplePilar.html";
        // ...
      }).catch(function(error){
        divRespuesta.innerHTML="Usuario o contraseña incorrecta";
          console.log("login incorrecto");
      });
      
    /* let divRespuesta=document.getElementById("divRespuesta")
    if(inputEmail.value=="pilarukavk@nonosodies.com" && inputPassword.value=="cumplepilar") window.location="cumplePilar.html";
    else divRespuesta.innerHTML="Usuario o contraseña incorrecta";      */
}