module.exports = function (arg1, arg2) {
  var dummy_val = "";
  var ugugdul = [];
  let router = require("express").Router();
  router.post("/showdatas", function (req, res, next) {
    ugugdul.splice(0, ugugdul.length);
    var i = 0;
    const recieveddata = req.body;
    //  /nani gesen url-s ugugdul awch tuuniige recieveddata-ruu hiij bn array formataar
    Object.keys(recieveddata).forEach(function (k) {
      ugugdul[i] = recieveddata[k];
      i += 1;
    });
    switch (ugugdul[0]) {
      case "inquiry":
        var https = require("https");
        var crypto = require("crypto");

        //The url we want is `www.nodejitsu.com:1337/`
        var options = {
          host: "ecommerce.golomtbank.com",
          path: "/api/inquiry",
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
            dummy_val = str;
          });
          /*if (i < 2) {
        sendTrxn();
    }
    i++;*/
        };
        //transactionID = 1
        async function sendTrxn1() {
          var req = https.request(options, callback);
          var ts = ugugdul[1]; //1623826300587
          var j = {
            checksum: crypto
              .createHmac("sha256", "Golomt123")
              .update(ts + ts)
              .digest("hex"),
            transactionId: ts,
          };
          req.write(JSON.stringify(j));
          req.end();
        }
        sendTrxn1();

        next();
        break;
      case "invoice":
        var https = require("https");
        var crypto = require("crypto");
        //The url we want is `www.nodejitsu.com:1337/`
        var options = {
          host: "ecommerce.golomtbank.com",
          path: "/api/invoice",
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
            dummy_val = str;
          });
        };
        //amount = 1,  callback =2, transactionId = 3, genToken=4, returnType = 5
        async function sendTrxn0() {
          var req = https.request(options, callback);
          var ts = ugugdul[3]; //Date.now();
          var j = {
            callback: "https://google.mn",
            amount: ugugdul[1], //0.01
            checksum: crypto
              .createHmac("sha256", "Golomt123")
              .update(ts + ugugdul[1] + ugugdul[5] + "https://google.mn")
              .digest("hex"),
            transactionId: ts,
            returnType: ugugdul[5], //GET
            genToken: ugugdul[4], //Y
          };
          req.write(JSON.stringify(j));
          req.end();
        }
        sendTrxn0();
        next();
        break;
      case "tokens":
        module.exports = router;
        var https = require("https");
        var crypto = require("crypto");
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
            dummy_val = str;
          });
          /*if (i < 2) {
          sendTrxn();
      }
      i++;*/
        };
        //amount=1   transactionid=2 token=3 language=4
        async function sendTrxn() {
          var req = https.request(options, callback);
          var ts = ugugdul[2]; //Date.now();
          var j = {
            callback: "https://google.mn",
            amount: ugugdul[1],
            checksum: crypto
              .createHmac("sha256", "Golomt123")
              .update(ugugdul[1] + ts + ugugdul[3])
              .digest("hex"),
            transactionId: ts,
            token: ugugdul[3],
            //"2d38f609c868c1b5f94b2320a9a9244897e0cf8176a01ec802e99ed418c3f97b",
          };
          req.write(JSON.stringify(j));
          req.end();
        }
        sendTrxn();
        // next();
        break;
    }

    // router.get("/showdata", (req, res) => {
    //   console.log(hariu);
    //   res.end(JSON.stringify(hariu));
    // });
    // router.post("/showdata", (req, res) => {
    //   res.end("NA");
    // });
    // next();
  });
  router.get("/showdata", (req, res, next) => {
    const str = [
      {
        amount: arg1,
        errorDesc: dummy_val,
        height: "6'11",
      },
    ];
    var result = null;
    try {
      result = JSON.parse(dummy_val);
    } catch (error) {
      result = str;
    }

    res.end(JSON.stringify(result));
  });

  // ...

  return router;
};
