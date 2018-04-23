import React from "react";
import "./github.css";
import Profile from "./components/profile.js";
import Search from "./components/search.js";
/*global fetch*/

const API = "https://api.github.com/users";

class Github extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "huangstanley050",
            name: "",
            avatar: "",
            repos: "",
            followers: "",
            following: "",
            homeURL: "",
            notFound: ""
        }
        this.getProfile = this.getProfile.bind(this);
    }

    componentDidMount() {
        this.getProfile(this.state.username);
    }

    getProfile(username) {
        var finalURL = `${API}/${username}`;

        fetch(finalURL)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    username: data.login,
                    name: data.name,
                    avatar: data.avatar_url,
                    repos: data.public_repos,
                    followers: data.followers,
                    following: data.following,
                    homeURL: data.html_url,
                    notFound: data.message


                })
            })
            .catch(error => console.log("There was a problem"));

    }

    render() {
        return (
            <div className="wrapper">
            <Search/>
            <Profile/>
            </div>
        );
    }
}

export default Github;
