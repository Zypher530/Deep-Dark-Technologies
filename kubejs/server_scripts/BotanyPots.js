ServerEvents.recipes(event => {
	// Register echo_soil as a valid Botany Pots soil
    event.recipes.botanypots.soil(
        "deeperdarker:echo_soil",
        DisplayState.basic("deeperdarker:echo_soil"),
        1.0,
        1.0
    );

    event.recipes.botanypots.crop(
        "deeperdarker:echo_sapling",
        "deeperdarker:echo_soil",
        [
            DisplayState.basic("deeperdarker:echo_sapling"),
        ],
        [
            DropItem.item("deeperdarker:echo_log", 1.0),
            DropItem.item("deeperdarker:echo_leaves", 0.01),
            DropItem.item("deeperdarker:echo_sapling", 0.001),
            DropItem.item("deeperdarker:sculk_gleam", 0.05)

        ],
        100,
        1
    );
});
