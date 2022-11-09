
console.log("js chargé")
colors = [("ligth_red","#ffb3b3"),("light_blue","#ccddff"),("light_green","#b3ffb3"),("light_yellow","#ffffb3"),("light_purple","#e0b3ff"),("light_brown","#ffcc99"),("light_pink","#ff99ff"),
("dark_red","#ff0000"),("dark_blue","#4d4dff"),("dark_green","#00cc44"),("dark_purple","#9933ff"),("dark_brown","#cc8800"),("dark_pink","#e600e6"),("dark_yellow","#e6e600")]
const File  = {
    contenu: [],
    enfiler(element) {
        this.contenu.push(element)
        actualiserGarage()
    },
    creer() {
       actualiserGarage()
    }
};


file = Object.create(File);

function enfilerGarage(garage, element,index) {
        // Prepare new item (className, id and color)
       var li_item = document.createElement("li");
       li_item.className = "list-group-item"
       li_item.id = element
       nouvelleCouleur = colors[index % colors.length]
       console.log(nouvelleCouleur)
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