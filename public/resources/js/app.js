Handlebars.registerHelper('ifObject', function(item, options) {
	if (item && item.constructor.name == "Object") {
		return options.fn(this);
	} else {
		return options.inverse(this);
	}
});

Handlebars.registerHelper('ifArray', function(item, options) {
	if (item && item.constructor.name == "Array") {
		return options.fn(this);
	} else {
		return options.inverse(this);
	}
});

var daysData = null,
	isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

$(function() {
	$(window).scroll(onScroll);
	$.stellar();

	if (isMobile) {
		$('.header .twitter').show();
	}

	var dayTemplate = Handlebars.compile($("#day-template").html()),
		allCoords = [];

	daysData = {
		3: {
			locations: '<span>Haarlem, Nederland</span> to <span>Stade, Deutschland</span>',
			campsite: {
				name: 'Camping am Leuchtturm',
				url: 'http://www.camping-krautsand.de',
				coordinates: [9.376723, 53.759151],
				type: 'Campsite'
			},
			photos: [
				[1, 2],
				3,
				[4, 5],
				6
			]
		},
		4: {
			locations: '<span>Stade, Deutschland</span> to <span>Horsens, Danmark</span>',
			campsite: {
				name: 'Danhostel Horsens',
				url: 'http://danhostelhorsens.dk',
				coordinates: [9.865806, 55.873875],
				type: 'Hostel'
			},
			photos: [
				1, 2, 3
			]
		},
		5: {
			locations: '<span>Horsens, Danmark</span> to <span>Feda, Norge</span>',
			campsite: {
				name: 'Svindland Camping',
				url: 'https://plus.google.com/111193542745148137265/about?gl=nl&hl=en',
				coordinates: [6.795964, 58.281393],
				type: 'Campsite'
			},
			photos: [
				1,
				[2, 3],
				4,
				[{ id: 5, type: 'portrait' }, { id: 6, type: 'portrait' }],
				7,
				[8, 9],
				10
			]
		},
		6: {
			locations: '<span>Feda, Norge</span> to <span>J&oslash;rpeland, Norge</span>',
			campsite: {
				name: 'Preikestolen camping AS',
				url: 'http://www.preikestolencamping.com',
				coordinates: [6.092510, 58.999070],
				type: 'Campsite'
			},
			photos: [
				1, 2, 3, 4
			]
		},
		7: {
			locations: '<span>Preikestolen</span>',
			campsite: {
				name: 'Preikestolen camping AS',
				url: 'http://www.preikestolencamping.com',
				coordinates: [6.092510, 58.999070],
				type: 'Campsite'
			},
			photos: [
				1,
				[{ id: 2, type: 'portrait' }, { id: 3, type: 'portrait' }],
				4,
				5
			]
		},
		8: {
			locations: '<span>J&oslash;rpeland, Norge</span>',
			campsite: {
				name: 'Preikestolen camping AS',
				url: 'http://www.preikestolencamping.com',
				coordinates: [6.092510, 58.999070],
				type: 'Campsite'
			},
			photos: [
				1,
				[2, 3],
				4,
				5,
				6,
				[{ id: 7, type: 'portrait' }, { id: 8, type: 'portrait' }],
				9,
				{ id: 10, type: 'panorama' }
			]
		},
		9: {
			locations: '<span>J&oslash;rpeland, Norge</span> to <span>R&oslash;ldal, Norge</span>',
			campsite: {
				name: 'Røldal Hyttegrend',
				url: 'http://www.roldal-camping.no',
				coordinates: [6.827082, 59.831163],
				type: 'Cabin'
			},
			photos: [
				1,
				[2, 3],
				4,
				[{ id: 5, type: 'portrait' }, { id: 6, type: 'portrait' }]
			]
		},
		10: {
			locations: '<span>R&oslash;ldal, Norge</span> to <span>Ulvik, Norge</span>',
			campsite: {
				name: 'Espelandsdalen Camping',
				url: 'http://www.espelandsdalencamping.no',
				coordinates: [6.806182, 60.593390],
				type: 'Campsite'
			},
			photos: [
				1,
				[2, 3],
				{ id: 4, type: 'panorama' },
				5,
				[6, 7],
				8,
				[{ id: 9, type: 'portrait' }, { id: 10, type: 'portrait' }],
				11,
				[12, 13]
			]
		},
		11: {
			locations: '<span>Ulvik, Norge</span> to <span>Reed, Norge</span>',
			campsite: {
				name: 'Reed camping og fritid',
				url: 'http://www.reed-camping.no',
				coordinates: [6.408108, 61.731635],
				type: 'Cabin'
			},
			photos: [
				1,
				2,
				[3, 4],
				5
			]
		},
		12: {
			locations: '<span>Reed, Norge</span> to <span>Geiranger, Norge</span> and back',
			campsite: {
				name: 'Reed camping og fritid',
				url: 'http://www.reed-camping.no',
				coordinates: [6.408108, 61.731635],
				type: 'Cabin'
			},
			photos: [
				1,
				[2, 3],
				4,
				[5, 6],
				7,
				[8, 9],
				10,
				[11, 12],
				[13, 14],
				15,
				16
			]
		},
		13: {
			locations: '<span>Geiranger, Norge</span> to <span>Vikersund, Norge</span>',
			campsite: {
				name: 'Natvedt Camping',
				coordinates: [10.020385, 59.977108],
				type: 'Campsite'
			},
			photos: [
				1, 2
			]
		},
		14: {
			locations: '<span>Vikersund, Norge</span> to <span>Kristiansand, Norge</span>',
			campsite: {
				name: 'Yess Hotel',
				url: 'http://www.yesshotel.no',
				coordinates: [7.987935, 58.147536],
				type: 'Hotel'
			},
			photos: [
				[{ id: 1, type: 'portrait' }, { id: 2, type: 'portrait' }]
			]
		},
		15: {
			locations: '<span>Kristiansand, Norge</span> to <span>Horsens, Danmark</span>',
			campsite: {
				name: 'Danhostel Horsens',
				url: 'http://danhostelhorsens.dk',
				coordinates: [9.865806, 55.873875],
				type: 'Hostel'
			},
			photos: [
				[{ id: 1, type: 'portrait' }, { id: 3, type: 'portrait' }],
				[{ id: 2, type: 'portrait' }, { id: 4, type: 'portrait' }]
			]
		},
		16: {
			locations: '<span>Horsens, Danmark</span> to <span>Haarlem, Nederland</span>',
			photos: [
				[1, 2]
			]
		}
	};

	downloadRides(function(days) {
		$.each(days, function(index, day) {
			var date = new Date(Date.parse(day.a)),
				dateDay = date.getDate(),
				addition = 'th';

			if (dateDay == 3) {
				addition = 'rd';
			}

			$('#days').append(dayTemplate({
				i: index,
				date: dateDay,
				showMap: dateDay != 7,
				day: 'September ' + dateDay + addition,
				locations: daysData[dateDay]['locations'],
				photos: daysData[dateDay]['photos'],
				text: daysData[dateDay]['text'],
				distance: Math.round(day.d)
			}));

			if (dateDay != 7) {
				var coordinates = [];

				$.each(day['r'], function(index, segment) {
					coordinates.push([segment[0], segment[1]]);
					allCoords.push([segment[0], segment[1]]);
				});

				addMap(index, coordinates);
			}
		});

		$('.days-loading').hide();

		addMap('entire', allCoords);

		initScroll();

		$(window).resize(function() {
			doScroll = true;
			initScroll();
		});
	});

	// Stats
	var savedEuro = false;
	$('#stats h3 span').click(function() {
		if ($(this).hasClass('active')) {
			return;
		}

		$('#stats h3 span.active').removeClass('active');
		$(this).addClass('active');

		var type = $(this).text();
		$('#stats td').each(function() {
			if (type == "EUR") {
				if ($(this).data('eur')) {
					$(this).html($(this).data('eur'));
				}
			}
			else {
				if (!savedEuro) {
					$(this).data('eur', $(this).html());
				}

				if ($(this).data('us')) {
					$(this).html($(this).data('us'));
				}

				if (type == "UK" && $(this).data('uk')) {
					$(this).html($(this).data('uk'));
				}
			}
		});

		if (type != "EUR") {
			savedEuro = true;
		}
	});
});

