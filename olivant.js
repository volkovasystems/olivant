"use strict";

/*;
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
			"blacksea": "blacksea",
			"called": "called",
			"chalk": "chalk",
			"dexist": "dexist",
			"diatom": "diatom",
			"Ethernity": "ethernity",
			"harden": "harden",
			"heredito": "heredito",
			"http": "http",
			"meek": "meek"
			"outre": "outre",
			"plough": "plough",
			"raze": "raze",
			"redsea": "redsea",
			"snapd": "snapd",
			"segway": "segway",
			"symbiote": "symbiote",
			"trace": "stacktrace-js",
			"U200b": "u200b"
		}
	@end-include
*/

if( typeof window == "undefined" ){
	var asea = require( "asea" );
	var blacksea = require( "blacksea" );
	var called = require( "called" );
	var chalk = require( "chalk" );
	var diatom = require( "diatom" );
	var dexist = require( "dexist" );
	var Ethernity = require( "ethernity" );
	var harden = require( "harden" );
	var heredito = require( "heredito" );
	var http = require( "http" );
	var meek = require( "meek" );
	var outre = require( "outre" );
	var plough = require( "plough" );
	var raze = require( "raze" );
	var redsea = require( "redsea" );
	var snapd = require( "snapd" );
	var segway = require( "segway" );
	var symbiote = require( "symbiote" );
	var trace = require( "stacktrace-js" );
	var U200b = require( "u200b" );
	var util = require( "util" );
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
	!( "harden" in window ) )
{
	throw new Error( "harden is not defined" );
}

