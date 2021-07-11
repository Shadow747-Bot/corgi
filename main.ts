scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    game.over(true)
})
let myCorg = corgio.create(SpriteKind.Player)
myCorg.follow()
myCorg.horizontalMovement()
myCorg.verticalMovement()
myCorg.updateSprite()
tiles.setTilemap(tilemap`level1`)
