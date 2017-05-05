import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';


import { Players } from './../imports/api/players';/*mini mongo */



// Getting the array in JSX - Dynamic list Render
const renderPlayers = function (playersList) {
    return playersList.map(function (player) {
        return <p key={player._id}>{player.name} has {player.score} point(s).</p>;
    });
}

// Adding the JSX at page
Meteor.startup(function () {

    /* Monitor the queries inside the function 
    when the function changes it re run*/
    Tracker.autorun(function () {
        let players = Players.find().fetch();
        let title = "Account Settings";
        let name = 'Guilherme';
        let jsx = (
            <div>
                <h1> {title} </h1>
                <p> Olá {name} </p>
                <p> Minha segunda linha</p>
                {renderPlayers(players)}
                <form>
                    <input type="text" name="playerName" placeholder="Player name"/>
                    <button>Add Player</button>
                   </form> 
            </div>
        );
        ReactDOM.render(jsx, document.getElementById('app'));
    });
/*    Players.insert({
        name: 'Mayara',
        score: 210
    });*/
});