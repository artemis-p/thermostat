$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temperature-up').on('click',function() {
    thermostat.up();
    updateTemperature();
  });
  $('#temperature-down').on('click',function() {
    thermostat.down();
    updateTemperature();
  });
  $('#temperature-reset').on('click',function() {
    thermostat.reset();
    updateTemperature();
  });
  $('#powersaving-on').on('click',function() {
    thermostat.switchOnPowerSaving();
    $('#power-saving-status').text("on")
    updateTemperature();
  });
  $('#powersaving-off').on('click',function() {
    thermostat.switchOffPowerSaving();
    $('#power-saving-status').text("off")
    updateTemperature();
  });


  function updateTemperature() {
    $('#thermostat').text(thermostat.temperature);
    $('#thermostat').attr('class', thermostat.getCurrentUsage());
  }
});
