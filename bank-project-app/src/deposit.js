import { useState, useContext } from "react";
import { Card } from "react-bootstrap";
import UserContext from "./context";
// import Media from "react-media";
import React, {Component} from 'react'

export default function Deposit() {
  const ctx = useContext(UserContext);
  const [deposit, setDeposit] = useState("");
  const [status, setStatus] = useState("");
  var leng = ctx.users.length;
  var balAnce = ctx.users[leng - 1].balance;
  const [availablebal, setAvailableBal] = useState(balAnce);
  const [show, setShow] = useState(true);

  // form validation
  function validate(field, label) {
    if (isNaN(field)) {
      alert("Please Enter Valid Number");
      return false;
    }
    if (Number(field) <= 0) {
      alert(" Please Enter a Value greater than zero");
      return false;
    }
    return true;
  }

  function handleCreate() {
    if (!validate(deposit, "deposit")) return;
    var Money = balAnce + Number(deposit);
    setAvailableBal(Money);
    ctx.users[leng - 1].balance = Money;
    setShow(false);
    alert("Successfully Deposited ₹" + deposit);
    console.log(availablebal);
    setDeposit("");
  }

  // function refreshForm() {
  //   setDeposit("");
  //   setShow(true);
  // }

  return (
    <>
      <form style={{backgroundImage:``,color:'', borderRadius:'20px'}} >
        <div className="mb-0">
          <center>
            <h3 className="mb-6">Deposit in Your Account</h3>
          </center>

          <div className="mb-3">
            <label>
              <h4 class="withd1">Balance : ₹ {availablebal}</h4>
            </label>
          </div>

          <div className="mb_30">
            <label style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
              <h4>Deposit : </h4>
            </label>
            <input style={{width: "370px", display:"inline-block" ,marginLeft:"35%"}}
              type="number"
              className="form-control"
              placeholder="Enter Amount to be Deposited"
              value={deposit}
              onChange={(e) => setDeposit(Number(e.currentTarget.value))}
            />
          </div>

          <div>
            <center>
              <button
                type="submit"
                className="btn btn-danger"
                disabled={!deposit}
                onClick={handleCreate}
              >
                Deposit
              </button>
            </center>
          </div>
        </div>
      </form>
    </>
  );
}
