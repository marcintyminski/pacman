controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite)
})
let mySprite: Sprite = null
tiles.setTilemap(tilemap`level4`)
mySprite = sprites.create(assets.image`Pac Man`, SpriteKind.Player)
mySprite.setBounceOnWall(true)
let ghost = sprites.create(assets.image`ghost`, SpriteKind.Enemy)
ghost.setBounceOnWall(true)
ghost.setPosition(57, 58)
let dot = tiles.getTilesByType(assets.tile`myTile`)
let index = 0
while (index <= 13) {
    index += 1
    tiles.setTileAt(tiles.getTileLocation(index, index), assets.tile`myTile`)
}
scene.cameraFollowSprite(mySprite)
info.setLife(3)
forever(function () {
    ghost.follow(mySprite)
    if (controller.left.isPressed()) {
        mySprite.setImage(assets.image`Pac Man0`)
    } else if (controller.right.isPressed()) {
        mySprite.setImage(assets.image`Pac Man`)
    }
    if (mySprite.overlapsWith(ghost) && info.life() > 0) {
        info.changeLifeBy(-1)
        mySprite.destroy()
        mySprite = sprites.create(assets.image`Pac Man`, SpriteKind.Player)
    }
})
