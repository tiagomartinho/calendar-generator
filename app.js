const { writeFileSync } = require("fs");
var fs = require("fs");
const ics = require("ics");

let startDate = [2018, 8, 9, 15, 59];
let duration = { hours: 1, minutes: 30 };
let title = "Bolder Boulder";
let description = "Annual 10-kilometer run in Boulder, Colorado";

const event = {
  start: startDate,
  duration: duration,
  title: title,
  description: description,
  alarms: [
    {
      action: "display",
      trigger: startDate
    }
  ]
};

ics.createEvent(event, (error, value) => {
  if (error) {
    console.log(error);
  }
  console.log(value);
  fs.writeFileSync(`${__dirname}/event.ics`, value);
});
