var Table = require('cli-table');
var moment = require("moment");
var table = new Table();

exports.prepare = function (colorize) {
    return function (data) {
        if (data.homeTeam && data.awayTeam) {
            var colorizedHomeData = colorize(data.homeTeam, data.homeTeam.short_name);
            var colorizedAwayData = colorize(data.awayTeam, data.awayTeam.short_name);
            var stringToDisplay = colorizedAwayData + " " + data.awayScore + " " + "@" + " " + data.homeScore + " " + colorizedHomeData;
            return {
                'Date' : data.date,
                'Game' : stringToDisplay.trim()
            };
        } else {
            return {
                'Date' : moment().format('LLL'),
                'Game' : "Possible error! " + ( data.homeTeam  ? data.homeTeam.short_name  : "") + ":" + ( data.awayTeam ? data.awayTeam.short_name : "* Missing *" )
            }
        }
    }
}

exports.tabulate = function (data) {
    var rows = data;
    for (var row of rows) {
        table.push({[row.Date]: row.Game});
    }
    console.log(table.toString());
}
