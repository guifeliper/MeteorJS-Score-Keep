import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

Meteor.startup(function () {
    let title = "Account Settings";
    let name = 'Guilherme';
    let jsx = (
        <div>
            <h1> {title} </h1>
            <p> Olá {name} </p>
            <p> Minha segunda linha</p>
        </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
});