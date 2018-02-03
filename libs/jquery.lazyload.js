/*!
 * Lazy Load - jQuery plugin for lazy loading images
 *
 * Copyright (c) 2007-2015 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.appelsiini.net/projects/lazyload
 *
 * Version:  1.9.5
 *
 */

define(["jquery"],
function(e) {
    e(function(e) { (function(e, t, n, r) {
            var i = e(t);
            e.fn.lazyload = function(s) {
                function f() {
                    var t = 0;
                    o.each(function() {
                        var n = e(this);
                        if (a.skip_invisible && !n.is(":visible")) return;
                        if (!e.abovethetop(this, a) && !e.leftofbegin(this, a)) if (!e.belowthefold(this, a) && !e.rightoffold(this, a)) n.trigger("appear"),
                        t = 0;
                        else if (++t > a.failure_limit) return ! 1
                    })
                }
                var o = this,
                u, a = {
                    threshold: 0,
                    failure_limit: 0,
                    event: "scroll",
                    effect: "show",
                    container: t,
                    data_attribute: "original",
                    skip_invisible: !1,
                    appear: null,
                    load: null,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                };
                return s && (r !== s.failurelimit && (s.failure_limit = s.failurelimit, delete s.failurelimit), r !== s.effectspeed && (s.effect_speed = s.effectspeed, delete s.effectspeed), e.extend(a, s)),
                u = a.container === r || a.container === t ? i: e(a.container),
                0 === a.event.indexOf("scroll") && u.bind(a.event,
                function() {
                    return f()
                }),
                this.each(function() {
                    var t = this,
                    n = e(t);
                    t.loaded = !1,
                    (n.attr("src") === r || n.attr("src") === !1) && n.is("img") && n.attr("src", a.placeholder),
                    n.one("appear",
                    function() {
                        if (!this.loaded) {
                            if (a.appear) {
                                var r = o.length;
                                a.appear.call(t, r, a)
                            }
                            e("<img />").bind("load",
                            function() {
                                var r = n.attr("data-" + a.data_attribute);
                                n.hide(),
                                n.is("img") ? n.attr("src", r) : n.css("background-image", "url('" + r + "')"),
                                n[a.effect](a.effect_speed),
                                t.loaded = !0;
                                var i = e.grep(o,
                                function(e) {
                                    return ! e.loaded
                                });
                                o = e(i);
                                if (a.load) {
                                    var s = o.length;
                                    a.load.call(t, s, a)
                                }
                            }).attr("src", n.attr("data-" + a.data_attribute))
                        }
                    }),
                    0 !== a.event.indexOf("scroll") && n.bind(a.event,
                    function() {
                        t.loaded || n.trigger("appear")
                    })
                }),
                i.bind("resize",
                function() {
                    f()
                }),
                /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && i.bind("pageshow",
                function(t) {
                    t.originalEvent && t.originalEvent.persisted && o.each(function() {
                        e(this).trigger("appear")
                    })
                }),
                e(n).ready(function() {
                    f()
                }),
                this
            },
            e.belowthefold = function(n, s) {
                var o;
                return s.container === r || s.container === t ? o = (t.innerHeight ? t.innerHeight: i.height()) + i.scrollTop() : o = e(s.container).offset().top + e(s.container).height(),
                o <= e(n).offset().top - s.threshold
            },
            e.rightoffold = function(n, s) {
                var o;
                return s.container === r || s.container === t ? o = i.width() + i.scrollLeft() : o = e(s.container).offset().left + e(s.container).width(),
                o <= e(n).offset().left - s.threshold
            },
            e.abovethetop = function(n, s) {
                var o;
                return s.container === r || s.container === t ? o = i.scrollTop() : o = e(s.container).offset().top,
                o >= e(n).offset().top + s.threshold + e(n).height()
            },
            e.leftofbegin = function(n, s) {
                var o;
                return s.container === r || s.container === t ? o = i.scrollLeft() : o = e(s.container).offset().left,
                o >= e(n).offset().left + s.threshold + e(n).width()
            },
            e.inviewport = function(t, n) {
                return ! e.rightoffold(t, n) && !e.leftofbegin(t, n) && !e.belowthefold(t, n) && !e.abovethetop(t, n)
            },
            e.extend(e.expr[":"], {
                "below-the-fold": function(t) {
                    return e.belowthefold(t, {
                        threshold: 0
                    })
                },
                "above-the-top": function(t) {
                    return ! e.belowthefold(t, {
                        threshold: 0
                    })
                },
                "right-of-screen": function(t) {
                    return e.rightoffold(t, {
                        threshold: 0
                    })
                },
                "left-of-screen": function(t) {
                    return ! e.rightoffold(t, {
                        threshold: 0
                    })
                },
                "in-viewport": function(t) {
                    return e.inviewport(t, {
                        threshold: 0
                    })
                },
                "above-the-fold": function(t) {
                    return ! e.belowthefold(t, {
                        threshold: 0
                    })
                },
                "right-of-fold": function(t) {
                    return e.rightoffold(t, {
                        threshold: 0
                    })
                },
                "left-of-fold": function(t) {
                    return ! e.rightoffold(t, {
                        threshold: 0
                    })
                }
            })
        })(jQuery, window, document)
    })
});