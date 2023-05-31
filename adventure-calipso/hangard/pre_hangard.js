console.debug("Arrivée pre_hangard 2")

// Disable page refreshing on form (invalid JS redirects)
var form = document.getElementById("reps_cpu");
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);

function terminate() {
  // TODO: Confirm dialog instead of alert
  alert("Fin session (mauvaise réponse)")
  window.location.replace("./pre_hangard.html");
}

function handleClick() {
  const rep1 = document.getElementById("rep1").value.toLowerCase();
  const rep2 = document.getElementById("rep2").value.toLowerCase();
  const rep3 = document.getElementById("rep3").value.toLowerCase();
  const rep4 = document.getElementById("rep4").value.toLowerCase();

  if (rep1 == "aa") {
    // Glitch god mode
    window.location.replace("./hangard.html");
  }

  if ("alimentation" != rep1) {
    terminate()
  }

  else if ("carte" != rep2.substring(0,5)) {
    alert(rep2.substring(0,5))
    terminate()
  }
  else if ("cpu" != rep3) {
    terminate()
  }
  else if ("ram" != rep4) {
    terminate()
  }
  else {
    // Si toutes les réponses sont valides -> Dir hangard
    alert("Félicitation !")
    window.location.replace("./hangard.html");
  }

}
