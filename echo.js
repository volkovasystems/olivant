"use strict";

const harden = require( "harden" );

//: @server:
const Olivant = require( "./olivant.js" );
//: @end-server



harden( "ECHO", "echo" );
harden( "ECHO_CODE", 200 );

Olivant.create( "Echo", {
	"name": ECHO,
	"status": ECHO,
	"code": ECHO_CODE,
	"silent": true,
	"depth": 4
} );
