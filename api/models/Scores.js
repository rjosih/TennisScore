var mongoose = require('mongoose')

var gameSummarySchema = new mongoose.Schema({
    playerOneScore: Number,
    playerTwoScore: Number,
    playerOneName: String,
    playerTwoName: String
})

var GameSummary = mongoose.model('GameSummary', gameSummarySchema)

module.exports =  GameSummary;