import logo from "./logo.svg";
import { Card } from "react-bootstrap";
import "./App.css";
import { useContext, useState } from "react";
import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import { useResolvedPath } from "react-router-dom";
import UserContext from "./context";

function Form({ show }) {
  const ctx = useContext(UserContext);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();

    ctx.users.map((user, index) => {
      if (user.email == email && user.password == password) {
        // console.log(user)
        show(true);
        ctx.loginuser.push({
          name: user.name,
          email: user.email,
          password: user.password,
          balance: user.balance,
        });
        console.log(ctx.loginuser);
      }
    });
  };

  return (
    <>
      <div className="thiru">
        <div class="container">
          <div className="account">
            <div class="card border-0">
              <form onSubmit={handleSubmit}>
                <label>
                  {" "}
                  Enter Your Name :
                  <br />
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
                <br />
                <label>
                  {" "}
                  Enter Password :
                  <br />
                  <input
                    type="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </label>
                <br />
                <input type="submit"></input>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
