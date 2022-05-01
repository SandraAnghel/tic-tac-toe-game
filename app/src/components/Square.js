import React from 'react';

export default class Square extends React.Component {
    render() {
        console.log(this.props);
        return (
            <button className="square">
                {this.props.value}
            </button>
        );
    }
}