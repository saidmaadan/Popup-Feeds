(function(){
	"use strict"

	var app = angular.module("PopUp",['ui-router']);

	app.config(['$stateProvider', '$urlRouteProvider',
		function($stateProvider, $urlRouteProvider){
			$stateProvider
				.state('home',{
					url: '/home',
					templateUrl: 'home.html',
					controller: 'MainControllerontroller'
				});

				$urlRouteProvider.otherwise('home')
		}])

	app.factory('posts', [function(){
		var o = {
			posts: [
		{title: "post 1", upvotes: 4},
		{title: "post 2", upvotes: 3},
		{title: "post 3", upvotes: 1},
		{title: "post 4", upvotes: 7},
		{title: "post 5", upvotes: 9},
		{title: "post 6", upvotes: 2}
		]
		};
		return o;
	}])

	app.controller("MainController", MainController);

	function MainController($scope, posts){
		$scope.posts = posts.posts

		$scope.addPost =function(){
			if(!$scope.title || $scope.title === ''){
				return; }
			$scope.posts.push({title: $scope.title, link: $scope.link, upvotes: 3});
			$scope.title = "";
			$scope.link = "";
		};

		$scope.incrementUpvotes = function(post){
			post.upvotes += 1;
		};
	}
}());