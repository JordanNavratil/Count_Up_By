var countUp = function(upTo, multiple) {

    var counter = 0;
    var numbers = [];
    while (counter < upTo) {
        counter += multiple;
        numbers.push(counter);
    }
    return numbers;
}

$(document).ready(function() {
    $("form#count_up").submit(function(event) {
        var upTo = $("input#up_to").val();
        var multiple = $("input#multiple").val();

        var result = countUp(upTo, multiple);
        $(".result-numbers").text(result);

        $("#result").show();
        event.preventDefault();
    });
});
