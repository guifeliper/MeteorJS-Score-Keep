import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

/*mini mongo */
import { Players } from './../imports/api/players';
//Importing React components
import App from './../imports/ui/App';

Meteor.startup(() => {
    /* Monitor the queries inside the function 
    when the function changes it re run*/
    Tracker.autorun(() => {
        let players = Players.find({},{sort: {score:-1}}).fetch();
        let title = "Score Keep";
        ReactDOM.render(<App title={title} players={players}/>, document.getElementById('app'));
    });
});