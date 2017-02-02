"use strict";

var asea = require("asea");
var harden = require("harden");

//: @client:
var Olivant = require("./olivant.support.js");
//: @end-client

harden("RECORD", "record");
harden("RECORD_CODE", 200);

Olivant.create("Record", {
	"name": RECORD,
	"status": RECORD,
	"code": RECORD_CODE,
	"silent": true,
	"depth": 4,
	"color": "white",
	"inspect": {
		"depth": 1,
		"length": 100
	},
	"initialize": function initialize() {
		if (asea.server && process.env.NODE_ENV != "production") {
			this.prompt();
		} else if (asea.client && window.ENVIRONMENT != "production" && window.environment != "production" && !window.PRODUCTION && !window.production) {
			this.prompt();
		}

		this.report();

		return this;
	}
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY29yZC5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImFzZWEiLCJyZXF1aXJlIiwiaGFyZGVuIiwiT2xpdmFudCIsImNyZWF0ZSIsIlJFQ09SRCIsIlJFQ09SRF9DT0RFIiwiaW5pdGlhbGl6ZSIsInNlcnZlciIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsInByb21wdCIsImNsaWVudCIsIndpbmRvdyIsIkVOVklST05NRU5UIiwiZW52aXJvbm1lbnQiLCJQUk9EVUNUSU9OIiwicHJvZHVjdGlvbiIsInJlcG9ydCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNQyxTQUFTRCxRQUFTLFFBQVQsQ0FBZjs7QUFJQTtBQUNBLElBQU1FLFVBQVVGLFFBQVMsc0JBQVQsQ0FBaEI7QUFDQTs7QUFFQUMsT0FBUSxRQUFSLEVBQWtCLFFBQWxCO0FBQ0FBLE9BQVEsYUFBUixFQUF1QixHQUF2Qjs7QUFFQUMsUUFBUUMsTUFBUixDQUFnQixRQUFoQixFQUEwQjtBQUN6QixTQUFRQyxNQURpQjtBQUV6QixXQUFVQSxNQUZlO0FBR3pCLFNBQVFDLFdBSGlCO0FBSXpCLFdBQVUsSUFKZTtBQUt6QixVQUFTLENBTGdCO0FBTXpCLFVBQVMsT0FOZ0I7QUFPekIsWUFBVztBQUNWLFdBQVMsQ0FEQztBQUVWLFlBQVU7QUFGQSxFQVBjO0FBV3pCLGVBQWMsU0FBU0MsVUFBVCxHQUFzQjtBQUNuQyxNQUFJUCxLQUFLUSxNQUFMLElBQ0hDLFFBQVFDLEdBQVIsQ0FBWUMsUUFBWixJQUF3QixZQUR6QixFQUVBO0FBQ0MsUUFBS0MsTUFBTDtBQUVBLEdBTEQsTUFLTSxJQUFJWixLQUFLYSxNQUFMLElBQ1BDLE9BQU9DLFdBQVAsSUFBc0IsWUFBdEIsSUFDREQsT0FBT0UsV0FBUCxJQUFzQixZQURyQixJQUVELENBQUNGLE9BQU9HLFVBRlAsSUFHRCxDQUFDSCxPQUFPSSxVQUpKLEVBS047QUFDQyxRQUFLTixNQUFMO0FBQ0E7O0FBRUQsT0FBS08sTUFBTDs7QUFFQSxTQUFPLElBQVA7QUFDQTtBQTdCd0IsQ0FBMUIiLCJmaWxlIjoicmVjb3JkLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgYXNlYSA9IHJlcXVpcmUoIFwiYXNlYVwiICk7XG5jb25zdCBoYXJkZW4gPSByZXF1aXJlKCBcImhhcmRlblwiICk7XG5cblxuXG4vLzogQGNsaWVudDpcbmNvbnN0IE9saXZhbnQgPSByZXF1aXJlKCBcIi4vb2xpdmFudC5zdXBwb3J0LmpzXCIgKTtcbi8vOiBAZW5kLWNsaWVudFxuXG5oYXJkZW4oIFwiUkVDT1JEXCIsIFwicmVjb3JkXCIgKTtcbmhhcmRlbiggXCJSRUNPUkRfQ09ERVwiLCAyMDAgKTtcblxuT2xpdmFudC5jcmVhdGUoIFwiUmVjb3JkXCIsIHtcblx0XCJuYW1lXCI6IFJFQ09SRCxcblx0XCJzdGF0dXNcIjogUkVDT1JELFxuXHRcImNvZGVcIjogUkVDT1JEX0NPREUsXG5cdFwic2lsZW50XCI6IHRydWUsXG5cdFwiZGVwdGhcIjogNCxcblx0XCJjb2xvclwiOiBcIndoaXRlXCIsXG5cdFwiaW5zcGVjdFwiOiB7XG5cdFx0XCJkZXB0aFwiOiAxLFxuXHRcdFwibGVuZ3RoXCI6IDEwMFxuXHR9LFxuXHRcImluaXRpYWxpemVcIjogZnVuY3Rpb24gaW5pdGlhbGl6ZSggKXtcblx0XHRpZiggYXNlYS5zZXJ2ZXIgJiZcblx0XHRcdHByb2Nlc3MuZW52Lk5PREVfRU5WICE9IFwicHJvZHVjdGlvblwiIClcblx0XHR7XG5cdFx0XHR0aGlzLnByb21wdCggKTtcblxuXHRcdH1lbHNlIGlmKCBhc2VhLmNsaWVudCAmJlxuXHRcdFx0KCB3aW5kb3cuRU5WSVJPTk1FTlQgIT0gXCJwcm9kdWN0aW9uXCIgJiZcblx0XHRcdFx0d2luZG93LmVudmlyb25tZW50ICE9IFwicHJvZHVjdGlvblwiICYmXG5cdFx0XHRcdCF3aW5kb3cuUFJPRFVDVElPTiAmJlxuXHRcdFx0XHQhd2luZG93LnByb2R1Y3Rpb24gKSApXG5cdFx0e1xuXHRcdFx0dGhpcy5wcm9tcHQoICk7XG5cdFx0fVxuXG5cdFx0dGhpcy5yZXBvcnQoICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxufSApO1xuIl19
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY29yZC5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImFzZWEiLCJyZXF1aXJlIiwiaGFyZGVuIiwiT2xpdmFudCIsImNyZWF0ZSIsIlJFQ09SRCIsIlJFQ09SRF9DT0RFIiwiaW5pdGlhbGl6ZSIsInNlcnZlciIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsInByb21wdCIsImNsaWVudCIsIndpbmRvdyIsIkVOVklST05NRU5UIiwiZW52aXJvbm1lbnQiLCJQUk9EVUNUSU9OIiwicHJvZHVjdGlvbiIsInJlcG9ydCJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWTs7QUFFWixNQUFNQSxLQUFLLEVBQUVDLE9BQU8sRUFBRSxPQUFPLENBQUM7QUFDOUIsTUFBTUMsT0FBTyxFQUFFRCxPQUFPLEVBQUUsU0FBUyxDQUFDOzs7OztBQUtsQyxNQUFNRSxRQUFRLEVBQUVGLE9BQU8sRUFBRSx1QkFBdUIsQ0FBQzs7O0FBR2pEQyxNQUFNLEVBQUUsUUFBUSxFQUFFLFNBQVMsQ0FBQztBQUM1QkEsTUFBTSxFQUFFLGFBQWEsRUFBRSxJQUFJLENBQUM7O0FBRTVCQyxPQUFPLENBQUNDLE1BQU0sRUFBRSxRQUFRLEVBQUU7Q0FDekIsTUFBTSxFQUFFQyxNQUFNO0NBQ2QsUUFBUSxFQUFFQSxNQUFNO0NBQ2hCLE1BQU0sRUFBRUMsV0FBVztDQUNuQixRQUFRLEVBQUUsSUFBSTtDQUNkLE9BQU8sRUFBRSxDQUFDO0NBQ1YsT0FBTyxFQUFFLE9BQU87Q0FDaEIsU0FBUyxFQUFFO0VBQ1YsT0FBTyxFQUFFLENBQUM7RUFDVixRQUFRLEVBQUU7Q0FDWCxDQUFDO0NBQ0QsWUFBWSxFQUFFLFNBQVNDLFVBQVUsRUFBRSxDQUFDO0VBQ25DLEVBQUUsRUFBRVAsSUFBSSxDQUFDUSxPQUFPO0dBQ2ZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxTQUFTLEdBQUcsYUFBYTtFQUN0QztHQUNDLElBQUksQ0FBQ0MsTUFBTSxFQUFFLENBQUM7O0VBRWYsQ0FBQyxLQUFLLEVBQUUsRUFBRVosSUFBSSxDQUFDYSxPQUFPO0dBQ3JCLEVBQUVDLE1BQU0sQ0FBQ0MsWUFBWSxHQUFHLGFBQWE7SUFDcENELE1BQU0sQ0FBQ0UsWUFBWSxHQUFHLGFBQWE7SUFDbkMsQ0FBQ0YsTUFBTSxDQUFDRyxXQUFXO0lBQ25CLENBQUNILE1BQU0sQ0FBQ0ksV0FBVyxFQUFFO0VBQ3ZCO0dBQ0MsSUFBSSxDQUFDTixNQUFNLEVBQUUsQ0FBQztFQUNmOztFQUVBLElBQUksQ0FBQ08sTUFBTSxFQUFFLENBQUM7O0VBRWQsT0FBTyxJQUFJO0NBQ1o7QUFDRCxFQUFFLENBQUMiLCJmaWxlIjoicmVjb3JkLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgYXNlYSA9IHJlcXVpcmUoIFwiYXNlYVwiICk7XG5jb25zdCBoYXJkZW4gPSByZXF1aXJlKCBcImhhcmRlblwiICk7XG5cblxuXG4vLzogQGNsaWVudDpcbmNvbnN0IE9saXZhbnQgPSByZXF1aXJlKCBcIi4vb2xpdmFudC5zdXBwb3J0LmpzXCIgKTtcbi8vOiBAZW5kLWNsaWVudFxuXG5oYXJkZW4oIFwiUkVDT1JEXCIsIFwicmVjb3JkXCIgKTtcbmhhcmRlbiggXCJSRUNPUkRfQ09ERVwiLCAyMDAgKTtcblxuT2xpdmFudC5jcmVhdGUoIFwiUmVjb3JkXCIsIHtcblx0XCJuYW1lXCI6IFJFQ09SRCxcblx0XCJzdGF0dXNcIjogUkVDT1JELFxuXHRcImNvZGVcIjogUkVDT1JEX0NPREUsXG5cdFwic2lsZW50XCI6IHRydWUsXG5cdFwiZGVwdGhcIjogNCxcblx0XCJjb2xvclwiOiBcIndoaXRlXCIsXG5cdFwiaW5zcGVjdFwiOiB7XG5cdFx0XCJkZXB0aFwiOiAxLFxuXHRcdFwibGVuZ3RoXCI6IDEwMFxuXHR9LFxuXHRcImluaXRpYWxpemVcIjogZnVuY3Rpb24gaW5pdGlhbGl6ZSggKXtcblx0XHRpZiggYXNlYS5zZXJ2ZXIgJiZcblx0XHRcdHByb2Nlc3MuZW52Lk5PREVfRU5WICE9IFwicHJvZHVjdGlvblwiIClcblx0XHR7XG5cdFx0XHR0aGlzLnByb21wdCggKTtcblxuXHRcdH1lbHNlIGlmKCBhc2VhLmNsaWVudCAmJlxuXHRcdFx0KCB3aW5kb3cuRU5WSVJPTk1FTlQgIT0gXCJwcm9kdWN0aW9uXCIgJiZcblx0XHRcdFx0d2luZG93LmVudmlyb25tZW50ICE9IFwicHJvZHVjdGlvblwiICYmXG5cdFx0XHRcdCF3aW5kb3cuUFJPRFVDVElPTiAmJlxuXHRcdFx0XHQhd2luZG93LnByb2R1Y3Rpb24gKSApXG5cdFx0e1xuXHRcdFx0dGhpcy5wcm9tcHQoICk7XG5cdFx0fVxuXG5cdFx0dGhpcy5yZXBvcnQoICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxufSApO1xuIl19
