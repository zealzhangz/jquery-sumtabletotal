$(function () {
    $('#button1').click(function () {
        $("#table1").sumtabletotal({
            totalIndexArry: [3, 4, 5],
            rateObjectArry: [{numerator: 5, denominator: 4, index: 6}]
        });
    });

    $('#button2').click(function () {
        $("#table2").sumtabletotal({
            placeholder: '#',
            totalText: 'Subtotal',
            significant: 4,
            totalIndexArry: [3, 4, 5],
            rateObjectArry: [{numerator: 5, denominator: 4, index: 6}]
        });
    });

    $('#button3').click(function () {
        $("#table3").sumtabletotal({
            colspan: 3,
            totalIndexArry: [3, 4, 5],
            rateObjectArry: [{numerator: 5, denominator: 4, index: 6}]
        });
    });
});