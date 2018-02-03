/**
 * Created by jian.zhang on 2018/2/3.
 */
define(function (require) {

    //初始化组件
    var $ = require('jquery'),
        bootstrap = require('bootstrap'),
        dts = require('datatables'),
        bdts = require('btdatatables'),
        metismenu = require('metismenu'),
        highlight = require('highlight'),
        bootstrapSwitcher = require('bootstrapSwitcher'),
        switchmain = require('switchmain'),
        ui = require('ui'),
        services = require('services'),
        layer = require('layer'),
        template = require('template'),
        utils = require('utils');
    var table=null;
    String.prototype.replaceAll = function (exp, newStr) {
        return this.replace(new RegExp(exp, "gm"), newStr);
    };
    String.prototype.format = function (args) {
        var result = this;
        if (arguments.length < 1) {
            return result;
        }

        var data = arguments; // 如果模板参数是数组
        if (arguments.length == 1 && typeof (args) == "object") {
            // 如果模板参数是对象
            data = args;
        }
        for (var key in data) {
            var value = data[key];
            if (undefined != value) {
                result = result.replaceAll("\\{" + key + "\\}", value);
            }
        }
        return result;
    };

    $(document).ready(function() {
        $(document).delegate(".btn_edit_model", "click",
            function (t) {
                var model_no = $(this).attr('model_no'),
                    item_name = $(this).attr('item_name'),
                    room_no = $(this).attr('room_no');
                //design_no = $('#design_id').val();
    //                    var pop_html = template('replace_list',{model_id:model_no, item_name:item_name, room_no:room_no});
                layer.open({
                    type: 1,
                    area: ["1200px", "888px"],
                    // skin: "layui-layer-demo",
                    title: ["模型包", "font-weight: bold;"],
                    // closeBtn: 1,
                    // shift: 2,
                    shadeClose: true,
                    content: $('#model-popup').html(),
    //                        content: pop_html,
                });
            });
        $(document).delegate(".model_label", "click", function (t) {
            ui.placeholder();
            if (!table){
                table = init_datatable_model();
            }
            //alter the active label
    //            $(this).siblings('.active').removeClass('active');
    //            $(this).addClass('active');
        });
        var init_datatable_model = function(){
            table = $('#example').dataTable( {
                "processing": true,
                "ajax": "data/objects_deep2.json",
                "columnDefs": [
                    { "data": "preview_url",
                        targets: 0,
                        render: function (data, type, row, meta) {
                            var r = '<img class="model-img" src="' + data + '"data-holder-rendered="flase" onerror="this.src=\'http://static.fuwo.comiyun/images/common/error/img_onload_error.png?v=0060v67\'">';
                            return r;
                        }

                    },
                    { "data": "name",
                        targets: 1,
                    },
                    {
                        targets: 2,
                        data: null,
                        render: function (data, type, row, meta) {
                            var result = '&nbsp;<span > {0} x {1} x {2} </span>';
                            var result1 = result.format(row.width, row['length'], row.height);
                            return result1;
                        }
                    },
                    {
                        targets: 3,
                        data: null,
                        render: function (data, type, row, meta) {
                            var result = '&nbsp;<button class="button button-primary button-pill button-small btn_select_model " model_no={0} {1}{2}><-</button>';
                            var item_name = row.name ? ' item_name=' + row.name + ' ' : '';
                            var model_no = row.no;

                            var result1 = row.selected === 0 ? result.format(model_no, item_name, '') : result.format(model_no, item_name, 'disabled');
                            return result1;
                        }
                    }
                ]
            } );
            return table;
        }

    } );
});