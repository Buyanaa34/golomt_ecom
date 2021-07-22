import React from "react";
import Form from "../form/Form";
import Dropdown from "../dropdown/Dropdown";
import { withRouter } from "react-router-dom";
import Button from "../button/Button";
import "react-dropdown/style.css";
const Invoice = (props) => {
  let isfilled = true;
  const massiv = []; //onchange event deer input field-d bga utgiig uurtuu hadgalah massiv
  massiv[4] = "N";
  massiv[5] = "GET";
  massiv[0] = "invoice";
  massiv.length = 6; //massiv-n urt
  const changed_fnc = (event) => {
    const re = /^[0-9\b]+$/; //only numbers
    if (event.target.id == "1") {
      //only num form bwl ?
      if (event.target.value === "" || re.test(event.target.value)) {
        massiv[event.target.id] = event.target.value; //massiv-n [id] dahi slot-d tuhain id-tai input-n value-g hiij bn]
      } else {
        window.alert("Уг input field-д зөвхөн number value олгоно");
      }
    } else {
      //eswel ?
      massiv[event.target.id] = event.target.value; //massiv-n [id] dahi slot-d tuhain id-tai input-n value-g hiij bn]
    } //massiv-n [id] dahi slot-d tuhain id-tai input-n value-g hiij bn
  };

  const clk = () => {
    var i = 1;
    for (i; i < massiv.length; i++) {
      //input-vvdig hooson baigaa esehiig shalgah heseg
      if (massiv[i] == null || massiv[i] === "") {
        //hooson baiwal dawtaltig zogsoono
        window.alert("Please fill all the boxes !");
        isfilled = false;
        break;
      }
      isfilled = true;
    }
    if (isfilled) {
      const query = massiv.join("&");
      //hooson bish baiwal showdata component-g haruulna
      props.history.push({
        pathname: "/api/showdata",
        ugugdul: "invoice",
        nariin_ugugdul: query,
      });
    }
  };
  const returntype_options = ["GET", "POST", "MOBILE"];
  const gettoken_options = ["N", "Y"];
  return (
    <div className="pagez">
      <h1>Нэхэмжлэл</h1>
      <div className="form_holder">
        <Form turul="num" changed={changed_fnc} placeholder="amount" id="1" />
        <Form turul="any" changed={changed_fnc} placeholder="callback" id="2" />
        <Form
          turul="any"
          changed={changed_fnc}
          placeholder="transactionId"
          id="3"
        />
        <Dropdown
          id="4"
          songolt={gettoken_options}
          changed={changed_fnc}
          placeholder="genToken"
        ></Dropdown>
        {/* <Form changed={changed_fnc} placeholder="genToken" id="4" /> */}
        <Dropdown
          changed={changed_fnc}
          id="5"
          songolt={returntype_options}
          placeholder="returnType"
        ></Dropdown>
        {/* <Form changed={changed_fnc} placeholder="checksum" id="5" /> */}
        {/* <Form changed={changed_fnc} placeholder="returnType" id="5" /> */}
      </div>
      <div id="buuz"></div>
      <Button onclk={clk} whichcomp="invoice" txt="Submit"></Button>
    </div>
  );
};

export default withRouter(Invoice);
