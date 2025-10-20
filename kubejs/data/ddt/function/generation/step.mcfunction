execute at @e[type=minecraft:marker,tag=room_node] if entity @p[distance=..100] if block ~24 ~-2 ~ air positioned ~23 ~-23 ~-23 run function ddt:generation/room_selector
execute at @e[type=minecraft:marker,tag=room_node] if entity @p[distance=..100] if block ~ ~-2 ~24 air positioned ~-23 ~-23 ~23 run function ddt:generation/room_selector
execute at @e[type=minecraft:marker,tag=room_node] if entity @p[distance=..100] if block ~-24 ~-2 ~ air positioned ~-69 ~-23 ~-23 run function ddt:generation/room_selector
execute at @e[type=minecraft:marker,tag=room_node] if entity @p[distance=..100] if block ~ ~-2 ~-24 air positioned ~-23 ~-23 ~-69 run function ddt:generation/room_selector

execute at @e[type=minecraft:marker,tag=room_node] unless block ~24 ~-2 ~ air unless block ~-24 ~-2 ~ air unless block ~ ~-2 ~24 air unless block ~ ~-2 ~-24 air run kill @e[type=minecraft:marker,tag=room_node,sort=nearest,limit=1]
