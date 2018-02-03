/*
 * UI功能模块
 *
 * author: Glen
 * created:　2015/5/22
 */

define([
    'jquery',
    'template',
    'bowser',
    'lazyload'
], function($, template, bowser, lazyload) {

    var _ieVersion = function(callback) {
        /**
         * 对ie进行监测
         */
        var ieSize;
        var bowser = navigator.appName;
        var b_version = navigator.appVersion;
        // var version=b_version.split(";");
        // var trim_Version=version[1].replace(/[ ]/g,"");
        if (bowser === "Microsoft Internet Explorer" && b_version.indexOf("MSIE 6.0") > -1) {
            ieSize = 6;
        } else if (bowser === "Microsoft Internet Explorer" && b_version.indexOf("MSIE 7.0") > -1) {
            ieSize = 7;
        }
        if (ieSize < 8) {
            callback();
            return;
        }
    };

    //消息提示窗口
    var _tipHandler = function(msg, result, callback) {
        $(".J-Auth-Expired").remove();
        var icons = result == 'success' ? "share-icon-tip" : "share-icon-warning",
            tipContentDom = '<div class="small-error J-Auth-Expired"><i class="' + icons + '"></i> <span>' + msg + '</span></div>'; //提示内容控件

        $("body").append(tipContentDom);
        var width = parseInt($('.J-Auth-Expired').css("width")) + 1,
            height = parseInt($('.J-Auth-Expired').css("height")),
            marginLeft = -width / 2,
            marginTop = -height / 2 - 200;
        $(".J-Auth-Expired").css({
            height: height,
            marginLeft: marginLeft,
            marginTop: marginTop,
            width: width
        });
        setTimeout(function() {
            if (callback) {
                callback();
            } else {
                $('.J-Auth-Expired').remove();
            }
        }, 2000);
    };

    // 文本输入框的place holder 效果
    var _placeholderHandle = function() {
        if ('placeholder' in document.createElement('input')) { //如果浏览器原生支持placeholder
            return;
        }

        function target(e) {
            var ee = ee || window.event;
            return ee.target || ee.srcElement;
        }

        function _getEmptyHintEl(el) {
            var hintEl = el.hintEl;
            return hintEl && g(hintEl);
        }

        function blurFn(e) {
            var el = target(e);
            if (!el || el.tagName !== 'INPUT' && el.tagName !== 'TEXTAREA') {
                return; //IE下，onfocusin会在div等元素触发
            }
            var emptyHintEl = el.__emptyHintEl;
            if (emptyHintEl) {
                //clearTimeout(el.__placeholderTimer||0);
                //el.__placeholderTimer=setTimeout(function(){//在360浏览器下，autocomplete会先blur再change
                if (el.value) {
                    emptyHintEl.style.display = 'none';
                } else {
                    emptyHintEl.style.display = '';
                }
                //},600);
            }
        }

        function focusFn(e) {
            var el = target(e);
            if (!el || el.tagName !== 'INPUT' && el.tagName !== 'TEXTAREA') {
                return; //IE下，onfocusin会在div等元素触发
            }
            var emptyHintEl = el.__emptyHintEl;
            if (emptyHintEl) {
                //clearTimeout(el.__placeholderTimer||0);
                emptyHintEl.style.display = 'none';
            }
        }
        if (document.addEventListener) { //ie
            document.addEventListener('focus', focusFn, true);
            document.addEventListener('blur', blurFn, true);
        } else {
            document.attachEvent('onfocusin', focusFn);
            document.attachEvent('onfocusout', blurFn);
        }

        var elss = [document.getElementsByTagName('input'), document.getElementsByTagName('textarea')];
        for (var n = 0; n < 2; n++) {
            var els = elss[n];
            for (var i = 0; i < els.length; i++) {
                var el = els[i];
                var placeholder = el.getAttribute('placeholder'),
                    emptyHintEl = el.__emptyHintEl;
                if (placeholder && !emptyHintEl) {
                    emptyHintEl = document.createElement('strong');
                    emptyHintEl.innerHTML = placeholder;
                    emptyHintEl.className = 'placeholder';
                    emptyHintEl.onclick = function(el) {
                        return function() {
                            try {
                                el.focus();
                            } catch (ex) {}
                        };
                    }(el);
                    if (el.value) {
                        emptyHintEl.style.display = 'none';
                    }
                    el.parentNode.insertBefore(emptyHintEl, el);
                    el.__emptyHintEl = emptyHintEl;
                }
            }
        }
    };
    var _retunrTop = function() {
        if (window.g_config === undefined || window.g_config.disableRightFlex === undefined || window.g_config.disableRightFlex) {
            if ($(".pop-right-info").length == 0) {
                var html = '<div class="pop-right-info"><a class="icon-zixun J-zixun" href="javascript:;"></a><a class="show-download" href="javascript:;"><span class="app-download"></span></a><a class="show-weixin" href="javascript:;" ><span class="weixin-attention"></span></a></div>'
                $("body").append(html);
            }

            if (window.g_config === undefined || window.g_config.disableBackTop === undefined || window.g_config.disableBackTop) {
                if ($(document).scrollTop() <= 100) {
                    $(".J-return-top").remove();
                } else {
                    $(".J-return-top").remove();
                    $(".pop-right-info").append('<a class="J-return-top return-top" href="javascript:;"></a>');
                }
            }
            $(document).on("click", ".J-return-top", function() {
                $(document).scrollTop(0);
            });
        }
    };
    $(function($) {
        /**
         * 对ie进行监测
         */
        var ieSize;
        var browser = navigator.appName;
        var b_version = navigator.appVersion;
        // var version=b_version.split(";"); 
        // var trim_Version=version[1].replace(/[ ]/g,""); 
        if (browser === "Microsoft Internet Explorer" && b_version.indexOf("MSIE 6.0") > -1) {
            ieSize = 6;
        } else if (browser === "Microsoft Internet Explorer" && b_version.indexOf("MSIE 7.0") > -1) {
            ieSize = 7;
        }
        if (ieSize < 8) {
            $("body").append($("<div>", {
                    "class": "screen-bg"
                }))
                .append($("<div>", {
                        "class": "pop",
                        "style": "height: ; width: 600px; margin-top: -200px; margin-left: -300px"
                    })
                    .append($("<div>", {
                            "class": "designer-list"
                        })
                        .append($("<div>", {
                                "class": "designer-list-none"
                            })
                            .append($("<a>", {
                                "class": "btn btn-large btn-success",
                                "target": "_blank",
                                "href": "http://windows.microsoft.com/zh-cn/internet-explorer/download-ie"
                            }).append("升级ie"))
                            .append("<br>您的浏览器版本过于陈旧，请点击升级ie。")
                        )
                    )
                );
            return;
        }
        /**
         * header scroll
         */
        _placeholderHandle();

        // 隐藏弹出层
        $(document).mouseup(function(e) {
            var _target = $('.float-window,.header-search'); // 设置目标区域
            if (!_target.is(e.target) && _target.has(e.target).length === 0) { // Mark 1
                $(".float-window").remove();
                $(".js-search-type").css("display", "none");
                $(".js-type-list").hide();
                $(".js-search").animate({
                    paddingLeft: "10px",
                    width: "200px"
                });
                $(".placeholder").removeAttr("style");
            }
        });
        //图片延迟加载
        // $("img.lazy").lazyload({
        //     effect: "fadeIn",
        //     placeholder: "/static/images/placeholder.jpg",
        //     data_attribute: "lazyload",
        //     failure_limit: 10
        // });

        //显示导航二级菜单
        // var navTimer;
        // $(".js_navbar .navbar-nav>li>a").mouseenter(function() {
        //     $(this).closest("li").children("ul").show();
        // }).mouseleave(function() {
        //     var _this = $(this);
        //     navTimer = setTimeout(function() {
        //         _this.closest("li").children("ul").hide();
        //     }, 200);
        // });

        $(".navbar-nav li").on('mouseenter', function() {
            $(this).find(".subnav").css("display", "block");
            if ($(this).find(".subnav").length > 0) {
                $(this).css("border", "0");
            }
        }).on('mouseleave', function() {
            $(this).find(".subnav").css("display", "none");
            $(this).removeAttr("style");
        });



        //友链
        $(".link-fold").click(function(event) {
            event.preventDefault();
            if ($(this).find("i").attr("class") === "share-show") {
                $(this).parent().addClass("link-unfold");
                $(this).find("i").attr("class", "share-show-down");
            } else {
                $(this).parent().removeClass("link-unfold");
                $(this).find("i").attr("class", "share-show");
            }
        });
        //搜索
        $(".js-search").click(function() {
            $(this).animate({
                paddingLeft: "85px",
                width: "200px"
            });
            $(".placeholder").css("paddingLeft","90px");
            $(".js-search-type").css("display", "inline-block");
        });
        $(".js-type-list").find("li").each(function() {
            $(this).click(function() {
                $(".js-search-type").find("span").html($(this).html());
                $(".js-search-type").find("span").attr("data-href",$(this).data("href"));
                $(".js-search").attr("placeholder",$(this).data("placeholder"));
                $(".placeholder").html($(this).data("placeholder"));
                $(".js-type-list").hide();
            });
        });
        $(".js-search-type").on("mouseenter", function() {
            $(".js-type-list").show();
        });

        //返回顶部
        _retunrTop();
        $(document).scroll(function() {
            _retunrTop();
        });

        $(window).resize(function() {
            _retunrTop();
        });


        $(document).on('click', '.J-zixun', function () {
            //在线客服
            (function(m, ei, q, i, a, j, s) {
                m[i] = m[i] || function() {
                    (m[i].a = m[i].a || []).push(arguments)
                };
                j = ei.createElement(q),
                    s = ei.getElementsByTagName(q)[0];
                j.async = true;
                j.charset = 'UTF-8';
                j.src = '//static.meiqia.com/dist/meiqia.js';
                s.parentNode.insertBefore(j, s);
            })(window, document, 'script', '_MEIQIA');
            _MEIQIA('entId', 49200);
            _MEIQIA('showPanel');
        })

        // 百度统计
        if (window.baiduRequired && window.baiduSrc) {
            var _hmt = _hmt || [];
            var hm = document.createElement("script");
            hm.src = window.baiduSrc;
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        }

    });



    return {
        /*
         * 警告框
         *
         * status   状态 success|info|error|waring
         * msg      信息
         */
        alert: function(status, msg) {
            var messageDom = $('#message');
            className = 'message-success';
            switch (status) {
                case 'info':
                    className = 'message-info';
                    break;
                case 'waring':
                    className = 'message-waring';
                    break;
                case 'error':
                    className = 'message-error';
                    break;
                default:
                    className = 'message-success';
                    break;
            }
            if (messageDom.length === 0) {
                var data = {
                    classname: className,
                    message: msg
                };
                $('body').append(template("common/popup/message", data));
                $(".message-close").click(function() {
                    $(this).parent().remove();
                });

                setTimeout(function() {
                    messageDom = $('#message');
                    messageDom.removeClass("message").addClass("message-out");
                    setTimeout(function() {
                        messageDom.remove();
                    }, 200);
                }, 3000);
            } else {
                // messageDom.css('top', top);
                messageDom.attr('class', 'message ' + className);
                $('#message .message-content').text(msg);
            }
        },
        /*
         * 确认框
         *
         * title 标题
         * content 内容
         * confirmCallback　确认后回调方法
         * cancelCallback 取消后回调方法
         */
        confirm: function(title, content, width, height, confirmCallback, cancelCallback, arg) {
            var data = {
                title: title,
                content: content,
                width: (width ? width : '400') + 'px',
                height: (height ? height : '220') + 'px',
                marginTop: parseInt(-(height ? height : 220) / 2) + 'px',
                marginLeft: parseInt(-(width ? width : 400) / 2) + 'px'
            };
            $("body").append(template("common/popup/confirm", data));
            $(".pop-close, .pop .btn").click(function() {
                var op = $(this).data('op');
                if (op === 'confirm' && confirmCallback) {
                    confirmCallback(arg);
                } else if (op === 'cancel' && cancelCallback) {
                    cancelCallback();
                }
                $(".screen-bg").remove();
                $(".pop").remove();
            });
        },
        /*
         * 处理文本输入框的placeholder
         */
        placeholder: function() {
            _placeholderHandle();
        },

        lazy: function() {
            $("img.lazy").lazyload({
                effect: "fadeIn",
                placeholder: "/static/images/new/common/placeholder.jpg",
                data_attribute: "lazyload",
                failure_limit: 10
            });
        },

        /*
         * 表单提交结果
         * title 如：恭喜，您已成功上传画册！
         * content 如：去其他地方逛逛吧~~
         * btnList 如：［{title:'查看更多', url:'/photo/list/'},{title:'回到主页', url:'/'}]
         * skip 如：{title:'相册列表', url:'/photo/list'}
         */
        submitResult: function(title, content, btnList, skip) {
            $("#submit_result").empty();
            var data = {
                title: title,
                content: content,
                btnList: btnList,
                skip: skip
            };
            $("#submit_result").append(template("common/submit_result", data));
            var sec = 5;
            var secTimer = null;
            $("#count-down").text(sec);
            $(window).scrollTop(0);
            secTimer = setInterval(function() {
                sec--;
                $("#count-down").text(sec);
                if (sec === 0) {
                    clearInterval(secTimer);
                    if (skip) {
                        location.href = skip.url;
                    }
                }
            }, 1000);
        },
        tipHandler: function(msg, result, callback) {
            _tipHandler(msg, result, callback);
        },

        ieVersion: function(callback) {
            _ieVersion(callback);
        }
    };
});