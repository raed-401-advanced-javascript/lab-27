import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleUp = e => {
    let count = this.state.count + 1;
    this.updateCounter(count);
  };

  handleDown = e => {
    let count = this.state.count - 1;
    this.updateCounter(count);
  };

  updateCounter(count) {
    let polarity = '';
    if (count > 0) {
      polarity = 'positive';
    } else if (count < 0) {
      polarity = 'negative';
    }
    this.setState({ count, polarity });
  }

  render() {
    return (
      <section className="counter">
        <span className="down_clicker" onClick={this.handleDown}> - </span>
        <span className='result'>{this.state.count}</span>
        <span className="up_clicker" onClick={this.handleUp}> + </span>
      </section>
    );
  }
}

export default Counter;
