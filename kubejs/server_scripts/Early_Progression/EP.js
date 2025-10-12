BlockEvents.rightClicked((event) => {
    const { hand, block, player, item, facing } = event
    if (hand != "MAIN_HAND") return

    if (!item.isEmpty()) return
    if (!player.isShiftKeyDown()) return
    if (block.id == "minecraft:sculk") block.popItemFromFace(Item.of("deeperdarker:soul_dust"), facing)
    if (block.id == "minecraft:sculk_vein") block.popItemFromFace(Item.of("deeperdarker:sculk_tendrils"), facing)
    if (block.id == "minecraft:cracked_deepslate_tiles") block.popItemFromFace(
        [
            Item.of("exdeorum:deepslate_pebble", 1),
            Item.of("exdeorum:blackstone_pebble", 0.02),

        ],

         facing)
    
    player.swing()
})


ServerEvents.recipes(event => {

    event.shapeless(
        //result
        Item.of('minecraft:string', 2),
        //ingredients
        Item.of('deeperdarker:sculk_tendrils', 4)
        //TODO: change string into a more fitting item (like sculk fiber or something)
    )
    
});