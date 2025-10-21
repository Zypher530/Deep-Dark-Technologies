scoreboard players set max RNG_Constant 3
function ddt:init/rng

$execute if score RNG RNG_Variable matches 1 run place template ddt:stage1/bigroom ~ ~ ~ $(rotation)
$execute if score RNG RNG_Variable matches 2 run place template ddt:stage1/staircase ~ ~ ~ $(rotation)
$execute if score RNG RNG_Variable matches 2 positioned ~$(x) ~ ~$(z) run place template ddt:stage1/eleveatorroom ~ ~ ~ none

