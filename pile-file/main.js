colors = [("ligth_red","#ffb3b3"),("light_blue","#ccddff"),("light_green","#b3ffb3"),("light_yellow","#ffffb3"),("light_purple","#e0b3ff"),("light_brown","#ffcc99"),("light_pink","#ff99ff"),
("dark_red","#ff0000"),("dark_blue","#4d4dff"),("dark_green","#00cc44"),("dark_purple","#9933ff"),("dark_brown","#cc8800"),("dark_pink","#e600e6"),("dark_yellow","#e6e600")]
function reverseString(str) {
    return str.split("").reverse().join("");
}

var est_vide_called = false;

//////////////////////////////////////////////////////////////////////////////////////////////////////// Objet FILE/PILE ////////////////////////////////////////////////////////////////////////////////////////////////////////
function File() {
    this.contenu= [];
    this.enfiler= function(element) {
        this.contenu.push(element)
        actualiser()
    };
    this.creer = function() {

        document.getElementById("div_garage").removeAttribute("hidden");
       actualiser()
    };
    this.defiler= function() {
        if (this.contenu.length == 0) {
            alert("Le garage est vide, defilement impossible")
        }
        else {
            this.contenu = this.contenu.slice(1)
            actualiser()
        }
    }
    this.estVide = function() {
        est_vide_called = true;
        return this.contenu.length == 0;
    }
};
function Pile() {
    this.contenu= [];
    this.empiler= function(element) {
        this.contenu.push(element)
        actualiser()
    };
    this.creer = function() {
      document.getElementById("div_plates").removeAttribute("hidden");
      actualiser()
    };
    this.depiler= function() {
        if (this.contenu.length == 0) {
            alert("La pile d'assiete est vide, depilement impossible")
        }
        else {
            this.contenu = this.contenu.slice(0,-1)
            actualiser()
        }
    }
    this.estVide = function() {
        est_vide_called = true;
        return this.contenu.length == 0;
    }
};

garage = new File();//Object.create(File);
pile_assiettes = new Pile()

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
        page = "File"
       var ul_liste = document.getElementById("garage")
       if (ul_liste == null) { // hack for pile
        page = "Pile"
         ul_liste = document.getElementById("plates")
       }
       ul_liste.innerHTML = '';

       var items = []
       if (page == "File") {
            structure = garage
       } //TODO elif pour manipulation
       else {
            structure = pile_assiettes
       }

       structure.contenu.forEach((item,index) => {
            items.push(creerElement(item,index));
       })
       items = items.reverse()

       // Ajoute l'item à la liste
       items.forEach((item) => {
          ul_liste.appendChild(item);
       })

}

//////////////////////////////////////////////////////////////////////////////////////////////////////// DEBUG ////////////////////////////////////////////////////////////////////////////////////////////////////////
//file.creer()
//file.enfiler("a")
//file.enfiler("b")

/////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////// Affichage Questions ////////////////////////////////////////////////////////////////////////////////////////////////////////

//function validate_part3() {
//  const cmd = document.getElementById("cmd3");
//  if (cmd.value.replace(" ","") == "mkdirimages") {
//    next_part();
//  }
//  else {
//      alert("Dossier images absent");
//  }
//
//}
////////////////////////////////// NAVIGATION ENTRE LES QUESTIONS ///////////////////////////////////
est_file = true
function validate_part1() {

  div_a_devoiler = document.getElementById("div_garage")
  if (div_a_devoiler == null) { // hack for pile
    div_a_devoiler = document.getElementById("div_plates");
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
