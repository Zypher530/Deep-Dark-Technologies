gamerule commandBlockOutput false
gamerule doTraderSpawning false
gamerule doInsomnia false
gamerule doPatrolSpawning false
gamerule disableRaids true
gamerule doDaylightCycle false
gamerule sendCommandFeedback true


scoreboard objectives add generation dummy
scoreboard objectives add sector dummy

scoreboard players set generation generation 1

#dev stuf disable for release
execute as @e run effect give @s night_vision 1000000 0 true