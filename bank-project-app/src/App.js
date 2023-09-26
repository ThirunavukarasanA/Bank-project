import "./styles.css";
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserContext from "./context";
import NavBar from "./navbar";
import Maninav from './nav1';
import Home from "./home";
import CreateAccount from "./createaccount";
import Deposit from "./deposit";
import Withdraw from "./withdraw";
import AllData from "./alldata";
import Login from "./login"
import { useState } from "react";

function App() {
  // const App = () => <UseAnimations animationKey="github" />;
  const [view, setView] = useState(false);

    const handleLogin = (f) => {
      console.log("f : ",f);
      setView(f); 
  }

  console.log(view);

  return (
    <BrowserRouter>
      {view ? <Maninav /> : <NavBar />}
        <div className="container" style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/createaccount" element={<CreateAccount />} />
            <Route path="/login" element={<Login  show = {handleLogin} />} />
            <Route path="/deposit" element={<Deposit />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/alldata" element={<AllData />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
