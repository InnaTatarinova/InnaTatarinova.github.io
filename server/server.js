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
    "./server/dataForServer/calculationDataTruckSize.json",
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
    "./server/dataForServer/calculationDataMovers.json",
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

//Get message from ContactUsForm

const { MailtrapClient } = require("mailtrap");
const creds = require("./config.js");

const client = new MailtrapClient({ endpoint: creds.USER, token: creds.PASS });

const sender = {
  email: creds.EMAIL_FROM,
  name: "From KL Cargo website ContactForm",
};
const recipients = [
  {
    email: creds.EMAIL_TO,
  },
];

app.post("/get_message_ContactUs", function (req, res) {
  let name = req.body.name;
  let phone = req.body.phone;
  let message = req.body.message;
  let content = `Name: ${name} \n Phone: ${phone} \n Message: ${message} `;
  console.log("content: " + content);

  client
    .send({
      from: sender,
      to: recipients,
      subject: "Contact Us form",
      text: content,
      category: "",
    })
    .then(
      (reply) => {
        console.log(reply);
        res.status(200);
        res.send(reply);
      },
      (error) => {
        console.log(error);
        res.status(500);
        res.send(error);
      }
    );

  //Testing without sending real email
  // let reply = {
  //   success: true,
  //   message_ids: ["86d64670-e21e-11ee-0040-f1b4e652a079"],
  // };
  // res.send(reply);
});

//Send online form
app.post("/get_message_SendOrder", function (req, res) {
  let content = `Name: \b${req.body.name} \n Phone: ${req.body.phone} \n Email: ${req.body.email} \n  Addition Info : ${req.body.adInfo}\n Service Type: ${req.body.serviceType} \n From: ${req.body.from} \n To: ${req.body.to} \n Truck size: ${req.body.truckSize} \n Movers: ${req.body.movers} \n Hours: ${req.body.hours} \n Residence Type: ${req.body.residenceType} \n Bedroom Quantity: ${req.body.bedroomQuantity} \n Floor: ${req.body.floor} \n Price: ${req.body.price}`;
  console.log("content: " + content);

  // client
  //   .send({
  //     from: sender,
  //     to: recipients,
  //     subject: "Online order",
  //     text: content,
  //     category: "",
  //   })
  //   .then(
  //     (reply) => {
  //       console.log(reply);
  //       res.status(200);
  //       res.send(reply);
  //     },
  //     (error) => {
  //       console.log(error);
  //       res.status(500);
  //       res.send(error);
  //     }
  //   );

  // Testing without sending real email
  let reply = {
    success: true,
    message_ids: ["86d64670-e21e-11ee-0040-f1b4e652a079"],
  };
  res.send(reply);
});

//Key and sertificates
const options = {
  key: fs.readFileSync("./server/server.key"),
  cert: fs.readFileSync("./server/server.crt"),
};

//Creation server
https.createServer(options, app).listen(8000, function (req, res) {
  console.log("Server working on 8000 port");
});
