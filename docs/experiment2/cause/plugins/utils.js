function set_slider() {
    $('#jspsych-html-slider-response-response').slider({value: 50});
    
    // hide all slider handles
    // $('.ui-slider-handle').hide();
    
    $('#jspsych-html-slider-response-response').slider().on('slidestart', function( event, ui ) {
       // show the handle
       $(this).find('.ui-slider-handle').show();
       $('#jspsych-html-slider-response-next').prop('disabled', false);
       $('#jspsych-instructions-next').prop('disabled', false);
    });
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function order_condensed(t) {
    //var order = [...Array(28).keys()].map(i => i + 2);
    var order = [...Array(28).keys()];
    order = shuffle(order);
    order.splice(18, 0, 29);    // X2
    order.splice(9, 0, 28);    // X1
    //console.log(order);
    return order;
}
