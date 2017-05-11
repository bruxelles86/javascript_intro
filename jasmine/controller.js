$(document).ready(function(){

var thermostat = new Thermostat();

$('#temperature').text(thermostat.temperature);
$('#power_saving').text(thermostat.powerSaving);
$('#power_usage').text(thermostat.currentUsage());

$('#increase_temp').on('click', function() {
  thermostat.up();
  $('#temperature').text(thermostat.temperature);
})

});
