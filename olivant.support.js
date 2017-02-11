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
		return util.inspect(parameter, { "depth": depth }).replace(space, " ").substring(0, length) + "...";
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

	if (falzy(this.path) && truly(DEFAULT_REDIRECT_PATH) && protype(DEFAULT_REDIRECT_PATH, STRING)) {
		this.path = DEFAULT_REDIRECT_PATH;

		return this;
	}

	if (!protype(this.path, STRING)) {
		this.reset(Issue, true).silence().prompt("invalid redirect path");
	} else if (falzy(this.path)) {
		this.reset(Issue, true).silence().prompt("empty redirect path");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9saXZhbnQuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhcmlkIiwicmVxdWlyZSIsImFzZWEiLCJidWRnZSIsImNhbGxlZCIsImNsYXpvZiIsImRpYXRvbSIsImRvdWJ0IiwiRXRoZXJuaXR5IiwiZmFsemUiLCJmYWx6eSIsImZpbGxlZCIsImdsdWNvc2UiLCJoYXJkZW4iLCJoZXJlZGl0byIsImtlaW4iLCJtZWVrIiwib3V0cmUiLCJwbG91Z2giLCJwcm90eXBlIiwicmF6ZSIsInNuYXBkIiwic3ltYmlvdGUiLCJ0cnVseSIsInRydXUiLCJVMjAwYiIsInRyYWNlIiwid2luZG93IiwiREVGQVVMVF9SRURJUkVDVF9QQVRIIiwiT2xpdmFudCIsIkRFRkFVTFRfSU5TUEVDVF9PUFRJT04iLCJERUZBVUxUX0xPR19FTkdJTkUiLCJjbGllbnQiLCJjb25zb2xlIiwiZGVidWciLCJsb2ciLCJwcm90b3R5cGUiLCJpbml0aWFsaXplIiwib3B0aW9uIiwiZHVyYXRpb24iLCJEYXRlIiwibm93IiwiYXJndW1lbnRzIiwiT0JKRUNUIiwiQVJHVU1FTlRTIiwiRXJyb3IiLCJDT0FURUQiLCJsb2FkIiwicGFyYW1ldGVyIiwibGVuZ3RoIiwiZXJyb3IiLCJyZW1pbmQiLCJhcHBseSIsIm1lc3NhZ2UiLCJjb25jYXQiLCJTVFJJTkciLCJjb25zdHJ1Y3RvciIsIkZVTkNUSU9OIiwibmFtZSIsImJpbmQiLCJFQ0hPIiwic3RhdHVzIiwiY29kZSIsIkVDSE9fQ09ERSIsImNvbnRleHQiLCJzZWxmIiwic2lsZW50IiwiQk9PTEVBTiIsImRlcHRoIiwiTlVNQkVSIiwic2VydmVyIiwiY29sb3IiLCJjaGFsayIsIndoaXRlIiwic3RhdGUiLCJzdGFjayIsImluc3BlY3QiLCJyZWRzZWEiLCJJc3N1ZSIsImJsYWNrc2VhIiwiRmF0YWwiLCJyZXNldCIsInJlbmV3IiwibG9nRW5naW5lIiwiZGF0YSIsInNpbGVuY2UiLCJwcm9tcHQiLCJ0b1N0cmluZyIsImpvaW4iLCJ2YWx1ZU9mIiwiZ2V0VGltZXN0YW1wIiwidGltZXN0YW1wIiwicHJpbnRUaW1lIiwiZGltIiwiY29sb3JNZXNzYWdlIiwicmVzb2x2ZU1lc3NhZ2UiLCJmaWx0ZXIiLCJyZXNvbHZlVHJhY2UiLCJBUlJBWSIsIm1hcCIsImZyYW1lIiwiZnVuY3Rpb25OYW1lIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwicmVkIiwiZ2V0TWVzc2FnZSIsImdldFRyYWNlIiwiY2FsbGJhY2siLCJmcm9tRXJyb3IiLCJ0aGVuIiwiZnJhbWVMaXN0IiwiY2F0Y2giLCJnZXQiLCJwYXJzZSIsInNldCIsInByb3BlcnR5IiwidmFsdWUiLCJMT0ciLCJTSUxFTlQiLCJDT05URVhUIiwic2VuZCIsInJhdyIsInByb2NlZHVyZSIsIlJFRElSRUNUIiwicGF0aCIsImh0dHAiLCJTZXJ2ZXJSZXNwb25zZSIsInNlZ3dheSIsImZsdXNoU3RhdGUiLCJyZXBvcnQiLCJkZWxheSIsInByb2Nlc3MiLCJlbWl0IiwiZXZlbnQiLCJFdmVudCIsImRvY3VtZW50IiwiZGlzcGF0Y2hFdmVudCIsImNydXNoIiwic3BhY2UiLCJ1dGlsIiwicmVwbGFjZSIsInN1YnN0cmluZyIsIm9uRWFjaFBhcmFtZXRlciIsIkFTX0FSUkFZIiwicmV2ZXJzZSIsInNob3V0IiwicmVkaXJlY3QiLCJwYXNzIiwicmVzdWx0IiwiQnVnIiwiY3JlYXRlIiwiTG9nRW5naW5lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0ZBLElBQU1BLE9BQU9DLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTUMsT0FBT0QsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNRSxRQUFRRixRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1HLFNBQVNILFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFB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LEdBQTRCakMsT0FBT2lDLEtBQW5DO0FBQ0FpRixXQUFVcEgsU0FBVixDQUFvQndDLE9BQXBCLEdBQThCdEMsT0FBT3NDLE9BQXJDO0FBQ0E0RSxXQUFVcEgsU0FBVixDQUFvQkMsVUFBcEIsR0FBaUNDLE9BQU9ELFVBQVAsSUFDaEMsU0FBU0EsVUFBVCxHQUFzQjtBQUNyQixPQUFLcUIsSUFBTCxHQUFZcEIsT0FBT29CLElBQW5COztBQUVBLE9BQUtHLE1BQUwsR0FBY3ZCLE9BQU91QixNQUFyQjs7QUFFQSxPQUFLQyxJQUFMLEdBQVl4QixPQUFPd0IsSUFBbkI7O0FBRUEsT0FBS0ksTUFBTCxHQUFjNUIsT0FBTzRCLE1BQXJCOztBQUVBLE9BQUtFLEtBQUwsR0FBYTlCLE9BQU84QixLQUFwQjtBQUNBLEVBWEY7O0FBYUE5QyxVQUFVa0ksU0FBVjs7QUFFQTNJLFFBQVEySSxVQUFVOUYsSUFBbEIsRUFBd0I4RixTQUF4QjtBQUNBLENBNUJELEVBNEJHM0gsT0E1Qkg7O0FBOEJBNEgsT0FBT0MsT0FBUCxHQUFpQjdILE9BQWpCIiwiZmlsZSI6Im9saXZhbnQuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwib2xpdmFudFwiLFxuXHRcdFx0XCJwYXRoXCI6IFwib2xpdmFudC9vbGl2YW50LmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJvbGl2YW50LmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcIm9saXZhbnRcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9vbGl2YW50LmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwib2xpdmFudC10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlLFxuXHRcdFx0XCJjbGFzc1wiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdEVjaG8gdGhlIGRlc3RydWN0aW9uIGNhdXNlZCBieSB5b3VyIGNvZGUuXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFyaWRcIjogXCJhcmlkXCIsXG5cdFx0XHRcImFzZWFcIjogXCJhc2VhXCIsXG5cdFx0XHRcImJ1ZGdlXCI6IFwiYnVkZ2VcIixcblx0XHRcdFwiYmxhY2tzZWFcIjogXCJibGFja3NlYVwiLFxuXHRcdFx0XCJjYWxsZWRcIjogXCJjYWxsZWRcIixcblx0XHRcdFwiY2hhbGtcIjogXCJjaGFsa1wiLFxuXHRcdFx0XCJjbGF6b2ZcIjogXCJjbGF6b2ZcIixcblx0XHRcdFwiZGV4aXN0XCI6IFwiZGV4aXN0XCIsXG5cdFx0XHRcImRpYXRvbVwiOiBcImRpYXRvbVwiLFxuXHRcdFx0XCJFdGhlcm5pdHlcIjogXCJldGhlcm5pdHlcIixcblx0XHRcdFwiRXZlbnRFbWl0dGVyXCI6IFwiZXZlbnRzXCIsXG5cdFx0XHRcImZhbHplXCI6IFwiZmFsemVcIixcblx0XHRcdFwiZmFsenlcIjogXCJmYWx6eVwiLFxuXHRcdFx0XCJnbHVjb3NlXCI6IFwiZ2x1Y29zZVwiLFxuXHRcdFx0XCJoYXJkZW5cIjogXCJoYXJkZW5cIixcblx0XHRcdFwiaGVyZWRpdG9cIjogXCJoZXJlZGl0b1wiLFxuXHRcdFx0XCJrZWluXCI6IFwia2VpblwiLFxuXHRcdFx0XCJodHRwXCI6IFwiaHR0cFwiLFxuXHRcdFx0XCJtZWVrXCI6IFwibWVla1wiXG5cdFx0XHRcIm91dHJlXCI6IFwib3V0cmVcIixcblx0XHRcdFwicGxvdWdoXCI6IFwicGxvdWdoXCIsXG5cdFx0XHRcInByb3R5cGVcIjogXCJwcm90eXBlXCIsXG5cdFx0XHRcInJhemVcIjogXCJyYXplXCIsXG5cdFx0XHRcInJlZHNlYVwiOiBcInJlZHNlYVwiLFxuXHRcdFx0XCJzbmFwZFwiOiBcInNuYXBkXCIsXG5cdFx0XHRcInNlZ3dheVwiOiBcInNlZ3dheVwiLFxuXHRcdFx0XCJzeW1iaW90ZVwiOiBcInN5bWJpb3RlXCIsXG5cdFx0XHRcInRyYWNlXCI6IFsgXCJzdGFja3RyYWNlLWpzXCIsIFwic3RhY2stdHJhY2VcIiBdLFxuXHRcdFx0XCJ0cnVseVwiOiBcInRydWx5XCIsXG5cdFx0XHRcInRydXVcIjogXCJ0cnV1XCIsXG5cdFx0XHRcIlUyMDBiXCI6IFwidTIwMGJcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhcmlkID0gcmVxdWlyZSggXCJhcmlkXCIgKTtcbmNvbnN0IGFzZWEgPSByZXF1aXJlKCBcImFzZWFcIiApO1xuY29uc3QgYnVkZ2UgPSByZXF1aXJlKCBcImJ1ZGdlXCIgKTtcbmNvbnN0IGNhbGxlZCA9IHJlcXVpcmUoIFwiY2FsbGVkXCIgKTtcbmNvbnN0IGNsYXpvZiA9IHJlcXVpcmUoIFwiY2xhem9mXCIgKTtcbmNvbnN0IGRpYXRvbSA9IHJlcXVpcmUoIFwiZGlhdG9tXCIgKTtcbmNvbnN0IGRvdWJ0ID0gcmVxdWlyZSggXCJkb3VidFwiICk7XG5jb25zdCBFdGhlcm5pdHkgPSByZXF1aXJlKCBcImV0aGVybml0eVwiICk7XG5jb25zdCBmYWx6ZSA9IHJlcXVpcmUoIFwiZmFsemVcIiApO1xuY29uc3QgZmFsenkgPSByZXF1aXJlKCBcImZhbHp5XCIgKTtcbmNvbnN0IGZpbGxlZCA9IHJlcXVpcmUoIFwiZmlsbGVkXCIgKTtcbmNvbnN0IGdsdWNvc2UgPSByZXF1aXJlKCBcImdsdWNvc2VcIiApO1xuY29uc3QgaGFyZGVuID0gcmVxdWlyZSggXCJoYXJkZW5cIiApO1xuY29uc3QgaGVyZWRpdG8gPSByZXF1aXJlKCBcImhlcmVkaXRvXCIgKTtcbmNvbnN0IGtlaW4gPSByZXF1aXJlKCBcImtlaW5cIiApO1xuY29uc3QgbWVlayA9IHJlcXVpcmUoIFwibWVla1wiICk7XG5jb25zdCBvdXRyZSA9IHJlcXVpcmUoIFwib3V0cmVcIiApO1xuY29uc3QgcGxvdWdoID0gcmVxdWlyZSggXCJwbG91Z2hcIiApO1xuY29uc3QgcHJvdHlwZSA9IHJlcXVpcmUoIFwicHJvdHlwZVwiICk7XG5jb25zdCByYXplID0gcmVxdWlyZSggXCJyYXplXCIgKTtcbmNvbnN0IHNuYXBkID0gcmVxdWlyZSggXCJzbmFwZFwiICk7XG5jb25zdCBzeW1iaW90ZSA9IHJlcXVpcmUoIFwic3ltYmlvdGVcIiApO1xuY29uc3QgdHJ1bHkgPSByZXF1aXJlKCBcInRydWx5XCIgKTtcbmNvbnN0IHRydXUgPSByZXF1aXJlKCBcInRydXVcIiApO1xuY29uc3QgVTIwMGIgPSByZXF1aXJlKCBcInUyMDBiXCIgKTtcblxuLy86IEBjbGllbnQ6XG5jb25zdCB0cmFjZSA9IHJlcXVpcmUoIFwic3RhY2t0cmFjZS1qc1wiICk7XG5oYXJkZW4oIFwiREVGQVVMVF9SRURJUkVDVF9QQVRIXCIsIHdpbmRvdy5ERUZBVUxUX1JFRElSRUNUX1BBVEggfHwgXCIvdmlldy9zdGF0dXMvcGFnZVwiICk7XG4vLzogQGVuZC1jbGllbnRcblxuXG5cbmNvbnN0IE9saXZhbnQgPSBkaWF0b20oIFwiT2xpdmFudFwiICk7XG5cbmNvbnN0IERFRkFVTFRfSU5TUEVDVF9PUFRJT04gPSB7IFwiZGVwdGhcIjogMSwgXCJsZW5ndGhcIjogMjAwIH07XG5jb25zdCBERUZBVUxUX0xPR19FTkdJTkUgPSBhc2VhLmNsaWVudD8gY29uc29sZS5kZWJ1ZyA6IGNvbnNvbGUubG9nO1xuXG4vKjtcblx0QG5vdGU6XG5cdFx0VGhpcyBpcyB0aGUgZGVmYXVsdCBuYW1lL3N0YXR1cyBhbmQgY29kZSBvZiB0aGUgb2xpdmFudC5cblx0QGVuZC1ub3RlXG4qL1xuaGFyZGVuKCBcIkVDSE9cIiwgXCJlY2hvXCIgKTtcbmhhcmRlbiggXCJFQ0hPX0NPREVcIiwgMjAwICk7XG5cbmhhcmRlbiggXCJSRURJUkVDVFwiLCBcInJlZGlyZWN0XCIgKTtcbmhhcmRlbiggXCJDT05URVhUXCIsIFwiY29udGV4dFwiICk7XG5oYXJkZW4oIFwiTE9HXCIsIFwibG9nXCIgKTtcbmhhcmRlbiggXCJTSUxFTlRcIiwgXCJzaWxlbnRcIiApO1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdE9wdGlvbiBzaG91bGQgbm90IGJlIGdsdWNvc2UgY29hdGVkLlxuXHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuT2xpdmFudC5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIGluaXRpYWxpemUoIG9wdGlvbiApe1xuXHR0aGlzLmR1cmF0aW9uID0gRGF0ZS5ub3coICk7XG5cblx0aWYoIHByb3R5cGUoIGFyZ3VtZW50c1sgMCBdLCBPQkpFQ1QgKSAmJlxuXHRcdCFkb3VidCggYXJndW1lbnRzWyAwIF0sIEFSR1VNRU5UUyApICYmXG5cdFx0ISggY2xhem9mKCBhcmd1bWVudHNbIDAgXSwgRXJyb3IgKSApICYmXG5cdFx0b3B0aW9uLkNPQVRFRCAhPT0gQ09BVEVEIClcblx0e1xuXHRcdHRoaXMubG9hZCggb3B0aW9uICk7XG5cblx0fWVsc2V7XG5cdFx0dGhpcy5sb2FkKCApO1xuXHR9XG5cblx0bGV0IHBhcmFtZXRlciA9IGFyZ3VtZW50c1sgMCBdO1xuXG5cdGlmKCBhcmd1bWVudHMubGVuZ3RoID09IDAgKXtcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9ZWxzZSBpZiggY2xhem9mKCBwYXJhbWV0ZXIsIEVycm9yICkgKXtcblx0XHRsZXQgZXJyb3IgPSBwYXJhbWV0ZXI7XG5cblx0XHR0aGlzLnJlbWluZC5hcHBseSggdGhpcywgWyBlcnJvci5tZXNzYWdlLCBlcnJvciBdLmNvbmNhdCggYnVkZ2UoIGFyZ3VtZW50cyApICkgKTtcblxuXHR9ZWxzZSBpZiggY2xhem9mKCBwYXJhbWV0ZXIsIE9saXZhbnQgKSApe1xuXHRcdHRoaXMubG9hZCggcGFyYW1ldGVyICk7XG5cblx0fWVsc2UgaWYoIGRvdWJ0KCBwYXJhbWV0ZXIsIEFSR1VNRU5UUyApICl7XG5cdFx0dGhpcy5yZW1pbmQuYXBwbHkoIHRoaXMsIHBsb3VnaCggcGFyYW1ldGVyICkgKTtcblxuXHR9ZWxzZSBpZiggcHJvdHlwZSggcGFyYW1ldGVyLCBTVFJJTkcgKSApe1xuXHRcdHRoaXMucmVtaW5kLmFwcGx5KCB0aGlzLCByYXplKCBhcmd1bWVudHMgKSApO1xuXG5cdH1lbHNlIGlmKCBwcm90eXBlKCBwYXJhbWV0ZXIsIE9CSkVDVCApICYmXG5cdFx0cGFyYW1ldGVyLmNvbnN0cnVjdG9yICYmXG5cdFx0cHJvdHlwZSggcGFyYW1ldGVyLmNvbnN0cnVjdG9yLCBGVU5DVElPTiApICYmXG5cdFx0cGFyYW1ldGVyLmNvbnN0cnVjdG9yLm5hbWUgIT0gXCJGdW5jdGlvblwiICYmXG5cdFx0Y2xhem9mKCBwYXJhbWV0ZXIsIHBhcmFtZXRlci5jb25zdHJ1Y3RvciApIClcblx0e1xuXHRcdHRoaXMubG9hZCggcGFyYW1ldGVyICk7XG5cblx0XHR0aGlzLnJlbWluZC5hcHBseSggdGhpcywgcmF6ZSggYXJndW1lbnRzICkgKTtcblxuXHR9ZWxzZSBpZiggcHJvdHlwZSggcGFyYW1ldGVyLCBPQkpFQ1QgKSApe1xuXHRcdHRoaXMucmVtaW5kLmFwcGx5KCB0aGlzLCByYXplKCBhcmd1bWVudHMgKSApO1xuXHR9XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG5PbGl2YW50LnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24gbG9hZCggb3B0aW9uICl7XG5cdG9wdGlvbiA9IGdsdWNvc2UuYmluZCggdGhpcyApKCBvcHRpb24gKTtcblxuXHR0aGlzLm5hbWUgPSBvcHRpb24ubmFtZSB8fCB0aGlzLm5hbWUgfHwgRUNIT1xuXG5cdHRoaXMuc3RhdHVzID0gb3B0aW9uLnN0YXR1cyB8fCB0aGlzLnN0YXR1cyB8fCBFQ0hPO1xuXG5cdHRoaXMuY29kZSA9IG9wdGlvbi5jb2RlIHx8IHRoaXMuY29kZSB8fCBFQ0hPX0NPREU7XG5cblx0dGhpcy5sb2cgPSBvcHRpb24ubG9nIHx8IHRoaXMubG9nIHx8IERFRkFVTFRfTE9HX0VOR0lORTtcblxuXHRpZiggZmFsemUoIHRoaXMuY29udGV4dCApICYmIHRydXUoIG9wdGlvbi5zZWxmICkgKXtcblx0XHR0aGlzLmNvbnRleHQgPSBvcHRpb24uc2VsZjtcblx0fVxuXG5cdHRoaXMuc2lsZW50ID0ga2Vpbiggb3B0aW9uLCBcInNpbGVudFwiICk/IG9wdGlvbi5zaWxlbnQgOlxuXHRcdGtlaW4oIHRoaXMsIFwic2lsZW50XCIgKT8gdGhpcy5zaWxlbnQgOiB0cnVlO1xuXG5cdGlmKCAhcHJvdHlwZSggdGhpcy5zaWxlbnQsIEJPT0xFQU4gKSApe1xuXHRcdHRoaXMuc2lsZW50ID0gdHJ1ZTtcblx0fVxuXG5cdC8vOiBEZXB0aCBkaWN0YXRlcyByZWZpbmVkIHNldHRpbmdzIG9mIHRoaXMgcHJvY2VkdXJlLlxuXHR0aGlzLmRlcHRoID0ga2Vpbiggb3B0aW9uLCBcImRlcHRoXCIgKT8gb3B0aW9uLmRlcHRoIDpcblx0XHRrZWluKCB0aGlzLCBcImRlcHRoXCIgKT8gdGhpcy5kZXB0aCA6IDE7XG5cblx0aWYoICFwcm90eXBlKCB0aGlzLmRlcHRoLCBOVU1CRVIgKSApe1xuXHRcdHRoaXMuZGVwdGggPSAxO1xuXHR9XG5cblx0Ly86IERlcHRoIGlzIG9ubHkgZnJvbSAxLTAgb3IgMS0yMzQ1LTY3ODktMC5cblx0Ly86IERlcHRoIDIgaXMgZGVlcCBzaWxlbnQgZGVwdGguXG5cdHRoaXMuZGVwdGggPSB0aGlzLmRlcHRoICUgMTA7XG5cblx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0dGhpcy5jb2xvciA9IG9wdGlvbi5jb2xvciB8fCB0aGlzLmNvbG9yIHx8IGNoYWxrLndoaXRlO1xuXHR9XG5cblx0dGhpcy5zdGF0ZSA9IFwiXCI7XG5cblx0dGhpcy5zdGFjayA9IG9wdGlvbi5zdGFjayB8fCB0aGlzLnN0YWNrIHx8IFsgXTtcblxuXHR0aGlzLm1lc3NhZ2UgPSBvcHRpb24ubWVzc2FnZSB8fCB0aGlzLm1lc3NhZ2UgfHwgXCJcIjtcblxuXHR0aGlzLmluc3BlY3QgPSBvcHRpb24uaW5zcGVjdCB8fCB0aGlzLmluc3BlY3QgfHwgREVGQVVMVF9JTlNQRUNUX09QVElPTjtcblxuXHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRyZWRzZWEoIElzc3VlICk7XG5cblx0XHRibGFja3NlYSggRmF0YWwgKTtcblx0fVxuXG5cdHJldHVybiB0aGlzO1xufTtcblxuLyo7XG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRNb2RpZmllcyB0aGUgbG9nIGVuZ2luZSB3aGlsZSBtYWludGFpbmluZyBlbnZpcm9ubWVudCBwcm9wZXJ0aWVzLlxuXHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuT2xpdmFudC5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiByZXNldCggb3B0aW9uLCByZW5ldyApe1xuXHRpZiggcHJvdHlwZSggb3B0aW9uLCBGVU5DVElPTiApICYmIGNsYXpvZiggb3B0aW9uLCBPbGl2YW50ICkgKXtcblx0XHRsZXQgbG9nRW5naW5lID0gb3B0aW9uO1xuXG5cdFx0aWYoIHByb3R5cGUoIHJlbmV3LCBCT09MRUFOICkgJiYgcmVuZXcgKXtcblx0XHRcdGxldCBkYXRhID0ge1xuXHRcdFx0XHRcIm1lc3NhZ2VcIjogdGhpcy5tZXNzYWdlLFxuXHRcdFx0XHRcInN0YWNrXCI6IHRoaXMuc3RhY2tcblx0XHRcdH07XG5cblx0XHRcdHJldHVybiBsb2dFbmdpbmUoIGRhdGEgKTtcblxuXHRcdH1lbHNle1xuXHRcdFx0dGhpcy5sb2FkKCBsb2dFbmdpbmUucHJvdG90eXBlICk7XG5cdFx0fVxuXG5cdH1lbHNlIGlmKCBwcm90eXBlKCBvcHRpb24sIE9CSkVDVCApICl7XG5cdFx0dGhpcy5sb2FkKCBvcHRpb24gKTtcblxuXHR9ZWxzZSBpZiggIWNsYXpvZiggb3B0aW9uLCBJc3N1ZSApICl7XG5cdFx0dGhpcy5yZXNldCggSXNzdWUsIHRydWUgKVxuXHRcdFx0LnNpbGVuY2UoIClcblx0XHRcdC5wcm9tcHQoIFwiY2Fubm90IHJlc2V0IHRvIGdpdmVuIG9wdGlvblwiLCBvcHRpb24gKTtcblxuXHR9ZWxzZXtcblx0XHRJc3N1ZSggXCJjYW5ub3QgcmVzZXQgbG9nXCIsIG9wdGlvbiwgdGhpcyApLnNpbGVuY2UoICkucHJvbXB0KCApO1xuXHR9XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG5PbGl2YW50LnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCApe1xuXHRyZXR1cm4gVTIwMGIoIG91dHJlKCBbIHRoaXMubmFtZSwgdGhpcy5zdGF0dXMsIHRoaXMubWVzc2FnZSBdICkgKS5qb2luKCBcIiwgXCIgKTtcbn07XG5cbk9saXZhbnQucHJvdG90eXBlLnZhbHVlT2YgPSBmdW5jdGlvbiB2YWx1ZU9mKCApe1xuXHRyZXR1cm4gVTIwMGIoIG91dHJlKCBbIHRoaXMubmFtZSwgdGhpcy5zdGF0dXMsIHRoaXMubWVzc2FnZSBdICkgKS5qb2luKCBcIiwgXCIgKTtcbn07XG5cbk9saXZhbnQucHJvdG90eXBlLmdldFRpbWVzdGFtcCA9IGZ1bmN0aW9uIGdldFRpbWVzdGFtcCggKXtcblx0bGV0IHRpbWVzdGFtcCA9IEV0aGVybml0eSggKS5wcmludFRpbWUoIHRydWUgKTtcblxuXHR0aW1lc3RhbXAgPSBgJHsgdGltZXN0YW1wIH0gfCAkeyAoIERhdGUubm93KCApIC0gdGhpcy5kdXJhdGlvbiApIH1tc2A7XG5cblx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0cmV0dXJuIGNoYWxrLmRpbSggdGltZXN0YW1wICk7XG5cdH1cblxuXHRyZXR1cm4gdGltZXN0YW1wO1xufTtcblxuT2xpdmFudC5wcm90b3R5cGUuY29sb3JNZXNzYWdlID0gZnVuY3Rpb24gY29sb3JNZXNzYWdlKCBjb2xvciwgbWVzc2FnZSApe1xuXHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRpZiggcHJvdHlwZSggY29sb3IsIEZVTkNUSU9OICkgKXtcblx0XHRcdHJldHVybiBjb2xvciggbWVzc2FnZSApO1xuXG5cdFx0fWVsc2UgaWYoIHByb3R5cGUoIGNvbG9yLCBTVFJJTkcgKSAmJiB0cnVseSggY29sb3IgKSApe1xuXHRcdFx0aWYoIGtlaW4oIGNoYWxrLCBjb2xvciApICYmIHByb3R5cGUoIGNoYWxrWyBjb2xvciBdLCBGVU5DVElPTiApICl7XG5cdFx0XHRcdHJldHVybiBjaGFsa1sgY29sb3IgXSggbWVzc2FnZSApO1xuXG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0dGhpcy5yZW1pbmQoIGBpbnZhbGlkIG1lc3NhZ2UgY29sb3IsICR7IGNvbG9yIH1gICk7XG5cblx0XHRcdFx0cmV0dXJuIGNoYWxrLndoaXRlKCBtZXNzYWdlICk7XG5cdFx0XHR9XG5cblx0XHR9ZWxzZXtcblx0XHRcdHJldHVybiBjaGFsay53aGl0ZSggbWVzc2FnZSApO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBtZXNzYWdlO1xufTtcblxuLyo7XG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRUaGUgbWVzc2FnZSBpcyBkaXZpZGVkIGludG8gdGhyZWUgcGFydHMsXG5cdFx0MS4gbmFtZXNwYWNlLFxuXHRcdDIuIHN0YXR1cyxcblx0XHQzLiBhY3R1YWwgbWVzc2FnZVxuXHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuT2xpdmFudC5wcm90b3R5cGUucmVzb2x2ZU1lc3NhZ2UgPSBmdW5jdGlvbiByZXNvbHZlTWVzc2FnZSggKXtcblx0bGV0IG1lc3NhZ2UgPSBVMjAwYiggb3V0cmUoIFsgdGhpcy5uYW1lLCB0aGlzLnN0YXR1cywgdGhpcy5tZXNzYWdlIF0gKVxuXHRcdC5maWx0ZXIoIHRydWx5ICkgKS5qb2luKCBcIiwgXCIgKTtcblxuXHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRyZXR1cm4gdGhpcy5jb2xvck1lc3NhZ2UoIHRoaXMuY29sb3IsIG1lc3NhZ2UgKTtcblx0fVxuXG5cdHJldHVybiBtZXNzYWdlO1xufTtcblxuT2xpdmFudC5wcm90b3R5cGUucmVzb2x2ZVRyYWNlID0gZnVuY3Rpb24gcmVzb2x2ZVRyYWNlKCApe1xuXHRsZXQgc3RhY2sgPSBcInN0YWNrIHRyYWNlIG5vdCBhdmFpbGFibGVcIjtcblxuXHRpZiggIXRoaXMuc2lsZW50ICYmIGRvdWJ0KCB0aGlzLnN0YWNrLCBBUlJBWSApICYmIGZpbGxlZCggdGhpcy5zdGFjayApICl7XG5cdFx0c3RhY2sgPSB0aGlzLnN0YWNrO1xuXG5cdFx0c3RhY2sgPSBzdGFjay5tYXAoICggZnJhbWUgKSA9PiB7XG5cdFx0XHRpZiggZnJhbWUudG9TdHJpbmcoICkgPT09IFwiW29iamVjdCBPYmplY3RdXCIgKXtcblx0XHRcdFx0bGV0IHsgZnVuY3Rpb25OYW1lLCBmaWxlTmFtZSwgbGluZU51bWJlciwgY29sdW1uTnVtYmVyIH0gPSBmcmFtZTtcblxuXHRcdFx0XHRyZXR1cm4gYCR7IGZ1bmN0aW9uTmFtZSB9ICgkeyBmaWxlTmFtZSB9OiR7IGxpbmVOdW1iZXIgfTokeyBjb2x1bW5OdW1iZXIgfSlgO1xuXG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0cmV0dXJuIGZyYW1lLnRvU3RyaW5nKCApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblxuXHRcdHN0YWNrID0gVTIwMGIoIHN0YWNrICkuam9pbiggXCJcXG5cIiApO1xuXG5cdFx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0XHRyZXR1cm4gY2hhbGsuZGltLnJlZCggc3RhY2sgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc3RhY2s7XG5cdH1cblxuXHRpZiggdGhpcy5kZXB0aCA8IDUgJiZcblx0XHR0aGlzLnNpbGVudCAmJlxuXHRcdHRydXUoIHRoaXMuY29udGV4dCApICYmXG5cdCBcdHByb3R5cGUoIHRoaXMuY29udGV4dC5jb25zdHJ1Y3RvciwgRlVOQ1RJT04gKSAmJlxuXHRcdHRydWx5KCB0aGlzLmNvbnRleHQuY29uc3RydWN0b3IubmFtZSApIClcblx0e1xuXHRcdHN0YWNrID0gYGNhbGxlZCB3aXRoIGNvbnRleHQsICR7IHRoaXMuY29udGV4dC5jb25zdHJ1Y3Rvci5uYW1lIH1gO1xuXG5cdFx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0XHRyZXR1cm4gY2hhbGsuZGltKCBzdGFjayApO1xuXHRcdH1cblxuXHRcdHJldHVybiBzdGFjaztcblx0fVxuXG5cdGlmKCB0aGlzLnNpbGVudCApe1xuXHRcdHN0YWNrID0gXCJzdGFjayB0cmFjZSBpcyBub3QgYXZhaWxhYmxlIG9uIHNpbGVudCBtb2RlXCI7XG5cblx0XHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRcdHJldHVybiBjaGFsay5kaW0oIHN0YWNrICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHN0YWNrO1xuXHR9XG5cblx0aWYoIHRoaXMuZGVwdGggPiA1ICl7XG5cdFx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0XHRyZXR1cm4gY2hhbGsuZGltKCBzdGFjayApO1xuXHRcdH1cblxuXHRcdHJldHVybiBzdGFjaztcblx0fVxufTtcblxuLyo7XG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRUaGUgbWVzc2FnZSBjb25zaXN0IG9mIHRocmVlIGxheWVyIG9mIHN0cmluZ3MsXG5cdFx0XHQxLiB0aW1lc3RhbXAgaW4gdHJ1ZSB0aW1lIGZvcm1hdFxuXHRcdFx0Mi4gYWN0dWFsIHJlYWRhYmxlIG1lc3NhZ2Vcblx0XHRcdDMuIG1lc3NhZ2UgdHJhY2Ugb3IgbWVzc2FnZSBjb250ZXh0XG5cblx0XHRUaGVzZSBpbmZvcm1hdGlvbiB3aWxsIGJlIGRpdmlkZWQgdGhyb3VnaCB6ZXJvLXdpZHRoIHNwYWNlIGNvbnZlbnRpb24uXG5cdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5PbGl2YW50LnByb3RvdHlwZS5nZXRNZXNzYWdlID0gZnVuY3Rpb24gZ2V0TWVzc2FnZSggKXtcblx0cmV0dXJuIFUyMDBiKCBbXG5cdFx0dGhpcy5nZXRUaW1lc3RhbXAoICksXG5cdFx0dGhpcy5yZXNvbHZlTWVzc2FnZSggKSxcblx0XHR0aGlzLnJlc29sdmVUcmFjZSggKVxuXHRdICkuam9pbiggXCJcXG5cIiApO1xufTtcblxuLyo7XG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRUaGlzIHNob3VsZCBiZSB1c2VkIGludGVybmFsbHkgYXMgbXVjaCBhcyBwb3NzaWJsZS5cblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLmdldFRyYWNlID0gZnVuY3Rpb24gZ2V0VHJhY2UoIGNhbGxiYWNrICl7XG5cdGlmKCB0aGlzLmRlcHRoID09IDIgKXtcblx0XHR0aGlzLnJlbWluZCggXCJ0cmFjaW5nIGlzIGRpc2FibGVkIGZvciBkZXB0aCAyXCIgKS5wcm9tcHQoICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGNhbGxiYWNrID0gY2FsbGVkLmJpbmQoIHRoaXMgKSggY2FsbGJhY2sgKTtcblxuXHRzbmFwZC5iaW5kKCB0aGlzICkoIGNhbGxiYWNrLCAxMDAwICk7XG5cblx0aWYoIGFzZWEuY2xpZW50ICl7XG5cdFx0aWYoIGNsYXpvZiggdGhpcy5lcnJvciwgRXJyb3IgKSApe1xuXHRcdFx0dHJhY2UuZnJvbUVycm9yKCB0aGlzLmVycm9yIClcblx0XHRcdFx0LnRoZW4oICggZnJhbWVMaXN0ICkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuc3RhY2sgPSBmcmFtZUxpc3Q7XG5cblx0XHRcdFx0XHRjYWxsYmFjayggbnVsbCwgdGhpcy5zdGFjayApO1xuXHRcdFx0XHR9IClcblx0XHRcdFx0LmNhdGNoKCAoIGVycm9yICkgPT4geyBjYWxsYmFjayggdGhpcy5yZW1pbmQoIGVycm9yICkgKTsgfSApO1xuXG5cdFx0fWVsc2UgaWYoIHRoaXMuZGVwdGggPiA1ICl7XG5cdFx0XHR0cmFjZS5nZXQoIClcblx0XHRcdFx0LnRoZW4oICggZnJhbWVMaXN0ICkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuc3RhY2sgPSBmcmFtZUxpc3Q7XG5cblx0XHRcdFx0XHRjYWxsYmFjayggbnVsbCwgdGhpcy5zdGFjayApO1xuXHRcdFx0XHR9IClcblx0XHRcdFx0LmNhdGNoKCAoIGVycm9yICkgPT4geyBjYWxsYmFjayggdGhpcy5yZW1pbmQoIGVycm9yICkgKTsgfSApO1xuXHRcdH1cblxuXHR9ZWxzZSBpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRpZiggY2xhem9mKCB0aGlzLmVycm9yLCBFcnJvciApICl7XG5cdFx0XHR0aGlzLnN0YWNrID0gdHJhY2UucGFyc2UoIHRoaXMuZXJyb3IgKTtcblxuXHRcdFx0Y2FsbGJhY2soIG51bGwsIHRoaXMuc3RhY2sgKTtcblxuXHRcdH1lbHNlIGlmKCB0aGlzLmRlcHRoID4gNSApe1xuXHRcdFx0dGhpcy5zdGFjayA9IHRyYWNlLmdldCggKTtcblxuXHRcdFx0Y2FsbGJhY2soIG51bGwsIHRoaXMuc3RhY2sgKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qO1xuXHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0U2V0cyBhIHByb3BlcnR5IG9mIHRoaXMgbG9nIGVuZ2luZS5cblxuXHRcdE5vdCBhbGwgcHJvcGVydHkgY2FuIGJlIHNldCB0byBsaW1pdCB0aGlzIGZ1bmN0aW9uXG5cdFx0XHRmb3Igc2VjdXJpdHkgcHVycG9zZXMuXG5cdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5PbGl2YW50LnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQoIHByb3BlcnR5LCB2YWx1ZSApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcInByb3BlcnR5OnJlcXVpcmVkXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcdFwidmFsdWVcIjogXCIqXCJcblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGxldCBwYXJhbWV0ZXIgPSByYXplKCBhcmd1bWVudHMgKTtcblxuXHRpZiggcGFyYW1ldGVyLmxlbmd0aCA9PSAxICYmIHByb3R5cGUoIHBhcmFtZXRlclsgMCBdLCBPQkpFQ1QgKSApe1xuXHRcdGxldCBvcHRpb24gPSBwYXJhbWV0ZXJbIDAgXTtcblx0XHRmb3IoIGxldCBwcm9wZXJ0eSBpbiBvcHRpb24gKXtcblx0XHRcdHRoaXMuc2V0KCBwcm9wZXJ0eSwgb3B0aW9uWyBwcm9wZXJ0eSBdICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRpZiggIXByb3R5cGUoIHByb3BlcnR5LCBTVFJJTkcgKSApe1xuXHRcdHRoaXMucmVzZXQoIElzc3VlLCB0cnVlIClcblx0XHRcdC5zaWxlbmNlKCApXG5cdFx0XHQucHJvbXB0KCBcImludmFsaWQgcHJvcGVydHlcIiwgcHJvcGVydHkgKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0aWYoIHByb3R5cGUoIHByb3BlcnR5LCBTVFJJTkcgKSAmJlxuXHRcdHByb3BlcnR5ICE9IExPRyAgJiZcblx0XHRwcm9wZXJ0eSAhPSBTSUxFTlQgJiZcblx0XHRwcm9wZXJ0eSAhPSBDT05URVhUIClcblx0e1xuXHRcdHRoaXMucmVzZXQoIElzc3VlLCB0cnVlIClcblx0XHRcdC5zaWxlbmNlKCApXG5cdFx0XHQucHJvbXB0KCBcImludmFsaWQgcHJvcGVydHlcIiwgcHJvcGVydHkgKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0dGhpc1sgcHJvcGVydHkgXSA9IHZhbHVlO1xuXG5cdHJldHVybiB0aGlzO1xufTtcblxuLyo7XG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRTZW5kIGRhdGEgdG8gc2VydmVyIG9yIGNsaWVudC5cblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiBzZW5kKCApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcInJlc3BvbnNlXCI6IFwiaHR0cC5TZXJ2ZXJSZXNwb25zZVwiLFxuXHRcdFx0XHRcInByb2NlZHVyZVwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCB0aGlzLmRlcHRoID09IDIgKXtcblx0XHR0aGlzLnJlbWluZCggXCJzZW5kaW5nIGlzIGRpc2FibGVkIGZvciBkZXB0aCAyXCIgKS5wcm9tcHQoICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGxldCBtZXNzYWdlID0gbWVlayggdGhpcy5zdGF0dXMsIFUyMDBiKCB0aGlzLnRvU3RyaW5nKCApICkucmF3KCApICk7XG5cblx0bGV0IHByb2NlZHVyZSA9IGFyZ3VtZW50c1sgMCBdO1xuXG5cdGlmKCBhc2VhLnNlcnZlciAmJlxuXHRcdHRoaXMuc3RhdGUgPT09IFJFRElSRUNUICYmXG5cdFx0cHJvdHlwZSggdGhpcy5wYXRoLCBTVFJJTkcgKSAmJlxuXHRcdHRydWx5KCB0aGlzLnBhdGggKSAmJlxuXHRcdGNsYXpvZiggcHJvY2VkdXJlLCBodHRwLlNlcnZlclJlc3BvbnNlICkgKVxuXHR7XG5cdFx0c2Vnd2F5KCB7XG5cdFx0XHRcInJlc3BvbnNlXCI6IHByb2NlZHVyZSxcblx0XHRcdFwicGF0aFwiOiB0aGlzLnBhdGgsXG5cdFx0XHRcInN0YXR1c1wiOiB0aGlzLnN0YXR1cyxcblx0XHRcdFwiZGF0YVwiOiBtZXNzYWdlLFxuXHRcdH0gKTtcblxuXHRcdHRoaXMuZmx1c2hTdGF0ZSggKTtcblxuXHR9ZWxzZSBpZiggYXNlYS5zZXJ2ZXIgJiZcblx0XHRmYWx6eSggdGhpcy5zdGF0ZSApICYmXG5cdFx0Y2xhem9mKCBwcm9jZWR1cmUsIGh0dHAuU2VydmVyUmVzcG9uc2UgKSApXG5cdHtcblx0XHRtZXNzYWdlLnNlbmQoIHByb2NlZHVyZSwgdGhpcy5jb2RlICk7XG5cblx0fWVsc2UgaWYoIGFzZWEuY2xpZW50ICYmXG5cdFx0dGhpcy5zdGF0ZSA9PSBSRURJUkVDVCAmJlxuXHRcdHByb3R5cGUoIHRoaXMucGF0aCwgU1RSSU5HICkgJiZcblx0XHR0cnVseSggdGhpcy5wYXRoICkgKVxuXHR7XG5cdFx0c2Vnd2F5KCB7XG5cdFx0XHRcInBhdGhcIjogdGhpcy5wYXRoLFxuXHRcdFx0XCJzdGF0dXNcIjogdGhpcy5zdGF0dXMsXG5cdFx0XHRcImRhdGFcIjogbWVzc2FnZSxcblx0XHR9ICk7XG5cblx0XHR0aGlzLmZsdXNoU3RhdGUoICk7XG5cblx0fWVsc2UgaWYoIGFzZWEuY2xpZW50ICYmXG5cdFx0ZmFsenkoIHRoaXMuc3RhdGUgKSAmJlxuXHRcdHByb3R5cGUoIHByb2NlZHVyZSwgRlVOQ1RJT04gKSApXG5cdHtcblx0XHRtZXNzYWdlLnNlbmQuYmluZCggdGhpcyApKCBwcm9jZWR1cmUgKTtcblxuXHR9ZWxzZSBpZiggdHJ1bHkoIHRoaXMuc3RhdGUgKSApe1xuXHRcdHRoaXMucmVzZXQoIElzc3VlLCB0cnVlIClcblx0XHRcdC5zaWxlbmNlKCApXG5cdFx0XHQucHJvbXB0KCBgY2Fubm90IGludm9rZSBzZW5kaW5nIHN0YXRlLCAkeyB0aGlzLnN0YXRlIH0sIHByb3Blcmx5YCApXG5cdFx0XHQuc2VuZCggcHJvY2VkdXJlICk7XG5cblx0XHR0aGlzLmZsdXNoU3RhdGUoICk7XG5cblx0fWVsc2V7XG5cdFx0dGhpcy5yZXNldCggSXNzdWUsIHRydWUgKVxuXHRcdFx0LnNpbGVuY2UoIClcblx0XHRcdC5wcm9tcHQoIFwiY2Fubm90IHNlbmQgcHJvcGVybHlcIiApO1xuXHR9XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFN0cmVhbSBkYXRhIHRvIGxpc3RlbmVycy5cblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLnJlcG9ydCA9IGZ1bmN0aW9uIHJlcG9ydCggKXtcblx0aWYoIHRoaXMuZGVwdGggPT0gMiApe1xuXHRcdHRoaXMucmVtaW5kKCBcInJlcG9ydGluZyBpcyBkaXNhYmxlZCBmb3IgZGVwdGggMlwiICkucHJvbXB0KCApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzbmFwZC5iaW5kKCB0aGlzIClcblx0XHQoIGZ1bmN0aW9uIGRlbGF5KCApe1xuXHRcdFx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0XHRcdHByb2Nlc3MuZW1pdCggdGhpcy5uYW1lLCB0aGlzICk7XG5cblx0XHRcdH1lbHNlIGlmKCBhc2VhLmNsaWVudCApe1xuXHRcdFx0XHRsZXQgZXZlbnQgPSBuZXcgRXZlbnQoIHRoaXMubmFtZSApO1xuXHRcdFx0XHRldmVudC5kYXRhID0gdGhpcztcblxuXHRcdFx0XHRkb2N1bWVudC5kaXNwYXRjaEV2ZW50KCBldmVudCApO1xuXHRcdFx0fVxuXHRcdH0sIDEwMDAgKTtcblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qO1xuXHRAaW50ZXJuYWwtbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0Q3J1c2ggdGhlIHBhcmFtZXRlciBleHRyYWN0aW5nIHN0cmluZyBpbmZvcm1hdGlvbi5cblxuXHRcdFNwZWNpYWwgc3VwcG9ydCBmb3IgZ2x1Y29zZSBjb2F0ZWQgcGFyYW1ldGVycy5cblx0QGVuZC1pbnRlcm5hbC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbmNvbnN0IGNydXNoID0gZnVuY3Rpb24gY3J1c2goIHBhcmFtZXRlciwgb3B0aW9uICl7XG5cdG9wdGlvbiA9IG9wdGlvbiB8fCB0aGlzLmluc3BlY3QgfHwgeyB9O1xuXG5cdGxldCBkZXB0aCA9IG9wdGlvbi5kZXB0aCB8fCAxO1xuXHRsZXQgbGVuZ3RoID0gb3B0aW9uLmxlbmd0aCB8fCAyMDA7XG5cdGxldCBzcGFjZSA9IC9cXHN7Mix9L2c7XG5cblx0aWYoIGFzZWEuc2VydmVyICYmIHByb3R5cGUoIHBhcmFtZXRlciwgT0JKRUNUICkgJiYgcGFyYW1ldGVyLkNPQVRFRCA9PT0gQ09BVEVEICl7XG5cdFx0aWYoIHBhcmFtZXRlci5zZWxmICl7XG5cdFx0XHR0aGlzLnNldCggQ09OVEVYVCwgcGFyYW1ldGVyLnNlbGYgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdXRpbC5pbnNwZWN0KCBwYXJhbWV0ZXIsIHsgXCJkZXB0aFwiOiBkZXB0aCB9IClcblx0XHRcdC5yZXBsYWNlKCBzcGFjZSwgXCIgXCIgKVxuXHRcdFx0LnN1YnN0cmluZyggMCwgbGVuZ3RoICkgKyBcIi4uLlwiO1xuXG5cdH1lbHNlIGlmKCBwYXJhbWV0ZXIgJiYgY2xhem9mKCBwYXJhbWV0ZXIsIEVycm9yICkgJiYgcGFyYW1ldGVyLnN0YWNrICl7XG5cdFx0dGhpcy5lcnJvciA9IHBhcmFtZXRlcjtcblxuXHRcdHRoaXMuZ2V0VHJhY2UoICk7XG5cblx0XHRyZXR1cm4gcGFyYW1ldGVyLnN0YWNrLnRvU3RyaW5nKCApO1xuXG5cdH1lbHNlIGlmKCBjbGF6b2YoIHBhcmFtZXRlciwgT2xpdmFudCApICl7XG5cdFx0cmV0dXJuIHBhcmFtZXRlci5tZXNzYWdlO1xuXG5cdH1lbHNlIGlmKCBwcm90eXBlKCBwYXJhbWV0ZXIsIEZVTkNUSU9OICkgKXtcblx0XHRyZXR1cm4gcGFyYW1ldGVyLnRvU3RyaW5nKCApXG5cdFx0XHQucmVwbGFjZSggc3BhY2UsIFwiIFwiIClcblx0XHRcdC5zdWJzdHJpbmcoIDAsIGxlbmd0aCApICsgXCIuLi5cIjtcblxuXHR9ZWxzZSBpZiggcHJvdHlwZSggcGFyYW1ldGVyLCBTVFJJTkcgKSB8fFxuXHRcdHByb3R5cGUoIHBhcmFtZXRlciwgTlVNQkVSICkgfHxcblx0XHRwcm90eXBlKCBwYXJhbWV0ZXIsIEJPT0xFQU4gKSApXG5cdHtcblx0XHRyZXR1cm4gcGFyYW1ldGVyLnRvU3RyaW5nKCApO1xuXG5cdH1lbHNlIGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdHJldHVybiB1dGlsLmluc3BlY3QoIHBhcmFtZXRlciwgeyBcImRlcHRoXCI6IGRlcHRoIH0gKVxuXHRcdFx0LnJlcGxhY2UoIHNwYWNlLCBcIiBcIiApXG5cdFx0XHQuc3Vic3RyaW5nKCAwLCBsZW5ndGggKSArIFwiLi4uXCI7XG5cblx0fWVsc2UgaWYoIGFzZWEuY2xpZW50ICl7XG5cdFx0cmV0dXJuIHBhcmFtZXRlci50b1N0cmluZyggKTtcblxuXHR9ZWxzZXtcblx0XHRyZXR1cm4gcGFyYW1ldGVyLnRvU3RyaW5nKCApO1xuXHR9XG59O1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdEFwcGVuZCBtZXNzYWdlcyB0byB0aGUgY3VycmVudCBtZXNzYWdlLlxuXHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuT2xpdmFudC5wcm90b3R5cGUucmVtaW5kID0gZnVuY3Rpb24gcmVtaW5kKCApe1xuXHRsZXQgcGFyYW1ldGVyID0gcmF6ZSggYXJndW1lbnRzICk7XG5cblx0aWYoIGFyaWQoIHBhcmFtZXRlciApICl7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRsZXQgcGFyc2UgPSBjcnVzaC5iaW5kKCB0aGlzICk7XG5cblx0dGhpcy5tZXNzYWdlID0gVTIwMGIoIHBhcmFtZXRlclxuXHRcdC5tYXAoIGZ1bmN0aW9uIG9uRWFjaFBhcmFtZXRlciggcGFyYW1ldGVyICl7XG5cdFx0XHRpZiggZG91YnQoIHBhcmFtZXRlciwgQVNfQVJSQVkgKSApe1xuXHRcdFx0XHRwYXJhbWV0ZXIgPSByYXplKCBwYXJhbWV0ZXIgKVxuXHRcdFx0XHRcdC5tYXAoICggcGFyYW1ldGVyICkgPT4geyByZXR1cm4gcGFyc2UoIHBhcmFtZXRlciApIH0gKTtcblxuXHRcdFx0XHRyZXR1cm4gVTIwMGIoIHBhcmFtZXRlclxuXHRcdFx0XHRcdC5maWx0ZXIoICggbWVzc2FnZSApID0+IHsgcmV0dXJuIHRydWx5KCBtZXNzYWdlICk7IH0gKSApXG5cdFx0XHRcdFx0LmpvaW4oIFwiLCBcIiApO1xuXG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0cmV0dXJuIHBhcnNlKCBwYXJhbWV0ZXIgKTtcblx0XHRcdH1cblx0XHR9IClcblx0XHQucmV2ZXJzZSggKVxuXHRcdC5jb25jYXQoIFsgdGhpcy5tZXNzYWdlIF0gKVxuXHRcdC5maWx0ZXIoICggbWVzc2FnZSApID0+IHsgcmV0dXJuIHRydWx5KCBtZXNzYWdlICk7IH0gKVxuXHRcdC5yZXZlcnNlKCApIClcblx0XHQuam9pbiggXCIsIFwiICk7XG5cblx0dGhpcy5yZXBvcnQoICk7XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFNpbGVuY2UgdGhlIGxvZ2dpbmcgY2FwYWJpbGl0aWVzLlxuXHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuT2xpdmFudC5wcm90b3R5cGUuc2lsZW5jZSA9IGZ1bmN0aW9uIHNpbGVuY2UoICl7XG5cdHRoaXMuc2lsZW50ID0gdHJ1ZTtcblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qO1xuXHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0RGVhY3RpdmF0ZSBzaWxlbmNlLlxuXHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuT2xpdmFudC5wcm90b3R5cGUuc2hvdXQgPSBmdW5jdGlvbiBzaG91dCggKXtcblx0dGhpcy5zaWxlbnQgPSBmYWxzZTtcblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qO1xuXHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0TG9nIHRoZSBkYXRhLlxuXHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuT2xpdmFudC5wcm90b3R5cGUucHJvbXB0ID0gZnVuY3Rpb24gcHJvbXB0KCApe1xuXHR0aGlzLnJlbWluZC5hcHBseSggdGhpcywgcmF6ZSggYXJndW1lbnRzICkgKTtcblxuXHRzbmFwZC5iaW5kKCB0aGlzIClcblx0XHQoIGZ1bmN0aW9uIGRlbGF5KCApe1xuXHRcdFx0aWYoIHRoaXMuZGVwdGggPT09IDIgKXtcblx0XHRcdFx0dGhpcy5sb2coIHRoaXMuZ2V0TWVzc2FnZSggKSApO1xuXG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggZG91YnQoIHRoaXMuc3RhY2ssIEFSUkFZICkgJiYgZmlsbGVkKCB0aGlzLnN0YWNrICkgKXtcblx0XHRcdFx0dGhpcy5sb2coIHRoaXMuZ2V0TWVzc2FnZSggKSApO1xuXG5cdFx0XHR9ZWxzZSBpZiggdGhpcy5kZXB0aCA+IDUgKXtcblx0XHRcdFx0dGhpcy5nZXRUcmFjZSggKCBlcnJvciwgc3RhY2sgKSA9PiB7XG5cdFx0XHRcdFx0aWYoIGNsYXpvZiggZXJyb3IsIEVycm9yICkgKXtcblx0XHRcdFx0XHRcdHRoaXMucmVtaW5kKCBgZXJyb3IgZ2V0dGluZyBzdGFjayB0cmFjZSwgJHsgZXJyb3IgfWAgKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiggdHJ1dSggc3RhY2sgKSApe1xuXHRcdFx0XHRcdFx0dGhpcy5zdGFjayA9IHN0YWNrO1xuXG5cdFx0XHRcdFx0XHR0aGlzLmxvZyggdGhpcy5nZXRNZXNzYWdlKCApICk7XG5cblx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdHRoaXMubG9nKCB0aGlzLmdldE1lc3NhZ2UoICkgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gKTtcblxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHRoaXMubG9nKCB0aGlzLmdldE1lc3NhZ2UoICkgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFNldCB0aGUgcmVkaXJlY3Rpb24gY29uZmlndXJhdGlvbi5cblxuXHRcdFRoaXMgd2lsbCB0cmlnZ2VyIHJlZGlyZWN0IHJlc3BvbnNlIHdoZW4gc2VuZCBpcyBjYWxsZWQuXG5cblx0XHREZWZhdWx0IG9mIERFRkFVTFRfUkVESVJFQ1RfUEFUSCB3aWxsIGJlIHVzZWQgaWYgcGF0aCBpcyBub3QgZ2l2ZW4uXG5cdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5PbGl2YW50LnByb3RvdHlwZS5yZWRpcmVjdCA9IGZ1bmN0aW9uIHJlZGlyZWN0KCBwYXRoICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwicGF0aDpyZXF1aXJlZFwiOiBcInN0cmluZ1wiXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHR0aGlzLnN0YXRlID0gUkVESVJFQ1Q7XG5cdHRoaXMucGF0aCA9IHBhdGg7XG5cblx0aWYoIGZhbHp5KCB0aGlzLnBhdGggKSAmJlxuXHRcdHRydWx5KCBERUZBVUxUX1JFRElSRUNUX1BBVEggKSAmJlxuXHRcdHByb3R5cGUoIERFRkFVTFRfUkVESVJFQ1RfUEFUSCwgU1RSSU5HICkgKVxuXHR7XG5cdFx0dGhpcy5wYXRoID0gREVGQVVMVF9SRURJUkVDVF9QQVRIO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRpZiggIXByb3R5cGUoIHRoaXMucGF0aCwgU1RSSU5HICkgKXtcblx0XHR0aGlzLnJlc2V0KCBJc3N1ZSwgdHJ1ZSApXG5cdFx0XHQuc2lsZW5jZSggKVxuXHRcdFx0LnByb21wdCggXCJpbnZhbGlkIHJlZGlyZWN0IHBhdGhcIiApO1xuXG5cdH1lbHNlIGlmKCBmYWx6eSggdGhpcy5wYXRoICkgKXtcblx0XHR0aGlzLnJlc2V0KCBJc3N1ZSwgdHJ1ZSApXG5cdFx0XHQuc2lsZW5jZSggKVxuXHRcdFx0LnByb21wdCggXCJlbXB0eSByZWRpcmVjdCBwYXRoXCIgKTtcblx0fVxuXG5cdHJldHVybiB0aGlzO1xufTtcblxuT2xpdmFudC5wcm90b3R5cGUuZmx1c2hTdGF0ZSA9IGZ1bmN0aW9uIGZsdXNoU3RhdGUoICl7XG5cdHRoaXMuc3RhdGUgPSBcIlwiO1xuXHR0aGlzLnBhdGggPSBcIlwiO1xuXG5cdHJldHVybiB0aGlzO1xufTtcblxuLyo7XG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRQYXNzIHRoZSBpbnN0YW5jZSB0byB0aGUgY2FsbGJhY2sgZmlyc3QgcGFyYW1ldGVyLlxuXG5cdFx0VGhpcyBmb2xsb3dzIHRoZSBzdGFuZGFyZCBlcnJvci1yZXN1bHQtb3B0aW9uIGNvbnZlbnRpb24uXG5cblx0XHRIYXMgc3BlY2lhbCBzdXBwb3J0IGZvciBnbHVjb3NlIGNvYXRlZCBvcHRpb24uXG5cdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5PbGl2YW50LnByb3RvdHlwZS5wYXNzID0gZnVuY3Rpb24gcGFzcyggY2FsbGJhY2ssIHJlc3VsdCwgb3B0aW9uICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwiY2FsbGJhY2s6cmVxdWlyZWRcIjogXCJmdW5jdGlvblwiXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRpZiggIXByb3R5cGUoIGNhbGxiYWNrLCBGVU5DVElPTiApICl7XG5cdFx0dGhpcy5yZXNldCggQnVnLCB0cnVlIClcblx0XHRcdC5wcm9tcHQoIFwiaW52YWxpZCBjYWxsYmFja1wiICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGlmKCB0cnV1KCBvcHRpb24gKSAmJiB0cnV1KCBvcHRpb24uc2VsZiApICYmIG9wdGlvbi5DT0FURUQgPT09IENPQVRFRCApe1xuXHRcdHRoaXMuc2V0KCBDT05URVhULCBvcHRpb24uc2VsZiApO1xuXHR9XG5cblx0aWYoIHRoaXMuY29udGV4dCApe1xuXHRcdGNhbGxiYWNrID0gY2FsbGVkLmJpbmQoIHRoaXMuY29udGV4dCApKCBjYWxsYmFjayApO1xuXG5cdH1lbHNle1xuXHRcdGNhbGxiYWNrID0gY2FsbGVkKCBjYWxsYmFjayApO1xuXHR9XG5cblx0Y2FsbGJhY2soIHRoaXMsIHJlc3VsdCwgb3B0aW9uICk7XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG5oYXJkZW4oIFwiY3JlYXRlXCIsIGZ1bmN0aW9uIGNyZWF0ZSggbmFtZSwgb3B0aW9uICl7XG5cdGxldCBMb2dFbmdpbmUgPSBkaWF0b20oIG5hbWUgKTtcblxuXHRoZXJlZGl0byggTG9nRW5naW5lLCBPbGl2YW50ICk7XG5cblx0TG9nRW5naW5lLnByb3RvdHlwZS5uYW1lID0gb3B0aW9uLm5hbWU7XG5cdExvZ0VuZ2luZS5wcm90b3R5cGUuc3RhdHVzID0gb3B0aW9uLnN0YXR1cztcblx0TG9nRW5naW5lLnByb3RvdHlwZS5jb2RlID0gb3B0aW9uLmNvZGU7XG5cdExvZ0VuZ2luZS5wcm90b3R5cGUuc2lsZW50ID0gb3B0aW9uLnNpbGVudDtcblx0TG9nRW5naW5lLnByb3RvdHlwZS5kZXB0aCA9IG9wdGlvbi5kZXB0aDtcblx0TG9nRW5naW5lLnByb3RvdHlwZS5jb2xvciA9IG9wdGlvbi5jb2xvcjtcblx0TG9nRW5naW5lLnByb3RvdHlwZS5pbnNwZWN0ID0gb3B0aW9uLmluc3BlY3Q7XG5cdExvZ0VuZ2luZS5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IG9wdGlvbi5pbml0aWFsaXplIHx8XG5cdFx0ZnVuY3Rpb24gaW5pdGlhbGl6ZSggKXtcblx0XHRcdHRoaXMubmFtZSA9IG9wdGlvbi5uYW1lO1xuXG5cdFx0XHR0aGlzLnN0YXR1cyA9IG9wdGlvbi5zdGF0dXM7XG5cblx0XHRcdHRoaXMuY29kZSA9IG9wdGlvbi5jb2RlO1xuXG5cdFx0XHR0aGlzLnNpbGVudCA9IG9wdGlvbi5zaWxlbnQ7XG5cblx0XHRcdHRoaXMuZGVwdGggPSBvcHRpb24uZGVwdGg7XG5cdFx0fTtcblxuXHRzeW1iaW90ZSggTG9nRW5naW5lICk7XG5cblx0aGFyZGVuKCBMb2dFbmdpbmUubmFtZSwgTG9nRW5naW5lICk7XG59LCBPbGl2YW50ICk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2xpdmFudDtcbiJdfQ==
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9saXZhbnQuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhcmlkIiwicmVxdWlyZSIsImFzZWEiLCJidWRnZSIsImNhbGxlZCIsImNsYXpvZiIsImRpYXRvbSIsImRvdWJ0IiwiRXRoZXJuaXR5IiwiZmFsemUiLCJmYWx6eSIsImZpbGxlZCIsImdsdWNvc2UiLCJoYXJkZW4iLCJoZXJlZGl0byIsImtlaW4iLCJtZWVrIiwib3V0cmUiLCJwbG91Z2giLCJwcm90eXBlIiwicmF6ZSIsInNuYXBkIiwic3ltYmlvdGUiLCJ0cnVseSIsInRydXUiLCJVMjAwYiIsInRyYWNlIiwid2luZG93IiwiREVGQVVMVF9SRURJUkVDVF9QQVRIIiwiT2xpdmFudCIsIkRFRkFVTFRfSU5TUEVDVF9PUFRJT04iLCJERUZBVUxUX0xPR19FTkdJTkUiLCJjbGllbnQiLCJjb25zb2xlIiwiZGVidWciLCJsb2ciLCJwcm90b3R5cGUiLCJpbml0aWFsaXplIiwib3B0aW9uIiwiZHVyYXRpb24iLCJEYXRlIiwibm93IiwiYXJndW1lbnRzIiwiT0JKRUNUIiwiQVJHVU1FTlRTIiwiRXJyb3IiLCJDT0FURUQiLCJsb2FkIiwibGV0IiwicGFyYW1ldGVyIiwibGVuZ3RoIiwiZXJyb3IiLCJyZW1pbmQiLCJhcHBseSIsIm1lc3NhZ2UiLCJjb25jYXQiLCJTVFJJTkciLCJjb25zdHJ1Y3RvciIsIkZVTkNUSU9OIiwibmFtZSIsImJpbmQiLCJFQ0hPIiwic3RhdHVzIiwiY29kZSIsIkVDSE9fQ09ERSIsImNvbnRleHQiLCJzZWxmIiwic2lsZW50IiwiQk9PTEVBTiIsImRlcHRoIiwiTlVNQkVSIiwic2VydmVyIiwiY29sb3IiLCJjaGFsayIsIndoaXRlIiwic3RhdGUiLCJzdGFjayIsImluc3BlY3QiLCJyZWRzZWEiLCJJc3N1ZSIsImJsYWNrc2VhIiwiRmF0YWwiLCJyZXNldCIsInJlbmV3IiwibG9nRW5naW5lIiwiZGF0YSIsInNpbGVuY2UiLCJwcm9tcHQiLCJ0b1N0cmluZyIsImpvaW4iLCJ2YWx1ZU9mIiwiZ2V0VGltZXN0YW1wIiwidGltZXN0YW1wIiwicHJpbnRUaW1lIiwiZGltIiwiY29sb3JNZXNzYWdlIiwicmVzb2x2ZU1lc3NhZ2UiLCJmaWx0ZXIiLCJyZXNvbHZlVHJhY2UiLCJBUlJBWSIsIm1hcCIsImZyYW1lIiwiZnVuY3Rpb25OYW1lIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwicmVkIiwiZ2V0TWVzc2FnZSIsImdldFRyYWNlIiwiY2FsbGJhY2siLCJmcm9tRXJyb3IiLCJ0aGVuIiwiZnJhbWVMaXN0IiwiZ2V0IiwicGFyc2UiLCJzZXQiLCJwcm9wZXJ0eSIsInZhbHVlIiwiTE9HIiwiU0lMRU5UIiwiQ09OVEVYVCIsInNlbmQiLCJyYXciLCJwcm9jZWR1cmUiLCJSRURJUkVDVCIsInBhdGgiLCJodHRwIiwiU2VydmVyUmVzcG9uc2UiLCJzZWd3YXkiLCJmbHVzaFN0YXRlIiwicmVwb3J0IiwiZGVsYXkiLCJwcm9jZXNzIiwiZW1pdCIsImV2ZW50IiwiRXZlbnQiLCJkb2N1bWVudCIsImRpc3BhdGNoRXZlbnQiLCJjcnVzaCIsInNwYWNlIiwidXRpbCIsInJlcGxhY2UiLCJzdWJzdHJpbmciLCJvbkVhY2hQYXJhbWV0ZXIiLCJBU19BUlJBWSIsInJldmVyc2UiLCJzaG91dCIsInJlZGlyZWN0IiwicGFzcyIsInJlc3VsdCIsIkJ1ZyIsImNyZWF0ZSIsIkxvZ0VuZ2luZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3RlosTUFBTUEsS0FBSyxFQUFFQyxPQUFPLEVBQUUsT0FBTyxDQUFDO0FBQzlCLE1BQU1DLEtBQUssRUFBRUQsT0FBTyxFQUFFLE9BQU8sQ0FBQztBQUM5QixNQUFNRSxNQUFNLEVBQUVGLE9BQU8sRUFBRSxRQUFRLENBQUM7QUFDaEMsTUFB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UyxDQUFDK0IsT0FBTyxFQUFFN0IsTUFBTSxDQUFDNkIsTUFBTTtDQUMxQ3FGLFNBQVMsQ0FBQ3BILFNBQVMsQ0FBQ2lDLE1BQU0sRUFBRS9CLE1BQU0sQ0FBQytCLEtBQUs7Q0FDeENtRixTQUFTLENBQUNwSCxTQUFTLENBQUNvQyxNQUFNLEVBQUVsQyxNQUFNLENBQUNrQyxLQUFLO0NBQ3hDZ0YsU0FBUyxDQUFDcEgsU0FBUyxDQUFDeUMsUUFBUSxFQUFFdkMsTUFBTSxDQUFDdUMsT0FBTztDQUM1QzJFLFNBQVMsQ0FBQ3BILFNBQVMsQ0FBQ0MsV0FBVyxFQUFFQyxNQUFNLENBQUNELFdBQVc7RUFDbEQsU0FBU0EsVUFBVSxFQUFFLENBQUM7R0FDckIsSUFBSSxDQUFDc0IsS0FBSyxFQUFFckIsTUFBTSxDQUFDcUIsSUFBSTs7R0FFdkIsSUFBSSxDQUFDRyxPQUFPLEVBQUV4QixNQUFNLENBQUN3QixNQUFNOztHQUUzQixJQUFJLENBQUNDLEtBQUssRUFBRXpCLE1BQU0sQ0FBQ3lCLElBQUk7O0dBRXZCLElBQUksQ0FBQ0ksT0FBTyxFQUFFN0IsTUFBTSxDQUFDNkIsTUFBTTs7R0FFM0IsSUFBSSxDQUFDRSxNQUFNLEVBQUUvQixNQUFNLENBQUMrQixLQUFLO0VBQzFCLENBQUM7O0NBRUYvQyxRQUFRLEVBQUVrSSxVQUFVLENBQUM7O0NBRXJCM0ksTUFBTSxFQUFFMkksU0FBUyxDQUFDN0YsSUFBSSxFQUFFNkYsVUFBVSxDQUFDO0FBQ3BDLENBQUMsRUFBRTNILFFBQVEsQ0FBQzs7QUFFWjRILE1BQU0sQ0FBQ0MsUUFBUSxFQUFFN0gsT0FBTyIsImZpbGUiOiJvbGl2YW50LnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEBtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXG5cblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcIm9saXZhbnRcIixcblx0XHRcdFwicGF0aFwiOiBcIm9saXZhbnQvb2xpdmFudC5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwib2xpdmFudC5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJvbGl2YW50XCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvb2xpdmFudC5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcIm9saXZhbnQtdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZSxcblx0XHRcdFwiY2xhc3NcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRFY2hvIHRoZSBkZXN0cnVjdGlvbiBjYXVzZWQgYnkgeW91ciBjb2RlLlxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhcmlkXCI6IFwiYXJpZFwiLFxuXHRcdFx0XCJhc2VhXCI6IFwiYXNlYVwiLFxuXHRcdFx0XCJidWRnZVwiOiBcImJ1ZGdlXCIsXG5cdFx0XHRcImJsYWNrc2VhXCI6IFwiYmxhY2tzZWFcIixcblx0XHRcdFwiY2FsbGVkXCI6IFwiY2FsbGVkXCIsXG5cdFx0XHRcImNoYWxrXCI6IFwiY2hhbGtcIixcblx0XHRcdFwiY2xhem9mXCI6IFwiY2xhem9mXCIsXG5cdFx0XHRcImRleGlzdFwiOiBcImRleGlzdFwiLFxuXHRcdFx0XCJkaWF0b21cIjogXCJkaWF0b21cIixcblx0XHRcdFwiRXRoZXJuaXR5XCI6IFwiZXRoZXJuaXR5XCIsXG5cdFx0XHRcIkV2ZW50RW1pdHRlclwiOiBcImV2ZW50c1wiLFxuXHRcdFx0XCJmYWx6ZVwiOiBcImZhbHplXCIsXG5cdFx0XHRcImZhbHp5XCI6IFwiZmFsenlcIixcblx0XHRcdFwiZ2x1Y29zZVwiOiBcImdsdWNvc2VcIixcblx0XHRcdFwiaGFyZGVuXCI6IFwiaGFyZGVuXCIsXG5cdFx0XHRcImhlcmVkaXRvXCI6IFwiaGVyZWRpdG9cIixcblx0XHRcdFwia2VpblwiOiBcImtlaW5cIixcblx0XHRcdFwiaHR0cFwiOiBcImh0dHBcIixcblx0XHRcdFwibWVla1wiOiBcIm1lZWtcIlxuXHRcdFx0XCJvdXRyZVwiOiBcIm91dHJlXCIsXG5cdFx0XHRcInBsb3VnaFwiOiBcInBsb3VnaFwiLFxuXHRcdFx0XCJwcm90eXBlXCI6IFwicHJvdHlwZVwiLFxuXHRcdFx0XCJyYXplXCI6IFwicmF6ZVwiLFxuXHRcdFx0XCJyZWRzZWFcIjogXCJyZWRzZWFcIixcblx0XHRcdFwic25hcGRcIjogXCJzbmFwZFwiLFxuXHRcdFx0XCJzZWd3YXlcIjogXCJzZWd3YXlcIixcblx0XHRcdFwic3ltYmlvdGVcIjogXCJzeW1iaW90ZVwiLFxuXHRcdFx0XCJ0cmFjZVwiOiBbIFwic3RhY2t0cmFjZS1qc1wiLCBcInN0YWNrLXRyYWNlXCIgXSxcblx0XHRcdFwidHJ1bHlcIjogXCJ0cnVseVwiLFxuXHRcdFx0XCJ0cnV1XCI6IFwidHJ1dVwiLFxuXHRcdFx0XCJVMjAwYlwiOiBcInUyMDBiXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXJpZCA9IHJlcXVpcmUoIFwiYXJpZFwiICk7XG5jb25zdCBhc2VhID0gcmVxdWlyZSggXCJhc2VhXCIgKTtcbmNvbnN0IGJ1ZGdlID0gcmVxdWlyZSggXCJidWRnZVwiICk7XG5jb25zdCBjYWxsZWQgPSByZXF1aXJlKCBcImNhbGxlZFwiICk7XG5jb25zdCBjbGF6b2YgPSByZXF1aXJlKCBcImNsYXpvZlwiICk7XG5jb25zdCBkaWF0b20gPSByZXF1aXJlKCBcImRpYXRvbVwiICk7XG5jb25zdCBkb3VidCA9IHJlcXVpcmUoIFwiZG91YnRcIiApO1xuY29uc3QgRXRoZXJuaXR5ID0gcmVxdWlyZSggXCJldGhlcm5pdHlcIiApO1xuY29uc3QgZmFsemUgPSByZXF1aXJlKCBcImZhbHplXCIgKTtcbmNvbnN0IGZhbHp5ID0gcmVxdWlyZSggXCJmYWx6eVwiICk7XG5jb25zdCBmaWxsZWQgPSByZXF1aXJlKCBcImZpbGxlZFwiICk7XG5jb25zdCBnbHVjb3NlID0gcmVxdWlyZSggXCJnbHVjb3NlXCIgKTtcbmNvbnN0IGhhcmRlbiA9IHJlcXVpcmUoIFwiaGFyZGVuXCIgKTtcbmNvbnN0IGhlcmVkaXRvID0gcmVxdWlyZSggXCJoZXJlZGl0b1wiICk7XG5jb25zdCBrZWluID0gcmVxdWlyZSggXCJrZWluXCIgKTtcbmNvbnN0IG1lZWsgPSByZXF1aXJlKCBcIm1lZWtcIiApO1xuY29uc3Qgb3V0cmUgPSByZXF1aXJlKCBcIm91dHJlXCIgKTtcbmNvbnN0IHBsb3VnaCA9IHJlcXVpcmUoIFwicGxvdWdoXCIgKTtcbmNvbnN0IHByb3R5cGUgPSByZXF1aXJlKCBcInByb3R5cGVcIiApO1xuY29uc3QgcmF6ZSA9IHJlcXVpcmUoIFwicmF6ZVwiICk7XG5jb25zdCBzbmFwZCA9IHJlcXVpcmUoIFwic25hcGRcIiApO1xuY29uc3Qgc3ltYmlvdGUgPSByZXF1aXJlKCBcInN5bWJpb3RlXCIgKTtcbmNvbnN0IHRydWx5ID0gcmVxdWlyZSggXCJ0cnVseVwiICk7XG5jb25zdCB0cnV1ID0gcmVxdWlyZSggXCJ0cnV1XCIgKTtcbmNvbnN0IFUyMDBiID0gcmVxdWlyZSggXCJ1MjAwYlwiICk7XG5cbi8vOiBAY2xpZW50OlxuY29uc3QgdHJhY2UgPSByZXF1aXJlKCBcInN0YWNrdHJhY2UtanNcIiApO1xuaGFyZGVuKCBcIkRFRkFVTFRfUkVESVJFQ1RfUEFUSFwiLCB3aW5kb3cuREVGQVVMVF9SRURJUkVDVF9QQVRIIHx8IFwiL3ZpZXcvc3RhdHVzL3BhZ2VcIiApO1xuLy86IEBlbmQtY2xpZW50XG5cblxuXG5jb25zdCBPbGl2YW50ID0gZGlhdG9tKCBcIk9saXZhbnRcIiApO1xuXG5jb25zdCBERUZBVUxUX0lOU1BFQ1RfT1BUSU9OID0geyBcImRlcHRoXCI6IDEsIFwibGVuZ3RoXCI6IDIwMCB9O1xuY29uc3QgREVGQVVMVF9MT0dfRU5HSU5FID0gYXNlYS5jbGllbnQ/IGNvbnNvbGUuZGVidWcgOiBjb25zb2xlLmxvZztcblxuLyo7XG5cdEBub3RlOlxuXHRcdFRoaXMgaXMgdGhlIGRlZmF1bHQgbmFtZS9zdGF0dXMgYW5kIGNvZGUgb2YgdGhlIG9saXZhbnQuXG5cdEBlbmQtbm90ZVxuKi9cbmhhcmRlbiggXCJFQ0hPXCIsIFwiZWNob1wiICk7XG5oYXJkZW4oIFwiRUNIT19DT0RFXCIsIDIwMCApO1xuXG5oYXJkZW4oIFwiUkVESVJFQ1RcIiwgXCJyZWRpcmVjdFwiICk7XG5oYXJkZW4oIFwiQ09OVEVYVFwiLCBcImNvbnRleHRcIiApO1xuaGFyZGVuKCBcIkxPR1wiLCBcImxvZ1wiICk7XG5oYXJkZW4oIFwiU0lMRU5UXCIsIFwic2lsZW50XCIgKTtcblxuLyo7XG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRPcHRpb24gc2hvdWxkIG5vdCBiZSBnbHVjb3NlIGNvYXRlZC5cblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiBpbml0aWFsaXplKCBvcHRpb24gKXtcblx0dGhpcy5kdXJhdGlvbiA9IERhdGUubm93KCApO1xuXG5cdGlmKCBwcm90eXBlKCBhcmd1bWVudHNbIDAgXSwgT0JKRUNUICkgJiZcblx0XHQhZG91YnQoIGFyZ3VtZW50c1sgMCBdLCBBUkdVTUVOVFMgKSAmJlxuXHRcdCEoIGNsYXpvZiggYXJndW1lbnRzWyAwIF0sIEVycm9yICkgKSAmJlxuXHRcdG9wdGlvbi5DT0FURUQgIT09IENPQVRFRCApXG5cdHtcblx0XHR0aGlzLmxvYWQoIG9wdGlvbiApO1xuXG5cdH1lbHNle1xuXHRcdHRoaXMubG9hZCggKTtcblx0fVxuXG5cdGxldCBwYXJhbWV0ZXIgPSBhcmd1bWVudHNbIDAgXTtcblxuXHRpZiggYXJndW1lbnRzLmxlbmd0aCA9PSAwICl7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fWVsc2UgaWYoIGNsYXpvZiggcGFyYW1ldGVyLCBFcnJvciApICl7XG5cdFx0bGV0IGVycm9yID0gcGFyYW1ldGVyO1xuXG5cdFx0dGhpcy5yZW1pbmQuYXBwbHkoIHRoaXMsIFsgZXJyb3IubWVzc2FnZSwgZXJyb3IgXS5jb25jYXQoIGJ1ZGdlKCBhcmd1bWVudHMgKSApICk7XG5cblx0fWVsc2UgaWYoIGNsYXpvZiggcGFyYW1ldGVyLCBPbGl2YW50ICkgKXtcblx0XHR0aGlzLmxvYWQoIHBhcmFtZXRlciApO1xuXG5cdH1lbHNlIGlmKCBkb3VidCggcGFyYW1ldGVyLCBBUkdVTUVOVFMgKSApe1xuXHRcdHRoaXMucmVtaW5kLmFwcGx5KCB0aGlzLCBwbG91Z2goIHBhcmFtZXRlciApICk7XG5cblx0fWVsc2UgaWYoIHByb3R5cGUoIHBhcmFtZXRlciwgU1RSSU5HICkgKXtcblx0XHR0aGlzLnJlbWluZC5hcHBseSggdGhpcywgcmF6ZSggYXJndW1lbnRzICkgKTtcblxuXHR9ZWxzZSBpZiggcHJvdHlwZSggcGFyYW1ldGVyLCBPQkpFQ1QgKSAmJlxuXHRcdHBhcmFtZXRlci5jb25zdHJ1Y3RvciAmJlxuXHRcdHByb3R5cGUoIHBhcmFtZXRlci5jb25zdHJ1Y3RvciwgRlVOQ1RJT04gKSAmJlxuXHRcdHBhcmFtZXRlci5jb25zdHJ1Y3Rvci5uYW1lICE9IFwiRnVuY3Rpb25cIiAmJlxuXHRcdGNsYXpvZiggcGFyYW1ldGVyLCBwYXJhbWV0ZXIuY29uc3RydWN0b3IgKSApXG5cdHtcblx0XHR0aGlzLmxvYWQoIHBhcmFtZXRlciApO1xuXG5cdFx0dGhpcy5yZW1pbmQuYXBwbHkoIHRoaXMsIHJhemUoIGFyZ3VtZW50cyApICk7XG5cblx0fWVsc2UgaWYoIHByb3R5cGUoIHBhcmFtZXRlciwgT0JKRUNUICkgKXtcblx0XHR0aGlzLnJlbWluZC5hcHBseSggdGhpcywgcmF6ZSggYXJndW1lbnRzICkgKTtcblx0fVxuXG5cdHJldHVybiB0aGlzO1xufTtcblxuT2xpdmFudC5wcm90b3R5cGUubG9hZCA9IGZ1bmN0aW9uIGxvYWQoIG9wdGlvbiApe1xuXHRvcHRpb24gPSBnbHVjb3NlLmJpbmQoIHRoaXMgKSggb3B0aW9uICk7XG5cblx0dGhpcy5uYW1lID0gb3B0aW9uLm5hbWUgfHwgdGhpcy5uYW1lIHx8IEVDSE9cblxuXHR0aGlzLnN0YXR1cyA9IG9wdGlvbi5zdGF0dXMgfHwgdGhpcy5zdGF0dXMgfHwgRUNITztcblxuXHR0aGlzLmNvZGUgPSBvcHRpb24uY29kZSB8fCB0aGlzLmNvZGUgfHwgRUNIT19DT0RFO1xuXG5cdHRoaXMubG9nID0gb3B0aW9uLmxvZyB8fCB0aGlzLmxvZyB8fCBERUZBVUxUX0xPR19FTkdJTkU7XG5cblx0aWYoIGZhbHplKCB0aGlzLmNvbnRleHQgKSAmJiB0cnV1KCBvcHRpb24uc2VsZiApICl7XG5cdFx0dGhpcy5jb250ZXh0ID0gb3B0aW9uLnNlbGY7XG5cdH1cblxuXHR0aGlzLnNpbGVudCA9IGtlaW4oIG9wdGlvbiwgXCJzaWxlbnRcIiApPyBvcHRpb24uc2lsZW50IDpcblx0XHRrZWluKCB0aGlzLCBcInNpbGVudFwiICk/IHRoaXMuc2lsZW50IDogdHJ1ZTtcblxuXHRpZiggIXByb3R5cGUoIHRoaXMuc2lsZW50LCBCT09MRUFOICkgKXtcblx0XHR0aGlzLnNpbGVudCA9IHRydWU7XG5cdH1cblxuXHQvLzogRGVwdGggZGljdGF0ZXMgcmVmaW5lZCBzZXR0aW5ncyBvZiB0aGlzIHByb2NlZHVyZS5cblx0dGhpcy5kZXB0aCA9IGtlaW4oIG9wdGlvbiwgXCJkZXB0aFwiICk/IG9wdGlvbi5kZXB0aCA6XG5cdFx0a2VpbiggdGhpcywgXCJkZXB0aFwiICk/IHRoaXMuZGVwdGggOiAxO1xuXG5cdGlmKCAhcHJvdHlwZSggdGhpcy5kZXB0aCwgTlVNQkVSICkgKXtcblx0XHR0aGlzLmRlcHRoID0gMTtcblx0fVxuXG5cdC8vOiBEZXB0aCBpcyBvbmx5IGZyb20gMS0wIG9yIDEtMjM0NS02Nzg5LTAuXG5cdC8vOiBEZXB0aCAyIGlzIGRlZXAgc2lsZW50IGRlcHRoLlxuXHR0aGlzLmRlcHRoID0gdGhpcy5kZXB0aCAlIDEwO1xuXG5cdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdHRoaXMuY29sb3IgPSBvcHRpb24uY29sb3IgfHwgdGhpcy5jb2xvciB8fCBjaGFsay53aGl0ZTtcblx0fVxuXG5cdHRoaXMuc3RhdGUgPSBcIlwiO1xuXG5cdHRoaXMuc3RhY2sgPSBvcHRpb24uc3RhY2sgfHwgdGhpcy5zdGFjayB8fCBbIF07XG5cblx0dGhpcy5tZXNzYWdlID0gb3B0aW9uLm1lc3NhZ2UgfHwgdGhpcy5tZXNzYWdlIHx8IFwiXCI7XG5cblx0dGhpcy5pbnNwZWN0ID0gb3B0aW9uLmluc3BlY3QgfHwgdGhpcy5pbnNwZWN0IHx8IERFRkFVTFRfSU5TUEVDVF9PUFRJT047XG5cblx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0cmVkc2VhKCBJc3N1ZSApO1xuXG5cdFx0YmxhY2tzZWEoIEZhdGFsICk7XG5cdH1cblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qO1xuXHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0TW9kaWZpZXMgdGhlIGxvZyBlbmdpbmUgd2hpbGUgbWFpbnRhaW5pbmcgZW52aXJvbm1lbnQgcHJvcGVydGllcy5cblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gcmVzZXQoIG9wdGlvbiwgcmVuZXcgKXtcblx0aWYoIHByb3R5cGUoIG9wdGlvbiwgRlVOQ1RJT04gKSAmJiBjbGF6b2YoIG9wdGlvbiwgT2xpdmFudCApICl7XG5cdFx0bGV0IGxvZ0VuZ2luZSA9IG9wdGlvbjtcblxuXHRcdGlmKCBwcm90eXBlKCByZW5ldywgQk9PTEVBTiApICYmIHJlbmV3ICl7XG5cdFx0XHRsZXQgZGF0YSA9IHtcblx0XHRcdFx0XCJtZXNzYWdlXCI6IHRoaXMubWVzc2FnZSxcblx0XHRcdFx0XCJzdGFja1wiOiB0aGlzLnN0YWNrXG5cdFx0XHR9O1xuXG5cdFx0XHRyZXR1cm4gbG9nRW5naW5lKCBkYXRhICk7XG5cblx0XHR9ZWxzZXtcblx0XHRcdHRoaXMubG9hZCggbG9nRW5naW5lLnByb3RvdHlwZSApO1xuXHRcdH1cblxuXHR9ZWxzZSBpZiggcHJvdHlwZSggb3B0aW9uLCBPQkpFQ1QgKSApe1xuXHRcdHRoaXMubG9hZCggb3B0aW9uICk7XG5cblx0fWVsc2UgaWYoICFjbGF6b2YoIG9wdGlvbiwgSXNzdWUgKSApe1xuXHRcdHRoaXMucmVzZXQoIElzc3VlLCB0cnVlIClcblx0XHRcdC5zaWxlbmNlKCApXG5cdFx0XHQucHJvbXB0KCBcImNhbm5vdCByZXNldCB0byBnaXZlbiBvcHRpb25cIiwgb3B0aW9uICk7XG5cblx0fWVsc2V7XG5cdFx0SXNzdWUoIFwiY2Fubm90IHJlc2V0IGxvZ1wiLCBvcHRpb24sIHRoaXMgKS5zaWxlbmNlKCApLnByb21wdCggKTtcblx0fVxuXG5cdHJldHVybiB0aGlzO1xufTtcblxuT2xpdmFudC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyggKXtcblx0cmV0dXJuIFUyMDBiKCBvdXRyZSggWyB0aGlzLm5hbWUsIHRoaXMuc3RhdHVzLCB0aGlzLm1lc3NhZ2UgXSApICkuam9pbiggXCIsIFwiICk7XG59O1xuXG5PbGl2YW50LnByb3RvdHlwZS52YWx1ZU9mID0gZnVuY3Rpb24gdmFsdWVPZiggKXtcblx0cmV0dXJuIFUyMDBiKCBvdXRyZSggWyB0aGlzLm5hbWUsIHRoaXMuc3RhdHVzLCB0aGlzLm1lc3NhZ2UgXSApICkuam9pbiggXCIsIFwiICk7XG59O1xuXG5PbGl2YW50LnByb3RvdHlwZS5nZXRUaW1lc3RhbXAgPSBmdW5jdGlvbiBnZXRUaW1lc3RhbXAoICl7XG5cdGxldCB0aW1lc3RhbXAgPSBFdGhlcm5pdHkoICkucHJpbnRUaW1lKCB0cnVlICk7XG5cblx0dGltZXN0YW1wID0gYCR7IHRpbWVzdGFtcCB9IHwgJHsgKCBEYXRlLm5vdyggKSAtIHRoaXMuZHVyYXRpb24gKSB9bXNgO1xuXG5cdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdHJldHVybiBjaGFsay5kaW0oIHRpbWVzdGFtcCApO1xuXHR9XG5cblx0cmV0dXJuIHRpbWVzdGFtcDtcbn07XG5cbk9saXZhbnQucHJvdG90eXBlLmNvbG9yTWVzc2FnZSA9IGZ1bmN0aW9uIGNvbG9yTWVzc2FnZSggY29sb3IsIG1lc3NhZ2UgKXtcblx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0aWYoIHByb3R5cGUoIGNvbG9yLCBGVU5DVElPTiApICl7XG5cdFx0XHRyZXR1cm4gY29sb3IoIG1lc3NhZ2UgKTtcblxuXHRcdH1lbHNlIGlmKCBwcm90eXBlKCBjb2xvciwgU1RSSU5HICkgJiYgdHJ1bHkoIGNvbG9yICkgKXtcblx0XHRcdGlmKCBrZWluKCBjaGFsaywgY29sb3IgKSAmJiBwcm90eXBlKCBjaGFsa1sgY29sb3IgXSwgRlVOQ1RJT04gKSApe1xuXHRcdFx0XHRyZXR1cm4gY2hhbGtbIGNvbG9yIF0oIG1lc3NhZ2UgKTtcblxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHRoaXMucmVtaW5kKCBgaW52YWxpZCBtZXNzYWdlIGNvbG9yLCAkeyBjb2xvciB9YCApO1xuXG5cdFx0XHRcdHJldHVybiBjaGFsay53aGl0ZSggbWVzc2FnZSApO1xuXHRcdFx0fVxuXG5cdFx0fWVsc2V7XG5cdFx0XHRyZXR1cm4gY2hhbGsud2hpdGUoIG1lc3NhZ2UgKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gbWVzc2FnZTtcbn07XG5cbi8qO1xuXHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0VGhlIG1lc3NhZ2UgaXMgZGl2aWRlZCBpbnRvIHRocmVlIHBhcnRzLFxuXHRcdDEuIG5hbWVzcGFjZSxcblx0XHQyLiBzdGF0dXMsXG5cdFx0My4gYWN0dWFsIG1lc3NhZ2Vcblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLnJlc29sdmVNZXNzYWdlID0gZnVuY3Rpb24gcmVzb2x2ZU1lc3NhZ2UoICl7XG5cdGxldCBtZXNzYWdlID0gVTIwMGIoIG91dHJlKCBbIHRoaXMubmFtZSwgdGhpcy5zdGF0dXMsIHRoaXMubWVzc2FnZSBdIClcblx0XHQuZmlsdGVyKCB0cnVseSApICkuam9pbiggXCIsIFwiICk7XG5cblx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0cmV0dXJuIHRoaXMuY29sb3JNZXNzYWdlKCB0aGlzLmNvbG9yLCBtZXNzYWdlICk7XG5cdH1cblxuXHRyZXR1cm4gbWVzc2FnZTtcbn07XG5cbk9saXZhbnQucHJvdG90eXBlLnJlc29sdmVUcmFjZSA9IGZ1bmN0aW9uIHJlc29sdmVUcmFjZSggKXtcblx0bGV0IHN0YWNrID0gXCJzdGFjayB0cmFjZSBub3QgYXZhaWxhYmxlXCI7XG5cblx0aWYoICF0aGlzLnNpbGVudCAmJiBkb3VidCggdGhpcy5zdGFjaywgQVJSQVkgKSAmJiBmaWxsZWQoIHRoaXMuc3RhY2sgKSApe1xuXHRcdHN0YWNrID0gdGhpcy5zdGFjaztcblxuXHRcdHN0YWNrID0gc3RhY2subWFwKCAoIGZyYW1lICkgPT4ge1xuXHRcdFx0aWYoIGZyYW1lLnRvU3RyaW5nKCApID09PSBcIltvYmplY3QgT2JqZWN0XVwiICl7XG5cdFx0XHRcdGxldCB7IGZ1bmN0aW9uTmFtZSwgZmlsZU5hbWUsIGxpbmVOdW1iZXIsIGNvbHVtbk51bWJlciB9ID0gZnJhbWU7XG5cblx0XHRcdFx0cmV0dXJuIGAkeyBmdW5jdGlvbk5hbWUgfSAoJHsgZmlsZU5hbWUgfTokeyBsaW5lTnVtYmVyIH06JHsgY29sdW1uTnVtYmVyIH0pYDtcblxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHJldHVybiBmcmFtZS50b1N0cmluZyggKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cblx0XHRzdGFjayA9IFUyMDBiKCBzdGFjayApLmpvaW4oIFwiXFxuXCIgKTtcblxuXHRcdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdFx0cmV0dXJuIGNoYWxrLmRpbS5yZWQoIHN0YWNrICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHN0YWNrO1xuXHR9XG5cblx0aWYoIHRoaXMuZGVwdGggPCA1ICYmXG5cdFx0dGhpcy5zaWxlbnQgJiZcblx0XHR0cnV1KCB0aGlzLmNvbnRleHQgKSAmJlxuXHQgXHRwcm90eXBlKCB0aGlzLmNvbnRleHQuY29uc3RydWN0b3IsIEZVTkNUSU9OICkgJiZcblx0XHR0cnVseSggdGhpcy5jb250ZXh0LmNvbnN0cnVjdG9yLm5hbWUgKSApXG5cdHtcblx0XHRzdGFjayA9IGBjYWxsZWQgd2l0aCBjb250ZXh0LCAkeyB0aGlzLmNvbnRleHQuY29uc3RydWN0b3IubmFtZSB9YDtcblxuXHRcdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdFx0cmV0dXJuIGNoYWxrLmRpbSggc3RhY2sgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc3RhY2s7XG5cdH1cblxuXHRpZiggdGhpcy5zaWxlbnQgKXtcblx0XHRzdGFjayA9IFwic3RhY2sgdHJhY2UgaXMgbm90IGF2YWlsYWJsZSBvbiBzaWxlbnQgbW9kZVwiO1xuXG5cdFx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0XHRyZXR1cm4gY2hhbGsuZGltKCBzdGFjayApO1xuXHRcdH1cblxuXHRcdHJldHVybiBzdGFjaztcblx0fVxuXG5cdGlmKCB0aGlzLmRlcHRoID4gNSApe1xuXHRcdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdFx0cmV0dXJuIGNoYWxrLmRpbSggc3RhY2sgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc3RhY2s7XG5cdH1cbn07XG5cbi8qO1xuXHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0VGhlIG1lc3NhZ2UgY29uc2lzdCBvZiB0aHJlZSBsYXllciBvZiBzdHJpbmdzLFxuXHRcdFx0MS4gdGltZXN0YW1wIGluIHRydWUgdGltZSBmb3JtYXRcblx0XHRcdDIuIGFjdHVhbCByZWFkYWJsZSBtZXNzYWdlXG5cdFx0XHQzLiBtZXNzYWdlIHRyYWNlIG9yIG1lc3NhZ2UgY29udGV4dFxuXG5cdFx0VGhlc2UgaW5mb3JtYXRpb24gd2lsbCBiZSBkaXZpZGVkIHRocm91Z2ggemVyby13aWR0aCBzcGFjZSBjb252ZW50aW9uLlxuXHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuT2xpdmFudC5wcm90b3R5cGUuZ2V0TWVzc2FnZSA9IGZ1bmN0aW9uIGdldE1lc3NhZ2UoICl7XG5cdHJldHVybiBVMjAwYiggW1xuXHRcdHRoaXMuZ2V0VGltZXN0YW1wKCApLFxuXHRcdHRoaXMucmVzb2x2ZU1lc3NhZ2UoICksXG5cdFx0dGhpcy5yZXNvbHZlVHJhY2UoIClcblx0XSApLmpvaW4oIFwiXFxuXCIgKTtcbn07XG5cbi8qO1xuXHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0VGhpcyBzaG91bGQgYmUgdXNlZCBpbnRlcm5hbGx5IGFzIG11Y2ggYXMgcG9zc2libGUuXG5cdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5PbGl2YW50LnByb3RvdHlwZS5nZXRUcmFjZSA9IGZ1bmN0aW9uIGdldFRyYWNlKCBjYWxsYmFjayApe1xuXHRpZiggdGhpcy5kZXB0aCA9PSAyICl7XG5cdFx0dGhpcy5yZW1pbmQoIFwidHJhY2luZyBpcyBkaXNhYmxlZCBmb3IgZGVwdGggMlwiICkucHJvbXB0KCApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRjYWxsYmFjayA9IGNhbGxlZC5iaW5kKCB0aGlzICkoIGNhbGxiYWNrICk7XG5cblx0c25hcGQuYmluZCggdGhpcyApKCBjYWxsYmFjaywgMTAwMCApO1xuXG5cdGlmKCBhc2VhLmNsaWVudCApe1xuXHRcdGlmKCBjbGF6b2YoIHRoaXMuZXJyb3IsIEVycm9yICkgKXtcblx0XHRcdHRyYWNlLmZyb21FcnJvciggdGhpcy5lcnJvciApXG5cdFx0XHRcdC50aGVuKCAoIGZyYW1lTGlzdCApID0+IHtcblx0XHRcdFx0XHR0aGlzLnN0YWNrID0gZnJhbWVMaXN0O1xuXG5cdFx0XHRcdFx0Y2FsbGJhY2soIG51bGwsIHRoaXMuc3RhY2sgKTtcblx0XHRcdFx0fSApXG5cdFx0XHRcdC5jYXRjaCggKCBlcnJvciApID0+IHsgY2FsbGJhY2soIHRoaXMucmVtaW5kKCBlcnJvciApICk7IH0gKTtcblxuXHRcdH1lbHNlIGlmKCB0aGlzLmRlcHRoID4gNSApe1xuXHRcdFx0dHJhY2UuZ2V0KCApXG5cdFx0XHRcdC50aGVuKCAoIGZyYW1lTGlzdCApID0+IHtcblx0XHRcdFx0XHR0aGlzLnN0YWNrID0gZnJhbWVMaXN0O1xuXG5cdFx0XHRcdFx0Y2FsbGJhY2soIG51bGwsIHRoaXMuc3RhY2sgKTtcblx0XHRcdFx0fSApXG5cdFx0XHRcdC5jYXRjaCggKCBlcnJvciApID0+IHsgY2FsbGJhY2soIHRoaXMucmVtaW5kKCBlcnJvciApICk7IH0gKTtcblx0XHR9XG5cblx0fWVsc2UgaWYoIGFzZWEuc2VydmVyICl7XG5cdFx0aWYoIGNsYXpvZiggdGhpcy5lcnJvciwgRXJyb3IgKSApe1xuXHRcdFx0dGhpcy5zdGFjayA9IHRyYWNlLnBhcnNlKCB0aGlzLmVycm9yICk7XG5cblx0XHRcdGNhbGxiYWNrKCBudWxsLCB0aGlzLnN0YWNrICk7XG5cblx0XHR9ZWxzZSBpZiggdGhpcy5kZXB0aCA+IDUgKXtcblx0XHRcdHRoaXMuc3RhY2sgPSB0cmFjZS5nZXQoICk7XG5cblx0XHRcdGNhbGxiYWNrKCBudWxsLCB0aGlzLnN0YWNrICk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFNldHMgYSBwcm9wZXJ0eSBvZiB0aGlzIGxvZyBlbmdpbmUuXG5cblx0XHROb3QgYWxsIHByb3BlcnR5IGNhbiBiZSBzZXQgdG8gbGltaXQgdGhpcyBmdW5jdGlvblxuXHRcdFx0Zm9yIHNlY3VyaXR5IHB1cnBvc2VzLlxuXHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuT2xpdmFudC5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gc2V0KCBwcm9wZXJ0eSwgdmFsdWUgKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJwcm9wZXJ0eTpyZXF1aXJlZFwiOiBcInN0cmluZ1wiLFxuXHRcdFx0XHRcInZhbHVlXCI6IFwiKlwiXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRsZXQgcGFyYW1ldGVyID0gcmF6ZSggYXJndW1lbnRzICk7XG5cblx0aWYoIHBhcmFtZXRlci5sZW5ndGggPT0gMSAmJiBwcm90eXBlKCBwYXJhbWV0ZXJbIDAgXSwgT0JKRUNUICkgKXtcblx0XHRsZXQgb3B0aW9uID0gcGFyYW1ldGVyWyAwIF07XG5cdFx0Zm9yKCBsZXQgcHJvcGVydHkgaW4gb3B0aW9uICl7XG5cdFx0XHR0aGlzLnNldCggcHJvcGVydHksIG9wdGlvblsgcHJvcGVydHkgXSApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0aWYoICFwcm90eXBlKCBwcm9wZXJ0eSwgU1RSSU5HICkgKXtcblx0XHR0aGlzLnJlc2V0KCBJc3N1ZSwgdHJ1ZSApXG5cdFx0XHQuc2lsZW5jZSggKVxuXHRcdFx0LnByb21wdCggXCJpbnZhbGlkIHByb3BlcnR5XCIsIHByb3BlcnR5ICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGlmKCBwcm90eXBlKCBwcm9wZXJ0eSwgU1RSSU5HICkgJiZcblx0XHRwcm9wZXJ0eSAhPSBMT0cgICYmXG5cdFx0cHJvcGVydHkgIT0gU0lMRU5UICYmXG5cdFx0cHJvcGVydHkgIT0gQ09OVEVYVCApXG5cdHtcblx0XHR0aGlzLnJlc2V0KCBJc3N1ZSwgdHJ1ZSApXG5cdFx0XHQuc2lsZW5jZSggKVxuXHRcdFx0LnByb21wdCggXCJpbnZhbGlkIHByb3BlcnR5XCIsIHByb3BlcnR5ICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHRoaXNbIHByb3BlcnR5IF0gPSB2YWx1ZTtcblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qO1xuXHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0U2VuZCBkYXRhIHRvIHNlcnZlciBvciBjbGllbnQuXG5cdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5PbGl2YW50LnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gc2VuZCggKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJyZXNwb25zZVwiOiBcImh0dHAuU2VydmVyUmVzcG9uc2VcIixcblx0XHRcdFx0XCJwcm9jZWR1cmVcIjogXCJmdW5jdGlvblwiXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRpZiggdGhpcy5kZXB0aCA9PSAyICl7XG5cdFx0dGhpcy5yZW1pbmQoIFwic2VuZGluZyBpcyBkaXNhYmxlZCBmb3IgZGVwdGggMlwiICkucHJvbXB0KCApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRsZXQgbWVzc2FnZSA9IG1lZWsoIHRoaXMuc3RhdHVzLCBVMjAwYiggdGhpcy50b1N0cmluZyggKSApLnJhdyggKSApO1xuXG5cdGxldCBwcm9jZWR1cmUgPSBhcmd1bWVudHNbIDAgXTtcblxuXHRpZiggYXNlYS5zZXJ2ZXIgJiZcblx0XHR0aGlzLnN0YXRlID09PSBSRURJUkVDVCAmJlxuXHRcdHByb3R5cGUoIHRoaXMucGF0aCwgU1RSSU5HICkgJiZcblx0XHR0cnVseSggdGhpcy5wYXRoICkgJiZcblx0XHRjbGF6b2YoIHByb2NlZHVyZSwgaHR0cC5TZXJ2ZXJSZXNwb25zZSApIClcblx0e1xuXHRcdHNlZ3dheSgge1xuXHRcdFx0XCJyZXNwb25zZVwiOiBwcm9jZWR1cmUsXG5cdFx0XHRcInBhdGhcIjogdGhpcy5wYXRoLFxuXHRcdFx0XCJzdGF0dXNcIjogdGhpcy5zdGF0dXMsXG5cdFx0XHRcImRhdGFcIjogbWVzc2FnZSxcblx0XHR9ICk7XG5cblx0XHR0aGlzLmZsdXNoU3RhdGUoICk7XG5cblx0fWVsc2UgaWYoIGFzZWEuc2VydmVyICYmXG5cdFx0ZmFsenkoIHRoaXMuc3RhdGUgKSAmJlxuXHRcdGNsYXpvZiggcHJvY2VkdXJlLCBodHRwLlNlcnZlclJlc3BvbnNlICkgKVxuXHR7XG5cdFx0bWVzc2FnZS5zZW5kKCBwcm9jZWR1cmUsIHRoaXMuY29kZSApO1xuXG5cdH1lbHNlIGlmKCBhc2VhLmNsaWVudCAmJlxuXHRcdHRoaXMuc3RhdGUgPT0gUkVESVJFQ1QgJiZcblx0XHRwcm90eXBlKCB0aGlzLnBhdGgsIFNUUklORyApICYmXG5cdFx0dHJ1bHkoIHRoaXMucGF0aCApIClcblx0e1xuXHRcdHNlZ3dheSgge1xuXHRcdFx0XCJwYXRoXCI6IHRoaXMucGF0aCxcblx0XHRcdFwic3RhdHVzXCI6IHRoaXMuc3RhdHVzLFxuXHRcdFx0XCJkYXRhXCI6IG1lc3NhZ2UsXG5cdFx0fSApO1xuXG5cdFx0dGhpcy5mbHVzaFN0YXRlKCApO1xuXG5cdH1lbHNlIGlmKCBhc2VhLmNsaWVudCAmJlxuXHRcdGZhbHp5KCB0aGlzLnN0YXRlICkgJiZcblx0XHRwcm90eXBlKCBwcm9jZWR1cmUsIEZVTkNUSU9OICkgKVxuXHR7XG5cdFx0bWVzc2FnZS5zZW5kLmJpbmQoIHRoaXMgKSggcHJvY2VkdXJlICk7XG5cblx0fWVsc2UgaWYoIHRydWx5KCB0aGlzLnN0YXRlICkgKXtcblx0XHR0aGlzLnJlc2V0KCBJc3N1ZSwgdHJ1ZSApXG5cdFx0XHQuc2lsZW5jZSggKVxuXHRcdFx0LnByb21wdCggYGNhbm5vdCBpbnZva2Ugc2VuZGluZyBzdGF0ZSwgJHsgdGhpcy5zdGF0ZSB9LCBwcm9wZXJseWAgKVxuXHRcdFx0LnNlbmQoIHByb2NlZHVyZSApO1xuXG5cdFx0dGhpcy5mbHVzaFN0YXRlKCApO1xuXG5cdH1lbHNle1xuXHRcdHRoaXMucmVzZXQoIElzc3VlLCB0cnVlIClcblx0XHRcdC5zaWxlbmNlKCApXG5cdFx0XHQucHJvbXB0KCBcImNhbm5vdCBzZW5kIHByb3Blcmx5XCIgKTtcblx0fVxuXG5cdHJldHVybiB0aGlzO1xufTtcblxuLyo7XG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRTdHJlYW0gZGF0YSB0byBsaXN0ZW5lcnMuXG5cdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5PbGl2YW50LnByb3RvdHlwZS5yZXBvcnQgPSBmdW5jdGlvbiByZXBvcnQoICl7XG5cdGlmKCB0aGlzLmRlcHRoID09IDIgKXtcblx0XHR0aGlzLnJlbWluZCggXCJyZXBvcnRpbmcgaXMgZGlzYWJsZWQgZm9yIGRlcHRoIDJcIiApLnByb21wdCggKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c25hcGQuYmluZCggdGhpcyApXG5cdFx0KCBmdW5jdGlvbiBkZWxheSggKXtcblx0XHRcdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdFx0XHRwcm9jZXNzLmVtaXQoIHRoaXMubmFtZSwgdGhpcyApO1xuXG5cdFx0XHR9ZWxzZSBpZiggYXNlYS5jbGllbnQgKXtcblx0XHRcdFx0bGV0IGV2ZW50ID0gbmV3IEV2ZW50KCB0aGlzLm5hbWUgKTtcblx0XHRcdFx0ZXZlbnQuZGF0YSA9IHRoaXM7XG5cblx0XHRcdFx0ZG9jdW1lbnQuZGlzcGF0Y2hFdmVudCggZXZlbnQgKTtcblx0XHRcdH1cblx0XHR9LCAxMDAwICk7XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKjtcblx0QGludGVybmFsLW1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdENydXNoIHRoZSBwYXJhbWV0ZXIgZXh0cmFjdGluZyBzdHJpbmcgaW5mb3JtYXRpb24uXG5cblx0XHRTcGVjaWFsIHN1cHBvcnQgZm9yIGdsdWNvc2UgY29hdGVkIHBhcmFtZXRlcnMuXG5cdEBlbmQtaW50ZXJuYWwtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5jb25zdCBjcnVzaCA9IGZ1bmN0aW9uIGNydXNoKCBwYXJhbWV0ZXIsIG9wdGlvbiApe1xuXHRvcHRpb24gPSBvcHRpb24gfHwgdGhpcy5pbnNwZWN0IHx8IHsgfTtcblxuXHRsZXQgZGVwdGggPSBvcHRpb24uZGVwdGggfHwgMTtcblx0bGV0IGxlbmd0aCA9IG9wdGlvbi5sZW5ndGggfHwgMjAwO1xuXHRsZXQgc3BhY2UgPSAvXFxzezIsfS9nO1xuXG5cdGlmKCBhc2VhLnNlcnZlciAmJiBwcm90eXBlKCBwYXJhbWV0ZXIsIE9CSkVDVCApICYmIHBhcmFtZXRlci5DT0FURUQgPT09IENPQVRFRCApe1xuXHRcdGlmKCBwYXJhbWV0ZXIuc2VsZiApe1xuXHRcdFx0dGhpcy5zZXQoIENPTlRFWFQsIHBhcmFtZXRlci5zZWxmICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHV0aWwuaW5zcGVjdCggcGFyYW1ldGVyLCB7IFwiZGVwdGhcIjogZGVwdGggfSApXG5cdFx0XHQucmVwbGFjZSggc3BhY2UsIFwiIFwiIClcblx0XHRcdC5zdWJzdHJpbmcoIDAsIGxlbmd0aCApICsgXCIuLi5cIjtcblxuXHR9ZWxzZSBpZiggcGFyYW1ldGVyICYmIGNsYXpvZiggcGFyYW1ldGVyLCBFcnJvciApICYmIHBhcmFtZXRlci5zdGFjayApe1xuXHRcdHRoaXMuZXJyb3IgPSBwYXJhbWV0ZXI7XG5cblx0XHR0aGlzLmdldFRyYWNlKCApO1xuXG5cdFx0cmV0dXJuIHBhcmFtZXRlci5zdGFjay50b1N0cmluZyggKTtcblxuXHR9ZWxzZSBpZiggY2xhem9mKCBwYXJhbWV0ZXIsIE9saXZhbnQgKSApe1xuXHRcdHJldHVybiBwYXJhbWV0ZXIubWVzc2FnZTtcblxuXHR9ZWxzZSBpZiggcHJvdHlwZSggcGFyYW1ldGVyLCBGVU5DVElPTiApICl7XG5cdFx0cmV0dXJuIHBhcmFtZXRlci50b1N0cmluZyggKVxuXHRcdFx0LnJlcGxhY2UoIHNwYWNlLCBcIiBcIiApXG5cdFx0XHQuc3Vic3RyaW5nKCAwLCBsZW5ndGggKSArIFwiLi4uXCI7XG5cblx0fWVsc2UgaWYoIHByb3R5cGUoIHBhcmFtZXRlciwgU1RSSU5HICkgfHxcblx0XHRwcm90eXBlKCBwYXJhbWV0ZXIsIE5VTUJFUiApIHx8XG5cdFx0cHJvdHlwZSggcGFyYW1ldGVyLCBCT09MRUFOICkgKVxuXHR7XG5cdFx0cmV0dXJuIHBhcmFtZXRlci50b1N0cmluZyggKTtcblxuXHR9ZWxzZSBpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRyZXR1cm4gdXRpbC5pbnNwZWN0KCBwYXJhbWV0ZXIsIHsgXCJkZXB0aFwiOiBkZXB0aCB9IClcblx0XHRcdC5yZXBsYWNlKCBzcGFjZSwgXCIgXCIgKVxuXHRcdFx0LnN1YnN0cmluZyggMCwgbGVuZ3RoICkgKyBcIi4uLlwiO1xuXG5cdH1lbHNlIGlmKCBhc2VhLmNsaWVudCApe1xuXHRcdHJldHVybiBwYXJhbWV0ZXIudG9TdHJpbmcoICk7XG5cblx0fWVsc2V7XG5cdFx0cmV0dXJuIHBhcmFtZXRlci50b1N0cmluZyggKTtcblx0fVxufTtcblxuLyo7XG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRBcHBlbmQgbWVzc2FnZXMgdG8gdGhlIGN1cnJlbnQgbWVzc2FnZS5cblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLnJlbWluZCA9IGZ1bmN0aW9uIHJlbWluZCggKXtcblx0bGV0IHBhcmFtZXRlciA9IHJhemUoIGFyZ3VtZW50cyApO1xuXG5cdGlmKCBhcmlkKCBwYXJhbWV0ZXIgKSApe1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0bGV0IHBhcnNlID0gY3J1c2guYmluZCggdGhpcyApO1xuXG5cdHRoaXMubWVzc2FnZSA9IFUyMDBiKCBwYXJhbWV0ZXJcblx0XHQubWFwKCBmdW5jdGlvbiBvbkVhY2hQYXJhbWV0ZXIoIHBhcmFtZXRlciApe1xuXHRcdFx0aWYoIGRvdWJ0KCBwYXJhbWV0ZXIsIEFTX0FSUkFZICkgKXtcblx0XHRcdFx0cGFyYW1ldGVyID0gcmF6ZSggcGFyYW1ldGVyIClcblx0XHRcdFx0XHQubWFwKCAoIHBhcmFtZXRlciApID0+IHsgcmV0dXJuIHBhcnNlKCBwYXJhbWV0ZXIgKSB9ICk7XG5cblx0XHRcdFx0cmV0dXJuIFUyMDBiKCBwYXJhbWV0ZXJcblx0XHRcdFx0XHQuZmlsdGVyKCAoIG1lc3NhZ2UgKSA9PiB7IHJldHVybiB0cnVseSggbWVzc2FnZSApOyB9ICkgKVxuXHRcdFx0XHRcdC5qb2luKCBcIiwgXCIgKTtcblxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHJldHVybiBwYXJzZSggcGFyYW1ldGVyICk7XG5cdFx0XHR9XG5cdFx0fSApXG5cdFx0LnJldmVyc2UoIClcblx0XHQuY29uY2F0KCBbIHRoaXMubWVzc2FnZSBdIClcblx0XHQuZmlsdGVyKCAoIG1lc3NhZ2UgKSA9PiB7IHJldHVybiB0cnVseSggbWVzc2FnZSApOyB9IClcblx0XHQucmV2ZXJzZSggKSApXG5cdFx0LmpvaW4oIFwiLCBcIiApO1xuXG5cdHRoaXMucmVwb3J0KCApO1xuXG5cdHJldHVybiB0aGlzO1xufTtcblxuLyo7XG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRTaWxlbmNlIHRoZSBsb2dnaW5nIGNhcGFiaWxpdGllcy5cblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLnNpbGVuY2UgPSBmdW5jdGlvbiBzaWxlbmNlKCApe1xuXHR0aGlzLnNpbGVudCA9IHRydWU7XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdERlYWN0aXZhdGUgc2lsZW5jZS5cblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLnNob3V0ID0gZnVuY3Rpb24gc2hvdXQoICl7XG5cdHRoaXMuc2lsZW50ID0gZmFsc2U7XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdExvZyB0aGUgZGF0YS5cblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLnByb21wdCA9IGZ1bmN0aW9uIHByb21wdCggKXtcblx0dGhpcy5yZW1pbmQuYXBwbHkoIHRoaXMsIHJhemUoIGFyZ3VtZW50cyApICk7XG5cblx0c25hcGQuYmluZCggdGhpcyApXG5cdFx0KCBmdW5jdGlvbiBkZWxheSggKXtcblx0XHRcdGlmKCB0aGlzLmRlcHRoID09PSAyICl7XG5cdFx0XHRcdHRoaXMubG9nKCB0aGlzLmdldE1lc3NhZ2UoICkgKTtcblxuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblxuXHRcdFx0aWYoIGRvdWJ0KCB0aGlzLnN0YWNrLCBBUlJBWSApICYmIGZpbGxlZCggdGhpcy5zdGFjayApICl7XG5cdFx0XHRcdHRoaXMubG9nKCB0aGlzLmdldE1lc3NhZ2UoICkgKTtcblxuXHRcdFx0fWVsc2UgaWYoIHRoaXMuZGVwdGggPiA1ICl7XG5cdFx0XHRcdHRoaXMuZ2V0VHJhY2UoICggZXJyb3IsIHN0YWNrICkgPT4ge1xuXHRcdFx0XHRcdGlmKCBjbGF6b2YoIGVycm9yLCBFcnJvciApICl7XG5cdFx0XHRcdFx0XHR0aGlzLnJlbWluZCggYGVycm9yIGdldHRpbmcgc3RhY2sgdHJhY2UsICR7IGVycm9yIH1gICk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYoIHRydXUoIHN0YWNrICkgKXtcblx0XHRcdFx0XHRcdHRoaXMuc3RhY2sgPSBzdGFjaztcblxuXHRcdFx0XHRcdFx0dGhpcy5sb2coIHRoaXMuZ2V0TWVzc2FnZSggKSApO1xuXG5cdFx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0XHR0aGlzLmxvZyggdGhpcy5nZXRNZXNzYWdlKCApICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9ICk7XG5cblx0XHRcdH1lbHNle1xuXHRcdFx0XHR0aGlzLmxvZyggdGhpcy5nZXRNZXNzYWdlKCApICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdHJldHVybiB0aGlzO1xufTtcblxuLyo7XG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRTZXQgdGhlIHJlZGlyZWN0aW9uIGNvbmZpZ3VyYXRpb24uXG5cblx0XHRUaGlzIHdpbGwgdHJpZ2dlciByZWRpcmVjdCByZXNwb25zZSB3aGVuIHNlbmQgaXMgY2FsbGVkLlxuXG5cdFx0RGVmYXVsdCBvZiBERUZBVUxUX1JFRElSRUNUX1BBVEggd2lsbCBiZSB1c2VkIGlmIHBhdGggaXMgbm90IGdpdmVuLlxuXHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuT2xpdmFudC5wcm90b3R5cGUucmVkaXJlY3QgPSBmdW5jdGlvbiByZWRpcmVjdCggcGF0aCApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcInBhdGg6cmVxdWlyZWRcIjogXCJzdHJpbmdcIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0dGhpcy5zdGF0ZSA9IFJFRElSRUNUO1xuXHR0aGlzLnBhdGggPSBwYXRoO1xuXG5cdGlmKCBmYWx6eSggdGhpcy5wYXRoICkgJiZcblx0XHR0cnVseSggREVGQVVMVF9SRURJUkVDVF9QQVRIICkgJiZcblx0XHRwcm90eXBlKCBERUZBVUxUX1JFRElSRUNUX1BBVEgsIFNUUklORyApIClcblx0e1xuXHRcdHRoaXMucGF0aCA9IERFRkFVTFRfUkVESVJFQ1RfUEFUSDtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0aWYoICFwcm90eXBlKCB0aGlzLnBhdGgsIFNUUklORyApICl7XG5cdFx0dGhpcy5yZXNldCggSXNzdWUsIHRydWUgKVxuXHRcdFx0LnNpbGVuY2UoIClcblx0XHRcdC5wcm9tcHQoIFwiaW52YWxpZCByZWRpcmVjdCBwYXRoXCIgKTtcblxuXHR9ZWxzZSBpZiggZmFsenkoIHRoaXMucGF0aCApICl7XG5cdFx0dGhpcy5yZXNldCggSXNzdWUsIHRydWUgKVxuXHRcdFx0LnNpbGVuY2UoIClcblx0XHRcdC5wcm9tcHQoIFwiZW1wdHkgcmVkaXJlY3QgcGF0aFwiICk7XG5cdH1cblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbk9saXZhbnQucHJvdG90eXBlLmZsdXNoU3RhdGUgPSBmdW5jdGlvbiBmbHVzaFN0YXRlKCApe1xuXHR0aGlzLnN0YXRlID0gXCJcIjtcblx0dGhpcy5wYXRoID0gXCJcIjtcblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qO1xuXHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0UGFzcyB0aGUgaW5zdGFuY2UgdG8gdGhlIGNhbGxiYWNrIGZpcnN0IHBhcmFtZXRlci5cblxuXHRcdFRoaXMgZm9sbG93cyB0aGUgc3RhbmRhcmQgZXJyb3ItcmVzdWx0LW9wdGlvbiBjb252ZW50aW9uLlxuXG5cdFx0SGFzIHNwZWNpYWwgc3VwcG9ydCBmb3IgZ2x1Y29zZSBjb2F0ZWQgb3B0aW9uLlxuXHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuT2xpdmFudC5wcm90b3R5cGUucGFzcyA9IGZ1bmN0aW9uIHBhc3MoIGNhbGxiYWNrLCByZXN1bHQsIG9wdGlvbiApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcImNhbGxiYWNrOnJlcXVpcmVkXCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0aWYoICFwcm90eXBlKCBjYWxsYmFjaywgRlVOQ1RJT04gKSApe1xuXHRcdHRoaXMucmVzZXQoIEJ1ZywgdHJ1ZSApXG5cdFx0XHQucHJvbXB0KCBcImludmFsaWQgY2FsbGJhY2tcIiApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRpZiggdHJ1dSggb3B0aW9uICkgJiYgdHJ1dSggb3B0aW9uLnNlbGYgKSAmJiBvcHRpb24uQ09BVEVEID09PSBDT0FURUQgKXtcblx0XHR0aGlzLnNldCggQ09OVEVYVCwgb3B0aW9uLnNlbGYgKTtcblx0fVxuXG5cdGlmKCB0aGlzLmNvbnRleHQgKXtcblx0XHRjYWxsYmFjayA9IGNhbGxlZC5iaW5kKCB0aGlzLmNvbnRleHQgKSggY2FsbGJhY2sgKTtcblxuXHR9ZWxzZXtcblx0XHRjYWxsYmFjayA9IGNhbGxlZCggY2FsbGJhY2sgKTtcblx0fVxuXG5cdGNhbGxiYWNrKCB0aGlzLCByZXN1bHQsIG9wdGlvbiApO1xuXG5cdHJldHVybiB0aGlzO1xufTtcblxuaGFyZGVuKCBcImNyZWF0ZVwiLCBmdW5jdGlvbiBjcmVhdGUoIG5hbWUsIG9wdGlvbiApe1xuXHRsZXQgTG9nRW5naW5lID0gZGlhdG9tKCBuYW1lICk7XG5cblx0aGVyZWRpdG8oIExvZ0VuZ2luZSwgT2xpdmFudCApO1xuXG5cdExvZ0VuZ2luZS5wcm90b3R5cGUubmFtZSA9IG9wdGlvbi5uYW1lO1xuXHRMb2dFbmdpbmUucHJvdG90eXBlLnN0YXR1cyA9IG9wdGlvbi5zdGF0dXM7XG5cdExvZ0VuZ2luZS5wcm90b3R5cGUuY29kZSA9IG9wdGlvbi5jb2RlO1xuXHRMb2dFbmdpbmUucHJvdG90eXBlLnNpbGVudCA9IG9wdGlvbi5zaWxlbnQ7XG5cdExvZ0VuZ2luZS5wcm90b3R5cGUuZGVwdGggPSBvcHRpb24uZGVwdGg7XG5cdExvZ0VuZ2luZS5wcm90b3R5cGUuY29sb3IgPSBvcHRpb24uY29sb3I7XG5cdExvZ0VuZ2luZS5wcm90b3R5cGUuaW5zcGVjdCA9IG9wdGlvbi5pbnNwZWN0O1xuXHRMb2dFbmdpbmUucHJvdG90eXBlLmluaXRpYWxpemUgPSBvcHRpb24uaW5pdGlhbGl6ZSB8fFxuXHRcdGZ1bmN0aW9uIGluaXRpYWxpemUoICl7XG5cdFx0XHR0aGlzLm5hbWUgPSBvcHRpb24ubmFtZTtcblxuXHRcdFx0dGhpcy5zdGF0dXMgPSBvcHRpb24uc3RhdHVzO1xuXG5cdFx0XHR0aGlzLmNvZGUgPSBvcHRpb24uY29kZTtcblxuXHRcdFx0dGhpcy5zaWxlbnQgPSBvcHRpb24uc2lsZW50O1xuXG5cdFx0XHR0aGlzLmRlcHRoID0gb3B0aW9uLmRlcHRoO1xuXHRcdH07XG5cblx0c3ltYmlvdGUoIExvZ0VuZ2luZSApO1xuXG5cdGhhcmRlbiggTG9nRW5naW5lLm5hbWUsIExvZ0VuZ2luZSApO1xufSwgT2xpdmFudCApO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9saXZhbnQ7XG4iXX0=
