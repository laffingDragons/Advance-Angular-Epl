myApp.service("eplService",function($http){
    
    var baseUrl15="https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json";
    var baseUrl16="https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json";
    
    this.get15=function(){
        return $http.get(baseUrl15);
    }//end of 2015 data
    
    this.get16=function(){
        return $http.get(baseUrl16);
    }//end of 2016 data
   
})