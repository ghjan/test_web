/*
 * metismenu - v1.1.3
 * Easy menu jQuery plugin for Twitter Bootstrap 3
 * https://github.com/onokumus/metisMenu
 *
 * Made by Osman Nuri Okumus
 * Under MIT License
 */
!
function(e, t, n) {
    function r(t, n) {
        this.element = e(t),
        this.settings = e.extend({},
        s, n),
        this._defaults = s,
        this._name = i,
        this.init()
    }
    var i = "metisMenu",
    s = {
        toggle: !0,
        doubleTapToGo: !1
    };
    r.prototype = {
        init: function() {
            var t = this.element,
            r = this.settings.toggle,
            s = this;
            this.isIE() <= 9 ? (t.find("li.active").has("ul").children("ul").collapse("show"), t.find("li").not(".active").has("ul").children("ul").collapse("hide")) : (t.find("li.active").has("ul").children("ul").addClass("collapse in"), t.find("li").not(".active").has("ul").children("ul").addClass("collapse")),
            s.settings.doubleTapToGo && t.find("li.active").has("ul").children("a").addClass("doubleTapToGo"),
            t.find("li").has("ul").children("a").on("click." + i,
            function(t) {
                return t.preventDefault(),
                s.settings.doubleTapToGo && s.doubleTapToGo(e(this)) && "#" !== e(this).attr("href") && "" !== e(this).attr("href") ? (t.stopPropagation(), void(n.location = e(this).attr("href"))) : (e(this).parent("li").toggleClass("active").children("ul").collapse("toggle"), void(r && e(this).parent("li").siblings().removeClass("active").children("ul.in").collapse("hide")))
            })
        },
        isIE: function() {
            for (var e, t = 3,
            r = n.createElement("div"), i = r.getElementsByTagName("i"); r.innerHTML = "<!--[if gt IE " + ++t + "]><i></i><![endif]-->", i[0];) return t > 4 ? t: e
        },
        doubleTapToGo: function(e) {
            var t = this.element;
            return e.hasClass("doubleTapToGo") ? (e.removeClass("doubleTapToGo"), !0) : e.parent().children("ul").length ? (t.find(".doubleTapToGo").removeClass("doubleTapToGo"), e.addClass("doubleTapToGo"), !1) : void 0
        },
        remove: function() {
            this.element.off("." + i),
            this.element.removeData(i)
        }
    },
    e.fn[i] = function(t) {
        return this.each(function() {
            var n = e(this);
            n.data(i) && n.data(i).remove(),
            n.data(i, new r(this, t))
        }),
        this
    }
} (jQuery, window, document);