if( asea.client &&
	!( "heredito" in window ) )
{
	throw new Error( "heredito is not defined" );
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
	!( "snapd" in window ) )
{
	throw new Error( "snapd is not defined" );
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
harden( "UNCERTAIN", 404 );
harden( "UNCERTAIN_CODE", 404 );
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

harden( "REDIRECT", "redirect" );

Olivant.prototype.initialize = function initialize( option ){
	if( typeof option == "object" ){
		this.set( option );

	}else{
		this.set( );
	}

	this.getTrace( );

	if( arguments.length == 0 ){
		return this;

	}else if( arguments[ 0 ] instanceof Olivant ){
		this.set( arguments[ 0 ] );

	}else if( arguments[ 0 ].toString( ).match( /Arguments/ ) &&
		typeof arguments[ 0 ] == "object" )
	{
		this.remind.apply( this, plough( raze( arguments[ 0 ] ) ) );

	}else if( typeof arguments[ 0 ] == "string" ){
		this.remind.apply( this, raze( arguments ) );
	}

	return this;
};

Olivant.prototype.set = function set( option ){
	option = option || { };

	this.name = option.name || this.name || ECHO

	this.status = option.status || this.status || ECHO;

	this.code = option.code || this.code || ECHO_CODE;

	this.log = option.log || this.log || console.log;

	this.silent = ( "silent" in option )? option.silent :
		( "silent" in this )? this.silent :
		true;

	//: Depth dictates refined settings of this procedure.
	this.depth = ( "depth" in option )? option.depth :
		( "depth" in this )? this.depth :
		+this.silent;

	//: Depth is only from 1-0 or 1-2345-6789-0.
	//: Depth 2 is deep silent depth.
	this.depth = this.depth % 10;

	if( asea.server ){
		this.color = option.color || this.color || chalk.white;
	}

	this.state = "";

	this.timeout = this.timeout || { };
	if( this.timeout ){
		for( var timeout in this.timeout ){
			clearTimeout( this.timeout[ timeout ] );

			delete this.timeout[ timeout ];
		}
	}

	this.stack = option.stack || this.stack || [ ];

	this.message = option.message || this.message || "";

	if( asea.server ){
		redsea( Issue );

		blacksea( Fatal );
	}

	return this;
};

Olivant.prototype.reset = function reset( option, renew ){
	if( typeof option == "function" &&
		typeof option.prototype == "object" &&
		option.prototype instanceof Olivant )
	{
		var logEngine = option;

		if( renew ){
			var data = {
				"message": this.message,
				"stack": this.stack
			};

			return logEngine( data );

		}else{
			this.set( logEngine.prototype );
		}

	}else if( typeof option == "object" ){
		this.set( option );

	}else{
		this.reset( Issue, true )
			.silence( )
			.prompt( "cannot reset to given option", option );
	}

	return this;
};

Olivant.prototype.toString = function toString( ){
	return U200b( outre( [ this.name, this.status, this.message ] ) ).join( ", " );
};

Olivant.prototype.valueOf = function valueOf( ){
	return U200b( outre( [ this.name, this.status, this.message ] ) ).join( ", " );
};

/*;
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

	var timestamp = Ethernity( ).printTime( true );
	if( asea.server ){
		timestamp = chalk.dim( timestamp );
	}
	composition.push( timestamp );

	var message = U200b( outre( [ this.name, this.status, this.message ] ) ).join( ", " );
	if( asea.server ){
		message = this.color( message );
	}
	composition.push( message );

	var stack = "stack trace not ready";
	if( !this.silent &&
		Array.isArray( this.stack ) &&
		this.stack.length )
	{
		stack = this.stack || stack;

		if( Array.isArray( stack ) ){
			stack = stack.map( function onEachFrame( frame ){
				return frame.toString( );
			} );

			stack = U200b( stack ).join( "\n" );
		}

		if( asea.server ){
			stack = chalk.dim.red( stack );
		}

		composition.push( stack );

	}else if( this.silent ){
		stack = "stack trace is not available on silent mode";
		if( asea.server ){
			stack = chalk.dim( stack );
		}
		composition.push( stack );

	}else if( this.depth > 5 ){
		if( asea.server ){
			stack = chalk.dim( stack );
		}
		composition.push( stack );
	}

	composition = U200b( composition ).join( "\n" );

	return composition;
};

Olivant.prototype.getTrace = function getTrace( callback ){
	if( this.depth == 2 ){
		this.remind( "tracing is disabled for depth 2" )
			.prompt( );

		return this;
	}

	if( this.timeout.getTrace ){
		return this;
	}

	callback = called( callback );

	this.timeout.getTrace = snapd.bind( this )( function onTimeout( ){
		delete this.timeout.getTrace;

		callback( );
	}, 1000 ).timeout;

	trace
		.get( )

		.then( ( function onGetTrace( frameList ){
			if( this.timeout.getTrace ){
				clearTimeout( this.timeout.getTrace );

				delete this.timeout.getTrace;
			}

			this.stack = frameList;

			callback( null, this.stack );
		} ).bind( this ) )

		.catch( function onError( error ){
			if( this.timeout.getTrace ){
				clearTimeout( this.timeout.getTrace );

				delete this.timeout.getTrace;
			}

			callback( this.remind( error ) );
		} );

	return this;
};

/*;
	@method-documentation:
		This will let us set the logging function.
	@end-method-documentation
*/
Olivant.prototype.setLog = function setLog( log ){
	if( typeof log != "function" ){
		this.reset( Issue, true )
			.silence( )
			.prompt( "invalid log function", log );

		return this;
	}

	this.log = log;

	return this;
};

/*;
	@method-documentation:
		Send data to server or client.
	@end-method-documentation
*/
Olivant.prototype.send = function send( ){
	/*;
		@meta-configuration:
			{
				"response": "http.ServerResponse",
				"procedure": "function"
			}
		@end-meta-configuration
	*/

	if( this.depth == 2 ){
		this.remind( "sending is disabled for depth 2" )
			.prompt( );

		return this;
	}

	var message = meek( this.status, U200b( this.toString( ) ).raw( ) );

	var procedure = arguments[ 0 ];

	if( asea.server &&
		this.state == REDIRECT &&
		this.path &&
		procedure instanceof http.ServerResponse )
	{
		segway( {
			"response": procedure,
			"path": this.path,
			"status": this.code,
			"data": message,
		} );

		this.state = "";

	}else if( asea.server &&
		!this.state &&
		procedure instanceof http.ServerResponse )
	{
		message.send( procedure, this.code );

	}else if( asea.client &&
		this.state == REDIRECT &&
		this.path )
	{
		segway( {
			"path": this.path,
			"status": this.code,
			"data": message,
		} );

		this.state = "";

	}else if( asea.client &&
		!this.state &&
		typeof procedure == "function" )
	{
		message.send.bind( this )( procedure );

	}else if( this.state == REDIRECT ){
		this.reset( Issue, true )
			.silence( )
			.prompt( "cannot redirect properly" )
			.send( procedure );

	}else{
		this.reset( Issue, true )
			.silence( )
			.prompt( "cannot send properly" );
	}

	return this;
};

/*;
	@method-documentation:
		Stream data to listeners.
	@end-method-documentation
*/
Olivant.prototype.report = function report( ){
	if( this.depth == 2 ){
		this.remind( "reporting is disabled for depth 2" )
			.prompt( );

		return this;
	}

	if( this.timeout.report ){
		clearTimeout( this.timeout.report );

		delete this.timeout.report;
	}

	this.timeout.report = snapd.bind( this )( function emitReport( ){
		if( asea.server ){
			process.emit( this.name, this );

		}else if( asea.client ){
			var event = new Event( this.name );
			event.data = this;

			document.dispatchEvent( event );
		}

		delete this.timeout.report;
	}, 1000 ).timeout;

	return this;
};

/*;
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
			if( parameter instanceof Olivant ){
				return parameter.message;

			}else if( typeof parameter == "string" ||
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
		.concat( [ this.message ] )
		.filter( function onEachMessage( message ){
			return !!message;
		} ) )
		.join( ", " );

	this.report( );

	return this;
};

/*;
	@method-documentation:
		Silence the logging capabilities.
	@end-method-documentation
*/
Olivant.prototype.silence = function silence( ){
	this.silent = true;

	return this;
};

/*;
	@method-documentation:
		Deactivate silence.
	@end-method-documentation
*/
Olivant.prototype.shout = function shout( ){
	this.silent = false;

	return this;
};

/*;
	@method-documentation:
		Log the data.
	@end-method-documentation
*/
Olivant.prototype.prompt = function prompt( ){
	this.remind.apply( this, raze( arguments ) );

	if( this.timeout.prompt ){
		clearTimeout( this.timeout.prompt );

		delete this.timeout.prompt;
	}

	this.timeout.prompt = snapd.bind( this )( function onTimeout( ){
		if( this.depth == 2 ){
			this.log( this.getMessage( ) );

			return this;
		}

		if( Array.isArray( this.stack ) &&
			this.stack.length )
		{
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

		delete this.timeout.prompt;
	} ).timeout;

	return this;
};

/*;
	@method-documentation:
		Set the redirection configuration.

		This will trigger redirect response when send is called.
	@end-method-documentation
*/
Olivant.prototype.redirect = function redirect( path ){
	/*;
		@meta-configuration:
			{
				"path:required": "string"
			}
		@end-meta-configuration
	*/

	this.state = REDIRECT;
	this.path = path;

	if( !this.path &&
		typeof DEFAULT_REDIRECT_PATH == "string" )
	{
		this.path = DEFAULT_REDIRECT_PATH;

	}else{
		this.reset( Issue, true )
			.silence( )
			.prompt( "empty path to be redirected" );
	}

	return this;
};

harden( "create", function create( name, option ){
	var Clone = diatom( name );
	Clone = heredito( Clone, Olivant );

	Clone.prototype.name = option.name;
	Clone.prototype.status = option.status;
	Clone.prototype.code = option.code;
	Clone.prototype.silent = option.silent;
	Clone.prototype.depth = option.depth;
	Clone.prototype.color = option.color;
	Clone.prototype.initialize = option.initialize ||
		function initialize( ){
			this.name = option.name;

			this.status = option.status;

			this.code = option.code;

			this.silent = option.silent;

			this.depth = option.depth;
		};

	symbiote( Clone );

	harden( name, Clone );
}, Olivant );

Olivant.create( "Fatal", {
	"name": FATAL,
	"status": ERROR,
	"code": FATAL_CODE,
	"silent": false,
	"depth": 9,
	"color": ( asea.server? chalk.red : null ),
	"initialize": function initialize( ){
		this.prompt( );
		this.report( );

		if( asea.server ){
			dexist( "node" );
		}

		return this;
	}
} );

Olivant.create( "Issue", {
	"name": ISSUE,
	"status": ERROR,
	"code": ISSUE_CODE,
	"silent": false,
	"depth": 8,
	"color": ( asea.server? chalk.red : null )
} );

Olivant.create( "Bug", {
	"name": ERROR,
	"status": ERROR,
	"code": ERROR_CODE,
	"silent": false,
	"depth": 7,
	"color": ( asea.server? chalk.red : null )
} );

Olivant.create( "Warning", {
	"name": WARNING,
	"status": FAILED,
	"code": WARNING_CODE,
	"silent": false,
	"depth": 6,
	"color": ( asea.server? chalk.yellow : null )
} );

Olivant.create( "Uncertain", {
	"name": UNCERTAIN,
	"status": FAILED,
	"code": UNCERTAIN_CODE,
	"silent": false,
	"depth": 6,
	"color": ( asea.server? chalk.yellow : null )
} );

Olivant.create( "Failed", {
	"name": FAILED,
	"status": FAILED,
	"code": FAILED_CODE,
	"silent": false,
	"depth": 6,
	"color": ( asea.server? chalk.yellow : null )
} );

Olivant.create( "Prompt", {
	"name": PROMPT,
	"status": PROMPT,
	"code": PROMPT_CODE,
	"silent": true,
	"depth": 5,
	"color": ( asea.server? chalk.blue : null ),
	"initialize": function initialize( ){
		this.prompt( );

		return this;
	}
} );

Olivant.create( "Echo", {
	"name": ECHO,
	"status": ECHO,
	"code": ECHO_CODE,
	"silent": true,
	"depth": 4
} );

Olivant.create( "Success", {
	"name": SUCCESS,
	"status": SUCCESS,
	"code": SUCCESS_CODE,
	"silent": true,
	"depth": 3,
	"color": ( asea.server? chalk.green : null )
} );

if( asea.server ){
	module.exports = Olivant;
}
