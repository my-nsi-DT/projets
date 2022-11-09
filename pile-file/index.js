console.log("Félicitation vous avez accès à la console, le mot de passe est 42")

function validate() {
  const responseItem = document.getElementById("code");
  if (responseItem.value == "42") {
    alert("Felicitation, lancement du garage");
    window.location.replace("./file.html");

  }
  else {
    alert("Mauvais code")
  }
}