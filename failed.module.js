"use strict";

const harden = require( "harden" );

//: @server:
const Olivant = require( "./olivant.js" );
//: @end-server

//: @client:
const Olivant = require( "./olivant.support.js" );
//: @end-client

harden( "FAILED", "failed" );
harden( "FAILED_CODE", 403 );

Olivant.create( "Failed", {
	"name": FAILED,
	"status": FAILED,
	"code": FAILED_CODE,
	"silent": false,
	"depth": 6,
	"color": "yellow"
} );
