import pygame, sys

from constants import *

class Balle(pygame.sprite.Sprite):
    def __init__(self, x, y):
        super(Balle, self).__init__()
        self.surf = pygame.Surface((BALLE_TAILLE, BALLE_TAILLE))
        self.surf.fill(COULEUR_BALLE)
        self.rect = self.surf.get_rect()

        self.rect.move_ip(x, y)
        self.vx = 0
        self.vy = -1
        self.vitesse = VITESSE_BALLE

    def deplacer(self):
        self.rect.move_ip(self.vx * self.vitesse, self.vy * self.vitesse)

    def display(self, screen: pygame.Surface):
        screen.blit(self.surf, self.rect)