var addMap = function(i, coordinates) {
	var map = L.map('map-' + i).setView(L.latLng(coordinates[0][1], coordinates[0][0]), 13);

	map.fitBounds(coordinates);

	map.touchZoom.disable();
	// map.doubleClickZoom.disable();
	map.scrollWheelZoom.disable();
	map.boxZoom.disable();
	map.keyboard.disable();

	if (isMobile) {
		map.dragging.disable();
		L.DomEvent.preventDefault = function(e) { return; };
		$(".leaflet-control-zoom").css("visibility", "hidden");
	}

	L.tileLayer('http://{s}.tiles.mapbox.com/v3/rdougan.jhla8dk6/{z}/{x}/{y}.png', {
	    maxZoom: 18
	}).addTo(map);

	var feature = {
        "type": "LineString",
        "coordinates": coordinates
    };

    var myStyle = {
        "color": "#e10b29",
        "weight": 5,
        "opacity": 0.65
    };

    var feature = L.geoJson(feature, {
    	style: myStyle
    }).addTo(map);

    map.fitBounds(feature.getBounds(), {
    	padding: [20, 20]
    });

	var fuelCoordinates = [
		[4.675147, 52.370315],
		[6.135114, 53.096171],
		[8.136318, 53.392021],
		[9.89013, 53.517543],
		[9.368177, 54.856684],
		[10.134652, 56.311327],
		[7.658268, 58.270003],
		[6.854821, 58.907425],
		[6.035088, 59.026138],
		[6.271206, 59.48057],
		[6.546278, 60.066216],
		[7.211042, 60.898841],
		[6.614652, 61.851775],
		[7.205144, 62.102651],
		[7.118485, 61.232601],
		[9.462802, 60.430026],
		[10.208233, 59.17758],
		[10.041954, 57.455879],
		[9.786374, 55.886424],
		[9.670703, 54.364367],
		[8.70352, 53.011772],
		[6.861547, 52.286466]
	];

	if (i == "entire") {
		// fuel
		var features = [];
		$(fuelCoordinates).each(function(index, coordinate) {
			features.push({
		        type: "Feature",
		        properties: {
		        	popupContent: "Fuel Station"
		        },
		        geometry: {
		        	type: "Point",
		        	coordinates: coordinate
		        }
		    });
		});

	    var fuelOptions = {
	        radius: 6,
	        fillColor: "#000",
	        color: "#000",
	        weight: 1,
	        opacity: .65,
	        fillOpacity: .65
	    };

	    var fuelFeature = L.geoJson(features, {
	    	pointToLayer: function (feature, latlng) {
		        return L.circleMarker(latlng, fuelOptions);
		    },
		    onEachFeature: function(feature, layer) {
			    if (feature.properties && feature.properties.popupContent) {
			        layer.bindPopup(feature.properties.popupContent);
			    }
			}
	    }).addTo(map);

	    // Campsites
		features = [];
		var addedDanHostel = false;
		for (var date in daysData) {
			var day = daysData[date];

			if (day.campsite) {
				if (day.campsite.name.match('Danhostel')) {
					if (addedDanHostel) {
						continue;
					}

					addedDanHostel = true;
				}

				features.push({
			        type: "Feature",
			        properties: {
			        	popupContent: '<a href="' + day.campsite.url + '">' + day.campsite.name + '</a>'
			        },
			        geometry: {
			        	type: "Point",
			        	coordinates: day.campsite.coordinates
			        }
			    });
			}
		}

	    var campOptions = {
	        radius: 6,
	        fillColor: "green",
	        color: "green",
	        weight: 1,
	        opacity: .65,
	        fillOpacity: .65
	    };

	    L.geoJson(features, {
	    	pointToLayer: function (feature, latlng) {
		        return L.circleMarker(latlng, campOptions);
		    },
		    onEachFeature: function(feature, layer) {
			    if (feature.properties && feature.properties.popupContent) {
			        layer.bindPopup(feature.properties.popupContent);
			    }
			}
	    }).addTo(map);
    }
};

