mot_secret = "nsi" # Le mot secret à trouver
mauvaises_lettres = [] # Les mauvaises lettre proposée par le joueur
lettres_trouvees = [] # Les lettres trouvées par le joueurs
nombre_vie =  6 # Le nombre de vies restantes

def afficher_jeu():
    """
        Fonction affichant l'état courant du jeu
    """
    global lettres_trouvees
    print("\n\n****************************")
    print("Etat du jeu : ")
    print(lettres_trouvees)
    print("Mauvaise lettres : " + str(mauvaises_lettres))
    print("Vies : " + "♥ " * nombre_vie)
    print("****************************")

######## DEBUT DU JEU ##############
while nombre_vie > 0:
    afficher_jeu()
    # A FAIRE 1 : Demander la lettre à l'utisateur
    lettre = "x"

    # A FAIRE 2 : Tester si la lettre fait partie du mot
        # Si oui :
        #   afficher "bravo" (on changera ça par la suite)
        # Sinon :
        #   Afficher "La lettre n'est pas présente... vous perdez une vie"
        #   Ajouter la lettre au tableau des mauvaises mauvaises_lettres
        #   Enlever 1 vie au joueur uniquement dans ce cas
    nombre_vie = nombre_vie - 1

######## SORTIE DU WHILE = PLUS DE VIE ##############
print("Fin du jeu, vous avez perdu, le mot était : " + mot_secret)
#####################################################
