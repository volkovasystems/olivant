"use strict";

var asea = require("asea");
var harden = require("harden");

//: @client:
var Olivant = require("./olivant.support.js");
//: @end-client

harden("ERROR", "error");
harden("FATAL", "fatal");
harden("FATAL_CODE", 500);

Olivant.create("Fatal", {
	"name": FATAL,
	"status": ERROR,
	"code": FATAL_CODE,
	"silent": false,
	"depth": 9,
	"color": "red",
	"inspect": {
		"depth": 5,
		"length": 1000
	},
	"initialize": function initialize() {
		this.prompt();
		this.report();

		if (asea.server) {
			dexist("node");
		}

		return this;
	}
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhdGFsLnN1cHBvcnQuanMiXSwibmFtZXMiOlsiYXNlYSIsInJlcXVpcmUiLCJoYXJkZW4iLCJPbGl2YW50IiwiY3JlYXRlIiwiRkFUQUwiLCJFUlJPUiIsIkZBVEFMX0NPREUiLCJpbml0aWFsaXplIiwicHJvbXB0IiwicmVwb3J0Iiwic2VydmVyIiwiZGV4aXN0Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxJQUFNQSxPQUFPQyxRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1DLFNBQVNELFFBQVMsUUFBVCxDQUFmOztBQUlBO0FBQ0EsSUFBTUUsVUFBVUYsUUFBUyxzQkFBVCxDQUFoQjtBQUNBOztBQUVBQyxPQUFRLE9BQVIsRUFBaUIsT0FBakI7QUFDQUEsT0FBUSxPQUFSLEVBQWlCLE9BQWpCO0FBQ0FBLE9BQVEsWUFBUixFQUFzQixHQUF0Qjs7QUFFQUMsUUFBUUMsTUFBUixDQUFnQixPQUFoQixFQUF5QjtBQUN4QixTQUFRQyxLQURnQjtBQUV4QixXQUFVQyxLQUZjO0FBR3hCLFNBQVFDLFVBSGdCO0FBSXhCLFdBQVUsS0FKYztBQUt4QixVQUFTLENBTGU7QUFNeEIsVUFBUyxLQU5lO0FBT3hCLFlBQVc7QUFDVixXQUFTLENBREM7QUFFVixZQUFVO0FBRkEsRUFQYTtBQVd4QixlQUFjLFNBQVNDLFVBQVQsR0FBc0I7QUFDbkMsT0FBS0MsTUFBTDtBQUNBLE9BQUtDLE1BQUw7O0FBRUEsTUFBSVYsS0FBS1csTUFBVCxFQUFpQjtBQUNoQkMsVUFBUSxNQUFSO0FBQ0E7O0FBRUQsU0FBTyxJQUFQO0FBQ0E7QUFwQnVCLENBQXpCIiwiZmlsZSI6ImZhdGFsLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgYXNlYSA9IHJlcXVpcmUoIFwiYXNlYVwiICk7XG5jb25zdCBoYXJkZW4gPSByZXF1aXJlKCBcImhhcmRlblwiICk7XG5cblxuXG4vLzogQGNsaWVudDpcbmNvbnN0IE9saXZhbnQgPSByZXF1aXJlKCBcIi4vb2xpdmFudC5zdXBwb3J0LmpzXCIgKTtcbi8vOiBAZW5kLWNsaWVudFxuXG5oYXJkZW4oIFwiRVJST1JcIiwgXCJlcnJvclwiICk7XG5oYXJkZW4oIFwiRkFUQUxcIiwgXCJmYXRhbFwiICk7XG5oYXJkZW4oIFwiRkFUQUxfQ09ERVwiLCA1MDAgKTtcblxuT2xpdmFudC5jcmVhdGUoIFwiRmF0YWxcIiwge1xuXHRcIm5hbWVcIjogRkFUQUwsXG5cdFwic3RhdHVzXCI6IEVSUk9SLFxuXHRcImNvZGVcIjogRkFUQUxfQ09ERSxcblx0XCJzaWxlbnRcIjogZmFsc2UsXG5cdFwiZGVwdGhcIjogOSxcblx0XCJjb2xvclwiOiBcInJlZFwiLFxuXHRcImluc3BlY3RcIjoge1xuXHRcdFwiZGVwdGhcIjogNSxcblx0XHRcImxlbmd0aFwiOiAxMDAwXG5cdH0sXG5cdFwiaW5pdGlhbGl6ZVwiOiBmdW5jdGlvbiBpbml0aWFsaXplKCApe1xuXHRcdHRoaXMucHJvbXB0KCApO1xuXHRcdHRoaXMucmVwb3J0KCApO1xuXG5cdFx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0XHRkZXhpc3QoIFwibm9kZVwiICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn0gKTtcbiJdfQ==
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhdGFsLnN1cHBvcnQuanMiXSwibmFtZXMiOlsiYXNlYSIsInJlcXVpcmUiLCJoYXJkZW4iLCJPbGl2YW50IiwiY3JlYXRlIiwiRkFUQUwiLCJFUlJPUiIsIkZBVEFMX0NPREUiLCJpbml0aWFsaXplIiwicHJvbXB0IiwicmVwb3J0Iiwic2VydmVyIiwiZGV4aXN0Il0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZOztBQUVaLE1BQU1BLEtBQUssRUFBRUMsT0FBTyxFQUFFLE9BQU8sQ0FBQztBQUM5QixNQUFNQyxPQUFPLEVBQUVELE9BQU8sRUFBRSxTQUFTLENBQUM7Ozs7O0FBS2xDLE1BQU1FLFFBQVEsRUFBRUYsT0FBTyxFQUFFLHVCQUF1QixDQUFDOzs7QUFHakRDLE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDO0FBQzFCQSxNQUFNLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQztBQUMxQkEsTUFBTSxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUM7O0FBRTNCQyxPQUFPLENBQUNDLE1BQU0sRUFBRSxPQUFPLEVBQUU7Q0FDeEIsTUFBTSxFQUFFQyxLQUFLO0NBQ2IsUUFBUSxFQUFFQyxLQUFLO0NBQ2YsTUFBTSxFQUFFQyxVQUFVO0NBQ2xCLFFBQVEsRUFBRSxLQUFLO0NBQ2YsT0FBTyxFQUFFLENBQUM7Q0FDVixPQUFPLEVBQUUsS0FBSztDQUNkLFNBQVMsRUFBRTtFQUNWLE9BQU8sRUFBRSxDQUFDO0VBQ1YsUUFBUSxFQUFFO0NBQ1gsQ0FBQztDQUNELFlBQVksRUFBRSxTQUFTQyxVQUFVLEVBQUUsQ0FBQztFQUNuQyxJQUFJLENBQUNDLE1BQU0sRUFBRSxDQUFDO0VBQ2QsSUFBSSxDQUFDQyxNQUFNLEVBQUUsQ0FBQzs7RUFFZCxFQUFFLEVBQUVWLElBQUksQ0FBQ1csT0FBTyxDQUFDO0dBQ2hCQyxNQUFNLEVBQUUsT0FBTyxDQUFDO0VBQ2pCOztFQUVBLE9BQU8sSUFBSTtDQUNaO0FBQ0QsRUFBRSxDQUFDIiwiZmlsZSI6ImZhdGFsLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgYXNlYSA9IHJlcXVpcmUoIFwiYXNlYVwiICk7XG5jb25zdCBoYXJkZW4gPSByZXF1aXJlKCBcImhhcmRlblwiICk7XG5cblxuXG4vLzogQGNsaWVudDpcbmNvbnN0IE9saXZhbnQgPSByZXF1aXJlKCBcIi4vb2xpdmFudC5zdXBwb3J0LmpzXCIgKTtcbi8vOiBAZW5kLWNsaWVudFxuXG5oYXJkZW4oIFwiRVJST1JcIiwgXCJlcnJvclwiICk7XG5oYXJkZW4oIFwiRkFUQUxcIiwgXCJmYXRhbFwiICk7XG5oYXJkZW4oIFwiRkFUQUxfQ09ERVwiLCA1MDAgKTtcblxuT2xpdmFudC5jcmVhdGUoIFwiRmF0YWxcIiwge1xuXHRcIm5hbWVcIjogRkFUQUwsXG5cdFwic3RhdHVzXCI6IEVSUk9SLFxuXHRcImNvZGVcIjogRkFUQUxfQ09ERSxcblx0XCJzaWxlbnRcIjogZmFsc2UsXG5cdFwiZGVwdGhcIjogOSxcblx0XCJjb2xvclwiOiBcInJlZFwiLFxuXHRcImluc3BlY3RcIjoge1xuXHRcdFwiZGVwdGhcIjogNSxcblx0XHRcImxlbmd0aFwiOiAxMDAwXG5cdH0sXG5cdFwiaW5pdGlhbGl6ZVwiOiBmdW5jdGlvbiBpbml0aWFsaXplKCApe1xuXHRcdHRoaXMucHJvbXB0KCApO1xuXHRcdHRoaXMucmVwb3J0KCApO1xuXG5cdFx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0XHRkZXhpc3QoIFwibm9kZVwiICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn0gKTtcbiJdfQ==
