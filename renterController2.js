var app = angular.module('facApp', ["firebase"]);
app.controller('renterController2', function($scope, $firebaseArray) 
{
    var ref = new Firebase("https://project-facilitate.firebaseio.com/");
    var authData = ref.getAuth();
    $scope.facility_type = "reception";
    $scope.costPerHour = 1000;
    $scope.banquet_numOfHours = 0;
    $scope.reception_numOfHours = 0;
    
   
   
   //data reference for our posts-gets data for our pending facility requests
   var facility_requests = ref.child("facility_requests");
     //$scope.facility_requests_data = $firebaseArray(facility_requests.orderByChild("facilityProvider").equalTo(authData.uid));
     $scope.facility_requests_data = $firebaseArray(facility_requests.orderByChild("user").equalTo(authData.uid));
   
     $scope.newServiceRequest = function()
         {
             //save the new service request to firebase
             var instructions = "";
             var hours = "";
             var cost = 0;
             if($scope.facility_type == "reception")
             {
                 instructions = $scope.reception_instructions;
                 hours = $scope.reception_numOfHours;
                 cost = size * costPerHour
             }
             else
             {
                 instructions = $scope.banquet_instructions;
                 hours = $scope.banquet_numOfHours;
                 cost = size * costPerHour;
             }

             service_requests.push({renter: authData.uid, type: $scope.facility_type, instructions: instructions, cost: cost, hours: hours, provider: "n/a", completed: false});
         }

         $scope.receptionButtonOnClick = function()
         {
             $scope.facility_type = "reception";
             $scope.costPerHour = 1000;
         }

         $scope.banquetButtonOnClick = function()
         {
             $scope.facility_type = "banquet";
             $scope.costPerHour = 500;
         }
     });