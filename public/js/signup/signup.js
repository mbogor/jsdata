'use strict';

app.config(function($stateProvider) {

	$stateProvider.state('signup', {
		url: '/signup',
		templateUrl: 'js/signup/signup.html',
		controller: 'SignupCtrl'

	})
})

// add necessary dependencies here
app.controller('SignupCtrl', function($scope, User, $state) {
      
    $scope.sendSignup = function(input){
      console.log("info from form ", input)

      // console.log("username ", $scope.signup.username)

      // var input = {username: $scope.signup.username, password: $scope.signup.password}

      User.create(input)
      .then(function(created){
        console.log("CREATED ", created)
        $state.go('create', { userId: created._id})
      }).catch(console.error)
    }
  /*
  TODOS: 
  1 - create the signup object for ng-modelling
  2 - create a `sendSignup` function that
      a) persists the user data 
      b) changes the state to  'create' while sending along important user data
      (HINT: $stateParams)

  */

})