var countUp = function(upTo, multiple) {

    var counter = 0;
    var numbers = [];

    while (counter < upTo) {
        counter += multiple;
        numbers.push(counter);
    }
    return numbers;
};

$(document).ready(function() {
    $("form#count_up").submit(function(event) {
        var upTo = parseInt($("input#up_to").val());
        var multiple = parseInt($("input#multiple").val());

        var result = countUp(upTo, multiple);
        $(".result-numbers").text(result.join(", "));

        $("#result").show();
        event.preventDefault();
    });
});
