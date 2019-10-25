var express = require('express');
var router = express.Router();
var GameSummary = require('../models/Scores')

router.post('/', function(req, res) {
    console.log("Saving", req.body)
    let { playerOneName, playerTwoName, playerOneScore, playerTwoScore } = req.body

    let newGame = new GameSummary({
        playerOneName,
        playerTwoName,
        playerOneScore,
        playerTwoScore
    })

    if(!playerOneName || !playerTwoName || !playerOneScore || !playerTwoScore) { 
        return res.status(401).send({ 
            success: false,
            message: "Invalid input"
        })
    }

    newGame.save((err, game) =>{ 
        if(err) {
            return res.status(401).send({ 
                success: false,
                message: "Failed to save game"
            })
        }
        return res.status(201).send({ 
            success: true,
            message: "Game saved successfully"
        })
    })
});

router.get('/', function(req, res){ 
    GameSummary.find({}, (err, games) => { 
        if(err) { 
            return res.status(401).send({ 
                success: false,
                message: "Failed to get data"
            })
        }
        return res.status(200).send({ 
            success: true,
            message: "Fetched games",
            data: {
                games
            }
        })
    })
})

module.exports = router;