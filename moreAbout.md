## Which package/library did you select?
The package I selected is axios, a HTTP request library.
## What is the package/library?
#### What purpose does it serve?
It serves to make request through API's (Application Program Iterfaces) and retreive information based on the API. There are lots, and you can even make your own. This program simply showcaes a Baseball API, which retrieves information on baseball teams, players and even betting information. [Baseball API](https://rapidapi.com/tank01/api/tank01-mlb-live-in-game-real-time-statistics)
#### How do you use it?
It sends a request using a very similar template to the following:
```
const options = {
  method: yourAPIKeyHere,
  url: 'https://tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com/getMLBProjections',
  params: {
    projectionType: '7'
  },
  headers: {
    'X-RapidAPI-Key': '55ffd4aaeamsh0a60fd2c5e2d1e4p1a8c8cjsn3e6e7d3e629b',
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
