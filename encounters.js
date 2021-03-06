/* Copyright 2016 Greg Farrell <greg at gregfarrell dot org>
   This code may not be used without permission.
   If you'd like to use this for your own product then please ask and I'll swap you the rights to use it for that purpose in exchange for a signed copy of your product or some such. */
var stat_blocks = {
    NurseMary:"Nurse Mary (Ftr2): HP 13; AC 7[12]; Atk +1 scalpel (1d3+1); Move 12; Save 13; AL N; CL/XP 2/30.<br>Special: multiple attacks (2) vs. creatures with 1 or fewer HD.<br>Equipment: leather suit, +1 scalpel (small dagger), whip.",
    RathKata:"Rath Kata, Cleric of Zors (Clr5): HP 18; AC 4[15]; Atk +1 cane (1d4+1); Move 12; Save 11; AL N; CL/XP 6/400;<br>Special: +2 save versus paralyzation and poison, spells (2/2), turn undead.<br>Spells: 1st—detect magic, purify food and drink; 2nd—bless, hold person.<br>Equipment: bracers of defense AC 4[15], +1 cane (treat as club), 2 potions of healing, 4 vials of holy water, golden holy symbol of Zors, 50cp.",
    Vol:"Vol \"Twilight Man\" (MU5): HP 14; AC 3[16]; Atk poisoned dagger (1d4 plus poison); Move 12; Save 11; AL C; CL/XP 6/400.<br>Special: +2 on saves vs. spells, spells (4/2/1). Spells: 1st—charm person, magic missile, sleep; 2nd—invisibility, phantasmal force; 3rd—hold person.<br>Equipment: bracers of defense AC 4[15], 2 poisoned daggers (save at -1 or die), ring of protection +1, robe of blending, medallion of ESP, spellbook.",
    JadeynRoean:"Jadeyn \"Captain\" Roean (Ftr6): HP 24; AC 6[13]; Atk +1 longsword (1d8+2) or longbow x2 (1d6); Move 12; Save 9; AL N; CL/XP 6/400;<br>Special: +1 to hit and damage strength bonus, multiple attacks (6) vs. creatures with 1 or fewer HD.<br>Equipment: leather armor, shield, +1 longsword \"Mare\", longbow, 20 arrows.",
    DengLoDo:"Deng Lo Do (Mnk6): HP 17; AC 3[16]; Atk weaponless strike x2 (1d12) or +2 dagger (1d4+5) or shuriken (1d3); Move 17; Save 9; AL C; CL/XP 8/800;<br>Special: +2 save versus paralyzation and poison, deadly strike, +3 damage with weapons (included above), mastery of mind, mastery of silence (1d6 x 60 min), speak with animals, slow falling (20ft), thieving skills.<br>Thieving Skills: Climb 90%, Tasks/Traps 40%, Hear 4 in 6, Hide 35%, Silent 45%, Locks 35%.<br>Equipment: +2 dagger, ring of protection +1, 5 shurikens (darts).",
    Gowan:"Gowan McKean, Male Dwarf (Ftr5): HP 20; AC 3[16]; Atk +1 battleaxe (1d8+2); Move 9; Save 10; AL N; CL/XP 5/240;<br>Special: +1 to hit and damage strength bonus, darkvision 60ft, dwarf racial abilities, multiple attacks (5) vs. creatures with 1 or fewer HD.<br>Equipment: plate mail, +1 battleaxe, heavy crossbow, 20 bolts.",
    Johan:"Johan the Bastard, Male Half-Orc (Ftr4): HP 21; AC 6[13]; Atk +1 longsword (1d8+2) or heavy crossbow (1d6+1 plus poison); Move 12; Save 11; AL C; CL/XP 4/120;<br>Special: +1 to hit and damage strength bonus, darkvision 60ft, half-orc racial abilities, multiple attacks (4) vs. creatures with 1 or fewer HD.<br>Equipment: +1 leather armor, +1 longsword, heavy crossbow, 20 poisoned bolts.",
    Zoey:"Zoey, Female Human Cleric of Freya (Clr8): HP 28; AC 3[16]; Atk +1 heavy mace (1d6+1); Move 9; Save 8; AL L; CL/XP 9/1100;<br>Special: +2 save versus paralyzation and poison, spells (2/2/2/2/2), turn undead.<br>Spells: 1st—cure light wounds, protection from evil; 2nd—bless, hold person; 3rd—prayer, remove curse; 4th—cure serious wounds, speak with plants; 5th—commune, raise dead.<br>Equipment: +1 chain mail, shield, +1 heavy mace, wand of cure serious wounds (6 charges), 6 vials of holy water, silver holy symbol of Freya.",
    Lottobus:"Lottobus (Ftr2): HP 12; AC 7[12]; Atk +1 club (1d4+2); Move 12; Save 13; AL N; CL/XP 2/30;<br>Special: +1 to hit and damage strength bonus, multiple attacks (2) vs. creatures with 1 or fewer HD.<br>Equipment: leather armor, +1 club.",
    Osius:"Osius (Ftr2): HP 12; AC 6[13]; Atk heavy mace (1d6+1); Move 12; Save 13; AL N; CL/XP 2/30;<br>Special: +1 to hit and damage strength bonus, multiple attacks (2) vs. creatures with 1 or fewer HD.<br>Equipment: ring mail, heavy mace.",
    FarinDun:"F’arin Du’n, Male Drow (Asn6): HP 27; AC 5[14]; Atk dagger (1d4 plus poison); Move 12; Save 10; AL C; CL/XP 5/240;<br>Special: +1 to hit dexterity bonus, -1[+1] to AC dexterity bonus, -2 to attack in sunlight, backstab (x3), 1 in 8 chance to be surprised, darkvision 60ft, disguise, drow racial abilities, magic resistance (50%), magical abilities, poison, thieving skills.<br>Magical Abilities: 1/day—darkness 15ft radius, ability to outline a target in faint light at a range of 60ft (all have +1 to hit the victim), and the ability to create lantern-like lights at a range of 60ft.<br>Thieving Skills: Climb 88%, Tasks/Traps 30%, Hear 4 in 6, Hide 40%, Silent 45%, Locks 25%.<br>Equipment: +1 leather armor, poisoned dagger (save at -2 or die), boots of elvenkind, cloak of elvenkind, thieves' tools.",
    Tork:"Tork, Male Dwarf (Ftr3): HP 16; AC 6[13]; Atk heavy mace (1d6+1); Move 9; Save 12; AL C; CL/XP 3/60;<br>Special: +1 to hit and damage strength bonus, darkvision 60ft, dwarf racial abilities, multiple attacks (3) vs. creatures with 1 or fewer HD.<br>Equipment: ring mail, heavy mace.",
    Estrellya:"Estrellya, Male Half-Elf (MU3): HP 11; AC 9[10]; Atk +1 dagger (1d4+1); Move 12; Save 13; AL N; CL/XP 4/120;<br>Special: +2 on saves vs. spells, darkvision 60ft, half-elf abilities, spells (3/1).<br>Spells: 1st—detect magic, light, read magic; 2nd—ESP.<br>Equipment: +1 dagger, robes, lute, spellbook.",
    Acestrus:"Acestrus (MU3): HP 11; AC 8[11]; Atk +1 staff (1d6+1); Move 12; Save 12; AL N; CL/XP 4/120;<br>Special: +2 on saves vs. spells, spells (3/1).<br>Spells: 1st—magic missile x2, shield; 2nd—phantasmal force.<br>Equipment: robes, +1 staff, ring of protection +1, wand of hold person (2 charges), guitarra, spellbook.",
    Beast:"Beast, Cleric of Bowbe (Clr6): HP 25; AC 2[17]; Atk +2 heavy mace (1d6+2); Move 12; Save 10; AL N; CL/XP 7/600;<br>Special: +2 save versus paralyzation and poison, spells (2/2/1/1), turn undead.<br>Spells: 1st—cure light wounds, light; 2nd—hold person, silence 15 ft radius; 3rd—cure disease; 4th—cure serious wounds.<br>Equipment: +1 plate mail, +2 heavy mace, wooden holy symbol of Bowbe.",
    Gato:"Gato (Rgr4): HP 24; AC 6[13]; Atk short sword (1d6) or long- bow x2 (1d6); Move 12; Save 10; AL L; CL/XP 5/240;<br>Special: +4 to damage vs giants and goblinoids, alertness, tracking.<br>Equipment: leather armor, short sword, long bow, 20 arrows, ring of protection +1, drums.",
    StrathianSilverspear:"Strathian Silverspear (Ftr4): HP 21; AC 4[15]; Atk +2 spear (1d6+3) or light crossbow (1d4+1); Move 12; Save 11; AL N; CL/XP 4/120;<br>Special: +1 to hit and damage strength bonus, multiple attacks (4) vs. creatures with 1 or fewer HD.<br>Equipment: chainmail, shield, +2 spear, light crossbow, 20 bolts.",
    Gaulin:"Gaulin (Ftr3): HP 17; AC 4[15]; Atk battle axe (1d8) or light crossbow (1d4+1); Move 12; Save 12; AL N; CL/XP 3/60;<br>Special: +1 to hit and damage strength bonus, multiple attacks (3) vs. creatures with 1 or fewer HD.<br>Equipment: chainmail, shield, battle axe, light cross- bow, 20 bolts.",
    HenryPigSticker:"Henry Pig Sticker (Ftr3): HP 18; AC 4[15]; Atk spear (1d6+1) or heavy crossbow (1d6+1); Move 12; Save 12; AL N; CL/XP 3/60;<br>Special: +1 to hit and damage strength bonus, multiple attacks (3) vs. creatures with 1 or fewer HD.<br>Equipment: chainmail, shield, spear, heavy crossbow, 20 bolts.",
    Mallus:"Mallus (Ftr3): HP 17; AC 4[15]; Atk warhammer (1d4+2) or longbow x2 (1d6); Move 12; Save 12; AL N; CL/XP 3/60;<br>Special: +1 to hit and damage strength bonus, multiple attacks (3) vs. creatures with 1 or fewer HD.<br>Equipment: chainmail, shield, warhammer, longbow, 20 arrows.",
    Torthas:"Torthas (Ftr3): HP 18; AC 5[14]; Atk two-handed sword (1d10+2); Move 12; Save 12; AL N; CL/XP 3/60;<br>Special: +1 to hit and damage strength bonus, multiple attacks (3) vs. creatures with 1 or fewer HD.<br>Equipment: chainmail, two-handed sword.",
    TrudyRilling:"Trudy Rilling, Female Human (Ftr3): HP 16; AC 7[12]; Atk short sword (1d6) or shortbow x2 (1d6); Move 12; Save 12; AL N; CL/XP 3/60;<br>Special: multiple attacks (3) vs. creatures with 1 or fewer HD.<br>Equipment: leather armor, short sword, shortbow, 20 arrows.",
    TopferBrighteye:"High Sheriff Topfer Brighteye, Male Hal ing (Ftr4): HP 19; AC 3[16]; Atk +1 longsword (1d8+2); Move 9; Save 11; AL L; CL/ XP 4/120;<br>Special: +1 bonus when using missile weapons, +1 to hit and damage strength bonus, +4 on saving throws against magic, halfling racial abilities, multiple attacks (4) vs. creatures with 1 or fewer HD.<br>Equipment: +1 chainmail, shield, +1 longsword.",
    Kotchko:"Major Kotchko, Undersheriff (Ftr6): HP 30; AC 5[14]; Atk +1 bastard sword (1d8+2); Move 12; Save 9; AL N; CL/XP 6/400;<br>Special: +1 to hit and damage strength bonus, multiple attacks (6) vs. creatures with 1 or fewer HD.<br>Equipment: +1 ring mail, +1 bastard sword, 2 sets of manacles.",
    GarridGarzag:"Garrid Garzag, Male Dwarf Chief of Constables (Ftr6): HP 32; AC 0[19]; Atk +1 warhammer (1d4+3); Move 9; Save 9; AL N; CL/XP 6/400;<br>Special: +1 to hit and damage strength bonus, darkvision 60ft, dwarf racial abilities, multiple attacks (6) vs. creatures with 1 or fewer HD.<br>Equipment: +1 plate mail, +1 shield, +1 warhammer.",
   PthanTraklos:"Pthan Traklos, Constable Captain (Ftr6): HP 28; AC 4[15]; Atk short sword (1d6+1); Move 12; Save 9; AL N; CL/XP 6/400;<br>Special: +1 to hit and damage strength bonus, multiple attacks (6) vs. creatures with 1 or fewer HD.<br>Equipment: chainmail, shield, short sword",
    Malo:"Malo Enzeger, Cleric of Orcus (Clr6): HP 25; AC 9[12]; Atk mace of terror (1d6+1); Move 12; Save 10; AL C; CL/XP 7/600;<br>Special: +2 save versus paralyzation and poison, spells (2/2/1/1), turn undead.<br>Spells: 1st—cause light wounds, protection from good; 2nd—bless, hold person; 3rd—cause disease; 4th—cause serious wounds.<br>Equipment: mace of terror (see Appendix C), ring of regeneration, ring of misdirected alignment (see Appendix C).",
    NoriaVerilath:"Noria Verilath, Female Human (Asn6): HP 24; AC 5[14]; Atk +2 dagger (1d4+2) or poisoned daggers (1d4 plus poison); Move 12; Save 10; AL C; CL/XP 7/600;<br>Special: +1 to hit dexterity bonus, –1[+1] to AC dexterity bonus, backstab (x3), disguise, poison, thieving skills.<br>Thieving Skills: Climb 88%, Tasks/Traps 30%, Hear 4 in 6, Hide 25%, Silent 35%, Locks 25%.<br>Equipment: +1 leather armor, +2 dagger, 3 poisoned daggers, 8 doses of giant wasp poison, boots of speed, thieves' tools.",
    Aririn:"Aririn (Nymph): HD 3; HP 14; AC 9[10]; Atk none; Move 12; Save 14; AL N; CL/XP 5/240;<br>Special: sight causes blindness or death, siren song. (Monstrosities 351)",
    JenetteHolycraft:"Jenette Holycraft, Female Human (Pal7): HP 46; AC 1[18]; Atk +2 longsword (1d8+2); Move 12; Save 6; AL L; CL/XP 8/800;<br>Special: immune to disease, lay on hands (14hp), warhorse mount<br>Equipment: +2 plate mail, +2 longsword, silver holy symbol of Muir.",
    Fanr:"Fanr Flameson, Cleric of Moccavallo (Clr9): HP 38; AC 4[15]; Atk +2 heavy mace (1d6+2); Move 12; Save 7; AL C; CL/XP 11/1700;<br>Special: control undead, +2 save versus paralyzation and poison, spells (3/3/3/2/2).<br>Spells: 1st—cause light wounds, protection from good, light; 2nd—bless, hold person, silence 15ft radius; 3rd—disease, prayer, speak with dead; 4th—cure serious wounds, protection from good 10ft radius; 5th—commune, finger of death.<br>Equipment: +2 chainmail, +2 heavy mace, holy symbol of Moccavallo.",
    Purrann:"First Priest Purrann, Male Weretiger Cleric of Bast (Clr6): HP 31; AC 4[15] or 3[16]; Atk +2 heavy mace (1d6+2) or 2 claws (1d4) and bite (1d10); Move 12; Save 10; AL N; CL/XP 10/1400;<br>Special: +2 save versus paralyzation and poison, hit only by magic or silver weapons, lycanthropy, spells (2/2/1/1), turn undead.<br>Spells: 1st—cure light wounds, detect magic; 2nd— bless, hold person; 3rd—remove curse; 4th—cure serious wounds.<br>Equipment: +1 chainmail, +2 heavy mace, holy symbol of Bast.",
    Ivillivil:"Ivillivil, Male Weretiger Cleric of Bast (Clr4): HP 20; AC 7[12] or 3[16]; Atk +1 warhammer (1d4+2) or 2 claws (1d4) and bite (1d10); Move 12; Save 11; AL N; CL/XP 9/1100;<br>Special: +2 save versus paralyzation and poison, hit only by magic or silver weapons, lycanthropy, spells (2/1), turn undead.<br>Spells: 1st—cure light wounds, detect magic; 2nd—hold person.<br>Equipment: +1 shield, +1 warhammer, holy symbol of Bast.",
    Haldor:"Haldor, Male Weretiger Cleric of Bast (Clr3): HP 16; AC 5[14] or 3[16]; Atk +1 heavy mace (1d6+1) or 2 claws (1d4) and bite (1d10); Move 12; Save 11; AL N; CL/XP 9/1100;<br>Special: +2 save versus paralyzation and poison, hit only by magic or silver weapons, lycanthropy, spells (2), turn undead.<br>Spells: 1st—cure light wounds, detect magic.<br>Equipment: chainmail, +1 heavy mace, holy symbol of Bast",
    Thord:"Thord, Male Weretiger Cleric of Bast (Clr3): HP 13; AC 7[12] or 3[16]; Atk staff (1d6) or 2 claws (1d4) and bite (1d10); Move 12; Save 11; AL N; CL/XP 9/1100;<br>Special: +2 save versus paralyzation and poison, hit only by magic or silver weapons, lycanthropy, spells (2), turn undead.<br> Spells: 1st—cure light wounds, protection from evil.<br>Equipment: leather armor, staff, holy symbol of Bast.",
    GinivarinKrandolve:"Ginivarin Krandolve, Male Elf Cleric of Darach-Albith (Clr7): HP 34; AC 2[17]; Atk +1 staff (1d6+1); Move 12; Save 7; AL L; CL/XP 9/1100;<br>Special: +2 save versus paralyzation and poison, darkvision 60ft, elf racial abilities, spells (2/2/2/1/1), turn undead.<br> Spells: 1st—cure light wounds, detect magic; 2nd—remove curse; bless, hold person; 3rd—prayer, 4th—speak with plants; 5th—commune.<br>Equipment: bracers of defense AC 4, ring of protection +2, cloak and boots of elvenkind, +1 staff, 2 scrolls of cure light wounds, 2 vials of holy water, wooden holy symbol of Darach-Albith.",
    Bofred:"Bofred the Just, Cleric of Thyr (Clr7): HP 25; AC 4[15]; Atk +2 staff (1d6+2); Move 12; Save 9; AL L; CL/XP 9/1100;<br>Special: +2 save versus paralyzation and poison, spells (2/2/2/1/1), turn undead.<br>Spells: 1st—cure light wounds (x2); 2nd—bless, hold person; 3rd—prayer (x2); 4th—cure serious wounds; 5th—dispel evil.<br>Equipment: bracers of defense AC 4[15], +2 staff, holy symbol of Thyr.",
    ElissaPerinor:"High Guardian Elissa Perinor, Female Human Cleric of Vanitthu (Clr6): HP 25; AC 3[16]; Atk +1 heavy mace (1d6+1); Move 12; Save 10; AL L; CL/XP 7/600;<br>Special: +2 save versus paralyzation and poison, spells (2/2/1/1), turn undead.<br>Spells: 1st—cure light wounds, protection from evil; 2nd—bless, hold person; 3rd—cure disease; 4th—cure serious wounds.<br>Equipment: +1 chainmail, shield, +1 heavy mace, solid gold holy symbol of Vanitthu (50gp value).",
    Thayco:"Thayco Manslayer, Male Dwarf (Ftr4): HP 18; AC 5[14]; Atk +1 battleaxe (1d8+2) or crossbow (1d4+1); Move 12; Save 11; AL N; CL/XP 4/120;<br>Special: +1 to hit and damage strength bonus, darkvision 60ft, dwarf racial abilities, multiple attacks (4) vs. creatures with 1 or fewer HD.<br>Equipment: chainmail, +1 battleaxe, light crossbow, 20 bolts.",
    Booginz:"Booginz, Male Half-Orc (Ftr4): HP 21; AC 7[12]; Atk short sword (1d6+1) or club (1d4+1); Move 12; Save 11; AL N; CL/XP 4/120;<br>Special: +1 to hit and damage strength bonus, darkvision 60ft, half-orc racial abilities, multiple attacks (4) vs. creatures with 1 or fewer HD.<br>Equipment: leather armor, short sword, club.",
    Bandit:"Bandit: HD 1; AC 7[12]; Atk longsword (1d8); Move 12; Save 17; AL N; CL/XP 1/15;<br>Special: none.<br>Equipment: leather armor, longsword, 2d6cp.",
    BanditLeader:"Bandit Leader: HD 3; AC 6[13]; Atk longsword (1d8) or dagger (1d4); Move 12; Save 15; AL C; CL/XP 3/60;<br>Special: none.<br>Equipment: leather armor, shield, longsword, dagger, 1d6sp, 3d6cp.",
    Barbarian:"Barbarian (Ftr1): HP 7; AC 6[13]; Atk spear (1d6+1) or shortbow x2 (1d6); Move 12; Save 14; AL N; CL/XP 1/15.<br>Special: +1 to hit and damage due to high strength, +1 to hit dexterity bonus, -1[+1] to AC dexterity bonus, +1 hp per die due to high constitution.<br>Equipment: leather armor, spear, shortbow, 20 arrows.",
    BarbarianLeader:"Barbarian Leader (Ftr3): HP 18; AC 6[13]; Atk spear (1d6+1) or shortbow x2 (1d6); Move 12; Save 12; AL L; CL/XP 3/60.<br>Special: +1 to hit and damage due to high strength, +1 to hit dexterity bonus, -1[+1] to AC dexterity bonus, +1 hp per die due to high constitution, multiple attacks (3) vs. creatures with 1 or fewer HD.<br>Equipment: leather armor, spear, shortbow, 20 arrows, 3d6sp.",
    BarbarianBouncer:"Barbarian Bouncer Half-Orcs (Ftr2): HP 10; AC 7[12]; Atk club (1d4) or fist (1d3); Move 12; Save 13; AL N; CL/XP 2/30.<br>Special: +1 to hit and damage due to high strength, darkvision 60ft, half-orc racial abilities, multiple attacks (2) vs. creatures with 1 or fewer HD.<br>Equipment: leather armor, club.",
    Bat:"Bat: HD 1-2hp; AC 8[11]; Atk bite (1); Move 1 (fly 24); Save 18; AL N; CL/XP A/5;<br>Special: sonar flight in total darkness, swarm (causes spells to fail 50% of time).",
    BlackOrc:"Black Orcs: HD 2; AC 5[14]; Atk two-handed sword (1d10); Move 12; Save 16; AL C; CL/XP 2/30;<br>Special: none. (The Tome of Horrors Complete 418).",
    BlackBrotherhoodFighter:"Black Brotherhood Fighter: HD 7; HP 50; AC 1[18]; Atk claw (1d12) or +1 longsword, +4 vs. humans (1d8+2); Move 9; Save 8 (3 vs magic); CL/XP 10/1400;<br>Special: +1 to hit and damage due to high strength, immune to sleep and charm, mimics shape.<br>Equipment: +1 chainmail, +1 shield, +1 longsword, +4 vs. humans, ring of protection +1.",
    BlackBrotherhoodKiller:"Black Brotherhood Killer: HD 7; HP 35; AC 3[16]; Atk claw (1d12) or poisoned dagger (1d4 plus poison); Move 9; Save 8 (3 vs magic); CL/XP 10/1400;<br>Special: +1 to hit fighting with 2 weapons, +1 to hit dexterity bonus, -1[+1] to AC dexterity bonus, immune to sleep and charm, mimics shape.<br>Equipment: bracers of defense AC 4[15], 2 poisoned daggers (save at -1 or die), ring of protection +1, thieves' tools.",
    BodyGuard:"Bodyguard (Ftr2): HP 13; AC 6[13]; Atk club (1d4)); Move 12; Save 13; AL N; CL/XP 2/30.<br>Special: +1 to hit dexterity bonus, -1[+1] to AC dexterity bonus, +1 hp per die due to high constitution, multiple attacks (2) vs. creatures with 1 or fewer HD.<br>Equipment: leather armor, club, 2d4sp.",
    BodyGuard_F1:"Bodyguard (Ftr1): HP 6; AC 7[12]; Atk club (1d4); Move 12; Save 14; AL L; CL/XP 1/15.<br>Special: none.<br>Equipment: leather armor, club, 1d4sp.",
    Cylyria:"Cylyria, Female Half-Elf (MU4/Thf5): HP 12; AC 0[20]; Atk +1 longsword (1d8+1); Move 12; Save 11; AL L; CL/XP 6/400.<br>Special: +2 on saves vs. spells, darkvision 60ft, half-elf racial abilities, read normal languages, spells (3/2).<br> Spells: 1st-charm person, read magic, sleep; 2nd- ESP, invisibility.<br>Thieving Skills: Climb 89%, Tasks/Traps 35%, Hear 4 in 6, Hide 30%, Silent 40%, Locks 30%.<br>Equipment: +2 leather armor, +2 buckler (small light- weight shield), ring of protection +2, +1 longsword, ring of spell storing (polymorph self), boots of leaping, lute of suggestion (Appendix C), robe of blending, spellbook.</br>",
    Shaman:"Shaman: HD 2; HP 9; AC 9[10]; Atk club (1d4); Move 12; Save 15; AL N; CL/XP 3/60;<br>Special: spells (2).<br>Spells: 1st-cure light wounds, protection from evil. Equipment: robes, bone-totem staff.",
    Bouncer:"Bouncer: HP 6; AC 7[12]; Atk club (1d4); Move 12; Save 14; AL C; CL/XP 1/15.<br>Special: none.<br>Equipment: leather armor, club, 1d4cp.",
    Burglar:"Burglar (Thf3): HP 8; AC 6[13]; Atk short sword (1d6) or dagger (1d4); Move 12; Save 12; AL C; CL/XP 3/60;<br>Special: +1 to hit dexterity bonus, -1[+1] to AC dexterity bonus, +2 on saving throws vs. devices, backstab (x2), thieving skills.<br>Thieving Skills: Climb 87%, Tasks/Traps 25%, Hear 4 in 6, Hide 20%, Silent 30%, Locks 20%.<br>Equipment: leather armor, short sword, dagger, thieves' tools, 1d10gp.",
    Lasker:"Lasker (Chaotic Male Dwarf Thf3): HP 8; AC 6[13]; Atk short sword (1d6) or dagger (1d4); Move 12; Save 12; AL C; CL/XP 3/60;<br>Special: +1 to hit dexterity bonus, -1[+1] to AC dexterity bonus, +2 on saving throws vs. devices, backstab (x2), thieving skills.<br>Thieving Skills: Climb 87%, Tasks/Traps 25%, Hear 4 in 6, Hide 20%, Silent 30%, Locks 20%.<br>Equipment: leather armor, short sword, dagger, thieves' tools, 1d10gp.",
    Tovan:"Tovan (Thf7): HP 21; AC 6[13]; Atk +1 dagger (1d4+1) or light cross bow (1d4+1 plus poison); Move 12; Save 9; AL C; CL/ XP 7/600;<br>Special: +2 on saving throws vs. devices, backstab (x3), read languages, thieving skills.<br>Thieving Skills: Climb 91%, Tasks/Traps 45%, Hear 5 in 6, Hide 40%, Silent 50%, Locks 40%.<br>Equipment: leather armor, +1 dagger, cloak of shadow (see Appendix C), light crossbow, 10 poisoned bolts, holy symbol of Orcus.",
    Cutpurse:"Cutpurse (Thf2): HP 5; AC 7[12]; Atk dagger (1d4); Move 12; Save 14; AL N; CL/XP 3/60;<br>Special: +2 on saving throws vs. devices, backstab (x2), thieving skills.<br>Thieving Skills: Climb 86%, Tasks/Traps 20%, Hear 3 in 6, Hide 15%, Silent 25%, Locks 15%.<br>Equipment: leather armor, 3 daggers, thieves' tools, 2d4sp.",
    Duloth:"Duloth (Ftr7): HP 35; AC 3[16]; Atk +2 dagger (1d4+3) or +1 extra attack longsword x2 (1d8+2) or light crossbow (1d4+1 plus poison); Move 12; Save 6; AL C; CL/XP 8/800.<br>Special: +1 to hit and damage due to high strength, +1 to hit dexterity bonus, -1[+1] to AC dexterity bonus, multiple attacks (7) vs. creatures with 1 or fewer HD, parry -3.<br>Equipment: +2 leather armor, ring of protection +2, +2 dagger, +1 extra attack longsword, light crossbow, 10 bolts (w/ large spider venom, save at -1 or die), bag of holding, ring of misdirected alignment (Appendix C), 3 vials of black lotus extract, several hundred gp in coin and gems.",
    Zalatha:"Zalatha, Female Human (Thf2): HP 6; AC 7[12]; Atk 2 short swords (1d6) or dagger (1d4) or light crossbow (1d4+1 plus poison); Move 12; Save 14; AL C; CL/XP 2/30;<br>Special: +1 to hit using 2 weapons, +2 on saving throws vs. devices, backstab (x2), thieving skills.<br>Thieving Skills: Climb 86%, Tasks/Traps 20%, Hear 3 in 6, Hide 15%, Silent 25%, Locks 15%.<br>Equipment: leather armor, 2 short swords, dagger, light crossbow, 15 bolts, 5 bolts (w/ medium spider venom, save or die), potion of extra-healing, thieves' tools, 38gp.",
    Manisool:"Manisool (Clr5/MU5): HP 12; AC 1[18]; Atk +1 staff (1d6+1); Move 12; Save 10; AL C; CL/XP 11/1700.<br>Special: +2 save versus paralyzation and poison, +2 on saves vs. spells, command undead, cleric spells (2/2), magic-user spells (4/2/1).<br>Cleric Spells: 1st-cause light wounds, protection form good; 2nd-hold person (x2).<br> Magic-User Spells: 1st-charm person, magic missile, shield, sleep; 2nd-ESP, mirror image, phantasmal force; 3rd-dispel magic.<br> Equipment: bracers of defense AC 2[17], ring of protection +1, cloak of displacement, +1 staff, ring of misdirected alignment (Appendix C), dust of disappearance (4 uses), 3 potions of healing, wand of hold person (4 charges), 4-6 random scrolls, holy symbol of Orcus (hidden), spellbook",
    Tranda:"Tranda, Male Half-Orc (Ftr1/Thf1): HP 7; AC 7[12]; Atk club (1d4+1) or dagger (1d4+1); Move 12; Save 14; AL C; CL/XP 3/60;<br>Special: +1 to hit and damage due to high strength, +1 hp per die due to high constitution, +2 on saving throws vs. devices, backstab (x2), darkvision 60ft, half-orc racial abilities, thieving skills.<br>Thieving Skills: Climb 85%, Tasks/Traps 15%, Hear 3 in 6, Hide 10%, Silent 20%, Locks 10%.<br>Equipment: leather armor, club, dagger.",
    Gorar:"Gorar, Male Dwarf (Ftr3): HP 23; AC 5[14]; Atk warhammer (1d4+1) or dagger (1d4); Move 9; Save 12; AL C; CL/XP 3/60;<br>Special: +1 hp per die due to high constitution, darkvision 60ft, dwarf racial abilities, multiple attacks (3) vs. creatures with 1 or fewer HD.<br>Equipment: ring mail, shield, warhammer, 3 throwing daggers, 3d10gp.",
    Robber:"Robber (Thf1): HP 3; AC 7[12]; Atk dagger (1d4); Move 12; Save 15; AL N; CL/XP 1/15;<br>Special: +2 on saving throws vs. devices, backstab (x2), thieving skills.<br>Thieving Skills: Climb 85%, Tasks/Traps 15%, Hear 3 in 6, Hide 10%, Silent 20%, Locks 10%.<br>Equipment: leather armor, dagger, 1d4cp.",
    Pickpocket:"Pickpocket (Thf3): HP 7; AC 7[12]; Atk club (1d4) or dagger (1d4); Move 12; Save 12; AL N; CL/XP 3/60;<br>Special: +2 on saving throws vs. devices, backstab (x2), thieving skills.<br>Thieving Skills: Climb 87%, Tasks/Traps 25%, Hear 4 in 6, Hide 20%, Silent 30%, Locks 20%.<br>Equipment: leather armor, club, dagger.",
    WheelwrightTough:"Wheelwright Tough (Ftr1,Thf1): HP 5; AC 7[12]; Atk club (1d4) or dagger (1d4); Move 12; Save 14; AL C; CL/XP 2/30.<br>Special: +2 on saving throws vs. devices, backstab (x2), thieving skills.<br>Thieving Skills: Climb 85%, Tasks/Traps 15%, Hear 3 in 6, Hide 10%, Silent 20%, Locks 10%.<br>Equipment: leather armor, club, dagger.",
    WheelwrightCollector:"Wheelwright Collector (Thf3): HP 8; AC 6[13]; Atk short sword (1d6) or dagger (1d4); Move 12; Save 12; AL C; CL/XP 3/60;<br>Special: +1 to hit dexterity bonus, -1[+1] to AC dexterity bonus, +2 on saving throws vs. devices, backstab (x2), thieving skills.<br>Thieving Skills: Climb 87%, Tasks/Traps 25%, Hear 4 in 6, Hide 20%, Silent 30%, Locks 20%.<br>Equipment: leather armor, short sword, dagger, thieves' tools, 1d10gp.",
    CaravanCaptain:"Caravan Captain (Ftr2): HP 10; AC 6[13]; Atk club (1d4) or sling (1d4); Move 12; Save 13; AL L; CL/XP 2/30.<br>Special: multiple attacks (2) vs. creatures with 1 or fewer HD.<br>Equipment: ring mail, club, sling, 10 bullets, 2d4sp",
    CaravanGuard:"Caravan Guard: HD 1; AC 7[12]; Atk longsword (1d8) or spear (1d6); Move 12; Save 17; AL N; CL/XP 1/15;<br>Special: none.<br>Equipment: leather armor, longsword, spear, 2d12cp.",
    Centaur:"Centaur: HD 4; AC 5[14] or 4[15] with shield; Atk 2 kicks (1d6) and weapon; Move 18; Save 13; AL N; CL/XP 4/120;<br>Special: none.",
    SilfusSharphoof:"Silfus Sharphoof, Male Centaur (Rgr2): HD 6; HP 31; AC 5[14]; Atk 2 kicks (1d6) and +1 lance (2d4+2) or longbow x2 (1d6); Move 18; Save 11; AL L; CL/XP 7/600;<br>Special: +2 to damage vs giants and goblinoids, alertness, tracking.<br>Equipment: +1 lance, longbow, 20 arrows.",
    GiantCentipede:"Giant Centipede (small, lethal): HD 1d2 hp; AC 9[10]; Atk bite (0 plus poison); Move 13; Save 18; AL N; CL/XP 1/15;<br>Special: poison bite (+4 save or die).",
    GiantRat:"Giant Rat: HD 1d4hp; AC 7[12]; Atk bite (1d3); Move 12; Save 18; AL N; CL/XP A/5;<br>Special: 2 of the rats are diseased.",
    CentipedeSwarm:"Centipede Swarm: HD 3; AC 7 [12]; Atk bites (1hp plus non-lethal poison); Move 3; Save 14; AL N; CL/XP 4/120;<br>Special: immune to all but blunt weapons, non-lethal poison (2d6 points of damage).",
    Charlatan:"Charlatan (Thf1): HP 2; AC 9[10]; Atk club (1d4); Move 12; Save 15; AL N; CL/XP 1/15;<br>Special: +2 on saving throws vs. devices, backstab (x2), thieving skills.<br>Thieving Skills: Climb 85%, Tasks/Traps 15%, Hear 3 in 6, Hide 10%, Silent 20%, Locks 10%.<br>Equipment: club, 3d4cp.",
    Dandy:"Dandy, Male or Female (Ftr3): HP 15; AC 6[13]; Atk rapier (1d6); Move 12; Save 12; AL N; CL/XP 3/60.<br>Special: +1 to hit dexterity bonus, -1[+1] to AC dexterity bonus, multiple attacks (3) vs. creatures with 1 or fewer HD, parry (-2 to enemy's attacks).<br>Equipment: leather armor, rapier (short sword), dandy clothes.",
    DogSoldierSneak:"Dog Soldier Sneak (Thf3): HP 7; AC 7[12]; Atk club (1d4) or dagger (1d4); Move 12; Save 12; AL N; CL/XP 3/60;<br>Special: +2 on saving throws vs. devices, backstab (x2), thieving skills.<br>Thieving Skills: Climb 87%, Tasks/Traps 25%, Hear 4 in 6, Hide 20%, Silent 30%, Locks 20%.<br>Equipment: leather armor, club, dagger.",
    DogSoldierWarrior:"Dog Soldier Warrior (Ftr2): HP 13; AC 6[13]; Atk club (1d4) or sling (1d4); Move 12; Save 13; AL N; CL/XP 2/30.<br>Special: +1 to hit dexterity bonus, -1[+1] to AC dexterity bonus, +1 hp per die due to high constitution, multiple attacks (2) vs. creatures with 1 or fewer HD.<br>Equipment: leather armor, club, sling, 10 bullets, 2d4sp.",
    DogSoldierMU:"Dog Soldier Magic-User's Apprentice (MU1): HP 3; AC 8[11]; Atk staff (1d6); Move 12; Save 15; AL N; CL/XP 2/30;<br>Special: +2 on saves vs. spells, spells (1).<br> Spells: 1st-sleep.<br>Equipment: staff, spellbook.",
    Druid:"Druid (Drd4): HP 16; AC 7[12]; Atk +1 sickle sword (1d6+1); Move 12; Save 12; AL N; CL/XP 8/800;<br>Special: +2 bonus to saving throws against fire, druid language, immune to fey charms, shape change, spells (3/1/1).<br>Spells: 1st-faerie fire, locate animals, predict weather; 2nd-cure light wounds; 3rd-call lightning.<br>Equipment: leather armor, +1 sickle sword (treat as short sword), holly berries and mistletoe.",
    MerchantGuard_F2:"Merchant Guard Veteran (Ftr2): HP 10; AC 7[12]; Atk short-sword (1d6); Move 12; Save 13; AL N; CL/XP 2/30.<br>Special: multiple attacks (2) vs. creatures with 1 or fewer HD.<br>Equipment: leather armor, shortsword, 2d4sp",
    MerchantGuard_F1:"Merchant Guard (Ftr1): HP 5; AC 7[12]; Atk shortsword (1d6); Move 12; Save 17; AL N; CL/XP 1/15;<br>Special: none.<br>Equipment: leather armor, shortsword, 2d12cp.",
    MerchantGuard_T2:"Merchant Guard (Thf2): HP 5; AC 7[12]; Atk shortsword (1d6); Move 12; Save 14; AL N; CL/XP 3/60;<br>Special: +2 on saving throws vs. devices, backstab (x2), thieving skills.<br>Thieving Skills: Climb 86%, Tasks/Traps 20%, Hear 3 in 6, Hide 15%, Silent 25%, Locks 15%.<br>Equipment: leather armor, shortsword, 2d4sp",
    MarketGuard_F2:"Guard Veteran (Ftr2): HP 10; AC 6[13]; Atk club (1d4) or sling (1d4); Move 12; Save 13; AL L; CL/XP 2/30.<br>Special: multiple attacks (2) vs. creatures with 1 or fewer HD.<br>Equipment: ring mail, club, sling, 10 bullets, whistle, 2d4sp",
    MarketGuard_F1:"Guard: HP 5; AC 7[12]; Atk club (1d4) or sling (1d4); Move 12; Save 17; AL L; CL/XP 1/15;<br>Special: none.<br>Equipment: leather armor, club, sling, 10 bullets, whistle, 2d12cp.",
    Fighter:"Hero (Ftr3): HP 22; AC 6[13]; Atk longsword (1d8+1) or dagger (1d4+1); Move 12; Save 12; AL L; CL/XP 3/60.<br>Special: +1 to hit and damage due to high strength, multiple attacks (3) vs. creatures with 1 or fewer HD.<br>Equipment: ring mail, longsword, dagger.",
    Fighter_F5:"Fighter (Ftr5): HP 26; AC 2[17]; Atk +1 longsword (1d8+2); Move 12; Save 10; AL N; CL/XP 4/120.<br>Special: +1 to hit and damage due to high strength, multiple attacks (4) vs. creatures with 1 or fewer HD.<br>Equipment: plate mail, shield, +1 longsword.",
    Ghost:"Ghost: HD 7; HP 32; AC 4[15]; Atk touch (2d6); Move 0 (fly 12); Save 8; AL N; CL/XP 8/800; Special: magic or silver weapon required to hit, rejuvenates if destroyed until reason for its existence is set right.",
    HaflingPickpocket:"Halfling Pickpocket (Thf2): HP 6; AC 6[13]; Atk dagger (1d4)); Move 12; Save 14; AL C; CL/XP 3/60;<br>Special: +1 to hit dexterity bonus, -1[+1] to AC dexterity bonus, +1 with thrown weapons, +2 on saving throws vs. devices, +4 on saving throws vs. magic, backstab (x2), halfling racial abilities, thieving skills.<br>Thieving Skills: Climb 86%, Tasks/Traps 25%, Hear 3 in 6, Hide 25%, Silent 35%, Locks 25%.<br>Equipment: leather armor, 3 daggers, thieves' tools.",
    Halforc:"Wanderer, Male Half-Orc (Ftr1): HP 7; AC 7[12]; Atk club (1d4+1); Move 12; Save 14; AL N; CL/XP 2/30.<br>Special: +1 to hit and damage due to high strength, +1 hit point per die due to high constitution, darkvision 60ft, half-orc racial abilities.<br>Equipment: leather armor, club.",
    HereticPriest:"Heretic Priest (Clr2): HP 6; AC 9[10]; Atk fist (1); Move 12; Save 14; AL C; CL/XP 3/60;<br>Special: +2 save versus paralyzation and poison.<br>Equipment: clerical vestments, defiled holy symbol of denounced god.",
    HereticPaladin:"Heretic Paladin (Pal2): HP 12; AC 6[13]; Atk longsword (1d8); Move 12; Save 11; AL L; CL/XP 3/60;<br>Special: immune to disease, lay on hands (4hp), warhorse mount.<br>Equipment: dirty ring mail, longsword, defiled holy symbol.",
    Imbo:"Imbo the Undying, Male Dwarf (Ftr6/Thf6): HP 39; AC 0[19]; Atk +1 throwing warhammer (1d4+7) or +1 battleaxe (1d8+7); Move 12; Save 9; AL C; CL/XP 14/2600;<br>Special: +1 hp per die due to high constitution, +2 on saving throws vs. devices, backstab (x3), darkvision 60ft, dwarf racial abilities, multiple attacks (6) vs. creatures with 1 or fewer HD, read normal languages, thieving skills.<br>Thieving Skills: Climb 90%, Tasks/Traps 50%, Hear 4 in 6, Hide 40%, Silent 50%, Locks 40%.<br>Equipment: +1 plate mail, +1 throwing warhammer, +1 battleaxe, boots of speed, gauntlets of ogre power, cloak of protection +2, thieves' tools.",
    Knotaloke:"Knotaloke, Female Human (Rgr4): HP 21; AC 4[15]; Atk longsword (1d8) or +1 longbow (1d6+1) x2; Move 12; Save 11; AL L; CL/XP 5/240;<br>Special: +4 to damage vs giants and goblinoids, alertness, tracking.<br>Equipment: +1 chainmail, longsword, +1 longbow, 20 arrows.",
    WallWatcher:"Wall Watcher (Ftr1): HP 5; AC 4[15]; Atk battleaxe (1d8) or spear (1d6); Move 12; Save 14; AL L; CL/XP 1/15.<br>Special: none.<br>Equipment: chainmail, shield, battle axe, spear, signal horn.",
    WallWatchOfficer:"Wall Watch Officer (Ftr3): HP 15; AC 5[14]; Atk spear (1d6) or short sword (1d6); Move 12; Save 12; AL L; CL/XP 3/60.<br>Special: multiple attacks (3) vs. creatures with 1 or fewer HD.<br>Equipment: ring mail, shield, spear, short sword.",
    Priest:"Priest (Clr3): HP 11; AC 4[15]; Atk warhammer (1d4+1) or sling (1d4); Move 12; Save 13; AL L; CL/XP 4/120;<br>Special: +2 save versus paralyzation and poison, spells (2), turn undead.<br>Spells: 1st-cure light wounds, protection from evil.<br>Equipment: chainmail, shield, clerical vestments, warhammer, sling, 10 bullets, holy symbol of appropriate god.",
    FurTrader:"Fur Trader (Rgr3): HP 22; AC 7[12]; Atk short sword (1d6) or longbow x2 (1d6); Move 12; Save 12; AL L; CL/XP 2/30.<br>Special: +3 to damage vs. giants and goblinoids, alertness, tracking.<br>Equipment: leather armor, short sword, longbow, 20 arrows.",
    NeutralRanger:"Ranger (Rgr1): HP 12; AC 7[12]; Atk short sword (1d6) or longbow x2 (1d6); Move 12; Save 14; AL N; CL/XP 1/15.<br>Special: +1 to damage vs. giants and goblinoids, alertness, tracking.<br>Equipment: leather armor, short sword, longbow, 20 arrows.",
    RedBladeInitiate:"Red Blade Initiate (Asn1): HP 4; AC 7[12]; Atk dagger (1d4); Move 12; Save 15; AL C; CL/XP 5/240;<br>Special: backstab (x2), disguise, poison, thieving skills.<br>Thieving Skills: Climb 85%, Tasks/Traps 15%, Hear 3 in 6, Hide 10%, Silent 20%, Locks 10%.<br>Equipment: leather armor, dagger, thieves' tools.",
    RedBlade:"Red Blade (Asn4): HP 19; AC 7[12]; Atk dagger (1d4 plus poison); Move 12; Save 12; AL C; CL/XP 5/240;<br>Special: backstab (x2), disguise, poison, thieving skills.<br>Thieving Skills: Climb 86%, Tasks/Traps 20%, Hear 3 in 6, Hide 15%, Silent 25%, Locks 15%.<br>Equipment: leather armor, poisoned dagger (save or die), thieves' tools.",
    ShadowMask:"Shadow Masks (Thf3): HP 8; AC 6[13]; Atk short sword (1d6) or dagger (1d4); Move 12; Save 13; AL C; CL/XP 3/60;<br>Special: +1 to hit dexterity bonus, -1[+1] to AC dexterity bonus, +2 on saving throws vs. devices, backstab (x2), thieving skills.<br>Thieving Skills: Climb 87%, Tasks/Traps 25%, Hear 4 in 6, Hide 20%, Silent 30%, Locks 20%.<br>Equipment: leather armor, short sword, dagger, thieves’ tools, 1d10gp.",
    SeniorShadowMask:"Senior Shadow Mask (Thf6): HP 17; AC 5[14]; Atk +1 dagger (1d4+1) or dagger (1d4); Move 12; Save 10; AL C; CL/XP 6/400;<br>Special: +1 to hit dexterity bonus, -1[+1] to AC dexterity bonus, +2 on saving throws vs. devices, backstab (x3), read languages, thieving skills.<br>Thieving Skills: Climb 90%, Tasks/Traps 40%, Hear 4 in 6, Hide 35%, Silent 45%, Locks 35%.<br>Equipment: +1 leather armor, +1 dagger, 4 throwing daggers, 2d6gp, 2d10sp.",
    Mercenary:"Mercenary (Ftr2): HP 12; AC 5[14]; Atk longsword (1d8); Move 12; Save 13; AL N; CL/XP 2/30;<br>Special: multiple at- tacks (2) vs. creatures with 1 or fewer HD.<br>Equipment: ring mail, shield, longsword, 10+2d10sp.",
    SellSword:"Sell-Sword (Ftr1): HP 7; AC 7[12]; Atk longsword (1d8) or dagger (1d4); Move 12; Save 14; AL L; CL/XP 1/15.<br>Special: none.<br>Equipment: leather armor, longsword, dagger, 1d6sp, 2d4cp.",
    Veteran:"Veteran (Ftr3): HP 20; AC 6[13]; Atk longsword (1d8+1) or dagger (1d4+1); Move 12; Save 12; AL L; CL/XP 3/60.<br>Special: +1 to hit and damage due to high strength, multiple attacks (3) vs. creatures with 1 or fewer HD.<br>Equipment: ring mail, longsword, dagger.",
    Kobold:"Kobold: HD 1d4hp; AC 7 [12]; Atk weapon (1d6); Move 6; Save 18; AL C; CL/XP A/15;<br>Special: none.",
    Longhunter:"Longhunter (Rgr2): HP 17; AC 7[12]; Atk short sword (1d6) or longbow x2 (1d6); Move 12; Save 13; AL L; CL/XP 2/30.<br>Special: +2 to damage vs. giants and goblinoids, alertness, tracking.<br>Equipment: leather armor, short sword, longbow, 20 arrows.",
    LonghunterLeader:"Longhunter Leader (Rgr3): HP 26; AC 6[13]; Atk +1 short sword (1d6+1) or longbow x2 (1d6+1 w/+1 arrows); Move 12; Save 12; AL L; CL/XP 3/60.<br>Special: +1 to hit dexterity bonus, -1[+1] to AC dexterity bonus, +3 to damage vs. giants and goblinoids, alertness, tracking.<br>Equipment: leather armor, +1 short sword, longbow, 20 +1 arrows.",
    LonghunterScout:"Longhunter Scout (Thf2): HP 9; AC 7[12]; Atk short sword (1d6) or shortbow x2 (1d6); Move 12; Save 14; AL N; CL/XP 2/30;<br>Special: +2 on saving throws vs. devices, backstab (x2), thieving skills.<br>Thieving Skills: Climb 86%, Tasks/Traps 20%, Hear 3 in 6, Hide 15%, Silent 25%, Locks 15%.<br>Equipment: leather armor, short sword, shortbow, 20 arrows.",
    Rankir:"Rankir (Rgr8): HP 54; AC 2[17]; Atk +1 longsword (1d8+2) or +1 longbow x2 (1d6+2 w/+1 arrows); Move 12; Save 7; AL L; CL/XP 3/60.<br>Special: +1 to hit and damage due to high strength, +1 to hit dexterity bonus, -1[+1] to AC dexterity bonus, +1 hp per die due to high constitution, +8 to damage vs. giants and goblinoids, alertness, scholar of healing magic, tracking.<br>Equipment: +2 leather armor, +1 buckler (small shield), +1 longsword, +1 longbow, 20 +1 arrows, horn of warning (Appendix C), 2 scrolls of cure light wounds.",
    Farseeker:"Farseeker, Male or Female Elf or Half-Elf (MU1/Rgr1): HP 9; AC 8[11]; Atk longsword (1d8) or spear (1d6) or shortbow x2 (1d6); Move 12; Save 14; AL L; CL/XP 3/60.<br>Special: +1 to hit dexterity bonus, -1[+1] to AC dexterity bonus, +2 on saves vs. spells, +1 to damage vs. giants and goblinoids, alertness, darkvision 60ft, elf or half-elf racial abilities, tracking, spells (1).<br>Spells: 1st-sleep.<br>Equipment: leather clothes, longsword or spear, shortbow, 20 arrows, spellbook.",
    FarseekerLeader:"Farseeker Leader, Male or Female Elf or Half-Elf (MU2/Rgr2): HP 15; AC 5[14]; Atk longsword (1d8) or shortbow x2 (1d6); Move 12; Save 13; AL L; CL/XP 3/60.<br>Special: +1 to hit dexterity bonus, -1[+1] to AC dexterity bonus, +2 on saves vs. spells, +2 to damage vs. giants and goblinoids, alertness, darkvision 60ft, elf or half-elf racial abilities, tracking, spells (2).<br>Spells: 1st-magic missile, shield.<br>Equipment: +1 leather armor, longsword, shortbow, 20 arrows, wand of sleep (6 charges), spellbook.",
    OberonThanalaus:"Oberon Thanalaus, Male Elf (MU4/Rgr4): HP 25; AC 4[15]; Atk +2 longsword (1d8+2) or +2 longbow x2 (1d6+2); Move 12; Save 11; AL L; CL/XP 3/60.<br>Special: +1 to hit dexterity bonus, -1[+1] to AC dexterity bonus, +2 on saves vs. spells, +4 to damage vs. giants and goblinoids, alertness, darkvision 60ft, elf racial abilities, tracking, spells (3/2).<br>Spells: 1st-magic missile, shield, sleep; 2nd-invisibility, phantasmal force.<br>Equipment: +2 leather armor, +2 longsword, +2 longbow, 40 arrows, bag of holding, wand of paralyzing (10 charges), spellbook.",
    Lyreguardsmen: "Lyreguard (Ftr3): HP 22; AC 4[15]; Atk +1 longsword (1d8+1); Move 12; Save 12; AL L; CL/XP 3/60.<br>Special: multiple attacks (3) vs. creatures with 1 or fewer HD.<br>Equipment: chain mail, shield, +1 longsword, holy symbol of Muir or Mitra.",
    LyreguardHonorGuard:"Lyreguard Honor Guard (Pal4): HP 25; AC 2[17]; Atk +1 longsword (1d8+2); Move 12; Save 9; AL L; CL/XP 5/240;<br>Special: +1 to hit and damage due to high strength, immune to disease, lay on hands (8hp), warhorse mount.<br>Equipment: plate mail, shield, tabard bearing the symbol of Bard's Gate, +1 longsword, holy symbol of Muir.",
    GriffonRider:"Lyreguard Captain, Griffon Rider (Pal6): HP 30; AC 3[16]; Atk +1 lance (2d4+2) or +1 longsword (1d8+2) or +1 longbow x2 (1d6+1); Move 12; Save 7; AL L; CL/XP 7/600;<br>Special: +1 to hit and damage strength bonus, lay on hands (12hp), immune to disease, warhorse.",
    Imril:"Imril (Pal8): HP 52; AC -1[20]; Atk +1 lance (2d4+2) or +1 longsword (1d8+2) or +1 longbow x2 (with +1 arrows; 1d6+2); Move 12; Save 5; AL L; CL/XP 9/1100;<br>Special: +1 to hit and damage strength bonus, dispel evil, lay on hands (12hp), immune to disease, warhorse.<br>Equipment: +2 plate mail, +1 shield, +1 longsword (detects chaos within 20ft), +1 lance, +1 longbow, 20 +1 arrows, riding gear, silver holy symbol of Mitra (150gp).",
    MU_4:"War Wizard (MU4): HP 10; AC 4[15]; Atk +1 dagger (1d4+1); Move 12; Save 11; AL C; CL/XP 5/240. Special: +2 on saves vs. spells, spells (3/2).<br>Spells: 1st-charm person, shield, sleep; 2nd-ESP, phantasmal force.<br>Equipment: +1 dagger, traveling clothes, ring of protection +1, potion of healing.",
    Monk:"Monk (Mnk1): HP 3; AC 9[10]; Atk weaponless strike (1d4); Move 12; Save 15; AL L; CL/XP 1/15;<br>Special +2 on saving throws vs. paralysis and poison, alertness, deadly strike, deflect missiles, thieving skills.<br>Thieving Skills: Climb 85%, Tasks/Traps 15%, Hear 3 in 6, Hide 10%, Silent 20%, Locks 10%.<br>Equipment: Robes, walking staff, 1d3cp",
    WanderingMonk:"Wandering Monk (Mnk4): HP 14; AC 6[13]; Atk weaponless strike (1d8) or by weapon (+2 to damage); Move 15; Save 12; AL L; CL/XP 6/400;<br>Special: +2 save versus paralyzation and poison, deadly strike, +2 damage with weapons (included above), speak with animals, slow falling (20ft), thieving skills.<br>Thieving Skills: Climb 88%, Tasks/Traps 30%, Hear 4 in 6, Hide 25%, Silent 35%, Locks 25%.<br>Equipment: robes, walking staff, mala, 1d3cp.",
    BeggarApprentice_T1:"Beggar Apprentice (Thf1): HP 3; AC 7[12]; Atk dagger (1d4); Move 12; Save 15; AL N; CL/XP 1/15;<br>Special: +2 on saving throws vs. devices, backstab (x2), thieving skills.<br>Thieving Skills: Climb 85%, Tasks/Traps 15%, Hear 3 in 6, Hide 10%, Silent 20%, Locks 10%.<br>Equipment: leather armor, dagger.",
    BeggarApprentice_M1:"Beggar Apprentice (Mnk1): HP 3; AC 9[10]; Atk unnecessary crutch (1d4); Move 12; Save 15; AL N; CL/XP 1/15;<br>Special: +2 on saving throws vs. paralysis and poison, alertness, deadly strike, deflect missiles, thieving skills.<br>Thieving Skills: Climb 85%, Tasks/Traps 15%, Hear 3 in 6, Hide 10%, Silent 20%, Locks 10%.<br>Equipment: comfortable set of rags for clothing, unnecessary crutch (treat as club), pot of stink.",
    BeggarJourneyman:"Beggar Journeyman (Thf3): HP 7; AC 7[12]; Atk club (1d4) or dagger (1d4); Move 12; Save 13; AL N; CL/XP 3/60;<br>Special: +2 on saving throws vs. devices, backstab (x2), thieving skills.<br>Thieving Skills: Climb 87%, Tasks/Traps 25%, Hear 4 in 6, Hide 20%, Silent 30%, Locks 20%.<br>Equipment: leather armor, club, dagger.",
    ExperiencedStreetBeggar:"Experienced Street Beggar (Thf2): HP 5; AC 7[12]; Atk weighted crutch (1d4); Move 12; Save 14; AL N; CL/XP 3/60;<br>Special: +2 on saving throws vs. devices, backstab (x2), thieving skills.<br>Thieving Skills: Climb 86%, Tasks/Traps 20%, Hear 3 in 6, Hide 15%, Silent 25%, Locks 15%.<br>Equipment: heavy tunic, weighted crutch (treat as club).",
    MasterBeggar:"Master Beggar (Thf5): HP 17; AC 6[13]; Atk sword cane (1d6); Move 12; Save 11; AL C; CL/XP 6/400;<br>Special: +2 on saving throws vs. devices, backstab (x3), read languages, thieving skills.<br>Thieving Skills: Climb 89%, Tasks/Traps 35%, Hear 4 in 6, Hide 30%, Silent 40%, Locks 30%.<br>Equipment: cloak of chain, sword cane (treat as short sword), 2 pots of stink.",
    ClayGolem:"Clay Golem: HD 10 (45hp); AC 7[12]; Atk fist (3d10); Move 8; Save 5; AL N; CL/XP; 14/2600;<br>Special: immune to slashing and piercing weapons, immune to most spells. (Monstrosities 218)",
    FleshGolem:"Flesh Golem: HD 8 (40hp); AC 9[10]; Atk 2 fists (2d8); Move 8; Save 8; AL N; CL/XP 12/2000;<br>Special: healed by lightning, hit only by magic weapons, immune to most spells, slowed by  re and cold. (Monstrosities 219)",
    AirElemental:"Air Elemental (12HD): HD 12; AC 2[17]; Atk strike (2d8); Move 0 (fly 36); Save 3; AL N; CL/XP 13/2300;<br>Special: Whirlwind, immune to non-magic weapons. (Monstrosities 154)",
    EarthElemental_12HD:"Earth Elemental (12HD): HD 12; AC 2[17]; Atk strike (4d8); Move 6; Save 3; AL N; CL/XP 13/2300;<br>Special: immune to non-magic weapons, tear down stonework. (Monstrosities 155)",
    EarthElemental:"Earth Elemental (8HD): HD 8; AC 2[17]; Atk strike (4d8); Move 6; Save 8; AL N; CL/XP 9/1100;<br>Special: immune to non-magic weapons, tear down stonework. (Monstrosities 155)",
    FireElemental:"Fire Elemental (8HD): HD 8; AC 2[17]; Atk strike (3d8); Move 12; Save 8; AL N; CL/XP 9/1100;<br>Special: ignite materials, immune to non-magic weapons. (Monstrosities 156)",
    Enforcer:"Enforcer (Ftr1): HP 6; AC 7[12]; Atk club (1d4) or dagger (1d4); Move 12; Save 14; AL L; CL/XP 1/15.<br>Special: none.<br>Equipment: leather armor, club, dagger.",
    Gargoyle:"Gargoyle: HD 4; AC 5[14]; Atk 2 claws (1d3), bite (1d4), horn (1d6); Move 9 (fly 15); Save 13; AL C; CL/XP 6/400;<br>Special: fly, magic weapon required to hit.",
    GreenGuardianGargoyle:"Green Guardian Gargoyle: HD 4+1; AC 3[16]; Atk 2 claws (1d4), bite (1d6) and gore (1d6); Move 15 (Fly 24); Save 13; AL C; CL/XP 8/800;<br>Special: +1 or better weapon to hit, freeze, hold, reanimation. (The Tome of Horrors Complete 264)",
    Ghast:"Ghast: HD 4; AC 4[15]; Atk 2 claws (1d3), bite (1d6); Move 15; Save 13; AL C; CL/XP 5/240;<br>Special: paralyzing touch, stench. (Monstrosities 189)",
    Wraith:"Wraith: HD 4; AC 3[16]; Atk touch (1d6 plus level drain); Move 9 (fly 24); Save 13; AL C; CL/XP 8/800;<br>Special: drain 1 level with hit, magic or silver weapon to hit. (Monstrosities 518)",
    Ghoul:"Ghoul: HD 2; AC 6[13]; Atk 2 claws (1d3), bite (1d4); Move 9; Save 16; AL C; CL/XP 3/60;<br>Special: immunities, paralyzing touch. (Monstrosities 191)",
    Goblin:"Goblin: HD 1d6 hp; AC 6[13]; Atk weapon (1d6); Move 9; Save 18; AL C; CL/XP B/10;<br>Special: -1 to hit in sunlight.",
    Werebear:"Werebear: HD 7+3; AC 2[17]; Atk 2 claws (1d3), bite (2d4); Move 9; Save 9; AL N or C; CL/XP 8/800;<br>Special: lycanthropy.",
    Wereboar:"Wereboar: HD 5+2; AC 4[15]; Atk bite (2d6); Move 12; Save 12; AL N or C; CL/XP 6/400;<br>Special: hit only by magic or silver weapons, lycanthropy.",
    RatSwarm:"Rat Swarms: HD 3; AC 6[13]; Atk swarm (1d6 plus disease); Move 12; Save 14; AL N; CL/XP 4/120;<br>Special: plague (-2 to hit and damage, save avoids).",
    PipersGuildWererat:"Wererat: HD 3; AC 4[15]; Atk bite (1d3), short sword (1d6); Move 12; Save 14; AL C; CL/XP 4/120;<br>Special: control rats, hit only by magic or silver weapons, lycanthropy, surprise.<br>Equipment: leather, short sword, pickaxe, 2d10sp.",
    Wererat:"Wererat: HD 3; AC 6[13]; Atk bite (1d3), weapon (1d6); Move 12; Save 14; AL C; CL/XP 4/120;<br>Special: control rats, hit only by magic or silver weapons, surprise, lycanthropy.",
    Weretiger:"Weretiger: HD 6; AC 3[16]; Atk 2 claws (1d4), bite (1d10); Move 12; Save 11; AL N or C; CL/XP 7/600;<br>Special: hit only by magic or silver weapons, lycanthropy.",
    WereWeasel:"Were-weasel: HD 3+2; AC 4[15]; Atk bite (1d6) and weapon (1d8); Move 15; Save 14; AL C; CL/XP 5/240;<br>Special: +1 initiative, drain blood, hit only by magic or silver weapons, lycanthropy.",
    Werewolf:"Werewolf: HD 4+4; AC 5[14]; Atk bite (1d6+1); Move 12; Save 13; AL C; CL/XP 5/240;<br>Special: hit only by magic or silver weapons, lycanthropy.",
    DenninBlackfinger:"Dennin Blackfinger (MU6): HP 20; AC 7[12]; Atk +2 dagger (1d4+2) or darts x3 (1d3); Move 12; Save 9; AL N; CL/XP 7/600;<br>Special: +2 save bonus vs. magic, spells (4/2/2).<br>Spells: 1st-charm person, magic missile x2, shield; 2nd-darkness 15 ft. radius, mirror image; 3rd-fireball x2.<br> Equipment: +2 dagger, 20 darts, wand of hold person (27 charges), ring of protection +1, spellbook.",
    AshTheClever:"Ash the Clever (Thf4): HP 11; AC 6[13]; Atk +1 short sword (1d6+1) or light crossbow (1d4+1); Move 12; Save 12; AL N; CL/XP 4/120;<br>Special: +2 on saving throws vs. devices, backstab (x2), read languages, thieving skills.<br>Thieving Skills: Climb 88%, Tasks/Traps 30%, Hear 4 in 6, Hide 25%, Silent 35%, Locks 25%.<br>Equipment: +1 leather armor, +1 short sword, light crossbow, 20 bolts, thieves’ tools.",
    DanteTheBaleful:"Dante the Baleful, Cleric of Vanitthu (Clr4): HP 21; AC 1[18]; Atk +1 warhammer (1d4+2); Move 12; Save 12; AL L; CL/XP 5/240;<br>Special: +2 save versus paralyzation and poison, spells (2/1), turn undead.<br>Spells: 1st-protection from evil, purify food and drink; 2nd-bless.<br>Equipment: plate mail, +1 shield, +1 warhammer, wand of cure light wounds (10 charges), holy symbol of Vanitthu.",
    FelicityBigh:"Felicity Bigh, Female Vampire: HD 8; HP 44; AC 5[14]; Atk +1 short sword (1d6+1) or bite (1d10 plus level drain); Move 12 (Fly 18); Save 8; AL C; CL/XP 11/1700;<br>Special: charm gaze, drain 2 levels with hit gaseous form, immune to non-magic weapons, only killed in coffin, regenerate (3/round), shape-shift, summon rats or wolves.<br>Equipment: +1 short sword.",
    JustinGreenwood:"Justin Greenwood (Rgr6): HP 42; AC 5[14]; Atk +1 longsword (1d8+1) or +1 longbow x2 (1d6+1); Move 12; Save 9; AL L; CL/XP 7/600;<br>Special: +6 to damage vs. giants and goblinoids, alertness, tracking.<br>Equipment: +1 leather armor, +1 long sword, +1 long- bow, 20 arrows, 2 +1, +2 vs. undead arrows, instant fortress (see Appendix C), 6 vials of holy water, 3 wooden stakes, 2d10gp in loose coins.",
    Mimic:"Mimic: HD 7; AC 6[13]; Atk smash (2d6); Move 2; Save 9; AL N; CL/XP 8/800; Special: glue, mimicry. (Monstrosities 329)",
    BlackPudding:"Black Pudding: HD 10; AC 6[13]; Atk attack (3d8); Move 6; Save 5; AL N; CL/XP 12/2000;<br>Special: acidic surface, divides when hit with lightning, immune to cold.",
    Andrigor:"Andrigor (MU12): HP 32; AC 2[17]; Atk +1 dagger (1d4+1); Move 12; Save 3; AL L; CL/XP 14/2600.<br>Special: +2 on saves vs. spells, spells (4/4/4/4/4/1).<br>Spells: 1st-charm person, read magic, shield, sleep;<br>2nd-detect evil, ESP, mirror image, phantasmal force;<br>3rd-clairvoyance, dispel magic, fly, hold person;<br>4th-charm monster, confusion, polymorph self, wizard eye;<br>5th-feeblemind, hold monster, teleport (x2);<br>6th-repulsion.<br> Equipment: bracers of defense AC 4[15], +1 dagger, wand of magic missiles (6 charges), wand of enemy detection, ring of protection +2, crystal ball with clairaudience, 1d4 random potions, 1d4 random scrolls, spellbook.",
    EbonOoze:"Ebon Ooze: HD 8; AC 6[13]; Atk slam (2d6 plus 2d6 acid); Move 9; Save 5; AL C; CL/XP 10/1400;<br>Special: acid, immune to acid and disease. (Tome of Horrors 4 162)",
    Ectoplasm:"Ectoplasm: HD 7; AC 10[9]; Atk pseudopod (1d8 plus weakness); Move 0 (fly 6); Save 9; AL C; CL/XP 10/1400;<br>Special: +1 or better weapon to hit, weakness (cumulative -1 to hit and damage penalty with each strike). (Tome of Horrors 4 162)",
    GelatinousCube:"Gelatinous Cube: HD 4; AC 8[11]; Atk slam (2d4); Move 6; Save 13; AL N; CL/XP 5/240;<br>Special: immune to lightning and cold, paralysis.",
    GreyOoze:"Grey Ooze: HD 3; AC 8[11]; Atk strike (2d6); Move 1; Save 14; AL N; CL/XP 5/240;<br>Special: acid, immune to spells, heat, cold, and blunt weapons.",
    JollyJelly:"Jolly Jelly: HD 6; AC 7[12]; Atk 3 strikes (1d6); Move 6; Save 11; AL N; CL/XP 8/800;<br>Special: aura of gloom, immune to fire, pheromones. (Tome of Horrors 4 125)",
    LightningBladder:"Lightning Bladder: HD 4; AC 9 [10]; Atk pseudopod (1d6 plus 1d6 acid); Move 6 (swim 12); Save 13; AL N; CL/XP 7/600;<br>Special: acid, electrical discharge, immune to cold, electricity and fire.",
    Livestone:"Livestone: HD 5; AC 10[9]; Atk slam (1d8); Move 9; Save 9; AL N; CL/XP 7/600;<br>Special: engulf, immunity to petrification, solidify, surprise on 1-4 on 1d6. (The Tome of Horrors Complete 361)",
    StunJelly:"Stunjelly: HD 4; AC 5[14]; Atk slam (1d6 plus 1d6 acid plus paralysis); Move 6; Save 13; AL N; CL/XP 6/400;<br>Special: acid, camouflage, engulf, immunity to eletricity, paralysis, surprise on 1-3 on 1d6. (The Tome of Horrors Complete 341)",
    Otyugh:"Otyugh: HD 7; AC 3[16]; Atk 2 tentacles (1d8), bite (1d4+1); Move 6; Save 9; AL N; CL/XP 8/800;<br>Special: disease.",
    PaladinKnightErrant:"Knight Errant (Pal4): HP 25; AC 2[17]; Atk longsword (1d8+1); Move 12; Save 9; AL L; CL/XP 5/240;<br>Special: +1 to hit and damage due to high strength, immune to disease, lay on hands (8hp), warhorse mount.<br>Equipment: plate mail, shield, tabard bearing the symbol of Muir, longsword, holy symbol of Muir.",
    Constable:"Constable (Ftr1): HP 6; AC 6[13]; Atk longsword (1d8) or light crossbow (1d4+1); Move 12; Save 14; AL N; CL/XP 1/15.<br>Special: none.<br>Equipment: leather armor, shield, longsword, light crossbow, 10 bolts.",
    ConstableOfficer:"Constable Officer (Ftr3): HP 17; AC 5[14]; Atk short sword (1d6); Move 12; Save 12; AL L; CL/XP 3/60.<br>Special: multiple attacks (3) vs. creatures with 1 or fewer HD.<br>Equipment: ring mail, shield, short sword.",
    ConstableSergeant:"Constable Sergeant (Ftr2): HP 10; AC 6[13]; Atk longsword (1d8) or light crossbow (1d4+1); Move 12; Save 13; AL L; CL/ XP 2/30.<br>Special: multiple attacks (2) vs. creatures with 1 or fewer HD.<br>Equipment: leather armor, shield, longsword, light crossbow, 10 bolts.",
    SheriffsDeputy:"Sheriff's Deputy (Ftr1): HP 6; AC 6[13]; Atk club (1d4+1); Move 12; Save 14; AL N; CL/XP 1/15.<br>Special: +1 to hit and damage due to high strength.<br>Equipment: leather armor, shield, club.",
    Ratling:"Ratling: HD 1; AC 9[10]; Atk bite (1d6 plus disease) or weapon; Save 17; Move 12; AL C; CL/XP 2/30; Special: diseased bite.",
    RiverfolkFighter:"Riverfolk Fighters (Ftr1): HP 6; AC 6[13]; Atk longsword (1d8) or spear (1d6) or light crossbow (1d4+1); Move 12; Save 14; AL N; CL/XP 1/15.<br>Special: none.<br>Equipment: leather armor, shield, longsword, light crossbow, 10 bolts.",
    RiverfolkSneak:"Riverfolk Sneaks (Thf2): HP 6; AC 7[12]; Atk dagger (1d4) or club (1d4) or net (see below); Move 12; Save 14; AL N; CL/XP 3/60;<br>Special: +2 on saving throws vs. devices, backstab (x2), thieving skills.<br>Thieving Skills: Climb 86%, Tasks/Traps 20%, Hear 3 in 6, Hide 15%, Silent 25%, Locks 15%.<br>Equipment: leather armor, dagger, club, net (if attack is successful, target is immobilized until released), thieves’ tools.",
    Shadow:"Shadow: HD 2+2; AC 7[12]; Atk touch (1d4 plus strength drain); Move 12; Save 16; AL C; CL/XP 4/120;<br>Special: drain 1 point str with hit, hit only by magic weapons.",
    Shyster:"Shyster (Thf1): HP 3; AC 7[12]; Atk dagger (1d4); Move 12; Save 15; AL C; CL/XP 1/15;<br>Special: +2 on saving throws vs. devices, backstab (x2), thieving skills.<br>Thieving Skills: Climb 85%, Tasks/Traps 15%, Hear 3 in 6, Hide 10%, Silent 20%, Locks 10%.<br>Equipment: fine clothes, dagger, 4d4cp.",
    Skeleton:"Skeleton: HD 1; AC 8[11] or 7[12] with shield; Atk weapon or strike (1d6) or (1d6+1 two-handed); Move 12; Save 17; AL N; CL/XP 1/15;<br>Special: immune to sleep and charm spells.",
    SlaverBoss:"Slaver Boss (Thf5): HP 17; AC 6[13]; Atk short sword (1d6); Move 12; Save 9; AL C; CL/XP 6/400;<br>Special: +2 on saving throws vs. devices, backstab (x3), read languages, thieving skills.<br>Thieving Skills: Climb 89%, Tasks/Traps 35%, Hear 4 in 6, Hide 30%, Silent 40%, Locks 30%.<br>Equipment: leather armor, 2 daggers, whip, ring of protection +1.",
    Slaver:"Slavers (Ftr1,Thf1): HP 5; AC 7[12]; Atk club (1d4) or whip (1d3); Move 12; Save 14; AL C; CL/XP 2/30.<br>Special: +2 on saving throws vs. devices, backstab (x2), thieving skills.<br>Thieving Skills: Climb 85%, Tasks/Traps 15%, Hear 3 in 6, Hide 10%, Silent 20%, Locks 10%.<br>Equipment: leather armor, club, whip.",
    Spectre:"Spectre: HD 6; AC 2[17]; Atk spectral weapon or touch (1d8 plus level drain); Move 15 (fly 30); Save 11; AL C; CL/XP 9/1100;<br>Special: drain 2 levels with hit, immune to nonmagical weapons.",
    GiantSpider_4ft:"Giant Spider (4ft diameter): HD 2+2; AC 6[13]; Atk bite (1d6 plus poison); Move 18; Save 16; AL N; CL/XP 5/240;<br>Special: lethal poison, 5 in 6 chance to surprise prey.",
    GiantSpider_6ft:"Giant Spider (6ft diameter): HD 4+2; AC 4[15]; Atk bite (1d6+2 plus poison); Move 4; Save 13; AL C; CL/XP 7/600;<br>Special: lethal poison, webs.",
    StreetUrchin:"Street Urchins: HP 1d4; AC 9[10]; Atk fist (1); Move 12; Save 18; AL N; CL/XP A/5;<br>Special: thieving skills.<br>Thieving Skills: Climb 85%, Tasks/Traps 15%, Hear 3 in 6, Hide 10%, Silent 20%, Locks 10%.<br>Equipment: rags for clothes.",
    TempleGuardLawful:"Temple Guard 'Lawful Temple': HD 1; AC 7[12]; Atk longsword (1d8) or spear (1d6); Move 12; Save 17; AL L; CL/XP 1/15;<br>Special: none.<br>Equipment: leather armor, longsword, spear.",
    TempleGuardOther:"Temple Guard 'More Open Minded' (Ftr1): HP 6; AC 6[13]; Atk longsword (1d8) or light crossbow (1d4+1); Move 12; Save 14; AL N (or C); CL/XP 1/15.<br>Special: none.<br>Equipment: leather armor, shield, longsword, light crossbow, 10 bolts.",
    DrugPeddler:"Drug Peddler (Thf1): HP 3; AC 9[10]; Atk dagger (1d4); Move 12; Save 15; AL N; CL/XP 1/15;<br>Special: +2 on saving throws vs. devices, backstab (x2), thieving skills.<br>Thieving Skills: Climb 85%, Tasks/Traps 15%, Hear 3 in 6, Hide 10%, Silent 20%, Locks 10%.<br>Equipment: dagger, 3 doses each of tresh, Movollo's leaf, opium, 2d4sp.",
    Acolyte:"Acolytes (Clr1): HP 6; AC 9[10]; Atk staff (1d6) or sling (1d4); Move 12; Save 15; AL L; CL/XP 2/30;<br>Special: +2 save versus paralyzation and poison, turn undead.<br>Equipment: clerical vestments, staff, sling, 10 bullets, holy symbol.",
    WanderingCleric:"Wandering Cleric (Clr6): HP 22; AC 9[10]; Atk +1 staff (1d6+2); Move 12; Save 10; AL L; CL/XP 7/600;<br>Special: +1 to hit using weapon two handed, +2 save versus paralyzation and poison, spells (2/2/1/1), turn undead.<br>Spells: 1st-cure light wounds, protection from evil; 2nd-bless, hold person; 3rd-cure disease; 4th-cure serious wounds.<br>Equipment: clerical vestments, +1 staff, scroll of raise dead, solid gold holy symbol (50gp value).",
    VampireSpawn:"Vampire Spawn: HD 3; AC 5[14]; Atk claw (1hp plus level drain); Move 9; Save 14; AL C; CL/XP 6/400;<br>Special: drain 1 level with hit, hit only by magic or silver weapons.",
    WillOTheWisp:"Will-o'-the-wisp: HD 9; AC -8[27]; Atk shock (2d6); Move 18; Save 6; AL C; CL/XP 10/1400;<br>Special: lights.",
    Wizard:"Wizard (MU5): HP 12; AC 2[17]; Atk +1 dagger (1d4+1); Move 12; Save 11; AL N; CL/XP 6/400.<br>Special: +2 on saves vs. spells, spells (4/2/1).<br>Spells: 1st-charm person, detect magic, sleep; 2nd-ESP, phantasmal force; 3rd-dispel magic.<br>Equipment: bracers of defense AC 4[15], +1 dagger, ring of protection +2, wand of magic missiles (5 charges), spellbook.",
    WizardsApprentice:"Wizard's Apprentice (MU2): HP 4; AC 9[10]; Atk staff (1d6) or darts x3 (1d3); Move 12; Save 14; AL N; CL/XP 3/60;<br>Special: +2 on saves vs. spells, spells (2).<br>Spells: 1st-charm person, shield.<br>Equipment: robes, staff, 6 darts, spellbook.",
    Mohrg:"Mohrg: HD 10; AC 0 [19]; Atk 1 fist (1d8) or tongue (paralysis); Move 12; Save 5; AL C; CL/XP 13/2300;<br>Special: paralyzing tongue, grabs and holds.<br>Reference <a href='http://www.d20swsrd.com/swords-and-wizardry-srd/for-the-referee/monsters/all-monsters/monster-details-k-through-n#TOC-Mohrg'>S&W SRD</a>",
    Zombie:"Zombie: HD 2; AC 8[11] or with shield 7[12]; Atk 1 weapon or strike (1d8); Move 6; Save 16; AL N; CL/XP 2/30;<br>Special: Immune to sleep and charm.",
    UnderhillWatchman:"Underhill Watchman, Male or Female Dwarf (Ftr2): HD 2; AC 4[15]; Atk warhammer (1d4+1); Move 9; Save 13; AL L; CL/XP 2/30;<br>Special: darkvision 60ft, dwarf racial abilities, multiple attacks (2) vs. creatures with 1 or fewer HD.<br>Equipment: chainmail, shield, warhammer, potion of healing.",
    UnderhillSergeant:"Underhill Sergeant, Male or Female Dwarf (Ftr2/Thf2): HD 4; AC 7[12]; Atk short sword (1d6+1) or light crossbow (1d4+1); Move 9; Save 12; AL L; CL/XP 4/120;<br>Special: +1 to hit and damage strength bonus, backstab (x2), darkvision 60ft, dwarf racial abilities, multiple attacks (2) vs. creatures with 1 or fewer HD, thieving skills.<br>Thieving Skills: Climb 86%, Tasks/Traps 30%, Hear 3 in 6, Hide 20%, Silent 30%, Locks 20%.<br>Equipment: leather armor, short sword, light cross- bow, 10 bolts, 2 potions of healing, whetstone, 1d6gp, 2d6sp.",
    Wight:"Wight: HD 3; HP 14; AC 5[14]; Atk claw (1hp plus level drain); Move 9; Save 14; AL N; CL/XP 6/400; Special: drain 1 level with hit, hit only by magic or silver weapons."

};

