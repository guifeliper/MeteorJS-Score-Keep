import React from 'react';
import PropTypes from 'prop-types';

//REACT COMPONENT
export default class TitleBar extends React.Component {
    render() {
         
        return (
            <div className="titleBar">
                <h1> {this.props.title}</h1>
            </div>
        );
}
}
TitleBar.propTypes = {
    title: PropTypes.string.isRequired
};

TitleBar.defaultProps = {
    title: "Score Keep App"
};