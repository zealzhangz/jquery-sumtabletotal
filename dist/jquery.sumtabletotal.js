/*
 *  jQuery sumtabletotal - v0.0.1
 *  jQuery plugin to sum total and append total row for an HTML table
 *  https://github.com/zealzhangz/jquery-sumtabletotal
 *
 *  Made by zealzhangz
 *  Under MIT License
 */
//sumtabletotal.js

if (typeof jQuery === "undefined") {
    throw new Error("jquery-confirm requires jQuery");
}
// numerator and denominator
;(function ($) {
    var pluginName = "sumtabletotal",

        defaults = {
            "colspan": 1,
            "totalText": "Total",
            "color": "#000000",
            "placeholder": "-",
            "significant": 2
        };

    // The  plugin constructor
    function Plugin(element, options) {
        this.element = element;

        this.settings = $.extend({}, defaults, options);
        this.total = [];
        this.calcTotal();
    }

    Plugin.prototype = {
        calcTotal: function () {
            var e = this;
            var t = $(e.element);
            //calculate count of rows and columns
            var tdCount = t.find("tr:last td").length;

            //new Total result object
            e.total = new Array(tdCount);

            if (e.settings.totalIndexArry) {
                for (var i = 0; i < e.settings.totalIndexArry.length; i++) {
                    e.total[e.settings.totalIndexArry[i]] = 0.0;
                }
                t.find("tr:not(:first)").each(function (i, item) {
                    //每一行的所有td
                    var tds = $(item).find("td");
                    for (var j = 0; j < e.settings.totalIndexArry.length; j++) {
                        e.total[e.settings.totalIndexArry[j]] += !isNaN(parseFloat($(tds[e.settings.totalIndexArry[j]]).text())) ? parseFloat($(tds[e.settings.totalIndexArry[j]]).text()) : 0.00;
                    }
                });
            }
            //Calculating percentage according e.total
            if (e.settings.rateObjectArry) {
                for (var obj in e.settings.rateObjectArry) {
                    if (!isNaN(e.settings.rateObjectArry[obj].index)) {
                        e.total[e.settings.rateObjectArry[obj].index] = 0.0;
                    } else {
                        console.error("Rate Object error!");
                    }
                }
                for (var o in e.settings.rateObjectArry) {
                    if (!isNaN(e.total[e.settings.rateObjectArry[o].denominator]) && !isNaN(e.total[e.settings.rateObjectArry[o].numerator]) && e.total[e.settings.rateObjectArry[o].denominator] !== 0) {
                        e.total[e.settings.rateObjectArry[o].index] = e.total[e.settings.rateObjectArry[o].numerator] / e.total[e.settings.rateObjectArry[o].denominator];
                    } else {
                        e.total[e.settings.rateObjectArry[o].index] = 0;
                    }
                }
            }
            e.appendTotalRow();
        },
        appendTotalRow: function () {
            var e = this;
            var t = $(e.element);
            if (e.settings.colspan === undefined) {
                e.settings.colspan = 1;
            }
            if (e.settings.significant === undefined) {
                e.settings.significant = 2;
            }
            //append total row
            var totalRow = "<tr style='color: " + e.settings.color + ";'><th class='row' colspan='" + e.settings.colspan + "'>" + e.settings.totalText + "</th>";
            for (var i = 1; i < e.total.length; i++) {
                if (!isNaN(e.total[i])) {
                    var isRate = false;
                    for (var k in e.settings.rateObjectArry) {
                        if (i === e.settings.rateObjectArry[k].index) {
                            totalRow += "<td>" + parseFloat(e.total[i] * 1000 / 10).toFixed(e.settings.significant) + "%</td>";
                            isRate = true;
                        }
                    }
                    if (!isRate) {
                        totalRow += "<td>" + parseFloat(e.total[i]).toFixed(e.settings.significant) + "</td>";
                    }
                } else {
                    if (i < e.settings.colspan) {
                        continue;
                    }
                    totalRow += "<td>" + e.settings.placeholder + "</td>";
                }
            }
            totalRow += "</tr>";
            t.find("tr:last").after(totalRow);
        }
    };


    $.fn[pluginName] = function (options) {
        var e = this;
        e.each(function () {
            if (!$.data(e, "plugin_" + pluginName)) {
                $.data(e, "plugin_" + pluginName, new Plugin(this, options));
            }
        });

        // chain jQuery functions
        return e;
    };

})(jQuery);
