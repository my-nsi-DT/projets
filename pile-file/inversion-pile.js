colors = [("ligth_red","#ffb3b3"),("light_blue","#ccddff"),("light_green","#b3ffb3"),("light_yellow","#ffffb3"),("light_purple","#e0b3ff"),("light_brown","#ffcc99"),("light_pink","#ff99ff"),
("dark_red","#ff0000"),("dark_blue","#4d4dff"),("dark_green","#00cc44"),("dark_purple","#9933ff"),("dark_brown","#cc8800"),("dark_pink","#e600e6"),("dark_yellow","#e6e600")]
function reverseString(str) {
    return str.split("").reverse().join("");
}
$(document).click(function(event) {
    var text = $(event.target).text();
});

dernier_element = null;
var est_vide_called = false;
document.getElementById("div_plates1").removeAttribute("hidden");
document.getElementById("div_plates2").removeAttribute("hidden");
INIT_PILE_EXO1 = ["A","B"]
// TODO: Fix: Si appel de fonction alors que pile non créée (contenu = None), alors alert
function Pile() {
    this.contenu= [];
    this.empiler= function(element) {
      if (element[1] != "+") {
        alert("L'élement " + element + " ne vient pas directement de l'autre pile. Il faut stocker l'élément depiler dans une variable")
        restart();
      } else {
        this.contenu.push(element.slice(0,-1)) // Remove the "+" marker
        actualiser()
      }

    };
    this.creer = function() {
      actualiser()
    };
    this.depiler= function() {
        if (this.contenu.length == 0) {
            alert("La pile d'assiete est vide, depilement impossible")
        }
        else {
            dernier_element = this.contenu[this.contenu.length - 1];
            this.contenu = this.contenu.slice(0,-1);
            actualiser();
        }
        return dernier_element+"+"; // Marqueur pour vérifier que l'empilage se fait via variable => empile(elt) plutot que empile("B")

    }
    this.estVide = function() {
        est_vide_called = true;
        return this.contenu.length == 0;
    }
};

function restart() {
    pile1 = new Pile()
    pile2 = new Pile()
    pile1.contenu = INIT_PILE_EXO1
    actualiser()
};
restart();
function creerElement(element,index) {
        // Prepare new item (className, id and color)
       var li_item = document.createElement("li");
       li_item.className = "list-group-item"
       li_item.id = element
       nouvelleCouleur = colors[index % colors.length]
       li_item.style.backgroundColor = nouvelleCouleur
       var text = document.createTextNode(element);
       li_item.appendChild(text);
       return li_item

}
function actualiser() {
      ul_liste1 = document.getElementById("plates1")
      ul_liste2 = document.getElementById("plates2")
      ul_liste1.innerHTML = '';
      ul_liste2.innerHTML = '';

       var items = []

       pile1.contenu.forEach((item,index) => {
            items.push(creerElement(item,index));
       })
       items = items.reverse()
       // Ajoute l'item à la liste
       items.forEach((item) => {
          ul_liste1.appendChild(item);
       })

       var items = []

       pile2.contenu.forEach((item,index) => {
            items.push(creerElement(item,index));
       })
       items = items.reverse()
       // Ajoute l'item à la liste
       items.forEach((item) => {
          ul_liste2.appendChild(item);
       })
}

var instructions_written = []
function ajouterInstruction(item) {
    text = item.innerText
    instructions_written.push(text)
    console.log(item)
    update_instructions_written()
}

function update_instructions_written() {
    div_intructions_written = document.getElementById("intructions_written")
    div_intructions_written.innerText = ""
    current_text=""
    instructions_written.forEach( (instuction) => {
        if (instructions_written[-1] == ".") {
            instructions_written.slice(0,-2)
            div_intructions_written.appendChild(document.create('br')
        }
        var text = document.createTextNode(instuction);
        div_intructions_written.appendChild(text);

    });
}

////////////////////////////////// NAVIGATION ENTRE LES QUESTIONS ///////////////////////////////////
est_file = true
function validate_part1() {


  if (pile1.conenu == [] && pile2.contenu == INIT_PILE_EXO1.reverse()) { // hack for pile
    alert("Felicitation")
    est_file = false;
    }
  incomplet = div_a_devoiler.hasAttribute("hidden");

  if (incomplet){
    alert("Le garage n'a pas encore été créé");
  }
  else {
        console.log("Partie 1 terminée");
      next_part();
  }
}
function validate_part2() {
   if (est_file) {
    contenu = garage.contenu
   }
   else {
    contenu = pile_assiettes.contenu
   }

  if (contenu.length == 1 && contenu[0] == "i"){
     console.log("Partie 2 terminée");
    next_part();

  }
  else {
      alert("Il faut ajouter l'élément 'i', en cas d'échec faire F5");
  }
}
function validate_part3() {
   if (est_file) {
    contenu = garage.contenu
   }
   else {
    contenu = pile_assiettes.contenu
   }
  if (contenu.join('') == "isn" ){
    console.log("Partie 3 terminée");
    next_part();
  }
  else {
      alert("Il faut ajouter les éléments 'n' et 's', en cas d'échec faire F5");
  }
}
function validate_part4() {
   if (est_file) {
    contenu = garage.contenu
    mot = "file"
    expected = reverseString("ns")
   }
   else {
    contenu = pile_assiettes.contenu
    mot = "pile"
    expected = reverseString("si")
   }
  if (contenu.join('') == expected ){
    console.log("Partie 4 terminée");
    next_part();
  }
  else {

      alert("Il faut dé"+mot+"r la " + mot+ ". Une méthode est faite pour ça. En cas d'échec faire F5");
  }
}
function validate_part5() {
   if (est_file) {
    contenu = garage.contenu
   }
   else {
    contenu = pile_assiettes.contenu
   }
  if (contenu.join('') == reverseString("digital") ){
    console.log("Partie 5 terminée");
    next_part();
  }
  else {
      alert("Courage");
  }
}
function validate_part6() {
  if (est_vide_called){
    est_vide_called = false;
    console.log("Partie 6 terminée");
    next_part();
  }
  else {
      alert("La méthode estvide permet de tester ça");
  }
}
function validate_part7() {
  if (est_vide_called && garage.contenu.length == 0){
    console.log("Partie 7 terminée");
    next_part();
  }
  else {
      alert("La méthode estvide permet de tester ça");
  }
}
current_part = null
function start() {
    if (current_part == null) {
    next_part()
    }
}
function next_part() {
    if (current_part == null) {
        current_part = 0
    }
    //Hide previous parts
    var responseItem = document.getElementById("part"+current_part);
    responseItem.style.display = "none";
    if (current_part != 0) {

    }
    current_part += 1

    // Reveal new one
    responseItem = document.getElementById("part"+current_part);
    responseItem.style.display = "block";
}
