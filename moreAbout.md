## Which package/library did you select?
The package I selected is axios, a HTTP request library.
## What is the package/library?
#### What purpose does it serve?
It serves to make request through API's (Application Program Iterfaces) and retreive information based on the API. There are lots, and you can even make your own. This program simply showcaes a Baseball API, which retrieves information on baseball teams, players and even betting information. [Baseball API](https://rapidapi.com/tank01/api/tank01-mlb-live-in-game-real-time-statistics)
#### How do you use it?
It sends a request using a very similar template to the following:
```
const options = {
  method: 'GET',
  url: 'https://tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com/getMLBProjections',
  params: {
    if there are any paramters to narrow search, they would go here
  },
  headers: {
    'X-RapidAPI-Key': yourAPIKeyHere,
    'X-RapidAPI-Host': 'tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
```
However, under method, there are many more commands, like set, host, etc. This is a feature in most HTTP request libraries. 
There are several different API hosting websites, like [RapidAPI](https://rapidapi.com/hub), the one chosen in this example.
An API key can be created and used for any API and send a request through axios. 
## What are the functionalities of the library
The library can retrieve information following a very similar format to the code above, an example output can be shown below.
```
{
  statusCode: 200,
  body: [
    {
      espnID: '30836',
      sleeperBotID: '1469',
      fantasyProsPlayerID: '3785',
      highSchool: 'Millville, Millville, NJ',
      throw: 'R',
      weight: '235',
      jerseyNum: '27',
      team: 'LAA',
      mlbHeadshot: 'https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:silo:current.png/r_max/w_180,q_auto:best/v1/people/545361/headshot/silo/current',
      yahooPlayerID: '8861',
      espnLink: 'https://www.espn.com/mlb/player/_/id/30836',
      yahooLink: 'https://sports.yahoo.com/mlb/players/8861',
      bDay: '8/7/1991',
      mlbLink: 'https://www.mlb.com/player/mike-trout-545361',
      teamAbv: 'LAA',
      espnHeadshot: 'https://a.espncdn.com/i/headshots/mlb/players/full/30836.png',
      rotoWirePlayerIDFull: 'mike-trout-10956',
      teamID: '13',
      pos: 'CF',
      mlbIDFull: 'mike-trout-545361',
      cbsPlayerID: '1739608',
      longName: 'Mike Trout',
      bat: 'R',
      rotoWirePlayerID: '10956',
      height: '6-2',
      lastGamePlayed: '20240331_LAA@BAL',
      mlbID: '545361',
      playerID: '545361',
      fantasyProsLink: 'https://www.fantasypros.com/mlb/players/mike-trout.php'
    }
  ]
}
```
This snippet was retrieved using the following command.
```
const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com/getMLBPlayerInfo',
  params: {
    playerName: 'Mike Trout',
    getStats: 'false'
  },
  headers: {
    'X-RapidAPI-Key': yourAPIKeyHere,
    'X-RapidAPI-Host': 'tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
```
You can see in params, the name 'Mike Trout' was all that was needed to retrieve all that information.

This format may seem familiar, as it is a JSON. There's lots of information, from team to weight, to even headshots of the players.
This goes for most API requests, gives a JSON file, where you can parse and retrieve specific information. The library itself isn't all that useful, however all the API information that can be retreived is very useful, and is a very widely used tool. There are APIs about other sports, stocks, text to speech, and loads of others. 
## When was it createad?
It was made on August 29th, 2014, as per their [github page](https://github.com/axios/axios/tree/main).
It is also what is known as 'open source', allowing for modifications to be made if needed. So there is no one creator or a group of people, it may be hundreds or even thousands. Linux is the most popular example of open source software. 
## Why did you select this library?
I wanted to farmiliarize myself with APIs and how to handle requests. Axios was introduced as a part of JavaScript question 3 and it was really intruiging. I wanted to learn more about this use of software, and eventually build a more polished, and in-depth project (maybe not using Axios, but the idea still remains).

In short, I plan on using similar libraries in the future. 
## How did learning the package/library influence your learning of the language? 
Asynchronous functions are very useful in JavaScript, not just for HTTP requests, but other things as well. This exploration activty allowed me to have a better understanding of how they work. Also the use of packages in JavaScript was made more clear.	
## How was your overall experience with the package/library? 
I enjoyed using this library, it was very straightforward, and after getting the idea for 1 request, modyfing the code to make more specific requests, or several, was quite simple. 

#### When would you recommend this package/library to someone?
If they chose to use JavaScript, and the data is too large to handle singlehandedly, and not redily available. In the example, getting a baseball players height and weight may seem simple, but getting hundreds of players information is no easy task. This applies to all other APIs mentioned above. 

#### Would you continue using this package/library? Why or why not?
I would! It's ease of use and variety in terms of APIs are very useful, and make getting information for a potential project simple enough. I am also familiar with it.
