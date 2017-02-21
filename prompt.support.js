"use strict";

var harden = require("harden");



//: @client:
var Olivant = require("./olivant.support.js");
//: @end-client

harden("PROMPT", "prompt");
harden("PROMPT_CODE", 200);

Olivant.create("Prompt", {
	"name": PROMPT,
	"status": PROMPT,
	"code": PROMPT_CODE,
	"silent": true,
	"depth": 5,
	"color": "blue",
	"initialize": function initialize() {
		this.prompt();

		return this;
	} });
//# sourceMappingURL=prompt.support.js.map
