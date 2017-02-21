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

var arid = require("arid");
var asea = require("asea");
var budge = require("budge");
var called = require("called");
var clazof = require("clazof");
var diatom = require("diatom");
var doubt = require("doubt");
var Ethernity = require("ethernity");
var falze = require("falze");
var falzy = require("falzy");
var filled = require("filled");
var glucose = require("glucose");
var harden = require("harden");
var heredito = require("heredito");
var kein = require("kein");
var meek = require("meek");
var outre = require("outre");
var plough = require("plough");
var protype = require("protype");
var raze = require("raze");
var snapd = require("snapd");
var symbiote = require("symbiote");
var truly = require("truly");
var truu = require("truu");
var U200b = require("u200b");

//: @client:
var trace = require("stacktrace-js");
harden("DEFAULT_REDIRECT_PATH", window.DEFAULT_REDIRECT_PATH || "/view/status/page");
//: @end-client



var Olivant = diatom("Olivant");

var DEFAULT_INSPECT_OPTION = { "depth": 1, "length": 200 };
var DEFAULT_LOG_ENGINE = asea.client ? console.debug : console.log;

/*;
                                                                    	@note:
                                                                    		This is the default name/status and code of the olivant.
                                                                    	@end-note
                                                                    */
harden("ECHO", "echo");
harden("ECHO_CODE", 200);

harden("REDIRECT", "redirect");
harden("CONTEXT", "context");
harden("LOG", "log");
harden("SILENT", "silent");

/*;
                            	@method-documentation:
                            		Option should not be glucose coated.
                            	@end-method-documentation
                            */
Olivant.prototype.initialize = function initialize(option) {
	this.duration = Date.now();

	if (protype(arguments[0], OBJECT) &&
	!doubt(arguments[0], ARGUMENTS) &&
	!clazof(arguments[0], Error) &&
	option.COATED !== COATED)
	{
		this.load(option);

	} else {
		this.load();
	}

	var parameter = arguments[0];

	if (arguments.length == 0) {
		return this;

	} else if (clazof(parameter, Error)) {
		var error = parameter;

		this.remind.apply(this, [error.message, error].concat(budge(arguments)));

	} else if (clazof(parameter, Olivant)) {
		this.load(parameter);

	} else if (doubt(parameter, ARGUMENTS)) {
		this.remind.apply(this, plough(parameter));

	} else if (protype(parameter, STRING)) {
		this.remind.apply(this, raze(arguments));

	} else if (protype(parameter, OBJECT) &&
	parameter.constructor &&
	protype(parameter.constructor, FUNCTION) &&
	parameter.constructor.name != "Function" &&
	clazof(parameter, parameter.constructor))
	{
		this.load(parameter);

		this.remind.apply(this, raze(arguments));

	} else if (protype(parameter, OBJECT)) {
		this.remind.apply(this, raze(arguments));
	}

	return this;
};

Olivant.prototype.load = function load(option) {
	option = glucose.bind(this)(option);

	this.name = option.name || this.name || ECHO;

	this.status = option.status || this.status || ECHO;

	this.code = option.code || this.code || ECHO_CODE;

	this.log = option.log || this.log || DEFAULT_LOG_ENGINE;

	if (falze(this.context) && truu(option.self)) {
		this.context = option.self;
	}

	this.silent = kein(option, "silent") ? option.silent :
	kein(this, "silent") ? this.silent : true;

	if (!protype(this.silent, BOOLEAN)) {
		this.silent = true;
	}

	//: Depth dictates refined settings of this procedure.
	this.depth = kein(option, "depth") ? option.depth :
	kein(this, "depth") ? this.depth : 1;

	if (!protype(this.depth, NUMBER)) {
		this.depth = 1;
	}

	//: Depth is only from 1-0 or 1-2345-6789-0.
	//: Depth 2 is deep silent depth.
	this.depth = this.depth % 10;

	if (asea.server) {
		this.color = option.color || this.color || chalk.white;
	}

	this.state = "";

	this.stack = option.stack || this.stack || [];

	this.message = option.message || this.message || "";

	this.inspect = option.inspect || this.inspect || DEFAULT_INSPECT_OPTION;

	/*;
                                                                          	@note:
                                                                          		These are automatice contingency handlers.
                                                                          	@end-note
                                                                          */
	if (asea.server) {
		redsea(Issue);

		blacksea(Fatal);

		bluesea(Fatal);
	}

	return this;
};

/*;
   	@method-documentation:
   		Modifies the log engine while maintaining environment properties.
   	@end-method-documentation
   */
Olivant.prototype.reset = function reset(option, renew) {
	if (protype(option, FUNCTION) && clazof(option, Olivant)) {
		var logEngine = option;

		if (protype(renew, BOOLEAN) && renew) {
			var data = {
				"message": this.message,
				"stack": this.stack };


			return logEngine(data);

		} else {
			this.load(logEngine.prototype);
		}

	} else if (protype(option, OBJECT)) {
		this.load(option);

	} else if (!clazof(option, Issue)) {
		this.reset(Issue, true).
		silence().
		prompt("cannot reset to given option", option);

	} else {
		Issue("cannot reset log", option, this).silence().prompt();
	}

	return this;
};

Olivant.prototype.toString = function toString() {
	return U200b(outre([this.name, this.status, this.message])).join(", ");
};

Olivant.prototype.valueOf = function valueOf() {
	return U200b(outre([this.name, this.status, this.message])).join(", ");
};

Olivant.prototype.getTimestamp = function getTimestamp() {
	var timestamp = Ethernity().printTime(true);

	timestamp = timestamp + " | " + (Date.now() - this.duration) + "ms";

	if (asea.server) {
		return chalk.dim(timestamp);
	}

	return timestamp;
};

