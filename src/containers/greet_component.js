import React, {Component} from 'react';

class Greet extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let greeting = this.props.greeting;
    let user = this.props.user;
    return (
      <div>
        {greeting.say} {user.name}.
      </div>
    )
  }
}

export default Greet;
