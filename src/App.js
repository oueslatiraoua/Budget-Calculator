import "./App.css";
import BudgetForm from "./BudgetForm";
import React, { useState } from "react";
import BudgetList from "./BudgetList";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

import Budget from "./Budget";
import Message from "./Message";

function App() {
  const [budgetsC, setBudgetsC] = useState([]);
  const [budgetsA, setBudgetsA] = useState([]);

  const addnewCharge = (budgetC) => {
    setBudgetsC([...budgetsC, budgetC]);
    console.log(budgetsC);
  };
  const addnewAmount = (budgetA) => {
    setBudgetsA([...budgetsA, budgetA]);
    console.log(budgetsA);
  };

  const Initial = budgetsA.reduce(
    (previousValue, currentValue) => previousValue + parseInt(currentValue),
    0
  );

  const clearItems = () => {
    setBudgetsA([]);
    setBudgetsC([]);
  };
  const [inputBudget, setInputBudget] = useState(0);
  const addBudget = (input) => {
    setInputBudget(input);
  };

  return (
    <div className="App">
      <h4
        style={{
          marginBottom: "50px",
          marginTop: "50px",
          fontFamily: "'PT Serif', serif",
        }}
      >
        BUDGET CALCULATOR
      </h4>

      <Budget addBudget={addBudget}></Budget>

      <BudgetForm
        addnewCharge={addnewCharge}
        addnewAmount={addnewAmount}
        clearItems={clearItems}
      ></BudgetForm>
      <BudgetList budgetsC={budgetsC} budgetsA={budgetsA}></BudgetList>
      <Button
        variant="success"
        style={{
          marginTop: "30px",
        }}
      >
        Total expenses (dt)
        <div>{Initial}</div>
      </Button>
      <Button
        variant="danger"
        style={{
          marginTop: "30px",
          marginLeft: "20px",
        }}
      >
        I still have
        <div>{parseInt(inputBudget) - parseInt(Initial)} (dt)</div>
      </Button>
      <div>{inputBudget - Initial < 0 ? <Message /> : ""}</div>
    </div>
  );
}

export default App;
