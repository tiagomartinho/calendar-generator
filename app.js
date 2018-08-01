const { writeFileSync } = require('fs')
var fs = require('fs');
const ics = require('ics')

const event = {
  start: [2018, 5, 30, 6, 30],
  duration: { hours: 6, minutes: 30 },
  title: 'Bolder Boulder',
  description: 'Annual 10-kilometer run in Boulder, Colorado',
}

ics.createEvent(event, (error, value) => {
  if (error) {
    console.log(error)
  }
  fs.writeFileSync(`${__dirname}/event.ics`, value)
})