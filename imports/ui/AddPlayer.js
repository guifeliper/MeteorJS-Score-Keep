import React from 'react';

export default class AddPlayer extends React.Component{
    render(){
        return(
            <div>   
                    <input type="text" name="playerName" placeholder="Player name" />
                    <button>Add Player</button>
            </div>
        );
    }
}