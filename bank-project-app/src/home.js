import { Card } from "react-bootstrap";
import Bank from "./kotak.jpg";
import Logo from "./kt.png";
import React, {Component} from 'react'

export default function Home() {
  const mstyle={
    color:"white"
  }
  return (
    <>
      <Card style={{ width: "20rem", backgroundColor:"red", height:"400px", borderRadius:"0px"}}>
        <Card.Img variant="top" src={Bank} />
        <Card.Body>
          <Card.Title style={mstyle}> <Card.Img variant="left" style={{width:"30px"}} src={Logo}/> Kotak Mahindra Bank</Card.Title>
          <Card.Text style={mstyle}>
            Welcome to the Kotak Mahindra Bank. You can move around using the navigation bar.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
