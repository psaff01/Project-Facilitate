var app = angular.module('home', ["firebase"]);
var ref = new Firebase("https://project-facilitate.firebaseIO.com/");
var authData = ref.getAuth();

app.controller('loginRedirect', function($scope, $firebaseArray) 
{
    
    //console.log(authData);
    if(!authData)
    {
        window.location.href = "index.html";
       
    }
    //else
     //{
        
     //}
});