 app.controller('providerCtrl', function($scope, $firebaseArray) 
 {
  
   //if we ARE authenticated...
    $scope.role = null;
   if(authData)
   {
     //ref.unauth();//this logs us out
     
     //...then we find out what our role is by going to a child auth of our base reference and then the child within that to get our uid
     ref.child("role").child(authData.uid).on("value", function(data) 
     {
       if(data.val() != "provider")
       {
            window.location.href = "home.html"
       }
     });
   }
    $scope.userEmail = authData.password.email;

    //get the data for our pending service requests
    var facility_requests = ref.child("facility_requests");
    $scope.facility_request_data = $firebaseArray(facility_requests.orderByChild("facilityProvider").equalTo(authData.uid));



    $scope.logout = function() 
    {
        ref.unauth();
        window.location.href = "index.html";
    }
    $scope.accept = function() 
    {
        //service_requests.update({accepted:  true});
       ref.child("facility_requests").child("-KBemJWOJJi7tH6upGbn").update({accepted:  true});
     }  
    
 });
