scoreboard objectives add first_join dummy





execute at @e[type=minecraft:marker,tag=world_center] run tp @p[tag=!has_joined] ~ ~ ~

execute at @e[type=minecraft:marker,tag=world_center] unless score first_join first_join matches 1 run place template ddt:room1 ~-23 ~-23 ~-23
scoreboard players set first_join first_join 1

execute as @p[tag=!has_joined] run tag @s add has_joined