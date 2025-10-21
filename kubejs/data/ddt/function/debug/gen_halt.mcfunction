scoreboard players add generation generation 1
execute if score generation generation matches 0 run say Generation halted.
execute if score generation generation matches 1 run say Generation resumed.
execute if score generation generation matches 2 run scoreboard players set generation generation 0