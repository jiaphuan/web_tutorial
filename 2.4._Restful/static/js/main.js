var app = angular.module('main_app', []);

app.controller('user_controller', function($scope, $http) {
  $http.get('/api/v1.0/user_info/0').
    then(function(response) {
      $scope.name = response.data.name;
      $scope.quote = response.data.quote;
      $scope.about = response.data.about;
      $scope.portrait = response.data.portrait;
      $scope.profile_photo = response.data.profile_photo;
    });
});

app.controller('postList_controller', function($scope, $http) {
  $http.get('/api/v1.0/post_list/0/0').
    then(function(response) {
      $scope.posts = response.data;
    });
});

