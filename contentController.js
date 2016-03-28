app.controller('contentController', function($scope, $firebaseArray) 
{
  //if we ARE authenticated...
   $scope.role = null;
  if(authData)
  {
       
    //...then we find out what our role is by going to a child auth of our base reference and then the child within that to get our uid
    ref.child("role").child(authData.uid).on("value", function(data) 
    {
      $scope.role = data.val();
          
    });
  
   //at this point we are logged in and considred a renter (not a provider or admin role)
   $scope.userEmail = authData.password.email; //this is used to display the userEmail in the header  
   
   //data reference for our posts-gets data for our pending facility requests
   var facility_requests = ref.child("facility_requests");
     //$scope.facility_requests_data = $firebaseArray(facility_requests.orderByChild("facilityProvider").equalTo(authData.uid));
     $scope.facility_requests_data = $firebaseArray(facility_requests.orderByChild("user").equalTo(authData.uid));
   

   $scope.submit = function()
    {
        //save the facility request to firebase
        facility_requests.push({user: authData.uid, type: $scope.facility_type, viewing: "n/a", booked: false, facilityProvider: "n/a" });
    
      $scope.facility_type ="";
      
    }

   $scope.logout = function() {
     ref.unauth();
     window.location.href = "index.html";
   }
 }
});
