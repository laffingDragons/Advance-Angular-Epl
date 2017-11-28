// intailizing controller for getting json data
myApp.controller('myController', ['$http', 'eplService', function($http, eplService) {

  //create a context
  var main = this;
  this.name15;
  this.name16;
  this.teamCode15;
  this.teamCode16;
  this.rounds15 = [];
  this.rounds16 = [];
  this.matches = [];

  /*intializing URL's
  this.baseUrl15 = 'https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json';

  this.baseUrl16 = 'https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json';
   */

  this.data15 = function() {
       eplService.get15()
      .then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
        //console.log(response);
        main.name15 = response.data.name;
        console.log(main.name15);
        main.rounds15 = response.data.rounds;
        console.log(main.rounds15);
        main.matches1 = response.data.rounds[0].matches;

      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        alert("some error occurred. Check the console.");
        console.log(response);

      });

    } // end load all data

  this.data15();

  this.data16 = function() {
       eplService.get16()
      .then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
        //console.log(response);
        main.name16 = response.data.name;
        console.log(main.name16);
        main.rounds16 = response.data.rounds;
        console.log(main.rounds16);

      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        alert("some error occurred. Check the console.");
        console.log(response);

      });

    } // end load all data

  this.data16();

}]);
