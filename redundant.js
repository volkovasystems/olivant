"use strict";

const harden = require( "harden" );

//: @server:
const Olivant = require( "./olivant.js" );
//: @end-server



harden( "FAILED", "failed" );
harden( "REDUNDANT", "redundant" );
harden( "REDUNDANT_CODE", 429 );

Olivant.create( "Redundant", {
	"name": REDUNDANT,
	"status": FAILED,
	"code": REDUNDANT_CODE,
	"silent": false,
	"depth": 6,
	"color": "yellow"
} );
