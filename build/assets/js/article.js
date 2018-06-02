var articleMoreWrap = $("[data-it-article-more-wrap]"),
articleMoreWrapPadTop = articleMoreWrap.css("paddingTop").substring(0,2);
console.log(articleMoreWrapPadTop);


$("[data-it-article-more-nav]", "[data-it-article-more-wrap]").stick_in_parent({
   offset_top: 62
});
