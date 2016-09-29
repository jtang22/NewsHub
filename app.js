var app = angular.module('newsHub', []);

app.controller('MainCtrl', [
  '$scope',
  function($scope) {
    //$scope.test = 'Hello world!';
    $scope.posts = [
      {title: 'post 1', link: 'https://www.reddit.com/r/kpop/comments/54ynlx/what_songs_did_you_enjoy_at_first_but_now_dont/', upvotes: 5},
      {title: 'post 2', link: '', upvotes: 2},
      {title: 'post 3', link: 'http://i.imgur.com/N1V9NTf.jpg', upvotes: 15},
      {title: 'post 4', link: 'https://www.reddit.com/r/funny/comments/54w6b0/wake_up_people/', upvotes: 9},
      {title: 'post 5', link: 'http://imgur.com/a/GQIIw', upvotes: 4}
    ];
    $scope.addPost = function() {
      if(!$scope.title || $scope.title === '') {
        return;
      }
      $scope.posts.push({
        title: $scope.title,
        link: $scope.link,
        upvotes: 0
      });
      $scope.title = '';
      $scope.link = '';
    };
    $scope.incrementUpvotes = function(post) {
      post.upvotes += 1;
    };
  }]);
