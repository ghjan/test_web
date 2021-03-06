/*! iFwuo 2015-05-20 */

if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); +
function(e) {
    "use strict";
    var t = e.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
} (jQuery),
+
function(e) {
    "use strict";
    function t() {
        var e = document.createElement("bootstrap"),
        t = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var n in t) if (void 0 !== e.style[n]) return {
            end: t[n]
        };
        return ! 1
    }
    e.fn.emulateTransitionEnd = function(t) {
        var n = !1,
        r = this;
        e(this).one("bsTransitionEnd",
        function() {
            n = !0
        });
        var i = function() {
            n || e(r).trigger(e.support.transition.end)
        };
        return setTimeout(i, t),
        this
    },
    e(function() {
        e.support.transition = t(),
        e.support.transition && (e.event.special.bsTransitionEnd = {
            bindType: e.support.transition.end,
            delegateType: e.support.transition.end,
            handle: function(t) {
                return e(t.target).is(this) ? t.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
} (jQuery),
+
function(e) {
    "use strict";
    function t(t) {
        return this.each(function() {
            var n = e(this),
            i = n.data("bs.alert");
            i || n.data("bs.alert", i = new r(this)),
            "string" == typeof t && i[t].call(n)
        })
    }
    var n = '[data-dismiss="alert"]',
    r = function(t) {
        e(t).on("click", n, this.close)
    };
    r.VERSION = "3.3.4",
    r.TRANSITION_DURATION = 150,
    r.prototype.close = function(t) {
        function n() {
            o.detach().trigger("closed.bs.alert").remove()
        }
        var i = e(this),
        s = i.attr("data-target");
        s || (s = i.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, ""));
        var o = e(s);
        t && t.preventDefault(),
        o.length || (o = i.closest(".alert")),
        o.trigger(t = e.Event("close.bs.alert")),
        t.isDefaultPrevented() || (o.removeClass("in"), e.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", n).emulateTransitionEnd(r.TRANSITION_DURATION) : n())
    };
    var i = e.fn.alert;
    e.fn.alert = t,
    e.fn.alert.Constructor = r,
    e.fn.alert.noConflict = function() {
        return e.fn.alert = i,
        this
    },
    e(document).on("click.bs.alert.data-api", n, r.prototype.close)
} (jQuery),
+
function(e) {
    "use strict";
    function t(t) {
        return this.each(function() {
            var r = e(this),
            i = r.data("bs.button"),
            s = "object" == typeof t && t;
            i || r.data("bs.button", i = new n(this, s)),
            "toggle" == t ? i.toggle() : t && i.setState(t)
        })
    }
    var n = function(t, r) {
        this.$element = e(t),
        this.options = e.extend({},
        n.DEFAULTS, r),
        this.isLoading = !1
    };
    n.VERSION = "3.3.4",
    n.DEFAULTS = {
        loadingText: "loading..."
    },
    n.prototype.setState = function(t) {
        var n = "disabled",
        r = this.$element,
        i = r.is("input") ? "val": "html",
        s = r.data();
        t += "Text",
        null == s.resetText && r.data("resetText", r[i]()),
        setTimeout(e.proxy(function() {
            r[i](null == s[t] ? this.options[t] : s[t]),
            "loadingText" == t ? (this.isLoading = !0, r.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1, r.removeClass(n).removeAttr(n))
        },
        this), 0)
    },
    n.prototype.toggle = function() {
        var e = !0,
        t = this.$element.closest('[data-toggle="buttons"]');
        if (t.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") && (n.prop("checked") && this.$element.hasClass("active") ? e = !1 : t.find(".active").removeClass("active")),
            e && n.prop("checked", !this.$element.hasClass("active")).trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
        e && this.$element.toggleClass("active")
    };
    var r = e.fn.button;
    e.fn.button = t,
    e.fn.button.Constructor = n,
    e.fn.button.noConflict = function() {
        return e.fn.button = r,
        this
    },
    e(document).on("click.bs.button.data-api", '[data-toggle^="button"]',
    function(n) {
        var r = e(n.target);
        r.hasClass("btn") || (r = r.closest(".btn")),
        t.call(r, "toggle"),
        n.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]',
    function(t) {
        e(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
    })
} (jQuery),
+
function(e) {
    "use strict";
    function t(t) {
        return this.each(function() {
            var r = e(this),
            i = r.data("bs.carousel"),
            s = e.extend({},
            n.DEFAULTS, r.data(), "object" == typeof t && t),
            o = "string" == typeof t ? t: s.slide;
            i || r.data("bs.carousel", i = new n(this, s)),
            "number" == typeof t ? i.to(t) : o ? i[o]() : s.interval && i.pause().cycle()
        })
    }
    var n = function(t, n) {
        this.$element = e(t),
        this.$indicators = this.$element.find(".carousel-indicators"),
        this.options = n,
        this.paused = null,
        this.sliding = null,
        this.interval = null,
        this.$active = null,
        this.$items = null,
        this.options.keyboard && this.$element.on("keydown.bs.carousel", e.proxy(this.keydown, this)),
        "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", e.proxy(this.pause, this)).on("mouseleave.bs.carousel", e.proxy(this.cycle, this))
    };
    n.VERSION = "3.3.4",
    n.TRANSITION_DURATION = 600,
    n.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    },
    n.prototype.keydown = function(e) {
        if (!/input|textarea/i.test(e.target.tagName)) {
            switch (e.which) {
            case 37:
                this.prev();
                break;
            case 39:
                this.next();
                break;
            default:
                return
            }
            e.preventDefault()
        }
    },
    n.prototype.cycle = function(t) {
        return t || (this.paused = !1),
        this.interval && clearInterval(this.interval),
        this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)),
        this
    },
    n.prototype.getItemIndex = function(e) {
        return this.$items = e.parent().children(".item"),
        this.$items.index(e || this.$active)
    },
    n.prototype.getItemForDirection = function(e, t) {
        var n = this.getItemIndex(t),
        r = "prev" == e && 0 === n || "next" == e && n == this.$items.length - 1;
        if (r && !this.options.wrap) return t;
        var i = "prev" == e ? -1 : 1,
        s = (n + i) % this.$items.length;
        return this.$items.eq(s)
    },
    n.prototype.to = function(e) {
        var t = this,
        n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return e > this.$items.length - 1 || 0 > e ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel",
        function() {
            t.to(e)
        }) : n == e ? this.pause().cycle() : this.slide(e > n ? "next": "prev", this.$items.eq(e))
    },
    n.prototype.pause = function(t) {
        return t || (this.paused = !0),
        this.$element.find(".next, .prev").length && e.support.transition && (this.$element.trigger(e.support.transition.end), this.cycle(!0)),
        this.interval = clearInterval(this.interval),
        this
    },
    n.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    },
    n.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    },
    n.prototype.slide = function(t, r) {
        var i = this.$element.find(".item.active"),
        s = r || this.getItemForDirection(t, i),
        o = this.interval,
        u = "next" == t ? "left": "right",
        f = this;
        if (s.hasClass("active")) return this.sliding = !1;
        var l = s[0],
        h = e.Event("slide.bs.carousel", {
            relatedTarget: l,
            direction: u
        });
        if (this.$element.trigger(h), !h.isDefaultPrevented()) {
            if (this.sliding = !0, o && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var p = e(this.$indicators.children()[this.getItemIndex(s)]);
                p && p.addClass("active")
            }
            var d = e.Event("slid.bs.carousel", {
                relatedTarget: l,
                direction: u
            });
            return e.support.transition && this.$element.hasClass("slide") ? (s.addClass(t), s[0].offsetWidth, i.addClass(u), s.addClass(u), i.one("bsTransitionEnd",
            function() {
                s.removeClass([t, u].join(" ")).addClass("active"),
                i.removeClass(["active", u].join(" ")),
                f.sliding = !1,
                setTimeout(function() {
                    f.$element.trigger(d)
                },
                0)
            }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (i.removeClass("active"), s.addClass("active"), this.sliding = !1, this.$element.trigger(d)),
            o && this.cycle(),
            this
        }
    };
    var r = e.fn.carousel;
    e.fn.carousel = t,
    e.fn.carousel.Constructor = n,
    e.fn.carousel.noConflict = function() {
        return e.fn.carousel = r,
        this
    };
    var i = function(n) {
        var r, i = e(this),
        s = e(i.attr("data-target") || (r = i.attr("href")) && r.replace(/.*(?=#[^\s]+$)/, ""));
        if (s.hasClass("carousel")) {
            var o = e.extend({},
            s.data(), i.data()),
            u = i.attr("data-slide-to");
            u && (o.interval = !1),
            t.call(s, o),
            u && s.data("bs.carousel").to(u),
            n.preventDefault()
        }
    };
    e(document).on("click.bs.carousel.data-api", "[data-slide]", i).on("click.bs.carousel.data-api", "[data-slide-to]", i),
    e(window).on("load",
    function() {
        e('[data-ride="carousel"]').each(function() {
            var n = e(this);
            t.call(n, n.data())
        })
    })
} (jQuery),
+
function(e) {
    "use strict";
    function t(t) {
        var n, r = t.attr("data-target") || (n = t.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
        return e(r)
    }
    function n(t) {
        return this.each(function() {
            var n = e(this),
            i = n.data("bs.collapse"),
            s = e.extend({},
            r.DEFAULTS, n.data(), "object" == typeof t && t); ! i && s.toggle && /show|hide/.test(t) && (s.toggle = !1),
            i || n.data("bs.collapse", i = new r(this, s)),
            "string" == typeof t && i[t]()
        })
    }
    var r = function(t, n) {
        this.$element = e(t),
        this.options = e.extend({},
        r.DEFAULTS, n),
        this.$trigger = e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'),
        this.transitioning = null,
        this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle()
    };
    r.VERSION = "3.3.4",
    r.TRANSITION_DURATION = 350,
    r.DEFAULTS = {
        toggle: !0
    },
    r.prototype.dimension = function() {
        var e = this.$element.hasClass("width");
        return e ? "width": "height"
    },
    r.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var t, i = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (! (i && i.length && (t = i.data("bs.collapse"), t && t.transitioning))) {
                var s = e.Event("show.bs.collapse");
                if (this.$element.trigger(s), !s.isDefaultPrevented()) {
                    i && i.length && (n.call(i, "hide"), t || i.data("bs.collapse", null));
                    var o = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[o](0).attr("aria-expanded", !0),
                    this.$trigger.removeClass("collapsed").attr("aria-expanded", !0),
                    this.transitioning = 1;
                    var u = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[o](""),
                        this.transitioning = 0,
                        this.$element.trigger("shown.bs.collapse")
                    };
                    if (!e.support.transition) return u.call(this);
                    var f = e.camelCase(["scroll", o].join("-"));
                    this.$element.one("bsTransitionEnd", e.proxy(u, this)).emulateTransitionEnd(r.TRANSITION_DURATION)[o](this.$element[0][f])
                }
            }
        }
    },
    r.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var t = e.Event("hide.bs.collapse");
            if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight,
                this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1),
                this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
                this.transitioning = 1;
                var i = function() {
                    this.transitioning = 0,
                    this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return e.support.transition ? void this.$element[n](0).one("bsTransitionEnd", e.proxy(i, this)).emulateTransitionEnd(r.TRANSITION_DURATION) : i.call(this)
            }
        }
    },
    r.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide": "show"]()
    },
    r.prototype.getParent = function() {
        return e(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(e.proxy(function(n, r) {
            var i = e(r);
            this.addAriaAndCollapsedClass(t(i), i)
        },
        this)).end()
    },
    r.prototype.addAriaAndCollapsedClass = function(e, t) {
        var n = e.hasClass("in");
        e.attr("aria-expanded", n),
        t.toggleClass("collapsed", !n).attr("aria-expanded", n)
    };
    var i = e.fn.collapse;
    e.fn.collapse = n,
    e.fn.collapse.Constructor = r,
    e.fn.collapse.noConflict = function() {
        return e.fn.collapse = i,
        this
    },
    e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]',
    function(r) {
        var i = e(this);
        i.attr("data-target") || r.preventDefault();
        var s = t(i),
        o = s.data("bs.collapse"),
        u = o ? "toggle": i.data();
        n.call(s, u)
    })
} (jQuery),
+
function(e) {
    "use strict";
    function t(t) {
        t && 3 === t.which || (e(i).remove(), e(s).each(function() {
            var r = e(this),
            i = n(r),
            s = {
                relatedTarget: this
            };
            i.hasClass("open") && (i.trigger(t = e.Event("hide.bs.dropdown", s)), t.isDefaultPrevented() || (r.attr("aria-expanded", "false"), i.removeClass("open").trigger("hidden.bs.dropdown", s)))
        }))
    }
    function n(t) {
        var n = t.attr("data-target");
        n || (n = t.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var r = n && e(n);
        return r && r.length ? r: t.parent()
    }
    function r(t) {
        return this.each(function() {
            var n = e(this),
            r = n.data("bs.dropdown");
            r || n.data("bs.dropdown", r = new o(this)),
            "string" == typeof t && r[t].call(n)
        })
    }
    var i = ".dropdown-backdrop",
    s = '[data-toggle="dropdown"]',
    o = function(t) {
        e(t).on("click.bs.dropdown", this.toggle)
    };
    o.VERSION = "3.3.4",
    o.prototype.toggle = function(r) {
        var i = e(this);
        if (!i.is(".disabled, :disabled")) {
            var s = n(i),
            o = s.hasClass("open");
            if (t(), !o) {
                "ontouchstart" in document.documentElement && !s.closest(".navbar-nav").length && e('<div class="dropdown-backdrop"/>').insertAfter(e(this)).on("click", t);
                var u = {
                    relatedTarget: this
                };
                if (s.trigger(r = e.Event("show.bs.dropdown", u)), r.isDefaultPrevented()) return;
                i.trigger("focus").attr("aria-expanded", "true"),
                s.toggleClass("open").trigger("shown.bs.dropdown", u)
            }
            return ! 1
        }
    },
    o.prototype.keydown = function(t) {
        if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName)) {
            var r = e(this);
            if (t.preventDefault(), t.stopPropagation(), !r.is(".disabled, :disabled")) {
                var i = n(r),
                o = i.hasClass("open");
                if (!o && 27 != t.which || o && 27 == t.which) return 27 == t.which && i.find(s).trigger("focus"),
                r.trigger("click");
                var u = " li:not(.disabled):visible a",
                l = i.find('[role="menu"]' + u + ', [role="listbox"]' + u);
                if (l.length) {
                    var h = l.index(t.target);
                    38 == t.which && h > 0 && h--,
                    40 == t.which && h < l.length - 1 && h++,
                    ~h || (h = 0),
                    l.eq(h).trigger("focus")
                }
            }
        }
    };
    var u = e.fn.dropdown;
    e.fn.dropdown = r,
    e.fn.dropdown.Constructor = o,
    e.fn.dropdown.noConflict = function() {
        return e.fn.dropdown = u,
        this
    },
    e(document).on("click.bs.dropdown.data-api", t).on("click.bs.dropdown.data-api", ".dropdown form",
    function(e) {
        e.stopPropagation()
    }).on("click.bs.dropdown.data-api", s, o.prototype.toggle).on("keydown.bs.dropdown.data-api", s, o.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', o.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', o.prototype.keydown)
} (jQuery),
+
function(e) {
    "use strict";
    function t(t, r) {
        return this.each(function() {
            var i = e(this),
            s = i.data("bs.modal"),
            o = e.extend({},
            n.DEFAULTS, i.data(), "object" == typeof t && t);
            s || i.data("bs.modal", s = new n(this, o)),
            "string" == typeof t ? s[t](r) : o.show && s.show(r)
        })
    }
    var n = function(t, n) {
        this.options = n,
        this.$body = e(document.body),
        this.$element = e(t),
        this.$dialog = this.$element.find(".modal-dialog"),
        this.$backdrop = null,
        this.isShown = null,
        this.originalBodyPad = null,
        this.scrollbarWidth = 0,
        this.ignoreBackdropClick = !1,
        this.options.remote && this.$element.find(".modal-content").load(this.options.remote, e.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        },
        this))
    };
    n.VERSION = "3.3.4",
    n.TRANSITION_DURATION = 300,
    n.BACKDROP_TRANSITION_DURATION = 150,
    n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    },
    n.prototype.toggle = function(e) {
        return this.isShown ? this.hide() : this.show(e)
    },
    n.prototype.show = function(t) {
        var r = this,
        i = e.Event("show.bs.modal", {
            relatedTarget: t
        });
        this.$element.trigger(i),
        this.isShown || i.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal",
        function() {
            r.$element.one("mouseup.dismiss.bs.modal",
            function(t) {
                e(t.target).is(r.$element) && (r.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var i = e.support.transition && r.$element.hasClass("fade");
            r.$element.parent().length || r.$element.appendTo(r.$body),
            r.$element.show().scrollTop(0),
            r.adjustDialog(),
            i && r.$element[0].offsetWidth,
            r.$element.addClass("in").attr("aria-hidden", !1),
            r.enforceFocus();
            var s = e.Event("shown.bs.modal", {
                relatedTarget: t
            });
            i ? r.$dialog.one("bsTransitionEnd",
            function() {
                r.$element.trigger("focus").trigger(s)
            }).emulateTransitionEnd(n.TRANSITION_DURATION) : r.$element.trigger("focus").trigger(s)
        }))
    },
    n.prototype.hide = function(t) {
        t && t.preventDefault(),
        t = e.Event("hide.bs.modal"),
        this.$element.trigger(t),
        this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), e(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), e.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", e.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
    },
    n.prototype.enforceFocus = function() {
        e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function(e) {
            this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus")
        },
        this))
    },
    n.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", e.proxy(function(e) {
            27 == e.which && this.hide()
        },
        this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    },
    n.prototype.resize = function() {
        this.isShown ? e(window).on("resize.bs.modal", e.proxy(this.handleUpdate, this)) : e(window).off("resize.bs.modal")
    },
    n.prototype.hideModal = function() {
        var e = this;
        this.$element.hide(),
        this.backdrop(function() {
            e.$body.removeClass("modal-open"),
            e.resetAdjustments(),
            e.resetScrollbar(),
            e.$element.trigger("hidden.bs.modal")
        })
    },
    n.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(),
        this.$backdrop = null
    },
    n.prototype.backdrop = function(t) {
        var r = this,
        i = this.$element.hasClass("fade") ? "fade": "";
        if (this.isShown && this.options.backdrop) {
            var s = e.support.transition && i;
            if (this.$backdrop = e('<div class="modal-backdrop ' + i + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", e.proxy(function(e) {
                return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
            },
            this)), s && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
            s ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : t()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var o = function() {
                r.removeBackdrop(),
                t && t()
            };
            e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", o).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : o()
        } else t && t()
    },
    n.prototype.handleUpdate = function() {
        this.adjustDialog()
    },
    n.prototype.adjustDialog = function() {
        var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth: "",
            paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth: ""
        })
    },
    n.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    },
    n.prototype.checkScrollbar = function() {
        var e = window.innerWidth;
        if (!e) {
            var t = document.documentElement.getBoundingClientRect();
            e = t.right - Math.abs(t.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < e,
        this.scrollbarWidth = this.measureScrollbar()
    },
    n.prototype.setScrollbar = function() {
        var e = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "",
        this.bodyIsOverflowing && this.$body.css("padding-right", e + this.scrollbarWidth)
    },
    n.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    },
    n.prototype.measureScrollbar = function() {
        var e = document.createElement("div");
        e.className = "modal-scrollbar-measure",
        this.$body.append(e);
        var t = e.offsetWidth - e.clientWidth;
        return this.$body[0].removeChild(e),
        t
    };
    var r = e.fn.modal;
    e.fn.modal = t,
    e.fn.modal.Constructor = n,
    e.fn.modal.noConflict = function() {
        return e.fn.modal = r,
        this
    },
    e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]',
    function(n) {
        var r = e(this),
        i = r.attr("href"),
        s = e(r.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")),
        o = s.data("bs.modal") ? "toggle": e.extend({
            remote: !/#/.test(i) && i
        },
        s.data(), r.data());
        r.is("a") && n.preventDefault(),
        s.one("show.bs.modal",
        function(e) {
            e.isDefaultPrevented() || s.one("hidden.bs.modal",
            function() {
                r.is(":visible") && r.trigger("focus")
            })
        }),
        t.call(s, o, this)
    })
} (jQuery),
+
function(e) {
    "use strict";
    function t(t) {
        return this.each(function() {
            var r = e(this),
            i = r.data("bs.tooltip"),
            s = "object" == typeof t && t; (i || !/destroy|hide/.test(t)) && (i || r.data("bs.tooltip", i = new n(this, s)), "string" == typeof t && i[t]())
        })
    }
    var n = function(e, t) {
        this.type = null,
        this.options = null,
        this.enabled = null,
        this.timeout = null,
        this.hoverState = null,
        this.$element = null,
        this.init("tooltip", e, t)
    };
    n.VERSION = "3.3.4",
    n.TRANSITION_DURATION = 150,
    n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    },
    n.prototype.init = function(t, n, r) {
        if (this.enabled = !0, this.type = t, this.$element = e(n), this.options = this.getOptions(r), this.$viewport = this.options.viewport && e(this.options.viewport.selector || this.options.viewport), this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var i = this.options.trigger.split(" "), s = i.length; s--;) {
            var o = i[s];
            if ("click" == o) this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this));
            else if ("manual" != o) {
                var u = "hover" == o ? "mouseenter": "focusin",
                f = "hover" == o ? "mouseleave": "focusout";
                this.$element.on(u + "." + this.type, this.options.selector, e.proxy(this.enter, this)),
                this.$element.on(f + "." + this.type, this.options.selector, e.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = e.extend({},
        this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    },
    n.prototype.getDefaults = function() {
        return n.DEFAULTS
    },
    n.prototype.getOptions = function(t) {
        return t = e.extend({},
        this.getDefaults(), this.$element.data(), t),
        t.delay && "number" == typeof t.delay && (t.delay = {
            show: t.delay,
            hide: t.delay
        }),
        t
    },
    n.prototype.getDelegateOptions = function() {
        var t = {},
        n = this.getDefaults();
        return this._options && e.each(this._options,
        function(e, r) {
            n[e] != r && (t[e] = r)
        }),
        t
    },
    n.prototype.enter = function(t) {
        var n = t instanceof this.constructor ? t: e(t.currentTarget).data("bs." + this.type);
        return n && n.$tip && n.$tip.is(":visible") ? void(n.hoverState = "in") : (n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() {
            "in" == n.hoverState && n.show()
        },
        n.options.delay.show)) : n.show())
    },
    n.prototype.leave = function(t) {
        var n = t instanceof this.constructor ? t: e(t.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)),
        clearTimeout(n.timeout),
        n.hoverState = "out",
        n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function() {
            "out" == n.hoverState && n.hide()
        },
        n.options.delay.hide)) : n.hide()
    },
    n.prototype.show = function() {
        var t = e.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(t);
            var r = e.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (t.isDefaultPrevented() || !r) return;
            var i = this,
            s = this.tip(),
            o = this.getUID(this.type);
            this.setContent(),
            s.attr("id", o),
            this.$element.attr("aria-describedby", o),
            this.options.animation && s.addClass("fade");
            var u = "function" == typeof this.options.placement ? this.options.placement.call(this, s[0], this.$element[0]) : this.options.placement,
            f = /\s?auto?\s?/i,
            l = f.test(u);
            l && (u = u.replace(f, "") || "top"),
            s.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(u).data("bs." + this.type, this),
            this.options.container ? s.appendTo(this.options.container) : s.insertAfter(this.$element);
            var h = this.getPosition(),
            p = s[0].offsetWidth,
            d = s[0].offsetHeight;
            if (l) {
                var v = u,
                m = this.options.container ? e(this.options.container) : this.$element.parent(),
                g = this.getPosition(m);
                u = "bottom" == u && h.bottom + d > g.bottom ? "top": "top" == u && h.top - d < g.top ? "bottom": "right" == u && h.right + p > g.width ? "left": "left" == u && h.left - p < g.left ? "right": u,
                s.removeClass(v).addClass(u)
            }
            var y = this.getCalculatedOffset(u, h, p, d);
            this.applyPlacement(y, u);
            var b = function() {
                var e = i.hoverState;
                i.$element.trigger("shown.bs." + i.type),
                i.hoverState = null,
                "out" == e && i.leave(i)
            };
            e.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", b).emulateTransitionEnd(n.TRANSITION_DURATION) : b()
        }
    },
    n.prototype.applyPlacement = function(t, n) {
        var r = this.tip(),
        i = r[0].offsetWidth,
        s = r[0].offsetHeight,
        o = parseInt(r.css("margin-top"), 10),
        u = parseInt(r.css("margin-left"), 10);
        isNaN(o) && (o = 0),
        isNaN(u) && (u = 0),
        t.top = t.top + o,
        t.left = t.left + u,
        e.offset.setOffset(r[0], e.extend({
            using: function(e) {
                r.css({
                    top: Math.round(e.top),
                    left: Math.round(e.left)
                })
            }
        },
        t), 0),
        r.addClass("in");
        var f = r[0].offsetWidth,
        l = r[0].offsetHeight;
        "top" == n && l != s && (t.top = t.top + s - l);
        var c = this.getViewportAdjustedDelta(n, t, f, l);
        c.left ? t.left += c.left: t.top += c.top;
        var h = /top|bottom/.test(n),
        p = h ? 2 * c.left - i + f: 2 * c.top - s + l,
        d = h ? "offsetWidth": "offsetHeight";
        r.offset(t),
        this.replaceArrow(p, r[0][d], h)
    },
    n.prototype.replaceArrow = function(e, t, n) {
        this.arrow().css(n ? "left": "top", 50 * (1 - e / t) + "%").css(n ? "top": "left", "")
    },
    n.prototype.setContent = function() {
        var e = this.tip(),
        t = this.getTitle();
        e.find(".tooltip-inner")[this.options.html ? "html": "text"](t),
        e.removeClass("fade in top bottom left right")
    },
    n.prototype.hide = function(t) {
        function r() {
            "in" != i.hoverState && s.detach(),
            i.$element.removeAttr("aria-describedby").trigger("hidden.bs." + i.type),
            t && t()
        }
        var i = this,
        s = e(this.$tip),
        o = e.Event("hide.bs." + this.type);
        return this.$element.trigger(o),
        o.isDefaultPrevented() ? void 0 : (s.removeClass("in"), e.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", r).emulateTransitionEnd(n.TRANSITION_DURATION) : r(), this.hoverState = null, this)
    },
    n.prototype.fixTitle = function() {
        var e = this.$element; (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
    },
    n.prototype.hasContent = function() {
        return this.getTitle()
    },
    n.prototype.getPosition = function(t) {
        t = t || this.$element;
        var n = t[0],
        r = "BODY" == n.tagName,
        i = n.getBoundingClientRect();
        null == i.width && (i = e.extend({},
        i, {
            width: i.right - i.left,
            height: i.bottom - i.top
        }));
        var s = r ? {
            top: 0,
            left: 0
        }: t.offset(),
        o = {
            scroll: r ? document.documentElement.scrollTop || document.body.scrollTop: t.scrollTop()
        },
        u = r ? {
            width: e(window).width(),
            height: e(window).height()
        }: null;
        return e.extend({},
        i, o, u, s)
    },
    n.prototype.getCalculatedOffset = function(e, t, n, r) {
        return "bottom" == e ? {
            top: t.top + t.height,
            left: t.left + t.width / 2 - n / 2
        }: "top" == e ? {
            top: t.top - r,
            left: t.left + t.width / 2 - n / 2
        }: "left" == e ? {
            top: t.top + t.height / 2 - r / 2,
            left: t.left - n
        }: {
            top: t.top + t.height / 2 - r / 2,
            left: t.left + t.width
        }
    },
    n.prototype.getViewportAdjustedDelta = function(e, t, n, r) {
        var i = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return i;
        var s = this.options.viewport && this.options.viewport.padding || 0,
        o = this.getPosition(this.$viewport);
        if (/right|left/.test(e)) {
            var u = t.top - s - o.scroll,
            a = t.top + s - o.scroll + r;
            u < o.top ? i.top = o.top - u: a > o.top + o.height && (i.top = o.top + o.height - a)
        } else {
            var f = t.left - s,
            l = t.left + s + n;
            f < o.left ? i.left = o.left - f: l > o.width && (i.left = o.left + o.width - l)
        }
        return i
    },
    n.prototype.getTitle = function() {
        var e, t = this.$element,
        n = this.options;
        return e = t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title)
    },
    n.prototype.getUID = function(e) {
        do e += ~~ (1e6 * Math.random());
        while (document.getElementById(e));
        return e
    },
    n.prototype.tip = function() {
        return this.$tip = this.$tip || e(this.options.template)
    },
    n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    },
    n.prototype.enable = function() {
        this.enabled = !0
    },
    n.prototype.disable = function() {
        this.enabled = !1
    },
    n.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    },
    n.prototype.toggle = function(t) {
        var n = this;
        t && (n = e(t.currentTarget).data("bs." + this.type), n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n))),
        n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    },
    n.prototype.destroy = function() {
        var e = this;
        clearTimeout(this.timeout),
        this.hide(function() {
            e.$element.off("." + e.type).removeData("bs." + e.type)
        })
    };
    var r = e.fn.tooltip;
    e.fn.tooltip = t,
    e.fn.tooltip.Constructor = n,
    e.fn.tooltip.noConflict = function() {
        return e.fn.tooltip = r,
        this
    }
} (jQuery),
+
function(e) {
    "use strict";
    function t(t) {
        return this.each(function() {
            var r = e(this),
            i = r.data("bs.popover"),
            s = "object" == typeof t && t; (i || !/destroy|hide/.test(t)) && (i || r.data("bs.popover", i = new n(this, s)), "string" == typeof t && i[t]())
        })
    }
    var n = function(e, t) {
        this.init("popover", e, t)
    };
    if (!e.fn.tooltip) throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.3.4",
    n.DEFAULTS = e.extend({},
    e.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }),
    n.prototype = e.extend({},
    e.fn.tooltip.Constructor.prototype),
    n.prototype.constructor = n,
    n.prototype.getDefaults = function() {
        return n.DEFAULTS
    },
    n.prototype.setContent = function() {
        var e = this.tip(),
        t = this.getTitle(),
        n = this.getContent();
        e.find(".popover-title")[this.options.html ? "html": "text"](t),
        e.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html": "append": "text"](n),
        e.removeClass("fade top bottom left right in"),
        e.find(".popover-title").html() || e.find(".popover-title").hide()
    },
    n.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    },
    n.prototype.getContent = function() {
        var e = this.$element,
        t = this.options;
        return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
    },
    n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var r = e.fn.popover;
    e.fn.popover = t,
    e.fn.popover.Constructor = n,
    e.fn.popover.noConflict = function() {
        return e.fn.popover = r,
        this
    }
} (jQuery),
+
function(e) {
    "use strict";
    function t(n, r) {
        this.$body = e(document.body),
        this.$scrollElement = e(e(n).is(document.body) ? window: n),
        this.options = e.extend({},
        t.DEFAULTS, r),
        this.selector = (this.options.target || "") + " .nav li > a",
        this.offsets = [],
        this.targets = [],
        this.activeTarget = null,
        this.scrollHeight = 0,
        this.$scrollElement.on("scroll.bs.scrollspy", e.proxy(this.process, this)),
        this.refresh(),
        this.process()
    }
    function n(n) {
        return this.each(function() {
            var r = e(this),
            i = r.data("bs.scrollspy"),
            s = "object" == typeof n && n;
            i || r.data("bs.scrollspy", i = new t(this, s)),
            "string" == typeof n && i[n]()
        })
    }
    t.VERSION = "3.3.4",
    t.DEFAULTS = {
        offset: 10
    },
    t.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    },
    t.prototype.refresh = function() {
        var t = this,
        n = "offset",
        r = 0;
        this.offsets = [],
        this.targets = [],
        this.scrollHeight = this.getScrollHeight(),
        e.isWindow(this.$scrollElement[0]) || (n = "position", r = this.$scrollElement.scrollTop()),
        this.$body.find(this.selector).map(function() {
            var t = e(this),
            i = t.data("target") || t.attr("href"),
            s = /^#./.test(i) && e(i);
            return s && s.length && s.is(":visible") && [[s[n]().top + r, i]] || null
        }).sort(function(e, t) {
            return e[0] - t[0]
        }).each(function() {
            t.offsets.push(this[0]),
            t.targets.push(this[1])
        })
    },
    t.prototype.process = function() {
        var e, t = this.$scrollElement.scrollTop() + this.options.offset,
        n = this.getScrollHeight(),
        r = this.options.offset + n - this.$scrollElement.height(),
        i = this.offsets,
        s = this.targets,
        o = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(), t >= r) return o != (e = s[s.length - 1]) && this.activate(e);
        if (o && t < i[0]) return this.activeTarget = null,
        this.clear();
        for (e = i.length; e--;) o != s[e] && t >= i[e] && (void 0 === i[e + 1] || t < i[e + 1]) && this.activate(s[e])
    },
    t.prototype.activate = function(t) {
        this.activeTarget = t,
        this.clear();
        var n = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
        r = e(n).parents("li").addClass("active");
        r.parent(".dropdown-menu").length && (r = r.closest("li.dropdown").addClass("active")),
        r.trigger("activate.bs.scrollspy")
    },
    t.prototype.clear = function() {
        e(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var r = e.fn.scrollspy;
    e.fn.scrollspy = n,
    e.fn.scrollspy.Constructor = t,
    e.fn.scrollspy.noConflict = function() {
        return e.fn.scrollspy = r,
        this
    },
    e(window).on("load.bs.scrollspy.data-api",
    function() {
        e('[data-spy="scroll"]').each(function() {
            var t = e(this);
            n.call(t, t.data())
        })
    })
} (jQuery),
+
function(e) {
    "use strict";
    function t(t) {
        return this.each(function() {
            var r = e(this),
            i = r.data("bs.tab");
            i || r.data("bs.tab", i = new n(this)),
            "string" == typeof t && i[t]()
        })
    }
    var n = function(t) {
        this.element = e(t)
    };
    n.VERSION = "3.3.4",
    n.TRANSITION_DURATION = 150,
    n.prototype.show = function() {
        var t = this.element,
        n = t.closest("ul:not(.dropdown-menu)"),
        r = t.data("target");
        if (r || (r = t.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
            var i = n.find(".active:last a"),
            s = e.Event("hide.bs.tab", {
                relatedTarget: t[0]
            }),
            o = e.Event("show.bs.tab", {
                relatedTarget: i[0]
            });
            if (i.trigger(s), t.trigger(o), !o.isDefaultPrevented() && !s.isDefaultPrevented()) {
                var u = e(r);
                this.activate(t.closest("li"), n),
                this.activate(u, u.parent(),
                function() {
                    i.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: t[0]
                    }),
                    t.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: i[0]
                    })
                })
            }
        }
    },
    n.prototype.activate = function(t, r, i) {
        function s() {
            o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1),
            t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0),
            u ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"),
            t.parent(".dropdown-menu").length && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0),
            i && i()
        }
        var o = r.find("> .active"),
        u = i && e.support.transition && (o.length && o.hasClass("fade") || !!r.find("> .fade").length);
        o.length && u ? o.one("bsTransitionEnd", s).emulateTransitionEnd(n.TRANSITION_DURATION) : s(),
        o.removeClass("in")
    };
    var r = e.fn.tab;
    e.fn.tab = t,
    e.fn.tab.Constructor = n,
    e.fn.tab.noConflict = function() {
        return e.fn.tab = r,
        this
    };
    var i = function(n) {
        n.preventDefault(),
        t.call(e(this), "show")
    };
    e(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i)
} (jQuery),
+
function(e) {
    "use strict";
    function t(t) {
        return this.each(function() {
            var r = e(this),
            i = r.data("bs.affix"),
            s = "object" == typeof t && t;
            i || r.data("bs.affix", i = new n(this, s)),
            "string" == typeof t && i[t]()
        })
    }
    var n = function(t, r) {
        this.options = e.extend({},
        n.DEFAULTS, r),
        this.$target = e(this.options.target).on("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", e.proxy(this.checkPositionWithEventLoop, this)),
        this.$element = e(t),
        this.affixed = null,
        this.unpin = null,
        this.pinnedOffset = null,
        this.checkPosition()
    };
    n.VERSION = "3.3.4",
    n.RESET = "affix affix-top affix-bottom",
    n.DEFAULTS = {
        offset: 0,
        target: window
    },
    n.prototype.getState = function(e, t, n, r) {
        var i = this.$target.scrollTop(),
        s = this.$element.offset(),
        o = this.$target.height();
        if (null != n && "top" == this.affixed) return n > i ? "top": !1;
        if ("bottom" == this.affixed) return null != n ? i + this.unpin <= s.top ? !1 : "bottom": e - r >= i + o ? !1 : "bottom";
        var u = null == this.affixed,
        a = u ? i: s.top,
        f = u ? o: t;
        return null != n && n >= i ? "top": null != r && a + f >= e - r ? "bottom": !1
    },
    n.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var e = this.$target.scrollTop(),
        t = this.$element.offset();
        return this.pinnedOffset = t.top - e
    },
    n.prototype.checkPositionWithEventLoop = function() {
        setTimeout(e.proxy(this.checkPosition, this), 1)
    },
    n.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var t = this.$element.height(),
            r = this.options.offset,
            i = r.top,
            s = r.bottom,
            o = e(document.body).height();
            "object" != typeof r && (s = i = r),
            "function" == typeof i && (i = r.top(this.$element)),
            "function" == typeof s && (s = r.bottom(this.$element));
            var u = this.getState(o, t, i, s);
            if (this.affixed != u) {
                null != this.unpin && this.$element.css("top", "");
                var f = "affix" + (u ? "-" + u: ""),
                l = e.Event(f + ".bs.affix");
                if (this.$element.trigger(l), l.isDefaultPrevented()) return;
                this.affixed = u,
                this.unpin = "bottom" == u ? this.getPinnedOffset() : null,
                this.$element.removeClass(n.RESET).addClass(f).trigger(f.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == u && this.$element.offset({
                top: o - t - s
            })
        }
    };
    var r = e.fn.affix;
    e.fn.affix = t,
    e.fn.affix.Constructor = n,
    e.fn.affix.noConflict = function() {
        return e.fn.affix = r,
        this
    },
    e(window).on("load",
    function() {
        e('[data-spy="affix"]').each(function() {
            var n = e(this),
            r = n.data();
            r.offset = r.offset || {},
            null != r.offsetBottom && (r.offset.bottom = r.offsetBottom),
            null != r.offsetTop && (r.offset.top = r.offsetTop),
            t.call(n, r)
        })
    })
} (jQuery);