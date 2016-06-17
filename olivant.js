"use strict";

/*:
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2016 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"package": "olivant",
			"path": "olivant/olivant.js",
			"file": "olivant.js",
			"module": "olivant",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/olivant.git",
			"test": "olivant-test.js",
			"global": true,
			"class": true
		}
	@end-module-configuration

	@module-documentation:
	@end-module-documentation

	@include:
		{
			"asea": "asea",
			"called": "called",
			"diatom": "diatom",
			"Ethernity": "ethernity",
			"excursio": "excursio",
			"harden": "harden",
			"meek": "meek"
			"outre": "outre",
			"raze": "raze",
			"symbiote": "symbiote",
			"trace": "stacktrace-js",
			"U200b": "u200b"
		}
	@end-include
*/

if( typeof window == "undefined" ){
	var asea = require( "asea" );
	var called = require( "called" );
	var diatom = require( "diatom" );
	var Ethernity = require( "ethernity" );
	var excursio = require( "excursio" );
	var harden = require( "harden" );
	var meek = require( "meek" );
	var outre = require( "outre" );
	var raze = require( "raze" );
	var symbiote = require( "symbiote" );
	var trace = require( "stacktrace-js" );
	var U200b = require( "u200b" );
}

if( typeof window != "undefined" &&
	!( "asea" in window ) )
{
	throw new Error( "asea is not defined" );
}

if( asea.client &&
	!( "called" in window ) )
{
	throw new Error( "called is not defined" );
}

if( asea.client &&
	!( "diatom" in window ) )
{
	throw new Error( "diatom is not defined" );
}

if( asea.client &&
	!( "Ethernity" in window ) )
{
	throw new Error( "Ethernity is not defined" );
}

if( asea.client &&
	!( "excursio" in window ) )
{
	throw new Error( "excursio is not defined" );
}

if( asea.client &&
	!( "harden" in window ) )
{
	throw new Error( "harden is not defined" );
}

if( asea.client &&
	!( "meek" in window ) )
{
	throw new Error( "meek is not defined" );
}

if( asea.client &&
	!( "outre" in window ) )
{
	throw new Error( "outre is not defined" );
}

if( asea.client &&
	!( "raze" in window ) )
{
	throw new Error( "raze is not defined" );
}

if( asea.client &&
	!( "symbiote" in window ) )
{
	throw new Error( "symbiote is not defined" );
}

if( asea.client &&
	!( "StackTrace" in window ) )
{
	throw new Error( "StackTrace is not defined" );

}else if( asea.client &&
	"StackTrace" in window )
{
	var trace = StackTrace;
}

if( asea.client &&
	!( "U200b" in window ) )
{
	throw new Error( "U200b is not defined" );
}

var Olivant = diatom( "Olivant" );

harden( "FATAL", "fatal" );
harden( "FATAL_CODE", 500 );
harden( "ISSUE", "issue" );
harden( "ISSUE_CODE", 500 );
harden( "ERROR", "error" );
harden( "ERROR_CODE", 500 );
harden( "FAILED", "failed" );
harden( "FAILED_CODE", 403 );
harden( "WARNING", "warning" );
harden( "WARNING_CODE", 400 );
harden( "ECHO", "echo" );
harden( "ECHO_CODE", 200 );
harden( "PROMPT", "prompt" );
harden( "PROMPT_CODE", 200 );
harden( "SUCCESS", "success" );
harden( "SUCCESS_CODE", 200 );

Olivant.prototype.initialize = function initialize( option ){
	this.set( );

	this.getTrace( );

	if( typeof arguments[ 0 ] == "string" ){
		this.remind.apply( this, raze( arguments ) );

		return this;
	}

	return this;
};

Olivant.prototype.set = function set( option ){
	option = option || { };

	this.name = option.name || this.name || ECHO

	this.status = option.status || this.status || ECHO;

	this.code = option.code || this.code || ECHO_CODE;

	this.stack = option.stack || this.stack || [ ];

	this.log = option.log || this.log || console.log;

	this.silent = ( "silent" in option )? option.silent :
		( "silent" in this )? this.silent :
		true;

	//: Level dictates refined settings of this procedure.
	this.level = ( "level" in option )? option.level :
		( "level" in this )? this.level :
		+this.silent;

	//: Level is only from 1-0 or 1-2345-6789-0.
	//: Level 2 is deep silent level.
	this.level = this.level % 10;

	return this;
};

Olivant.prototype.toString = function toString( ){
	return this.getMessage( );
};

Olivant.prototype.valueOf = function valueOf( ){
	return this.getMessage( );
};

/*:
	@method-documentation:
		The message consist of three layer of strings,
			1. timestamp in true time format
			2. actual readable message
			3. message trace

		These information will be divided through zero-width space convention.
	@end-method-documentation
*/
Olivant.prototype.getMessage = function getMessage( ){
	var composition = [ ];

	var timestamp = Ethernity( ).persist( );
	composition.push( timestamp );

	var message = U200b( outre( [ this.name, this.status, this.message ] ) ).join( ", " );
	composition.push( message );

	var stack = "stack trace not ready";
	if( !this.silent &&
		this.stack )
	{
		stack = this.stack || stack;

		if( Array.isArray( stack ) ){
			stack = stack.map( function onEachFrame( frame ){
				return frame.toString( );
			} );

			stack = U200b( stack ).join( "\n" );
		}

		composition.push( stack );

	}else if( this.silent ){
		stack = "stack trace is not available on silent mode";
		composition.push( stack );

	}else if( this.level > 5 ){
		composition.push( stack );
	}

	composition = U200b( composition ).join( "\n" );

	return composition;
};

