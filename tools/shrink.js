var _ = require('underscore'),
    fs = require('fs');

fs.readFile('rides.json', function(err, data) {
  if (err) throw err;

  var rides = JSON.parse(data)['rides'],
      newRides = [],
      day = [],
      distance = 0,
      currentDay;

  _.each(rides, function(ride) {
    if (!currentDay) {
      currentDay = ride['title'];
    }

    if (ride['title'] != currentDay) {
      newRides.push({
        a: currentDay,
        d: distance,
        r: day.reverse()
      });

      console.log(currentDay, day.length);
      
      day = [];
      distance = 0;
      currentDay = ride['title'];
    }

    distance += ride['totalDistance'];

    _.each(ride['segmentEvents'], function(segmentEvent) {
      day.push([segmentEvent['longitude'], segmentEvent['latitude']])
    });
  });

  newRides.push({
    a: currentDay,
    d: distance,
    r: day.reverse()
  });

  fs.writeFile("days.json", JSON.stringify(newRides.reverse()), function(err) {
      if (err) throw err;

      console.log('saved shrinked.json');
  }); 
});

