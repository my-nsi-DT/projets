import pygame
import sys
from constants import *
from projets.makiland.Vaisseau import Vaisseau
from projets.makiland.Monstre import Monstre
from pygame.locals import (
    K_UP,
    K_DOWN,
    K_LEFT,
    K_RIGHT,
    K_ESCAPE,
    KEYDOWN,
    QUIT,
    K_SPACE,
)

if __name__ == "__main__":
    pygame.init()
    screen = pygame.display.set_mode((ECRAN_LARGEUR, ECRAN_HAUTEUR))

    CUSTOM_TYPE = pygame.USEREVENT + 1
    monstres = pygame.sprite.Group()
    missiles = pygame.sprite.Group()
    vaisseau_joueur = Vaisseau()
    clock = pygame.time.Clock()
    for i in range(8):
        monstres.add(Monstre(i * MONSTRE_LARGEUR + i * 3, 0))

    while True:
        # Process collisions
        for missile in missiles:
            monstres_touches = pygame.sprite.spritecollide(missile, monstres, False)
            monstres.remove(monstres_touches)

        # Handle events
        for event in pygame.event.get():
            if event.type == KEYDOWN:
                if event.key == K_ESCAPE:
                    sys.exit()
            elif event.type == QUIT:
                sys.exit()

        # Touches pressées
        touches_clavier = pygame.key.get_pressed()
        if touches_clavier[K_LEFT]:
            vaisseau_joueur.reculer()
        elif touches_clavier[K_RIGHT]:
            vaisseau_joueur.avancer()
        elif touches_clavier[K_SPACE]:
            missiles.add(vaisseau_joueur.tirer())

        # Affiche les éléments
        screen.fill(COULEUR_ECRAN)
        vaisseau_joueur.display(screen)
        for missile in missiles:
            missile.deplacer()
            missile.display(screen)
        for monstre in monstres:
            monstre.display(screen)
        vaisseau_joueur.display(screen)
        pygame.display.flip()

        # Ensure frame rate
        clock.tick(30)
