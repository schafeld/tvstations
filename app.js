'use strict';

var app = angular.module('myApp', []);

app.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {

    /*
      Json source blocked by CORS ( https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS ):
      $http.get('https://app.unitymedia.de/channels/api/v1/handler')
      Server required, e.g.:

      php -S localhost:8000

      ( or: ./server.py
        not:  python -m SimpleHTTPServer 8000 )
    */

    // Mock data, for use with simple local server:
    // $http.get('tvstations.json')

    // Read Json from actual web source:
    // $http.get('tvstations.py')
    $http.get('./tvstations.php')
      .success(function(data, status, headers, config) {
           $scope.tvstations = data;

           // console.log(data[0]);
           console.log( $scope.tvstations  );

           console.log("Success!!");
      })
      .error(function(error, status, headers, config) {
           console.log(status);
           console.log("Error occured");
      });



// Mock data, excerpt from https://app.unitymedia.de/channels/api/v1/handler
// Makes script executable without server
/*
  $scope.tvstations = [

      {
        "id": 41377,
        "name": "Das Erste HD",
        "description": "Das Erste ist das Flaggschiff der ARD mit einem umfassenden Angebot für alle Zuschauer. Es reicht von regelmäßigen Nachrichten- und Sportsendungen, Magazinen und beliebten Serienhighlights wie beispielsweise \"Tatort\", bis zu Kultursendungen, Fernseh- und Spielfilmen, vom Familienprogramm bis zu kirchlichen Sendungen und Musiksendungen. Hier erfahren die Zuschauer alles was es an nationalen und internationalen Nachrichten gibt. Das Erste HD bietet ein umfassendes Programmangebot in hervorragender Bildqualität.",
        "actionTitle": "Öffentliches Fernsehen in HD-Qualität",
        "genre": "Vollprogramm",
        "senderType": "TV",
        "digital": true,
        "analog": false,
        "hd": true,
        "url": "http://www.daserste.de",
        "senderTime": "täglich 24 Stunden",
        "logo": "https://app.unitymedia.de/channels/api/v2/assets/126483.png",
        "logo_medium": "https://app.unitymedia.de/channels/api/v2/assets/126484.png",
        "logo_small": "https://app.unitymedia.de/channels/api/v2/assets/126485.png",
        "trailer": null,
        "senderInNrwHessenBw": "true",
        "senderInBw": "false",
        "senderInNrwHessen": "false",
        "regionalInBw": "false",
        "regionalInNrwHessen": "false",
        "packages": [{
          "id": 2530,
          "packageName": "HD Kabelanschluss"
        }, {
          "id": 2531,
          "packageName": "Digitaler Kabelanschluss"
        }, {
          "id": 2537,
          "packageName": "Gesamtpaket DigitalTV HIGHLIGHTS + HD Option"
        }, {
          "id": 2538,
          "packageName": "Gesamtpaket DigitalTV ALLSTARS + HD Option"
        }],
        "languages": [{
          "id": 1786,
          "languageName": "Deutsch"
        }]
      },


      {
        "id": 41864,
        "name": "ZDF HD",
        "description": "Das ZDF HD bietet ein Vollprogramm aus Information, Bildung, Kultur und Unterhaltung in brillanter Bildqualität. Es präsentiert den Zuschauern einen Überblick über das Weltgeschehen und vermittelt ein umfassendes Bild der deutschen Wirklichkeit. Im Programm sind sowohl professionell gemachte, hochaktuelle Nachrichten, investigative Polit-Magazine, aber auch Dokumentationen, vielfältige Fernsehfilme und Serien sowie facettenreiche Unterhaltungsformate.",
        "actionTitle": "Bilder, die berühren - HDTV im Zweiten",
        "genre": "Vollprogramm",
        "senderType": "TV",
        "digital": true,
        "analog": false,
        "hd": true,
        "url": "http://www.zdf.de/",
        "senderTime": "täglich 24 Stunden",
        "logo": "https://app.unitymedia.de/channels/api/v2/assets/127971.png",
        "logo_medium": "https://app.unitymedia.de/channels/api/v2/assets/127972.png",
        "logo_small": "https://app.unitymedia.de/channels/api/v2/assets/127973.png",
        "trailer": null,
        "senderInNrwHessenBw": "true",
        "senderInBw": "false",
        "senderInNrwHessen": "false",
        "regionalInBw": "false",
        "regionalInNrwHessen": "false",
        "packages": [{
          "id": 2530,
          "packageName": "HD Kabelanschluss"
        }, {
          "id": 2531,
          "packageName": "Digitaler Kabelanschluss"
        }, {
          "id": 2537,
          "packageName": "Gesamtpaket DigitalTV HIGHLIGHTS + HD Option"
        }, {
          "id": 2538,
          "packageName": "Gesamtpaket DigitalTV ALLSTARS + HD Option"
        }],
        "languages": [{
          "id": 1786,
          "languageName": "Deutsch"
        }]
      },


      {
        "id": 41642,
        "name": "RTL HD",
        "description": "RTL HD überträgt sein Programm in gestochen scharfer Bildqualität mit leuchtenden Farben und einzigartiger Brillanz. Der erste bei RTL ausgestrahlte Film in nativ HD war \"Stirb langsam 4.0\", der Blockbuster mit Bruce Willis. Der Anteil an echten HDTV-Filmen und Serien steigt hier stetig und wird langsam zur Normalität. Hier werden vor allem US-Serien, Live-Sendungen sowie Sportevents in HDTV gesendet. RTL HD überzeugt seine Zuschauer mit einem vielfältigen Programmangebot und abwechslungsreichem Fernsehen.",
        "actionTitle": "Besser sehen. Mehr erleben.",
        "genre": "Vollprogramm",
        "senderType": "TV",
        "digital": true,
        "analog": false,
        "hd": true,
        "url": "http://www.rtl-hd.de",
        "senderTime": "täglich 24 Stunden",
        "logo": "https://app.unitymedia.de/channels/api/v2/assets/127297.png",
        "logo_medium": "https://app.unitymedia.de/channels/api/v2/assets/127298.png",
        "logo_small": "https://app.unitymedia.de/channels/api/v2/assets/127299.png",
        "trailer": null,
        "senderInNrwHessenBw": "true",
        "senderInBw": "false",
        "senderInNrwHessen": "false",
        "regionalInBw": "false",
        "regionalInNrwHessen": "false",
        "packages": [{
          "id": 2530,
          "packageName": "HD Kabelanschluss"
        }, {
          "id": 2537,
          "packageName": "Gesamtpaket DigitalTV HIGHLIGHTS + HD Option"
        }, {
          "id": 2538,
          "packageName": "Gesamtpaket DigitalTV ALLSTARS + HD Option"
        }, {
          "id": 2551,
          "packageName": "HD Option"
        }],
        "languages": [{
          "id": 1786,
          "languageName": "Deutsch"
        }]
      }
    ];
*/

}]);
