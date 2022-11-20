function actualiserMessages() {
    console.log("Actualisation des messages");

    // Je définis ma requête ajax
    $.ajax({

        // Adresse à laquelle la requête est envoyée
        url: 'http://localhost:5000/messages/',

        // Le délai maximun en millisecondes de traitement de la demande
        timeout: 4000,

        // La fonction à apeller si la requête aboutie
        success: function (data) {
            // Je charge les données dans box
            console.log(data);
        },

        // La fonction à appeler si la requête n'a pas abouti
        error: function() {
            // J'affiche un message d'erreur
            console.log("Erreur dans l'appel")
        }

    });
}