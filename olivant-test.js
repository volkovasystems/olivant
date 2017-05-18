"use strict";

require( "./index.js" );

Warning( "empty name", { "reserverName": "" } )
.remind( "unable to create booking" ).prompt( "cannot set name" );

Prompt( "empty title", { "title": "" } ).prompt( "cannot set title" );

Uncertain( "empty store", { "store": "" } ).prompt( "cannot set title" );

Record( "existing store", { "store": "" } ).prompt( "cannot set store" );

Echo( "creating merchant", { "store": "" } ).prompt( "loading" );

Success( "Merchant created", { "name": "biyaheroes" } ).prompt( "created" );

Failed( "Unable to create merchant", { "name": "biyaheroes" } )
.prompt( "rolling back" );

Issue( "empty payment", { } ).prompt( "cannot resolve payment" );

Bug( "merchant invalid data", { "sadsdsd": "dfdsfd" } )
.prompt( "unsuccessful" );

Fatal( "nothing is permanent", new Error( "this is an error" ) );
