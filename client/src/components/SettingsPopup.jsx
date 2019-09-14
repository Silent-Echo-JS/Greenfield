import React from 'react';

class SettingsPopup extends React.Component {
  render() {
    return (
      <div className="popup">
        <div className="innerPopup">
          <h1>{this.props.title}</h1>
          <div>{this.props.text}</div>
          <button class="popButton" onClick={this.props.confirmPopup}>OK</button>
          <button class="popButton" onClick={this.props.closePopup}>Cancel</button>
        </div>
      </div>
    )
  };
}

export default SettingsPopup;
