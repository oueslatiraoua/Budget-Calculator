import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./design.css";

const BudgetForm = (props) => {
  const [inputCharge, setInputCharge] = useState("");
  const [inputAmount, setInputAmount] = useState(0);
  //the inputCharge will Take the value of the written charge
  const handleCharge = (e) => {
    setInputCharge(e.target.value);
  };
  //the inputAmount will Take the value of the written Amount
  const handleAmount = (e) => {
    setInputAmount(e.target.value);
  };
  //Add the value of the Amount and Charge added
  const add = () => {
    props.addnewCharge(inputCharge);
    props.addnewAmount(parseInt(inputAmount));
    setInputCharge("");
    setInputAmount(0);
  };
  //Stop refreshing the page
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="form-group">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Charge</Form.Label>
            <Form.Control
              type="text"
              placeholder="newCharge"
              value={inputCharge}
              onChange={handleCharge}
            />
          </Form.Group>
        </div>
        <div className="form-group">
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Amount (dt)</Form.Label>
            <Form.Control
              type="text"
              placeholder="newCharge"
              value={inputAmount}
              onChange={handleAmount}
            />
          </Form.Group>
        </div>
        {parseInt(inputAmount) < 0
          ? alert("Please enter a positive value")
          : ""}
      </div>
      <Button
        className="button-form"
        variant="primary"
        type="submit"
        onClick={add}
      >
        Calculate
      </Button>
      <Button
        className="button-form"
        variant="primary"
        type="submit"
        onClick={props.clearItems}
      >
        clear items
      </Button>
    </Form>
  );
};

export default BudgetForm;
