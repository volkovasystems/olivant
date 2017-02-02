"use strict";

const harden = require( "harden" );

//: @server:
const Olivant = require( "./olivant.js" );
//: @end-server

//: @client:
const Olivant = require( "./olivant.support.js" );
//: @end-client

harden( "ERROR", "error" );
harden( "ERROR_CODE", 500 );

Olivant.create( "Bug", {
	"name": ERROR,
	"status": ERROR,
	"code": ERROR_CODE,
	"silent": false,
	"depth": 7,
	"color": "red",
	"inspect": {
		"depth": 5,
		"length": 1000
	}
} );
