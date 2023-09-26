import { Navbar, Container, Nav } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Logo from "./kt.png";
import React, {Component} from 'react'
import { BsFillCloudDownloadFill,BsFillCloudUploadFill,BsFillPersonLinesFill,BsJournalText,BsHouseFill } from "react-icons/bs";


export default function NavBar() {
  const mystyle={
    color:"white",
    fontFamily:'serif'
  }
  return (
    <>
      <Navbar expand="lg" style={{backgroundImage: `linear-gradient(to right, rgba(225, 0, 255, 1), rgba(0, 224, 225, 1))`,}}>
        <Container>
          <h3 style={{color:"white"}}> <Card.Img src={Logo} style={{width:"35px"}}/> Kotak Mahindra Bank</h3>&nbsp;&ensp;&emsp;&emsp;&emsp;&emsp;&emsp;
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
              style={mystyle}
                className="navbar-brand"
                activeClassName="navbar-brand--active"
                href="/"
                title=" Home Page"  
              >
                <BsHouseFill/>&nbsp;
                {" "}
                Home{" "}
              </Nav.Link>
              <Nav.Link
              style={mystyle}
                className="navbar-brand"
                title="Create your Account"
                href="/createaccount"
              >
                <BsFillPersonLinesFill/>&nbsp;
                {" "}
                CreateAccount{" "}
              </Nav.Link>
              
              <Nav.Link
              style={mystyle}
                className="navbar-brand"
                title="Login"
                href="/login"
              >
                <BsFillPersonLinesFill/>&nbsp;
                {" "}
                Login{" "}
              </Nav.Link>

              {/* <Nav.Link
              style={mystyle}
                className="navbar-brand"
                title="Deposit in your Account"
                href="#/Deposit/"
              >
                <BsFillCloudDownloadFill/>&nbsp;
                Deposit{" "}
              </Nav.Link>
              <Nav.Link
              style={mystyle}
                className="navbar-brand"
                title="Withdraw from your Account"
                href="#/Withdraw/"
              >
                <BsFillCloudUploadFill/>&nbsp;
                WithDraw{" "}
              </Nav.Link>
              <Nav.Link
              style={mystyle}
                className="navbar-brand"
                title="Track your Transactions"
                href="#/AllData/"
              >
                <BsJournalText/>&nbsp;
                All Data
              </Nav.Link> */}

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
