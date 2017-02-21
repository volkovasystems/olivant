"use strict";

var harden = require("harden");



//: @client:
var Olivant = require("./olivant.support.js");
//: @end-client

harden("FAILED", "failed");
harden("FAILED_CODE", 403);

Olivant.create("Failed", {
	"name": FAILED,
	"status": FAILED,
	"code": FAILED_CODE,
	"silent": false,
	"depth": 6,
	"color": "yellow" });
//# sourceMappingURL=failed.support.js.map
