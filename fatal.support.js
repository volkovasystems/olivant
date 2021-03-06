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
		"length": 1000 },

	"initialize": function initialize() {
		this.prompt();
		this.report();

		if (asea.server) {
			Prompt("process " + process.pid + " terminating");

			dexist(process.pid);
		}

		return this;
	} });
//# sourceMappingURL=fatal.support.js.map
