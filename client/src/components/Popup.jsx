import React from 'react';

// this is not used within the current state of the app
// to use, do something like this:
// {this.state.showSignout ?
//   <Popup title="Sign Out" text='Are you sure you want to sign out?' closePopup={this.signout.bind(this)} />
//     : null
//  } */}
class Popup extends React.Component {
  render() {
    return (
      <div className="popup">
        <div className="innerPopup">
          <h1>{this.props.title}</h1>
          <div>{this.props.text}</div>
          <button className="popButton" onClick={this.props.confirmPopup}>OK</button>
          <button className="popButton" onClick={this.props.closePopup}>Cancel</button>
        </div>
      </div>
    )
  };
}

export default Popup;
