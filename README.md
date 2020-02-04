## NBA-CLI

Command-line utility for keeping up to date with NBA scores and schedules using the SportRadar API

[NBA-CLI screenshot](./nba-cli.PNG)

### Installation

Get a SportRadar API key for NBA


Add to your environment

`export NBA_SR_KEY="YOUR API KEY"`


Run `npm install`

Might need to edit the first line of ./nba-cli.js to your node path (the output of `which node`)

Enter `./nba-cli.js -d [Some number of days; positive for future dates, negative for past dates]`


* Only tested in Linux terminal. Results may vary

_Note_ 

For negative inputs, ensure to escape the parameter. eg `./nba-cli.js -d \ -2`
