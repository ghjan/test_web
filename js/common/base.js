/*
 * 平台核心基础功能
 *
 * author: Glen
 * created:　2015/5/22
 */

define([
		'validate',
		'bootstrap',
		'services',
		'utils',
		'ui',
		'account',
		'template',
		'tab',
		'validateExpand'
	],
	function(
		validate,
		bootstrap,
		services,
		utils,
		ui,
		account,
		template,
		tabCom,
		validateExpand
	) {

		
		return {
			debug: false,
			
			//模型引擎
			tpls: template,

			//当前域名
			domain: location.protocol + "//" + location.host,

			/*
			 *后台接口服务
			 *
			 * property: CODE_xxx
			 * function: post, get
			 */
			services: services,

			/*
			 *通用方法
			 */
			utils: utils,

			/*
			 *UI组件
			 */
			ui: ui,

			 /*
             *账号
             */
            account: account,

			/*
			 *组件
			 */
			 com: {
				 tab: tabCom
			 }
		};
	});
