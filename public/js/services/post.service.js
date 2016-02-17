'use strict';

app.factory('Post', function(DS, $state) {


	var Post =  DS.defineResource({
		name: 'posts',
		relations: {
			belongsTo: {
				users: {
					localKey: 'author',
					localField: '_author'
				}
			}
		},
		methods: {
			go: function(){
				$state.go('post', {
					postId: this._id,
					authorId: this.author
				})
			}
		}

	})

	return Post;

	/*

		TODOS: 
		1) create a js-data POST resource that establishes a relationship 
		between posts and users

		2) add a methods object to the resource
				a) add a `go` method that takes each post to the individual post page 
				(HINT: see post.js)

	*/

}).run(function(Post){});


