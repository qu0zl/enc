/* Copyright 2018 Greg Farrell <greg at gregfarrell dot org>
   This code may not be used without permission.
   If you'd like to use this for your own product then please ask and I'll swap you the rights to use it for that purpose in exchange for a signed copy of your product or some such. */

var stat_blocks = {
    BlackPudding:"Black Pudding: HD 10; AC 6[13]; Atk attack (3d8); Move 6; Save 5; AL N; CL/XP 12/2000;<br>Special: acidic surface, divides when hit with lightning, immune to cold. Any weapons or armor contacting a black pudding will be eaten away by the acid as follows; weapon (1 hit by the weapon), chainmail or lesser armor (1 hit by pudding), plate mail (2 hits by the pudding). If a weapon or armor is magical it can take an additional hit per +1 before being dissolved.",
}

var tsar = {
    AcidRain:
    {
        name:"Acid Rain",
        text:"See The Ashen Waste (chapter 4). If the party is in the rift, they do not have any chance to detect the coming storm before it hits because of their limited view of the sky. However, if within the rift and able to make it to the canyon wall, the natural overhangs in said wall provide some cover reducing the damage from the acid range by half.",
    },
    BabauDemons:
    {
        name:"Babau Demons",
        text:"These vicious brutes sally forth from the ruins of Tsar. They have forged a truce with Malerix (see Part 3 - The Western Front chapter 8, Area R4) who allows them to pass unmolested. At night they cloak themselves in darkness in order to creep close to a party in order to attack with surprise and make sneak attacks.",
    },
    BlackPudding:
    {
        name:"Black Pudding",
        text:"These horrors creep up through the many fissurs of the rift that reach to the Underdark. They creep about in the shadows looking for prey to feed upon. Occasionally they clamber even to the highlands around the right.",
        stats:["BlackPudding"],
    },
    BoneStorm:
    {
        name:"Bone Storm",
        text:"",
    },
    ChaosBeast:
    {
        name:"Chaos Beast",
        text:"https://www.d20pfsrd.com/bestiary/monster-listings/outsiders/chaos-beast/",
    },
    FlashFlood:
    {
        name:"Flash Flood",
        text:"blah",
    },
    FreshWater:
    {
    },
    GreaterShadow:
    {
    },
    GhoulWolves:
    {
    },
    LesserNabasuDemon:
    {
    },
    Margoyles:
    {
    },
    NoEncounter:
    {
    },
    RockFall:
    {
        name:"Rock Fall",
        text:"blah blah blah",
    },
    Shadows:
    {
    },
    SpittingGargoyles:
    {
        name:"Spitting Gargoyles",
        text:"",
    },
    Wyvern:
    {
    },
}

var enc = {
    "Chaos_Rift_Day":{name:"Chaos Rift (Day)", weighting_total:100, weighted_items:[[1,5,tsar.RockFall],[6,11,tsar.AcidRain]]},

};
