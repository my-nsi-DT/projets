import pygame
import sys
from pygame.locals import (
    K_UP,
    K_DOWN,
    K_LEFT,
    K_RIGHT,
    K_ESCAPE,
    KEYDOWN,
    QUIT,
)
# Constants
SCREEN_WIDTH = 800
SCREEN_HEIGHT = 600
ELEMENT_COLOR = "red"

class Element(pygame.sprite.Sprite):
    def __init__(self):
        super(Element, self).__init__()
        # self.surf = pygame.image.load("assets/image.jpeg")
        self.surf = pygame.Surface((75, 50))
        self.surf.fill(ELEMENT_COLOR)
        self.rect = self.surf.get_rect()
        self.rect.move_ip(SCREEN_WIDTH / 2, SCREEN_HEIGHT * 3 / 4)

    def display(self, screen: pygame.Surface):
        screen.blit(self.surf, self.rect)


if __name__ == "__main__":
    pygame.init()
    screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))

    CUSTOM_TYPE = pygame.USEREVENT + 1

    all_sprites = pygame.sprite.Group()
    element = Element()
    all_sprites.add(element)
    clock = pygame.time.Clock()

    while True:
        # Process collisions
        # collision = pygame.sprite.spritecollide(element, [all_sprites], False)
        # if collision:
        #     print("Collision")

        # Handle events
        for event in pygame.event.get():
            if event.type == KEYDOWN:
                if event.key == K_ESCAPE:
                    sys.exit()
            elif event.type == QUIT:
                sys.exit()
            elif event.type == CUSTOM_TYPE:
                print("Custom event received")

        pressed_keys = pygame.key.get_pressed()
        if pressed_keys[K_UP]:
            print("Move Up")

    # Display elements
    screen.fill(BACKGROUND_COLOR)
    for sprite in all_sprites:
        sprite.display(screen)

    pygame.display.flip()
    # Ensure frame rate
    clock.tick(30)