import React from "react";
function Notification({ text }) {
  return <p> {text} </p>;
}

Notification.defaultProps = {
  text: "Something went wrong, please try to change querry ",
};

export default Notification;
