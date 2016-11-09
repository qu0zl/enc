var stat_blocks = {
    Bandit:"Bandit: HD 1; AC 7[12]; Atk longsword (1d8); Move 12; Save 17; AL N; CL/XP 1/15;<br>Special: none.<br>Equipment: leather armor, longsword, 2d6cp.",
    BanditLeader:"Bandit Leader: HD 3; AC 6[13]; Atk longsword (1d8) or dagger (1d4); Move 12; Save 15; AL C; CL/XP 3/60;<br>Special: none.<br>Equipment: leather armor, shield, longsword, dagger, 1d6sp, 3d6cp.",
    Barbarian:"Barbarian (Ftr1): HP 7; AC 6[13]; Atk spear (1d6+1) or shortbow x2 (1d6); Move 12; Save 14; AL N; CL/XP 1/15.<br>Special: +1 to hit and damage due to high strength, +1 to hit dexterity bonus, –1[+1] to AC dexterity bonus, +1 hp per die due to high constitution.<br>Equipment: leather armor, spear, shortbow, 20 arrows.",
    Shaman:"Shaman: HD 2; HP 9; AC 9[10]; Atk club (1d4); Move 12; Save 15; AL N; CL/XP 3/60; Special: spells (2).<br>Spells: 1st—cure light wounds, protection from evil. Equipment: robes, bone-totem staff.",
    Bouncer:"Bouncer: HP 6; AC 7[12]; Atk club (1d4); Move 12; Save 14; AL C; CL/XP 1/15.<br>Special: none.<br>Equipment: leather armor, club, 1d4cp.",
    Lyreguardsmen: "Lyreguard (Ftr3): HP 22; AC 4[15]; Atk +1 longsword (1d8+1); Move 12; Save 12; AL L; CL/XP 3/60.<br>Special: multiple attacks (3) vs. creatures with 1 or fewer HD.<br>Equipment: chain mail, shield, +1 longsword, holy symbol of Muir or Mitra.",
    LyreguardHonorGuard:"Lyreguard Honor Guard (Pal4): HP 25; AC 2[17]; Atk +1 longsword (1d8+2); Move 12; Save 9; AL L; CL/XP 5/240;<br>Special: +1 to hit and damage due to high strength, immune to disease, lay on hands (8hp), warhorse mount.<br>Equipment: plate mail, shield, tabard bearing the symbol of Bard’s Gate, +1 longsword, holy symbol of Muir.",
    GriffonRider:"Lyreguard Captain, Griffon Rider (Pal6): HP 30; AC 3[16]; Atk +1 lance (2d4+2) or +1 longsword (1d8+2) or +1 longbow x2 (1d6+1); Move 12; Save 7; AL L; CL/XP 7/600;<br>Special: +1 to hit and damage strength bonus, lay on hands (12hp), immune to disease, warhorse.",
    Imril:"Imril (Pal8): HP 52; AC –1[20]; Atk +1 lance (2d4+2) or +1 longsword (1d8+2) or +1 longbow x2 (with +1 arrows; 1d6+2); Move 12; Save 5; AL L; CL/XP 9/1100;<br>Special: +1 to hit and damage strength bonus, dispel evil, lay on hands (12hp), immune to disease, warhorse.<br>Equipment: +2 plate mail, +1 shield, +1 longsword (detects chaos within 20ft), +1 lance, +1 longbow, 20 +1 arrows, riding gear, silver holy symbol of Mitra (150gp).",
};

