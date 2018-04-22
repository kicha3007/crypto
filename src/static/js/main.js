$(function () {

    /* ------------------- show-more ------------------- */

    var showMoreButtonText;

    $("[data-show-more-button]").on("click", function (e) {
        e.preventDefault();
        var $this = $(this);
        var showMoreButtonCloseText = $this.data("showMoreButton");
        var showMoreButtonValue = $this.attr("href");
        var showMoreText = $(showMoreButtonValue);
        showMoreText.toggleClass("it-hidden");
        if (showMoreButtonText !== showMoreButtonCloseText) {
            showMoreButtonText = $this.text();
        }
       if (showMoreButtonText !== showMoreButtonCloseText) {

           $this.text(showMoreButtonCloseText);
       } else {
            $this.text(showMoreButtonText)
       }

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

    var window_size = window.matchMedia('(max-width: 576px)');

    if (window.matchMedia('(max-width: 576px)').matches) {


        /* ------------------- Fixed nav ------------------- */

        var mainHeader = $("[data-main-header]"),
            navOther = $("[data-nav-other]"),
            navOtherH = navOther.outerHeight(),
            mainHeaderH = mainHeader.outerHeight();
        console.log(navOtherH);

        $(document).on("scroll", function () {

            var documentScroll = $(this).scrollTop();

            if (documentScroll > mainHeaderH - 32) {
                navOther.addClass("it--fixed");
                mainHeader.css("paddingTop", navOtherH);
            } else {
                navOther.removeClass("it--fixed");
                mainHeader.css("paddingTop", 0);
            }

        });

    }

    /* ------------------- hide-scroll ------------------- */

    var parent = document.querySelector('.it-main-nav-2__wrap');
    var child = document.querySelector('.it-main-nav-2__list');

    child.style.paddingBottom = child.offsetHeight - child.clientHeight + "px";

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