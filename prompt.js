"use strict";

const harden = require( "harden" );

//: @server:
const Olivant = require( "./olivant.js" );
//: @end-server



harden( "PROMPT", "prompt" );
harden( "PROMPT_CODE", 200 );

Olivant.create( "Prompt", {
	"name": PROMPT,
	"status": PROMPT,
	"code": PROMPT_CODE,
	"silent": true,
	"depth": 5,
	"color": "blue",
	"initialize": function initialize( ){
		this.prompt( );

		return this;
	}
} );
