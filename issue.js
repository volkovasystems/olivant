"use strict";

const harden = require( "harden" );

//: @server:
const Olivant = require( "./olivant.js" );
//: @end-server



harden( "ERROR", "error" );
harden( "ISSUE", "issue" );
harden( "ISSUE_CODE", 500 );

Olivant.create( "Issue", {
	"name": ISSUE,
	"status": ERROR,
	"code": ISSUE_CODE,
	"silent": false,
	"depth": 8,
	"color": "red",
	"inspect": {
		"depth": 5,
		"length": 1000
	}
} );
