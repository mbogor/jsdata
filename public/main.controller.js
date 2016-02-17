'use strict';

app.config(function($stateProvider) {
	$stateProvider.state('main', {
		url: '/',
		templateUrl: '/main.html',
		controller: 'MainController',
		resolve: {
		    users: function(User){
		    // sends a GET request to /api/users
		    // remember, js-data constructs the route by 
		    // concatenating the basepath and the name of our resource
		    	return User.findAll()
		    // under the hood, js-data 1) maps over this array, 
		    // 2) instantiates each object as an instance of the User class, 
		    // and 3) injects the users in the cache : adding them to an array : 
		  /* 
		  .then(function(userObjects){
		     return userObjects.map(function(obj){  
		       var user = User.createInstance(obj)
		        return User.inject(user)
		    })
		   })
		   */
		   },
		 // injecting the users resolve-service into posts to 
		 // avoid race conditions 
		    posts: function(Post, users) {
		        // GET --&gt; /api/posts
		        return Post.findAll({})
		    }
		}

	})
})



app.controller('MainController', function($scope, posts, Post, User, users) {
	

	//cache
	var postData = Post.getAll()
	//mongo
	$scope.allPosts = posts;

	var userData = User.getAll();
	$scope.allUsers = users;

	var dataInJsDataCache = {postData, userData}
	console.log("CACHE ", dataInJsDataCache)

	// // Post.ejectAll() // removes all the posts from the data store
	// Post.inject(postData)  // adds them back
	// console.log(Post.getAll())
	// // console.log('posts: ', posts, "users: ", users)
 	/*
		TODOS: 
		1 - use js-data to retrieve all users and all posts
		(HINT: if you want to be fancy, add a resolve block to this state 
		and retrieve the data there)

 	*/
})


