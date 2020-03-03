## NBA-CLI

Command-line utility for keeping up to date with NBA scores and schedules using the SportRadar API

[NBA-CLI screenshot](./nba-cli.PNG)

### Installation

Get a SportRadar API key for NBA


Add to your environment

```
vi ~/.bashrc
export NBA_SR_KEY=_YOUR_SPORTRADAR_KEY
:wq
source ~/.bashrc


Run `npm install`
Then `npm link`

Enter `nba -d [Some number of days; positive for future dates, negative for past dates]`


* Only tested in Linux terminal. Results may vary

_Note_ 

For negative inputs, ensure to escape the parameter. eg `nba -d \ -2`
