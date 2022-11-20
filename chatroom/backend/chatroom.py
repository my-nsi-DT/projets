from flask import Flask, jsonify, request, redirect, url_for, render_template
from flask_api import status
from flask_cors import CORS
from flasgger import Swagger
from datetime import datetime
import json
DATE_FORMAT="%d/%m/%Y %H:%M:%S"
app = Flask(__name__)
cors = CORS(app, resources={r"*": {"origins": "*"}})
swagger = Swagger(app)
messages = {"messages": [ 
		{"expediteur":"Professeur",
		"date": datetime.now().strftime(DATE_FORMAT),
		"couleur": "red",
		"contenu": "Bienvenue dans l'activité ChatRoom NSI. TODO Consignes"}
		]
}

@app.route('/messages/', methods=['GET'])
def get_all_messages():
    """Récupérer tous les déchets
    Renvoit tous les déchets présents dans la base
    ---
    definitions:
      Dechet:
        type: object
        properties:
          latitude:
            type: integer
          longitude:
            type: integer
          categorie:
            type: string
    responses:
      200:
        description: La listes des déchets
    """
    return messages

@app.route('/message/', methods=['POST'])
def ajout_message():
    # On recupere le corps (payload) de la requete
    payload = request.form.to_dict()
    if "couleur" not in payload:
        payload["couleur"] = "grey";
    payload["date"] = datetime.now().strftime(DATE_FORMAT);
    messages["messages"].append(payload)
    print(payload)
    return "ok",  status.HTTP_204_NO_CONTENT
        
if __name__ == '__main__':
    print("Hello from Chatroom")
    app.run(host='0.0.0.0', port=5000, debug=True)
