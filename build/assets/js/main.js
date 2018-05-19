$(function () {


    /* ------------------- filter-options ------------------- */

    var filterWrap = $("[data-filter-wrap]");
    var filterItem = $("[data-filter-item]");

    filterItem.on("click", function () {
        var $this = $(this);

        filterWrap.toggleClass("active");

        if ($("[data-filter-item].active").length > 1 ) {
            $this.closest(filterWrap).find("[data-filter-item]").removeClass("active");
            $this.addClass("active");
        } else {
            $this.closest("[data-filter-wrap]").find("[data-filter-item]").addClass("active");
        }

    });



    /* ------------------- show-more ------------------- */

    var hideBtn = $("[data-hide-btn]");

    hideBtn.on("click", function (e) {

        var $this = $(this);

        $this.toggleClass("active");

        var hideBtnCloseText = $this.data("hideBtn");
        var hideBtnCloseTextToButton = $this.children("[data-hide-btn-text]").text();

        $this.children("[data-hide-btn-text]").text(hideBtnCloseText);
        $this.data("hideBtn", hideBtnCloseTextToButton);

        $this.closest("[data-hide-wrap]").find("[data-hide-half]").toggleClass("it-hide");

    });


    /* ------------------- google-charts ------------------- */


    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

        // var jsonData = $.ajax({
        //     url: "data.php",
        //     // dataType: "json",
        //     async: false
        // }).responseText;
        //

        /* ------------------- Тестовый кусок, потом выпилить ------------------- */

        var jsonData = '[{"cols": [{"id":"","label":"Token", "type":"string"},{"id":"","label":"Value", "type":"number"}],"rows": [{"c":[{"v":"Miners"},{"v":3}]},{"c":[{"v":"Presale"},{"v":1}]},{"c":[{"v":"Crowdsale"},{"v":1}]},{"c":[{"v":"Developers"},{"v":1}]},{"c":[{"v":"Bounty campaign"},{"v":2}]},{"c":[{"v":"Partnership"},{"v":2}]}]},{"cols": [{"id":"","label":"Token", "type":"string"},{"id":"","label":"Value", "type":"number"}],"rows": [{"c":[{"v":"Miners2"},{"v":3}]},{"c":[{"v":"Presale2"},{"v":1}]},{"c":[{"v":"Crowdsale2"},{"v":1}]},{"c":[{"v":"Developers2"},{"v":1}]},{"c":[{"v":"Bounty campaign2"},{"v":2}]},{"c":[{"v":"Partnership2"},{"v":2}]}]}]';

        var jsonData2 = '[{"cols": [{"id":"","label":"Token", "type":"string"},{"id":"","label":"Value", "type":"number"}],"rows": [{"c":[{"v":"Miners"},{"v":3}]},{"c":[{"v":"Presale"},{"v":1}]},{"c":[{"v":"Crowdsale"},{"v":1}]},{"c":[{"v":"Developers"},{"v":1}]},{"c":[{"v":"Bounty campaign"},{"v":2}]},{"c":[{"v":"Partnership"},{"v":2}]}]},{"cols": [{"id":"","label":"Token", "type":"string"},{"id":"","label":"Value", "type":"number"}],"rows": [{"c":[{"v":"Miners2"},{"v":3}]},{"c":[{"v":"Presale2"},{"v":1}]},{"c":[{"v":"Crowdsale2"},{"v":1}]},{"c":[{"v":"Developers2"},{"v":1}]},{"c":[{"v":"Bounty campaign2"},{"v":2}]},{"c":[{"v":"Partnership2"},{"v":2}]}]}]';
        var jsonDataParse = JSON.parse(jsonData);
        var jsonDataParse2 = JSON.parse(jsonData2);

        var chartList = document.querySelectorAll('[data-it-donutchart]');
        var chartCardList = document.querySelectorAll('[data-it-cardchart]');

        // var options = {
        //     height: 160,
        //     chartArea: {left: 0, top: 10, width: '350', height: '140', fontSize: 0},
        //     pieHole: 0.7,
        //     legend: {position: 'right', textStyle: {color: '#4F4F4F', fontSize: 16}, alignment: "center"},
        //     colors: ["#4F4F4F", "#5C61DB", "#3EC7C6", "#EB5757", "#F2C94C", "#F2994A"],
        //     pieSliceText: "none"
        //
        // };

        var options = {
            height: 160,
            chartArea: {left: 0, top: 10, width: '380', height: '140', fontSize: 0},
            pieHole: 0.7,
            legend: {position: 'right', textStyle: {color: '#4F4F4F', fontSize: 16}, alignment: "center",  maxLines: 3},
            colors: ["#4F4F4F", "#5C61DB", "#3EC7C6", "#EB5757", "#F2C94C", "#F2994A"],
            pieSliceText: "none"

        };

        var optionsCard = {
            height: 78,
            chartArea: {left: 0, top: 10, width: '58', height: '58'},
            pieHole: 0.7,
            legend: "none",
            colors: ["#3EC7C6"]
        };


        for(var i=0; i<jsonDataParse.length; i++ ) {

            var data = new google.visualization.DataTable(jsonDataParse[i]);
            var chartItem = chartList[i];
            var chart = new google.visualization.PieChart(chartItem);
            chart.draw(data, options);

            var dataCard = new google.visualization.DataTable(jsonDataParse2[i]);
            var chartCardItem = chartCardList[i];
            var chartCard = new google.visualization.PieChart(chartCardItem);
            chartCard.draw(dataCard, optionsCard);

        }

    }


    /* ------------------- show-more ------------------- */

    var showMoreButtonText = $("[data-show-more-button]");

    showMoreButtonText.on("click", function (e) {
        e.preventDefault();

        var $this = $(this);

        var showMoreButtonCloseText = $this.data("showMoreButton");
        var showMoreButtonCloseTextToButton = $this.children("[data-show-more-text]").text();

        $this.children("[data-show-more-text]").text(showMoreButtonCloseText);
        $this.data("showMoreButton", showMoreButtonCloseTextToButton);

        var showMoreButtonValue = $this.attr("href");
        var showMoreText = $(showMoreButtonValue);
        showMoreText.toggleClass("it-hidden");
        $this.toggleClass("active");

    });

    /* ------------------- steps ------------------- */

    $(document).on("scroll", function () {

        $("[data-step-item]").each(function () {
            if (window.scrollY > this.offsetTop - 700) {

                $(this).addClass("active");
            }

        })
    });

    /* ------------------- show-prompt ------------------- */

    var promtButton = $("[data-token-list]").find("[data-prompt-button]");
    var tokenPromt = $("[data-token-promt]");

    function promtShow() {
        var $this = $(this);
        var tokenList = $this.closest("[data-token-list]");
        tokenList.find("[data-token-promt]").css("display", "none");
        tokenList.find(promtButton).removeClass("active");

        var tokenItem = $this.closest("[data-token-item]");
        tokenItem.find("[data-token-promt]").toggle();
        $this.toggleClass("active");

    }

    promtButton.on("click", promtShow);

    $(document).mouseup(function (e) {// обрабатываем клик в любой точке
        if (jQuery(e.target).closest(tokenPromt).length > 0 || jQuery(e.target).closest(promtButton).length) { // проверка , произошел ли клик вне элемента, который надо по этому клику скрыть
            return false; // клик по элементу игнорируем
        }

        else { // клик вне элемента
            tokenPromt.hide();
            promtButton.removeClass("active");
        }

    });

    /* ------------------- scroll to nav item ------------------- */

    var $scrollNav = $("[data-scroll-nav]");

    $scrollNav.on("click", function (e) {
        e.preventDefault();
        var $scrollNavLinkValue = $(this).attr("href");
        var $scrollNavItem = $($scrollNavLinkValue);
        var $scrollNavItemPosition = $scrollNavItem.offset().top;
        $("html, body").animate({
            scrollTop: $scrollNavItemPosition
        }, 500)

    });

    /* ------------------- Fixed all var ------------------- */

    var mainHeader = $("[data-main-header]"),
        topHeader = $("[data-top-header]"),
        topHeaderH = topHeader.outerHeight(),
        navOther = $("[data-nav-other]"),
        navOtherH = navOther.outerHeight(),
        mainHeaderH = mainHeader.outerHeight(),
        mainSidebar = $("[data-main-sidebar]");

//    var windowSizeMax = window.matchMedia('all and (max-width: 576px)');
    var windowSizeMaxAll = window.matchMedia('(min-width: 1200px)');

    $(document).on("scroll", function () {
        var documentScroll = $(this).scrollTop();



            /* ------------------- Fixed nav and sidebar ------------------- */

            if (documentScroll > topHeaderH - 10) {
                navOther.addClass("it--fixed");
                topHeader.css("marginBottom", navOtherH  + "px");
                mainSidebar.addClass("it--fixed");
                mainSidebar.css("top", navOtherH  + 40 + "px")


            } else {
                navOther.removeClass("it--fixed");
                topHeader.css("marginBottom", "0");
                mainSidebar.removeClass("it--fixed");

            }


        if (windowSizeMaxAll.matches) {

            var bottomOffser = $("[data-main-footer]").outerHeight();

        }

    });

    /* ------------------- hide-scroll ------------------- */

    var parent = document.querySelector('[data-scroll-hide-wrap]');
    var child = document.querySelector('[data-scroll-hide]');
    var childP = +child.offsetHeight - child.clientHeight;

    if (childP) {
        parent.style.height = parent.clientHeight - childP + "px";
    }



    /* ****************************** dropdown-menu ****************************** */

    var $trigger = $('[data-trigger="1"]');
    var $nav = $('[data-it-nav]');



    function showMobileMenu () {
        $trigger.toggleClass('active');
        mainHeader.toggleClass("it-header--bg");

        if ($("div").is("#it-body--bg-shadow")) {
            $("#it-body--bg-shadow").remove();

        } else {
            $("body").prepend("<div id='it-body--bg-shadow'></div>");

        }

        $nav.slideToggle(600, function () {
            if ($(this).css("display") === "none") {
                $(this).removeAttr("style");
            }
        });

        $("#it-body--bg-shadow").on("click", showMobileMenu);

    }


    $trigger.on("click", showMobileMenu);


    /* ****************************** ct-scrollbar****************************** */




});



var container = document.querySelector('[data-scroll-hide-wrap]');


new PerfectScrollbar(container, {
    minScrollbarLength: 20
});
