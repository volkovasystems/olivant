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
		Echo the destruction caused by your code.
	@end-module-documentation

	@include:
		{
			"arid": "arid",
			"asea": "asea",
			"budge": "budge",
			"blacksea": "blacksea",
			"called": "called",
			"chalk": "chalk",
			"clazof": "clazof",
			"dexist": "dexist",
			"diatom": "diatom",
			"Ethernity": "ethernity",
			"EventEmitter": "events",
			"falze": "falze",
			"falzy": "falzy",
			"glucose": "glucose",
			"harden": "harden",
			"heredito": "heredito",
			"kein": "kein",
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
			"trace": [ "stacktrace-js", "stack-trace" ],
			"truly": "truly",
			"truu": "truu",
			"U200b": "u200b"
		}
	@end-include
*/

const arid = require( "arid" );
const asea = require( "asea" );
const budge = require( "budge" );
const called = require( "called" );
const clazof = require( "clazof" );
const diatom = require( "diatom" );
const doubt = require( "doubt" );
const Ethernity = require( "ethernity" );
const falze = require( "falze" );
const falzy = require( "falzy" );
const filled = require( "filled" );
const glucose = require( "glucose" );
const harden = require( "harden" );
const heredito = require( "heredito" );
const kein = require( "kein" );
const meek = require( "meek" );
const outre = require( "outre" );
const plough = require( "plough" );
const protype = require( "protype" );
const raze = require( "raze" );
const snapd = require( "snapd" );
const stringe = require( "stringe" );
const symbiote = require( "symbiote" );
const truly = require( "truly" );
const truu = require( "truu" );
const U200b = require( "u200b" );

//: @client:
const trace = require( "stacktrace-js" );
harden( "DEFAULT_REDIRECT_PATH", window.DEFAULT_REDIRECT_PATH || "/view/status/page" );
//: @end-client

//: @server:
const blacksea = require( "blacksea" );
const bluesea = require( "bluesea" );
const chalk = require( "chalk" );
const dexist = require( "dexist" );
const EventEmitter = require( "events" );
const http = require( "http" );
const redsea = require( "redsea" );
const segway = require( "segway" );
const util = require( "util" );
const trace = require( "stack-trace" );

if( process.env.NODE_ENV !== "production" ){ require( "longjohn" ); }
harden( "DEFAULT_REDIRECT_PATH", "/view/status/page" );
//: @end-server

const Olivant = diatom( "Olivant" );

const DEFAULT_INSPECT_OPTION = { "depth": 1, "length": 200 };
const DEFAULT_LOG_ENGINE = asea.client? console.debug : console.log;

/*;
	@note:
		This is the default name/status and code of the olivant.
	@end-note
*/
harden( "ECHO", "echo" );
harden( "ECHO_CODE", 200 );

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
	this.duration = Date.now( );

	if( protype( arguments[ 0 ], OBJECT ) &&
		!doubt( arguments[ 0 ], ARGUMENTS ) &&
		!( clazof( arguments[ 0 ], Error ) ) &&
		option.COATED !== COATED )
	{
		this.load( option );

	}else{
		this.load( );
	}

	let parameter = arguments[ 0 ];

	if( arguments.length == 0 ){
		return this;

	}else if( clazof( parameter, Error ) ){
		let error = parameter;

		this.remind.apply( this, [ error.message, error ].concat( budge( arguments ) ) );

	}else if( clazof( parameter, Olivant ) ){
		this.load( parameter );

	}else if( doubt( parameter, ARGUMENTS ) ){
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

	this.log = option.log || this.log || DEFAULT_LOG_ENGINE;

	if( falze( this.context ) && truu( option.self ) ){
		this.context = option.self;
	}

	this.silent = kein( "silent", option )? option.silent :
		kein( "silent", this )? this.silent : true;

	if( !protype( this.silent, BOOLEAN ) ){
		this.silent = true;
	}

	//: Depth dictates refined settings of this procedure.
	this.depth = kein( "depth", option )? option.depth :
		kein( "depth", this )? this.depth : 1;

	if( !protype( this.depth, NUMBER ) ){
		this.depth = 1;
	}

	//: Depth is only from 1-0 or 1-2345-6789-0.
	//: Depth 2 is deep silent depth.
	this.depth = this.depth % 10;

	if( asea.server ){
		this.color = option.color || this.color || chalk.white;
	}

	this.state = "";

	this.stack = option.stack || this.stack || [ ];

	this.message = option.message || this.message || "";

	this.inspect = option.inspect || this.inspect || DEFAULT_INSPECT_OPTION;

	/*;
		@note:
			These are automatice contingency handlers.
		@end-note
	*/
	if( asea.server ){
		redsea( Issue );

		blacksea( Fatal );

		bluesea( Fatal );
	}

	return this;
};

