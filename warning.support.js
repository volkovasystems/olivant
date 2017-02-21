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
		"length": 500 } });
//# sourceMappingURL=warning.support.js.map
