const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
const fs = require('fs');

const app = express();
// app.use(...);

// const db = require("./models");
// db.sequelize.sync({ force: false }).then(() => {
//     console.log("Drop and re-sync db.");
//   });

// var corsOptions = {
//   origin: "http://localhost:8081"
// };

// app.use(cors(corsOptions));

// // parse requests of content-type - application/json
// app.use(bodyParser.json());

// // parse requests of content-type - application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({
//   extended: true
// }));


var one = fs.readFileSync('./public/DoesNotContain.txt', 'utf-8').split(/\r?\n/);
one.forEach(function (line) {
  newData = line.toString().toLowerCase();
  // console.log(newData)
  var two = fs.readFileSync('./public/Ingredients.txt', 'utf-8').split(/\r?\n/);
  two.forEach(function (line) {
    oldData = line.toString().toLowerCase();
    if (newData === oldData) {
      console.log("Match in DoesNotContain:: " + line);
    }
  })
})


var one = fs.readFileSync('./public/contains.txt', 'utf-8').split(/\r?\n/);
one.forEach(function (line) {
  newData = line.toString().toLowerCase();
  // console.log(newData)
  var two = fs.readFileSync('./public/Ingredients.txt', 'utf-8').split(/\r?\n/);
  two.forEach(function (line) {
    oldData = line.toString().toLowerCase();
    if (newData === oldData) {
      console.log("Match in Contain:: " + line);
    }
  })
})


// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});