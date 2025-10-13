// Visit the wiki for more info - https://kubejs.com/
StartupEvents.registry('item', event => {
        event.create('sculk_string')
        .displayName('Sculk String')
        .maxStackSize(64)
        .tag('c:strings') // Make it a string for crafting purposes


        event.create('sculk_fiber')
        .displayName('Sculk Fiber')
        .maxStackSize(64)
        .tag('c:fibers')
        
        // Make it a fiber for crafting purposes

        event.create('sculk_pebble')
        .displayName('Sculk Pebble')
        .maxStackSize(64)
        .tag('c:pebbles') // Make it a pebble for crafting purposes

        event.create('sculk_string_mesh')
        .displayName('Sculk String Mesh')
        .maxStackSize(16)
        .tag('exdeorum:sieve_meshes') // Make it a string mesh for crafting purposes
});



ItemEvents.modification(event => {
        event.modify('deeperdarker:soul_crystal', item => {
                item.burnTime = 1600; // Set burn time to 1600 ticks (80 seconds)
        })

        event.modify('deeperdarker:soul_dust', item => {
                item.burnTime = 200; // Set burn time to 200 ticks (10 seconds)
        })
});