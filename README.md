# tennis-score
![PictureOfApplication](https://i.ibb.co/2nHgKYs/App.png)
Tennis-score application is made to keep track of tennis players scores.
When a game is played, the application announces the winner and the scores are being stored in a data base.
The game starts automatically when you have filled in two players names.

The following rules for the game are:

1. A game is won by the first player to have won at least four points in total and at least two points more than the opponent. 

2. The running score of each game is described in a manner peculiar to tennis: scores from zero to three points are described as "Love", "Fifteen", "Thirty", and "Forty" respectively.

3. If at least three points have been scored by each player, and the scores are equal, the score is "Deuce".

4. If at least three points have been scored by each side and a player has one more point than his opponent, the score of the game is "Advantage" for the player in the lead.

## Techniques
### Front-end 
* ReactJS
* React-bootstrap (CSS-framework)

### Back-end 
* NodeJS
* Express
* MongoDB (database)

## Choice of techniques
I choose ReactJS as a front-end framework because I know it, also that I know it's very popular these days and is one of the latest technologies in Javascript.
Since React and React-bootstrap works fine together and React-bootstrap says be one of the best CSS-framework I went with that too.
NodeJS and Express are also very popular choices to backend. 
The reason why I chose them is first of all, I can them but also because they go very good together with React.
At last, the database. I was pending between SQL database and MongoDB. 
I came up with that MongoDB was the easiest way to integrate with an existing application in my situation.

## Get started
    * Open terminal (terminal 1) in chosen directory
    * "git clone https://github.com/rjosih/tennis-score.git"
    * "cd tennis-score"
    * Open two more terminals in the root directory
    * "cd api" in terminal 1 
     * "npm i" in terminal 1
     * "npm start" in terminal 1
     * "cd client" in terminal 2
     * "npm i" in terminal 2
     * "npm start" in terminal 2
     * "cd .." in terminal 3
     * "mongodb" in terminal 3
The project should start at https://localhost/3000

## Archictecture
![ArchitectureOfApplication](https://i.ibb.co/L8djgCy/Untitled-Diagram-2.png)

### Process 
* User surfs into browser
* Browser gets styling from CSS framework
* When the game is over the client sends the data to the server
* The server sends the data further to the database where it is stored.
* If it is coming in the right format etc. the server get an ok (201 status).

## My thoughts
First I was thinking about building a serverless application. But since I added the database afterwards I decided to go with a server overall for
future features. So it doesn't make it difficult in the future for me. 
It's important to build an application so it's so easy as possible to maintain in future.


## Future work
In future work I would definetly implement the authentication-function. 
Also I would implement the function to see the matches before, like a history page. 
If I implement the authentication-function first it means that everyone has their private scores etc.

## Test in Postman
It is available to test the api-function in Postman.
Copy paste localhost:9000/games with the GET and send. 
It looks like this:

![TestInPostman](https://i.ibb.co/8xCQZHB/fetched.png)



