$(function () {

// Калькулятор

var in1 = document.getElementById('in1');
var in2 = document.getElementById('in2');
var in3 = document.getElementById('in3');
var in4 = document.getElementById('in4');
var in5 = document.getElementById('in5');

in1.oninput = function() {

    $(this).val($(this).val().replace(/[^\d].+/, ""));
        if ((event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }

    if ($(in1).val()) {
        $(in2).val(Math.ceil(in1.value * 3.5 ));
        $(in3).val(in1.value * 1296 );
        $(in4).val(in1.value * 5.8 );
        $(in5).val(in1.value * 233 );
    } else {
        $(in2).val('');
        $(in3).val('');
        $(in4).val('');
        $(in5).val('');
    }
  };
    
});