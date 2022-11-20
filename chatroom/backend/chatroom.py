from flask import Flask, jsonify, request, redirect, url_for, render_template
from flask_api import status
from flask_cors import CORS
from flasgger import Swagger

import json

app = Flask(__name__)
cors = CORS(app, resources={r"*": {"origins": "*"}})
swagger = Swagger(app)
messages = {"messages": [ 
		{"expediteur":"yann.sensei",
		"date": "now",
		"couleur": "red",
		"contenu": "It fk works"}
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
    """Publication d'un message
    Publie un déchet (lat,long et categorie)
    ---
    parameters:
      - name: expediteur
        in: path
        type: string
        required: true
        default: "yann.sensei"
      - name: date
        in: path
        type: string
        required: true
        default: "0"
      - name: contenu
        in: path
        type: string
        required: true
        default: "Mon contenu de message"
    responses:
      200:
        description: Le déchet publier
        schema:
          $ref: '#/definitions/Dechet'
    """
    # On recupere le corps (payload) de la requete
    payload = request.form.to_dict()
    messages["messages"].append(payload)
    print(payload)
    return "ok",  status.HTTP_204_NO_CONTENT
        
if __name__ == '__main__':
    print("Hello from Chatroom")
    app.run(host='0.0.0.0', port=5000, debug=True)
