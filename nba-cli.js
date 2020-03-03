#! /usr/local/bin/node

var utils = require('./app/utils');
var stats = require('./app/stats');
var program = require("commander");

var url = "https://api.sportradar.us/nba/{access_level}/{version}/en/games/{year}/{month}/{day}/schedule.{format}?api_key={your_api_key}";
//var url = "https://jsonplaceholder.typicode.com/posts/1";

program
    .version('0.0.1')
    .usage('[options]<keywords>')
    .option('-d, --days', 'Show scores and schedules. Positive value for future dates and negative values for past dates')
    .parse(process.argv);

if(!program.args.length) {
    program.help();
} else {
    if(program.days) {
        var dates = utils.getDays(parseInt(program.args[0]));

        var requestUrls = dates.map(function(date) {
            return utils.replaceParams(date)(url);
        });
        
        stats.getStats(requestUrls).then(function(data) {
            Promise.all(data).then(function(d){
               stats.displayStats(d);
            })
            .catch(function(e){
              console.log(e);
            });
        });
        }   
}
