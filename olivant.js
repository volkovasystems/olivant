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
			"EventEmitter": "events",
			"glucose": "glucose",
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
	var budge = require( "budge" );
	var called = require( "called" );
	var chalk = require( "chalk" );
	var diatom = require( "diatom" );
	var dexist = require( "dexist" );
	var doubt = require( "doubt" );
	var Ethernity = require( "ethernity" );
	var EventEmitter = require( "events" );
	var glucose = require( "glucose" );
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
	!( "budge" in window ) )
{
	throw new Error( "budge is not defined" );
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
	!( "doubt" in window ) )
{
	throw new Error( "doubt is not defined" );
}

if( asea.client &&
	!( "Ethernity" in window ) )
{
	throw new Error( "Ethernity is not defined" );
}

if( asea.client &&
	!( "glucose" in window ) )
{
	throw new Error( "glucose is not defined" );
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

if( asea.server ){
	Olivant = heredito( Olivant, EventEmitter );
}

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
harden( "RECORD", "record" );
harden( "RECORD_CODE", 200 );
harden( "PROMPT", "prompt" );
harden( "PROMPT_CODE", 200 );
harden( "SUCCESS", "success" );
harden( "SUCCESS_CODE", 200 );

harden( "REDIRECT", "redirect" );
harden( "CONTEXT", "context" );
harden( "LOG", "log" );
harden( "SILENT", "silent" );

/*;
	@method-documentation:
		Option should not be glucose coated.
	@end-method-documentation
*/
Olivant.prototype.initialize = function initialize( option ){
	if( typeof arguments[ 0 ] == "object" &&
		!doubt( arguments[ 0 ] ).ARGUMENTS &&
		!( arguments[ 0 ] instanceof Error ) &&
		option.COATED !== COATED )
	{
		this.load( option );

	}else{
		this.load( );
	}

	this.getTrace( );

	let parameter = arguments[ 0 ];

	if( arguments.length == 0 ){
		return this;

	}else if( parameter instanceof Error ){
		var error = parameter;

		this.remind.apply( this, [ error.message, error ].concat( budge( arguments ) ) );

	}else if( parameter instanceof Olivant ){
		this.load( parameter );

	}else if( doubt( parameter ).ARGUMENTS ){
		this.remind.apply( this, plough( parameter ) );

	}else if( typeof parameter == "string" ){
		this.remind.apply( this, raze( arguments ) );

	}else if( typeof parameter == "object" &&
		parameter.constructor &&
		typeof parameter.constructor == "function" &&
		parameter.constructor.name != "Function" &&
		parameter instanceof parameter.constructor )
	{
		this.load( parameter );

		this.remind.apply( this, raze( arguments ) );

	}else if( typeof parameter == "object" ){
		this.remind.apply( this, raze( arguments ) );
	}

	return this;
};

Olivant.prototype.load = function load( option ){
	option = glucose.bind( this )( option );

	this.name = option.name || this.name || ECHO

	this.status = option.status || this.status || ECHO;

	this.code = option.code || this.code || ECHO_CODE;

	this.log = option.log || this.log ||
		( ( asea.client )? console.debug : console.log );

	if( option.self ){
		this.context = option.self;
	}

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

/*;
	@method-documentation:
		Modifies the log engine while maintaining environment properties.
	@end-method-documentation
*/
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
			this.load( logEngine.prototype );
		}

	}else if( typeof option == "object" ){
		this.load( option );

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
			3. message trace or message context

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
		doubt( this.stack ).ARRAY &&
		this.stack.length )
	{
		stack = this.stack || stack;

		if( doubt( stack ).ARRAY ){
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

	if( this.context &&
		this.silent )
	{
		stack = "called with context " + this.context.constructor.name;
		if( asea.server ){
			stack = chalk.dim( stack );
		}
		composition[ 2 ] = stack;
	}

	composition = U200b( composition ).join( "\n" );

	return composition;
};

/*;
	@method-documentation:
		This should be used internally as much as possible.
	@end-method-documentation
*/
Olivant.prototype.getTrace = function getTrace( callback ){
	if( this.depth == 2 ){
		this.remind( "tracing is disabled for depth 2" )
			.prompt( );

		return this;
	}

	if( this.timeout.getTrace ){
		return this;
	}

	callback = called.bind( this )( callback );

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

		.catch( ( function onError( error ){
			if( this.timeout.getTrace ){
				clearTimeout( this.timeout.getTrace );

				delete this.timeout.getTrace;
			}

			callback( this.remind( error ) );
		} ).bind( this ) );

	return this;
};

/*;
	@method-documentation:
		Sets a property of this log engine.

		Not all property can be set to limit this function
			for security purposes.
	@end-method-documentation
*/
Olivant.prototype.set = function set( property, value ){
	/*;
		@meta-configuration:
			{
				"property:required": "string",
				"value": "*"
			}
		@end-meta-configuration
	*/

	if( arguments.length == 1 &&
		typeof arguments[ 0 ] == "object" )
	{
		var option = arguments[ 0 ];
		for( var property in option ){
			this.set( property, option[ property ] );
		}

		return this;
	}

	if( typeof property != "string" ){
		this.reset( Issue, true )
			.silence( )
			.prompt( "invalid property", property );

		return this;
	}

	if( typeof property == "string" &&
		property != LOG  &&
		property != SILENT &&
		property != CONTEXT )
	{
		this.reset( Issue, true )
			.silence( )
			.prompt( "invalid property", property );

		return this;
	}

	this[ property ] = value;

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

	this.timeout.report = snapd.bind( this )
		( function emitReport( ){
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
	@static-method-documentation:
		Crush the parameter extracting string information.

		Special support for glucose coated parameters.

	@end-static-method-documentation

	@todo:
		Add shortening for strings that are too long.
	@end-todo
*/
harden( "crush", function crush( parameter ){
	if( typeof parameter == "object" &&
		parameter.COATED === COATED )
	{
		if( parameter.self ){
			this.set( CONTEXT, parameter.self );
		}

		return util.inspect( parameter, { "depth": null } );

	}else if( parameter instanceof Error ){
		return parameter.stack.toString( );

	}else if( parameter instanceof Olivant ){
		return parameter.message;

	}else if( typeof parameter == "string" ||
		typeof parameter == "number" ||
		typeof parameter == "boolean" ||
		typeof parameter == "function" )
	{
		return parameter.toString( );

	}else if( asea.server ){
		return util.inspect( parameter, { "depth": null } );

	}else if( asea.client ){
		return parameter.toString( );

	}else{
		return parameter.toString( );
	}
}, Olivant );

/*;
	@method-documentation:
		Append messages to the current message.
	@end-method-documentation
*/
Olivant.prototype.remind = function remind( ){
	if( !arguments.length ){
		return this;
	}

	var crush = Olivant.crush.bind( this );

	this.message = U200b( raze( arguments )
		.map( function onEachParameter( parameter ){
			if( doubt( parameter ).AS_ARRAY ){
				parameter = raze( parameter )
					.map( function onEachParameter( parameter ){
						return crush( parameter )
					} );

				return U200b( parameter
					.filter( function onEachMessage( message ){
						return !!message;
					} ) ).join( ", " );

			}else{
				return crush( parameter );
			}
		} )
		.concat( [ this.message ] )
		.filter( function onEachMessage( message ){
			return !!message;
		} )
	 	.reverse( ) )
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

	this.timeout.prompt = snapd.bind( this )
		( function onTimeout( ){
			if( this.depth == 2 ){
				this.log( this.getMessage( ) );

				return this;
			}

			if( doubt( this.stack ).ARRAY &&
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

		Default of DEFAULT_REDIRECT_PATH will be used if path is not given.
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

/*;
	@method-documentation:
		Pass the instance to the callback first parameter.

		This follows the standard error-result-option convention.

		Has special support for glucose coated option.
	@end-method-documentation
*/
Olivant.prototype.pass = function pass( callback, result, option ){
	/*;
		@meta-configuration:
			{
				"callback:required": "function"
			}
		@end-meta-configuration
	*/

	if( typeof callback != "function" ){
		this.reset( Bug, true )
			.prompt( "invalid callback" );

		return this;
	}

	if( this.context ){
		callback = called.bind( this.context )( callback );

	}else{
		callback = called( callback );
	}

	if( option &&
		option.self &&
		option.COATED == COATED )
	{
		this.set( CONTEXT, option.self );
	}

	callback( this, result, option );

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

	if( asea.server ){
		harden( name, Clone, global );

	}else if( asea.client ){
		harden( name, Clone, window );
	}
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

Olivant.create( "Record", {
	"name": RECORD,
	"status": RECORD,
	"code": RECORD_CODE,
	"silent": true,
	"depth": 5,
	"color": ( asea.server? chalk.blue : null ),
	"initialize": function initialize( ){
		if( asea.server &&
			process.env.NODE_ENV != "production" )
		{
			this.prompt( );

		}else if( asea.client &&
			( window.ENVIRONMENT != "production" &&
				window.environment != "production" &&
				!window.PRODUCTION &&
				!window.production ) )
		{
			this.prompt( );
		}

		return this;
	}
} )

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
