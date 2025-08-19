/*
 * Example plugin template
 */

jsPsych.plugins["PLUGIN-NAME"] = (function() {

  var plugin = {};

  plugin.info = {
    name: "PLUGIN-NAME",
    parameters: {
      parameter_name: {
        type: jsPsych.plugins.parameterType.INT, // BOOL, STRING, INT, FLOAT, FUNCTION, KEYCODE, SELECT, HTML_STRING, IMAGE, AUDIO, VIDEO, OBJECT, COMPLEX
        default: undefined
      },
      parameter_name: {
        type: jsPsych.plugins.parameterType.IMAGE,
        default: undefined
      }
    }
  }

  plugin.trial = function(display_element, trial) {
    plugin.trial = function (display_element, trial) {
      display_element.innerHTML =
        '<div id="image_container"></div><br></br><br></br><div id="radio-container"></div><div id="slider_container"></div>
        ';
      display_image = document.querySelector("#image_container");
      display_radio = document.querySelector("#radio-container");
        display_slider = document.querySelector("#slider-container");

    // data saving
    var trial_data = {
      parameter_name: 'parameter value'
    };

    // end trial
    jsPsych.finishTrial(trial_data);
  };

  return plugin;
})();
