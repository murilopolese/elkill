var initialized = false;
function init() {
    initialized = !initialized;
    if (initialized) {
        $("body").on("mouseover", mouseOver);
        $("body").on("mouseout", mouseOut);
        $("body").on("click", function(e) {
            $(e.target).remove();
            return false;
        });
    } else {
        $(".elkillhover").toggleClass("elkillhover");
        $("body").off("click mouseover mouseout");
    }
}

function mouseOver(e) {
    $(e.target).addClass("elkillhover");
    e.stopPropagation();
}
function mouseOut(e) {
    $(e.target).removeClass("elkillhover");
    e.stopPropagation();
}