// @flow

import React, { Component } from "react";

import { Counter } from "./counter";

type Props = {};

type State = {
  counterValue: number
};

export class App extends Component<Props, State> {
  state = {
    counterValue: 0
  };

  handleCounterChange = async (counterValue: number): Promise<void> => {
    await this.setState({ counterValue });
    console.log(this.state);
  };

  render() {
    return (
      <div>
        {Array.from({ length: 999 }).map((_, i) => (
          <Counter
            key={i}
            value={this.state.counterValue}
            onChange={this.handleCounterChange}
          />
        ))}
      </div>
    );
  }
}
