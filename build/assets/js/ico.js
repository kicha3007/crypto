/* ------------------- google-charts ------------------- */

/*

google.charts.load('current', {'packages': ['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {



    /!* ------------------- Charts------------------- *!/

    var jsonData = '{"cols": [{"id":"","label":"Token", "type":"string"},{"id":"","label":"Value", "type":"number"}],"rows": [{"c":[{"v":"Miners2"},{"v":3}]},{"c":[{"v":"Presale2"},{"v":1}]},{"c":[{"v":"Crowdsale2"},{"v":1}]},{"c":[{"v":"Developers2"},{"v":1}]},{"c":[{"v":"Bounty campaign2"},{"v":2}]},{"c":[{"v":"Partnership2"},{"v":2}]}]}]';

    var jsonData2 = '[{"cols": [{"id":"","label":"Token", "type":"string"},{"id":"","label":"Value", "type":"number"}],"rows": [{"c":[{"v":"Miners"},{"v":3}]},{"c":[{"v":"Presale"},{"v":1}]},{"c":[{"v":"Crowdsale"},{"v":1}]},{"c":[{"v":"Developers"},{"v":1}]},{"c":[{"v":"Bounty campaign"},{"v":2}]},{"c":[{"v":"Partnership"},{"v":2}]}]},{"cols": [{"id":"","label":"Token", "type":"string"},{"id":"","label":"Value", "type":"number"}],"rows": [{"c":[{"v":"Miners2"},{"v":3}]},{"c":[{"v":"Presale2"},{"v":1}]},{"c":[{"v":"Crowdsale2"},{"v":1}]},{"c":[{"v":"Developers2"},{"v":1}]},{"c":[{"v":"Bounty campaign2"},{"v":2}]},{"c":[{"v":"Partnership2"},{"v":2}]}]}]';
    var jsonDataParse = JSON.parse(jsonData);
    var jsonDataParse2 = JSON.parse(jsonData2);

    var chartList = document.querySelectorAll('[data-it-donutchart]');
    var chartCardList = document.querySelectorAll('[data-it-cardchart]');



    var options = {
        height: 160,
        chartArea: {left: 0, top: 10, width: '160', height: '140', fontSize: 0},
        pieHole: 0.7,
       // legend: {position: 'right', textStyle: {color: '#4F4F4F', fontSize: 16}, alignment: "center", maxLines: 3},
        legend: 'none',
        // colors: ["#4F4F4F", "#5C61DB", "#3EC7C6", "#EB5757", "#F2C94C", "#F2994A"],
        pieSliceText: "none"

    };

    var optionsCard = {
        height: 78,
        chartArea: {left: 0, top: 10, width: '58', height: '58'},
        pieHole: 0.7,
        legend: "none",
        colors: ["#3EC7C6"]
    };

    for (var i = 0; i < jsonDataParse.length; i++) {

        var data = new google.visualization.DataTable(jsonDataParse[i]);
        var chartItem = chartList[i];
        var chart = new google.visualization.PieChart(chartItem);
        chart.draw(data, options);

        var dataCard = new google.visualization.DataTable(jsonDataParse2[i]);
        var chartCardItem = chartCardList[i];
        var chartCard = new google.visualization.PieChart(chartCardItem);
        chartCard.draw(dataCard, optionsCard);

    }

}*/

