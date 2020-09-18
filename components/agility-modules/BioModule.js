import React from "react";

const BioModule = (props) => {
  const { profileBio, profileName, profilePhoto } = props.fields;
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "40px 0",
      }}
    >
      <img
        src={profilePhoto.url}
        alt={profilePhoto.label}
        style={{
          maxWidth: "300px",
        }}
      />
      <h1
        style={{
          fontSize: "40px",
          margin: "15px 0",
        }}
      >
        {profileName}
      </h1>
      <p>{profileBio}</p>
    </div>
  );
};

export default BioModule;
