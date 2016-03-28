var app = angular.module('myApp', ["firebase"]);
app.controller('formCtrl', function($scope) 
{
    //$scope.password = {};
    $scope.login = function() 
    {

      var ref = new Firebase("https://project-facilitate.firebaseio.com/");
      ref.authWithPassword({
        email    : $scope.username,
        password : $scope.password
      }, function(error, authData) 
      {
        if (error) 
        {
          //console.log("Login Failed!", error);
          //$scope.authenticated = "Failed"
          console.log(error);
        } 
        else 
        {
         window.location.href = 'home2.html';
         }
      });
    
    };
    //$scope.reset(); //will reset the login input boxes
});
