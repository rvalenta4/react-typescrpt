import React, { Component } from 'react';

interface Props {}

interface State {
    noOfClicks: number
}

export default class ClassComponent extends Component <Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = { noOfClicks: 0 }
    }

    render() {
        return (
            <>
                <div>
                    Class Component
                </div>
                <button onClick={() => this.setState({noOfClicks: this.state.noOfClicks + 1})}>
                    Click Me
                </button>
            </>
        )
    }
}
