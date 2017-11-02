import React from "react";

export default class Hello2 extends React.Component {
    render () {
        return <p>Hi { this.props.to } from { this.props.from }</p>
    }
}