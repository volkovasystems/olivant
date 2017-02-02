"use strict";

const harden = require( "harden" );

//: @server:
const Olivant = require( "./olivant.js" );
//: @end-server

//: @client:
const Olivant = require( "./olivant.support.js" );
//: @end-client

harden( "SUCCESS", "success" );
harden( "SUCCESS_CODE", 200 );

Olivant.create( "Success", {
	"name": SUCCESS,
	"status": SUCCESS,
	"code": SUCCESS_CODE,
	"silent": true,
	"depth": 3,
	"color": "green"
} );
