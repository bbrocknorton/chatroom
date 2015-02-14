var app = angular.module('chatroom');

app.service('parseService', function($http, $q) {
  //Here you'll need to create two methods. One called postData and the other called getData.

  //On the lines below create a getData method. This method will retrieve data from the parse backend.
  //The url for the get request should be 'https://api.parse.com/1/classes/chat?order=-createdAt'
  //Be sure to return whatever gets returned from $http so you can call .then in your controller.
  this.getParseData = function() {
    return $http({
      method: "GET",
      url: "https://api.parse.com/1/classes/chat?order=-createdAt"
    }).then(function(response) {
      return response.data;
    });
  }


  this.postData = function(message) {
    // do an $http request to add a message to our parse backend
    return $http({
      method: 'POST',
      url: 'https://api.parse.com/1/classes/chat',
      params: {
        sort: 'ascending'
      },
      data: {
        'text': message
      }
    })
  };


  this.getData = function() {

    return $http({
      'method': 'get',
      'url': "https://api.parse.com/1/classes/chat?order=-createdAt"
    }).then(function(res) {
      return res.data.results
    })
  }
});