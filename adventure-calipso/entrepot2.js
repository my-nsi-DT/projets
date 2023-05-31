console.log("Entrepot2")
var current_part=1

function validate_part1() {
  const responseItem = document.getElementById("cmd1");
  if (responseItem.value.replace(" ","") == "kill420") {
    alert("Processus terminé");
    next_part()

  }
  else {
    alert("Mauvaise commande")
  }
}

function validate_part2() {
  const ram = document.getElementById("ram");
  const carte_mere = document.getElementById("cm");
  if (ram.value != "LPX16Go") {
    alert("RAM incorrecte");
  }
  else if (cm.value != "B550") {
      alert("RAM incorrecte");
  }
  else {
    next_part()
  }
}


function validate_part3() {
  const cmd = document.getElementById("cmd3");
  if (cmd.value.replace(" ","") == "mkdirimages") {
    next_part();
  }
  else {
      alert("Dossier images absent");
  }

}


function next_part() {
    //Hide previous parts
    var responseItem = document.getElementById("part"+current_part);
   console.log(current_part)
   console.log(responseItem)
    responseItem.style.display = "none";
    var responseItem = document.getElementById("part"+(current_part - 1)); // Hack for first part0
       console.log(responseItem)
    responseItem.style.display = "none";
    current_part += 1

    // Reveal new one
    responseItem = document.getElementById("part"+current_part);
    responseItem.style.display = "block";
}