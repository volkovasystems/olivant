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
//# sourceMappingURL=redundant.support.js.map
