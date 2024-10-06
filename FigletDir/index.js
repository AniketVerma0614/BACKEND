//index.js
const Figlet = require("figlet");

var figlet = require("figlet");

figlet("Money Heist", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});