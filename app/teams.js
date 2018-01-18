var nbateams = [
    {
        "name": "Atlanta Hawks",
        "short_name": "ATL",
        "bg": "E03A3E",
        "fg": "C3D600"
    },
    {
        "name": "Washington Wizards",
        "short_name": "WAS",
        "bg": "002566",
        "fg": "C8102E"
    },
    {
        "name": "Utah Jazz",
        "short_name": "UTA",
        "bg": "00471B",
        "fg": "F5002F"
    },
    {
        "name": "Toronto Raptors",
        "short_name": "TOR",
        "bg": "CE1141",
        "fg": "FFFFFF"
    },
    {
        "name": "San Antonio Spurs",
        "short_name": "SAS",
        "bg": "B6BFBF",
        "fg": "000000"
    },
    {
        "name": "Sacramento Kings",
        "short_name": "SAC",
        "bg": "724C9F",
        "fg": "FFFFFF"
    },
    {
        "name": "Portland Trailblazers",
        "short_name": "POR",
        "bg": "C8102E",
        "fg": "FFFFFF"
    },
    {
        "name": "Phoenix Suns",
        "short_name": "PHX",
        "bg": "1D1160",
        "fg": "E56020"
    },
    {
        "name": "Philadelphia 76ers",
        "short_name": "PHI",
        "bg": "006BB6",
        "fg": "ED174C"
    },
    {
        "name": "Orlando Magic",
        "short_name": "ORL",
        "bg": "007DC5",
        "fg": "C4CED3"
    },
    {
        "name": "Oklahoma City Thunder",
        "short_name": "OKC",
        "bg": "007DC3",
        "fg": "F05133"
    },
    {
        "name": "New York Knicks",
        "short_name": "NYK",
        "bg": "006BB6",
        "fg": "F58426"
    },
    {
        "name": "Brooklyn Nets",
        "short_name": "BKN",
        "bg": "000000",
        "fg": "FFFFFF"
    },
    {
        "name": "Minnesota Timberwolves",
        "short_name": "MIN",
        "bg": "002B5C",
        "fg": "C6CFD4"
    },
    {
        "name": "Milwaukee Bucks",
        "short_name": "MIL",
        "bg": "00471B",
        "fg": "EEE1C6"
    },
    {
        "name": "Miami Heat",
        "short_name": "MIA",
        "bg": "98002E",
        "fg": "F9A01B"
    },
    {
        "name": "Memphis Grizzlies",
        "short_name": "MEM",
        "bg": "BBD1E4",
        "fg": "FFD432"
    },
    {
        "name": "Los Angeles Lakers",
        "short_name": "LAL",
        "bg": "FDB927",
        "fg": "552582"
    },
    {
        "name": "Los Angeles Clippers",
        "short_name": "LAC",
        "bg": "ED174C",
        "fg": "006BB6"
    },
    {
        "name": "Indiana Pacers",
        "short_name": "IND",
        "bg": "FFC633",
        "fg": "00275D"
    },
    {
        "name": "Houston Rockets",
        "short_name": "HOU",
        "bg": "CE1141",
        "fg": "FFFFFF"
    },
    {
        "name": "Golden State Warriors",
        "short_name": "GSW",
        "bg": "006BB6",
        "fg": "FDB927"
    },
    {
        "name": "Detroit Pistons",
        "short_name": "DET",
        "bg": "006BB6",
        "fg": "ED174C"
    },
    {
        "name": "Denver Nuggets",
        "short_name": "DEN",
        "bg": "4FA8FF",
        "fg": "FFB20F"
    },
    {
        "name": "Dallas Mavericks",
        "short_name": "DAL",
        "bg": "007DC5",
        "fg": "FFFFFF"
    },
    {
        "name": "Cleveland Cavaliers",
        "short_name": "CLE",
        "bg": "860038",
        "fg": "FDBB30"
    },
    {
        "name": "Chicago Bulls",
        "short_name": "CHI",
        "bg": "CE1141",
        "fg": "000000"
    },
    {
        "name": "Charlotte Hornets",
        "short_name": "CHA",
        "bg": "008CA8",
        "fg": "1D1160"
    },
    {
        "name": "Boston Celtics",
        "short_name": "BOS",
        "bg": "008348",
        "fg": "FFFFFF"
    }
];

exports.find = function(name) {
    var filtered = nbateams.filter(function(team) {
        if(team.short_name === name.toUpperCase()) {
            return team;
        }
    });
    return filtered[0];
}
