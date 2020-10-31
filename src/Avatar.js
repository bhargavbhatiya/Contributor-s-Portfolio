import React from "react";
import "./Avatar.css";
import "tachyons";
// import AvatarCard from './AvatarCard';
import AvatarListArray from "./details";
import AvatarCard from "./AvatarCard";

const Avatar = () => {
  const EachAvatar = AvatarListArray.map((AvatarCar, i) => {
    return (
      <AvatarCard
        id={AvatarListArray[i].id}
        imageName={AvatarListArray[i].imageName}
        name={AvatarListArray[i].name}
        work={AvatarListArray[i].work}
      />
    );
  });

  return (
    <div className="mainpage">
      <h1>Make your portfolio card with learning git</h1>
      {EachAvatar}
    </div>
  );
};

export default Avatar;
