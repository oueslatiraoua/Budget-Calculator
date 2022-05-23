import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "./design.css";

import "bootstrap/dist/css/bootstrap.min.css";

const Budget = (props) => {
  const handleBudget = (e) => {
    props.addBudget(e.target.value);
  };

  return (
    <Form className="form-group">
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Budget (dt)</Form.Label>
        <Form.Control
          type="text"
          placeholder="My budget"
          onChange={handleBudget}
        />
      </Form.Group>
    </Form>
  );
};

export default Budget;
