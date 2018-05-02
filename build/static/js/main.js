$(function () {

    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

        var jsonData = $.ajax({
            url: "data.php",
            dataType: "json",
            async: false
        }).responseText;

        var data = google.visualization.arrayToDataTable(jsonData);

        var options = {
            height: 138,
            chartArea: {left: 1, top: 0, width: '420', height: '100%'},
            pieHole: 0.7,
            legend: {position: 'right', textStyle: {color: '#4F4F4F', fontSize: 16}, alignment: "center", maxLines: 2},
            colors: ["#4F4F4F", "#5C61DB", "#3EC7C6", "#EB5757", "#F2C94C", "#F2994A"]
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

            } else {
                navOther.removeClass("it--fixed");
            }

        }

        if (windowSizeMaxAll.matches) {

            var bottomOffser = $("[data-main-footer]").outerHeight();

            $("[data-main-sidebar]").sticky({
                    topSpacing: 35,
                    bottomSpacing: bottomOffser + 5
                }
            );

            //
            //     if (documentScroll > mainHeaderH - 32) {
            //         mainSidebar.addClass("it--fixed");
            //         fixSidebar();
            //         // mainHeader.css("paddingTop", navOtherH);
            //     } else {
            //         mainSidebar.removeClass("it--fixed");
            //         // mainHeader.css("paddingTop", 0);
            //     }
            //
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
    var $this = $(this);

    $trigger.on("click", function () {
        $trigger.toggleClass('active');
        mainHeader.toggleClass("it-header--bg");

        $nav.slideToggle(600, function () {
            if ($(this).css("display") === "none") {
                $(this).removeAttr("style");
            }
        });

    });

});