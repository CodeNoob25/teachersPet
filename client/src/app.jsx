
import React from 'react';
import ReactDOM from 'react-dom';
// import axios from 'axios';
import Login from './modules/loginModules/login.jsx';
import CreationLogin from './modules/loginModules/creationLogin.jsx';
import '../../node_modules/semantic-ui-css/semantic.min.css';
import HomePage from './modules/userModules/homePage.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'login',
      theme: 'default',
      message: '',
      user: {},
      school: {name: 'Example School', address: '25 Example Lane', dbCode: 0}
    }

    this.changeAttribute = this.changeAttribute.bind(this);
  }

  changeAttribute(attribute, input) {
    if (attribute === 'page') {
      this.setState({
        currentView: input
      });
    } else if (attribute === 'theme') {
      this.setState({
        theme: input
      });
    } else if (attribute === 'message') {
      this.setState({
        message: input
      });
    } else if (attribute === 'user') {
      this.setState({
        user: input
      });
    } else if (attribute === 'school') {
      this.setState({
        schoolAddress: input
      });
    }
    
  }

  render() {
    if (this.state.currentView === 'login') {
      return (
        <Login changeAttribute={this.changeAttribute} school={this.state.school}/>
      )
    } else if (this.state.currentView === 'creationLogin') {
      return (
        <CreationLogin changeAttribute={this.changeAttribute}/>
      )
    } else if (this.state.currentView === 'homePage') {
      return (
        <HomePage changeAttribute={this.changeAttribute}/>
      )
    }
    
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
