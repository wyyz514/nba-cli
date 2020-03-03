var utils = require('./utils');
var display = require('./display');
var colorize = require('./colorize');
var _colorize = display.prepare(colorize);

function displayStats(stats) {
    var statsJSON =  stats.map(utils.stringToJSON);
    var preparedStats =
    statsJSON.map(utils.extractGames)
    .reduce(function(prev,next) {
        return prev.concat(next);
    }, [])
    .map(utils.buildGameInfo);
    display.tabulate(preparedStats.map(_colorize));

}

exports.getStats = utils.makeDelayedRequests(2500);
exports.displayStats = displayStats;
