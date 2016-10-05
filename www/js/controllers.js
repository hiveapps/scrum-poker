var scrumPoker = angular.module('scrumPoker.controllers', [])

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBt62yo4dziTPv5ZGQu9nTE7VN5yKWJtQ4",
    authDomain: "scrum-poker-9f7a6.firebaseapp.com",
    databaseURL: "https://scrum-poker-9f7a6.firebaseio.com",
    storageBucket: "scrum-poker-9f7a6.appspot.com",
    messagingSenderId: "790045643049"
  };
  firebase.initializeApp(config);

scrumPoker.controller("loginCtrl", function($scope, $state, $timeout, $firebaseArray){
  
  //This is going to get and log the user status, this could be copied and/or used for the beginning framework to build
  //a functioning profile page
  var user = firebase.auth().currentUser;

  if (user) {
    console.log("User is logged in");
    $state.go('tab.dash');
    user.providerData.forEach(function (profile) {
      console.log("Sign-in provider: "+profile.providerId);
      console.log("  Provider-specific UID: "+profile.uid);
      console.log("  Name: "+profile.displayName);
      console.log("  Email: "+profile.email);
      console.log("  Photo URL: "+profile.photoURL);
    });
  } else {
    console.log("User is logged out");
    $state.go('login');
  };
  
  $scope.login = function(email, password){
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        console.error(error);
      }
      // [END_EXCLUDE]
    });
    // [END authwithemail]
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        $state.go('tab.dash');
      };
    });
    
    if (user != null) {
      user.providerData.forEach(function (profile) {
        console.log("Sign-in provider: "+profile.providerId);
        console.log("  Provider-specific UID: "+profile.uid);
        console.log("  Name: "+profile.displayName);
        console.log("  Email: "+profile.email);
        console.log("  Photo URL: "+profile.photoURL);
      });
    };
  };
  
/*$scope.login = function() {
    $cordovaOauth.facebook("1684910905080080", ["email"]).then(function(result) {
        Auth.$authWithOAuthToken("facebook", result.access_token).then(function(authData) {
            console.log(JSON.stringify(authData));
            $state.go('tab.thread');
        }, function(error) {
            console.error("ERROR: " + error);
        });
    }, function(error) {
        console.log("ERROR: " + error);
    });
  };
  Auth.$onAuth(function(authData) {
    if (authData === null) {
      $state.go('login');
    } else {
      $state.go('tab.thread');
    }
    $scope.authData = authData; // This will display the user's name in our view
  });
});*/

  //Logout Functionality
  $scope.logout = function() {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }, function(error) {
      // An error happened.
    });
    $state.go('login');
    console.log("User has been logged out");
  };
  
});

scrumPoker.controller('DashCtrl', function($scope, Cards) {
  $scope.cards = Cards.all();
  $scope.remove = function(card) {
    Cards.remove(card);
  };
});

scrumPoker.controller('DashDetailCtrl', function($scope, $stateParams, Cards) {
  $scope.card = Cards.get($stateParams.cardId);
});

scrumPoker.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
