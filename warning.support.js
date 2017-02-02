"use strict";

var harden = require("harden");

//: @client:
var Olivant = require("./olivant.support.js");
//: @end-client

harden("FAILED", "failed");
harden("WARNING", "warning");
harden("WARNING_CODE", 400);

Olivant.create("Warning", {
	"name": WARNING,
	"status": FAILED,
	"code": WARNING_CODE,
	"silent": false,
	"depth": 6,
	"color": "yellow",
	"inspect": {
		"depth": 1,
		"length": 500
	}
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhcm5pbmcuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJoYXJkZW4iLCJyZXF1aXJlIiwiT2xpdmFudCIsImNyZWF0ZSIsIldBUk5JTkciLCJGQUlMRUQiLCJXQVJOSU5HX0NPREUiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLElBQU1BLFNBQVNDLFFBQVMsUUFBVCxDQUFmOztBQUlBO0FBQ0EsSUFBTUMsVUFBVUQsUUFBUyxzQkFBVCxDQUFoQjtBQUNBOztBQUVBRCxPQUFRLFFBQVIsRUFBa0IsUUFBbEI7QUFDQUEsT0FBUSxTQUFSLEVBQW1CLFNBQW5CO0FBQ0FBLE9BQVEsY0FBUixFQUF3QixHQUF4Qjs7QUFFQUUsUUFBUUMsTUFBUixDQUFnQixTQUFoQixFQUEyQjtBQUMxQixTQUFRQyxPQURrQjtBQUUxQixXQUFVQyxNQUZnQjtBQUcxQixTQUFRQyxZQUhrQjtBQUkxQixXQUFVLEtBSmdCO0FBSzFCLFVBQVMsQ0FMaUI7QUFNMUIsVUFBUyxRQU5pQjtBQU8xQixZQUFXO0FBQ1YsV0FBUyxDQURDO0FBRVYsWUFBVTtBQUZBO0FBUGUsQ0FBM0IiLCJmaWxlIjoid2FybmluZy5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGhhcmRlbiA9IHJlcXVpcmUoIFwiaGFyZGVuXCIgKTtcblxuXG5cbi8vOiBAY2xpZW50OlxuY29uc3QgT2xpdmFudCA9IHJlcXVpcmUoIFwiLi9vbGl2YW50LnN1cHBvcnQuanNcIiApO1xuLy86IEBlbmQtY2xpZW50XG5cbmhhcmRlbiggXCJGQUlMRURcIiwgXCJmYWlsZWRcIiApO1xuaGFyZGVuKCBcIldBUk5JTkdcIiwgXCJ3YXJuaW5nXCIgKTtcbmhhcmRlbiggXCJXQVJOSU5HX0NPREVcIiwgNDAwICk7XG5cbk9saXZhbnQuY3JlYXRlKCBcIldhcm5pbmdcIiwge1xuXHRcIm5hbWVcIjogV0FSTklORyxcblx0XCJzdGF0dXNcIjogRkFJTEVELFxuXHRcImNvZGVcIjogV0FSTklOR19DT0RFLFxuXHRcInNpbGVudFwiOiBmYWxzZSxcblx0XCJkZXB0aFwiOiA2LFxuXHRcImNvbG9yXCI6IFwieWVsbG93XCIsXG5cdFwiaW5zcGVjdFwiOiB7XG5cdFx0XCJkZXB0aFwiOiAxLFxuXHRcdFwibGVuZ3RoXCI6IDUwMFxuXHR9XG59ICk7XG4iXX0=
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhcm5pbmcuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJoYXJkZW4iLCJyZXF1aXJlIiwiT2xpdmFudCIsImNyZWF0ZSIsIldBUk5JTkciLCJGQUlMRUQiLCJXQVJOSU5HX0NPREUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVk7O0FBRVosTUFBTUEsT0FBTyxFQUFFQyxPQUFPLEVBQUUsU0FBUyxDQUFDOzs7OztBQUtsQyxNQUFNQyxRQUFRLEVBQUVELE9BQU8sRUFBRSx1QkFBdUIsQ0FBQzs7O0FBR2pERCxNQUFNLEVBQUUsUUFBUSxFQUFFLFNBQVMsQ0FBQztBQUM1QkEsTUFBTSxFQUFFLFNBQVMsRUFBRSxVQUFVLENBQUM7QUFDOUJBLE1BQU0sRUFBRSxjQUFjLEVBQUUsSUFBSSxDQUFDOztBQUU3QkUsT0FBTyxDQUFDQyxNQUFNLEVBQUUsU0FBUyxFQUFFO0NBQzFCLE1BQU0sRUFBRUMsT0FBTztDQUNmLFFBQVEsRUFBRUMsTUFBTTtDQUNoQixNQUFNLEVBQUVDLFlBQVk7Q0FDcEIsUUFBUSxFQUFFLEtBQUs7Q0FDZixPQUFPLEVBQUUsQ0FBQztDQUNWLE9BQU8sRUFBRSxRQUFRO0NBQ2pCLFNBQVMsRUFBRTtFQUNWLE9BQU8sRUFBRSxDQUFDO0VBQ1YsUUFBUSxFQUFFO0NBQ1g7QUFDRCxFQUFFLENBQUMiLCJmaWxlIjoid2FybmluZy5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGhhcmRlbiA9IHJlcXVpcmUoIFwiaGFyZGVuXCIgKTtcblxuXG5cbi8vOiBAY2xpZW50OlxuY29uc3QgT2xpdmFudCA9IHJlcXVpcmUoIFwiLi9vbGl2YW50LnN1cHBvcnQuanNcIiApO1xuLy86IEBlbmQtY2xpZW50XG5cbmhhcmRlbiggXCJGQUlMRURcIiwgXCJmYWlsZWRcIiApO1xuaGFyZGVuKCBcIldBUk5JTkdcIiwgXCJ3YXJuaW5nXCIgKTtcbmhhcmRlbiggXCJXQVJOSU5HX0NPREVcIiwgNDAwICk7XG5cbk9saXZhbnQuY3JlYXRlKCBcIldhcm5pbmdcIiwge1xuXHRcIm5hbWVcIjogV0FSTklORyxcblx0XCJzdGF0dXNcIjogRkFJTEVELFxuXHRcImNvZGVcIjogV0FSTklOR19DT0RFLFxuXHRcInNpbGVudFwiOiBmYWxzZSxcblx0XCJkZXB0aFwiOiA2LFxuXHRcImNvbG9yXCI6IFwieWVsbG93XCIsXG5cdFwiaW5zcGVjdFwiOiB7XG5cdFx0XCJkZXB0aFwiOiAxLFxuXHRcdFwibGVuZ3RoXCI6IDUwMFxuXHR9XG59ICk7XG4iXX0=
