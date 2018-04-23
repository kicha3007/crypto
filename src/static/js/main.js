$(function () {

    /* ------------------- google charts ------------------- */

    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Task', 'Hours per Day'],
            ['Miners', ""     ],
            ['Developers',      2],
            ['Presale',  2],
            ['Bounty campaign', 2],
            ['Crowdsale',    7],
            ['Partnership',    7]
        ]);

        var options = {
            title: '',
            pieHole: 0.6,
            width: 570,
            height: 200,
            pieSliceText: 'none'
        };

        var chart = new google.visualization.PieChart(document.querySelector('[data-it-donutchart]'));
        chart.draw(data, options);
    }

    /* ------------------- show-more ------------------- */

    var showMoreButtonText = $("[data-show-more-button]");

    showMoreButtonText.on("click", function (e) {
        e.preventDefault();

        var $this = $(this);

        var showMoreButtonCloseText = $this.data("showMoreButton");
        var showMoreButtonCloseTextToButton = $this.text();

        $this.text(showMoreButtonCloseText);
        $this.data("showMoreButton", showMoreButtonCloseTextToButton );

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
        var tokenItem = $this.closest("[data-token-item]");
        tokenItem.find("[data-token-promt]").toggle();
        $this.toggleClass("active");

    }

    promtButton.on("click", promtShow);

    $(document).mouseup(function (e) {// обрабатываем клик в любой точке
        if (jQuery(e.target).closest(tokenPromt).length > 0) { // проверка , произошел ли клик вне элемента, который надо по этому клику скрыть
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
        navOther = $("[data-nav-other]"),
        navOtherH = navOther.outerHeight(),
        mainHeaderH = mainHeader.outerHeight(),
        mainSidebar = $("[data-main-sidebar]");

    var windowSizeMax = window.matchMedia('all and (max-width: 576px)');
   var windowSizeMaxAll = window.matchMedia('(min-width: 1200px)');

    $(document).on("scroll", function () {
        var documentScroll = $(this).scrollTop();

        if (windowSizeMax.matches) {

            /* ------------------- Fixed nav and sidebar ------------------- */

            if (documentScroll > mainHeaderH - 32) {
                navOther.addClass("it--fixed");
                mainHeader.css("paddingTop", navOtherH);
            } else {
                navOther.removeClass("it--fixed");
                mainHeader.css("paddingTop", 0);
            }

        }

        if (windowSizeMaxAll.matches) {

            if (documentScroll > mainHeaderH - 32) {
                mainSidebar.addClass("it--fixed");
                // mainHeader.css("paddingTop", navOtherH);
            } else {
                mainSidebar.removeClass("it--fixed");
                // mainHeader.css("paddingTop", 0);
            }

        }

    });

    /* ------------------- hide-scroll ------------------- */

    var parentScrollHide = document.querySelector('[data-scroll-hide]');
    var childScrollHide = document.querySelector('.it-main-nav-2__list');
    childP = child.offsetHeight - child.clientHeight;
    parent.style.height = parent.clientHeight - childP + "px";



    /* ****************************** dropdown-menu ****************************** */

    var $trigger = $('[data-trigger="1"]');
    var $nav = $('[data-it-nav]');
    var $this = $(this);

    $trigger.on("click", function () {
        $trigger.toggleClass('active');
        $nav.slideToggle(600, function () {
            if ($(this).css("display") === "none") {
                $(this).removeAttr("style");
            }
        });

    });

});