var host = "api.ridescorpio.com",
    basePath = "/api/v1/ride/9ac4c4e7-2e86-4922-a77b-e8af180cb4ff/ride",
    listPath = "/list/0/200/true",
    eventsPath = "/events";

var http = require('http'),
    fs = require('fs');

// /api/v1/ride/9ac4c4e7-2e86-4922-a77b-e8af180cb4ff

// /vehicle/0a859758-aef9-4749-ab88-c16d88a23f7f
// /ride/list/0/10/true
// /ride/9694af9b-c542-4d2c-bc13-3c3c9fa4e229/

// var options = {
//   host: host,
//   path: basePath + listPath
// }

// var options = {
//   host: 'localhost',
//   path: '/Personal/norway/ridelog.json'
//   // host: 'api.ridescorpio.com',
//   // path: '/api/v1/ride/9ac4c4e7-2e86-4922-a77b-e8af180cb4ff/ride/list/0/100/true'
// };

var allData = {};

var rideWithId = function(rideId) {
  if (!allData || !allData['rides']) {
    return;
  }

  var ride = null;

  for (var i = 0; i < allData['rides'].length; i++) {
    if (allData['rides'][i]['id'] == rideId) {
      ride = allData['rides'][i];
      break;
    }
  }

  return ride;
}

var getRide = function(rideId, callback) {
  http.request({
    host: host,
    path: basePath + '/' + rideId + eventsPath
  }, function(response) {
    var responseText = '';

    response.on('data', function(chunk) {
      responseText += chunk;
    });

    response.on('end', function () {
      var data = JSON.parse(responseText);

      if (callback) {
        callback(data['segmentEvents']);
      }
    });
  }).end();
};

var getRides = function(callback) {
  http.request({
    host: host,
    path: basePath + listPath
  }, function(response) {
    var responseText = '';

    response.on('data', function(chunk) {
      responseText += chunk;
    });

    response.on('end', function () {
      var data = JSON.parse(responseText);
      
      allData = data;

      if (callback) {
        callback();
      }
    });
  }).end();
}

var saveFile = function() {
  fs.writeFile("scraper.json", JSON.stringify(allData), function(err) {
      if(err) {
          console.log(err);
      } else {
          console.log("The file was saved!");
      }
  }); 
}

getRides(function() {
  // console.log('#getRides');

  var i = 0,
     next;

  next = function(id) {
    getRide(id, function(data) {
      allData['rides'][i]['segmentEvents'] = data;

      console.log('#getRide', i, id, allData['rides'][i]['title']);
      i++;

      if (allData['rides'][i]) {
        next(allData['rides'][i]['id']);
      }
      else {
        saveFile();
      }
    });
  }

  next(allData['rides'][0]['id']);
});

// var id = '9694af9b-c542-4d2c-bc13-3c3c9fa4e229';
// addRide(id, function() {

// });