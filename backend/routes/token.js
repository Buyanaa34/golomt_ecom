var https = require("https");
var crypto = require("crypto");
const express = require("express");
const router = express.Router();
module.exports = router;
//The url we want is `www.nodejitsu.com:1337/`
var options = {
  host: "ecommerce.golomtbank.com",
  path: "/api/pay",
  //since we are listening on a custom port, we need to specify it by hand
  port: "8443",
  //This is what changes the request to a POST request
  method: "POST",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJQSEhfVEVTVCIsImlhdCI6MTYwMjgxNDc3MH0.VKNh4ItU5Eduq3tPhX_B3BoB6B2qM0ifGZxyhGlAJT4",
    "Content-Type": "application/json",
  },
};
var i = 0;
callback = function (response) {
  var str = "";

  //another chunk of data has been received, so append it to `str`
  response.on("data", function (chunk) {
    str += chunk;
  });

  //the whole response has been received, so we just print it out here
  response.on("end", function () {
    console.log(str);
  });
  /*if (i < 2) {
        sendTrxn();
    }
    i++;*/
};

async function sendTrxn() {
  var req = https.request(options, callback);
  var ts = Date.now();
  var j = {
    callback: "https://google.mn",
    amount: "29000",
    checksum: crypto
      .createHmac("sha256", "Golomt123")
      .update(
        "29000" +
          ts +
          "2d38f609c868c1b5f94b2320a9a9244897e0cf8176a01ec802e99ed418c3f97b"
      )
      .digest("hex"),
    transactionId: ts,
    token: "2d38f609c868c1b5f94b2320a9a9244897e0cf8176a01ec802e99ed418c3f97b",
  };
  req.write(JSON.stringify(j));
  req.end();
}
sendTrxn();
