//META{"name":"StubeEmotes"}*//
//test
function StubeEmotes() {}

StubeEmotes.prototype.getName = function() {
    return "Stube Emotes";
};

StubeEmotes.prototype.getDescription = function() {
    return "Stube Emotes";
};

StubeEmotes.prototype.getVersion = function() {
    return "1.1.0";
};

StubeEmotes.prototype.getAuthor = function() {
    return "bamboechop, MechaJunk";
};

StubeEmotes.prototype.getSettingsPanel = function() {
    return '<h3>Stube Emotes</h3><br />';
};

StubeEmotes.prototype.load = function() {
    console.info("%c[BetterDiscord]" + " %c" + this.getName() + " v" + this.getVersion() + " by " + this.getAuthor() + " loaded.", "color: limegreen; font-weight: bold;", "");
};

StubeEmotes.prototype.unload = function() {
    console.info("%c[BetterDiscord]" + " %c" + this.getName() + " v" + this.getVersion() + " by " + this.getAuthor() + "unloaded.", "color: limegreen; font-weight: bold;", "");
};

StubeEmotes.prototype.start = function() {
    var messages = document.querySelectorAll(".message-text > .markup");
    BdApi.getPlugin("Stube Emotes").emotes(messages);
};
StubeEmotes.prototype.stop = function() {
    console.info("%c[BetterDiscord]" + " %c" + this.getName() + " v" + this.getVersion() + " by " + this.getAuthor() + " stopped.", "color: red; font-weight: bold;", "");
};

StubeEmotes.prototype.onMessage = function() {
    var messages = $(".message .markup");
    BdApi.getPlugin("Stube Emotes").emotes(messages);
};

StubeEmotes.prototype.onSwitch = function() {
    var messages = document.querySelectorAll(".message-text > .markup");
    BdApi.getPlugin("Stube Emotes").emotes(messages);
};

var map = { ":nangry:" : '<img class="image" src="https://i.imgur.com/mWWce.png">', 
            ":n:" : '<img class="image" src="https://i.imgur.com/DLKdPuR.png">',
            ":ncute:" : '<img class="image" src="https://i.imgur.com/geptw.png">' ,
            ":nwow:" : '<img class="image" src="https://i.imgur.com/DjCdA.png">',
            ":nroll:" : '<img class="image" src="https://i.imgur.com/WLIba.gif">',
            ":nninja:" : '<img class="image" src="https://i.imgur.com/TkTrY.png">',
            ":nmustocle:" : '<img class="image" src="https://i.imgur.com/Oh5Bi.png">',
            ":nscience:" : '<img class="image" src="https://i.imgur.com/zqfk4.gif">',
            ":nsad:" : '<img class="image" src="https://i.imgur.com/SW1WA.gif">',
            ":3:" : '<img class="image" src="https://i.imgur.com/l1tf4K2.png">',
            ":ntoot:" : '<img class="image" src="https://i.imgur.com/nGVHr.png">',
            ":nfakt:" : '<img class="image" src="https://i.imgur.com/A5Vru.png">',
            ":nrolleyes:" : '<img class="image" src="https://i.imgur.com/JYGVM.gif">',
            ":p:" : '<img class="image" src="https://i.imgur.com/KG6DQVu.png">',
            ":luck:" : '<img class="image" src="https://i.imgur.com/SR6vz5s.png">'
            };

StubeEmotes.prototype.emotes = function(messages) {
    //iterate through all messages
    forEach(messages, function(index, value) {
        var line = value.innerHTML;
        for (var key in map) {
            line = line.replaceAll(key, map[key]);
        }

        value.innerHTML = line;
    });
}

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
}

var forEach = function(array, callback, scope) {
    for(var i=0; i<array.length; i++) {
        callback.call(scope, i, array[i]);
    }
};