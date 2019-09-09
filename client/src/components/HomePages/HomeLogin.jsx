import React from 'react';

class HomeLogin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };

  }

  render() {
    return (
      <div>
      Login
        <form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
      </div>
    )
  }
}

export default HomeLogin;
