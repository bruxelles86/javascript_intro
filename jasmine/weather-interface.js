var apiKey = "939f81b044fa09b62a54d747649fdcd8"


$(document).ready(function() {

  $('#select-city').submit(function(event){
    event.preventDefault();
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey + '&units=metric', function(response) {
      $('#current-temperature').text(response.main.temp);
      });
  });
});