var downloadRides = function(callback) {
	$.ajax({
	    xhr: function() {
	        var xhr = new window.XMLHttpRequest();

			// xhr.addEventListener("progress", function(evt) {
			// 	if (evt.lengthComputable) {
			// 		var percentComplete = evt.loaded / evt.total;
			// 		console.log('progress', percentComplete);
			// 	}
			// }, false);

	       return xhr;
	    },
	    url: "resources/json/days.json",
	    success: function(data) {
	        callback(data);
	    }
	});
};

var initedScroll = false,
	doScroll = false,
	loadedMap,
	imageIds,
	imagePositionsArray,
	imageMap,
	windowHeight,
	headerHeight,
	clonedHeader;

var initScroll = function() {
	imagePositionsArray = [];
	imageMap = {};
	loadedMap = [];
	imageIds = [];
	headerPositions = [];
	windowHeight = $(window).height();
	headerHeight= $('.header').height();

	var index = 0;

	$('img.lazy').each(function() {
		$(this).attr('id', 'image-' + index);
		imageIds.push('image-' + index);

		var imageTop = Math.round($(this).offset().top);

		if (imageMap[imageTop]) {
			imageMap[imageTop].push('image-' + index);
		}
		else {
			imageMap[imageTop] = ['image-' + index];
		}

		if (imagePositionsArray.indexOf(imageTop) == -1) {
			imagePositionsArray.push(imageTop);
		}

		index++;
	});

	initedScroll = true;

	if (doScroll) {
		onScroll();
	}
};

