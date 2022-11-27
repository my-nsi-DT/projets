//var t=setInterval(actualiserMessages,1000);

function actualiserMessages() {
    console.log("Actualisation des messages");

    // Je définis ma requête ajax
    $.ajax({
            // Adresse à laquelle la requête est envoyée
            url: 'http://localhost:5000/messages/',
//            url: 'http://ymougenel.com:5002/messages/',
            // Méthode utilisée (POST/GET)
            type: 'GET',
            crossDomain: true,
            contentType: 'jsonp',
        // La fonction à apeller si la requête aboutie
        success: function (messages) {
            // J'affiche mes données
            ajouter_messages(messages);
        },

        // La fonction à appeler si la requête n'a pas abouti
        error: function() {
            // J'affiche un message d'erreur
            alert("Erreur dans l'appel")
        }

    });
}
actualiserMessages();
function ajouter_messages(messages) {
    var div = document.getElementById("messages");
    div.innerHTML = "";
    messages["contenu"].reverse().forEach((contenu)=> {
       var tag = document.createElement("p");
       tag.className = "alert message"
       tag.style.backgroundColor = contenu["couleur"]
       tag.style.color = contenu["couleur_texte"]
       var expediteur = document.createTextNode(contenu["expediteur"]+":  ");
       var message = document.createTextNode(contenu["message"]);
       tag.appendChild(expediteur);
       tag.appendChild(message)
       div.appendChild(tag);
    });

}