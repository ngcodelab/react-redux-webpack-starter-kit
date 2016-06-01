import React, {Component} from 'react';

class GreetControl extends Component {
  constructor(props) {
    super(props);
    this.onSayHello = this.onSayHello.bind(this);
    this.onSayBye = this.onSayBye.bind(this);
  }

  onSayHello() {
    this.props.sayHello();
  }

  onSayBye() {
    this.props.sayBye();;
  }

  render() {
    let greeting = this.props.greeting;
    let user = this.props.user;
    return (
      <div>
        <button onClick={this.onSayHello}>Say Hello</button>
        <button onClick={this.onSayBye}>Say Bye</button>
      </div>
    )
  }
}

export default GreetControl;
