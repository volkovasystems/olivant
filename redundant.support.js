"use strict";

var harden = require("harden");



//: @client:
var Olivant = require("./olivant.support.js");
//: @end-client

harden("FAILED", "failed");
harden("REDUNDANT", "redundant");
harden("REDUNDANT_CODE", 429);

Olivant.create("Redundant", {
	"name": REDUNDANT,
	"status": FAILED,
	"code": REDUNDANT_CODE,
	"silent": false,
	"depth": 6,
	"color": "yellow" });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVuZGFudC5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImhhcmRlbiIsInJlcXVpcmUiLCJPbGl2YW50IiwiY3JlYXRlIiwiUkVEVU5EQU5UIiwiRkFJTEVEIiwiUkVEVU5EQU5UX0NPREUiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLElBQU1BLFNBQVNDLFFBQVMsUUFBVCxDQUFmOzs7O0FBSUE7QUFDQSxJQUFNQyxVQUFVRCxRQUFTLHNCQUFULENBQWhCO0FBQ0E7O0FBRUFELE9BQVEsUUFBUixFQUFrQixRQUFsQjtBQUNBQSxPQUFRLFdBQVIsRUFBcUIsV0FBckI7QUFDQUEsT0FBUSxnQkFBUixFQUEwQixHQUExQjs7QUFFQUUsUUFBUUMsTUFBUixDQUFnQixXQUFoQixFQUE2QjtBQUM1QixTQUFRQyxTQURvQjtBQUU1QixXQUFVQyxNQUZrQjtBQUc1QixTQUFRQyxjQUhvQjtBQUk1QixXQUFVLEtBSmtCO0FBSzVCLFVBQVMsQ0FMbUI7QUFNNUIsVUFBUyxRQU5tQixFQUE3QiIsImZpbGUiOiJyZWR1bmRhbnQuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBoYXJkZW4gPSByZXF1aXJlKCBcImhhcmRlblwiICk7XG5cblxuXG4vLzogQGNsaWVudDpcbmNvbnN0IE9saXZhbnQgPSByZXF1aXJlKCBcIi4vb2xpdmFudC5zdXBwb3J0LmpzXCIgKTtcbi8vOiBAZW5kLWNsaWVudFxuXG5oYXJkZW4oIFwiRkFJTEVEXCIsIFwiZmFpbGVkXCIgKTtcbmhhcmRlbiggXCJSRURVTkRBTlRcIiwgXCJyZWR1bmRhbnRcIiApO1xuaGFyZGVuKCBcIlJFRFVOREFOVF9DT0RFXCIsIDQyOSApO1xuXG5PbGl2YW50LmNyZWF0ZSggXCJSZWR1bmRhbnRcIiwge1xuXHRcIm5hbWVcIjogUkVEVU5EQU5ULFxuXHRcInN0YXR1c1wiOiBGQUlMRUQsXG5cdFwiY29kZVwiOiBSRURVTkRBTlRfQ09ERSxcblx0XCJzaWxlbnRcIjogZmFsc2UsXG5cdFwiZGVwdGhcIjogNixcblx0XCJjb2xvclwiOiBcInllbGxvd1wiXG59ICk7XG4iXX0=
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVuZGFudC5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImhhcmRlbiIsInJlcXVpcmUiLCJPbGl2YW50IiwiY3JlYXRlIiwiUkVEVU5EQU5UIiwiRkFJTEVEIiwiUkVEVU5EQU5UX0NPREUiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLElBQU1BLFNBQVNDLFFBQVMsUUFBVEEsQ0FBZjs7OztBQUlBO0FBQ0EsSUFBTUMsVUFBVUQsUUFBUyxzQkFBVEEsQ0FBaEI7QUFDQTs7QUFFQUQsT0FBUSxRQUFSQSxFQUFrQixRQUFsQkE7QUFDQUEsT0FBUSxXQUFSQSxFQUFxQixXQUFyQkE7QUFDQUEsT0FBUSxnQkFBUkEsRUFBMEIsR0FBMUJBOztBQUVBRSxRQUFRQyxNQUFSRCxDQUFnQixXQUFoQkEsRUFBNkI7QUFDNUIsU0FBUUUsU0FEb0I7QUFFNUIsV0FBVUMsTUFGa0I7QUFHNUIsU0FBUUMsY0FIb0I7QUFJNUIsV0FBVSxLQUprQjtBQUs1QixVQUFTLENBTG1CO0FBTTVCLFVBQVMsUUFObUIsRUFBN0JKIiwiZmlsZSI6InJlZHVuZGFudC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGhhcmRlbiA9IHJlcXVpcmUoIFwiaGFyZGVuXCIgKTtcblxuXG5cbi8vOiBAY2xpZW50OlxuY29uc3QgT2xpdmFudCA9IHJlcXVpcmUoIFwiLi9vbGl2YW50LnN1cHBvcnQuanNcIiApO1xuLy86IEBlbmQtY2xpZW50XG5cbmhhcmRlbiggXCJGQUlMRURcIiwgXCJmYWlsZWRcIiApO1xuaGFyZGVuKCBcIlJFRFVOREFOVFwiLCBcInJlZHVuZGFudFwiICk7XG5oYXJkZW4oIFwiUkVEVU5EQU5UX0NPREVcIiwgNDI5ICk7XG5cbk9saXZhbnQuY3JlYXRlKCBcIlJlZHVuZGFudFwiLCB7XG5cdFwibmFtZVwiOiBSRURVTkRBTlQsXG5cdFwic3RhdHVzXCI6IEZBSUxFRCxcblx0XCJjb2RlXCI6IFJFRFVOREFOVF9DT0RFLFxuXHRcInNpbGVudFwiOiBmYWxzZSxcblx0XCJkZXB0aFwiOiA2LFxuXHRcImNvbG9yXCI6IFwieWVsbG93XCJcbn0gKTtcbiJdfQ==
