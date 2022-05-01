import React from 'react';

export default class Square extends React.Component {

    render() {
        console.log(this.props);
        return (
            <button className="square" onClick={
                function () {
                    console.log('click');
                }}>
                {this.props.value}
            </button>
        );
    }
}