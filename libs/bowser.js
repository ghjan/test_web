/*!
  * Bowser - a browser detector
  * https://github.com/ded/bowser
  * MIT License | (c) Dustin Diaz 2014
  */

!
function(e, t) {
    typeof module != "undefined" && module.exports ? module.exports.browser = t() : typeof define == "function" && define.amd ? define(t) : this[e] = t()
} ("bowser",
function() {
    function e(e) {
        function n(t) {
            var n = e.match(t);
            return n && n.length > 1 && n[1] || ""
        }
        var r = n(/(ipod|iphone|ipad)/i).toLowerCase(),
        i = /like android/i.test(e),
        s = !i && /android/i.test(e),
        o = n(/version\/(\d+(\.\d+)?)/i),
        u = /tablet/i.test(e),
        a = !u && /[^-]mobi/i.test(e),
        f;
        /opera|opr/i.test(e) ? f = {
            name: "Opera",
            opera: t,
            version: o || n(/(?:opera|opr)[\s\/](\d+(\.\d+)?)/i)
        }: /windows phone/i.test(e) ? f = {
            name: "Windows Phone",
            windowsphone: t,
            msie: t,
            version: n(/iemobile\/(\d+(\.\d+)?)/i)
        }: /msie|trident/i.test(e) ? f = {
            name: "Internet Explorer",
            msie: t,
            version: n(/(?:msie |rv:)(\d+(\.\d+)?)/i)
        }: /chrome|crios|crmo/i.test(e) ? f = {
            name: "Chrome",
            chrome: t,
            version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
        }: r ? (f = {
            name: r == "iphone" ? "iPhone": r == "ipad" ? "iPad": "iPod"
        },
        o && (f.version = o)) : /sailfish/i.test(e) ? f = {
            name: "Sailfish",
            sailfish: t,
            version: n(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
        }: /seamonkey\//i.test(e) ? f = {
            name: "SeaMonkey",
            seamonkey: t,
            version: n(/seamonkey\/(\d+(\.\d+)?)/i)
        }: /firefox|iceweasel/i.test(e) ? (f = {
            name: "Firefox",
            firefox: t,
            version: n(/(?:firefox|iceweasel)[ \/](\d+(\.\d+)?)/i)
        },
        /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(e) && (f.firefoxos = t)) : /silk/i.test(e) ? f = {
            name: "Amazon Silk",
            silk: t,
            version: n(/silk\/(\d+(\.\d+)?)/i)
        }: s ? f = {
            name: "Android",
            version: o
        }: /phantom/i.test(e) ? f = {
            name: "PhantomJS",
            phantom: t,
            version: n(/phantomjs\/(\d+(\.\d+)?)/i)
        }: /blackberry|\bbb\d+/i.test(e) || /rim\stablet/i.test(e) ? f = {
            name: "BlackBerry",
            blackberry: t,
            version: o || n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
        }: /(web|hpw)os/i.test(e) ? (f = {
            name: "WebOS",
            webos: t,
            version: o || n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
        },
        /touchpad\//i.test(e) && (f.touchpad = t)) : /bada/i.test(e) ? f = {
            name: "Bada",
            bada: t,
            version: n(/dolfin\/(\d+(\.\d+)?)/i)
        }: /tizen/i.test(e) ? f = {
            name: "Tizen",
            tizen: t,
            version: n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || o
        }: /safari/i.test(e) ? f = {
            name: "Safari",
            safari: t,
            version: o
        }: f = {},
        /(apple)?webkit/i.test(e) ? (f.name = f.name || "Webkit", f.webkit = t, !f.version && o && (f.version = o)) : !f.opera && /gecko\//i.test(e) && (f.name = f.name || "Gecko", f.gecko = t, f.version = f.version || n(/gecko\/(\d+(\.\d+)?)/i)),
        s || f.silk ? f.android = t: r && (f[r] = t, f.ios = t);
        var l = "";
        r ? (l = n(/os (\d+([_\s]\d+)*) like mac os x/i), l = l.replace(/[_\s]/g, ".")) : s ? l = n(/android[ \/-](\d+(\.\d+)*)/i) : f.windowsphone ? l = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : f.webos ? l = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : f.blackberry ? l = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : f.bada ? l = n(/bada\/(\d+(\.\d+)*)/i) : f.tizen && (l = n(/tizen[\/\s](\d+(\.\d+)*)/i)),
        l && (f.osversion = l);
        var c = l.split(".")[0];
        if (u || r == "ipad" || s && (c == 3 || c == 4 && !a) || f.silk) f.tablet = t;
        else if (a || r == "iphone" || r == "ipod" || s || f.blackberry || f.webos || f.bada) f.mobile = t;
        return f.msie && f.version >= 10 || f.chrome && f.version >= 20 || f.firefox && f.version >= 20 || f.safari && f.version >= 6 || f.opera && f.version >= 10 || f.ios && f.osversion && f.osversion.split(".")[0] >= 6 || f.blackberry && f.version >= 10.1 ? f.a = t: f.msie && f.version < 10 || f.chrome && f.version < 20 || f.firefox && f.version < 20 || f.safari && f.version < 6 || f.opera && f.version < 10 || f.ios && f.osversion && f.osversion.split(".")[0] < 6 ? f.c = t: f.x = t,
        f
    }
    var t = !0,
    n = e(typeof navigator != "undefined" ? navigator.userAgent: "");
    return n._detect = e,
    n
});