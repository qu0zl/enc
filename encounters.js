var stat_blocks = {
    Bandit:"Bandit: HD 1; AC 7[12]; Atk longsword (1d8); Move 12; Save 17; AL N; CL/XP 1/15;<br>Special: none.<br>Equipment: leather armor, longsword, 2d6cp.",
    BanditLeader:"Bandit Leader: HD 3; AC 6[13]; Atk longsword (1d8) or dagger (1d4); Move 12; Save 15; AL C; CL/XP 3/60;<br>Special: none.<br>Equipment: leather armor, shield, longsword, dagger, 1d6sp, 3d6cp.",
    Barbarian:"Barbarian (Ftr1): HP 7; AC 6[13]; Atk spear (1d6+1) or shortbow x2 (1d6); Move 12; Save 14; AL N; CL/XP 1/15.<br>Special: +1 to hit and damage due to high strength, +1 to hit dexterity bonus, –1[+1] to AC dexterity bonus, +1 hp per die due to high constitution.<br>Equipment: leather armor, spear, shortbow, 20 arrows.",
    BarbarianLeader:"Barbarian Leader (Ftr3): HP 18; AC 6[13]; Atk spear (1d6+1) or shortbow x2 (1d6); Move 12; Save 12; AL L; CL/XP 3/60.<br>Special: +1 to hit and damage due to high strength, +1 to hit dexterity bonus, –1[+1] to AC dexterity bonus, +1 hp per die due to high constitution, multiple attacks (3) vs. creatures with 1 or fewer HD.<br>Equipment: leather armor, spear, shortbow, 20 arrows, 3d6sp.",
    BarbarianBouncer:"Barbarian Bouncer Half-Orcs (Ftr2): HP 10; AC 7[12]; Atk club (1d4) or fist (1d3); Move 12; Save 13; AL N; CL/XP 2/30.<br>Special: +1 to hit and damage due to high strength, darkvision 60ft, half-orc racial abilities, multiple attacks (2) vs. creatures with 1 or fewer HD.<br>Equipment: leather armor, club.",
    Bat:"Bat: HD 1–2hp; AC 8[11]; Atk bite (1); Move 1 (fly 24); Save 18; AL N; CL/XP A/5;<br>Special: sonar flight in total darkness, swarm (causes spells to fail 50% of time).",
    BlackOrc:"Black Orcs: HD 2; AC 5[14]; Atk two-handed sword (1d10); Move 12; Save 16; AL C; CL/XP 2/30;<br>Special: none. (The Tome of Horrors Complete 418).",
    BodyGuard:"Bodyguard (Ftr2): HP 13; AC 6[13]; Atk club (1d4)); Move 12; Save 13; AL N; CL/XP 2/30.<br>Special: +1 to hit dexterity bonus, –1[+1] to AC dexterity bonus, +1 hp per die due to high constitution, multiple attacks (2) vs. creatures with 1 or fewer HD.<br>Equipment: leather armor, club, 2d4sp.",
    BodyGuard_F1:"Bodyguard (Ftr1): HP 6; AC 7[12]; Atk club (1d4); Move 12; Save 14; AL L; CL/XP 1/15.<br>Special: none.<br>Equipment: leather armor, club, 1d4sp.",
    Shaman:"Shaman: HD 2; HP 9; AC 9[10]; Atk club (1d4); Move 12; Save 15; AL N; CL/XP 3/60; Special: spells (2).<br>Spells: 1st—cure light wounds, protection from evil. Equipment: robes, bone-totem staff.",
    Bouncer:"Bouncer: HP 6; AC 7[12]; Atk club (1d4); Move 12; Save 14; AL C; CL/XP 1/15.<br>Special: none.<br>Equipment: leather armor, club, 1d4cp.",
    Burglar:"Burglar (Thf3): HP 8; AC 6[13]; Atk short sword (1d6) or dagger (1d4); Move 12; Save 12; AL C; CL/XP 3/60;<br>Special: +1 to hit dexterity bonus, –1[+1] to AC dexterity bonus, +2 on saving throws vs. devices, backstab (x2), thieving skills.<br>Thieving Skills: Climb 87%, Tasks/Traps 25%, Hear 4 in 6, Hide 20%, Silent 30%, Locks 20%.<br>Equipment: leather armor, short sword, dagger, thieves' tools, 1d10gp.",
    Cutpurse:"Cutpurse (Thf2): HP 5; AC 7[12]; Atk dagger (1d4); Move 12; Save 14; AL N; CL/XP 3/60; Special: +2 on saving throws vs. devices, backstab (x2), thieving skills.<br>Thieving Skills: Climb 86%, Tasks/Traps 20%, Hear 3 in 6, Hide 15%, Silent 25%, Locks 15%.<br>Equipment: leather armor, 3 daggers, thieves' tools, 2d4sp.",
    Robber:"Robber (Thf1): HP 3; AC 7[12]; Atk dagger (1d4); Move 12; Save 15; AL N; CL/XP 1/15; Special: +2 on saving throws vs. devices, backstab (x2), thieving skills.<br>Thieving Skills: Climb 85%, Tasks/Traps 15%, Hear 3 in 6, Hide 10%, Silent 20%, Locks 10%.<br>Equipment: leather armor, dagger, 1d4cp.",
    CaravanCaptain:"Caravan Captain (Ftr2): HP 10; AC 6[13]; Atk club (1d4) or sling (1d4); Move 12; Save 13; AL L; CL/XP 2/30.<br>Special: multiple attacks (2) vs. creatures with 1 or fewer HD.<br>Equipment: ring mail, club, sling, 10 bullets, 2d4sp",
    CaravanGuard:"Caravan Guard: HD 1; AC 7[12]; Atk longsword (1d8) or spear (1d6); Move 12; Save 17; AL N; CL/XP 1/15;<br>Special: none.<br>Equipment: leather armor, longsword, spear, 2d12cp.",
    Centaur:"Centaur: HD 4; AC 5[14] or 4[15] with shield; Atk 2 kicks (1d6) and weapon; Move 18; Save 13; AL N; CL/XP 4/120;<br>Special: none.",
    SilfusSharphoof:"Silfus Sharphoof, Male Centaur (Rgr2): HD 6; HP 31; AC 5[14]; Atk 2 kicks (1d6) and +1 lance (2d4+2) or longbow x2 (1d6); Move 18; Save 11; AL L; CL/XP 7/600;<br>Special: +2 to damage vs giants and goblinoids, alertness, tracking.<br>Equipment: +1 lance, longbow, 20 arrows.",
    GiantCentipede:"Giant Centipede (small, lethal): HD 1d2 hp; AC 9[10]; Atk bite (0 plus poison); Move 13; Save 18; AL N; CL/XP 1/15;<br>Special: poison bite (+4 save or die).",
    CentipedeSwarm:"Centipede Swarm: HD 3; AC 7 [12]; Atk bites (1hp plus non-lethal poison); Move 3; Save 14; AL N; CL/XP 4/120;<br>Special: immune to all but blunt weapons, non-lethal poison (2d6 points of damage).",
    Charlatan:"Charlatan (Thf1): HP 2; AC 9[10]; Atk club (1d4); Move 12; Save 15; AL N; CL/XP 1/15;<br>Special: +2 on saving throws vs. devices, backstab (x2), thieving skills.<br>Thieving Skills: Climb 85%, Tasks/Traps 15%, Hear 3 in 6, Hide 10%, Silent 20%, Locks 10%.<br>Equipment: club, 3d4cp.",
    Dandy:"Dandy, Male or Female (Ftr3): HP 15; AC 6[13]; Atk rapier (1d6); Move 12; Save 12; AL N; CL/XP 3/60.<br>Special: +1 to hit dexterity bonus, –1[+1] to AC dexterity bonus, multiple attacks (3) vs. creatures with 1 or fewer HD, parry (–2 to enemy's attacks).<br>Equipment: leather armor, rapier (short sword), dandy clothes.",
    DogSoldierSneak:"Dog Soldier Sneak (Thf3): HP 7; AC 7[12]; Atk club (1d4) or dagger (1d4); Move 12; Save 12; AL N; CL/XP 3/60;<br>Special: +2 on saving throws vs. devices, backstab (x2), thieving skills.<br>Thieving Skills: Climb 87%, Tasks/Traps 25%, Hear 4 in 6, Hide 20%, Silent 30%, Locks 20%.<br>Equipment: leather armor, club, dagger.",
    DogSoldierWarrior:"Dog Soldier Warrior (Ftr2): HP 13; AC 6[13]; Atk club (1d4) or sling (1d4); Move 12; Save 13; AL N; CL/XP 2/30.<br>Special: +1 to hit dexterity bonus, –1[+1] to AC dexterity bonus, +1 hp per die due to high constitution, multiple attacks (2) vs. creatures with 1 or fewer HD.<br>Equipment: leather armor, club, sling, 10 bullets, 2d4sp.",
    DogSoldierMU:"Dog Soldier Magic-User's Apprentice (MU1): HP 3; AC 8[11]; Atk staff (1d6); Move 12; Save 15; AL N; CL/XP 2/30;<br>Special: +2 on saves vs. spells, spells (1).<br> Spells: 1st—sleep.<br>Equipment: staff, spellbook.",
    Druid:"Druid (Drd4): HP 16; AC 7[12]; Atk +1 sickle sword (1d6+1); Move 12; Save 12; AL N; CL/XP 8/800;<br>Special: +2 bonus to saving throws against fire, druid language, immune to fey charms, shape change, spells (3/1/1).<br>Spells: 1st—faerie fire, locate animals, predict weather; 2nd—cure light wounds; 3rd—call lightning.<br>Equipment: leather armor, +1 sickle sword (treat as short sword), holly berries and mistletoe.",
    Fighter:"Hero (Ftr3): HP 22; AC 6[13]; Atk longsword (1d8+1) or dagger (1d4+1); Move 12; Save 12; AL L; CL/XP 3/60.<br>Special: +1 to hit and damage due to high strength, multiple attacks (3) vs. creatures with 1 or fewer HD.<br>Equipment: ring mail, longsword, dagger.",
    WallWatcher:"Wall Watcher (Ftr1): HP 5; AC 4[15]; Atk battleaxe (1d8) or spear (1d6); Move 12; Save 14; AL L; CL/XP 1/15.<br>Special: none.<br>Equipment: chainmail, shield, battle axe, spear, signal horn.",
    WallWatchOfficer:"Wall Watch Officer (Ftr3): HP 15; AC 5[14]; Atk spear (1d6) or short sword (1d6); Move 12; Save 12; AL L; CL/XP 3/60.<br>Special: multiple attacks (3) vs. creatures with 1 or fewer HD.<br>Equipment: ring mail, shield, spear, short sword.",
    Priest:"Priest (Clr3): HP 11; AC 4[15]; Atk warhammer (1d4+1) or sling (1d4); Move 12; Save 13; AL L; CL/XP 4/120;<br>Special: +2 save versus paralyzation and poison, spells (2), turn undead.<br>Spells: 1st—cure light wounds, protection from evil.<br>Equipment: chainmail, shield, clerical vestments, warhammer, sling, 10 bullets, holy symbol of appropriate god.",
    RedBladeInitiate:"Red Blade Initiate (Asn1): HP 4; AC 7[12]; Atk dagger (1d4); Move 12; Save 15; AL C; CL/XP 5/240;<br>Special: backstab (x2), disguise, poison, thieving skills.<br>Thieving Skills: Climb 85%, Tasks/Traps 15%, Hear 3 in 6, Hide 10%, Silent 20%, Locks 10%.<br>Equipment: leather armor, dagger, thieves' tools.",
    RedBlade:"Red Blade (Asn4): HP 19; AC 7[12]; Atk dagger (1d4 plus poi- son); Move 12; Save 12; AL C; CL/XP 5/240;<br>Special: backstab (x2), disguise, poison, thieving skills.<br>Thieving Skills: Climb 86%, Tasks/Traps 20%, Hear 3 in 6, Hide 15%, Silent 25%, Locks 15%.<br>Equipment: leather armor, poisoned dagger (save or die), thieves' tools.",
    ShadowMask:"Shadow Masks (Thf3): HP 8; AC 6[13]; Atk short sword (1d6) or dagger (1d4); Move 12; Save 13; AL C; CL/XP 3/60;<br>Special: +1 to hit dexterity bonus, –1[+1] to AC dexterity bonus, +2 on saving throws vs. devices, backstab (x2), thieving skills.<br>Thieving Skills: Climb 87%, Tasks/Traps 25%, Hear 4 in 6, Hide 20%, Silent 30%, Locks 20%.<br>Equipment: leather armor, short sword, dagger, thieves’ tools, 1d10gp.",
    SeniorShadowMask:"Senior Shadow Mask (Thf6): HP 17; AC 5[14]; Atk +1 dagger (1d4+1) or dagger (1d4); Move 12; Save 10; AL C; CL/XP 6/400;<br>Special: +1 to hit dexterity bonus, –1[+1] to AC dexterity bonus, +2 on saving throws vs. devices, backstab (x3), read languages, thieving skills.<br>Thieving Skills: Climb 90%, Tasks/Traps 40%, Hear 4 in 6, Hide 35%, Silent 45%, Locks 35%.<br>Equipment: +1 leather armor, +1 dagger, 4 throwing daggers, 2d6gp, 2d10sp.",
    Mercenary:"Mercenary (Ftr2): HP 12; AC 5[14]; Atk longsword (1d8); Move 12; Save 13; AL N; CL/XP 2/30;<br>Special: multiple at- tacks (2) vs. creatures with 1 or fewer HD.<br>Equipment: ring mail, shield, longsword, 10+2d10sp.",
    SellSword:"Sell-Sword (Ftr1): HP 7; AC 7[12]; Atk longsword (1d8) or dagger (1d4); Move 12; Save 14; AL L; CL/XP 1/15.<br>Special: none.<br>Equipment: leather armor, longsword, dagger, 1d6sp, 2d4cp.",
    Veteran:"Veteran (Ftr3): HP 20; AC 6[13]; Atk longsword (1d8+1) or dagger (1d4+1); Move 12; Save 12; AL L; CL/XP 3/60.<br>Special: +1 to hit and damage due to high strength, multiple attacks (3) vs. creatures with 1 or fewer HD.<br>Equipment: ring mail, longsword, dagger.",
    Longhunter:"Longhunter (Rgr2): HP 17; AC 7[12]; Atk short sword (1d6) or longbow x2 (1d6); Move 12; Save 13; AL L; CL/XP 2/30.<br>Special: +2 to damage vs. giants and goblinoids, alertness, tracking.<br>Equipment: leather armor, short sword, longbow, 20 arrows.",
    LonghunterLeader:"Longhunter Leader (Rgr3): HP 26; AC 6[13]; Atk +1 short sword (1d6+1) or longbow x2 (1d6+1 w/+1 arrows); Move 12; Save 12; AL L; CL/XP 3/60.<br>Special: +1 to hit dexterity bonus, –1[+1] to AC dexterity bonus, +3 to damage vs. giants and goblinoids, alertness, tracking.<br>Equipment: leather armor, +1 short sword, longbow, 20 +1 arrows.",
    LonghunterScout:"Longhunter Scout (Thf2): HP 9; AC 7[12]; Atk short sword (1d6) or shortbow x2 (1d6); Move 12; Save 14; AL N; CL/XP 2/30;<br>Special: +2 on saving throws vs. devices, backstab (x2), thieving skills.<br>Thieving Skills: Climb 86%, Tasks/Traps 20%, Hear 3 in 6, Hide 15%, Silent 25%, Locks 15%.<br>Equipment: leather armor, short sword, shortbow, 20 arrows.",
    Farseeker:"Farseeker, Male or Female Elf or Half-Elf (MU1/Rgr1): HP 9; AC 8[11]; Atk longsword (1d8) or spear (1d6) or shortbow x2 (1d6); Move 12; Save 14; AL L; CL/XP 3/60.<br>Special: +1 to hit dexterity bonus, –1[+1] to AC dexterity bonus, +2 on saves vs. spells, +1 to damage vs. giants and goblinoids, alertness, darkvision 60ft, elf or half-elf racial abilities, tracking, spells (1).<br>Spells: 1st—sleep.<br>Equipment: leather clothes, longsword or spear, shortbow, 20 arrows, spellbook.",
    FarseekerLeader:"Farseeker Leader, Male or Female Elf or Half-Elf (MU2/Rgr2): HP 15; AC 5[14]; Atk longsword (1d8) or shortbow x2 (1d6); Move 12; Save 13; AL L; CL/XP 3/60.<br>Special: +1 to hit dexterity bonus, –1[+1] to AC dexterity bonus, +2 on saves vs. spells, +2 to damage vs. giants and goblinoids, alertness, darkvision 60ft, elf or half-elf racial abilities, tracking, spells (2).<br>Spells: 1st—magic missile, shield.<br>Equipment: +1 leather armor, longsword, shortbow, 20 arrows, wand of sleep (6 charges), spellbook.",
    Lyreguardsmen: "Lyreguard (Ftr3): HP 22; AC 4[15]; Atk +1 longsword (1d8+1); Move 12; Save 12; AL L; CL/XP 3/60.<br>Special: multiple attacks (3) vs. creatures with 1 or fewer HD.<br>Equipment: chain mail, shield, +1 longsword, holy symbol of Muir or Mitra.",
    LyreguardHonorGuard:"Lyreguard Honor Guard (Pal4): HP 25; AC 2[17]; Atk +1 longsword (1d8+2); Move 12; Save 9; AL L; CL/XP 5/240;<br>Special: +1 to hit and damage due to high strength, immune to disease, lay on hands (8hp), warhorse mount.<br>Equipment: plate mail, shield, tabard bearing the symbol of Bard's Gate, +1 longsword, holy symbol of Muir.",
    GriffonRider:"Lyreguard Captain, Griffon Rider (Pal6): HP 30; AC 3[16]; Atk +1 lance (2d4+2) or +1 longsword (1d8+2) or +1 longbow x2 (1d6+1); Move 12; Save 7; AL L; CL/XP 7/600;<br>Special: +1 to hit and damage strength bonus, lay on hands (12hp), immune to disease, warhorse.",
    Imril:"Imril (Pal8): HP 52; AC –1[20]; Atk +1 lance (2d4+2) or +1 longsword (1d8+2) or +1 longbow x2 (with +1 arrows; 1d6+2); Move 12; Save 5; AL L; CL/XP 9/1100;<br>Special: +1 to hit and damage strength bonus, dispel evil, lay on hands (12hp), immune to disease, warhorse.<br>Equipment: +2 plate mail, +1 shield, +1 longsword (detects chaos within 20ft), +1 lance, +1 longbow, 20 +1 arrows, riding gear, silver holy symbol of Mitra (150gp).",
    MU_4:"War Wizard (MU4): HP 10; AC 4[15]; Atk +1 dagger (1d4+1); Move 12; Save 11; AL C; CL/XP 5/240. Special: +2 on saves vs. spells, spells (3/2).<br>Spells: 1st—charm person, shield, sleep; 2nd—ESP, phantasmal force.<br>Equipment: +1 dagger, traveling clothes, ring of protection +1, potion of healing.",
    Monk:"Monk (Mnk1): HP 3; AC 9[10]; Atk weaponless strike (1d4); Move 12; Save 15; AL L; CL/XP 1/15;<br>Special +2 on saving throws vs. paralysis and poison, alertness, deadly strike, deflect missiles, thieving skills.<br>Thieving Skills: Climb 85%, Tasks/Traps 15%, Hear 3 in 6, Hide 10%, Silent 20%, Locks 10%.<br>Equipment: Robes, walking staff, 1d3cp",
    WanderingMonk:"Wandering Monk (Mnk4): HP 14; AC 6[13]; Atk weaponless strike (1d8) or by weapon (+2 to damage); Move 15; Save 12; AL L; CL/XP 6/400;<br>Special: +2 save versus paralyzation and poison, deadly strike, +2 damage with weapons (included above), speak with animals, slow falling (20ft), thieving skills.<br>Thieving Skills: Climb 88%, Tasks/Traps 30%, Hear 4 in 6, Hide 25%, Silent 35%, Locks 25%.<br>Equipment: robes, walking staff, mala, 1d3cp.",
    BeggarApprentice_T1:"Beggar Apprentice (Thf1): HP 3; AC 7[12]; Atk dagger (1d4); Move 12; Save 15; AL N; CL/XP 1/15;<br>Special: +2 on saving throws vs. devices, backstab (x2), thieving skills.<br>Thieving Skills: Climb 85%, Tasks/Traps 15%, Hear 3 in 6, Hide 10%, Silent 20%, Locks 10%.<br>Equipment: leather armor, dagger.",
    BeggarApprentice_M1:"Beggar Apprentice (Mnk1): HP 3; AC 9[10]; Atk unnecessary crutch (1d4); Move 12; Save 15; AL N; CL/XP 1/15;<br>Special: +2 on saving throws vs. paralysis and poison, alertness, deadly strike, deflect missiles, thieving skills.<br>Thieving Skills: Climb 85%, Tasks/Traps 15%, Hear 3 in 6, Hide 10%, Silent 20%, Locks 10%.<br>Equipment: comfortable set of rags for clothing, unnecessary crutch (treat as club), pot of stink.",
    BeggarJourneyman:"Beggar Journeyman (Thf3): HP 7; AC 7[12]; Atk club (1d4) or dagger (1d4); Move 12; Save 13; AL N; CL/XP 3/60;<br>Special: +2 on saving throws vs. devices, backstab (x2), thieving skills.<br>Thieving Skills: Climb 87%, Tasks/Traps 25%, Hear 4 in 6, Hide 20%, Silent 30%, Locks 20%.<br>Equipment: leather armor, club, dagger.",
    ExperiencedStreetBeggar:"Experienced Street Beggar (Thf2): HP 5; AC 7[12]; Atk weighted crutch (1d4); Move 12; Save 14; AL N; CL/XP 3/60;<br>Special: +2 on saving throws vs. devices, backstab (x2), thieving skills.<br>Thieving Skills: Climb 86%, Tasks/Traps 20%, Hear 3 in 6, Hide 15%, Silent 25%, Locks 15%.<br>Equipment: heavy tunic, weighted crutch (treat as club).",
    MasterBeggar:"Master Beggar (Thf5): HP 17; AC 6[13]; Atk sword cane (1d6); Move 12; Save 11; AL C; CL/XP 6/400;<br>Special: +2 on saving throws vs. devices, backstab (x3), read languages, thieving skills.<br>Thieving Skills: Climb 89%, Tasks/Traps 35%, Hear 4 in 6, Hide 30%, Silent 40%, Locks 30%.<br>Equipment: cloak of chain, sword cane (treat as short sword), 2 pots of stink."
};

