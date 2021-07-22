import React, { useEffect, useState } from "react";
import Button from "../button/Button";
import { withRouter } from "react-router-dom";
import axios from "axios";
import Dropdown from "../dropdown/Dropdown";
function Showdata(props) {
  var isresult_failed = true;
  var nehemjlel_array = [];
  nehemjlel_array[0] = "eng";
  nehemjlel_array[1] = "payment";
  //items ni backend-s data awahad ashiglana
  const [items, setItems] = useState([]);
  //dum ni backend-rvv ugugdul ywuulah zorilgoor hiisen dummy variable
  const [dum, setdum] = useState("");
  useEffect(() => {
    postitems();
  }, []);

  useEffect(() => {
    getdatas();
  });

  //backend-s data huleen awahad ashiglaj bga function
  const getdatas = async () => {
    const data = await fetch("/showdata");
    const items = await data.json();
    setItems(items);
  };

  const nehemjlel = () => {
    const myurl =
      "https://ecommerce.golomtbank.com/" +
      nehemjlel_array[1] +
      "/" +
      nehemjlel_array[0] +
      "/" +
      items.invoice;
    window.open(myurl);
  };

  //componentdidmount
  const postitems = async () => {
    const query = new URLSearchParams(props.location.nariin_ugugdul);
    const massiv = {}; //comp's irsen data
    var tooluur = 0;
    for (let param of query.entries()) {
      massiv[tooluur] = param[0];
      tooluur += 1;
    }
    axios.post("http://localhost:3006/showdatas", massiv).then((response) => {
      alert("Таны хүсэлтийг амжилттай хүлээн авлаа");
      setdum("200");
    });
  };

  const changed_fnc = (event) => {
    if (event.target.id === "language_choices") {
      nehemjlel_array[0] = event.target.value;
    } else {
      nehemjlel_array[1] = event.target.value;
    }
  };

  switch (props.location.ugugdul) {
    case "inquiry":
      //server-s data irsen esvel ireegui esehig shalgah heseg START
      const dummy_items = Object.entries(items);
      for (const item of dummy_items) {
        if (item != null) {
          isresult_failed = false;
          break;
        }
      }
      //server-s data irsen esvel ireegui esehig shalgah heseg END

      //server-s irsen data hooson esvel oldoogui ued
      if (items.status == "400" || isresult_failed) {
        var tailbar = "Таны хайсан Transaction ID олдсонгүй";
        if (isresult_failed) {
          tailbar =
            "Өгөгдөл татах явцад алдаа гарлаа сүлжээгээ шалгаад дахин оролдоно уу";
        }
        const code_inquiry = (
          <div>
            <section>
              <h1>Results that came from Гүйлгээ шалгах</h1>
              <div className="show_results_mid">{tailbar}</div>
              <Button txt="Back"></Button>
            </section>
          </div>
        );
        return code_inquiry;
        //server-s irsen data oldson ued
      } else {
        const code_inquiry = (
          <div>
            <section>
              <h1>Results that came from Гүйлгээ шалгах</h1>
              <div className="show_results">
                <p>
                  <span className="description_holder">
                    Банкны дугаар/bankCode/:
                  </span>
                  {items.bankCode}
                </p>
                <p>
                  <span className="description_holder">Хэмжээ/amount/:</span>
                  {items.amount}
                </p>
                <p>
                  <span className="description_holder">
                    Алдааны дугаар/errorCode/:
                  </span>
                  {items.errorCode}
                </p>
                <p>
                  <span className="description_holder">
                    Алдааны тайлбар/errorDesc/:
                  </span>
                  {items.errorDesc}
                </p>
                <p>
                  <span className="description_holder">Checksum:</span>
                  {items.checksum}
                </p>
                <p>
                  <span className="description_holder">
                    Карт эзэмшигч/cardHolder/:
                  </span>
                  {items.cardHolder}
                </p>
                <p>
                  <span className="description_holder">
                    Гүйлгээний дугаар/TransactionId/:
                  </span>
                  {items.transactionId}
                </p>
                <p>
                  <span className="description_holder">
                    Картын дугаар/Card Number/:
                  </span>
                  {items.cardNumber}
                </p>
                <p>
                  <span className="description_holder">Status:</span>
                  {items.status}
                </p>
                <p>
                  <span className="description_holder">Token:</span>
                  {items.token}
                </p>
              </div>
              <Button txt="Back"></Button>
              <Button txt="See more"></Button>
            </section>
          </div>
        );
        return code_inquiry;
      }

    case "invoice":
      if (items.status == "400" || isresult_failed) {
        var tailbar = "Хайлт илэрцгүй";
        if (isresult_failed) {
          tailbar =
            "Өгөгдөл татах явцад алдаа гарлаа сүлжээгээ шалгаад дахин оролдоно уу";
        }
        const code_invoice = (
          <div>
            <section>
              <h1>Results that came from Нэхэмжлэл үүсгэх</h1>
              <div className="show_results_mid">{tailbar}</div>
              <Button txt="Back"></Button>
            </section>
          </div>
        );
        return code_invoice;
      } else {
        const lang = ["eng", "mn"];
        const method = ["payment", "socialpay"];
        const code_invoice = (
          <div>
            <section>
              <h1>Results that came from Нэхэмжлэл үүсгэх</h1>
              <div className="show_results">
                <p>
                  <span className="description_holder">Invoice:</span>
                  {items.invoice}
                </p>
                <p>
                  <span className="description_holder">
                    Гүйлгээний дугаар/TransactionId/:
                  </span>
                  {items.transactionId}
                </p>
                <p>
                  <span className="description_holder">Checksum:</span>
                  {items.checksum}
                </p>
              </div>
              <h1>Нэхэмжлэл дуудах</h1>
              <div className="dropdown_holder">
                <Dropdown
                  changed={changed_fnc}
                  id="language_choices"
                  songolt={lang}
                  placeholder="Language"
                ></Dropdown>
              </div>
              <div className="dropdown_holder">
                <Dropdown
                  changed={changed_fnc}
                  id="method_choices"
                  songolt={method}
                  placeholder="Төлбөрийн хэлбэр"
                ></Dropdown>
              </div>

              <Button txt="Нэхэмжлэл дуудах" onclk_1={nehemjlel}></Button>
              <Button txt="Back"></Button>
            </section>
          </div>
        );
        return code_invoice;
      }

    case "tokens":
      if (items.status == "400" || isresult_failed) {
        var tailbar = "Таны хайсан Token олдсонгүй";
        if (isresult_failed) {
          tailbar =
            "Өгөгдөл татах явцад алдаа гарлаа сүлжээгээ шалгаад дахин оролдоно уу";
        }
        const code_tokens = (
          <div>
            <section>
              <h1>Results that came from Токеноор гүйлгээ хийх</h1>
              <div className="show_results_mid">{tailbar}</div>
              <Button txt="Back"></Button>
            </section>
          </div>
        );
        return code_tokens;
      } else {
        const code_tokens = (
          <div>
            <section>
              <h1>Results that came from Токеноор гүйлгээ хийх</h1>
              <div className="show_results">
                <p>
                  <span className="description_holder">Хэмжээ/Amount/:</span>
                  {items.amount}
                </p>
                <p>
                  <span className="description_holder">
                    Тайлбар/errorDesc/:
                  </span>
                  {items.errorDesc}
                </p>
                <p>
                  <span className="description_holder">
                    Алдааны дугаар/errorCode/:
                  </span>
                  {items.errorCode}
                </p>
                <p>
                  <span className="description_holder">Checksum:</span>
                  {items.checksum}
                </p>
                <p>
                  <span className="description_holder">
                    Гүйлгээний дугаар/TransactionId/:
                  </span>
                  {items.transactionId}
                </p>
                <p>
                  <span className="description_holder">
                    Картын дугаар/Card Number/:
                  </span>
                  {items.cardNumber}
                </p>
              </div>
              <Button txt="Back"></Button>
            </section>
          </div>
        );
        return code_tokens;
      }
    default:
      props.history.push("/");
      return <div></div>;
  }
}

export default withRouter(Showdata);
