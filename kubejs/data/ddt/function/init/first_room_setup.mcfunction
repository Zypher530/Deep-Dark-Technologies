scoreboard objectives add first_gen dummy
execute unless score first_gen first_gen matches 0 run place template ddt:stage1/eleveatorroom ~-23 ~-23 ~-23

scoreboard players set first_gen first_gen 1

tp @a[tag=!first] @s
execute as @a at @s run tag @a[tag=!first] add first