
tiles.set_current_tilemap(tilemap("""level1"""))

tiles.set_tilemap(tilemap("""
    level
"""))
effects.star_field.start_screen_effect()

steve: Sprite = sprites.create(img("""
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
"""),
    SpriteKind.player)
steve.set_position(80, 100)