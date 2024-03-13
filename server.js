const https = require("https");

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const fs = require("fs");
const path = require("path");

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/mssg", function (req, res) {
  console.log(req.body);
  res.redirect("/");
});

let rateLimit = require("express-rate-limit");
const { createDiffieHellmanGroup } = require("crypto");
let limiter = rateLimit({
  windowMs: 2 * 1000,
  max: 1,
});
app.use("/get_map_information", limiter);

//Get address from Nominatim
app.post("/get_map_information", async function (req, res) {
  var cities_t = [];

  let keyword = req.body.keyword;
  console.log(req.body);

  // Ask server
  // const endpoint = `https://nominatim.openstreetmap.org/search.php?street=${keyword}&countrycodes=ca,us&format=jsonv2&addressdetails=1`;
  // const request_url = endpoint+keyword+format_jsonv2+address_details;
  const request_url = `https://nominatim.openstreetmap.org/search.php?q=${keyword}&countrycodes=ca,us&format=jsonv2&addressdetails=1&layer=address`;
  console.log(request_url);

  await fetch(request_url, {
    method: "GET",
  })
    .then((blob) => blob.json())
    .then((data) => {
      cities_t.push(...data);
    })
    .catch((error) => {
      console.log(error);
    });

  console.log(cities_t);
  res.send(cities_t);

  //Take info from JSON
  // const file_content = fs.readFileSync("./list.json", "utf8");
  // const json = JSON.parse(file_content);
  // console.log(json);
  // res.send(json);
});

//Get price
app.post("/get_price", function (req, res) {
  const priceArray = [];
  const { var1, var2, var3 } = req.body;
  const result = calculateShortQuote(var1, var2, var3);
  priceArray.push(result);
  console.log("priceArray: " + priceArray);
  res.send(priceArray);
});

//Function for calculation price
function calculateShortQuote(truckSize, movers, hours) {
  let price = 0;
  const truckData = fs.readFileSync(
    "./dataForServer/calculationDataTruckSize.json",
    "utf8"
  );
  const truckSizePrice = JSON.parse(truckData);
  for (let i = 0; i < truckSizePrice.length; i++) {
    if (truckSizePrice[i].quantity === truckSize) {
      price += truckSizePrice[i].price;
      break;
    }
  }

  const moverData = fs.readFileSync(
    "./dataForServer/calculationDataMovers.json",
    "utf8"
  );
  const moverPrice = JSON.parse(moverData);
  for (let i = 0; i < moverPrice.length; i++) {
    if (moverPrice[i].quantity === movers) {
      price += moverPrice[i].perHour * hours;
      break;
    }
  }
  return price;
}

//Key and sertificates
const options = {
  key: fs.readFileSync("./server.key"),
  cert: fs.readFileSync("./server.crt"),
};

//Creation server
https.createServer(options, app).listen(8000, function (req, res) {
  console.log("Server working on 8000 port");
});
