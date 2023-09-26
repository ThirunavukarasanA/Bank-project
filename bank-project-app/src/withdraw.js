import { useState, useContext } from "react";
// import { Card } from "react-bootstrap";
import UserContext from "./context";
import React, {Component} from 'react'

export default function Withdraw() {
  const ctx = useContext(UserContext);
  const [withdraw, setWithdraw] = useState("");
  const [status, setStatus] = useState("");
  const [show, setShow] = useState(true);
  var leng = ctx.users.length;
  var balAnce = ctx.users[leng - 1].balance;
  const [availablebal, setAvailableBal] = useState(balAnce);

  // form validation
  function validate(field, label) {
    if (isNaN(field)) {
      setStatus("Error: " + label);
      alert("Please Enter Valid Number");
      return false;
    }
    if (field <= 0) {
      setStatus("Error: " + label);
      alert(" Please Enter a Value greater than zero");
      return false;
    }
    if (field >= balAnce) {
      setStatus("Error: " + label);
      alert("Sorry mate, you don't have enough cash to Withdraw");
      return false;
    }
    return true;
  }

  function handleCreate() {
    if (!validate(withdraw, "withdraw")) return;
    var Money = balAnce - withdraw;
    setAvailableBal(Money);
    ctx.users[leng - 1].balance = Money;
    setShow(false);
    alert("Successfully Withdraw ₹" + withdraw);
    setWithdraw("");
  }
  // function refrushForm() {
  //   setWithdraw("");
  //   setShow(true);
  // }
  return (
    <>
      <form>
        <div className="mb-0">
          <center>
            <h3 className="mb-6">Withdraw in Your Account</h3>
          </center>
          <div className="mb-3">
            <label>
              <h4 class="withd1">Balance : ₹ {availablebal}</h4>
            </label>
          </div>

          <div className="mb-30">
            <label style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
              <h4>Withdraw : </h4>
            </label>
            <input style={{width: "370px", display:"inline-block" ,marginLeft:"35%"}}
              type="number"
              className="form-control"
              placeholder="Enter Amount to be Withdrawn"
              value={withdraw}
              onChange={(e) => setWithdraw(e.currentTarget.value)}
            />
          </div>

          <div>
            <center>
              <button
                type="submit"
                className="btn btn-danger"
                disabled={!withdraw}
                onClick={handleCreate}
              >
                Withdraw
              </button>
            </center>
          </div>
        </div>
      </form>
    </>
  );
}