Olivant.prototype.getTrace = function getTrace( callback ){
	if( this.level == 2 ){
		this.remind( "tracing is disabled for level 2" )
			.prompt( );

		return this;
	}

	callback = called( callback );

	trace
		.get( )

		.then( ( function onGetTrace( frameList ){
			this.stack = frameList;

			callback( null, this.stack );
		} ).bind( this ) )

		.catch( function onError( error ){
			callback( this.remind( error ) );
		} );

	return this;
};

/*:
	@method-documentation:
		This will let us set the logging function.
	@end-method-documentation
*/
Olivant.prototype.setLog = function setLog( log ){
	if( typeof log != "function" ){
		throw new Error( "invalid log method" );
	}

	this.log = log;

	return this;
};

/*:
	@method-documentation:
		Send data to server or client.
	@end-method-documentation
*/
Olivant.prototype.send = function send( ){
	/*:
		@meta-configuration:
			{
				"response": "http.ServerResponse",
				"procedure": "function"
			}
		@end-meta-configuration
	*/

	if( this.level == 2 ){
		this.remind( "sending is disabled for level 2" )
			.prompt( );

		return this;
	}

	var message = meek( this.status, this.getMessage( ) );

	if( asea.server ){
		var response = arguments[ 0 ];

		message.send( response, this.code );

	}else if( asea.client ){
		var procedure = arguments[ 0 ];

		message.send.bind( this )( procedure );
	}

	return this;
};

/*:
	@method-documentation:
		Stream data to listeners.
	@end-method-documentation
*/
Olivant.prototype.report = function report( ){
	if( this.level == 2 ){
		this.remind( "reporting is disabled for level 2" )
			.prompt( );

		return this;
	}

	if( asea.server ){
		excursio.bind( this )
			( function procedure( ){
				/*!
					process.nextTick( function onTick( ){
						process.emit( this.name, this );
					}.bind( this ) );
				*/
			} );

	}else if( asea.client ){
		excursio.bind( this )
			( function procedure( ){
				/*!
					var timeout = setTimeout( ( function onTimeout( ){
						var event = new Event( this.name );
						event.data = this;

						document.dispatchEvent( event );

						clearTimeout( timeout );
					} ).bind( this ) );
				*/
			} );
	}

	return this;
};

/*:
	@method-documentation:
		Append messages to the current message.
	@end-method-documentation
*/
Olivant.prototype.remind = function remind( ){
	if( !arguments.length ){
		return this;
	}

	this.message = U200b( raze( arguments )
		.map( function onEachParameter( parameter ){
			if( typeof parameter == "string" ||
				typeof parameter == "number" ||
				typeof parameter == "boolean" )
			{
				return parameter;

			}else if( asea.server ){
				return util.inspect( parameter );

			}else if( asea.client ){
				return parameter
			}
		} )
		.concat( [ this.message ] ) )
		.join( ", " );

	this.report( );

	return this;
};

/*:
	@method-documentation:
		Log the data.
	@end-method-documentation
*/
Olivant.prototype.prompt = function prompt( ){
	this.remind.apply( this, raze( arguments ) );

	if( this.level == 2 ){
		this.log( this.getMessage( ) );

		return this;
	}

	if( this.stack ){
		this.log( this.getMessage( ) );

	}else{
		this.getTrace( ( function onTrace( error, stack ){
			if( !error && stack ){
				this.stack = stack;

				this.log( this.getMessage( ) );

			}else{
				this.log( this.getMessage( ) );
			}
		} ).bind( this ) );
	}

	return this;
};

harden( "create", function create( name, option ){
	var Clone = diatom( name );
	Clone = heredito( Clone, Olivant );

	Clone.prototype.initialize = option.initialize ||
		function initialize( ){
			this.name = option.name;

			this.status = option.status;

			this.code = option.code;

			this.silent = option.silent;

			this.level = option.level;
		};

	symbiote( Clone );

	harden( name, Clone );
}, Olivant );

Olivant.create( "Fatal", {
	"name": FATAL,
	"status": ERROR,
	"code": FATAL_CODE,
	"silent": false,
	"level": 9
} );

Olivant.create( "Issue", {
	"name": ISSUE,
	"status": ERROR,
	"code": ISSUE_CODE,
	"silent": false,
	"level": 8
} );

Olivant.create( "Bug", {
	"name": ERROR,
	"status": ERROR,
	"code": ERROR_CODE,
	"silent": false,
	"level": 7
} );

Olivant.create( "Warning", {
	"name": WARNING,
	"status": FAILED,
	"code": WARNING_CODE,
	"silent": false,
	"level": 6
} );

Olivant.create( "Failed", {
	"name": FAILED,
	"status": FAILED,
	"code": FAILED_CODE,
	"silent": false,
	"level": 6
} );

Olivant.create( "Prompt", {
	"name": PROMPT,
	"status": PROMPT,
	"code": PROMPT_CODE,
	"silent": false,
	"level": 5
} );

Olivant.create( "Echo", {
	"name": ECHO,
	"status": ECHO,
	"code": ECHO_CODE,
	"silent": true,
	"level": 4
} );

Olivant.create( "Success", {
	"name": SUCCESS,
	"status": SUCCESS,
	"code": SUCCESS_CODE,
	"silent": true,
	"level": 3
} );

if( asea.server ){
	module.exports = Olivant;
}
