const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const axios = require('axios');


console.log("Welcome to the baseball API search, pick a category.");
console.log("1. Get team schedule");
console.log("2. Get team Roster");
console.log("3. Display Teams");
console.log("4. Get player list");
console.log("5. Get player information\n");

rl.question('Pick a category: ', function(line) {
    if (line == 1) {
        rl.question("Enter a team abbreviation (Example: CHW for Chicago White Sox): ", function(team) {
            getTeamSchedule(team)
        });
    } else if (line == 2) {
        rl.question("Enter a team abbreviation (Example: CHW for Chicago White Sox): ", function(team) {
            getTeamRoster(team)
        });
    } else if (line == 3) {
        displayTeam()
    } else if (line == 4) {
        getPlayerList()
    } else if (line == 5) {
        rl.question("Enter a player name, try 'Mike Trout': ", function(player) {
            getPlayerInfo(player);
        });
    } else {
        console.log("Run the program again and enter one of the possible options (1-5).");
    }
});


async function getTeamSchedule(team) {
    const options = {
        method: 'GET',
        url: 'https://tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com/getMLBTeamSchedule',
        params: {
            teamAbv: team,
            season: '2024'
        },
        headers: {
            'X-RapidAPI-Key': '55ffd4aaeamsh0a60fd2c5e2d1e4p1a8c8cjsn3e6e7d3e629b',
            'X-RapidAPI-Host': 'tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        for (let i = 0; i < Object.keys(response.data.body.schedule).length; i++) {
            if (response.data.body.schedule[i].home == team) {
                console.log("Game is home, against: ");
                console.log(response.data.body.schedule[i].away);
                gameDate = response.data.body.schedule[i].gameDate;
                year = gameDate.slice(0, 4);
                month = gameDate.slice(4, 6);
                day = gameDate.slice(6, 8);
                console.log(year + "-" + month + "-" + day);
            } else {
                console.log("Game is away, against: ");
                console.log(response.data.body.schedule[i].home);
                gameDate = response.data.body.schedule[i].gameDate;
                year = gameDate.slice(0, 4);
                month = gameDate.slice(4, 6);
                day = gameDate.slice(6, 8);
                console.log(year + "-" + month + "-" + day);
            }
        }
    } catch (error) {
        console.error(error);
    }
    process.exit(0);
}


async function getTeamRoster(team) {
    const options = {
        method: 'GET',
        url: 'https://tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com/getMLBTeamRoster',
        params: {
            teamAbv: team,
            getStats: 'true'
        },
        headers: {
            'X-RapidAPI-Key': '55ffd4aaeamsh0a60fd2c5e2d1e4p1a8c8cjsn3e6e7d3e629b',
            'X-RapidAPI-Host': 'tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        for (let i = 0; i < Object.keys(response.data.body.roster).length; i++) {
            console.log("Name: " + response.data.body.roster[i].longName);
            console.log("\tPosition: " + response.data.body.roster[i].pos);
            console.log("\tJersey Number: " + response.data.body.roster[i].jerseyNum);
        }

    } catch (error) {
        console.error("There was an error pereforming your search. The abbreviation you entered might not be correct. If so, try using the display teams command.");
    }
    process.exit(0);
}

async function displayTeam() {
    const options = {
        method: 'GET',
        url: 'https://tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com/getMLBTeams',
        params: {
            teamStats: 'true',
            topPerformers: 'true'
        },
        headers: {
            'X-RapidAPI-Key': '55ffd4aaeamsh0a60fd2c5e2d1e4p1a8c8cjsn3e6e7d3e629b',
            'X-RapidAPI-Host': 'tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        for (let i = 0; i < Object.keys(response.data.body).length; i++) {
            console.log(response.data.body[i].teamCity + " " + response.data.body[i].teamName + " " + response.data.body[i].teamAbv);
            console.log("\tConference: " + response.data.body[i].conferenceAbv);
            console.log("\tW-L: " + response.data.body[i].wins + "-" + response.data.body[i].loss + "\n");
        }

    } catch (error) {
        console.error(error);
    }
    process.exit(0);
}

async function getPlayerList() {
    const options = {
        method: 'GET',
        url: 'https://tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com/getMLBPlayerList',
        headers: {
            'X-RapidAPI-Key': '55ffd4aaeamsh0a60fd2c5e2d1e4p1a8c8cjsn3e6e7d3e629b',
            'X-RapidAPI-Host': 'tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        for (let i = 0; i < Object.keys(response.data.body).length; i++) {
            if (response.data.body[i].team == '') {
                console.log("FA: " + response.data.body[i].longName);
            } else {
                console.log(response.data.body[i].team + ": " + response.data.body[i].longName);
            }
        }
        console.log("FA represent Free Agent.");
    } catch (error) {
        console.error(error);
    }
    process.exit(0);
}

async function getPlayerInfo(player) {
    const options = {
        method: 'GET',
        url: 'https://tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com/getMLBPlayerInfo',
        params: {
            playerName: player,
            getStats: 'true'
        },
        headers: {
            'X-RapidAPI-Key': '55ffd4aaeamsh0a60fd2c5e2d1e4p1a8c8cjsn3e6e7d3e629b',
            'X-RapidAPI-Host': 'tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        console.log("Team: " + response.data.body[0].team);
        console.log("Height: " + response.data.body[0].height);
        console.log("Pos: " + response.data.body[0].pos);
        console.log("Weight: " + response.data.body[0].weight + "lbs")
        if (response.data.body[0].pos == "P") {
            console.log("Strikes: " + response.data.body[0].stats.Pitching.Strikes);
        } else {
            console.log("Home Runs: " + response.data.body[0].stats.Hitting.HR);
        }
    } catch (error) {
        console.error(error);
    }
    process.exit(0);
}
