controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    steve.setPosition(60, 100)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    steve.setPosition(30, 100)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    steve.setPosition(130, 100)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    steve.setPosition(100, 100)
})
let steve: Sprite = null
let speed = 40
tiles.setCurrentTilemap(tilemap`level1`)
tiles.setTilemap(tilemap`level2`)
effects.starField.startScreenEffect()
steve = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . d 9 9 9 d . . . . . . 
    . . . . . d 9 9 9 d . . . . . . 
    . . . . . d 8 8 8 d . . . . . . 
    . . . . . d 8 8 8 d . . . . . . 
    . . . . . . 8 . 8 . . . . . . . 
    . . . . . . 8 . 8 . . . . . . . 
    . . . . . . c . c . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
steve.setPosition(80, 100)
game.onUpdateInterval(2000, function () {
    speed += 1
})
game.onUpdateInterval(500, function () {
	
})