google.charts.load('current', {'packages': ['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

/*
    [{
        "cols": [{"id": "", "label": "Token", "type": "string"}, {"id": "", "label": "Value", "type": "number"}],
        "rows": [{"c": [{"v": "Miners"}, {"v": 3}]}, {"c": [{"v": "Presale"}, {"v": 1}]}, {"c": [{"v": "Crowdsale"}, {"v": 1}]}, {"c": [{"v": "Developers"}, {"v": 1}]}, {"c": [{"v": "Bounty campaign"}, {"v": 2}]}, {"c": [{"v": "Partnership"}, {"v": 2}]}]
    }, {
        "cols": [{"id": "", "label": "Token", "type": "string"}, {"id": "", "label": "Value", "type": "number"}],
        "rows": [{"c": [{"v": "Miners2"}, {"v": 3}]}, {"c": [{"v": "Presale2"}, {"v": 1}]}, {"c": [{"v": "Crowdsale2"}, {"v": 1}]}, {"c": [{"v": "Developers2"}, {"v": 1}]}, {"c": [{"v": "Bounty campaign2"}, {"v": 2}]}, {"c": [{"v": "Partnership2"}, {"v": 2}]}]
    }]
*/

    /* ------------------- Charts------------------- */

    // var jsonData = '[{"cols": [{"id":"","label":"Token", "type":"string"},{"id":"","label":"Value", "type":"number"}],"rows": [{"c":[{"v":"Miners"},{"v":3}]},{"c":[{"v":"Presale"},{"v":1}]},{"c":[{"v":"Crowdsale"},{"v":1}]},{"c":[{"v":"Developers"},{"v":1}]},{"c":[{"v":"Bounty campaign"},{"v":2}]},{"c":[{"v":"Partnership"},{"v":2}]}]},{"cols": [{"id":"","label":"Token", "type":"string"},{"id":"","label":"Value", "type":"number"}],"rows": [{"c":[{"v":"Miners2"},{"v":3}]},{"c":[{"v":"Presale2"},{"v":1}]},{"c":[{"v":"Crowdsale2"},{"v":1}]},{"c":[{"v":"Developers2"},{"v":1}]},{"c":[{"v":"Bounty campaign2"},{"v":2}]},{"c":[{"v":"Partnership2"},{"v":2}]}]}]';

    var chartList = document.querySelectorAll('[data-it-chart]');

    var options = {
        'width':220,
        'height':220,
        chartArea: {left: 7, top: 5, width: '200', height: '200', fontSize: 0},
        pieHole: 0.4,
        legend: 'none',
        pieSliceText: {color: 'black',  fontSize: 20},
        tooltip: { trigger: 'selection', isHtml: true, text: 'percentage' },
        colors: ["#4F4F4F", "#5C61DB", "#3EC7C6", "#EB5757", "#F2C94C", "#F2994A"]


};

    for (var v = 0; v < chartList.length; v++) {

        var jsonData = chartList[v].getAttribute("data-it-chart");
        var jsonDataParse = JSON.parse(jsonData);


        var data = new google.visualization.DataTable(jsonDataParse[v]);
        console.log(data);
        var chartItem = chartList[v];

        var chart = new google.visualization.PieChart(chartItem);




        chart.draw(data, options);

    }

    // for (var i = 0; i < jsonDataParse.length; i++) {
    //
    //
    //
    //
    // }
}

/* ------------------- show-prompt  ------------------- */

var promtButton = $("[data-token-list]").find("[data-prompt-button]");

function promtShow() {
    var $this = $(this);
    var tokenPromt = $("[data-token-promt]");
    var tokenList = $this.closest("[data-token-list]");

    tokenList.find(tokenPromt).css("display", "none");
    tokenList.find(promtButton).removeClass("active");

    var tokenItem = $this.closest("[data-token-item]");
    tokenItem.find(tokenPromt).toggle();
    $this.toggleClass("active");

    if ($("#it-body--bg-transparant").length == 0) {

        $("body").prepend("<div id=\"it-body--bg-transparant\"></div>");
        $("#it-body--bg-transparant").css({
            "width": "100%",
            "height": "10000%",
            "background": "transparent",
            "position": "absolute",
            "top": "0",
            "left": "0",
            "z-index": 999
        })

    }

    $("#it-body--bg-transparant").on("click", function () {
        tokenList.find("[data-token-promt]").css("display", "none");
        tokenList.find(promtButton).removeClass("active");
        $("#it-body--bg-transparant").remove();
    });

}

promtButton.on("click", promtShow);
