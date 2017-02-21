"use strict";

var harden = require("harden");



//: @client:
var Olivant = require("./olivant.support.js");
//: @end-client

harden("ECHO", "echo");
harden("ECHO_CODE", 200);

Olivant.create("Echo", {
	"name": ECHO,
	"status": ECHO,
	"code": ECHO_CODE,
	"silent": true,
	"depth": 4 });
//# sourceMappingURL=echo.support.js.map