/*;
	@method-documentation:
		Modifies the log engine while maintaining environment properties.
	@end-method-documentation
*/
Olivant.prototype.reset = function reset( option, renew ){
	if( protype( option, FUNCTION ) && clazof( option, Olivant ) ){
		let logEngine = option;

		if( protype( renew, BOOLEAN ) && renew ){
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

	}else if( !clazof( option, Issue ) ){
		this.reset( Issue, true )
			.silence( )
			.prompt( "cannot reset to given option", option );

	}else{
		Issue( "cannot reset log", option, this ).silence( ).prompt( );
	}

	return this;
};

Olivant.prototype.toString = function toString( ){
	return U200b( outre( [ this.name, this.status, this.message ] ) ).join( ", " );
};

Olivant.prototype.valueOf = function valueOf( ){
	return U200b( outre( [ this.name, this.status, this.message ] ) ).join( ", " );
};

Olivant.prototype.getTimestamp = function getTimestamp( ){
	let timestamp = Ethernity( ).printTime( true );

	timestamp = `${ timestamp } | ${ ( Date.now( ) - this.duration ) }ms`;

	if( asea.server ){
		return chalk.dim( timestamp );
	}

	return timestamp;
};

Olivant.prototype.colorMessage = function colorMessage( color, message ){
	if( asea.server ){
		if( protype( color, FUNCTION ) ){
			return color( message );

		}else if( protype( color, STRING ) && truly( color ) ){
			if( kein( color, chalk ) && protype( chalk[ color ], FUNCTION ) ){
				return chalk[ color ]( message );

			}else{
				this.remind( `invalid message color, ${ color }` );

				return chalk.white( message );
			}

		}else{
			return chalk.white( message );
		}
	}

	return message;
};

/*;
	@method-documentation:
		The message is divided into three parts,
		1. namespace,
		2. status,
		3. actual message
	@end-method-documentation
*/
Olivant.prototype.resolveMessage = function resolveMessage( ){
	let message = U200b( outre( [ this.name, this.status, this.message ] )
		.filter( truly ) ).join( ", " );

	if( asea.server ){
		return this.colorMessage( this.color, message );
	}

	return message;
};

Olivant.prototype.resolveTrace = function resolveTrace( ){
	let stack = "stack trace not available";

	if( !this.silent && doubt( this.stack, ARRAY ) && filled( this.stack ) ){
		stack = this.stack;

		stack = stack.map( ( frame ) => {
			if( stringe( frame ) === "[object Object]" ){
				let { functionName, fileName, lineNumber, columnNumber } = frame;

				return `${ functionName } (${ fileName }:${ lineNumber }:${ columnNumber })`.trim( );

			}else{
				return stringe( frame );
			}
		} );

		stack = U200b( stack ).join( "\n" );

		if( asea.server ){
			return chalk.dim.red( stack );
		}

		return stack;
	}

	if( this.depth < 5 &&
		this.silent &&
		truu( this.context ) &&
	 	protype( this.context.constructor, FUNCTION ) &&
		truly( this.context.constructor.name ) )
	{
		stack = `called with context, ${ this.context.constructor.name }`;

		if( asea.server ){
			return chalk.dim( stack );
		}

		return stack;
	}

	if( this.silent ){
		stack = "stack trace is not available on silent mode";

		if( asea.server ){
			return chalk.dim( stack );
		}

		return stack;
	}

	if( this.depth > 5 ){
		if( asea.server ){
			return chalk.dim( stack );
		}

		return stack;
	}
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
	if( asea.server ){
		return U200b( [
			this.getTimestamp( ),
			this.resolveMessage( ),
			this.resolveTrace( )
		] ).join( "\n" );

	}else{
		return U200b( U200b( [
			this.getTimestamp( ),
			this.resolveMessage( ),
			this.resolveTrace( )
		] ).join( "\n" ) ).raw( );
	}
};

/*;
	@method-documentation:
		This should be used internally as much as possible.
	@end-method-documentation
*/
Olivant.prototype.getTrace = function getTrace( callback ){
	if( this.depth == 2 ){
		this.remind( "tracing is disabled for depth 2" ).prompt( );

		return this;
	}

	callback = called.bind( this )( callback );

	snapd.bind( this )( callback, 1000 );

	if( asea.client ){
		if( clazof( this.error, Error ) ){
			trace.fromError( this.error )
				.then( ( frameList ) => {
					this.stack = frameList;

					callback( null, this.stack );
				} )
				.catch( ( error ) => { callback( this.remind( error ) ); } );

		}else if( this.depth > 5 ){
			trace.get( )
				.then( ( frameList ) => {
					this.stack = frameList;

					callback( null, this.stack );
				} )
				.catch( ( error ) => { callback( this.remind( error ) ); } );

		}else{
			callback( );
		}

	}else if( asea.server ){
		if( clazof( this.error, Error ) ){
			this.stack = trace.parse( this.error );

			callback( null, this.stack );

		}else if( this.depth > 5 ){
			this.stack = trace.get( );

			callback( null, this.stack );

		}else{
			callback( );
		}
	}

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

	let parameter = raze( arguments );

	if( parameter.length == 1 && protype( parameter[ 0 ], OBJECT ) ){
		let option = parameter[ 0 ];
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
		this.remind( "sending is disabled for depth 2" ).prompt( );

		return this;
	}

	let message = meek( this.status, U200b( stringe( this ) ).raw( ) );

	let procedure = arguments[ 0 ];

	if( asea.server &&
		this.state === REDIRECT &&
		protype( this.path, STRING ) &&
		truly( this.path ) &&
		clazof( procedure, http.ServerResponse ) )
	{
		segway( {
			"response": procedure,
			"path": this.path,
			"status": this.status,
			"data": message,
		} );

		this.flushState( );

	}else if( asea.server &&
		falzy( this.state ) &&
		clazof( procedure, http.ServerResponse ) )
	{
		message.send( procedure, this.code );

	}else if( asea.client &&
		this.state == REDIRECT &&
		protype( this.path, STRING ) &&
		truly( this.path ) )
	{
		segway( {
			"path": this.path,
			"status": this.status,
			"data": message,
		} );

		this.flushState( );

	}else if( asea.client &&
		falzy( this.state ) &&
		protype( procedure, FUNCTION ) )
	{
		message.send.bind( this )( procedure );

	}else if( truly( this.state ) ){
		this.reset( Issue, true )
			.silence( )
			.prompt( `cannot invoke sending state, ${ this.state }, properly` )
			.send( procedure );

		this.flushState( );

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
		this.remind( "reporting is disabled for depth 2" ).prompt( );

		return this;
	}

	snapd.bind( this )
		( function delay( ){
			if( asea.server ){
				process.emit( this.name, this );

			}else if( asea.client ){
				let event = new Event( this.name );
				event.data = this;

				document.dispatchEvent( event );
			}
		}, 1000 );

	return this;
};

/*;
	@internal-method-documentation:
		Crush the parameter extracting string information.

		Special support for glucose coated parameters.
	@end-internal-method-documentation
*/
const crush = function crush( parameter, option ){
	option = option || this.inspect || { };

	let depth = option.depth || 1;
	let length = option.length || 200;
	let space = /\s{2,}/g;

	if( asea.server && protype( parameter, OBJECT ) && parameter.COATED === COATED ){
		if( parameter.self ){
			this.set( CONTEXT, parameter.self );
		}

		return util.inspect( parameter, { "depth": depth } )
			.replace( space, " " )
			.substring( 0, length ) + "...";

	}else if( parameter && clazof( parameter, Error ) && parameter.stack ){
		this.error = parameter;

		this.getTrace( );

		return stringe( parameter.stack );

	}else if( clazof( parameter, Olivant ) ){
		return parameter.message;

	}else if( protype( parameter, FUNCTION ) ){
		return stringe( parameter )
			.replace( space, " " )
			.substring( 0, length ) + "...";

	}else if( protype( parameter, STRING ) ||
		protype( parameter, NUMBER ) ||
		protype( parameter, BOOLEAN ) )
	{
		return stringe( parameter );

	}else if( asea.server ){
		return util.inspect( parameter, { "depth": depth } )
			.replace( space, " " )
			.substring( 0, length ) + "...";

	}else if( asea.client ){
		return stringe( parameter );

	}else{
		return stringe( parameter );
	}
};

/*;
	@method-documentation:
		Append messages to the current message.
	@end-method-documentation
*/
Olivant.prototype.remind = function remind( ){
	let parameter = raze( arguments );

	if( arid( parameter ) ){
		return this;
	}

	let parse = crush.bind( this );

	this.message = U200b( parameter
		.map( function onEachParameter( parameter ){
			if( doubt( parameter, AS_ARRAY ) ){
				parameter = raze( parameter )
					.map( ( parameter ) => { return parse( parameter ) } );

				return U200b( parameter
					.filter( ( message ) => { return truly( message ); } ) )
					.join( ", " );

			}else{
				return parse( parameter );
			}
		} )
		.reverse( )
		.concat( [ this.message ] )
		.filter( ( message ) => { return truly( message ); } )
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

	snapd.bind( this )
		( function delay( ){
			if( this.depth === 2 ){
				this.log( this.getMessage( ) );

				return this;
			}

			if( doubt( this.stack, ARRAY ) && filled( this.stack ) ){
				this.log( this.getMessage( ) );

			}else if( this.depth > 5 ){
				this.getTrace( ( error, stack ) => {
					if( clazof( error, Error ) ){
						this.remind( `error getting stack trace, ${ error }` );
					}

					if( truu( stack ) ){
						this.stack = stack;

						this.log( this.getMessage( ) );

					}else{
						this.log( this.getMessage( ) );
					}
				} );

			}else{
				this.log( this.getMessage( ) );
			}
		} );

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

	if( falzy( this.path ) &&
		truly( DEFAULT_REDIRECT_PATH ) &&
		protype( DEFAULT_REDIRECT_PATH, STRING ) )
	{
		this.path = DEFAULT_REDIRECT_PATH;

		return this;
	}

	if( !protype( this.path, STRING ) ){
		this.reset( Issue, true )
			.silence( )
			.prompt( "invalid redirect path" );

	}else if( falzy( this.path ) ){
		this.reset( Issue, true )
			.silence( )
			.prompt( "empty redirect path" );
	}

	return this;
};

Olivant.prototype.flushState = function flushState( ){
	this.state = "";
	this.path = "";

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

	if( !protype( callback, FUNCTION ) ){
		this.reset( Bug, true )
			.prompt( "invalid callback" );

		return this;
	}

	if( truu( option ) && truu( option.self ) && option.COATED === COATED ){
		this.set( CONTEXT, option.self );
	}

	if( this.context ){
		callback = called.bind( this.context )( callback );

	}else{
		callback = called( callback );
	}

	callback( this, result, option );

	return this;
};

harden( "create", function create( name, option ){
	let LogEngine = diatom( name );

	LogEngine = heredito( LogEngine, Olivant );

	LogEngine.prototype.name = option.name;
	LogEngine.prototype.status = option.status;
	LogEngine.prototype.code = option.code;
	LogEngine.prototype.silent = option.silent;
	LogEngine.prototype.depth = option.depth;
	LogEngine.prototype.color = option.color;
	LogEngine.prototype.inspect = option.inspect;
	LogEngine.prototype.initialize = option.initialize ||
		function initialize( ){
			this.name = option.name;

			this.status = option.status;

			this.code = option.code;

			this.silent = option.silent;

			this.depth = option.depth;
		};

	symbiote( LogEngine, Olivant );

	harden( LogEngine.name, LogEngine );
}, Olivant );

module.exports = Olivant;
