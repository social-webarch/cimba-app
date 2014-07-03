
angular.module('Cimba.channels.view', ['ui.router'])

.config(function ChannelsConfig($stateProvider) {
	$stateProvider.state('view', {
		url: '/channels/view/*path', 
		views: {
			'main': {
				controller: 'ChannelViewCtrl',	
				templateUrl: 'channels/view/channel-view.tpl.html'
			}
		},
		data: {}
	});
})

.controller('ChannelViewCtrl', function ChannelViewController($scope, $stateParams, $location, $http) {	
	$scope.path = $stateParams.path;

	$scope.safeUri = function (uri) {
		return uri.replace(/^https?:\/\//,'');
	};

	var webid = $scope.$parent.userProfile.webid;
	$scope.chanUri = "https://" + $scope.path;

	$scope.$parent.getChannel($scope.chanUri);
})

.directive('listPosts', function () {
	return {
		replace: true,
		restrict: 'E',
		templateUrl: 'channels/view/posts.tpl.html'
	};
});