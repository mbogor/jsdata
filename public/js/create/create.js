'use strict'; 

app.config(function($stateProvider) { //no factories or services
	$stateProvider.state('create', {
		url: '/create/:userId',
		templateUrl: 'js/create/create.html',
		controller: 'CreateCtrl',
		resolve: {
			
			author: function($stateParams, User){
				
				return User.find($stateParams.userId)

				// console.log("you are here, here's the id ", $stateParams.userId)}

			}
		/*
				add a resolve block that has an author function which 
				users $stateParams to retrieve the author object
		*/
		}
	})
})

// add necessary dependencies here 
app.controller('CreateCtrl', function($scope, Post, $state, author) {

	$scope.previewTrue = false;

	$scope.preview = function() {
		$scope.previewTrue = !$scope.previewTrue;
	}

	$scope.createNewPost = function(){
		console.log("new post ",$scope.newPost)
		$scope.newPost.author = author._id// whatever variable we created to capture id in the state
		//newPost object will now have an id property
		Post.create($scope.newPost)
      .then(function(article){
        console.log("article ", article)
        $state.go('main')
      }).catch(console.error)
    
	}

	/*

	TODOS: 
	1 - create the object that the form can use via ng-model
  2 - create a function that 
	 		a) persists the ng-modeled post object 
			b) changes the state to 'main'  

	*/
	
}) 