var onScroll = function() {
	if (!initedScroll) {
		doScroll = true;
		return;
	}

	var scrollY = window.scrollY,
		loadSize = 600,
		unloadSize = 1000,
		currentImageY,
		loadingHeight,
		imagesToLoad = [],
		imagesToUnload = imageIds.slice(0);

	currentImageY = scrollY - windowHeight;
	loadingHeight = Math.min(currentImageY + (windowHeight * 2) + loadSize, imagePositionsArray[imagePositionsArray.length - 1] + 1);

	for (var i = currentImageY; i < loadingHeight; i++) {
		if (!imageMap[i]) {
			continue;
		}

		for (var j = 0; j < imageMap[i].length; j++) {
			imagesToLoad.push(imageMap[i][j]);

			var index = imagesToUnload.indexOf(imageMap[i][j]);
			if (index != -1) {
				imagesToUnload.splice(index, 1);
			}
		}
	}

	for (var i = 0; i < imagesToLoad.length; i++) {
		loadImage(imagesToLoad[i]);
	}

	for (var i = 0; i < imagesToUnload.length; i++) {
		unloadImage(imagesToUnload[i]);
	}

	if (isMobile) {
		return;
	}

	if (scrollY > (headerHeight - 60)) {
		if (!clonedHeader) {
			$('.header .twitter').hide();

			clonedHeader = $('.header').clone();
			clonedHeader.addClass('sticky');

			clonedHeader.children('h1').remove();
			clonedHeader.append('<h2>Norway<span>September 2014</span></h2>');
			clonedHeader.children('h2').hide();

			$('body').append(clonedHeader);

			$('.header.sticky .twitter').show();
			clonedHeader.children('h2').fadeIn();
		}
	}
	else if (clonedHeader) {
		$('.header .twitter').show();
		$('.header.sticky .twitter').hide();

		clonedHeader.css('background-image', 'none');
		clonedHeader.fadeOut(function() {
			clonedHeader.remove();
			clonedHeader = null;
		});
	}
}

var loadImage = function(imageId) {
	if (loadedMap.indexOf(imageId) != -1) {
		return;
	}

	loadedMap.push(imageId);

	var el = document.getElementById(imageId);
	el.setAttribute('src', el.getAttribute(isMobile ? 'data-small' : 'data-original'));

	// console.log('loaded', imageId, loadedMap.length, Math.round(loadedMap.length / imagePositionsArray.length * 100) + '%');
}

var unloadImage = function(imageId) {
	var index = loadedMap.indexOf(imageId);
	if (index == -1) {
		return;
	}

    loadedMap.splice(index, 1);

	var el = document.getElementById(imageId);
	el.setAttribute('src', el.getAttribute('data-spacer'));

	// console.log('unloaded', imageId, loadedMap.length, Math.round(loadedMap.length / imagePositionsArray.length * 100) + '%');
};
