import React from "react";
const AvatarCard = (props) => {
  return (
    <div
      className="avatarStyle ma4 bg-light-purple dib pa3 tc grow shadow-5 br3"
      style={{ height: "392px" }}
    >
      <img
        src={`https://joeschmoe.io/api/v1/${props.imageName}`}
        alt="avatar"
      />
      <h1 className="">{props.name}</h1>
      <p>{props.work}</p>
    </div>
  );
};
export default AvatarCard;
