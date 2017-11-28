//Creating Controller for Match details veiw

myApp.controller("matchDetails", ['$http', '$location', '$routeParams', 'eplService', function($http, $location, $routeParams, eplService) {

    //Creating Context
    var main = this;
    // for getting ID of single match
    this.matchDate = $routeParams.matchDate;
    this.ID1 = $routeParams.id1;
    this.ID2 = $routeParams.id2;

    this.team1;
    this.team2;
    this.score1;
    this.score2;
    this.code1;
    this.code2;
    this.date;
    this.winner;
    this.matchDay;
    this.rounds = [];

    //Function for going back
    this.goBack = function() {
      $location.path('/');
    }

    //Building logic for Data arrangement
    this.details = function(data) {
      main.rounds = data.rounds;
      for (var x in main.rounds) {
        for (var y in main.rounds[x].matches) {
          if (main.rounds[x].matches[y].team1.code == main.ID1 && main.rounds[x].matches[y].team2.code == main.ID2 && main.rounds[x].matches[y].date == main.matchDate) {

            //Assigning data to variables
            main.matchDay = main.rounds[x].name;
            main.team1 = main.rounds[x].matches[y].team1.name;
            main.team2 = main.rounds[x].matches[y].team2.name;
            main.score1 = main.rounds[x].matches[y].score1;
            main.score2 = main.rounds[x].matches[y].score2;
            main.code1 = main.rounds[x].matches[y].team1.code;
            main.code2 = main.rounds[x].matches[y].team2.code;
            main.date = main.rounds[x].matches[y].date;

            if (main.score1 > main.score2) {
              main.winner = "" + main.team1 + " Won";
            } else if (main.score1 < main.score2) {
              main.winner = "" + main.team2 + " Won";
            } else {
              main.winner = "Match Drawn";

            }

          }
        }
      }
    }

    /*intailizing URL's
    this.baseUrl1 = "https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json";
    this.baseUrl2 = "https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json";   */

    //http function for getting data
    this.url1 = function() {
        eplService.get15()
      .then(function successCallback(response) {

          main.details(response.data);

        },
        function errorCallback(reason) {
          alert("Some error occurred. Check the console.");
        })
    }

    this.url1() //call for first url

    this.url2 = function() {
       eplService.get16()
      .then(function successCallback(response) {

          main.details(response.data);

        },
        function errorCallback(reason) {
          alert("Some error occurred. Check the console.");
        })
    }

    this.url2(); // Call for second url
  }



])
