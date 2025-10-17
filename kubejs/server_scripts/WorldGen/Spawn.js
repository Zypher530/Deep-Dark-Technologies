// Set spawn point in the Hub
ServerEvents.loaded(event => {
    const server = event.server
    const overworld = server.getLevel('minecraft:overworld')
    
    // Set world spawn to your Hub coordinates
    overworld.setDefaultSpawnPos(
        BlockPos.of(0, -50, 0), // X, Y, Z - adjust to your Hub location
        0 // Spawn angle
    )
})

// Teleport new players to Hub
PlayerEvents.loggedIn(event => {
    const player = event.player
    
    // Check if first time joining
    if (!player.persistentData.contains('hasSpawnedInFacility')) {
        player.teleportTo(
            'minecraft:overworld',
            0,    // X coordinate of Hub
            -49,  // Y coordinate (1 block above floor)
            0,    // Z coordinate of Hub
            0,    // Yaw
            0     // Pitch
        )
        
        // Mark as spawned
        player.persistentData.putBoolean('hasSpawnedInFacility', true)
    }
})