Olivant.prototype.colorMessage = function colorMessage(color, message) {
	if (asea.server) {
		if (protype(color, FUNCTION)) {
			return color(message);

		} else if (protype(color, STRING) && truly(color)) {
			if (kein(chalk, color) && protype(chalk[color], FUNCTION)) {
				return chalk[color](message);

			} else {
				this.remind("invalid message color, " + color);

				return chalk.white(message);
			}

		} else {
			return chalk.white(message);
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
Olivant.prototype.resolveMessage = function resolveMessage() {
	var message = U200b(outre([this.name, this.status, this.message]).
	filter(truly)).join(", ");

	if (asea.server) {
		return this.colorMessage(this.color, message);
	}

	return message;
};

Olivant.prototype.resolveTrace = function resolveTrace() {
	var stack = "stack trace not available";

	if (!this.silent && doubt(this.stack, ARRAY) && filled(this.stack)) {
		stack = this.stack;

		stack = stack.map(function (frame) {
			if (frame.toString() === "[object Object]") {var
				functionName = frame.functionName,fileName = frame.fileName,lineNumber = frame.lineNumber,columnNumber = frame.columnNumber;

				return (functionName + " (" + fileName + ":" + lineNumber + ":" + columnNumber + ")").trim();

			} else {
				return frame.toString();
			}
		});

		stack = U200b(stack).join("\n");

		if (asea.server) {
			return chalk.dim.red(stack);
		}

		return stack;
	}

	if (this.depth < 5 &&
	this.silent &&
	truu(this.context) &&
	protype(this.context.constructor, FUNCTION) &&
	truly(this.context.constructor.name))
	{
		stack = "called with context, " + this.context.constructor.name;

		if (asea.server) {
			return chalk.dim(stack);
		}

		return stack;
	}

	if (this.silent) {
		stack = "stack trace is not available on silent mode";

		if (asea.server) {
			return chalk.dim(stack);
		}

		return stack;
	}

	if (this.depth > 5) {
		if (asea.server) {
			return chalk.dim(stack);
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
Olivant.prototype.getMessage = function getMessage() {
	return U200b([
	this.getTimestamp(),
	this.resolveMessage(),
	this.resolveTrace()]).
	join("\n");
};

/*;
   	@method-documentation:
   		This should be used internally as much as possible.
   	@end-method-documentation
   */
Olivant.prototype.getTrace = function getTrace(callback) {var _this = this;
	if (this.depth == 2) {
		this.remind("tracing is disabled for depth 2").prompt();

		return this;
	}

	callback = called.bind(this)(callback);

	snapd.bind(this)(callback, 1000);

	if (asea.client) {
		if (clazof(this.error, Error)) {
			trace.fromError(this.error).
			then(function (frameList) {
				_this.stack = frameList;

				callback(null, _this.stack);
			}).
			catch(function (error) {callback(_this.remind(error));});

		} else if (this.depth > 5) {
			trace.get().
			then(function (frameList) {
				_this.stack = frameList;

				callback(null, _this.stack);
			}).
			catch(function (error) {callback(_this.remind(error));});

		} else {
			callback();
		}

	} else if (asea.server) {
		if (clazof(this.error, Error)) {
			this.stack = trace.parse(this.error);

			callback(null, this.stack);

		} else if (this.depth > 5) {
			this.stack = trace.get();

			callback(null, this.stack);

		} else {
			callback();
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
Olivant.prototype.set = function set(property, value) {
	/*;
                                                       	@meta-configuration:
                                                       		{
                                                       			"property:required": "string",
                                                       			"value": "*"
                                                       		}
                                                       	@end-meta-configuration
                                                       */

	var parameter = raze(arguments);

	if (parameter.length == 1 && protype(parameter[0], OBJECT)) {
		var option = parameter[0];
		for (var _property in option) {
			this.set(_property, option[_property]);
		}

		return this;
	}

	if (!protype(property, STRING)) {
		this.reset(Issue, true).
		silence().
		prompt("invalid property", property);

		return this;
	}

	if (protype(property, STRING) &&
	property != LOG &&
	property != SILENT &&
	property != CONTEXT)
	{
		this.reset(Issue, true).
		silence().
		prompt("invalid property", property);

		return this;
	}

	this[property] = value;

	return this;
};

/*;
   	@method-documentation:
   		Send data to server or client.
   	@end-method-documentation
   */
Olivant.prototype.send = function send() {
	/*;
                                          	@meta-configuration:
                                          		{
                                          			"response": "http.ServerResponse",
                                          			"procedure": "function"
                                          		}
                                          	@end-meta-configuration
                                          */

	if (this.depth == 2) {
		this.remind("sending is disabled for depth 2").prompt();

		return this;
	}

	var message = meek(this.status, U200b(this.toString()).raw());

	var procedure = arguments[0];

	if (asea.server &&
	this.state === REDIRECT &&
	protype(this.path, STRING) &&
	truly(this.path) &&
	clazof(procedure, http.ServerResponse))
	{
		segway({
			"response": procedure,
			"path": this.path,
			"status": this.status,
			"data": message });


		this.flushState();

	} else if (asea.server &&
	falzy(this.state) &&
	clazof(procedure, http.ServerResponse))
	{
		message.send(procedure, this.code);

	} else if (asea.client &&
	this.state == REDIRECT &&
	protype(this.path, STRING) &&
	truly(this.path))
	{
		segway({
			"path": this.path,
			"status": this.status,
			"data": message });


		this.flushState();

	} else if (asea.client &&
	falzy(this.state) &&
	protype(procedure, FUNCTION))
	{
		message.send.bind(this)(procedure);

	} else if (truly(this.state)) {
		this.reset(Issue, true).
		silence().
		prompt("cannot invoke sending state, " + this.state + ", properly").
		send(procedure);

		this.flushState();

	} else {
		this.reset(Issue, true).
		silence().
		prompt("cannot send properly");
	}

	return this;
};

/*;
   	@method-documentation:
   		Stream data to listeners.
   	@end-method-documentation
   */
Olivant.prototype.report = function report() {
	if (this.depth == 2) {
		this.remind("reporting is disabled for depth 2").prompt();

		return this;
	}

	snapd.bind(this)(
	function delay() {
		if (asea.server) {
			process.emit(this.name, this);

		} else if (asea.client) {
			var event = new Event(this.name);
			event.data = this;

			document.dispatchEvent(event);
		}
	}, 1000);

	return this;
};

/*;
   	@internal-method-documentation:
   		Crush the parameter extracting string information.
   
   		Special support for glucose coated parameters.
   	@end-internal-method-documentation
   */
var crush = function crush(parameter, option) {
	option = option || this.inspect || {};

	var depth = option.depth || 1;
	var length = option.length || 200;
	var space = /\s{2,}/g;

	if (asea.server && protype(parameter, OBJECT) && parameter.COATED === COATED) {
		if (parameter.self) {
			this.set(CONTEXT, parameter.self);
		}

		return util.inspect(parameter, { "depth": depth }).
		replace(space, " ").
		substring(0, length) + "...";

	} else if (parameter && clazof(parameter, Error) && parameter.stack) {
		this.error = parameter;

		this.getTrace();

		return parameter.stack.toString();

	} else if (clazof(parameter, Olivant)) {
		return parameter.message;

	} else if (protype(parameter, FUNCTION)) {
		return parameter.toString().
		replace(space, " ").
		substring(0, length) + "...";

	} else if (protype(parameter, STRING) ||
	protype(parameter, NUMBER) ||
	protype(parameter, BOOLEAN))
	{
		return parameter.toString();

	} else if (asea.server) {
		return util.inspect(parameter, { "depth": depth }).
		replace(space, " ").
		substring(0, length) + "...";

	} else if (asea.client) {
		return parameter.toString();

	} else {
		return parameter.toString();
	}
};

/*;
   	@method-documentation:
   		Append messages to the current message.
   	@end-method-documentation
   */
Olivant.prototype.remind = function remind() {
	var parameter = raze(arguments);

	if (arid(parameter)) {
		return this;
	}

	var parse = crush.bind(this);

	this.message = U200b(parameter.
	map(function onEachParameter(parameter) {
		if (doubt(parameter, AS_ARRAY)) {
			parameter = raze(parameter).
			map(function (parameter) {return parse(parameter);});

			return U200b(parameter.
			filter(function (message) {return truly(message);})).
			join(", ");

		} else {
			return parse(parameter);
		}
	}).
	reverse().
	concat([this.message]).
	filter(function (message) {return truly(message);}).
	reverse()).
	join(", ");

	this.report();

	return this;
};

/*;
   	@method-documentation:
   		Silence the logging capabilities.
   	@end-method-documentation
   */
Olivant.prototype.silence = function silence() {
	this.silent = true;

	return this;
};

/*;
   	@method-documentation:
   		Deactivate silence.
   	@end-method-documentation
   */
Olivant.prototype.shout = function shout() {
	this.silent = false;

	return this;
};

/*;
   	@method-documentation:
   		Log the data.
   	@end-method-documentation
   */
Olivant.prototype.prompt = function prompt() {
	this.remind.apply(this, raze(arguments));

	snapd.bind(this)(
	function delay() {var _this2 = this;
		if (this.depth === 2) {
			this.log(this.getMessage());

			return this;
		}

		if (doubt(this.stack, ARRAY) && filled(this.stack)) {
			this.log(this.getMessage());

		} else if (this.depth > 5) {
			this.getTrace(function (error, stack) {
				if (clazof(error, Error)) {
					_this2.remind("error getting stack trace, " + error);
				}

				if (truu(stack)) {
					_this2.stack = stack;

					_this2.log(_this2.getMessage());

				} else {
					_this2.log(_this2.getMessage());
				}
			});

		} else {
			this.log(this.getMessage());
		}
	});

	return this;
};

/*;
   	@method-documentation:
   		Set the redirection configuration.
   
   		This will trigger redirect response when send is called.
   
   		Default of DEFAULT_REDIRECT_PATH will be used if path is not given.
   	@end-method-documentation
   */
Olivant.prototype.redirect = function redirect(path) {
	/*;
                                                      	@meta-configuration:
                                                      		{
                                                      			"path:required": "string"
                                                      		}
                                                      	@end-meta-configuration
                                                      */

	this.state = REDIRECT;
	this.path = path;

	if (falzy(this.path) &&
	truly(DEFAULT_REDIRECT_PATH) &&
	protype(DEFAULT_REDIRECT_PATH, STRING))
	{
		this.path = DEFAULT_REDIRECT_PATH;

		return this;
	}

	if (!protype(this.path, STRING)) {
		this.reset(Issue, true).
		silence().
		prompt("invalid redirect path");

	} else if (falzy(this.path)) {
		this.reset(Issue, true).
		silence().
		prompt("empty redirect path");
	}

	return this;
};

Olivant.prototype.flushState = function flushState() {
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
Olivant.prototype.pass = function pass(callback, result, option) {
	/*;
                                                                  	@meta-configuration:
                                                                  		{
                                                                  			"callback:required": "function"
                                                                  		}
                                                                  	@end-meta-configuration
                                                                  */

	if (!protype(callback, FUNCTION)) {
		this.reset(Bug, true).
		prompt("invalid callback");

		return this;
	}

	if (truu(option) && truu(option.self) && option.COATED === COATED) {
		this.set(CONTEXT, option.self);
	}

	if (this.context) {
		callback = called.bind(this.context)(callback);

	} else {
		callback = called(callback);
	}

	callback(this, result, option);

	return this;
};

harden("create", function create(name, option) {
	var LogEngine = diatom(name);

	heredito(LogEngine, Olivant);

	LogEngine.prototype.name = option.name;
	LogEngine.prototype.status = option.status;
	LogEngine.prototype.code = option.code;
	LogEngine.prototype.silent = option.silent;
	LogEngine.prototype.depth = option.depth;
	LogEngine.prototype.color = option.color;
	LogEngine.prototype.inspect = option.inspect;
	LogEngine.prototype.initialize = option.initialize ||
	function initialize() {
		this.name = option.name;

		this.status = option.status;

		this.code = option.code;

		this.silent = option.silent;

		this.depth = option.depth;
	};

	symbiote(LogEngine);

	harden(LogEngine.name, LogEngine);
}, Olivant);

module.exports = Olivant;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9saXZhbnQuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhcmlkIiwicmVxdWlyZSIsImFzZWEiLCJidWRnZSIsImNhbGxlZCIsImNsYXpvZiIsImRpYXRvbSIsImRvdWJ0IiwiRXRoZXJuaXR5IiwiZmFsemUiLCJmYWx6eSIsImZpbGxlZCIsImdsdWNvc2UiLCJoYXJkZW4iLCJoZXJlZGl0byIsImtlaW4iLCJtZWVrIiwib3V0cmUiLCJwbG91Z2giLCJwcm90eXBlIiwicmF6ZSIsInNuYXBkIiwic3ltYmlvdGUiLCJ0cnVseSIsInRydXUiLCJVMjAwYiIsInRyYWNlIiwid2luZG93IiwiREVGQVVMVF9SRURJUkVDVF9QQVRIIiwiT2xpdmFudCIsIkRFRkFVTFRfSU5TUEVDVF9PUFRJT04iLCJERUZBVUxUX0xPR19FTkdJTkUiLCJjbGllbnQiLCJjb25zb2xlIiwiZGVidWciLCJsb2ciLCJwcm90b3R5cGUiLCJpbml0aWFsaXplIiwib3B0aW9uIiwiZHVyYXRpb24iLCJEYXRlIiwibm93IiwiYXJndW1lbnRzIiwiT0JKRUNUIiwiQVJHVU1FTlRTIiwiRXJyb3IiLCJDT0FURUQiLCJsb2FkIiwicGFyYW1ldGVyIiwibGVuZ3RoIiwiZXJyb3IiLCJyZW1pbmQiLCJhcHBseSIsIm1lc3NhZ2UiLCJjb25jYXQiLCJTVFJJTkciLCJjb25zdHJ1Y3RvciIsIkZVTkNUSU9OIiwibmFtZSIsImJpbmQiLCJFQ0hPIiwic3RhdHVzIiwiY29kZSIsIkVDSE9fQ09ERSIsImNvbnRleHQiLCJzZWxmIiwic2lsZW50IiwiQk9PTEVBTiIsImRlcHRoIiwiTlVNQkVSIiwic2VydmVyIiwiY29sb3IiLCJjaGFsayIsIndoaXRlIiwic3RhdGUiLCJzdGFjayIsImluc3BlY3QiLCJyZWRzZWEiLCJJc3N1ZSIsImJsYWNrc2VhIiwiRmF0YWwiLCJibHVlc2VhIiwicmVzZXQiLCJyZW5ldyIsImxvZ0VuZ2luZSIsImRhdGEiLCJzaWxlbmNlIiwicHJvbXB0IiwidG9TdHJpbmciLCJqb2luIiwidmFsdWVPZiIsImdldFRpbWVzdGFtcCIsInRpbWVzdGFtcCIsInByaW50VGltZSIsImRpbSIsImNvbG9yTWVzc2FnZSIsInJlc29sdmVNZXNzYWdlIiwiZmlsdGVyIiwicmVzb2x2ZVRyYWNlIiwiQVJSQVkiLCJtYXAiLCJmcmFtZSIsImZ1bmN0aW9uTmFtZSIsImZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsInRyaW0iLCJyZWQiLCJnZXRNZXNzYWdlIiwiZ2V0VHJhY2UiLCJjYWxsYmFjayIsImZyb21FcnJvciIsInRoZW4iLCJmcmFtZUxpc3QiLCJjYXRjaCIsImdldCIsInBhcnNlIiwic2V0IiwicHJvcGVydHkiLCJ2YWx1ZSIsIkxPRyIsIlNJTEVOVCIsIkNPTlRFWFQiLCJzZW5kIiwicmF3IiwicHJvY2VkdXJlIiwiUkVESVJFQ1QiLCJwYXRoIiwiaHR0cCIsIlNlcnZlclJlc3BvbnNlIiwic2Vnd2F5IiwiZmx1c2hTdGF0ZSIsInJlcG9ydCIsImRlbGF5IiwicHJvY2VzcyIsImVtaXQiLCJldmVudCIsIkV2ZW50IiwiZG9jdW1lbnQiLCJkaXNwYXRjaEV2ZW50IiwiY3J1c2giLCJzcGFjZSIsInV0aWwiLCJyZXBsYWNlIiwic3Vic3RyaW5nIiwib25FYWNoUGFyYW1ldGVyIiwiQVNfQVJSQVkiLCJyZXZlcnNlIiwic2hvdXQiLCJyZWRpcmVjdCIsInBhc3MiLCJyZXN1bHQiLCJCdWciLCJjcmVhdGUiLCJMb2dFbmdpbmUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzRkEsSUFBTUEsT0FBT0MsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1FLFFBQVFGLFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUcsU0FBU0gsUUFBUyxR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VixDQUFvQjhCLE1BQXBCLEdBQTZCNUIsT0FBTzRCLE1BQXBDO0FBQ0F3RixXQUFVdEgsU0FBVixDQUFvQmdDLEtBQXBCLEdBQTRCOUIsT0FBTzhCLEtBQW5DO0FBQ0FzRixXQUFVdEgsU0FBVixDQUFvQm1DLEtBQXBCLEdBQTRCakMsT0FBT2lDLEtBQW5DO0FBQ0FtRixXQUFVdEgsU0FBVixDQUFvQndDLE9BQXBCLEdBQThCdEMsT0FBT3NDLE9BQXJDO0FBQ0E4RSxXQUFVdEgsU0FBVixDQUFvQkMsVUFBcEIsR0FBaUNDLE9BQU9ELFVBQVA7QUFDaEMsVUFBU0EsVUFBVCxHQUFzQjtBQUNyQixPQUFLcUIsSUFBTCxHQUFZcEIsT0FBT29CLElBQW5COztBQUVBLE9BQUtHLE1BQUwsR0FBY3ZCLE9BQU91QixNQUFyQjs7QUFFQSxPQUFLQyxJQUFMLEdBQVl4QixPQUFPd0IsSUFBbkI7O0FBRUEsT0FBS0ksTUFBTCxHQUFjNUIsT0FBTzRCLE1BQXJCOztBQUVBLE9BQUtFLEtBQUwsR0FBYTlCLE9BQU84QixLQUFwQjtBQUNBLEVBWEY7O0FBYUE5QyxVQUFVb0ksU0FBVjs7QUFFQTdJLFFBQVE2SSxVQUFVaEcsSUFBbEIsRUFBd0JnRyxTQUF4QjtBQUNBLENBNUJELEVBNEJHN0gsT0E1Qkg7O0FBOEJBOEgsT0FBT0MsT0FBUCxHQUFpQi9ILE9BQWpCIiwiZmlsZSI6Im9saXZhbnQuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwib2xpdmFudFwiLFxuXHRcdFx0XCJwYXRoXCI6IFwib2xpdmFudC9vbGl2YW50LmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJvbGl2YW50LmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcIm9saXZhbnRcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9vbGl2YW50LmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwib2xpdmFudC10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlLFxuXHRcdFx0XCJjbGFzc1wiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdEVjaG8gdGhlIGRlc3RydWN0aW9uIGNhdXNlZCBieSB5b3VyIGNvZGUuXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFyaWRcIjogXCJhcmlkXCIsXG5cdFx0XHRcImFzZWFcIjogXCJhc2VhXCIsXG5cdFx0XHRcImJ1ZGdlXCI6IFwiYnVkZ2VcIixcblx0XHRcdFwiYmxhY2tzZWFcIjogXCJibGFja3NlYVwiLFxuXHRcdFx0XCJjYWxsZWRcIjogXCJjYWxsZWRcIixcblx0XHRcdFwiY2hhbGtcIjogXCJjaGFsa1wiLFxuXHRcdFx0XCJjbGF6b2ZcIjogXCJjbGF6b2ZcIixcblx0XHRcdFwiZGV4aXN0XCI6IFwiZGV4aXN0XCIsXG5cdFx0XHRcImRpYXRvbVwiOiBcImRpYXRvbVwiLFxuXHRcdFx0XCJFdGhlcm5pdHlcIjogXCJldGhlcm5pdHlcIixcblx0XHRcdFwiRXZlbnRFbWl0dGVyXCI6IFwiZXZlbnRzXCIsXG5cdFx0XHRcImZhbHplXCI6IFwiZmFsemVcIixcblx0XHRcdFwiZmFsenlcIjogXCJmYWx6eVwiLFxuXHRcdFx0XCJnbHVjb3NlXCI6IFwiZ2x1Y29zZVwiLFxuXHRcdFx0XCJoYXJkZW5cIjogXCJoYXJkZW5cIixcblx0XHRcdFwiaGVyZWRpdG9cIjogXCJoZXJlZGl0b1wiLFxuXHRcdFx0XCJrZWluXCI6IFwia2VpblwiLFxuXHRcdFx0XCJodHRwXCI6IFwiaHR0cFwiLFxuXHRcdFx0XCJtZWVrXCI6IFwibWVla1wiXG5cdFx0XHRcIm91dHJlXCI6IFwib3V0cmVcIixcblx0XHRcdFwicGxvdWdoXCI6IFwicGxvdWdoXCIsXG5cdFx0XHRcInByb3R5cGVcIjogXCJwcm90eXBlXCIsXG5cdFx0XHRcInJhemVcIjogXCJyYXplXCIsXG5cdFx0XHRcInJlZHNlYVwiOiBcInJlZHNlYVwiLFxuXHRcdFx0XCJzbmFwZFwiOiBcInNuYXBkXCIsXG5cdFx0XHRcInNlZ3dheVwiOiBcInNlZ3dheVwiLFxuXHRcdFx0XCJzeW1iaW90ZVwiOiBcInN5bWJpb3RlXCIsXG5cdFx0XHRcInRyYWNlXCI6IFsgXCJzdGFja3RyYWNlLWpzXCIsIFwic3RhY2stdHJhY2VcIiBdLFxuXHRcdFx0XCJ0cnVseVwiOiBcInRydWx5XCIsXG5cdFx0XHRcInRydXVcIjogXCJ0cnV1XCIsXG5cdFx0XHRcIlUyMDBiXCI6IFwidTIwMGJcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhcmlkID0gcmVxdWlyZSggXCJhcmlkXCIgKTtcbmNvbnN0IGFzZWEgPSByZXF1aXJlKCBcImFzZWFcIiApO1xuY29uc3QgYnVkZ2UgPSByZXF1aXJlKCBcImJ1ZGdlXCIgKTtcbmNvbnN0IGNhbGxlZCA9IHJlcXVpcmUoIFwiY2FsbGVkXCIgKTtcbmNvbnN0IGNsYXpvZiA9IHJlcXVpcmUoIFwiY2xhem9mXCIgKTtcbmNvbnN0IGRpYXRvbSA9IHJlcXVpcmUoIFwiZGlhdG9tXCIgKTtcbmNvbnN0IGRvdWJ0ID0gcmVxdWlyZSggXCJkb3VidFwiICk7XG5jb25zdCBFdGhlcm5pdHkgPSByZXF1aXJlKCBcImV0aGVybml0eVwiICk7XG5jb25zdCBmYWx6ZSA9IHJlcXVpcmUoIFwiZmFsemVcIiApO1xuY29uc3QgZmFsenkgPSByZXF1aXJlKCBcImZhbHp5XCIgKTtcbmNvbnN0IGZpbGxlZCA9IHJlcXVpcmUoIFwiZmlsbGVkXCIgKTtcbmNvbnN0IGdsdWNvc2UgPSByZXF1aXJlKCBcImdsdWNvc2VcIiApO1xuY29uc3QgaGFyZGVuID0gcmVxdWlyZSggXCJoYXJkZW5cIiApO1xuY29uc3QgaGVyZWRpdG8gPSByZXF1aXJlKCBcImhlcmVkaXRvXCIgKTtcbmNvbnN0IGtlaW4gPSByZXF1aXJlKCBcImtlaW5cIiApO1xuY29uc3QgbWVlayA9IHJlcXVpcmUoIFwibWVla1wiICk7XG5jb25zdCBvdXRyZSA9IHJlcXVpcmUoIFwib3V0cmVcIiApO1xuY29uc3QgcGxvdWdoID0gcmVxdWlyZSggXCJwbG91Z2hcIiApO1xuY29uc3QgcHJvdHlwZSA9IHJlcXVpcmUoIFwicHJvdHlwZVwiICk7XG5jb25zdCByYXplID0gcmVxdWlyZSggXCJyYXplXCIgKTtcbmNvbnN0IHNuYXBkID0gcmVxdWlyZSggXCJzbmFwZFwiICk7XG5jb25zdCBzeW1iaW90ZSA9IHJlcXVpcmUoIFwic3ltYmlvdGVcIiApO1xuY29uc3QgdHJ1bHkgPSByZXF1aXJlKCBcInRydWx5XCIgKTtcbmNvbnN0IHRydXUgPSByZXF1aXJlKCBcInRydXVcIiApO1xuY29uc3QgVTIwMGIgPSByZXF1aXJlKCBcInUyMDBiXCIgKTtcblxuLy86IEBjbGllbnQ6XG5jb25zdCB0cmFjZSA9IHJlcXVpcmUoIFwic3RhY2t0cmFjZS1qc1wiICk7XG5oYXJkZW4oIFwiREVGQVVMVF9SRURJUkVDVF9QQVRIXCIsIHdpbmRvdy5ERUZBVUxUX1JFRElSRUNUX1BBVEggfHwgXCIvdmlldy9zdGF0dXMvcGFnZVwiICk7XG4vLzogQGVuZC1jbGllbnRcblxuXG5cbmNvbnN0IE9saXZhbnQgPSBkaWF0b20oIFwiT2xpdmFudFwiICk7XG5cbmNvbnN0IERFRkFVTFRfSU5TUEVDVF9PUFRJT04gPSB7IFwiZGVwdGhcIjogMSwgXCJsZW5ndGhcIjogMjAwIH07XG5jb25zdCBERUZBVUxUX0xPR19FTkdJTkUgPSBhc2VhLmNsaWVudD8gY29uc29sZS5kZWJ1ZyA6IGNvbnNvbGUubG9nO1xuXG4vKjtcblx0QG5vdGU6XG5cdFx0VGhpcyBpcyB0aGUgZGVmYXVsdCBuYW1lL3N0YXR1cyBhbmQgY29kZSBvZiB0aGUgb2xpdmFudC5cblx0QGVuZC1ub3RlXG4qL1xuaGFyZGVuKCBcIkVDSE9cIiwgXCJlY2hvXCIgKTtcbmhhcmRlbiggXCJFQ0hPX0NPREVcIiwgMjAwICk7XG5cbmhhcmRlbiggXCJSRURJUkVDVFwiLCBcInJlZGlyZWN0XCIgKTtcbmhhcmRlbiggXCJDT05URVhUXCIsIFwiY29udGV4dFwiICk7XG5oYXJkZW4oIFwiTE9HXCIsIFwibG9nXCIgKTtcbmhhcmRlbiggXCJTSUxFTlRcIiwgXCJzaWxlbnRcIiApO1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdE9wdGlvbiBzaG91bGQgbm90IGJlIGdsdWNvc2UgY29hdGVkLlxuXHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuT2xpdmFudC5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIGluaXRpYWxpemUoIG9wdGlvbiApe1xuXHR0aGlzLmR1cmF0aW9uID0gRGF0ZS5ub3coICk7XG5cblx0aWYoIHByb3R5cGUoIGFyZ3VtZW50c1sgMCBdLCBPQkpFQ1QgKSAmJlxuXHRcdCFkb3VidCggYXJndW1lbnRzWyAwIF0sIEFSR1VNRU5UUyApICYmXG5cdFx0ISggY2xhem9mKCBhcmd1bWVudHNbIDAgXSwgRXJyb3IgKSApICYmXG5cdFx0b3B0aW9uLkNPQVRFRCAhPT0gQ09BVEVEIClcblx0e1xuXHRcdHRoaXMubG9hZCggb3B0aW9uICk7XG5cblx0fWVsc2V7XG5cdFx0dGhpcy5sb2FkKCApO1xuXHR9XG5cblx0bGV0IHBhcmFtZXRlciA9IGFyZ3VtZW50c1sgMCBdO1xuXG5cdGlmKCBhcmd1bWVudHMubGVuZ3RoID09IDAgKXtcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9ZWxzZSBpZiggY2xhem9mKCBwYXJhbWV0ZXIsIEVycm9yICkgKXtcblx0XHRsZXQgZXJyb3IgPSBwYXJhbWV0ZXI7XG5cblx0XHR0aGlzLnJlbWluZC5hcHBseSggdGhpcywgWyBlcnJvci5tZXNzYWdlLCBlcnJvciBdLmNvbmNhdCggYnVkZ2UoIGFyZ3VtZW50cyApICkgKTtcblxuXHR9ZWxzZSBpZiggY2xhem9mKCBwYXJhbWV0ZXIsIE9saXZhbnQgKSApe1xuXHRcdHRoaXMubG9hZCggcGFyYW1ldGVyICk7XG5cblx0fWVsc2UgaWYoIGRvdWJ0KCBwYXJhbWV0ZXIsIEFSR1VNRU5UUyApICl7XG5cdFx0dGhpcy5yZW1pbmQuYXBwbHkoIHRoaXMsIHBsb3VnaCggcGFyYW1ldGVyICkgKTtcblxuXHR9ZWxzZSBpZiggcHJvdHlwZSggcGFyYW1ldGVyLCBTVFJJTkcgKSApe1xuXHRcdHRoaXMucmVtaW5kLmFwcGx5KCB0aGlzLCByYXplKCBhcmd1bWVudHMgKSApO1xuXG5cdH1lbHNlIGlmKCBwcm90eXBlKCBwYXJhbWV0ZXIsIE9CSkVDVCApICYmXG5cdFx0cGFyYW1ldGVyLmNvbnN0cnVjdG9yICYmXG5cdFx0cHJvdHlwZSggcGFyYW1ldGVyLmNvbnN0cnVjdG9yLCBGVU5DVElPTiApICYmXG5cdFx0cGFyYW1ldGVyLmNvbnN0cnVjdG9yLm5hbWUgIT0gXCJGdW5jdGlvblwiICYmXG5cdFx0Y2xhem9mKCBwYXJhbWV0ZXIsIHBhcmFtZXRlci5jb25zdHJ1Y3RvciApIClcblx0e1xuXHRcdHRoaXMubG9hZCggcGFyYW1ldGVyICk7XG5cblx0XHR0aGlzLnJlbWluZC5hcHBseSggdGhpcywgcmF6ZSggYXJndW1lbnRzICkgKTtcblxuXHR9ZWxzZSBpZiggcHJvdHlwZSggcGFyYW1ldGVyLCBPQkpFQ1QgKSApe1xuXHRcdHRoaXMucmVtaW5kLmFwcGx5KCB0aGlzLCByYXplKCBhcmd1bWVudHMgKSApO1xuXHR9XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG5PbGl2YW50LnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24gbG9hZCggb3B0aW9uICl7XG5cdG9wdGlvbiA9IGdsdWNvc2UuYmluZCggdGhpcyApKCBvcHRpb24gKTtcblxuXHR0aGlzLm5hbWUgPSBvcHRpb24ubmFtZSB8fCB0aGlzLm5hbWUgfHwgRUNIT1xuXG5cdHRoaXMuc3RhdHVzID0gb3B0aW9uLnN0YXR1cyB8fCB0aGlzLnN0YXR1cyB8fCBFQ0hPO1xuXG5cdHRoaXMuY29kZSA9IG9wdGlvbi5jb2RlIHx8IHRoaXMuY29kZSB8fCBFQ0hPX0NPREU7XG5cblx0dGhpcy5sb2cgPSBvcHRpb24ubG9nIHx8IHRoaXMubG9nIHx8IERFRkFVTFRfTE9HX0VOR0lORTtcblxuXHRpZiggZmFsemUoIHRoaXMuY29udGV4dCApICYmIHRydXUoIG9wdGlvbi5zZWxmICkgKXtcblx0XHR0aGlzLmNvbnRleHQgPSBvcHRpb24uc2VsZjtcblx0fVxuXG5cdHRoaXMuc2lsZW50ID0ga2Vpbiggb3B0aW9uLCBcInNpbGVudFwiICk/IG9wdGlvbi5zaWxlbnQgOlxuXHRcdGtlaW4oIHRoaXMsIFwic2lsZW50XCIgKT8gdGhpcy5zaWxlbnQgOiB0cnVlO1xuXG5cdGlmKCAhcHJvdHlwZSggdGhpcy5zaWxlbnQsIEJPT0xFQU4gKSApe1xuXHRcdHRoaXMuc2lsZW50ID0gdHJ1ZTtcblx0fVxuXG5cdC8vOiBEZXB0aCBkaWN0YXRlcyByZWZpbmVkIHNldHRpbmdzIG9mIHRoaXMgcHJvY2VkdXJlLlxuXHR0aGlzLmRlcHRoID0ga2Vpbiggb3B0aW9uLCBcImRlcHRoXCIgKT8gb3B0aW9uLmRlcHRoIDpcblx0XHRrZWluKCB0aGlzLCBcImRlcHRoXCIgKT8gdGhpcy5kZXB0aCA6IDE7XG5cblx0aWYoICFwcm90eXBlKCB0aGlzLmRlcHRoLCBOVU1CRVIgKSApe1xuXHRcdHRoaXMuZGVwdGggPSAxO1xuXHR9XG5cblx0Ly86IERlcHRoIGlzIG9ubHkgZnJvbSAxLTAgb3IgMS0yMzQ1LTY3ODktMC5cblx0Ly86IERlcHRoIDIgaXMgZGVlcCBzaWxlbnQgZGVwdGguXG5cdHRoaXMuZGVwdGggPSB0aGlzLmRlcHRoICUgMTA7XG5cblx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0dGhpcy5jb2xvciA9IG9wdGlvbi5jb2xvciB8fCB0aGlzLmNvbG9yIHx8IGNoYWxrLndoaXRlO1xuXHR9XG5cblx0dGhpcy5zdGF0ZSA9IFwiXCI7XG5cblx0dGhpcy5zdGFjayA9IG9wdGlvbi5zdGFjayB8fCB0aGlzLnN0YWNrIHx8IFsgXTtcblxuXHR0aGlzLm1lc3NhZ2UgPSBvcHRpb24ubWVzc2FnZSB8fCB0aGlzLm1lc3NhZ2UgfHwgXCJcIjtcblxuXHR0aGlzLmluc3BlY3QgPSBvcHRpb24uaW5zcGVjdCB8fCB0aGlzLmluc3BlY3QgfHwgREVGQVVMVF9JTlNQRUNUX09QVElPTjtcblxuXHQvKjtcblx0XHRAbm90ZTpcblx0XHRcdFRoZXNlIGFyZSBhdXRvbWF0aWNlIGNvbnRpbmdlbmN5IGhhbmRsZXJzLlxuXHRcdEBlbmQtbm90ZVxuXHQqL1xuXHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRyZWRzZWEoIElzc3VlICk7XG5cblx0XHRibGFja3NlYSggRmF0YWwgKTtcblxuXHRcdGJsdWVzZWEoIEZhdGFsICk7XG5cdH1cblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qO1xuXHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0TW9kaWZpZXMgdGhlIGxvZyBlbmdpbmUgd2hpbGUgbWFpbnRhaW5pbmcgZW52aXJvbm1lbnQgcHJvcGVydGllcy5cblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gcmVzZXQoIG9wdGlvbiwgcmVuZXcgKXtcblx0aWYoIHByb3R5cGUoIG9wdGlvbiwgRlVOQ1RJT04gKSAmJiBjbGF6b2YoIG9wdGlvbiwgT2xpdmFudCApICl7XG5cdFx0bGV0IGxvZ0VuZ2luZSA9IG9wdGlvbjtcblxuXHRcdGlmKCBwcm90eXBlKCByZW5ldywgQk9PTEVBTiApICYmIHJlbmV3ICl7XG5cdFx0XHRsZXQgZGF0YSA9IHtcblx0XHRcdFx0XCJtZXNzYWdlXCI6IHRoaXMubWVzc2FnZSxcblx0XHRcdFx0XCJzdGFja1wiOiB0aGlzLnN0YWNrXG5cdFx0XHR9O1xuXG5cdFx0XHRyZXR1cm4gbG9nRW5naW5lKCBkYXRhICk7XG5cblx0XHR9ZWxzZXtcblx0XHRcdHRoaXMubG9hZCggbG9nRW5naW5lLnByb3RvdHlwZSApO1xuXHRcdH1cblxuXHR9ZWxzZSBpZiggcHJvdHlwZSggb3B0aW9uLCBPQkpFQ1QgKSApe1xuXHRcdHRoaXMubG9hZCggb3B0aW9uICk7XG5cblx0fWVsc2UgaWYoICFjbGF6b2YoIG9wdGlvbiwgSXNzdWUgKSApe1xuXHRcdHRoaXMucmVzZXQoIElzc3VlLCB0cnVlIClcblx0XHRcdC5zaWxlbmNlKCApXG5cdFx0XHQucHJvbXB0KCBcImNhbm5vdCByZXNldCB0byBnaXZlbiBvcHRpb25cIiwgb3B0aW9uICk7XG5cblx0fWVsc2V7XG5cdFx0SXNzdWUoIFwiY2Fubm90IHJlc2V0IGxvZ1wiLCBvcHRpb24sIHRoaXMgKS5zaWxlbmNlKCApLnByb21wdCggKTtcblx0fVxuXG5cdHJldHVybiB0aGlzO1xufTtcblxuT2xpdmFudC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyggKXtcblx0cmV0dXJuIFUyMDBiKCBvdXRyZSggWyB0aGlzLm5hbWUsIHRoaXMuc3RhdHVzLCB0aGlzLm1lc3NhZ2UgXSApICkuam9pbiggXCIsIFwiICk7XG59O1xuXG5PbGl2YW50LnByb3RvdHlwZS52YWx1ZU9mID0gZnVuY3Rpb24gdmFsdWVPZiggKXtcblx0cmV0dXJuIFUyMDBiKCBvdXRyZSggWyB0aGlzLm5hbWUsIHRoaXMuc3RhdHVzLCB0aGlzLm1lc3NhZ2UgXSApICkuam9pbiggXCIsIFwiICk7XG59O1xuXG5PbGl2YW50LnByb3RvdHlwZS5nZXRUaW1lc3RhbXAgPSBmdW5jdGlvbiBnZXRUaW1lc3RhbXAoICl7XG5cdGxldCB0aW1lc3RhbXAgPSBFdGhlcm5pdHkoICkucHJpbnRUaW1lKCB0cnVlICk7XG5cblx0dGltZXN0YW1wID0gYCR7IHRpbWVzdGFtcCB9IHwgJHsgKCBEYXRlLm5vdyggKSAtIHRoaXMuZHVyYXRpb24gKSB9bXNgO1xuXG5cdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdHJldHVybiBjaGFsay5kaW0oIHRpbWVzdGFtcCApO1xuXHR9XG5cblx0cmV0dXJuIHRpbWVzdGFtcDtcbn07XG5cbk9saXZhbnQucHJvdG90eXBlLmNvbG9yTWVzc2FnZSA9IGZ1bmN0aW9uIGNvbG9yTWVzc2FnZSggY29sb3IsIG1lc3NhZ2UgKXtcblx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0aWYoIHByb3R5cGUoIGNvbG9yLCBGVU5DVElPTiApICl7XG5cdFx0XHRyZXR1cm4gY29sb3IoIG1lc3NhZ2UgKTtcblxuXHRcdH1lbHNlIGlmKCBwcm90eXBlKCBjb2xvciwgU1RSSU5HICkgJiYgdHJ1bHkoIGNvbG9yICkgKXtcblx0XHRcdGlmKCBrZWluKCBjaGFsaywgY29sb3IgKSAmJiBwcm90eXBlKCBjaGFsa1sgY29sb3IgXSwgRlVOQ1RJT04gKSApe1xuXHRcdFx0XHRyZXR1cm4gY2hhbGtbIGNvbG9yIF0oIG1lc3NhZ2UgKTtcblxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHRoaXMucmVtaW5kKCBgaW52YWxpZCBtZXNzYWdlIGNvbG9yLCAkeyBjb2xvciB9YCApO1xuXG5cdFx0XHRcdHJldHVybiBjaGFsay53aGl0ZSggbWVzc2FnZSApO1xuXHRcdFx0fVxuXG5cdFx0fWVsc2V7XG5cdFx0XHRyZXR1cm4gY2hhbGsud2hpdGUoIG1lc3NhZ2UgKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gbWVzc2FnZTtcbn07XG5cbi8qO1xuXHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0VGhlIG1lc3NhZ2UgaXMgZGl2aWRlZCBpbnRvIHRocmVlIHBhcnRzLFxuXHRcdDEuIG5hbWVzcGFjZSxcblx0XHQyLiBzdGF0dXMsXG5cdFx0My4gYWN0dWFsIG1lc3NhZ2Vcblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLnJlc29sdmVNZXNzYWdlID0gZnVuY3Rpb24gcmVzb2x2ZU1lc3NhZ2UoICl7XG5cdGxldCBtZXNzYWdlID0gVTIwMGIoIG91dHJlKCBbIHRoaXMubmFtZSwgdGhpcy5zdGF0dXMsIHRoaXMubWVzc2FnZSBdIClcblx0XHQuZmlsdGVyKCB0cnVseSApICkuam9pbiggXCIsIFwiICk7XG5cblx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0cmV0dXJuIHRoaXMuY29sb3JNZXNzYWdlKCB0aGlzLmNvbG9yLCBtZXNzYWdlICk7XG5cdH1cblxuXHRyZXR1cm4gbWVzc2FnZTtcbn07XG5cbk9saXZhbnQucHJvdG90eXBlLnJlc29sdmVUcmFjZSA9IGZ1bmN0aW9uIHJlc29sdmVUcmFjZSggKXtcblx0bGV0IHN0YWNrID0gXCJzdGFjayB0cmFjZSBub3QgYXZhaWxhYmxlXCI7XG5cblx0aWYoICF0aGlzLnNpbGVudCAmJiBkb3VidCggdGhpcy5zdGFjaywgQVJSQVkgKSAmJiBmaWxsZWQoIHRoaXMuc3RhY2sgKSApe1xuXHRcdHN0YWNrID0gdGhpcy5zdGFjaztcblxuXHRcdHN0YWNrID0gc3RhY2subWFwKCAoIGZyYW1lICkgPT4ge1xuXHRcdFx0aWYoIGZyYW1lLnRvU3RyaW5nKCApID09PSBcIltvYmplY3QgT2JqZWN0XVwiICl7XG5cdFx0XHRcdGxldCB7IGZ1bmN0aW9uTmFtZSwgZmlsZU5hbWUsIGxpbmVOdW1iZXIsIGNvbHVtbk51bWJlciB9ID0gZnJhbWU7XG5cblx0XHRcdFx0cmV0dXJuIGAkeyBmdW5jdGlvbk5hbWUgfSAoJHsgZmlsZU5hbWUgfTokeyBsaW5lTnVtYmVyIH06JHsgY29sdW1uTnVtYmVyIH0pYC50cmltKCApO1xuXG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0cmV0dXJuIGZyYW1lLnRvU3RyaW5nKCApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblxuXHRcdHN0YWNrID0gVTIwMGIoIHN0YWNrICkuam9pbiggXCJcXG5cIiApO1xuXG5cdFx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0XHRyZXR1cm4gY2hhbGsuZGltLnJlZCggc3RhY2sgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc3RhY2s7XG5cdH1cblxuXHRpZiggdGhpcy5kZXB0aCA8IDUgJiZcblx0XHR0aGlzLnNpbGVudCAmJlxuXHRcdHRydXUoIHRoaXMuY29udGV4dCApICYmXG5cdCBcdHByb3R5cGUoIHRoaXMuY29udGV4dC5jb25zdHJ1Y3RvciwgRlVOQ1RJT04gKSAmJlxuXHRcdHRydWx5KCB0aGlzLmNvbnRleHQuY29uc3RydWN0b3IubmFtZSApIClcblx0e1xuXHRcdHN0YWNrID0gYGNhbGxlZCB3aXRoIGNvbnRleHQsICR7IHRoaXMuY29udGV4dC5jb25zdHJ1Y3Rvci5uYW1lIH1gO1xuXG5cdFx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0XHRyZXR1cm4gY2hhbGsuZGltKCBzdGFjayApO1xuXHRcdH1cblxuXHRcdHJldHVybiBzdGFjaztcblx0fVxuXG5cdGlmKCB0aGlzLnNpbGVudCApe1xuXHRcdHN0YWNrID0gXCJzdGFjayB0cmFjZSBpcyBub3QgYXZhaWxhYmxlIG9uIHNpbGVudCBtb2RlXCI7XG5cblx0XHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRcdHJldHVybiBjaGFsay5kaW0oIHN0YWNrICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHN0YWNrO1xuXHR9XG5cblx0aWYoIHRoaXMuZGVwdGggPiA1ICl7XG5cdFx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0XHRyZXR1cm4gY2hhbGsuZGltKCBzdGFjayApO1xuXHRcdH1cblxuXHRcdHJldHVybiBzdGFjaztcblx0fVxufTtcblxuLyo7XG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRUaGUgbWVzc2FnZSBjb25zaXN0IG9mIHRocmVlIGxheWVyIG9mIHN0cmluZ3MsXG5cdFx0XHQxLiB0aW1lc3RhbXAgaW4gdHJ1ZSB0aW1lIGZvcm1hdFxuXHRcdFx0Mi4gYWN0dWFsIHJlYWRhYmxlIG1lc3NhZ2Vcblx0XHRcdDMuIG1lc3NhZ2UgdHJhY2Ugb3IgbWVzc2FnZSBjb250ZXh0XG5cblx0XHRUaGVzZSBpbmZvcm1hdGlvbiB3aWxsIGJlIGRpdmlkZWQgdGhyb3VnaCB6ZXJvLXdpZHRoIHNwYWNlIGNvbnZlbnRpb24uXG5cdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5PbGl2YW50LnByb3RvdHlwZS5nZXRNZXNzYWdlID0gZnVuY3Rpb24gZ2V0TWVzc2FnZSggKXtcblx0cmV0dXJuIFUyMDBiKCBbXG5cdFx0dGhpcy5nZXRUaW1lc3RhbXAoICksXG5cdFx0dGhpcy5yZXNvbHZlTWVzc2FnZSggKSxcblx0XHR0aGlzLnJlc29sdmVUcmFjZSggKVxuXHRdICkuam9pbiggXCJcXG5cIiApO1xufTtcblxuLyo7XG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRUaGlzIHNob3VsZCBiZSB1c2VkIGludGVybmFsbHkgYXMgbXVjaCBhcyBwb3NzaWJsZS5cblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLmdldFRyYWNlID0gZnVuY3Rpb24gZ2V0VHJhY2UoIGNhbGxiYWNrICl7XG5cdGlmKCB0aGlzLmRlcHRoID09IDIgKXtcblx0XHR0aGlzLnJlbWluZCggXCJ0cmFjaW5nIGlzIGRpc2FibGVkIGZvciBkZXB0aCAyXCIgKS5wcm9tcHQoICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGNhbGxiYWNrID0gY2FsbGVkLmJpbmQoIHRoaXMgKSggY2FsbGJhY2sgKTtcblxuXHRzbmFwZC5iaW5kKCB0aGlzICkoIGNhbGxiYWNrLCAxMDAwICk7XG5cblx0aWYoIGFzZWEuY2xpZW50ICl7XG5cdFx0aWYoIGNsYXpvZiggdGhpcy5lcnJvciwgRXJyb3IgKSApe1xuXHRcdFx0dHJhY2UuZnJvbUVycm9yKCB0aGlzLmVycm9yIClcblx0XHRcdFx0LnRoZW4oICggZnJhbWVMaXN0ICkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuc3RhY2sgPSBmcmFtZUxpc3Q7XG5cblx0XHRcdFx0XHRjYWxsYmFjayggbnVsbCwgdGhpcy5zdGFjayApO1xuXHRcdFx0XHR9IClcblx0XHRcdFx0LmNhdGNoKCAoIGVycm9yICkgPT4geyBjYWxsYmFjayggdGhpcy5yZW1pbmQoIGVycm9yICkgKTsgfSApO1xuXG5cdFx0fWVsc2UgaWYoIHRoaXMuZGVwdGggPiA1ICl7XG5cdFx0XHR0cmFjZS5nZXQoIClcblx0XHRcdFx0LnRoZW4oICggZnJhbWVMaXN0ICkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuc3RhY2sgPSBmcmFtZUxpc3Q7XG5cblx0XHRcdFx0XHRjYWxsYmFjayggbnVsbCwgdGhpcy5zdGFjayApO1xuXHRcdFx0XHR9IClcblx0XHRcdFx0LmNhdGNoKCAoIGVycm9yICkgPT4geyBjYWxsYmFjayggdGhpcy5yZW1pbmQoIGVycm9yICkgKTsgfSApO1xuXG5cdFx0fWVsc2V7XG5cdFx0XHRjYWxsYmFjayggKTtcblx0XHR9XG5cblx0fWVsc2UgaWYoIGFzZWEuc2VydmVyICl7XG5cdFx0aWYoIGNsYXpvZiggdGhpcy5lcnJvciwgRXJyb3IgKSApe1xuXHRcdFx0dGhpcy5zdGFjayA9IHRyYWNlLnBhcnNlKCB0aGlzLmVycm9yICk7XG5cblx0XHRcdGNhbGxiYWNrKCBudWxsLCB0aGlzLnN0YWNrICk7XG5cblx0XHR9ZWxzZSBpZiggdGhpcy5kZXB0aCA+IDUgKXtcblx0XHRcdHRoaXMuc3RhY2sgPSB0cmFjZS5nZXQoICk7XG5cblx0XHRcdGNhbGxiYWNrKCBudWxsLCB0aGlzLnN0YWNrICk7XG5cblx0XHR9ZWxzZXtcblx0XHRcdGNhbGxiYWNrKCApO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0aGlzO1xufTtcblxuLyo7XG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRTZXRzIGEgcHJvcGVydHkgb2YgdGhpcyBsb2cgZW5naW5lLlxuXG5cdFx0Tm90IGFsbCBwcm9wZXJ0eSBjYW4gYmUgc2V0IHRvIGxpbWl0IHRoaXMgZnVuY3Rpb25cblx0XHRcdGZvciBzZWN1cml0eSBwdXJwb3Nlcy5cblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIHNldCggcHJvcGVydHksIHZhbHVlICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwicHJvcGVydHk6cmVxdWlyZWRcIjogXCJzdHJpbmdcIixcblx0XHRcdFx0XCJ2YWx1ZVwiOiBcIipcIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0bGV0IHBhcmFtZXRlciA9IHJhemUoIGFyZ3VtZW50cyApO1xuXG5cdGlmKCBwYXJhbWV0ZXIubGVuZ3RoID09IDEgJiYgcHJvdHlwZSggcGFyYW1ldGVyWyAwIF0sIE9CSkVDVCApICl7XG5cdFx0bGV0IG9wdGlvbiA9IHBhcmFtZXRlclsgMCBdO1xuXHRcdGZvciggbGV0IHByb3BlcnR5IGluIG9wdGlvbiApe1xuXHRcdFx0dGhpcy5zZXQoIHByb3BlcnR5LCBvcHRpb25bIHByb3BlcnR5IF0gKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGlmKCAhcHJvdHlwZSggcHJvcGVydHksIFNUUklORyApICl7XG5cdFx0dGhpcy5yZXNldCggSXNzdWUsIHRydWUgKVxuXHRcdFx0LnNpbGVuY2UoIClcblx0XHRcdC5wcm9tcHQoIFwiaW52YWxpZCBwcm9wZXJ0eVwiLCBwcm9wZXJ0eSApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRpZiggcHJvdHlwZSggcHJvcGVydHksIFNUUklORyApICYmXG5cdFx0cHJvcGVydHkgIT0gTE9HICAmJlxuXHRcdHByb3BlcnR5ICE9IFNJTEVOVCAmJlxuXHRcdHByb3BlcnR5ICE9IENPTlRFWFQgKVxuXHR7XG5cdFx0dGhpcy5yZXNldCggSXNzdWUsIHRydWUgKVxuXHRcdFx0LnNpbGVuY2UoIClcblx0XHRcdC5wcm9tcHQoIFwiaW52YWxpZCBwcm9wZXJ0eVwiLCBwcm9wZXJ0eSApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHR0aGlzWyBwcm9wZXJ0eSBdID0gdmFsdWU7XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFNlbmQgZGF0YSB0byBzZXJ2ZXIgb3IgY2xpZW50LlxuXHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuT2xpdmFudC5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uIHNlbmQoICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwicmVzcG9uc2VcIjogXCJodHRwLlNlcnZlclJlc3BvbnNlXCIsXG5cdFx0XHRcdFwicHJvY2VkdXJlXCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0aWYoIHRoaXMuZGVwdGggPT0gMiApe1xuXHRcdHRoaXMucmVtaW5kKCBcInNlbmRpbmcgaXMgZGlzYWJsZWQgZm9yIGRlcHRoIDJcIiApLnByb21wdCggKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0bGV0IG1lc3NhZ2UgPSBtZWVrKCB0aGlzLnN0YXR1cywgVTIwMGIoIHRoaXMudG9TdHJpbmcoICkgKS5yYXcoICkgKTtcblxuXHRsZXQgcHJvY2VkdXJlID0gYXJndW1lbnRzWyAwIF07XG5cblx0aWYoIGFzZWEuc2VydmVyICYmXG5cdFx0dGhpcy5zdGF0ZSA9PT0gUkVESVJFQ1QgJiZcblx0XHRwcm90eXBlKCB0aGlzLnBhdGgsIFNUUklORyApICYmXG5cdFx0dHJ1bHkoIHRoaXMucGF0aCApICYmXG5cdFx0Y2xhem9mKCBwcm9jZWR1cmUsIGh0dHAuU2VydmVyUmVzcG9uc2UgKSApXG5cdHtcblx0XHRzZWd3YXkoIHtcblx0XHRcdFwicmVzcG9uc2VcIjogcHJvY2VkdXJlLFxuXHRcdFx0XCJwYXRoXCI6IHRoaXMucGF0aCxcblx0XHRcdFwic3RhdHVzXCI6IHRoaXMuc3RhdHVzLFxuXHRcdFx0XCJkYXRhXCI6IG1lc3NhZ2UsXG5cdFx0fSApO1xuXG5cdFx0dGhpcy5mbHVzaFN0YXRlKCApO1xuXG5cdH1lbHNlIGlmKCBhc2VhLnNlcnZlciAmJlxuXHRcdGZhbHp5KCB0aGlzLnN0YXRlICkgJiZcblx0XHRjbGF6b2YoIHByb2NlZHVyZSwgaHR0cC5TZXJ2ZXJSZXNwb25zZSApIClcblx0e1xuXHRcdG1lc3NhZ2Uuc2VuZCggcHJvY2VkdXJlLCB0aGlzLmNvZGUgKTtcblxuXHR9ZWxzZSBpZiggYXNlYS5jbGllbnQgJiZcblx0XHR0aGlzLnN0YXRlID09IFJFRElSRUNUICYmXG5cdFx0cHJvdHlwZSggdGhpcy5wYXRoLCBTVFJJTkcgKSAmJlxuXHRcdHRydWx5KCB0aGlzLnBhdGggKSApXG5cdHtcblx0XHRzZWd3YXkoIHtcblx0XHRcdFwicGF0aFwiOiB0aGlzLnBhdGgsXG5cdFx0XHRcInN0YXR1c1wiOiB0aGlzLnN0YXR1cyxcblx0XHRcdFwiZGF0YVwiOiBtZXNzYWdlLFxuXHRcdH0gKTtcblxuXHRcdHRoaXMuZmx1c2hTdGF0ZSggKTtcblxuXHR9ZWxzZSBpZiggYXNlYS5jbGllbnQgJiZcblx0XHRmYWx6eSggdGhpcy5zdGF0ZSApICYmXG5cdFx0cHJvdHlwZSggcHJvY2VkdXJlLCBGVU5DVElPTiApIClcblx0e1xuXHRcdG1lc3NhZ2Uuc2VuZC5iaW5kKCB0aGlzICkoIHByb2NlZHVyZSApO1xuXG5cdH1lbHNlIGlmKCB0cnVseSggdGhpcy5zdGF0ZSApICl7XG5cdFx0dGhpcy5yZXNldCggSXNzdWUsIHRydWUgKVxuXHRcdFx0LnNpbGVuY2UoIClcblx0XHRcdC5wcm9tcHQoIGBjYW5ub3QgaW52b2tlIHNlbmRpbmcgc3RhdGUsICR7IHRoaXMuc3RhdGUgfSwgcHJvcGVybHlgIClcblx0XHRcdC5zZW5kKCBwcm9jZWR1cmUgKTtcblxuXHRcdHRoaXMuZmx1c2hTdGF0ZSggKTtcblxuXHR9ZWxzZXtcblx0XHR0aGlzLnJlc2V0KCBJc3N1ZSwgdHJ1ZSApXG5cdFx0XHQuc2lsZW5jZSggKVxuXHRcdFx0LnByb21wdCggXCJjYW5ub3Qgc2VuZCBwcm9wZXJseVwiICk7XG5cdH1cblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qO1xuXHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0U3RyZWFtIGRhdGEgdG8gbGlzdGVuZXJzLlxuXHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuT2xpdmFudC5wcm90b3R5cGUucmVwb3J0ID0gZnVuY3Rpb24gcmVwb3J0KCApe1xuXHRpZiggdGhpcy5kZXB0aCA9PSAyICl7XG5cdFx0dGhpcy5yZW1pbmQoIFwicmVwb3J0aW5nIGlzIGRpc2FibGVkIGZvciBkZXB0aCAyXCIgKS5wcm9tcHQoICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNuYXBkLmJpbmQoIHRoaXMgKVxuXHRcdCggZnVuY3Rpb24gZGVsYXkoICl7XG5cdFx0XHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRcdFx0cHJvY2Vzcy5lbWl0KCB0aGlzLm5hbWUsIHRoaXMgKTtcblxuXHRcdFx0fWVsc2UgaWYoIGFzZWEuY2xpZW50ICl7XG5cdFx0XHRcdGxldCBldmVudCA9IG5ldyBFdmVudCggdGhpcy5uYW1lICk7XG5cdFx0XHRcdGV2ZW50LmRhdGEgPSB0aGlzO1xuXG5cdFx0XHRcdGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoIGV2ZW50ICk7XG5cdFx0XHR9XG5cdFx0fSwgMTAwMCApO1xuXG5cdHJldHVybiB0aGlzO1xufTtcblxuLyo7XG5cdEBpbnRlcm5hbC1tZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRDcnVzaCB0aGUgcGFyYW1ldGVyIGV4dHJhY3Rpbmcgc3RyaW5nIGluZm9ybWF0aW9uLlxuXG5cdFx0U3BlY2lhbCBzdXBwb3J0IGZvciBnbHVjb3NlIGNvYXRlZCBwYXJhbWV0ZXJzLlxuXHRAZW5kLWludGVybmFsLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuY29uc3QgY3J1c2ggPSBmdW5jdGlvbiBjcnVzaCggcGFyYW1ldGVyLCBvcHRpb24gKXtcblx0b3B0aW9uID0gb3B0aW9uIHx8IHRoaXMuaW5zcGVjdCB8fCB7IH07XG5cblx0bGV0IGRlcHRoID0gb3B0aW9uLmRlcHRoIHx8IDE7XG5cdGxldCBsZW5ndGggPSBvcHRpb24ubGVuZ3RoIHx8IDIwMDtcblx0bGV0IHNwYWNlID0gL1xcc3syLH0vZztcblxuXHRpZiggYXNlYS5zZXJ2ZXIgJiYgcHJvdHlwZSggcGFyYW1ldGVyLCBPQkpFQ1QgKSAmJiBwYXJhbWV0ZXIuQ09BVEVEID09PSBDT0FURUQgKXtcblx0XHRpZiggcGFyYW1ldGVyLnNlbGYgKXtcblx0XHRcdHRoaXMuc2V0KCBDT05URVhULCBwYXJhbWV0ZXIuc2VsZiApO1xuXHRcdH1cblxuXHRcdHJldHVybiB1dGlsLmluc3BlY3QoIHBhcmFtZXRlciwgeyBcImRlcHRoXCI6IGRlcHRoIH0gKVxuXHRcdFx0LnJlcGxhY2UoIHNwYWNlLCBcIiBcIiApXG5cdFx0XHQuc3Vic3RyaW5nKCAwLCBsZW5ndGggKSArIFwiLi4uXCI7XG5cblx0fWVsc2UgaWYoIHBhcmFtZXRlciAmJiBjbGF6b2YoIHBhcmFtZXRlciwgRXJyb3IgKSAmJiBwYXJhbWV0ZXIuc3RhY2sgKXtcblx0XHR0aGlzLmVycm9yID0gcGFyYW1ldGVyO1xuXG5cdFx0dGhpcy5nZXRUcmFjZSggKTtcblxuXHRcdHJldHVybiBwYXJhbWV0ZXIuc3RhY2sudG9TdHJpbmcoICk7XG5cblx0fWVsc2UgaWYoIGNsYXpvZiggcGFyYW1ldGVyLCBPbGl2YW50ICkgKXtcblx0XHRyZXR1cm4gcGFyYW1ldGVyLm1lc3NhZ2U7XG5cblx0fWVsc2UgaWYoIHByb3R5cGUoIHBhcmFtZXRlciwgRlVOQ1RJT04gKSApe1xuXHRcdHJldHVybiBwYXJhbWV0ZXIudG9TdHJpbmcoIClcblx0XHRcdC5yZXBsYWNlKCBzcGFjZSwgXCIgXCIgKVxuXHRcdFx0LnN1YnN0cmluZyggMCwgbGVuZ3RoICkgKyBcIi4uLlwiO1xuXG5cdH1lbHNlIGlmKCBwcm90eXBlKCBwYXJhbWV0ZXIsIFNUUklORyApIHx8XG5cdFx0cHJvdHlwZSggcGFyYW1ldGVyLCBOVU1CRVIgKSB8fFxuXHRcdHByb3R5cGUoIHBhcmFtZXRlciwgQk9PTEVBTiApIClcblx0e1xuXHRcdHJldHVybiBwYXJhbWV0ZXIudG9TdHJpbmcoICk7XG5cblx0fWVsc2UgaWYoIGFzZWEuc2VydmVyICl7XG5cdFx0cmV0dXJuIHV0aWwuaW5zcGVjdCggcGFyYW1ldGVyLCB7IFwiZGVwdGhcIjogZGVwdGggfSApXG5cdFx0XHQucmVwbGFjZSggc3BhY2UsIFwiIFwiIClcblx0XHRcdC5zdWJzdHJpbmcoIDAsIGxlbmd0aCApICsgXCIuLi5cIjtcblxuXHR9ZWxzZSBpZiggYXNlYS5jbGllbnQgKXtcblx0XHRyZXR1cm4gcGFyYW1ldGVyLnRvU3RyaW5nKCApO1xuXG5cdH1lbHNle1xuXHRcdHJldHVybiBwYXJhbWV0ZXIudG9TdHJpbmcoICk7XG5cdH1cbn07XG5cbi8qO1xuXHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0QXBwZW5kIG1lc3NhZ2VzIHRvIHRoZSBjdXJyZW50IG1lc3NhZ2UuXG5cdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5PbGl2YW50LnByb3RvdHlwZS5yZW1pbmQgPSBmdW5jdGlvbiByZW1pbmQoICl7XG5cdGxldCBwYXJhbWV0ZXIgPSByYXplKCBhcmd1bWVudHMgKTtcblxuXHRpZiggYXJpZCggcGFyYW1ldGVyICkgKXtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGxldCBwYXJzZSA9IGNydXNoLmJpbmQoIHRoaXMgKTtcblxuXHR0aGlzLm1lc3NhZ2UgPSBVMjAwYiggcGFyYW1ldGVyXG5cdFx0Lm1hcCggZnVuY3Rpb24gb25FYWNoUGFyYW1ldGVyKCBwYXJhbWV0ZXIgKXtcblx0XHRcdGlmKCBkb3VidCggcGFyYW1ldGVyLCBBU19BUlJBWSApICl7XG5cdFx0XHRcdHBhcmFtZXRlciA9IHJhemUoIHBhcmFtZXRlciApXG5cdFx0XHRcdFx0Lm1hcCggKCBwYXJhbWV0ZXIgKSA9PiB7IHJldHVybiBwYXJzZSggcGFyYW1ldGVyICkgfSApO1xuXG5cdFx0XHRcdHJldHVybiBVMjAwYiggcGFyYW1ldGVyXG5cdFx0XHRcdFx0LmZpbHRlciggKCBtZXNzYWdlICkgPT4geyByZXR1cm4gdHJ1bHkoIG1lc3NhZ2UgKTsgfSApIClcblx0XHRcdFx0XHQuam9pbiggXCIsIFwiICk7XG5cblx0XHRcdH1lbHNle1xuXHRcdFx0XHRyZXR1cm4gcGFyc2UoIHBhcmFtZXRlciApO1xuXHRcdFx0fVxuXHRcdH0gKVxuXHRcdC5yZXZlcnNlKCApXG5cdFx0LmNvbmNhdCggWyB0aGlzLm1lc3NhZ2UgXSApXG5cdFx0LmZpbHRlciggKCBtZXNzYWdlICkgPT4geyByZXR1cm4gdHJ1bHkoIG1lc3NhZ2UgKTsgfSApXG5cdFx0LnJldmVyc2UoICkgKVxuXHRcdC5qb2luKCBcIiwgXCIgKTtcblxuXHR0aGlzLnJlcG9ydCggKTtcblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qO1xuXHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0U2lsZW5jZSB0aGUgbG9nZ2luZyBjYXBhYmlsaXRpZXMuXG5cdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5PbGl2YW50LnByb3RvdHlwZS5zaWxlbmNlID0gZnVuY3Rpb24gc2lsZW5jZSggKXtcblx0dGhpcy5zaWxlbnQgPSB0cnVlO1xuXG5cdHJldHVybiB0aGlzO1xufTtcblxuLyo7XG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHREZWFjdGl2YXRlIHNpbGVuY2UuXG5cdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5PbGl2YW50LnByb3RvdHlwZS5zaG91dCA9IGZ1bmN0aW9uIHNob3V0KCApe1xuXHR0aGlzLnNpbGVudCA9IGZhbHNlO1xuXG5cdHJldHVybiB0aGlzO1xufTtcblxuLyo7XG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRMb2cgdGhlIGRhdGEuXG5cdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5PbGl2YW50LnByb3RvdHlwZS5wcm9tcHQgPSBmdW5jdGlvbiBwcm9tcHQoICl7XG5cdHRoaXMucmVtaW5kLmFwcGx5KCB0aGlzLCByYXplKCBhcmd1bWVudHMgKSApO1xuXG5cdHNuYXBkLmJpbmQoIHRoaXMgKVxuXHRcdCggZnVuY3Rpb24gZGVsYXkoICl7XG5cdFx0XHRpZiggdGhpcy5kZXB0aCA9PT0gMiApe1xuXHRcdFx0XHR0aGlzLmxvZyggdGhpcy5nZXRNZXNzYWdlKCApICk7XG5cblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCBkb3VidCggdGhpcy5zdGFjaywgQVJSQVkgKSAmJiBmaWxsZWQoIHRoaXMuc3RhY2sgKSApe1xuXHRcdFx0XHR0aGlzLmxvZyggdGhpcy5nZXRNZXNzYWdlKCApICk7XG5cblx0XHRcdH1lbHNlIGlmKCB0aGlzLmRlcHRoID4gNSApe1xuXHRcdFx0XHR0aGlzLmdldFRyYWNlKCAoIGVycm9yLCBzdGFjayApID0+IHtcblx0XHRcdFx0XHRpZiggY2xhem9mKCBlcnJvciwgRXJyb3IgKSApe1xuXHRcdFx0XHRcdFx0dGhpcy5yZW1pbmQoIGBlcnJvciBnZXR0aW5nIHN0YWNrIHRyYWNlLCAkeyBlcnJvciB9YCApO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmKCB0cnV1KCBzdGFjayApICl7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YWNrID0gc3RhY2s7XG5cblx0XHRcdFx0XHRcdHRoaXMubG9nKCB0aGlzLmdldE1lc3NhZ2UoICkgKTtcblxuXHRcdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdFx0dGhpcy5sb2coIHRoaXMuZ2V0TWVzc2FnZSggKSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSApO1xuXG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0dGhpcy5sb2coIHRoaXMuZ2V0TWVzc2FnZSggKSApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qO1xuXHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0U2V0IHRoZSByZWRpcmVjdGlvbiBjb25maWd1cmF0aW9uLlxuXG5cdFx0VGhpcyB3aWxsIHRyaWdnZXIgcmVkaXJlY3QgcmVzcG9uc2Ugd2hlbiBzZW5kIGlzIGNhbGxlZC5cblxuXHRcdERlZmF1bHQgb2YgREVGQVVMVF9SRURJUkVDVF9QQVRIIHdpbGwgYmUgdXNlZCBpZiBwYXRoIGlzIG5vdCBnaXZlbi5cblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLnJlZGlyZWN0ID0gZnVuY3Rpb24gcmVkaXJlY3QoIHBhdGggKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJwYXRoOnJlcXVpcmVkXCI6IFwic3RyaW5nXCJcblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdHRoaXMuc3RhdGUgPSBSRURJUkVDVDtcblx0dGhpcy5wYXRoID0gcGF0aDtcblxuXHRpZiggZmFsenkoIHRoaXMucGF0aCApICYmXG5cdFx0dHJ1bHkoIERFRkFVTFRfUkVESVJFQ1RfUEFUSCApICYmXG5cdFx0cHJvdHlwZSggREVGQVVMVF9SRURJUkVDVF9QQVRILCBTVFJJTkcgKSApXG5cdHtcblx0XHR0aGlzLnBhdGggPSBERUZBVUxUX1JFRElSRUNUX1BBVEg7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGlmKCAhcHJvdHlwZSggdGhpcy5wYXRoLCBTVFJJTkcgKSApe1xuXHRcdHRoaXMucmVzZXQoIElzc3VlLCB0cnVlIClcblx0XHRcdC5zaWxlbmNlKCApXG5cdFx0XHQucHJvbXB0KCBcImludmFsaWQgcmVkaXJlY3QgcGF0aFwiICk7XG5cblx0fWVsc2UgaWYoIGZhbHp5KCB0aGlzLnBhdGggKSApe1xuXHRcdHRoaXMucmVzZXQoIElzc3VlLCB0cnVlIClcblx0XHRcdC5zaWxlbmNlKCApXG5cdFx0XHQucHJvbXB0KCBcImVtcHR5IHJlZGlyZWN0IHBhdGhcIiApO1xuXHR9XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG5PbGl2YW50LnByb3RvdHlwZS5mbHVzaFN0YXRlID0gZnVuY3Rpb24gZmx1c2hTdGF0ZSggKXtcblx0dGhpcy5zdGF0ZSA9IFwiXCI7XG5cdHRoaXMucGF0aCA9IFwiXCI7XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFBhc3MgdGhlIGluc3RhbmNlIHRvIHRoZSBjYWxsYmFjayBmaXJzdCBwYXJhbWV0ZXIuXG5cblx0XHRUaGlzIGZvbGxvd3MgdGhlIHN0YW5kYXJkIGVycm9yLXJlc3VsdC1vcHRpb24gY29udmVudGlvbi5cblxuXHRcdEhhcyBzcGVjaWFsIHN1cHBvcnQgZm9yIGdsdWNvc2UgY29hdGVkIG9wdGlvbi5cblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLnBhc3MgPSBmdW5jdGlvbiBwYXNzKCBjYWxsYmFjaywgcmVzdWx0LCBvcHRpb24gKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJjYWxsYmFjazpyZXF1aXJlZFwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCAhcHJvdHlwZSggY2FsbGJhY2ssIEZVTkNUSU9OICkgKXtcblx0XHR0aGlzLnJlc2V0KCBCdWcsIHRydWUgKVxuXHRcdFx0LnByb21wdCggXCJpbnZhbGlkIGNhbGxiYWNrXCIgKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0aWYoIHRydXUoIG9wdGlvbiApICYmIHRydXUoIG9wdGlvbi5zZWxmICkgJiYgb3B0aW9uLkNPQVRFRCA9PT0gQ09BVEVEICl7XG5cdFx0dGhpcy5zZXQoIENPTlRFWFQsIG9wdGlvbi5zZWxmICk7XG5cdH1cblxuXHRpZiggdGhpcy5jb250ZXh0ICl7XG5cdFx0Y2FsbGJhY2sgPSBjYWxsZWQuYmluZCggdGhpcy5jb250ZXh0ICkoIGNhbGxiYWNrICk7XG5cblx0fWVsc2V7XG5cdFx0Y2FsbGJhY2sgPSBjYWxsZWQoIGNhbGxiYWNrICk7XG5cdH1cblxuXHRjYWxsYmFjayggdGhpcywgcmVzdWx0LCBvcHRpb24gKTtcblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbmhhcmRlbiggXCJjcmVhdGVcIiwgZnVuY3Rpb24gY3JlYXRlKCBuYW1lLCBvcHRpb24gKXtcblx0bGV0IExvZ0VuZ2luZSA9IGRpYXRvbSggbmFtZSApO1xuXG5cdGhlcmVkaXRvKCBMb2dFbmdpbmUsIE9saXZhbnQgKTtcblxuXHRMb2dFbmdpbmUucHJvdG90eXBlLm5hbWUgPSBvcHRpb24ubmFtZTtcblx0TG9nRW5naW5lLnByb3RvdHlwZS5zdGF0dXMgPSBvcHRpb24uc3RhdHVzO1xuXHRMb2dFbmdpbmUucHJvdG90eXBlLmNvZGUgPSBvcHRpb24uY29kZTtcblx0TG9nRW5naW5lLnByb3RvdHlwZS5zaWxlbnQgPSBvcHRpb24uc2lsZW50O1xuXHRMb2dFbmdpbmUucHJvdG90eXBlLmRlcHRoID0gb3B0aW9uLmRlcHRoO1xuXHRMb2dFbmdpbmUucHJvdG90eXBlLmNvbG9yID0gb3B0aW9uLmNvbG9yO1xuXHRMb2dFbmdpbmUucHJvdG90eXBlLmluc3BlY3QgPSBvcHRpb24uaW5zcGVjdDtcblx0TG9nRW5naW5lLnByb3RvdHlwZS5pbml0aWFsaXplID0gb3B0aW9uLmluaXRpYWxpemUgfHxcblx0XHRmdW5jdGlvbiBpbml0aWFsaXplKCApe1xuXHRcdFx0dGhpcy5uYW1lID0gb3B0aW9uLm5hbWU7XG5cblx0XHRcdHRoaXMuc3RhdHVzID0gb3B0aW9uLnN0YXR1cztcblxuXHRcdFx0dGhpcy5jb2RlID0gb3B0aW9uLmNvZGU7XG5cblx0XHRcdHRoaXMuc2lsZW50ID0gb3B0aW9uLnNpbGVudDtcblxuXHRcdFx0dGhpcy5kZXB0aCA9IG9wdGlvbi5kZXB0aDtcblx0XHR9O1xuXG5cdHN5bWJpb3RlKCBMb2dFbmdpbmUgKTtcblxuXHRoYXJkZW4oIExvZ0VuZ2luZS5uYW1lLCBMb2dFbmdpbmUgKTtcbn0sIE9saXZhbnQgKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPbGl2YW50O1xuIl19
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9saXZhbnQuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhcmlkIiwicmVxdWlyZSIsImFzZWEiLCJidWRnZSIsImNhbGxlZCIsImNsYXpvZiIsImRpYXRvbSIsImRvdWJ0IiwiRXRoZXJuaXR5IiwiZmFsemUiLCJmYWx6eSIsImZpbGxlZCIsImdsdWNvc2UiLCJoYXJkZW4iLCJoZXJlZGl0byIsImtlaW4iLCJtZWVrIiwib3V0cmUiLCJwbG91Z2giLCJwcm90eXBlIiwicmF6ZSIsInNuYXBkIiwic3ltYmlvdGUiLCJ0cnVseSIsInRydXUiLCJVMjAwYiIsInRyYWNlIiwid2luZG93IiwiREVGQVVMVF9SRURJUkVDVF9QQVRIIiwiT2xpdmFudCIsIkRFRkFVTFRfSU5TUEVDVF9PUFRJT04iLCJERUZBVUxUX0xPR19FTkdJTkUiLCJjbGllbnQiLCJjb25zb2xlIiwiZGVidWciLCJsb2ciLCJwcm90b3R5cGUiLCJpbml0aWFsaXplIiwib3B0aW9uIiwiZHVyYXRpb24iLCJEYXRlIiwibm93IiwiYXJndW1lbnRzIiwiT0JKRUNUIiwiQVJHVU1FTlRTIiwiRXJyb3IiLCJDT0FURUQiLCJsb2FkIiwibGV0IiwicGFyYW1ldGVyIiwibGVuZ3RoIiwiZXJyb3IiLCJyZW1pbmQiLCJhcHBseSIsIm1lc3NhZ2UiLCJjb25jYXQiLCJTVFJJTkciLCJjb25zdHJ1Y3RvciIsIkZVTkNUSU9OIiwibmFtZSIsImJpbmQiLCJFQ0hPIiwic3RhdHVzIiwiY29kZSIsIkVDSE9fQ09ERSIsImNvbnRleHQiLCJzZWxmIiwic2lsZW50IiwiQk9PTEVBTiIsImRlcHRoIiwiTlVNQkVSIiwic2VydmVyIiwiY29sb3IiLCJjaGFsayIsIndoaXRlIiwic3RhdGUiLCJzdGFjayIsImluc3BlY3QiLCJyZWRzZWEiLCJJc3N1ZSIsImJsYWNrc2VhIiwiRmF0YWwiLCJibHVlc2VhIiwicmVzZXQiLCJyZW5ldyIsImxvZ0VuZ2luZSIsImRhdGEiLCJzaWxlbmNlIiwicHJvbXB0IiwidG9TdHJpbmciLCJqb2luIiwidmFsdWVPZiIsImdldFRpbWVzdGFtcCIsInRpbWVzdGFtcCIsInByaW50VGltZSIsImRpbSIsImNvbG9yTWVzc2FnZSIsInJlc29sdmVNZXNzYWdlIiwiZmlsdGVyIiwicmVzb2x2ZVRyYWNlIiwiQVJSQVkiLCJtYXAiLCJmcmFtZSIsImZ1bmN0aW9uTmFtZSIsImZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsInRyaW0iLCJyZWQiLCJnZXRNZXNzYWdlIiwiZ2V0VHJhY2UiLCJjYWxsYmFjayIsImZyb21FcnJvciIsInRoZW4iLCJmcmFtZUxpc3QiLCJjYXRjaCIsImdldCIsInBhcnNlIiwic2V0IiwicHJvcGVydHkiLCJ2YWx1ZSIsIkxPRyIsIlNJTEVOVCIsIkNPTlRFWFQiLCJzZW5kIiwicmF3IiwicHJvY2VkdXJlIiwiUkVESVJFQ1QiLCJwYXRoIiwiaHR0cCIsIlNlcnZlclJlc3BvbnNlIiwic2Vnd2F5IiwiZmx1c2hTdGF0ZSIsInJlcG9ydCIsImRlbGF5IiwicHJvY2VzcyIsImVtaXQiLCJldmVudCIsIkV2ZW50IiwiZG9jdW1lbnQiLCJkaXNwYXRjaEV2ZW50IiwiY3J1c2giLCJzcGFjZSIsInV0aWwiLCJyZXBsYWNlIiwic3Vic3RyaW5nIiwib25FYWNoUGFyYW1ldGVyIiwiQVNfQVJSQVkiLCJyZXZlcnNlIiwic2hvdXQiLCJyZWRpcmVjdCIsInBhc3MiLCJyZXN1bHQiLCJCdWciLCJjcmVhdGUiLCJMb2dFbmdpbmUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzRkEsSUFBTUEsT0FBT0MsUUFBUyxNQUFUQSxDQUFiO0FBQ0EsSUFBTUMsT0FBT0QsUUFBUyxNQUFUQSxDQUFiO0FBQ0EsSUFBTUUsUUFBUUYsUUFBUyxPQUFUQSxDQUFkO0FBQ0EsSUFBTUcsU0FB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ckgsT0FBT3lCLElBQWxDNEY7QUFDQUEsV0FBVXZILFNBQVZ1SCxDQUFvQnhGLE1BQXBCd0YsR0FBNkJySCxPQUFPNkIsTUFBcEN3RjtBQUNBQSxXQUFVdkgsU0FBVnVILENBQW9CdEYsS0FBcEJzRixHQUE0QnJILE9BQU8rQixLQUFuQ3NGO0FBQ0FBLFdBQVV2SCxTQUFWdUgsQ0FBb0JuRixLQUFwQm1GLEdBQTRCckgsT0FBT2tDLEtBQW5DbUY7QUFDQUEsV0FBVXZILFNBQVZ1SCxDQUFvQjlFLE9BQXBCOEUsR0FBOEJySCxPQUFPdUMsT0FBckM4RTtBQUNBQSxXQUFVdkgsU0FBVnVILENBQW9CdEgsVUFBcEJzSCxHQUFpQ3JILE9BQU9ELFVBQVBDO0FBQ2hDLFVBQVNELFVBQVQsR0FBc0I7QUFDckIsT0FBS3NCLElBQUwsR0FBWXJCLE9BQU9xQixJQUFuQjs7QUFFQSxPQUFLRyxNQUFMLEdBQWN4QixPQUFPd0IsTUFBckI7O0FBRUEsT0FBS0MsSUFBTCxHQUFZekIsT0FBT3lCLElBQW5COztBQUVBLE9BQUtJLE1BQUwsR0FBYzdCLE9BQU82QixNQUFyQjs7QUFFQSxPQUFLRSxLQUFMLEdBQWEvQixPQUFPK0IsS0FBcEI7QUFDQSxFQVhGc0Y7O0FBYUFySSxVQUFVcUksU0FBVnJJOztBQUVBVCxRQUFROEksVUFBVWhHLElBQWxCOUMsRUFBd0I4SSxTQUF4QjlJO0FBQ0EsQ0E1QkRBLEVBNEJHZ0IsT0E1QkhoQjs7QUE4QkErSSxPQUFPQyxPQUFQRCxHQUFpQi9ILE9BQWpCK0giLCJmaWxlIjoib2xpdmFudC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJvbGl2YW50XCIsXG5cdFx0XHRcInBhdGhcIjogXCJvbGl2YW50L29saXZhbnQuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcIm9saXZhbnQuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwib2xpdmFudFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL29saXZhbnQuZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJvbGl2YW50LXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWUsXG5cdFx0XHRcImNsYXNzXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0RWNobyB0aGUgZGVzdHJ1Y3Rpb24gY2F1c2VkIGJ5IHlvdXIgY29kZS5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXJpZFwiOiBcImFyaWRcIixcblx0XHRcdFwiYXNlYVwiOiBcImFzZWFcIixcblx0XHRcdFwiYnVkZ2VcIjogXCJidWRnZVwiLFxuXHRcdFx0XCJibGFja3NlYVwiOiBcImJsYWNrc2VhXCIsXG5cdFx0XHRcImNhbGxlZFwiOiBcImNhbGxlZFwiLFxuXHRcdFx0XCJjaGFsa1wiOiBcImNoYWxrXCIsXG5cdFx0XHRcImNsYXpvZlwiOiBcImNsYXpvZlwiLFxuXHRcdFx0XCJkZXhpc3RcIjogXCJkZXhpc3RcIixcblx0XHRcdFwiZGlhdG9tXCI6IFwiZGlhdG9tXCIsXG5cdFx0XHRcIkV0aGVybml0eVwiOiBcImV0aGVybml0eVwiLFxuXHRcdFx0XCJFdmVudEVtaXR0ZXJcIjogXCJldmVudHNcIixcblx0XHRcdFwiZmFsemVcIjogXCJmYWx6ZVwiLFxuXHRcdFx0XCJmYWx6eVwiOiBcImZhbHp5XCIsXG5cdFx0XHRcImdsdWNvc2VcIjogXCJnbHVjb3NlXCIsXG5cdFx0XHRcImhhcmRlblwiOiBcImhhcmRlblwiLFxuXHRcdFx0XCJoZXJlZGl0b1wiOiBcImhlcmVkaXRvXCIsXG5cdFx0XHRcImtlaW5cIjogXCJrZWluXCIsXG5cdFx0XHRcImh0dHBcIjogXCJodHRwXCIsXG5cdFx0XHRcIm1lZWtcIjogXCJtZWVrXCJcblx0XHRcdFwib3V0cmVcIjogXCJvdXRyZVwiLFxuXHRcdFx0XCJwbG91Z2hcIjogXCJwbG91Z2hcIixcblx0XHRcdFwicHJvdHlwZVwiOiBcInByb3R5cGVcIixcblx0XHRcdFwicmF6ZVwiOiBcInJhemVcIixcblx0XHRcdFwicmVkc2VhXCI6IFwicmVkc2VhXCIsXG5cdFx0XHRcInNuYXBkXCI6IFwic25hcGRcIixcblx0XHRcdFwic2Vnd2F5XCI6IFwic2Vnd2F5XCIsXG5cdFx0XHRcInN5bWJpb3RlXCI6IFwic3ltYmlvdGVcIixcblx0XHRcdFwidHJhY2VcIjogWyBcInN0YWNrdHJhY2UtanNcIiwgXCJzdGFjay10cmFjZVwiIF0sXG5cdFx0XHRcInRydWx5XCI6IFwidHJ1bHlcIixcblx0XHRcdFwidHJ1dVwiOiBcInRydXVcIixcblx0XHRcdFwiVTIwMGJcIjogXCJ1MjAwYlwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFyaWQgPSByZXF1aXJlKCBcImFyaWRcIiApO1xuY29uc3QgYXNlYSA9IHJlcXVpcmUoIFwiYXNlYVwiICk7XG5jb25zdCBidWRnZSA9IHJlcXVpcmUoIFwiYnVkZ2VcIiApO1xuY29uc3QgY2FsbGVkID0gcmVxdWlyZSggXCJjYWxsZWRcIiApO1xuY29uc3QgY2xhem9mID0gcmVxdWlyZSggXCJjbGF6b2ZcIiApO1xuY29uc3QgZGlhdG9tID0gcmVxdWlyZSggXCJkaWF0b21cIiApO1xuY29uc3QgZG91YnQgPSByZXF1aXJlKCBcImRvdWJ0XCIgKTtcbmNvbnN0IEV0aGVybml0eSA9IHJlcXVpcmUoIFwiZXRoZXJuaXR5XCIgKTtcbmNvbnN0IGZhbHplID0gcmVxdWlyZSggXCJmYWx6ZVwiICk7XG5jb25zdCBmYWx6eSA9IHJlcXVpcmUoIFwiZmFsenlcIiApO1xuY29uc3QgZmlsbGVkID0gcmVxdWlyZSggXCJmaWxsZWRcIiApO1xuY29uc3QgZ2x1Y29zZSA9IHJlcXVpcmUoIFwiZ2x1Y29zZVwiICk7XG5jb25zdCBoYXJkZW4gPSByZXF1aXJlKCBcImhhcmRlblwiICk7XG5jb25zdCBoZXJlZGl0byA9IHJlcXVpcmUoIFwiaGVyZWRpdG9cIiApO1xuY29uc3Qga2VpbiA9IHJlcXVpcmUoIFwia2VpblwiICk7XG5jb25zdCBtZWVrID0gcmVxdWlyZSggXCJtZWVrXCIgKTtcbmNvbnN0IG91dHJlID0gcmVxdWlyZSggXCJvdXRyZVwiICk7XG5jb25zdCBwbG91Z2ggPSByZXF1aXJlKCBcInBsb3VnaFwiICk7XG5jb25zdCBwcm90eXBlID0gcmVxdWlyZSggXCJwcm90eXBlXCIgKTtcbmNvbnN0IHJhemUgPSByZXF1aXJlKCBcInJhemVcIiApO1xuY29uc3Qgc25hcGQgPSByZXF1aXJlKCBcInNuYXBkXCIgKTtcbmNvbnN0IHN5bWJpb3RlID0gcmVxdWlyZSggXCJzeW1iaW90ZVwiICk7XG5jb25zdCB0cnVseSA9IHJlcXVpcmUoIFwidHJ1bHlcIiApO1xuY29uc3QgdHJ1dSA9IHJlcXVpcmUoIFwidHJ1dVwiICk7XG5jb25zdCBVMjAwYiA9IHJlcXVpcmUoIFwidTIwMGJcIiApO1xuXG4vLzogQGNsaWVudDpcbmNvbnN0IHRyYWNlID0gcmVxdWlyZSggXCJzdGFja3RyYWNlLWpzXCIgKTtcbmhhcmRlbiggXCJERUZBVUxUX1JFRElSRUNUX1BBVEhcIiwgd2luZG93LkRFRkFVTFRfUkVESVJFQ1RfUEFUSCB8fCBcIi92aWV3L3N0YXR1cy9wYWdlXCIgKTtcbi8vOiBAZW5kLWNsaWVudFxuXG5cblxuY29uc3QgT2xpdmFudCA9IGRpYXRvbSggXCJPbGl2YW50XCIgKTtcblxuY29uc3QgREVGQVVMVF9JTlNQRUNUX09QVElPTiA9IHsgXCJkZXB0aFwiOiAxLCBcImxlbmd0aFwiOiAyMDAgfTtcbmNvbnN0IERFRkFVTFRfTE9HX0VOR0lORSA9IGFzZWEuY2xpZW50PyBjb25zb2xlLmRlYnVnIDogY29uc29sZS5sb2c7XG5cbi8qO1xuXHRAbm90ZTpcblx0XHRUaGlzIGlzIHRoZSBkZWZhdWx0IG5hbWUvc3RhdHVzIGFuZCBjb2RlIG9mIHRoZSBvbGl2YW50LlxuXHRAZW5kLW5vdGVcbiovXG5oYXJkZW4oIFwiRUNIT1wiLCBcImVjaG9cIiApO1xuaGFyZGVuKCBcIkVDSE9fQ09ERVwiLCAyMDAgKTtcblxuaGFyZGVuKCBcIlJFRElSRUNUXCIsIFwicmVkaXJlY3RcIiApO1xuaGFyZGVuKCBcIkNPTlRFWFRcIiwgXCJjb250ZXh0XCIgKTtcbmhhcmRlbiggXCJMT0dcIiwgXCJsb2dcIiApO1xuaGFyZGVuKCBcIlNJTEVOVFwiLCBcInNpbGVudFwiICk7XG5cbi8qO1xuXHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0T3B0aW9uIHNob3VsZCBub3QgYmUgZ2x1Y29zZSBjb2F0ZWQuXG5cdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5PbGl2YW50LnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gaW5pdGlhbGl6ZSggb3B0aW9uICl7XG5cdHRoaXMuZHVyYXRpb24gPSBEYXRlLm5vdyggKTtcblxuXHRpZiggcHJvdHlwZSggYXJndW1lbnRzWyAwIF0sIE9CSkVDVCApICYmXG5cdFx0IWRvdWJ0KCBhcmd1bWVudHNbIDAgXSwgQVJHVU1FTlRTICkgJiZcblx0XHQhKCBjbGF6b2YoIGFyZ3VtZW50c1sgMCBdLCBFcnJvciApICkgJiZcblx0XHRvcHRpb24uQ09BVEVEICE9PSBDT0FURUQgKVxuXHR7XG5cdFx0dGhpcy5sb2FkKCBvcHRpb24gKTtcblxuXHR9ZWxzZXtcblx0XHR0aGlzLmxvYWQoICk7XG5cdH1cblxuXHRsZXQgcGFyYW1ldGVyID0gYXJndW1lbnRzWyAwIF07XG5cblx0aWYoIGFyZ3VtZW50cy5sZW5ndGggPT0gMCApe1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH1lbHNlIGlmKCBjbGF6b2YoIHBhcmFtZXRlciwgRXJyb3IgKSApe1xuXHRcdGxldCBlcnJvciA9IHBhcmFtZXRlcjtcblxuXHRcdHRoaXMucmVtaW5kLmFwcGx5KCB0aGlzLCBbIGVycm9yLm1lc3NhZ2UsIGVycm9yIF0uY29uY2F0KCBidWRnZSggYXJndW1lbnRzICkgKSApO1xuXG5cdH1lbHNlIGlmKCBjbGF6b2YoIHBhcmFtZXRlciwgT2xpdmFudCApICl7XG5cdFx0dGhpcy5sb2FkKCBwYXJhbWV0ZXIgKTtcblxuXHR9ZWxzZSBpZiggZG91YnQoIHBhcmFtZXRlciwgQVJHVU1FTlRTICkgKXtcblx0XHR0aGlzLnJlbWluZC5hcHBseSggdGhpcywgcGxvdWdoKCBwYXJhbWV0ZXIgKSApO1xuXG5cdH1lbHNlIGlmKCBwcm90eXBlKCBwYXJhbWV0ZXIsIFNUUklORyApICl7XG5cdFx0dGhpcy5yZW1pbmQuYXBwbHkoIHRoaXMsIHJhemUoIGFyZ3VtZW50cyApICk7XG5cblx0fWVsc2UgaWYoIHByb3R5cGUoIHBhcmFtZXRlciwgT0JKRUNUICkgJiZcblx0XHRwYXJhbWV0ZXIuY29uc3RydWN0b3IgJiZcblx0XHRwcm90eXBlKCBwYXJhbWV0ZXIuY29uc3RydWN0b3IsIEZVTkNUSU9OICkgJiZcblx0XHRwYXJhbWV0ZXIuY29uc3RydWN0b3IubmFtZSAhPSBcIkZ1bmN0aW9uXCIgJiZcblx0XHRjbGF6b2YoIHBhcmFtZXRlciwgcGFyYW1ldGVyLmNvbnN0cnVjdG9yICkgKVxuXHR7XG5cdFx0dGhpcy5sb2FkKCBwYXJhbWV0ZXIgKTtcblxuXHRcdHRoaXMucmVtaW5kLmFwcGx5KCB0aGlzLCByYXplKCBhcmd1bWVudHMgKSApO1xuXG5cdH1lbHNlIGlmKCBwcm90eXBlKCBwYXJhbWV0ZXIsIE9CSkVDVCApICl7XG5cdFx0dGhpcy5yZW1pbmQuYXBwbHkoIHRoaXMsIHJhemUoIGFyZ3VtZW50cyApICk7XG5cdH1cblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbk9saXZhbnQucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbiBsb2FkKCBvcHRpb24gKXtcblx0b3B0aW9uID0gZ2x1Y29zZS5iaW5kKCB0aGlzICkoIG9wdGlvbiApO1xuXG5cdHRoaXMubmFtZSA9IG9wdGlvbi5uYW1lIHx8IHRoaXMubmFtZSB8fCBFQ0hPXG5cblx0dGhpcy5zdGF0dXMgPSBvcHRpb24uc3RhdHVzIHx8IHRoaXMuc3RhdHVzIHx8IEVDSE87XG5cblx0dGhpcy5jb2RlID0gb3B0aW9uLmNvZGUgfHwgdGhpcy5jb2RlIHx8IEVDSE9fQ09ERTtcblxuXHR0aGlzLmxvZyA9IG9wdGlvbi5sb2cgfHwgdGhpcy5sb2cgfHwgREVGQVVMVF9MT0dfRU5HSU5FO1xuXG5cdGlmKCBmYWx6ZSggdGhpcy5jb250ZXh0ICkgJiYgdHJ1dSggb3B0aW9uLnNlbGYgKSApe1xuXHRcdHRoaXMuY29udGV4dCA9IG9wdGlvbi5zZWxmO1xuXHR9XG5cblx0dGhpcy5zaWxlbnQgPSBrZWluKCBvcHRpb24sIFwic2lsZW50XCIgKT8gb3B0aW9uLnNpbGVudCA6XG5cdFx0a2VpbiggdGhpcywgXCJzaWxlbnRcIiApPyB0aGlzLnNpbGVudCA6IHRydWU7XG5cblx0aWYoICFwcm90eXBlKCB0aGlzLnNpbGVudCwgQk9PTEVBTiApICl7XG5cdFx0dGhpcy5zaWxlbnQgPSB0cnVlO1xuXHR9XG5cblx0Ly86IERlcHRoIGRpY3RhdGVzIHJlZmluZWQgc2V0dGluZ3Mgb2YgdGhpcyBwcm9jZWR1cmUuXG5cdHRoaXMuZGVwdGggPSBrZWluKCBvcHRpb24sIFwiZGVwdGhcIiApPyBvcHRpb24uZGVwdGggOlxuXHRcdGtlaW4oIHRoaXMsIFwiZGVwdGhcIiApPyB0aGlzLmRlcHRoIDogMTtcblxuXHRpZiggIXByb3R5cGUoIHRoaXMuZGVwdGgsIE5VTUJFUiApICl7XG5cdFx0dGhpcy5kZXB0aCA9IDE7XG5cdH1cblxuXHQvLzogRGVwdGggaXMgb25seSBmcm9tIDEtMCBvciAxLTIzNDUtNjc4OS0wLlxuXHQvLzogRGVwdGggMiBpcyBkZWVwIHNpbGVudCBkZXB0aC5cblx0dGhpcy5kZXB0aCA9IHRoaXMuZGVwdGggJSAxMDtcblxuXHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHR0aGlzLmNvbG9yID0gb3B0aW9uLmNvbG9yIHx8IHRoaXMuY29sb3IgfHwgY2hhbGsud2hpdGU7XG5cdH1cblxuXHR0aGlzLnN0YXRlID0gXCJcIjtcblxuXHR0aGlzLnN0YWNrID0gb3B0aW9uLnN0YWNrIHx8IHRoaXMuc3RhY2sgfHwgWyBdO1xuXG5cdHRoaXMubWVzc2FnZSA9IG9wdGlvbi5tZXNzYWdlIHx8IHRoaXMubWVzc2FnZSB8fCBcIlwiO1xuXG5cdHRoaXMuaW5zcGVjdCA9IG9wdGlvbi5pbnNwZWN0IHx8IHRoaXMuaW5zcGVjdCB8fCBERUZBVUxUX0lOU1BFQ1RfT1BUSU9OO1xuXG5cdC8qO1xuXHRcdEBub3RlOlxuXHRcdFx0VGhlc2UgYXJlIGF1dG9tYXRpY2UgY29udGluZ2VuY3kgaGFuZGxlcnMuXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdHJlZHNlYSggSXNzdWUgKTtcblxuXHRcdGJsYWNrc2VhKCBGYXRhbCApO1xuXG5cdFx0Ymx1ZXNlYSggRmF0YWwgKTtcblx0fVxuXG5cdHJldHVybiB0aGlzO1xufTtcblxuLyo7XG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRNb2RpZmllcyB0aGUgbG9nIGVuZ2luZSB3aGlsZSBtYWludGFpbmluZyBlbnZpcm9ubWVudCBwcm9wZXJ0aWVzLlxuXHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuT2xpdmFudC5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiByZXNldCggb3B0aW9uLCByZW5ldyApe1xuXHRpZiggcHJvdHlwZSggb3B0aW9uLCBGVU5DVElPTiApICYmIGNsYXpvZiggb3B0aW9uLCBPbGl2YW50ICkgKXtcblx0XHRsZXQgbG9nRW5naW5lID0gb3B0aW9uO1xuXG5cdFx0aWYoIHByb3R5cGUoIHJlbmV3LCBCT09MRUFOICkgJiYgcmVuZXcgKXtcblx0XHRcdGxldCBkYXRhID0ge1xuXHRcdFx0XHRcIm1lc3NhZ2VcIjogdGhpcy5tZXNzYWdlLFxuXHRcdFx0XHRcInN0YWNrXCI6IHRoaXMuc3RhY2tcblx0XHRcdH07XG5cblx0XHRcdHJldHVybiBsb2dFbmdpbmUoIGRhdGEgKTtcblxuXHRcdH1lbHNle1xuXHRcdFx0dGhpcy5sb2FkKCBsb2dFbmdpbmUucHJvdG90eXBlICk7XG5cdFx0fVxuXG5cdH1lbHNlIGlmKCBwcm90eXBlKCBvcHRpb24sIE9CSkVDVCApICl7XG5cdFx0dGhpcy5sb2FkKCBvcHRpb24gKTtcblxuXHR9ZWxzZSBpZiggIWNsYXpvZiggb3B0aW9uLCBJc3N1ZSApICl7XG5cdFx0dGhpcy5yZXNldCggSXNzdWUsIHRydWUgKVxuXHRcdFx0LnNpbGVuY2UoIClcblx0XHRcdC5wcm9tcHQoIFwiY2Fubm90IHJlc2V0IHRvIGdpdmVuIG9wdGlvblwiLCBvcHRpb24gKTtcblxuXHR9ZWxzZXtcblx0XHRJc3N1ZSggXCJjYW5ub3QgcmVzZXQgbG9nXCIsIG9wdGlvbiwgdGhpcyApLnNpbGVuY2UoICkucHJvbXB0KCApO1xuXHR9XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG5PbGl2YW50LnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCApe1xuXHRyZXR1cm4gVTIwMGIoIG91dHJlKCBbIHRoaXMubmFtZSwgdGhpcy5zdGF0dXMsIHRoaXMubWVzc2FnZSBdICkgKS5qb2luKCBcIiwgXCIgKTtcbn07XG5cbk9saXZhbnQucHJvdG90eXBlLnZhbHVlT2YgPSBmdW5jdGlvbiB2YWx1ZU9mKCApe1xuXHRyZXR1cm4gVTIwMGIoIG91dHJlKCBbIHRoaXMubmFtZSwgdGhpcy5zdGF0dXMsIHRoaXMubWVzc2FnZSBdICkgKS5qb2luKCBcIiwgXCIgKTtcbn07XG5cbk9saXZhbnQucHJvdG90eXBlLmdldFRpbWVzdGFtcCA9IGZ1bmN0aW9uIGdldFRpbWVzdGFtcCggKXtcblx0bGV0IHRpbWVzdGFtcCA9IEV0aGVybml0eSggKS5wcmludFRpbWUoIHRydWUgKTtcblxuXHR0aW1lc3RhbXAgPSBgJHsgdGltZXN0YW1wIH0gfCAkeyAoIERhdGUubm93KCApIC0gdGhpcy5kdXJhdGlvbiApIH1tc2A7XG5cblx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0cmV0dXJuIGNoYWxrLmRpbSggdGltZXN0YW1wICk7XG5cdH1cblxuXHRyZXR1cm4gdGltZXN0YW1wO1xufTtcblxuT2xpdmFudC5wcm90b3R5cGUuY29sb3JNZXNzYWdlID0gZnVuY3Rpb24gY29sb3JNZXNzYWdlKCBjb2xvciwgbWVzc2FnZSApe1xuXHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRpZiggcHJvdHlwZSggY29sb3IsIEZVTkNUSU9OICkgKXtcblx0XHRcdHJldHVybiBjb2xvciggbWVzc2FnZSApO1xuXG5cdFx0fWVsc2UgaWYoIHByb3R5cGUoIGNvbG9yLCBTVFJJTkcgKSAmJiB0cnVseSggY29sb3IgKSApe1xuXHRcdFx0aWYoIGtlaW4oIGNoYWxrLCBjb2xvciApICYmIHByb3R5cGUoIGNoYWxrWyBjb2xvciBdLCBGVU5DVElPTiApICl7XG5cdFx0XHRcdHJldHVybiBjaGFsa1sgY29sb3IgXSggbWVzc2FnZSApO1xuXG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0dGhpcy5yZW1pbmQoIGBpbnZhbGlkIG1lc3NhZ2UgY29sb3IsICR7IGNvbG9yIH1gICk7XG5cblx0XHRcdFx0cmV0dXJuIGNoYWxrLndoaXRlKCBtZXNzYWdlICk7XG5cdFx0XHR9XG5cblx0XHR9ZWxzZXtcblx0XHRcdHJldHVybiBjaGFsay53aGl0ZSggbWVzc2FnZSApO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBtZXNzYWdlO1xufTtcblxuLyo7XG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRUaGUgbWVzc2FnZSBpcyBkaXZpZGVkIGludG8gdGhyZWUgcGFydHMsXG5cdFx0MS4gbmFtZXNwYWNlLFxuXHRcdDIuIHN0YXR1cyxcblx0XHQzLiBhY3R1YWwgbWVzc2FnZVxuXHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuT2xpdmFudC5wcm90b3R5cGUucmVzb2x2ZU1lc3NhZ2UgPSBmdW5jdGlvbiByZXNvbHZlTWVzc2FnZSggKXtcblx0bGV0IG1lc3NhZ2UgPSBVMjAwYiggb3V0cmUoIFsgdGhpcy5uYW1lLCB0aGlzLnN0YXR1cywgdGhpcy5tZXNzYWdlIF0gKVxuXHRcdC5maWx0ZXIoIHRydWx5ICkgKS5qb2luKCBcIiwgXCIgKTtcblxuXHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRyZXR1cm4gdGhpcy5jb2xvck1lc3NhZ2UoIHRoaXMuY29sb3IsIG1lc3NhZ2UgKTtcblx0fVxuXG5cdHJldHVybiBtZXNzYWdlO1xufTtcblxuT2xpdmFudC5wcm90b3R5cGUucmVzb2x2ZVRyYWNlID0gZnVuY3Rpb24gcmVzb2x2ZVRyYWNlKCApe1xuXHRsZXQgc3RhY2sgPSBcInN0YWNrIHRyYWNlIG5vdCBhdmFpbGFibGVcIjtcblxuXHRpZiggIXRoaXMuc2lsZW50ICYmIGRvdWJ0KCB0aGlzLnN0YWNrLCBBUlJBWSApICYmIGZpbGxlZCggdGhpcy5zdGFjayApICl7XG5cdFx0c3RhY2sgPSB0aGlzLnN0YWNrO1xuXG5cdFx0c3RhY2sgPSBzdGFjay5tYXAoICggZnJhbWUgKSA9PiB7XG5cdFx0XHRpZiggZnJhbWUudG9TdHJpbmcoICkgPT09IFwiW29iamVjdCBPYmplY3RdXCIgKXtcblx0XHRcdFx0bGV0IHsgZnVuY3Rpb25OYW1lLCBmaWxlTmFtZSwgbGluZU51bWJlciwgY29sdW1uTnVtYmVyIH0gPSBmcmFtZTtcblxuXHRcdFx0XHRyZXR1cm4gYCR7IGZ1bmN0aW9uTmFtZSB9ICgkeyBmaWxlTmFtZSB9OiR7IGxpbmVOdW1iZXIgfTokeyBjb2x1bW5OdW1iZXIgfSlgLnRyaW0oICk7XG5cblx0XHRcdH1lbHNle1xuXHRcdFx0XHRyZXR1cm4gZnJhbWUudG9TdHJpbmcoICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdFx0c3RhY2sgPSBVMjAwYiggc3RhY2sgKS5qb2luKCBcIlxcblwiICk7XG5cblx0XHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRcdHJldHVybiBjaGFsay5kaW0ucmVkKCBzdGFjayApO1xuXHRcdH1cblxuXHRcdHJldHVybiBzdGFjaztcblx0fVxuXG5cdGlmKCB0aGlzLmRlcHRoIDwgNSAmJlxuXHRcdHRoaXMuc2lsZW50ICYmXG5cdFx0dHJ1dSggdGhpcy5jb250ZXh0ICkgJiZcblx0IFx0cHJvdHlwZSggdGhpcy5jb250ZXh0LmNvbnN0cnVjdG9yLCBGVU5DVElPTiApICYmXG5cdFx0dHJ1bHkoIHRoaXMuY29udGV4dC5jb25zdHJ1Y3Rvci5uYW1lICkgKVxuXHR7XG5cdFx0c3RhY2sgPSBgY2FsbGVkIHdpdGggY29udGV4dCwgJHsgdGhpcy5jb250ZXh0LmNvbnN0cnVjdG9yLm5hbWUgfWA7XG5cblx0XHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRcdHJldHVybiBjaGFsay5kaW0oIHN0YWNrICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHN0YWNrO1xuXHR9XG5cblx0aWYoIHRoaXMuc2lsZW50ICl7XG5cdFx0c3RhY2sgPSBcInN0YWNrIHRyYWNlIGlzIG5vdCBhdmFpbGFibGUgb24gc2lsZW50IG1vZGVcIjtcblxuXHRcdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdFx0cmV0dXJuIGNoYWxrLmRpbSggc3RhY2sgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc3RhY2s7XG5cdH1cblxuXHRpZiggdGhpcy5kZXB0aCA+IDUgKXtcblx0XHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRcdHJldHVybiBjaGFsay5kaW0oIHN0YWNrICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHN0YWNrO1xuXHR9XG59O1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFRoZSBtZXNzYWdlIGNvbnNpc3Qgb2YgdGhyZWUgbGF5ZXIgb2Ygc3RyaW5ncyxcblx0XHRcdDEuIHRpbWVzdGFtcCBpbiB0cnVlIHRpbWUgZm9ybWF0XG5cdFx0XHQyLiBhY3R1YWwgcmVhZGFibGUgbWVzc2FnZVxuXHRcdFx0My4gbWVzc2FnZSB0cmFjZSBvciBtZXNzYWdlIGNvbnRleHRcblxuXHRcdFRoZXNlIGluZm9ybWF0aW9uIHdpbGwgYmUgZGl2aWRlZCB0aHJvdWdoIHplcm8td2lkdGggc3BhY2UgY29udmVudGlvbi5cblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLmdldE1lc3NhZ2UgPSBmdW5jdGlvbiBnZXRNZXNzYWdlKCApe1xuXHRyZXR1cm4gVTIwMGIoIFtcblx0XHR0aGlzLmdldFRpbWVzdGFtcCggKSxcblx0XHR0aGlzLnJlc29sdmVNZXNzYWdlKCApLFxuXHRcdHRoaXMucmVzb2x2ZVRyYWNlKCApXG5cdF0gKS5qb2luKCBcIlxcblwiICk7XG59O1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFRoaXMgc2hvdWxkIGJlIHVzZWQgaW50ZXJuYWxseSBhcyBtdWNoIGFzIHBvc3NpYmxlLlxuXHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuT2xpdmFudC5wcm90b3R5cGUuZ2V0VHJhY2UgPSBmdW5jdGlvbiBnZXRUcmFjZSggY2FsbGJhY2sgKXtcblx0aWYoIHRoaXMuZGVwdGggPT0gMiApe1xuXHRcdHRoaXMucmVtaW5kKCBcInRyYWNpbmcgaXMgZGlzYWJsZWQgZm9yIGRlcHRoIDJcIiApLnByb21wdCggKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Y2FsbGJhY2sgPSBjYWxsZWQuYmluZCggdGhpcyApKCBjYWxsYmFjayApO1xuXG5cdHNuYXBkLmJpbmQoIHRoaXMgKSggY2FsbGJhY2ssIDEwMDAgKTtcblxuXHRpZiggYXNlYS5jbGllbnQgKXtcblx0XHRpZiggY2xhem9mKCB0aGlzLmVycm9yLCBFcnJvciApICl7XG5cdFx0XHR0cmFjZS5mcm9tRXJyb3IoIHRoaXMuZXJyb3IgKVxuXHRcdFx0XHQudGhlbiggKCBmcmFtZUxpc3QgKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5zdGFjayA9IGZyYW1lTGlzdDtcblxuXHRcdFx0XHRcdGNhbGxiYWNrKCBudWxsLCB0aGlzLnN0YWNrICk7XG5cdFx0XHRcdH0gKVxuXHRcdFx0XHQuY2F0Y2goICggZXJyb3IgKSA9PiB7IGNhbGxiYWNrKCB0aGlzLnJlbWluZCggZXJyb3IgKSApOyB9ICk7XG5cblx0XHR9ZWxzZSBpZiggdGhpcy5kZXB0aCA+IDUgKXtcblx0XHRcdHRyYWNlLmdldCggKVxuXHRcdFx0XHQudGhlbiggKCBmcmFtZUxpc3QgKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5zdGFjayA9IGZyYW1lTGlzdDtcblxuXHRcdFx0XHRcdGNhbGxiYWNrKCBudWxsLCB0aGlzLnN0YWNrICk7XG5cdFx0XHRcdH0gKVxuXHRcdFx0XHQuY2F0Y2goICggZXJyb3IgKSA9PiB7IGNhbGxiYWNrKCB0aGlzLnJlbWluZCggZXJyb3IgKSApOyB9ICk7XG5cblx0XHR9ZWxzZXtcblx0XHRcdGNhbGxiYWNrKCApO1xuXHRcdH1cblxuXHR9ZWxzZSBpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRpZiggY2xhem9mKCB0aGlzLmVycm9yLCBFcnJvciApICl7XG5cdFx0XHR0aGlzLnN0YWNrID0gdHJhY2UucGFyc2UoIHRoaXMuZXJyb3IgKTtcblxuXHRcdFx0Y2FsbGJhY2soIG51bGwsIHRoaXMuc3RhY2sgKTtcblxuXHRcdH1lbHNlIGlmKCB0aGlzLmRlcHRoID4gNSApe1xuXHRcdFx0dGhpcy5zdGFjayA9IHRyYWNlLmdldCggKTtcblxuXHRcdFx0Y2FsbGJhY2soIG51bGwsIHRoaXMuc3RhY2sgKTtcblxuXHRcdH1lbHNle1xuXHRcdFx0Y2FsbGJhY2soICk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFNldHMgYSBwcm9wZXJ0eSBvZiB0aGlzIGxvZyBlbmdpbmUuXG5cblx0XHROb3QgYWxsIHByb3BlcnR5IGNhbiBiZSBzZXQgdG8gbGltaXQgdGhpcyBmdW5jdGlvblxuXHRcdFx0Zm9yIHNlY3VyaXR5IHB1cnBvc2VzLlxuXHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuT2xpdmFudC5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gc2V0KCBwcm9wZXJ0eSwgdmFsdWUgKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJwcm9wZXJ0eTpyZXF1aXJlZFwiOiBcInN0cmluZ1wiLFxuXHRcdFx0XHRcInZhbHVlXCI6IFwiKlwiXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRsZXQgcGFyYW1ldGVyID0gcmF6ZSggYXJndW1lbnRzICk7XG5cblx0aWYoIHBhcmFtZXRlci5sZW5ndGggPT0gMSAmJiBwcm90eXBlKCBwYXJhbWV0ZXJbIDAgXSwgT0JKRUNUICkgKXtcblx0XHRsZXQgb3B0aW9uID0gcGFyYW1ldGVyWyAwIF07XG5cdFx0Zm9yKCBsZXQgcHJvcGVydHkgaW4gb3B0aW9uICl7XG5cdFx0XHR0aGlzLnNldCggcHJvcGVydHksIG9wdGlvblsgcHJvcGVydHkgXSApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0aWYoICFwcm90eXBlKCBwcm9wZXJ0eSwgU1RSSU5HICkgKXtcblx0XHR0aGlzLnJlc2V0KCBJc3N1ZSwgdHJ1ZSApXG5cdFx0XHQuc2lsZW5jZSggKVxuXHRcdFx0LnByb21wdCggXCJpbnZhbGlkIHByb3BlcnR5XCIsIHByb3BlcnR5ICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGlmKCBwcm90eXBlKCBwcm9wZXJ0eSwgU1RSSU5HICkgJiZcblx0XHRwcm9wZXJ0eSAhPSBMT0cgICYmXG5cdFx0cHJvcGVydHkgIT0gU0lMRU5UICYmXG5cdFx0cHJvcGVydHkgIT0gQ09OVEVYVCApXG5cdHtcblx0XHR0aGlzLnJlc2V0KCBJc3N1ZSwgdHJ1ZSApXG5cdFx0XHQuc2lsZW5jZSggKVxuXHRcdFx0LnByb21wdCggXCJpbnZhbGlkIHByb3BlcnR5XCIsIHByb3BlcnR5ICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHRoaXNbIHByb3BlcnR5IF0gPSB2YWx1ZTtcblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qO1xuXHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0U2VuZCBkYXRhIHRvIHNlcnZlciBvciBjbGllbnQuXG5cdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5PbGl2YW50LnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gc2VuZCggKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJyZXNwb25zZVwiOiBcImh0dHAuU2VydmVyUmVzcG9uc2VcIixcblx0XHRcdFx0XCJwcm9jZWR1cmVcIjogXCJmdW5jdGlvblwiXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRpZiggdGhpcy5kZXB0aCA9PSAyICl7XG5cdFx0dGhpcy5yZW1pbmQoIFwic2VuZGluZyBpcyBkaXNhYmxlZCBmb3IgZGVwdGggMlwiICkucHJvbXB0KCApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRsZXQgbWVzc2FnZSA9IG1lZWsoIHRoaXMuc3RhdHVzLCBVMjAwYiggdGhpcy50b1N0cmluZyggKSApLnJhdyggKSApO1xuXG5cdGxldCBwcm9jZWR1cmUgPSBhcmd1bWVudHNbIDAgXTtcblxuXHRpZiggYXNlYS5zZXJ2ZXIgJiZcblx0XHR0aGlzLnN0YXRlID09PSBSRURJUkVDVCAmJlxuXHRcdHByb3R5cGUoIHRoaXMucGF0aCwgU1RSSU5HICkgJiZcblx0XHR0cnVseSggdGhpcy5wYXRoICkgJiZcblx0XHRjbGF6b2YoIHByb2NlZHVyZSwgaHR0cC5TZXJ2ZXJSZXNwb25zZSApIClcblx0e1xuXHRcdHNlZ3dheSgge1xuXHRcdFx0XCJyZXNwb25zZVwiOiBwcm9jZWR1cmUsXG5cdFx0XHRcInBhdGhcIjogdGhpcy5wYXRoLFxuXHRcdFx0XCJzdGF0dXNcIjogdGhpcy5zdGF0dXMsXG5cdFx0XHRcImRhdGFcIjogbWVzc2FnZSxcblx0XHR9ICk7XG5cblx0XHR0aGlzLmZsdXNoU3RhdGUoICk7XG5cblx0fWVsc2UgaWYoIGFzZWEuc2VydmVyICYmXG5cdFx0ZmFsenkoIHRoaXMuc3RhdGUgKSAmJlxuXHRcdGNsYXpvZiggcHJvY2VkdXJlLCBodHRwLlNlcnZlclJlc3BvbnNlICkgKVxuXHR7XG5cdFx0bWVzc2FnZS5zZW5kKCBwcm9jZWR1cmUsIHRoaXMuY29kZSApO1xuXG5cdH1lbHNlIGlmKCBhc2VhLmNsaWVudCAmJlxuXHRcdHRoaXMuc3RhdGUgPT0gUkVESVJFQ1QgJiZcblx0XHRwcm90eXBlKCB0aGlzLnBhdGgsIFNUUklORyApICYmXG5cdFx0dHJ1bHkoIHRoaXMucGF0aCApIClcblx0e1xuXHRcdHNlZ3dheSgge1xuXHRcdFx0XCJwYXRoXCI6IHRoaXMucGF0aCxcblx0XHRcdFwic3RhdHVzXCI6IHRoaXMuc3RhdHVzLFxuXHRcdFx0XCJkYXRhXCI6IG1lc3NhZ2UsXG5cdFx0fSApO1xuXG5cdFx0dGhpcy5mbHVzaFN0YXRlKCApO1xuXG5cdH1lbHNlIGlmKCBhc2VhLmNsaWVudCAmJlxuXHRcdGZhbHp5KCB0aGlzLnN0YXRlICkgJiZcblx0XHRwcm90eXBlKCBwcm9jZWR1cmUsIEZVTkNUSU9OICkgKVxuXHR7XG5cdFx0bWVzc2FnZS5zZW5kLmJpbmQoIHRoaXMgKSggcHJvY2VkdXJlICk7XG5cblx0fWVsc2UgaWYoIHRydWx5KCB0aGlzLnN0YXRlICkgKXtcblx0XHR0aGlzLnJlc2V0KCBJc3N1ZSwgdHJ1ZSApXG5cdFx0XHQuc2lsZW5jZSggKVxuXHRcdFx0LnByb21wdCggYGNhbm5vdCBpbnZva2Ugc2VuZGluZyBzdGF0ZSwgJHsgdGhpcy5zdGF0ZSB9LCBwcm9wZXJseWAgKVxuXHRcdFx0LnNlbmQoIHByb2NlZHVyZSApO1xuXG5cdFx0dGhpcy5mbHVzaFN0YXRlKCApO1xuXG5cdH1lbHNle1xuXHRcdHRoaXMucmVzZXQoIElzc3VlLCB0cnVlIClcblx0XHRcdC5zaWxlbmNlKCApXG5cdFx0XHQucHJvbXB0KCBcImNhbm5vdCBzZW5kIHByb3Blcmx5XCIgKTtcblx0fVxuXG5cdHJldHVybiB0aGlzO1xufTtcblxuLyo7XG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRTdHJlYW0gZGF0YSB0byBsaXN0ZW5lcnMuXG5cdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5PbGl2YW50LnByb3RvdHlwZS5yZXBvcnQgPSBmdW5jdGlvbiByZXBvcnQoICl7XG5cdGlmKCB0aGlzLmRlcHRoID09IDIgKXtcblx0XHR0aGlzLnJlbWluZCggXCJyZXBvcnRpbmcgaXMgZGlzYWJsZWQgZm9yIGRlcHRoIDJcIiApLnByb21wdCggKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c25hcGQuYmluZCggdGhpcyApXG5cdFx0KCBmdW5jdGlvbiBkZWxheSggKXtcblx0XHRcdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdFx0XHRwcm9jZXNzLmVtaXQoIHRoaXMubmFtZSwgdGhpcyApO1xuXG5cdFx0XHR9ZWxzZSBpZiggYXNlYS5jbGllbnQgKXtcblx0XHRcdFx0bGV0IGV2ZW50ID0gbmV3IEV2ZW50KCB0aGlzLm5hbWUgKTtcblx0XHRcdFx0ZXZlbnQuZGF0YSA9IHRoaXM7XG5cblx0XHRcdFx0ZG9jdW1lbnQuZGlzcGF0Y2hFdmVudCggZXZlbnQgKTtcblx0XHRcdH1cblx0XHR9LCAxMDAwICk7XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKjtcblx0QGludGVybmFsLW1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdENydXNoIHRoZSBwYXJhbWV0ZXIgZXh0cmFjdGluZyBzdHJpbmcgaW5mb3JtYXRpb24uXG5cblx0XHRTcGVjaWFsIHN1cHBvcnQgZm9yIGdsdWNvc2UgY29hdGVkIHBhcmFtZXRlcnMuXG5cdEBlbmQtaW50ZXJuYWwtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5jb25zdCBjcnVzaCA9IGZ1bmN0aW9uIGNydXNoKCBwYXJhbWV0ZXIsIG9wdGlvbiApe1xuXHRvcHRpb24gPSBvcHRpb24gfHwgdGhpcy5pbnNwZWN0IHx8IHsgfTtcblxuXHRsZXQgZGVwdGggPSBvcHRpb24uZGVwdGggfHwgMTtcblx0bGV0IGxlbmd0aCA9IG9wdGlvbi5sZW5ndGggfHwgMjAwO1xuXHRsZXQgc3BhY2UgPSAvXFxzezIsfS9nO1xuXG5cdGlmKCBhc2VhLnNlcnZlciAmJiBwcm90eXBlKCBwYXJhbWV0ZXIsIE9CSkVDVCApICYmIHBhcmFtZXRlci5DT0FURUQgPT09IENPQVRFRCApe1xuXHRcdGlmKCBwYXJhbWV0ZXIuc2VsZiApe1xuXHRcdFx0dGhpcy5zZXQoIENPTlRFWFQsIHBhcmFtZXRlci5zZWxmICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHV0aWwuaW5zcGVjdCggcGFyYW1ldGVyLCB7IFwiZGVwdGhcIjogZGVwdGggfSApXG5cdFx0XHQucmVwbGFjZSggc3BhY2UsIFwiIFwiIClcblx0XHRcdC5zdWJzdHJpbmcoIDAsIGxlbmd0aCApICsgXCIuLi5cIjtcblxuXHR9ZWxzZSBpZiggcGFyYW1ldGVyICYmIGNsYXpvZiggcGFyYW1ldGVyLCBFcnJvciApICYmIHBhcmFtZXRlci5zdGFjayApe1xuXHRcdHRoaXMuZXJyb3IgPSBwYXJhbWV0ZXI7XG5cblx0XHR0aGlzLmdldFRyYWNlKCApO1xuXG5cdFx0cmV0dXJuIHBhcmFtZXRlci5zdGFjay50b1N0cmluZyggKTtcblxuXHR9ZWxzZSBpZiggY2xhem9mKCBwYXJhbWV0ZXIsIE9saXZhbnQgKSApe1xuXHRcdHJldHVybiBwYXJhbWV0ZXIubWVzc2FnZTtcblxuXHR9ZWxzZSBpZiggcHJvdHlwZSggcGFyYW1ldGVyLCBGVU5DVElPTiApICl7XG5cdFx0cmV0dXJuIHBhcmFtZXRlci50b1N0cmluZyggKVxuXHRcdFx0LnJlcGxhY2UoIHNwYWNlLCBcIiBcIiApXG5cdFx0XHQuc3Vic3RyaW5nKCAwLCBsZW5ndGggKSArIFwiLi4uXCI7XG5cblx0fWVsc2UgaWYoIHByb3R5cGUoIHBhcmFtZXRlciwgU1RSSU5HICkgfHxcblx0XHRwcm90eXBlKCBwYXJhbWV0ZXIsIE5VTUJFUiApIHx8XG5cdFx0cHJvdHlwZSggcGFyYW1ldGVyLCBCT09MRUFOICkgKVxuXHR7XG5cdFx0cmV0dXJuIHBhcmFtZXRlci50b1N0cmluZyggKTtcblxuXHR9ZWxzZSBpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRyZXR1cm4gdXRpbC5pbnNwZWN0KCBwYXJhbWV0ZXIsIHsgXCJkZXB0aFwiOiBkZXB0aCB9IClcblx0XHRcdC5yZXBsYWNlKCBzcGFjZSwgXCIgXCIgKVxuXHRcdFx0LnN1YnN0cmluZyggMCwgbGVuZ3RoICkgKyBcIi4uLlwiO1xuXG5cdH1lbHNlIGlmKCBhc2VhLmNsaWVudCApe1xuXHRcdHJldHVybiBwYXJhbWV0ZXIudG9TdHJpbmcoICk7XG5cblx0fWVsc2V7XG5cdFx0cmV0dXJuIHBhcmFtZXRlci50b1N0cmluZyggKTtcblx0fVxufTtcblxuLyo7XG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRBcHBlbmQgbWVzc2FnZXMgdG8gdGhlIGN1cnJlbnQgbWVzc2FnZS5cblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLnJlbWluZCA9IGZ1bmN0aW9uIHJlbWluZCggKXtcblx0bGV0IHBhcmFtZXRlciA9IHJhemUoIGFyZ3VtZW50cyApO1xuXG5cdGlmKCBhcmlkKCBwYXJhbWV0ZXIgKSApe1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0bGV0IHBhcnNlID0gY3J1c2guYmluZCggdGhpcyApO1xuXG5cdHRoaXMubWVzc2FnZSA9IFUyMDBiKCBwYXJhbWV0ZXJcblx0XHQubWFwKCBmdW5jdGlvbiBvbkVhY2hQYXJhbWV0ZXIoIHBhcmFtZXRlciApe1xuXHRcdFx0aWYoIGRvdWJ0KCBwYXJhbWV0ZXIsIEFTX0FSUkFZICkgKXtcblx0XHRcdFx0cGFyYW1ldGVyID0gcmF6ZSggcGFyYW1ldGVyIClcblx0XHRcdFx0XHQubWFwKCAoIHBhcmFtZXRlciApID0+IHsgcmV0dXJuIHBhcnNlKCBwYXJhbWV0ZXIgKSB9ICk7XG5cblx0XHRcdFx0cmV0dXJuIFUyMDBiKCBwYXJhbWV0ZXJcblx0XHRcdFx0XHQuZmlsdGVyKCAoIG1lc3NhZ2UgKSA9PiB7IHJldHVybiB0cnVseSggbWVzc2FnZSApOyB9ICkgKVxuXHRcdFx0XHRcdC5qb2luKCBcIiwgXCIgKTtcblxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHJldHVybiBwYXJzZSggcGFyYW1ldGVyICk7XG5cdFx0XHR9XG5cdFx0fSApXG5cdFx0LnJldmVyc2UoIClcblx0XHQuY29uY2F0KCBbIHRoaXMubWVzc2FnZSBdIClcblx0XHQuZmlsdGVyKCAoIG1lc3NhZ2UgKSA9PiB7IHJldHVybiB0cnVseSggbWVzc2FnZSApOyB9IClcblx0XHQucmV2ZXJzZSggKSApXG5cdFx0LmpvaW4oIFwiLCBcIiApO1xuXG5cdHRoaXMucmVwb3J0KCApO1xuXG5cdHJldHVybiB0aGlzO1xufTtcblxuLyo7XG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRTaWxlbmNlIHRoZSBsb2dnaW5nIGNhcGFiaWxpdGllcy5cblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLnNpbGVuY2UgPSBmdW5jdGlvbiBzaWxlbmNlKCApe1xuXHR0aGlzLnNpbGVudCA9IHRydWU7XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdERlYWN0aXZhdGUgc2lsZW5jZS5cblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLnNob3V0ID0gZnVuY3Rpb24gc2hvdXQoICl7XG5cdHRoaXMuc2lsZW50ID0gZmFsc2U7XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdExvZyB0aGUgZGF0YS5cblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLnByb21wdCA9IGZ1bmN0aW9uIHByb21wdCggKXtcblx0dGhpcy5yZW1pbmQuYXBwbHkoIHRoaXMsIHJhemUoIGFyZ3VtZW50cyApICk7XG5cblx0c25hcGQuYmluZCggdGhpcyApXG5cdFx0KCBmdW5jdGlvbiBkZWxheSggKXtcblx0XHRcdGlmKCB0aGlzLmRlcHRoID09PSAyICl7XG5cdFx0XHRcdHRoaXMubG9nKCB0aGlzLmdldE1lc3NhZ2UoICkgKTtcblxuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblxuXHRcdFx0aWYoIGRvdWJ0KCB0aGlzLnN0YWNrLCBBUlJBWSApICYmIGZpbGxlZCggdGhpcy5zdGFjayApICl7XG5cdFx0XHRcdHRoaXMubG9nKCB0aGlzLmdldE1lc3NhZ2UoICkgKTtcblxuXHRcdFx0fWVsc2UgaWYoIHRoaXMuZGVwdGggPiA1ICl7XG5cdFx0XHRcdHRoaXMuZ2V0VHJhY2UoICggZXJyb3IsIHN0YWNrICkgPT4ge1xuXHRcdFx0XHRcdGlmKCBjbGF6b2YoIGVycm9yLCBFcnJvciApICl7XG5cdFx0XHRcdFx0XHR0aGlzLnJlbWluZCggYGVycm9yIGdldHRpbmcgc3RhY2sgdHJhY2UsICR7IGVycm9yIH1gICk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYoIHRydXUoIHN0YWNrICkgKXtcblx0XHRcdFx0XHRcdHRoaXMuc3RhY2sgPSBzdGFjaztcblxuXHRcdFx0XHRcdFx0dGhpcy5sb2coIHRoaXMuZ2V0TWVzc2FnZSggKSApO1xuXG5cdFx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0XHR0aGlzLmxvZyggdGhpcy5nZXRNZXNzYWdlKCApICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9ICk7XG5cblx0XHRcdH1lbHNle1xuXHRcdFx0XHR0aGlzLmxvZyggdGhpcy5nZXRNZXNzYWdlKCApICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdHJldHVybiB0aGlzO1xufTtcblxuLyo7XG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRTZXQgdGhlIHJlZGlyZWN0aW9uIGNvbmZpZ3VyYXRpb24uXG5cblx0XHRUaGlzIHdpbGwgdHJpZ2dlciByZWRpcmVjdCByZXNwb25zZSB3aGVuIHNlbmQgaXMgY2FsbGVkLlxuXG5cdFx0RGVmYXVsdCBvZiBERUZBVUxUX1JFRElSRUNUX1BBVEggd2lsbCBiZSB1c2VkIGlmIHBhdGggaXMgbm90IGdpdmVuLlxuXHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuT2xpdmFudC5wcm90b3R5cGUucmVkaXJlY3QgPSBmdW5jdGlvbiByZWRpcmVjdCggcGF0aCApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcInBhdGg6cmVxdWlyZWRcIjogXCJzdHJpbmdcIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0dGhpcy5zdGF0ZSA9IFJFRElSRUNUO1xuXHR0aGlzLnBhdGggPSBwYXRoO1xuXG5cdGlmKCBmYWx6eSggdGhpcy5wYXRoICkgJiZcblx0XHR0cnVseSggREVGQVVMVF9SRURJUkVDVF9QQVRIICkgJiZcblx0XHRwcm90eXBlKCBERUZBVUxUX1JFRElSRUNUX1BBVEgsIFNUUklORyApIClcblx0e1xuXHRcdHRoaXMucGF0aCA9IERFRkFVTFRfUkVESVJFQ1RfUEFUSDtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0aWYoICFwcm90eXBlKCB0aGlzLnBhdGgsIFNUUklORyApICl7XG5cdFx0dGhpcy5yZXNldCggSXNzdWUsIHRydWUgKVxuXHRcdFx0LnNpbGVuY2UoIClcblx0XHRcdC5wcm9tcHQoIFwiaW52YWxpZCByZWRpcmVjdCBwYXRoXCIgKTtcblxuXHR9ZWxzZSBpZiggZmFsenkoIHRoaXMucGF0aCApICl7XG5cdFx0dGhpcy5yZXNldCggSXNzdWUsIHRydWUgKVxuXHRcdFx0LnNpbGVuY2UoIClcblx0XHRcdC5wcm9tcHQoIFwiZW1wdHkgcmVkaXJlY3QgcGF0aFwiICk7XG5cdH1cblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbk9saXZhbnQucHJvdG90eXBlLmZsdXNoU3RhdGUgPSBmdW5jdGlvbiBmbHVzaFN0YXRlKCApe1xuXHR0aGlzLnN0YXRlID0gXCJcIjtcblx0dGhpcy5wYXRoID0gXCJcIjtcblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qO1xuXHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0UGFzcyB0aGUgaW5zdGFuY2UgdG8gdGhlIGNhbGxiYWNrIGZpcnN0IHBhcmFtZXRlci5cblxuXHRcdFRoaXMgZm9sbG93cyB0aGUgc3RhbmRhcmQgZXJyb3ItcmVzdWx0LW9wdGlvbiBjb252ZW50aW9uLlxuXG5cdFx0SGFzIHNwZWNpYWwgc3VwcG9ydCBmb3IgZ2x1Y29zZSBjb2F0ZWQgb3B0aW9uLlxuXHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuT2xpdmFudC5wcm90b3R5cGUucGFzcyA9IGZ1bmN0aW9uIHBhc3MoIGNhbGxiYWNrLCByZXN1bHQsIG9wdGlvbiApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcImNhbGxiYWNrOnJlcXVpcmVkXCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0aWYoICFwcm90eXBlKCBjYWxsYmFjaywgRlVOQ1RJT04gKSApe1xuXHRcdHRoaXMucmVzZXQoIEJ1ZywgdHJ1ZSApXG5cdFx0XHQucHJvbXB0KCBcImludmFsaWQgY2FsbGJhY2tcIiApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRpZiggdHJ1dSggb3B0aW9uICkgJiYgdHJ1dSggb3B0aW9uLnNlbGYgKSAmJiBvcHRpb24uQ09BVEVEID09PSBDT0FURUQgKXtcblx0XHR0aGlzLnNldCggQ09OVEVYVCwgb3B0aW9uLnNlbGYgKTtcblx0fVxuXG5cdGlmKCB0aGlzLmNvbnRleHQgKXtcblx0XHRjYWxsYmFjayA9IGNhbGxlZC5iaW5kKCB0aGlzLmNvbnRleHQgKSggY2FsbGJhY2sgKTtcblxuXHR9ZWxzZXtcblx0XHRjYWxsYmFjayA9IGNhbGxlZCggY2FsbGJhY2sgKTtcblx0fVxuXG5cdGNhbGxiYWNrKCB0aGlzLCByZXN1bHQsIG9wdGlvbiApO1xuXG5cdHJldHVybiB0aGlzO1xufTtcblxuaGFyZGVuKCBcImNyZWF0ZVwiLCBmdW5jdGlvbiBjcmVhdGUoIG5hbWUsIG9wdGlvbiApe1xuXHRsZXQgTG9nRW5naW5lID0gZGlhdG9tKCBuYW1lICk7XG5cblx0aGVyZWRpdG8oIExvZ0VuZ2luZSwgT2xpdmFudCApO1xuXG5cdExvZ0VuZ2luZS5wcm90b3R5cGUubmFtZSA9IG9wdGlvbi5uYW1lO1xuXHRMb2dFbmdpbmUucHJvdG90eXBlLnN0YXR1cyA9IG9wdGlvbi5zdGF0dXM7XG5cdExvZ0VuZ2luZS5wcm90b3R5cGUuY29kZSA9IG9wdGlvbi5jb2RlO1xuXHRMb2dFbmdpbmUucHJvdG90eXBlLnNpbGVudCA9IG9wdGlvbi5zaWxlbnQ7XG5cdExvZ0VuZ2luZS5wcm90b3R5cGUuZGVwdGggPSBvcHRpb24uZGVwdGg7XG5cdExvZ0VuZ2luZS5wcm90b3R5cGUuY29sb3IgPSBvcHRpb24uY29sb3I7XG5cdExvZ0VuZ2luZS5wcm90b3R5cGUuaW5zcGVjdCA9IG9wdGlvbi5pbnNwZWN0O1xuXHRMb2dFbmdpbmUucHJvdG90eXBlLmluaXRpYWxpemUgPSBvcHRpb24uaW5pdGlhbGl6ZSB8fFxuXHRcdGZ1bmN0aW9uIGluaXRpYWxpemUoICl7XG5cdFx0XHR0aGlzLm5hbWUgPSBvcHRpb24ubmFtZTtcblxuXHRcdFx0dGhpcy5zdGF0dXMgPSBvcHRpb24uc3RhdHVzO1xuXG5cdFx0XHR0aGlzLmNvZGUgPSBvcHRpb24uY29kZTtcblxuXHRcdFx0dGhpcy5zaWxlbnQgPSBvcHRpb24uc2lsZW50O1xuXG5cdFx0XHR0aGlzLmRlcHRoID0gb3B0aW9uLmRlcHRoO1xuXHRcdH07XG5cblx0c3ltYmlvdGUoIExvZ0VuZ2luZSApO1xuXG5cdGhhcmRlbiggTG9nRW5naW5lLm5hbWUsIExvZ0VuZ2luZSApO1xufSwgT2xpdmFudCApO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9saXZhbnQ7XG4iXX0=
