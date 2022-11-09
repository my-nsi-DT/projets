colors = [("ligth_red","#ffb3b3"),("light_blue","#ccddff"),("light_green","#b3ffb3"),("light_yellow","#ffffb3"),("light_purple","#e0b3ff"),("light_brown","#ffcc99"),("light_pink","#ff99ff"),
("dark_red","#ff0000"),("dark_blue","#4d4dff"),("dark_green","#00cc44"),("dark_purple","#9933ff"),("dark_brown","#cc8800"),("dark_pink","#e600e6"),("dark_yellow","#e6e600")]
function File() {
    this.contenu= [];
    this.enfiler= function(element) {
        this.contenu.push(element)
        actualiserGarage()
    };
    this.creer = function() {
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


file = new File();//Object.create(File);

function enfilerGarage(garage, element,index) {
        // Prepare new item (className, id and color)
       var li_item = document.createElement("li");
       li_item.className = "list-group-item"
       li_item.id = element
       nouvelleCouleur = colors[index % colors.length]
       li_item.style.backgroundColor = nouvelleCouleur
       // Ajoute l'item à la liste
       var text = document.createTextNode(element);
       li_item.appendChild(text);
       garage.appendChild(li_item);
}
function actualiserGarage() {
       var ul_liste = document.getElementById("garage");
       ul_liste.innerHTML = '';

       file.contenu.forEach((item,index) => {
            enfilerGarage(ul_liste, item,index);
       })

}

// DEBUG
file.creer()
file.enfiler("a")
file.enfiler("b")

function validate_part3() {
  const cmd = document.getElementById("cmd3");
  if (cmd.value.replace(" ","") == "mkdirimages") {
    next_part();
  }
  else {
      alert("Dossier images absent");
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