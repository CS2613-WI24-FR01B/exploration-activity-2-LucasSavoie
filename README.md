# EA2
### What is the package/library?
The package that this exploartion activity uses is axios, an HTTP request library that can access information and data on the internet. This library is the same as the one used in the third javascript programming question.
### How do you run the program
If you have already completed Q3 for javascript, there is no need to install any new packages. Just download the code and run:
```
node EA2.js
```
Otherwise, you will need to install axios:
```
npm install axios
```
The above should have everything set for you!
### What purpose does your program serve
The program fetches data from an API and displays it. More specifically, it displays information about the current baseball season, which started recently (at least as I'm writing this it has).
It can fetch data on the league, a team, or a specific player. The goal could be to make an app to display advanced stats of players and teams. 
### What could be some sample output?
To start the program, run the above command, you will be given the following prompt:
```
Welcome to the baseball API search, pick a category.
1. Get team schedule
2. Get team Roster
3. Display Teams
4. Get player list
5. Get player information

Pick a category:
```
The user can pick a number 1 thru 5. If the user picks 1, 2 or 4, they will be given another prompt to sepcify a team, or player to search for.
Example: 
```
Pick a category: 1
Enter a team abbreviation (Example: CHW for Chicago White Sox):
```
The information is then displayed onto the terminal, here is the information on the Los Angeles Player Mike Trout.
```
Pick a category: 5
Enter a player name, try 'Mike Trout': Mike Trout
Team: LAA
Height: 6-2
Pos: CF
Weight: 235lbs
```
The program then ends. If the user wishes to give another prompt, they can run the program again.

If you wish to know more, check out the moreAbout file.
