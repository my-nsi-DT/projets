function validate() {
  const val1 = document.getElementById("nombre1").value;
  const val2 = document.getElementById("nombre2").value;
  if (val1 != 0 && val1 % 2 == 0 && val2 > val1) {
    alert("Code de la carte mère (a noter) : B550")
    window.location.replace("./hangard.html");
  }
  else {
    alert("Code erroné, extinction impossible");
  }
}
