import React from "react";
import Form from "../form/Form";
import { withRouter } from "react-router-dom";
import Button from "../button/Button";

const Inquiry = (props) => {
  let isfilled = true;
  const massiv = []; //onchange event deer input field-d bga utgiig uurtuu hadgalah massiv
  massiv.length = 2; //massiv-n urt
  massiv[0] = "inquiry";
  const changed_fnc = (event) => {
    massiv[event.target.id] = event.target.value; //massiv-n [id] dahi slot-d tuhain id-tai input-n value-g hiij bn
  };
  const clk = () => {
    var i = 1;
    for (i; i < massiv.length; i++) {
      if (massiv[i] == null || massiv[i] === "") {
        window.alert("Please fill all the boxes !");
        isfilled = false;
        break;
      }
      isfilled = true;
    }
    if (isfilled) {
      const query = massiv.join("&");
      props.history.push({
        pathname: "/api/showdata",
        ugugdul: "inquiry",
        nariin_ugugdul: query,
      });
    }
  };

  return (
    <div className="pagez">
      <h1>Гүйлгээ</h1>
      <div className="form_holder">
        {/* <Form changed={changed_fnc} placeholder="checksum" id="1" /> */}
        <Form
          turul="any"
          changed={changed_fnc}
          placeholder="transaction_id"
          id="1"
        />
      </div>
      <Button onclk={clk} txt="Submit" whichcomp="inquiry"></Button>
    </div>
  );
};

export default withRouter(Inquiry);
