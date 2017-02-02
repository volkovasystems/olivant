"use strict";

const harden = require( "harden" );

//: @server:
const Olivant = require( "./olivant.js" );
//: @end-server

//: @client:
const Olivant = require( "./olivant.support.js" );
//: @end-client

harden( "FAILED", "failed" );
harden( "WARNING", "warning" );
harden( "WARNING_CODE", 400 );

Olivant.create( "Warning", {
	"name": WARNING,
	"status": FAILED,
	"code": WARNING_CODE,
	"silent": false,
	"depth": 6,
	"color": "yellow",
	"inspect": {
		"depth": 1,
		"length": 500
	}
} );
