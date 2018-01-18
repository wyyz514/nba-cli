var table = require('tty-table');
var moment = require("moment");

var header = [
 {
  value : "Date",
  color: "white",
  align : "center",
  width : 40
 },
 {
  value : "Game",
  color : "white",
  align : "center",
  width : 40
 }
];

exports.colorize = function (colorize) {
    return function (data) {
        if (data.homeTeam && data.awayTeam) {
            var colorizedHomeData = colorize(data.homeTeam, data.homeTeam.short_name);
            var colorizedAwayData = colorize(data.awayTeam, data.awayTeam.short_name);
            var stringToDisplay = colorizedAwayData + data.awayScore + '@' + data.homeScore + colorizedHomeData;
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
    console.log(table(header, rows).render());
}