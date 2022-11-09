colors = [("ligth_red","#ffb3b3"),("light_blue","#ccddff"),("light_green","#b3ffb3"),("light_yellow","#ffffb3"),("light_purple","#e0b3ff"),("light_brown","#ffcc99"),("light_pink","#ff99ff"),
("dark_red","#ff0000"),("dark_blue","#4d4dff"),("dark_green","#00cc44"),("dark_purple","#9933ff"),("dark_brown","#cc8800"),("dark_pink","#e600e6"),("dark_yellow","#e6e600")]
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
            this.contenu = this.contenu.slice(0,-1)
            actualiserGarage()
        }
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
      next_part();
  }
}
function validate_part2() {

  if (garage.contenu.length == 1 && garage.contenu[0] == "i"){
    next_part();

  }
  else {
      alert("Il faut ajouter l'élément 'i', en cas d'échec faire F5");
  }
}
function validate_part3() {
    console.log(garage.contenu.join(''))
  if (garage.contenu.join('') == "isn" ){
    next_part();
  }
  else {
      alert("Il faut ajouter les éléments 'n' et 's', en cas d'échec faire F5");
  }
}
function validate_part4() {

  if (true ){
    next_part();
  }
  else {
      alert("TODO");
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
   console.log(current_part)
   console.log(responseItem)
    responseItem.style.display = "none";
    if (current_part != 0) {

    }
    current_part += 1

    // Reveal new one
    responseItem = document.getElementById("part"+current_part);
    responseItem.style.display = "block";
}