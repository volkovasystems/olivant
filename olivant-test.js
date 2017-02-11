"use strict";

require( "./index.js" );

Warning( "empty name", { "name": "" } ).prompt( "cannot set name" );

Prompt( "empty name", { "name": "" } ).prompt( "cannot set name" );

Fatal( "nothing is permanent", new Error( "this is an error" ) );