var e = {
	AdventuringBand:
	{
        name:"Adventuring Band",
        text: "A mixed band of !d[2d3] adventurers is encountered. The adventurers are of various classes ranging from levels 2–6. The Company of the Silver Spear (page 126) or The Accursed (page 231) serve as good examples of ready-made adventuring bands. If the characters have recently been successful, there is a good chance that the adventuring band is jealous. Likewise, if the characters have had several recent setbacks, it is likely that the adventuring band may make fun of them.",
        extra:{
            total:100,
            chances:[
                {min:1, max:50, append:true, text:"They are mostly lawfully aligned."},
                {min:51, max:100, append:true, text:"They are mostly chaotically aligned."}
            ]
        }
    },
    AleTent:
    {
        name:"Ale Tent",
        text:"This large tent is set up as a makeshift tavern. There are at least one bouncer, !d[2d2] serving/dancing girls (N female human commoner 1) and !d[1d2] proprietors/barkeepers (Neutral male or female human commoner 3). There are !d[1d100] patrons. Ale, beer, and food are standard prices for average or better quality.",
        stats:["Bouncer"]
    },
    ArcaneStudent:
    {
        name:"Arcane Student",
        text:"This is an encounter with a foreign student who has come to study magic with the Dominion Arcane. The apprentice is a level !d[1d2] magic-user.",
        extra:{
            total:100,            chances:[
                {min:1, max:1, append:true, text:"The student has miscast a newly manifesting spell with random and potentially damaging results."}
            ]
        }
    },
    Aristocrat:
    {
        name:"Aristocrat/Noble",
        text:"An aristocrat or noble (Neutral male or female aristocrat 5) and their retinue block up a large portion of the street. Alternately, the characters bump into an aristocrat or noble being somewhere and doing something that they should not be doing."
    },
    Artist:
    {
        name:"Artist",
        text:"This encounter is with an artist or artisan (Neutral male or female expert 4). They may be a sculptor or painter. The artist could be working on a public arts piece, painting by the side of the street, or drawing pen and ink portraits for silvers. Likewise, the artist may be working with the authorities to make wanted posters. The artist is a master craftsman."
    },
    Author:
    {
        name:"Author",
        text:" The author (Neutral male or female expert 3) may be a fiction writer, biographer, or restaurant and local lodgings reviewer preparing travel guides and the like. If the author takes an interest in the characters, they may offer to pay them !d[2d10]gp to “buy” their story. Likewise, the author may simply steal their stories and pass them off as his or her own."
    },
    BanditGang:
    {
        name:"Bandit Gang",
        text:"A wanted band of disguised highwaymen has snuck into the city and is looking for a bar, brothel, or other trouble. If noticed, they attempt to flee, figghting their way away from any guards, and possibly taking hostages in the process. It is possible that the bandits have rented a place in the city or have some other hidden lair. There are !d[2d8] bandits and a leader.",
        stats:["Bandit", "BanditLeader"]
    },
    BarbarianEncampment:
    {
        name:"Barbarian Encampment",
        text:"Only encountered outside the city walls, a barbarian encampment consists of !d[1d10+10] adults and half that number of children. The barbarians are here for trade, horses and weapons.",
        stats:["Barbarian"],
        extra:{
            total:10,
            chances:[
                {min:1, max:1, append:true, text:"There is also a shaman with the encampment.", stats:["Shaman"]}
            ]
        }
    },
	LyreguardPatrol:
	{
        name:"Lyreguard Patrol",
        text:"!d[2d4] Lyreguardsmen pass through the area.",
        stats:["Lyreguardsmen"],
        extra:{
            total:100,
            chances:[
                {min:85, max:94, text:"!d[2d4] Lyreguardsmen pass through the area, led by a Lyreguard honor guard.", stats:["Lyreguardsmen","LyreguardHonorGuard"]},
                {min:95, max:99, text:"!d[2d2] Lyreguard griffon riders pass through the area.", stats:["GriffonRider"]},
                {min:100, max:100, text:"Imril, accompanied by !d[2d2] griffon riders, !d[1d6] Lyreguard honor guard, and !d[2d4] Lyreguardsmen pass through the area.", stats:["Imril","GriffonRider","Lyreguardsmen","LyreguardHonorGuard"]}
            ]
        }
    },
	SherrifsPatrol:
        {
            name:"Sheriff's Patrol",
            text:"!d[1d6] greg"
        }
}
var enc = {
    "All": [ e.Aristocrat, e.Artist, e.Author, e.BanditGang, e.BarbarianEncampment ],
    "OT_D": [ e.LyreguardPatrol, e.AdventuringBand ],
    "OT_N": [ e.SherrifsPatrol ]
};
