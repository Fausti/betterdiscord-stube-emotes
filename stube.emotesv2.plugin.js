//META{"name":"StubeEmotes"}*//
//test
function StubeEmotes() {}

var timer;

StubeEmotes.prototype.getName = function() {
    return "Stube Emotes";
};

StubeEmotes.prototype.getDescription = function() {
    return "Stube Emotes";
};

StubeEmotes.prototype.getVersion = function() {
    return "1.1.1";
};

StubeEmotes.prototype.getAuthor = function() {
    return "bamboechop, MechaJunk, Valance";
};

StubeEmotes.prototype.getSettingsPanel = function() {
    return '<h3>Stube Emotes</h3><br />';
};

StubeEmotes.prototype.load = function() {
    // console.info("%c[BetterDiscord]" + " %c" + this.getName() + " v" + this.getVersion() + " by " + this.getAuthor() + " loaded.", "color: limegreen; font-weight: bold;", "");
};

StubeEmotes.prototype.unload = function() {
    // console.info("%c[BetterDiscord]" + " %c" + this.getName() + " v" + this.getVersion() + " by " + this.getAuthor() + "unloaded.", "color: limegreen; font-weight: bold;", "");
};

StubeEmotes.prototype.start = function() {
    var messages = document.querySelectorAll(".message-text > .markup");
    BdApi.getPlugin("Stube Emotes").emotes(messages);
};

StubeEmotes.prototype.stop = function() {
    // console.info("%c[BetterDiscord]" + " %c" + this.getName() + " v" + this.getVersion() + " by " + this.getAuthor() + " stopped.", "color: red; font-weight: bold;", "");
};

StubeEmotes.prototype.onMessage = function() {
    // Sinn? Eigentlich keiner, wird doch eh überschrieben, oder?
    if (timer) {
        clearTimeout(timer);
        timer = null;
    }
    
    timer = setTimeout(function() {
        // var messages = document.querySelectorAll(".message-text > .markup");
        var messages = $(".message .markup");
        
        BdApi.getPlugin("Stube Emotes").emotes(messages);
        timer = null;
    }, 500);
    
    // console.info("%c[BetterDiscord]" + " %c" + this.getName() + " v" + this.getVersion() + " by " + this.getAuthor() + " [onMessage] event fired.", "color: purple; font-weight: bold;", "");
};

StubeEmotes.prototype.onSwitch = function() {
    var messages = document.querySelectorAll(".message-text > .markup");
    BdApi.getPlugin("Stube Emotes").emotes(messages);
    
    // console.info("%c[BetterDiscord]" + " %c" + this.getName() + " v" + this.getVersion() + " by " + this.getAuthor() + " [onSwitch] event fired.", "color: purple; font-weight: bold;", "");
};

function getImageElement(url) {
    return '<img draggable="false" class="image" src="' + url + '">';
}

var map = { ":nangry:" : 'https://i.imgur.com/mWWce.png', 
            ":n:" : 'https://i.imgur.com/DLKdPuR.png',
            ":ncute:" : 'https://i.imgur.com/geptw.png' ,
            ":nwow:" : 'https://i.imgur.com/DjCdA.png',
            ":nroll:" : 'https://i.imgur.com/WLIba.gif',
            ":nninja:" : 'https://i.imgur.com/TkTrY.png',
            ":nmustocle:" : 'https://i.imgur.com/Oh5Bi.png',
            ":nscience:" : 'https://i.imgur.com/zqfk4.gif',
            ":nsad:" : 'https://i.imgur.com/SW1WA.gif',
            ":3:" : 'https://i.imgur.com/l1tf4K2.png',
            ":ntoot:" : 'https://i.imgur.com/nGVHr.png',
            ":nfakt:" : 'https://i.imgur.com/A5Vru.png',
            ":nrolleyes:" : 'https://i.imgur.com/JYGVM.gif',
            ":p:" : 'https://i.imgur.com/KG6DQVu.png',
            ":luck:" : 'https://i.imgur.com/SR6vz5s.png',
            "._." : 'https://i.imgur.com/P6SPTuj.gif',
            ":3" : 'https://i.imgur.com/mMJIRoH.gif',
            "xD" : 'https://i.imgur.com/CZ5gcxk.png',
            ":U" : 'https://i.imgur.com/s9Crr5g.gif',
            ":kuss:" : 'https://i.imgur.com/4xwtbbi.gif',
            ":oops:" : 'https://i.imgur.com/rxBUAEb.gif',
            ":smug:" : 'https://i.imgur.com/enEWh1U.gif',
            ":sabber:" : 'https://i.imgur.com/bZgy6Kc.gif',
            ":I" : 'https://i.imgur.com/iTRR5e1.gif',
            ":wus:" : 'https://i.imgur.com/2jFtxIT.gif',
            ":eww:" : 'https://i.imgur.com/DwfFnxq.gif',
            ":facepalm:" : 'https://i.imgur.com/FZKW2aT.gif',
            ":mustocle:" : 'https://i.imgur.com/smw3q79.gif',
            ":herp:" : 'https://i.imgur.com/Ng8iuQl.gif',
            ":derp:" : 'https://i.imgur.com/rQ4lz0p.gif',
            ":starr:" : 'https://i.imgur.com/fXZks3m.png',
            ":bambus:" : 'https://i.imgur.com/7vXpELW.gif'

};

StubeEmotes.prototype.emotes = function(messages) {
    //iterate through all messages
    forEach(messages, function(index, value) {
        var line = value.innerHTML;
        for (var key in map) {
            line = line.replaceAll(key, getImageElement(map[key]));
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