var t = {
    DrunkAttitude:["Their attitude is currently friendly","Their attitude is currently unfriendly","Their attitude is currently  helpful","Their attitude is currently indifferent","Their attitude is currently hostile","They are exhibiting a different random attitude every 2 minutes (table pg. 281)"],
    GuildType:["Gem Cutters'","Scribes'","Stone Cutters'","Glassblowers'","Wheelwrights'","Rivermans'","Brewers'","Weavers'","Harlots'","Caretakers'","Beggars'","Herbalists'","Innkeepers'","Tavernkeepers'"],
    RiverfolkType:["fishmongers.","liquor bootleggers.","selling live game (giant frogs, rare swamp birds, etc.)","selling a treasure map. They have a map leading to the Necromancer's Swamp [see Sword of Air].","belligerents. These rivermen are boozed up and looking to start a fight with landlubbers.","operating a floating pleasure barge."]
};


var e = {
	AdventuringBand:
	{
        name:"Adventuring Band",
        text: "A mixed band of !d[2d3] adventurers is encountered. The adventurers are of various classes ranging from levels 2-6. The Company of the Silver Spear (page 126) or The Accursed (page 231) serve as good examples of ready-made adventuring bands. If the characters have recently been successful, there is a good chance that the adventuring band is jealous. Likewise, if the characters have had several recent setbacks, it is likely that the adventuring band may make fun of them.",
        extra:{
            total:100,
            chances:[
                {min:1, max:50, append:true, text:"They are mostly lawfully aligned."},
                {min:51, max:100, append:true, text:"They are mostly chaotically aligned."}
            ]
        }
    },
	AdventuringBandWithDead:
	{
        name:"Adventuring Band with Dead",
        text: "A mixed band of !d[2d3] adventurers is encountered, they are bringing !d[1d3] dead associates to be raised from the dead. The adventurers are of various classes ranging from levels 2-6. The Company of the Silver Spear (page 126) or The Accursed (page 231) serve as good examples of ready-made adventuring bands. If the characters have recently been successful, there is a good chance that the adventuring band is jealous. Likewise, if the characters have had several recent setbacks, it is likely that the adventuring band may make fun of them.",
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
        text:"A wanted band of disguised highwaymen has snuck into the city and is looking for a bar, brothel, or other trouble. If noticed, they attempt to flee, fighting their way away from any guards, and possibly taking hostages in the process. It is possible that the bandits have rented a place in the city or have some other hidden lair. There are !d[2d8] bandits and a leader.",
        stats:["Bandit", "BanditLeader"]
    },
    Barbarian:
    {
        name:"Barbarian",
        text:"An encounter with !d[1d4] Barbarian(s), of the Grass Warrior tribe for example. They may be like a fish out of water in the city, may be being conned, may be starting a fight, may be carousing, looking for work, shopping or just taking the sights in",
        stats:["Barbarian","BarbarianLeader","BarbarianBouncer","Shaman"]
    },
    BarbarianEncampment:
    {
        name:"Barbarian Encampment (Grass Warrior)",
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
    BlackBrotherhoodMember:
    {
        name:"Black Brotherhood Member",
        text:"A member of the Shadow Masks secret doppleganger ruling council, the Black Brotherhood. Likely not in its true form. It may be spying on the characters, planning to assassinate one, busy stalking or killing a third party, or simply passing through.",
        stats:["BlackBrotherhoodFighter","BlackBrotherhoodKiller"]
    },
    BlackOrcs:
    {
        name:"Black Orcs of Orcus",
        text:"This rare encounter is with !d[1d6+2] black orcs in the service of the Cult of Orcus hidden near the environs of the Claw of Orcus. The Black Orcs typically remain hidden from large bands and soldiers, but see that snoopy individuals (such as paladins and rangers) never return to Bard's Gate to report on the things they may have discovered.",
        stats:["BlackOrc"]
    },
    Blockage:
    {
        name:"Blockage",
        text:"A sewer tunnel is currently impassable due to a blockage. Perhaps a storm has washed debris down here, perhaps the ceiling has collapsed, perhaps some sewer inhabitants have deliberately created a blockage here - possibly with a secret passage through. The blockage may be removable but will take time and be noisy, requiring multiple random encounter rolls."
    },
    BodyGuard:
    {
        name:"Bodyguard",
        text:"An off-duty bodyguard for a noble or aristocratic household. The Harlots' Guild also employs bodyguards to protect their members when they are on assignment. The bodyguard may be of any character class (Referee's discretion on bodyguard, see Appendix A for examples or sample Fighter below).",
        stats:["BodyGuard"]
    },
    BountyHunter:
    {
        name:"Bounty Hunter",
        text:"A bounty hunter either hunting their prey, or relaxing during down-time.",
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
        text:"This encounter is with a scoundrel hawking fake potions, a false prophecy or similar con. False potions (snake oil) typically sell for 1-10gp and are nothing more than whiskey mixed with mineral water, seasoned with hot peppers, herbs and flower petals. If exposed as a fraud, the charlatan flees the scene to escape prosecution. The fraud later keeps tabs on the characters in order to spring some complex revenge or smear campaign against them.",
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
    Debutante:
    {
        name:"Debutante",
        text:"This encounter is with the spoiled child (Neutral female aristocrat 3) of an aristocrat or noble. The debutant may be slumming in a bad part of town, or shopping on her parent's dime."
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
    DwarfPolitician:
    {
        name:"Dwarf Politician",
        text:"This is a local city councilmember (Neutral male dwarf aristocrat 4) from the surface city pushing a petition to get the Underhill a seat on the council. He offers the characters 1sp each to spend a day handing out fliers that he printed at Underhill News and Tobacco (UH7)."
    },
    DwarfTravelers:
    {
        name:"Dwarf Travelers/Prospectors",
        text:"This is a band of !d[2d4] dwarves (Lawful male or female dwarf expert 3) from the Cretian Mountians who are passing through Bard’s Gate on their way to a rumored mining stake northwest of the Stoneheart Mountain Dungeon (see The Lost Lands: Stoneheart Valley for more information on the area). They are recruiting guards and guides for their expedition."
    },
    Elemental:
    {
        name:"Elemental/Golem",
        text:"This encounter is with an elemental or golem that has lost contact with its summoner or creator. The creature is berserk and causes havoc throughout the neighborhood until it is defeated. The spellcaster who summoned or created it is nowhere to be found.",
        extra:{
            total:6,
            chances:[
                {min:1, max:1, append:true, stats:["ClayGolem"]},
                {min:2, max:2, append:true, stats:["FleshGolem"]},
                {min:3, max:3, append:true, stats:["AirElemental"]},
                {min:4, max:4, append:true, stats:["EarthElemental_12HD"]},
                {min:5, max:5, append:true, stats:["EarthElemental"]},
                {min:6, max:6, append:true, stats:["FireElemental"]}
            ]
        }
    },
    Enforcer:
    {
        name:"Enforcer",
        text:"A strongman or gang member employed in collection and harassment.",
        stats:["Enforcer"],
        extra:{
            total:4,
            chances:[
                {min:1, max:1, append:true, text:"The enforcer is \"on the job\" when encountered."}
            ]
        }
    },
    Execution:
    {
        name:"Execution",
        text:"Held near the gates of the Keep (K1) in broad daylight, executions take place for those convicted of only the most heinous crimes. Although Bard’s Gate is by and large a \"lawfully\" aligned city, the executions serve as a reminder to its more liberal population that true malevolent chaos does exist in the world. Most executions coincide with a protest led by followers of Zors."
    },
    Familiar:
    {
        name:"Familiar",
        text:"This encounter is with a magic-user's familiar, who is out on some errand, possibly spying on the characters for its master. Referee's discretion on type and \"owner\" (see the various Tome of Horrors, Monstrosities, and other accessories for appropriate encounters)."
    },
    Farmer:
    {
        name:"Farmer",
        text:"This encounter is with !d[1d4] farmers (Neutral male or female commoner 2). They may be hawking wares, buying supplies, or blowing off steam."
    },
    Herdsman:
    {
        name:"Herdsman",
        text:"This encounter is with !d[1d4] herdsmen (Neutral male or female commoner 2). They may be selling animals, buying feed, driving the animals to pasture, or blowing off steam."
    },
    Fighter:
    {
        name:"Fighter",
        text:"This encounter is with a fighting man who is currently between employers or adventuring parties.",
        stats:["Fighter"]
    },
    Fisherman:
    {
        name:"Fisherman",
        text:"This encounter is with !d[1d4] fishermen (Neutral male or female commoner 2). They may be hawking wares, bringing in a catch or making ready to hit the waterways."
    },
    FoodVendor:
    {
        name:"Food Vendor",
        text:"This encounter is with a vendor's cart where a merchant (Neutral male or female commoner !d[1d2]) hawks prepared meals. The meals are of common quality and cost 3sp."
    },
    FoodVendorBlackMarket:
    {
        name:"Food Vendor",
        text:"Food vendors in the Black Market sell various charcoal-roasted \"street meats\" to visitors in the dank quarter's underground. Some of the food is quite good, being a fusion of meal types from various lands. Others are potentially life threatening. Eating street food sold in the Black Market affords a 15% chance of contracting food poisoning (-2 to all rolls for 24 hours). These snacks cost an average of !d[1d4+1]sp each."
    },
    Funeral:
    {
        name:"Funeral",
        text:"This encounter is with a funeral entourage consisting of a Cleric and !d[1d100] friends and family members of the deceased.",
        extra:{
            total:4,
            chances:[
            {min:1, max:1, append:true, text:"The deceased was extremely wealthy."},
            {min:2, max:2, append:true, text:"The deceased was extremely poor."}
            ]
        }
    },
    FurTrader:
    {
        name:"Fur Trader",
        text:"This encounter is with a non-guild-affiliated fur trader who actively traps and sells furs in the Stoneheart Mountains, despite the threat of orcs and other dangerous monsters. Fur traders are generally solitary but may have 1-4 subordinates (Neutral male ranger 1). The traders winter in the mountains and are thus found at the Tent City only in summer months. If arriving this trader has !d[3d100+50] gp worth of valuable pelts. If leaving this trader has !d[1d100+20] gp worth of new materials, supplies and trade goods when they leave Tent City. It may be assumed that much of this discrepancy is due to heavy gambling losses and lavish expenditure during their stay.",
        stats:["FurTrader","NeutralRanger"]
    },
    Gambler:
    {
        name:"Gambler",
        text:"A random gambler (Neutral male or female thief 2) is trying to find a game of chance, and offers the characters a seat to try their luck at a toss of the dice or a hand of cards. The gambler tries to dupe the characters into playing his game for 1-10gp a hand. The characters must notice his tricks in order to win. Roll a secret doors check. If they spot the sleight of hand, they win the round. If they win more than three hands, he folds up shop and disappears into the crowd. The gambler can cover 50gp in wagers."
    },
    GameOfChance:
    {
        name:"Game of Chance",
        text:"A vendor (Neutral male or female thief 2) has set up a stall with targets to throw a collection of darts, throwing knives, or throwing axes at wooden targets designed to look like rats, rust monsters, monstrous centipedes, and other creepy crawlies commonly found in dungeon and underground environments. The targets are AC 0[19], and characters may bet up to 5gp per target. If they miss the target, they lose their bet. Hit the target and they win. If the characters win more than 50gp, they wipe out the vendor, who closes up shop for the day. Winning 50gp is not without its pitfalls. The vendor hires a pickpocket to steal back his stake sometime within the next 24 hours.",
        stats:["Pickpocket"]
    },
    Gargoyle:
    {
        name:"Gargoyle",
        text:"This encounter is with !d[1d6+2] gargoyles.",
        stats:["Gargoyle"],
        extra:{
            total:2,
            chances:[
            {min:1, max:1, append:true, text:"At least one is a green guardian gargoyle, part of the furthering curse of Rappan Athuk.", stats:["GreenGuardianGargoyle"]}
            ]
        }
    },
    Ghasts:
    {
        name:"Ghasts",
        text:"The encounter is with !d[2d4] ghasts led by a wraith.",
        stats:["Ghast","Wraith"]
    },
    Ghost:
    {
        name:"Ghost",
        text:"The restless spirit of the dead. The ghost will rejuvenate over 24 hours if destroyed, unless the reason for its existence is set right. Referee's discretion as to reason. Murder victim? Guilty perpetrator? Their remains not properly interred?",
        stats:["Ghost"]
    },
    Ghouls:
    {
        name:"Ghouls",
        text:"A cleric or necromancer of Orcus created these fiends from the corpses of criminals and set the beasts loose within the city. The encounter is with !d[2d4] ghouls.",
        stats:["Ghoul"]
    },
    GiantRats:
    {
        name:"Giant Rats",
        text:"This encounter is with a pack of !d[2d4] giant rats flushed up from the sewer system by the pipe cleaners. The rats pour from a sewer grate or out of the lower story of an abandoned home.",
        stats:["GiantRat"]
    },
    HalflingBand:
    {
        name:"Halfling Oompah Band",
        text:"This is a quartet of halflings (Neutral male or female halfling commoner 2) consisting of a trumpet, tuba player, drummer, and accordion player wandering the central portion of the Underhill District. They surround a character or party and play until they are paid to leave. This typically costs !d[2d10]gp. Causing a ruckus and not paying the band gets one expelled from the Underhill."
    },
    Goblins:
    {
        name:"Goblin",
        text:"A nest of goblin spies, disguised as halflings, have infiltrated the city and set up a base in an abandoned structure. These goblins report directly to their masters in Rappan Athuk about the troop strength and disposition of the forces located in the Stoneheart Valley and the City of Bard's Gate. The encounter is with !d[1d4+2] of these goblins out on the prowl for drunks and solitary wanderers. If discovered, the goblins seek to escape the city by any and all available means.",
        stats:["Goblin"]
    },
    GraveRobbers:
    {
        name:"Grave Robbers",
        text:"This is an encounter with a greedy mixed band of !d[2d3] adventurers bent on cracking open tombs or mausoleums and making off with what valuables they can get their hands on. They are \"in the middle of work\". They are of various classes ranging from levels 2-6. The Company of the Silver Spear (page 126) or The Accursed (page 231) serve as good examples of ready-made adventuring bands."
    },
    Grocer:
    {
        name:"Grocer",
        text:"Operated by a farmer or low-level merchant (Neutral male or female commoner 2) selling fresh vegetables and produce."
    },
    Guildsman:
    {
        name:"Guildsman",
        text:"This encounter is with a member (Neutral male or female expert 2) of the !t[GuildType] Guild who is on official guild business. This may be a paid professional of some skill."
    },
    Halforc:
    {
        name:"Half-orc",
        text:"This encounter is with a half-orc member of Mama Bobo's Wanderers. They are surly and intimidating, but generally harmless.",
        stats:["Halforc"]
    },
    HaflingPickpocket:
    {
        name:"Halfling Pickpocket",
        text:"This is an encounter with a halfling thief who attempts to snatch a piece of equipment off of one of the characters and sneak back to the Cellar Bar (UH11) to pay off the owner",
        stats:["HaflingPickpocket"]
    },
    Harlot:
    {
        name:"Harlot",
        text:"This encounter is off the main streets even during nighttime hours and is with !d[1d2] harlot(s) (Neutral female expert 1) and their bodyguard.",
        stats:["BodyGuard"]
    },
    BlackMarketHarlots:
    {
        name:"Black Market Harlots",
        text:"In the Black Market, 1d4 members of the Harlots Guild ply their trade in roving \"packs.\" This pack consists of !d[1d4] Harlot(s). Typically, they simply work their job, but there is a 25% chance that they rob their client blind, especially if said client happens to be rough, rude, or otherwise despicable.",
        extra:{
            total:2,
            chances:[
            {min:1, max:1, append:true, text:"The encounter includes a run-in from !d[1d6] bodyguard(s) as well.", stats:["BodyGuard"]}
            ]
        }
    },
    Herald:
    {
        name:"Herald",
        text:"An encounter with a herald (Neutral male or female expert 1-4) may be with the chief historian and spokesperson of a noble or aristocrat. In this fashion, heralds are employed as a matter of good public relations to go about the city speaking of the civic works and good deeds of their employer. Likewise, heralds may serve in the guard to remind the folk of any new laws, warnings or ordinances. Furthermore, some heralds are employed as \"town criers\" giving news and information to the populace directly from the city council and mayor’s office."
    },
    Heretic:
    {
        name:"Heretic",
        text:"This encounter is with a cleric or paladin who has fallen from favor with their deity. The heretic stands forth and denounces the faith and the religion. 10-30% of the gathering crowd agrees with the heretic or practices a different faith. The rest of the crowd is hostile toward the heretic. If trouble breaks out, guards arrive in !d[1d6] rounds to disperse the crowd. The heretic is a paladin or cleric with no spells or divine abilities.",
        stats:["HereticPriest","HereticPaladin"]
    },
    HorseRace:
    {
        name:"Horse Race",
        text:"A horse race is about to begin. !d[2d4] contestants (Neutral male commoner 1-2) vie for a 200gp prize."
    },
    HorseTrader:
    {
        name:"Horse Trader",
        text:"Encounters are with a horse trader (Neutral male or female expert 2-5) who has !d[1d4] fine horse(s) to sell.",
        extra:{
            total:100,
            chances:[
                {min:1, max:1, text:"Knotaloke is encountered. She is willing to hire characters to help her move wild horses to her stables.", stats:["Knotaloke"]}
            ]
        }
    },
    Kobolds:
    {
        name:"Kobolds",
        text:"A warren of kobolds has snuck into the city and established a lair in the sub-basement of an abandoned building. The kobolds have murdered several missing residents, whose bones line the floor of their lair. The encounter is with !d[1d6+4] of these kobolds.",
        stats:["Kobold"]
    },
    Laborers:
    {
        name:"Laborers",
        text:"!d[2d4] workmen (Neutral male or female commoner 2) led by a guildsman (Neutral male or female expert 3) on their way to or from a worksite."
    },
    Lawyer:
    {
        name:"Lawyer",
        text:"This encounter is with a legal professional. The lawyer (Any alignment male or female expert 4) may be on his way to court, or headed to speak with an incarcerated client. Likewise, the lawyer could be advertising his services in the \"unfortunate event\" that such services are needed."
    },
    LocalBully:
    {
        name:"Local Bully/Thug",
        text:"The biggest meanest bully on the street tries to pick a fight with the smallest and most fragile looking character. Stats for various thugs are located in Appendix A. Some are repeated below.",
        stats:["Enforcer", "BodyGuard","BarbarianLeader","SeniorShadowMask"]
    },
    LocalWatchBC:
    {
        "name":"College Watch",
        "text":"!d[1d4+2] members of the College Watch. Looking dapper in their dress uniforms, this professional force is always polite to locals and visitors to the Bard's College district.",
        stats:["MarketGuard_F2"]
    },
    LocalWatchD:
    {
        name:"Local Dock's Guards",
        text:"A group of !d[1d4+2] private guards, protecting their employers' property.",
        stats:["MarketGuard_F2","MerchantGuard_T2"]
    },
    LocalWatchO:
    {
        name:"Constable Patrol",
        text:"A patrol of !d[1d4+2] Constables out from the Constable's Station (O5). They may be patrolling, or helping to maintain Founders' Park.",
        stats:["Constable","ConstableSergeant","ConstableOfficer"]
    },
    LocalWatchT:
    {
        name:"Constable Patrol",
        text:"A patrol of !d[1d4+2] Constables that clearly drew the short straw or annoyed someone important to end up patrolling the Thieves' Quarter. They tend to be fairly hands-off unless a crime is blatantly commited in front of them.",
        stats:["Constable","ConstableSergeant","ConstableOfficer"]
    },
    LocalWatchTC:
    {
        name:"Tent City Local Watch",
        text:"This encounter is with a patrol of Tent City's own privately funded and appointed guard - the Dog Soldiers. There are !d[1d4+2] local guards in the patrol.",
        stats:["DogSoldierSneak","DogSoldierWarrior","DogSoldierMU"]
    },
    LocalWatchTH:
    {
        name:"Hill Watch",
        text:"The Hill Watch is an elite patrol funded by the Hill District's own citizens. They are trained to blend in amongst the district residents. Patrols typically include 5 regular watchmen and a sargeant. Faintly magical medallions are used by residents of the Hill District to prove their right to access the Middle or Upper Ring to the Magic Users embedded in the Hill Watch.",
        stats:["MarketGuard_F1","Veteran","WizardsApprentice"]
    },
    LocalWatchTW:
    {
        name:"Turlin's Well Watch",
        text:"The Well Watch is a fairly corruptible but good-natured band of about 40 individuals. The group consists of patrols of 2-4 individuals, and may be encountered once every 20-30 minutes, when they aren’t busy hanging out in the local taverns while on duty.<br>This patrol is of !d[2d2] individuals.",
        stats:["MarketGuard_F1","MarketGuard_F2"]
    },
    LocalWatchM:
    {
        name:"Market District Local Watch",
        text:"This encounter is with a patrol of the Market District's own privately funded and appointed guard - the Market Guard. There are !d[1d4+2] guards led by a veteran guard. The Market Watch is generally friendly to newcomers and freely offers directions if asked. Although not a challenge to dangerous foes, the Market Watch are more than adequate to break up squabbles between local merchants. If they are ever seriously threatened, they know that the Lyreguard or Gatesmen are only a whistle away from coming to their aid.",
        stats:["MarketGuard_F1","MarketGuard_F2"]
    },
    LocalWatchG:
    {
        name:"Guild District Local Watch",
        text:"This encounter is with a patrol of the Guild District's own privately funded and appointed guard - the Merchant Guard. There are !d[1d4+2] guards. It is generally known that the Merchant Guard are susceptible to bribes, and can easily be persuaded to look the other way as needed.",
        stats:["MerchantGuard_F1","MerchantGuard_F2","MerchantGuard_T2"],
        stats:["MerchantGuard_F1","MerchantGuard_F2","MerchantGuard_T2"],
    },
    LocalWatchUH:
    {
        name:"Underhill Watch",
        text:"An Underhill Watch patrol consisting of 5 dwarven watchmen and a sergeant.",
        stats:["UnderhillWatchman","UnderhillSergeant"]
    },
    Lovers:
    {
        name:"Lovers",
        text:"This encounter is with a young couple, obviously in love, sharing an intimate and discreet moment by lantern light. Referee's discretion on class, race, or if a special NPC couple."
    },
    Lycanthrope:
    {
        name:"Lycanthrope",
        extra:{
            total:6,
            chances:[
                {min:1, max:1, text:"The encounter is with a Wererat. The wererat does its best to hide their identity. Wererats have been known to account for a vast number of missing persons cases throughout the years.", stats:["Wererat"]},
                {min:2, max:2, text:"The encounter is with a Weretiger. The weretiger does its best to hide their identity.", stats:["Weretiger"]},
                {min:3, max:3, text:"The encounter is with a Werebear. The werebear does its best to hide their identity.", stats:["Werebear"]},
                {min:4, max:4, text:"The encounter is with a Wereboar. The wereboar does its best to hide their identity.", stats:["Wereboar"]},
                {min:5, max:5, text:"The encounter is with a Werewolf. The werewolf does its best to hide their identity. Werewolves have been known to account for a vast number of missing persons cases throughout the years.", stats:["Werewolf"]},
                {min:6, max:6, text:"The encounter is with a Were-weasel. The were-weasel does its best to hide their identity.", stats:["WereWeasel"]},
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
	LyreguardPatrolTentCity:
	{
        name:"Lyreguard Patrol",
        text:"!d[2d4] Lyreguardsmen pass through the area.",
        stats:["Lyreguardsmen"],
        extra:{
            total:100,
            chances:[
                {min:50, max:84, append:true, text:"The guardsmen are on a sweep through the tent city accompanied by dog soldiers as they seek out a bandit or well-known criminal", stats:["DogSoldierSneak","DogSoldierWarrior"]},
                {min:85, max:94, text:"!d[2d4] Lyreguardsmen pass through the area, led by a Lyreguard honor guard.", stats:["Lyreguardsmen","LyreguardHonorGuard"]},
                {min:95, max:99, text:"!d[2d2] Lyreguard griffon riders pass through the area.", stats:["GriffonRider"]},
                {min:100, max:100, text:"Imril, accompanied by !d[2d2] griffon riders, !d[1d6] Lyreguard honor guard, and !d[2d4] Lyreguardsmen pass through the area.", stats:["Imril","GriffonRider","Lyreguardsmen","LyreguardHonorGuard"]}
            ]
        }
    },
    MercenaryBand:
    {
        name:"Mercenary Band",
        text:"This encounter is with a mercenary band of !d[1d4+1] members. The mercenaries may be escorting a VIP, guarding a special caravan, or undergoing training and martial exercises. The band is composed of sell-swords led by a mercenary.",
        stats:["SellSword","Mercenary"],
        extra:{
            total:100,
            chances:[
                {min:100, max:100, text:"The encounter is with Dennin Blackfinger (TC1, pg. 112) or one of his lieutenants.", stats:["DenninBlackfinger","AshTheClever","DanteTheBaleful"]}
            ]
        }
    },
    MercenaryEncampment:
    {
        name:"Mercenary Encampment (not Blackfinger's Devils)",
        text:"A random band of mercenaries and their captain have set up camp. There are !d[2d6] sell-swords, !d[1d6] mercenaries, and one veteran in the encampment.",
        stats:["SellSword","Mercenary","Veteran"]
    },
    Merchant:
    {
        name:"Merchant",
        text:"This encounter is with a merchant (Neutral male or female human expert 2) peddling common wares such as tables, chairs, mirrors, combs, and the like.",
        extra:{
            total:100,
            chances:[
            {min:1, max:1, append:true, text:"<b>The merchant is unwittingly selling a valuable magic item.</b>"}
            ]
        }
    },
    MerchantEncampment:
    {
        name:"Merchant Encampment",
        text:"This encounter is with a circle of merchant wagons, camped for the night with some guards set as sentries. There are !d[2d6] wagons and the caravan hauls !d[2d20+20] gp worth of materials per wagon. The caravan has 1 drover (Neutral male human commoner 2) per wagon, and 1 guard per two wagons. A captain and one merchant (Neutral male or female expert 2) manage the guards.",
        stats:["CaravanCaptain","CaravanGuard"],
    },
    Mimic:
    {
        name:"Mimic",
        text:"A mimic has taken on the appearance of a refuse bin or public privy.",
        stats:["Mimic"]
    },
    Minstrel:
    {
        name:"Minstrel/Storyteller",
        text:"A minstrel or storyteller (Neutral male or female expert 3) has gathered a crowd of folk who are listening to his or her performance or oratory. Roll a save to gauge the audience reaction to the tale spinner. Positive reactions mean the performer is tipped for his services. Negative reactions may involve baskets of rotten vegetables and fruits being hurled at the performer."
    },
    NurseMary:
    {
        name:"Nurse Mary",
        text:"C13-11a, pg. 184 Assistant and bodyguard to Doctor Karisk.",
        stats:["NurseMary"]
    },
    WanderingMonk:
    {
        name:"Monk",
        text:"A wandering monk with no name is taking challenges to all comers in unarmed non-lethal combat in the center of the encampment. Betting is running high and a large crowd has gathered, fascinated by his unique fighting style.",
        stats:["WanderingMonk"]
    },
    Mourner:
    {
        name:"Mourner",
        text:"This encounter is with !d[1d6] family member(s) or friend(s) of a recently deceased individual. The mourner may be of any race or class."
    },
    Mugger:
    {
        name:"Mugger",
        text:"This is an encounter with an individual or gang that threatens a character that is separated from the party, or attacks them outright without the intent to kill. The mugger switches to lethal assaults if the characters reply in kind. The encounter is with !d[1d4] robbers led by an enforcer or with 1 enforcer on their own.",
        stats:["Enforcer","Robber"]
    },
    Pickpocket:
    {
        name:"Pickpockets",
        text:"A thief attempts to lift a small valuable item from a party member.",
        stats:["Robber"],
        extra:{
            total:4,
            chances:[
                {min:1, max:1, text:"1 thief and a cutpurse leader attempt to lift a small valuable from a party member.", stats:["Robber","Cutpurse"]},
                {min:2, max:2, text:"2 thieves and a cutpurse leader attempt to lift a small valuable from a party member.", stats:["Robber","Cutpurse"]},
                {min:3, max:3, text:"3 thieves and a cutpurse leader attempt to lift a small valuable from a party member.", stats:["Robber","Cutpurse"]}
            ]
        }
    },
    BlackMarketPickpocket:
    {
        name:"Black Market Pickpocket",
        text:"This is a pickpocket working for either the Wheelwrights or the Shadowmasks. He moves through the character party, lifting items for his crew that are then turned over to one of the stalls where they can be swiftly sold. If caught, he attempts to flee. If \"manhandled,\" he is aided by 4 Wheelwright toughs.",
        stats:["Pickpocket","WheelwrightTough"]
    },
    Pilgrims:
    {
        name:"Pilgrims",
        text:"This encounter is with !d[3d10] recent converts to a faith that is practiced in Bard's Gate (such as worship of Zors). Pilgrims (Any alignment male or female commoner 1-3) are typically dressed in the garb of a worshipper of the chosen deity. They offer prayers and penance, and spout the dogma of their faith as their processional passes toward their deity's shrine or temple."
    },
    Ooze:
    {
        name:"Ooze",
        text:"An ooze has found its way out of the sewers or a magician's laboratory.",
        extra:{
            total:8,
            chances:[
                {min:1, max:1, append:true, text:"A Lightning Bladder lurks near the water.", stats:["LightningBladder"]},
                {min:2, max:2, text:"Ectoplasm has found its way out of the sewers or a magician's laboratory.", stats:["Ectoplasm"]},
                {min:3, max:3, append:true, stats:["GelatinousCube"]},
                {min:4, max:4, append:true, stats:["Livestone"]},
                {min:5, max:5, append:true, text:"An Ebon ooze if near sewers, or a stun jelly otherwise.", stats:["EbonOoze","StunJelly"]},
                {min:6, max:6, append:true, stats:["GreyOoze"]},
                {min:7, max:7, text:"A Black pudding has found its way out of the sewer. The city watch arrives in 1d6 x 4 rounds; Andrigor (pg. 262) arrives in !d[1d3] rounds.", stats:["BlackPudding","Andrigor"]},
                {min:8, max:8, text:"A Jolly Jelly has found its way out of the sewers.", stats:["JollyJelly"]},
            ]
        }
    },
    Otyugh:
    {
        name:"Otyugh",
        text:"This beast was likely once the pet of a local wizard or crime lord that has escaped and now resides in a trash heap off the main roads.",
        stats:["Otyugh"]
    },
    Paladin:
    {
        name:"Paladin",
        text:"An encounter with a knight errant come to worship and pay penance at the Temple of Muir.",
        stats:["PaladinKnightErrant"],
        extra:{
            total:100,
            chances:[
                {min:1, max:1, append:true, text:"The paladin is pursued by some unknown devil, demon, or undead (Referee to determine) that manifests within two rounds of the paladin’s encounter. If the characters assist, and survive, they are introduced to Bofred (OT2). See S&W SRD for suitable <a href='http://www.d20swsrd.com/swords-and-wizardry-srd/for-the-referee/monsters/all-monsters/monster-details-d#TOC-Demons'>demons</a> and <a href='http://www.d20swsrd.com/swords-and-wizardry-srd/for-the-referee/monsters/all-monsters/monster-details-d#TOC-Devils'>devils</a>."}
            ]
        }
    },
    PipersGuild:
    {
        name:"Pipers' Guild",
        text:"!d[1d4] Pipers' Guild wererats are encountered. They may be disguised as Pipe Cleaners, be devouring a victim, or be stalking the characters. They may be followed by !d[1d4] Rat Swarms.",
        stats:["RatSwarm","PipersGuildWererat"]
    },
    PrisonerWagon:
    {
        name:"Prisoner Wagon",
        text:"Several times per day, district constable and guard stations haul prisoners charged with serious crimes to the Keep. This prisoner wagon holds !d[1d6+2] prisoners (any) cramped into a wagon affixed with wooden bars and an excellent quality lock. The prison wagon is driven by 2 City Watchmen, and guarded by an additional !d[2d4+2] watchmen or constables.",
        stats:["Constable","WallWatcher"]
    },
    Rake:
    {
        name:"Rake",
        text:"This encounter is with a fighter of appropriate level to challenge a single character. The Rake (Referee to determine appropriate level/challenge) looks for an excuse to pick a fight and demands satisfaction from some perceived sleight. The rake demands a duel out by the old oak tree outside of town. If the character avoids the duel, the Rake pursues them, even hiring a bard to pen a song about their cowardice that quickly becomes popular throughout the city. If the character wins and shows mercy to the Rake, he becomes a valuable ally.",
        stats:["BodyGuard_F1","BodyGuard","Fighter","Fighter_F5"]
    },
    Farseeker:
    {
        name:"Ranger/Farseeker",
        text:"Rarely encountered within sight of the city walls, these rangers typically visit the city to fix broken equipment, purchase new weapons, or pass along vital information. Rarely, they are seen around the temple of Darach-Albith.",
        stats:["Farseeker","FarseekerLeader"],
        extra:{
            total:100,
            chances:[
            {min:1, max:1, append:true, text:"<b>Oberon Thanalaus (Chapter 1, Farseekers of Twilight, pg. 79), master of the Farseekers of Twilight is encountered.</b>", stats:["OberonThanalaus"]}
            ]
        }
    },
    Longhunter:
    {
        name:"Ranger/Longhunter",
        text:"Like Farseekers, Longhunters rarely enter the city proper, but may be encountered outside its walls, trading information and equipment or collecting bounties.",
        stats:["Longhunter","LonghunterLeader", "LonghunterScout"],
        extra:{
            total:100,
            chances:[
            {min:1, max:1, append:true, text:"<b>Rankir, Master of the Longhunters is encountered.</b>", stats:["Rankir"]}
            ]
        }
    },
    Ratmen:
    {
        name:"Ratmen",
        text:"This encounter is with !d[2d4] ratlings who have come up from a canal, dock, or sewer grate. The ratlings are scavenging for food and valuables, and attempt to flee back to the sewers if spotted. They dress in raggedy cloaks to disguise their appearance. It is possible that the ratlings are seeking sacrificial victims for their god.",
        stats:["Ratling"]
    },
    RedBladeInitiate:
    {
        name:"Red Blade Initiate",
        text:"Passing through, they have business other than with the characters.",
        stats:["RedBlade","RedBladeInitiate"],
        extra:{
            total:2,
            chances:[
                {min:1, max:1, text:"The initiate mistakes one of the characters for his mark and attempts to assassinate them. On his body is a crude drawing that loosely resembles the character, but the dossier indicates a different person who is currently staying at the Wizard's Familiar (TW32). The assassin tails the characters, waiting to strike the mistaken target when they are alone and away from the Black Market."}
            ]
        }
    },
    Riverfolk:
    {
        name:"Riverfolk",
        text:"This is an encounter with !d[2d6] rivermen. The rivermen have brought a supply of goods that they are shilling from their flatboats to folk along the docks, bridge, or canals of the city. These rivermen are !t[RiverfolkType]",
        stats:["RiverfolkFighter","RiverfolkSneak"]
    },
    RefugeeEncampment:
    {
        name:"Refugee Encampment",
        text:"A refugee encampment consists of !d[1d20+10] adults and half that number of children. Perhaps displaced by the war with the Huun, or by other more localised problems such as Dragon, Orc or Gnoll incursion. They are malnourished, poorly clothed and in need of better shelter."
    },
    Sailor:
    {
        name:"Sailor",
        text:"This encounter is with a sailor (Neutral male human expert 3) who is experienced in negotiating oceans, rivers and great lakes. The sailor is spending his earnings on a wild fortnight in the city. The sailor is a wealth of information and misinformation about the world beyond the Stoneheart Valley, even claiming to have ventured to the Razor Coast (see Razor Coast) and beyond."
    },
    Scribe:
    {
        name:"Scribe",
        text:"The scribe (Neutral male or female human expert 3) makes detailed records of conversations, facts, and court records, and is thus a wealth of knowledge in local history and politics.",
        extra:{
            total:10,
            chances:[
                   {min:1, max:1, append:true, text:" The scribe is also decent at forgery and may forge legal documents for the right price."}
            ]
        }
    },
    SculleryMaid:
    {
        name:"Scullery Maid",
        text:"This encounter is with a maid or housekeeper for a neighborhood shopkeeper or merchant. The maid (Neutral female human commoner 2) is carrying supplies or clean laundry to her master's home.",
        extra:{
            total:10,
            chances:[
                   {min:1, max:1, append:true, text:" The maid is being accosted by a neighborhood gang, ruffian, or other dastardly cur.", stats:["Robber","Cutpurse","Pickpocket"]}
            ]
        }
    },
    SewerCleaner:
    {
        name:"Sewer Cleaner",
        text:"This encounter is with !d[2d4] members of the Pipe Cleaners Guild. They are Neutral male or female dwarf, halfling, or half-orc expert 1."
    },
    CanalWorker:
    {
        name:"Canal Worker",
        text:"This encounter is with !d[2d4] Canal Workers. They are Neutral male or female dwarf, halfling, or half-orc expert 1."
    },
    Shadow:
    {
        name:"Shadow",
        text:"This encounter is with !d[1d4+1] shadows that haunt a darkened alley or the home where a murder/suicide took place.",
        stats:["Shadow"]
    },
    Shadowmasks:
    {
        name:"Shadowmasks",
        text:"Members of the notorious Shadow Masks make their presence felt in this neighborhood. Lookouts are posted to avoid capture by any nearby guard patrols. They demand a little \"street tax\" from the characters for passing through their territory.",
        stats:["ShadowMask"]
    },
    BlackMarketShadowmaskBand:
    {
        name:"Black Market Shadowmask Band:",
        text:"This encounter is typically in the area of Glitter Haul (BM8) and Satin Tunnel (BM15). These gang members look after the interests of their gang and their secret masters in the Brotherhood in groups of 1d4 Shadowmasks (!d[1d4] in this group) plus one senior Shadowmask. They avoid causing trouble in the Black Market, though they may follow small groups or folk who have entered the market alone with the intent of skullduggery.",
        stats:["ShadowMask","SeniorShadowMask"]
    },
    SheriffsPatrol:
    {
        name:"Sheriff's Patrol",
        text:"A sheriff and !d[1d4+2] constables. The patrol is on its way to pick up a criminal or drop one off at the Keep.",
        stats:["Constable","SheriffsDeputy"]
    },
    Shyster:
    {
        name:"Shyster",
        text:"This encounter may be with a pimp, peddler of contraband, or other unsavory character displaying his wares. There is a 50% chance that the hustler intends to rip off the characters in some way.",
        stats:["Shyster"]
    },
    Skeletons:
    {
        name:"Skeletons",
        text:"A cleric or necromancer of Orcus created these animated skeletons of criminals and set them loose within the city to watch the chaos. The encounter is with !d[2d4] skeletons.",
        stats:["Skeleton"]
    },
    Slavers:
    {
        name:"Slave Trader",
        text:"This is an encounter with a group of !d[1d4] cloaked and masked figure(s) driving !d[1d4] chained victim(s) (any) toward Slaver’s Way. The slaves are made up of foreign visitors to Bard's Gate who had the unfortunate circumstance of being kidnapped while visiting the city.",
        stats:["Slaver","SlaverBoss"]
    },
    Spectre:
    {
        name:"Spectre",
        text:"This encounter is with the spectre of a cruel old resident of the neighborhood or one of its victims. The original spectre is likely the mean old man from up the street, or the creepy cat lady.",
        stats:["Spectre"]
    },
    Spellcaster:
    {
        name:"Spellcaster",
        text:"This encounter is with a cleric or magic-user 3-4 who is on a mission for their master to find a particularly difficult-to-get spell component, or religious item that may have been recently stolen from their temple. Depending on the reaction of the characters, the spellcaster may enlist the aid of the party in finding their missing item, or ask for a loan to help pay off the cost of the spell component."
    },
    Spider:
    {
        name:"Spider",
        text:"This encounter is with a 4ft giant spider within the area of an abandoned structure.",
        stats:["GiantSpider_4ft"],
        extra:{
            total:10,
            chances:[
                   {min:1, max:2, text:"This encounter is with a 6ft giant spider within the area of an abandoned structure.", stats:["GiantSpider_6ft"]}
            ]
        }
    },
    StreetUrchin:
    {
        name:"Street Urchin",
        text:"This encounter is with !d[1d4] street urchin(s) who are looking to pinch food and coin from unsuspecting travelers or shoplift from the stalls and shops.",
        stats:["StreetUrchin"]
    },
    Streetwalker:
    {
        name:"Streetwalker",
        text:"These territorial members (Neutral male or female expert 1) of the Harlots Guild command entire streets after the sun goes down as they prowl for potential customers."
    },
    TempleGuard:
    {
        name:"Temple Guard",
        text:"Encounters with temple guards involve warriors trained to protect the temple by serving as a bodyguard to one of the temple's high priests or visiting dignitaries.",
        stats:["TempleGuardLawful","TempleGuardOther"]
    },
    TemporaryBlackMarketStall:
    {
        name:"Temporary Black Market Stall",
        extra:{
            total:6,
            chances:[
                {min:1, max:1, name:"Drug Peddler", text:"The street-corner pharmacist is dealing tresh (BM11), Movollo's leaf, opium, and other substances that are considered \"bad for you.\" He has at least 3 doses of each item, and has about 150 gp in cash.", stats:["DrugPeddler"]},
                {min:2, max:2, name:"Stolen Clothes", text:"These booths are generally found in the Satin Tunnel region (BM15) of the Black Market. Outfits can be had for half their actual price, but there is a 10% chance upon wearing stolen clothes that their owners may recognize them, and a 5% chance of contracting lice or fleas."},

                {min:3, max:3, name:"Stolen Artwork", text:"Artwork of varying quality from very good to amateurish student work from the Bard's College can be had here for 50% or less of its actual value. Foreign collectors pick up most stolen artwork and whisk it away from the city before it can be recognized. No quality artwork over 1000gp can be found among the Black Market vendors."},
                {min:4, max:4, name:"Stolen Weapons", text:"Non-magical weapons of various sorts can be found here. Typically, they are of poorer quality than that found in OK Discount Arms and Pawn (BM14). Weapons here are sold for 50% below value, but have a 25% chance of breakage on any use."},
                {min:5, max:5, name:"Stolen Jewelery", text:"Most jewelry stolen in the city ends up on one of these tables in the Black Market first. The jewelry can be had for 25% below value, though scrying magic has an opportunity to detect the location of stolen merchandise. For this reason, most stolen jewelry and precious items are re-cut and melted down by disreputable jewelers. No jewelry of more than 200gp value can be found among the stalls."},
                {min:6, max:6, name:"Stolen Holy Artifacts", text:"Items such as holy symbols, censers, candelabras, and such are found here, after they were stolen from private residences or lifted from shrines and temples. They can be purchased for 75% of actual value, though no item worth more than 500gp is typically found among the stalls. As with jewelry and other \"fixed\" items, the artifacts can often be detected through scrying magic; therefore, they are sold to be smelted, or quickly moved to foreign cities."}
            ]
        }
    },
    TentRevival:
    {
        name:"Tent Revival",
        text:"A wandering cleric and retinue set up a grand pavilion and preach the teachings of their deity. !d[1d100+50] persons are in attendance. The cleric may be of any random non-chaotic deity. The revival lasts for !d[1d4] day(s).",
        stats:["WanderingCleric","Acolyte"]
    },
    TrashCollector:
    {
        name:"Trash Collector",
        text:"!d[2d4] trash collectors (Neutral male or female commoner 1) go about sweeping the streets and cleaning up refuse. There is one trash wagon and two mules for every two trash collectors."
    },
    TroupOfPerformers:
    {
        name:"Troupe of Performers",
        text:"A troupe of !d[1d6] acrobats, clowns, jugglers, fire-eaters, singers and dancers perform for a gathering crowd. Characters' reactions to the event may lead to new contacts or new enemies in the city. The troupe is led by a Neutral male or female expert 5, but may be made up of experts, monks, and thieves of level 1-2."
    },
    Undertaker:
    {
        name:"Undertaker",
        text:"An encounter with an undertaker (Neutral male human expert 2) may be with anyone in the profession of death, from a groundskeeper, embalmer or gravedigger."
    },
    Valet:
    {
        name:"Valet",
        text:"This encounter is with a personal porter (Neutral male human expert 2) of a noble or aristocrat. The valet is on an errand for their master."
    },
    VampireSpawn:
    {
        name:"Vampire Spawn",
        text:"!d[1d4] vampire spawn stalk(s) the benighted streets in search of prey. Felicity (CAT3) created these unfortunate beings recently, so they have not matured fully yet.",
        stats:["VampireSpawn"]
    },
    WallWatcher:
    {
        name:"Wall Watcher",
        text:"This encounter is with a patrol of !d[2d4] wall watchers. If the encounter is near a city wall, the wall watchers call down to the characters to ask what they are doing or if they have seen a suspicious character. If encountered away from the wall, it is with off duty wall watchers on their way home from a shift. There is one officer (included in the number encountered) with the regulars.",
        stats:["WallWatcher","WallWatchOfficer"]
    },
    Wheelwright:
    {
        name:"Wheelwright",
        text:"This encounter is with !d[1d4] member(s) of the Wheelwrights' Guild. These thuggish brutes are the eyes and ears of Duloth and operate his black market. There is a 50% chance that the wheelwrights have set up a back alley shop, selling stolen or smuggled goods and contraband. Wheelwrights may serve as a moving \"fence\" for stolen property, able to purchase up to 500 gp worth of illicit property or materials. In either event, they have employed a pair of Shadowmasks to act as lookouts. When suspicion arises, they depart and blend in with other carriage and wagon traffic, one of the faceless crowd. Wheelwrights typically have 1d4 types of contraband (!d[1d4] this time) for sale at any given time.<br><b>Contraband details on pg. 290-291.</b>",

        stats:["WheelwrightTough","ShadowMask"]
    },
    BlackMarketWheelwrightThugBand:
    {
        name:"Black Market Wheelwright Thug Band",
        text:"This is an encounter with !d[1d4] Wheelwright thug(s) and a collector who patrol the area keeping a lookout for sheriffs or other watchmen who may have attempted to infiltrate the Black Market. They may ask the characters what they are looking for, and attempt to direct them to the right stall or shop. If the characters are asking the wrong kinds of questions, they may draw their weapons and attempt to beat the characters bloody and dump them in the canal, or sell them to Grilli (BM25) for some fast coin. Collectors gather tax from the various vendors of the underworld to fill the coffers of the guild.",
        stats:["WheelwrightCollector","WheelwrightTough"]
    },
    WillOTheWisp:
    {
        name:"Will-o'-the-wisp",
        text:"These creatures occasionally prey on folk living near the banks of the river on foggy evenings. There are !d[1d4] will-o'-the-wisps.",
        stats:["WillOTheWisp"]
    },
    WinePeddler:
    {
        name:"Wine Peddler",
        text:"A wine peddlar (Neutral male commoner 2) is encountered. He has several earthen crocks of wine to sell, for 1 SP each. The wine is of very poor quality."
    },
    Wizard:
    {
        name:"Wizard",
        text:"A Wizard's Apprentice has been sent out on an appointment to collect magical ingredients or seek out the owner of a scroll that possesses a new spell to learn.",
        stats:["WizardsApprentice"],
        extra:{
            total:10,
            chances:[
                   {min:1, max:1, text:"A master Wizard has gone out to collect magical ingredients or seek out the owner of a scroll that possesses a new spell to learn. They did not send an apprentice as they wish to stretch their legs.", stats:["Wizard"]}
            ]
        }
    },
    Wraith:
    {
        name:"Wraith",
        text:"This encounter is with a wraith. The wraith is the unkind spirit of a convicted murderer now out to get revenge upon the sheriffs who caught him in the act of his crime.",
        stats:["Wraith"]
    },
    FelicityBigh:
    {
        name:"Felicity Bigh",
        text:"Felicity Bigh (CAT3, pg. 163) Vampiress, stalks the darkness. Perhaps she hunts or is hunted by her former lover Justin Greenwood (N5, pg. 202).",
        stats:["FelicityBigh","JustinGreenwood"]
    },
    Gondolier:
    {
        name:"Gondolier",
        text:"an encounter with a gondolier (Neutral male or female expert 1-3). The gondolier may offer the characters a ride, may want the party to get of his way, may be friendly, rude or funny."
    },
    SpecialTC:
    {
        name:"Special",
        extra:{
            total:19, // TODO support item 14, reroll on daytime table
            chances:[
                   {min:1, max:1, name:"Ash the Clever", text:"Ash the Clever (TC1, pg. 112), Lieutenant of Dennin Blackfinger is encountered", stats:["AshTheClever"]},
                   {min:2, max:2, name:"Dante the Baleful", text:"Dante the Baleful (TC1, pg. 112), Lieutenant of Dennin Blackfinger is encountered", stats:["DanteTheBaleful"]},
                   {min:3, max:3, name:"Kal Kammon", text:"Kal Kammon (TC3, pg. 114) is encountered."},
                   {min:4, max:4, name:"Watenga ((TC2, pg. 113)", text:"Cleric of Moccavallo, the god of chaos, disorder and trickery. He sells spicy chicken and home-brewed ale from his text in Tent City. He also sells illegal substances such as Blue Lotus flower. Despite being chaotic - but not necessarily evil - to his core, he is against the influence of the cults of Set and Orcus and will give information if he has any to suitable adventurers."},
                   {min:5, max:5, name:"Okil", text:"Okil (TC4, pg. 114) is encountered."},
                   {min:6, max:6, name:"Sayid", text:"Sayid (TC5, pg. 114) is encountered."},
                   {min:7, max:7, name:"Jotolf", text:"Jotolf (TC6, pg. 114) is encountered."},
                   {min:8, max:8, name:"Bjorn Casteran", text:"Bjorn Casteran (TC8, pg. 115) is encountered."},
                   {min:9, max:9, name:"Big Horn", text:"Big Horn (TC17, pg. 117) is encountered."},
                   {min:10, max:10, name:"Jillian", text:"Jillian (TC10, pg. 114) is encountered."},
                   {min:11, max:11, name:"Haiweth", text:"Haiweth (TC11, pg. 114) is encountered."},
                   {min:12, max:12, name:"Asleif", text:"Asleif (TC12, pg. 114) is encountered."},
                   {min:13, max:13, name:"Belonda", text:"Belonda (TC13, pg. 114) is encountered."},
                   {min:14, max:14, name:"Lolly", text:"Lolly (TC13, pg. 114) is encountered."},
                   {min:15, max:15, name:"Mama Bobo and Sons", text:"Mama Bobo and Sons (TC13, pg. 114) are encountered."},
                   {min:16, max:16, name:"Colonel Portland or York", text:"Colonel Portland or York (TC14, pg. 116) are encountered."},
                   {min:17, max:17, name:"Rini Rohavi", text:"Rini Rohavi (TC15, pg. 117) is encountered."},
                   {min:18, max:18, name:"Wassan", text:"Wassan (TC15, pg. 117) is encountered."},
                   {min:19, max:19, name:"Filini", text:"Filini (TC16, pg. 117) is encountered."}
            ]
        }
    },
    SpecialTW:{
        name:"SpecialTW",
        extra:{
            total:20,
            chances:[
            {min:1, max:1, name:"Virthalia", text:"Virthalia (TW1, pg. 239), friend of Cylria is a new member of the Greycloaks and moderately powerful magic user. She will trade with Lawfully aligned magic-users who wish to learn spells from her."},
            {min:2, max:2, name:"Scribe of the Scroll", text:"This encounter is with a scribe (Lawful male or female human expert 4) who works for the High Sanctum of the Scroll (TW2, pg. 239). The scribe may have a treasure map, a scroll with a new spell on it, or some other data or information. The scribe may be in the process of being pickpocketed or mugged on the way to the sanctum, or the mark that characters are supposed to rob. Either way, the scribe's scroll leads to untold adventure!"},
            {min:3, max:3, name:"Robert Terrafyrma", text:"Robert Terrafyrma (TW3, pg. 240, Neutral male halfling expert 3) is  master cartographer, and buys and sells maps and floor plans. "},
            {min:4, max:4, name:"Takkerk", text:"Takkerk (TW4, pg. 240), owner of the Temple of the Beetle. He sells beetles, live and dead, monstrous and ordinary, as well as their component parts."},
            {min:5, max:5, name:"Gunther Stone", text:"Gunther Stone (TW5, pg. 241) crafts bull-whips and gladly offers demonstrations"},
            {min:6, max:6, name:"Ashtin Artcolmb", text:"Ashtin Artcolmb (TW6, pg. 241) crafts prosthetic arms and legs from steel, brass, tin, and wood."},
            {min:7, max:7, name:"Enix Axlecrafter", text:"Enix Axlecrafter (TW7, pg. 241) comes from a long line of wagon and chariot builders."},
            {min:8, max:8, name:"Tal Rowiv", text:"Tal Rowiv (TW8, pg. 241), creator of fine costume jewelry. Can craft fake jewelry that will pass initial inspection as the real thing."},
            {min:9, max:9, name:"Giovanni Fusini", text:"Giovanni Fusini (TW9, pg. 241) famed avant-garde artist and social climber."},
            {min:10, max:10, name:"Utello", text:"Utello (TW10, pg. 241), famed sculptor of fine gargoyle statues for the rich and powerful."},
            {min:11, max:11, name:"Zedicha", text:"Zedicha (TW11, pg. 241), casket maker. May be on edge due to recent mysterious theft of caskets from her."},
            {min:12, max:12, name:"Menoen the Limner", text:"Menoen the Limner (TW12, pg. 241), self taught sign and shield painter."},
            {min:13, max:13, name:"Vok Wightkicker", text:"Vok Wightkicker (TW13, pg. 241), seller of rare magical books. His familiar, 'Bill' - a hideous old toad - may be seen riding on his shoulder, or resting on the antique desk at the rear of the shop."},
            {min:14, max:14, name:"Arta", text:"Arta (TW14, pg. 242), hard-working laundress and local hero to the district's women."},
            {min:15, max:15, name:"Goodman Furster", text:"Goodman Furster (TW15, pg. 242) owner of The Hanging Rose tavern. A protective man with 9 attractive daughters, he has little peace-of-mind."},
            {min:16, max:16, name:"Joth", text:"Joth (TW16, pg. 242) (Neutral male human expert 5). An expert trap-maker, with a peg leg and some grumpiness."},
            {min:17, max:17, name:"Gin Wa", text:"Gin Wa (TW17, pg. 242) painter of abstract portraits prized by the nobles."},
            {min:18, max:18, name:"Hal", text:"Hal (TW18, pg. 243) owner of the Wyvern's Tail bar. A run-down, brawler bar, plagued by constant fighting and the Half-Orc thug Laamar."},
            {min:19, max:19, name:"Keyslin Yebler", text:"Keyslin Yebler (TW20, pg. 243), baker and reknowned maker of cookies. Flips cookies in the air to impress passersby."},
            {min:20, max:20, name:"Goric", text:"Goric (TW21, pg. 243, Netral male hill dwarf expert 5) bakes miniature copies of ceramic city locations and buildings out of clay and sometimes with real stone or precious metals."}]
        }
    },
    SpecialMD:{
        name:"SpecialMD",
        extra:{
            total:20,
            chances:[
            {min:1, max:1, name:"Willie (Market Bridge, pg. 122)", text:"Neutral male halfling fighter 1. A smart-mouthed elderly halfling member of the Market Watch, responsible for collecting a 1 CP toll from any conveyances that pass over the bridge."},
            {min:2, max:2, name:"Torrie Dixson (M2, pg. 124)", text:"He stands outside his Nightgate Inn, claiming that rooms are on special offer at 1GP and trying to strong-arm late arrivers to Bard's Gate into the Inn with tall tales of no other Inns having rooms available. Thin, of wiry build, with oiled down hair and a skinny moustache. "},
            {min:3, max:3, name:"Sergeant Vassale (M3, pg. 124)", text:"Purveoyr of the 'The Pride of the March' tavern; a 'Private' Club that does not allow in Magic Users or other non-martial types that Sergeant Vassale considers undersirable. Gruff but a good friend if you can earn it."},
            {min:4, max:4, name:"Durst Hammerhand (M4, pg. 125)", text:"Human male fighter 3. Large and bald with earrings in both ears and a steel gauntlet on one hand, Durst is famed for felling an Ogre with a single punch. Its head now rests in a pickle jar in his 'Felled Ogre' Inn."},
            {min:5, max:5, name:"Helman (M5, pg. 125)", text:"Male Halfling (Thf8), ex-adventurer, owner of Helman's Bar, friendly personable soul and improbable ladies' man. May be enroute to visit one of his female noble friends, or perhaps is having a spot of trouble because of all his female noble friends."},
            {min:6, max:6, name:"Tarkon and Kel (M6, pg. 125)", text:"Tarkon (Neutral male dwarf fighter 3) and Kel (Neutral male dwarf fighter 4) are ex-adventurers and the owners of 'The Sell-Sword' Tavern. They run a professional and peaceful tavern; It's a safer more pleasant life-style than that of an adventurer."},
            {min:7, max:7, name:"Poldo (M7, pg. 125)", text:"Neutral half-elf expert 3. A friendly looking soul, perhaps carrying stacks of blank paper or bottles of ink, his hands are stained by dyes or inks. "},
            {min:8, max:8, name:"Lasker (M9, pg. 128)", text:"Chaotic male dwarf thief 3 and a renknowned pie-maker. Unbeknownst to all, his pies often contain abducted children.", stats:["Lasker"]},
            {min:9, max:9, name:"Mar (M12, pg. 129)", text:"Lawful female half-elf magic-user 2. An energetic but elderly manufacturer and purveryor of cure-alls, salves and poltices."},
            {min:10, max:10, name:"Xacanthia (M11, pg. 128)", text:"Neutral female elf magic-user 4. A transcriber of non-magical writings."},
            {min:11, max:11, name:"Fervin (M10, pg. 128)", text:"Male Half-Elf (MU4). Going by the name 'The Pasha', Fervin pretends to be from a far off exotic country and not to be a magic user. He runs \"The Pasha's Pillow\" restaurant and fears that his past life as a bandit will catch up on him."},
            {min:12, max:12, name:"Brendus or Flint (M13, pg. 129)", text:"Brendus (Male Human Rgr 3) and/or his son Flint (Neutral Male Half-elf Ftr 1) are encountered. They may be preparing for an expedition to hunt some magical beast, or bringing the corpse of some mystical creature to be stuffed and mounted."},
            {min:13, max:13, name:"Andrigor (Appendix A, pg. 262)", text:"Andrigor may be the most powerful magic user in Bard's Gate and is a close ally of Cylyria's.", stats:["Andrigor"]},
            {min:14, max:14, name:"Cylyria (disguised, Appendix A, pg. 262)", text:"Mayor and High Burgess of Bard's Gate. She is currently in disguise.", stats:["Cylyria"]},
            {min:15, max:15, name:"Imril (Appendix A, pg. 264)", text:"Leader of the Knights of the Griffin, hero of the city and partner of Cylyria. He may be leading a patrol, investigating strange goings on, or interviewing suspects in regards to an important matter.", stats:["Imril"]},
            {min:16, max:16, name:"Velior or Syrele (M17, pg. 130)", text:"Velior (Male Elf MU10) famous elven magical craftsman and/or his apprentice Syrele (Female Elf MU5) are encountered. They may be sourcing material for some fantastical project."},
            {min:17, max:17, name:"Queltin (M18, pg. 130)", text:"Neutral male human expert 3. Member of the Caretakers' Guild and likely encountered recovering a corpse from the district. If the deceased was very poor then their corpse may be destined for disposal in his paupers' oven."},
            {min:18, max:18, name:"Commandant Rohanse (M19, pg. 130)", text:"Commandant Rahonse (Lawful Male Human Ftr 6) is head of the Fighters' Guild."},
            {min:19, max:19, name:"Nurse Mary (C13, area 11)", text:"Female Human Fighter 2. Assisstant and bodyguard to Dr. Karisk (C13-11. pg. 184), Nurse Mary has had extreme levels of reconstructive surgery after a terrible incident left her severely disfigured. She now looks un-natural, akin to a close parody of human anatomy.", stats:["NurseMary"]},
            {min:20, max:20, name:"Imbo the Undying (Appendix A, pg. 264)", text:"An immortal vicious killer. He will attempt to appear friendly, non-threatening and may attempt to trick the party in order to more easily murder them.", stats:["Imbo"]}]
        }
    },
    SpecialG:{
        name:"SpecialG",
        extra:{
            total:40,
            chances:[
            {min:1, max:2, name:"Culver Ringsmith (G1, pg. 142)", text:"Lawful male halfling expert 2, owner of the 'Coat of Mail' chainmail shop. He is a craftsman of average quality, specialising in armor sized for halflings."},
            {min:3, max:4, name:"Thayco Manslayer and Booginz (G2, pg. 142)", text:"Thayco is an impolite, unpleasant smelling, rude and irritable crafter of high quality axes. He is accompanied by Booginz, a Half-Orc bare-knuckle fighter that Thayco has decided to sponsor. Perhaps Thayco tries to convince a member of the party in to a bout with Booginz.", stats:["Thayco","Booginz"]},
            {min:5, max:6, name:"Wareth Drumstrike (G3, pg. 143)", text:"Neutral male dwarf expert 3 and crafter of fine quality shields. He likes to demonstrate their affectiveness by firing a bolt into them at close range with his heavy crossbow. Perhaps he'll try to persuade the party to take part in a demonstration, or perhaps he's bringing some shields to Menoen the Limner (TW12) to be painted."},
            {min:7, max:8, name:"Eltern (G4, pg. 143)", text:"Neutral male half-elf fighter 3 and proprietor of \"The Bard's Lute\" inn. Where-in he serves decent food and drink, for a reasonable price."},
            {min:9, max:10, name:"Guillome (G5, pg. 143)", text:"Lawful male half-elf magic-user 8 creates beautiful glass and crystal items. Popular amongst the rich and influential of Bard's Gate, he also creates magical glass items for those few who know of his true abilities."},
            {min:11, max:12, name:"Milago (G6, pg. 145)", text:"Lawful male halfling thief 2 crafts fine strings for musical instruments and weapons from short-bows to siege weapons. He may be seen carrying giant hair, giant spider web, or other exotic materials. He may even attempt to recruit the party to source such materials for him."},
            {min:13, max:14, name:"Darius Dougle (G7, pg. 145)", text:"Neutral male dwarf fighter 2 and crafter of fine helmets. He may be returning from purchasing exotic plumage from some mystical creature, or other more mundane materials for him helmers."},
            {min:15, max:16, name:"Amaryllis Silverfeet (G8, pg. 145)", text:"Neutral female halfling fighter 10 and crafter of reknowned plate armor, dragon scale armor in particular. She may attempt to hire the party to source some scales for her; the black dragon lairing in the Bard's Gate mines (pg. 54) would be a likely source."},
            {min:17, max:18, name:"Fawar/Shelen Tshaziq (G9, pg. 145)", text:"Fawar (Lawful male elf magic-user 5) and Shelen Tshaziq (Lawful male elf magic-user 6) are brothers who work together to create fantastic chainmail armor. Using their magical abilities to weave the chainmail. Enchanted items can be produced by them; perhaps with some material component that they try to persuade the party to source for them."},
            {min:19, max:20, name:"Duloth and Zalatha (Appendix A, pg. 263)", text:"Duloth, Burger of the Wheelwrights' Guild, Underworld Kingpin and a nimble but very obese, curly black haired, begoateed man, is accompanied by his assistant Zalatha, a female thief.", stats:["Duloth","Zalatha"]},
            {min:21, max:22, name:"Borm Morgarm (G11, pg. 146)", text:"Male Dwarf Fighter 6 and Burgher of the Gem Cutters and Jewelers' Guild. Usually to be seen his guild-house, he wears beautiful looking magical armor and wields an impressive battle-axe."},
            {min:23, max:24, name:"Livit Lockhardt (G12), pg. 146", text:"Neutral female halfling expert 2 and master of the Scribes' Guild."},
            {min:25, max:26, name:"Guildmaster Barik (G13), pg. 146", text:"Neutral male dwarf expert 7, a silver beared, elderly dwarf and master fo the Stoneworkers' Guildhall. He would be interested in updated information on the Bard's Gate mines (pg. 54), or even better, in someone driving the dragon out from there."},
            {min:27, max:28, name:"Tanna Evasho (G14), pg. 146", text:"Neutral female human expert 10 and master of the Herbalists' and Alchemists' Guild."},
            {min:29, max:30, name:"Madam Toulon (G18, pg. 147)", text:"Neutral female human expert 6. Madam Toulon, burgess of the Harlots' Guild, is a finely dressed lady of clear refinement. She spends much of her time on Guild administration these days, and less on her craft."},
            {min:31, max:32, name:"Brelliar (Appendix A, pg. 262)", text:"A friendly but confused elderly wizard. He does not realised it but he is under the effect of a cursed scroll, which causes his lack of mental clarity."},
            {min:33, max:34, name:"Velior (M17, pg. 130)", text:"Velior (Male Elf MU10) famous elven magical craftsman is encountered. He may be sourcing material for some fantastical project."},
            {min:35, max:36, name:"Andrigor (Appendix A, pg. 262)", text:"Andrigor may be the most powerful magic user in Bard's Gate and is a close ally of Cylyria's.", stats:["Andrigor"]},
            {min:37, max:37, name:"Cylyria (in disguise, Appendix A, pg. 262)", text:"Mayor and High Burgess of Bard's Gate. She is currently in disguise.", stats:["Cylyria"]},
            {min:38, max:38, name:"Cylyria (not in disguise, Appendix A, pg. 262)", text:"Mayor and High Burgess of Bard's Gate.", stats:["Cylyria"]},
            {min:39, max:40, name:"Manisool (Appendix A, pg. 265)", text:"A powerful agent for the cult of Orcus, Manisool masquerades as a shy and secretive magic-user pillar of Bard's Gate's ruling class.", stats:["Manisool"]}
            ]
        }
    },
    SpecialOT:{
        name:"SpecialOT",
        extra:{
            total:20,
            chances:[
            {min:1, max:1, name:"High Guardian Elissa Perinor (OT1, pg. 150)", text:"She is always on the lookout for more recruits for the Order of Protectors (pg. 79). She would also be interested in adventurers willing to explore Hel's Acre (pg. 259).", stats:["ElissaPerinor"]},
            {min:2, max:2, name:"Bofred the Just (Appendix A, pg. 262. OT2, pg. 153)", text:"An orator in the fire and brimstome style, Bofred is keen to find volunteers to aid his crusade to return the great shrines of Thyr and Muir to the control of Law.", stats:["Bofred"]},
            {min:3, max:3, name:"Danya Darkfeather (OT4, pg. 154)", text:"High Priestess of the temple of Rhiaan, the Bird Goddess."},
            {min:4, max:4, name:"Ivillivil, Haldor, Purrann, or Thord (OT5, pg. 154)", text:"All are secretly Weretigers. Purrann is First Priest of the Temple of Bast. Ivillivil, Haldor and Thord are his priests and run the temples' day-to-day operations. All four actively hunt acolytes of Set and may hire adventurers to help them in this.", stats:["Purrann","Ivillivil","Haldor","Thord"]},
            {min:5, max:5, name:"Ginivarin Krandolve (OT6, pg. 155)", text:"High Priest of the Temple of the elven God Darach-Albith.", stats:["GinivarinKrandolve"]},
            {min:6, max:6, name:"Fanr Flameson (OT7, pg. 156)", text:"'Leader' of the Temple of Moccavallo - the god of chaos, disorder and trickery. If such a temple could be said to have a leader. Fanr may be carousing, regaling passerbys with his famour tale of 'The Fortunate Fool', or doing anything else that he feels like doing in that moment. While he is chaos incarnate, he is not necessarily evil. He simply is himself.", stats:["Fanr"]},
            {min:7, max:7, name:"Torin Heweth (OT8, pg. 156)", text:"Neutral male human expert 3 and owner of the 'bed of Grapes' Inn, which is housed in a small temple to a long forgotten god."},
            {min:8, max:8, name:"Sister Jenny or Mr. Frown (OT9, pg. 156)", text:"Sister Jenny (Neutral female human expert 4) proprietress of 'The Pink Feather' Harlot's Guild pleasure house, or her head of security Mr. Frown (Lawful male halfling fighter 4). 'The Pink Feather' is a source of contention for some of its more religious neighbours, so perhaps there is an intemperate discussion going on about it."},
            {min:9, max:9, name:"Mistress Gantry (OT10, pg. 156)", text:"Neutral female human expert 4 and owner of \"Gantry's Tea House.\" May be receiving a delivery of Lasker's (M9, pg. 128) suspiciously tasty meat pies."},
            {min:10, max:10, name:"Odof Lionsmane, or Sanya (OT11, pg. 156)", text:"Husband and wife, Odof (Lawful male human fighter 4) and Sanya (Lawful female human commoner 2) own and operate \"The Lion's Lair\" Inn."},
            {min:11, max:11, name:"Bolo Histan (OT12, pg. 156)", text:"Neutral male human expert 3, owner of the mediocre 'Lowlander Inn.'"},
            {min:12, max:12, name:"Gilant Narvess (OT13, pg. 156)", text:"Neutral male human expert 2, gambler, pursuant of older ladies, and owner of 'The Mill Stone' inn."},
            {min:13, max:13, name:"Drasil Narben (OT14, pg. 157)", text:"Neutral male halfling expert 4, owner of the 'Seven Trees' inn, enthusiastic gardener and friendly host."},
            {min:14, max:14, name:"Sventz Borsi (OT15, pg. 157)", text:"Neutral dwarf expert 4 owner of \"Visseli's Vault\" restaurant, located underground in a former noble estate's water tank"},
            {min:15, max:15, name:"Forgemaster Gruden Greybeard (OT16, pg. 157)", text:"Leader of the Temple of the dwarven god Dwerfater. He will likely approach any Dwarves and invite them to his congregration, or to aid his quest to restore the dwarven homeland under the Ice Plateau."},
            {min:16, max:16, name:"Hadro Full-Pint (OT17, pg. 157)", text:"Male Halfling Cleric of Pekko and chief cleric of the temple of Pekko, god of ales and grains. If today is worship day then Hadro and assisting priests may be handing out free samples of beer and slices of bread to anyone who will agree to attend temple services."},
            {min:17, max:17, name:"Imril (Appendix A, pg. 264)", text:"Leader of the Knights of the Griffin, hero of the city and partner of Cylyria. He may be leading a patrol, investigating strange goings on, or interviewing suspects in regards to an important matter.", stats:["Imril"]},
            {min:18, max:18, name:"Manisool (Appendix A, pg. 265)", text:"A powerful agent for the cult of Orcus, Manisool masquerades as a shy and secretive magic-user pillar of Bard's Gate's ruling class.", stats:["Manisool"]},
            {min:19, max:19, name:"Watenga (TC2, pg. 113)", text:"Cleric of Moccavallo, the god of chaos, disorder and trickery. He sells spicy chicken and home-brewed ale from his text in Tent City. He also sells illegal substances such as Blue Lotus flower. Despite being chaotic - but not necessarily evil - to his core, he is against the influence of the cults of Set and Orcus and will give information if he has any to suitable adventurers."},
            {min:20, max:20, name:"Jenette Holycraft (TW27, pg. 244)", text:"Secret Paladin of Muir, leader of the all-female paladin order \"Sisters of the Maiden's Cross\", and proprietress of the \"Maiden's Cross\" tavern which she uses as a front for her activites against evil in the city.", stats:["JenetteHolycraft"]}
            ]
        }
    },
    SpecialD:{
        name:"SpecialD",
        extra:{
            total:12,
            chances:[
            {min:1, max:1, name:"Chase (West Docks, D3, pg. 168)", text:"Neutral male human expert 4. Dressed in stained clothes, bold and with skin that has turned an unhealthy yellow, Chase is the purveyor of the 'Last Drop'. A dilapidated wooden shack from which he and his sons sell liquor and ale."},
            {min:2, max:2, name:"Frenrick (West Docks, D4, pg. 168)", text:"Neutral male human expert 4. Weather-beathen and old, Frenrick sells almost everything you could need for boating or fishing."},
            {min:3, max:3, name:"Aicha (West Docks, D2, pg. 168)", text:"Neutral female human thief 2. Her left leg is missing and she sports an iron peg leg in its place; the result of a Manticore attack in her previous career as a hunter. Now she manages the 'Drydock' Inn for the Rivermen's Guild."},
            {min:4, max:4, name:"Jaeger (D1, pg. 167)", text:"Male thief 3. Runs a pawnshop which acts as a front for his real career as the premier fence of Bard's Gate."},
            {min:5, max:5, name:"Duloth or associates (Appendix A, pg. 263)", text:"Duloth, Burger of the Wheelwrights' Guild, Underworld Kingpin and a nimble but very obese, curly black haired, begoateed man, or one or more of his lieutenants.", stats:["Duloth","Zalatha","Tranda","Gorar"]},
            {min:6, max:6, name:"Cylyria (disguised, Appendix A, pg. 262)", text:"Mayor and High Burgess of Bard's Gate. She is currently in disguise.", stats:["Cylyria"]},
            {min:7, max:7, name:"Felicity Bigh (Night, CAT3, pg. 163)", text:"Vampiress, stalks the darkness. Perhaps she hunts or is hunted by her former lover Justin Greenwood (N5, pg. 202). Perhaps she hunts dock-workers, drunks or even the party.", stats:["FelicityBigh", "JustinGreenwood"]},
            {min:8, max:8, name:"Evan Agrendive (East Docks, ED1, pg. 234)", text:"Neutral male half-elf expert 2. May offer to convey the party across the Stoneheart river in his boat. On nights of the new moon, he may be followed by the river nymph, Aririn; whose song he fortunately cannot hear as he is moderately deaf.", stats:["Aririn"]},
            {min:9, max:9, name:"Widow Waker (East Docks, ED2), pg. 234", text:"Lawful female human expert 3 and kind-hearted but out-wardly stern owner of \"Widow Waker's Orphanage.\" If the party have a good reputation she may approach them to investigate the disappearance of a number of children from her orphanage. Unfortunately they have been taken by Lasker (M9, pg. 128) and may be in his basement or already be ingredients in his pies."},
            {min:10, max:10, name:"Eli (East Docks, ED3), pg. 234", text:"Lawful male human ranger 3. Eli is a powerfully built but soft-spoken and friendly, late middle-aged ex-adventurer. He runs \"Eli's Tannery and Furrier\" and may want the party to source hides and skins for him. He may be accompanied by Khuk (Neutral male half-orc fighter), his friend who he raised from a young age."},
            {min:11, max:11, name:"Lasker (Night, M9, pg. 128)", text:"Chaotic male dwarf thief 3 and a renknowned pie-maker. Unbeknownst to all, his pies often contain abducted children and he is stalking the night hunting them now.", stats:["Lasker"]},
            {min:12, max:12, name:"Rolnüt Half-Axe", text:"Rolnüt (neutral male human [Northlander] fighter 5) is looking  for his captain, Tvorji (see The Hidden Huscarl, pg. 356)"}
            ]
        }
    },
    SpecialC:{
        name:"SpecialC",
        extra:{
            total:20,
            chances:[
            {min:1, max:1, name:"Lasker (Night, M9, pg. 128)", text:"Chaotic male dwarf thief 3 and a renknowned pie-maker. Unbeknownst to all, his pies often contain abducted children and he is stalking the night hunting them now.", stats:["Lasker"]},
            {min:2, max:2, name:"Lady Garga (C1, pg. 170)", text:"Neutral female half-elf expert 4. Lady Garga is a stunning looking youthful half-elf, who learnt the secret of divination via goat entrails from her mother. She may offer to tell the party's future for 200GP. This works as a contact other plane spell but the party must supply their own goat."},
            {min:3, max:3, name:"Tuvio and guards (C2, pg. 170)", text:"Tuvio (Thf5) owns and runs 'The Blazing Bones' gambling den. He offers bets on almost anything from the mundane to the distasteful. He's generally honest, and pays up when he should. His three half-orc associates help ensure that others are as honest as he is."},
            {min:4, max:4, name:"Left Eye Lanny (C4, pg. 177)", text:"Lanny (Thf4) sports a black eye-patch over her right eye. She is reknowned for crafting the finest stabbing weapons, and is a tough negotiator."},
            {min:5, max:5, name:"Scolich (C5, pg. 177)", text:"A smiling, top-less, heavily muscled, tattoo and piereced barbarian from the Kurgan coast. He has happily gone native in Bard's Gate and runs the 'Loose Strand' tattoo parlor, barber shop and piercery."},
            {min:6, max:6, name:"Asa (C6, pg. 177)", text:"Neutral female human druid 3. Asa is a short-haired and boyish looking lady, with a permanently down-beat expression. She runs 'The White Wasp', masquerading as a herbalist while she really produces and sells poisons for the Shadow Masks. She has no choice in this matter."},
            {min:7, max:7, name:"Rhora (C7, pg. 177)", text:"Neutral female half-elf commoner 3 owns and runs the filthy \"Tick's Nest\" flophouse."},
            {min:8, max:8, name:"Valequinn (C8, pg. 178)", text:"Chaotic male elf magic-user 3 runs a flower shop which acts as the front for his celestial ash den in the cellars below. He himself is an addict and may try get to get party addicted."},
            {min:9, max:9, name:"Brin Zweischer (C9, pg. 178)", text:"Neutral male ftr6. A tall, bald, red-beared and unfriendly barbarian who owns the Brin Zwiescher brewery. The dwarves of the Stoneheart Brewery (O3) are his enemies, simply by dint of competing with their superior brews, which he publicly disdains."},
            {min:10, max:10, name:"Filthy Reebo (C10, pg. 178)", text:"Chaotic male human commoner 3. Reebo runs the appaling flop-house, the 'Riverside Rooming House'. People near destitution, and criminals looking to hide out can be found here."},
            {min:11, max:11, name:"Manky Mary (C11, pg. 178)", text:"Neutral female half-orc expert. Usually drunk, extremely fat, and generally unpleasant to her employees, Mary runs \"Manky Mary's Alehouse\"; a shack selling beer on the edge of the canal where it meets the Stoneheart river."},
            {min:12, max:12, name:"Oswold (C12, pg. 179)", text:"Chaotic male thief 6. A run-of-the-mill looking slim man, who used to be an assassin for hire and now runs the 'Bar With No Name' where Red Blade assassins can be hired; if you know the right procedure."},
            {min:13, max:13, name:"Rolnüt Half-Axe", text:"Rolnüt (neutral male human [Northlander] fighter 5) is looking  for his captain, Tvorji (see The Hidden Huscarl, pg. 356)"},
            {min:14, max:14, name:"Lucius Gromp (C13, pg. 179)", text:"Neutral male thief 7 and guildmaster of the Beggars' Guild."},
            {min:15, max:15, name:"Piter Hagglesthorpe IV (BC3, pg. 230)", text:"Neutral male human aristocrat 6. Dockworkers' Guild burgher and wealthy silk merchant, Piter is currently being black-mailed by Dulot Armitage (Appendix A, pg. 263)."},
            {min:16, max:16, name:"F'arin Du'n (Appendix A, pg. 263)", text:"Chaotic male drow assassin 6. A despicable and skilled murderer. Perhaps he is stalking the party. He likes to observe his victims and then approach them in the guise of a close friend by use of his ring of <i>polymorph self</i>.", stats:["FarinDun"]},
            {min:17, max:17, name:"Noria Verilath (Chapter 3, The Red Blades, pg. 83)", text:"Chaotic female human assassin 6 and part of the leadership of the Red Blades assassins' guild.", stats:["NoriaVerilath"]},
            {min:18, max:18, name:"Cylyria (disguised, Appendix A, pg. 262)", text:"Mayor and High Burgess of Bard's Gate. She is currently in disguise.", stats:["Cylyria"]},
            {min:19, max:19, name:"Manisool (Appendix A, pg. 265)", text:"A powerful agent for the cult of Orcus, Manisool masquerades as a shy and secretive magic-user pillar of Bard's Gate's ruling class.", stats:["Manisool"]},
            {min:20, max:20, name:"Tovan (Chapter 25, the Claw of Orcus, pg. 258)", text:"Member of the Cult of Orcus.", stats:["Tovan"]},
            ]
        }
    },
    SpecialH:{
        name:"SpecialH",
        extra:{
            total:12,
            chances:[
            {min:1, max:1, name:"Duloth or associates (Appendix A, pg. 263)", text:"Duloth, Burger of the Wheelwrights' Guild, Underworld Kingpin and a nimble but very obese, curly black haired, begoateed man, or one or more of his lieutenants.", stats:["Duloth","Zalatha","Tranda","Gorar"]},
            {min:2, max:2, name:"Imril (Appendix A, pg. 264)", text:"Leader of the Knights of the Griffin, hero of the city and partner of Cylyria. He may be leading a patrol, investigating strange goings on, or interviewing suspects in regards to an important matter.", stats:["Imril"]},
            {min:3, max:3, name:"Cylyria (Appendix A, pg. 262)", text:"Mayor and High Burgess of Bard's Gate.", stats:["Cylyria"]},
            {min:4, max:4, name:"Borm Morgarm (G11, pg. 146)", text:"Male Dwarf Fighter 6 and Burgher of the Gem Cutters and Jewelers' Guild. Usually to be seen his guild-house, he wears beautiful looking magical armor and wields an impressive battle-axe."},
            {min:5, max:5, name:"Petyr Nordin (H10, pg. 191)", text:"Neutral male human commoner 3 and owner the of 'The Quiet Woman' inn. The Inn is haunted by a female phantom but if anything, she seems to aid his business."},
            {min:6, max:6, name:"Lady Helon (H7, pg. 190)", text:"Lawful female elf magic-user 8, owner of the 'Fur and Velvet' clothes boutique and designer of the clothes there-in."},
            {min:7, max:7, name:"Evan or Naees Corseen (H4, pg. 190)", text:"Evan ( Neutral male MU3) or his wife Naees Corseen (Neutral female human aristocrat 5). Evan was a bard until his voice failed him, and now he is a successful diplomatic for Bard's Gate despite being a generally unpleasant person to be around."},
            {min:8, max:8, name:"Lisial Elmwish (H5, pg. 190)", text:"Neutral female half-elf fighter 4.. She is the daughter of a fallen Foerdewaith noble house and seeks to restore what remains of her family to their former glory. She is interested in hiring adventurers to that end."},
            {min:9, max:9, name:"Whitus Platonus and entourage (H6, pg. 190)", text:"A large, bald toga-wearing man (Neutral male human aristocrat 4) from the city of Freegate. He runs the finest brothel in all of Bard's Gate, the 'Hall of Delights'"},
            {min:10, max:10, name:"Wynstyn or Meda Gallam (H2)", text:"Wynstyn (Lawful male human aristocrat 6) is a famous, and now mostly retired hunter. Meda Gallam (Neutral human female expert 5), his wife is a skilled seamstress and helped stuff his trophies."},
            {min:11, max:11, name:"Brelliar (Appendix A, pg. 262)", text:"A friendly but confused elderly wizard. He does not realised it but he is under the effect of a cursed scroll, which causes his lack of mental clarity."},
            {min:12, max:12, name:"Vermund Durnian (H3)", text:"Neutral male human aristocrat 4. A retired former mining magnate. Vermund is middle-aged and full of life."}
            ]
        }
    },
    SpecialNW:{
        name:"SpecialNW",
        extra:{
            total:8,
            chances:[
            {min:1, max:1, name:"Manisool (Appendix A, pg. 265)", text:"A powerful agent for the cult of Orcus, Manisool masquerades as a shy and secretive magic-user pillar of Bard's Gate's ruling class.", stats:["Manisool"]},
            {min:2, max:2, name:"Samos Kenthi (N2, pg. 200)", text:"Neutral male human expert 4 and owner of 'The Dancing Goblins' Inn."},
            {min:3, max:3, name:"Duloth and associates (Appendix A)", text:"Duloth, Burger of the Wheelwrights' Guild, Underworld Kingpin and a nimble but very obese, curly black haired, begoateed man, or one or more of his lieutenants.", stats:["Duloth","Zalatha","Tranda","Gorar"]},
            {min:4, max:4, name:"Cylyria and associates (in disguise, Appendix A, pg. 262)", text:"Mayor and High Burgess of Bard's Gate. She and her associates are currently in disguise.", stats:["Cylyria"]},
            {min:5, max:5, name:"Ruvuldo (N3, pg. 201)", text:"Neutral male human commoner 3 and owner of \"The Flenser's Rest\". Ruvuldo is a former tannery worker who by dint of hard work and frugality came to open this Inn."},
            {min:6, max:6, name:"Chango (N4, pg. 201)", text:"Neutral male halfling thief 3 and owner of Chango's Bar."},
            {min:7, max:7, name:"Justin Greenwood (N5, pg. 202)", text:"A retired adventurer who now crafts arrows and bolts, including some magical ones. Perhaps he is stalking, or being stalked, by his former love and now vampire, Felicity Bigh.", stats:["JustinGreenwood","FelicityBigh"]},
            {min:8, max:8, name:"Malo Enzeger (N7, pg. 204)", text:"Leading citizen of the North Wall district, reknowned benefactor of the poor, and secret high ranking member of the Cult of Orcus.", stats:["Malo"]}
            ]
        }
    },
    SpecialK:{
        name:"SpecialK",
        extra:{
            total:12,
            chances:[
            {min:1, max:1, name:"Chief of Constables Garrid Garzag (K7, pg. 217)", text:"Leader of the Constabulary for over ten years, Garrid is considered a trusted, hard-nosed pillar of the establishment. In reality Garrid is on Duloth (pg. 263) and the Wheelwrights' pay-roll.", stats:["GarridGarzag"]},
            {min:2, max:2, name:"Captain Pthan Traklos (K7, pg. 217)", text:"Pthan is second in command of the Constabulary, under Chief of Constables Garrid Garzag (K7, pg. 217). He is an ernest, hard-working young officer with a lisp. He is desperate to join the Lyreguard.", stats:["PthanTraklos"]},
            {min:3, max:3, name:"Great Speaker Chu'aine (K6, pg. 217)", text:"Neutral male half-elf aristocrat 6 and Burgher of the Barristers' and Solicitors' Guild."},
            {min:4, max:4, name:"Cylyria (Appendix A, pg. 262)", text:"Mayor and High Burgess of Bard's Gate.", stats:["Cylyria"]},
            {min:5, max:5, name:"Imril (Appendix A, pg. 264)", text:"Leader of the Knights of the Griffin, hero of the city and partner of Cylyria. He may be leading a patrol, investigating strange goings on, or interviewing suspects in regards to an important matter.", stats:["Imril"]},
            {min:6, max:6, name:"Bofred (Appendix A, pg. 262. OT2 pg. 153)", text:"An orator in the fire and brimstome style, Bofred is keen to find volunteers to aid his crusade to return the great shrines of Thyr and Muir to the control of Law.", stats:["Bofred"]},
            {min:7, max:7, name:"Duloth (Appendix A, pg. 263)", text:"Duloth, Burger of the Wheelwrights' Guild, Underworld Kingpin and a nimble but very obese, curly black haired, begoateed man.", stats:["Duloth"]},
            {min:8, max:8, name:"High Sheriff Topfer Brighteye (K5, pg. 217)", text:"The elected High Sheriff for the last eight years. Topfer is is well respected and treats suspects fairly; though he is not push-over.", stats:["TopferBrighteye"]},
            {min:9, max:9, name:"Undersheriff Kotchko (K5, pg. 217)", text:"Senior Sherriff, second in command of the Sheriffs only to High Sheriff Topfer Brighteye (K5, pg. 217)", stats:["Kotchko"]},
            {min:10, max:10, name:"Company of the Silver Spear (M8, pg.126)", text:"A somewhat famous Lawful adventuring band, led by Strathian Silverspear and based out of the 'Inn of Six Candles' (M8, pg. 125). They will brag to anyone they meet of their great deeds, including expeditions into Rappan Athuk itself. There is little evidence of much of this.", stats:["StrathianSilverspear","Gaulin","HenryPigSticker","Mallus","Torthas","TrudyRilling"]},
            {min:11, max:11, name:"The Accursed (BC6, pg. 231)", text:"A rough  and tumble band of Neutral adventurers from the barbaric far north. They wear leathers and animal skins and sport tribal facial tattoes. They perform thunderous concerts weekly in the 'High Note' tavern (BC6, pg. 231).", stats:["Estrellya","Acestrus","Beast","Gato"]},
            {min:12, max:12, name:"Tork (T5, pg. 223)", text:"Dwarven assassin and member of the Red Blades, Tork is often found nursing a tankard in the 'Black Viper' tavern (pg. 223). Maybe he is surveilling a future target, possibly even a member of the party, or observing comings and goings around the Sherrifs' Bailey.", stats:["Tork"]}
            ]
        }
    },
    SpecialBC:{
        name:"SpecialBC",
        extra:{
            total:12,
            chances:[
            {min:1, max:1, name:"Maestro Wilhelm Rovellar (BC2, pg. 230)", text:"Male Half-Elf (MU3) and manager of 'The Masque and Lute' theatre, Bard's Gate's finest theatre. Wilhelm may look hagard and drawn as he has been haunted by the ghost of a murder victim of the drow assassin F'arin Du'n (Appendix A, pg. 263) for some time now."},
            {min:2, max:2, name:"Piter Hagglesthorpe IV (BC3, pg. 230)", text:"Neutral male human aristocrat 6. Dockworkers' Guild burgher and wealthy silk merchant, Piter is currently being black-mailed by Dulot Armitage (Appendix A, pg. 263)."},
            {min:3, max:3, name:"Fathalir (BC4, pg. 231)", text:"Neutral male MU5 mastercraftsman of stringed instruments and owner of 'The Silver Harp' shop. A charming man in his late forties, he is unlikely to agree to craft an instrument for a player character unless they can prove themselves worthy of an instrument of such quality."},
            {min:4, max:4, name:"Wesley (BC4, pg. 231)", text:"Neutral male human magic-user 1 and apprentice to Fathalir (BC4, pg. 231), mastercraftsman of stringed instruments. Wesley is himself an accomplished crafter of stringed instruments."},
            {min:5, max:5, name:"Cryndle (BC4, pg. 231)", text:"Neutral female half-elf magic-user 1 and apprentice to Fathalir (BC4, pg. 231), mastercraftsman of stringed instruments. Cryndle is herself an accomplished crafter of stringed instruments."},
            {min:6, max:6, name:"Carlis Pace (BC5, pg. 231)", text:"Neutral male human magic-user 3 and craftsman of fine wind instruments. 'The Clarion Call' is his shop."},
            {min:7, max:7, name:"Lottobus (BC6, pg. 231)", text:"One of the two bouncers at 'The High Note' Inn (BC6, pg. 231). Lottobus is a wild looking, hairy, but friendly soul.", stats:["Lottobus"]},
            {min:8, max:8, name:"Osius (BC6, pg. 231)", text:"One of the two bouncers at 'The High Note' Inn (BC6, pg. 231). Osius is a smiley, friendly soul with dark skin and a penchant for painting and drawing.", stats:["Osius"]},
            {min:9, max:9, name:"Estrellya (The Accursed, BC6, pg. 231)", text:"Slim of build, almost effeminate looking, with stars tattooed above his eyes and black kohl on his lips, Estrellya is the intelligent and charismatic leader of 'The Accursed (BC6, pg. 231)'; a Neutral adventuring party and musical band.", stats:["Estrellya"]},
            {min:10, max:10, name:"Geldin Lucan (BC7, pg. 232)", text:"Neutral male human magic-user 5 and chief librarian of 'The Written Note' musical library. Geldin has long red hair, shining eyes and look of wisdom. "},
            {min:11, max:11, name:"Umberto Deleon (BC8, pg. 233)", text:"Neutral male half-elf magic-user 2. Umberto is a reknowned painter of frescos, murals and canvas paintings. He is distracted, dishevelled looking, spotted with paint and with a paint brush lost behind an ear."},
            {min:12, max:12, name:"Ferdinand Kincaid (BC9, pg. 233)", text:"Neutral male halfling expert 4. Ferdinand is  a slim, nervous looking halfling who writes heroic tales about the fictional knight <i>Sir Glanic</i>. This has made him much money and some personal dissatisfaction. He may wish to hire an adventurer to pretend to be <i>Sir Glanic</i>, or GM's descretion, he may wish to arrange the death of someone while they impersonate <i>Sir Glanic</i> in an attempt to finally rid himself of his literary mill-stone."}
            ]
        }
    },
    SpecialB:{
        name:"SpecialB",
        extra:{
            total:11,
            chances:[
            {min:1, max:1, name:"Goled (B1, pg. 206)", text:"Neutral male hill dwarf fighter 6, missing 3 fingers on his left hand, owner of the world famous 'Inn on the Bridge' (B1, pg. 206) and member of the Stonerworkers' Guild; who often hold their meetings in his Inn. Goled refuses to sell Brin Zwiescher Ale (C9, pg. 178) as he considers it muck; this may lead to him being the target of intimidation which the party could be witness to."},
            {min:2, max:2, name:"High Harpist Jared Strann (B3, pg. 207)", text:"Cleric and head of the 'Auditorium of the Silver Harp', the Temple of Oghma. Oghma is likely the most popular god in all of Bard's Gate, and the 'Auditorium of the Silver Harp' acts as a performance venue as well as a major temple."},
            {min:3, max:3, name:"Tobias Dricken (B5, pg. 212)", text:"Head of the temple of 'Bacchus-Dionysus', the god of wine and madness. Tobias is a hairy, black-beared man who looks only barely the right side of insanity."},
            {min:4, max:4, name:"Zoey (B6, pg. 212)", text:"Head of the Temple of Freya, Zoey is a kind and brave young woman. She will occassionally adventure with worthy groups and has a burning hatred of the undead.", stats:["Zoey"]},
            {min:5, max:5, name:"Mangus the Lawbreaker (B7, pg. 212)", text:"Neutral male Erskaelosi human cleric of Gromm 6 and leader of the Shrine of Gromm the Thunderer. On a stormy night, lightning strikes may outline the Shrine of Gromm, and perhaps Mangus himself."},
            {min:6, max:6, name:"Levis Prochnov (B9, pg. 213)", text:"Neutral male human expert 2, owner of 'The Pearl Earring' jewelry store, identifier of magical items and some-time fence of stolen goods."},
            {min:7, max:7, name:"Duloth or associates (Appendix A)", text:"Duloth, Burger of the Wheelwrights' Guild, Underworld Kingpin and a nimble but very obese, curly black haired, begoateed man, or one or more of his lieutenants.", stats:["Duloth","Zalatha","Tranda","Gorar"]},
            {min:8, max:8, name:"Brin Zwiescher (C9, pg. 178)", text:"Neutral male ftr6. A tall, bald, red-beared and unfriendly barbarian who owns the Brin Zwiescher brewery. The dwarves of the Stoneheart Brewery (O3) are his enemies, simply by dint of competing with their superior brews, which he publicly disdains."},
            {min:9, max:9, name:"Eldon (B10, pg. 213)", text:"Neutral male halfling expert 5, owner of a small bookstore \"Eldon’s Residence\" and author of muck-racking biographies of heroes, bards and nobility. Perhaps Eldon would be interested in hiring the party to do some of his muck-racking for him, or perhaps he needs protection due to upsetting someone with the stories in one of his many books."},
            {min:10, max:10, name:"Johan the Bastard (T5, pg. 223)", text:"A tale, dangerous looking half-orc. Johan is a member of the Red Blades assassins' guild and can often be found nursing a tankard in the 'Black Viper' tavern (T5, pg. 223). Maybe he is surveilling a future target, possibly even a member of the party, or observing the flow of people across the Bridge in the hope of finding his mark.", stats:["Johan"]},
            {min:11, max:11, name:"Tuvio and guards (C2, pg. 170)", text:"Tuvio (Thf5) owns and runs 'The Blazing Bones' gambling den. He offers bets on almost anything from the mundane to the distasteful. He's generally honest, and pays up when he should. His three half-orc associates help ensure that others are as honest as he is."}
            ]
        }
    },
    SpecialO:{
        name:"SpecialO",
        extra:{
            total:20,
            chances:[
            {min:1, max:1, name:"Johan the Bastard (T5, pg. 223)", text:"A tale, dangerous looking half-orc. Johan is a member of the Red Blades assassins' guild and can often be found nursing a tankard in the 'Black Viper' tavern (T5, pg. 223). Maybe he is surveilling a future target, possibly even a member of the party, or observing the flow of people in the district in the hope of finding his mark.", stats:["Johan"]},
            {min:2, max:2, name:"Imbo the Undying (Appendix A, pg .264)", text:"An immortal vicious killer. He will attempt to appear friendly, non-threatening and may attempt to trick the party in order to more easily murder them.", stats:["Imbo"]},
            {min:3, max:3, name:"Gowan Mckean (O3, pg. 252)", text:"A retired soldier and refugee from the sealing of the Stoneheart clan mountain halls, Gowan came to Bard's Gate 10 years ago with 20 of his followers and founded the 'Stoneheart Mountain Distillery'. Business is going well, though Brin Zwiescher (C9, pg. 178) continues to plot to sabotage him.", stats:["Gowan"]},
            {min:4, max:4, name:"Deng Lo Do (O21, pg. 254)", text:"Properitor of 'The Rising Dragon' restaurant which sells exotic fare from the far west. In reality Deng Log Do is more interested in his slave trading and worship of Set.", stats:["DengLoDo"]},
            {min:5, max:5, name:"Reingolde Tumsen (O1, pg .250)", text:"Neutral male human fighter 4 and owner of \"Reingolder's Bar\". Reingolde is a retired soldier and conisseur of alcohols. He may challenge the party to take his 'Reingolde Challenge', a famously tough drinking challenge, or he may wish to hire the party to source him difficult to obtains alcohols."},
            {min:6, max:6, name:"Hener Roundshield (O2, pg. 251)", text:"Neutral male human fighter 2, owner of 'The Brass Shield' and craftsman of fine wooden bucklers and small shields."},
            {min:7, max:7, name:"Luc O'Toole (O4, pg .252)", text:"Neutral male Daanite human fighter 4. A frightening sight in blood stained smock and carrying a huge cleaver, this large and pleasant man is a butcher and owner of \"Koole’s Butcher Shop.\""},
            {min:8, max:8, name:"Utello (TW10)", text:""},
            {min:9, max:9, name:"Horton McKaigh (O7, pg. 252)", text:"Neutral male halfling expert 2, owner of 'A little off the top' barbershop specialising in Dwarves and Halflings. Horton will also pull teeth with the aid of his two halfling assistants."},
            {min:10, max:10, name:"Shylor the Augurer (O8, pg. 252)", text:"Neutral male human commoner 3 and accurate foreteller of the future through haruspicy, the study of animal entrails. Shylor charges 200 GP for the equivalent of a <i>Legend Lore</i> spell, but prefers not to interpret the results of his visions himself."},
            {min:11, max:11, name:"Dubois Montagno (O9, pg. 253)", text:"Neutral male human aristocrat 4, major fur-trader, and secret spy for the imperial court of the Kingdoms of Foere in Courghais."},
            {min:12, max:12, name:"Lasker (Night, M9, pg. 128)", text:"Chaotic male dwarf thief 3 and a renknowned pie-maker. Unbeknownst to all, his pies often contain abducted children and he is stalking the night hunting them now.", stats:["Lasker"]},
            {min:13, max:13, name:"Vagn (O12, pg. 253)", text:"Chaotic male human cleric of Orcus 3, and well regarded crafter of paper and vellum. Only his trusted associates in the Cult of Orcus know his real leanings and he is at pains to keep them secret."},
            {min:14, max:14, name:"Hauk (O14, pg. 253)", text:"Neutral male half-orc fighter 4, former miner, and expert in demolition of buildings via undermining. He has been threatened by Bogdan Rockroot (UH5, pg. 194) of the Underbuilders Union who does not appreciate the competition."},
            {min:15, max:15, name:"Gramma Poppy (O15, pg. 253)", text:"Neutral female halfling adept 1, and head of a family of halflings who render conifer trees into tar and pitch for use by boatmen and roofers. She does not know but one of her new clients is an evil wizard who intends to create a tar golem with their product."},
            {min:16, max:16, name:"Caagrah (O16, pg. 253)", text:"Chaotic male halfling [former goblin] expert 1. Transformed by a curse and unable to return home to his goblin kin, Caagrah trains intelligent and vicious dogs and wolves for sale."},
            {min:17, max:17, name:"Ka'Zic (O18, pg. 253)", text:"Lawful male human ranger 5 and famous - in certain circles - tracker of fugitives and the missing. Ka'Zic is missing his right ear and his face is heavily scared. He often aids the Lyreguard in their search for criminals."},
            {min:18, max:18, name:"Renald \"The Falcon\" Corering (Lawful male human ranger 6) and Jorgan Corering (Neutral male human druid 7) (O19, pg. 254)", text:"twin brothers who run 'The Feathered Herald' avian messenger service."},
            {min:19, max:19, name:"Mistress Wu (Neutral female Xi'en human monk 6, O20, pg. 254)", text:"Owner of the 'Dreams of Feng' steam-bath and spa, which is a front for her sale of blue lotus blossom. She also sells her more vulnerable patrons into slavery."},
            {min:20, max:20, name:"Garret the Wanderer (Neutral male halfling expert 4, O22, pg. 254)", text:"Owner of the 'Quarter House' shop specialising in correctly sized goods for Halflings and Dwarves."}]
        }
    },
    SpecialSR:{
        name:"SpecialSR",
        extra:{
            total:9,
            chances:[
            {min:1, max:1, name:"Jadeyn Roan (SR3, pg. 118)", text:"Retired Waymarch cavalry officer and now head of the Street Thugs Gang; a simple group of thugs who shake-down the business of Stable Row and rob its citizens.", stats:["JadeynRoean"]},
            {min:2, max:2, name:"Knotaloke (SR4, pg. 119)", text:"Knotaloke is encountered. She is willing to hire characters to help her move wild horses to her stables. She also sells the finest horses in Bard's Gate.", stats:["Knotaloke"]},
            {min:3, max:3, name:"Johan the Bastard (T5, pg. 223)", text:"A tale, dangerous looking half-orc. Johan is a member of the Red Blades assassins' guild and can often be found nursing a tankard in the 'Black Viper' tavern (T5, pg. 223). Maybe he is surveilling a future target, possibly even a member of the party, or observing the flow of people in the district in the hope of finding his mark.", stats:["Johan"]},
            {min:4, max:4, name:"Oberon Thanlaus (Chapter 1, Farseekers of Twilight, pg. 79)", text:"Oberon Thanalaus, master of the Farseekers of Twilight is encountered", stats:["OberonThanalaus"]},
            {min:5, max:5, name:"Rankir (Chapter 1, Longhunters, pg. 80)", text:"Rankir, Master Hunter of the Longhunters is encountered.", stats:["Rankir"]},
            {min:6, max:6, name:"Vol (Chapter 1, The Red Blades, pg. 83)", text:"Part of the leadership of the Red Blades assassins' guild.", stats:["Vol"]},
            {min:7, max:7, name:"Brin Zwiescher (C9, pg. 178)", text:"Neutral male ftr6. A tall, bald, red-beared and unfriendly barbarian who owns the Brin Zwiescher brewery. The dwarves of the Stoneheart Brewery (O3) are his enemies, simply by dint of competing with their superior brews, which he publicly disdains."},
            {min:8, max:8, name:"The Accursed (BC6, pg. 231)", text:"A rough  and tumble band of Neutral adventurers from the barbaric far north. They wear leathers and animal skins and sport tribal facial tattoes. They perform thunderous concerts weekly in the 'High Note' tavern (BC6, pg. 231).", stats:["Estrellya","Acestrus","Beast","Gato"]},
            {min:9, max:9, name:"Company of the Silver Spear (M8)", text:"A somewhat famous Lawful adventuring band, led by Strathian Silverspear and based out of the 'Inn of Six Candles' (M8, pg. 125). They will brag to anyone they meet of their great deeds, including expeditions into Rappan Athuk itself. There is little evidence of much of this.", stats:["StrathianSilverspear","Gaulin","HenryPigSticker","Mallus","Torthas","TrudyRilling"]}
            ]
        }
    },
    SpecialT:{
        name:"SpecialT",
        extra:{
            total:12,
            chances:[
            {min:1, max:1, name:"Fat Julie and bodyguards (T1, pg. 220)", text:"Halfling owner of the thieves' quarter \"Fortune's Fool\" gambling establishment, and some of his many half-orc bouncers, casino rogues or magic using thugs."},
            {min:2, max:2, name:"Chadwick (Neutral male human expert 5, T2, pg. 222)", text:"Owner of 'The Silver Serpent' Inn in the thieves' quarter. A heavy-set man who has seen much but knows not to talk about most of it. He can be a great source of information if well paid."},
            {min:3, max:3, name:"Duloth and associates (Appendix A)", text:"Duloth, Burger of the Wheelwrights' Guild, Underworld Kingpin and a nimble but very obese, curly black haired, begoateed man, and one or more of his lieutenants.", stats:["Duloth","Zalatha","Tranda","Gorar"]},
            {min:4, max:4, name:"Tomokos (Neutral male high elf thief 5, T4, pg. 223)", text:"Manager of 'The Hidden Lady' Inn and secret safe-house for the Shadow Masks."},
            {min:5, max:5, name:"Chord (T3, pg. 223)", text:"An imposing former wrestler and bouncer at 'The Bloody Boar' Inn. Along with his boss, the Inn's owner Vig One-Tusk, Chord keeps things somewhat peaceful at the Inn."},
            {min:6, max:6, name:"Scars (Neutral male human thief 6, T5, pg. 223)", text:"Manager of 'The Black Viper' tavern (pg. 223) on behalf of the Red Blades. Scars doesn't ask any questions and doesn't like people who do."},
            {min:7, max:7, name:"Natala (Neutral female human assassin 4, T5, pg. 223)", text:"Beautiful and deadly, Natala is a barmaid at 'The Black Viper' (pg. 223) tavern and also a Red Blade assassin."},
            {min:8, max:8, name:"Zarabeshe (Neutral female human assassin 4, T5, pg. 223)", text:"Beautiful and deadly, Zarabeshe is a barmaid at 'The Black Viper' (pg. 223) tavern and also a Red Blade assassin."},
            {min:9, max:9, name:"Rath Kata (T6, pg. 223)", text:"High Priest of Zors' temple, the \"Shrine of Suffering's Ease\", Rath Kata is a weather-beaten, thin old man in decrepit robes. He is a champion of civil rights and does his best with the little income from his number's racket (C13, area 8, pg. 183).", stats:["RathKata"]},
            {min:10, max:10, name:"Old One Tooth (Neutral female human commoner 1, T8, pg. 224)", text:"Owner of 'The Inn of the Fallen Tree'. A decrepit old lady, with only one remaining tooth. She may complain about her strange guest, Krants (pg. 224), who won't leave his room and the constant stench of garlic that surrounds it."},
            {min:11, max:11, name:"Mistress Honeysuckle (Neutral female Xi'en human expert 5, T9, pg. 224)", text:"Owner of 'The Cta of Nine' shop, crafter of fine whips, and exemplar in their use."},
            {min:12, max:12, name:"Cylyria (disguised, Appendix A, pg. 262)", text:"Mayor and High Burgess of Bard's Gate. She is currently in disguise.", stats:["Cylyria"]}
            ]
        }
    },
    Zombie:
    {
        name:"Zombies",
        text:"A cleric or necromancer of Orcus created these animated corpses of criminals and set them loose within the city to watch the chaos. The encounter is with !d[2d4] zombies.",
        stats:["Zombie"]
    },
    Mohrg:
    {
        name:"Mohrg",
        text:"The animated corpse of a mass murderer or similarly horrific villain, who died without atoning for their crimes. The mohrg is accompanied by !d[1d6] zombie(s) which are under its control.",
        stats:["Mohrg", "Zombie"]
    },
    Wight:
    {
        name:"Wight",
        text:"A wight stalks the party.",
        stats:["Wight"]
    },
    Sage:
    {
        name:"Sage",
        text:"A learned sage (Neutral male or female expert 2-4) passes by."
    }
}

var sublists = {
    SpecialS:{sublist:true},
    SpecialUndead:{sublist:true},
    Monsters:{sublist:true},
    TentCityDay:{sublist:true}
}

var enc = {
//    "All": {hide:true, name:"All", items:[]},
    "BC_D":{name:"Bard's College (Day)",items:[e.CityWatch, e.LocalWatchBC, e.Merchant, e.TroupOfPerformers, e.Pickpocket, e.Rake, e.Dandy, e.Author, e.Artist, e.Carriage, e.Debutante, e.Bard, e.Gambler, e.FoodVendor, e.CivicOfficial, e.WinePeddler, e.Aristocrat, e.Scribe, e.Sage, e.SpecialBC ]},
    "BC_N":{name:"Bard's College (Night)",items:[e.TroupOfPerformers, e.LocalWatchBC, e.WinePeddler, e.CityWatch, e.FoodVendor, e.Rake, e.Dandy, e.Author, e.Shyster, e.Gambler, e.Pickpocket, e.Shadowmasks, e.CivicOfficial, e.Drunk, e.Carriage, e.Burglar, e.Bard, e.Streetwalker, e.Courtesan, e.SpecialBC ]},
    "BM":{name:"Black Market", items:[ e.Spellcaster, e.BlackMarketWheelwrightThugBand, e.BlackMarketShadowmaskBand, e.Slavers, e.RedBladeInitiate, e.TemporaryBlackMarketStall, e.TemporaryBlackMarketStall, e.FoodVendorBlackMarket, e.Gambler, e.BlackMarketHarlots, e.BlackMarketPickpocket, e.WinePeddler]},
    "B_D":{name:"Bridge District (Day)", items:[e.LocalWatchD, e.Riverfolk, e.WinePeddler, e.Merchant, e.Cleric, e.Pilgrims, e.Wheelwright, e.Paladin, e.TempleGuard, e.Laborers, e.CivicOfficial, e.Lawyer, e.Pickpocket, e.FoodVendor, e.SculleryMaid, e.Artist, e.TroupOfPerformers, e.PrisonerWagon, e.Aristocrat, e.SpecialB]},
    "B_N":{name:"Bridge District (Night)", items:[e.CityWatch, e.Riverfolk, e.Sailor, e.Harlot, e.Gambler, e.Pilgrims, e.Wheelwright, e.Cleric, e.TempleGuard, e.CivicOfficial, e.Dandy, e.AdventuringBand, e.Shadowmasks, e.Streetwalker, e.Burglar, e.Author, e.Shadowmasks, e.Carriage, e.Courtesan, e.SpecialB]},
    "C_D": {name:"Canal District (Day)", items: [e.SheriffsPatrol, e.Fisherman, e.Gondolier, e.Pickpocket, e.LocalBully, e.Shadowmasks, e.Beggar, e.Harlot, e.Laborers, e.Gambler, e.Riverfolk, e.Merchant, e.WinePeddler, e.FoodVendor, e.Enforcer, e.SculleryMaid, e.Sailor, e.AdventuringBand, e.SewerCleaner, e.SpecialC ]},
    "C_N": {name:"Canal District (Night)", items:[e.Shadowmasks, e.Wheelwright, e.Gondolier, e.Drunk, e.Beggar, e.Harlot, e.Streetwalker, e.Pickpocket, e.LocalBully, e.Enforcer, e.Gambler, e.NurseMary, e.Riverfolk, e.BountyHunter, e.PipersGuild, e.Skeletons, e.RedBladeInitiate, e.BanditGang, e.StreetUrchin, e.SpecialC ]},
    "CoA_D":{name:"City of Ashes (Day)", items:[e.Mourner, e.Cleric, e.BanditGang, e.Undertaker, e.Bard, e.Charlatan, e.Shyster, e.Funeral, sublists.SpecialUndead]},
    "CoA_N":{name:"City of Ashes (Night)", items:[e.Mourner, e.BanditGang, e.Goblins, e.Undertaker, e.BatSwarm, e.Drunk,e.GraveRobbers, sublists.SpecialUndead]},
    "CoO":{name:"Claw of Orcus", items:[e.Cleric, e.Paladin, e.Goblins, e.BanditGang, e.Fighter, e.Mourner, e.BlackOrcs, e.Wizard, e.Gargoyle, sublists.SpecialUndead]},
    "D_D": {name:"Docks (East & West, Day)", items:[ e.SheriffsPatrol, e.Fisherman, e.Gondolier, e.Pickpocket, e.LocalBully, e.Shadowmasks, e.Beggar, e.Harlot, e.Laborers, e.Gambler, e.Riverfolk, e.Merchant, e.WinePeddler, e.FoodVendor, e.Enforcer, e.SculleryMaid, e.Sailor, e.AdventuringBand, e.SewerCleaner, e.SpecialD]},
    "D_N": {name:"Docks (East & West, Night)", items:[e.Shadowmasks, e.Wheelwright, e.Gondolier, e.Drunk, e.Beggar, e.Harlot, e.Streetwalker, e.Pickpocket, e.LocalBully, e.Enforcer, e.Gambler, e.Sailor, e.AdventuringBand, e.BountyHunter, e.CanalWorker, e.Shyster, e.Riverfolk, e.BanditGang, sublists.Monsters, e.SpecialD]},
    "G_D": {name:"Guild District (Day)", items:[ e.SheriffsPatrol, e.LocalWatchG, e.LyreguardPatrol, e.Guildsman, e.Laborers, e.TrashCollector, e.CivicOfficial, e.Merchant, e.ArcaneStudent, e.Wizard, e.Fighter, e.Pickpocket, e.Aristocrat, e.Paladin, e.Cleric, e.SculleryMaid, e.Pilgrims, e.Bard, e.TroupOfPerformers, e.SpecialG]},
    "G_N": {name:"Guild District (Night)", items:[ e.AdventuringBand, e.LocalWatchG, e.Drunk, e.Harlot, e.Streetwalker, e.Shadowmasks, e.Aristocrat, e.Rake, e.Guildsman, e.Dandy, e.MercenaryBand, e.ArcaneStudent, e.Wizard, e.Cleric, e.Laborers, e.RedBladeInitiate, e.CivicOfficial, e.SheriffsPatrol, e.Pickpocket, e.SpecialG ]},
    "H_D":{name:"The Hill (Day)", items:[e.Merchant, e.LocalWatchTH, e.SculleryMaid, e.Valet, e.Guildsman, e.Dandy, e.Fighter, e.Paladin, e.Wizard, e.ArcaneStudent, e.Rake, e.Aristocrat, e.CityWatch, e.Carriage, e.Butler, e.BodyGuard, e.Herald, e.Cleric, e.SpecialH]},
    "H_N": {name:"The Hill (Night)", items:[e.LocalWatchTH, e.Aristocrat, e.Valet, e.Paladin, e.Wizard, e.ArcaneStudent, e.Rake, e.CivicOfficial, e.Carriage, e.Butler, e.Herald, e.Dandy, e.Drunk, e.Bard, e.Debutante, e.Cleric, e.Burglar, e.Lovers, e.SpecialH]},
    "K_D":{name:"The Keep (Day)",items:[e.CityWatch, e.LyreguardPatrol, e.FoodVendor, e.Merchant, e.Lawyer, e.CivicOfficial, e.Execution, e.Aristocrat, e.SheriffsPatrol, e.PrisonerWagon, e.Guildsman, e.Carriage, e.Herald, e.Paladin, e.Cleric, e.Wizard, e.ArcaneStudent, e.Fighter, e.Scribe, e.SpecialK]},
    "K_N":{name:"The Keep (Night)",items:[e.CityWatch, e.FoodVendor, e.Merchant, e.Lawyer, e.SheriffsPatrol, e.PrisonerWagon, e.CivicOfficial, e.Aristocrat, e.Guildsman, e.Carriage, e.Herald, e.Drunk, e.Beggar, e.Cleric, e.Scribe, e.Paladin, e.BountyHunter, e.MercenaryBand, e.Wizard, e.SpecialK]},
    "M_D": {name:"Market District (Day)", items:[ e.SheriffsPatrol, e.WallWatcher, e.LyreguardPatrol, e.LocalWatchM, e.WanderingMonk, e.FoodVendor, e.Grocer, e.WinePeddler, e.Pickpocket, e.TroupOfPerformers, e.Paladin, e.Fighter, e.ArcaneStudent, e.Merchant, e.SculleryMaid, e.CivicOfficial, e.Pilgrims, e.Laborers, e.TrashCollector, e.SpecialMD ]},
    "M_N": {name:"Market District (Night)", items:[e.SheriffsPatrol, e.LocalWatchM, e.Streetwalker, e.Drunk, e.MercenaryBand, e.AdventuringBand, e.Mugger, e.Shyster, e.Gambler, e.Shadowmasks, e.RedBladeInitiate, e.Bard, e.Wizard, e.Aristocrat, e.LocalBully, e.CivicOfficial, e.Beggar, e.Harlot, e.Pickpocket, e.SpecialMD ]},
    "Monsters":{name:"Monsters", items:[e.Ghouls, e.Zombie, e.Mohrg, e.Skeletons, e.Wraith, e.Spectre, e.Wraith, e.Ghost, e.Shadow, e.Ghasts, e.Otyugh, e.Mimic, e.Elemental, e.Familiar]},
    "NW_D":{name:"North Wall (Day)", items:[e.Merchant, e.FoodVendor, e.WallWatcher, e.Caravan, e.Shyster, e.TrashCollector, e.Wheelwright, e.Pickpocket, e.Rake, e.Dandy, e.SculleryMaid, e.Fighter, e.ArcaneStudent, e.Artist, e.SculleryMaid, e.CivicOfficial, e.Pilgrims, e.Laborers, e.CivicOfficial, e.SpecialNW]},
    "NW_N":{name:"North Wall (Night)", items:[e.Merchant, e.WinePeddler, e.WallWatcher, e.MerchantEncampment, e.Drunk, e.Harlot, e.Wheelwright, e.Burglar, e.Rake, e.Dandy, e.Gambler, e.Bard, e.Wizard, e.Aristocrat, e.LocalBully, e.CivicOfficial, e.Beggar, e.Streetwalker, sublists.Monsters, e.SpecialNW ]},
    "OT_D": {name:"Old Temple District (Day)", items:[ e.LyreguardPatrol, e.SheriffsPatrol, e.Cleric, e.Pilgrims,e.Paladin, e.WinePeddler, e.FoodVendor, e.Charlatan, e.Beggar, e.Aristocrat, e.Pickpocket, e.Heretic, e.TroupOfPerformers, e.CivicOfficial, e.TempleGuard, e.TrashCollector, e.Merchant, e.AdventuringBandWithDead, e.Laborers, e.SpecialOT ]},
    "OT_N": {name:"Old Temple District (Night)", items:[e.SheriffsPatrol, e.Cleric, e.Pilgrims, e.Paladin, e.Beggar, e.Drunk, e.Shyster, e.Gambler, e.Aristocrat, e.TempleGuard, e.CivicOfficial, e.Harlot, e.Streetwalker, e.Heretic, e.Pickpocket, e.WinePeddler, e.FoodVendor, e.Shadowmasks, e.AdventuringBandWithDead, e.SpecialOT ]},
    "O_D":{name:"Outer Quarter (Day)", items:[e.Beggar, e.Merchant, e.Caravan, e.MercenaryBand, e.LocalWatchO, e.SheriffsPatrol, e.Barbarian, e.Pickpocket, e.StreetUrchin, e.MercenaryBand, e.Wizard, e.ArcaneStudent, e.WallWatcher, e.Cleric, e.FoodVendor, e.CivicOfficial, e.TrashCollector, e.TroupOfPerformers, e.WinePeddler, e.SpecialO]},
    "O_N":{name:"Outer Quarter (Night)", items:[e.Beggar, e.Drunk, e.Harlot, e.Streetwalker, e.LocalWatchO, e.Pickpocket, e.Burglar, e.WallWatcher, e.StreetUrchin, e.MercenaryBand, e.Ghouls, e.Shyster, e.Fighter, e.Barbarian, e.CivicOfficial, e.Gambler, e.Wheelwright, e.Shadowmasks, e.BountyHunter, e.SpecialO]},
    "Sewers":{name:"Sewers", items:[e.BanditGang, e.Beggar, e.SewerCleaner, e.Goblins, e.Ooze, e.Blockage, e.GiantRats, e.Shadowmasks, e.AdventuringBand, e.Ratmen, e.Kobolds, e.Lycanthrope, e.VampireSpawn, e.Ghouls, e.Skeletons, e.BatSwarm, e.Centipede, e.Spider/* No SRD stats for, e.Choker */, sublists.SpecialS]},
    "SR_D":{name:"Stable Row (Day)", items:[e.Caravan, e.MercenaryBand, e.Merchant, e.FoodVendor, e.WinePeddler, e.HorseTrader, e.HorseRace, e.Farseeker, e.Herdsman, e.FurTrader, e.FurTrader, e.Cleric, e.Pickpocket, e.Farmer, e.Longhunter, e.Pilgrims, e.AdventuringBand, e.Charlatan, e.TroupOfPerformers, e.SpecialSR]},
    "SR_N":{name:"Stable Row (Night)", items:[e.MerchantEncampment, e.MercenaryEncampment, e.FoodVendor, e.Farmer, e.Herdsman, e.TentRevival, e.Pickpocket, e.RefugeeEncampment, e.AdventuringBand, e.Shyster, e.AleTent, e.BanditGang, e.LyreguardPatrol, e.VampireSpawn, e.Druids, e.Goblins, e.AdventuringBand, sublists.Monsters, e.SpecialSR]},
    "TC_D": {name:"Tent City (Day)", items:[ e.LocalWatchTC, e.Druids, e.Farseeker, e.HorseTrader, e.HorseRace, e.WinePeddler, e.LyreguardPatrolTentCity, e.Caravan, e.CentaurBand, e.FurTrader, e.WanderingMonk, e.Halforc, e.Pickpocket, e.MercenaryBand, e.Longhunter, e.Pilgrims, e.FoodVendor, e.Charlatan, e.Shyster, e.TroupOfPerformers, e.SpecialTC ]},
    "TC_N": {name:"Tent City (Night)", items:[ e.Drunk, e.MerchantEncampment, e.BarbarianEncampment, e.MercenaryEncampment, e.Minstrel, e.Mugger, e.BanditGang, e.TentRevival, e.Gambler, e.Shyster, e.AleTent, sublists.TentCityDay, e.LyreguardPatrolTentCity, e.Lycanthrope, e.VampireSpawn, e.Druids, e.Goblins, e.AdventuringBand, e.WillOTheWisp, e.SpecialTC ]},
    "T_D":{name:"Thieves' Quarter (Day)", items:[e.CityWatch, e.LocalWatchT, e.Merchant, e.Wheelwright, e.Aristocrat, e.Carriage, e.Pickpocket, e.TroupOfPerformers, e.Gambler, e.FoodVendor, e.Rake, e.Author, e.Artist, e.Herald, e.StreetUrchin, e.Debutante, e.SheriffsPatrol, e.Lovers, e.AdventuringBand, e.SpecialT]},
    "T_N":{name:"Thieves' Quarter (Night)", items:[e.CityWatch, e.LocalWatchT, e.Merchant, e.Wheelwright, e.Drunk, e.Carriage, e.Pickpocket, e.Bard, e.Gambler, e.NurseMary, e.Lovers, e.Dandy, e.Shadowmasks, e.BlackBrotherhoodMember, e.RedBladeInitiate, e.Debutante, e.Burglar, e.Beggar, e.AdventuringBand, e.SpecialT]},
    "TW_D":{name:"Turlin's Well (Day)", items:[e.Merchant, e.WinePeddler, e.LocalWatchTW, e.SheriffsPatrol, e.Rake, e.AdventuringBand, e.CivicOfficial, e.Carriage, e.Dandy, e.TroupOfPerformers, e.Pickpocket, e.Guildsman, e.Wheelwright, e.Aristocrat, e.Pilgrims, e.Artist, e.Shyster, e.FoodVendor, e.TrashCollector, e.SpecialTW]},
    "TW_N":{name:"Turlin's Well (Night)", items: [e.Merchant, e.WinePeddler, e.LocalWatchTW, e.SheriffsPatrol, e.Drunk, e.AdventuringBand, e.Streetwalker, e.Dandy, e.Bard, e.Courtesan, e.Burglar, e.Laborers, e.Shadowmasks, e.Lovers, e.Gambler, e.Debutante, e.Artist, e.Carriage, e.Ghouls, e.SpecialTW]},
    "UH": {name:"Underhill", items:[e.HaflingPickpocket, e.DwarfPolitician, e.DwarfTravelers, e.HalflingBand, e.BeerVendor, e.CheeseVendor, e.LocalWatchUH, e.GameOfChance]},
    "SpecialUndead":{hide:true, name:"Special Undead", items:[e.Ghouls, e.Zombie, e.Mohrg, e.Skeletons, e.Wraith, e.Spectre, e.Wraith, e.Ghost, e.Shadow, e.Ghasts]},
    "SpecialS":{hide:true, name:"SpecialS", items:[e.Burglar, e.BanditGang, e.Shadowmasks, e.RedBladeInitiate, e.BountyHunter, e.Wheelwright, e.Ghost, e.Wight, e.Wraith, e.FelicityBigh]},
};

// now that the encounter table exists we can setup the rest of the sublist references
sublists.SpecialUndead.list = enc.SpecialUndead;
sublists.SpecialS.list = enc.SpecialS;
sublists.Monsters.list = enc.Monsters;
sublists.TentCityDay.list = enc.TC_D;
