/*TMODJS:{"version":"1.0.0"}*/
!
function() {
    function a(a, b) {
        return (/string|function/.test(typeof b) ? h: g)(a, b)
    }
    function b(a, c) {
        return "string" != typeof a && (c = typeof a, "number" === c ? a += "": a = "function" === c ? b(a.call(a)) : ""),
        a
    }
    function c(a) {
        return l[a]
    }
    function d(a) {
        return b(a).replace(/&(?![\w#]+;)|[<>"']/g, c)
    }
    function e(a, b) {
        if (m(a)) for (var c = 0,
        d = a.length; d > c; c++) b.call(a, a[c], c, a);
        else for (c in a) b.call(a, a[c], c)
    }
    function f(a, b) {
        var c = /(\/)[^/] + \1\.\.\1 / ,
        d = ("./" + a).replace(/[^/] + $ / ,
        ""),
        e = d + b;
        for (e = e.replace(/\/\.\//g, "/"); e.match(c);) e = e.replace(c, "/");
        return e
    }
    function g(b, c) {
        var d = a.get(b) || i({
            filename: b,
            name: "Render Error",
            message: "Template not found"
        });
        return c ? d(c) : d
    }
    function h(a, b) {
        if ("string" == typeof b) {
            var c = b;
            b = function() {
                return new k(c)
            }
        }
        var d = j[a] = function(c) {
            try {
                return new b(c, a) + ""
            } catch(d) {
                return i(d)()
            }
        };
        return d.prototype = b.prototype = n,
        d.toString = function() {
            return b + ""
        },
        d
    }
    function i(a) {
        var b = "{Template Error}",
        c = a.stack || "";
        if (c) c = c.split("\n").slice(0, 2).join("\n");
        else for (var d in a) c += "<" + d + ">\n" + a[d] + "\n\n";
        return function() {
            return "object" == typeof console && console.error(b + "\n\n" + c),
            b
        }
    }
    var j = a.cache = {},
    k = this.String,
    l = {
        "<": "&#60;",
        ">": "&#62;",
        '"': "&#34;",
        "'": "&#39;",
        "&": "&#38;"
    },
    m = Array.isArray ||
    function(a) {
        return "[object Array]" === {}.toString.call(a)
    },
    n = a.utils = {
        $helpers: {},
        $include: function(a, b, c) {
            return a = f(c, a),
            g(a, b)
        },
        $string: b,
        $escape: d,
        $each: e
    },
    o = a.helpers = n.$helpers;
    a.get = function(a) {
        return j[a.replace(/^\.\//, "")]
    },
    a.helper = function(a, b) {
        o[a] = b
    },
    "function" == typeof define ? define(function() {
        return a
    }) : "undefined" != typeof exports ? module.exports = a: this.template = a,
    /*v:2*/
    a("designcreate",
    function(a) {
        "use strict";
        var b = this,
        c = (b.$helpers, b.$escape),
        d = a.img_url,
        e = a.design_name,
        f = a.customer_id,
        g = a.no,
        h = "";
        return h += '<form> <div class="pop-collect-thumb" style="border:none;"> <a href="javascript:void(0);"><img src="',
        h += c(d),
        h += '"></a> </div> <div class="pop-collect-main" style="margin-top:40px;"> <div class="pop-collect-album"> <div style="height:32px;"> <span class="margin-right-10 fb f16">\u65b9\u6848\u540d\u79f0</span> <input type="text" name="design_name" placeholder="\u8bf7\u8f93\u5165\u65b9\u6848\u7684\u540d\u79f0" value="',
        h += c(e),
        h += '\u5bb6\u7684\u8bbe\u8ba1"> <input type="hidden" id="customer_id" value="',
        h += c(f),
        h += '"> <input type="hidden" id="no" value="',
        h += c(g),
        h += '"> </div> </div> <div class="margin-top-20" style="margin-left:80px;"> <span class="btn btn-success f12 js-design-create margin-right-10">\u521b\u5efa</span> <span class="btn btn-disabled f12 js-close">\u53d6\u6d88</span> </div> </div> </form>',
        new k(h)
    }),
    /*v:2*/
    a("eliminate", '<div id="eliminate" class="treeview-reset"></div> <div class="text-right margin-top-20"> <span class="btn btn-success f12 js-eliminate-save">\u786e\u5b9a</span> <span class="btn btn-disabled f12 js-close">\u53d6\u6d88</span> </div>'),
    /*v:2*/
    a("piclist",
    function(a) {
        "use strict";
        var b = this,
        c = (b.$helpers, b.$each),
        d = a.records,
        e = (a.value, a.$index, b.$escape),
        f = "";
        return f += '<div class="screen-bg pic-bg"></div> <div class="pop" style="margin-top:-400px;"> <span class="pic-close icon-cross"></span> <div class="htmleaf-content bgcolor-3"> <ul class="pgwSlideshow"> ',
        c(d,
        function(a) {
            f += " ",
            2 == a.service_type ? (f += ' <li> <a href="', f += e(a.full_url), f += '" target="_blank"> <img src="', f += e(a.thumbnail_url), f += '" alt="', f += e(a.design_name), f += '" data-description="', f += e(a.design_style_desc), f += '" id="', f += e(a.no), f += '" data-large-src="', f += e(a.origin_url), f += '" data-operate="', f += e(a.service_type), f += '"> </a> </li> ') : (f += ' <li><img src="', f += e(a.thumbnail_url), f += '" alt="', f += e(a.design_name), f += '" data-description="', f += e(a.design_style_desc), f += '" id="', f += e(a.no), f += '" data-large-src="', f += e(a.origin_url), f += '" data-operate="', f += e(a.service_type), f += '"></li> '),
            f += " "
        }),
        f += ' </ul> </div> <input type="hidden" id="design_id" value="',
        f += e(d[1].design_id),
        f += '" /> </div>',
        new k(f)
    })
} ();