import React from "react";
import { Panel } from "react-bootstrap";
import "./profile.css"

const Profile = (props) => {
    let userdata = props.userdata;
    let username = userdata.username;

    if (userdata.notFound === "Not Found") {

        return <h1>User not Found</h1>;

    }

    else {
        return (
            <Panel>
                <Panel.Heading>
                    <img alt="profile_pic" src={userdata.avatar}/>
                
                </Panel.Heading>
                
                <Panel.Body>
                    <h2>{username}</h2>
                    <div className="data_wrapper">
                        <span>{userdata.followers}</span>
                        <span>{userdata.repos}</span>
                        <span>{userdata.following}</span>
                    </div>
                    
                    <div className="title_wrapper">
                        <span>Followers</span>
                        <span>Repos</span>
                        <span>Following</span>
                    </div>
                    
                </Panel.Body>
            </Panel>

        );
    }
}

export default Profile;
