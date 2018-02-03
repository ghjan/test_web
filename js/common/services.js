
define([
    'jquery',
    'ui'
], function($, ui) {
    var requesting = '';
    var debug = false;
    var apiUrl = {
		"real.login": "/real/vr/login/",
        "real.item_list": "/design/item/list/",
        "model.label_tree": "/model/label/tree/",
        "model.item_list_v2": "/model/item/list/v2/",
        "model.item_detail": "/model/item/detail/",
        "real.setmoveable": "/real/vr/item/setmoveable/",
        "real.setreplaceable": "/real/vr/item/setreplaceable/"
    };
    //拼接url
    var _concatUrl = function(app, fn, debug) {
        debug = debug;
        return debug === true ? '/test_web/api/' + app + '/' + fn + '.json' : apiUrl[app + '.' + fn] || '';
    };
    //统一隐藏Loading
    var _hideLoading = function() {
        if (location.pathname.indexOf('/manage/') !== -1) {
            $('.manage-loading').hide();
        } else {
            $('.loading-bar').hide();
        }
    };

    //统一显示loading
    var _showLoading = function() {
        if (location.pathname.indexOf('/manage/') !== -1) {
            $('.manage-loading').show();
        }
    };

    var _rspHandle = function(rsp, callback, arg) {
        if (rsp.code) {
            if (callback) {
                callback(rsp.code, rsp.msg, rsp.data || {}, arg);
            }
        } else {
            ui.alert('error', '服务出现异常！');
        }
    };

    var _404 = function() {
        requesting = '';
        //$('.loading').remove();
        _hideLoading();
        ui.alert('error', '404：服务器没有响应！');
    };

    var _500 = function() {
        requesting = '';
        //$('.loading').remove();
        _hideLoading();
        ui.alert('error', '500：服务器出错！');
    };

    var _504 = function() {
        requesting = '';
        //$('.loading').remove();
        _hideLoading();
        ui.alert('error', '504：服务器超时！');
    };

    var _302 = function() {
        requesting = '';
        //$('.loading').remove();
        _hideLoading();
        ui.alert('error', '302：接口发生了跳转！');
    };

    var _requestAlert = function() {
        ui.alert('waring', '正在处理上一个请求！');
    };

    return {
        // HOST: 'http://www.real.fuwo.com',
        //服务器返回码对应信息
        CODE_SUCC: '10000', //成功
        CODE_ERROR: '10001', //失败
        CODE_PARAM_ERR: '10002', //参数错误
        CODE_NOT_EXIST_ERR: '10003', //记录不存在
        CODE_PERM_ERR: '10004', //权限错误
        CODE_EXIST_ERR: '10006', //记录已存在
        /*
         * HTTP POST 请求
         *
         * app      应用模型名, 如account
         * fu       功能名, 如login
         * data     数据
         * callback 回调方法
         */
        post: function(app, fn, data, callback, arg, async) {
            var reqSlug = (app + '.' + fn);
            if (requesting === reqSlug) {
                _requestAlert();
                return;
            }
            if (debug === true) {
                this.get(app, fn, data, callback, arg, async);
            } else {
                var url = _concatUrl(app, fn, false);
                window.g_config = window.g_config || {};
                if(window.g_config.serviceHost != undefined){
                    url = window.g_config.serviceHost == location.host ? url : "http://" + window.g_config.serviceHost + url;
                }
                if (url !== '') {
                    requesting = reqSlug;
                    _showLoading();
                    $.ajax({
                        url: url,
                        dataType: 'json',
                        type: 'POST',
                        async: async === undefined ? true : async,
                        data: data,
                        xhrFields: window.g_config.serviceHost == undefined || window.g_config.serviceHost == location.host ? "" : {"withCredentials": true},
                        success: function(rsp) {
                            requesting = '';
                            //$('.loading').remove();
                            _hideLoading();
                            _rspHandle(rsp, callback, arg);
                        },
                        error: function() {
                            requesting = '';
                            //$('.loading').remove();
                            _hideLoading();
                        },
                        statusCode: {
                            404: function() {
                                _404();
                            },
                            500: function() {
                                _500();
                            },
                            504: function() {
                                _504();
                            },
                            302: function() {
                                _302();
                            }
                        }
                    });
                }
            }
        },

        /*
         * HTTP GET 请求
         *
         * app      应用模型名, 如account
         * fu       功能名, 如login
         * data     数据
         * callback 回调方法
         */
        get: function(app, fn, data, callback, arg, async) {
            var reqSlug = (app + '.' + fn);
            if (requesting === reqSlug) {
                _requestAlert();
                return;
            }
            var url = _concatUrl(app, fn, true);
            window.g_config = window.g_config || {};
            if(window.g_config.serviceHost != undefined){
                url = window.g_config.serviceHost == location.host ? url : "http://" + window.g_config.serviceHost + url;
            }
            if (url !== '') {
                requesting = reqSlug;
                _showLoading();
                $.ajax({
                    url: url,
                    dataType: 'json',
                    type: 'GET',
                    async: async === undefined ? true : async,
                    data: data,
                    xhrFields: window.g_config.serviceHost == undefined || window.g_config.serviceHost == location.host ? "" : {"withCredentials": true},
                    success: function(rsp) {
                        requesting = '';
                        //$('.loading').remove();
                        _hideLoading();
                        _rspHandle(rsp, callback, arg);
                    },
                    error: function() {
                        requesting = '';
                        //$('.loading').remove();
                        _hideLoading();
                    },
                    statusCode: {
                        404: function() {
                            _404();
                        },
                        500: function() {
                            _500();
                        },
                        504: function() {
                            _504();
                        },
                        302: function() {
                            _302();
                        }
                    }
                });
            }
        }
    };
});