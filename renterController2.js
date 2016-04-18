var app = angular.module('facApp');
app.controller('renterController2', function($scope, $firebaseArray) 
{
    var ref = new Firebase("https://project-facilitate.firebaseio.com/");
    var authData = ref.getAuth();

    $scope.reset = function()
    {
        $scope.facility_type = "";
        $scope.costPerHour = 0;
        $scope.banquet_numOfHours = 0;
        $scope.reception_numOfHours = 0;
        $scope.reception_instructions = "";
        $scope.banquet_instructions = "";
        $scope.$apply();
    }

   $scope.changeReception = function() 
   {
       $scope.reception_numOfHours = this.reception_numOfHours;
       $scope.reception_instructions = this.reception_instructions;
   };

   $scope.changeBanquet = function() 
   {
       $scope.banquet_numOfHours = this.banquet_numOfHours;
       $scope.banquet_instructions = this.banquet_instructions;
   }; 
    
   
   
   //data reference for our posts-gets data for our pending facility requests
   var facility_requests = ref.child("facility_requests");
     //$scope.facility_requests_data = $firebaseArray(facility_requests.orderByChild("facilityProvider").equalTo(authData.uid));
     $scope.facility_requests_data = $firebaseArray(facility_requests.orderByChild("user").equalTo(authData.uid));
   
     $scope.newServiceRequest = function(type, hours, instructions, cost)
         {
             //save the new service request to firebase
             service_requests.push({renter: authData.uid, type: $scope.facility_type, instructions: instructions, cost: cost, hours: hours, provider: "n/a", completed: false});
         }

         $scope.receptionButtonOnClick = function()
         {
             this.facility_type = "reception";
             this.costPerHour = 1000;
             this.reception_numOfHours = 0;
             this.reception_instructions = "";
         }

         $scope.banquetButtonOnClick = function()
         {
             this.facility_type = "banquet";
             this.costPerHour = 500;
             this.banquet_numOfHours = 0;
             this.banquet_instructions = "";
         }
     });