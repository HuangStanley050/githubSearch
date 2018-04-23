/*global localStorage*/
import React, { Component } from 'react';
import Auth0Lock from 'auth0-lock';
import Header from "./components/header.js";
import './App.css';
import Github from "./github.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idToken: "",
      profile: {}
    };
    this.showLock = this.showLock.bind(this);
    this.setProfile = this.setProfile.bind(this);
    this.getProfile = this.getProfile.bind(this);
    this.logout = this.logout.bind(this);
  }

  static defaultProps = {
    clientID: "LIQ4hgQ1CDrZ82kqnub5UZF1YYphYeiN",
    domain: "github-search.auth0.com"
  }

  componentWillMount() {
    this.lock = new Auth0Lock(this.props.clientID, this.props.domain, { auth: { responseType: 'token id_token' } });
    this.lock.on("authenticated", (authResult) => {
      //console.log(authResult);

      this.lock.getUserInfo(authResult.accessToken, (error, profile) => { //########  getUserInfo replaces getProfile in Lock v11
        if (error) {
          console.log(error);
          return;
        }

        //console.log(profile);
        this.setProfile(authResult.idToken, profile);

      });
    });
    this.getProfile();
  }

  setProfile(idToken, profile) {
    localStorage.setItem("idToken", idToken);
    localStorage.setItem("profile", JSON.stringify(profile));

    this.setState({
      idToken: localStorage.getItem("idToken"),
      profile: JSON.parse(localStorage.getItem("profile"))

    });
  }

  getProfile() {
    if (localStorage.getItem("idToken") !== null) {
      this.setState({
        idToken: localStorage.getItem("idToken"),
        profile: JSON.parse(localStorage.getItem("profile"))
      }, () => {
        console.log(this.state);
      });

    }
  }

  showLock() {
    this.lock.show();
  }


  logout() {
    this.setState({
      idToken: "",
      profile: ""

    });
    localStorage.removeItem("idToken");
    localStorage.removeItem("profile");

  }

  render() {

    let git;
    if (this.state.idToken) {
      git = <Github />;
    }
    else {
      git = "Click on Login";
    }
    return (
      <div className="App">
        <Header lock={this.lock} idToken={this.state.idToken} onLogin={this.showLock} onLogout={this.logout}/>
        {git}
        
      </div>
    );
  }
}

export default App;
