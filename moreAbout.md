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
    projectionType: '7'
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
