"use strict";

var harden = require("harden");

//: @client:
var Olivant = require("./olivant.support.js");
//: @end-client

harden("ERROR", "error");
harden("ISSUE", "issue");
harden("ISSUE_CODE", 500);

Olivant.create("Issue", {
	"name": ISSUE,
	"status": ERROR,
	"code": ISSUE_CODE,
	"silent": false,
	"depth": 8,
	"color": "red",
	"inspect": {
		"depth": 5,
		"length": 1000
	}
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlzc3VlLnN1cHBvcnQuanMiXSwibmFtZXMiOlsiaGFyZGVuIiwicmVxdWlyZSIsIk9saXZhbnQiLCJjcmVhdGUiLCJJU1NVRSIsIkVSUk9SIiwiSVNTVUVfQ09ERSJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7O0FBSUE7QUFDQSxJQUFNQyxVQUFVRCxRQUFTLHNCQUFULENBQWhCO0FBQ0E7O0FBRUFELE9BQVEsT0FBUixFQUFpQixPQUFqQjtBQUNBQSxPQUFRLE9BQVIsRUFBaUIsT0FBakI7QUFDQUEsT0FBUSxZQUFSLEVBQXNCLEdBQXRCOztBQUVBRSxRQUFRQyxNQUFSLENBQWdCLE9BQWhCLEVBQXlCO0FBQ3hCLFNBQVFDLEtBRGdCO0FBRXhCLFdBQVVDLEtBRmM7QUFHeEIsU0FBUUMsVUFIZ0I7QUFJeEIsV0FBVSxLQUpjO0FBS3hCLFVBQVMsQ0FMZTtBQU14QixVQUFTLEtBTmU7QUFPeEIsWUFBVztBQUNWLFdBQVMsQ0FEQztBQUVWLFlBQVU7QUFGQTtBQVBhLENBQXpCIiwiZmlsZSI6Imlzc3VlLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgaGFyZGVuID0gcmVxdWlyZSggXCJoYXJkZW5cIiApO1xuXG5cblxuLy86IEBjbGllbnQ6XG5jb25zdCBPbGl2YW50ID0gcmVxdWlyZSggXCIuL29saXZhbnQuc3VwcG9ydC5qc1wiICk7XG4vLzogQGVuZC1jbGllbnRcblxuaGFyZGVuKCBcIkVSUk9SXCIsIFwiZXJyb3JcIiApO1xuaGFyZGVuKCBcIklTU1VFXCIsIFwiaXNzdWVcIiApO1xuaGFyZGVuKCBcIklTU1VFX0NPREVcIiwgNTAwICk7XG5cbk9saXZhbnQuY3JlYXRlKCBcIklzc3VlXCIsIHtcblx0XCJuYW1lXCI6IElTU1VFLFxuXHRcInN0YXR1c1wiOiBFUlJPUixcblx0XCJjb2RlXCI6IElTU1VFX0NPREUsXG5cdFwic2lsZW50XCI6IGZhbHNlLFxuXHRcImRlcHRoXCI6IDgsXG5cdFwiY29sb3JcIjogXCJyZWRcIixcblx0XCJpbnNwZWN0XCI6IHtcblx0XHRcImRlcHRoXCI6IDUsXG5cdFx0XCJsZW5ndGhcIjogMTAwMFxuXHR9XG59ICk7XG4iXX0=
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlzc3VlLnN1cHBvcnQuanMiXSwibmFtZXMiOlsiaGFyZGVuIiwicmVxdWlyZSIsIk9saXZhbnQiLCJjcmVhdGUiLCJJU1NVRSIsIkVSUk9SIiwiSVNTVUVfQ09ERSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWTs7QUFFWixNQUFNQSxPQUFPLEVBQUVDLE9BQU8sRUFBRSxTQUFTLENBQUM7Ozs7O0FBS2xDLE1BQU1DLFFBQVEsRUFBRUQsT0FBTyxFQUFFLHVCQUF1QixDQUFDOzs7QUFHakRELE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDO0FBQzFCQSxNQUFNLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQztBQUMxQkEsTUFBTSxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUM7O0FBRTNCRSxPQUFPLENBQUNDLE1BQU0sRUFBRSxPQUFPLEVBQUU7Q0FDeEIsTUFBTSxFQUFFQyxLQUFLO0NBQ2IsUUFBUSxFQUFFQyxLQUFLO0NBQ2YsTUFBTSxFQUFFQyxVQUFVO0NBQ2xCLFFBQVEsRUFBRSxLQUFLO0NBQ2YsT0FBTyxFQUFFLENBQUM7Q0FDVixPQUFPLEVBQUUsS0FBSztDQUNkLFNBQVMsRUFBRTtFQUNWLE9BQU8sRUFBRSxDQUFDO0VBQ1YsUUFBUSxFQUFFO0NBQ1g7QUFDRCxFQUFFLENBQUMiLCJmaWxlIjoiaXNzdWUuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBoYXJkZW4gPSByZXF1aXJlKCBcImhhcmRlblwiICk7XG5cblxuXG4vLzogQGNsaWVudDpcbmNvbnN0IE9saXZhbnQgPSByZXF1aXJlKCBcIi4vb2xpdmFudC5zdXBwb3J0LmpzXCIgKTtcbi8vOiBAZW5kLWNsaWVudFxuXG5oYXJkZW4oIFwiRVJST1JcIiwgXCJlcnJvclwiICk7XG5oYXJkZW4oIFwiSVNTVUVcIiwgXCJpc3N1ZVwiICk7XG5oYXJkZW4oIFwiSVNTVUVfQ09ERVwiLCA1MDAgKTtcblxuT2xpdmFudC5jcmVhdGUoIFwiSXNzdWVcIiwge1xuXHRcIm5hbWVcIjogSVNTVUUsXG5cdFwic3RhdHVzXCI6IEVSUk9SLFxuXHRcImNvZGVcIjogSVNTVUVfQ09ERSxcblx0XCJzaWxlbnRcIjogZmFsc2UsXG5cdFwiZGVwdGhcIjogOCxcblx0XCJjb2xvclwiOiBcInJlZFwiLFxuXHRcImluc3BlY3RcIjoge1xuXHRcdFwiZGVwdGhcIjogNSxcblx0XHRcImxlbmd0aFwiOiAxMDAwXG5cdH1cbn0gKTtcbiJdfQ==