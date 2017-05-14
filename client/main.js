import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

/*mini mongo */
import { Players } from './../imports/api/players';
//Importing React components
import TitleBar from './../imports/ui/Titlebar';
import AddPlayer from './../imports/ui/AddPlayer';
import Player from './../imports/ui/Player';

// Getting the array in JSX - Dynamic list Render
const renderPlayers = (playersList) => {
    return playersList.map((player) => {
        return <Player key={player._id} player={player}/>
    });
};



// Adding the JSX at page
Meteor.startup(() => {

    /* Monitor the queries inside the function 
    when the function changes it re run*/
    Tracker.autorun(() => {
        let players = Players.find().fetch();
        let title = "Score Keep";
        let name = 'Guilherme';
        let jsx = (
            <div>
                <TitleBar title={title}/>
                <p> Olá {name} </p>
                <p> Minha segunda linha</p>
                {renderPlayers(players)}
                
                    <AddPlayer/>
            </div>
        );
        ReactDOM.render(jsx, document.getElementById('app'));
    });
});