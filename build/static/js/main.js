$(document).ready(function () {
    svg4everybody({});
});


$(function () {


    /* ------------------- google charts ------------------- */

    // Load the Visualization API and the piechart package.
    /*    google.load('visualization', '1.0', {'packages':['corechart']});

 // Set a callback to run when the Google Visualization API is loaded.
     google.setOnLoadCallback(drawChart);

 // Callback that creates and populates a data table,
 // instantiates the pie chart, passes in the data and
 // draws it.
     function drawChart() {
         var res;
         var jsonData = $.ajax({
             url: "data.php",
             // dataType:"json",
             async: false,
             success: function(response){
                 res = response;
             }
         }).responseText;

         // Create the data table.
         var data = new google.visualization.DataTable(jsonData);

         // Set chart options
         var options = {
             'title':'Кол-во населения',
             'width':650,
             'height':350,
             'backgroundColor': {
                 'strokeWidth': 2
             },
             'animation': {
                 'duration': 1000,
                 'easing': 'out'
             },
             'vAxis': {
                 'minValue': 0,
                 'maxValue': 130000000
             }
         };

         // Instantiate and draw our chart, passing in some options.
         var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
         chart.draw(data, options);

         setTimeout(function(){
             res = JSON.parse(res);
             var length = res['rows'].length;
             for(var i = 0; i < length; i++){
                 data.setValue( i, 1, res['rows'][i]['c'][1]['res'] );
             }
             chart.draw(data, options);
         }, 500);
     }

 */





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
                mainHeader.css("paddingTop", navOtherH);
            } else {
                navOther.removeClass("it--fixed");
                mainHeader.css("paddingTop", 0);
            }

        }

       if (windowSizeMaxAll.matches) {


            var bottomOffser = $("[data-main-footer]").outerHeight();

           $("[data-main-sidebar]").sticky({
                   topSpacing: 40,
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
        $nav.slideToggle(600, function () {
            if ($(this).css("display") === "none") {
                $(this).removeAttr("style");
            }
        });

    });

});