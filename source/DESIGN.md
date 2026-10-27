# Night Trail – Technical Design

## View
- 2D, 3/4 top-down (not 3D)
- Y-sort so the player can walk behind trees
- Shadow blobs under objects so they look like they stand on the ground

## Day/night
- TimeManager keeps track of time and sends signals (dawn, sunset, night)
- 1 day = 8 minutes
- CanvasModulate colours the world, colours are in a gradient file I can edit
- Lights get brighter as it gets darker

## Lights
- Headlamp: a cone that turns with the player and uses battery (F to toggle)
- Campfire: flickering light and sparks
- All numbers (battery drain, beam size etc.) are in balance.tres

## Shadows
- Occluders only at the bottom of trees and rocks, so shadows fall on the ground
- Tree tops are on a separate light layer so they don't get shadows

## Gameplay
- Each light has an Area2D with the same size, so the game knows if the player is in the light
- Campfire area = safe zone

## Code
- Player uses a state machine (Idle, Walk, Sprint, Interact)
- Systems talk to each other with signals
- Godot 4.7.2, Compatibility renderer, 640x360 pixel art