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

	if (protype(arguments[0], OBJECT) && !doubt(arguments[0], ARGUMENTS) && !clazof(arguments[0], Error) && option.COATED !== COATED) {
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
	} else if (protype(parameter, OBJECT) && parameter.constructor && protype(parameter.constructor, FUNCTION) && parameter.constructor.name != "Function" && clazof(parameter, parameter.constructor)) {
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

	this.silent = kein(option, "silent") ? option.silent : kein(this, "silent") ? this.silent : true;

	if (!protype(this.silent, BOOLEAN)) {
		this.silent = true;
	}

	//: Depth dictates refined settings of this procedure.
	this.depth = kein(option, "depth") ? option.depth : kein(this, "depth") ? this.depth : 1;

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

	if (asea.server) {
		redsea(Issue);

		blacksea(Fatal);
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
				"stack": this.stack
			};

			return logEngine(data);
		} else {
			this.load(logEngine.prototype);
		}
	} else if (protype(option, OBJECT)) {
		this.load(option);
	} else if (!clazof(option, Issue)) {
		this.reset(Issue, true).silence().prompt("cannot reset to given option", option);
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
	var message = U200b(outre([this.name, this.status, this.message]).filter(truly)).join(", ");

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
			if (frame.toString() === "[object Object]") {
				var functionName = frame.functionName,
				    fileName = frame.fileName,
				    lineNumber = frame.lineNumber,
				    columnNumber = frame.columnNumber;


				return functionName + " (" + fileName + ":" + lineNumber + ":" + columnNumber + ")";
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

	if (this.depth < 5 && this.silent && truu(this.context) && protype(this.context.constructor, FUNCTION) && truly(this.context.constructor.name)) {
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
	return U200b([this.getTimestamp(), this.resolveMessage(), this.resolveTrace()]).join("\n");
};

/*;
	@method-documentation:
		This should be used internally as much as possible.
	@end-method-documentation
*/
Olivant.prototype.getTrace = function getTrace(callback) {
	var _this = this;

	if (this.depth == 2) {
		this.remind("tracing is disabled for depth 2").prompt();

		return this;
	}

	callback = called.bind(this)(callback);

	snapd.bind(this)(callback, 1000);

	if (asea.client) {
		if (clazof(this.error, Error)) {
			trace.fromError(this.error).then(function (frameList) {
				_this.stack = frameList;

				callback(null, _this.stack);
			}).catch(function (error) {
				callback(_this.remind(error));
			});
		} else if (this.depth > 5) {
			trace.get().then(function (frameList) {
				_this.stack = frameList;

				callback(null, _this.stack);
			}).catch(function (error) {
				callback(_this.remind(error));
			});
		}
	} else if (asea.server) {
		if (clazof(this.error, Error)) {
			this.stack = trace.parse(this.error);

			callback(null, this.stack);
		} else if (this.depth > 5) {
			this.stack = trace.get();

			callback(null, this.stack);
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
		this.reset(Issue, true).silence().prompt("invalid property", property);

		return this;
	}

	if (protype(property, STRING) && property != LOG && property != SILENT && property != CONTEXT) {
		this.reset(Issue, true).silence().prompt("invalid property", property);

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

	if (asea.server && this.state === REDIRECT && protype(this.path, STRING) && truly(this.path) && clazof(procedure, http.ServerResponse)) {
		segway({
			"response": procedure,
			"path": this.path,
			"status": this.status,
			"data": message
		});

		this.flushState();
	} else if (asea.server && falzy(this.state) && clazof(procedure, http.ServerResponse)) {
		message.send(procedure, this.code);
	} else if (asea.client && this.state == REDIRECT && protype(this.path, STRING) && truly(this.path)) {
		segway({
			"path": this.path,
			"status": this.status,
			"data": message
		});

		this.flushState();
	} else if (asea.client && falzy(this.state) && protype(procedure, FUNCTION)) {
		message.send.bind(this)(procedure);
	} else if (truly(this.state)) {
		this.reset(Issue, true).silence().prompt("cannot invoke sending state, " + this.state + ", properly").send(procedure);

		this.flushState();
	} else {
		this.reset(Issue, true).silence().prompt("cannot send properly");
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

	snapd.bind(this)(function delay() {
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

		return util.inspect(parameter, { "depth": depth }).replace(space, " ").substring(0, length) + "...";
	} else if (parameter && clazof(parameter, Error) && parameter.stack) {
		this.error = parameter;

		this.getTrace();

		return parameter.stack.toString();
	} else if (clazof(parameter, Olivant)) {
		return parameter.message;
	} else if (protype(parameter, FUNCTION)) {
		return parameter.toString().replace(space, " ").substring(0, length) + "...";
	} else if (protype(parameter, STRING) || protype(parameter, NUMBER) || protype(parameter, BOOLEAN)) {
		return parameter.toString();
	} else if (asea.server) {
		return util.inspect(parameter, { "depth": depth }).replace(space, " ").substring(0, length);
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

	this.message = U200b(parameter.map(function onEachParameter(parameter) {
		if (doubt(parameter, AS_ARRAY)) {
			parameter = raze(parameter).map(function (parameter) {
				return parse(parameter);
			});

			return U200b(parameter.filter(function (message) {
				return truly(message);
			})).join(", ");
		} else {
			return parse(parameter);
		}
	}).reverse().concat([this.message]).filter(function (message) {
		return truly(message);
	}).reverse()).join(", ");

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

	snapd.bind(this)(function delay() {
		var _this2 = this;

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

	if (!this.path && protype(DEFAULT_REDIRECT_PATH, STRING)) {
		this.path = DEFAULT_REDIRECT_PATH;
	} else {
		this.reset(Issue, true).silence().prompt("empty path to be redirected");
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
		this.reset(Bug, true).prompt("invalid callback");

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
	LogEngine.prototype.initialize = option.initialize || function initialize() {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9saXZhbnQuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhcmlkIiwicmVxdWlyZSIsImFzZWEiLCJidWRnZSIsImNhbGxlZCIsImNsYXpvZiIsImRpYXRvbSIsImRvdWJ0IiwiRXRoZXJuaXR5IiwiZmFsemUiLCJmYWx6eSIsImZpbGxlZCIsImdsdWNvc2UiLCJoYXJkZW4iLCJoZXJlZGl0byIsImtlaW4iLCJtZWVrIiwib3V0cmUiLCJwbG91Z2giLCJwcm90eXBlIiwicmF6ZSIsInNuYXBkIiwic3ltYmlvdGUiLCJ0cnVseSIsInRydXUiLCJVMjAwYiIsInRyYWNlIiwid2luZG93IiwiREVGQVVMVF9SRURJUkVDVF9QQVRIIiwiT2xpdmFudCIsIkRFRkFVTFRfSU5TUEVDVF9PUFRJT04iLCJERUZBVUxUX0xPR19FTkdJTkUiLCJjbGllbnQiLCJjb25zb2xlIiwiZGVidWciLCJsb2ciLCJwcm90b3R5cGUiLCJpbml0aWFsaXplIiwib3B0aW9uIiwiZHVyYXRpb24iLCJEYXRlIiwibm93IiwiYXJndW1lbnRzIiwiT0JKRUNUIiwiQVJHVU1FTlRTIiwiRXJyb3IiLCJDT0FURUQiLCJsb2FkIiwicGFyYW1ldGVyIiwibGVuZ3RoIiwiZXJyb3IiLCJyZW1pbmQiLCJhcHBseSIsIm1lc3NhZ2UiLCJjb25jYXQiLCJTVFJJTkciLCJjb25zdHJ1Y3RvciIsIkZVTkNUSU9OIiwibmFtZSIsImJpbmQiLCJFQ0hPIiwic3RhdHVzIiwiY29kZSIsIkVDSE9fQ09ERSIsImNvbnRleHQiLCJzZWxmIiwic2lsZW50IiwiQk9PTEVBTiIsImRlcHRoIiwiTlVNQkVSIiwic2VydmVyIiwiY29sb3IiLCJjaGFsayIsIndoaXRlIiwic3RhdGUiLCJzdGFjayIsImluc3BlY3QiLCJyZWRzZWEiLCJJc3N1ZSIsImJsYWNrc2VhIiwiRmF0YWwiLCJyZXNldCIsInJlbmV3IiwibG9nRW5naW5lIiwiZGF0YSIsInNpbGVuY2UiLCJwcm9tcHQiLCJ0b1N0cmluZyIsImpvaW4iLCJ2YWx1ZU9mIiwiZ2V0VGltZXN0YW1wIiwidGltZXN0YW1wIiwicHJpbnRUaW1lIiwiZGltIiwiY29sb3JNZXNzYWdlIiwicmVzb2x2ZU1lc3NhZ2UiLCJmaWx0ZXIiLCJyZXNvbHZlVHJhY2UiLCJBUlJBWSIsIm1hcCIsImZyYW1lIiwiZnVuY3Rpb25OYW1lIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwicmVkIiwiZ2V0TWVzc2FnZSIsImdldFRyYWNlIiwiY2FsbGJhY2siLCJmcm9tRXJyb3IiLCJ0aGVuIiwiZnJhbWVMaXN0IiwiY2F0Y2giLCJnZXQiLCJwYXJzZSIsInNldCIsInByb3BlcnR5IiwidmFsdWUiLCJMT0ciLCJTSUxFTlQiLCJDT05URVhUIiwic2VuZCIsInJhdyIsInByb2NlZHVyZSIsIlJFRElSRUNUIiwicGF0aCIsImh0dHAiLCJTZXJ2ZXJSZXNwb25zZSIsInNlZ3dheSIsImZsdXNoU3RhdGUiLCJyZXBvcnQiLCJkZWxheSIsInByb2Nlc3MiLCJlbWl0IiwiZXZlbnQiLCJFdmVudCIsImRvY3VtZW50IiwiZGlzcGF0Y2hFdmVudCIsImNydXNoIiwic3BhY2UiLCJ1dGlsIiwicmVwbGFjZSIsInN1YnN0cmluZyIsIm9uRWFjaFBhcmFtZXRlciIsIkFTX0FSUkFZIiwicmV2ZXJzZSIsInNob3V0IiwicmVkaXJlY3QiLCJwYXNzIiwicmVzdWx0IiwiQnVnIiwiY3JlYXRlIiwiTG9nRW5naW5lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0ZBLElBQU1BLE9BQU9DLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTUMsT0FBT0QsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNRSxRQUFRRixRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1HLFNBQVNILFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFB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QXJCOztBQUVBLE9BQUtDLElBQUwsR0FBWXhCLE9BQU93QixJQUFuQjs7QUFFQSxPQUFLSSxNQUFMLEdBQWM1QixPQUFPNEIsTUFBckI7O0FBRUEsT0FBS0UsS0FBTCxHQUFhOUIsT0FBTzhCLEtBQXBCO0FBQ0EsRUFYRjs7QUFhQTlDLFVBQVVrSSxTQUFWOztBQUVBM0ksUUFBUTJJLFVBQVU5RixJQUFsQixFQUF3QjhGLFNBQXhCO0FBQ0EsQ0E1QkQsRUE0QkczSCxPQTVCSDs7QUE4QkE0SCxPQUFPQyxPQUFQLEdBQWlCN0gsT0FBakIiLCJmaWxlIjoib2xpdmFudC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJvbGl2YW50XCIsXG5cdFx0XHRcInBhdGhcIjogXCJvbGl2YW50L29saXZhbnQuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcIm9saXZhbnQuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwib2xpdmFudFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL29saXZhbnQuZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJvbGl2YW50LXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWUsXG5cdFx0XHRcImNsYXNzXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0RWNobyB0aGUgZGVzdHJ1Y3Rpb24gY2F1c2VkIGJ5IHlvdXIgY29kZS5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXJpZFwiOiBcImFyaWRcIixcblx0XHRcdFwiYXNlYVwiOiBcImFzZWFcIixcblx0XHRcdFwiYnVkZ2VcIjogXCJidWRnZVwiLFxuXHRcdFx0XCJibGFja3NlYVwiOiBcImJsYWNrc2VhXCIsXG5cdFx0XHRcImNhbGxlZFwiOiBcImNhbGxlZFwiLFxuXHRcdFx0XCJjaGFsa1wiOiBcImNoYWxrXCIsXG5cdFx0XHRcImNsYXpvZlwiOiBcImNsYXpvZlwiLFxuXHRcdFx0XCJkZXhpc3RcIjogXCJkZXhpc3RcIixcblx0XHRcdFwiZGlhdG9tXCI6IFwiZGlhdG9tXCIsXG5cdFx0XHRcIkV0aGVybml0eVwiOiBcImV0aGVybml0eVwiLFxuXHRcdFx0XCJFdmVudEVtaXR0ZXJcIjogXCJldmVudHNcIixcblx0XHRcdFwiZmFsemVcIjogXCJmYWx6ZVwiLFxuXHRcdFx0XCJmYWx6eVwiOiBcImZhbHp5XCIsXG5cdFx0XHRcImdsdWNvc2VcIjogXCJnbHVjb3NlXCIsXG5cdFx0XHRcImhhcmRlblwiOiBcImhhcmRlblwiLFxuXHRcdFx0XCJoZXJlZGl0b1wiOiBcImhlcmVkaXRvXCIsXG5cdFx0XHRcImtlaW5cIjogXCJrZWluXCIsXG5cdFx0XHRcImh0dHBcIjogXCJodHRwXCIsXG5cdFx0XHRcIm1lZWtcIjogXCJtZWVrXCJcblx0XHRcdFwib3V0cmVcIjogXCJvdXRyZVwiLFxuXHRcdFx0XCJwbG91Z2hcIjogXCJwbG91Z2hcIixcblx0XHRcdFwicHJvdHlwZVwiOiBcInByb3R5cGVcIixcblx0XHRcdFwicmF6ZVwiOiBcInJhemVcIixcblx0XHRcdFwicmVkc2VhXCI6IFwicmVkc2VhXCIsXG5cdFx0XHRcInNuYXBkXCI6IFwic25hcGRcIixcblx0XHRcdFwic2Vnd2F5XCI6IFwic2Vnd2F5XCIsXG5cdFx0XHRcInN5bWJpb3RlXCI6IFwic3ltYmlvdGVcIixcblx0XHRcdFwidHJhY2VcIjogWyBcInN0YWNrdHJhY2UtanNcIiwgXCJzdGFjay10cmFjZVwiIF0sXG5cdFx0XHRcInRydWx5XCI6IFwidHJ1bHlcIixcblx0XHRcdFwidHJ1dVwiOiBcInRydXVcIixcblx0XHRcdFwiVTIwMGJcIjogXCJ1MjAwYlwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFyaWQgPSByZXF1aXJlKCBcImFyaWRcIiApO1xuY29uc3QgYXNlYSA9IHJlcXVpcmUoIFwiYXNlYVwiICk7XG5jb25zdCBidWRnZSA9IHJlcXVpcmUoIFwiYnVkZ2VcIiApO1xuY29uc3QgY2FsbGVkID0gcmVxdWlyZSggXCJjYWxsZWRcIiApO1xuY29uc3QgY2xhem9mID0gcmVxdWlyZSggXCJjbGF6b2ZcIiApO1xuY29uc3QgZGlhdG9tID0gcmVxdWlyZSggXCJkaWF0b21cIiApO1xuY29uc3QgZG91YnQgPSByZXF1aXJlKCBcImRvdWJ0XCIgKTtcbmNvbnN0IEV0aGVybml0eSA9IHJlcXVpcmUoIFwiZXRoZXJuaXR5XCIgKTtcbmNvbnN0IGZhbHplID0gcmVxdWlyZSggXCJmYWx6ZVwiICk7XG5jb25zdCBmYWx6eSA9IHJlcXVpcmUoIFwiZmFsenlcIiApO1xuY29uc3QgZmlsbGVkID0gcmVxdWlyZSggXCJmaWxsZWRcIiApO1xuY29uc3QgZ2x1Y29zZSA9IHJlcXVpcmUoIFwiZ2x1Y29zZVwiICk7XG5jb25zdCBoYXJkZW4gPSByZXF1aXJlKCBcImhhcmRlblwiICk7XG5jb25zdCBoZXJlZGl0byA9IHJlcXVpcmUoIFwiaGVyZWRpdG9cIiApO1xuY29uc3Qga2VpbiA9IHJlcXVpcmUoIFwia2VpblwiICk7XG5jb25zdCBtZWVrID0gcmVxdWlyZSggXCJtZWVrXCIgKTtcbmNvbnN0IG91dHJlID0gcmVxdWlyZSggXCJvdXRyZVwiICk7XG5jb25zdCBwbG91Z2ggPSByZXF1aXJlKCBcInBsb3VnaFwiICk7XG5jb25zdCBwcm90eXBlID0gcmVxdWlyZSggXCJwcm90eXBlXCIgKTtcbmNvbnN0IHJhemUgPSByZXF1aXJlKCBcInJhemVcIiApO1xuY29uc3Qgc25hcGQgPSByZXF1aXJlKCBcInNuYXBkXCIgKTtcbmNvbnN0IHN5bWJpb3RlID0gcmVxdWlyZSggXCJzeW1iaW90ZVwiICk7XG5jb25zdCB0cnVseSA9IHJlcXVpcmUoIFwidHJ1bHlcIiApO1xuY29uc3QgdHJ1dSA9IHJlcXVpcmUoIFwidHJ1dVwiICk7XG5jb25zdCBVMjAwYiA9IHJlcXVpcmUoIFwidTIwMGJcIiApO1xuXG4vLzogQGNsaWVudDpcbmNvbnN0IHRyYWNlID0gcmVxdWlyZSggXCJzdGFja3RyYWNlLWpzXCIgKTtcbmhhcmRlbiggXCJERUZBVUxUX1JFRElSRUNUX1BBVEhcIiwgd2luZG93LkRFRkFVTFRfUkVESVJFQ1RfUEFUSCB8fCBcIi92aWV3L3N0YXR1cy9wYWdlXCIgKTtcbi8vOiBAZW5kLWNsaWVudFxuXG5cblxuY29uc3QgT2xpdmFudCA9IGRpYXRvbSggXCJPbGl2YW50XCIgKTtcblxuY29uc3QgREVGQVVMVF9JTlNQRUNUX09QVElPTiA9IHsgXCJkZXB0aFwiOiAxLCBcImxlbmd0aFwiOiAyMDAgfTtcbmNvbnN0IERFRkFVTFRfTE9HX0VOR0lORSA9IGFzZWEuY2xpZW50PyBjb25zb2xlLmRlYnVnIDogY29uc29sZS5sb2c7XG5cbi8qO1xuXHRAbm90ZTpcblx0XHRUaGlzIGlzIHRoZSBkZWZhdWx0IG5hbWUvc3RhdHVzIGFuZCBjb2RlIG9mIHRoZSBvbGl2YW50LlxuXHRAZW5kLW5vdGVcbiovXG5oYXJkZW4oIFwiRUNIT1wiLCBcImVjaG9cIiApO1xuaGFyZGVuKCBcIkVDSE9fQ09ERVwiLCAyMDAgKTtcblxuaGFyZGVuKCBcIlJFRElSRUNUXCIsIFwicmVkaXJlY3RcIiApO1xuaGFyZGVuKCBcIkNPTlRFWFRcIiwgXCJjb250ZXh0XCIgKTtcbmhhcmRlbiggXCJMT0dcIiwgXCJsb2dcIiApO1xuaGFyZGVuKCBcIlNJTEVOVFwiLCBcInNpbGVudFwiICk7XG5cbi8qO1xuXHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0T3B0aW9uIHNob3VsZCBub3QgYmUgZ2x1Y29zZSBjb2F0ZWQuXG5cdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5PbGl2YW50LnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gaW5pdGlhbGl6ZSggb3B0aW9uICl7XG5cdHRoaXMuZHVyYXRpb24gPSBEYXRlLm5vdyggKTtcblxuXHRpZiggcHJvdHlwZSggYXJndW1lbnRzWyAwIF0sIE9CSkVDVCApICYmXG5cdFx0IWRvdWJ0KCBhcmd1bWVudHNbIDAgXSwgQVJHVU1FTlRTICkgJiZcblx0XHQhKCBjbGF6b2YoIGFyZ3VtZW50c1sgMCBdLCBFcnJvciApICkgJiZcblx0XHRvcHRpb24uQ09BVEVEICE9PSBDT0FURUQgKVxuXHR7XG5cdFx0dGhpcy5sb2FkKCBvcHRpb24gKTtcblxuXHR9ZWxzZXtcblx0XHR0aGlzLmxvYWQoICk7XG5cdH1cblxuXHRsZXQgcGFyYW1ldGVyID0gYXJndW1lbnRzWyAwIF07XG5cblx0aWYoIGFyZ3VtZW50cy5sZW5ndGggPT0gMCApe1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH1lbHNlIGlmKCBjbGF6b2YoIHBhcmFtZXRlciwgRXJyb3IgKSApe1xuXHRcdGxldCBlcnJvciA9IHBhcmFtZXRlcjtcblxuXHRcdHRoaXMucmVtaW5kLmFwcGx5KCB0aGlzLCBbIGVycm9yLm1lc3NhZ2UsIGVycm9yIF0uY29uY2F0KCBidWRnZSggYXJndW1lbnRzICkgKSApO1xuXG5cdH1lbHNlIGlmKCBjbGF6b2YoIHBhcmFtZXRlciwgT2xpdmFudCApICl7XG5cdFx0dGhpcy5sb2FkKCBwYXJhbWV0ZXIgKTtcblxuXHR9ZWxzZSBpZiggZG91YnQoIHBhcmFtZXRlciwgQVJHVU1FTlRTICkgKXtcblx0XHR0aGlzLnJlbWluZC5hcHBseSggdGhpcywgcGxvdWdoKCBwYXJhbWV0ZXIgKSApO1xuXG5cdH1lbHNlIGlmKCBwcm90eXBlKCBwYXJhbWV0ZXIsIFNUUklORyApICl7XG5cdFx0dGhpcy5yZW1pbmQuYXBwbHkoIHRoaXMsIHJhemUoIGFyZ3VtZW50cyApICk7XG5cblx0fWVsc2UgaWYoIHByb3R5cGUoIHBhcmFtZXRlciwgT0JKRUNUICkgJiZcblx0XHRwYXJhbWV0ZXIuY29uc3RydWN0b3IgJiZcblx0XHRwcm90eXBlKCBwYXJhbWV0ZXIuY29uc3RydWN0b3IsIEZVTkNUSU9OICkgJiZcblx0XHRwYXJhbWV0ZXIuY29uc3RydWN0b3IubmFtZSAhPSBcIkZ1bmN0aW9uXCIgJiZcblx0XHRjbGF6b2YoIHBhcmFtZXRlciwgcGFyYW1ldGVyLmNvbnN0cnVjdG9yICkgKVxuXHR7XG5cdFx0dGhpcy5sb2FkKCBwYXJhbWV0ZXIgKTtcblxuXHRcdHRoaXMucmVtaW5kLmFwcGx5KCB0aGlzLCByYXplKCBhcmd1bWVudHMgKSApO1xuXG5cdH1lbHNlIGlmKCBwcm90eXBlKCBwYXJhbWV0ZXIsIE9CSkVDVCApICl7XG5cdFx0dGhpcy5yZW1pbmQuYXBwbHkoIHRoaXMsIHJhemUoIGFyZ3VtZW50cyApICk7XG5cdH1cblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbk9saXZhbnQucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbiBsb2FkKCBvcHRpb24gKXtcblx0b3B0aW9uID0gZ2x1Y29zZS5iaW5kKCB0aGlzICkoIG9wdGlvbiApO1xuXG5cdHRoaXMubmFtZSA9IG9wdGlvbi5uYW1lIHx8IHRoaXMubmFtZSB8fCBFQ0hPXG5cblx0dGhpcy5zdGF0dXMgPSBvcHRpb24uc3RhdHVzIHx8IHRoaXMuc3RhdHVzIHx8IEVDSE87XG5cblx0dGhpcy5jb2RlID0gb3B0aW9uLmNvZGUgfHwgdGhpcy5jb2RlIHx8IEVDSE9fQ09ERTtcblxuXHR0aGlzLmxvZyA9IG9wdGlvbi5sb2cgfHwgdGhpcy5sb2cgfHwgREVGQVVMVF9MT0dfRU5HSU5FO1xuXG5cdGlmKCBmYWx6ZSggdGhpcy5jb250ZXh0ICkgJiYgdHJ1dSggb3B0aW9uLnNlbGYgKSApe1xuXHRcdHRoaXMuY29udGV4dCA9IG9wdGlvbi5zZWxmO1xuXHR9XG5cblx0dGhpcy5zaWxlbnQgPSBrZWluKCBvcHRpb24sIFwic2lsZW50XCIgKT8gb3B0aW9uLnNpbGVudCA6XG5cdFx0a2VpbiggdGhpcywgXCJzaWxlbnRcIiApPyB0aGlzLnNpbGVudCA6IHRydWU7XG5cblx0aWYoICFwcm90eXBlKCB0aGlzLnNpbGVudCwgQk9PTEVBTiApICl7XG5cdFx0dGhpcy5zaWxlbnQgPSB0cnVlO1xuXHR9XG5cblx0Ly86IERlcHRoIGRpY3RhdGVzIHJlZmluZWQgc2V0dGluZ3Mgb2YgdGhpcyBwcm9jZWR1cmUuXG5cdHRoaXMuZGVwdGggPSBrZWluKCBvcHRpb24sIFwiZGVwdGhcIiApPyBvcHRpb24uZGVwdGggOlxuXHRcdGtlaW4oIHRoaXMsIFwiZGVwdGhcIiApPyB0aGlzLmRlcHRoIDogMTtcblxuXHRpZiggIXByb3R5cGUoIHRoaXMuZGVwdGgsIE5VTUJFUiApICl7XG5cdFx0dGhpcy5kZXB0aCA9IDE7XG5cdH1cblxuXHQvLzogRGVwdGggaXMgb25seSBmcm9tIDEtMCBvciAxLTIzNDUtNjc4OS0wLlxuXHQvLzogRGVwdGggMiBpcyBkZWVwIHNpbGVudCBkZXB0aC5cblx0dGhpcy5kZXB0aCA9IHRoaXMuZGVwdGggJSAxMDtcblxuXHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHR0aGlzLmNvbG9yID0gb3B0aW9uLmNvbG9yIHx8IHRoaXMuY29sb3IgfHwgY2hhbGsud2hpdGU7XG5cdH1cblxuXHR0aGlzLnN0YXRlID0gXCJcIjtcblxuXHR0aGlzLnN0YWNrID0gb3B0aW9uLnN0YWNrIHx8IHRoaXMuc3RhY2sgfHwgWyBdO1xuXG5cdHRoaXMubWVzc2FnZSA9IG9wdGlvbi5tZXNzYWdlIHx8IHRoaXMubWVzc2FnZSB8fCBcIlwiO1xuXG5cdHRoaXMuaW5zcGVjdCA9IG9wdGlvbi5pbnNwZWN0IHx8IHRoaXMuaW5zcGVjdCB8fCBERUZBVUxUX0lOU1BFQ1RfT1BUSU9OO1xuXG5cdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdHJlZHNlYSggSXNzdWUgKTtcblxuXHRcdGJsYWNrc2VhKCBGYXRhbCApO1xuXHR9XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdE1vZGlmaWVzIHRoZSBsb2cgZW5naW5lIHdoaWxlIG1haW50YWluaW5nIGVudmlyb25tZW50IHByb3BlcnRpZXMuXG5cdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5PbGl2YW50LnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uIHJlc2V0KCBvcHRpb24sIHJlbmV3ICl7XG5cdGlmKCBwcm90eXBlKCBvcHRpb24sIEZVTkNUSU9OICkgJiYgY2xhem9mKCBvcHRpb24sIE9saXZhbnQgKSApe1xuXHRcdGxldCBsb2dFbmdpbmUgPSBvcHRpb247XG5cblx0XHRpZiggcHJvdHlwZSggcmVuZXcsIEJPT0xFQU4gKSAmJiByZW5ldyApe1xuXHRcdFx0bGV0IGRhdGEgPSB7XG5cdFx0XHRcdFwibWVzc2FnZVwiOiB0aGlzLm1lc3NhZ2UsXG5cdFx0XHRcdFwic3RhY2tcIjogdGhpcy5zdGFja1xuXHRcdFx0fTtcblxuXHRcdFx0cmV0dXJuIGxvZ0VuZ2luZSggZGF0YSApO1xuXG5cdFx0fWVsc2V7XG5cdFx0XHR0aGlzLmxvYWQoIGxvZ0VuZ2luZS5wcm90b3R5cGUgKTtcblx0XHR9XG5cblx0fWVsc2UgaWYoIHByb3R5cGUoIG9wdGlvbiwgT0JKRUNUICkgKXtcblx0XHR0aGlzLmxvYWQoIG9wdGlvbiApO1xuXG5cdH1lbHNlIGlmKCAhY2xhem9mKCBvcHRpb24sIElzc3VlICkgKXtcblx0XHR0aGlzLnJlc2V0KCBJc3N1ZSwgdHJ1ZSApXG5cdFx0XHQuc2lsZW5jZSggKVxuXHRcdFx0LnByb21wdCggXCJjYW5ub3QgcmVzZXQgdG8gZ2l2ZW4gb3B0aW9uXCIsIG9wdGlvbiApO1xuXG5cdH1lbHNle1xuXHRcdElzc3VlKCBcImNhbm5vdCByZXNldCBsb2dcIiwgb3B0aW9uLCB0aGlzICkuc2lsZW5jZSggKS5wcm9tcHQoICk7XG5cdH1cblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbk9saXZhbnQucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoICl7XG5cdHJldHVybiBVMjAwYiggb3V0cmUoIFsgdGhpcy5uYW1lLCB0aGlzLnN0YXR1cywgdGhpcy5tZXNzYWdlIF0gKSApLmpvaW4oIFwiLCBcIiApO1xufTtcblxuT2xpdmFudC5wcm90b3R5cGUudmFsdWVPZiA9IGZ1bmN0aW9uIHZhbHVlT2YoICl7XG5cdHJldHVybiBVMjAwYiggb3V0cmUoIFsgdGhpcy5uYW1lLCB0aGlzLnN0YXR1cywgdGhpcy5tZXNzYWdlIF0gKSApLmpvaW4oIFwiLCBcIiApO1xufTtcblxuT2xpdmFudC5wcm90b3R5cGUuZ2V0VGltZXN0YW1wID0gZnVuY3Rpb24gZ2V0VGltZXN0YW1wKCApe1xuXHRsZXQgdGltZXN0YW1wID0gRXRoZXJuaXR5KCApLnByaW50VGltZSggdHJ1ZSApO1xuXG5cdHRpbWVzdGFtcCA9IGAkeyB0aW1lc3RhbXAgfSB8ICR7ICggRGF0ZS5ub3coICkgLSB0aGlzLmR1cmF0aW9uICkgfW1zYDtcblxuXHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRyZXR1cm4gY2hhbGsuZGltKCB0aW1lc3RhbXAgKTtcblx0fVxuXG5cdHJldHVybiB0aW1lc3RhbXA7XG59O1xuXG5PbGl2YW50LnByb3RvdHlwZS5jb2xvck1lc3NhZ2UgPSBmdW5jdGlvbiBjb2xvck1lc3NhZ2UoIGNvbG9yLCBtZXNzYWdlICl7XG5cdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdGlmKCBwcm90eXBlKCBjb2xvciwgRlVOQ1RJT04gKSApe1xuXHRcdFx0cmV0dXJuIGNvbG9yKCBtZXNzYWdlICk7XG5cblx0XHR9ZWxzZSBpZiggcHJvdHlwZSggY29sb3IsIFNUUklORyApICYmIHRydWx5KCBjb2xvciApICl7XG5cdFx0XHRpZigga2VpbiggY2hhbGssIGNvbG9yICkgJiYgcHJvdHlwZSggY2hhbGtbIGNvbG9yIF0sIEZVTkNUSU9OICkgKXtcblx0XHRcdFx0cmV0dXJuIGNoYWxrWyBjb2xvciBdKCBtZXNzYWdlICk7XG5cblx0XHRcdH1lbHNle1xuXHRcdFx0XHR0aGlzLnJlbWluZCggYGludmFsaWQgbWVzc2FnZSBjb2xvciwgJHsgY29sb3IgfWAgKTtcblxuXHRcdFx0XHRyZXR1cm4gY2hhbGsud2hpdGUoIG1lc3NhZ2UgKTtcblx0XHRcdH1cblxuXHRcdH1lbHNle1xuXHRcdFx0cmV0dXJuIGNoYWxrLndoaXRlKCBtZXNzYWdlICk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIG1lc3NhZ2U7XG59O1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFRoZSBtZXNzYWdlIGlzIGRpdmlkZWQgaW50byB0aHJlZSBwYXJ0cyxcblx0XHQxLiBuYW1lc3BhY2UsXG5cdFx0Mi4gc3RhdHVzLFxuXHRcdDMuIGFjdHVhbCBtZXNzYWdlXG5cdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5PbGl2YW50LnByb3RvdHlwZS5yZXNvbHZlTWVzc2FnZSA9IGZ1bmN0aW9uIHJlc29sdmVNZXNzYWdlKCApe1xuXHRsZXQgbWVzc2FnZSA9IFUyMDBiKCBvdXRyZSggWyB0aGlzLm5hbWUsIHRoaXMuc3RhdHVzLCB0aGlzLm1lc3NhZ2UgXSApXG5cdFx0LmZpbHRlciggdHJ1bHkgKSApLmpvaW4oIFwiLCBcIiApO1xuXG5cdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdHJldHVybiB0aGlzLmNvbG9yTWVzc2FnZSggdGhpcy5jb2xvciwgbWVzc2FnZSApO1xuXHR9XG5cblx0cmV0dXJuIG1lc3NhZ2U7XG59O1xuXG5PbGl2YW50LnByb3RvdHlwZS5yZXNvbHZlVHJhY2UgPSBmdW5jdGlvbiByZXNvbHZlVHJhY2UoICl7XG5cdGxldCBzdGFjayA9IFwic3RhY2sgdHJhY2Ugbm90IGF2YWlsYWJsZVwiO1xuXG5cdGlmKCAhdGhpcy5zaWxlbnQgJiYgZG91YnQoIHRoaXMuc3RhY2ssIEFSUkFZICkgJiYgZmlsbGVkKCB0aGlzLnN0YWNrICkgKXtcblx0XHRzdGFjayA9IHRoaXMuc3RhY2s7XG5cblx0XHRzdGFjayA9IHN0YWNrLm1hcCggKCBmcmFtZSApID0+IHtcblx0XHRcdGlmKCBmcmFtZS50b1N0cmluZyggKSA9PT0gXCJbb2JqZWN0IE9iamVjdF1cIiApe1xuXHRcdFx0XHRsZXQgeyBmdW5jdGlvbk5hbWUsIGZpbGVOYW1lLCBsaW5lTnVtYmVyLCBjb2x1bW5OdW1iZXIgfSA9IGZyYW1lO1xuXG5cdFx0XHRcdHJldHVybiBgJHsgZnVuY3Rpb25OYW1lIH0gKCR7IGZpbGVOYW1lIH06JHsgbGluZU51bWJlciB9OiR7IGNvbHVtbk51bWJlciB9KWA7XG5cblx0XHRcdH1lbHNle1xuXHRcdFx0XHRyZXR1cm4gZnJhbWUudG9TdHJpbmcoICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdFx0c3RhY2sgPSBVMjAwYiggc3RhY2sgKS5qb2luKCBcIlxcblwiICk7XG5cblx0XHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRcdHJldHVybiBjaGFsay5kaW0ucmVkKCBzdGFjayApO1xuXHRcdH1cblxuXHRcdHJldHVybiBzdGFjaztcblx0fVxuXG5cdGlmKCB0aGlzLmRlcHRoIDwgNSAmJlxuXHRcdHRoaXMuc2lsZW50ICYmXG5cdFx0dHJ1dSggdGhpcy5jb250ZXh0ICkgJiZcblx0IFx0cHJvdHlwZSggdGhpcy5jb250ZXh0LmNvbnN0cnVjdG9yLCBGVU5DVElPTiApICYmXG5cdFx0dHJ1bHkoIHRoaXMuY29udGV4dC5jb25zdHJ1Y3Rvci5uYW1lICkgKVxuXHR7XG5cdFx0c3RhY2sgPSBgY2FsbGVkIHdpdGggY29udGV4dCwgJHsgdGhpcy5jb250ZXh0LmNvbnN0cnVjdG9yLm5hbWUgfWA7XG5cblx0XHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRcdHJldHVybiBjaGFsay5kaW0oIHN0YWNrICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHN0YWNrO1xuXHR9XG5cblx0aWYoIHRoaXMuc2lsZW50ICl7XG5cdFx0c3RhY2sgPSBcInN0YWNrIHRyYWNlIGlzIG5vdCBhdmFpbGFibGUgb24gc2lsZW50IG1vZGVcIjtcblxuXHRcdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdFx0cmV0dXJuIGNoYWxrLmRpbSggc3RhY2sgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc3RhY2s7XG5cdH1cblxuXHRpZiggdGhpcy5kZXB0aCA+IDUgKXtcblx0XHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRcdHJldHVybiBjaGFsay5kaW0oIHN0YWNrICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHN0YWNrO1xuXHR9XG59O1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFRoZSBtZXNzYWdlIGNvbnNpc3Qgb2YgdGhyZWUgbGF5ZXIgb2Ygc3RyaW5ncyxcblx0XHRcdDEuIHRpbWVzdGFtcCBpbiB0cnVlIHRpbWUgZm9ybWF0XG5cdFx0XHQyLiBhY3R1YWwgcmVhZGFibGUgbWVzc2FnZVxuXHRcdFx0My4gbWVzc2FnZSB0cmFjZSBvciBtZXNzYWdlIGNvbnRleHRcblxuXHRcdFRoZXNlIGluZm9ybWF0aW9uIHdpbGwgYmUgZGl2aWRlZCB0aHJvdWdoIHplcm8td2lkdGggc3BhY2UgY29udmVudGlvbi5cblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLmdldE1lc3NhZ2UgPSBmdW5jdGlvbiBnZXRNZXNzYWdlKCApe1xuXHRyZXR1cm4gVTIwMGIoIFtcblx0XHR0aGlzLmdldFRpbWVzdGFtcCggKSxcblx0XHR0aGlzLnJlc29sdmVNZXNzYWdlKCApLFxuXHRcdHRoaXMucmVzb2x2ZVRyYWNlKCApXG5cdF0gKS5qb2luKCBcIlxcblwiICk7XG59O1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFRoaXMgc2hvdWxkIGJlIHVzZWQgaW50ZXJuYWxseSBhcyBtdWNoIGFzIHBvc3NpYmxlLlxuXHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuT2xpdmFudC5wcm90b3R5cGUuZ2V0VHJhY2UgPSBmdW5jdGlvbiBnZXRUcmFjZSggY2FsbGJhY2sgKXtcblx0aWYoIHRoaXMuZGVwdGggPT0gMiApe1xuXHRcdHRoaXMucmVtaW5kKCBcInRyYWNpbmcgaXMgZGlzYWJsZWQgZm9yIGRlcHRoIDJcIiApLnByb21wdCggKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Y2FsbGJhY2sgPSBjYWxsZWQuYmluZCggdGhpcyApKCBjYWxsYmFjayApO1xuXG5cdHNuYXBkLmJpbmQoIHRoaXMgKSggY2FsbGJhY2ssIDEwMDAgKTtcblxuXHRpZiggYXNlYS5jbGllbnQgKXtcblx0XHRpZiggY2xhem9mKCB0aGlzLmVycm9yLCBFcnJvciApICl7XG5cdFx0XHR0cmFjZS5mcm9tRXJyb3IoIHRoaXMuZXJyb3IgKVxuXHRcdFx0XHQudGhlbiggKCBmcmFtZUxpc3QgKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5zdGFjayA9IGZyYW1lTGlzdDtcblxuXHRcdFx0XHRcdGNhbGxiYWNrKCBudWxsLCB0aGlzLnN0YWNrICk7XG5cdFx0XHRcdH0gKVxuXHRcdFx0XHQuY2F0Y2goICggZXJyb3IgKSA9PiB7IGNhbGxiYWNrKCB0aGlzLnJlbWluZCggZXJyb3IgKSApOyB9ICk7XG5cblx0XHR9ZWxzZSBpZiggdGhpcy5kZXB0aCA+IDUgKXtcblx0XHRcdHRyYWNlLmdldCggKVxuXHRcdFx0XHQudGhlbiggKCBmcmFtZUxpc3QgKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5zdGFjayA9IGZyYW1lTGlzdDtcblxuXHRcdFx0XHRcdGNhbGxiYWNrKCBudWxsLCB0aGlzLnN0YWNrICk7XG5cdFx0XHRcdH0gKVxuXHRcdFx0XHQuY2F0Y2goICggZXJyb3IgKSA9PiB7IGNhbGxiYWNrKCB0aGlzLnJlbWluZCggZXJyb3IgKSApOyB9ICk7XG5cdFx0fVxuXG5cdH1lbHNlIGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdGlmKCBjbGF6b2YoIHRoaXMuZXJyb3IsIEVycm9yICkgKXtcblx0XHRcdHRoaXMuc3RhY2sgPSB0cmFjZS5wYXJzZSggdGhpcy5lcnJvciApO1xuXG5cdFx0XHRjYWxsYmFjayggbnVsbCwgdGhpcy5zdGFjayApO1xuXG5cdFx0fWVsc2UgaWYoIHRoaXMuZGVwdGggPiA1ICl7XG5cdFx0XHR0aGlzLnN0YWNrID0gdHJhY2UuZ2V0KCApO1xuXG5cdFx0XHRjYWxsYmFjayggbnVsbCwgdGhpcy5zdGFjayApO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0aGlzO1xufTtcblxuLyo7XG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRTZXRzIGEgcHJvcGVydHkgb2YgdGhpcyBsb2cgZW5naW5lLlxuXG5cdFx0Tm90IGFsbCBwcm9wZXJ0eSBjYW4gYmUgc2V0IHRvIGxpbWl0IHRoaXMgZnVuY3Rpb25cblx0XHRcdGZvciBzZWN1cml0eSBwdXJwb3Nlcy5cblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIHNldCggcHJvcGVydHksIHZhbHVlICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwicHJvcGVydHk6cmVxdWlyZWRcIjogXCJzdHJpbmdcIixcblx0XHRcdFx0XCJ2YWx1ZVwiOiBcIipcIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0bGV0IHBhcmFtZXRlciA9IHJhemUoIGFyZ3VtZW50cyApO1xuXG5cdGlmKCBwYXJhbWV0ZXIubGVuZ3RoID09IDEgJiYgcHJvdHlwZSggcGFyYW1ldGVyWyAwIF0sIE9CSkVDVCApICl7XG5cdFx0bGV0IG9wdGlvbiA9IHBhcmFtZXRlclsgMCBdO1xuXHRcdGZvciggbGV0IHByb3BlcnR5IGluIG9wdGlvbiApe1xuXHRcdFx0dGhpcy5zZXQoIHByb3BlcnR5LCBvcHRpb25bIHByb3BlcnR5IF0gKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGlmKCAhcHJvdHlwZSggcHJvcGVydHksIFNUUklORyApICl7XG5cdFx0dGhpcy5yZXNldCggSXNzdWUsIHRydWUgKVxuXHRcdFx0LnNpbGVuY2UoIClcblx0XHRcdC5wcm9tcHQoIFwiaW52YWxpZCBwcm9wZXJ0eVwiLCBwcm9wZXJ0eSApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRpZiggcHJvdHlwZSggcHJvcGVydHksIFNUUklORyApICYmXG5cdFx0cHJvcGVydHkgIT0gTE9HICAmJlxuXHRcdHByb3BlcnR5ICE9IFNJTEVOVCAmJlxuXHRcdHByb3BlcnR5ICE9IENPTlRFWFQgKVxuXHR7XG5cdFx0dGhpcy5yZXNldCggSXNzdWUsIHRydWUgKVxuXHRcdFx0LnNpbGVuY2UoIClcblx0XHRcdC5wcm9tcHQoIFwiaW52YWxpZCBwcm9wZXJ0eVwiLCBwcm9wZXJ0eSApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHR0aGlzWyBwcm9wZXJ0eSBdID0gdmFsdWU7XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFNlbmQgZGF0YSB0byBzZXJ2ZXIgb3IgY2xpZW50LlxuXHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuT2xpdmFudC5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uIHNlbmQoICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwicmVzcG9uc2VcIjogXCJodHRwLlNlcnZlclJlc3BvbnNlXCIsXG5cdFx0XHRcdFwicHJvY2VkdXJlXCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0aWYoIHRoaXMuZGVwdGggPT0gMiApe1xuXHRcdHRoaXMucmVtaW5kKCBcInNlbmRpbmcgaXMgZGlzYWJsZWQgZm9yIGRlcHRoIDJcIiApLnByb21wdCggKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0bGV0IG1lc3NhZ2UgPSBtZWVrKCB0aGlzLnN0YXR1cywgVTIwMGIoIHRoaXMudG9TdHJpbmcoICkgKS5yYXcoICkgKTtcblxuXHRsZXQgcHJvY2VkdXJlID0gYXJndW1lbnRzWyAwIF07XG5cblx0aWYoIGFzZWEuc2VydmVyICYmXG5cdFx0dGhpcy5zdGF0ZSA9PT0gUkVESVJFQ1QgJiZcblx0XHRwcm90eXBlKCB0aGlzLnBhdGgsIFNUUklORyApICYmXG5cdFx0dHJ1bHkoIHRoaXMucGF0aCApICYmXG5cdFx0Y2xhem9mKCBwcm9jZWR1cmUsIGh0dHAuU2VydmVyUmVzcG9uc2UgKSApXG5cdHtcblx0XHRzZWd3YXkoIHtcblx0XHRcdFwicmVzcG9uc2VcIjogcHJvY2VkdXJlLFxuXHRcdFx0XCJwYXRoXCI6IHRoaXMucGF0aCxcblx0XHRcdFwic3RhdHVzXCI6IHRoaXMuc3RhdHVzLFxuXHRcdFx0XCJkYXRhXCI6IG1lc3NhZ2UsXG5cdFx0fSApO1xuXG5cdFx0dGhpcy5mbHVzaFN0YXRlKCApO1xuXG5cdH1lbHNlIGlmKCBhc2VhLnNlcnZlciAmJlxuXHRcdGZhbHp5KCB0aGlzLnN0YXRlICkgJiZcblx0XHRjbGF6b2YoIHByb2NlZHVyZSwgaHR0cC5TZXJ2ZXJSZXNwb25zZSApIClcblx0e1xuXHRcdG1lc3NhZ2Uuc2VuZCggcHJvY2VkdXJlLCB0aGlzLmNvZGUgKTtcblxuXHR9ZWxzZSBpZiggYXNlYS5jbGllbnQgJiZcblx0XHR0aGlzLnN0YXRlID09IFJFRElSRUNUICYmXG5cdFx0cHJvdHlwZSggdGhpcy5wYXRoLCBTVFJJTkcgKSAmJlxuXHRcdHRydWx5KCB0aGlzLnBhdGggKSApXG5cdHtcblx0XHRzZWd3YXkoIHtcblx0XHRcdFwicGF0aFwiOiB0aGlzLnBhdGgsXG5cdFx0XHRcInN0YXR1c1wiOiB0aGlzLnN0YXR1cyxcblx0XHRcdFwiZGF0YVwiOiBtZXNzYWdlLFxuXHRcdH0gKTtcblxuXHRcdHRoaXMuZmx1c2hTdGF0ZSggKTtcblxuXHR9ZWxzZSBpZiggYXNlYS5jbGllbnQgJiZcblx0XHRmYWx6eSggdGhpcy5zdGF0ZSApICYmXG5cdFx0cHJvdHlwZSggcHJvY2VkdXJlLCBGVU5DVElPTiApIClcblx0e1xuXHRcdG1lc3NhZ2Uuc2VuZC5iaW5kKCB0aGlzICkoIHByb2NlZHVyZSApO1xuXG5cdH1lbHNlIGlmKCB0cnVseSggdGhpcy5zdGF0ZSApICl7XG5cdFx0dGhpcy5yZXNldCggSXNzdWUsIHRydWUgKVxuXHRcdFx0LnNpbGVuY2UoIClcblx0XHRcdC5wcm9tcHQoIGBjYW5ub3QgaW52b2tlIHNlbmRpbmcgc3RhdGUsICR7IHRoaXMuc3RhdGUgfSwgcHJvcGVybHlgIClcblx0XHRcdC5zZW5kKCBwcm9jZWR1cmUgKTtcblxuXHRcdHRoaXMuZmx1c2hTdGF0ZSggKTtcblxuXHR9ZWxzZXtcblx0XHR0aGlzLnJlc2V0KCBJc3N1ZSwgdHJ1ZSApXG5cdFx0XHQuc2lsZW5jZSggKVxuXHRcdFx0LnByb21wdCggXCJjYW5ub3Qgc2VuZCBwcm9wZXJseVwiICk7XG5cdH1cblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qO1xuXHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0U3RyZWFtIGRhdGEgdG8gbGlzdGVuZXJzLlxuXHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuT2xpdmFudC5wcm90b3R5cGUucmVwb3J0ID0gZnVuY3Rpb24gcmVwb3J0KCApe1xuXHRpZiggdGhpcy5kZXB0aCA9PSAyICl7XG5cdFx0dGhpcy5yZW1pbmQoIFwicmVwb3J0aW5nIGlzIGRpc2FibGVkIGZvciBkZXB0aCAyXCIgKS5wcm9tcHQoICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNuYXBkLmJpbmQoIHRoaXMgKVxuXHRcdCggZnVuY3Rpb24gZGVsYXkoICl7XG5cdFx0XHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRcdFx0cHJvY2Vzcy5lbWl0KCB0aGlzLm5hbWUsIHRoaXMgKTtcblxuXHRcdFx0fWVsc2UgaWYoIGFzZWEuY2xpZW50ICl7XG5cdFx0XHRcdGxldCBldmVudCA9IG5ldyBFdmVudCggdGhpcy5uYW1lICk7XG5cdFx0XHRcdGV2ZW50LmRhdGEgPSB0aGlzO1xuXG5cdFx0XHRcdGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoIGV2ZW50ICk7XG5cdFx0XHR9XG5cdFx0fSwgMTAwMCApO1xuXG5cdHJldHVybiB0aGlzO1xufTtcblxuLyo7XG5cdEBpbnRlcm5hbC1tZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRDcnVzaCB0aGUgcGFyYW1ldGVyIGV4dHJhY3Rpbmcgc3RyaW5nIGluZm9ybWF0aW9uLlxuXG5cdFx0U3BlY2lhbCBzdXBwb3J0IGZvciBnbHVjb3NlIGNvYXRlZCBwYXJhbWV0ZXJzLlxuXHRAZW5kLWludGVybmFsLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuY29uc3QgY3J1c2ggPSBmdW5jdGlvbiBjcnVzaCggcGFyYW1ldGVyLCBvcHRpb24gKXtcblx0b3B0aW9uID0gb3B0aW9uIHx8IHRoaXMuaW5zcGVjdCB8fCB7IH07XG5cblx0bGV0IGRlcHRoID0gb3B0aW9uLmRlcHRoIHx8IDE7XG5cdGxldCBsZW5ndGggPSBvcHRpb24ubGVuZ3RoIHx8IDIwMDtcblx0bGV0IHNwYWNlID0gL1xcc3syLH0vZztcblxuXHRpZiggYXNlYS5zZXJ2ZXIgJiYgcHJvdHlwZSggcGFyYW1ldGVyLCBPQkpFQ1QgKSAmJiBwYXJhbWV0ZXIuQ09BVEVEID09PSBDT0FURUQgKXtcblx0XHRpZiggcGFyYW1ldGVyLnNlbGYgKXtcblx0XHRcdHRoaXMuc2V0KCBDT05URVhULCBwYXJhbWV0ZXIuc2VsZiApO1xuXHRcdH1cblxuXHRcdHJldHVybiB1dGlsLmluc3BlY3QoIHBhcmFtZXRlciwgeyBcImRlcHRoXCI6IGRlcHRoIH0gKVxuXHRcdFx0LnJlcGxhY2UoIHNwYWNlLCBcIiBcIiApXG5cdFx0XHQuc3Vic3RyaW5nKCAwLCBsZW5ndGggKSArIFwiLi4uXCI7XG5cblx0fWVsc2UgaWYoIHBhcmFtZXRlciAmJiBjbGF6b2YoIHBhcmFtZXRlciwgRXJyb3IgKSAmJiBwYXJhbWV0ZXIuc3RhY2sgKXtcblx0XHR0aGlzLmVycm9yID0gcGFyYW1ldGVyO1xuXG5cdFx0dGhpcy5nZXRUcmFjZSggKTtcblxuXHRcdHJldHVybiBwYXJhbWV0ZXIuc3RhY2sudG9TdHJpbmcoICk7XG5cblx0fWVsc2UgaWYoIGNsYXpvZiggcGFyYW1ldGVyLCBPbGl2YW50ICkgKXtcblx0XHRyZXR1cm4gcGFyYW1ldGVyLm1lc3NhZ2U7XG5cblx0fWVsc2UgaWYoIHByb3R5cGUoIHBhcmFtZXRlciwgRlVOQ1RJT04gKSApe1xuXHRcdHJldHVybiBwYXJhbWV0ZXIudG9TdHJpbmcoIClcblx0XHRcdC5yZXBsYWNlKCBzcGFjZSwgXCIgXCIgKVxuXHRcdFx0LnN1YnN0cmluZyggMCwgbGVuZ3RoICkgKyBcIi4uLlwiO1xuXG5cdH1lbHNlIGlmKCBwcm90eXBlKCBwYXJhbWV0ZXIsIFNUUklORyApIHx8XG5cdFx0cHJvdHlwZSggcGFyYW1ldGVyLCBOVU1CRVIgKSB8fFxuXHRcdHByb3R5cGUoIHBhcmFtZXRlciwgQk9PTEVBTiApIClcblx0e1xuXHRcdHJldHVybiBwYXJhbWV0ZXIudG9TdHJpbmcoICk7XG5cblx0fWVsc2UgaWYoIGFzZWEuc2VydmVyICl7XG5cdFx0cmV0dXJuIHV0aWwuaW5zcGVjdCggcGFyYW1ldGVyLCB7IFwiZGVwdGhcIjogZGVwdGggfSApXG5cdFx0XHQucmVwbGFjZSggc3BhY2UsIFwiIFwiIClcblx0XHRcdC5zdWJzdHJpbmcoIDAsIGxlbmd0aCApO1xuXG5cdH1lbHNlIGlmKCBhc2VhLmNsaWVudCApe1xuXHRcdHJldHVybiBwYXJhbWV0ZXIudG9TdHJpbmcoICk7XG5cblx0fWVsc2V7XG5cdFx0cmV0dXJuIHBhcmFtZXRlci50b1N0cmluZyggKTtcblx0fVxufTtcblxuLyo7XG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRBcHBlbmQgbWVzc2FnZXMgdG8gdGhlIGN1cnJlbnQgbWVzc2FnZS5cblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLnJlbWluZCA9IGZ1bmN0aW9uIHJlbWluZCggKXtcblx0bGV0IHBhcmFtZXRlciA9IHJhemUoIGFyZ3VtZW50cyApO1xuXG5cdGlmKCBhcmlkKCBwYXJhbWV0ZXIgKSApe1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0bGV0IHBhcnNlID0gY3J1c2guYmluZCggdGhpcyApO1xuXG5cdHRoaXMubWVzc2FnZSA9IFUyMDBiKCBwYXJhbWV0ZXJcblx0XHQubWFwKCBmdW5jdGlvbiBvbkVhY2hQYXJhbWV0ZXIoIHBhcmFtZXRlciApe1xuXHRcdFx0aWYoIGRvdWJ0KCBwYXJhbWV0ZXIsIEFTX0FSUkFZICkgKXtcblx0XHRcdFx0cGFyYW1ldGVyID0gcmF6ZSggcGFyYW1ldGVyIClcblx0XHRcdFx0XHQubWFwKCAoIHBhcmFtZXRlciApID0+IHsgcmV0dXJuIHBhcnNlKCBwYXJhbWV0ZXIgKSB9ICk7XG5cblx0XHRcdFx0cmV0dXJuIFUyMDBiKCBwYXJhbWV0ZXJcblx0XHRcdFx0XHQuZmlsdGVyKCAoIG1lc3NhZ2UgKSA9PiB7IHJldHVybiB0cnVseSggbWVzc2FnZSApOyB9ICkgKVxuXHRcdFx0XHRcdC5qb2luKCBcIiwgXCIgKTtcblxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHJldHVybiBwYXJzZSggcGFyYW1ldGVyICk7XG5cdFx0XHR9XG5cdFx0fSApXG5cdFx0LnJldmVyc2UoIClcblx0XHQuY29uY2F0KCBbIHRoaXMubWVzc2FnZSBdIClcblx0XHQuZmlsdGVyKCAoIG1lc3NhZ2UgKSA9PiB7IHJldHVybiB0cnVseSggbWVzc2FnZSApOyB9IClcblx0XHQucmV2ZXJzZSggKSApXG5cdFx0LmpvaW4oIFwiLCBcIiApO1xuXG5cdHRoaXMucmVwb3J0KCApO1xuXG5cdHJldHVybiB0aGlzO1xufTtcblxuLyo7XG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRTaWxlbmNlIHRoZSBsb2dnaW5nIGNhcGFiaWxpdGllcy5cblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLnNpbGVuY2UgPSBmdW5jdGlvbiBzaWxlbmNlKCApe1xuXHR0aGlzLnNpbGVudCA9IHRydWU7XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdERlYWN0aXZhdGUgc2lsZW5jZS5cblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLnNob3V0ID0gZnVuY3Rpb24gc2hvdXQoICl7XG5cdHRoaXMuc2lsZW50ID0gZmFsc2U7XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdExvZyB0aGUgZGF0YS5cblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLnByb21wdCA9IGZ1bmN0aW9uIHByb21wdCggKXtcblx0dGhpcy5yZW1pbmQuYXBwbHkoIHRoaXMsIHJhemUoIGFyZ3VtZW50cyApICk7XG5cblx0c25hcGQuYmluZCggdGhpcyApXG5cdFx0KCBmdW5jdGlvbiBkZWxheSggKXtcblx0XHRcdGlmKCB0aGlzLmRlcHRoID09PSAyICl7XG5cdFx0XHRcdHRoaXMubG9nKCB0aGlzLmdldE1lc3NhZ2UoICkgKTtcblxuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblxuXHRcdFx0aWYoIGRvdWJ0KCB0aGlzLnN0YWNrLCBBUlJBWSApICYmIGZpbGxlZCggdGhpcy5zdGFjayApICl7XG5cdFx0XHRcdHRoaXMubG9nKCB0aGlzLmdldE1lc3NhZ2UoICkgKTtcblxuXHRcdFx0fWVsc2UgaWYoIHRoaXMuZGVwdGggPiA1ICl7XG5cdFx0XHRcdHRoaXMuZ2V0VHJhY2UoICggZXJyb3IsIHN0YWNrICkgPT4ge1xuXHRcdFx0XHRcdGlmKCBjbGF6b2YoIGVycm9yLCBFcnJvciApICl7XG5cdFx0XHRcdFx0XHR0aGlzLnJlbWluZCggYGVycm9yIGdldHRpbmcgc3RhY2sgdHJhY2UsICR7IGVycm9yIH1gICk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYoIHRydXUoIHN0YWNrICkgKXtcblx0XHRcdFx0XHRcdHRoaXMuc3RhY2sgPSBzdGFjaztcblxuXHRcdFx0XHRcdFx0dGhpcy5sb2coIHRoaXMuZ2V0TWVzc2FnZSggKSApO1xuXG5cdFx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0XHR0aGlzLmxvZyggdGhpcy5nZXRNZXNzYWdlKCApICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9ICk7XG5cblx0XHRcdH1lbHNle1xuXHRcdFx0XHR0aGlzLmxvZyggdGhpcy5nZXRNZXNzYWdlKCApICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdHJldHVybiB0aGlzO1xufTtcblxuLyo7XG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRTZXQgdGhlIHJlZGlyZWN0aW9uIGNvbmZpZ3VyYXRpb24uXG5cblx0XHRUaGlzIHdpbGwgdHJpZ2dlciByZWRpcmVjdCByZXNwb25zZSB3aGVuIHNlbmQgaXMgY2FsbGVkLlxuXG5cdFx0RGVmYXVsdCBvZiBERUZBVUxUX1JFRElSRUNUX1BBVEggd2lsbCBiZSB1c2VkIGlmIHBhdGggaXMgbm90IGdpdmVuLlxuXHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuT2xpdmFudC5wcm90b3R5cGUucmVkaXJlY3QgPSBmdW5jdGlvbiByZWRpcmVjdCggcGF0aCApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcInBhdGg6cmVxdWlyZWRcIjogXCJzdHJpbmdcIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0dGhpcy5zdGF0ZSA9IFJFRElSRUNUO1xuXHR0aGlzLnBhdGggPSBwYXRoO1xuXG5cdGlmKCAhdGhpcy5wYXRoICYmIHByb3R5cGUoIERFRkFVTFRfUkVESVJFQ1RfUEFUSCwgU1RSSU5HICkgKXtcblx0XHR0aGlzLnBhdGggPSBERUZBVUxUX1JFRElSRUNUX1BBVEg7XG5cblx0fWVsc2V7XG5cdFx0dGhpcy5yZXNldCggSXNzdWUsIHRydWUgKVxuXHRcdFx0LnNpbGVuY2UoIClcblx0XHRcdC5wcm9tcHQoIFwiZW1wdHkgcGF0aCB0byBiZSByZWRpcmVjdGVkXCIgKTtcblx0fVxuXG5cdHJldHVybiB0aGlzO1xufTtcblxuT2xpdmFudC5wcm90b3R5cGUuZmx1c2hTdGF0ZSA9IGZ1bmN0aW9uIGZsdXNoU3RhdGUoICl7XG5cdHRoaXMuc3RhdGUgPSBcIlwiO1xuXHR0aGlzLnBhdGggPSBcIlwiO1xuXG5cdHJldHVybiB0aGlzO1xufTtcblxuLyo7XG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRQYXNzIHRoZSBpbnN0YW5jZSB0byB0aGUgY2FsbGJhY2sgZmlyc3QgcGFyYW1ldGVyLlxuXG5cdFx0VGhpcyBmb2xsb3dzIHRoZSBzdGFuZGFyZCBlcnJvci1yZXN1bHQtb3B0aW9uIGNvbnZlbnRpb24uXG5cblx0XHRIYXMgc3BlY2lhbCBzdXBwb3J0IGZvciBnbHVjb3NlIGNvYXRlZCBvcHRpb24uXG5cdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5PbGl2YW50LnByb3RvdHlwZS5wYXNzID0gZnVuY3Rpb24gcGFzcyggY2FsbGJhY2ssIHJlc3VsdCwgb3B0aW9uICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwiY2FsbGJhY2s6cmVxdWlyZWRcIjogXCJmdW5jdGlvblwiXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRpZiggIXByb3R5cGUoIGNhbGxiYWNrLCBGVU5DVElPTiApICl7XG5cdFx0dGhpcy5yZXNldCggQnVnLCB0cnVlIClcblx0XHRcdC5wcm9tcHQoIFwiaW52YWxpZCBjYWxsYmFja1wiICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGlmKCB0cnV1KCBvcHRpb24gKSAmJiB0cnV1KCBvcHRpb24uc2VsZiApICYmIG9wdGlvbi5DT0FURUQgPT09IENPQVRFRCApe1xuXHRcdHRoaXMuc2V0KCBDT05URVhULCBvcHRpb24uc2VsZiApO1xuXHR9XG5cblx0aWYoIHRoaXMuY29udGV4dCApe1xuXHRcdGNhbGxiYWNrID0gY2FsbGVkLmJpbmQoIHRoaXMuY29udGV4dCApKCBjYWxsYmFjayApO1xuXG5cdH1lbHNle1xuXHRcdGNhbGxiYWNrID0gY2FsbGVkKCBjYWxsYmFjayApO1xuXHR9XG5cblx0Y2FsbGJhY2soIHRoaXMsIHJlc3VsdCwgb3B0aW9uICk7XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG5oYXJkZW4oIFwiY3JlYXRlXCIsIGZ1bmN0aW9uIGNyZWF0ZSggbmFtZSwgb3B0aW9uICl7XG5cdGxldCBMb2dFbmdpbmUgPSBkaWF0b20oIG5hbWUgKTtcblxuXHRoZXJlZGl0byggTG9nRW5naW5lLCBPbGl2YW50ICk7XG5cblx0TG9nRW5naW5lLnByb3RvdHlwZS5uYW1lID0gb3B0aW9uLm5hbWU7XG5cdExvZ0VuZ2luZS5wcm90b3R5cGUuc3RhdHVzID0gb3B0aW9uLnN0YXR1cztcblx0TG9nRW5naW5lLnByb3RvdHlwZS5jb2RlID0gb3B0aW9uLmNvZGU7XG5cdExvZ0VuZ2luZS5wcm90b3R5cGUuc2lsZW50ID0gb3B0aW9uLnNpbGVudDtcblx0TG9nRW5naW5lLnByb3RvdHlwZS5kZXB0aCA9IG9wdGlvbi5kZXB0aDtcblx0TG9nRW5naW5lLnByb3RvdHlwZS5jb2xvciA9IG9wdGlvbi5jb2xvcjtcblx0TG9nRW5naW5lLnByb3RvdHlwZS5pbnNwZWN0ID0gb3B0aW9uLmluc3BlY3Q7XG5cdExvZ0VuZ2luZS5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IG9wdGlvbi5pbml0aWFsaXplIHx8XG5cdFx0ZnVuY3Rpb24gaW5pdGlhbGl6ZSggKXtcblx0XHRcdHRoaXMubmFtZSA9IG9wdGlvbi5uYW1lO1xuXG5cdFx0XHR0aGlzLnN0YXR1cyA9IG9wdGlvbi5zdGF0dXM7XG5cblx0XHRcdHRoaXMuY29kZSA9IG9wdGlvbi5jb2RlO1xuXG5cdFx0XHR0aGlzLnNpbGVudCA9IG9wdGlvbi5zaWxlbnQ7XG5cblx0XHRcdHRoaXMuZGVwdGggPSBvcHRpb24uZGVwdGg7XG5cdFx0fTtcblxuXHRzeW1iaW90ZSggTG9nRW5naW5lICk7XG5cblx0aGFyZGVuKCBMb2dFbmdpbmUubmFtZSwgTG9nRW5naW5lICk7XG59LCBPbGl2YW50ICk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2xpdmFudDtcbiJdfQ==
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9saXZhbnQuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhcmlkIiwicmVxdWlyZSIsImFzZWEiLCJidWRnZSIsImNhbGxlZCIsImNsYXpvZiIsImRpYXRvbSIsImRvdWJ0IiwiRXRoZXJuaXR5IiwiZmFsemUiLCJmYWx6eSIsImZpbGxlZCIsImdsdWNvc2UiLCJoYXJkZW4iLCJoZXJlZGl0byIsImtlaW4iLCJtZWVrIiwib3V0cmUiLCJwbG91Z2giLCJwcm90eXBlIiwicmF6ZSIsInNuYXBkIiwic3ltYmlvdGUiLCJ0cnVseSIsInRydXUiLCJVMjAwYiIsInRyYWNlIiwid2luZG93IiwiREVGQVVMVF9SRURJUkVDVF9QQVRIIiwiT2xpdmFudCIsIkRFRkFVTFRfSU5TUEVDVF9PUFRJT04iLCJERUZBVUxUX0xPR19FTkdJTkUiLCJjbGllbnQiLCJjb25zb2xlIiwiZGVidWciLCJsb2ciLCJwcm90b3R5cGUiLCJpbml0aWFsaXplIiwib3B0aW9uIiwiZHVyYXRpb24iLCJEYXRlIiwibm93IiwiYXJndW1lbnRzIiwiT0JKRUNUIiwiQVJHVU1FTlRTIiwiRXJyb3IiLCJDT0FURUQiLCJsb2FkIiwibGV0IiwicGFyYW1ldGVyIiwibGVuZ3RoIiwiZXJyb3IiLCJyZW1pbmQiLCJhcHBseSIsIm1lc3NhZ2UiLCJjb25jYXQiLCJTVFJJTkciLCJjb25zdHJ1Y3RvciIsIkZVTkNUSU9OIiwibmFtZSIsImJpbmQiLCJFQ0hPIiwic3RhdHVzIiwiY29kZSIsIkVDSE9fQ09ERSIsImNvbnRleHQiLCJzZWxmIiwic2lsZW50IiwiQk9PTEVBTiIsImRlcHRoIiwiTlVNQkVSIiwic2VydmVyIiwiY29sb3IiLCJjaGFsayIsIndoaXRlIiwic3RhdGUiLCJzdGFjayIsImluc3BlY3QiLCJyZWRzZWEiLCJJc3N1ZSIsImJsYWNrc2VhIiwiRmF0YWwiLCJyZXNldCIsInJlbmV3IiwibG9nRW5naW5lIiwiZGF0YSIsInNpbGVuY2UiLCJwcm9tcHQiLCJ0b1N0cmluZyIsImpvaW4iLCJ2YWx1ZU9mIiwiZ2V0VGltZXN0YW1wIiwidGltZXN0YW1wIiwicHJpbnRUaW1lIiwiZGltIiwiY29sb3JNZXNzYWdlIiwicmVzb2x2ZU1lc3NhZ2UiLCJmaWx0ZXIiLCJyZXNvbHZlVHJhY2UiLCJBUlJBWSIsIm1hcCIsImZyYW1lIiwiZnVuY3Rpb25OYW1lIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwicmVkIiwiZ2V0TWVzc2FnZSIsImdldFRyYWNlIiwiY2FsbGJhY2siLCJmcm9tRXJyb3IiLCJ0aGVuIiwiZnJhbWVMaXN0IiwiZ2V0IiwicGFyc2UiLCJzZXQiLCJwcm9wZXJ0eSIsInZhbHVlIiwiTE9HIiwiU0lMRU5UIiwiQ09OVEVYVCIsInNlbmQiLCJyYXciLCJwcm9jZWR1cmUiLCJSRURJUkVDVCIsInBhdGgiLCJodHRwIiwiU2VydmVyUmVzcG9uc2UiLCJzZWd3YXkiLCJmbHVzaFN0YXRlIiwicmVwb3J0IiwiZGVsYXkiLCJwcm9jZXNzIiwiZW1pdCIsImV2ZW50IiwiRXZlbnQiLCJkb2N1bWVudCIsImRpc3BhdGNoRXZlbnQiLCJjcnVzaCIsInNwYWNlIiwidXRpbCIsInJlcGxhY2UiLCJzdWJzdHJpbmciLCJvbkVhY2hQYXJhbWV0ZXIiLCJBU19BUlJBWSIsInJldmVyc2UiLCJzaG91dCIsInJlZGlyZWN0IiwicGFzcyIsInJlc3VsdCIsIkJ1ZyIsImNyZWF0ZSIsIkxvZ0VuZ2luZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3RlosTUFBTUEsS0FBSyxFQUFFQyxPQUFPLEVBQUUsT0FBTyxDQUFDO0FBQzlCLE1BQU1DLEtBQUssRUFBRUQsT0FBTyxFQUFFLE9BQU8sQ0FBQztBQUM5QixNQUFNRSxNQUFNLEVBQUVGLE9BQU8sRUFBRSxRQUFRLENBQUM7QUFDaEMsTUFB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RUFBRSxDQUFDO0dBQ3JCLElBQUksQ0FBQ3NCLEtBQUssRUFBRXJCLE1BQU0sQ0FBQ3FCLElBQUk7O0dBRXZCLElBQUksQ0FBQ0csT0FBTyxFQUFFeEIsTUFBTSxDQUFDd0IsTUFBTTs7R0FFM0IsSUFBSSxDQUFDQyxLQUFLLEVBQUV6QixNQUFNLENBQUN5QixJQUFJOztHQUV2QixJQUFJLENBQUNJLE9BQU8sRUFBRTdCLE1BQU0sQ0FBQzZCLE1BQU07O0dBRTNCLElBQUksQ0FBQ0UsTUFBTSxFQUFFL0IsTUFBTSxDQUFDK0IsS0FBSztFQUMxQixDQUFDOztDQUVGL0MsUUFBUSxFQUFFa0ksVUFBVSxDQUFDOztDQUVyQjNJLE1BQU0sRUFBRTJJLFNBQVMsQ0FBQzdGLElBQUksRUFBRTZGLFVBQVUsQ0FBQztBQUNwQyxDQUFDLEVBQUUzSCxRQUFRLENBQUM7O0FBRVo0SCxNQUFNLENBQUNDLFFBQVEsRUFBRTdILE9BQU8iLCJmaWxlIjoib2xpdmFudC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJvbGl2YW50XCIsXG5cdFx0XHRcInBhdGhcIjogXCJvbGl2YW50L29saXZhbnQuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcIm9saXZhbnQuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwib2xpdmFudFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL29saXZhbnQuZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJvbGl2YW50LXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWUsXG5cdFx0XHRcImNsYXNzXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0RWNobyB0aGUgZGVzdHJ1Y3Rpb24gY2F1c2VkIGJ5IHlvdXIgY29kZS5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXJpZFwiOiBcImFyaWRcIixcblx0XHRcdFwiYXNlYVwiOiBcImFzZWFcIixcblx0XHRcdFwiYnVkZ2VcIjogXCJidWRnZVwiLFxuXHRcdFx0XCJibGFja3NlYVwiOiBcImJsYWNrc2VhXCIsXG5cdFx0XHRcImNhbGxlZFwiOiBcImNhbGxlZFwiLFxuXHRcdFx0XCJjaGFsa1wiOiBcImNoYWxrXCIsXG5cdFx0XHRcImNsYXpvZlwiOiBcImNsYXpvZlwiLFxuXHRcdFx0XCJkZXhpc3RcIjogXCJkZXhpc3RcIixcblx0XHRcdFwiZGlhdG9tXCI6IFwiZGlhdG9tXCIsXG5cdFx0XHRcIkV0aGVybml0eVwiOiBcImV0aGVybml0eVwiLFxuXHRcdFx0XCJFdmVudEVtaXR0ZXJcIjogXCJldmVudHNcIixcblx0XHRcdFwiZmFsemVcIjogXCJmYWx6ZVwiLFxuXHRcdFx0XCJmYWx6eVwiOiBcImZhbHp5XCIsXG5cdFx0XHRcImdsdWNvc2VcIjogXCJnbHVjb3NlXCIsXG5cdFx0XHRcImhhcmRlblwiOiBcImhhcmRlblwiLFxuXHRcdFx0XCJoZXJlZGl0b1wiOiBcImhlcmVkaXRvXCIsXG5cdFx0XHRcImtlaW5cIjogXCJrZWluXCIsXG5cdFx0XHRcImh0dHBcIjogXCJodHRwXCIsXG5cdFx0XHRcIm1lZWtcIjogXCJtZWVrXCJcblx0XHRcdFwib3V0cmVcIjogXCJvdXRyZVwiLFxuXHRcdFx0XCJwbG91Z2hcIjogXCJwbG91Z2hcIixcblx0XHRcdFwicHJvdHlwZVwiOiBcInByb3R5cGVcIixcblx0XHRcdFwicmF6ZVwiOiBcInJhemVcIixcblx0XHRcdFwicmVkc2VhXCI6IFwicmVkc2VhXCIsXG5cdFx0XHRcInNuYXBkXCI6IFwic25hcGRcIixcblx0XHRcdFwic2Vnd2F5XCI6IFwic2Vnd2F5XCIsXG5cdFx0XHRcInN5bWJpb3RlXCI6IFwic3ltYmlvdGVcIixcblx0XHRcdFwidHJhY2VcIjogWyBcInN0YWNrdHJhY2UtanNcIiwgXCJzdGFjay10cmFjZVwiIF0sXG5cdFx0XHRcInRydWx5XCI6IFwidHJ1bHlcIixcblx0XHRcdFwidHJ1dVwiOiBcInRydXVcIixcblx0XHRcdFwiVTIwMGJcIjogXCJ1MjAwYlwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFyaWQgPSByZXF1aXJlKCBcImFyaWRcIiApO1xuY29uc3QgYXNlYSA9IHJlcXVpcmUoIFwiYXNlYVwiICk7XG5jb25zdCBidWRnZSA9IHJlcXVpcmUoIFwiYnVkZ2VcIiApO1xuY29uc3QgY2FsbGVkID0gcmVxdWlyZSggXCJjYWxsZWRcIiApO1xuY29uc3QgY2xhem9mID0gcmVxdWlyZSggXCJjbGF6b2ZcIiApO1xuY29uc3QgZGlhdG9tID0gcmVxdWlyZSggXCJkaWF0b21cIiApO1xuY29uc3QgZG91YnQgPSByZXF1aXJlKCBcImRvdWJ0XCIgKTtcbmNvbnN0IEV0aGVybml0eSA9IHJlcXVpcmUoIFwiZXRoZXJuaXR5XCIgKTtcbmNvbnN0IGZhbHplID0gcmVxdWlyZSggXCJmYWx6ZVwiICk7XG5jb25zdCBmYWx6eSA9IHJlcXVpcmUoIFwiZmFsenlcIiApO1xuY29uc3QgZmlsbGVkID0gcmVxdWlyZSggXCJmaWxsZWRcIiApO1xuY29uc3QgZ2x1Y29zZSA9IHJlcXVpcmUoIFwiZ2x1Y29zZVwiICk7XG5jb25zdCBoYXJkZW4gPSByZXF1aXJlKCBcImhhcmRlblwiICk7XG5jb25zdCBoZXJlZGl0byA9IHJlcXVpcmUoIFwiaGVyZWRpdG9cIiApO1xuY29uc3Qga2VpbiA9IHJlcXVpcmUoIFwia2VpblwiICk7XG5jb25zdCBtZWVrID0gcmVxdWlyZSggXCJtZWVrXCIgKTtcbmNvbnN0IG91dHJlID0gcmVxdWlyZSggXCJvdXRyZVwiICk7XG5jb25zdCBwbG91Z2ggPSByZXF1aXJlKCBcInBsb3VnaFwiICk7XG5jb25zdCBwcm90eXBlID0gcmVxdWlyZSggXCJwcm90eXBlXCIgKTtcbmNvbnN0IHJhemUgPSByZXF1aXJlKCBcInJhemVcIiApO1xuY29uc3Qgc25hcGQgPSByZXF1aXJlKCBcInNuYXBkXCIgKTtcbmNvbnN0IHN5bWJpb3RlID0gcmVxdWlyZSggXCJzeW1iaW90ZVwiICk7XG5jb25zdCB0cnVseSA9IHJlcXVpcmUoIFwidHJ1bHlcIiApO1xuY29uc3QgdHJ1dSA9IHJlcXVpcmUoIFwidHJ1dVwiICk7XG5jb25zdCBVMjAwYiA9IHJlcXVpcmUoIFwidTIwMGJcIiApO1xuXG4vLzogQGNsaWVudDpcbmNvbnN0IHRyYWNlID0gcmVxdWlyZSggXCJzdGFja3RyYWNlLWpzXCIgKTtcbmhhcmRlbiggXCJERUZBVUxUX1JFRElSRUNUX1BBVEhcIiwgd2luZG93LkRFRkFVTFRfUkVESVJFQ1RfUEFUSCB8fCBcIi92aWV3L3N0YXR1cy9wYWdlXCIgKTtcbi8vOiBAZW5kLWNsaWVudFxuXG5cblxuY29uc3QgT2xpdmFudCA9IGRpYXRvbSggXCJPbGl2YW50XCIgKTtcblxuY29uc3QgREVGQVVMVF9JTlNQRUNUX09QVElPTiA9IHsgXCJkZXB0aFwiOiAxLCBcImxlbmd0aFwiOiAyMDAgfTtcbmNvbnN0IERFRkFVTFRfTE9HX0VOR0lORSA9IGFzZWEuY2xpZW50PyBjb25zb2xlLmRlYnVnIDogY29uc29sZS5sb2c7XG5cbi8qO1xuXHRAbm90ZTpcblx0XHRUaGlzIGlzIHRoZSBkZWZhdWx0IG5hbWUvc3RhdHVzIGFuZCBjb2RlIG9mIHRoZSBvbGl2YW50LlxuXHRAZW5kLW5vdGVcbiovXG5oYXJkZW4oIFwiRUNIT1wiLCBcImVjaG9cIiApO1xuaGFyZGVuKCBcIkVDSE9fQ09ERVwiLCAyMDAgKTtcblxuaGFyZGVuKCBcIlJFRElSRUNUXCIsIFwicmVkaXJlY3RcIiApO1xuaGFyZGVuKCBcIkNPTlRFWFRcIiwgXCJjb250ZXh0XCIgKTtcbmhhcmRlbiggXCJMT0dcIiwgXCJsb2dcIiApO1xuaGFyZGVuKCBcIlNJTEVOVFwiLCBcInNpbGVudFwiICk7XG5cbi8qO1xuXHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0T3B0aW9uIHNob3VsZCBub3QgYmUgZ2x1Y29zZSBjb2F0ZWQuXG5cdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5PbGl2YW50LnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gaW5pdGlhbGl6ZSggb3B0aW9uICl7XG5cdHRoaXMuZHVyYXRpb24gPSBEYXRlLm5vdyggKTtcblxuXHRpZiggcHJvdHlwZSggYXJndW1lbnRzWyAwIF0sIE9CSkVDVCApICYmXG5cdFx0IWRvdWJ0KCBhcmd1bWVudHNbIDAgXSwgQVJHVU1FTlRTICkgJiZcblx0XHQhKCBjbGF6b2YoIGFyZ3VtZW50c1sgMCBdLCBFcnJvciApICkgJiZcblx0XHRvcHRpb24uQ09BVEVEICE9PSBDT0FURUQgKVxuXHR7XG5cdFx0dGhpcy5sb2FkKCBvcHRpb24gKTtcblxuXHR9ZWxzZXtcblx0XHR0aGlzLmxvYWQoICk7XG5cdH1cblxuXHRsZXQgcGFyYW1ldGVyID0gYXJndW1lbnRzWyAwIF07XG5cblx0aWYoIGFyZ3VtZW50cy5sZW5ndGggPT0gMCApe1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH1lbHNlIGlmKCBjbGF6b2YoIHBhcmFtZXRlciwgRXJyb3IgKSApe1xuXHRcdGxldCBlcnJvciA9IHBhcmFtZXRlcjtcblxuXHRcdHRoaXMucmVtaW5kLmFwcGx5KCB0aGlzLCBbIGVycm9yLm1lc3NhZ2UsIGVycm9yIF0uY29uY2F0KCBidWRnZSggYXJndW1lbnRzICkgKSApO1xuXG5cdH1lbHNlIGlmKCBjbGF6b2YoIHBhcmFtZXRlciwgT2xpdmFudCApICl7XG5cdFx0dGhpcy5sb2FkKCBwYXJhbWV0ZXIgKTtcblxuXHR9ZWxzZSBpZiggZG91YnQoIHBhcmFtZXRlciwgQVJHVU1FTlRTICkgKXtcblx0XHR0aGlzLnJlbWluZC5hcHBseSggdGhpcywgcGxvdWdoKCBwYXJhbWV0ZXIgKSApO1xuXG5cdH1lbHNlIGlmKCBwcm90eXBlKCBwYXJhbWV0ZXIsIFNUUklORyApICl7XG5cdFx0dGhpcy5yZW1pbmQuYXBwbHkoIHRoaXMsIHJhemUoIGFyZ3VtZW50cyApICk7XG5cblx0fWVsc2UgaWYoIHByb3R5cGUoIHBhcmFtZXRlciwgT0JKRUNUICkgJiZcblx0XHRwYXJhbWV0ZXIuY29uc3RydWN0b3IgJiZcblx0XHRwcm90eXBlKCBwYXJhbWV0ZXIuY29uc3RydWN0b3IsIEZVTkNUSU9OICkgJiZcblx0XHRwYXJhbWV0ZXIuY29uc3RydWN0b3IubmFtZSAhPSBcIkZ1bmN0aW9uXCIgJiZcblx0XHRjbGF6b2YoIHBhcmFtZXRlciwgcGFyYW1ldGVyLmNvbnN0cnVjdG9yICkgKVxuXHR7XG5cdFx0dGhpcy5sb2FkKCBwYXJhbWV0ZXIgKTtcblxuXHRcdHRoaXMucmVtaW5kLmFwcGx5KCB0aGlzLCByYXplKCBhcmd1bWVudHMgKSApO1xuXG5cdH1lbHNlIGlmKCBwcm90eXBlKCBwYXJhbWV0ZXIsIE9CSkVDVCApICl7XG5cdFx0dGhpcy5yZW1pbmQuYXBwbHkoIHRoaXMsIHJhemUoIGFyZ3VtZW50cyApICk7XG5cdH1cblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbk9saXZhbnQucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbiBsb2FkKCBvcHRpb24gKXtcblx0b3B0aW9uID0gZ2x1Y29zZS5iaW5kKCB0aGlzICkoIG9wdGlvbiApO1xuXG5cdHRoaXMubmFtZSA9IG9wdGlvbi5uYW1lIHx8IHRoaXMubmFtZSB8fCBFQ0hPXG5cblx0dGhpcy5zdGF0dXMgPSBvcHRpb24uc3RhdHVzIHx8IHRoaXMuc3RhdHVzIHx8IEVDSE87XG5cblx0dGhpcy5jb2RlID0gb3B0aW9uLmNvZGUgfHwgdGhpcy5jb2RlIHx8IEVDSE9fQ09ERTtcblxuXHR0aGlzLmxvZyA9IG9wdGlvbi5sb2cgfHwgdGhpcy5sb2cgfHwgREVGQVVMVF9MT0dfRU5HSU5FO1xuXG5cdGlmKCBmYWx6ZSggdGhpcy5jb250ZXh0ICkgJiYgdHJ1dSggb3B0aW9uLnNlbGYgKSApe1xuXHRcdHRoaXMuY29udGV4dCA9IG9wdGlvbi5zZWxmO1xuXHR9XG5cblx0dGhpcy5zaWxlbnQgPSBrZWluKCBvcHRpb24sIFwic2lsZW50XCIgKT8gb3B0aW9uLnNpbGVudCA6XG5cdFx0a2VpbiggdGhpcywgXCJzaWxlbnRcIiApPyB0aGlzLnNpbGVudCA6IHRydWU7XG5cblx0aWYoICFwcm90eXBlKCB0aGlzLnNpbGVudCwgQk9PTEVBTiApICl7XG5cdFx0dGhpcy5zaWxlbnQgPSB0cnVlO1xuXHR9XG5cblx0Ly86IERlcHRoIGRpY3RhdGVzIHJlZmluZWQgc2V0dGluZ3Mgb2YgdGhpcyBwcm9jZWR1cmUuXG5cdHRoaXMuZGVwdGggPSBrZWluKCBvcHRpb24sIFwiZGVwdGhcIiApPyBvcHRpb24uZGVwdGggOlxuXHRcdGtlaW4oIHRoaXMsIFwiZGVwdGhcIiApPyB0aGlzLmRlcHRoIDogMTtcblxuXHRpZiggIXByb3R5cGUoIHRoaXMuZGVwdGgsIE5VTUJFUiApICl7XG5cdFx0dGhpcy5kZXB0aCA9IDE7XG5cdH1cblxuXHQvLzogRGVwdGggaXMgb25seSBmcm9tIDEtMCBvciAxLTIzNDUtNjc4OS0wLlxuXHQvLzogRGVwdGggMiBpcyBkZWVwIHNpbGVudCBkZXB0aC5cblx0dGhpcy5kZXB0aCA9IHRoaXMuZGVwdGggJSAxMDtcblxuXHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHR0aGlzLmNvbG9yID0gb3B0aW9uLmNvbG9yIHx8IHRoaXMuY29sb3IgfHwgY2hhbGsud2hpdGU7XG5cdH1cblxuXHR0aGlzLnN0YXRlID0gXCJcIjtcblxuXHR0aGlzLnN0YWNrID0gb3B0aW9uLnN0YWNrIHx8IHRoaXMuc3RhY2sgfHwgWyBdO1xuXG5cdHRoaXMubWVzc2FnZSA9IG9wdGlvbi5tZXNzYWdlIHx8IHRoaXMubWVzc2FnZSB8fCBcIlwiO1xuXG5cdHRoaXMuaW5zcGVjdCA9IG9wdGlvbi5pbnNwZWN0IHx8IHRoaXMuaW5zcGVjdCB8fCBERUZBVUxUX0lOU1BFQ1RfT1BUSU9OO1xuXG5cdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdHJlZHNlYSggSXNzdWUgKTtcblxuXHRcdGJsYWNrc2VhKCBGYXRhbCApO1xuXHR9XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdE1vZGlmaWVzIHRoZSBsb2cgZW5naW5lIHdoaWxlIG1haW50YWluaW5nIGVudmlyb25tZW50IHByb3BlcnRpZXMuXG5cdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5PbGl2YW50LnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uIHJlc2V0KCBvcHRpb24sIHJlbmV3ICl7XG5cdGlmKCBwcm90eXBlKCBvcHRpb24sIEZVTkNUSU9OICkgJiYgY2xhem9mKCBvcHRpb24sIE9saXZhbnQgKSApe1xuXHRcdGxldCBsb2dFbmdpbmUgPSBvcHRpb247XG5cblx0XHRpZiggcHJvdHlwZSggcmVuZXcsIEJPT0xFQU4gKSAmJiByZW5ldyApe1xuXHRcdFx0bGV0IGRhdGEgPSB7XG5cdFx0XHRcdFwibWVzc2FnZVwiOiB0aGlzLm1lc3NhZ2UsXG5cdFx0XHRcdFwic3RhY2tcIjogdGhpcy5zdGFja1xuXHRcdFx0fTtcblxuXHRcdFx0cmV0dXJuIGxvZ0VuZ2luZSggZGF0YSApO1xuXG5cdFx0fWVsc2V7XG5cdFx0XHR0aGlzLmxvYWQoIGxvZ0VuZ2luZS5wcm90b3R5cGUgKTtcblx0XHR9XG5cblx0fWVsc2UgaWYoIHByb3R5cGUoIG9wdGlvbiwgT0JKRUNUICkgKXtcblx0XHR0aGlzLmxvYWQoIG9wdGlvbiApO1xuXG5cdH1lbHNlIGlmKCAhY2xhem9mKCBvcHRpb24sIElzc3VlICkgKXtcblx0XHR0aGlzLnJlc2V0KCBJc3N1ZSwgdHJ1ZSApXG5cdFx0XHQuc2lsZW5jZSggKVxuXHRcdFx0LnByb21wdCggXCJjYW5ub3QgcmVzZXQgdG8gZ2l2ZW4gb3B0aW9uXCIsIG9wdGlvbiApO1xuXG5cdH1lbHNle1xuXHRcdElzc3VlKCBcImNhbm5vdCByZXNldCBsb2dcIiwgb3B0aW9uLCB0aGlzICkuc2lsZW5jZSggKS5wcm9tcHQoICk7XG5cdH1cblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbk9saXZhbnQucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoICl7XG5cdHJldHVybiBVMjAwYiggb3V0cmUoIFsgdGhpcy5uYW1lLCB0aGlzLnN0YXR1cywgdGhpcy5tZXNzYWdlIF0gKSApLmpvaW4oIFwiLCBcIiApO1xufTtcblxuT2xpdmFudC5wcm90b3R5cGUudmFsdWVPZiA9IGZ1bmN0aW9uIHZhbHVlT2YoICl7XG5cdHJldHVybiBVMjAwYiggb3V0cmUoIFsgdGhpcy5uYW1lLCB0aGlzLnN0YXR1cywgdGhpcy5tZXNzYWdlIF0gKSApLmpvaW4oIFwiLCBcIiApO1xufTtcblxuT2xpdmFudC5wcm90b3R5cGUuZ2V0VGltZXN0YW1wID0gZnVuY3Rpb24gZ2V0VGltZXN0YW1wKCApe1xuXHRsZXQgdGltZXN0YW1wID0gRXRoZXJuaXR5KCApLnByaW50VGltZSggdHJ1ZSApO1xuXG5cdHRpbWVzdGFtcCA9IGAkeyB0aW1lc3RhbXAgfSB8ICR7ICggRGF0ZS5ub3coICkgLSB0aGlzLmR1cmF0aW9uICkgfW1zYDtcblxuXHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRyZXR1cm4gY2hhbGsuZGltKCB0aW1lc3RhbXAgKTtcblx0fVxuXG5cdHJldHVybiB0aW1lc3RhbXA7XG59O1xuXG5PbGl2YW50LnByb3RvdHlwZS5jb2xvck1lc3NhZ2UgPSBmdW5jdGlvbiBjb2xvck1lc3NhZ2UoIGNvbG9yLCBtZXNzYWdlICl7XG5cdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdGlmKCBwcm90eXBlKCBjb2xvciwgRlVOQ1RJT04gKSApe1xuXHRcdFx0cmV0dXJuIGNvbG9yKCBtZXNzYWdlICk7XG5cblx0XHR9ZWxzZSBpZiggcHJvdHlwZSggY29sb3IsIFNUUklORyApICYmIHRydWx5KCBjb2xvciApICl7XG5cdFx0XHRpZigga2VpbiggY2hhbGssIGNvbG9yICkgJiYgcHJvdHlwZSggY2hhbGtbIGNvbG9yIF0sIEZVTkNUSU9OICkgKXtcblx0XHRcdFx0cmV0dXJuIGNoYWxrWyBjb2xvciBdKCBtZXNzYWdlICk7XG5cblx0XHRcdH1lbHNle1xuXHRcdFx0XHR0aGlzLnJlbWluZCggYGludmFsaWQgbWVzc2FnZSBjb2xvciwgJHsgY29sb3IgfWAgKTtcblxuXHRcdFx0XHRyZXR1cm4gY2hhbGsud2hpdGUoIG1lc3NhZ2UgKTtcblx0XHRcdH1cblxuXHRcdH1lbHNle1xuXHRcdFx0cmV0dXJuIGNoYWxrLndoaXRlKCBtZXNzYWdlICk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIG1lc3NhZ2U7XG59O1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFRoZSBtZXNzYWdlIGlzIGRpdmlkZWQgaW50byB0aHJlZSBwYXJ0cyxcblx0XHQxLiBuYW1lc3BhY2UsXG5cdFx0Mi4gc3RhdHVzLFxuXHRcdDMuIGFjdHVhbCBtZXNzYWdlXG5cdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5PbGl2YW50LnByb3RvdHlwZS5yZXNvbHZlTWVzc2FnZSA9IGZ1bmN0aW9uIHJlc29sdmVNZXNzYWdlKCApe1xuXHRsZXQgbWVzc2FnZSA9IFUyMDBiKCBvdXRyZSggWyB0aGlzLm5hbWUsIHRoaXMuc3RhdHVzLCB0aGlzLm1lc3NhZ2UgXSApXG5cdFx0LmZpbHRlciggdHJ1bHkgKSApLmpvaW4oIFwiLCBcIiApO1xuXG5cdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdHJldHVybiB0aGlzLmNvbG9yTWVzc2FnZSggdGhpcy5jb2xvciwgbWVzc2FnZSApO1xuXHR9XG5cblx0cmV0dXJuIG1lc3NhZ2U7XG59O1xuXG5PbGl2YW50LnByb3RvdHlwZS5yZXNvbHZlVHJhY2UgPSBmdW5jdGlvbiByZXNvbHZlVHJhY2UoICl7XG5cdGxldCBzdGFjayA9IFwic3RhY2sgdHJhY2Ugbm90IGF2YWlsYWJsZVwiO1xuXG5cdGlmKCAhdGhpcy5zaWxlbnQgJiYgZG91YnQoIHRoaXMuc3RhY2ssIEFSUkFZICkgJiYgZmlsbGVkKCB0aGlzLnN0YWNrICkgKXtcblx0XHRzdGFjayA9IHRoaXMuc3RhY2s7XG5cblx0XHRzdGFjayA9IHN0YWNrLm1hcCggKCBmcmFtZSApID0+IHtcblx0XHRcdGlmKCBmcmFtZS50b1N0cmluZyggKSA9PT0gXCJbb2JqZWN0IE9iamVjdF1cIiApe1xuXHRcdFx0XHRsZXQgeyBmdW5jdGlvbk5hbWUsIGZpbGVOYW1lLCBsaW5lTnVtYmVyLCBjb2x1bW5OdW1iZXIgfSA9IGZyYW1lO1xuXG5cdFx0XHRcdHJldHVybiBgJHsgZnVuY3Rpb25OYW1lIH0gKCR7IGZpbGVOYW1lIH06JHsgbGluZU51bWJlciB9OiR7IGNvbHVtbk51bWJlciB9KWA7XG5cblx0XHRcdH1lbHNle1xuXHRcdFx0XHRyZXR1cm4gZnJhbWUudG9TdHJpbmcoICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdFx0c3RhY2sgPSBVMjAwYiggc3RhY2sgKS5qb2luKCBcIlxcblwiICk7XG5cblx0XHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRcdHJldHVybiBjaGFsay5kaW0ucmVkKCBzdGFjayApO1xuXHRcdH1cblxuXHRcdHJldHVybiBzdGFjaztcblx0fVxuXG5cdGlmKCB0aGlzLmRlcHRoIDwgNSAmJlxuXHRcdHRoaXMuc2lsZW50ICYmXG5cdFx0dHJ1dSggdGhpcy5jb250ZXh0ICkgJiZcblx0IFx0cHJvdHlwZSggdGhpcy5jb250ZXh0LmNvbnN0cnVjdG9yLCBGVU5DVElPTiApICYmXG5cdFx0dHJ1bHkoIHRoaXMuY29udGV4dC5jb25zdHJ1Y3Rvci5uYW1lICkgKVxuXHR7XG5cdFx0c3RhY2sgPSBgY2FsbGVkIHdpdGggY29udGV4dCwgJHsgdGhpcy5jb250ZXh0LmNvbnN0cnVjdG9yLm5hbWUgfWA7XG5cblx0XHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRcdHJldHVybiBjaGFsay5kaW0oIHN0YWNrICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHN0YWNrO1xuXHR9XG5cblx0aWYoIHRoaXMuc2lsZW50ICl7XG5cdFx0c3RhY2sgPSBcInN0YWNrIHRyYWNlIGlzIG5vdCBhdmFpbGFibGUgb24gc2lsZW50IG1vZGVcIjtcblxuXHRcdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdFx0cmV0dXJuIGNoYWxrLmRpbSggc3RhY2sgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc3RhY2s7XG5cdH1cblxuXHRpZiggdGhpcy5kZXB0aCA+IDUgKXtcblx0XHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRcdHJldHVybiBjaGFsay5kaW0oIHN0YWNrICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHN0YWNrO1xuXHR9XG59O1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFRoZSBtZXNzYWdlIGNvbnNpc3Qgb2YgdGhyZWUgbGF5ZXIgb2Ygc3RyaW5ncyxcblx0XHRcdDEuIHRpbWVzdGFtcCBpbiB0cnVlIHRpbWUgZm9ybWF0XG5cdFx0XHQyLiBhY3R1YWwgcmVhZGFibGUgbWVzc2FnZVxuXHRcdFx0My4gbWVzc2FnZSB0cmFjZSBvciBtZXNzYWdlIGNvbnRleHRcblxuXHRcdFRoZXNlIGluZm9ybWF0aW9uIHdpbGwgYmUgZGl2aWRlZCB0aHJvdWdoIHplcm8td2lkdGggc3BhY2UgY29udmVudGlvbi5cblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLmdldE1lc3NhZ2UgPSBmdW5jdGlvbiBnZXRNZXNzYWdlKCApe1xuXHRyZXR1cm4gVTIwMGIoIFtcblx0XHR0aGlzLmdldFRpbWVzdGFtcCggKSxcblx0XHR0aGlzLnJlc29sdmVNZXNzYWdlKCApLFxuXHRcdHRoaXMucmVzb2x2ZVRyYWNlKCApXG5cdF0gKS5qb2luKCBcIlxcblwiICk7XG59O1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFRoaXMgc2hvdWxkIGJlIHVzZWQgaW50ZXJuYWxseSBhcyBtdWNoIGFzIHBvc3NpYmxlLlxuXHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuT2xpdmFudC5wcm90b3R5cGUuZ2V0VHJhY2UgPSBmdW5jdGlvbiBnZXRUcmFjZSggY2FsbGJhY2sgKXtcblx0aWYoIHRoaXMuZGVwdGggPT0gMiApe1xuXHRcdHRoaXMucmVtaW5kKCBcInRyYWNpbmcgaXMgZGlzYWJsZWQgZm9yIGRlcHRoIDJcIiApLnByb21wdCggKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Y2FsbGJhY2sgPSBjYWxsZWQuYmluZCggdGhpcyApKCBjYWxsYmFjayApO1xuXG5cdHNuYXBkLmJpbmQoIHRoaXMgKSggY2FsbGJhY2ssIDEwMDAgKTtcblxuXHRpZiggYXNlYS5jbGllbnQgKXtcblx0XHRpZiggY2xhem9mKCB0aGlzLmVycm9yLCBFcnJvciApICl7XG5cdFx0XHR0cmFjZS5mcm9tRXJyb3IoIHRoaXMuZXJyb3IgKVxuXHRcdFx0XHQudGhlbiggKCBmcmFtZUxpc3QgKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5zdGFjayA9IGZyYW1lTGlzdDtcblxuXHRcdFx0XHRcdGNhbGxiYWNrKCBudWxsLCB0aGlzLnN0YWNrICk7XG5cdFx0XHRcdH0gKVxuXHRcdFx0XHQuY2F0Y2goICggZXJyb3IgKSA9PiB7IGNhbGxiYWNrKCB0aGlzLnJlbWluZCggZXJyb3IgKSApOyB9ICk7XG5cblx0XHR9ZWxzZSBpZiggdGhpcy5kZXB0aCA+IDUgKXtcblx0XHRcdHRyYWNlLmdldCggKVxuXHRcdFx0XHQudGhlbiggKCBmcmFtZUxpc3QgKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5zdGFjayA9IGZyYW1lTGlzdDtcblxuXHRcdFx0XHRcdGNhbGxiYWNrKCBudWxsLCB0aGlzLnN0YWNrICk7XG5cdFx0XHRcdH0gKVxuXHRcdFx0XHQuY2F0Y2goICggZXJyb3IgKSA9PiB7IGNhbGxiYWNrKCB0aGlzLnJlbWluZCggZXJyb3IgKSApOyB9ICk7XG5cdFx0fVxuXG5cdH1lbHNlIGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdGlmKCBjbGF6b2YoIHRoaXMuZXJyb3IsIEVycm9yICkgKXtcblx0XHRcdHRoaXMuc3RhY2sgPSB0cmFjZS5wYXJzZSggdGhpcy5lcnJvciApO1xuXG5cdFx0XHRjYWxsYmFjayggbnVsbCwgdGhpcy5zdGFjayApO1xuXG5cdFx0fWVsc2UgaWYoIHRoaXMuZGVwdGggPiA1ICl7XG5cdFx0XHR0aGlzLnN0YWNrID0gdHJhY2UuZ2V0KCApO1xuXG5cdFx0XHRjYWxsYmFjayggbnVsbCwgdGhpcy5zdGFjayApO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0aGlzO1xufTtcblxuLyo7XG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRTZXRzIGEgcHJvcGVydHkgb2YgdGhpcyBsb2cgZW5naW5lLlxuXG5cdFx0Tm90IGFsbCBwcm9wZXJ0eSBjYW4gYmUgc2V0IHRvIGxpbWl0IHRoaXMgZnVuY3Rpb25cblx0XHRcdGZvciBzZWN1cml0eSBwdXJwb3Nlcy5cblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIHNldCggcHJvcGVydHksIHZhbHVlICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwicHJvcGVydHk6cmVxdWlyZWRcIjogXCJzdHJpbmdcIixcblx0XHRcdFx0XCJ2YWx1ZVwiOiBcIipcIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0bGV0IHBhcmFtZXRlciA9IHJhemUoIGFyZ3VtZW50cyApO1xuXG5cdGlmKCBwYXJhbWV0ZXIubGVuZ3RoID09IDEgJiYgcHJvdHlwZSggcGFyYW1ldGVyWyAwIF0sIE9CSkVDVCApICl7XG5cdFx0bGV0IG9wdGlvbiA9IHBhcmFtZXRlclsgMCBdO1xuXHRcdGZvciggbGV0IHByb3BlcnR5IGluIG9wdGlvbiApe1xuXHRcdFx0dGhpcy5zZXQoIHByb3BlcnR5LCBvcHRpb25bIHByb3BlcnR5IF0gKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGlmKCAhcHJvdHlwZSggcHJvcGVydHksIFNUUklORyApICl7XG5cdFx0dGhpcy5yZXNldCggSXNzdWUsIHRydWUgKVxuXHRcdFx0LnNpbGVuY2UoIClcblx0XHRcdC5wcm9tcHQoIFwiaW52YWxpZCBwcm9wZXJ0eVwiLCBwcm9wZXJ0eSApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRpZiggcHJvdHlwZSggcHJvcGVydHksIFNUUklORyApICYmXG5cdFx0cHJvcGVydHkgIT0gTE9HICAmJlxuXHRcdHByb3BlcnR5ICE9IFNJTEVOVCAmJlxuXHRcdHByb3BlcnR5ICE9IENPTlRFWFQgKVxuXHR7XG5cdFx0dGhpcy5yZXNldCggSXNzdWUsIHRydWUgKVxuXHRcdFx0LnNpbGVuY2UoIClcblx0XHRcdC5wcm9tcHQoIFwiaW52YWxpZCBwcm9wZXJ0eVwiLCBwcm9wZXJ0eSApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHR0aGlzWyBwcm9wZXJ0eSBdID0gdmFsdWU7XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFNlbmQgZGF0YSB0byBzZXJ2ZXIgb3IgY2xpZW50LlxuXHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuT2xpdmFudC5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uIHNlbmQoICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwicmVzcG9uc2VcIjogXCJodHRwLlNlcnZlclJlc3BvbnNlXCIsXG5cdFx0XHRcdFwicHJvY2VkdXJlXCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0aWYoIHRoaXMuZGVwdGggPT0gMiApe1xuXHRcdHRoaXMucmVtaW5kKCBcInNlbmRpbmcgaXMgZGlzYWJsZWQgZm9yIGRlcHRoIDJcIiApLnByb21wdCggKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0bGV0IG1lc3NhZ2UgPSBtZWVrKCB0aGlzLnN0YXR1cywgVTIwMGIoIHRoaXMudG9TdHJpbmcoICkgKS5yYXcoICkgKTtcblxuXHRsZXQgcHJvY2VkdXJlID0gYXJndW1lbnRzWyAwIF07XG5cblx0aWYoIGFzZWEuc2VydmVyICYmXG5cdFx0dGhpcy5zdGF0ZSA9PT0gUkVESVJFQ1QgJiZcblx0XHRwcm90eXBlKCB0aGlzLnBhdGgsIFNUUklORyApICYmXG5cdFx0dHJ1bHkoIHRoaXMucGF0aCApICYmXG5cdFx0Y2xhem9mKCBwcm9jZWR1cmUsIGh0dHAuU2VydmVyUmVzcG9uc2UgKSApXG5cdHtcblx0XHRzZWd3YXkoIHtcblx0XHRcdFwicmVzcG9uc2VcIjogcHJvY2VkdXJlLFxuXHRcdFx0XCJwYXRoXCI6IHRoaXMucGF0aCxcblx0XHRcdFwic3RhdHVzXCI6IHRoaXMuc3RhdHVzLFxuXHRcdFx0XCJkYXRhXCI6IG1lc3NhZ2UsXG5cdFx0fSApO1xuXG5cdFx0dGhpcy5mbHVzaFN0YXRlKCApO1xuXG5cdH1lbHNlIGlmKCBhc2VhLnNlcnZlciAmJlxuXHRcdGZhbHp5KCB0aGlzLnN0YXRlICkgJiZcblx0XHRjbGF6b2YoIHByb2NlZHVyZSwgaHR0cC5TZXJ2ZXJSZXNwb25zZSApIClcblx0e1xuXHRcdG1lc3NhZ2Uuc2VuZCggcHJvY2VkdXJlLCB0aGlzLmNvZGUgKTtcblxuXHR9ZWxzZSBpZiggYXNlYS5jbGllbnQgJiZcblx0XHR0aGlzLnN0YXRlID09IFJFRElSRUNUICYmXG5cdFx0cHJvdHlwZSggdGhpcy5wYXRoLCBTVFJJTkcgKSAmJlxuXHRcdHRydWx5KCB0aGlzLnBhdGggKSApXG5cdHtcblx0XHRzZWd3YXkoIHtcblx0XHRcdFwicGF0aFwiOiB0aGlzLnBhdGgsXG5cdFx0XHRcInN0YXR1c1wiOiB0aGlzLnN0YXR1cyxcblx0XHRcdFwiZGF0YVwiOiBtZXNzYWdlLFxuXHRcdH0gKTtcblxuXHRcdHRoaXMuZmx1c2hTdGF0ZSggKTtcblxuXHR9ZWxzZSBpZiggYXNlYS5jbGllbnQgJiZcblx0XHRmYWx6eSggdGhpcy5zdGF0ZSApICYmXG5cdFx0cHJvdHlwZSggcHJvY2VkdXJlLCBGVU5DVElPTiApIClcblx0e1xuXHRcdG1lc3NhZ2Uuc2VuZC5iaW5kKCB0aGlzICkoIHByb2NlZHVyZSApO1xuXG5cdH1lbHNlIGlmKCB0cnVseSggdGhpcy5zdGF0ZSApICl7XG5cdFx0dGhpcy5yZXNldCggSXNzdWUsIHRydWUgKVxuXHRcdFx0LnNpbGVuY2UoIClcblx0XHRcdC5wcm9tcHQoIGBjYW5ub3QgaW52b2tlIHNlbmRpbmcgc3RhdGUsICR7IHRoaXMuc3RhdGUgfSwgcHJvcGVybHlgIClcblx0XHRcdC5zZW5kKCBwcm9jZWR1cmUgKTtcblxuXHRcdHRoaXMuZmx1c2hTdGF0ZSggKTtcblxuXHR9ZWxzZXtcblx0XHR0aGlzLnJlc2V0KCBJc3N1ZSwgdHJ1ZSApXG5cdFx0XHQuc2lsZW5jZSggKVxuXHRcdFx0LnByb21wdCggXCJjYW5ub3Qgc2VuZCBwcm9wZXJseVwiICk7XG5cdH1cblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qO1xuXHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0U3RyZWFtIGRhdGEgdG8gbGlzdGVuZXJzLlxuXHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuT2xpdmFudC5wcm90b3R5cGUucmVwb3J0ID0gZnVuY3Rpb24gcmVwb3J0KCApe1xuXHRpZiggdGhpcy5kZXB0aCA9PSAyICl7XG5cdFx0dGhpcy5yZW1pbmQoIFwicmVwb3J0aW5nIGlzIGRpc2FibGVkIGZvciBkZXB0aCAyXCIgKS5wcm9tcHQoICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNuYXBkLmJpbmQoIHRoaXMgKVxuXHRcdCggZnVuY3Rpb24gZGVsYXkoICl7XG5cdFx0XHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRcdFx0cHJvY2Vzcy5lbWl0KCB0aGlzLm5hbWUsIHRoaXMgKTtcblxuXHRcdFx0fWVsc2UgaWYoIGFzZWEuY2xpZW50ICl7XG5cdFx0XHRcdGxldCBldmVudCA9IG5ldyBFdmVudCggdGhpcy5uYW1lICk7XG5cdFx0XHRcdGV2ZW50LmRhdGEgPSB0aGlzO1xuXG5cdFx0XHRcdGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoIGV2ZW50ICk7XG5cdFx0XHR9XG5cdFx0fSwgMTAwMCApO1xuXG5cdHJldHVybiB0aGlzO1xufTtcblxuLyo7XG5cdEBpbnRlcm5hbC1tZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRDcnVzaCB0aGUgcGFyYW1ldGVyIGV4dHJhY3Rpbmcgc3RyaW5nIGluZm9ybWF0aW9uLlxuXG5cdFx0U3BlY2lhbCBzdXBwb3J0IGZvciBnbHVjb3NlIGNvYXRlZCBwYXJhbWV0ZXJzLlxuXHRAZW5kLWludGVybmFsLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuY29uc3QgY3J1c2ggPSBmdW5jdGlvbiBjcnVzaCggcGFyYW1ldGVyLCBvcHRpb24gKXtcblx0b3B0aW9uID0gb3B0aW9uIHx8IHRoaXMuaW5zcGVjdCB8fCB7IH07XG5cblx0bGV0IGRlcHRoID0gb3B0aW9uLmRlcHRoIHx8IDE7XG5cdGxldCBsZW5ndGggPSBvcHRpb24ubGVuZ3RoIHx8IDIwMDtcblx0bGV0IHNwYWNlID0gL1xcc3syLH0vZztcblxuXHRpZiggYXNlYS5zZXJ2ZXIgJiYgcHJvdHlwZSggcGFyYW1ldGVyLCBPQkpFQ1QgKSAmJiBwYXJhbWV0ZXIuQ09BVEVEID09PSBDT0FURUQgKXtcblx0XHRpZiggcGFyYW1ldGVyLnNlbGYgKXtcblx0XHRcdHRoaXMuc2V0KCBDT05URVhULCBwYXJhbWV0ZXIuc2VsZiApO1xuXHRcdH1cblxuXHRcdHJldHVybiB1dGlsLmluc3BlY3QoIHBhcmFtZXRlciwgeyBcImRlcHRoXCI6IGRlcHRoIH0gKVxuXHRcdFx0LnJlcGxhY2UoIHNwYWNlLCBcIiBcIiApXG5cdFx0XHQuc3Vic3RyaW5nKCAwLCBsZW5ndGggKSArIFwiLi4uXCI7XG5cblx0fWVsc2UgaWYoIHBhcmFtZXRlciAmJiBjbGF6b2YoIHBhcmFtZXRlciwgRXJyb3IgKSAmJiBwYXJhbWV0ZXIuc3RhY2sgKXtcblx0XHR0aGlzLmVycm9yID0gcGFyYW1ldGVyO1xuXG5cdFx0dGhpcy5nZXRUcmFjZSggKTtcblxuXHRcdHJldHVybiBwYXJhbWV0ZXIuc3RhY2sudG9TdHJpbmcoICk7XG5cblx0fWVsc2UgaWYoIGNsYXpvZiggcGFyYW1ldGVyLCBPbGl2YW50ICkgKXtcblx0XHRyZXR1cm4gcGFyYW1ldGVyLm1lc3NhZ2U7XG5cblx0fWVsc2UgaWYoIHByb3R5cGUoIHBhcmFtZXRlciwgRlVOQ1RJT04gKSApe1xuXHRcdHJldHVybiBwYXJhbWV0ZXIudG9TdHJpbmcoIClcblx0XHRcdC5yZXBsYWNlKCBzcGFjZSwgXCIgXCIgKVxuXHRcdFx0LnN1YnN0cmluZyggMCwgbGVuZ3RoICkgKyBcIi4uLlwiO1xuXG5cdH1lbHNlIGlmKCBwcm90eXBlKCBwYXJhbWV0ZXIsIFNUUklORyApIHx8XG5cdFx0cHJvdHlwZSggcGFyYW1ldGVyLCBOVU1CRVIgKSB8fFxuXHRcdHByb3R5cGUoIHBhcmFtZXRlciwgQk9PTEVBTiApIClcblx0e1xuXHRcdHJldHVybiBwYXJhbWV0ZXIudG9TdHJpbmcoICk7XG5cblx0fWVsc2UgaWYoIGFzZWEuc2VydmVyICl7XG5cdFx0cmV0dXJuIHV0aWwuaW5zcGVjdCggcGFyYW1ldGVyLCB7IFwiZGVwdGhcIjogZGVwdGggfSApXG5cdFx0XHQucmVwbGFjZSggc3BhY2UsIFwiIFwiIClcblx0XHRcdC5zdWJzdHJpbmcoIDAsIGxlbmd0aCApO1xuXG5cdH1lbHNlIGlmKCBhc2VhLmNsaWVudCApe1xuXHRcdHJldHVybiBwYXJhbWV0ZXIudG9TdHJpbmcoICk7XG5cblx0fWVsc2V7XG5cdFx0cmV0dXJuIHBhcmFtZXRlci50b1N0cmluZyggKTtcblx0fVxufTtcblxuLyo7XG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRBcHBlbmQgbWVzc2FnZXMgdG8gdGhlIGN1cnJlbnQgbWVzc2FnZS5cblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLnJlbWluZCA9IGZ1bmN0aW9uIHJlbWluZCggKXtcblx0bGV0IHBhcmFtZXRlciA9IHJhemUoIGFyZ3VtZW50cyApO1xuXG5cdGlmKCBhcmlkKCBwYXJhbWV0ZXIgKSApe1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0bGV0IHBhcnNlID0gY3J1c2guYmluZCggdGhpcyApO1xuXG5cdHRoaXMubWVzc2FnZSA9IFUyMDBiKCBwYXJhbWV0ZXJcblx0XHQubWFwKCBmdW5jdGlvbiBvbkVhY2hQYXJhbWV0ZXIoIHBhcmFtZXRlciApe1xuXHRcdFx0aWYoIGRvdWJ0KCBwYXJhbWV0ZXIsIEFTX0FSUkFZICkgKXtcblx0XHRcdFx0cGFyYW1ldGVyID0gcmF6ZSggcGFyYW1ldGVyIClcblx0XHRcdFx0XHQubWFwKCAoIHBhcmFtZXRlciApID0+IHsgcmV0dXJuIHBhcnNlKCBwYXJhbWV0ZXIgKSB9ICk7XG5cblx0XHRcdFx0cmV0dXJuIFUyMDBiKCBwYXJhbWV0ZXJcblx0XHRcdFx0XHQuZmlsdGVyKCAoIG1lc3NhZ2UgKSA9PiB7IHJldHVybiB0cnVseSggbWVzc2FnZSApOyB9ICkgKVxuXHRcdFx0XHRcdC5qb2luKCBcIiwgXCIgKTtcblxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHJldHVybiBwYXJzZSggcGFyYW1ldGVyICk7XG5cdFx0XHR9XG5cdFx0fSApXG5cdFx0LnJldmVyc2UoIClcblx0XHQuY29uY2F0KCBbIHRoaXMubWVzc2FnZSBdIClcblx0XHQuZmlsdGVyKCAoIG1lc3NhZ2UgKSA9PiB7IHJldHVybiB0cnVseSggbWVzc2FnZSApOyB9IClcblx0XHQucmV2ZXJzZSggKSApXG5cdFx0LmpvaW4oIFwiLCBcIiApO1xuXG5cdHRoaXMucmVwb3J0KCApO1xuXG5cdHJldHVybiB0aGlzO1xufTtcblxuLyo7XG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRTaWxlbmNlIHRoZSBsb2dnaW5nIGNhcGFiaWxpdGllcy5cblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLnNpbGVuY2UgPSBmdW5jdGlvbiBzaWxlbmNlKCApe1xuXHR0aGlzLnNpbGVudCA9IHRydWU7XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdERlYWN0aXZhdGUgc2lsZW5jZS5cblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLnNob3V0ID0gZnVuY3Rpb24gc2hvdXQoICl7XG5cdHRoaXMuc2lsZW50ID0gZmFsc2U7XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdExvZyB0aGUgZGF0YS5cblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLnByb21wdCA9IGZ1bmN0aW9uIHByb21wdCggKXtcblx0dGhpcy5yZW1pbmQuYXBwbHkoIHRoaXMsIHJhemUoIGFyZ3VtZW50cyApICk7XG5cblx0c25hcGQuYmluZCggdGhpcyApXG5cdFx0KCBmdW5jdGlvbiBkZWxheSggKXtcblx0XHRcdGlmKCB0aGlzLmRlcHRoID09PSAyICl7XG5cdFx0XHRcdHRoaXMubG9nKCB0aGlzLmdldE1lc3NhZ2UoICkgKTtcblxuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblxuXHRcdFx0aWYoIGRvdWJ0KCB0aGlzLnN0YWNrLCBBUlJBWSApICYmIGZpbGxlZCggdGhpcy5zdGFjayApICl7XG5cdFx0XHRcdHRoaXMubG9nKCB0aGlzLmdldE1lc3NhZ2UoICkgKTtcblxuXHRcdFx0fWVsc2UgaWYoIHRoaXMuZGVwdGggPiA1ICl7XG5cdFx0XHRcdHRoaXMuZ2V0VHJhY2UoICggZXJyb3IsIHN0YWNrICkgPT4ge1xuXHRcdFx0XHRcdGlmKCBjbGF6b2YoIGVycm9yLCBFcnJvciApICl7XG5cdFx0XHRcdFx0XHR0aGlzLnJlbWluZCggYGVycm9yIGdldHRpbmcgc3RhY2sgdHJhY2UsICR7IGVycm9yIH1gICk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYoIHRydXUoIHN0YWNrICkgKXtcblx0XHRcdFx0XHRcdHRoaXMuc3RhY2sgPSBzdGFjaztcblxuXHRcdFx0XHRcdFx0dGhpcy5sb2coIHRoaXMuZ2V0TWVzc2FnZSggKSApO1xuXG5cdFx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0XHR0aGlzLmxvZyggdGhpcy5nZXRNZXNzYWdlKCApICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9ICk7XG5cblx0XHRcdH1lbHNle1xuXHRcdFx0XHR0aGlzLmxvZyggdGhpcy5nZXRNZXNzYWdlKCApICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdHJldHVybiB0aGlzO1xufTtcblxuLyo7XG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRTZXQgdGhlIHJlZGlyZWN0aW9uIGNvbmZpZ3VyYXRpb24uXG5cblx0XHRUaGlzIHdpbGwgdHJpZ2dlciByZWRpcmVjdCByZXNwb25zZSB3aGVuIHNlbmQgaXMgY2FsbGVkLlxuXG5cdFx0RGVmYXVsdCBvZiBERUZBVUxUX1JFRElSRUNUX1BBVEggd2lsbCBiZSB1c2VkIGlmIHBhdGggaXMgbm90IGdpdmVuLlxuXHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuT2xpdmFudC5wcm90b3R5cGUucmVkaXJlY3QgPSBmdW5jdGlvbiByZWRpcmVjdCggcGF0aCApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcInBhdGg6cmVxdWlyZWRcIjogXCJzdHJpbmdcIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0dGhpcy5zdGF0ZSA9IFJFRElSRUNUO1xuXHR0aGlzLnBhdGggPSBwYXRoO1xuXG5cdGlmKCAhdGhpcy5wYXRoICYmIHByb3R5cGUoIERFRkFVTFRfUkVESVJFQ1RfUEFUSCwgU1RSSU5HICkgKXtcblx0XHR0aGlzLnBhdGggPSBERUZBVUxUX1JFRElSRUNUX1BBVEg7XG5cblx0fWVsc2V7XG5cdFx0dGhpcy5yZXNldCggSXNzdWUsIHRydWUgKVxuXHRcdFx0LnNpbGVuY2UoIClcblx0XHRcdC5wcm9tcHQoIFwiZW1wdHkgcGF0aCB0byBiZSByZWRpcmVjdGVkXCIgKTtcblx0fVxuXG5cdHJldHVybiB0aGlzO1xufTtcblxuT2xpdmFudC5wcm90b3R5cGUuZmx1c2hTdGF0ZSA9IGZ1bmN0aW9uIGZsdXNoU3RhdGUoICl7XG5cdHRoaXMuc3RhdGUgPSBcIlwiO1xuXHR0aGlzLnBhdGggPSBcIlwiO1xuXG5cdHJldHVybiB0aGlzO1xufTtcblxuLyo7XG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRQYXNzIHRoZSBpbnN0YW5jZSB0byB0aGUgY2FsbGJhY2sgZmlyc3QgcGFyYW1ldGVyLlxuXG5cdFx0VGhpcyBmb2xsb3dzIHRoZSBzdGFuZGFyZCBlcnJvci1yZXN1bHQtb3B0aW9uIGNvbnZlbnRpb24uXG5cblx0XHRIYXMgc3BlY2lhbCBzdXBwb3J0IGZvciBnbHVjb3NlIGNvYXRlZCBvcHRpb24uXG5cdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5PbGl2YW50LnByb3RvdHlwZS5wYXNzID0gZnVuY3Rpb24gcGFzcyggY2FsbGJhY2ssIHJlc3VsdCwgb3B0aW9uICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwiY2FsbGJhY2s6cmVxdWlyZWRcIjogXCJmdW5jdGlvblwiXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRpZiggIXByb3R5cGUoIGNhbGxiYWNrLCBGVU5DVElPTiApICl7XG5cdFx0dGhpcy5yZXNldCggQnVnLCB0cnVlIClcblx0XHRcdC5wcm9tcHQoIFwiaW52YWxpZCBjYWxsYmFja1wiICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGlmKCB0cnV1KCBvcHRpb24gKSAmJiB0cnV1KCBvcHRpb24uc2VsZiApICYmIG9wdGlvbi5DT0FURUQgPT09IENPQVRFRCApe1xuXHRcdHRoaXMuc2V0KCBDT05URVhULCBvcHRpb24uc2VsZiApO1xuXHR9XG5cblx0aWYoIHRoaXMuY29udGV4dCApe1xuXHRcdGNhbGxiYWNrID0gY2FsbGVkLmJpbmQoIHRoaXMuY29udGV4dCApKCBjYWxsYmFjayApO1xuXG5cdH1lbHNle1xuXHRcdGNhbGxiYWNrID0gY2FsbGVkKCBjYWxsYmFjayApO1xuXHR9XG5cblx0Y2FsbGJhY2soIHRoaXMsIHJlc3VsdCwgb3B0aW9uICk7XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG5oYXJkZW4oIFwiY3JlYXRlXCIsIGZ1bmN0aW9uIGNyZWF0ZSggbmFtZSwgb3B0aW9uICl7XG5cdGxldCBMb2dFbmdpbmUgPSBkaWF0b20oIG5hbWUgKTtcblxuXHRoZXJlZGl0byggTG9nRW5naW5lLCBPbGl2YW50ICk7XG5cblx0TG9nRW5naW5lLnByb3RvdHlwZS5uYW1lID0gb3B0aW9uLm5hbWU7XG5cdExvZ0VuZ2luZS5wcm90b3R5cGUuc3RhdHVzID0gb3B0aW9uLnN0YXR1cztcblx0TG9nRW5naW5lLnByb3RvdHlwZS5jb2RlID0gb3B0aW9uLmNvZGU7XG5cdExvZ0VuZ2luZS5wcm90b3R5cGUuc2lsZW50ID0gb3B0aW9uLnNpbGVudDtcblx0TG9nRW5naW5lLnByb3RvdHlwZS5kZXB0aCA9IG9wdGlvbi5kZXB0aDtcblx0TG9nRW5naW5lLnByb3RvdHlwZS5jb2xvciA9IG9wdGlvbi5jb2xvcjtcblx0TG9nRW5naW5lLnByb3RvdHlwZS5pbnNwZWN0ID0gb3B0aW9uLmluc3BlY3Q7XG5cdExvZ0VuZ2luZS5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IG9wdGlvbi5pbml0aWFsaXplIHx8XG5cdFx0ZnVuY3Rpb24gaW5pdGlhbGl6ZSggKXtcblx0XHRcdHRoaXMubmFtZSA9IG9wdGlvbi5uYW1lO1xuXG5cdFx0XHR0aGlzLnN0YXR1cyA9IG9wdGlvbi5zdGF0dXM7XG5cblx0XHRcdHRoaXMuY29kZSA9IG9wdGlvbi5jb2RlO1xuXG5cdFx0XHR0aGlzLnNpbGVudCA9IG9wdGlvbi5zaWxlbnQ7XG5cblx0XHRcdHRoaXMuZGVwdGggPSBvcHRpb24uZGVwdGg7XG5cdFx0fTtcblxuXHRzeW1iaW90ZSggTG9nRW5naW5lICk7XG5cblx0aGFyZGVuKCBMb2dFbmdpbmUubmFtZSwgTG9nRW5naW5lICk7XG59LCBPbGl2YW50ICk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2xpdmFudDtcbiJdfQ==
