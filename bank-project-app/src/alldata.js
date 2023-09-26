import { useContext } from "react";
import { Card } from "react-bootstrap";
import UserContext from "./context";
import React, {Component} from 'react'

export default function AllData() {
  const ctx = useContext(UserContext);
  function renderTableHeader() {
    let header = Object.keys(ctx.loginuser[0]);    
    return header.map((value, index) => {
      return <th>{value}</th>;
    });
  }
  function renderTableData() {
    return ctx.loginuser.map((user, index) => {
      const { name, email, password, balance } = user; //destructuring
      return (
        <tr>
          <td>{name}</td>
          <td>{email}</td>
          <td>{password}</td>
          <td>{balance}</td>
        </tr>
      );
    });
  }
  console.log(renderTableHeader);
  return (
    <Card className="card border-0" style={{borderRadius:'20px'}}>
      <Card.Header className="bg-info" style={{borderRadius:'20px 20px 0px 0px',fontSize:'20px', fontWeight:'bold',color:'White', textAlign:'center'}}>All Transactions</Card.Header>
      <Card.Body>
        {" "}
        {
          <>
            <br />
            <table id="users" class="table table-bordered rounded-5">
              <thead>
              <tr>{renderTableHeader()}</tr>
              {renderTableData()}
              </thead>
            </table>
            <br />
          </>
        }
      </Card.Body>
    </Card>
  );
}
