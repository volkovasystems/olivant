"use strict";

var harden = require("harden");



//: @client:
var Olivant = require("./olivant.support.js");
//: @end-client

harden("ERROR", "error");
harden("ERROR_CODE", 500);

Olivant.create("Bug", {
	"name": ERROR,
	"status": ERROR,
	"code": ERROR_CODE,
	"silent": false,
	"depth": 7,
	"color": "red",
	"inspect": {
		"depth": 5,
		"length": 1000 } });
//# sourceMappingURL=bug.support.js.map
