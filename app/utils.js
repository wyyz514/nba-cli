var moment = require('moment');
var request = require('request');
var teams = require('./teams');
var progress = require('progress');

function progressBar(length) {
    return new progress('[ Loading data...Please be patient \\o/ ]:bar', { 
        total: length,  
        complete: '\u2590',
        incomplete: '--',
        width: 20, 
        
    });
}
function tokenize(delimiter) {
    
    return function(toTokenize) {
        if(typeof toTokenize !== 'string') {
            throw new Error('[tokenize] Item must be string', toTokenize);
        }  
        var tokenized = toTokenize.split(delimiter);
        return tokenized;
    }
}

function createDateStruct(tokenized) {
    var expectedType = Object.prototype.toString.call([]);
    var type = Object.prototype.toString.call(tokenized);
    if(type !== expectedType) {
        throw new Error('[createDateStruct] Expected ' + expectedType + ' but got ' + type);
    }
    return {
        "year" : tokenized[0],
        "month": tokenized[1],
        "day"  : tokenized[2]
    }
}

function compose(f1, f2) {
    return function(x) {
        return f1(f2(x));
    }    
}

function promisifyRequest(url) {
    return new Promise(function(resolve, reject){
        request.get(url, function(err, response, body){
            if(err)  throw new Error('Could not retrieve data');
            if(response && response.statusCode) resolve(body);
        });
    });
}

function replaceParams(replacements) {
    return function(url) {
        replacements = replacements || {};
        replacements.version = 'v4';
        replacements.access_level = 'trial';
        replacements.format = 'json';
        replacements.your_api_key = process.env.NBA_SR_KEY;
        
        var modifiedUrl = url;
        Object.keys(replacements).map(function(key) {
           var paramRegex = new RegExp("{"+key+"}");
           modifiedUrl = modifiedUrl.replace(paramRegex, replacements[key]);
        });
        return modifiedUrl;   
    }
}

function makeDelayedRequests(delay) {
    var count = 0;
    return function (urls) {
        var bar = progressBar(urls.length);
        
        return new Promise(function(resolve, reject){
            function makeRequest(url, data) {
                if (!url) {
                    resolve(data);
                    return;
                }
                
                var promisedRequest = promisifyRequest(url);
                data.push(promisedRequest);
                count = count + 1;
                bar.tick();
                setTimeout(function(u, d){
                    makeRequest(u, d);
                }, delay, urls[count], data);
            }
            
            makeRequest(urls[count], []);
        });
       
    }
}

function getDays(days) {
    var mode = 'future'; //count days forward
    var format    = 'YYYY-MM-DD';
    var tokenizer = tokenize('-');
    var dates     = [];
    
    if(!days) {
        throw new Error('[getDays] Please pass in a value for days');    
    }
    
    if(days < 0) {
        mode = 'past';
    }
    
    var daysPassed = 0;
    
    while(daysPassed <= Math.abs(days)) {
        if(mode == 'past')
            var date = moment().subtract(daysPassed, 'days');
        else 
            var date = moment().add(daysPassed, 'days');
            
        daysPassed = daysPassed + 1;
        dates.push(date.format(format));
    }
    
    var tokenizeAndCreateStruct = compose(createDateStruct, tokenizer);
    
    return dates.map(tokenizeAndCreateStruct);
} 

function stringToJSON(data) {
    if(typeof data === 'string')
        return JSON.parse(data);
    return data;
}

function extractGames(gameData) {
    return gameData.games;
}

function buildGameInfo(game) {
     var gameDataStruct = {
        'date': moment(game.scheduled).format('LLL'),
        'homeTeam': game.home ? teams.find(game.home.alias) : '--',
        'awayTeam': game.away ? teams.find(game.away.alias) : '--',
        'homeScore': game.home_points ? game.home_points : '--',
        'awayScore': game.away_points ? game.away_points : '--',
    }  
    return gameDataStruct;
}


exports.getDays = getDays;

exports.makeDelayedRequests = makeDelayedRequests;

exports.replaceParams = replaceParams;

exports.compose = compose;

exports.extractGames = extractGames;

exports.stringToJSON = stringToJSON;

exports.buildGameInfo = buildGameInfo;

exports.tokenizeAndCreateStruct = compose(createDateStruct, tokenize('-'));