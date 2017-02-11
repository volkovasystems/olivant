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
			Prompt("process " + process.pid + " terminating");

			dexist(process.pid);
		}

		return this;
	}
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhdGFsLnN1cHBvcnQuanMiXSwibmFtZXMiOlsiYXNlYSIsInJlcXVpcmUiLCJoYXJkZW4iLCJPbGl2YW50IiwiY3JlYXRlIiwiRkFUQUwiLCJFUlJPUiIsIkZBVEFMX0NPREUiLCJpbml0aWFsaXplIiwicHJvbXB0IiwicmVwb3J0Iiwic2VydmVyIiwiUHJvbXB0IiwicHJvY2VzcyIsInBpZCIsImRleGlzdCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNQyxTQUFTRCxRQUFTLFFBQVQsQ0FBZjs7QUFJQTtBQUNBLElBQU1FLFVBQVVGLFFBQVMsc0JBQVQsQ0FBaEI7QUFDQTs7QUFFQUMsT0FBUSxPQUFSLEVBQWlCLE9BQWpCO0FBQ0FBLE9BQVEsT0FBUixFQUFpQixPQUFqQjtBQUNBQSxPQUFRLFlBQVIsRUFBc0IsR0FBdEI7O0FBRUFDLFFBQVFDLE1BQVIsQ0FBZ0IsT0FBaEIsRUFBeUI7QUFDeEIsU0FBUUMsS0FEZ0I7QUFFeEIsV0FBVUMsS0FGYztBQUd4QixTQUFRQyxVQUhnQjtBQUl4QixXQUFVLEtBSmM7QUFLeEIsVUFBUyxDQUxlO0FBTXhCLFVBQVMsS0FOZTtBQU94QixZQUFXO0FBQ1YsV0FBUyxDQURDO0FBRVYsWUFBVTtBQUZBLEVBUGE7QUFXeEIsZUFBYyxTQUFTQyxVQUFULEdBQXNCO0FBQ25DLE9BQUtDLE1BQUw7QUFDQSxPQUFLQyxNQUFMOztBQUVBLE1BQUlWLEtBQUtXLE1BQVQsRUFBaUI7QUFDaEJDLHVCQUFvQkMsUUFBUUMsR0FBNUI7O0FBRUFDLFVBQVFGLFFBQVFDLEdBQWhCO0FBQ0E7O0FBRUQsU0FBTyxJQUFQO0FBQ0E7QUF0QnVCLENBQXpCIiwiZmlsZSI6ImZhdGFsLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgYXNlYSA9IHJlcXVpcmUoIFwiYXNlYVwiICk7XG5jb25zdCBoYXJkZW4gPSByZXF1aXJlKCBcImhhcmRlblwiICk7XG5cblxuXG4vLzogQGNsaWVudDpcbmNvbnN0IE9saXZhbnQgPSByZXF1aXJlKCBcIi4vb2xpdmFudC5zdXBwb3J0LmpzXCIgKTtcbi8vOiBAZW5kLWNsaWVudFxuXG5oYXJkZW4oIFwiRVJST1JcIiwgXCJlcnJvclwiICk7XG5oYXJkZW4oIFwiRkFUQUxcIiwgXCJmYXRhbFwiICk7XG5oYXJkZW4oIFwiRkFUQUxfQ09ERVwiLCA1MDAgKTtcblxuT2xpdmFudC5jcmVhdGUoIFwiRmF0YWxcIiwge1xuXHRcIm5hbWVcIjogRkFUQUwsXG5cdFwic3RhdHVzXCI6IEVSUk9SLFxuXHRcImNvZGVcIjogRkFUQUxfQ09ERSxcblx0XCJzaWxlbnRcIjogZmFsc2UsXG5cdFwiZGVwdGhcIjogOSxcblx0XCJjb2xvclwiOiBcInJlZFwiLFxuXHRcImluc3BlY3RcIjoge1xuXHRcdFwiZGVwdGhcIjogNSxcblx0XHRcImxlbmd0aFwiOiAxMDAwXG5cdH0sXG5cdFwiaW5pdGlhbGl6ZVwiOiBmdW5jdGlvbiBpbml0aWFsaXplKCApe1xuXHRcdHRoaXMucHJvbXB0KCApO1xuXHRcdHRoaXMucmVwb3J0KCApO1xuXG5cdFx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0XHRQcm9tcHQoIGBwcm9jZXNzICR7IHByb2Nlc3MucGlkIH0gdGVybWluYXRpbmdgICk7XG5cblx0XHRcdGRleGlzdCggcHJvY2Vzcy5waWQgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxufSApO1xuIl19
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhdGFsLnN1cHBvcnQuanMiXSwibmFtZXMiOlsiYXNlYSIsInJlcXVpcmUiLCJoYXJkZW4iLCJPbGl2YW50IiwiY3JlYXRlIiwiRkFUQUwiLCJFUlJPUiIsIkZBVEFMX0NPREUiLCJpbml0aWFsaXplIiwicHJvbXB0IiwicmVwb3J0Iiwic2VydmVyIiwiUHJvbXB0IiwicHJvY2VzcyIsInBpZCIsImRleGlzdCJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWTs7QUFFWixNQUFNQSxLQUFLLEVBQUVDLE9BQU8sRUFBRSxPQUFPLENBQUM7QUFDOUIsTUFBTUMsT0FBTyxFQUFFRCxPQUFPLEVBQUUsU0FBUyxDQUFDOzs7OztBQUtsQyxNQUFNRSxRQUFRLEVBQUVGLE9BQU8sRUFBRSx1QkFBdUIsQ0FBQzs7O0FBR2pEQyxNQUFNLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQztBQUMxQkEsTUFBTSxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUM7QUFDMUJBLE1BQU0sRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDOztBQUUzQkMsT0FBTyxDQUFDQyxNQUFNLEVBQUUsT0FBTyxFQUFFO0NBQ3hCLE1BQU0sRUFBRUMsS0FBSztDQUNiLFFBQVEsRUFBRUMsS0FBSztDQUNmLE1BQU0sRUFBRUMsVUFBVTtDQUNsQixRQUFRLEVBQUUsS0FBSztDQUNmLE9BQU8sRUFBRSxDQUFDO0NBQ1YsT0FBTyxFQUFFLEtBQUs7Q0FDZCxTQUFTLEVBQUU7RUFDVixPQUFPLEVBQUUsQ0FBQztFQUNWLFFBQVEsRUFBRTtDQUNYLENBQUM7Q0FDRCxZQUFZLEVBQUUsU0FBU0MsVUFBVSxFQUFFLENBQUM7RUFDbkMsSUFBSSxDQUFDQyxNQUFNLEVBQUUsQ0FBQztFQUNkLElBQUksQ0FBQ0MsTUFBTSxFQUFFLENBQUM7O0VBRWQsRUFBRSxFQUFFVixJQUFJLENBQUNXLE9BQU8sQ0FBQztHQUNoQkMsTUFBTSxFQUFFLENBQUMsUUFBUSxHQUFHQyxPQUFPLENBQUNDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzs7R0FFaERDLE1BQU0sRUFBRUYsT0FBTyxDQUFDQyxJQUFJLENBQUM7RUFDdEI7O0VBRUEsT0FBTyxJQUFJO0NBQ1o7QUFDRCxFQUFFLENBQUMiLCJmaWxlIjoiZmF0YWwuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBhc2VhID0gcmVxdWlyZSggXCJhc2VhXCIgKTtcbmNvbnN0IGhhcmRlbiA9IHJlcXVpcmUoIFwiaGFyZGVuXCIgKTtcblxuXG5cbi8vOiBAY2xpZW50OlxuY29uc3QgT2xpdmFudCA9IHJlcXVpcmUoIFwiLi9vbGl2YW50LnN1cHBvcnQuanNcIiApO1xuLy86IEBlbmQtY2xpZW50XG5cbmhhcmRlbiggXCJFUlJPUlwiLCBcImVycm9yXCIgKTtcbmhhcmRlbiggXCJGQVRBTFwiLCBcImZhdGFsXCIgKTtcbmhhcmRlbiggXCJGQVRBTF9DT0RFXCIsIDUwMCApO1xuXG5PbGl2YW50LmNyZWF0ZSggXCJGYXRhbFwiLCB7XG5cdFwibmFtZVwiOiBGQVRBTCxcblx0XCJzdGF0dXNcIjogRVJST1IsXG5cdFwiY29kZVwiOiBGQVRBTF9DT0RFLFxuXHRcInNpbGVudFwiOiBmYWxzZSxcblx0XCJkZXB0aFwiOiA5LFxuXHRcImNvbG9yXCI6IFwicmVkXCIsXG5cdFwiaW5zcGVjdFwiOiB7XG5cdFx0XCJkZXB0aFwiOiA1LFxuXHRcdFwibGVuZ3RoXCI6IDEwMDBcblx0fSxcblx0XCJpbml0aWFsaXplXCI6IGZ1bmN0aW9uIGluaXRpYWxpemUoICl7XG5cdFx0dGhpcy5wcm9tcHQoICk7XG5cdFx0dGhpcy5yZXBvcnQoICk7XG5cblx0XHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRcdFByb21wdCggYHByb2Nlc3MgJHsgcHJvY2Vzcy5waWQgfSB0ZXJtaW5hdGluZ2AgKTtcblxuXHRcdFx0ZGV4aXN0KCBwcm9jZXNzLnBpZCApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG59ICk7XG4iXX0=