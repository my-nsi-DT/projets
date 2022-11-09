colors = [("ligth_red","#ffb3b3"),("light_blue","#ccddff"),("light_green","#b3ffb3"),("light_yellow","#ffffb3"),("light_purple","#e0b3ff"),("light_brown","#ffcc99"),("light_pink","#ff99ff"),
("dark_red","#ff0000"),("dark_blue","#4d4dff"),("dark_green","#00cc44"),("dark_purple","#9933ff"),("dark_brown","#cc8800"),("dark_pink","#e600e6"),("dark_yellow","#e6e600")]
function reverseString(str) {
    return str.split("").reverse().join("");
}

var est_vide_called = false;

function File() {
    this.contenu= [];
    this.enfiler= function(element) {
        this.contenu.push(element)
        actualiserGarage()
    };
    this.creer = function() {

        document.getElementById("div_garage").removeAttribute("hidden");
       actualiserGarage()
    };
    this.defiler= function() {
        if (this.contenu.length == 0) {
            alert("Le garage est vide, defilement impossible")
        }
        else {
            this.contenu = this.contenu.slice(1)
            actualiserGarage()
        }
    }
    this.estVide = function() {
        est_vide_called = true;
        return this.contenu.length == 0;
    }
};


garage = new File();//Object.create(File);

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
function actualiserGarage() {
       var ul_liste = document.getElementById("garage");
       ul_liste.innerHTML = '';

       var items = []
       garage.contenu.forEach((item,index) => {
            items.push(creerElement(item,index));
       })
       items = items.reverse()

       // Ajoute l'item à la liste
       items.forEach((item) => {
          ul_liste.appendChild(item);
       })

}

// DEBUG ////////////////////////////////////////////////////
//file.creer()
//file.enfiler("a")
//file.enfiler("b")

/////////////////////////////////////////////////////////////


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
function validate_part1() {
  incomplet = document.getElementById("div_garage").hasAttribute("hidden");

  if (incomplet){
    alert("Le garage n'a pas encore été créé");
  }
  else {
        console.log("Partie 1 terminée");
      next_part();
  }
}
function validate_part2() {

  if (garage.contenu.length == 1 && garage.contenu[0] == "i"){
     console.log("Partie 2 terminée");
    next_part();

  }
  else {
      alert("Il faut ajouter l'élément 'i', en cas d'échec faire F5");
  }
}
function validate_part3() {
  if (garage.contenu.join('') == "isn" ){
    console.log("Partie 3 terminée");
    next_part();
  }
  else {
      alert("Il faut ajouter les éléments 'n' et 's', en cas d'échec faire F5");
  }
}
function validate_part4() {
  if (garage.contenu.join('') == reverseString("ns") ){
    console.log("Partie 4 terminée");
    next_part();
  }
  else {
      alert("Il faut defiler la file. Une méthode est faite pour ça. En cas d'échec faire F5");
  }
}
function validate_part5() {
  if (garage.contenu.join('') == reverseString("digital") ){
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
      alert("Il faut ajouter les éléments 'n' et 's', en cas d'échec faire F5");
  }
}
function validate_part7() {
  if (est_vide_called && garage.contenu.length == 0){
    console.log("Partie 7 terminée");
    next_part();
  }
  else {
      alert("Il faut ajouter les éléments 'n' et 's', en cas d'échec faire F5");
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