import React from 'react';

class SettingsChangePopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: ''
    }
    this.updateInput = this.updateInput.bind(this);
  }

  updateInput(event) {
    this.setState({
      userInput: event.target.value
    })
  }

  render() {
    return (
      <div className="popup">
        <div className="innerPopup">
          <h1>{this.props.title}</h1>
          <div>{this.props.text}</div>
          <input value={this.userInput} onChange={this.updateInput} />
          <button class="popButton" onClick={this.props.confirmPopup}>OK</button>
          <button class="popButton" onClick={this.props.closePopup}>Cancel</button>
        </div>
      </div>
    )
  };
}

export default SettingsChangePopup;