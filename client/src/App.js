import React, { Component } from "react";
import PlayersForm from './components/Form'
import CustomButtonGroup from './tools/CustomButttonGroup'
import FlashMessage from 'react-flash-message'

import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerName: "",
            playerName2: "",
            playersEntered: 0,
            count: {player1: 0, player2: 0},
            showFlash: false,
            flashmessage: "",
            playerNames: {player1: "", player2: ""}
        };
        this.setPlayerName = this.setPlayerName.bind(this);
        this.increment = this.increment.bind(this)
    }

    increment(value, player) {
        let points = 0;
        if (value == 'fifteen') {
            points = 1
        } else if (value == 'thirty') {
            points = 2
        } else if (value == 'fourty') {
            points = 3
        }
        let count = {...this.state.count, [player]: (this.state.count[player] + points)}
        let {player1, player2} = count

        let showFlash = (player1 - player2 == 0 || Math.abs(player1 - player2) >= 3)
        let winner = player1 > player2 ? "Player 1" : "Player 2"
        let flashMessage = player1 - player2 == 0 ? "Douce" : `Advantages for ${winner}`
        console.log("Show flash", showFlash, player1, player2)
        this.setState({
            count: count,
            showFlash,
            flashMessage
        }, () => {
            console.log("This .state. count", this.state.count)
        });
    };

    setPlayerName(name, player) {
        this.setState({
            playerNames: {...this.state.playerNames, [player]: name}
        })
    }

    render() {
        return (   
            <div className="App">
                <header className="App-header">
                </header>
                <table>
                    <tr>
                        <td>
                            {
                                this.state.playerNames.player1.length == 0 && 
                                <PlayersForm 
                                setPlayerName={this.setPlayerName} 
                                player={'player1'}
                                playersEntered={this.state.playersEntered} 
                            />
                            }
                           
                        </td>
                        <td>
                            {
                                this.state.playerNames.player2.length == 0 &&
                                <PlayersForm 
                                    setPlayerName={this.setPlayerName} 
                                    player={'player2'}
                                    playersEntered={this.state.playersEntered} 
                                />
                            }
                        </td>
                    </tr>
                    <tr>
                        <th><h1>Player 1</h1></th>
                        <th><h1>Player 2</h1></th>
                    </tr>
                    <tr>
                        <td>{this.state.playerNames.player1}</td>
                        <td>{this.state.playerNames.player2}</td>
                    </tr>
                    <td>
                        <h3>Score {this.state.count.player1}</h3>
                        {this.state.playerNames.player1.length > 0 && this.state.playerNames.player2.length > 0 &&
                            <CustomButtonGroup player={"player1"} increment={this.increment}/>
                        }
                        
                    </td>
                    <td>
                        <h3>Score {this.state.count.player2}</h3>
                        {this.state.playerNames.player2.length > 0 && this.state.playerNames.player1.length > 0 &&
                        <CustomButtonGroup player={"player2"} increment={this.increment}/>
                        }
                    </td>
                </table>
                {
                    this.state.showFlash && <FlashMessage duration={5000} persistOnHover={true}>
                        <p>{this.state.flashMessage}</p>
                    </FlashMessage> 
                }
                
            </div>
        );
    }
}

export default App;