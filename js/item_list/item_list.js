requirejs.config({
	baseUrl: "/test_web/",
	paths: {
		jquery: "libs/jquery",
		validate: "libs/jquery.validate",
        lazyload: "libs/jquery.lazyload",
		bootstrap: "libs/bootstrap",
		bowser: "libs/bowser",
		metismenu: "libs/metisMenu",
		datatables: "libs/dataTables/jquery.dataTables.min",
        btdatatables: "libs/dataTables/dataTables.bootstrap.min",
		layer: "libs/layer/layer",
		highlight: "libs/highlight",
		bootstrapSwitcher: "libs/bootstrap-switch",
		switchmain: "libs/switch-main",
		sbadmin2: "libs/sb-admin-2",
        ui: "js/common/ui",
        utils: "js/common/utils",
        services: "js/common/services",
        account: "js/common/account",
        validateExpand: "js/common/validate.expand",
        paginator: "js/common/paginator",
		template: "js/common/template",
		tab: "js/common/tab",
	},
	shim: {
		bootstrap: {
            deps: ["jquery"],
            exports: "bootstrap"
        },
		metismenu: {
            deps: ["jquery"],
            exports: "metismenu"
        },
		datatables: {
            deps: ["jquery"],
            exports: "datatables"
        },
		btdatatables: {
            deps: ["jquery"],
            exports: "btdatatables"
        },
		highlight: {
            deps: ["jquery"],
            exports: "highlight"
        },
		bootstrapSwitcher: {
			deps: ["jquery"],
            exports: "bootstrapSwitcher"
		},
		switchmain: {
			deps: ["jquery"],
            exports: "switchmain"
		},
		sbadmin2: {
            deps: ["jquery", "metismenu"],
            exports: "sbadmin2"
        },
		layer: {
            deps: ["jquery"],
            exports: "layer"
        },
		template: {
            deps: ["jquery"],
            exports: "template"
        }
	}
});


requirejs(["js/item_list/init_component"]);
//requirejs(["js/item_list/event_handler"]);


