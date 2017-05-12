$(document).ready(function(){

  var thermostat = new Thermostat();

  $('#temperature').text(thermostat.temperature);
  $('#power_saving').text(thermostat.powerSaving);
  $('#power_usage').text(thermostat.currentUsage());

  $('#increase_temp').on('click', function() {
    thermostat.up();
    $('#temperature').text(thermostat.temperature);
  })

  $('#reduce_temp').on('click', function() {
    thermostat.down();
    $('#temperature').text(thermostat.temperature);
  });


  $('#reset_temp').on('click', function() {
    thermostat.reset();
    $('#temperature').text(thermostat.temperature);
  });

  $('#toggle_saving').on('click', function() {
    if(thermostat.powerSaving == true) {
      thermostat.powerSaving = false
    } else if(thermostat.powerSaving == false) {
      thermostat.powerSaving = true
    };
  });
});
