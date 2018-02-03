!
function() {
    function e(e, t) {
        return (/string|function/.test(typeof t) ? u: o)(e, t)
    }
    function t(e, n) {
        return "string" != typeof e && (n = typeof e, "number" === n ? e += "": e = "function" === n ? t(e.call(e)) : ""),
        e
    }
    function n(e) {
        return c[e]
    }
    function r(e) {
        return t(e).replace(/&(?![\w#]+;)|[<>"']/g, n)
    }
    function i(e, t) {
        if (h(e)) for (var n = 0,
        r = e.length; r > n; n++) t.call(e, e[n], n, e);
        else for (n in e) t.call(e, e[n], n)
    }
    function s(e, t) {
        var n = /(\/)[^/] + \1\.\.\1 / ,
        r = ("./" + e).replace(/[^/] + $ / ,
        ""),
        i = r + t;
        for (i = i.replace(/\/\.\//g, "/"); i.match(n);) i = i.replace(n, "/");
        return i
    }
    function o(t, n) {
        var r = e.get(t) || a({
            filename: t,
            name: "Render Error",
            message: "Template not found"
        });
        return n ? r(n) : r
    }
    function u(e, t) {
        if ("string" == typeof t) {
            var n = t;
            t = function() {
                return new l(n)
            }
        }
        var r = f[e] = function(n) {
            try {
                return new t(n, e) + ""
            } catch(r) {
                return a(r)()
            }
        };
        return r.prototype = t.prototype = p,
        r.toString = function() {
            return t + ""
        },
        r
    }
    function a(e) {
        var t = "{Template Error}",
        n = e.stack || "";
        if (n) n = n.split("\n").slice(0, 2).join("\n");
        else for (var r in e) n += "<" + r + ">\n" + e[r] + "\n\n";
        return function() {
            return "object" == typeof console && console.error(t + "\n\n" + n),
            t
        }
    }
    var f = e.cache = {},
    l = this.String,
    c = {
        "<": "&#60;",
        ">": "&#62;",
        '"': "&#34;",
        "'": "&#39;",
        "&": "&#38;"
    },
    h = Array.isArray ||
    function(e) {
        return "[object Array]" === {}.toString.call(e)
    },
    p = e.utils = {
        $helpers: {},
        $include: function(e, t, n) {
            return e = s(n, e),
            o(e, t)
        },
        $string: t,
        $escape: r,
        $each: i
    },
    d = e.helpers = p.$helpers;
    e.get = function(e) {
        return f[e.replace(/^\.\//, "")]
    },
    e.helper = function(e, t) {
        d[e] = t
    },
    "function" == typeof define ? define([],
    function() {
        return e
    }) : "undefined" != typeof exports ? module.exports = e: this.template = e,
    e("account/login", '<div class="sign-wrap" id="sign_wrap"> <div class="top-tab"> <a class="tab-opt active" href="javascript:;">微信登录</a> <a class="tab-opt" href="javascript:;">账号登录</a> </div> <div class="tab-panels"> <div class="tab-panel weixin-panel" style="display:block;"></div> <div class="tab-panel form-panel"> <form class="login-form" id="login_form"> <div class="form"> <div class="inputline-wrap"> <div class="inputline"> <p class="input"><input class="control" id="sign_username" name="username" type="text" placeholder="手机号/邮箱"><i class="icon ico ico_user"></i></p> </div> <div class="inputline"> <p class="input"><input class="control" id="sign_pwd" name="pwd" type="password" placeholder="密码"><i class="icon ico ico_pwd"></i></p> </div> </div> <div class="inputline margin-bottom-20"> <p class="float-left"><label class="rem"><input class="rem_i" id="sign_remember" type="checkbox">&nbsp;记住我</label></p> <a class="float-right" href="http://3d.fuwo.com/account/reset_password/">忘记密码？</a> </div> <div class="btn-box"> <span class="btn btn-success" id="sign_submit">登录</span> </div> </div> </form> <div class="open-login f12"> <a class="qq J-Open" data-open="qq" href="javascript:;"><i class="icon share-icon-qq"></i>QQ</a> <a class="weibo J-Open" data-open="weibo" href="javascript:;"><i class="icon share-icon-blog"></i>微博</a> <a class="taobao J-Open" data-open="taobao" href="javascript:;"><i class="icon share-icon-taobao"></i>淘宝</a> <a class="float-right sign J-Open" data-open="sign" href="javascript:;">免费注册</a> </div> </div> </div> </div>'),
    e("backpopwin/acman_popup", '<div class="radio"> <label class="margin-right-20"> <input type="radio" name="manager" value="0">管理员 </label> <label class="margin-right-20"> <input type="radio" name="designer" value="1" >设计师 </label> </div>'),
    e("backpopwin/design_popup", '<form class="design-form common-form" id="design_op" novalidate="novalidate"> <fieldset> <section> <label for="name">用户名：</label> <input type="text" id="name" name="name" autocomplete="off"/> </section> <section> <div class="confirm-window"> <input type="submit" class="btn btn-success explain-confirm design-op" value="确认"/> <span class="btn btn-default explain-cancel">取消</span> </div> </section> </fieldset> </form>'),
    e("backpopwin/faman_popup", '<form class="stylin-form common-form" id="faman_op" novalidate="novalidate"> <fieldset> <section> <label for="name">名称：</label> <input type="text" id="name" name="name" autocomplete="off"/> </section> <section> <label for="order">序号：</label> <input type="text" id="order" name="order" autocomplete="off"/> </section> <section class="last"> <label for="pic">户型图：</label> <input id="uploadFile" type="text" name="pic" disabled="disabled"/> <div class="fileUpload btn btn-default"> <span>选择</span> <input type="file" class="upload" id="uploadBtn" /> </div> </section> <section> <div class="confirm-window"> <input type="submit" value="确认" class="btn btn-success explain-confirm"> <span class="btn btn-default explain-cancel">取消</span> </div> </section> </fieldset> </form>'),
    e("backpopwin/manage_popup", '<form class="manager-form common-form" id="manager_op" novalidate="novalidate"> <fieldset> <section> <label for="name">用户名：</label> <input type="text" id="name" name="name" autocomplete="off"/> </section> <section class="restyle"> <label for="order">密码：</label> <input type="password" id="password" name="password" autocomplete="off"/> </section> <section> <div class="confirm-window"> <input type="submit" value="确认" class="btn btn-success explain-confirm manage-op"> <span class="btn btn-default explain-cancel">取消</span> </div> </section> </fieldset> </form>'),
    e("backpopwin/mydesi_popup",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$escape),
        r = e.design_id,
        i = e.pano_type,
        s = t.$each,
        o = e.houses,
        u = (e.h, e.$index, e.previews),
        a = (e.p, "");
        return a += '<form class="my-form-design common-form" id="mydesi_op" novalidate="novalidate"> <fieldset> <input type="hidden" value="',
        a += n(r),
        a += '" name="design_id" id="design_id"/> <input type="hidden" value="',
        a += n(i),
        a += '" name="pano_type" id="pano_type"/> <section> <label for="order">选择楼盘：</label> <select name="houses"> <option value="">--请选择--</option> ',
        s(o,
        function(e) {
            a += ' <option value="',
            a += n(e.id),
            a += '" ',
            0 == o.length && (a += 'selected="selected"'),
            a += ">",
            a += n(e.name),
            a += "</option> "
        }),
        a += ' </select> </section> <section> <label for="order">选择户型：</label> <select name="houselayout"> <option value="">--请选择--</option> </select> </section> <section> <div class="choose-img"> <ul class="choose-tap"> ',
        s(u,
        function(e) {
            a += ' <li><img src="',
            a += n(e.thumbnail_url),
            a += '" id="',
            a += n(e.no),
            a += '"/> </li> '
        }),
        a += ' </ul> </div> </section> <section> <div class="confirm-window"> <span class="btn btn-success explain-confirm mydesi-op">确认</span> <span class="btn btn-default explain-cancel">取消</span> </div> </section> </fieldset> </form>',
        new l(a)
    }),
    e("common/account/login", '<form id="login"> <div class="form-list"> <input type="text" name="user" placeholder="邮箱/手机/用户名"/><i class="icon-head"></i> </div> <div class="form-list js_login_err"> <input type="password" name="password" placeholder="密码"/><i class="icon-unlock"></i> </div> <a class="float-right margin-top-10" href="/account/reset_password/" target="_blank">忘记密码？</a> <span class="btn btn-full btn-success margin-top-10" data-op="login">立即登录</span> <div> <a href="/account/register/" target="_blank" class="float-right icon-linker-small f14" style="padding-right: 0">免费注册</a> <a class="icon-linker-small padding-left-0 float-left js_open_login" data-open="qq" href="javascript:void(0);" target="_blank"><i class="share-qq-icon-16"></i>QQ</a> <a class="icon-linker-small float-left js_open_login" data-open="weibo" href="javascript:void(0);" target="_blank"><i class="share-wb-icon-16"></i>微博</a> <a class="icon-linker-small float-left js_open_login" data-open="taobao" href="javascript:void(0);" target="_blank"><i class="share-taobao-icon-16"></i>淘宝</a> </div> </form>'),
    e("common/city/select", '<div class="map-search"> <i>城市</i> <input type="text" id="js_search_style"> <span class="btn btn-success btn-middle" id="js_city_check_style">确定</span> <ul class="map-search-result" id="js_showResult_style"></ul> </div> <ul class="map-li-style"> <li class="item" data-cityid="0" data-cityname="全国"><span>全国</span></li> <li class="item" data-cityid="1211" data-cityname="北京"><span>北京</span></li> <li class="item" data-cityid="3511" data-cityname="上海"><span>上海</span></li> <li class="item" data-cityid="1311" data-cityname="重庆"><span>重庆</span></li> <li class="item" data-cityid="3811" data-cityname="天津"><span>天津</span></li> </ul> <ul class="map-li-style" id="js_tabCons_style"> </ul> '),
    e("common/icheck_radio",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$escape),
        r = e.type,
        i = e.id,
        s = e.name,
        o = t.$string,
        u = e.content,
        a = "";
        return a += '<input type="',
        a += n(r),
        a += '" id="',
        a += n(i),
        a += '" name="',
        a += n(s),
        a += '"> <label for="',
        a += n(i),
        a += '">',
        a += o(u),
        a += "</label>",
        new l(a)
    }),
    e("common/icheck_radio_list",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$each),
        r = e.list,
        i = (e.value, e.$index, t.$escape),
        s = "";
        return n(r,
        function(e) {
            s += ' <input type="',
            s += i(e.type),
            s += '" id="',
            s += i(e.id),
            s += '" name="',
            s += i(e.name),
            s += '" value="',
            s += i(e.value),
            s += '"> <label for="',
            s += i(e.id),
            s += '">',
            s += i(e.content),
            s += "</label> "
        }),
        new l(s)
    }),
    e("common/immediate_application/application", '<div class="masking"> <div class="masking-bg"></div> <div class="jiameng"> <h3>品牌馆加盟</h3> <span class="hint">*请先登录账号</span> <div class="close"><img src="/static/iyun/images/common/icon/clock.png"></div> <form id="J_immediate_application"> <div class="login"> <dl class="input-line"> <dd class="bottom-20"> <img src="/static/iyun/images/common/icon/icon-brand.png"> <select class="J-type"> <option value="0">品牌商</option> <option value="1">经销商</option> <option value="2">装修公司</option> <option value="3">其他</option> </select> </dd> </dl> <dl class="input-line"> <dd> <img src="/static/iyun/images/common/icon/icon-adress.png"> <input type="text" id="cityChoice" placeholder="请选择城市" readonly> </dd> </dl> <dl class="input-line"> <dd> <img src="/static/iyun/images/common/icon/icon-user.png"> <input class="J-name" type="text" name="username" placeholder="姓名"> </dd> </dl> <dl class="input-line"> <dd> <img src="/static/iyun/images/common/icon/icon-moble.png"> <input class="name-mobile J-tel" id="iphone" name="tel" type="text" placeholder="电话" maxlength="11"> </dd> </dl> <dl class="input-line"> <dd> <img src="/static/iyun/images/common/icon/icon-id.png"> <input class="code J-verifycode-input" type="text" maxlength="6" name="verifycode" placeholder="请输入验证码"> <div class="time code-for J-verifycode-get">获取验证码</div> </dd> </dl> </div> <div class="msg"></div> <div class="enter ring-up J-order-view"> <span>提交</span> <div class="border"></div> <div class="border"></div> <div class="border"></div> <div class="border"></div> </div> <p class="">我们承诺：为了您的利益以及我们的口碑，您的隐私将被严格保密。</p> </form> </div> </div> '),
    e("common/none_content",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$string),
        r = e.content,
        i = "";
        return i += '<div class="tabs-list none-message"> <i class="icon icon-sad"></i> <div class="none-message-text"> ',
        i += n(r),
        i += " </div> </div>",
        new l(i)
    }),
    e("common/popup/confirm",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$escape),
        r = e.height,
        i = e.width,
        s = e.marginTop,
        o = e.marginLeft,
        u = e.title,
        a = t.$string,
        f = e.content,
        c = "";
        return c += '<div id="confirm" class="screen-bg"></div> <div class="pop confirm" style="height: ',
        c += n(r),
        c += "; width: ",
        c += n(i),
        c += "; margin-top: ",
        c += n(s),
        c += "; margin-left: ",
        c += n(o),
        c += ';"> <span class="pop-close icon-cross" data-op="close"></span> <div class="pop-title">',
        c += n(u),
        c += '</div> <div class="pop-content"> ',
        c += a(f),
        c += ' </div> <div class="pop-bottom"> <span class="btn btn-middle btn-success" data-op="confirm">确认</span> <span class="btn btn-middle btn-disabled" data-op="cancel">取消</span> </div> </div>',
        new l(c)
    }),
    e("common/popup/dialog",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$escape),
        r = e.style,
        i = e.title,
        s = t.$string,
        o = e.content,
        u = "";
        return u += '<div class="screen-bg"></div> <div class="pop" style="width: ',
        u += n(r.width),
        u += "; margin-top: ",
        u += n(r.marginTop),
        u += "; margin-left: ",
        u += n(r.marginLeft),
        u += ';"> <span class="pop-close icon-cross"></span> <div class="pop-title">',
        u += n(i),
        u += '</div> <div class="pop-content"> ',
        u += s(o),
        u += " </div> </div>",
        new l(u)
    }),
    e("common/popup/float_window",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, e.istriangle),
        r = e.direction,
        i = t.$escape,
        s = e.classname,
        o = e.left,
        u = e.top,
        a = t.$string,
        f = e.content,
        c = "";
        return n ? (c += " ", r ? (c += ' <div class="float-window triangle-left ', c += i(s), c += '" style="left:', c += i(o), c += ";top:", c += i(u), c += '"> ') : (c += ' <div class="float-window triangle-right ', c += i(s), c += '" style="left:', c += i(o), c += ";top:", c += i(u), c += '"> '), c += " ") : (c += ' <div class="float-window ', c += i(s), c += '" style="left:', c += i(o), c += ";top:", c += i(u), c += '"> '),
        c += " ",
        c += a(f),
        c += " </div>",
        new l(c)
    }),
    e("common/popup/message",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$escape),
        r = e.classname,
        i = e.top,
        s = e.message,
        o = "";
        return o += '<div id="message" class="message ',
        o += n(r),
        o += '" style="top:',
        o += n(i),
        o += '"> <span class="message-close icon-cross"></span> <div class="message-content">',
        o += n(s),
        o += "</div> </div>",
        new l(o)
    }),
    e("common/popup/pop_box-n",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$escape),
        r = e.boxClass,
        i = t.$string,
        s = e.content,
        o = "";
        return o += ' <div class="box-bg"></div> <div class="pop-new ',
        o += n(r),
        o += '"> <div class="pop-box"> <span class="btn-close"></span> <div class="pop-content">',
        o += i(s),
        o += "</div> </div> </div>",
        new l(o)
    }),
    e("common/popup/pop_box",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$escape),
        r = e.boxClass,
        i = t.$string,
        s = e.content,
        o = "";
        return o += '<div class="pop-new ',
        o += n(r),
        o += '"> <div class="box-bg"></div> <div class="pop-box"> <span class="btn-close"></span> <div class="pop-content">',
        o += i(s),
        o += "</div> </div> </div>",
        new l(o)
    }),
    e("common/popup/tab",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$escape),
        r = e.title1,
        i = e.title2,
        s = "";
        return s += '<ul class="nav-tabs"> <li role="existUser" class="active" data-herf="#exist_user">',
        s += n(r),
        s += '</li> <li role="addUser" data-href="#add_user">',
        s += n(i),
        s += '</li> </ul> <div class="tab-content"> <div id="exist_user" class="tab-pane active"></div> <div id="add_user" class="tab-pane"></div> </div>',
        new l(s)
    }),
    e("common/search_result",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, e.houselayout),
        r = t.$escape,
        i = e.title,
        s = t.$each,
        o = (e.$value, e.$index, t.$string),
        u = e.topic,
        a = e.photo,
        f = "";
        return f += "<div> ",
        n && (f += ' <div> <p class="type">', f += r(i), f += '</p> <ul class="result"> ', s(n,
        function(e) {
            f += ' <li class="article-li ',
            f += r(e.more),
            f += '"><a href="',
            f += r(e.href),
            f += '" target="_blank" >',
            f += o(e.title),
            f += "</a></li> "
        }), f += " </ul> </div> "),
        f += " ",
        u && (f += ' <div> <p class="type">帖子</p> <ul class="result"> ', s(u,
        function(e) {
            f += ' <li class="article-li ',
            f += r(e.more),
            f += '"><a href="',
            f += r(e.href),
            f += '" target="_blank" >',
            f += o(e.title),
            f += "</a></li> "
        }), f += " </ul> </div> "),
        f += " ",
        a && (f += ' <div class="s-r-photo"> <p class="type">效果图</p> <ul class="result"> ', s(a,
        function(e) {
            f += " ",
            e.src ? (f += ' <li class="photo-li"><a href="', f += r(e.href), f += '" target="_blank" > <img src="', f += r(e.src), f += '" alt="', f += o(e.title), f += '" title="', f += o(e.title), f += '"/></a></li> ') : (f += ' <li class="photo-more ', f += r(e.more), f += '"><a href="', f += r(e.href), f += '" target="_blank" >', f += o(e.title), f += "</a></li> "),
            f += " "
        }), f += " </ul> </div> "),
        f += " </div>",
        new l(f)
    }),
    e("common/submit_result",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$escape),
        r = e.title,
        i = e.content,
        s = t.$each,
        o = e.btnList,
        u = (e.value, e.$index, e.skip),
        a = "";
        return a += '<div class="row success-success"> <div class="col-md-3"> </div> <div class="col-md-1 success-icon"> <i class="icon-circle-check"></i> </div> <div class="col-md-5 success-item"> <div class="success-title"> ',
        a += n(r),
        a += ' </div> <p class="success-content"> ',
        a += n(i),
        a += ' </p> <div class="success-go"> ',
        s(o,
        function(e) {
            a += ' <a class="btn btn-middle btn-success" href="',
            a += n(e.url),
            a += '">',
            a += n(e.title),
            a += "</a> "
        }),
        a += ' </div> <span class="success-time"><em id="count-down">5</em>秒后转入',
        a += n(u.title),
        a += '</span> </div> <div class="col-md-3"> </div> </div> ',
        new l(a)
    }),
    e("common/verification", '<div class="verification"> <img src="" id="verifycode"/><span class="refresh" id="js-refresh-code">换一下</span> <br> <input type="text" id="verification" name="verification" max-length="4"> <span class="btn btn-small btn-success js-confirm">确认</span> </div>'),
    e("owndesign/picture",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, e.haspic),
        r = t.$each,
        i = e.picList,
        s = (e.$value, e.$index, t.$escape),
        o = e.editdesignlink,
        u = "";
        return n ? (u += ' <div id="js-origin-wrap" class="pic-origin-wrap"> <div id="js-origin-inner" data-id=""> <img id="js-origin-img" src="/static/iyun/images/new/pyun/test_6.jpg" alt=""/> </div> <span class="prev-wrap " href="javascript:void(0)"><i class="prev icon share-prev-s"></i></span> <span class="next-wrap " href="javascript:void(0)"><i class="next icon share-next-s"></i></span> </div> <div id="js-pic-view" class="pic-view"> <div class="container-fluid"> <div class="picScroll-left"> <div class="hd"> <a class="prev btn-wrap" href="javascript:void(0)"><i class="icon share-prev-white"></i></a> <a class="next btn-wrap" href="javascript:void(0)"><i class="icon share-next-white"></i></a> </div> <div class="bd"> <ul id="js-thumbnail-list"> ', r(i,
        function(e, t) {
            u += ' <li data-no="',
            u += s(t),
            u += '" data-origin="',
            u += s(e.origin),
            u += '" data-url="',
            u += s(e.url),
            u += '"><a href="javascript:;"><img onerror="nofindSmall()" _src="',
            u += s(e.thumbnail),
            u += '" src=""></a></li> '
        }), u += " </ul> </div> </div> </div> </div> ") : (u += ' <div class="pic-origin-wrap empty"> <div> <img src="/static/iyun/images/new/common/placeholder/640x480.png" alt=""/> <div class="empty-link"> <p>您目前还没有效果图，点击 <a target="_blank" href="', u += s(o), u += '">去渲染</a>。</p> <p>不会渲染？ <a target="_blank" href="http://www.fuwo.com/topic/94/">观看教程</a>。</p> </div> </div> </div> <div class="pic-view empty"></div> '),
        new l(u)
    }),
    e("owndesign/picture_view",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, e.haspic),
        r = t.$each,
        i = e.picList,
        s = (e.$value, e.$index, t.$escape),
        o = e.editdesignlink,
        u = "";
        return n ? (u += ' <div id="js-origin-wrap" class="pic-origin-wrap"> <div id="js-origin-inner" data-id=""> <a class="pic-origin-inner" href="" target="_blank" ><i class="icon share-look-origin"></i><img id="js-origin-img" src="/static/iyun/images/new/pyun/test_6.jpg" alt=""/></a> </div> <span class="prev-wrap" href="javascript:void(0)"><i class="prev icon share-prev-s"></i></span> <span class="next-wrap" href="javascript:void(0)"><i class="next icon share-next-s"></i></span> </div> <div id="js-pic-view" class="pic-view"> <div class="container-fluid"> <div class="picScroll-left"> <div class="hd"> <a class="prev btn-wrap" href="javascript:void(0)"><i class="icon share-prev-white"></i></a> <a class="next btn-wrap" href="javascript:void(0)"><i class="icon share-next-white"></i></a> </div> <div class="bd"> <ul id="js-thumbnail-list"> ', r(i,
        function(e, t) {
            u += ' <li data-no="',
            u += s(t),
            u += '" data-origin="',
            u += s(e.origin),
            u += '" data-url="',
            u += s(e.url),
            u += '"><a href="javascript:;"><img onerror="nofindSmall()" _src="',
            u += s(e.thumbnail),
            u += '" src=""></a></li> '
        }), u += " </ul> </div> </div> </div> </div> ") : (u += ' <div class="pic-origin-wrap empty"> <div> <img src="/static/iyun/images/new/common/placeholder/640x480.png" alt=""/> <div class="empty-link"> <p>您目前还没有效果图，点击 <a target="_blank" href="', u += s(o), u += '">去渲染</a>。</p> <p>不会渲染？ <a target="_blank" href="http://www.fuwo.com/topic/94/">观看教程</a>。</p> </div> </div> </div> <div class="pic-view empty"></div> '),
        new l(u)
    }),
    e("owndesign/popup", '<dl class="content"> <dt class="float-left"> <img src="../../../../static/iyun/images/new/common/huxing.png"> <a class="btn download">立即下载</a> <a class="preview">生成预览</a> </dt> <dd> <div class="name"><label>户型名称：</label>&nbsp;&nbsp;上海市龙柏五村</div> <div class="download-type"> <label>下载类型：</label> <input type="radio" class="default js-default" name="type" value="default" checked><em>默认风格</em> <input type="radio" class="cad js-cad" name="type" value="cad"><em>CAD格式文件</em> <ul> <li> <label>单位：</label> <input type="radio" class="" name="unit" value="" checked><em>厘米</em> <input type="radio" class="" name="unit" value=""><em>米</em> </li> <li> <label>墙标：</label> <input type="radio" class="" name="wall" value="" checked><em>墙中线</em> <input type="radio" class="" name="wall" value=""><em>内墙</em> </li> <li> <label>标尺：</label> <input type="radio" class="" name="staff " value="" checked><em>默认风格</em> <input type="radio" class="" name="staff " value=""><em>CAD风格</em> <input type="radio" class="" name="staff " value=""><em>无</em> </li> <li> <label>房间：</label> <input type="checkbox" class="" name="room" value="" checked><em>显示房间名称</em> <input type="checkbox" class="" name="room" value=""><em>显示家具</em> </li> <li> <label>面积：</label> <input type="radio" class="" name="area" value="" checked><em>显示净面积</em> <input type="radio" class="" name="area" value=""><em>显示套内面积</em> </li> <li> <label>备注：</label> <input type="radio" class="" name="mark" value="" checked><em>显示备注</em> <input type="radio" class="" name="mark" value=""><em>隐藏备注</em> </li> <li> <label>尺寸：</label> <select> <option>精美图</option> <option>A4横屏</option> <option>A4竖屏</option> <option>A3横屏</option> <option>A3竖屏</option> <option>自定义</option> </select> <input type="text" value="1123" class="width">&nbsp;&nbsp;高&nbsp;&nbsp;x&nbsp;&nbsp;<input type="text" value="794" class="height">&nbsp;&nbsp;宽 </li> </ul> </div> </dd> </dl>'),
    e("tms/aijiajia/banner/banner_detail",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$escape),
        r = e.title,
        i = e.activity_url,
        s = e.description,
        o = e.id,
        u = "";
        return u += '<div class="pic-detail"> <div class="from-info"> <label> 标 题</label><input type="text" name="title" class="title" value="',
        u += n(r),
        u += '"> </div> <div class="from-info"> <label>活动链接</label><input type="text" name="url" class="url" value="',
        u += n(i),
        u += '"> </div> <div class="from-info"> <label>描述(选填)</label><textarea name="description" class="description" id="" cols="30" rows="5">',
        u += n(s),
        u += '</textarea> </div> <div class="from-info"> <span class="btn btn-small btn-success js-save" style="margin-left: 100px">保存</span> <span class="btn btn-small btn-success js-cancel" >取消</span> </div> <input type="hidden" id="banner_id" value="',
        u += n(o),
        u += '"> </div>',
        new l(u)
    }),
    e("tms/aijiajia/bbs/bbs", '  <div class="forum-container" style="border:1px solid red"> <div class="forum-left"> <div class="comment-add-wrap">  <form action="" id="post_form"> <dl class="bbs-publish"> <dt>标题</dt> <dd><input class="J-Title" type="text" name="title" placeholder="给你的帖子起个响亮的标题吧"></dd> </dl> <dl class="bbs-publish"> <dt>内容</dt> <dd> <textarea class="bbs-contents" name="content" style="display: none;"></textarea> <div class="comment-check-login J-Check-Login"></div> </dd> </dl> <dl class="bbs-publish"> <dt></dt> <dd> <div class="comment-add-op"> <span class="J-Publish" data-id="" type="submit">立即发表</span> <div class="fenzhan"> <i>所在分站</i> <select> <option>上海</option> </select> </div> <label class="J-Draft-Clear"><i class="share-icon-delete-default"></i> 清除草稿</label> </div> </dd> </dl> <input type="hidden" id="attachment"> </form> </div> </div>  </div>  '),
    e("tms/aijiajia/city/add", '<form class="add-city"> <div class="form-group"> <label for="province">省份：</label> <select name="province" class="province"> <option value="">--请选择--</option> </select> </div> <div class="form-group"> <label for="city">城市：</label> <select name="city" class="city"> <option value="">--请选择--</option> </select> </div> <span class="btn save J-Sure-Add" >确认</span> <span class="btn cancel J-Cancel" >取消</span> </form>'),
    e("tms/aijiajia/houselayout/add",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$each),
        r = e.house_type,
        i = (e.$index, t.$escape),
        s = e.sales_status,
        o = e.decorate,
        u = e.orientation,
        a = e.houses,
        f = (e.house, "");
        return f += ' <div class="addwrapper"> <div class="addlabel"> <p style="width: 80px; display: inline-block;">名称:</p> <input name="name" class="name" placeholder="比如A户型" type="text"> <table> <tr> <td><p>类型:</p></td> <td> <select id="selhouse" class="sel-house" > <option data-houseid="">--请选择-</option> ',
        n(r,
        function(e) {
            f += ' <option data-houseid="',
            f += i(e.id),
            f += '">',
            f += i(e.name),
            f += "</option> "
        }),
        f += ' </select> </td> <td class="salestat"><p>销售状态:</p></td> <td> <select id="selsale" class="sel-sale" > <option data-saleid="">--请选择-</option> ',
        n(s,
        function(e) {
            f += ' <option data-saleid="',
            f += i(e.id),
            f += '">',
            f += i(e.name),
            f += "</option> "
        }),
        f += ' </select> </td> </tr> <tr> <td><p>装修情况:</p></td> <td> <select id="repairsit" class="sel-repair"> <option data-repairid="">--请选择-</option> ',
        n(o,
        function(e) {
            f += ' <option data-repairid="',
            f += i(e.id),
            f += '">',
            f += i(e.name),
            f += "</option> "
        }),
        f += ' </select> </td> <td class="salestat"><p>朝向:</p></td> <td> <select id="derection" class="sel-derect"> <option data-derectid="">--请选择-</option> ',
        n(u,
        function(e) {
            f += ' <option data-derectid="',
            f += i(e.id),
            f += '">',
            f += i(e.name),
            f += "</option> "
        }),
        f += ' </select> </td> </tr> <tr> <td class="house"><p>楼盘选择:</p></td> <td> <select id="house" class="sel-h" > <option data-hid="">--请选择-</option> ',
        n(a,
        function(e) {
            f += ' <option data-hid="',
            f += i(e.id),
            f += '">',
            f += i(e.name),
            f += "</option> "
        }),
        f += ' </select> </td> <td class="houselayout"><p>户型选择:</p></td> <td> <select id="houselayout" class="sel-houselayout" > <option data-houselayoutid="">--请选择-</option> </select> </td> </tr> <tr> <td ><p>户型总价:</p></td> <td class="wanyuan"><input name="leaprice" class="houseprice" type="text" > <em>万元/套</em></td> <td class="lodging"><p>入住率:</p></td> <td><input name="lodging_ratio" class="lodging_ratio" type="text" ></td> </tr> <tr class="addsub"> <td><p>标签:</p></td> <td colspan="3"><span data-id="0">南北通透</span><span data-id="1">双卫生间</span><span data-id="2">采光好</span><span data-id="3">大房间</span></td> </tr> </table> </div> <div class="conform-cencel"> <span class="btn save J-SURE-ADD" id="thisspan">确认</span> <span class="btn cancel J-Cancel" id="thisspan">取消</span> </div> </div> ',
        new l(f)
    }),
    e("tms/aijiajia/houselayout/edit",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$escape),
        r = e.name,
        i = t.$each,
        s = e.house_type,
        o = (e.$index, e.house_type_id),
        u = e.sales_status,
        a = e.sales_status_id,
        f = e.decorate,
        c = e.decorate_id,
        h = e.orientation,
        p = e.orientation_id,
        d = e.houses,
        v = (e.house, e.houses_id),
        m = (e.value, e.h, e.houselayout_id),
        g = e.total_prices,
        y = e.lodging_ratio_id,
        b = e.labels,
        w = (e.label, e.id),
        E = "";
        return E += ' <div class="addwrapper"> <div class="addlabel"> <p style="width: 80px; display: inline-block;">名称:</p> <input name="name" class="name" type="text" placeholder="比如A户型" value="',
        E += n(r),
        E += '"> <table> <tr> <td><p>类型:</p></td> <td> <select id="selhouse" class="sel-house" > ',
        i(s,
        function(e) {
            E += ' <option data-houseid="',
            E += n(e.id),
            E += '" ',
            e.id == o && (E += ' selected="selected"'),
            E += ">",
            E += n(e.name),
            E += "</option> "
        }),
        E += ' </select> </td> <td class="salestat"><p>销售状态:</p></td> <td> <select id="selsale" class="sel-sale" > ',
        i(u,
        function(e) {
            E += ' <option data-saleid="',
            E += n(e.id),
            E += '" ',
            e.id == a && (E += ' selected="selected"'),
            E += ">",
            E += n(e.name),
            E += "</option> "
        }),
        E += ' </select> </td> </tr> <tr> <td><p>装修情况:</p></td> <td> <select id="repairsit" class="sel-repair"> ',
        i(f,
        function(e) {
            E += ' <option data-repairid="',
            E += n(e.id),
            E += '" ',
            e.id == c && (E += ' selected="selected"'),
            E += ">",
            E += n(e.name),
            E += "</option> "
        }),
        E += ' </select> </td> <td class="salestat"><p>朝向:</p></td> <td> <select id="derection" class="sel-derect"> ',
        i(h,
        function(e) {
            E += ' <option data-derectid="',
            E += n(e.id),
            E += '" ',
            e.id == p && (E += ' selected="selected"'),
            E += ">",
            E += n(e.name),
            E += "</option> "
        }),
        E += ' </select> </td> </tr> <tr> <td class="house"><p>楼盘:</p></td> <td> <select id="house" class="sel-h" disabled="disabled" style="background-color: #ddd"> ',
        i(d,
        function(e) {
            E += ' <option data-hid="',
            E += n(e.id),
            E += '" ',
            e.id == v && (E += ' selected="selected"'),
            E += " >",
            E += n(e.name),
            E += "</option> "
        }),
        E += ' </select> </td> <td class="houselayout"><p>户型:</p></td> <td> <select id="houselayout" class="sel-houselayout" disabled="disabled" style="background-color: #ddd" > ',
        i(d,
        function(e) {
            E += " ",
            e.id == v && (E += " ", i(e.houselayouts,
            function(e) {
                E += ' <option data-houselayoutid="',
                E += n(e.id),
                E += '" ',
                e.id == m && (E += ' selected="selected"'),
                E += " >",
                E += n(e.name),
                E += "</option> "
            }), E += " "),
            E += " "
        }),
        E += ' </select> </td> </tr> <tr> <td ><p>户型总价:</p></td> <td class="wanyuan"><input name="leaprice" class="houseprice" type="text" value="',
        E += n(g),
        E += '"> <em>万元/套</em></td> <td class="lodging">入住率:</td> <td><input name="lodging_ratio" class="lodging_ratio" type="text" value="',
        E += n(y),
        E += '"></td> </tr> <tr class="addsub"> <td><p>标签:</p></td> <td colspan="3"> ',
        i(b,
        function(e) {
            E += "<span ",
            e.is_active && (E += "class=addborder "),
            E += 'data-id="',
            E += n(e.id),
            E += '">',
            E += n(e.name),
            E += "</span>"
        }),
        E += ' </td> </tr> </table> </div> <div class="conform-cencel"> <span class="btn save J-Update" id="thisspan">确认</span> <span class="btn cancel J-Cancel" id="thisspan">取消</span> </div> <input type="hidden" class="houselayoutext-id" value="',
        E += n(w),
        E += '">  </div> ',
        new l(E)
    }),
    e("tms/aijiajia/housename/housename",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$each),
        r = e.house,
        i = (e.$index, t.$escape),
        s = "";
        return s += '<div class="housename"> ',
        n(r,
        function(e) {
            s += ' <div class="house"><label data-id="',
            s += i(e.id),
            s += '">',
            s += i(e.name1),
            s += "</label><label>",
            s += i(e.name2),
            s += "</label></div> "
        }),
        s += " </div>",
        new l(s)
    }),
    e("tms/aijiajia/houses/houselayout_add",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$each),
        r = e.house_type,
        i = (e.$index, t.$escape),
        s = e.sales_status,
        o = e.decorate,
        u = e.orientation,
        a = "";
        return a += ' <div class="addwrapper"> <div class="addlabel"> <p style="width: 80px; display: inline-block;">名称:</p> <input name="name" class="name" placeholder="比如A户型" type="text" style="width: 148px;"> <p style="width: 107px;text-align: right; display: inline-block;">面积:</p> <input name="area" class="area" placeholder="" type="text" style="width:148px;"> <table> <tr> <td><p>类型:</p></td> <td> <select id="selhouse" class="sel-house" > <option data-houseid="">--请选择-</option> ',
        n(r,
        function(e) {
            a += ' <option data-houseid="',
            a += i(e.id),
            a += '">',
            a += i(e.name),
            a += "</option> "
        }),
        a += ' </select> </td> <td class="salestat"><p>销售状态:</p></td> <td> <select id="selsale" class="sel-sale" > <option data-saleid="">--请选择-</option> ',
        n(s,
        function(e) {
            a += ' <option data-saleid="',
            a += i(e.id),
            a += '">',
            a += i(e.name),
            a += "</option> "
        }),
        a += ' </select> </td> </tr> <tr> <td><p>装修情况:</p></td> <td> <select id="repairsit" class="sel-repair"> <option data-repairid="">--请选择-</option> ',
        n(o,
        function(e) {
            a += ' <option data-repairid="',
            a += i(e.id),
            a += '">',
            a += i(e.name),
            a += "</option> "
        }),
        a += ' </select> </td> <td class="salestat"><p>朝向:</p></td> <td> <select id="derection" class="sel-derect"> <option data-derectid="">--请选择-</option> ',
        n(u,
        function(e) {
            a += ' <option data-derectid="',
            a += i(e.id),
            a += '">',
            a += i(e.name),
            a += "</option> "
        }),
        a += ' </select> </td> </tr> <tr> <td ><p>户型总价:</p></td> <td class="wanyuan"><input name="leaprice" class="houseprice" type="text" > <em>万元/套</em></td> <td class="lodging"><p>入住率:</p></td> <td><input name="lodging_ratio" class="lodging_ratio" type="text" ></td> </tr> <tr class="addsub"> <td><p>标签:</p></td> <td colspan="3"><span data-id="0">南北通透</span><span data-id="1">双卫生间</span><span data-id="2">采光好</span><span data-id="3">大房间</span></td> </tr> </table> </div> <div class="conform-cencel"> <span class="btn save J-SURE-ADD" id="thisspan">确认</span> <span class="btn cancel J-Cancel" id="thisspan">取消</span> </div> </div> ',
        new l(a)
    }),
    e("tms/aijiajia/houses/houselayout_edit",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$escape),
        r = e.name,
        i = e.area,
        s = t.$each,
        o = e.house_type,
        u = (e.$index, e.house_type_id),
        a = e.sales_status,
        f = e.sales_status_id,
        c = e.decorate,
        h = e.decorate_id,
        p = e.orientation,
        d = e.orientation_id,
        v = e.total_prices,
        m = e.lodging_ratio_id,
        g = e.labels,
        y = (e.label, e.id),
        b = "";
        return b += ' <div class="addwrapper"> <div class="addlabel"> <p style="width: 80px; display: inline-block;">名称:</p> <input name="name" class="name" type="text" placeholder="比如A户型" style="width: 148px;" value="',
        b += n(r),
        b += '"> <p style="width: 107px;text-align: right; display: inline-block;">面积:</p> <input name="area" class="area" placeholder="" type="text" style="width:148px;" value="',
        b += n(i),
        b += '"> <table> <tr> <td><p>类型:</p></td> <td> <select id="selhouse" class="sel-house" > ',
        s(o,
        function(e) {
            b += ' <option data-houseid="',
            b += n(e.id),
            b += '" ',
            e.id == u && (b += ' selected="selected"'),
            b += ">",
            b += n(e.name),
            b += "</option> "
        }),
        b += ' </select> </td> <td class="salestat"><p>销售状态:</p></td> <td> <select id="selsale" class="sel-sale" > ',
        s(a,
        function(e) {
            b += ' <option data-saleid="',
            b += n(e.id),
            b += '" ',
            e.id == f && (b += ' selected="selected"'),
            b += ">",
            b += n(e.name),
            b += "</option> "
        }),
        b += ' </select> </td> </tr> <tr> <td><p>装修情况:</p></td> <td> <select id="repairsit" class="sel-repair"> ',
        s(c,
        function(e) {
            b += ' <option data-repairid="',
            b += n(e.id),
            b += '" ',
            e.id == h && (b += ' selected="selected"'),
            b += ">",
            b += n(e.name),
            b += "</option> "
        }),
        b += ' </select> </td> <td class="salestat"><p>朝向:</p></td> <td> <select id="derection" class="sel-derect"> ',
        s(p,
        function(e) {
            b += ' <option data-derectid="',
            b += n(e.id),
            b += '" ',
            e.id == d && (b += ' selected="selected"'),
            b += ">",
            b += n(e.name),
            b += "</option> "
        }),
        b += ' </select> </td> </tr> <tr> <td ><p>户型总价:</p></td> <td class="wanyuan"><input name="leaprice" class="houseprice" type="text" value="',
        b += n(v),
        b += '"> <em>万元/套</em></td> <td class="lodging">入住率:</td> <td><input name="lodging_ratio" class="lodging_ratio" type="text" value="',
        b += n(m),
        b += '"></td> </tr> <tr class="addsub"> <td><p>标签:</p></td> <td colspan="3"> ',
        s(g,
        function(e) {
            b += "<span ",
            e.is_active && (b += "class=addborder "),
            b += 'data-id="',
            b += n(e.id),
            b += '">',
            b += n(e.name),
            b += "</span>"
        }),
        b += ' </td> </tr> </table> </div> <div class="conform-cencel"> <span class="btn save J-Update" id="thisspan">确认</span> <span class="btn cancel J-Cancel" id="thisspan">取消</span> </div> <input type="hidden" class="houselayoutext-id" value="',
        b += n(y),
        b += '"> </div> ',
        new l(b)
    }),
    e("tms/aijiajia/message/add", '<form class="add-houselayout"> <div class="form-group"> <label for="title">标题：</label> <input type="text" class="title" value=""> </div> <div class="form-group"> <label>预览图：</label> <input type="text" name="picname" class="pic-name" disabled="disabled"> <input type="file" name="file" id="file" class="J-Upload pic-upload" accept="image/*"> </div> <div class="form-group"> <label for="content" style="vertical-align: top;">内容：</label> <textarea rows="5" cols="30" class="content"></textarea> </div> <span class="btn save J-Update">确认</span> <span class="btn cancel J-Cancel">取消</span> </form>'),
    e("tms/aijiajia/message/view",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$escape),
        r = e.title,
        i = e.content,
        s = "";
        return s += '<form class="add-houselayout"> <div class="form-group"> <label for="title">标题：</label> <input type="text" class="title" readonly="readonly" value="',
        s += n(r),
        s += '"> </div> <div class="form-group"> <label for="content" style="vertical-align: top;">内容：</label> <textarea rows="5" cols="30" readonly="readonly" class="content">',
        s += n(i),
        s += '</textarea> </div> <span class="btn cancel J-Cancel">取消</span> </form>',
        new l(s)
    }),
    e("tms/aijiajia/newest_houses/add",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$escape),
        r = e.id,
        i = "";
        return i += '<form class="add-vr"> <div class="form-group"> <label>预览图：</label> <input type="hidden" name="id" id="id" value=',
        i += n(r),
        i += '> <input type="text" name="picname" class="pic-name" disabled="disabled"> <input type="file" name="file" id="file" class="J-Upload pic-upload" style="width: 25%;" accept="image/*"> </div> <span class="btn save J-Sure-Add" style="background: green;margin: 10px 10px 10px 75px;">确认</span> <span class="btn cancel J-Cancel" style="background: green;margin: 10px;">取消</span> </form>',
        new l(i)
    }),
    e("tms/aijiajia/partner/customer/addcustomer", '<form class="" id="add_user" > <div class="customer-layout"> <div class="form-group"> <label>姓名：</label> <input type="text" class="custname"> </div> <div class="form-group"> <label>电话：</label> <input type="text" class="custel" value="" placeholder="手机号"> </div> <div class="form-group" id="form-special"> <label class="" >有效期</label> <input type="text" class="form-control laydate-icon" readonly="readonly" onclick="laydate()" name="start" id="start"/>  <label class="control-label"></label> </div> <div class="form-group"> <label>所在城市：</label>  <select style="width: 130px;text-align: center" id="selProvince" class="province" name="adress"> <option value="">--省份--</option> </select> <select style="width: 130px;text-align: center" id="selCity" class="city" name="adress"> <option value="">--城市--</option> </select> </div> <div class="form-group"> <label>用户名：</label> <input type="text" class="custoldname" placeholder="请输入邮箱"> </div> <div class="form-group"> <label>密码：</label> <input type="password" class="custpassword"> </div> <div class="conform-cencel"> <span class="btn save J-Update" id="thisspan">确认</span> <span class="btn cancel J-Cancel" id="thisspan">取消</span> </div> </div> </form>'),
    e("tms/aijiajia/partner/customer/oldcustomer", '<form class="add-house" id="exist_user"> <div class="customer-layout"> <div class="form-group"> <label>姓名：</label> <input type="text" class="custname1"> </div> <div class="form-group"> <label>电话：</label> <input type="text" class="custel1" value="" placeholder="手机"> </div> <div class="form-group" id="form-special"> <label class="" >有效期</label> <input type="text" class="form-control laydate-icon" readonly="readonly" onclick="laydate()" name="start" id="start"/> <label class="control-label"></label> </div> <div class="form-group"> <label>所在城市：</label>  <select style="width: 130px;text-align: center" id="sel-province" class="sel-province" name="adress"> <option value="">--省份--</option> </select> <select style="width: 130px;text-align: center" id="sel-city" class="sel-city" name="adress"> <option value="">--城市--</option> </select> </div> <div class="form-group"> <label>用户名：</label> <input type="text" class="custoldname1" placeholder="请输入邮箱"> </div> <div class="conform-cencel"> <span class="btn save J-Update1" id="thisspan">确认</span> <span class="btn cancel J-Cancel" id="thisspan">取消</span> </div> </div> </form>'),
    e("tms/aijiajia/partner/customer/tabchange",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$escape),
        r = e.title1,
        i = e.title2,
        s = "";
        return s += '<ul class="nav-tabs"> <li role="existUser" class="active" data-herf="#exist_user">',
        s += n(r),
        s += '</li> <li role="addUser" data-href="#add_user">',
        s += n(i),
        s += '</li> </ul> <div class="tab-content"> <div id="exist_user" class="tab-pane active"></div> <div id="add_user" class="tab-pane"></div> </div> ',
        new l(s)
    }),
    e("tms/aijiajia/partner/editpartner",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$escape),
        r = e.name,
        i = e.contact_number,
        s = e.validity_time,
        o = t.$each,
        u = e.province,
        a = (e.p, e.$index, e.province_id),
        f = e.city,
        c = (e.c, e.city_id),
        h = "";
        return h += '<form class="add-house"> <div class="customer-layout"> <div class="form-group"> <label>姓名：</label> <input type="text" class="custname" value="',
        h += n(r),
        h += '"> </div> <div class="form-group"> <label>电话：</label> <input type="text" class="custel" value="',
        h += n(i),
        h += '"> </div> <div class="form-group" id="form-special"> <label class="" >有效期</label> <input type="text" class="form-control laydate-icon" readonly="readonly" onclick="laydate()" name="start" value="',
        h += n(s),
        h += '" id="start"/> <label class="control-label"></label> </div> <div class="form-group"> <label>所在城市：</label> <select style="width: 130px;text-align: center" id="sel-province" class="sel-province" name="adress"> <option value="">--省份--</option> ',
        o(u,
        function(e) {
            h += ' <option value="',
            h += n(e.id),
            h += '" ',
            a == e.id && (h += ' selected="selected" '),
            h += ">",
            h += n(e.name),
            h += "</option> "
        }),
        h += ' </select> <select style="width: 130px;text-align: center" id="sel-city" class="sel-city" name="adress"> <option value="">--城市--</option> ',
        o(f,
        function(e) {
            h += ' <option value="',
            h += n(e.id),
            h += '" ',
            c == e.id && (h += ' selected="selected" '),
            h += ">",
            h += n(e.name),
            h += "</option> "
        }),
        h += ' </select> </div> <span class="btn save J-Ok">确认</span> <span class="btn cancel J-Cancel">取消</span> </div> </form>',
        new l(h)
    }),
    e("tms/aijiajia/reservation/allot",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$each),
        r = e.partners,
        i = (e.p, e.$index, t.$escape),
        s = "";
        return s += '<form class="add-houselayout"> <div class="form-group" id="yourpartner"> <label for="type">合伙人：</label> <select name="partner" class="partner"> ',
        n(r,
        function(e) {
            s += ' <option value="',
            s += i(e.id),
            s += '">',
            s += i(e.name),
            s += "</option> "
        }),
        s += ' </select> </div> <span class="btn save J-Update" id="ok">确认</span> <span class="btn cancel J-Cancel" id="cancel">取消</span> </form> ',
        new l(s)
    }),
    e("tms/aijiajia/reservation/allottest",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$each),
        r = e.partners,
        i = (e.p, e.$index, t.$escape),
        s = "";
        return s += '<form class="add-houselayout"> <div class="form-group" id="yourpartner"> <label for="type">合伙人：</label> <select name="partner" class="partner"> ',
        n(r,
        function(e) {
            s += ' <option value="',
            s += i(e.id),
            s += '">',
            s += i(e.name),
            s += "</option> "
        }),
        s += ' </select> </div> <span class="btn save J-Update" id="ok">确认</span> <span class="btn cancel J-Cancel" id="cancel">取消</span> </form> ',
        new l(s)
    }),
    e("tms/aijiajia/vr/add",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$each),
        r = e.houses,
        i = (e.value, e.$index, t.$escape),
        s = e.style,
        o = "";
        return o += '<form class="add-vr"> <div class="form-group"> <label for="house">楼盘名称：</label> <select name="house" class="house"> <option value="">--请选择--</option> ',
        n(r,
        function(e) {
            o += ' <option value="',
            o += i(e.id),
            o += '">',
            o += i(e.name),
            o += "</option> "
        }),
        o += ' </select> </div> <div class="form-group"> <label for="houselayout">户型名称：</label> <select name="houselayout" class="houselayout"> <option value="">--请选择--</option> </select> </div> <div class="form-group"> <label for="style">风格：</label> <select name="style" class="style"> <option value="">--请选择--</option> ',
        n(s,
        function(e) {
            o += ' <option value="',
            o += i(e.id),
            o += '">',
            o += i(e.name),
            o += "</option> "
        }),
        o += ' </select> </div> <div class="form-group"> <label for="vr">VR名称：</label> <input type="text" class="vr"> </div> <div class="form-group"> <label for="vr_link">VR链接：</label> <input type="url" class="vr_link"> </div> <div class="form-group"> <label>预览图：</label> <input type="text" name="picname" class="pic-name" disabled="disabled"> <input type="file" name="file" id="file" class="J-Upload pic-upload" accept="image/*" style="position: relative;width: 18%;border: none;display: inline-block;color: #fff;opacity: 0;filter: alpha(opacity=0);"> <span style="left: -80px; top: -2px; width: 79px; height: 32px; text-align: center; line-height: 32px; display: inline-block; position: relative; z-index: -2;">预览</span> </div> <span class="btn save J-Sure-Add" >确认</span> <span class="btn cancel J-Cancel" >取消</span> </form>',
        new l(o)
    }),
    e("tms/aijiajia/vr/edit",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$each),
        r = e.houses,
        i = (e.h, e.$index, t.$escape),
        s = e.house_id,
        o = (e.value, e.houselayout_id),
        u = e.style,
        a = e.style_id,
        f = e.name,
        c = e.vr_link,
        h = e.vr_id,
        p = "";
        return p += '<form class="edit-vr"> <div class="form-group"> <label for="house">楼盘名称：</label> <select name="house" class="house"> ',
        n(r,
        function(e) {
            p += ' <option value="',
            p += i(e.id),
            p += '" ',
            e.id == s && (p += ' selected="selected"'),
            p += ">",
            p += i(e.name),
            p += "</option> "
        }),
        p += ' </select> </div> <div class="form-group"> <label for="houselayout">房型名称：</label> <select name="houselayout" class="houselayout"> ',
        n(r,
        function(e) {
            p += " ",
            e.id == s && (p += " ", n(e.houselayouts,
            function(e) {
                p += ' <option value="',
                p += i(e.id),
                p += '" ',
                e.id == o && (p += ' selected="selected"'),
                p += ">",
                p += i(e.name),
                p += "</option> "
            }), p += " "),
            p += " "
        }),
        p += ' </select> </div> <div class="form-group"> <label for="style">风格：</label> <select name="style" class="style"> ',
        n(u,
        function(e) {
            p += ' <option value="',
            p += i(e.id),
            p += '" ',
            e.id == a && (p += ' selected="selected"'),
            p += ">",
            p += i(e.name),
            p += "</option> "
        }),
        p += ' </select> </div> <div class="form-group"> <label for="vr">VR名称：</label> <input type="text" class="vr" value="',
        p += i(f),
        p += '"> </div> <div class="form-group"> <label for="vr_link">VR链接：</label> <input type="url" class="vr_link" value="',
        p += i(c),
        p += '"> </div> <div class="form-group"> <label>预览图：</label> <input type="text" name="picname" class="pic-name" disabled="disabled"> <input type="file" name="file" id="file" class="J-Upload pic-upload" accept="image/*" style="position: relative;width: 18%;border: none;display: inline-block;color: #fff;opacity: 0;filter: alpha(opacity=0);"> <span style="left: -80px; top: -2px; width: 79px; height: 32px; text-align: center; line-height: 32px; display: inline-block; position: relative; z-index: -2;">预览</span> </div> <span class="btn save J-Update" >确认</span> <span class="btn cancel J-Cancel" >取消</span> <input type="hidden" class="vr-id" value="',
        p += i(h),
        p += '"> </form>',
        new l(p)
    }),
    e("tms/greenbelt/addbuilding",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$each),
        r = e.departments,
        i = (e.value, e.$index, t.$escape),
        s = "";
        return s += '<form class="add-house"> <div class="form-group"> <label for="department">部门名称：</label> <select name="department" class="department"> ',
        n(r,
        function(e) {
            s += ' <option value="',
            s += i(e.id),
            s += '">',
            s += i(e.name),
            s += "</option> "
        }),
        s += ' </select> </div> <div class="form-group"> <label for="house">楼盘名称：</label> <input type="text" class="house"> </div> <div class="form-group"> <label>楼盘图：</label> <input type="text" name="picname" class="pic-name" disabled="disabled"> <input type="file" name="file" id="file" class="J-Upload pic-upload" accept="image/*"> </div> <span class="btn save J-Sure-Add">确认</span> <span class="btn cancel J-Cancel">取消</span> </form>',
        new l(s)
    }),
    e("tms/greenbelt/addhouse",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$each),
        r = e.departments,
        i = (e.value, e.$index, t.$escape),
        s = "";
        return s += '<form class="add-house"> <div class="form-group"> <label for="department">部门名称：</label> <select name="department" class="department"> <option value="">--请选择--</option> ',
        n(r,
        function(e) {
            s += ' <option value="',
            s += i(e.id),
            s += '">',
            s += i(e.name),
            s += "</option> "
        }),
        s += ' </select> </div> <div class="form-group"> <label for="building">楼盘名称：</label> <select name="building" class="building"> <option value="">--请选择--</option> </select> </div> <div class="form-group"> <label for="house">户型名称：</label> <input type="text" class="house"> </div> <div class="form-group"> <label>户型图：</label> <input type="text" name="picname" class="pic-name" disabled="disabled">  <input type="file" name="file" id="file" class="J-Upload pic-upload" accept="image/*"> </div> <span class="btn save J-Sure-Add">确认</span> <span class="btn cancel J-Cancel">取消</span> </form>',
        new l(s)
    }),
    e("tms/greenbelt/editbuilding",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$each),
        r = e.departments,
        i = (e.value, e.$index, t.$escape),
        s = e.department_id,
        o = e.house_name,
        u = e.house_id,
        a = "";
        return a += '<form class="edit-house"> <div class="form-group"> <label for="department">部门名称：</label> <select name="department" class="department"> ',
        n(r,
        function(e) {
            a += ' <option value="',
            a += i(e.id),
            a += '" ',
            e.id == s && (a += ' selected="selected"'),
            a += ">",
            a += i(e.name),
            a += "</option> "
        }),
        a += ' </select> </div> <div class="form-group"> <label for="house">楼盘名称：</label> <input type="text" class="house" value="',
        a += i(o),
        a += '"> </div> <div class="form-group"> <label>楼盘图：</label> <input type="text" name="picname" class="pic-name" disabled="disabled">  <input type="file" name="file" id="file" class="J-Upload pic-upload" accept="image/*"> </div> <span class="btn save J-Update">确认</span> <span class="btn cancel J-Cancel">取消</span> <input type="hidden" class="building-id" value="',
        a += i(u),
        a += '"> </form>',
        new l(a)
    }),
    e("tms/greenbelt/edithouse",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$each),
        r = e.departments,
        i = (e.value, e.$index, t.$escape),
        s = e.department_id,
        o = (e.b, e.house_id),
        u = e.houselayout_name,
        a = e.houselayout_id,
        f = "";
        return f += '<form class="edit-house"> <div class="form-group"> <label for="department">部门名称：</label> <select name="department" class="department"> ',
        n(r,
        function(e) {
            f += ' <option value="',
            f += i(e.id),
            f += '" ',
            e.id == s && (f += ' selected="selected"'),
            f += ">",
            f += i(e.name),
            f += "</option> "
        }),
        f += ' </select> </div> <div class="form-group"> <label for="building">楼盘名称：</label> <select name="building" class="building"> ',
        n(r,
        function(e) {
            f += " ",
            e.id == s && (f += " ", n(e.houses,
            function(e) {
                f += ' <option value="',
                f += i(e.id),
                f += '" ',
                e.id == o && (f += ' selected="selected"'),
                f += ">",
                f += i(e.name),
                f += "</option> "
            }), f += " "),
            f += " "
        }),
        f += ' </select> </div> <div class="form-group"> <label for="house">户型名称：</label> <input type="text" class="house" value="',
        f += i(u),
        f += '"> </div> <div class="form-group"> <label>户型图：</label> <input type="text" name="picname" class="pic-name" disabled="disabled">  <input type="file" name="file" id="file" class="J-Upload pic-upload" accept="image/*"> </div> <span class="btn save J-Update">确认</span> <span class="btn cancel J-Cancel">取消</span> <input type="hidden" class="houselayout-id" value="',
        f += i(a),
        f += '"> </form>',
        new l(f)
    }),
    e("tms/greenbelt/submitlayer",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$escape),
        r = e.design_id,
        i = t.$each,
        s = e.departments,
        o = (e.d, e.$index, "");
        return o += '<form class="my-form-design common-form" id="mydesi_op" novalidate="novalidate"> <fieldset> <input type="hidden" value="',
        o += n(r),
        o += '" name="design_id" id="design_id"/> <section> <label for="order">选择部门：</label> <select name="department" class="form-control input-sm input-width"> <option value="">--请选择--</option> ',
        i(s,
        function(e) {
            o += ' <option value="',
            o += n(e.id),
            o += '">',
            o += n(e.name),
            o += "</option> "
        }),
        o += ' </select> </section> <section> <label for="order">选择楼盘：</label> <select name="house" class="form-control input-sm input-width"> <option value="">--请选择--</option> </select> </section> <section> <label for="order">选择户型：</label> <select name="houselayout" class="form-control input-sm input-width"> <option value="">--请选择--</option> </select> </section> <label for="title">案例名称：</label> <input name="title" class="input-sm input-width"> <section> <div class="confirm-window"> <span class="btn btn-success explain-confirm mydesi-op">确认</span> <span class="btn btn-default explain-cancel">取消</span> </div> </section> </fieldset> </form>',
        new l(o)
    }),
    e("tms/greenbelt/submitlayer2",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$escape),
        r = e.style,
        i = e.title,
        s = t.$string,
        o = e.content,
        u = "";
        return u += '<div class="screen-bg"></div> <div class="pop" style="width: ',
        u += n(r.width),
        u += "; margin-top: ",
        u += n(r.marginTop),
        u += "; margin-left: ",
        u += n(r.marginLeft),
        u += ';"> <span class="pop-close icon-cross"></span> <div class="pop-title">',
        u += n(i),
        u += '</div> <div class="pop-content"> ',
        u += s(o),
        u += " </div> </div>",
        new l(u)
    }),
    e("tms/greenbelt/sumitlayer",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$escape),
        r = e.design_id,
        i = t.$each,
        s = e.departments,
        o = (e.d, e.$index, "");
        return o += '<form class="my-form-design common-form" id="mydesi_op" novalidate="novalidate"> <fieldset> <input type="hidden" value="',
        o += n(r),
        o += '" name="design_id" id="design_id"/> <section> <label for="order">选择部门：</label> <select name="department" class="form-control input-sm input-width"> <option value="">--请选择--</option> ',
        i(s,
        function(e) {
            o += ' <option value="',
            o += n(e.id),
            o += '">',
            o += n(e.name),
            o += "</option> "
        }),
        o += ' </select> </section> <section> <label for="order">选择楼盘：</label> <select name="house" class="form-control input-sm input-width"> <option value="">--请选择--</option> </select> </section> <section> <label for="order">选择户型：</label> <select name="houselayout" class="form-control input-sm input-width"> <option value="">--请选择--</option> </select> </section> <section> <div class="confirm-window"> <span class="btn btn-success explain-confirm mydesi-op">确认</span> <span class="btn btn-default explain-cancel">取消</span> </div> </section> </fieldset> </form>',
        new l(o)
    }),
    e("tms/icheck/bounced/msg",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$escape),
        r = e.msg,
        i = "";
        return i += '<div class="copydel-content"> <p class="mt-15">',
        i += n(r),
        i += '</p> </div> <div class="layui-form-item laybtn"> <div class="layui-input-block"> <button class="layui-btn confirm" lay-submit lay-filter="formDemo">确定</button> <button type="reset" class="layui-btn layui-btn-primary cancel">取消</button> </div> </div>',
        new l(i)
    }),
    e("tms/icheck/item/classify_item", '<ul class="nav nav-tabs" role="tablist"> <li role="presentation" data-id="1" class="active" ><a href="#mainSoftware" aria-controls="mainSoftware" role="tab" data-toggle="tab">3D菜单分类</a></li> <li role="presentation" data-id="2"><a href="#mainSoftware" aria-controls="floorClassify" role="tab" data-toggle="tab">橱柜分类</a></li> <li role="presentation" data-id="3"><a href="#mainSoftware" aria-controls="wallClassify" role="tab" data-toggle="tab">吊顶分类</a></li> <li role="presentation" data-id="8"><a href="#mainSoftware" aria-controls="supClassify" role="tab" data-toggle="tab">地板拼花</a></li> <li role="presentation" data-id="9"><a href="#mainSoftware" aria-controls="supClassify" role="tab" data-toggle="tab">墙面分类</a></li> <li role="presentation" data-id="20167"><a href="#mainSoftware" aria-controls="supClassify" role="tab" data-toggle="tab">硬装素材分类</a></li> </ul> <div class="compile"> <form> <div class="select-res"> </div> <div class="select-box"> <div class="wrap"> <ul class="first"></ul> <ul class="second"></ul> <ul class="third"></ul> </div> </div> <div class="select-button js-sure">完成</div> </form> </div> '),
    e("tms/icheck/item/importcode",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$escape),
        r = e.record,
        i = "";
        return i += '<div class="importcode"> <ul> <li class="clearfix"> <span class="text-right pull-left">名称:</span> <p class="pull-left" id="name">',
        i += n(r.product_name),
        i += '</p> </li> <li class="clearfix"> <span class="text-right pull-left">模型录入码:</span> <p class="pull-left copydiv" id="code">',
        i += n(r.security_code),
        i += ' </p> </li> <li> <div class="layui-form-item laybtn"> <div class="layui-input-block"> <button class="layui-btn confirm again" lay-submit lay-filter="formDemo" data-no="',
        i += n(r.no),
        i += '">重新获取</button> <button class="layui-btn copy" data-clipboard-action="copy" data-clipboard-target=".copydiv">复制录入码</button> </div> </div> </li> </ul> </div>',
        new l(i)
    }),
    e("tms/icheck/modelCheck/batchdel", '<div class="copydel-content"> <p>确认删除选中的模型记录？</p> </div> <div class="layui-form-item laybtn"> <div class="layui-input-block"> <button class="layui-btn confirm" lay-submit lay-filter="formDemo">确定</button> <button type="reset" class="layui-btn layui-btn-primary cancel">取消</button> </div> </div>'),
    e("tms/icheck/modelCheck/check",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$escape),
        r = e.product_name,
        i = e.preview_url,
        s = "";
        return s += '<div class="copydel-content"> <p>确认领取选中的模型 <i>',
        s += n(r),
        s += '</i> 放入爱福窝模型库？</p> <div>  <img class="lazy" data-lazyload="',
        s += n(i),
        s += '" src="/static/iyun/images/common/error/img_onload_error.png"> </div> </div> <div class="layui-form-item laybtn"> <div class="layui-input-block"> <button class="layui-btn confirm copymodel">复制</button> <button type="reset" class="layui-btn layui-btn-primary cancel">不通过</button> </div> </div>',
        new l(s)
    }),
    e("tms/icheck/modelCheck/delrecode", '<div class="copydel-content"> <p>确认删除该模型记录？</p> </div> <div class="layui-form-item laybtn"> <div class="layui-input-block"> <button class="layui-btn confirm">确定</button> <button type="reset" class="layui-btn layui-btn-primary cancel">取消</button> </div> </div>'),
    e("tms/icheck/modelCheck/editdetail",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$escape),
        r = e.item,
        i = t.$each,
        s = e.data,
        o = (e.d, e.$index, e.d1, "");
        return o += '<div class="layui-form infoentry"> <div class="layui-form-item"> <label class="layui-form-label">模型名称:</label> <div class="layui-input-inline"> <input type="text" name="title" required lay-verify="required" placeholder="请输入素材名称" autocomplete="off" class="layui-input" id="materialName" value="',
        o += n(r.product_name),
        o += '"> <span class="spa spa1"></span> </div> </div> <div class="layui-form-item"> <label class="layui-form-label">模型分类:</label> <div class="layui-input-inline"> <select name="classify" class="show pull-left" id="innerType"> ',
        i(s,
        function(e) {
            o += ' <option value="',
            o += n(e.value),
            o += '" ',
            e.value == r.inner_type && (o += ' selected="selected" '),
            o += "> ",
            o += n(e.name),
            o += "</option> "
        }),
        o += ' </select> <select name="classify" class="show pull-right" id="subType"> ',
        i(s,
        function(e) {
            o += " ",
            e.value == r.inner_type && (o += " ", i(e.content,
            function(e) {
                o += ' <option value="',
                o += n(e.value),
                o += '" ',
                e.value == r.sub_type && (o += ' selected="selected" '),
                o += "> ",
                o += n(e.name),
                o += " </option> "
            }), o += " "),
            o += " "
        }),
        o += '   </select> <span class="spa"></span> </div> </div> <div class="layui-form-item"> <label class="layui-form-label">有无光源:</label> <div class="layui-input-inline" id="lightable"> <input type="radio" name="open" value="1" > <label name="open" for="open" ',
        1 == r.lightable && (o += ' class="checked" '),
        o += '>有</label> <input type="radio" name="close" value="0" > <label name="close" for="close" ',
        0 == r.lightable && (o += ' class="checked" '),
        o += '>无</label> <span class="spa"></span> </div> </div> <div class="layui-form-item"> <label class="layui-form-label">商品链接:</label> <div class="layui-input-inline"> <input type="text" name="title" required lay-verify="required" placeholder="请输入商品链接" autocomplete="off" class="layui-input" id="productLink" value="',
        o += n(r.product_link),
        o += '"> <span class="spa spa2"></span> </div> </div> <div class="layui-form-item"> <label class="layui-form-label">产品价格:</label> <div class="layui-input-inline productPrice"> <input type="text" name="title" required lay-verify="required" value="',
        o += n(r.product_price),
        o += '" placeholder="请输入产品价格" autocomplete="off" class="layui-input" id="productPrice"><i>元</i> <span class="spa spa3"></span> </div> </div> <div class="layui-form-item"> <div class="layui-input-inline submit"> <button class="layui-btn confirm" lay-submit lay-filter="formDemo" id="submitData">提交</button> <button type="reset" class="layui-btn layui-btn-primary cancel">取消</button> </div> </div> </div> ',
        new l(o)
    }),
    e("tms/icheck/modelCheck/getcode",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$escape),
        r = e.product_name,
        i = e.security_code,
        s = "";
        return s += '<div class="importcode"> <ul> <li class="clearfix"> <span class="text-right pull-left">模型名称</span> <p class="pull-left" id="name">',
        s += n(r),
        s += '</p> </li> <li class="clearfix"> <span class="text-right pull-left">模型录入码:</span> <p class="pull-left copy-code" id="code">',
        s += n(i),
        s += ' </p> </li> <li> <div class="layui-form-item laybtn"> <div class="layui-input-block"> <button class="layui-btn confirm again" lay-submit lay-filter="formDemo">重新获取</button> <button class="layui-btn js-copy-code layui-btn-primary" data-clipboard-action="copy" data-clipboard-target=".copy-code" lay-submit lay-filter="formDemo">复制录入码</button> </div> </div> </li> </ul> </div> ',
        new l(s)
    }),
    e("tms/icheck/modelCheck/importcode",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$escape),
        r = e.product_name,
        i = e.security_code,
        s = "";
        return s += '<div class="getcode"> <ul> <li style="margin-top: 15px;"><span style="margin-left: 38px;">【 模型 <i>',
        s += n(r),
        s += '</i> 上传成功 】</span></li> <li class="clearfix"> <span class="text-right pull-left">名称:</span> <p class="pull-left" id="name">',
        s += n(r),
        s += '</p> </li> <li class="clearfix"> <span class="text-right pull-left">模型录入码:</span> <p class="pull-left copy-code" id="code"> ',
        s += n(i),
        s += ' </p> </li> <li> <div class="layui-form-item laybtn"> <div class="layui-input-block get-code"> <button class="again">重新获取</button> <button class="layui-btn js-copy-code layui-btn-primary copy" data-clipboard-action="copy" data-clipboard-target=".copy-code">复制录入码</button> </div> </div> </li> <li> <div class="layui-form-item laybtn"> <div class="layui-input-block">  <button class="layui-btn layui-btn-primary complete">完成</button> </div> </div> </li> </ul> </div> ',
        new l(s)
    }),
    e("tms/icheck/modelCheck/infoEntry",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$escape),
        r = e.item,
        i = t.$each,
        s = e.data,
        o = (e.d, e.$index, e.d1, "");
        return o += '<div class="layui-form infoentry"> <div class="layui-form-item"> <label class="layui-form-label">模型名称:</label> <div class="layui-input-inline"> <input type="text" name="title" required lay-verify="required" placeholder="请输入素材名称" autocomplete="off" class="layui-input" id="materialName" value="',
        o += n(r.product_name),
        o += '"> <span class="spa spa1"></span> </div> </div> <div class="layui-form-item"> <label class="layui-form-label">模型分类:</label> <div class="layui-input-inline"> <select name="classify" class="show pull-left" id="innerType"> ',
        i(s,
        function(e) {
            o += ' <option value="',
            o += n(e.value),
            o += '" ',
            e.value == r.inner_type && (o += ' selected="selected" '),
            o += "> ",
            o += n(e.name),
            o += "</option> "
        }),
        o += ' </select> <select name="classify" class="show pull-right" id="subType"> ',
        i(s,
        function(e) {
            o += " ",
            e.value == r.inner_type && (o += " ", i(e.content,
            function(e) {
                o += ' <option value="',
                o += n(e.value),
                o += '" ',
                e.value == r.sub_type && (o += ' selected="selected" '),
                o += "> ",
                o += n(e.name),
                o += " </option> "
            }), o += " "),
            o += " "
        }),
        o += '   </select> <span class="spa"></span> </div> </div> <div class="layui-form-item"> <label class="layui-form-label">有无光源:</label> <div class="layui-input-inline" id="lightable"> <input type="radio" name="open" value="1" > <label name="open" for="open" ',
        1 == r.lightable && (o += ' class="checked" '),
        o += '>有</label> <input type="radio" name="close" value="0" > <label name="close" for="close" ',
        0 == r.lightable && (o += ' class="checked" '),
        o += '>无</label> <span class="spa"></span> </div> </div> <div class="layui-form-item"> <label class="layui-form-label">商品链接:</label> <div class="layui-input-inline"> <input type="text" name="title" required lay-verify="required" placeholder="请输入商品链接" autocomplete="off" class="layui-input" id="productLink" value="',
        o += n(r.product_link),
        o += '"> <span class="spa spa2"></span> </div> </div> <div class="layui-form-item"> <label class="layui-form-label">产品价格:</label> <div class="layui-input-inline productPrice"> <input type="text" name="title" required lay-verify="required" value="',
        o += n(r.product_price),
        o += '" placeholder="请输入产品价格" autocomplete="off" class="layui-input" id="productPrice"><i>元</i> <span class="spa spa3"></span> </div> </div> <div class="layui-form-item"> <div class="layui-input-inline submit"> <button class="layui-btn confirm" lay-submit lay-filter="formDemo" id="submitData">提交</button> </div> </div> </div> ',
        new l(o)
    }),
    e("tms/icheck/modelCheck/itemno",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$escape),
        r = e.product_name,
        i = e.item_no,
        s = "";
        return s += '<div class="importcode"> <ul> <li class="clearfix"> <span class="text-right pull-left">模型名称</span> <p class="pull-left" id="name">',
        s += n(r),
        s += '</p> </li> <li class="clearfix"> <span class="text-right pull-left">模型编号:</span> <p class="pull-left copy-code" id="code">',
        s += n(i),
        s += ' </p> </li> <li> <div class="layui-form-item laybtn"> <div class="layui-input-block"> <button class="layui-btn js-copy-code layui-btn-primary" data-clipboard-action="copy" data-clipboard-target=".copy-code" lay-submit lay-filter="formDemo">复制模型编号</button> </div> </div> </li> </ul> </div> ',
        new l(s)
    }),
    e("tms/icheck/modelCheck/modelcheck",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$escape),
        r = e.item,
        i = e.preview_url,
        s = t.$each,
        o = e.data,
        u = (e.d, e.$index, e.d1, "");
        return u += '<div class="copydel-content"> <p>确认领取选中的模型<i>',
        u += n(r.product_name),
        u += '</i>放入爱福窝模型库？</p> <div> <img class="lazy" data-lazyload="',
        u += n(r.item_preview_path),
        u += '" src="/static/iyun/images/common/error/img_onload_error.png"> <!--<img class="lazy" data-lazyload="',
        u += n(i),
        u += '" src="/static/iyun/images/common/error/img_onload_error.png">--> </div> </div> <div class="layui-form infoentry"> <div class="layui-form-item"> <label class="layui-form-label">模型名称:</label> <div class="layui-input-inline"> <input type="text" name="title" required lay-verify="required" placeholder="请输入素材名称" autocomplete="off" class="layui-input" id="materialName" value="',
        u += n(r.product_name),
        u += '"> <span class="spa spa1"></span> </div> </div> <div class="layui-form-item"> <label class="layui-form-label">模型分类:</label> <div class="layui-input-inline"> <select name="classify" class="show pull-left" id="innerType"> ',
        s(o,
        function(e) {
            u += ' <option value="',
            u += n(e.value),
            u += '" ',
            e.value == r.inner_type && (u += ' selected="selected" '),
            u += "> ",
            u += n(e.name),
            u += "</option> "
        }),
        u += ' </select> <select name="classify" class="show pull-right" id="subType"> ',
        s(o,
        function(e) {
            u += " ",
            e.value == r.inner_type && (u += " ", s(e.content,
            function(e) {
                u += ' <option value="',
                u += n(e.value),
                u += '" ',
                e.value == r.sub_type && (u += ' selected="selected" '),
                u += "> ",
                u += n(e.name),
                u += " </option> "
            }), u += " "),
            u += " "
        }),
        u += ' </select> <span class="spa"></span> </div> </div> <div class="layui-form-item"> <label class="layui-form-label">有无光源:</label> <div class="layui-input-inline" id="lightable"> <input type="radio" name="open" value="1"> <label name="open" for="open" ',
        1 == r.lightable && (u += ' class="checked" '),
        u += '>有</label> <input type="radio" name="close" value="0"> <label name="close" for="close" ',
        0 == r.lightable && (u += ' class="checked" '),
        u += '>无</label> <span class="spa"></span> </div> </div> <div class="layui-form-item"> <label class="layui-form-label">商品链接:</label> <div class="layui-input-inline"> <input type="text" name="title" required lay-verify="required" placeholder="请输入商品链接" autocomplete="off" class="layui-input" id="productLink" value="',
        u += n(r.product_link),
        u += '"> <span class="spa spa2"></span> </div> </div> <div class="layui-form-item"> <label class="layui-form-label">产品价格:</label> <div class="layui-input-inline productPrice"> <input type="text" name="title" required lay-verify="required" value="',
        u += n(r.product_price),
        u += '" placeholder="请输入产品价格" autocomplete="off" class="layui-input" id="productPrice"><i>元</i> <span class="spa spa3"></span> </div> </div> </div> <div class="layui-form-item laybtn"> <div class="layui-input-block"> <button class="layui-btn confirm copymodel">复制</button> <button type="reset" class="layui-btn layui-btn-primary cancel">不通过</button> </div> </div>',
        new l(u)
    }),
    e("tms/icheck/modelLists/receive", '<div class="copydel-content"> <p>确认领取选中的模型</p> </div> <div class="layui-form-item laybtn"> <div class="layui-input-block"> <button class="layui-btn confirm" lay-submit lay-filter="formDemo">确定</button> <button type="reset" class="layui-btn layui-btn-primary cancel">取消</button> </div> </div>'),
    e("tms/ifuwoadmin/designcreate",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$escape),
        r = e.img_url,
        i = e.design_name,
        s = e.customer_id,
        o = e.no,
        u = "";
        return u += '<form> <div class="pop-collect-thumb" style="border:none;"> <a href="javascript:void(0);"><img src="',
        u += n(r),
        u += '"></a> </div> <div class="pop-collect-main" style="margin-top:40px;"> <div class="pop-collect-album"> <div style="height:32px;"> <span class="margin-right-10 fb f16">方案名称</span> <input type="text" name="design_name" placeholder="请输入方案的名称" value="',
        u += n(i),
        u += '家的设计"> <input type="hidden" id="customer_id" value="',
        u += n(s),
        u += '"> <input type="hidden" id="no" value="',
        u += n(o),
        u += '"> </div> </div> <div class="margin-top-20" style="margin-left:80px;"> <span class="btn btn-success f12 js-design-create margin-right-10">创建</span> <span class="btn btn-disabled f12 js-close">取消</span> </div> </div> </form>',
        new l(u)
    }),
    e("tms/ifuwoadmin/eliminate", '<div id="eliminate" class="treeview-reset"></div> <div class="text-right margin-top-20"> <span class="btn btn-success f12 js-eliminate-save">确定</span> <span class="btn btn-disabled f12 js-close">取消</span> </div>'),
    e("tms/ifuwoadmin/imagelist",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$escape),
        r = e.records,
        i = "";
        return i += '<div class="photo-wrap"> <div class="photo-close"> <i class="icon-cross"></i> </div> <div class="photo-left"> <div class="zoomphoto" id="zoomphoto"> <div class="zoomphoto-left" id="zoomphoto_left"> <div class="zoomphoto-img"> <a href="javascript:void(0)" class="zoomphoto-img-link"> <img src="',
        i += n(r[0].origin_url),
        i += '" class="center" id="detail_pic" data-no="',
        i += n(r[0].no),
        i += '"> </a> <span class="pre-img"><i class="share-prev"></i></span> <span class="next-img"><i class="share-next"></i></span> </div> </div> </div> <div class="photo-detail"> ',
        i += n(r[0].design_name),
        i += " ",
        i += n(r[0].design_style_desc),
        i += '<span class="btn btn-success float-right js-del">删除</span><span class="btn btn-success float-right js-origin">原图</span> </div> <div class="photo-control"> <div class="photo-control-bg"></div> <div class="photo-control-desc"> <i class="share-prev"></i> <div class="small-marquee"> <div class="small-list"> </div> </div> <i class="share-next"></i> </div> </div> </div> <input type="hidden" id="design_id" value="',
        i += n(r[0].design_id),
        i += '" /> </div> ',
        new l(i)
    }),
    e("tms/ifuwoadmin/itemproperty",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$each),
        r = e.records,
        i = (e.record, e.$index, t.$escape),
        s = (e.value, "");
        return n(r,
        function(e) {
            s += ' <div class="row"> <div class="col-lg-1 padding-right-0" style="width:110px;"> <span class="fb">',
            s += i(e.name),
            s += '：</span> </div> <div class="col-lg-10 padding-left-0 " style="margin-bottom: 10px;"> ',
            n(e.children,
            function(e) {
                s += ' <span class="set-classify item-property ',
                1 == e.checked && (s += " active "),
                s += '" data-id="',
                s += i(e.id),
                s += '">',
                s += i(e.name),
                s += "</span> "
            }),
            s += " </div> </div> "
        }),
        new l(s)
    }),
    e("tms/ifuwoadmin/piclist",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$each),
        r = e.records,
        i = (e.value, e.$index, t.$escape),
        s = "";
        return s += '<div class="screen-bg pic-bg"></div> <div class="pop" style="margin-top:-400px;"> <span class="pic-close icon-cross"></span> <div class="htmleaf-content bgcolor-3"> <ul class="pgwSlideshow"> ',
        n(r,
        function(e) {
            s += " ",
            2 == e.service_type ? (s += ' <li> <a href="', s += i(e.full_url), s += '" target="_blank"> <img src="', s += i(e.thumbnail_url), s += '" alt="', s += i(e.design_name), s += '" data-description="', s += i(e.design_style_desc), s += '" id="', s += i(e.no), s += '" data-large-src="', s += i(e.origin_url), s += '" data-operate="', s += i(e.service_type), s += '"> </a> </li> ') : (s += ' <li><img src="', s += i(e.thumbnail_url), s += '" alt="', s += i(e.design_name), s += '" data-description="', s += i(e.design_style_desc), s += '" id="', s += i(e.no), s += '" data-large-src="', s += i(e.origin_url), s += '" data-operate="', s += i(e.service_type), s += '"></li> '),
            s += " "
        }),
        s += ' </ul> </div> <input type="hidden" id="design_id" value="',
        s += i(r[1].design_id),
        s += '" /> </div>',
        new l(s)
    }),
    e("tms/ifuwoadmin/securitycode",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$escape),
        r = e.record,
        i = "";
        return i += '<form class="form-horizontal row margin-top-10" id="personal-detail" novalidate="novalidate"> <div class="form-group"> <label class="col-lg-3 col-md-4 col-sm-5 control-label">名称</label> <div class="col-lg-9 col-md-8 col-sm-7 padding-left-0"> <p class="form-control-static" id="name">',
        i += n(r.product_name),
        i += '</p> </div> </div> <div class="form-group"> <label class="col-lg-3 col-md-4 col-sm-5 control-label">模型录入码</label> <div class="col-lg-9 col-md-8 col-sm-7 padding-left-0"> <p class="form-control-static"><span id="security-code">',
        i += n(r.security_code),
        i += '</span> <a class="js-update-code" data-id="',
        i += n(r.no),
        i += '" href="javascript:;">【重新获取】</a></p> </div> </div> </form>',
        new l(i)
    }),
    e("tms/imerchant/designcreate",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$escape),
        r = e.img_url,
        i = e.design_name,
        s = e.customer_id,
        o = e.no,
        u = "";
        return u += '<form> <div class="pop-collect-thumb" style="border:none;"> <a href="javascript:void(0);"><img src="',
        u += n(r),
        u += '"></a> </div> <div class="pop-collect-main" style="margin-top:40px;"> <div class="pop-collect-album"> <div style="height:32px;"> <span class="margin-right-10 fb f16">方案名称</span> <input type="text" name="design_name" placeholder="请输入方案的名称" value="',
        u += n(i),
        u += '家的设计"> <input type="hidden" id="customer_id" value="',
        u += n(s),
        u += '"> <input type="hidden" id="no" value="',
        u += n(o),
        u += '"> </div> </div> <div class="margin-top-20" style="margin-left:80px;"> <span class="btn btn-success f12 js-design-create margin-right-10">创建</span> <span class="btn btn-disabled f12 js-close">取消</span> </div> </div> </form>',
        new l(u)
    }),
    e("tms/imerchant/eliminate", '<div id="eliminate" class="treeview-reset"></div> <div class="text-right margin-top-20"> <span class="btn btn-success f12 js-eliminate-save">确定</span> <span class="btn btn-disabled f12 js-close">取消</span> </div>'),
    e("tms/imerchant/imagelist",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$escape),
        r = e.records,
        i = "";
        return i += '<div class="photo-wrap"> <div class="photo-close"> <i class="icon-cross"></i> </div> <div class="photo-left"> <div class="zoomphoto" id="zoomphoto"> <div class="zoomphoto-left" id="zoomphoto_left"> <div class="zoomphoto-img"> <a href="javascript:void(0)" class="zoomphoto-img-link"> <img src="',
        i += n(r[0].origin_url),
        i += '" class="center" id="detail_pic" data-no="',
        i += n(r[0].no),
        i += '"> </a> <span class="pre-img"><i class="share-prev"></i></span> <span class="next-img"><i class="share-next"></i></span> </div> </div> </div> <div class="photo-detail"> ',
        i += n(r[0].design_name),
        i += " ",
        i += n(r[0].design_style_desc),
        i += '<span class="btn btn-success float-right js-del">删除</span><span class="btn btn-success float-right js-origin">原图</span> </div> <div class="photo-control"> <div class="photo-control-bg"></div> <div class="photo-control-desc"> <i class="share-prev"></i> <div class="small-marquee"> <div class="small-list"> </div> </div> <i class="share-next"></i> </div> </div> </div> <input type="hidden" id="design_id" value="',
        i += n(r[0].design_id),
        i += '" /> </div> ',
        new l(i)
    }),
    e("tms/imerchant/piclist",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$each),
        r = e.records,
        i = (e.value, e.$index, t.$escape),
        s = "";
        return s += '<div class="screen-bg pic-bg"></div> <div class="pop" style="margin-top:-400px;"> <span class="pic-close icon-cross"></span> <div class="htmleaf-content bgcolor-3"> <ul class="pgwSlideshow"> ',
        n(r,
        function(e) {
            s += " ",
            2 == e.service_type ? (s += ' <li> <a href="', s += i(e.full_url), s += '" target="_blank"> <img src="', s += i(e.thumbnail_url), s += '" alt="', s += i(e.design_name), s += '" data-description="', s += i(e.design_style_desc), s += '" id="', s += i(e.no), s += '" data-large-src="', s += i(e.origin_url), s += '" data-operate="', s += i(e.service_type), s += '"> </a> </li> ') : (s += ' <li><img src="', s += i(e.thumbnail_url), s += '" alt="', s += i(e.design_name), s += '" data-description="', s += i(e.design_style_desc), s += '" id="', s += i(e.no), s += '" data-large-src="', s += i(e.origin_url), s += '" data-operate="', s += i(e.service_type), s += '"></li> '),
            s += " "
        }),
        s += ' </ul> </div> <input type="hidden" id="design_id" value="',
        s += i(r[0].design_id),
        s += '" /> </div>',
        new l(s)
    }),
    e("tms/imerchant/popup", '<form class="super-form"> <div class="form-group"> <label>用户名：</label> <input type="text" name="username" class="username" value="杨扬" disabled> </div> <div class="form-group"> <label>用户昵称：</label> <input type="text" name="nickname" class="nickname" value="yang" disabled> </div> <div class="form-group"> <label>公司名称：</label> <select id="company" class="company" name="companyName"><option>公司</option></select> </div> <div class="form-group"> <label>楼盘名称：</label> <select id="houses" class="houses" name="housesName"><option>楼盘</option></select> </div> <div class="form-group"> <label>角色：</label> <select id="role" class="role" name="roleName"><option>角色</option></select> </div> <div class="btn-groups"> <span class="btn save">保存</span> <span class="btn cancel">取消</span> </div> </form>'),
    e("tms/imerchant/securitycode",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$escape),
        r = e.record,
        i = "";
        return i += '<form class="form-horizontal row margin-top-10" id="personal-detail" novalidate="novalidate"> <div class="form-group"> <label class="col-lg-3 col-md-4 col-sm-5 control-label">名称</label> <div class="col-lg-9 col-md-8 col-sm-7 padding-left-0"> <p class="form-control-static" id="name">',
        i += n(r.product_name),
        i += '</p> </div> </div> <div class="form-group"> <label class="col-lg-3 col-md-4 col-sm-5 control-label">模型录入码</label> <div class="col-lg-9 col-md-8 col-sm-7 padding-left-0"> <p class="form-control-static"><span id="security-code">',
        i += n(r.security_code),
        i += '</span> <a class="js-update-code" data-id="',
        i += n(r.no),
        i += '" href="javascript:;">【重新获取】</a></p> </div> </div> </form>',
        new l(i)
    }),
    e("tms/imerchant/testlist",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$escape),
        r = e.records,
        i = "";
        return i += '<div class="photo-wrap"> <div class="photo-close"> <i class="icon-cross"></i> </div> <div class="photo-left"> <div class="zoomphoto" id="zoomphoto"> <div class="zoomphoto-left" id="zoomphoto_left"> <div class="zoomphoto-img"> <a href="javascript:void(0)" class="zoomphoto-img-link"> <img src="',
        i += n(r[0].origin_url),
        i += '" class="center" id="detail_pic" data-no="',
        i += n(r[0].no),
        i += '"> </a> <span class="pre-img"><i class="share-prev"></i></span> <span class="next-img"><i class="share-next"></i></span> </div> </div> </div> <div class="photo-detail"> ',
        i += n(r[0].design_name),
        i += " ",
        i += n(r[0].design_style_desc),
        i += '<span class="btn btn-success float-right js-del">删除</span><span class="btn btn-success float-right js-origin">原图</span> </div> <div class="photo-control"> <div class="photo-control-bg"></div> <div class="photo-control-desc"> <i class="share-prev"></i> <div class="small-marquee"> <div class="small-list"> </div> </div> <i class="share-next"></i> </div> </div> </div> <input type="hidden" id="design_id" value="',
        i += n(r[1].design_id),
        i += '" /> </div> ',
        new l(i)
    }),
    e("tms/imerchant/vr/modellist",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$each),
        r = e.items,
        i = (e.value, e.$index, t.$escape),
        s = "";
        return n(r,
        function(e) {
            s += ' <li> <span class="preview-img"><img src="',
            s += i(e.preview_url),
            s += '" onerror="this.src=\'http://static.fuwo.com/static/iyun/images/common/error/img_onload_error.png?v=0060v67\'"></span> <span class="model-name">',
            s += i(e.product_name),
            s += '</span> <div class="operate">',
            0 == e.status ? (s += '<span class="btn btn-success J-Select" data-no="', s += i(e.item_no), s += '">上架</span>') : (s += '<span class="selected" data-no="', s += i(e.item_no), s += '">已上架</span>'),
            s += "</div> </li> "
        }),
        s += " ",
        new l(s)
    }),
    e("tms/imerchant/vr/models",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$escape),
        r = e.id,
        i = "";
        return i += '<div class="models"> <div class="left"> <h4>当前模型包<span>(<em class="selected-length">0</em>/5)</span></h4> <div class="model-list left-model"> <div class="lists title"> <span class="preview-img">模型预览图</span> <span class="model-name">模型名称</span> <span class="operate">操作</span> </div> <ul class="lists J-Selected-Models"> </ul> </div> </div> <div class="right">  <ul class="nav in navli"> <li class="stock js-stock active" data-id="true">私有库</li> <li class="stock js-stock" data-id="false">公共库</li> </ul> <div class="search-box"> <input class="search" type="text" placeholder="搜索“模型库”"> <span class="share-search search-btn J-Submit-Search"></span> </div> <div class="model-list right-model"> <div class="lists title"> <span class="preview-img">模型预览图</span> <span class="model-name">模型名称</span> <span class="operate">操作</span> </div> <ul class="lists J-All-Models"> </ul> </div> </div> <input type="hidden" class="model-id" value="',
        i += n(r),
        i += '"> </div>',
        new l(i)
    }),
    e("tms/imerchant/vr/selectedmodel",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$each),
        r = e.items,
        i = (e.value, e.$index, t.$escape),
        s = "";
        return n(r,
        function(e) {
            s += ' <li> <span class="preview-img"><img src="',
            s += i(e.preview_url),
            s += '" onerror="this.src=\'http://static.fuwo.com/static/iyun/images/common/error/img_onload_error.png?v=0060v67\'"></span> <span class="model-name">',
            s += i(e.product_name),
            s += '</span> <div class="operate"><span class="btn btn-success J-Remove-Select" data-no="',
            s += i(e.item_no),
            s += '" data-id="',
            s += i(e.id),
            s += '">下架</span></div> </li> '
        }),
        new l(s)
    }),
    e("tms/iselling/addpic",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$escape),
        r = e.id,
        i = e.src,
        s = "";
        return s += '<div id="',
        s += n(r),
        s += '" class="image"> <img src="',
        s += n(i),
        s += '"> <i class="icon-cross close js-del-pic"></i> </div>',
        new l(s)
    }),
    e("tms/iselling/gallerypop", '<form class="new-gallery"> <div class="form-group"> <label for="name">名称：</label> <input type="text" name="name" class="name" value=""> </div> <div class="form-group"> <label for="order">顺序：</label> <input type="text" name="order" class="order" value=""> </div> <span class="btn save js-new-gallery">保存</span> <span class="btn cancel js-cancel">取消</span> </form>'),
    e("tms/iselling/newdesigner", '<form id="exist_designer"> <div class="form-group"> <label for="designer">用户名：</label> <input type="text" name="designer" value=""> </div> <span class="btn save js-old-designer">保存</span> <span class="btn cancel js-cancel">取消</span> </form>'),
    e("tms/iselling/newgallery",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$escape),
        r = e.id,
        i = e.name,
        s = e.sort,
        o = "";
        return o += '<div id="',
        o += n(r),
        o += '" class="gallery"> <p> <span class="title float-left">',
        o += n(i),
        o += '</span> <span class="float-right"><a href="javascript:;" class="js-edit-gallery">编辑</a> | <a href="javascript:;" class="js-del-gallery">删除</a></span> </p> <div class="img-lists"> <div class="image img-add"> <img src="http://static.fuwo.com/static/iyun/images/common/add.png"> <input type="file" class="file-upload"> </div> </div> <input type="hidden" value="',
        o += n(s),
        o += '"> </div>',
        new l(o)
    }),
    e("tms/iselling/newgly", '<form id="new_user"> <div class="form-group"> <label for="newuser">用户名：</label> <input type="text" name="newuser" value=""> </div> <div class="form-group"> <label>密码：</label> <input type="password" name="newpsw" value=""> </div> <span class="btn save js-new-user">保存</span> <span class="btn cancel js-cancel">取消</span> </form> '),
    e("tms/iselling/oldgly", '<form id="exist_user"> <div class="form-group"> <label for="existname">用户名：</label> <input type="text" name="existname" value=""> </div> <span class="btn save js-old-user">保存</span> <span class="btn cancel js-cancel">取消</span> </form>'),
    e("tms/iselling/popup",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$escape),
        r = e.user_id,
        i = e.username,
        s = e.first_name,
        o = t.$each,
        u = e.companys,
        a = (e.c, e.$index, e.company_id),
        f = (e.h, e.houses_id),
        c = e.roles,
        h = (e.r, e.role_id),
        p = "";
        return p += '<form class="super-form"> <div class="form-group"> <label>用户名：</label> <input type="hidden" name="user_id" class="user_id" value="',
        p += n(r),
        p += '" disabled> <input type="text" name="username" class="username" value="',
        p += n(i),
        p += '" disabled> </div> <div class="form-group"> <label>用户昵称：</label> <input type="text" name="nickname" class="nickname" value="',
        p += n(s),
        p += '" disabled> </div> <div class="form-group"> <label>公司名称：</label> <select id="company" class="company" name="companyName"> <option value="">--请选择--</option> ',
        o(u,
        function(e) {
            p += " <option ",
            e.id == a && (p += "selected"),
            p += ' value="',
            p += n(e.id),
            p += '">',
            p += n(e.name),
            p += "</option> "
        }),
        p += ' </select> </div> <div class="form-group"> <label>楼盘名称：</label> <select id="houses" class="houses" name="housesName"> <option value="">-- --</option> ',
        o(u,
        function(e) {
            p += " ",
            e.id == a && (p += " ", o(e.houses,
            function(e) {
                p += " <option ",
                f == e.id && (p += "selected "),
                p += ' value="',
                p += n(e.id),
                p += '">',
                p += n(e.name),
                p += "</option> "
            }), p += " "),
            p += " "
        }),
        p += ' </select> </div> <div class="form-group"> <label>角色：</label> <select id="role" class="role" name="roleName"> ',
        o(c,
        function(e) {
            p += ' <option value="',
            p += n(e.id),
            p += '" ',
            e.id == h && (p += "selected "),
            p += ">",
            p += n(e.name),
            p += "</option> "
        }),
        p += ' </select> </div> <div class="btn-groups"> <span class="btn save js-save-layer">保存</span> <span class="btn cancel js-cancel-layer">取消</span> </div> </form>',
        new l(p)
    }),
    e("tms/iselling/qjt/addhotpot",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$escape),
        r = e.id,
        i = "";
        return i += '<form class="new-fullpic"> <div class="form-group"> <label>热点：</label> <input type="text" name="picname" class="file-name" disabled="disabled"> <input type="file" name="file" id="file" class="file-upload" accept="application/xml"> </div> <input type="hidden" class="id" value="',
        i += n(r),
        i += '"> <span class="btn save js-save-hotpot">保存</span> <span class="btn cancel js-cancel">取消</span> </form>',
        new l(i)
    }),
    e("tms/iselling/qjt/addmenu",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$each),
        r = e.room_types,
        i = (e.r, e.$index, t.$escape),
        s = "";
        return s += '<form class="new-fullpic"> <div class="form-group"> <label for="">名称：</label> <input type="text" name="name" class="fullpic-name"> </div> <div class="form-group"> <label>图片：</label> <input type="text" name="picname" class="pic-name" disabled="disabled"> <input type="file" name="file" id="file" class="pic-upload" accept="image/*"> </div> <div class="form-group"> <label>房间类型:</label> <div class="room-type"></div> <div class="style-pop"> ',
        n(r,
        function(e) {
            s += " <span>",
            s += i(e),
            s += "</span> "
        }),
        s += ' </div> </div> <span class="btn save js-add-menu">保存</span> <span class="btn cancel js-cancel">取消</span> </form>',
        new l(s)
    }),
    e("tms/iselling/qjt/editdetail",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$escape),
        r = e.name,
        i = e.id,
        s = e.sort,
        o = "";
        return o += '<form class="qjtdetail-edit"> <div class="form-group"> <label for="">名称：</label> <input type="text" name="name" class="item-name" value="',
        o += n(r),
        o += '"> <input type="hidden" name="id" id="id" value="',
        o += n(i),
        o += '"> </div> <div class="form-group"> <label>序号：</label> <input type="text" name="index" class="item-index" value="',
        o += n(s),
        o += '"> </div> <span class="btn save js-update-item">保存</span> <span class="btn cancel js-cancel">取消</span> </form>',
        new l(o)
    }),
    e("tms/iselling/qjt/editmenu",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$escape),
        r = e.name,
        i = e.id,
        s = "";
        return s += '<form class="edit-fullpic"> <div class="form-group"> <label for="">名称：</label> <input type="text" name="name" class="fullpic-name" value="',
        s += n(r),
        s += '"> <input type="hidden" name="id" id="id" class="fullpic-name" value="',
        s += n(i),
        s += '"> </div> <div class="form-group"> <label>图片：</label> <input type="text" name="picname" class="pic-name" disabled="disabled"> <input type="file" name="file" id="file" class="pic-upload" accept="image/*"> </div> <span class="btn save js-update-menu">保存</span> <span class="btn cancel js-cancel">取消</span> </form>',
        new l(s)
    }),
    e("tms/iselling/qjt/submitqjt",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$each),
        r = e.houselayouts,
        i = (e.h, e.$index, t.$escape),
        s = e.roam_styles,
        o = (e.m, e.value),
        u = "";
        return u += '<form class="submit-qjt"> <div class="form-group"> <label for="">名称：</label> <input type="text" name="name" class="submit-name"> </div> <div class="form-group"> <label>户型:</label> <select class="house-type"> ',
        n(r,
        function(e) {
            u += ' <option value="',
            u += i(e.id),
            u += '">',
            u += i(e.name),
            u += "</option> "
        }),
        u += ' </select> </div> <div class="form-group"> <label>风格:</label> <select class="style-type"> ',
        n(s,
        function(e) {
            u += ' <option value="',
            u += i(e.id),
            u += '">',
            u += i(e.name),
            u += "</option> "
        }),
        u += ' </select> </div> <div class="form-group"> <label>预览图：</label> <input type="text" name="picname" class="pic-name submit-pic-name" disabled="disabled"> <input type="file" name="file" id="file" class="pic-upload submit-pic-upload" accept="image/*"> </div> <input type="hidden" id="checked_items" value="',
        u += i(o),
        u += '"> <span class="btn save js-submit-pics">保存</span> <span class="btn cancel js-cancel">取消</span> </form>',
        new l(u)
    }),
    e("tms/iselling/updategallery",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$escape),
        r = e.name,
        i = e.sort,
        s = e.id,
        o = "";
        return o += '<form class="update-gallery"> <div class="form-group"> <label for="name">名称：</label> <input type="text" name="name" class="name" value="',
        o += n(r),
        o += '"> </div> <div class="form-group"> <label for="order">顺序：</label> <input type="text" name="order" class="order" value="',
        o += n(i),
        o += '"> </div> <input type="hidden" value="',
        o += n(s),
        o += '" class="gallery-id"> <span class="btn save js-update-gallery">保存</span> <span class="btn cancel js-cancel">取消</span> </form>',
        new l(o)
    }),
    e("tms/itemadmin/model/classify", '<div class="compile"> <form> <div class="select-res"></div> <div class="select-box"> <div class="wrap"> <ul class="first"></ul> <ul class="second"></ul> <ul class="third"></ul> </div> </div> <div class="select-button js-sure">完成</div> </form> </div> '),
    e("tms/itemadmin/model/importcode",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$escape),
        r = e.record,
        i = "";
        return i += '<div class="importcode"> <ul> <li class="clearfix"> <span class="text-right pull-left">名称:</span> <p class="pull-left" id="name">',
        i += n(r.product_name),
        i += '</p> </li> <li class="clearfix"> <span class="text-right pull-left">模型录入码:</span> <p class="pull-left copydiv" id="code">',
        i += n(r.security_code),
        i += ' </p> </li> <li> <div class="layui-form-item"> <div class="layui-input-block"> <button class="layui-btn confirm again" lay-submit lay-filter="formDemo" data-no="',
        i += n(r.no),
        i += '">重新获取</button> <button class="layui-btn copy" data-clipboard-action="copy" data-clipboard-target=".copydiv">复制录入码</button> </div> </div> </li> </ul> </div>',
        new l(i)
    }),
    e("tms/itemadmin/model/setpublic", '<div class="copydel-content"> <p class="mt-15">是否设置为公开？</p> </div> <div class="layui-form-item"> <div class="layui-input-block"> <button class="layui-btn confirm" lay-submit lay-filter="formDemo">公开</button> <button type="reset" class="layui-btn layui-btn-primary cancel">不公开</button> </div> </div>'),
    e("tms/ivradmin/vr/modellist",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$each),
        r = e.items,
        i = (e.value, e.$index, t.$escape),
        s = "";
        return n(r,
        function(e) {
            s += ' <li> <span class="preview-img"><img src="',
            s += i(e.preview_url),
            s += '" onerror="this.src=\'http://static.fuwo.com/static/iyun/images/common/error/img_onload_error.png?v=0060v67\'"></span> <span class="model-name">',
            s += i(e.product_name),
            s += '</span> <div class="operate">',
            0 == e.status ? (s += '<span class="btn btn-success J-Select" data-no="', s += i(e.item_no), s += '">上架</span>') : (s += '<span class="selected" data-no="', s += i(e.item_no), s += '">已上架</span>'),
            s += "</div> </li> "
        }),
        s += " ",
        new l(s)
    }),
    e("tms/ivradmin/vr/models",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$escape),
        r = e.id,
        i = "";
        return i += '<div class="models"> <div class="left"> <h4>当前模型包<span>(<em class="selected-length">0</em>/5)</span></h4> <div class="model-list left-model"> <div class="lists title"> <span class="preview-img">模型预览图</span> <span class="model-name">模型名称</span> <span class="operate">操作</span> </div> <ul class="lists J-Selected-Models"> </ul> </div> </div> <div class="right"> <h4>模型库</h4> <input class="search" type="text" placeholder="搜索“模型库”"> <span class="share-search search-btn J-Submit-Search"> </span> <div class="model-list right-model"> <div class="lists title"> <span class="preview-img">模型预览图</span> <span class="model-name">模型名称</span> <span class="operate">操作</span> </div> <ul class="lists J-All-Models"> </ul> </div> </div> <input type="hidden" class="model-id" value="',
        i += n(r),
        i += '"> </div>',
        new l(i)
    }),
    e("tms/ivradmin/vr/selectedmodel",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$each),
        r = e.items,
        i = (e.value, e.$index, t.$escape),
        s = "";
        return n(r,
        function(e) {
            s += ' <li> <span class="preview-img"><img src="',
            s += i(e.preview_url),
            s += '" onerror="this.src=\'http://static.fuwo.com/static/iyun/images/common/error/img_onload_error.png?v=0060v67\'"></span> <span class="model-name">',
            s += i(e.product_name),
            s += '</span> <div class="operate"><span class="btn btn-success J-Remove-Select" data-no="',
            s += i(e.item_no),
            s += '" data-id="',
            s += i(e.id),
            s += '">下架</span></div> </li> '
        }),
        new l(s)
    }),
    e("tms/measure/demand/demand_detail",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$each),
        r = e.family_members,
        i = (e.member, e.$index, t.$escape),
        s = e.life_style,
        o = e.special_request,
        u = e.design_spaces,
        a = e.reference_image_path,
        f = (e.image_path, "");
        return f += '<div class="demand" style="width: 590px ;"> <div class="pop-content"> <form class="form-horizontal row margin-top-10" id="personal-detail" novalidate="novalidate"> <div class="form-group"> <label class="control-label">家庭成员</label> <div class="detail-des"> ',
        n(r,
        function(e) {
            f += " <span>",
            f += i(e.title),
            f += "<i>",
            f += i(e.age),
            f += "</i></span> "
        }),
        f += ' </div> </div> <div class="form-group"> <label class="control-label">生活习惯特殊要求</label> <div class="detail-des"> <span>',
        f += i(s),
        f += '</span> </div> </div> <div class="form-group"> <label class="control-label">空间设计特殊要求</label> <div class="detail-des"> <span>',
        f += i(o),
        f += '</span> </div> </div> <div class="form-group"> <label class="control-label">设计空间</label> <div class="detail-des"> ',
        n(u,
        function(e) {
            f += ' <span class="space">',
            f += i(e.name),
            f += "</span> "
        }),
        f += ' </div> </div> <div class="form-group"> <label class="control-label">设计参考图片</label> <div class="detail-des picScroll-left" style="border-bottom: none"> <div class="bd"> <ul class="picList"> ',
        n(a,
        function(e) {
            f += ' <li> <div class="pic"><a href="',
            f += i(e.url),
            f += '" target="_blank"> <img class="lazy" src="',
            f += i(e.url),
            f += '@!110x110.jpg"/></a> </div> </li> '
        }),
        f += " </ul> </div> </div> </div> </form> </div> </div>",
        new l(f)
    }),
    e("tms/measure/tmp/addmenu",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$each),
        r = e.houses,
        i = (e.h, e.$index, t.$escape),
        s = e.style,
        o = (e.s, e.area),
        u = (e.a, "");
        return u += '<form class="new-case"> <div class="form-group"> <label for="name">标题：</label> <input type="text" name="name" class="case-name"> </div> <div class="form-group"> <label>户型：</label> <select class="huxing"> ',
        n(r,
        function(e) {
            u += ' <option value="',
            u += i(e.id),
            u += '">',
            u += i(e.name),
            u += "</option> "
        }),
        u += ' </select> </div> <div class="form-group"> <label>风格：</label> <select class="style"> ',
        n(s,
        function(e) {
            u += ' <option value="',
            u += i(e.id),
            u += '">',
            u += i(e.name),
            u += "</option> "
        }),
        u += ' </select> </div> <div class="form-group"> <label>面积：</label> <select class="area"> ',
        n(o,
        function(e) {
            u += ' <option value="',
            u += i(e.id),
            u += '">',
            u += i(e.name),
            u += "</option> "
        }),
        u += ' </select> </div> <div class="form-group"> <label>url：</label> <input type="text" name="url" class="url"> </div> <div class="form-group"> <label>图片：</label> <input type="text" name="picname" class="pic-name" disabled="disabled"> <input type="file" name="upfile" id="upfile" class="pic-upload" accept="image/*"> </div> <span class="btn save js-add-menu">保存</span> <span class="btn cancel js-cancel">取消</span> </form>',
        new l(u)
    }),
    e("tms/measure/tmp/editmenu",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$escape),
        r = e.title,
        i = t.$each,
        s = e.houses,
        o = (e.h, e.$index, e.houseId),
        u = e.style,
        a = (e.s, e.styleId),
        f = e.area,
        c = (e.a, e.areaId),
        h = e.url,
        p = e.id,
        d = "";
        return d += '<form class="edit-case"> <div class="form-group"> <label for="name">名称：</label> <input type="text" name="name" class="case-name" value="',
        d += n(r),
        d += '"> </div> <div class="form-group"> <label>户型：</label> <select class="huxing"> ',
        i(s,
        function(e) {
            d += ' <option value="',
            d += n(e.id),
            d += '" ',
            o == e.id && (d += 'selected="selected"'),
            d += ">",
            d += n(e.name),
            d += "</option> "
        }),
        d += ' </select> </div> <div class="form-group"> <label>风格：</label> <select class="style"> ',
        i(u,
        function(e) {
            d += ' <option value="',
            d += n(e.id),
            d += '" ',
            a == e.id && (d += 'selected="selected"'),
            d += ">",
            d += n(e.name),
            d += "</option> "
        }),
        d += ' </select> </div> <div class="form-group"> <label>面积：</label> <select class="area"> ',
        i(f,
        function(e) {
            d += ' <option value="',
            d += n(e.id),
            d += '" ',
            c == e.id && (d += 'selected="selected"'),
            d += ">",
            d += n(e.name),
            d += "</option> "
        }),
        d += ' </select> </div> <div class="form-group"> <label>url：</label> <input type="text" name="url" class="url" value="',
        d += n(h),
        d += '"> </div> <div class="form-group"> <label>图片：</label> <input type="text" name="picname" class="pic-name" disabled="disabled"> <input type="file" name="upfile" id="upfile" class="pic-upload" accept="image/*"> </div> <input type="hidden" name="id" id= "id" value="',
        d += n(p),
        d += '"> <span class="btn save js-update-menu">保存</span> <span class="btn cancel js-cancel">取消</span> </form>',
        new l(d)
    }),
    e("tms/merchant/account/addstore", '<div class="addeditstore"> <input id="editVal" type="text" placeholder="请输入门店名称" > </div> <div class="layui-form-item"> <div class="layui-input-block"> <button class="layui-btn confirm" lay-submit lay-filter="formDemo">确定</button> <button type="reset" class="layui-btn layui-btn-primary cancel">取消</button> </div> </div> '),
    e("tms/merchant/account/addsubaccount",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$each),
        r = e.distributors,
        i = (e.dis, e.$index, t.$escape),
        s = e.all_vips,
        o = e.vips,
        u = e.fcoins,
        a = "";
        return a += '<div class="layui-form addsubaccount"> <div class="layui-form-item loginid"> <label class="layui-form-label">登录账号:</label> <div class="layui-input-block"> <input type="password" name="password" style="width: 1px; height: 1px; position: absolute; border: 0px; padding: 0px;"> <input type="text" name="login" required lay-verify="required" class="layui-input show" placeholder="请输入邮箱" autocomplete="off" id="email"> </div> </div> <div class="layui-form-item loginpwd"> <label class="layui-form-label">密码:</label> <div class="layui-input-inline"> <input type="password" name="password" required lay-verify="required" placeholder="请输入密码" autocomplete="off" class="layui-input" id="password"> </div> </div> <div class="layui-form-item loginpwd"> <label class="layui-form-label">确认密码:</label> <div class="layui-input-inline"> <input type="password" name="password" required lay-verify="required" placeholder="请确认密码" autocomplete="off" class="layui-input" id="password1"> </div> </div> <div class="layui-form-item nickname"> <label class="layui-form-label">昵称:</label> <div class="layui-input-inline"> <input type="text" name="title" required lay-verify="required" placeholder="请输入昵称" autocomplete="off" class="layui-input" id="first_name"> </div> </div> <div class="layui-form-item accounttype"> <label class="layui-form-label">账号类型:</label> <div class="layui-input-inline"> <select name="account" lay-verify="required\\phone" class="show mr-20" id="level"> <option value="1" selected>普通管理员</option> <option value="2">普通账号</option> </select> </div> </div> <div class="layui-form-item store"> <label class="layui-form-label">门店:</label> <div class="layui-input-inline"> <select name="account" lay-verify="required\\phone" class="show mr-20" id="dis"> ',
        n(r,
        function(e) {
            a += ' <option value="',
            a += i(e.id),
            a += '">',
            a += i(e.name),
            a += "</option> "
        }),
        a += ' </select> </div> </div> <div class="layui-form-item isvip"> <label class="layui-form-label">是否VIP:</label> <div class="layui-input-block"> <select name="account" lay-verify="required\\phone" class="show pull-left" id="vip"> <option value="1">是</option> <option value="-1" selected>否</option> </select> <a tabindex="0" class="btn layui-form-mid layui-word-aux pull-left ml-10 queryvip" role="button" data-toggle="popover" data-trigger="focus" data-content="<p style=\'color: #333; font-size: 12px; \'>VIP子账号：共 <i style=\'color: #E22A26;\'>',
        a += i(s),
        a += "</i> 个，剩 <i style='color: #E22A26;'>",
        a += i(o),
        a += '</i> 个</p>">查询VIP</a> </div> </div> <div class="layui-form-item assignmoney"> <label class="layui-form-label">分配福币:</label> <div class="layui-input-block"> <input type="text" name="title" required lay-verify="required" class="pull-left fcoin" placeholder="" autocomplete="off" class="layui-input" value="0" id="fcoin"> <a tabindex="0" class="btn layui-form-mid layui-word-aux pull-left ml-10 querymoney" role="button" data-toggle="popover" data-trigger="focus" data-content="<p style=\'color: #333; font-size: 12px; \'>福币剩余： <i style=\'color: #E22A26;\'>',
        a += i(u),
        a += '</i> </p>">查询福币</a> </div> </div> <div class="layui-form-item" style="width: 510px;"> <div class="layui-input-block"> <button class="layui-btn confirm" lay-submit lay-filter="formDemo" id="submit">提交</button> <button type="reset" class="layui-btn layui-btn-primary cancel" id="cancel">取消</button> </div> </div> </div> ',
        new l(a)
    }),
    e("tms/merchant/account/assignfubi",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$escape),
        r = e.fcoins,
        i = "";
        return i += '<div class="assignfubi-content"> <div class="layui-form-item"> <label class="layui-form-label">分配福币</label> <div class="layui-input-block"> <input type="text" name="title" required lay-verify="required" class="pull-left show layui-input fcoin_many" placeholder="" autocomplete="off" id="fcoin_many"> </div> </div> <div class="layui-input-inline"> <a tabindex="0" class="btn layui-form-mid layui-word-aux pull-left ml-10 querymoney" role="button" data-toggle="popover" data-trigger="focus" data-content="<p style=\'color: #333; font-size: 12px; \'>福币剩余： <i style=\'color: #E22A26;\'>',
        i += n(r),
        i += '</i> </p>">查询福币</a> </div> </div> <div class="layui-form-item"> <div class="layui-input-block"> <button class="layui-btn confirm" lay-submit lay-filter="formDemo">确定</button> <button type="reset" class="layui-btn layui-btn-primary cancel">取消</button> </div> </div>',
        new l(i)
    }),
    e("tms/merchant/account/deletestore", '<div class="copydel-content"> <p>确认删除“设计部”吗？</p> <p>删除后该门店下子账号将自动进入默认门店</p> </div> <div class="layui-form-item"> <div class="layui-input-block"> <button class="layui-btn confirm" lay-submit lay-filter="formDemo">确定</button> <button type="reset" class="layui-btn layui-btn-primary cancel">取消</button> </div> </div>'),
    e("tms/merchant/account/editLevel", '<div class="setstore"> <div class="layui-input-inline"> <select name="account" lay-verify="required\\phone" class="show" id="level"> <option value="1" selected>普通管理员</option> <option value="2">普通账号</option> </select> </div> </div> <div class="layui-form-item"> <div class="layui-input-block"> <button class="layui-btn confirm" lay-submit lay-filter="formDemo">确定</button> <button type="reset" class="layui-btn layui-btn-primary cancel">取消</button> </div> </div>'),
    e("tms/merchant/account/editstore",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$escape),
        r = e.dis_name,
        i = "";
        return i += '<div class="addeditstore"> <input id="editVal" type="text" placeholder="请输入门店名称" value="',
        i += n(r),
        i += '" > </div> <div class="layui-form-item"> <div class="layui-input-block"> <button class="layui-btn confirm" lay-submit lay-filter="formDemo">确定</button> <button type="reset" class="layui-btn layui-btn-primary cancel">取消</button> </div> </div> ',
        new l(i)
    }),
    e("tms/merchant/account/impowersubaccount",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$each),
        r = e.distributors,
        i = (e.dis, e.$index, t.$escape),
        s = e.all_vips,
        o = e.vips,
        u = e.fcoins,
        a = "";
        return a += '<div class="layui-form addsubaccount"> <div class="layui-form-item loginid"> <label class="layui-form-label">账号:</label> <div class="layui-input-block"> <input type="password" name="password" style="width: 1px; height: 1px; position: absolute; border: 0px; padding: 0px;"> <input type="password" name="password" style="width: 1px; height: 1px; position: absolute; border: 0px; padding: 0px;"> <input type="text" name="login" required lay-verify="required" class="pull-left show" placeholder="请输入邮箱或手机号" autocomplete="off" class="layui-input" id="username"> </div> </div> <div class="layui-form-item loginpwd"> <label class="layui-form-label">密码:</label> <div class="layui-input-inline"> <input type="password" name="password" required lay-verify="required" placeholder="请输入密码" autocomplete="off" class="layui-input" id="password"> </div> </div> <div class="layui-form-item accounttype"> <label class="layui-form-label">账号类型:</label> <div class="layui-input-inline"> <select name="account" lay-verify="required\\phone" class="show mr-20" id="level"> <option value="1" selected>普通管理员</option> <option value="2">普通账号</option> </select> </div> </div> <div class="layui-form-item store"> <label class="layui-form-label">门店:</label> <div class="layui-input-inline"> <select name="account" lay-verify="required\\phone" class="show mr-20" id="dis"> ',
        n(r,
        function(e) {
            a += ' <option value="',
            a += i(e.id),
            a += '">',
            a += i(e.name),
            a += "</option> "
        }),
        a += ' </select> </div> </div> <div class="layui-form-item isvip"> <label class="layui-form-label">是否VIP:</label> <div class="layui-input-block"> <select name="account" lay-verify="required\\phone" class="show pull-left" id="vip"> <option value="1" >是</option> <option value="-1" selected>否</option> </select> <a tabindex="0" class="btn layui-form-mid layui-word-aux pull-left ml-10 queryvip" role="button" data-toggle="popover" data-trigger="focus" data-content="<p style=\'color: #333; font-size: 12px; \'>VIP子账号：共 <i style=\'color: #E22A26;\'>',
        a += i(s),
        a += "</i> 个，剩 <i style='color: #E22A26;'>",
        a += i(o),
        a += '</i> 个</p>">查询VIP</a> </div> </div> <div class="layui-form-item assignmoney"> <label class="layui-form-label">分配福币:</label> <div class="layui-input-block"> <input type="text" name="title" required lay-verify="required" class="pull-left" placeholder="" autocomplete="off" class="layui-input" value="0" id="fcoin"> <a tabindex="0" class="btn layui-form-mid layui-word-aux pull-left ml-10 querymoney" role="button" data-toggle="popover" data-trigger="focus" data-content="<p style=\'color: #333; font-size: 12px; \'>福币剩余： <i style=\'color: #E22A26;\'>',
        a += i(u),
        a += '</i> </p>">查询福币</a> </div> </div> <div class="layui-form-item" style="width: 510px;"> <div class="layui-input-block"> <button class="layui-btn confirm" lay-submit lay-filter="formDemo">提交</button> <button type="reset" class="layui-btn layui-btn-primary cancel">取消</button> </div> </div> </div> ',
        new l(a)
    }),
    e("tms/merchant/account/modelPermission",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, e.limit),
        r = "";
        return r += ' <div class="layui-form model-permission"> <div class="layui-form-item"> <label class="layui-form-label">是否开通模型上传权限?</label> <div class="layui-input-block" id="openPermission"> <div class="wrap"> <input type="radio" ',
        -1 == n && (r += 'checked="checked"'),
        r += ' name="permissionopen" value="-1"> <label name="permissionopen" ',
        -1 == n && (r += 'class="checked"'),
        r += ' for="permissionopen">是</label> <input type="radio" ',
        0 == n && (r += 'checked="checked"'),
        r += ' name="permissiondown" value="0" > <label name="permissiondown" ',
        0 == n && (r += 'class="checked"'),
        r += ' for="permissiondown">否</label> </div> </div> </div> <div class="layui-form-item"> <div class="layui-input-block"> <button class="layui-btn confirm" lay-submit lay-filter="formDemo" id="submit">确定</button> <button type="reset" class="layui-btn layui-btn-primary cancel" id="cancel">取消</button> </div> </div> </div> ',
        new l(r)
    }),
    e("tms/merchant/account/resetPassword", '<div class="layui-form resetpwd"> <div class="layui-form-item loginpwd"> <label class="layui-form-label">密码:</label> <div class="layui-input-inline"> <input type="password" name="password" required lay-verify="required" placeholder="请输入密码" autocomplete="off" class="layui-input" id="password"> </div> </div> <div class="layui-form-item pwdconfirm"> <label class="layui-form-label">确认密码:</label> <div class="layui-input-inline"> <input type="password" name="password" required lay-verify="required" placeholder="请确认密码" autocomplete="off" class="layui-input" id="password1"> </div> </div> </div> <div class="layui-form-item"> <div class="layui-input-block"> <button class="layui-btn confirm" lay-submit lay-filter="formDemo">确定</button> <button type="reset" class="layui-btn layui-btn-primary cancel">取消</button> </div> </div> '),
    e("tms/merchant/account/setstore",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$each),
        r = e.distributors,
        i = (e.dis, e.$index, t.$escape),
        s = "";
        return s += '<div class="setstore"> <div class="layui-input-inline"> <select name="account" lay-verify="required\\phone" class="show" id="dis"> ',
        n(r,
        function(e) {
            s += ' <option value="',
            s += i(e.id),
            s += '">',
            s += i(e.name),
            s += "</option> "
        }),
        s += ' </select> </div> </div> <div class="layui-form-item"> <div class="layui-input-block"> <button class="layui-btn confirm" lay-submit lay-filter="formDemo">确定</button> <button type="reset" class="layui-btn layui-btn-primary cancel">取消</button> </div> </div>',
        new l(s)
    }),
    e("tms/merchant/baseinfo/combination",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$escape),
        r = e.count,
        i = t.$each,
        s = e.renders_data,
        o = (e.render, e.$index, e.design_pano),
        u = e.preview_fpath,
        a = "";
        return a += '<div class="combinationwrap"> <div class="desc"><p>当前共有 <i>',
        a += n(r),
        a += '</i> 张全景图,勾选多张图片拼接成3D漫游图</p></div> <div class="content clearfix"> <div class="content-choice pull-left"> ',
        i(s,
        function(e) {
            a += ' <div class="item"> <div class="item-top" data-no="',
            a += n(e.no),
            a += '"> <img class="lazy" data-lazyload="',
            a += n(e.thumbnail_url),
            a += '@!260x195.jpg" src="http://static.fuwo.com/static/iyun/images/common/error/img_onload_error.png?v=0060v67"> <i class="',
            e.is_active && (a += "checked "),
            a += '"></i> </div> <div class="item-btm"> <div class="location">',
            a += n(e.name),
            a += '</div> <div class="timeset clearfix"> <div class="time"><i>',
            a += n(e.modify_time),
            a += '</i></div> <div class="set ',
            e.no == o.start_no && (a += " select"),
            a += '" data-no="',
            a += n(e.no),
            a += '"><i>设置为起始点</i></div> </div> </div> </div> '
        }),
        a += ' </div> <div class="content-view pull-right"> <div class="content-title"><h3>全景漫游</h3></div> <div class="panoview"> ',
        o ? (a += ' <a href="http://3d.fuwo.com/pano/series/', a += n(o.no), a += '/" target="_blank"><img src="', a += n(o.thumbnail_url), a += '@!240x240.jpg" alt=""></a> ') : a += ' <a href="javascript:void(0);"><img src="http://static.fuwo.com/static/iyun/images/new/common/placeholder.jpg" alt=""></a> ',
        a += ' </div> <div class="content-title"><h3>导航</h3></div> <div class="navview-wrap"> <div class="navview"> <img src="',
        a += n(u),
        a += '" alt=""> </div> <div class="navanchor"> <ul> ',
        i(s,
        function(e) {
            a += " ",
            e.position && (a += " ", e.no == o.start_no ? (a += ' <li class="state active start" data-no="', a += n(e.no), a += '" style="margin: -10px 0 0 -10px; top:', a += n(e.position.y / 8), a += "%;left:", a += n(e.position.x / 8), a += '%"></li> ') : e.is_active ? (a += ' <li class="state active" data-no="', a += n(e.no), a += '" style="margin: -10px 0 0 -10px; top:', a += n(e.position.y / 8), a += "%;left:", a += n(e.position.x / 8), a += '%"></li> ') : (a += ' <li class="state" data-no="', a += n(e.no), a += '" style="margin: -10px 0 0 -10px; top:', a += n(e.position.y / 8), a += "%;left:", a += n(e.position.x / 8), a += '%"></li> '), a += " "),
            a += " "
        }),
        a += ' </ul> </div> </div> <div class="showstates clearfix"> <i class="pull-left">起始点</i> <i class="chice">选中</i> <i class="pull-right">未选中</i> </div> <div class="explain"> <p> 注:起始点为3D全景漫游的起点位置，若该位置被取消选中，该起始点自动移至第一个选中的全景图 </p> </div> </div> </div> <div class="btnwrap"> <button class="createbtn">一键生成效果图</button> </div> </div>',
        new l(a)
    }),
    e("tms/merchant/bounced/msg",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$escape),
        r = e.msg,
        i = "";
        return i += '<div class="copydel-content"> <p class="mt-15">',
        i += n(r),
        i += '</p> </div> <div class="layui-form-item"> <div class="layui-input-block"> <button class="layui-btn confirm" lay-submit lay-filter="formDemo">确定</button> <button type="reset" class="layui-btn layui-btn-primary cancel">取消</button> </div> </div>',
        new l(i)
    }),
    e("tms/merchant/datastatistics/adduser", '<div class="layui-form"> <div class="searchings pull-right"> <input type="text" class="pull-left search-input" value="" placeholder="输入想要搜索的账号名、昵称或手机号"> <button class="pull-left search"><i></i></button> </div> <table class="layui-table"> <colgroup> <col width="98"> <col width="199"> <col width="199"> <col width="199"> </colgroup> <thead> <tr class="text-center"> <th style="text-align: center">选择</th> <th style="text-align: center">昵称</th> <th style="text-align: center">账号名</th> <th style="text-align: center">手机号</th> </tr> </thead> <tbody class="user_list"> </tbody> </table> <footer class="footer pull-right"> <div id="changepages"> </div> </footer> <div class="layui-form-item text-center"> <button class="layui-btn confirm" lay-submit lay-filter="formDemo" style="">确定</button> </div> </div> '),
    e("tms/merchant/datastatistics/user_list",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$each),
        r = e.musers,
        i = (e.value, e.$index, t.$escape),
        s = "";
        return n(r,
        function(e) {
            s += ' <tr> <td> <div class="choose"> <input type="radio" checked="checked" name="all" value=""> <label name="all" class="user-choice ',
            e.is_active && (s += " checked "),
            s += '" for="all" data-id="',
            s += i(e.id),
            s += '" data-first_name="',
            s += i(e.first_name),
            s += '"></label> </div> </td> <td>',
            s += i(e.first_name),
            s += "</td> <td>",
            s += i(e.username),
            s += "</td> <td>",
            s += i(e.phone),
            s += "</td> </tr> "
        }),
        new l(s)
    }),
    e("tms/merchant/details/addmaterial", '<div class="layui-form"> <div class="wrap"> <div class="btn-group personal-public pull-left" role="group"> <div class="btn-group" role="group"> <button type="button" class="btn btn-default personal switch">私有库</button> </div> <div class="btn-group" role="group"> <button type="button" class="btn btn-default public">公共库</button> </div> </div> <div class="searchings clearfix pull-right"> <input type="text" class="pull-left" value="" placeholder="输入想要搜索的账号名、昵称或手机号"> <button class="pull-left"><i></i></button> </div> </div> <table class="layui-table"> <colgroup> <col width="120"> <col width="220"> <col width="200"> <col width="120"> <col width="260"> </colgroup> <thead> <tr class="text-center"> <th style="text-align: center">模型预览图</th> <th style="text-align: center">模型名称</th> <th style="text-align: center">类型</th> <th style="text-align: center">福币消耗</th> <th style="text-align: center">操作</th> </tr> </thead> <tbody> <tr> <td class="modelpreview"> <img src="/static/iyun/images/merchant/modelpreview.jpg" alt=""> </td> <td>一兆装饰现代中式卧室床</td> <td> <select name="type" class="show text-center"> <option value="0" selected>选择类型</option> <option value="1">class1</option> <option value="1">class1</option> </select> </td> <td>50</td> <td> <div class="btn-group" role="group"> <button type="button" class="btn btn-default application">添加并渲染</button> </div> </td> </tr> <tr> <td class="modelpreview"> <img src="/static/iyun/images/merchant/modelpreview.jpg" alt=""> </td> <td>一兆装饰现代中式卧室床</td> <td> <select name="type" class="show text-center"> <option value="0" selected>选择类型</option> <option value="1">class1</option> <option value="1">class1</option> </select> </td> <td>50</td> <td> <div class="btn-group" role="group"> <button type="button" class="btn btn-default application">添加并渲染</button> </div> </td> </tr> <tr> <td class="modelpreview"> <img src="/static/iyun/images/merchant/modelpreview.jpg" alt=""> </td> <td>一兆装饰现代中式卧室床</td> <td> <select name="type" class="show text-center"> <option value="0" selected>选择类型</option> <option value="1">class1</option> <option value="1">class1</option> </select> </td> <td>50</td> <td> <div class="btn-group" role="group"> <button type="button" class="btn btn-default application">添加并渲染</button> </div> </td> </tr> </tbody> </table> <footer class="footer pull-right"> <div id="changepages"> </div> </footer> </div> '),
    e("tms/merchant/details/combination", '<div class="combinationwrap"> <div class="desc"><p>当前公有 <i>0</i> 张全景图,勾选多张图片拼接成3D漫游图</p></div> <div class="content clearfix"> <div class="content-choice pull-left"> <div class="item"> <div class="item-top" data-id="100"> <img src="" alt=""> <i class=""></i> </div> <div class="item-btm"> <div class="location">卧室</div> <div class="timeset clearfix"> <div class="time"><i>2017-05-05 17:14</i></div> <div class="set" data-id="100"><i>设置为起始点</i></div> </div> </div> </div> <div class="item"> <div class="item-top" data-id="200"> <img src="" alt=""> <i class=""></i> </div> <div class="item-btm"> <div class="location">卧室</div> <div class="timeset clearfix"> <div class="time"><i>2017-05-05 17:14</i></div> <div class="set" data-id="200"><i>设置为起始点</i></div> </div> </div> </div> <div class="item"> <div class="item-top" data-id="300"> <img src="" alt=""> <i class=""></i> </div> <div class="item-btm"> <div class="location">卧室</div> <div class="timeset clearfix"> <div class="time"><i>2017-05-05 17:14</i></div> <div class="set" data-id="300"><i>设置为起始点</i></div> </div> </div> </div> <div class="item"> <div class="item-top"> <img src="" alt=""> <i class="checked"></i> </div> <div class="item-btm"> <div class="location">卧室</div> <div class="timeset clearfix"> <div class="time"><i>2017-05-05 17:14</i></div> <div class="set"><i>设置为起始点</i></div> </div> </div> </div> <div class="item"> <div class="item-top"> <img src="/static/iyun/images/merchant/bronpic.png" alt=""> <i class="checked"></i> </div> <div class="item-btm"> <div class="location">卧室</div> <div class="timeset clearfix"> <div class="time"><i>2017-05-05 17:14</i></div> <div class="set select"><i>设置为起始点</i></div> </div> </div> </div> <div class="item"> <div class="item-top"> <img src="/static/iyun/images/merchant/bronpic.png" alt=""> <i class="checked"></i> </div> <div class="item-btm"> <div class="location">卧室</div> <div class="timeset clearfix"> <div class="time"><i>2017-05-05 17:14</i></div> <div class="set select"><i>设置为起始点</i></div> </div> </div> </div> <div class="item"> <div class="item-top"> <img src="/static/iyun/images/merchant/bronpic.png" alt=""> <i class="checked"></i> </div> <div class="item-btm"> <div class="location">卧室</div> <div class="timeset clearfix"> <div class="time"><i>2017-05-05 17:14</i></div> <div class="set select"><i>设置为起始点</i></div> </div> </div> </div> </div> <div class="content-view pull-left"> <div class="content-title"><h3>全景漫游</h3></div> <div class="panoview">  <a href="http://www.baidu.com"><img src="" alt=""></a> </div> <div class="content-title"><h3>导航</h3></div> <div class="navview-wrap"> <div class="navview"> <img src="/static/iyun/images/merchant/huxing.png" alt=""> </div> <div class="navanchor"> <ul> <li class="state" data-id="100" style="top: 10px; left: 20px;"></li> <li class="state" data-id="200" style="top: 50px; left: 100px;"></li> <li class="state" data-id="300" style="top: 100px; left: 100px;"></li> </ul> </div> </div> <div class="showstates clearfix"> <i class="pull-left">起始点</i> <i class="chice">选中</i> <i class="pull-right">未选中</i> </div> <div class="explain"> <p> 注:起始点为3D全景漫游的起点位置，若该位置被取消选中，该起始点自动移至第一个选中的全景图 </p> </div> </div> </div> <div class="btnwrap"> <button class="createbtn">一键生成效果图</button> </div> </div>'),
    e("tms/merchant/details/panoramaedit", '<div class="layui-form"> <div class="layui-form-item"> <label class="layui-form-label">logo种类</label> <div class="layui-input-block text-left" id="users"> <input type="radio" checked="checked" name="corporate" value="企业用户"> <label name="corporate" class="checked" for="corporate">企业用户</label> <input type="radio" name="designer" value="设计师用户" > <label name="designer" for="designer">设计师用户</label> </div> </div> <div class="layui-form-item loginid"> <label class="layui-form-label">名称</label> <div class="layui-input-inline"> <input type="text" name="login" required lay-verify="required" class="pull-left show" placeholder="上海爱福窝云技术有限公司" autocomplete="off" class="layui-input" id="username"> </div> </div> <div class="layui-form-item loginpwd"> <label class="layui-form-label">联系电话</label> <div class="layui-input-inline"> <input type="password" name="password" required lay-verify="required" placeholder="400-000000" autocomplete="off" class="layui-input" id="password"> </div> </div> <div class="layui-form-item loginpwd"> <label class="layui-form-label">跳转链接</label> <div class="layui-input-inline"> <input type="password" name="password" required lay-verify="required" placeholder="http://www.fuwo.com" autocomplete="off" class="layui-input" id="password1"> </div> </div> <div class="layui-form-item uploadlogo"> <label class="layui-form-label">logo</label> <div class="layui-input-inline"> <div class="" id="crop-avatar"> <button type="button" class="btn pull-left" data-toggle="modal" data-target="#avatar-modal" id="logo" style="margin: 10px;"><span>添加图片</span></button> <div class="modal fade" id="avatar-modal" aria-hidden="true" aria-labelledby="avatar-modal-label" role="dialog" tabindex="-1"> <div class="modal-dialog modal-lg"> <div class="modal-content"> <form class="avatar-form"> <div class="modal-header"> <button class="close" data-dismiss="modal" type="button">&times;</button> <h4 class="modal-title" id="avatar-modal-label">上传图片</h4> </div> <div class="modal-body"> <div class="avatar-body"> <div class="avatar-upload"> <input class="avatar-src" name="avatar_src" type="hidden"> <input class="avatar-data" name="avatar_data" type="hidden"> <label for="avatarInput" style="line-height: 35px;">图片上传</label> <button class="btn" type="button" style="height: 35px;" onClick="$(\'input[id=avatarInput]\').click();">请选择图片</button> <span id="avatar-name"></span> <input class="avatar-input hide" id="avatarInput" name="avatar_file" type="file"></div> <div class="row"> <div class="col-md-9"> <div class="avatar-wrapper"></div> </div> <div class="col-md-3"> <div class="avatar-preview preview-lg" id="imageHead"></div> </div> </div> <div class="row avatar-btns"> <div class="col-md-4"> <div class="btn-group"> <button class="btn btn-danger fa fa-undo" data-method="rotate" data-option="-90" type="button" title="Rotate -90 degrees"> 向左旋转</button> </div> <div class="btn-group"> <button class="btn btn-danger fa fa-repeat" data-method="rotate" data-option="90" type="button" title="Rotate 90 degrees"> 向右旋转</button> </div> </div> <div class="col-md-5" style="text-align: right;"> <button class="btn btn-danger fa fa-arrows" data-method="setDragMode" data-option="move" type="button" title="移动"> <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="$().cropper(&quot;setDragMode&quot;, &quot;move&quot;)"></span> </button> <button type="button" class="btn btn-danger fa fa-search-plus" data-method="zoom" data-option="0.1" title="放大图片"> <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="$().cropper(&quot;zoom&quot;, 0.1)"></span> </button> <button type="button" class="btn btn-danger fa fa-search-minus" data-method="zoom" data-option="-0.1" title="缩小图片"> <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="$().cropper(&quot;zoom&quot;, -0.1)"></span> </button> <button type="button" class="btn btn-danger fa fa-refresh" data-method="reset" title="重置图片"> <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="$().cropper(&quot;reset&quot;)" aria-describedby="tooltip866214"></span> </button> </div> <div class="col-md-3"> <button class="btn btn-danger btn-block avatar-save fa fa-save" type="button" data-dismiss="modal"> 保存修改</button> </div> </div> </div> </div> </form> </div> </div> </div> <div class="loading" aria-label="Loading" role="img" tabindex="-1"></div> </div> </div> </div> <div class="layui-form-item"> <label class="layui-form-label">背景音乐</label> <div class="layui-input-block text-left" id="music"> <input type="radio" checked="checked" name="musicdown" value="关闭"> <label name="musicdown" class="checked" for="musicdown">关闭</label> <input type="radio" name="musicup" value="开启" > <label name="musicup" for="musicup">开启</label> </div> </div> <div class="layui-form-item"> <label class="layui-form-label">户型导航</label> <div class="layui-input-block text-left" id="modelnav"> <input type="radio" checked="checked" name="musicdown" value="关闭"> <label name="musicdown" class="checked" for="musicdown">关闭</label> <input type="radio" name="navup" value="开启" > <label name="navup" for="navup">开启</label> </div> </div> <div class="layui-form-item"> <label class="layui-form-label">开场方式</label> <div class="layui-input-block text-left" id="openstyle"> <input type="radio" checked="checked" name="blurpreview" value="模糊预览"> <label name="blurpreview" class="checked" for="blurpreview">模糊预览</label> <input type="radio" name="planet" value="小行星" > <label name="planet" for="planet">小行星</label> </div> </div> <div class="layui-form-item"> <label class="layui-form-label">启动页</label> <div class="layui-input-block text-left" id="startpage"> <input type="radio" checked="checked" name="startdown" value="关闭"> <label name="startdown" class="checked" for="startdown">关闭</label> <input type="radio" name="startup" value="开启" > <label name="startup" for="startup">开启</label> </div> </div> <div class="layui-form-item"> <label class="layui-form-label support">爱福窝技术支持</label> <div class="layui-input-block text-left" id="support"> <input type="radio" checked="checked" name="supportshow" value="显示"> <label name="supportshow" class="checked" for="supportshow">显示</label> <input type="radio" name="supporthid" value="隐藏" > <label name="supporthid" for="supporthid">隐藏</label> </div> </div> <div class="layui-form-item"> <label class="layui-form-label">材质替换</label> <div class="layui-input-block text-left" id="materialreplace"> <input type="radio" checked="checked" name="materialshow" value="显示"> <label name="materialshow" class="checked" for="materialshow">显示</label> <input type="radio" name="materialhid" value="隐藏" > <label name="materialhid" for="materialhid">隐藏</label> </div> </div> <div class="layui-form-item"> <label class="layui-form-label">商品标签</label> <div class="layui-input-block text-left" id="pricetag"> <input type="radio" checked="checked" name="tagshow" value="显示"> <label name="tagshow" class="checked" for="tagshow">显示</label> <input type="radio" name="taghid" value="隐藏" > <label name="taghid" for="taghid">隐藏</label> </div> </div> <div class="layui-form-item" > <label class="layui-form-label">全景介绍</label> <div class="layui-input-block text-left" id="panoramaintro"> <input type="radio" checked="checked" name="introshow" value="显示"> <label name="introshow" class="checked" for="introshow">显示</label> <input type="radio" name="introhid" value="隐藏" > <label name="introhid" for="introhid">隐藏</label> </div> </div> <div class="layui-form-item"> <label class="layui-form-label">全景分享</label> <div class="layui-input-block text-left" id="panoramashare"> <input type="radio" checked="checked" name="shareup" value="开启"> <label name="shareup" class="checked" for="shareup">开启</label> <input type="radio" name="sharehid" value="隐藏" > <label name="sharehid" for="sharehid">隐藏</label> </div> </div> <div class="layui-form-item"> <label class="layui-form-label">二维码</label> <div class="layui-input-block text-left" id="qrcode"> <input type="radio" checked="checked" name="qrup" value="开启"> <label name="qrup" class="checked" for="qrup">开启</label> <input type="radio" name="qrhid" value="隐藏" > <label name="qrhid" for="qrhid">隐藏</label> </div> </div> <div class="layui-form-item"> <label class="layui-form-label">陀螺仪</label> <div class="layui-input-block text-left" id="gyroscope"> <input type="radio" checked="checked" name="gyroscopeup" value="开启"> <label name="gyroscopeup" class="checked" for="gyroscopeup">开启</label> <input type="radio" name="gyroscopehid" value="隐藏" > <label name="gyroscopehid" for="gyroscopehid">隐藏</label> </div> </div> <div class="layui-form-item"> <div class="layui-input-block text-left"> <button class="layui-btn confirm" lay-submit lay-filter="formDemo">保存</button> </div> </div> </div> '),
    e("tms/merchant/details/validity", '<div class="layui-form-item validity-wrap"> <label class="layui-form-label">有效期自设置</label> <div class="layui-input-inline"> <input type="number" class="pull-left show layui-input" min="-1" autocomplete="off" id="validityContent" value="-1"> 天内有效 <span>(-1 表示不限时间)</span> </div> </div> <div class="layui-form-item"> <div class="layui-input-block"> <button class="layui-btn confirm" id="effectSet" lay-submit lay-filter="formDemo">确定</button> <button type="reset" class="layui-btn layui-btn-primary cancel">取消</button> </div> </div>'),
    e("tms/merchant/housetype/copymodel", '<div class="copydel-content"> <p>确认复制该户型吗？</p> </div> <div class="layui-form-item"> <div class="layui-input-block"> <button class="layui-btn confirm" lay-submit lay-filter="formDemo">确定</button> <button type="reset" class="layui-btn layui-btn-primary cancel">取消</button> </div> </div>'),
    e("tms/merchant/housetype/houseedit", '<div class="layui-form houseedit"> <div class="layui-form-item"> <label class="layui-form-label">户型名称:</label> <div class="layui-input-block"> <input type="text" name="title" required lay-verify="required" placeholder="请输入户型名称" autocomplete="off" class="layui-input"> </div> </div> <div class="layui-form-item"> <label class="layui-form-label">客户名称:</label> <div class="layui-input-block"> <input type="text" name="title" required lay-verify="required" placeholder="请输入客户名称" autocomplete="off" class="layui-input"> </div> </div> <div class="layui-form-item"> <label class="layui-form-label">小区名称:</label> <div class="layui-input-block"> <input type="text" name="title" required lay-verify="required" placeholder="请输入小区名称" autocomplete="off" class="layui-input"> </div> </div> <div class="layui-form-item"> <label class="layui-form-label">所在地区</label> <div class="layui-input-block"> <select name="account" class="show pull-left"> <option value="" selected>省</option> <option value="0">安徽省</option> <option value="1">河北省</option> <option value="2">贵州省</option> </select> <select name="account" class="show pull-left"> <option value="" selected>市</option> <option value="0">上海市</option> <option value="1">北京市</option> <option value="2">天津市</option> </select> </div> </div> <div class="layui-form-item"> <div class="layui-input-block" style="margin-left: 94px;"> <input type="text" name="title" required lay-verify="required" placeholder="填写详细地址" autocomplete="off" class="layui-input detailaddress"> </div> </div> <div class="layui-form-item btnwrap" > <div class="layui-input-block"> <button class="layui-btn mr-20" lay-submit lay-filter="formDemo">确定</button> <button class="layui-btn mr-20" lay-submit lay-filter="formDemo">取消</button> </div> </div> </div>'),
    e("tms/merchant/housetype/selectassign", '<div class="layui-form"> <div class="searchings clearfix"> <input type="text" class="pull-left" value="" placeholder="输入想要搜索的账号名、昵称或手机号"> <button class="pull-left"><i></i>搜索</button> </div> <table class="layui-table"> <colgroup> <col width="98"> <col width="199"> <col width="199"> <col width="199"> </colgroup> <thead> <tr class="text-center"> <th style="text-align: center">选择</th> <th style="text-align: center">昵称</th> <th style="text-align: center">账号名</th> <th style="text-align: center">手机号</th> </tr> </thead> <tbody> <tr> <td> <div class="choose"> <input type="radio" checked="checked" name="all" value=""> <label name="all" for="all"></label> </div> </td> <td>小满</td> <td>1314@fuwo.com</td> <td>15888802323</td> </tr> <tr> <td> <div class="choose"> <input type="radio" checked="checked" name="all" value=""> <label name="all" class="checked" for="all"></label> </div> </td> <td>小满</td> <td>1314@fuwo.com</td> <td>15888802323</td> </tr> <tr> <td> <div class="choose"> <input type="radio" checked="checked" name="all" value=""> <label name="all" for="all"></label> </div> </td> <td>小满</td> <td>1314@fuwo.com</td> <td>15888802323</td> </tr> <tr> <td> <div class="choose"> <input type="radio" checked="checked" name="all" value=""> <label name="all" class="checked" for="all"></label> </div> </td> <td>小满</td> <td>1314@fuwo.com</td> <td>15888802323</td> </tr> <tr> <td> <div class="choose"> <input type="radio" checked="checked" name="all" value=""> <label name="all" for="all"></label> </div> </td> <td>小满</td> <td>1314@fuwo.com</td> <td>15888802323</td> </tr> </tbody> </table> <footer class="footer pull-right"> <div id="changepages"> </div> </footer> <div class="layui-form-item text-center"> <button class="layui-btn confirm" lay-submit lay-filter="formDemo" style="">确定</button> </div> </div> '),
    e("tms/merchant/item/batch_classify", ' <div class="compile"> <form> <div class="select-res"> <em>选择的分类：（多选）</em> </div> <div class="select-box"> <div class="wrap"> <ul class="first"></ul> <ul class="second"></ul> <ul class="third"></ul> </div> </div> <div class="select-button">确定</div> </form> </div> '),
    e("tms/merchant/item/classify",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$each),
        r = e.categorys,
        i = (e.value, e.$index, t.$escape),
        s = "";
        return s += '<div class="compile"> <form> <div class="select-res"> <em>当前分类：（多选）</em> ',
        n(r,
        function(e) {
            s += " <span>",
            s += i(e.name),
            s += '<a data-id="',
            s += i(e.id),
            s += '"></a> <input type="hidden" value="',
            s += i(e.id),
            s += '" name="cid[]"> <input type="hidden" value="',
            s += i(e.name),
            s += '" name="cname[]"> </span> '
        }),
        s += ' </div> <div class="select-box"> <div class="wrap"> <ul class="first"></ul> <ul class="second"></ul> <ul class="third"></ul> </div> </div> <div class="select-button js-sure">完成</div> </form> </div>',
        new l(s)
    }),
    e("tms/merchant/item/classify_item",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$escape),
        r = e.category_dict,
        i = "";
        return i += '<ul class="nav nav-tabs" role="tablist"> <li role="presentation" data-id="',
        i += n(r[0]),
        i += '" class="active" ><a href="#mainSoftware" aria-controls="mainSoftware" role="tab" data-toggle="tab">3D软件菜单</a></li> <li role="presentation" data-id="',
        i += n(r[1]),
        i += '"><a href="#mainSoftware" aria-controls="floorClassify" role="tab" data-toggle="tab">地面工具菜单</a></li> <li role="presentation" data-id="',
        i += n(r[2]),
        i += '"><a href="#mainSoftware" aria-controls="wallClassify" role="tab" data-toggle="tab">墙面工具菜单</a></li> <li role="presentation" data-id="',
        i += n(r[3]),
        i += '"><a href="#mainSoftware" aria-controls="supClassify" role="tab" data-toggle="tab">吊顶工具菜单</a></li> </ul> <div class="compile"> <form> <div class="select-res"> </div> <div class="select-box"> <div class="wrap"> <ul class="first"></ul> <ul class="second"></ul> <ul class="third"></ul> </div> </div> <div class="select-button js-sure">完成</div> </form> </div> ',
        new l(i)
    }),
    e("tms/merchant/item/importcode",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$escape),
        r = e.record,
        i = "";
        return i += '<div class="importcode"> <ul> <li class="clearfix"> <span class="text-right pull-left">名称:</span> <p class="pull-left" id="name">',
        i += n(r.product_name),
        i += '</p> </li> <li class="clearfix"> <span class="text-right pull-left">模型录入码:</span> <p class="pull-left copydiv" id="code">',
        i += n(r.security_code),
        i += ' </p> </li> <li> <div class="layui-form-item"> <div class="layui-input-block"> <button class="layui-btn copy confirm" data-clipboard-action="copy" data-clipboard-target=".copydiv">复制录入码</button> <button class="layui-btn again" lay-submit lay-filter="formDemo" data-no="',
        i += n(r.no),
        i += '">重新获取</button> </div> </div> </li> </ul> </div>',
        new l(i)
    }),
    e("tms/merchant/material/add", '<div class="layui-form"> <div class="wrap"> <div class="btn-group personal-public pull-left" role="group"> <div class="btn-group" role="group"> <button type="button" class="btn btn-default personal type switch" data-type="0">私有库</button> </div> <div class="btn-group" role="group"> <button type="button" class="btn btn-default public type" data-type="1">公共库</button> </div> </div> <div class="searchings clearfix pull-right"> <input type="text" class="pull-left item-search-input" value="" placeholder="输入想要搜索的模型名称"> <button class="pull-left js-item-search"><i></i></button> </div> </div> <table class="layui-table item"> <colgroup> <col width="120"> <col width="220"> <col width="200"> <col width="120"> <col width="260"> </colgroup> <thead> <tr class="text-center"> <th style="text-align: center">模型预览图</th> <th style="text-align: center">模型名称</th> <th style="text-align: center">类型</th> <th style="text-align: center">福币消耗</th> <th style="text-align: center">操作</th> </tr> </thead> <tbody> </tbody> </table> <footer class="footer pull-right"> <div id="changepages"> </div> </footer> </div> '),
    e("tms/merchant/material/item_data",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$each),
        r = e.records,
        i = (e.record, e.$index, t.$escape),
        s = e.fcoin_amount,
        o = "";
        return o += " ",
        n(r,
        function(e) {
            o += ' <tr> <td class="modelpreview"> <img src="',
            o += i(e.preview_url),
            o += '" onerror="this.src=\'http://static.fuwo.com/static/iyun/images/common/error/img_onload_error.png?v=0060v67\'"> </td> <td>',
            o += i(e.product_name),
            o += '</td> <td> <select name="type" class="show text-center type"> <option value="" >选择类型</option> <option value="0" >墙纸</option> <option value="1" >地板</option> </select> </td> <td>',
            o += i(s),
            o += '</td> <td> <div class="btn-group" role="group"> ',
            1 == e.status ? (o += ' <button type="button" class="btn btn-default application js-add" disabled=\'disabled\' data-no="', o += i(e.item_no), o += '" >已添加</button> ') : (o += ' <button type="button" class="btn btn-default application js-add" data-no="', o += i(e.item_no), o += '" >添加并渲染</button> '),
            o += " </div> </td> </tr> "
        }),
        new l(o)
    }),
    e("tms/merchant/menu/delMenu", '<div class="copydel-content"> <p>确定删除已选中菜单吗？</p> </div> <div class="layui-form-item"> <div class="layui-input-block"> <button class="layui-btn confirm" lay-submit lay-filter="formDemo">确定</button> <button type="reset" class="layui-btn layui-btn-primary cancel">取消</button> </div> </div>'),
    e("tms/merchant/model/addModel", '<div class="upload-btns"> <a href="javascript:void(0);" class="model upload">模型上传</a> <a href="javascript:void(0);" class="maps upload">贴图上传</a> </div>'),
    e("tms/merchant/model/batchclassify", '<div class="batchclassify-content"> <div class="layui-input-inline"> <select name="account" lay-verify="required\\phone" class="show"> <option value="0" selected>客厅</option> <option value="1">厨房</option> <option value="1">卫生间</option> </select> </div> <div class="layui-input-inline"> <select name="account" lay-verify="required\\phone" class="show"> <option value="0" selected>沙发</option> <option value="1">餐桌</option> <option value="1">书架</option> </select> </div> <div class="layui-input-inline"> <select name="account" lay-verify="required\\phone" class="show"> <option value="0" selected>双人沙发</option> <option value="1">餐桌</option> <option value="1">餐桌</option> </select> </div> </div> <div class="layui-form-item"> <div class="layui-input-block"> <button class="layui-btn confirm" lay-submit lay-filter="formDemo">确定</button> <button type="reset" class="layui-btn layui-btn-primary cancel">取消</button> </div> </div>'),
    e("tms/merchant/model/batchdelete", '<div class="copydel-content"> <p>确定删除已选中模型吗？</p> </div> <div class="layui-form-item"> <div class="layui-input-block"> <button class="layui-btn confirm" lay-submit lay-filter="formDemo">确定</button> <button type="reset" class="layui-btn layui-btn-primary cancel">取消</button> </div> </div>'),
    e("tms/merchant/model/classifydel", '<div class="copydel-content"> <p class="mt-15">确定删除已选中模型吗？</p> </div> <div class="layui-form-item"> <div class="layui-input-block"> <button class="layui-btn confirm" lay-submit lay-filter="formDemo">确定</button> <button type="reset" class="layui-btn layui-btn-primary cancel">取消</button> </div> </div>'),
    e("tms/merchant/model/importcode", '<div class="importcode"> <ul> <li class="clearfix"> <span class="text-right pull-left">名称:</span> <p class="pull-left" id="name">ahah</p> </li> <li class="clearfix"> <span class="text-right pull-left">模型录入码:</span> <p class="pull-left" id="code">adasaddddddddddddddddddddddddddddddddd </p> </li> <li> <button>重新获取</button> </li> <li> <div class="layui-form-item"> <div class="layui-input-block"> <button class="layui-btn confirm again" lay-submit lay-filter="formDemo">复制录入码</button> </div> </div> </li> </ul> </div> '),
    e("tms/merchant/personal/bindsubmit", '<div class="layui-form houseedit"> <div class="layui-form-item"> <label class="layui-form-label">手机号码:</label> <div class="layui-input-block"> <input type="text" name="user" required lay-verify="required" placeholder="请输入手机号码" autocomplete="off" class="layui-input user"> </div> </div> <div class="layui-form-item"> <label class="layui-form-label">验证码:</label> <div class="layui-input-block"> <input type="text" name="code" required lay-verify="required" placeholder="请输入验证码" autocomplete="off" class="layui-input pull-left verification code"> <input type="button" class="layui-btn pull-left js-get-verify-code" lay-submit lay-filter="formDemo" id="getCode" value="获取验证码"> </div> </div> <div class="layui-form-item" > <div class="layui-input-block"> <button class="layui-btn mr-20 confirm" lay-submit lay-filter="formDemo">确定</button> </div> </div> </div>'),
    e("tms/merchant/personal/changepwd", '<div class="layui-form"> <div class="layui-form-item oldpwd"> <label class="layui-form-label">旧密码:</label> <div class="layui-input-inline"> <input type="password" name="old_password" id="old_password" class="layui-input show" placeholder="请输入旧密码" autocomplete="off"> </div> </div> <div class="layui-form-item newpwd"> <label class="layui-form-label">新密码:</label> <div class="layui-input-inline"> <input type="password" name="new_password" id="new_password" placeholder="请输入新密码" autocomplete="off" class="layui-input"> </div> </div> <div class="layui-form-item pwdconfirm"> <label class="layui-form-label">确认密码:</label> <div class="layui-input-inline"> <input type="password" name="r_new_password" id="r_new_password" placeholder="请再次输入新密码" autocomplete="off" class="layui-input"> </div> </div> <div class="layui-form-item" style="width: 100%;"> <div class="layui-input-block"> <button class="layui-btn confirm" lay-submit lay-filter="formDemo">确认</button> <button type="reset" class="layui-btn layui-btn-primary cancel">取消</button> </div> </div> </div> '),
    e("tms/merchant/personal/emailbind",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$escape),
        r = e.email,
        i = "";
        return i += '<div class="phonebind-content"> <p>已完成邮箱绑定，</p> <p>您可以使用邮箱<span>',
        i += n(r),
        i += '</span>登录系统！</p> </div> <div class="layui-form-item"> <div class="layui-input-block"> <button class="layui-btn confirm js-sure" lay-submit lay-filter="formDemo">确定</button> </div> </div> ',
        new l(i)
    }),
    e("tms/merchant/personal/phonebind",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$escape),
        r = e.mobile,
        i = "";
        return i += '<div class="phonebind-content"> <p>已完成手机号码绑定，</p> <p>您可以使用手机<span>',
        i += n(r),
        i += '</span>登录系统！</p> </div> <div class="layui-form-item"> <div class="layui-input-block"> <button class="layui-btn confirm js-sure" lay-submit lay-filter="formDemo">确定</button> </div> </div> ',
        new l(i)
    }),
    e("tms/merchant/personal/sentemail", '<div class="layui-form houseedit"> <div class="layui-form-item"> <label class="layui-form-label">邮箱:</label> <div class="layui-input-block"> <input type="text" name="user" required lay-verify="required" placeholder="请输入新邮箱" autocomplete="off" class="layui-input user"> </div> </div> <div class="layui-form-item" > <div class="layui-input-block"> <button class="layui-btn mr-20 js-get-verify-code" lay-submit lay-filter="formDemo">确定</button> </div> </div> </div>'),
    e("tms/o2o/designcreate",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$escape),
        r = e.img_url,
        i = e.design_name,
        s = e.customer_id,
        o = e.no,
        u = "";
        return u += '<form> <div class="pop-collect-thumb" style="border:none;"> <a href="javascript:void(0);"><img src="',
        u += n(r),
        u += '"></a> </div> <div class="pop-collect-main" style="margin-top:40px;"> <div class="pop-collect-album"> <div style="height:32px;"> <span class="margin-right-10 fb f16">方案名称</span> <input type="text" name="design_name" placeholder="请输入方案的名称" value="',
        u += n(i),
        u += '家的设计"> <input type="hidden" id="customer_id" value="',
        u += n(s),
        u += '"> <input type="hidden" id="no" value="',
        u += n(o),
        u += '"> </div> </div> <div class="margin-top-20" style="margin-left:80px;"> <span class="btn btn-success f12 js-design-create margin-right-10">创建</span> <span class="btn btn-disabled f12 js-close">取消</span> </div> </div> </form>',
        new l(u)
    }),
    e("tms/o2o/eliminate", '<div id="eliminate" class="treeview-reset"></div> <div class="text-right margin-top-20"> <span class="btn btn-success f12 js-eliminate-save">确定</span> <span class="btn btn-disabled f12 js-close">取消</span> </div>'),
    e("tms/o2o/piclist",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$each),
        r = e.records,
        i = (e.value, e.$index, t.$escape),
        s = "";
        return s += '<div class="screen-bg pic-bg"></div> <div class="pop" id="piclist"> <span class="pic-close icon-cross"></span> <div class="htmleaf-content bgcolor-3"> <ul class="pgwSlideshow"> ',
        n(r,
        function(e) {
            s += " ",
            2 == e.service_type ? (s += ' <li> <a href="', s += i(e.full_url), s += '" target="_blank"> <img src="', s += i(e.thumbnail_url), s += '" alt="', s += i(e.design_name), s += '" data-description="', s += i(e.design_style_desc), s += '" id="', s += i(e.no), s += '" data-large-src="', s += i(e.origin_url), s += '" data-operate="', s += i(e.service_type), s += '"> </a> </li> ') : (s += ' <li><img src="', s += i(e.thumbnail_url), s += '" alt="', s += i(e.design_name), s += '" data-description="', s += i(e.design_style_desc), s += '" id="', s += i(e.no), s += '" data-large-src="', s += i(e.origin_url), s += '" data-operate="', s += i(e.service_type), s += '"></li> '),
            s += " "
        }),
        s += ' </ul> </div> <input type="hidden" id="design_id" value="',
        s += i(r[0].design_id),
        s += '" /> </div> ',
        new l(s)
    }),
    e("tms/y3/model/march-win",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$escape),
        r = e.data,
        i = t.$each,
        s = (e.model, e.$index, "");
        return s += '<form class="march-win-w"> <div class="win-main"> <div class="main-img"> <img src="',
        s += n(r.preview),
        s += '"/> </div> <div class="main-list"> <ul class="main-title clearfix"> <li class="',
        0 == r.kind && (s += "active"),
        s += '" data-id=0>家具</li> <li class="',
        1 == r.kind && (s += "active"),
        s += '" data-id=1>硬装</li> <li class="',
        2 == r.kind && (s += "active"),
        s += '" data-id=2>配饰</li> </ul> <div class="main-content"> <ul class="clearfix"> ',
        i(r.records[0],
        function(e) {
            s += ' <li> <input class="no" type="hidden" value=',
            s += n(e.id),
            s += '> <img src="',
            s += n(e.previewFpath),
            s += '@!110x110.jpg"/> <span class="collect"> <img src="http://static.fuwo.com/static/iyun/images/y3/icon/btn-Collection-nor.png" alt="收藏" /> </span> </li> '
        }),
        s += ' </ul> </div> </div> </div> <div class="my-col"> <a href="http://3d.fuwo.com/uc/model/fav/"> <span>我的收藏</span> <div class="border"></div> <div class="border"></div> <div class="border"></div> <div class="border"></div> </a> </div> </form>',
        new l(s)
    }),
    e("tms/y3/user/classifyset", ' <div class="compile"> <form> <div class="select-res"> <em>选择的分类：（多选）</em> </div> <div class="select-box"> <div class="wrap"> <ul class="first"></ul> <ul class="second"></ul> <ul class="third"></ul> </div> </div> <div class="select-button">确定</div> </form> </div> '),
    e("tms/y3/user/detailItem",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$escape),
        r = e.record,
        i = t.$each,
        s = e.menu,
        o = (e.item, e.$index, e.sub, "");
        return o += '<form class="model-form" id="model_detail"> <dl class="form-model-list"> <dt>模型编号：</dt> <dd>',
        o += n(r.no),
        o += '</dd> </dl> <dl class="form-model-list"> <dt><span>*</span>名称：</dt> <dd><input class="J-Name" type="text" name="product_name" placeholder="请输入名称" value="',
        o += n(r.product_name),
        o += '"></dd> </dl> ',
        0 == r.item_type && (o += ' <dl class="form-model-list ', 40 == r.status && (o += "form-model-disabeld"), o += '"> <dt><span>*</span>模型类型：</dt> <dd> ', 40 == r.status ? (o += " ", i(s.data,
        function(e) {
            o += " ",
            r.inner_type == e.value && (o += ' <input class="J-Stype" id="model_default" data-type="', o += n(e.value), o += '" data-id="" type="radio" name="model_type" value="', o += n(e.value), o += '" ', r.inner_type == e.value && (o += "checked"), o += " ", 40 == r.status && (o += "disabled"), o += '> <label for="model_default">', o += n(e.name), o += "</label> "),
            o += " "
        }), o += " ") : (o += " ", i(s.data,
        function(e) {
            o += ' <input class="J-Stype" id="model_default" data-type="',
            o += n(e.value),
            o += '" data-id="" type="radio" name="model_type" value="',
            o += n(e.value),
            o += '" ',
            r.inner_type == e.value && (o += "checked"),
            o += " ",
            40 == r.status && (o += "disabled"),
            o += '> <label for="model_default">',
            o += n(e.name),
            o += "</label> "
        }), o += " "), o += ' </dd> </dl> <dl class="form-model-list ', 40 == r.status && (o += "form-model-disabeld"), o += '"> <dt><span>*</span>子类型：</dt>  ', i(s.data,
        function(e) {
            o += ' <dd class="sub-type-info ',
            r.inner_type != e.value && (o += "ihide"),
            o += '" data-type="',
            o += n(e.value),
            o += '"> ',
            40 == r.status ? (o += " ", i(e.content,
            function(e) {
                o += " ",
                r.sub_type == e.value && (o += ' <input class="J-Sub" id="sub_type_default" type="radio" name="sub_type_default" value="', o += n(e.value), o += '" ', r.sub_type == e.value && (o += "checked"), o += " ", 40 == r.status && (o += "disabled"), o += '> <label for="sub_type_default">', o += n(e.name), o += "</label> "),
                o += " "
            }), o += " ") : (o += " ", i(e.content,
            function(e) {
                o += ' <input class="J-Sub" id="sub_type_default" type="radio" name="sub_type_default" value="',
                o += n(e.value),
                o += '" ',
                r.sub_type == e.value && (o += "checked"),
                o += " ",
                40 == r.status && (o += "disabled"),
                o += '> <label for="sub_type_default">',
                o += n(e.name),
                o += "</label> "
            }), o += " "),
            o += " </dd> "
        }), o += ' </dl> <dl class="form-model-list ', 40 == r.status && (o += "form-model-disabeld"), o += '"> <dt><span>*</span>光源类型：</dt> <dd> ', 40 == r.status ? (o += " ", 0 == r.lightable && (o += ' <input class="J-Light" id="light_1" type="radio" name="lightable" value="0" checked > <label for="light_1">无灯光</label> '), o += " ", 1 == r.lightable && (o += ' <input class="J-Light" id="light_2" type="radio" name="lightable" value="1" checked> <label for="light_2">默认光</label '), o += " ") : (o += ' <input class="J-Light" id="light_1" type="radio" name="lightable" value="0" ', 0 == r.lightable && (o += "checked"), o += " ", 40 == r.status && (o += "disabled"), o += '> <label for="light_1">无灯光</label> <input class="J-Light" id="light_2" type="radio" name="lightable" value="1" ', 1 == r.lightable && (o += "checked"), o += " ", 40 == r.status && (o += "disabled"), o += '> <label for="light_2">默认光</label> '), o += ' </dd> </dl> <dl class="form-model-list"> <dt><span>*</span>模型尺寸：</dt> <div class="model-size"> <dd> <input class="J-Model-Width" type="text" class="form-control" placeholder="请输入模型宽度" name="trim_width" value="', o += n(r.trim_width), o += '"> <span class="input-group-addon">宽x（厘米）</span> </dd> <dd> <input class="J-Model-Length" type="text" class="form-control" placeholder="请输入模型长度" name="trim_length" value="', o += n(r.trim_length), o += '"> <span class="input-group-addon">长y（厘米）</span> </dd> <dd> <input class="J-Model-Height" type="text" class="form-control" placeholder="请输入模型高度" name="trim_height" value="', o += n(r.trim_height), o += '"> <span class="input-group-addon">高z（厘米）</span> </dd> </div> </dl> '),
        o += " ",
        0 == r.item_type && (o += ' <dl class="form-model-list ml10"> <dt>所属品牌：</dt> <dd><input class="product-brand J-Brand" type="text" name="product_brand" value="', o += n(r.product_brand), o += '"></dd> </dl> <dl class="form-model-list ml10"> <dt>产品货号：</dt> <dd><input class="product-no J-No" type="text" name="cargo_no" value="', o += n(r.cargo_no), o += '"></dd> </dl> <dl class="form-model-list"> <dt><span>*</span>产品单位：</dt> <dd> <select class="unit-select J-Unit" name="unit"> <option value="1" ', 1 == r.unit && (o += "selected"), o += '>件</option> <option value="2" ', 2 == r.unit && (o += "selected"), o += '>套</option> <option value="3" ', 3 == r.unit && (o += "selected"), o += '>块</option> </select> </dd> </dl> <dl class="form-model-list"> <dt><span>*</span>是否销售商品：</dt> <dd> <input class="J-Ionsale" id="is_onsale_1" type="radio" name="salable" value="1" ', 1 == r.salable && (o += "checked"), o += '> <label for="is_onsale_1">是</label> <input class="J-Ionsale" id="is_onsale_2" type="radio" name="salable" value="0" ', 0 == r.salable && (o += "checked"), o += '> <label for="is_onsale_2">否</label> </dd> </dl> '),
        o += '  <dl class="form-model-list ml10 ',
        0 == r.salable && (o += "ihide"),
        o += ' J-Show"> <dt> 商品链接： </dt> <dd> <input class="J-Link" type="text" name="product_link" placeholder="请输入商品链接" value="',
        o += n(r.product_link),
        o += '"> </dd> </dl> <dl class="form-model-list ',
        0 == r.salable && (o += "ihide"),
        o += ' J-Show"> <dt> <span>*</span>商品价格： </dt> <dd> <input class="J-Price" type="text" name="product_price" placeholder="请输入商品价格" aria-invalid="false" value="',
        o += n(r.product_price),
        o += '"> <span class="input-group-addon">元</span> </dd> </dl> <dl class="form-model-list ',
        0 == r.salable && (o += "ihide"),
        o += ' J-Show"> <dt> <span>*</span>在线价格： </dt> <dd> <input class="J-Line-Price" type="text" name="discount_price" placeholder="请输入折扣价格" aria-invalid="false" value="',
        o += n(r.discount_price),
        o += '"> <span class="input-group-addon">元</span> </dd> </dl> <div class="widget-form-next"><span class="btn btn-middle btn-orange J-Save" data-no="',
        o += n(r.no),
        o += '">保存</span></div> </form> ',
        new l(o)
    }),
    e("tms/y3/user/dialog",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$escape),
        r = e.style,
        i = e.title,
        s = t.$string,
        o = e.content,
        u = "";
        return u += '<div class="screen-bg"></div> <div class="pop" style="width: ',
        u += n(r.width),
        u += "; margin-top: ",
        u += n(r.marginTop),
        u += "; margin-left: ",
        u += n(r.marginLeft),
        u += ";height:",
        u += n(r.height),
        u += ";background:",
        u += n(r.background),
        u += '"> <span class="pop-close pop-ie7 J-Ie7">x</span> <span class="pop-close icon-cross"></span> <div class="pop-title">',
        u += n(i),
        u += '</div> <div class="pop-content"> ',
        u += s(o),
        u += " </div> </div>",
        new l(u)
    }),
    e("tms/y3/user/headModify", ' <div class="modal fade" id="avatar-modal" aria-hidden="true" aria-labelledby="avatar-modal-label" role="dialog" tabindex="-1"> <div class="modal-dialog modal-lg"> <div class="modal-content"> <form class="avatar-form"> <div class="modal-header"> <button class="close" data-dismiss="modal" type="button">&times; </button> <h4 class="modal-title" id="avatar-modal-label">上传图片</h4> </div> <div class="modal-body"> <div class="avatar-body"> <div class="avatar-upload"> <input class="avatar-src" name="avatar_src" type="hidden"> <input class="avatar-data" name="avatar_data" type="hidden"> <label for="avatarInput" style="line-height: 35px;">图片上传</label> <button class="btn" type="button" style="height: 35px;" onClick="$(\'input[id=avatarInput]\').click();">请选择图片 </button> <span id="avatar-name"></span> <input class="avatar-input hide" id="avatarInput" name="avatar_file" type="file"></div> <div class="row clearfix"> <div class="col-md-8"> <div class="avatar-wrapper"></div> </div> <div class="col-md-2 avatar-box"> <div class="avatar-preview preview-lg" id="imageHead"></div> </div> </div> <div class="row clearfix avatar-btns"> <div class="col-md-4"> <div class="btn-group"> <button class="btn btn-danger fa fa-undo" data-method="rotate" data-option="-90" type="button" title="Rotate -90 degrees"> 向左旋转 </button> </div> <div class="btn-group"> <button class="btn btn-danger fa fa-repeat" data-method="rotate" data-option="90" type="button" title="Rotate 90 degrees"> 向右旋转 </button> </div> </div> <div class="col-md-4" style="text-align: right;"> <button class="btn btn-danger fa fa-arrows" data-method="setDragMode" data-option="move" type="button" title="移动"> <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="$().cropper(&quot;setDragMode&quot;, &quot;move&quot;)"></span> </button> <button type="button" class="btn btn-danger fa fa-search-plus" data-method="zoom" data-option="0.1" title="放大图片"> <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="$().cropper(&quot;zoom&quot;, 0.1)"></span> </button> <button type="button" class="btn btn-danger fa fa-search-minus" data-method="zoom" data-option="-0.1" title="缩小图片"> <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="$().cropper(&quot;zoom&quot;, -0.1)"></span> </button> <button type="button" class="btn btn-danger fa fa-refresh" data-method="reset" title="重置图片"> <span class="docs-tooltip" data-toggle="tooltip" title="" data-original-title="$().cropper(&quot;reset&quot;)" aria-describedby="tooltip866214"></span> </button> </div> <div class="col-md-2"> <button class="btn btn-danger btn-block avatar-save fa fa-save" type="button" data-dismiss="modal"> 保存修改 </button> </div> </div> </div> </div> </form> </div> </div> </div> <div class="loading" aria-label="Loading" role="img" tabindex="-1"></div>'),
    e("tms/y3/user/itemcategory",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$each),
        r = e.categorys,
        i = (e.value, e.$index, t.$escape),
        s = e.record,
        o = e.no,
        u = "";
        return u += '<div class="pop-model-type"> <div class="pop-model-top J-Add-type">当前分类： ',
        n(r,
        function(e) {
            u += ' <span data-id="',
            u += i(e.id),
            u += '"> ',
            u += i(e.name),
            u += ' <i class="J-Del-type">x</i></span> '
        }),
        u += ' </div> <div class="pop-model-content"> <ul class="model-ul J-first"> ',
        n(s.children,
        function(e) {
            u += ' <li data-title="',
            u += i(e.name),
            u += '" data-id="',
            u += i(e.id),
            u += '">',
            u += i(e.name),
            u += " <span> > </span></li> "
        }),
        u += ' </ul> </div> <div class="category-properties J-Category-Properties"> </div> <div class="pop-model-bottom"> <span class="btn btn-middle btn-orange btn-disabled J-Add-Model" data-no="',
        u += i(o),
        u += '">添加</span>  </div> </div> ',
        new l(u)
    }),
    e("tms/y3/user/uploadAvatar1",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$escape),
        r = e.avatar_url,
        i = e.user_id,
        s = e.nick_name,
        o = "";
        return o += '<div class="avatar-swf"> <object data="" type="application/x-shockwave-flash" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="600" height="400"> <param name="movie" value="http://static.fuwo.com/static/iyun/js/y3/user/flash/Avatar.swf"> <param name="quality" value="high"> <param name="wmode" value="opaque"> <param name="AllowScriptAccess" value="always"/> <param name="FlashVars" value="avatarUrl=',
        o += n(r),
        o += "&uid=",
        o += n(i),
        o += "&uname=",
        o += n(s),
        o += '"> <embed src="http://static.fuwo.com/static/iyun/js/y3/user/flash/Avatar.swf" width="600" height="400" type="application/x-shockwave-flash" quality="high" allowScriptAccess="always" wmode="opaque" flashvars="avatarUrl=',
        o += n(r),
        o += "&uid=",
        o += n(i),
        o += "&uname=",
        o += n(s),
        o += '"> </object> </div>              ',
        new l(o)
    }),
    e("ueditorext/senddesign",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, e.records),
        r = t.$each,
        i = (e.value, e.$index, t.$escape),
        s = "";
        return s += '<div class="dialog-bd"> <div class="dialog-items-wrap"> ',
        n.length > 0 ? (s += " ", r(n,
        function(e) {
            s += ' <div class="dialog-bd-li"> <a href="http://3d.fuwo.com/design/',
            s += i(e.no),
            s += '/" target="_blank"><img src="',
            s += i(e.photo_url),
            s += '" alt="',
            s += i(e.name),
            s += '" width="205" height="205"/></a><br> <label> ',
            e.houselayout && (s += i(e.houselayout.area), s += "m²"),
            s += " ",
            s += i(e.style),
            s += i(e.name),
            s += "</label> <br> ",
            e.houselayout && (s += i(e.houselayout.city_name), s += i(e.houselayout.community_name)),
            s += '<br> <span class="btn btn-orange btn-middle J-Choice-Design" data-id="',
            s += i(e.id),
            s += '" data-no="',
            s += i(e.no),
            s += '">使用该方案</span> </div> '
        }), s += " ") : s += ' <div class="content-none"> 您还没有设计数据！ <span class="btn btn-middle btn-orange"><a href="http://3d.fuwo.com/myhome3d" target="_blank">新建设计</a></span> </div> ',
        s += ' <input type="hidden" id="json_name"> <input type="hidden" id="pop_title"> </div> <div class="pages-wrap"> <div id="Pagination_dialog" class="Pagination_dialog"></div> </div> </div>',
        new l(s)
    }),
    e("ueditorext/sendhouselayout",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, e.records),
        r = t.$each,
        i = (e.value, e.$index, t.$escape),
        s = "";
        return s += '<div class="dialog-bd"> <div class="dialog-items-wrap"> ',
        n.length > 0 ? (s += " ", r(n,
        function(e) {
            s += ' <div class="dialog-bd-li"> <a href="http://3d.fuwo.com/houselayout/',
            s += i(e.no),
            s += '/" target="_blank"><img src="',
            s += i(e.photo_url),
            s += '" alt="',
            s += i(e.name),
            s += i(e.community_name),
            s += '" width="205" height="205"/></a> <label>',
            s += i(e.city_name),
            s += " ",
            s += i(e.community_name),
            s += "</label> ",
            s += i(e.house_type_name),
            s += i(e.area),
            s += '㎡<br> <span class="btn btn-orange btn-middle J-Choice-Houselayout" data-id="',
            s += i(e.id),
            s += '" data-no="',
            s += i(e.no),
            s += '">使用该户型</span> </div> '
        }), s += " ") : s += ' <div class="content-none"> 您还没有户型图数据！ <span class="btn btn-middle btn-orange"><a href="http://3d.fuwo.com/myhome3d" target="_blank">新建户型</a></span> </div> ',
        s += ' <input type="hidden" id="json_name"> <input type="hidden" id="pop_title"> </div> <div class="pages-wrap"> <div id="Pagination_dialog" class="Pagination_dialog"></div> </div> </div>',
        new l(s)
    }),
    e("ueditorext/sendinfo", '<div class="dialog-bd"> <div class="line-1"> <label class="text-gray" for="">地区</label> <input class="info-item location js-house-loaction" placeholder="所在城市" /> </div> <div class="line-1"> <label class="text-gray" for="">小区</label> <input class="info-item js-house-area" type="text" placeholder="请填写你的小区名"/> </div> <div class="line-1"> <label class="text-gray" for="">户型</label> <select class="info-item select js-house-type" > <option value="一室一厅">一室一厅</option> <option value="两室一厅">两室一厅</option> <option value="两室两厅">两室两厅</option> <option value="一室一厅">三室一厅</option> <option value="一室一厅">三室两厅</option> <option value="一室一厅">四室两厅</option> <option value="一室一厅">五室两厅</option> <option value="一室一厅">LOFT</option> <option value="一室一厅">复式</option> </select> </div> <div class="line-1"> <label class="text-gray" for="">面积</label> <input class="info-item js-house-size" type="text" placeholder="请填写你的房屋面积" maxlength="6"/> m² </div> <div class="btn-wrap"> <a class="btn btn-success btn-confirm btn-large js-house-info-btn" href="javascript:void(0);"> 确 定 </a> </div> </div> '),
    e("ueditorext/sendinsert",
    function(e) {
        "use strict";
        var t = this,
        n = (t.$helpers, t.$escape),
        r = e.no,
        i = e.design_img_src,
        s = e.design_house_name,
        o = e.design_house_area,
        u = e.design_house_location,
        a = e.design_house_style,
        f = e.design_house_type,
        c = e.design_house_size,
        h = "";
        return h += ' <div class="text-gray"> <p> <a target="_blank" href="http://3d.fuwo.com/myhome3d/?openCommand=OPEN_EDIT_DESIGN:',
        h += n(r),
        h += '"> <img class="topic-design-img" style="float:left" src="',
        h += n(i),
        h += '" alt="test" title="',
        h += n(s),
        h += '" width="154" height="154"/> </a> </p> <p class="topic-design-item" style="padding-left:174px"> <a target="_blank" href="http://3d.fuwo.com/myhome3d/?openCommand=OPEN_EDIT_DESIGN:',
        h += n(r),
        h += '" class="f16 fB"> ',
        h += n(s),
        h += '</a> </p> <p class="topic-design-item" style="padding-left:174px">小区名： <strong class="fB">',
        h += n(o),
        h += '</strong></p> <p class="topic-design-item" style="padding-left:174px">地区：<strong class="fB">',
        h += n(u),
        h += '</strong></p> <p class="topic-design-item" style="padding-left:174px">风格：<strong class="fB">',
        h += n(a),
        h += '</strong> </p> <p class="topic-design-item" style="padding-left:174px">户型：<strong class="fB">',
        h += n(f),
        h += '</strong> </p> <p class="topic-design-item" style="padding-left:174px">面积：<strong class="fB">',
        h += n(c),
        h += " m²</strong> </p> </div>",
        new l(h)
    })
} ();