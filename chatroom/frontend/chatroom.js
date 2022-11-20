var t=setInterval(actualiserMessages,1000);
function actualiserMessages() {
    console.log("Actualisation des messages");

    // Je définis ma requête ajax
    $.ajax({
            // Adresse à laquelle la requête est envoyée
//            url: 'http://localhost:5000/messages/',
            url: 'http://ymougenel.com:5002/messages/',
            // Méthode utilisée (POST/GET)
            type: 'GET',
            crossDomain: true,
            contentType: 'jsonp',
            processData: false,
        // La fonction à apeller si la requête aboutie
        success: function (data) {
            // J'affiche mes données
            l=data
            var div = document.getElementById("messages");
            div.innerHTML = "";
            data["contenu"].reverse().forEach((m)=> {

                ajouter_message(div,m)
            })
            console.log(data);
        },

        // La fonction à appeler si la requête n'a pas abouti
        error: function() {
            // J'affiche un message d'erreur
            alert("Erreur dans l'appel")
        }

    });
}

function ajouter_message(div,data) {

   var tag = document.createElement("p");
   tag.className = "alert"
   tag.style.backgroundColor = data["couleur"]

   var expediteur = document.createTextNode(data["expediteur"]+":  ");
   var message = document.createTextNode(data["message"]);
   tag.appendChild(expediteur);
   tag.appendChild(message)

   div.appendChild(tag);
}