sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	'sap/ui/Device'
], function (Controller, JSONModel, Device) {
	"use strict";

	return Controller.extend("be.wl.TestTreetable.controller.View1", {
		onInit: function () {
			var oModel = new JSONModel("./model/Clothing.json");
			this.getView().setModel(oModel);
			Device.browser.chrome = true;
			// var oTreeTable = this.byId("TreeTableBasic");
			// oTreeTable._bIgnoreFixedColumnCount = false;
		},
		onAfterRendering: function () {
			var oTreeTable = this.byId("TreeTableBasic");
			// oTreeTable.addEventDelegate({
			// 	onAfterRendering: function () {
			// 		// debugger;
			// 		var oCtrlScrDomRef = oTreeTable.getDomRef().querySelector(".sapUiTableCtrlScrFixed:not(.sapUiTableCHA) > .sapUiTableCtrlFixed");
			// 		if (oCtrlScrDomRef) {
			// 			// oCtrlScrDomRef.clientWidth = 700; //"700px";
			// 			oCtrlScrDomRef.width = "700px";
			// 		}
			// 	}
			// });

		},

		onCollapseAll: function () {
			var oTreeTable = this.byId("TreeTableBasic");
			oTreeTable.collapseAll();
		},

		onCollapseSelection: function () {
			var oTreeTable = this.byId("TreeTableBasic");
			oTreeTable.collapse(oTreeTable.getSelectedIndices());
		},

		onExpandFirstLevel: function () {
			var oTreeTable = this.byId("TreeTableBasic");
			oTreeTable.expandToLevel(1);
		},

		onExpandSelection: function () {
			var oTreeTable = this.byId("TreeTableBasic");
			oTreeTable.expand(oTreeTable.getSelectedIndices());
		}
	});
});