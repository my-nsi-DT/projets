import pygame
from constants import *
from projets.makiland.Missile import Missile


class Vaisseau(pygame.sprite.Sprite):
    def __init__(self):
        super(Vaisseau, self).__init__()
        self.surf = pygame.Surface((LARGEUR_VAISSEAU, HAUTEUR_VAISSEAU))
        self.surf.fill(COULEUR_VAISSEAU)
        self.rect = self.surf.get_rect()
        self.rect.move_ip(ECRAN_LARGEUR / 2, ECRAN_HAUTEUR - HAUTEUR_VAISSEAU)

    def avancer(self):
        if self.rect.right < ECRAN_LARGEUR:
            self.rect.move_ip(VITESSE, 0)

    def reculer(self):
        self.rect.move_ip(-VITESSE, 0)
        pass  # A FAIRE

    def tirer(self):
        pass
        return Missile(self.rect.x, self.rect.y)

    def display(self, screen: pygame.Surface):
        screen.blit(self.surf, self.rect)
