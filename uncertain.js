"use strict";

const harden = require( "harden" );

//: @server:
const Olivant = require( "./olivant.js" );
//: @end-server



harden( "FAILED", "failed" );
harden( "UNCERTAIN", 404 );
harden( "UNCERTAIN_CODE", 404 );

Olivant.create( "Uncertain", {
	"name": UNCERTAIN,
	"status": FAILED,
	"code": UNCERTAIN_CODE,
	"silent": false,
	"depth": 6,
	"color": "yellow"
} );
