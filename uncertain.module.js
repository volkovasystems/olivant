"use strict";

const harden = require( "harden" );

//: @server:
const Olivant = require( "./olivant.js" );
//: @end-server

//: @client:
const Olivant = require( "./olivant.support.js" );
//: @end-client

harden( "FAILED", "failed" );
harden( "UNCERTAIN", "uncertain" );
harden( "UNCERTAIN_CODE", 404 );

Olivant.create( "Uncertain", {
	"name": UNCERTAIN,
	"status": FAILED,
	"code": UNCERTAIN_CODE,
	"silent": false,
	"depth": 6,
	"color": "yellow"
} );
