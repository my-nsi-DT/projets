import pygame
from constants import *


class Monstre(pygame.sprite.Sprite):
    def __init__(self, x, y):
        super(Monstre, self).__init__()
        self.surf = pygame.image.load("./images/monstre.png")
        self.surf = pygame.transform.scale(self.surf, (MONSTRE_LARGEUR, MONSTRE_HAUTEUR))
        self.rect = self.surf.get_rect()
        self.rect.move_ip(x, y)

    def display(self, screen: pygame.Surface):
        screen.blit(self.surf, self.rect)
