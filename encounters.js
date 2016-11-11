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
    Shaman:"Shaman: HD 2; HP 9; AC 9[10]; Atk club (1d4); Move 12; Save 15; AL N; CL/XP 3/60;<br>Special: spells (2).<br>Spells: 1st—cure light wounds, protection from evil. Equipment: robes, bone-totem staff.",
    Bouncer:"Bouncer: HP 6; AC 7[12]; Atk club (1d4); Move 12; Save 14; AL C; CL/XP 1/15.<br>Special: none.<br>Equipment: leather armor, club, 1d4cp.",
    Burglar:"Burglar (Thf3): HP 8; AC 6[13]; Atk short sword (1d6) or dagger (1d4); Move 12; Save 12; AL C; CL/XP 3/60;<br>Special: +1 to hit dexterity bonus, –1[+1] to AC dexterity bonus, +2 on saving throws vs. devices, backstab (x2), thieving skills.<br>Thieving Skills: Climb 87%, Tasks/Traps 25%, Hear 4 in 6, Hide 20%, Silent 30%, Locks 20%.<br>Equipment: leather armor, short sword, dagger, thieves' tools, 1d10gp.",
    Cutpurse:"Cutpurse (Thf2): HP 5; AC 7[12]; Atk dagger (1d4); Move 12; Save 14; AL N; CL/XP 3/60;<br>Special: +2 on saving throws vs. devices, backstab (x2), thieving skills.<br>Thieving Skills: Climb 86%, Tasks/Traps 20%, Hear 3 in 6, Hide 15%, Silent 25%, Locks 15%.<br>Equipment: leather armor, 3 daggers, thieves' tools, 2d4sp.",
    Robber:"Robber (Thf1): HP 3; AC 7[12]; Atk dagger (1d4); Move 12; Save 15; AL N; CL/XP 1/15;<br>Special: +2 on saving throws vs. devices, backstab (x2), thieving skills.<br>Thieving Skills: Climb 85%, Tasks/Traps 15%, Hear 3 in 6, Hide 10%, Silent 20%, Locks 10%.<br>Equipment: leather armor, dagger, 1d4cp.",
    Pickpocket:"Pickpocket (Thf3): HP 7; AC 7[12]; Atk club (1d4) or dagger (1d4); Move 12; Save 12; AL N; CL/XP 3/60;<br>Special: +2 on saving throws vs. devices, backstab (x2), thieving skills.<br>Thieving Skills: Climb 87%, Tasks/Traps 25%, Hear 4 in 6, Hide 20%, Silent 30%, Locks 20%.<br>Equipment: leather armor, club, dagger.",
    WheelwrightTough:"Wheelwright Tough (Ftr1,Thf1): HP 5; AC 7[12]; Atk club (1d4) or dagger (1d4); Move 12; Save 14; AL C; CL/XP 2/30.<br>Special: +2 on saving throws vs. devices, backstab (x2), thieving skills.<br>Thieving Skills: Climb 85%, Tasks/Traps 15%, Hear 3 in 6, Hide 10%, Silent 20%, Locks 10%.<br>Equipment: leather armor, club, dagger.",
    WheelwrightCollector:"Wheelwright Collector (Thf3): HP 8; AC 6[13]; Atk short sword (1d6) or dagger (1d4); Move 12; Save 12; AL C; CL/XP 3/60;<br>Special: +1 to hit dexterity bonus, –1[+1] to AC dexterity bonus, +2 on saving throws vs. devices, backstab (x2), thieving skills.<br>Thieving Skills: Climb 87%, Tasks/Traps 25%, Hear 4 in 6, Hide 20%, Silent 30%, Locks 20%.<br>Equipment: leather armor, short sword, dagger, thieves' tools, 1d10gp.",
    CaravanCaptain:"Caravan Captain (Ftr2): HP 10; AC 6[13]; Atk club (1d4) or sling (1d4); Move 12; Save 13; AL L; CL/XP 2/30.<br>Special: multiple attacks (2) vs. creatures with 1 or fewer HD.<br>Equipment: ring mail, club, sling, 10 bullets, 2d4sp",
    CaravanGuard:"Caravan Guard: HD 1; AC 7[12]; Atk longsword (1d8) or spear (1d6); Move 12; Save 17; AL N; CL/XP 1/15;<br>Special: none.<br>Equipment: leather armor, longsword, spear, 2d12cp.",
    Centaur:"Centaur: HD 4; AC 5[14] or 4[15] with shield; Atk 2 kicks (1d6) and weapon; Move 18; Save 13; AL N; CL/XP 4/120;<br>Special: none.",
    SilfusSharphoof:"Silfus Sharphoof, Male Centaur (Rgr2): HD 6; HP 31; AC 5[14]; Atk 2 kicks (1d6) and +1 lance (2d4+2) or longbow x2 (1d6); Move 18; Save 11; AL L; CL/XP 7/600;<br>Special: +2 to damage vs giants and goblinoids, alertness, tracking.<br>Equipment: +1 lance, longbow, 20 arrows.",
    GiantCentipede:"Giant Centipede (small, lethal): HD 1d2 hp; AC 9[10]; Atk bite (0 plus poison); Move 13; Save 18; AL N; CL/XP 1/15;<br>Special: poison bite (+4 save or die).",
    GiantRat:"Giant Rat: HD 1d4hp; AC 7[12]; Atk bite (1d3); Move 12; Save 18; AL N; CL/XP A/5;<br>Special: 2 of the rats are diseased.",
    CentipedeSwarm:"Centipede Swarm: HD 3; AC 7 [12]; Atk bites (1hp plus non-lethal poison); Move 3; Save 14; AL N; CL/XP 4/120;<br>Special: immune to all but blunt weapons, non-lethal poison (2d6 points of damage).",
    Charlatan:"Charlatan (Thf1): HP 2; AC 9[10]; Atk club (1d4); Move 12; Save 15; AL N; CL/XP 1/15;<br>Special: +2 on saving throws vs. devices, backstab (x2), thieving skills.<br>Thieving Skills: Climb 85%, Tasks/Traps 15%, Hear 3 in 6, Hide 10%, Silent 20%, Locks 10%.<br>Equipment: club, 3d4cp.",
    Dandy:"Dandy, Male or Female (Ftr3): HP 15; AC 6[13]; Atk rapier (1d6); Move 12; Save 12; AL N; CL/XP 3/60.<br>Special: +1 to hit dexterity bonus, –1[+1] to AC dexterity bonus, multiple attacks (3) vs. creatures with 1 or fewer HD, parry (–2 to enemy's attacks).<br>Equipment: leather armor, rapier (short sword), dandy clothes.",
    DogSoldierSneak:"Dog Soldier Sneak (Thf3): HP 7; AC 7[12]; Atk club (1d4) or dagger (1d4); Move 12; Save 12; AL N; CL/XP 3/60;<br>Special: +2 on saving throws vs. devices, backstab (x2), thieving skills.<br>Thieving Skills: Climb 87%, Tasks/Traps 25%, Hear 4 in 6, Hide 20%, Silent 30%, Locks 20%.<br>Equipment: leather armor, club, dagger.",
    DogSoldierWarrior:"Dog Soldier Warrior (Ftr2): HP 13; AC 6[13]; Atk club (1d4) or sling (1d4); Move 12; Save 13; AL N; CL/XP 2/30.<br>Special: +1 to hit dexterity bonus, –1[+1] to AC dexterity bonus, +1 hp per die due to high constitution, multiple attacks (2) vs. creatures with 1 or fewer HD.<br>Equipment: leather armor, club, sling, 10 bullets, 2d4sp.",
    DogSoldierMU:"Dog Soldier Magic-User's Apprentice (MU1): HP 3; AC 8[11]; Atk staff (1d6); Move 12; Save 15; AL N; CL/XP 2/30;<br>Special: +2 on saves vs. spells, spells (1).<br> Spells: 1st—sleep.<br>Equipment: staff, spellbook.",
    Druid:"Druid (Drd4): HP 16; AC 7[12]; Atk +1 sickle sword (1d6+1); Move 12; Save 12; AL N; CL/XP 8/800;<br>Special: +2 bonus to saving throws against fire, druid language, immune to fey charms, shape change, spells (3/1/1).<br>Spells: 1st—faerie fire, locate animals, predict weather; 2nd—cure light wounds; 3rd—call lightning.<br>Equipment: leather armor, +1 sickle sword (treat as short sword), holly berries and mistletoe.",
    MerchantGuard_F2:"Merchant Guard Veteran (Ftr2): HP 10; AC 7[12]; Atk short-sword (1d6); Move 12; Save 13; AL N; CL/XP 2/30.<br>Special: multiple attacks (2) vs. creatures with 1 or fewer HD.<br>Equipment: leather armor, shortsword, 2d4sp",
    MerchantGuard_F1:"Merchant Guard (Ftr1): HP 5; AC 7[12]; Atk shortsword (1d6); Move 12; Save 17; AL N; CL/XP 1/15;<br>Special: none.<br>Equipment: leather armor, shortsword, 2d12cp.",
    MerchantGuard_T2:"Merchant Guard (Thf2): HP 5; AC 7[12]; Atk shortsword (1d6); Move 12; Save 14; AL N; CL/XP 3/60;<br>Special: +2 on saving throws vs. devices, backstab (x2), thieving skills.<br>Thieving Skills: Climb 86%, Tasks/Traps 20%, Hear 3 in 6, Hide 15%, Silent 25%, Locks 15%.<br>Equipment: leather armor, shortsword, 2d4sp",
    MarketGuard_F2:"Guard Veteran (Ftr2): HP 10; AC 6[13]; Atk club (1d4) or sling (1d4); Move 12; Save 13; AL L; CL/XP 2/30.<br>Special: multiple attacks (2) vs. creatures with 1 or fewer HD.<br>Equipment: ring mail, club, sling, 10 bullets, whistle, 2d4sp",
    MarketGuard_F1:"Guard: HP 5; AC 7[12]; Atk club (1d4) or sling (1d4); Move 12; Save 17; AL L; CL/XP 1/15;<br>Special: none.<br>Equipment: leather armor, club, sling, 10 bullets, whistle, 2d12cp.",
    Fighter:"Hero (Ftr3): HP 22; AC 6[13]; Atk longsword (1d8+1) or dagger (1d4+1); Move 12; Save 12; AL L; CL/XP 3/60.<br>Special: +1 to hit and damage due to high strength, multiple attacks (3) vs. creatures with 1 or fewer HD.<br>Equipment: ring mail, longsword, dagger.",
    Fighter_F5:"Fighter (Ftr5): HP 26; AC 2[17]; Atk +1 longsword (1d8+2); Move 12; Save 10; AL N; CL/XP 4/120.<br>Special: +1 to hit and damage due to high strength, multiple attacks (4) vs. creatures with 1 or fewer HD.<br>Equipment: plate mail, shield, +1 longsword.",
    HaflingPickpocket:"Halfling Pickpocket (Thf2): HP 6; AC 6[13]; Atk dagger (1d4)); Move 12; Save 14; AL C; CL/XP 3/60;<br>Special: +1 to hit dexterity bonus, –1[+1] to AC dexterity bonus, +1 with thrown weapons, +2 on saving throws vs. devices, +4 on saving throws vs. magic, backstab (x2), halfling racial abilities, thieving skills.<br>Thieving Skills: Climb 86%, Tasks/Traps 25%, Hear 3 in 6, Hide 25%, Silent 35%, Locks 25%.<br>Equipment: leather armor, 3 daggers, thieves’ tools.",
    Halforc:"Wanderer, Male Half-Orc (Ftr1): HP 7; AC 7[12]; Atk club (1d4+1); Move 12; Save 14; AL N; CL/XP 2/30.<br>Special: +1 to hit and damage due to high strength, +1 hit point per die due to high constitution, darkvision 60ft, half-orc racial abilities.<br>Equipment: leather armor, club.",
    HereticPriest:"Heretic Priest (Clr2): HP 6; AC 9[10]; Atk fist (1); Move 12; Save 14; AL C; CL/XP 3/60;<br>Special: +2 save versus paralyzation and poison.<br>Equipment: clerical vestments, defiled holy symbol of denounced god.",
    HereticPaladin:"Heretic Paladin (Pal2): HP 12; AC 6[13]; Atk longsword (1d8); Move 12; Save 11; AL L; CL/XP 3/60;<br>Special: immune to disease, lay on hands (4hp), warhorse mount.<br>Equipment: dirty ring mail, longsword, defiled holy symbol.",
    Knotaloke:"Knotaloke, Female Human (Rgr4): HP 21; AC 4[15]; Atk longsword (1d8) or +1 longbow (1d6+1) x2; Move 12; Save 11; AL L; CL/XP 5/240;<br>Special: +4 to damage vs giants and goblinoids, alertness, tracking.<br>Equipment: +1 chainmail, longsword, +1 longbow, 20 arrows.",
    WallWatcher:"Wall Watcher (Ftr1): HP 5; AC 4[15]; Atk battleaxe (1d8) or spear (1d6); Move 12; Save 14; AL L; CL/XP 1/15.<br>Special: none.<br>Equipment: chainmail, shield, battle axe, spear, signal horn.",
    WallWatchOfficer:"Wall Watch Officer (Ftr3): HP 15; AC 5[14]; Atk spear (1d6) or short sword (1d6); Move 12; Save 12; AL L; CL/XP 3/60.<br>Special: multiple attacks (3) vs. creatures with 1 or fewer HD.<br>Equipment: ring mail, shield, spear, short sword.",
    Priest:"Priest (Clr3): HP 11; AC 4[15]; Atk warhammer (1d4+1) or sling (1d4); Move 12; Save 13; AL L; CL/XP 4/120;<br>Special: +2 save versus paralyzation and poison, spells (2), turn undead.<br>Spells: 1st—cure light wounds, protection from evil.<br>Equipment: chainmail, shield, clerical vestments, warhammer, sling, 10 bullets, holy symbol of appropriate god.",
    FurTrader:"Fur Trader (Rgr3): HP 22; AC 7[12]; Atk short sword (1d6) or longbow x2 (1d6); Move 12; Save 12; AL L; CL/XP 2/30.<br>Special: +3 to damage vs. giants and goblinoids, alertness, tracking.<br>Equipment: leather armor, short sword, longbow, 20 arrows.",
    NeutralRanger:"Ranger (Rgr1): HP 12; AC 7[12]; Atk short sword (1d6) or longbow x2 (1d6); Move 12; Save 14; AL N; CL/XP 1/15.<br>Special: +1 to damage vs. giants and goblinoids, alertness, tracking.<br>Equipment: leather armor, short sword, longbow, 20 arrows.",
    RedBladeInitiate:"Red Blade Initiate (Asn1): HP 4; AC 7[12]; Atk dagger (1d4); Move 12; Save 15; AL C; CL/XP 5/240;<br>Special: backstab (x2), disguise, poison, thieving skills.<br>Thieving Skills: Climb 85%, Tasks/Traps 15%, Hear 3 in 6, Hide 10%, Silent 20%, Locks 10%.<br>Equipment: leather armor, dagger, thieves' tools.",
    RedBlade:"Red Blade (Asn4): HP 19; AC 7[12]; Atk dagger (1d4 plus poison); Move 12; Save 12; AL C; CL/XP 5/240;<br>Special: backstab (x2), disguise, poison, thieving skills.<br>Thieving Skills: Climb 86%, Tasks/Traps 20%, Hear 3 in 6, Hide 15%, Silent 25%, Locks 15%.<br>Equipment: leather armor, poisoned dagger (save or die), thieves' tools.",
    ShadowMask:"Shadow Masks (Thf3): HP 8; AC 6[13]; Atk short sword (1d6) or dagger (1d4); Move 12; Save 13; AL C; CL/XP 3/60;<br>Special: +1 to hit dexterity bonus, –1[+1] to AC dexterity bonus, +2 on saving throws vs. devices, backstab (x2), thieving skills.<br>Thieving Skills: Climb 87%, Tasks/Traps 25%, Hear 4 in 6, Hide 20%, Silent 30%, Locks 20%.<br>Equipment: leather armor, short sword, dagger, thieves’ tools, 1d10gp.",
    SeniorShadowMask:"Senior Shadow Mask (Thf6): HP 17; AC 5[14]; Atk +1 dagger (1d4+1) or dagger (1d4); Move 12; Save 10; AL C; CL/XP 6/400;<br>Special: +1 to hit dexterity bonus, –1[+1] to AC dexterity bonus, +2 on saving throws vs. devices, backstab (x3), read languages, thieving skills.<br>Thieving Skills: Climb 90%, Tasks/Traps 40%, Hear 4 in 6, Hide 35%, Silent 45%, Locks 35%.<br>Equipment: +1 leather armor, +1 dagger, 4 throwing daggers, 2d6gp, 2d10sp.",
    Mercenary:"Mercenary (Ftr2): HP 12; AC 5[14]; Atk longsword (1d8); Move 12; Save 13; AL N; CL/XP 2/30;<br>Special: multiple at- tacks (2) vs. creatures with 1 or fewer HD.<br>Equipment: ring mail, shield, longsword, 10+2d10sp.",
    SellSword:"Sell-Sword (Ftr1): HP 7; AC 7[12]; Atk longsword (1d8) or dagger (1d4); Move 12; Save 14; AL L; CL/XP 1/15.<br>Special: none.<br>Equipment: leather armor, longsword, dagger, 1d6sp, 2d4cp.",
    Veteran:"Veteran (Ftr3): HP 20; AC 6[13]; Atk longsword (1d8+1) or dagger (1d4+1); Move 12; Save 12; AL L; CL/XP 3/60.<br>Special: +1 to hit and damage due to high strength, multiple attacks (3) vs. creatures with 1 or fewer HD.<br>Equipment: ring mail, longsword, dagger.",
    Kobold:"Kobold: HD 1d4hp; AC 7 [12]; Atk weapon (1d6); Move 6; Save 18; AL C; CL/XP A/15;<br>Special: none.",
    Longhunter:"Longhunter (Rgr2): HP 17; AC 7[12]; Atk short sword (1d6) or longbow x2 (1d6); Move 12; Save 13; AL L; CL/XP 2/30.<br>Special: +2 to damage vs. giants and goblinoids, alertness, tracking.<br>Equipment: leather armor, short sword, longbow, 20 arrows.",
    LonghunterLeader:"Longhunter Leader (Rgr3): HP 26; AC 6[13]; Atk +1 short sword (1d6+1) or longbow x2 (1d6+1 w/+1 arrows); Move 12; Save 12; AL L; CL/XP 3/60.<br>Special: +1 to hit dexterity bonus, –1[+1] to AC dexterity bonus, +3 to damage vs. giants and goblinoids, alertness, tracking.<br>Equipment: leather armor, +1 short sword, longbow, 20 +1 arrows.",
    LonghunterScout:"Longhunter Scout (Thf2): HP 9; AC 7[12]; Atk short sword (1d6) or shortbow x2 (1d6); Move 12; Save 14; AL N; CL/XP 2/30;<br>Special: +2 on saving throws vs. devices, backstab (x2), thieving skills.<br>Thieving Skills: Climb 86%, Tasks/Traps 20%, Hear 3 in 6, Hide 15%, Silent 25%, Locks 15%.<br>Equipment: leather armor, short sword, shortbow, 20 arrows.",
    Rankir:"Rankir (Rgr8): HP 54; AC 2[17]; Atk +1 longsword (1d8+2) or +1 longbow x2 (1d6+2 w/+1 arrows); Move 12; Save 7; AL L; CL/XP 3/60.<br>Special: +1 to hit and damage due to high strength, +1 to hit dexterity bonus, –1[+1] to AC dexterity bonus, +1 hp per die due to high constitution, +8 to damage vs. giants and goblinoids, alertness, scholar of healing magic, tracking.<br>Equipment: +2 leather armor, +1 buckler (small shield), +1 longsword, +1 longbow, 20 +1 arrows, horn of warning (Appendix C), 2 scrolls of cure light wounds.",
    Farseeker:"Farseeker, Male or Female Elf or Half-Elf (MU1/Rgr1): HP 9; AC 8[11]; Atk longsword (1d8) or spear (1d6) or shortbow x2 (1d6); Move 12; Save 14; AL L; CL/XP 3/60.<br>Special: +1 to hit dexterity bonus, –1[+1] to AC dexterity bonus, +2 on saves vs. spells, +1 to damage vs. giants and goblinoids, alertness, darkvision 60ft, elf or half-elf racial abilities, tracking, spells (1).<br>Spells: 1st—sleep.<br>Equipment: leather clothes, longsword or spear, shortbow, 20 arrows, spellbook.",
    FarseekerLeader:"Farseeker Leader, Male or Female Elf or Half-Elf (MU2/Rgr2): HP 15; AC 5[14]; Atk longsword (1d8) or shortbow x2 (1d6); Move 12; Save 13; AL L; CL/XP 3/60.<br>Special: +1 to hit dexterity bonus, –1[+1] to AC dexterity bonus, +2 on saves vs. spells, +2 to damage vs. giants and goblinoids, alertness, darkvision 60ft, elf or half-elf racial abilities, tracking, spells (2).<br>Spells: 1st—magic missile, shield.<br>Equipment: +1 leather armor, longsword, shortbow, 20 arrows, wand of sleep (6 charges), spellbook.",
    OberonThanalaus:"Oberon Thanalaus, Male Elf (MU4/Rgr4): HP 25; AC 4[15]; Atk +2 longsword (1d8+2) or +2 longbow x2 (1d6+2); Move 12; Save 11; AL L; CL/XP 3/60.<br>Special: +1 to hit dexterity bonus, –1[+1] to AC dexterity bonus, +2 on saves vs. spells, +4 to damage vs. giants and goblinoids, alertness, darkvision 60ft, elf racial abilities, tracking, spells (3/2).<br>Spells: 1st—magic missile, shield, sleep; 2nd—invisibility, phantasmal force.<br>Equipment: +2 leather armor, +2 longsword, +2 longbow, 40 arrows, bag of holding, wand of paralyzing (10 charges), spellbook.",
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
    RatSwarm:"Rat Swarms: HD 3; AC 6[13]; Atk swarm (1d6 plus disease); Move 12; Save 14; AL N; CL/XP 4/120;<br>Special: plague (–2 to hit and damage, save avoids).",
    PipersGuildWererat:"Wererat: HD 3; AC 4[15]; Atk bite (1d3), short sword (1d6); Move 12; Save 14; AL C; CL/XP 4/120;<br>Special: control rats, hit only by magic or silver weapons, lycanthropy, surprise.<br>Equipment: leather, short sword, pickaxe, 2d10sp.",
    Wererat:"Wererat: HD 3; AC 6[13]; Atk bite (1d3), weapon (1d6); Move 12; Save 14; AL C; CL/XP 4/120;<br>Special: control rats, hit only by magic or silver weapons, surprise, lycanthropy.",
    Weretiger:"Weretiger: HD 6; AC 3[16]; Atk 2 claws (1d4), bite (1d10); Move 12; Save 11; AL N or C; CL/XP 7/600;<br>Special: hit only by magic or silver weapons, lycanthropy.",
    WereWeasel:"Were-weasel: HD 3+2; AC 4[15]; Atk bite (1d6) and weapon (1d8); Move 15; Save 14; AL C; CL/XP 5/240;<br>Special: +1 initiative, drain blood, hit only by magic or silver weapons, lycanthropy.",
    Werewolf:"Werewolf: HD 4+4; AC 5[14]; Atk bite (1d6+1); Move 12; Save 13; AL C; CL/XP 5/240;<br>Special: hit only by magic or silver weapons, lycanthropy.",
    DenninBlackfinger:"Dennin Blackfinger (MU6): HP 20; AC 7[12]; Atk +2 dagger (1d4+2) or darts x3 (1d3); Move 12; Save 9; AL N; CL/XP 7/600;<br>Special: +2 save bonus vs. magic, spells (4/2/2).<br>Spells: 1st—charm person, magic missile x2, shield; 2nd—darkness 15 ft. radius, mirror image; 3rd—fireball x2.<br> Equipment: +2 dagger, 20 darts, wand of hold person (27 charges), ring of protection +1, spellbook.",
    AshTheClever:"Ash the Clever (Thf4): HP 11; AC 6[13]; Atk +1 short sword (1d6+1) or light crossbow (1d4+1); Move 12; Save 12; AL N; CL/XP 4/120;<br>Special: +2 on saving throws vs. devices, backstab (x2), read languages, thieving skills.<br>Thieving Skills: Climb 88%, Tasks/Traps 30%, Hear 4 in 6, Hide 25%, Silent 35%, Locks 25%.<br>Equipment: +1 leather armor, +1 short sword, light crossbow, 20 bolts, thieves’ tools.",
    DanteTheBaleful:"Dante the Baleful, Cleric of Vanitthu (Clr4): HP 21; AC 1[18]; Atk +1 warhammer (1d4+2); Move 12; Save 12; AL L; CL/XP 5/240;<br>Special: +2 save versus paralyzation and poison, spells (2/1), turn undead.<br>Spells: 1st—protection from evil, purify food and drink; 2nd—bless.<br>Equipment: plate mail, +1 shield, +1 warhammer, wand of cure light wounds (10 charges), holy symbol of Vanitthu.",
    Mimic:"Mimic: HD 7; AC 6[13]; Atk smash (2d6); Move 2; Save 9; AL N; CL/XP 8/800; Special: glue, mimicry. (Monstrosities 329)",
    BlackPudding:"Black Pudding: HD 10; AC 6[13]; Atk attack (3d8); Move 6; Save 5; AL N; CL/XP 12/2000;<br>Special: acidic surface, divides when hit with lightning, immune to cold.",
    Andrigor:"Andrigor (MU12): HP 32; AC 2[17]; Atk +1 dagger (1d4+1); Move 12; Save 3; AL L; CL/XP 14/2600.<br>Special: +2 on saves vs. spells, spells (4/4/4/4/4/1).<br>Spells: 1st—charm person, read magic, shield, sleep;<br>2nd—detect evil, ESP, mirror image, phantasmal force;<br>3rd—clairvoyance, dispel magic, fly, hold person;<br>4th—charm monster, confusion, polymorph self, wizard eye;<br>5th—feeblemind, hold monster, teleport (x2);<br>6th—repulsion.<br> Equipment: bracers of defense AC 4[15], +1 dagger, wand of magic missiles (6 charges), wand of enemy detection, ring of protection +2, crystal ball with clairaudience, 1d4 random potions, 1d4 random scrolls, spellbook.",
    EbonOoze:"Ebon Ooze: HD 8; AC 6[13]; Atk slam (2d6 plus 2d6 acid); Move 9; Save 5; AL C; CL/XP 10/1400;<br>Special: acid, immune to acid and disease. (Tome of Horrors 4 162)",
    Ectoplasm:"Ectoplasm: HD 7; AC 10[9]; Atk pseudopod (1d8 plus weakness); Move 0 (fly 6); Save 9; AL C; CL/XP 10/1400;<br>Special: +1 or better weapon to hit, weakness (cumulative –1 to hit and damage penalty with each strike). (Tome of Horrors 4 162)",
    GelatinousCube:"Gelatinous Cube: HD 4; AC 8[11]; Atk slam (2d4); Move 6; Save 13; AL N; CL/XP 5/240;<br>Special: immune to lightning and cold, paralysis.",
    GreyOoze:"Grey Ooze: HD 3; AC 8[11]; Atk strike (2d6); Move 1; Save 14; AL N; CL/XP 5/240;<br>Special: acid, immune to spells, heat, cold, and blunt weapons.",
    JollyJelly:"Jolly Jelly: HD 6; AC 7[12]; Atk 3 strikes (1d6); Move 6; Save 11; AL N; CL/XP 8/800;<br>Special: aura of gloom, immune to fire, pheromones. (Tome of Horrors 4 125)",
    LightningBladder:"Lightning Bladder: HD 4; AC 9 [10]; Atk pseudopod (1d6 plus 1d6 acid); Move 6 (swim 12); Save 13; AL N; CL/XP 7/600;<br>Special: acid, electrical discharge, immune to cold, electricity and fire.",
    Livestone:"Livestone: HD 5; AC 10[9]; Atk slam (1d8); Move 9; Save 9; AL N; CL/XP 7/600;<br>Special: engulf, immunity to petrification, solidify, surprise on 1–4 on 1d6. (The Tome of Horrors Complete 361)",
    StunJelly:"Stunjelly: HD 4; AC 5[14]; Atk slam (1d6 plus 1d6 acid plus paralysis); Move 6; Save 13; AL N; CL/XP 6/400;<br>Special: acid, camouflage, engulf, immunity to eletricity, paralysis, surprise on 1-3 on 1d6. (The Tome of Horrors Complete 341)",
    Otyugh:"Otyugh: HD 7; AC 3[16]; Atk 2 tentacles (1d8), bite (1d4+1); Move 6; Save 9; AL N; CL/XP 8/800;<br>Special: disease.",
    PaladinKnightErrant:"Knight Errant (Pal4): HP 25; AC 2[17]; Atk longsword (1d8+1); Move 12; Save 9; AL L; CL/XP 5/240;<br>Special: +1 to hit and damage due to high strength, immune to disease, lay on hands (8hp), warhorse mount.<br>Equipment: plate mail, shield, tabard bearing the symbol of Muir, longsword, holy symbol of Muir.",
    Constable:"Constable (Ftr1): HP 6; AC 6[13]; Atk longsword (1d8) or light crossbow (1d4+1); Move 12; Save 14; AL N; CL/XP 1/15.<br>Special: none.<br>Equipment: leather armor, shield, longsword, light crossbow, 10 bolts.",
    SheriffsDeputy:"Sheriff's Deputy (Ftr1): HP 6; AC 6[13]; Atk club (1d4+1); Move 12; Save 14; AL N; CL/XP 1/15.<br>Special: +1 to hit and damage due to high strength.<br>Equipment: leather armor, shield, club.",
    Ratling:"Ratling: HD 1; AC 9[10]; Atk bite (1d6 plus disease) or weapon; Save 17; Move 12; AL C; CL/XP 2/30; Special: diseased bite.",
    RivermenFighter:"Rivermen Fighters (Ftr1): HP 6; AC 6[13]; Atk longsword (1d8) or spear (1d6) or light crossbow (1d4+1); Move 12; Save 14; AL N; CL/XP 1/15.<br>Special: none.<br>Equipment: leather armor, shield, longsword, light crossbow, 10 bolts.",
    RivermenSneak:"Rivermen Sneaks (Thf2): HP 6; AC 7[12]; Atk dagger (1d4) or club (1d4) or net (see below); Move 12; Save 14; AL N; CL/XP 3/60;<br>Special: +2 on saving throws vs. devices, backstab (x2), thieving skills.<br>Thieving Skills: Climb 86%, Tasks/Traps 20%, Hear 3 in 6, Hide 15%, Silent 25%, Locks 15%.<br>Equipment: leather armor, dagger, club, net (if attack is successful, target is immobilized until released), thieves’ tools.",
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
    WanderingCleric:"Wandering Cleric (Clr6): HP 22; AC 9[10]; Atk +1 staff (1d6+2); Move 12; Save 10; AL L; CL/XP 7/600;<br>Special: +1 to hit using weapon two handed, +2 save versus paralyzation and poison, spells (2/2/1/1), turn undead.<br>Spells: 1st—cure light wounds, protection from evil; 2nd—bless, hold person; 3rd—cure disease; 4th—cure serious wounds.<br>Equipment: clerical vestments, +1 staff, scroll of raise dead, solid gold holy symbol (50gp value).",
    VampireSpawn:"Vampire Spawn: HD 3; AC 5[14]; Atk claw (1hp plus level drain); Move 9; Save 14; AL C; CL/XP 6/400;<br>Special: drain 1 level with hit, hit only by magic or silver weapons.",
    WillOTheWisp:"Will-o'-the-wisp: HD 9; AC –8[27]; Atk shock (2d6); Move 18; Save 6; AL C; CL/XP 10/1400;<br>Special: lights.",
    Wizard:"Wizard (MU5): HP 12; AC 2[17]; Atk +1 dagger (1d4+1); Move 12; Save 11; AL N; CL/XP 6/400.<br>Special: +2 on saves vs. spells, spells (4/2/1).<br>Spells: 1st—charm person, detect magic, sleep; 2nd—ESP, phantasmal force; 3rd—dispel magic.<br>Equipment: bracers of defense AC 4[15], +1 dagger, ring of protection +2, wand of magic missiles (5 charges), spellbook.",
    WizardsApprentice:"Wizard's Apprentice (MU2): HP 4; AC 9[10]; Atk staff (1d6) or darts x3 (1d3); Move 12; Save 14; AL N; CL/XP 3/60;<br>Special: +2 on saves vs. spells, spells (2).<br>Spells: 1st—charm person, shield.<br>Equipment: robes, staff, 6 darts, spellbook.",
};

