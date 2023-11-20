import React from "react";
import "./Profile.scss";
import profileData from "./profileData.json";

const Profile = () => {
  const { profilePic, name, followers, following, bio, websites, icons } = profileData;

  return (
    <>
      <figure className="Profile">
        <div className="profile-status">
          <div className="profilepic">
            <img src={profilePic} alt="user-profile" />
          </div>
          <div className="details">
            <div className="name">
              <h2>{name}</h2>
            </div>
            <div className="stats">
              <div className="followers">
                <a href="#">{followers}</a>
                <p>Followers</p>
              </div>
              <div className="following">
                <a href="#">{following}</a>
                <p>Following</p>
              </div>
            </div>
          </div>
        </div>

        <figcaption className="profile-bio">
          <p>{bio}</p>
          <div className="websites">
            <a href={websites.github.url} target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}>
              <span role="img" aria-label="GitHub">
                {websites.github.icon}
              </span>
            </a>
            <a href={websites.linkedin.url} target="_blank" rel="noopener noreferrer">
              <span role="img" aria-label="LinkedIn">
                {websites.linkedin.icon}
              </span>
            </a>
          </div>
          <div className="icons">
            {icons.map((icon, index) => (
              <span key={index}>{icon}</span>
            ))}
          </div>
        </figcaption>
      </figure>
    </>
  );
};

export default Profile;
