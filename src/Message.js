import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Alert from "react-bootstrap/Alert";

const Message = () => {
  return (
    <Alert variant="danger" dismissible>
      <Alert.Heading>You have exceeded your budget!</Alert.Heading>
    </Alert>
  );
};

export default Message;
