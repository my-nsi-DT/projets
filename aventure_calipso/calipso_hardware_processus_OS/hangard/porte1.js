console.log("porte1")
function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

function validate() {
  const responseItem = document.getElementById("code");
  if (responseItem.value == "Calipso") {
    alert("Felicitation");
    window.location.replace("./pre_hangard.html");

  }
  else {
    alert("Mauvais code")
  }
}

//delay(60 * 1000).then(() => alert('Tom propose d\'activer la console de developpeur'));
//delay(360 * 1000).then(() => alert('Tom a regardé sur Google, la console c\'est F12'));
