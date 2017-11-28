myApp.controller("teams", ['$http', '$location', '$routeParams', 'eplService', function($http, $location, $routeParams, eplService) {

  //creating context
  var main = this;

  // var for data
  this.code1 = $routeParams.a;

  this.rounds = [];

  console.log(main.code1);

  var matchesPlayed = 0;
  var wins = 0;
  var loss = 0;
  var draw = 0;
  var score = 0;

  this.team15 = function(data) {

    main.rounds = data.rounds;

    for (var a in main.rounds) {

      for (var b in main.rounds[a].matches) {

        // loop with routeParams ID

        if (main.rounds[a].matches[b].team1.code === main.code1) {
          matchesPlayed++;
          score += main.rounds[a].matches[b].score1;
          main.name1 = main.rounds[a].matches[b].team1.name;
          if (main.rounds[a].matches[b].score1 > main.rounds[a].matches[b].score2) {
            wins++;


          } else if (main.rounds[a].matches[b].score1 < main.rounds[a].matches[b].score2) {
            loss++;


          } else if (main.rounds[a].matches[b].score1 == main.rounds[a].matches[b].score2) {
            draw++;

          }


        } else if (main.rounds[a].matches[b].team2.code == main.code1) {

          main.name1 = main.rounds[a].matches[b].team2.name;

          matchesPlayed++;
          score += main.rounds[a].matches[b].score2;


          if (main.rounds[a].matches[b].score1 > main.rounds[a].matches[b].score2) {
            loss++;

          } else if (main.rounds[a].matches[b].score1 < main.rounds[a].matches[b].score2) {
            wins++;

          } else if (main.rounds[a].matches[b].score1 == main.rounds[a].matches[b].score2) {
            draw++;

          }


        }
        main.matches = matchesPlayed;
        main.wins = wins;
        main.loss = loss;
        main.draw = draw;
        main.score = score;


      }
    }
  }

  //intailizing URL's
 // this.baseUrl1 = "https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json";


  //http function for getting data
  this.url1 = function() {
        eplService.get15()
        .then(function successCallback(response) {

        main.team15(response.data);
        //console.log(main.teamArray);
      },
      function errorCallback(reason) {
        alert("Some error occurred. Check the console.");
      })
  }

  this.url1() //call for first url

}])
