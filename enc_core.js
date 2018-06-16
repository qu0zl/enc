/* Copyright 2016 Greg Farrell <greg at gregfarrell dot org>
   This code may not be used without permission.
   If you'd like to use this for your own product then please ask and I'll swap you the rights to use it for that purpose in exchange for a signed copy of your product or some such. */

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function roll(amount, type) {
    var count = 0;
    for (var i=0; i<amount; i++) {
        count += getRandomInt(1, type);
    }
    return count;
}

function table_roll(table) {
    var which = getRandomInt(0, table.length -1);
    return table[which];
}

function replace_markers(text) {
    var matches = text.match(/!d\[.*?]/gi);
    if (matches) {
        for (var i=0; i<matches.length; i++) {
            var split = matches[i].split('[')[1].split(/d/i);
            var dice_type = split[1];
            var minus = dice_type.indexOf('-');
            var plus = dice_type.indexOf('+');
            if (minus != -1)
                minus = parseInt(dice_type.substring(minus+1));
            else
                minus = 0;
            if (plus != -1) {
                plus = parseInt(dice_type.substring(plus+1));
            }
            else
                plus = 0;

            var count = roll(split[0], parseInt(dice_type));
            count += plus;
            count -= minus;
            text = text.replace(matches[i], count);
        }
    }
    matches = text.match(/!t\[.*?]/g);
    if (matches) {
        for (var i=0; i<matches.length; i++) {
            var table_name = matches[i].split('[')[1].split(']')[0];
            text = text.replace(matches[i], table_roll(t[table_name]));
        }
    }
    return text;
}

function select_item(entry) {
    if (entry.extra) {
        var choice = getRandomInt(1, entry.extra.total);
        // choice = 1; //greg remove, only here for testing
        for (var i=0; i<entry.extra.chances.length; i++) {
            if (choice >= entry.extra.chances[i].min && choice <= entry.extra.chances[i].max) {
                if (entry.extra.chances[i].append) {
                    var stats;
                    var text = entry.name +": ";
                    if (entry.stats) {
                        if (entry.extra.chances[i].stats)
                            stats = entry.stats.concat(entry.extra.chances[i].stats);
                        else
                            stats = entry.stats
                    } else {
                        stats = entry.extra.chances[i].stats;
                    }
                    if (entry.text) {
                        text = text+entry.text;
                    }
                    if (entry.extra.chances[i].text) {
                        if (entry.text)
                            text +=" ";
                        text = text+entry.extra.chances[i].text;
                    }
                    return [text, stats];
                }
                else {
                    var stats;
                    var text = "";
                    if (entry.extra.chances[i].stats)
                        stats = entry.extra.chances[i].stats;
                    else
                        stats = entry.stats;
                    if (entry.extra.chances[i].name)
                        text = entry.extra.chances[i].name+": ";
                    else
                        text = entry.name+": ";
                    return [text+entry.extra.chances[i].text, stats];
                }
            }
        }
    }

    return [entry.name+": "+entry.text, entry.stats];
}

function render_stat_blocks(block_list) {
    var text = "";
    for (var i=0; i<block_list.length; i++)
        text += "<DIV class=stat_block>"+stat_blocks[block_list[i]]+"</DIV>";
    return text;
}

function find_which(table) {
    console.log("weighting total greg");
    var random = getRandomInt(1, table.weighting_total);
        random = 5; //greg remvoe
        console.log("greg remove debug shite here");
    for (var i=0; i < table.weighted_items.length -1; i++) {
        if (random >= table.weighted_items[i][0] && random <= table.weighted_items[i][1]) {
            console.log("greg, found it " + table.weighted_items[i])
        return table.weighted_items[i][2];
        }
    }
    console.log("Failed to find entry in table " + table.name);
    return null;
}

function get_table_entry(table) {
    var debug = false; // force to use last entry in table for debugging purposes.
    var found = false;
    var which;
    //debug = true; // only for debugging, breaks normal usage. Do not commit with this uncommented.
    while (!found) {
        if (table.weighting_total)
            which = find_which(table);
        else
            which = table.items[getRandomInt(0, table.items.length -1)];

        if (debug == true) {
            console.log("forcing to use latest entry for debugging purposes. remove this!!!");
            which = table.items.length - 1;
        }

        if (which.sublist != undefined) {
            console.log("Sub table found");
            table = which.list; // now search the new sub-table
        } else {
            found = true;
        }
    }

    return which;
}
function generate_encounter() {
    var table = enc[$(this).attr('id')];
    var entry = get_table_entry(table);
    var item = select_item(entry);

    var text = replace_markers(item[0]);
    if (item[1]) {
        text += render_stat_blocks(item[1]);
    }
    $('.enc').html(text);
}
    
function onReady()
{
    var debug = false;
    // create enc.all list that includes all encounters

    var buttons = $('#button_list');
    /*for (var key in e) // add all encounters to an 'All' list
        enc.All.items.push(e[key]);*/
    for (var key in enc) {
        if (enc[key].hide != true)
        buttons.append('<button class="top_button" id="'+key+'">' + enc[key].name+'</button>');
    }
    $('.top_button').button().click(generate_encounter);
    //debug = true;
    /* Loops through all encounter tables and encounter entries and ensures there are no undefined encounters
       or NPC statistics included. */
    if (debug == true) {
        for (var key in enc) {
            var table = enc[key].items;
            for (var i=0; i<table.length-1; i++) {
                if (table[i] == undefined)
                    console.log("Undefined entry at " +i + " in " + key);
            }
        }
        for (var eKey in e) {
            if (e[eKey].stats) {
                for (var j=0; j<e[eKey].stats.length; j++) {
                    if (stat_blocks[e[eKey].stats[j]] == undefined) {
                        console.log("Undefined stat entry " + j + ", " + e[eKey].stats[j] +", in " + eKey);
                    }
                }
            }
            if (e[eKey].extra && e[eKey].extra.chances) {
                for (var i=0; i<e[eKey].extra.chances.length; i++) {
                    if (e[eKey].extra.chances[i].stats) {
                        for (var j=0; j<e[eKey].extra.chances[i].stats.length; j++) {
                            if (stat_blocks[e[eKey].extra.chances[i].stats[j]] == undefined) {
                                console.log("Undefined chances stat entry " + j + ", " + e[eKey].extra.chances[i].stats[j] +", in " + eKey);
                            }
                        }
                    }
                }
            }
            var found = false;
            for (var encKey in enc) {
                if (found)
                    break;
                for (var j=0; j<enc[encKey].items.length && !found; j++) {
                    if (enc[encKey].items[j] == e[eKey]) {
                        found = true;
                    }
                }
            }
            if (!found)
                console.log("Encounter " + eKey + " is not used in any lists. Fix this.");
        }
    }
};
$(document).ready(onReady);
