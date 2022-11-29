import pygame
from constants import *
from projets.makiland.Balle import Balle


class Joueur(pygame.sprite.Sprite):
    def __init__(self):
        super(Joueur, self).__init__()
        self.surf = pygame.Surface((JOUEUR_LARGEUR, JOUEUR_HAUTEUR))
        self.surf.fill((0, 0, 230))
        self.rect = self.surf.get_rect()
        self.rect.move_ip(ECRAN_LARGEUR/2, ECRAN_HAUTEUR - JOUEUR_HAUTEUR)

    def avancer(self):
        if self.rect.right < ECRAN_LARGEUR:
            self.rect.move_ip(VITESSE, 0)

    def reculer(self):
        self.rect.move_ip(-VITESSE, 0)
        pass  # A FAIRE

    def tirer(self):
        return Balle(self.rect.x, self.rect.y)

    def display(self, screen: pygame.Surface):
        screen.blit(self.surf, self.rect)
