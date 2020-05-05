import React from "react";

class CalenderA extends React.Component {
  state = {
    startDate: new Date(),
  };

  handleChange = (date) => {
    this.setState({
      startDate: date,
    });
  };

  render() {
    return (
      <DatePicker
        selected={this.state.date}
        onSelect={this.handleSelect}
        onChange={this.handleChange}
      />
    );
  }
}

export default CalenderA;
