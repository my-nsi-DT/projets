function validate() {
  const val1 = document.getElementById("bit1").checked;
  const val2 = document.getElementById("bit2").checked;
  const val3 = document.getElementById("bit3").checked;
  const val4 = document.getElementById("bit4").checked;
  if (val4 && val3 && !val2 && val1) {
    alert("Code de la RAM (a noter) : LPX16Go");
    window.location.replace("./hangard.html");
  }
  else {
    alert("Code erroné, extinction impossible");
  }
}
