// Tal Haberer Get Repos Function//Build Url and Query//Display Results in lines Parsing JSON input//Query and Print Summary Informationvar apiKey = require('../.env').apiKey;exports.getRepos = function() {    var GitHubUserName = $("#gitUserName").val();  $.get('https://api.github.com/users/' + GitHubUserName + '/repos' + '?access_token=' + apiKey).then(function(response){    for (var i = 0; i < response.length; i++) {     $(".results").append("<li><span class='key'> Name of Repos: </span>"+ "<span class='title'>" + response[i].name+ "</span><br>" + "<span class='key'>Creation Date: </span>" + moment(response[i].created_at).format("LLL") + "<br>"+ "<span class='key'>Repos Description: </span>" +response[i].description + "</li><br>");   }});};