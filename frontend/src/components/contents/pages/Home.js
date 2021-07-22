import React from "react";
import { withRouter } from "react-router-dom";
import "./style.css";
function Home() {
  return (
    <div className="pagez">
      <h1>Нүүр</h1>
      <div className="home_holder">
        <p>Худалдан авалтын хэсэгт тавтай морилно уу !</p>
        <img className="nvvr_pic" src="/home_pic.jpg" alt="" />
      </div>
    </div>
  );
}

export default withRouter(Home);