var t = {
    DrunkAttitude:["Their attitude is currently friendly","Their attitude is currently unfriendly","Their attitude is currently  helpful","Their attitude is currently indifferent","Their attitude is currently hostile","They are exhibiting a different random attitude every 2 minutes (table pg. 281)"],
    GuildType:["Gem Cutters'","Scribes'","Stone Cutters'","Glassblowers'","Wheelwrights'","Rivermans'","Brewers'","Weavers'","Harlots'","Caretakers'","Beggars'","Herbalists'","Innkeepers'","Tavernkeepers'"],
    RivermenType:["fishmongers.","liquor bootleggers.","selling live game (giant frogs, rare swamp birds, etc.)","selling a treasure map. They have a map leading to the Necromancer's Swamp [see Sword of Air].","belligerents. These rivermen are boozed up and looking to start a fight with landlubbers.","operating a floating pleasure barge."]
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
	AdventuringBandWithDead:
	{
        name:"Adventuring Band with Dead",
        text: "A mixed band of !d[2d3] adventurers is encountered, they are bringing !d[1d3] dead associates to be raised from the dead. The adventurers are of various classes ranging from levels 2–6. The Company of the Silver Spear (page 126) or The Accursed (page 231) serve as good examples of ready-made adventuring bands. If the characters have recently been successful, there is a good chance that the adventuring band is jealous. Likewise, if the characters have had several recent setbacks, it is likely that the adventuring band may make fun of them.",
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
                {min:1, max:1, stats:["ClayGolem"]},
                {min:2, max:2, stats:["FleshGolem"]},
                {min:3, max:3, stats:["AirElemental"]},
                {min:4, max:4, stats:["EarthElemental_12HD"]},
                {min:5, max:5, stats:["EarthElemental"]},
                {min:6, max:6, stats:["FireElemental"]}
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
    FurTrader:
    {
        name:"Fur Trader",
        text:"This encounter is with a non-guild-affiliated fur trader who actively traps and sells furs in the Stoneheart Mountains, despite the threat of orcs and other dangerous monsters. Fur traders are generally solitary but may have 1–4 subordinates (Neutral male ranger 1). The traders winter in the mountains and are thus found at the Tent City only in summer months. If arriving this trader has !d[3d100+50] gp worth of valuable pelts. If leaving this trader has !d[1d100+20] gp worth of new materials, supplies and trade goods when they leave Tent City. It may be assumed that much of this discrepancy is due to heavy gambling losses and lavish expenditure during their stay.",
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
        text:"This is an encounter with a greedy mixed band of !d[2d3] adventurers bent on cracking open tombs or mausoleums and making off with what valuables they can get their hands on. They are \"in the middle of work\". They are of various classes ranging from levels 2–6. The Company of the Silver Spear (page 126) or The Accursed (page 231) serve as good examples of ready-made adventuring bands."
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
        text:"An encounter with a herald (Neutral male or female expert 1–4) may be with the chief historian and spokesperson of a noble or aristocrat. In this fashion, heralds are employed as a matter of good public relations to go about the city speaking of the civic works and good deeds of their employer. Likewise, heralds may serve in the guard to remind the folk of any new laws, warnings or ordinances. Furthermore, some heralds are employed as \"town criers\" giving news and information to the populace directly from the city council and mayor’s office."
    },
    Heretic:
    {
        name:"Heretic",
        text:"This encounter is with a cleric or paladin who has fallen from favor with their deity. The heretic stands forth and denounces the faith and the religion. 10–30% of the gathering crowd agrees with the heretic or practices a different faith. The rest of the crowd is hostile toward the heretic. If trouble breaks out, guards arrive in !d[1d6] rounds to disperse the crowd. The heretic is a paladin or cleric with no spells or divine abilities.",
        stats:["HereticPriest","HereticPaladin"]
    },
    HorseRace:
    {
        name:"Horse Race",
        text:"A horse race is about to begin. !d[2d4] contestants (Neutral male commoner 1–2) vie for a 200gp prize."
    },
    HorseTrader:
    {
        name:"Horse Trader",
        text:"Encounters are with a horse trader (Neutral male or female expert 2–5) who has !d[1d4] fine horse(s) to sell.",
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
    /* delete me
    LocalWatch:
    {
        name:"Local Watch",
        text:"This encounter is with a patrol of a district’s own privately funded and appointed guard. For example, dog soldiers are the local guard for Tent City, and the Market Guard is the local guard for the Market District. There are !d[1d4+2] local guards in the patrol. See district chapters and Appendix A for further details."
        // TODO - greg you should do a district specific one of this for each district and include the relevant stats, that would be useful
    }, */
    LocalWatchTC:
    {
        name:"Tent City Local Watch",
        text:"This encounter is with a patrol of Tent City's own privately funded and appointed guard - the Dog Soldiers. There are !d[1d4+2] local guards in the patrol.",
        stats:["DogSoldiers","DogSoldierWarrior","DogSoldierMU"]
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
        text:"C13-11a, pg. 184 Assistant and bodyguard to Doctor Karisk."
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
        text:"This encounter is with !d[3d10] recent converts to a faith that is practiced in Bard's Gate (such as worship of Zors). Pilgrims (Any alignment male or female commoner 1–3) are typically dressed in the garb of a worshipper of the chosen deity. They offer prayers and penance, and spout the dogma of their faith as their processional passes toward their deity's shrine or temple."
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
                {min:6, max:6, append:true, stats:["Gray Ooze"]},
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
            {min:1, max:1, append:true, text:"<b>Oberon Thanalaus, master of the Farseekers of Twilight is encountered.</b>", stats:["OberonThanalaus"]}
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
    Rivermen:
    {
        name:"Rivermen",
        text:"This is an encounter with !d[2d6] rivermen. The rivermen have brought a supply of goods that they are shilling from their flatboats to folk along the docks, bridge, or canals of the city. These rivermen are !t[RivermenType]",
        stats:["RivermenFighter","RivermenSneak"]
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
    ScribeOfTheScroll:
    {
        name:"Scribe of the Scroll",
        text:"This encounter is with a scribe (Lawful male or female human expert 4) who works for the High Sanctum of the Scroll. The scribe may have a treasure map, a scroll with a new spell on it, or some other data or information. The scribe may be in the process of being pickpocketed or mugged on the way to the sanctum, or the mark that characters are supposed to rob. Either way, the scribe's scroll leads to untold adventure!"
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
        text:"A cleric or necromancer of Orcus created these animated corpses of criminals and set them loose within the city to watch the chaos. The encounter is with !d[2d4] skeletons.",
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
        text:"This encounter is with a cleric or magic-user 3–4 who is on a mission for their master to find a particularly difficult-to-get spell component, or religious item that may have been recently stolen from their temple. Depending on the reaction of the characters, the spellcaster may enlist the aid of the party in finding their missing item, or ask for a loan to help pay off the cost of the spell component."
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
        text:"A troupe of !d[1d6] acrobats, clowns, jugglers, fire-eaters, singers and dancers perform for a gathering crowd. Characters' reactions to the event may lead to new contacts or new enemies in the city. The troupe is led by a Neutral male or female expert 5, but may be made up of experts, monks, and thieves of level 1–2."
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
        text:"This is an encounter with a wine peddler (Neutral male commoner 2). The commoner has several pots of wine to sell. The wine (terrible vintage) costs 1sp per earthenware crock."
    },
    Wizard:
    {
        name:"Wizard",
        text:"A Wizard's Apprentice has been sent out on an appointment to collect magical ingredients or seek out the owner of a scroll that possesses a new spell for them to learn.",
        stats:["WizardsApprentice"],
        extra:{
            total:10,
            chances:[
                   {min:1, max:1, text:"A master Wizard has gone out to collect magical ingredients or seek out the owner of a scroll that possesses a new spell for them to learn. They did not send an apprentice as they wish to stretch their legs.", stats:["Wizard"]}
            ]
        }
    },
    Wraith:
    {
        name:"Wraith",
        text:"This encounter is with a wraith. The wraith is the unkind spirit of a convicted murderer now out to get revenge upon the sheriffs who caught him in the act of his crime.",
        stats:["Wraith"]
    },
    Gondolier:
    {
        name:"Gondolier",
        text:"an encounter with a gondolier (Neutral male or female expert 1-3). The gondolier may offer the characters a ride, may want the party to get of his way, may be friendly, rude or funny."
    },
    Monster:
    {
        name:"Monster",
        text:"an encounter with a monster suitable for this location. See S&W <a href='http://www.d20swsrd.com/swords-and-wizardry-srd/for-the-referee/monsters/all-monsters'>SRD</a> for suitable monsters."
    },
    SpecialTC:
    {
        name:"Special",
        extra:{
            total:19, // TODO add support for entry 14, reroll on daytime chart
            // TODO add page references
            chances:[
                   {min:1, max:1, name:"Ash the Clever", text:"Ash the Clever (TC1, pg. 112), Lieutenant of Dennin Blackfinger is encountered", stats:["AshTheClever"]},
                   {min:2, max:2, name:"Dante the Baleful", text:"Dante the Baleful (TC1, pg. 112), Lieutenant of Dennin Blackfinger is encountered", stats:["DanteTheBaleful"]},
                   {min:3, max:3, name:"Kal Kammon", text:"Kal Kammon (TC3, pg. 114) is encountered."},
                   {min:4, max:4, name:"Watenga", text:"Watenga (TC2, pg. 113) is encountered. "},
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
    }
}

var enc = {
    "All": [],
    "TC_D": [ e.LocalWatchTC, e.Druids, e.Farseeker, e.HorseTrader, e.HorseRace, e.WinePeddler, e.LyreguardPatrolTentCity, e.Caravan, e.CentaurBand, e.FurTrader, e.WanderingMonk, e.Halforc, e.Pickpocket, e.MercenaryBand, e.Longhunter, e.Pilgrims, e.FoodVendor, e.Charlatan, e.Shyster, e.TroupOfPerformers, e.SpecialTC ],
    // TODO support re-roll on daytime chart item 12 in TC_N
    "TC_N": [ e.Drunk, e.MerchantEncampment, e.BarbarianEncampment, e.MercenaryEncampment, e.Minstrel, e.Mugger, e.BanditGang, e.TentRevival, e.Gambler, e.Shyster, e.AleTent, e.LyreguardPatrolTentCity, e.Lycanthrope, e.VampireSpawn, e.Druids, e.Goblins, e.AdventuringBand, e.WillOTheWisp, e.SpecialTC ],
    "M_D":[ e.SheriffsPatrol, e.WallWatcher, e.LyreguardPatrol, e.LocalWatchM, e.WanderingMonk, e.FoodVendor, e.Grocer, e.WinePeddler, e.Pickpocket, e.TroupOfPerformers, e.Paladin, e.Fighter, e.ArcaneStudent, e.Merchant, e.SculleryMaid, e.CivicOfficial, e.Pilgrims, e.Laborers, e.TrashCollector], // TODO add e.specialMD ],
    "M_N":[ e.SheriffsPatrol, e.LocalWatchM, e.Streetwalker, e.Drunk, e.MercenaryBand, e.AdventuringBand, e.Mugger, e.Shyster, e.Gambler, e.Shadowmasks, e.RedBladeInitiate, e.Bard, e.Wizard, e.Aristocrat, e.LocalBully, e.CivicOfficial, e.Beggar, e.Harlot, e.Pickpocket ], // TODO add e.specialMD ],
    "BM":[ e.Spellcaster, e.BlackMarketWheelwrightThugBand, e.BlackMarketShadowmaskBand, e.Slavers, e.RedBladeInitiate, e.TemporaryBlackMarketStall, e.TemporaryBlackMarketStall, e.FoodVendorBlackMarket, e.Gambler, e.BlackMarketHarlots, e.BlackMarketPickpocket, e.WinePeddler],
    "G_D":[ e.SheriffsPatrol, e.LocalWatchG, e.LyreguardPatrol, e.Guildsman, e.Laborers, e.TrashCollector, e.CivicOfficial, e.Merchant, e.ArcaneStudent, e.Wizard, e.Fighter, e.Pickpocket, e.Aristocrat, e.Paladin, e.Cleric, e.SculleryMaid, e.Pilgrims, e.Bard, e.TroupOfPerformers ], // TODO add e.SpecialG
    "G_N":[ e.AdventuringBand, e.LocalWatchG, e.Drunk, e.Harlot, e.Streetwalker, e.Shadowmasks, e.Aristocrat, e.Rake, e.Guildsman, e.Dandy, e.MercenaryBand, e.ArcaneStudent, e.Wizard, e.Cleric, e.Laborers, e.RedBladeInitiate, e.CivicOfficial, e.SheriffsPatrol, e.Pickpocket ], // TODO add e.SpecialG
    "OT_D": [ e.LyreguardPatrol, e.SheriffsPatrol, e.Cleric, e.Pilgrims,e.Paladin, e.WinePeddler, e.FoodVendor, e.Charlatan, e.Beggar, e.Aristocrat, e.Pickpocket, e.Heretic, e.TroupOfPerformers, e.CivicOfficial, e.TempleGuard, e.TrashCollector, e.Merchant, e.AdventuringBandWithDead, e.Laborers ], // TODO add e.SpecialTG
    "OT_N": [ e.SheriffsPatrol, e.Cleric, e.Pilgrims, e.Paladin, e.Beggar, e.Drunk, e.Shyster, e.Gambler, e.Aristocrat, e.TempleGuard, e.CivicOfficial, e.Harlot, e.Streetwalker, e.Heretic, e.Pickpocket, e.WinePeddler, e.FoodVendor, e.Shadowmasks, e.AdventuringBandWithDead ], // TODO add e.SpecialTG
    "D_D": [ e.SheriffsPatrol, e.Fisherman, e.Gondolier, e.Pickpocket, e.Bully, e.Shadowmasks, e.Beggar, e.Harlot, e.Laborers, e.Gambler, e.Rivermen, e.Merchant, e.WinePeddler, e.FoodVendor, e.Enforcer, e.SculleryMaid, e.Sailor, e.AdventuringBand, e.SewerCleaner ], // TODO add e.SpecialD
    "D_N": [e.Shadowmasks, e.Wheelwright, e.Gondolier, e.Drunk, e.Beggar, e.Harlot, e.Streetwalker, e.Pickpocket, e.Bully, e.Enforcer, e.Gambler, e.Sailor, e.AdventuringBand, e.BountyHunter, e.CanalWorker, e.Shyster, e.Rivermen, e.BanditGang, e.Monster ], // TODO add_e.SpecialD
    "C_D": [e.SheriffsPatrol, e.Fisherman, e.Gondolier, e.Pickpocket, e.Bully, e.Shadowmasks, e.Beggar, e.Harlot, e.Laborers, e.Gambler, e.Rivermen, e.Merchant, e.WinePeddler, e.FoodVendor, e.Enforcer, e.SculleryMaid, e.Sailor, e.AdventuringBand, e.SewerCleaner], // TODO add e.SpecialC
    "C_N": [e.Shadowmasks, e.Wheelwright, e.Gondolier, e.Drunk, e.Beggar, e.Harlot, e.Streetwalker, e.Pickpocket, e.Bully, e.Enforcer, e.Gambler, e.NurseMary, e.Rivermen, e.BountyHunter, e.PipersGuild, e.Skeletons, e.RedBladeInitiate, e.BanditGang, e.StreetUrchin], // TODO add e.SpecialC
    "TH_D": [e.Merchant, e.LocalWatchTH, e.SculleryMaid, e.Valet, e.Guildsman, e.Dandy, e.Fighter, e.Paladin, e.Wizard, e.ArcaneStudent, e.Rake, e.Aristocrat, e.CityWatch, e.Carriage, e.Butler, e.BodyGuard, e.Herald, e.Cleric ], // TODO add e.SpecialTH
    "TH_N": [e.LocalWatchTH, e.Aristocrat, e.Valet, e.Paladin, e.Wizard, e.ArcaneStudent, e.Rake, e.CivicOfficial, e.Carriage, e.Butler, e.Herald, e.Dandy, e.Drunk, e.Bard, e.Debutant, e.Cleric, e.Burglar, e.Lovers ], // TODO add e.SpecialTH
    "UH": [e.HaflingPickpocket, e.DwarfPolitician, e.DwarfTravelers, e.HalflingBand, e.BeerVendor, e.CheeseVendor, e.LocalWatchUH, e.GameOfChance],



};
