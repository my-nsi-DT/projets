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
INIT_PILE_EXO2 = ["N","S","I"]
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
current_part = null;
function restart() {
    pile1 = new Pile()
    pile2 = new Pile()
    if (!current_part || current_part == 1) {
        pile1.contenu = INIT_PILE_EXO1
    }
    else {
    pile1.contenu = INIT_PILE_EXO2
    }
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
//    console.log(item)
    update_instructions_written()
}

function update_instructions_written() {
    div_intructions_written = document.getElementById("intructions_written")
    div_intructions_written.innerText = ""
    current_text=""


    instructions_written.forEach( (instruction, index) => {
        // Remove the ..
       if  (instruction.slice(-2,-1) == ".") {
           instruction_cleaned = instruction.slice(0,-2) + "    ";
        }
        else {
                instruction_cleaned = instruction
        }

       var text = document.createTextNode(instruction_cleaned);
       text.className="code";
        // Ajout indentation
//       index_tant_que = instructions_written.indexOf("Tant que ..")
//        if (index_tant_que != -1 and index_tant_que <= index) {
       if (instruction != "Tant que .." && instruction != "non .." && instruction != "pile1.estVide()" && ":") {
            text.className="code indent";
       }


        div_intructions_written.appendChild(text);

        if (instruction.slice(-2,-1) != "." && instruction.slice(-2,-1) != "░") {
            l = instruction
            div_intructions_written.appendChild(document.createElement('br'));
        }

    });
}

////////////////////////////////// NAVIGATION ENTRE LES QUESTIONS ///////////////////////////////////
est_file = true
function validate_part1() {


  if (pile1.contenu.length == 0 && pile2.contenu.join("") === "BA") { // hack for pile
    console.log("Partie 1 validée")
    next_part()
    restart()
    }
   else {
    alert("Il faut que la pile1 soit vide et que la pile 2 continnent les même éléments de la pile 1")
   }
}

function validate_part2() {


  if (pile1.contenu.length == 0 && pile2.contenu.join("") === "ISN") { // hack for pile
    console.log("Partie 2 validée")
    next_part()
    }
   else {
    alert("Il faut que la pile1 soit vide et que la pile 2 continnent les même éléments de la pile 1")
   }
}
function validate_part3() {

   if (instructions_written.join("")  == "Tant que ..non ..pile1.estVide()░░░░░░element = ..pile1.depiler()░░░░░░pile2.empiler(element)") {
        next_part()
   }
   else {
        alert("Désolé mais ce n'est pas ça, as-tu ? 1. Vérifier l'indentation (block rouge) dans le tant que ? 2. Dérouler l'algorithme pour le cas AB");
   }

  if (contenu.length == 1 && contenu[0] == "i"){
     console.log("Partie 2 terminée");
    next_part();

  }
  else {
      alert("Il faut ajouter l'élément 'i', en cas d'échec faire F5");
  }
}

function start() {
    if (!current_part) {
        next_part()
    }
}
function next_part() {
    if (current_part == null) {
        current_part = 0
    }
    //Hide previous parts
    var responseItem = document.getElementById("part"+current_part);
    if (current_part != 3) {
        responseItem.style.display = "none";
    }
    current_part += 1

    // Reveal new one
    responseItem = document.getElementById("part"+current_part);
    if (current_part != 3) {
        responseItem.style.display = "block";
    }
    else {
        var boutonValider = document.getElementById("valider3");
        boutonValider.className = "btn btn-primary"
        var consignes = document.getElementById("consignes");
        consignes.style.display = "block";
        responseItem.style.display = "flex";
    }
}

