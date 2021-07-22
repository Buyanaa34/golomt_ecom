import React from "react";
import Home from "../../contents/pages/Home";
import Invoice from "../../contents/pages/Invoice";
import Inquiry from "../../contents/pages/Inquiry";
import Tokens from "../../contents/pages/Tokens";
import Showdata from "../../contents/pages/Showdata";
import { Route } from "react-router-dom";
import "./style.css";
const Holder = () => {
  return (
    <div className="holder">
      <Route exact path="/" component={Home}></Route>
      <Route path="/api/invoice" component={Invoice}></Route>
      <Route path="/api/inquiry" component={Inquiry}></Route>
      <Route path="/api/pay" component={Tokens}></Route>
      <Route path="/api/showdata" component={Showdata}></Route>
    </div>
  );
};

export default Holder;
