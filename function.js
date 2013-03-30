var initialized = false;
function init() {
    initialized = !initialized;
    if (initialized) {
        $("body *").bind("click", function() {
            $(".elkillhover").toggleClass("elkillhover");
            $(this).toggleClass("elkillhover");
            return false;
        });
        $("body *").bind("dblclick", function() {
            $(this).remove();
            return false;
        });
    } else {
        $(".elkillhover").toggleClass("elkillhover");
        $("body *").unbind("click");
        $("body *").unbind("dblclick");
    }
}