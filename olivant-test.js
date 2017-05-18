"use strict";

require( "./index.js" );

Warning( "empty name", { "name": "" } ).prompt( "cannot set name" );

Prompt( "empty title", { "title": "" } ).prompt( "cannot set title" );

Uncertain( "empty store", { "store": "" } ).prompt( "cannot set title" );

Success( "Merchant created", { "name": "biyaheroes" } ).prompt( "created" );

Issue( "empty payment", { } ).prompt( "cannot resolve payment" );

Fatal( "nothing is permanent", new Error( "this is an error" ) );
