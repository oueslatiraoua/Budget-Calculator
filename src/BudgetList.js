import React from "react";
import Form from "react-bootstrap/Form";
import "./design.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./design.css";

const BudgetList = (props) => {
  const afficheBudgetC = props.budgetsC.map((el) => (
    <div className="form-group">
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <span>Charges</span>
        <Form.Control type="text" value={el} />
      </Form.Group>
    </div>
  ));
  const afficheBudgetA = props.budgetsA.map((el) => (
    <div className="form-group">
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Amount (dt)</Form.Label>
        <Form.Control type="text" value={el} />
      </Form.Group>
    </div>
  ));

  return (
    <>
      <div className="form-group">{afficheBudgetC}</div>
      <div className="form-group">{afficheBudgetA}</div>
    </>
  );
};

export default BudgetList;
