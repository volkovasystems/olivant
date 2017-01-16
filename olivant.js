"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
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
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
			],
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
			"protype": "protype",
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

const asea = require( "asea" );
const blacksea = require( "blacksea" );
const budge = require( "budge" );
const called = require( "called" );
const clazof = require( "clazof" );
const chalk = require( "chalk" );
const diatom = require( "diatom" );
const dexist = require( "dexist" );
const doubt = require( "doubt" );
const Ethernity = require( "ethernity" );
const EventEmitter = require( "events" );
const glucose = require( "glucose" );
const harden = require( "harden" );
const heredito = require( "heredito" );
const http = require( "http" );
const meek = require( "meek" );
const outre = require( "outre" );
const plough = require( "plough" );
const protype = require( "protype" );
const raze = require( "raze" );
const redsea = require( "redsea" );
const snapd = require( "snapd" );
const segway = require( "segway" );
const symbiote = require( "symbiote" );
const trace = require( "stacktrace-js" );
const U200b = require( "u200b" );
const util = require( "util" );

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
	if( protype( arguments[ 0 ], OBJECT ) &&
		!doubt( arguments[ 0 ] ).ARGUMENTS &&
		!( clazof( arguments[ 0 ], Error ) ) &&
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
		let error = parameter;

		this.remind.apply( this, [ error.message, error ].concat( budge( arguments ) ) );

	}else if( clazof( parameter, Olivant ) ){
		this.load( parameter );

	}else if( doubt( parameter ).ARGUMENTS ){
		this.remind.apply( this, plough( parameter ) );

	}else if( protype( parameter, STRING ) ){
		this.remind.apply( this, raze( arguments ) );

	}else if( protype( parameter, OBJECT ) &&
		parameter.constructor &&
		protype( parameter.constructor, FUNCTION ) &&
		parameter.constructor.name != "Function" &&
		clazof( parameter, parameter.constructor ) )
	{
		this.load( parameter );

		this.remind.apply( this, raze( arguments ) );

	}else if( protype( parameter, OBJECT ) ){
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

	if( !this.context && option.self ){
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
		for( let timeout in this.timeout ){
			clearTimeout( this.timeout[ timeout ] );

			delete this.timeout[ timeout ];
		}
	}

	this.stack = option.stack || this.stack || [ ];

	this.message = option.message || this.message || "";

	this.inspect = option.inspect || this.inspect || {
		"depth": 1,
		"length": 200
	};

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
	if( protype( option, FUNCTION ) &&
		protype( option.prototype, OBJECT ) &&
		clazof( option.prototype, Olivant ) )
	{
		let logEngine = option;

		if( renew ){
			let data = {
				"message": this.message,
				"stack": this.stack
			};

			return logEngine( data );

		}else{
			this.load( logEngine.prototype );
		}

	}else if( protype( option, OBJECT ) ){
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
	let composition = [ ];

	let timestamp = Ethernity( ).printTime( true );
	if( asea.server ){
		timestamp = chalk.dim( timestamp );
	}
	composition.push( timestamp );

	let message = U200b( outre( [ this.name, this.status, this.message ] ) ).join( ", " );
	if( asea.server ){
		message = this.color( message );
	}
	composition.push( message );

	let stack = "stack trace not ready";
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
		protype( arguments[ 0 ], OBJECT ) )
	{
		let option = arguments[ 0 ];
		for( let property in option ){
			this.set( property, option[ property ] );
		}

		return this;
	}

	if( !protype( property, STRING ) ){
		this.reset( Issue, true )
			.silence( )
			.prompt( "invalid property", property );

		return this;
	}

	if( protype( property, STRING ) &&
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
*/
harden( "crush", function crush( parameter, option ){
	option = option || this.inspect || { };

	let depth = option.depth || 1;
	let length = option.length || 200;
	let space = /\s{2,}/g;

	if( typeof parameter == "object" &&
		parameter.COATED === COATED )
	{
		if( parameter.self ){
			this.set( CONTEXT, parameter.self );
		}

		return util.inspect( parameter, { "depth": depth } )
			.replace( space, " " )
			.substring( 0, length ) + "...";

	}else if( parameter && parameter instanceof Error && parameter.stack ){
		return parameter.stack.toString( );

	}else if( parameter instanceof Olivant ){
		return parameter.message;

	}else if( typeof parameter == "function" ){
		return parameter.toString( )
			.replace( space, " " )
			.substring( 0, length ) + "...";

	}else if( typeof parameter == "string" ||
		typeof parameter == "number" ||
		typeof parameter == "boolean" )
	{
		return parameter.toString( );

	}else if( asea.server ){
		return util.inspect( parameter, { "depth": depth } )
			.replace( space, " " )
			.substring( 0, length );

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

	let crush = Olivant.crush.bind( this );

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
		.reverse( )
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

	heredito( Clone, Olivant );

	Clone.prototype.name = option.name;
	Clone.prototype.status = option.status;
	Clone.prototype.code = option.code;
	Clone.prototype.silent = option.silent;
	Clone.prototype.depth = option.depth;
	Clone.prototype.color = option.color;
	Clone.prototype.inspect = option.inspect;
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
	"inspect": {
		"depth": 5,
		"length": 1000
	},
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
	"color": ( asea.server? chalk.red : null ),
	"inspect": {
		"depth": 5,
		"length": 1000
	}
} );

Olivant.create( "Bug", {
	"name": ERROR,
	"status": ERROR,
	"code": ERROR_CODE,
	"silent": false,
	"depth": 7,
	"color": ( asea.server? chalk.red : null ),
	"inspect": {
		"depth": 5,
		"length": 1000
	}
} );

Olivant.create( "Warning", {
	"name": WARNING,
	"status": FAILED,
	"code": WARNING_CODE,
	"silent": false,
	"depth": 6,
	"color": ( asea.server? chalk.yellow : null ),
	"inspect": {
		"depth": 1,
		"length": 500
	}
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

Olivant.create( "Record", {
	"name": RECORD,
	"status": RECORD,
	"code": RECORD_CODE,
	"silent": true,
	"depth": 4,
	"color": ( asea.server? chalk.white : null ),
	"inspect": {
		"depth": 1,
		"length": 100
	},
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

		this.report( );

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
