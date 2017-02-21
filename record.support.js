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
		"length": 100 },

	"initialize": function initialize() {
		if (asea.server &&
		process.env.NODE_ENV != "production")
		{
			this.prompt();

		} else if (asea.client &&
		window.ENVIRONMENT != "production" &&
		window.environment != "production" &&
		!window.PRODUCTION &&
		!window.production)
		{
			this.prompt();
		}

		this.report();

		return this;
	} });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY29yZC5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImFzZWEiLCJyZXF1aXJlIiwiaGFyZGVuIiwiT2xpdmFudCIsImNyZWF0ZSIsIlJFQ09SRCIsIlJFQ09SRF9DT0RFIiwiaW5pdGlhbGl6ZSIsInNlcnZlciIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsInByb21wdCIsImNsaWVudCIsIndpbmRvdyIsIkVOVklST05NRU5UIiwiZW52aXJvbm1lbnQiLCJQUk9EVUNUSU9OIiwicHJvZHVjdGlvbiIsInJlcG9ydCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNQyxTQUFTRCxRQUFTLFFBQVQsQ0FBZjs7OztBQUlBO0FBQ0EsSUFBTUUsVUFBVUYsUUFBUyxzQkFBVCxDQUFoQjtBQUNBOztBQUVBQyxPQUFRLFFBQVIsRUFBa0IsUUFBbEI7QUFDQUEsT0FBUSxhQUFSLEVBQXVCLEdBQXZCOztBQUVBQyxRQUFRQyxNQUFSLENBQWdCLFFBQWhCLEVBQTBCO0FBQ3pCLFNBQVFDLE1BRGlCO0FBRXpCLFdBQVVBLE1BRmU7QUFHekIsU0FBUUMsV0FIaUI7QUFJekIsV0FBVSxJQUplO0FBS3pCLFVBQVMsQ0FMZ0I7QUFNekIsVUFBUyxPQU5nQjtBQU96QixZQUFXO0FBQ1YsV0FBUyxDQURDO0FBRVYsWUFBVSxHQUZBLEVBUGM7O0FBV3pCLGVBQWMsU0FBU0MsVUFBVCxHQUFzQjtBQUNuQyxNQUFJUCxLQUFLUSxNQUFMO0FBQ0hDLFVBQVFDLEdBQVIsQ0FBWUMsUUFBWixJQUF3QixZQUR6QjtBQUVBO0FBQ0MsUUFBS0MsTUFBTDs7QUFFQSxHQUxELE1BS00sSUFBSVosS0FBS2EsTUFBTDtBQUNQQyxTQUFPQyxXQUFQLElBQXNCLFlBQXRCO0FBQ0RELFNBQU9FLFdBQVAsSUFBc0IsWUFEckI7QUFFRCxHQUFDRixPQUFPRyxVQUZQO0FBR0QsR0FBQ0gsT0FBT0ksVUFKSjtBQUtOO0FBQ0MsUUFBS04sTUFBTDtBQUNBOztBQUVELE9BQUtPLE1BQUw7O0FBRUEsU0FBTyxJQUFQO0FBQ0EsRUE3QndCLEVBQTFCIiwiZmlsZSI6InJlY29yZC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGFzZWEgPSByZXF1aXJlKCBcImFzZWFcIiApO1xuY29uc3QgaGFyZGVuID0gcmVxdWlyZSggXCJoYXJkZW5cIiApO1xuXG5cblxuLy86IEBjbGllbnQ6XG5jb25zdCBPbGl2YW50ID0gcmVxdWlyZSggXCIuL29saXZhbnQuc3VwcG9ydC5qc1wiICk7XG4vLzogQGVuZC1jbGllbnRcblxuaGFyZGVuKCBcIlJFQ09SRFwiLCBcInJlY29yZFwiICk7XG5oYXJkZW4oIFwiUkVDT1JEX0NPREVcIiwgMjAwICk7XG5cbk9saXZhbnQuY3JlYXRlKCBcIlJlY29yZFwiLCB7XG5cdFwibmFtZVwiOiBSRUNPUkQsXG5cdFwic3RhdHVzXCI6IFJFQ09SRCxcblx0XCJjb2RlXCI6IFJFQ09SRF9DT0RFLFxuXHRcInNpbGVudFwiOiB0cnVlLFxuXHRcImRlcHRoXCI6IDQsXG5cdFwiY29sb3JcIjogXCJ3aGl0ZVwiLFxuXHRcImluc3BlY3RcIjoge1xuXHRcdFwiZGVwdGhcIjogMSxcblx0XHRcImxlbmd0aFwiOiAxMDBcblx0fSxcblx0XCJpbml0aWFsaXplXCI6IGZ1bmN0aW9uIGluaXRpYWxpemUoICl7XG5cdFx0aWYoIGFzZWEuc2VydmVyICYmXG5cdFx0XHRwcm9jZXNzLmVudi5OT0RFX0VOViAhPSBcInByb2R1Y3Rpb25cIiApXG5cdFx0e1xuXHRcdFx0dGhpcy5wcm9tcHQoICk7XG5cblx0XHR9ZWxzZSBpZiggYXNlYS5jbGllbnQgJiZcblx0XHRcdCggd2luZG93LkVOVklST05NRU5UICE9IFwicHJvZHVjdGlvblwiICYmXG5cdFx0XHRcdHdpbmRvdy5lbnZpcm9ubWVudCAhPSBcInByb2R1Y3Rpb25cIiAmJlxuXHRcdFx0XHQhd2luZG93LlBST0RVQ1RJT04gJiZcblx0XHRcdFx0IXdpbmRvdy5wcm9kdWN0aW9uICkgKVxuXHRcdHtcblx0XHRcdHRoaXMucHJvbXB0KCApO1xuXHRcdH1cblxuXHRcdHRoaXMucmVwb3J0KCApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn0gKTtcbiJdfQ==
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY29yZC5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImFzZWEiLCJyZXF1aXJlIiwiaGFyZGVuIiwiT2xpdmFudCIsImNyZWF0ZSIsIlJFQ09SRCIsIlJFQ09SRF9DT0RFIiwiaW5pdGlhbGl6ZSIsInNlcnZlciIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsInByb21wdCIsImNsaWVudCIsIndpbmRvdyIsIkVOVklST05NRU5UIiwiZW52aXJvbm1lbnQiLCJQUk9EVUNUSU9OIiwicHJvZHVjdGlvbiIsInJlcG9ydCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUyxNQUFUQSxDQUFiO0FBQ0EsSUFBTUMsU0FBU0QsUUFBUyxRQUFUQSxDQUFmOzs7O0FBSUE7QUFDQSxJQUFNRSxVQUFVRixRQUFTLHNCQUFUQSxDQUFoQjtBQUNBOztBQUVBQyxPQUFRLFFBQVJBLEVBQWtCLFFBQWxCQTtBQUNBQSxPQUFRLGFBQVJBLEVBQXVCLEdBQXZCQTs7QUFFQUMsUUFBUUMsTUFBUkQsQ0FBZ0IsUUFBaEJBLEVBQTBCO0FBQ3pCLFNBQVFFLE1BRGlCO0FBRXpCLFdBQVVBLE1BRmU7QUFHekIsU0FBUUMsV0FIaUI7QUFJekIsV0FBVSxJQUplO0FBS3pCLFVBQVMsQ0FMZ0I7QUFNekIsVUFBUyxPQU5nQjtBQU96QixZQUFXO0FBQ1YsV0FBUyxDQURDO0FBRVYsWUFBVSxHQUZBLEVBUGM7O0FBV3pCLGVBQWMsU0FBU0MsVUFBVCxHQUFzQjtBQUNuQyxNQUFJUCxLQUFLUSxNQUFMUjtBQUNIUyxVQUFRQyxHQUFSRCxDQUFZRSxRQUFaRixJQUF3QixZQUR6QjtBQUVBO0FBQ0MsUUFBS0csTUFBTDs7QUFFQSxHQUxELE1BS00sSUFBSVosS0FBS2EsTUFBTGI7QUFDUGMsU0FBT0MsV0FBUEQsSUFBc0IsWUFBdEJBO0FBQ0RBLFNBQU9FLFdBQVBGLElBQXNCLFlBRHJCQTtBQUVELEdBQUNBLE9BQU9HLFVBRlBIO0FBR0QsR0FBQ0EsT0FBT0ksVUFKSjtBQUtOO0FBQ0MsUUFBS04sTUFBTDtBQUNEOztBQUVBLE9BQUtPLE1BQUw7O0FBRUEsU0FBTyxJQUFQO0FBQ0QsRUE3QnlCLEVBQTFCaEIiLCJmaWxlIjoicmVjb3JkLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgYXNlYSA9IHJlcXVpcmUoIFwiYXNlYVwiICk7XG5jb25zdCBoYXJkZW4gPSByZXF1aXJlKCBcImhhcmRlblwiICk7XG5cblxuXG4vLzogQGNsaWVudDpcbmNvbnN0IE9saXZhbnQgPSByZXF1aXJlKCBcIi4vb2xpdmFudC5zdXBwb3J0LmpzXCIgKTtcbi8vOiBAZW5kLWNsaWVudFxuXG5oYXJkZW4oIFwiUkVDT1JEXCIsIFwicmVjb3JkXCIgKTtcbmhhcmRlbiggXCJSRUNPUkRfQ09ERVwiLCAyMDAgKTtcblxuT2xpdmFudC5jcmVhdGUoIFwiUmVjb3JkXCIsIHtcblx0XCJuYW1lXCI6IFJFQ09SRCxcblx0XCJzdGF0dXNcIjogUkVDT1JELFxuXHRcImNvZGVcIjogUkVDT1JEX0NPREUsXG5cdFwic2lsZW50XCI6IHRydWUsXG5cdFwiZGVwdGhcIjogNCxcblx0XCJjb2xvclwiOiBcIndoaXRlXCIsXG5cdFwiaW5zcGVjdFwiOiB7XG5cdFx0XCJkZXB0aFwiOiAxLFxuXHRcdFwibGVuZ3RoXCI6IDEwMFxuXHR9LFxuXHRcImluaXRpYWxpemVcIjogZnVuY3Rpb24gaW5pdGlhbGl6ZSggKXtcblx0XHRpZiggYXNlYS5zZXJ2ZXIgJiZcblx0XHRcdHByb2Nlc3MuZW52Lk5PREVfRU5WICE9IFwicHJvZHVjdGlvblwiIClcblx0XHR7XG5cdFx0XHR0aGlzLnByb21wdCggKTtcblxuXHRcdH1lbHNlIGlmKCBhc2VhLmNsaWVudCAmJlxuXHRcdFx0KCB3aW5kb3cuRU5WSVJPTk1FTlQgIT0gXCJwcm9kdWN0aW9uXCIgJiZcblx0XHRcdFx0d2luZG93LmVudmlyb25tZW50ICE9IFwicHJvZHVjdGlvblwiICYmXG5cdFx0XHRcdCF3aW5kb3cuUFJPRFVDVElPTiAmJlxuXHRcdFx0XHQhd2luZG93LnByb2R1Y3Rpb24gKSApXG5cdFx0e1xuXHRcdFx0dGhpcy5wcm9tcHQoICk7XG5cdFx0fVxuXG5cdFx0dGhpcy5yZXBvcnQoICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxufSApO1xuIl19
