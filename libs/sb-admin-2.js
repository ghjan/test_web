$(function() {
    $("#side-menu").metisMenu()
}),
$(function() {
    $(window).bind("load resize",
    function() {
        topOffset = 50,
        width = this.window.innerWidth > 0 ? this.window.innerWidth: this.screen.width,
        width < 768 ? ($("div.navbar-collapse").addClass("collapse"), topOffset = 100) : $("div.navbar-collapse").removeClass("collapse"),
        height = (this.window.innerHeight > 0 ? this.window.innerHeight: this.screen.height) - 1,
        height -= topOffset,
        height < 1 && (height = 1),
        height > topOffset && $("#page-wrapper").css("min-height", height + "px")
    });
    var e = window.location,
    t = $("ul.nav a").filter(function() {
        return this.href == e || e.href.indexOf(this.href) == 0
    }).addClass("active").parent().parent().addClass("in").parent();
    t.is("li") && t.addClass("active")
});