$(function () {
    $('#button1').click(function () {
        $("#table1").sumtabletotal({
            totalIndexArry: [3, 4, 5],
            rateObjectArry: [{numerator: 5, denominator: 4, index: 6}]
        });
    });

    $('#button2').click(function () {
        $("#table2").sumtabletotal({
            colspan: 2,
            placeholder: '#',
            totalText: 'Subtotal',
            totalIndexArry: [3, 4, 5],
            rateObjectArry: [{numerator: 5, denominator: 4, index: 6}]
        });
    });
});