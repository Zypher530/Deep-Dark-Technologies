BlockEvents.rightClicked((event) => {
    const { hand, block, player, item, facing } = event
    if (hand != "MAIN_HAND") return

    if (!item.isEmpty()) return
    if (!player.isShiftKeyDown()) return
    if (block.id == "minecraft:sculk") block.popItemFromFace(Item.of("deeperdarker:soul_dust"), facing)
    if (block.id == "minecraft:sculk_vein") block.popItemFromFace(Item.of("kubejs:sculk_fiber"), facing)
    if (block.id == "minecraft:cracked_deepslate_tiles") block.popItemFromFace(Item.of("exdeorum:deepslate_pebble"), facing)
    // give blackstone pebble a chance to drop (10% here)
    if (block.id == "minecraft:cracked_deepslate_tiles" && Math.random() < 0.10) {
        block.popItemFromFace(Item.of("exdeorum:blackstone_pebble"), facing)
    }
    if (block.id == 'deeperdarker:cobbled_sculk_stone') block.popItemFromFace(Item.of("kubejs:sculk_pebble"), facing)

    player.swing()
})


ServerEvents.recipes(event => {
    event.remove({id:'exdeorum:string_mesh'})

    event.shapeless(
        Item.of('exdeorum:string_mesh'),
        Item.of('string', 9),

    )

    event.shapeless(
        //result
        Item.of('kubejs:sculk_string', 2),
        //ingredients
        Item.of('kubejs:sculk_fiber', 4)
    )
    
    event.shapeless(
        //result
        Item.of('kubejs:sculk_string_mesh'),
        //ingredients
        Item.of('kubejs:sculk_string', 9)
    )

    event.shapeless(
        Item.of('deeperdarker:cobbled_sculk_stone'),

        Item.of('kubejs:sculk_pebble', 4),
    )



    event.smelting('deeperdarker:soul_crystal', 'deeperdarker:soul_dust')
    .xp(0.1);


});