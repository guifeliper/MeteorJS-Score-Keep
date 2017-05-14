import React from 'react';
import PropTypes from 'prop-types';

//React components
import TitleBar from './Titlebar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <TitleBar title={this.props.title} />
                <PlayerList players={this.props.players} />
                <AddPlayer/>
            </div>

        );
    }
};

App.propTypes = {
    title: PropTypes.string.isRequired,
    players: PropTypes.array.isRequired
}