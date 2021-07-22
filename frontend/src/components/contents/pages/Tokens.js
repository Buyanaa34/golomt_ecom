import React from "react";
import Form from "../form/Form";
import Button from "../button/Button";
import { withRouter } from "react-router-dom";
import Dropdown from "../dropdown/Dropdown";

const Tokens = (props) => {
  const langz = ["English", "Mongolia"];
  let isfilled = true;
  const massiv = []; //onchange event deer input field-d bga utgiig uurtuu hadgalah massiv
  massiv.length = 5; //massiv-n urt
  massiv[4] = "1";
  massiv[0] = "tokens";
  const changed_fnc = (event) => {
    const re = /^[0-9\b]+$/;
    if (event.target.id == "1") {
      //only num form bwl ?
      if (event.target.value === "" || re.test(event.target.value)) {
        massiv[event.target.id] = event.target.value; //massiv-n [id] dahi slot-d tuhain id-tai input-n value-g hiij bn]
      } else {
        window.alert("Only numbers !!!");
      }
    } else {
      //eswel ?
      massiv[event.target.id] = event.target.value; //massiv-n [id] dahi slot-d tuhain id-tai input-n value-g hiij bn]
    }
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
    //sumbit button click hiih ued
    if (isfilled) {
      const query = massiv.join("&");
      props.history.push({
        pathname: "/api/showdata",
        ugugdul: "tokens",
        nariin_ugugdul: query,
      });
    }
  };
  return (
    <div className="pagez">
      <h1>Токеноор</h1>
      <div className="form_holder">
        <Form turul="num" changed={changed_fnc} placeholder="amount" id="1" />
        {/* <Form placeholder="checksum" id="2" /> */}
        <Form
          turul="any"
          changed={changed_fnc}
          placeholder="transactionId"
          id="2"
        />
        <Form turul="any" changed={changed_fnc} placeholder="token" id="3" />
        <Dropdown
          id="4"
          songolt={langz}
          changed={changed_fnc}
          placeholder="Language"
        ></Dropdown>
      </div>
      <Button txt="Submit" onclk={clk} whichcomp="tokens"></Button>
    </div>
  );
};

export default withRouter(Tokens);
