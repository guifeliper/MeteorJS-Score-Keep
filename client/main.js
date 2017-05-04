import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

/*Array of players */
const players = [{
    _id: '1',
    name: 'Lauren',
    score: 99
}, {
    _id: '2',
    name: 'Cory',
    score: -1
}, {
    _id: '3',
    name: 'Andrew',
    score: -12
}, , {
    _id: '4',
    name: 'Guilherme',
    score: 100
}];
/* Getting the array in JSX - Dynamic list Render*/
const renderPlayers= function (playersList){
   return playersList.map(function(player){
            return <p key={player._id}>{player.name} has {player.score} point(s).</p>;
    });
}

/* Adding the JSX at page */
Meteor.startup(function () {
    let title = "Account Settings";
    let name = 'Guilherme';
    let jsx = (
        <div>
            <h1> {title} </h1>
            <p> Olá {name} </p>
            <p> Minha segunda linha</p>
            {renderPlayers(players)}
        </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
});