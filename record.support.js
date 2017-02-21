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
//# sourceMappingURL=record.support.js.map