var t = {
    DrunkAttitude:["Their attitude is currently friendly","Their attitude is currently unfriendly","Their attitude is currently  helpful","Their attitude is currently indifferent","Their attitude is currently hostile","They are exhibiting a different random attitude every 2 minutes (table pg. 281)"],
    GuildType:["Gem Cutters'","Scribes'","Stone Cutters'","Glassblowers'","Wheelwrights'","Rivermans'","Brewers'","Weavers'","Harlots'","Caretakers'","Beggars'","Herbalists'","Innkeepers'","Tavernkeepers'"]
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
            total:100,
            chances:[
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
    Bard:
    {
        name:"Bard",
        text:"Most typically encountered are students or teachers. The bard (Neutral male or female commoner 3)",
        extra:{
            total:2,
            chances:[
                {min:1, max:1, append:true, text:"recognizes the characters and begins recounting their deeds to passers-by."},
                {min:2, max:2, append:true, text:"has suffered a case of mistaken identity and regales the party with untrue stories of their heinous and foul deeds, calls them all by different names, and generally sets out to murder their reputation. For !d[1d12] days after this encounter, the characters are called by different names by common folk and generally shunned."}
            ]
        }
    },
    BatSwarm:
    {
        name:"Bat Swarm",
        text:"This encounter is with a swarm of !d[10d6] frightened bats that swoops down from an attic or high-raftered temple.",
        stats:["Bat"]
    },
    BeerVendor:
    {
        name:"Beer Vendor",
        text:"Popular in this district, the beer vendor (Neutral male or female commoner 2) is a rickshaw-like cart hauling a huge keg of home-brewed ale or beer. The beer may be dwarven, halfing, or human in blend, is of fair to excellent quality, and costs 3cp a cup ... bring your own mug."
    },
    Beggar:
    {
        name:"Beggar",
        text:"a beggar or other lowly panhandler (Neutral male or female commoner 1).",
        extra:{
            total:10,
            chances:[
                {min:1, max:1, append:true, text:"They were once a hero or other member of a character class (Referee's discretion)."}
            ]
        }
    },
    BlackOrcs:
    {
        name:"Black Orcs of Orcus",
        text:"This rare encounter is with !d[1d6+2] black orcs in the service of the Cult of Orcus hidden near the environs of the Claws of Orcus. The Black Orcs typically remain hidden from large bands and soldiers, but see that snoopy individuals (such as paladins and rangers) never return to Bard's Gate to report on the things they may have discovered.",
        stats:["BlackOrc"]
    },
    BodyGuard:
    {
        name:"Bodyguard",
        text:"An off-duty bodyguard for a noble or aristocratic household. The Harlots' Guild also employs bodyguards to protect their members when they are on assignment. The bodyguard may be of any character class (Referee's discretion on bodyguard, see Appendix A for examples or sample Fighter below).",
        stats:["BodyGuard"]
    },
    Butler:
    {
        name:"Butler",
        text: "This encounter is with the chief servant and confidant of a noble or aristocratic household. The butler (Neutral male human expert 4) is on a specific, important mission."
    },
    Burglar:
    {
        name:"Burglar",
        text:"Characters must make a successful check against the thief's Hide score to notice him coming from or heading to a bit of burglary. These criminals may be burglers, cutpurses, or robbers (Referee's discretion).",
        stats:["Burglar","Cutpurse","Robber"]
    },
    Caravan:
    {
        name:"Caravan",
        text:"A caravan of !d[2d6] wagons is encountered. The caravan hauls !d[2d20+20] gp worth of materials per wagon. The caravan has 1 drover (Neutral male human commoner 2) per wagon, and 1 guard per two wagons. A captain and one merchant (Neutral male or female expert 2) manage the guards. Several small caravans may combine under powerful merchants to form larger caravans.",
        stats:["CaravanCaptain","CaravanGuard"],
        extra:{
            total:2,
            chances:[
            {min:1, max:1, text:"A caravan of !d[2d8] pack animals is encountered. The caravan hauls !d[1d20+10] gp worth of materials per pack animal. The caravan has 1 drover (Neutral male human commoner 2) per pack animal, and 1 guard per two animals. A captain and one merchant (Neutral male or female expert 2) manage the guards. Several small caravans may combine under powerful merchants to form larger caravans."}
            ]
        }
    },
    Carriage:
    {
        name:"Carriage",
        text:"This encounter is with a low-level aristocrat (Neutral male or female aristocrat 3), their valet (Neutral male expert 3), bodyguard and servant (Neutral male or female commoner 2). The carriage may stop if the characters have developed a reputation as heroes or due to a case of mistaken identity. The characters are invited to a party hosted by the aristocrat as a showcase and talking point. Likewise, the carriage may be empty except for a driver or valet, and is awaiting the master's return outside of an estate.",
        stats:["BodyGuard_F1"]
    },
    CentaurBand:
    {
        name:"Centaur Band",
        text:"A group of !d[1d4+4] centaurs has come up from the wood-lands and the southern plains. They may be fur traders or are seeking bounties on slain monsters from the Lyreguard and have come to the tent city, lured by wine and weapons.",
        stats:["Centaur"],
        extra:{
            total:100,
            chances:[
            {min:1, max:1, text:"Silfus Sharphoof (M16, pg. 129) is encountered on a day off.", stats:["SilfusSharphoof"]}
            ]
        }
    },
    Centipede:
    {
        name:"Centipede",
        text:"This encounter is with a giant centipede that has fled the sewers into the streets or back alleyways.",
        stats:["GiantCentipede"],
        extra:{
            total:10,
            chances:[
            {min:1, max:3, text:"This encounter is with a centipede swarm that has fled the sewers into the streets or back alleyways.", stats:["CentipedeSwarm"]}
            ]
        }
    },
    Charlatan:
    {
        name:"Charlatan",
        text:"This encounter is with a scoundrel hawking fake potions, a false prophecy or similar con. False potions (snake oil) typically sell for 1–10gp and are nothing more than whiskey mixed with mineral water, seasoned with hot peppers, herbs and flower petals. If exposed as a fraud, the charlatan flees the scene to escape prosecution. The fraud later keeps tabs on the characters in order to spring some complex revenge or smear campaign against them.",
        stats:["Charlatan"]
    },
    CheeseVendor:
    {
        name:"Cheese Vendor",
        text:"Cheese vendors (Neutral male or female commoner 1) often work in tandem. This is a small cart selling cured meats, cheeses, crackers, bread, and pickled goods."
    },
    CityWatch:
    {
        name:"City Watch",
        text:"This patrol is on official city business and consists of !d[2d4] individuals and one officer.",
        stats:["WallWatcher","WallWatchOfficer"]
    },
    CivicOfficial:
    {
        name:"Civic Official",
        text:"This encounter is with a lesser aristocrat (Lawful male or female aristocrat 2) and a pair of City Watchmen who serve as bodyguards. The official is typically an inspector, tax collector, census taker or other such civil servant of the city's bureaucracy. The civic official is typically a pretender with tenuous ties to the noble families that allowed for their appointment.",
        stats:["WallWatcher"]
    },
    Cleric:
    {
        name:"Cleric",
        text:"A cleric encounter is with a cleric of one of the gods worshipped in Bard's Gate. The cleric is either performing civic duty, preaching, or on a special mission from the temple.",
        stats:["Priest"]
    },
    Courtesan:
    {
        name:"Courtesan",
        text:"A high priced lady-of-the-evening (Neutral female expert 4) escorted by a bodyguard or carriage to an evening interlude with a customer.",
        stats:["BodyGuard"]
    },
    Dandy:
    {
        name:"Dandy",
        text:"This encounter is with a foppish pretty lad or girlie girl, who also happens to be skilled with a rapier. The dandy plays the role in order to lure ruffians to attack him, then soundly mops the floor with his adversaries.",
        stats:["Dandy"]
    },
    Debutant:
    {
        name:"Debutant",
        text:"This encounter is with the spoiled child (Neutral female aristocrat 3) of an aristocrat or noble. The debutant may be slumming in a bad part of town, or shopping on her parent's dime."
    },
    DogSoldiers:
    {
        name:"Dog Soldiers",
        text:"!d[1d4] dog soldiers examine the characters closely and watch them for trouble.",
        stats:["DogSoldierSneak","DogSoldierWarrior","DogSoldierMU"]
    },
    Druids:
    {
        name:"Druid",
        text:"Druids (Neutral male or female druid 3-6) are typically encountered outside the city walls, as their many animal companions may cause the citizens special discomfort. A druid encounter may or may not include an animal (Referee's discretion).",
        stats:["Druid"]
    },
    Drunk:
    {
        name:"Drunk",
        text:"An encounter with !d[1d4] drunks or loud partiers who have had one or more too many. Drunks encountered are similar to their sober counterpart. The difference being that the drunk has an attitude toward whomever they meet that is completely random. !t[DrunkAttitude].",
        extra:{
            total:20,
            chances:[
                {min:1, max:1, text:"An encounter with !d[1d4] Red Blade drunks or loud partiers who have had one or more too many. Drunks encountered are similar to their sober counterpart. The difference being that they have an attitude toward whomever they meet that is completely random. !t[DrunkAttitude].", stats:["RedBlade","RedBladeInitiate"]},
                {min:2, max:2, text:"An encounter with !d[1d4] Shadowmask drunks or loud partiers who have had one or more too many. Drunks encountered are similar to their sober counterpart. The difference being that they have an attitude toward whomever they meet that is completely random. !t[DrunkAttitude].", stats:["ShadowMask","SeniorShadowMask"]},
                {min:3, max:3, text:"An encounter with !d[1d4] drunks or loud partiers of the !t[GuildType] Guild who have had one or more too many. Drunks encountered are similar to their sober counterpart. The difference being that they have an attitude toward whomever they meet that is completely random. !t[DrunkAttitude]."},
                {min:4, max:4, text:"An encounter with !d[1d4] Fighter classed drunks or loud partiers who have had one or more too many. Drunks encountered are similar to their sober counterpart. The difference being that they have an attitude toward whomever they meet that is completely random. !t[DrunkAttitude].", stats:["BodyGuard_F1","BodyGuard","Fighter"]},
                {min:5, max:5, text:"An encounter with !d[1d4] Thief classed drunks or loud partiers who have had one or more too many. Drunks encountered are similar to their sober counterpart. The difference being that they have an attitude toward whomever they meet that is completely random. !t[DrunkAttitude].", stats:["Burglar","Cutpurse","Robber"]},
                {min:6, max:6, text:"An encounter with !d[1d4] Cleric classed drunks or loud partiers who have had one or more too many. Drunks encountered are similar to their sober counterpart. The difference being that they have an attitude toward whomever they meet that is completely random. !t[DrunkAttitude].", stats:["Priest"]},
                {min:7, max:7, text:"An encounter with !d[1d4] Local Guard drunks or loud partiers who have had one or more too many. Drunks encountered are similar to their sober counterpart. The difference being that they have an attitude toward whomever they meet that is completely random. !t[DrunkAttitude].", stats:["WallWatcher","WallWatchOfficer"]},
                {min:8, max:8, text:"An encounter with !d[1d4] Magic User drunks or loud partiers who have had one or more too many. Drunks encountered are similar to their sober counterpart. The difference being that they have an attitude toward whomever they meet that is completely random. !t[DrunkAttitude].", stats:["MU_4","DogSoldierMU"]},
                {min:9, max:9, text:"An encounter with !d[1d4] Merchant drunks or loud partiers who have had one or more too many. Drunks encountered are similar to their sober counterpart. The difference being that they have an attitude toward whomever they meet that is completely random. !t[DrunkAttitude]."},
                {min:10, max:10, text:"An encounter with !d[1d4] local townspeople drunks or loud partiers who have had one or more too many. Drunks encountered are similar to their sober counterpart. The difference being that they have an attitude toward whomever they meet that is completely random. !t[DrunkAttitude]."},
                {min:11, max:11, text:"An encounter with !d[1d4] Civic Official drunks or loud partiers who have had one or more too many. Drunks encountered are similar to their sober counterpart. The difference being that they have an attitude toward whomever they meet that is completely random. !t[DrunkAttitude]. Civic Officials are generally lesser aristocrats (Lawful male or female aristocrat 2) and are each accompained by a pair of City Watchmen who serve as bodyguards. Officials are typically inspectors, tax collectors, census takers or other such civil servant of the city's bureaucracy and are typically a pretender with tenuous ties to the noble families that allowed for their appointment.", stats:["WallWatcher"]},
                {min:12, max:12, text:"An encounter with !d[1d4] disguised Bandit drunks or loud partiers who have had one or more too many. Drunks encountered are similar to their sober counterpart. The difference being that they have an attitude toward whomever they meet that is completely random. !t[DrunkAttitude].", stats:["BanditLeader","Bandit"]},
                {min:13, max:13, text:"An encounter with !d[1d4] Mercenary drunks or loud partiers who have had one or more too many. Drunks encountered are similar to their sober counterpart. The difference being that they have an attitude toward whomever they meet that is completely random. !t[DrunkAttitude].", stats:["SellSword","Mercenary","Veteran"]},
                {min:14, max:14, text:"An encounter with !d[1d4] beggar drunks or loud partiers who have had one or more too many. Drunks encountered are similar to their sober counterpart. The difference being that they have an attitude toward whomever they meet that is completely random. !t[DrunkAttitude].",stats:["BeggarApprentice_T1","BeggarApprentice_M1","BeggarJourneyman","ExperiencedStreetBeggar","MasterBeggar"]},
                {min:15, max:15, text:"An encounter with !d[1d4] Ranger classed drunks or loud partiers who have had one or more too many. Drunks encountered are similar to their sober counterpart. The difference being that they have an attitude toward whomever they meet that is completely random. !t[DrunkAttitude].", stats:["Longhunter","LonghunterScout","LonghunterLeader","Farseeker","FarseekerLeader"]},
                {min:16, max:16, text:"An encounter with !d[1d4] Harlot drunks or loud partiers who have had one or more too many. Drunks encountered are similar to their sober counterpart. The difference being that they have an attitude toward whomever they meet that is completely random. !t[DrunkAttitude]."},
                {min:17, max:17, text:"An encounter with !d[1d4] Fighter classed drunks or loud partiers who have had one or more too many. Drunks encountered are similar to their sober counterpart. The difference being that they have an attitude toward whomever they meet that is completely random. !t[DrunkAttitude].", stats:["BodyGuard_F1","BodyGuard","Fighter"]},
                {min:18, max:18, text:"An encounter with !d[1d4] Monk classed drunks or loud partiers who have had one or more too many. Drunks encountered are similar to their sober counterpart. The difference being that they have an attitude toward whomever they meet that is completely random. !t[DrunkAttitude].", stats:["Monk","WanderingMonk"]},
                {min:19, max:19, text:"An encounter with !d[1d4] Barbarian drunks or loud partiers who have had one or more too many. Drunks encountered are similar to their sober counterpart. The difference being that they have an attitude toward whomever they meet that is completely random. !t[DrunkAttitude].", stats:["Barbarian","BarbarianLeader","BarbarianBouncer","Shaman"]},
                {min:20, max:20, text:"An encounter with !d[1d4] Druid classed drunks or loud partiers who have had one or more too many. Drunks encountered are similar to their sober counterpart. The difference being that they have an attitude toward whomever they meet that is completely random. !t[DrunkAttitude].", stats:["Druid"]}

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
    }
}
var enc = {
    "All": [ e.Aristocrat, e.Artist, e.Author, e.BanditGang, e.BarbarianEncampment, e.Bard, e.BatSwarm, e.BeerVendor, e.Beggar, e.BlackOrcs, e.BodyGuard, e.Butler, e.Burglar, e.Caravan, e.Carriage, e.CentaurBand, e.Centipede, e.Charlatan, e.CheeseVendor, e.CityWatch, e.CivicOfficial, e.Cleric, e.Courtesan, e.Dandy, e.Debutant, e.DogSoldiers, e.Druids, e.Drunk ],
    "OT_D": [ e.LyreguardPatrol, e.AdventuringBand ],
    "OT_N": [ e.Drunk ]
};
