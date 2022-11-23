console.log("Félicitation vous avez accès à la console, le mot de passe est 42")

function validate() {
  const responseItem = document.getElementById("code");
  if (responseItem.value == "42") {
    alert("Felicitation, lancement du garage");
    window.location.replace("./file.html");

  }
  else if (responseItem.value == "1024") {
      alert("Raccourcis vers les piles");
      window.location.replace("./pile.html");
    }
  else if (responseItem.value == "2010") {
        alert("Raccourcis vers les piles");
            window.location.replace("./pile.html");
      }
  else if (responseItem.value == "418") {
      alert("Raccourcis vers les inversion de piles");
           window.location.replace("./inversion-pile.html");
   }
  else {
    alert("Mauvais code")
  }
}