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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9saXZhbnQuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhcmlkIiwicmVxdWlyZSIsImFzZWEiLCJidWRnZSIsImNhbGxlZCIsImNsYXpvZiIsImRpYXRvbSIsImRvdWJ0IiwiRXRoZXJuaXR5IiwiZmFsemUiLCJmYWx6eSIsImZpbGxlZCIsImdsdWNvc2UiLCJoYXJkZW4iLCJoZXJlZGl0byIsImtlaW4iLCJtZWVrIiwib3V0cmUiLCJwbG91Z2giLCJwcm90eXBlIiwicmF6ZSIsInNuYXBkIiwic3ltYmlvdGUiLCJ0cnVseSIsInRydXUiLCJVMjAwYiIsInRyYWNlIiwid2luZG93IiwiREVGQVVMVF9SRURJUkVDVF9QQVRIIiwiT2xpdmFudCIsIkRFRkFVTFRfSU5TUEVDVF9PUFRJT04iLCJERUZBVUxUX0xPR19FTkdJTkUiLCJjbGllbnQiLCJjb25zb2xlIiwiZGVidWciLCJsb2ciLCJwcm90b3R5cGUiLCJpbml0aWFsaXplIiwib3B0aW9uIiwiZHVyYXRpb24iLCJEYXRlIiwibm93IiwiYXJndW1lbnRzIiwiT0JKRUNUIiwiQVJHVU1FTlRTIiwiRXJyb3IiLCJDT0FURUQiLCJsb2FkIiwicGFyYW1ldGVyIiwibGVuZ3RoIiwiZXJyb3IiLCJyZW1pbmQiLCJhcHBseSIsIm1lc3NhZ2UiLCJjb25jYXQiLCJTVFJJTkciLCJjb25zdHJ1Y3RvciIsIkZVTkNUSU9OIiwibmFtZSIsImJpbmQiLCJFQ0hPIiwic3RhdHVzIiwiY29kZSIsIkVDSE9fQ09ERSIsImNvbnRleHQiLCJzZWxmIiwic2lsZW50IiwiQk9PTEVBTiIsImRlcHRoIiwiTlVNQkVSIiwic2VydmVyIiwiY29sb3IiLCJjaGFsayIsIndoaXRlIiwic3RhdGUiLCJzdGFjayIsImluc3BlY3QiLCJyZWRzZWEiLCJJc3N1ZSIsImJsYWNrc2VhIiwiRmF0YWwiLCJyZXNldCIsInJlbmV3IiwibG9nRW5naW5lIiwiZGF0YSIsInNpbGVuY2UiLCJwcm9tcHQiLCJ0b1N0cmluZyIsImpvaW4iLCJ2YWx1ZU9mIiwiZ2V0VGltZXN0YW1wIiwidGltZXN0YW1wIiwicHJpbnRUaW1lIiwiZGltIiwiY29sb3JNZXNzYWdlIiwicmVzb2x2ZU1lc3NhZ2UiLCJmaWx0ZXIiLCJyZXNvbHZlVHJhY2UiLCJBUlJBWSIsIm1hcCIsImZyYW1lIiwiZnVuY3Rpb25OYW1lIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwidHJpbSIsInJlZCIsImdldE1lc3NhZ2UiLCJnZXRUcmFjZSIsImNhbGxiYWNrIiwiZnJvbUVycm9yIiwidGhlbiIsImZyYW1lTGlzdCIsImNhdGNoIiwiZ2V0IiwicGFyc2UiLCJzZXQiLCJwcm9wZXJ0eSIsInZhbHVlIiwiTE9HIiwiU0lMRU5UIiwiQ09OVEVYVCIsInNlbmQiLCJyYXciLCJwcm9jZWR1cmUiLCJSRURJUkVDVCIsInBhdGgiLCJodHRwIiwiU2VydmVyUmVzcG9uc2UiLCJzZWd3YXkiLCJmbHVzaFN0YXRlIiwicmVwb3J0IiwiZGVsYXkiLCJwcm9jZXNzIiwiZW1pdCIsImV2ZW50IiwiRXZlbnQiLCJkb2N1bWVudCIsImRpc3BhdGNoRXZlbnQiLCJjcnVzaCIsInNwYWNlIiwidXRpbCIsInJlcGxhY2UiLCJzdWJzdHJpbmciLCJvbkVhY2hQYXJhbWV0ZXIiLCJBU19BUlJBWSIsInJldmVyc2UiLCJzaG91dCIsInJlZGlyZWN0IiwicGFzcyIsInJlc3VsdCIsIkJ1ZyIsImNyZWF0ZSIsIkxvZ0VuZ2luZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNGQSxJQUFNQSxPQUFPQyxRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1DLE9BQU9ELFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTUUsUUFBUUYsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNRyxTQUFTSCxRQUFTLFFBQVQsQ0FBZjtB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SCxTQUFWLENBQW9CZ0MsS0FBcEIsR0FBNEI5QixPQUFPOEIsS0FBbkM7QUFDQXFGLFdBQVVySCxTQUFWLENBQW9CbUMsS0FBcEIsR0FBNEJqQyxPQUFPaUMsS0FBbkM7QUFDQWtGLFdBQVVySCxTQUFWLENBQW9Cd0MsT0FBcEIsR0FBOEJ0QyxPQUFPc0MsT0FBckM7QUFDQTZFLFdBQVVySCxTQUFWLENBQW9CQyxVQUFwQixHQUFpQ0MsT0FBT0QsVUFBUCxJQUNoQyxTQUFTQSxVQUFULEdBQXNCO0FBQ3JCLE9BQUtxQixJQUFMLEdBQVlwQixPQUFPb0IsSUFBbkI7O0FBRUEsT0FBS0csTUFBTCxHQUFjdkIsT0FBT3VCLE1BQXJCOztBQUVBLE9BQUtDLElBQUwsR0FBWXhCLE9BQU93QixJQUFuQjs7QUFFQSxPQUFLSSxNQUFMLEdBQWM1QixPQUFPNEIsTUFBckI7O0FBRUEsT0FBS0UsS0FBTCxHQUFhOUIsT0FBTzhCLEtBQXBCO0FBQ0EsRUFYRjs7QUFhQTlDLFVBQVVtSSxTQUFWOztBQUVBNUksUUFBUTRJLFVBQVUvRixJQUFsQixFQUF3QitGLFNBQXhCO0FBQ0EsQ0E1QkQsRUE0Qkc1SCxPQTVCSDs7QUE4QkE2SCxPQUFPQyxPQUFQLEdBQWlCOUgsT0FBakIiLCJmaWxlIjoib2xpdmFudC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJvbGl2YW50XCIsXG5cdFx0XHRcInBhdGhcIjogXCJvbGl2YW50L29saXZhbnQuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcIm9saXZhbnQuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwib2xpdmFudFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL29saXZhbnQuZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJvbGl2YW50LXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWUsXG5cdFx0XHRcImNsYXNzXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0RWNobyB0aGUgZGVzdHJ1Y3Rpb24gY2F1c2VkIGJ5IHlvdXIgY29kZS5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXJpZFwiOiBcImFyaWRcIixcblx0XHRcdFwiYXNlYVwiOiBcImFzZWFcIixcblx0XHRcdFwiYnVkZ2VcIjogXCJidWRnZVwiLFxuXHRcdFx0XCJibGFja3NlYVwiOiBcImJsYWNrc2VhXCIsXG5cdFx0XHRcImNhbGxlZFwiOiBcImNhbGxlZFwiLFxuXHRcdFx0XCJjaGFsa1wiOiBcImNoYWxrXCIsXG5cdFx0XHRcImNsYXpvZlwiOiBcImNsYXpvZlwiLFxuXHRcdFx0XCJkZXhpc3RcIjogXCJkZXhpc3RcIixcblx0XHRcdFwiZGlhdG9tXCI6IFwiZGlhdG9tXCIsXG5cdFx0XHRcIkV0aGVybml0eVwiOiBcImV0aGVybml0eVwiLFxuXHRcdFx0XCJFdmVudEVtaXR0ZXJcIjogXCJldmVudHNcIixcblx0XHRcdFwiZmFsemVcIjogXCJmYWx6ZVwiLFxuXHRcdFx0XCJmYWx6eVwiOiBcImZhbHp5XCIsXG5cdFx0XHRcImdsdWNvc2VcIjogXCJnbHVjb3NlXCIsXG5cdFx0XHRcImhhcmRlblwiOiBcImhhcmRlblwiLFxuXHRcdFx0XCJoZXJlZGl0b1wiOiBcImhlcmVkaXRvXCIsXG5cdFx0XHRcImtlaW5cIjogXCJrZWluXCIsXG5cdFx0XHRcImh0dHBcIjogXCJodHRwXCIsXG5cdFx0XHRcIm1lZWtcIjogXCJtZWVrXCJcblx0XHRcdFwib3V0cmVcIjogXCJvdXRyZVwiLFxuXHRcdFx0XCJwbG91Z2hcIjogXCJwbG91Z2hcIixcblx0XHRcdFwicHJvdHlwZVwiOiBcInByb3R5cGVcIixcblx0XHRcdFwicmF6ZVwiOiBcInJhemVcIixcblx0XHRcdFwicmVkc2VhXCI6IFwicmVkc2VhXCIsXG5cdFx0XHRcInNuYXBkXCI6IFwic25hcGRcIixcblx0XHRcdFwic2Vnd2F5XCI6IFwic2Vnd2F5XCIsXG5cdFx0XHRcInN5bWJpb3RlXCI6IFwic3ltYmlvdGVcIixcblx0XHRcdFwidHJhY2VcIjogWyBcInN0YWNrdHJhY2UtanNcIiwgXCJzdGFjay10cmFjZVwiIF0sXG5cdFx0XHRcInRydWx5XCI6IFwidHJ1bHlcIixcblx0XHRcdFwidHJ1dVwiOiBcInRydXVcIixcblx0XHRcdFwiVTIwMGJcIjogXCJ1MjAwYlwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFyaWQgPSByZXF1aXJlKCBcImFyaWRcIiApO1xuY29uc3QgYXNlYSA9IHJlcXVpcmUoIFwiYXNlYVwiICk7XG5jb25zdCBidWRnZSA9IHJlcXVpcmUoIFwiYnVkZ2VcIiApO1xuY29uc3QgY2FsbGVkID0gcmVxdWlyZSggXCJjYWxsZWRcIiApO1xuY29uc3QgY2xhem9mID0gcmVxdWlyZSggXCJjbGF6b2ZcIiApO1xuY29uc3QgZGlhdG9tID0gcmVxdWlyZSggXCJkaWF0b21cIiApO1xuY29uc3QgZG91YnQgPSByZXF1aXJlKCBcImRvdWJ0XCIgKTtcbmNvbnN0IEV0aGVybml0eSA9IHJlcXVpcmUoIFwiZXRoZXJuaXR5XCIgKTtcbmNvbnN0IGZhbHplID0gcmVxdWlyZSggXCJmYWx6ZVwiICk7XG5jb25zdCBmYWx6eSA9IHJlcXVpcmUoIFwiZmFsenlcIiApO1xuY29uc3QgZmlsbGVkID0gcmVxdWlyZSggXCJmaWxsZWRcIiApO1xuY29uc3QgZ2x1Y29zZSA9IHJlcXVpcmUoIFwiZ2x1Y29zZVwiICk7XG5jb25zdCBoYXJkZW4gPSByZXF1aXJlKCBcImhhcmRlblwiICk7XG5jb25zdCBoZXJlZGl0byA9IHJlcXVpcmUoIFwiaGVyZWRpdG9cIiApO1xuY29uc3Qga2VpbiA9IHJlcXVpcmUoIFwia2VpblwiICk7XG5jb25zdCBtZWVrID0gcmVxdWlyZSggXCJtZWVrXCIgKTtcbmNvbnN0IG91dHJlID0gcmVxdWlyZSggXCJvdXRyZVwiICk7XG5jb25zdCBwbG91Z2ggPSByZXF1aXJlKCBcInBsb3VnaFwiICk7XG5jb25zdCBwcm90eXBlID0gcmVxdWlyZSggXCJwcm90eXBlXCIgKTtcbmNvbnN0IHJhemUgPSByZXF1aXJlKCBcInJhemVcIiApO1xuY29uc3Qgc25hcGQgPSByZXF1aXJlKCBcInNuYXBkXCIgKTtcbmNvbnN0IHN5bWJpb3RlID0gcmVxdWlyZSggXCJzeW1iaW90ZVwiICk7XG5jb25zdCB0cnVseSA9IHJlcXVpcmUoIFwidHJ1bHlcIiApO1xuY29uc3QgdHJ1dSA9IHJlcXVpcmUoIFwidHJ1dVwiICk7XG5jb25zdCBVMjAwYiA9IHJlcXVpcmUoIFwidTIwMGJcIiApO1xuXG4vLzogQGNsaWVudDpcbmNvbnN0IHRyYWNlID0gcmVxdWlyZSggXCJzdGFja3RyYWNlLWpzXCIgKTtcbmhhcmRlbiggXCJERUZBVUxUX1JFRElSRUNUX1BBVEhcIiwgd2luZG93LkRFRkFVTFRfUkVESVJFQ1RfUEFUSCB8fCBcIi92aWV3L3N0YXR1cy9wYWdlXCIgKTtcbi8vOiBAZW5kLWNsaWVudFxuXG5cblxuY29uc3QgT2xpdmFudCA9IGRpYXRvbSggXCJPbGl2YW50XCIgKTtcblxuY29uc3QgREVGQVVMVF9JTlNQRUNUX09QVElPTiA9IHsgXCJkZXB0aFwiOiAxLCBcImxlbmd0aFwiOiAyMDAgfTtcbmNvbnN0IERFRkFVTFRfTE9HX0VOR0lORSA9IGFzZWEuY2xpZW50PyBjb25zb2xlLmRlYnVnIDogY29uc29sZS5sb2c7XG5cbi8qO1xuXHRAbm90ZTpcblx0XHRUaGlzIGlzIHRoZSBkZWZhdWx0IG5hbWUvc3RhdHVzIGFuZCBjb2RlIG9mIHRoZSBvbGl2YW50LlxuXHRAZW5kLW5vdGVcbiovXG5oYXJkZW4oIFwiRUNIT1wiLCBcImVjaG9cIiApO1xuaGFyZGVuKCBcIkVDSE9fQ09ERVwiLCAyMDAgKTtcblxuaGFyZGVuKCBcIlJFRElSRUNUXCIsIFwicmVkaXJlY3RcIiApO1xuaGFyZGVuKCBcIkNPTlRFWFRcIiwgXCJjb250ZXh0XCIgKTtcbmhhcmRlbiggXCJMT0dcIiwgXCJsb2dcIiApO1xuaGFyZGVuKCBcIlNJTEVOVFwiLCBcInNpbGVudFwiICk7XG5cbi8qO1xuXHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0T3B0aW9uIHNob3VsZCBub3QgYmUgZ2x1Y29zZSBjb2F0ZWQuXG5cdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5PbGl2YW50LnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gaW5pdGlhbGl6ZSggb3B0aW9uICl7XG5cdHRoaXMuZHVyYXRpb24gPSBEYXRlLm5vdyggKTtcblxuXHRpZiggcHJvdHlwZSggYXJndW1lbnRzWyAwIF0sIE9CSkVDVCApICYmXG5cdFx0IWRvdWJ0KCBhcmd1bWVudHNbIDAgXSwgQVJHVU1FTlRTICkgJiZcblx0XHQhKCBjbGF6b2YoIGFyZ3VtZW50c1sgMCBdLCBFcnJvciApICkgJiZcblx0XHRvcHRpb24uQ09BVEVEICE9PSBDT0FURUQgKVxuXHR7XG5cdFx0dGhpcy5sb2FkKCBvcHRpb24gKTtcblxuXHR9ZWxzZXtcblx0XHR0aGlzLmxvYWQoICk7XG5cdH1cblxuXHRsZXQgcGFyYW1ldGVyID0gYXJndW1lbnRzWyAwIF07XG5cblx0aWYoIGFyZ3VtZW50cy5sZW5ndGggPT0gMCApe1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH1lbHNlIGlmKCBjbGF6b2YoIHBhcmFtZXRlciwgRXJyb3IgKSApe1xuXHRcdGxldCBlcnJvciA9IHBhcmFtZXRlcjtcblxuXHRcdHRoaXMucmVtaW5kLmFwcGx5KCB0aGlzLCBbIGVycm9yLm1lc3NhZ2UsIGVycm9yIF0uY29uY2F0KCBidWRnZSggYXJndW1lbnRzICkgKSApO1xuXG5cdH1lbHNlIGlmKCBjbGF6b2YoIHBhcmFtZXRlciwgT2xpdmFudCApICl7XG5cdFx0dGhpcy5sb2FkKCBwYXJhbWV0ZXIgKTtcblxuXHR9ZWxzZSBpZiggZG91YnQoIHBhcmFtZXRlciwgQVJHVU1FTlRTICkgKXtcblx0XHR0aGlzLnJlbWluZC5hcHBseSggdGhpcywgcGxvdWdoKCBwYXJhbWV0ZXIgKSApO1xuXG5cdH1lbHNlIGlmKCBwcm90eXBlKCBwYXJhbWV0ZXIsIFNUUklORyApICl7XG5cdFx0dGhpcy5yZW1pbmQuYXBwbHkoIHRoaXMsIHJhemUoIGFyZ3VtZW50cyApICk7XG5cblx0fWVsc2UgaWYoIHByb3R5cGUoIHBhcmFtZXRlciwgT0JKRUNUICkgJiZcblx0XHRwYXJhbWV0ZXIuY29uc3RydWN0b3IgJiZcblx0XHRwcm90eXBlKCBwYXJhbWV0ZXIuY29uc3RydWN0b3IsIEZVTkNUSU9OICkgJiZcblx0XHRwYXJhbWV0ZXIuY29uc3RydWN0b3IubmFtZSAhPSBcIkZ1bmN0aW9uXCIgJiZcblx0XHRjbGF6b2YoIHBhcmFtZXRlciwgcGFyYW1ldGVyLmNvbnN0cnVjdG9yICkgKVxuXHR7XG5cdFx0dGhpcy5sb2FkKCBwYXJhbWV0ZXIgKTtcblxuXHRcdHRoaXMucmVtaW5kLmFwcGx5KCB0aGlzLCByYXplKCBhcmd1bWVudHMgKSApO1xuXG5cdH1lbHNlIGlmKCBwcm90eXBlKCBwYXJhbWV0ZXIsIE9CSkVDVCApICl7XG5cdFx0dGhpcy5yZW1pbmQuYXBwbHkoIHRoaXMsIHJhemUoIGFyZ3VtZW50cyApICk7XG5cdH1cblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbk9saXZhbnQucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbiBsb2FkKCBvcHRpb24gKXtcblx0b3B0aW9uID0gZ2x1Y29zZS5iaW5kKCB0aGlzICkoIG9wdGlvbiApO1xuXG5cdHRoaXMubmFtZSA9IG9wdGlvbi5uYW1lIHx8IHRoaXMubmFtZSB8fCBFQ0hPXG5cblx0dGhpcy5zdGF0dXMgPSBvcHRpb24uc3RhdHVzIHx8IHRoaXMuc3RhdHVzIHx8IEVDSE87XG5cblx0dGhpcy5jb2RlID0gb3B0aW9uLmNvZGUgfHwgdGhpcy5jb2RlIHx8IEVDSE9fQ09ERTtcblxuXHR0aGlzLmxvZyA9IG9wdGlvbi5sb2cgfHwgdGhpcy5sb2cgfHwgREVGQVVMVF9MT0dfRU5HSU5FO1xuXG5cdGlmKCBmYWx6ZSggdGhpcy5jb250ZXh0ICkgJiYgdHJ1dSggb3B0aW9uLnNlbGYgKSApe1xuXHRcdHRoaXMuY29udGV4dCA9IG9wdGlvbi5zZWxmO1xuXHR9XG5cblx0dGhpcy5zaWxlbnQgPSBrZWluKCBvcHRpb24sIFwic2lsZW50XCIgKT8gb3B0aW9uLnNpbGVudCA6XG5cdFx0a2VpbiggdGhpcywgXCJzaWxlbnRcIiApPyB0aGlzLnNpbGVudCA6IHRydWU7XG5cblx0aWYoICFwcm90eXBlKCB0aGlzLnNpbGVudCwgQk9PTEVBTiApICl7XG5cdFx0dGhpcy5zaWxlbnQgPSB0cnVlO1xuXHR9XG5cblx0Ly86IERlcHRoIGRpY3RhdGVzIHJlZmluZWQgc2V0dGluZ3Mgb2YgdGhpcyBwcm9jZWR1cmUuXG5cdHRoaXMuZGVwdGggPSBrZWluKCBvcHRpb24sIFwiZGVwdGhcIiApPyBvcHRpb24uZGVwdGggOlxuXHRcdGtlaW4oIHRoaXMsIFwiZGVwdGhcIiApPyB0aGlzLmRlcHRoIDogMTtcblxuXHRpZiggIXByb3R5cGUoIHRoaXMuZGVwdGgsIE5VTUJFUiApICl7XG5cdFx0dGhpcy5kZXB0aCA9IDE7XG5cdH1cblxuXHQvLzogRGVwdGggaXMgb25seSBmcm9tIDEtMCBvciAxLTIzNDUtNjc4OS0wLlxuXHQvLzogRGVwdGggMiBpcyBkZWVwIHNpbGVudCBkZXB0aC5cblx0dGhpcy5kZXB0aCA9IHRoaXMuZGVwdGggJSAxMDtcblxuXHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHR0aGlzLmNvbG9yID0gb3B0aW9uLmNvbG9yIHx8IHRoaXMuY29sb3IgfHwgY2hhbGsud2hpdGU7XG5cdH1cblxuXHR0aGlzLnN0YXRlID0gXCJcIjtcblxuXHR0aGlzLnN0YWNrID0gb3B0aW9uLnN0YWNrIHx8IHRoaXMuc3RhY2sgfHwgWyBdO1xuXG5cdHRoaXMubWVzc2FnZSA9IG9wdGlvbi5tZXNzYWdlIHx8IHRoaXMubWVzc2FnZSB8fCBcIlwiO1xuXG5cdHRoaXMuaW5zcGVjdCA9IG9wdGlvbi5pbnNwZWN0IHx8IHRoaXMuaW5zcGVjdCB8fCBERUZBVUxUX0lOU1BFQ1RfT1BUSU9OO1xuXG5cdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdHJlZHNlYSggSXNzdWUgKTtcblxuXHRcdGJsYWNrc2VhKCBGYXRhbCApO1xuXHR9XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdE1vZGlmaWVzIHRoZSBsb2cgZW5naW5lIHdoaWxlIG1haW50YWluaW5nIGVudmlyb25tZW50IHByb3BlcnRpZXMuXG5cdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5PbGl2YW50LnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uIHJlc2V0KCBvcHRpb24sIHJlbmV3ICl7XG5cdGlmKCBwcm90eXBlKCBvcHRpb24sIEZVTkNUSU9OICkgJiYgY2xhem9mKCBvcHRpb24sIE9saXZhbnQgKSApe1xuXHRcdGxldCBsb2dFbmdpbmUgPSBvcHRpb247XG5cblx0XHRpZiggcHJvdHlwZSggcmVuZXcsIEJPT0xFQU4gKSAmJiByZW5ldyApe1xuXHRcdFx0bGV0IGRhdGEgPSB7XG5cdFx0XHRcdFwibWVzc2FnZVwiOiB0aGlzLm1lc3NhZ2UsXG5cdFx0XHRcdFwic3RhY2tcIjogdGhpcy5zdGFja1xuXHRcdFx0fTtcblxuXHRcdFx0cmV0dXJuIGxvZ0VuZ2luZSggZGF0YSApO1xuXG5cdFx0fWVsc2V7XG5cdFx0XHR0aGlzLmxvYWQoIGxvZ0VuZ2luZS5wcm90b3R5cGUgKTtcblx0XHR9XG5cblx0fWVsc2UgaWYoIHByb3R5cGUoIG9wdGlvbiwgT0JKRUNUICkgKXtcblx0XHR0aGlzLmxvYWQoIG9wdGlvbiApO1xuXG5cdH1lbHNlIGlmKCAhY2xhem9mKCBvcHRpb24sIElzc3VlICkgKXtcblx0XHR0aGlzLnJlc2V0KCBJc3N1ZSwgdHJ1ZSApXG5cdFx0XHQuc2lsZW5jZSggKVxuXHRcdFx0LnByb21wdCggXCJjYW5ub3QgcmVzZXQgdG8gZ2l2ZW4gb3B0aW9uXCIsIG9wdGlvbiApO1xuXG5cdH1lbHNle1xuXHRcdElzc3VlKCBcImNhbm5vdCByZXNldCBsb2dcIiwgb3B0aW9uLCB0aGlzICkuc2lsZW5jZSggKS5wcm9tcHQoICk7XG5cdH1cblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbk9saXZhbnQucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoICl7XG5cdHJldHVybiBVMjAwYiggb3V0cmUoIFsgdGhpcy5uYW1lLCB0aGlzLnN0YXR1cywgdGhpcy5tZXNzYWdlIF0gKSApLmpvaW4oIFwiLCBcIiApO1xufTtcblxuT2xpdmFudC5wcm90b3R5cGUudmFsdWVPZiA9IGZ1bmN0aW9uIHZhbHVlT2YoICl7XG5cdHJldHVybiBVMjAwYiggb3V0cmUoIFsgdGhpcy5uYW1lLCB0aGlzLnN0YXR1cywgdGhpcy5tZXNzYWdlIF0gKSApLmpvaW4oIFwiLCBcIiApO1xufTtcblxuT2xpdmFudC5wcm90b3R5cGUuZ2V0VGltZXN0YW1wID0gZnVuY3Rpb24gZ2V0VGltZXN0YW1wKCApe1xuXHRsZXQgdGltZXN0YW1wID0gRXRoZXJuaXR5KCApLnByaW50VGltZSggdHJ1ZSApO1xuXG5cdHRpbWVzdGFtcCA9IGAkeyB0aW1lc3RhbXAgfSB8ICR7ICggRGF0ZS5ub3coICkgLSB0aGlzLmR1cmF0aW9uICkgfW1zYDtcblxuXHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRyZXR1cm4gY2hhbGsuZGltKCB0aW1lc3RhbXAgKTtcblx0fVxuXG5cdHJldHVybiB0aW1lc3RhbXA7XG59O1xuXG5PbGl2YW50LnByb3RvdHlwZS5jb2xvck1lc3NhZ2UgPSBmdW5jdGlvbiBjb2xvck1lc3NhZ2UoIGNvbG9yLCBtZXNzYWdlICl7XG5cdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdGlmKCBwcm90eXBlKCBjb2xvciwgRlVOQ1RJT04gKSApe1xuXHRcdFx0cmV0dXJuIGNvbG9yKCBtZXNzYWdlICk7XG5cblx0XHR9ZWxzZSBpZiggcHJvdHlwZSggY29sb3IsIFNUUklORyApICYmIHRydWx5KCBjb2xvciApICl7XG5cdFx0XHRpZigga2VpbiggY2hhbGssIGNvbG9yICkgJiYgcHJvdHlwZSggY2hhbGtbIGNvbG9yIF0sIEZVTkNUSU9OICkgKXtcblx0XHRcdFx0cmV0dXJuIGNoYWxrWyBjb2xvciBdKCBtZXNzYWdlICk7XG5cblx0XHRcdH1lbHNle1xuXHRcdFx0XHR0aGlzLnJlbWluZCggYGludmFsaWQgbWVzc2FnZSBjb2xvciwgJHsgY29sb3IgfWAgKTtcblxuXHRcdFx0XHRyZXR1cm4gY2hhbGsud2hpdGUoIG1lc3NhZ2UgKTtcblx0XHRcdH1cblxuXHRcdH1lbHNle1xuXHRcdFx0cmV0dXJuIGNoYWxrLndoaXRlKCBtZXNzYWdlICk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIG1lc3NhZ2U7XG59O1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFRoZSBtZXNzYWdlIGlzIGRpdmlkZWQgaW50byB0aHJlZSBwYXJ0cyxcblx0XHQxLiBuYW1lc3BhY2UsXG5cdFx0Mi4gc3RhdHVzLFxuXHRcdDMuIGFjdHVhbCBtZXNzYWdlXG5cdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5PbGl2YW50LnByb3RvdHlwZS5yZXNvbHZlTWVzc2FnZSA9IGZ1bmN0aW9uIHJlc29sdmVNZXNzYWdlKCApe1xuXHRsZXQgbWVzc2FnZSA9IFUyMDBiKCBvdXRyZSggWyB0aGlzLm5hbWUsIHRoaXMuc3RhdHVzLCB0aGlzLm1lc3NhZ2UgXSApXG5cdFx0LmZpbHRlciggdHJ1bHkgKSApLmpvaW4oIFwiLCBcIiApO1xuXG5cdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdHJldHVybiB0aGlzLmNvbG9yTWVzc2FnZSggdGhpcy5jb2xvciwgbWVzc2FnZSApO1xuXHR9XG5cblx0cmV0dXJuIG1lc3NhZ2U7XG59O1xuXG5PbGl2YW50LnByb3RvdHlwZS5yZXNvbHZlVHJhY2UgPSBmdW5jdGlvbiByZXNvbHZlVHJhY2UoICl7XG5cdGxldCBzdGFjayA9IFwic3RhY2sgdHJhY2Ugbm90IGF2YWlsYWJsZVwiO1xuXG5cdGlmKCAhdGhpcy5zaWxlbnQgJiYgZG91YnQoIHRoaXMuc3RhY2ssIEFSUkFZICkgJiYgZmlsbGVkKCB0aGlzLnN0YWNrICkgKXtcblx0XHRzdGFjayA9IHRoaXMuc3RhY2s7XG5cblx0XHRzdGFjayA9IHN0YWNrLm1hcCggKCBmcmFtZSApID0+IHtcblx0XHRcdGlmKCBmcmFtZS50b1N0cmluZyggKSA9PT0gXCJbb2JqZWN0IE9iamVjdF1cIiApe1xuXHRcdFx0XHRsZXQgeyBmdW5jdGlvbk5hbWUsIGZpbGVOYW1lLCBsaW5lTnVtYmVyLCBjb2x1bW5OdW1iZXIgfSA9IGZyYW1lO1xuXG5cdFx0XHRcdHJldHVybiBgJHsgZnVuY3Rpb25OYW1lIH0gKCR7IGZpbGVOYW1lIH06JHsgbGluZU51bWJlciB9OiR7IGNvbHVtbk51bWJlciB9KWAudHJpbSggKTtcblxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHJldHVybiBmcmFtZS50b1N0cmluZyggKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cblx0XHRzdGFjayA9IFUyMDBiKCBzdGFjayApLmpvaW4oIFwiXFxuXCIgKTtcblxuXHRcdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdFx0cmV0dXJuIGNoYWxrLmRpbS5yZWQoIHN0YWNrICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHN0YWNrO1xuXHR9XG5cblx0aWYoIHRoaXMuZGVwdGggPCA1ICYmXG5cdFx0dGhpcy5zaWxlbnQgJiZcblx0XHR0cnV1KCB0aGlzLmNvbnRleHQgKSAmJlxuXHQgXHRwcm90eXBlKCB0aGlzLmNvbnRleHQuY29uc3RydWN0b3IsIEZVTkNUSU9OICkgJiZcblx0XHR0cnVseSggdGhpcy5jb250ZXh0LmNvbnN0cnVjdG9yLm5hbWUgKSApXG5cdHtcblx0XHRzdGFjayA9IGBjYWxsZWQgd2l0aCBjb250ZXh0LCAkeyB0aGlzLmNvbnRleHQuY29uc3RydWN0b3IubmFtZSB9YDtcblxuXHRcdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdFx0cmV0dXJuIGNoYWxrLmRpbSggc3RhY2sgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc3RhY2s7XG5cdH1cblxuXHRpZiggdGhpcy5zaWxlbnQgKXtcblx0XHRzdGFjayA9IFwic3RhY2sgdHJhY2UgaXMgbm90IGF2YWlsYWJsZSBvbiBzaWxlbnQgbW9kZVwiO1xuXG5cdFx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0XHRyZXR1cm4gY2hhbGsuZGltKCBzdGFjayApO1xuXHRcdH1cblxuXHRcdHJldHVybiBzdGFjaztcblx0fVxuXG5cdGlmKCB0aGlzLmRlcHRoID4gNSApe1xuXHRcdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdFx0cmV0dXJuIGNoYWxrLmRpbSggc3RhY2sgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc3RhY2s7XG5cdH1cbn07XG5cbi8qO1xuXHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0VGhlIG1lc3NhZ2UgY29uc2lzdCBvZiB0aHJlZSBsYXllciBvZiBzdHJpbmdzLFxuXHRcdFx0MS4gdGltZXN0YW1wIGluIHRydWUgdGltZSBmb3JtYXRcblx0XHRcdDIuIGFjdHVhbCByZWFkYWJsZSBtZXNzYWdlXG5cdFx0XHQzLiBtZXNzYWdlIHRyYWNlIG9yIG1lc3NhZ2UgY29udGV4dFxuXG5cdFx0VGhlc2UgaW5mb3JtYXRpb24gd2lsbCBiZSBkaXZpZGVkIHRocm91Z2ggemVyby13aWR0aCBzcGFjZSBjb252ZW50aW9uLlxuXHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuT2xpdmFudC5wcm90b3R5cGUuZ2V0TWVzc2FnZSA9IGZ1bmN0aW9uIGdldE1lc3NhZ2UoICl7XG5cdHJldHVybiBVMjAwYiggW1xuXHRcdHRoaXMuZ2V0VGltZXN0YW1wKCApLFxuXHRcdHRoaXMucmVzb2x2ZU1lc3NhZ2UoICksXG5cdFx0dGhpcy5yZXNvbHZlVHJhY2UoIClcblx0XSApLmpvaW4oIFwiXFxuXCIgKTtcbn07XG5cbi8qO1xuXHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0VGhpcyBzaG91bGQgYmUgdXNlZCBpbnRlcm5hbGx5IGFzIG11Y2ggYXMgcG9zc2libGUuXG5cdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5PbGl2YW50LnByb3RvdHlwZS5nZXRUcmFjZSA9IGZ1bmN0aW9uIGdldFRyYWNlKCBjYWxsYmFjayApe1xuXHRpZiggdGhpcy5kZXB0aCA9PSAyICl7XG5cdFx0dGhpcy5yZW1pbmQoIFwidHJhY2luZyBpcyBkaXNhYmxlZCBmb3IgZGVwdGggMlwiICkucHJvbXB0KCApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRjYWxsYmFjayA9IGNhbGxlZC5iaW5kKCB0aGlzICkoIGNhbGxiYWNrICk7XG5cblx0c25hcGQuYmluZCggdGhpcyApKCBjYWxsYmFjaywgMTAwMCApO1xuXG5cdGlmKCBhc2VhLmNsaWVudCApe1xuXHRcdGlmKCBjbGF6b2YoIHRoaXMuZXJyb3IsIEVycm9yICkgKXtcblx0XHRcdHRyYWNlLmZyb21FcnJvciggdGhpcy5lcnJvciApXG5cdFx0XHRcdC50aGVuKCAoIGZyYW1lTGlzdCApID0+IHtcblx0XHRcdFx0XHR0aGlzLnN0YWNrID0gZnJhbWVMaXN0O1xuXG5cdFx0XHRcdFx0Y2FsbGJhY2soIG51bGwsIHRoaXMuc3RhY2sgKTtcblx0XHRcdFx0fSApXG5cdFx0XHRcdC5jYXRjaCggKCBlcnJvciApID0+IHsgY2FsbGJhY2soIHRoaXMucmVtaW5kKCBlcnJvciApICk7IH0gKTtcblxuXHRcdH1lbHNlIGlmKCB0aGlzLmRlcHRoID4gNSApe1xuXHRcdFx0dHJhY2UuZ2V0KCApXG5cdFx0XHRcdC50aGVuKCAoIGZyYW1lTGlzdCApID0+IHtcblx0XHRcdFx0XHR0aGlzLnN0YWNrID0gZnJhbWVMaXN0O1xuXG5cdFx0XHRcdFx0Y2FsbGJhY2soIG51bGwsIHRoaXMuc3RhY2sgKTtcblx0XHRcdFx0fSApXG5cdFx0XHRcdC5jYXRjaCggKCBlcnJvciApID0+IHsgY2FsbGJhY2soIHRoaXMucmVtaW5kKCBlcnJvciApICk7IH0gKTtcblxuXHRcdH1lbHNle1xuXHRcdFx0Y2FsbGJhY2soICk7XG5cdFx0fVxuXG5cdH1lbHNlIGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdGlmKCBjbGF6b2YoIHRoaXMuZXJyb3IsIEVycm9yICkgKXtcblx0XHRcdHRoaXMuc3RhY2sgPSB0cmFjZS5wYXJzZSggdGhpcy5lcnJvciApO1xuXG5cdFx0XHRjYWxsYmFjayggbnVsbCwgdGhpcy5zdGFjayApO1xuXG5cdFx0fWVsc2UgaWYoIHRoaXMuZGVwdGggPiA1ICl7XG5cdFx0XHR0aGlzLnN0YWNrID0gdHJhY2UuZ2V0KCApO1xuXG5cdFx0XHRjYWxsYmFjayggbnVsbCwgdGhpcy5zdGFjayApO1xuXG5cdFx0fWVsc2V7XG5cdFx0XHRjYWxsYmFjayggKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qO1xuXHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0U2V0cyBhIHByb3BlcnR5IG9mIHRoaXMgbG9nIGVuZ2luZS5cblxuXHRcdE5vdCBhbGwgcHJvcGVydHkgY2FuIGJlIHNldCB0byBsaW1pdCB0aGlzIGZ1bmN0aW9uXG5cdFx0XHRmb3Igc2VjdXJpdHkgcHVycG9zZXMuXG5cdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5PbGl2YW50LnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQoIHByb3BlcnR5LCB2YWx1ZSApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcInByb3BlcnR5OnJlcXVpcmVkXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcdFwidmFsdWVcIjogXCIqXCJcblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGxldCBwYXJhbWV0ZXIgPSByYXplKCBhcmd1bWVudHMgKTtcblxuXHRpZiggcGFyYW1ldGVyLmxlbmd0aCA9PSAxICYmIHByb3R5cGUoIHBhcmFtZXRlclsgMCBdLCBPQkpFQ1QgKSApe1xuXHRcdGxldCBvcHRpb24gPSBwYXJhbWV0ZXJbIDAgXTtcblx0XHRmb3IoIGxldCBwcm9wZXJ0eSBpbiBvcHRpb24gKXtcblx0XHRcdHRoaXMuc2V0KCBwcm9wZXJ0eSwgb3B0aW9uWyBwcm9wZXJ0eSBdICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRpZiggIXByb3R5cGUoIHByb3BlcnR5LCBTVFJJTkcgKSApe1xuXHRcdHRoaXMucmVzZXQoIElzc3VlLCB0cnVlIClcblx0XHRcdC5zaWxlbmNlKCApXG5cdFx0XHQucHJvbXB0KCBcImludmFsaWQgcHJvcGVydHlcIiwgcHJvcGVydHkgKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0aWYoIHByb3R5cGUoIHByb3BlcnR5LCBTVFJJTkcgKSAmJlxuXHRcdHByb3BlcnR5ICE9IExPRyAgJiZcblx0XHRwcm9wZXJ0eSAhPSBTSUxFTlQgJiZcblx0XHRwcm9wZXJ0eSAhPSBDT05URVhUIClcblx0e1xuXHRcdHRoaXMucmVzZXQoIElzc3VlLCB0cnVlIClcblx0XHRcdC5zaWxlbmNlKCApXG5cdFx0XHQucHJvbXB0KCBcImludmFsaWQgcHJvcGVydHlcIiwgcHJvcGVydHkgKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0dGhpc1sgcHJvcGVydHkgXSA9IHZhbHVlO1xuXG5cdHJldHVybiB0aGlzO1xufTtcblxuLyo7XG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRTZW5kIGRhdGEgdG8gc2VydmVyIG9yIGNsaWVudC5cblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiBzZW5kKCApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcInJlc3BvbnNlXCI6IFwiaHR0cC5TZXJ2ZXJSZXNwb25zZVwiLFxuXHRcdFx0XHRcInByb2NlZHVyZVwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCB0aGlzLmRlcHRoID09IDIgKXtcblx0XHR0aGlzLnJlbWluZCggXCJzZW5kaW5nIGlzIGRpc2FibGVkIGZvciBkZXB0aCAyXCIgKS5wcm9tcHQoICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGxldCBtZXNzYWdlID0gbWVlayggdGhpcy5zdGF0dXMsIFUyMDBiKCB0aGlzLnRvU3RyaW5nKCApICkucmF3KCApICk7XG5cblx0bGV0IHByb2NlZHVyZSA9IGFyZ3VtZW50c1sgMCBdO1xuXG5cdGlmKCBhc2VhLnNlcnZlciAmJlxuXHRcdHRoaXMuc3RhdGUgPT09IFJFRElSRUNUICYmXG5cdFx0cHJvdHlwZSggdGhpcy5wYXRoLCBTVFJJTkcgKSAmJlxuXHRcdHRydWx5KCB0aGlzLnBhdGggKSAmJlxuXHRcdGNsYXpvZiggcHJvY2VkdXJlLCBodHRwLlNlcnZlclJlc3BvbnNlICkgKVxuXHR7XG5cdFx0c2Vnd2F5KCB7XG5cdFx0XHRcInJlc3BvbnNlXCI6IHByb2NlZHVyZSxcblx0XHRcdFwicGF0aFwiOiB0aGlzLnBhdGgsXG5cdFx0XHRcInN0YXR1c1wiOiB0aGlzLnN0YXR1cyxcblx0XHRcdFwiZGF0YVwiOiBtZXNzYWdlLFxuXHRcdH0gKTtcblxuXHRcdHRoaXMuZmx1c2hTdGF0ZSggKTtcblxuXHR9ZWxzZSBpZiggYXNlYS5zZXJ2ZXIgJiZcblx0XHRmYWx6eSggdGhpcy5zdGF0ZSApICYmXG5cdFx0Y2xhem9mKCBwcm9jZWR1cmUsIGh0dHAuU2VydmVyUmVzcG9uc2UgKSApXG5cdHtcblx0XHRtZXNzYWdlLnNlbmQoIHByb2NlZHVyZSwgdGhpcy5jb2RlICk7XG5cblx0fWVsc2UgaWYoIGFzZWEuY2xpZW50ICYmXG5cdFx0dGhpcy5zdGF0ZSA9PSBSRURJUkVDVCAmJlxuXHRcdHByb3R5cGUoIHRoaXMucGF0aCwgU1RSSU5HICkgJiZcblx0XHR0cnVseSggdGhpcy5wYXRoICkgKVxuXHR7XG5cdFx0c2Vnd2F5KCB7XG5cdFx0XHRcInBhdGhcIjogdGhpcy5wYXRoLFxuXHRcdFx0XCJzdGF0dXNcIjogdGhpcy5zdGF0dXMsXG5cdFx0XHRcImRhdGFcIjogbWVzc2FnZSxcblx0XHR9ICk7XG5cblx0XHR0aGlzLmZsdXNoU3RhdGUoICk7XG5cblx0fWVsc2UgaWYoIGFzZWEuY2xpZW50ICYmXG5cdFx0ZmFsenkoIHRoaXMuc3RhdGUgKSAmJlxuXHRcdHByb3R5cGUoIHByb2NlZHVyZSwgRlVOQ1RJT04gKSApXG5cdHtcblx0XHRtZXNzYWdlLnNlbmQuYmluZCggdGhpcyApKCBwcm9jZWR1cmUgKTtcblxuXHR9ZWxzZSBpZiggdHJ1bHkoIHRoaXMuc3RhdGUgKSApe1xuXHRcdHRoaXMucmVzZXQoIElzc3VlLCB0cnVlIClcblx0XHRcdC5zaWxlbmNlKCApXG5cdFx0XHQucHJvbXB0KCBgY2Fubm90IGludm9rZSBzZW5kaW5nIHN0YXRlLCAkeyB0aGlzLnN0YXRlIH0sIHByb3Blcmx5YCApXG5cdFx0XHQuc2VuZCggcHJvY2VkdXJlICk7XG5cblx0XHR0aGlzLmZsdXNoU3RhdGUoICk7XG5cblx0fWVsc2V7XG5cdFx0dGhpcy5yZXNldCggSXNzdWUsIHRydWUgKVxuXHRcdFx0LnNpbGVuY2UoIClcblx0XHRcdC5wcm9tcHQoIFwiY2Fubm90IHNlbmQgcHJvcGVybHlcIiApO1xuXHR9XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFN0cmVhbSBkYXRhIHRvIGxpc3RlbmVycy5cblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLnJlcG9ydCA9IGZ1bmN0aW9uIHJlcG9ydCggKXtcblx0aWYoIHRoaXMuZGVwdGggPT0gMiApe1xuXHRcdHRoaXMucmVtaW5kKCBcInJlcG9ydGluZyBpcyBkaXNhYmxlZCBmb3IgZGVwdGggMlwiICkucHJvbXB0KCApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzbmFwZC5iaW5kKCB0aGlzIClcblx0XHQoIGZ1bmN0aW9uIGRlbGF5KCApe1xuXHRcdFx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0XHRcdHByb2Nlc3MuZW1pdCggdGhpcy5uYW1lLCB0aGlzICk7XG5cblx0XHRcdH1lbHNlIGlmKCBhc2VhLmNsaWVudCApe1xuXHRcdFx0XHRsZXQgZXZlbnQgPSBuZXcgRXZlbnQoIHRoaXMubmFtZSApO1xuXHRcdFx0XHRldmVudC5kYXRhID0gdGhpcztcblxuXHRcdFx0XHRkb2N1bWVudC5kaXNwYXRjaEV2ZW50KCBldmVudCApO1xuXHRcdFx0fVxuXHRcdH0sIDEwMDAgKTtcblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qO1xuXHRAaW50ZXJuYWwtbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0Q3J1c2ggdGhlIHBhcmFtZXRlciBleHRyYWN0aW5nIHN0cmluZyBpbmZvcm1hdGlvbi5cblxuXHRcdFNwZWNpYWwgc3VwcG9ydCBmb3IgZ2x1Y29zZSBjb2F0ZWQgcGFyYW1ldGVycy5cblx0QGVuZC1pbnRlcm5hbC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbmNvbnN0IGNydXNoID0gZnVuY3Rpb24gY3J1c2goIHBhcmFtZXRlciwgb3B0aW9uICl7XG5cdG9wdGlvbiA9IG9wdGlvbiB8fCB0aGlzLmluc3BlY3QgfHwgeyB9O1xuXG5cdGxldCBkZXB0aCA9IG9wdGlvbi5kZXB0aCB8fCAxO1xuXHRsZXQgbGVuZ3RoID0gb3B0aW9uLmxlbmd0aCB8fCAyMDA7XG5cdGxldCBzcGFjZSA9IC9cXHN7Mix9L2c7XG5cblx0aWYoIGFzZWEuc2VydmVyICYmIHByb3R5cGUoIHBhcmFtZXRlciwgT0JKRUNUICkgJiYgcGFyYW1ldGVyLkNPQVRFRCA9PT0gQ09BVEVEICl7XG5cdFx0aWYoIHBhcmFtZXRlci5zZWxmICl7XG5cdFx0XHR0aGlzLnNldCggQ09OVEVYVCwgcGFyYW1ldGVyLnNlbGYgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdXRpbC5pbnNwZWN0KCBwYXJhbWV0ZXIsIHsgXCJkZXB0aFwiOiBkZXB0aCB9IClcblx0XHRcdC5yZXBsYWNlKCBzcGFjZSwgXCIgXCIgKVxuXHRcdFx0LnN1YnN0cmluZyggMCwgbGVuZ3RoICkgKyBcIi4uLlwiO1xuXG5cdH1lbHNlIGlmKCBwYXJhbWV0ZXIgJiYgY2xhem9mKCBwYXJhbWV0ZXIsIEVycm9yICkgJiYgcGFyYW1ldGVyLnN0YWNrICl7XG5cdFx0dGhpcy5lcnJvciA9IHBhcmFtZXRlcjtcblxuXHRcdHRoaXMuZ2V0VHJhY2UoICk7XG5cblx0XHRyZXR1cm4gcGFyYW1ldGVyLnN0YWNrLnRvU3RyaW5nKCApO1xuXG5cdH1lbHNlIGlmKCBjbGF6b2YoIHBhcmFtZXRlciwgT2xpdmFudCApICl7XG5cdFx0cmV0dXJuIHBhcmFtZXRlci5tZXNzYWdlO1xuXG5cdH1lbHNlIGlmKCBwcm90eXBlKCBwYXJhbWV0ZXIsIEZVTkNUSU9OICkgKXtcblx0XHRyZXR1cm4gcGFyYW1ldGVyLnRvU3RyaW5nKCApXG5cdFx0XHQucmVwbGFjZSggc3BhY2UsIFwiIFwiIClcblx0XHRcdC5zdWJzdHJpbmcoIDAsIGxlbmd0aCApICsgXCIuLi5cIjtcblxuXHR9ZWxzZSBpZiggcHJvdHlwZSggcGFyYW1ldGVyLCBTVFJJTkcgKSB8fFxuXHRcdHByb3R5cGUoIHBhcmFtZXRlciwgTlVNQkVSICkgfHxcblx0XHRwcm90eXBlKCBwYXJhbWV0ZXIsIEJPT0xFQU4gKSApXG5cdHtcblx0XHRyZXR1cm4gcGFyYW1ldGVyLnRvU3RyaW5nKCApO1xuXG5cdH1lbHNlIGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdHJldHVybiB1dGlsLmluc3BlY3QoIHBhcmFtZXRlciwgeyBcImRlcHRoXCI6IGRlcHRoIH0gKVxuXHRcdFx0LnJlcGxhY2UoIHNwYWNlLCBcIiBcIiApXG5cdFx0XHQuc3Vic3RyaW5nKCAwLCBsZW5ndGggKSArIFwiLi4uXCI7XG5cblx0fWVsc2UgaWYoIGFzZWEuY2xpZW50ICl7XG5cdFx0cmV0dXJuIHBhcmFtZXRlci50b1N0cmluZyggKTtcblxuXHR9ZWxzZXtcblx0XHRyZXR1cm4gcGFyYW1ldGVyLnRvU3RyaW5nKCApO1xuXHR9XG59O1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdEFwcGVuZCBtZXNzYWdlcyB0byB0aGUgY3VycmVudCBtZXNzYWdlLlxuXHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuT2xpdmFudC5wcm90b3R5cGUucmVtaW5kID0gZnVuY3Rpb24gcmVtaW5kKCApe1xuXHRsZXQgcGFyYW1ldGVyID0gcmF6ZSggYXJndW1lbnRzICk7XG5cblx0aWYoIGFyaWQoIHBhcmFtZXRlciApICl7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRsZXQgcGFyc2UgPSBjcnVzaC5iaW5kKCB0aGlzICk7XG5cblx0dGhpcy5tZXNzYWdlID0gVTIwMGIoIHBhcmFtZXRlclxuXHRcdC5tYXAoIGZ1bmN0aW9uIG9uRWFjaFBhcmFtZXRlciggcGFyYW1ldGVyICl7XG5cdFx0XHRpZiggZG91YnQoIHBhcmFtZXRlciwgQVNfQVJSQVkgKSApe1xuXHRcdFx0XHRwYXJhbWV0ZXIgPSByYXplKCBwYXJhbWV0ZXIgKVxuXHRcdFx0XHRcdC5tYXAoICggcGFyYW1ldGVyICkgPT4geyByZXR1cm4gcGFyc2UoIHBhcmFtZXRlciApIH0gKTtcblxuXHRcdFx0XHRyZXR1cm4gVTIwMGIoIHBhcmFtZXRlclxuXHRcdFx0XHRcdC5maWx0ZXIoICggbWVzc2FnZSApID0+IHsgcmV0dXJuIHRydWx5KCBtZXNzYWdlICk7IH0gKSApXG5cdFx0XHRcdFx0LmpvaW4oIFwiLCBcIiApO1xuXG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0cmV0dXJuIHBhcnNlKCBwYXJhbWV0ZXIgKTtcblx0XHRcdH1cblx0XHR9IClcblx0XHQucmV2ZXJzZSggKVxuXHRcdC5jb25jYXQoIFsgdGhpcy5tZXNzYWdlIF0gKVxuXHRcdC5maWx0ZXIoICggbWVzc2FnZSApID0+IHsgcmV0dXJuIHRydWx5KCBtZXNzYWdlICk7IH0gKVxuXHRcdC5yZXZlcnNlKCApIClcblx0XHQuam9pbiggXCIsIFwiICk7XG5cblx0dGhpcy5yZXBvcnQoICk7XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFNpbGVuY2UgdGhlIGxvZ2dpbmcgY2FwYWJpbGl0aWVzLlxuXHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuT2xpdmFudC5wcm90b3R5cGUuc2lsZW5jZSA9IGZ1bmN0aW9uIHNpbGVuY2UoICl7XG5cdHRoaXMuc2lsZW50ID0gdHJ1ZTtcblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qO1xuXHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0RGVhY3RpdmF0ZSBzaWxlbmNlLlxuXHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuT2xpdmFudC5wcm90b3R5cGUuc2hvdXQgPSBmdW5jdGlvbiBzaG91dCggKXtcblx0dGhpcy5zaWxlbnQgPSBmYWxzZTtcblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qO1xuXHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0TG9nIHRoZSBkYXRhLlxuXHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuT2xpdmFudC5wcm90b3R5cGUucHJvbXB0ID0gZnVuY3Rpb24gcHJvbXB0KCApe1xuXHR0aGlzLnJlbWluZC5hcHBseSggdGhpcywgcmF6ZSggYXJndW1lbnRzICkgKTtcblxuXHRzbmFwZC5iaW5kKCB0aGlzIClcblx0XHQoIGZ1bmN0aW9uIGRlbGF5KCApe1xuXHRcdFx0aWYoIHRoaXMuZGVwdGggPT09IDIgKXtcblx0XHRcdFx0dGhpcy5sb2coIHRoaXMuZ2V0TWVzc2FnZSggKSApO1xuXG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggZG91YnQoIHRoaXMuc3RhY2ssIEFSUkFZICkgJiYgZmlsbGVkKCB0aGlzLnN0YWNrICkgKXtcblx0XHRcdFx0dGhpcy5sb2coIHRoaXMuZ2V0TWVzc2FnZSggKSApO1xuXG5cdFx0XHR9ZWxzZSBpZiggdGhpcy5kZXB0aCA+IDUgKXtcblx0XHRcdFx0dGhpcy5nZXRUcmFjZSggKCBlcnJvciwgc3RhY2sgKSA9PiB7XG5cdFx0XHRcdFx0aWYoIGNsYXpvZiggZXJyb3IsIEVycm9yICkgKXtcblx0XHRcdFx0XHRcdHRoaXMucmVtaW5kKCBgZXJyb3IgZ2V0dGluZyBzdGFjayB0cmFjZSwgJHsgZXJyb3IgfWAgKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiggdHJ1dSggc3RhY2sgKSApe1xuXHRcdFx0XHRcdFx0dGhpcy5zdGFjayA9IHN0YWNrO1xuXG5cdFx0XHRcdFx0XHR0aGlzLmxvZyggdGhpcy5nZXRNZXNzYWdlKCApICk7XG5cblx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdHRoaXMubG9nKCB0aGlzLmdldE1lc3NhZ2UoICkgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gKTtcblxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHRoaXMubG9nKCB0aGlzLmdldE1lc3NhZ2UoICkgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFNldCB0aGUgcmVkaXJlY3Rpb24gY29uZmlndXJhdGlvbi5cblxuXHRcdFRoaXMgd2lsbCB0cmlnZ2VyIHJlZGlyZWN0IHJlc3BvbnNlIHdoZW4gc2VuZCBpcyBjYWxsZWQuXG5cblx0XHREZWZhdWx0IG9mIERFRkFVTFRfUkVESVJFQ1RfUEFUSCB3aWxsIGJlIHVzZWQgaWYgcGF0aCBpcyBub3QgZ2l2ZW4uXG5cdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5PbGl2YW50LnByb3RvdHlwZS5yZWRpcmVjdCA9IGZ1bmN0aW9uIHJlZGlyZWN0KCBwYXRoICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwicGF0aDpyZXF1aXJlZFwiOiBcInN0cmluZ1wiXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHR0aGlzLnN0YXRlID0gUkVESVJFQ1Q7XG5cdHRoaXMucGF0aCA9IHBhdGg7XG5cblx0aWYoIGZhbHp5KCB0aGlzLnBhdGggKSAmJlxuXHRcdHRydWx5KCBERUZBVUxUX1JFRElSRUNUX1BBVEggKSAmJlxuXHRcdHByb3R5cGUoIERFRkFVTFRfUkVESVJFQ1RfUEFUSCwgU1RSSU5HICkgKVxuXHR7XG5cdFx0dGhpcy5wYXRoID0gREVGQVVMVF9SRURJUkVDVF9QQVRIO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRpZiggIXByb3R5cGUoIHRoaXMucGF0aCwgU1RSSU5HICkgKXtcblx0XHR0aGlzLnJlc2V0KCBJc3N1ZSwgdHJ1ZSApXG5cdFx0XHQuc2lsZW5jZSggKVxuXHRcdFx0LnByb21wdCggXCJpbnZhbGlkIHJlZGlyZWN0IHBhdGhcIiApO1xuXG5cdH1lbHNlIGlmKCBmYWx6eSggdGhpcy5wYXRoICkgKXtcblx0XHR0aGlzLnJlc2V0KCBJc3N1ZSwgdHJ1ZSApXG5cdFx0XHQuc2lsZW5jZSggKVxuXHRcdFx0LnByb21wdCggXCJlbXB0eSByZWRpcmVjdCBwYXRoXCIgKTtcblx0fVxuXG5cdHJldHVybiB0aGlzO1xufTtcblxuT2xpdmFudC5wcm90b3R5cGUuZmx1c2hTdGF0ZSA9IGZ1bmN0aW9uIGZsdXNoU3RhdGUoICl7XG5cdHRoaXMuc3RhdGUgPSBcIlwiO1xuXHR0aGlzLnBhdGggPSBcIlwiO1xuXG5cdHJldHVybiB0aGlzO1xufTtcblxuLyo7XG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRQYXNzIHRoZSBpbnN0YW5jZSB0byB0aGUgY2FsbGJhY2sgZmlyc3QgcGFyYW1ldGVyLlxuXG5cdFx0VGhpcyBmb2xsb3dzIHRoZSBzdGFuZGFyZCBlcnJvci1yZXN1bHQtb3B0aW9uIGNvbnZlbnRpb24uXG5cblx0XHRIYXMgc3BlY2lhbCBzdXBwb3J0IGZvciBnbHVjb3NlIGNvYXRlZCBvcHRpb24uXG5cdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5PbGl2YW50LnByb3RvdHlwZS5wYXNzID0gZnVuY3Rpb24gcGFzcyggY2FsbGJhY2ssIHJlc3VsdCwgb3B0aW9uICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwiY2FsbGJhY2s6cmVxdWlyZWRcIjogXCJmdW5jdGlvblwiXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRpZiggIXByb3R5cGUoIGNhbGxiYWNrLCBGVU5DVElPTiApICl7XG5cdFx0dGhpcy5yZXNldCggQnVnLCB0cnVlIClcblx0XHRcdC5wcm9tcHQoIFwiaW52YWxpZCBjYWxsYmFja1wiICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGlmKCB0cnV1KCBvcHRpb24gKSAmJiB0cnV1KCBvcHRpb24uc2VsZiApICYmIG9wdGlvbi5DT0FURUQgPT09IENPQVRFRCApe1xuXHRcdHRoaXMuc2V0KCBDT05URVhULCBvcHRpb24uc2VsZiApO1xuXHR9XG5cblx0aWYoIHRoaXMuY29udGV4dCApe1xuXHRcdGNhbGxiYWNrID0gY2FsbGVkLmJpbmQoIHRoaXMuY29udGV4dCApKCBjYWxsYmFjayApO1xuXG5cdH1lbHNle1xuXHRcdGNhbGxiYWNrID0gY2FsbGVkKCBjYWxsYmFjayApO1xuXHR9XG5cblx0Y2FsbGJhY2soIHRoaXMsIHJlc3VsdCwgb3B0aW9uICk7XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG5oYXJkZW4oIFwiY3JlYXRlXCIsIGZ1bmN0aW9uIGNyZWF0ZSggbmFtZSwgb3B0aW9uICl7XG5cdGxldCBMb2dFbmdpbmUgPSBkaWF0b20oIG5hbWUgKTtcblxuXHRoZXJlZGl0byggTG9nRW5naW5lLCBPbGl2YW50ICk7XG5cblx0TG9nRW5naW5lLnByb3RvdHlwZS5uYW1lID0gb3B0aW9uLm5hbWU7XG5cdExvZ0VuZ2luZS5wcm90b3R5cGUuc3RhdHVzID0gb3B0aW9uLnN0YXR1cztcblx0TG9nRW5naW5lLnByb3RvdHlwZS5jb2RlID0gb3B0aW9uLmNvZGU7XG5cdExvZ0VuZ2luZS5wcm90b3R5cGUuc2lsZW50ID0gb3B0aW9uLnNpbGVudDtcblx0TG9nRW5naW5lLnByb3RvdHlwZS5kZXB0aCA9IG9wdGlvbi5kZXB0aDtcblx0TG9nRW5naW5lLnByb3RvdHlwZS5jb2xvciA9IG9wdGlvbi5jb2xvcjtcblx0TG9nRW5naW5lLnByb3RvdHlwZS5pbnNwZWN0ID0gb3B0aW9uLmluc3BlY3Q7XG5cdExvZ0VuZ2luZS5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IG9wdGlvbi5pbml0aWFsaXplIHx8XG5cdFx0ZnVuY3Rpb24gaW5pdGlhbGl6ZSggKXtcblx0XHRcdHRoaXMubmFtZSA9IG9wdGlvbi5uYW1lO1xuXG5cdFx0XHR0aGlzLnN0YXR1cyA9IG9wdGlvbi5zdGF0dXM7XG5cblx0XHRcdHRoaXMuY29kZSA9IG9wdGlvbi5jb2RlO1xuXG5cdFx0XHR0aGlzLnNpbGVudCA9IG9wdGlvbi5zaWxlbnQ7XG5cblx0XHRcdHRoaXMuZGVwdGggPSBvcHRpb24uZGVwdGg7XG5cdFx0fTtcblxuXHRzeW1iaW90ZSggTG9nRW5naW5lICk7XG5cblx0aGFyZGVuKCBMb2dFbmdpbmUubmFtZSwgTG9nRW5naW5lICk7XG59LCBPbGl2YW50ICk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2xpdmFudDtcbiJdfQ==
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9saXZhbnQuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhcmlkIiwicmVxdWlyZSIsImFzZWEiLCJidWRnZSIsImNhbGxlZCIsImNsYXpvZiIsImRpYXRvbSIsImRvdWJ0IiwiRXRoZXJuaXR5IiwiZmFsemUiLCJmYWx6eSIsImZpbGxlZCIsImdsdWNvc2UiLCJoYXJkZW4iLCJoZXJlZGl0byIsImtlaW4iLCJtZWVrIiwib3V0cmUiLCJwbG91Z2giLCJwcm90eXBlIiwicmF6ZSIsInNuYXBkIiwic3ltYmlvdGUiLCJ0cnVseSIsInRydXUiLCJVMjAwYiIsInRyYWNlIiwid2luZG93IiwiREVGQVVMVF9SRURJUkVDVF9QQVRIIiwiT2xpdmFudCIsIkRFRkFVTFRfSU5TUEVDVF9PUFRJT04iLCJERUZBVUxUX0xPR19FTkdJTkUiLCJjbGllbnQiLCJjb25zb2xlIiwiZGVidWciLCJsb2ciLCJwcm90b3R5cGUiLCJpbml0aWFsaXplIiwib3B0aW9uIiwiZHVyYXRpb24iLCJEYXRlIiwibm93IiwiYXJndW1lbnRzIiwiT0JKRUNUIiwiQVJHVU1FTlRTIiwiRXJyb3IiLCJDT0FURUQiLCJsb2FkIiwibGV0IiwicGFyYW1ldGVyIiwibGVuZ3RoIiwiZXJyb3IiLCJyZW1pbmQiLCJhcHBseSIsIm1lc3NhZ2UiLCJjb25jYXQiLCJTVFJJTkciLCJjb25zdHJ1Y3RvciIsIkZVTkNUSU9OIiwibmFtZSIsImJpbmQiLCJFQ0hPIiwic3RhdHVzIiwiY29kZSIsIkVDSE9fQ09ERSIsImNvbnRleHQiLCJzZWxmIiwic2lsZW50IiwiQk9PTEVBTiIsImRlcHRoIiwiTlVNQkVSIiwic2VydmVyIiwiY29sb3IiLCJjaGFsayIsIndoaXRlIiwic3RhdGUiLCJzdGFjayIsImluc3BlY3QiLCJyZWRzZWEiLCJJc3N1ZSIsImJsYWNrc2VhIiwiRmF0YWwiLCJyZXNldCIsInJlbmV3IiwibG9nRW5naW5lIiwiZGF0YSIsInNpbGVuY2UiLCJwcm9tcHQiLCJ0b1N0cmluZyIsImpvaW4iLCJ2YWx1ZU9mIiwiZ2V0VGltZXN0YW1wIiwidGltZXN0YW1wIiwicHJpbnRUaW1lIiwiZGltIiwiY29sb3JNZXNzYWdlIiwicmVzb2x2ZU1lc3NhZ2UiLCJmaWx0ZXIiLCJyZXNvbHZlVHJhY2UiLCJBUlJBWSIsIm1hcCIsImZyYW1lIiwiZnVuY3Rpb25OYW1lIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwidHJpbSIsInJlZCIsImdldE1lc3NhZ2UiLCJnZXRUcmFjZSIsImNhbGxiYWNrIiwiZnJvbUVycm9yIiwidGhlbiIsImZyYW1lTGlzdCIsImdldCIsInBhcnNlIiwic2V0IiwicHJvcGVydHkiLCJ2YWx1ZSIsIkxPRyIsIlNJTEVOVCIsIkNPTlRFWFQiLCJzZW5kIiwicmF3IiwicHJvY2VkdXJlIiwiUkVESVJFQ1QiLCJwYXRoIiwiaHR0cCIsIlNlcnZlclJlc3BvbnNlIiwic2Vnd2F5IiwiZmx1c2hTdGF0ZSIsInJlcG9ydCIsImRlbGF5IiwicHJvY2VzcyIsImVtaXQiLCJldmVudCIsIkV2ZW50IiwiZG9jdW1lbnQiLCJkaXNwYXRjaEV2ZW50IiwiY3J1c2giLCJzcGFjZSIsInV0aWwiLCJyZXBsYWNlIiwic3Vic3RyaW5nIiwib25FYWNoUGFyYW1ldGVyIiwiQVNfQVJSQVkiLCJyZXZlcnNlIiwic2hvdXQiLCJyZWRpcmVjdCIsInBhc3MiLCJyZXN1bHQiLCJCdWciLCJjcmVhdGUiLCJMb2dFbmdpbmUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0ZaLE1BQU1BLEtBQUssRUFBRUMsT0FBTyxFQUFFLE9BQU8sQ0FBQztBQUM5QixNQUFNQyxLQUFLLEVBQUVELE9BQU8sRUFBRSxPQUFPLENBQUM7QUFDOUIsTUFBTUUsTUFBTSxFQUFFRixPQUFPLEVBQUUsUUFBUSxDQUFDO0FB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eEIsTUFBTSxDQUFDd0IsTUFBTTtDQUMxQzJGLFNBQVMsQ0FBQ3JILFNBQVMsQ0FBQzJCLEtBQUssRUFBRXpCLE1BQU0sQ0FBQ3lCLElBQUk7Q0FDdEMwRixTQUFTLENBQUNySCxTQUFTLENBQUMrQixPQUFPLEVBQUU3QixNQUFNLENBQUM2QixNQUFNO0NBQzFDc0YsU0FBUyxDQUFDckgsU0FBUyxDQUFDaUMsTUFBTSxFQUFFL0IsTUFBTSxDQUFDK0IsS0FBSztDQUN4Q29GLFNBQVMsQ0FBQ3JILFNBQVMsQ0FBQ29DLE1BQU0sRUFBRWxDLE1BQU0sQ0FBQ2tDLEtBQUs7Q0FDeENpRixTQUFTLENBQUNySCxTQUFTLENBQUN5QyxRQUFRLEVBQUV2QyxNQUFNLENBQUN1QyxPQUFPO0NBQzVDNEUsU0FBUyxDQUFDckgsU0FBUyxDQUFDQyxXQUFXLEVBQUVDLE1BQU0sQ0FBQ0QsV0FBVztFQUNsRCxTQUFTQSxVQUFVLEVBQUUsQ0FBQztHQUNyQixJQUFJLENBQUNzQixLQUFLLEVBQUVyQixNQUFNLENBQUNxQixJQUFJOztHQUV2QixJQUFJLENBQUNHLE9BQU8sRUFBRXhCLE1BQU0sQ0FBQ3dCLE1BQU07O0dBRTNCLElBQUksQ0FBQ0MsS0FBSyxFQUFFekIsTUFBTSxDQUFDeUIsSUFBSTs7R0FFdkIsSUFBSSxDQUFDSSxPQUFPLEVBQUU3QixNQUFNLENBQUM2QixNQUFNOztHQUUzQixJQUFJLENBQUNFLE1BQU0sRUFBRS9CLE1BQU0sQ0FBQytCLEtBQUs7RUFDMUIsQ0FBQzs7Q0FFRi9DLFFBQVEsRUFBRW1JLFVBQVUsQ0FBQzs7Q0FFckI1SSxNQUFNLEVBQUU0SSxTQUFTLENBQUM5RixJQUFJLEVBQUU4RixVQUFVLENBQUM7QUFDcEMsQ0FBQyxFQUFFNUgsUUFBUSxDQUFDOztBQUVaNkgsTUFBTSxDQUFDQyxRQUFRLEVBQUU5SCxPQUFPIiwiZmlsZSI6Im9saXZhbnQuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwib2xpdmFudFwiLFxuXHRcdFx0XCJwYXRoXCI6IFwib2xpdmFudC9vbGl2YW50LmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJvbGl2YW50LmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcIm9saXZhbnRcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9vbGl2YW50LmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwib2xpdmFudC10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlLFxuXHRcdFx0XCJjbGFzc1wiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdEVjaG8gdGhlIGRlc3RydWN0aW9uIGNhdXNlZCBieSB5b3VyIGNvZGUuXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFyaWRcIjogXCJhcmlkXCIsXG5cdFx0XHRcImFzZWFcIjogXCJhc2VhXCIsXG5cdFx0XHRcImJ1ZGdlXCI6IFwiYnVkZ2VcIixcblx0XHRcdFwiYmxhY2tzZWFcIjogXCJibGFja3NlYVwiLFxuXHRcdFx0XCJjYWxsZWRcIjogXCJjYWxsZWRcIixcblx0XHRcdFwiY2hhbGtcIjogXCJjaGFsa1wiLFxuXHRcdFx0XCJjbGF6b2ZcIjogXCJjbGF6b2ZcIixcblx0XHRcdFwiZGV4aXN0XCI6IFwiZGV4aXN0XCIsXG5cdFx0XHRcImRpYXRvbVwiOiBcImRpYXRvbVwiLFxuXHRcdFx0XCJFdGhlcm5pdHlcIjogXCJldGhlcm5pdHlcIixcblx0XHRcdFwiRXZlbnRFbWl0dGVyXCI6IFwiZXZlbnRzXCIsXG5cdFx0XHRcImZhbHplXCI6IFwiZmFsemVcIixcblx0XHRcdFwiZmFsenlcIjogXCJmYWx6eVwiLFxuXHRcdFx0XCJnbHVjb3NlXCI6IFwiZ2x1Y29zZVwiLFxuXHRcdFx0XCJoYXJkZW5cIjogXCJoYXJkZW5cIixcblx0XHRcdFwiaGVyZWRpdG9cIjogXCJoZXJlZGl0b1wiLFxuXHRcdFx0XCJrZWluXCI6IFwia2VpblwiLFxuXHRcdFx0XCJodHRwXCI6IFwiaHR0cFwiLFxuXHRcdFx0XCJtZWVrXCI6IFwibWVla1wiXG5cdFx0XHRcIm91dHJlXCI6IFwib3V0cmVcIixcblx0XHRcdFwicGxvdWdoXCI6IFwicGxvdWdoXCIsXG5cdFx0XHRcInByb3R5cGVcIjogXCJwcm90eXBlXCIsXG5cdFx0XHRcInJhemVcIjogXCJyYXplXCIsXG5cdFx0XHRcInJlZHNlYVwiOiBcInJlZHNlYVwiLFxuXHRcdFx0XCJzbmFwZFwiOiBcInNuYXBkXCIsXG5cdFx0XHRcInNlZ3dheVwiOiBcInNlZ3dheVwiLFxuXHRcdFx0XCJzeW1iaW90ZVwiOiBcInN5bWJpb3RlXCIsXG5cdFx0XHRcInRyYWNlXCI6IFsgXCJzdGFja3RyYWNlLWpzXCIsIFwic3RhY2stdHJhY2VcIiBdLFxuXHRcdFx0XCJ0cnVseVwiOiBcInRydWx5XCIsXG5cdFx0XHRcInRydXVcIjogXCJ0cnV1XCIsXG5cdFx0XHRcIlUyMDBiXCI6IFwidTIwMGJcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhcmlkID0gcmVxdWlyZSggXCJhcmlkXCIgKTtcbmNvbnN0IGFzZWEgPSByZXF1aXJlKCBcImFzZWFcIiApO1xuY29uc3QgYnVkZ2UgPSByZXF1aXJlKCBcImJ1ZGdlXCIgKTtcbmNvbnN0IGNhbGxlZCA9IHJlcXVpcmUoIFwiY2FsbGVkXCIgKTtcbmNvbnN0IGNsYXpvZiA9IHJlcXVpcmUoIFwiY2xhem9mXCIgKTtcbmNvbnN0IGRpYXRvbSA9IHJlcXVpcmUoIFwiZGlhdG9tXCIgKTtcbmNvbnN0IGRvdWJ0ID0gcmVxdWlyZSggXCJkb3VidFwiICk7XG5jb25zdCBFdGhlcm5pdHkgPSByZXF1aXJlKCBcImV0aGVybml0eVwiICk7XG5jb25zdCBmYWx6ZSA9IHJlcXVpcmUoIFwiZmFsemVcIiApO1xuY29uc3QgZmFsenkgPSByZXF1aXJlKCBcImZhbHp5XCIgKTtcbmNvbnN0IGZpbGxlZCA9IHJlcXVpcmUoIFwiZmlsbGVkXCIgKTtcbmNvbnN0IGdsdWNvc2UgPSByZXF1aXJlKCBcImdsdWNvc2VcIiApO1xuY29uc3QgaGFyZGVuID0gcmVxdWlyZSggXCJoYXJkZW5cIiApO1xuY29uc3QgaGVyZWRpdG8gPSByZXF1aXJlKCBcImhlcmVkaXRvXCIgKTtcbmNvbnN0IGtlaW4gPSByZXF1aXJlKCBcImtlaW5cIiApO1xuY29uc3QgbWVlayA9IHJlcXVpcmUoIFwibWVla1wiICk7XG5jb25zdCBvdXRyZSA9IHJlcXVpcmUoIFwib3V0cmVcIiApO1xuY29uc3QgcGxvdWdoID0gcmVxdWlyZSggXCJwbG91Z2hcIiApO1xuY29uc3QgcHJvdHlwZSA9IHJlcXVpcmUoIFwicHJvdHlwZVwiICk7XG5jb25zdCByYXplID0gcmVxdWlyZSggXCJyYXplXCIgKTtcbmNvbnN0IHNuYXBkID0gcmVxdWlyZSggXCJzbmFwZFwiICk7XG5jb25zdCBzeW1iaW90ZSA9IHJlcXVpcmUoIFwic3ltYmlvdGVcIiApO1xuY29uc3QgdHJ1bHkgPSByZXF1aXJlKCBcInRydWx5XCIgKTtcbmNvbnN0IHRydXUgPSByZXF1aXJlKCBcInRydXVcIiApO1xuY29uc3QgVTIwMGIgPSByZXF1aXJlKCBcInUyMDBiXCIgKTtcblxuLy86IEBjbGllbnQ6XG5jb25zdCB0cmFjZSA9IHJlcXVpcmUoIFwic3RhY2t0cmFjZS1qc1wiICk7XG5oYXJkZW4oIFwiREVGQVVMVF9SRURJUkVDVF9QQVRIXCIsIHdpbmRvdy5ERUZBVUxUX1JFRElSRUNUX1BBVEggfHwgXCIvdmlldy9zdGF0dXMvcGFnZVwiICk7XG4vLzogQGVuZC1jbGllbnRcblxuXG5cbmNvbnN0IE9saXZhbnQgPSBkaWF0b20oIFwiT2xpdmFudFwiICk7XG5cbmNvbnN0IERFRkFVTFRfSU5TUEVDVF9PUFRJT04gPSB7IFwiZGVwdGhcIjogMSwgXCJsZW5ndGhcIjogMjAwIH07XG5jb25zdCBERUZBVUxUX0xPR19FTkdJTkUgPSBhc2VhLmNsaWVudD8gY29uc29sZS5kZWJ1ZyA6IGNvbnNvbGUubG9nO1xuXG4vKjtcblx0QG5vdGU6XG5cdFx0VGhpcyBpcyB0aGUgZGVmYXVsdCBuYW1lL3N0YXR1cyBhbmQgY29kZSBvZiB0aGUgb2xpdmFudC5cblx0QGVuZC1ub3RlXG4qL1xuaGFyZGVuKCBcIkVDSE9cIiwgXCJlY2hvXCIgKTtcbmhhcmRlbiggXCJFQ0hPX0NPREVcIiwgMjAwICk7XG5cbmhhcmRlbiggXCJSRURJUkVDVFwiLCBcInJlZGlyZWN0XCIgKTtcbmhhcmRlbiggXCJDT05URVhUXCIsIFwiY29udGV4dFwiICk7XG5oYXJkZW4oIFwiTE9HXCIsIFwibG9nXCIgKTtcbmhhcmRlbiggXCJTSUxFTlRcIiwgXCJzaWxlbnRcIiApO1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdE9wdGlvbiBzaG91bGQgbm90IGJlIGdsdWNvc2UgY29hdGVkLlxuXHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuT2xpdmFudC5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIGluaXRpYWxpemUoIG9wdGlvbiApe1xuXHR0aGlzLmR1cmF0aW9uID0gRGF0ZS5ub3coICk7XG5cblx0aWYoIHByb3R5cGUoIGFyZ3VtZW50c1sgMCBdLCBPQkpFQ1QgKSAmJlxuXHRcdCFkb3VidCggYXJndW1lbnRzWyAwIF0sIEFSR1VNRU5UUyApICYmXG5cdFx0ISggY2xhem9mKCBhcmd1bWVudHNbIDAgXSwgRXJyb3IgKSApICYmXG5cdFx0b3B0aW9uLkNPQVRFRCAhPT0gQ09BVEVEIClcblx0e1xuXHRcdHRoaXMubG9hZCggb3B0aW9uICk7XG5cblx0fWVsc2V7XG5cdFx0dGhpcy5sb2FkKCApO1xuXHR9XG5cblx0bGV0IHBhcmFtZXRlciA9IGFyZ3VtZW50c1sgMCBdO1xuXG5cdGlmKCBhcmd1bWVudHMubGVuZ3RoID09IDAgKXtcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9ZWxzZSBpZiggY2xhem9mKCBwYXJhbWV0ZXIsIEVycm9yICkgKXtcblx0XHRsZXQgZXJyb3IgPSBwYXJhbWV0ZXI7XG5cblx0XHR0aGlzLnJlbWluZC5hcHBseSggdGhpcywgWyBlcnJvci5tZXNzYWdlLCBlcnJvciBdLmNvbmNhdCggYnVkZ2UoIGFyZ3VtZW50cyApICkgKTtcblxuXHR9ZWxzZSBpZiggY2xhem9mKCBwYXJhbWV0ZXIsIE9saXZhbnQgKSApe1xuXHRcdHRoaXMubG9hZCggcGFyYW1ldGVyICk7XG5cblx0fWVsc2UgaWYoIGRvdWJ0KCBwYXJhbWV0ZXIsIEFSR1VNRU5UUyApICl7XG5cdFx0dGhpcy5yZW1pbmQuYXBwbHkoIHRoaXMsIHBsb3VnaCggcGFyYW1ldGVyICkgKTtcblxuXHR9ZWxzZSBpZiggcHJvdHlwZSggcGFyYW1ldGVyLCBTVFJJTkcgKSApe1xuXHRcdHRoaXMucmVtaW5kLmFwcGx5KCB0aGlzLCByYXplKCBhcmd1bWVudHMgKSApO1xuXG5cdH1lbHNlIGlmKCBwcm90eXBlKCBwYXJhbWV0ZXIsIE9CSkVDVCApICYmXG5cdFx0cGFyYW1ldGVyLmNvbnN0cnVjdG9yICYmXG5cdFx0cHJvdHlwZSggcGFyYW1ldGVyLmNvbnN0cnVjdG9yLCBGVU5DVElPTiApICYmXG5cdFx0cGFyYW1ldGVyLmNvbnN0cnVjdG9yLm5hbWUgIT0gXCJGdW5jdGlvblwiICYmXG5cdFx0Y2xhem9mKCBwYXJhbWV0ZXIsIHBhcmFtZXRlci5jb25zdHJ1Y3RvciApIClcblx0e1xuXHRcdHRoaXMubG9hZCggcGFyYW1ldGVyICk7XG5cblx0XHR0aGlzLnJlbWluZC5hcHBseSggdGhpcywgcmF6ZSggYXJndW1lbnRzICkgKTtcblxuXHR9ZWxzZSBpZiggcHJvdHlwZSggcGFyYW1ldGVyLCBPQkpFQ1QgKSApe1xuXHRcdHRoaXMucmVtaW5kLmFwcGx5KCB0aGlzLCByYXplKCBhcmd1bWVudHMgKSApO1xuXHR9XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG5PbGl2YW50LnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24gbG9hZCggb3B0aW9uICl7XG5cdG9wdGlvbiA9IGdsdWNvc2UuYmluZCggdGhpcyApKCBvcHRpb24gKTtcblxuXHR0aGlzLm5hbWUgPSBvcHRpb24ubmFtZSB8fCB0aGlzLm5hbWUgfHwgRUNIT1xuXG5cdHRoaXMuc3RhdHVzID0gb3B0aW9uLnN0YXR1cyB8fCB0aGlzLnN0YXR1cyB8fCBFQ0hPO1xuXG5cdHRoaXMuY29kZSA9IG9wdGlvbi5jb2RlIHx8IHRoaXMuY29kZSB8fCBFQ0hPX0NPREU7XG5cblx0dGhpcy5sb2cgPSBvcHRpb24ubG9nIHx8IHRoaXMubG9nIHx8IERFRkFVTFRfTE9HX0VOR0lORTtcblxuXHRpZiggZmFsemUoIHRoaXMuY29udGV4dCApICYmIHRydXUoIG9wdGlvbi5zZWxmICkgKXtcblx0XHR0aGlzLmNvbnRleHQgPSBvcHRpb24uc2VsZjtcblx0fVxuXG5cdHRoaXMuc2lsZW50ID0ga2Vpbiggb3B0aW9uLCBcInNpbGVudFwiICk/IG9wdGlvbi5zaWxlbnQgOlxuXHRcdGtlaW4oIHRoaXMsIFwic2lsZW50XCIgKT8gdGhpcy5zaWxlbnQgOiB0cnVlO1xuXG5cdGlmKCAhcHJvdHlwZSggdGhpcy5zaWxlbnQsIEJPT0xFQU4gKSApe1xuXHRcdHRoaXMuc2lsZW50ID0gdHJ1ZTtcblx0fVxuXG5cdC8vOiBEZXB0aCBkaWN0YXRlcyByZWZpbmVkIHNldHRpbmdzIG9mIHRoaXMgcHJvY2VkdXJlLlxuXHR0aGlzLmRlcHRoID0ga2Vpbiggb3B0aW9uLCBcImRlcHRoXCIgKT8gb3B0aW9uLmRlcHRoIDpcblx0XHRrZWluKCB0aGlzLCBcImRlcHRoXCIgKT8gdGhpcy5kZXB0aCA6IDE7XG5cblx0aWYoICFwcm90eXBlKCB0aGlzLmRlcHRoLCBOVU1CRVIgKSApe1xuXHRcdHRoaXMuZGVwdGggPSAxO1xuXHR9XG5cblx0Ly86IERlcHRoIGlzIG9ubHkgZnJvbSAxLTAgb3IgMS0yMzQ1LTY3ODktMC5cblx0Ly86IERlcHRoIDIgaXMgZGVlcCBzaWxlbnQgZGVwdGguXG5cdHRoaXMuZGVwdGggPSB0aGlzLmRlcHRoICUgMTA7XG5cblx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0dGhpcy5jb2xvciA9IG9wdGlvbi5jb2xvciB8fCB0aGlzLmNvbG9yIHx8IGNoYWxrLndoaXRlO1xuXHR9XG5cblx0dGhpcy5zdGF0ZSA9IFwiXCI7XG5cblx0dGhpcy5zdGFjayA9IG9wdGlvbi5zdGFjayB8fCB0aGlzLnN0YWNrIHx8IFsgXTtcblxuXHR0aGlzLm1lc3NhZ2UgPSBvcHRpb24ubWVzc2FnZSB8fCB0aGlzLm1lc3NhZ2UgfHwgXCJcIjtcblxuXHR0aGlzLmluc3BlY3QgPSBvcHRpb24uaW5zcGVjdCB8fCB0aGlzLmluc3BlY3QgfHwgREVGQVVMVF9JTlNQRUNUX09QVElPTjtcblxuXHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRyZWRzZWEoIElzc3VlICk7XG5cblx0XHRibGFja3NlYSggRmF0YWwgKTtcblx0fVxuXG5cdHJldHVybiB0aGlzO1xufTtcblxuLyo7XG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRNb2RpZmllcyB0aGUgbG9nIGVuZ2luZSB3aGlsZSBtYWludGFpbmluZyBlbnZpcm9ubWVudCBwcm9wZXJ0aWVzLlxuXHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuT2xpdmFudC5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiByZXNldCggb3B0aW9uLCByZW5ldyApe1xuXHRpZiggcHJvdHlwZSggb3B0aW9uLCBGVU5DVElPTiApICYmIGNsYXpvZiggb3B0aW9uLCBPbGl2YW50ICkgKXtcblx0XHRsZXQgbG9nRW5naW5lID0gb3B0aW9uO1xuXG5cdFx0aWYoIHByb3R5cGUoIHJlbmV3LCBCT09MRUFOICkgJiYgcmVuZXcgKXtcblx0XHRcdGxldCBkYXRhID0ge1xuXHRcdFx0XHRcIm1lc3NhZ2VcIjogdGhpcy5tZXNzYWdlLFxuXHRcdFx0XHRcInN0YWNrXCI6IHRoaXMuc3RhY2tcblx0XHRcdH07XG5cblx0XHRcdHJldHVybiBsb2dFbmdpbmUoIGRhdGEgKTtcblxuXHRcdH1lbHNle1xuXHRcdFx0dGhpcy5sb2FkKCBsb2dFbmdpbmUucHJvdG90eXBlICk7XG5cdFx0fVxuXG5cdH1lbHNlIGlmKCBwcm90eXBlKCBvcHRpb24sIE9CSkVDVCApICl7XG5cdFx0dGhpcy5sb2FkKCBvcHRpb24gKTtcblxuXHR9ZWxzZSBpZiggIWNsYXpvZiggb3B0aW9uLCBJc3N1ZSApICl7XG5cdFx0dGhpcy5yZXNldCggSXNzdWUsIHRydWUgKVxuXHRcdFx0LnNpbGVuY2UoIClcblx0XHRcdC5wcm9tcHQoIFwiY2Fubm90IHJlc2V0IHRvIGdpdmVuIG9wdGlvblwiLCBvcHRpb24gKTtcblxuXHR9ZWxzZXtcblx0XHRJc3N1ZSggXCJjYW5ub3QgcmVzZXQgbG9nXCIsIG9wdGlvbiwgdGhpcyApLnNpbGVuY2UoICkucHJvbXB0KCApO1xuXHR9XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG5PbGl2YW50LnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCApe1xuXHRyZXR1cm4gVTIwMGIoIG91dHJlKCBbIHRoaXMubmFtZSwgdGhpcy5zdGF0dXMsIHRoaXMubWVzc2FnZSBdICkgKS5qb2luKCBcIiwgXCIgKTtcbn07XG5cbk9saXZhbnQucHJvdG90eXBlLnZhbHVlT2YgPSBmdW5jdGlvbiB2YWx1ZU9mKCApe1xuXHRyZXR1cm4gVTIwMGIoIG91dHJlKCBbIHRoaXMubmFtZSwgdGhpcy5zdGF0dXMsIHRoaXMubWVzc2FnZSBdICkgKS5qb2luKCBcIiwgXCIgKTtcbn07XG5cbk9saXZhbnQucHJvdG90eXBlLmdldFRpbWVzdGFtcCA9IGZ1bmN0aW9uIGdldFRpbWVzdGFtcCggKXtcblx0bGV0IHRpbWVzdGFtcCA9IEV0aGVybml0eSggKS5wcmludFRpbWUoIHRydWUgKTtcblxuXHR0aW1lc3RhbXAgPSBgJHsgdGltZXN0YW1wIH0gfCAkeyAoIERhdGUubm93KCApIC0gdGhpcy5kdXJhdGlvbiApIH1tc2A7XG5cblx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0cmV0dXJuIGNoYWxrLmRpbSggdGltZXN0YW1wICk7XG5cdH1cblxuXHRyZXR1cm4gdGltZXN0YW1wO1xufTtcblxuT2xpdmFudC5wcm90b3R5cGUuY29sb3JNZXNzYWdlID0gZnVuY3Rpb24gY29sb3JNZXNzYWdlKCBjb2xvciwgbWVzc2FnZSApe1xuXHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRpZiggcHJvdHlwZSggY29sb3IsIEZVTkNUSU9OICkgKXtcblx0XHRcdHJldHVybiBjb2xvciggbWVzc2FnZSApO1xuXG5cdFx0fWVsc2UgaWYoIHByb3R5cGUoIGNvbG9yLCBTVFJJTkcgKSAmJiB0cnVseSggY29sb3IgKSApe1xuXHRcdFx0aWYoIGtlaW4oIGNoYWxrLCBjb2xvciApICYmIHByb3R5cGUoIGNoYWxrWyBjb2xvciBdLCBGVU5DVElPTiApICl7XG5cdFx0XHRcdHJldHVybiBjaGFsa1sgY29sb3IgXSggbWVzc2FnZSApO1xuXG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0dGhpcy5yZW1pbmQoIGBpbnZhbGlkIG1lc3NhZ2UgY29sb3IsICR7IGNvbG9yIH1gICk7XG5cblx0XHRcdFx0cmV0dXJuIGNoYWxrLndoaXRlKCBtZXNzYWdlICk7XG5cdFx0XHR9XG5cblx0XHR9ZWxzZXtcblx0XHRcdHJldHVybiBjaGFsay53aGl0ZSggbWVzc2FnZSApO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBtZXNzYWdlO1xufTtcblxuLyo7XG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRUaGUgbWVzc2FnZSBpcyBkaXZpZGVkIGludG8gdGhyZWUgcGFydHMsXG5cdFx0MS4gbmFtZXNwYWNlLFxuXHRcdDIuIHN0YXR1cyxcblx0XHQzLiBhY3R1YWwgbWVzc2FnZVxuXHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuT2xpdmFudC5wcm90b3R5cGUucmVzb2x2ZU1lc3NhZ2UgPSBmdW5jdGlvbiByZXNvbHZlTWVzc2FnZSggKXtcblx0bGV0IG1lc3NhZ2UgPSBVMjAwYiggb3V0cmUoIFsgdGhpcy5uYW1lLCB0aGlzLnN0YXR1cywgdGhpcy5tZXNzYWdlIF0gKVxuXHRcdC5maWx0ZXIoIHRydWx5ICkgKS5qb2luKCBcIiwgXCIgKTtcblxuXHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRyZXR1cm4gdGhpcy5jb2xvck1lc3NhZ2UoIHRoaXMuY29sb3IsIG1lc3NhZ2UgKTtcblx0fVxuXG5cdHJldHVybiBtZXNzYWdlO1xufTtcblxuT2xpdmFudC5wcm90b3R5cGUucmVzb2x2ZVRyYWNlID0gZnVuY3Rpb24gcmVzb2x2ZVRyYWNlKCApe1xuXHRsZXQgc3RhY2sgPSBcInN0YWNrIHRyYWNlIG5vdCBhdmFpbGFibGVcIjtcblxuXHRpZiggIXRoaXMuc2lsZW50ICYmIGRvdWJ0KCB0aGlzLnN0YWNrLCBBUlJBWSApICYmIGZpbGxlZCggdGhpcy5zdGFjayApICl7XG5cdFx0c3RhY2sgPSB0aGlzLnN0YWNrO1xuXG5cdFx0c3RhY2sgPSBzdGFjay5tYXAoICggZnJhbWUgKSA9PiB7XG5cdFx0XHRpZiggZnJhbWUudG9TdHJpbmcoICkgPT09IFwiW29iamVjdCBPYmplY3RdXCIgKXtcblx0XHRcdFx0bGV0IHsgZnVuY3Rpb25OYW1lLCBmaWxlTmFtZSwgbGluZU51bWJlciwgY29sdW1uTnVtYmVyIH0gPSBmcmFtZTtcblxuXHRcdFx0XHRyZXR1cm4gYCR7IGZ1bmN0aW9uTmFtZSB9ICgkeyBmaWxlTmFtZSB9OiR7IGxpbmVOdW1iZXIgfTokeyBjb2x1bW5OdW1iZXIgfSlgLnRyaW0oICk7XG5cblx0XHRcdH1lbHNle1xuXHRcdFx0XHRyZXR1cm4gZnJhbWUudG9TdHJpbmcoICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdFx0c3RhY2sgPSBVMjAwYiggc3RhY2sgKS5qb2luKCBcIlxcblwiICk7XG5cblx0XHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRcdHJldHVybiBjaGFsay5kaW0ucmVkKCBzdGFjayApO1xuXHRcdH1cblxuXHRcdHJldHVybiBzdGFjaztcblx0fVxuXG5cdGlmKCB0aGlzLmRlcHRoIDwgNSAmJlxuXHRcdHRoaXMuc2lsZW50ICYmXG5cdFx0dHJ1dSggdGhpcy5jb250ZXh0ICkgJiZcblx0IFx0cHJvdHlwZSggdGhpcy5jb250ZXh0LmNvbnN0cnVjdG9yLCBGVU5DVElPTiApICYmXG5cdFx0dHJ1bHkoIHRoaXMuY29udGV4dC5jb25zdHJ1Y3Rvci5uYW1lICkgKVxuXHR7XG5cdFx0c3RhY2sgPSBgY2FsbGVkIHdpdGggY29udGV4dCwgJHsgdGhpcy5jb250ZXh0LmNvbnN0cnVjdG9yLm5hbWUgfWA7XG5cblx0XHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRcdHJldHVybiBjaGFsay5kaW0oIHN0YWNrICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHN0YWNrO1xuXHR9XG5cblx0aWYoIHRoaXMuc2lsZW50ICl7XG5cdFx0c3RhY2sgPSBcInN0YWNrIHRyYWNlIGlzIG5vdCBhdmFpbGFibGUgb24gc2lsZW50IG1vZGVcIjtcblxuXHRcdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdFx0cmV0dXJuIGNoYWxrLmRpbSggc3RhY2sgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc3RhY2s7XG5cdH1cblxuXHRpZiggdGhpcy5kZXB0aCA+IDUgKXtcblx0XHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRcdHJldHVybiBjaGFsay5kaW0oIHN0YWNrICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHN0YWNrO1xuXHR9XG59O1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFRoZSBtZXNzYWdlIGNvbnNpc3Qgb2YgdGhyZWUgbGF5ZXIgb2Ygc3RyaW5ncyxcblx0XHRcdDEuIHRpbWVzdGFtcCBpbiB0cnVlIHRpbWUgZm9ybWF0XG5cdFx0XHQyLiBhY3R1YWwgcmVhZGFibGUgbWVzc2FnZVxuXHRcdFx0My4gbWVzc2FnZSB0cmFjZSBvciBtZXNzYWdlIGNvbnRleHRcblxuXHRcdFRoZXNlIGluZm9ybWF0aW9uIHdpbGwgYmUgZGl2aWRlZCB0aHJvdWdoIHplcm8td2lkdGggc3BhY2UgY29udmVudGlvbi5cblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLmdldE1lc3NhZ2UgPSBmdW5jdGlvbiBnZXRNZXNzYWdlKCApe1xuXHRyZXR1cm4gVTIwMGIoIFtcblx0XHR0aGlzLmdldFRpbWVzdGFtcCggKSxcblx0XHR0aGlzLnJlc29sdmVNZXNzYWdlKCApLFxuXHRcdHRoaXMucmVzb2x2ZVRyYWNlKCApXG5cdF0gKS5qb2luKCBcIlxcblwiICk7XG59O1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFRoaXMgc2hvdWxkIGJlIHVzZWQgaW50ZXJuYWxseSBhcyBtdWNoIGFzIHBvc3NpYmxlLlxuXHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuT2xpdmFudC5wcm90b3R5cGUuZ2V0VHJhY2UgPSBmdW5jdGlvbiBnZXRUcmFjZSggY2FsbGJhY2sgKXtcblx0aWYoIHRoaXMuZGVwdGggPT0gMiApe1xuXHRcdHRoaXMucmVtaW5kKCBcInRyYWNpbmcgaXMgZGlzYWJsZWQgZm9yIGRlcHRoIDJcIiApLnByb21wdCggKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Y2FsbGJhY2sgPSBjYWxsZWQuYmluZCggdGhpcyApKCBjYWxsYmFjayApO1xuXG5cdHNuYXBkLmJpbmQoIHRoaXMgKSggY2FsbGJhY2ssIDEwMDAgKTtcblxuXHRpZiggYXNlYS5jbGllbnQgKXtcblx0XHRpZiggY2xhem9mKCB0aGlzLmVycm9yLCBFcnJvciApICl7XG5cdFx0XHR0cmFjZS5mcm9tRXJyb3IoIHRoaXMuZXJyb3IgKVxuXHRcdFx0XHQudGhlbiggKCBmcmFtZUxpc3QgKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5zdGFjayA9IGZyYW1lTGlzdDtcblxuXHRcdFx0XHRcdGNhbGxiYWNrKCBudWxsLCB0aGlzLnN0YWNrICk7XG5cdFx0XHRcdH0gKVxuXHRcdFx0XHQuY2F0Y2goICggZXJyb3IgKSA9PiB7IGNhbGxiYWNrKCB0aGlzLnJlbWluZCggZXJyb3IgKSApOyB9ICk7XG5cblx0XHR9ZWxzZSBpZiggdGhpcy5kZXB0aCA+IDUgKXtcblx0XHRcdHRyYWNlLmdldCggKVxuXHRcdFx0XHQudGhlbiggKCBmcmFtZUxpc3QgKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5zdGFjayA9IGZyYW1lTGlzdDtcblxuXHRcdFx0XHRcdGNhbGxiYWNrKCBudWxsLCB0aGlzLnN0YWNrICk7XG5cdFx0XHRcdH0gKVxuXHRcdFx0XHQuY2F0Y2goICggZXJyb3IgKSA9PiB7IGNhbGxiYWNrKCB0aGlzLnJlbWluZCggZXJyb3IgKSApOyB9ICk7XG5cblx0XHR9ZWxzZXtcblx0XHRcdGNhbGxiYWNrKCApO1xuXHRcdH1cblxuXHR9ZWxzZSBpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRpZiggY2xhem9mKCB0aGlzLmVycm9yLCBFcnJvciApICl7XG5cdFx0XHR0aGlzLnN0YWNrID0gdHJhY2UucGFyc2UoIHRoaXMuZXJyb3IgKTtcblxuXHRcdFx0Y2FsbGJhY2soIG51bGwsIHRoaXMuc3RhY2sgKTtcblxuXHRcdH1lbHNlIGlmKCB0aGlzLmRlcHRoID4gNSApe1xuXHRcdFx0dGhpcy5zdGFjayA9IHRyYWNlLmdldCggKTtcblxuXHRcdFx0Y2FsbGJhY2soIG51bGwsIHRoaXMuc3RhY2sgKTtcblxuXHRcdH1lbHNle1xuXHRcdFx0Y2FsbGJhY2soICk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFNldHMgYSBwcm9wZXJ0eSBvZiB0aGlzIGxvZyBlbmdpbmUuXG5cblx0XHROb3QgYWxsIHByb3BlcnR5IGNhbiBiZSBzZXQgdG8gbGltaXQgdGhpcyBmdW5jdGlvblxuXHRcdFx0Zm9yIHNlY3VyaXR5IHB1cnBvc2VzLlxuXHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuT2xpdmFudC5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gc2V0KCBwcm9wZXJ0eSwgdmFsdWUgKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJwcm9wZXJ0eTpyZXF1aXJlZFwiOiBcInN0cmluZ1wiLFxuXHRcdFx0XHRcInZhbHVlXCI6IFwiKlwiXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRsZXQgcGFyYW1ldGVyID0gcmF6ZSggYXJndW1lbnRzICk7XG5cblx0aWYoIHBhcmFtZXRlci5sZW5ndGggPT0gMSAmJiBwcm90eXBlKCBwYXJhbWV0ZXJbIDAgXSwgT0JKRUNUICkgKXtcblx0XHRsZXQgb3B0aW9uID0gcGFyYW1ldGVyWyAwIF07XG5cdFx0Zm9yKCBsZXQgcHJvcGVydHkgaW4gb3B0aW9uICl7XG5cdFx0XHR0aGlzLnNldCggcHJvcGVydHksIG9wdGlvblsgcHJvcGVydHkgXSApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0aWYoICFwcm90eXBlKCBwcm9wZXJ0eSwgU1RSSU5HICkgKXtcblx0XHR0aGlzLnJlc2V0KCBJc3N1ZSwgdHJ1ZSApXG5cdFx0XHQuc2lsZW5jZSggKVxuXHRcdFx0LnByb21wdCggXCJpbnZhbGlkIHByb3BlcnR5XCIsIHByb3BlcnR5ICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGlmKCBwcm90eXBlKCBwcm9wZXJ0eSwgU1RSSU5HICkgJiZcblx0XHRwcm9wZXJ0eSAhPSBMT0cgICYmXG5cdFx0cHJvcGVydHkgIT0gU0lMRU5UICYmXG5cdFx0cHJvcGVydHkgIT0gQ09OVEVYVCApXG5cdHtcblx0XHR0aGlzLnJlc2V0KCBJc3N1ZSwgdHJ1ZSApXG5cdFx0XHQuc2lsZW5jZSggKVxuXHRcdFx0LnByb21wdCggXCJpbnZhbGlkIHByb3BlcnR5XCIsIHByb3BlcnR5ICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHRoaXNbIHByb3BlcnR5IF0gPSB2YWx1ZTtcblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qO1xuXHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0U2VuZCBkYXRhIHRvIHNlcnZlciBvciBjbGllbnQuXG5cdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5PbGl2YW50LnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gc2VuZCggKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJyZXNwb25zZVwiOiBcImh0dHAuU2VydmVyUmVzcG9uc2VcIixcblx0XHRcdFx0XCJwcm9jZWR1cmVcIjogXCJmdW5jdGlvblwiXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRpZiggdGhpcy5kZXB0aCA9PSAyICl7XG5cdFx0dGhpcy5yZW1pbmQoIFwic2VuZGluZyBpcyBkaXNhYmxlZCBmb3IgZGVwdGggMlwiICkucHJvbXB0KCApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRsZXQgbWVzc2FnZSA9IG1lZWsoIHRoaXMuc3RhdHVzLCBVMjAwYiggdGhpcy50b1N0cmluZyggKSApLnJhdyggKSApO1xuXG5cdGxldCBwcm9jZWR1cmUgPSBhcmd1bWVudHNbIDAgXTtcblxuXHRpZiggYXNlYS5zZXJ2ZXIgJiZcblx0XHR0aGlzLnN0YXRlID09PSBSRURJUkVDVCAmJlxuXHRcdHByb3R5cGUoIHRoaXMucGF0aCwgU1RSSU5HICkgJiZcblx0XHR0cnVseSggdGhpcy5wYXRoICkgJiZcblx0XHRjbGF6b2YoIHByb2NlZHVyZSwgaHR0cC5TZXJ2ZXJSZXNwb25zZSApIClcblx0e1xuXHRcdHNlZ3dheSgge1xuXHRcdFx0XCJyZXNwb25zZVwiOiBwcm9jZWR1cmUsXG5cdFx0XHRcInBhdGhcIjogdGhpcy5wYXRoLFxuXHRcdFx0XCJzdGF0dXNcIjogdGhpcy5zdGF0dXMsXG5cdFx0XHRcImRhdGFcIjogbWVzc2FnZSxcblx0XHR9ICk7XG5cblx0XHR0aGlzLmZsdXNoU3RhdGUoICk7XG5cblx0fWVsc2UgaWYoIGFzZWEuc2VydmVyICYmXG5cdFx0ZmFsenkoIHRoaXMuc3RhdGUgKSAmJlxuXHRcdGNsYXpvZiggcHJvY2VkdXJlLCBodHRwLlNlcnZlclJlc3BvbnNlICkgKVxuXHR7XG5cdFx0bWVzc2FnZS5zZW5kKCBwcm9jZWR1cmUsIHRoaXMuY29kZSApO1xuXG5cdH1lbHNlIGlmKCBhc2VhLmNsaWVudCAmJlxuXHRcdHRoaXMuc3RhdGUgPT0gUkVESVJFQ1QgJiZcblx0XHRwcm90eXBlKCB0aGlzLnBhdGgsIFNUUklORyApICYmXG5cdFx0dHJ1bHkoIHRoaXMucGF0aCApIClcblx0e1xuXHRcdHNlZ3dheSgge1xuXHRcdFx0XCJwYXRoXCI6IHRoaXMucGF0aCxcblx0XHRcdFwic3RhdHVzXCI6IHRoaXMuc3RhdHVzLFxuXHRcdFx0XCJkYXRhXCI6IG1lc3NhZ2UsXG5cdFx0fSApO1xuXG5cdFx0dGhpcy5mbHVzaFN0YXRlKCApO1xuXG5cdH1lbHNlIGlmKCBhc2VhLmNsaWVudCAmJlxuXHRcdGZhbHp5KCB0aGlzLnN0YXRlICkgJiZcblx0XHRwcm90eXBlKCBwcm9jZWR1cmUsIEZVTkNUSU9OICkgKVxuXHR7XG5cdFx0bWVzc2FnZS5zZW5kLmJpbmQoIHRoaXMgKSggcHJvY2VkdXJlICk7XG5cblx0fWVsc2UgaWYoIHRydWx5KCB0aGlzLnN0YXRlICkgKXtcblx0XHR0aGlzLnJlc2V0KCBJc3N1ZSwgdHJ1ZSApXG5cdFx0XHQuc2lsZW5jZSggKVxuXHRcdFx0LnByb21wdCggYGNhbm5vdCBpbnZva2Ugc2VuZGluZyBzdGF0ZSwgJHsgdGhpcy5zdGF0ZSB9LCBwcm9wZXJseWAgKVxuXHRcdFx0LnNlbmQoIHByb2NlZHVyZSApO1xuXG5cdFx0dGhpcy5mbHVzaFN0YXRlKCApO1xuXG5cdH1lbHNle1xuXHRcdHRoaXMucmVzZXQoIElzc3VlLCB0cnVlIClcblx0XHRcdC5zaWxlbmNlKCApXG5cdFx0XHQucHJvbXB0KCBcImNhbm5vdCBzZW5kIHByb3Blcmx5XCIgKTtcblx0fVxuXG5cdHJldHVybiB0aGlzO1xufTtcblxuLyo7XG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRTdHJlYW0gZGF0YSB0byBsaXN0ZW5lcnMuXG5cdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5PbGl2YW50LnByb3RvdHlwZS5yZXBvcnQgPSBmdW5jdGlvbiByZXBvcnQoICl7XG5cdGlmKCB0aGlzLmRlcHRoID09IDIgKXtcblx0XHR0aGlzLnJlbWluZCggXCJyZXBvcnRpbmcgaXMgZGlzYWJsZWQgZm9yIGRlcHRoIDJcIiApLnByb21wdCggKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c25hcGQuYmluZCggdGhpcyApXG5cdFx0KCBmdW5jdGlvbiBkZWxheSggKXtcblx0XHRcdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdFx0XHRwcm9jZXNzLmVtaXQoIHRoaXMubmFtZSwgdGhpcyApO1xuXG5cdFx0XHR9ZWxzZSBpZiggYXNlYS5jbGllbnQgKXtcblx0XHRcdFx0bGV0IGV2ZW50ID0gbmV3IEV2ZW50KCB0aGlzLm5hbWUgKTtcblx0XHRcdFx0ZXZlbnQuZGF0YSA9IHRoaXM7XG5cblx0XHRcdFx0ZG9jdW1lbnQuZGlzcGF0Y2hFdmVudCggZXZlbnQgKTtcblx0XHRcdH1cblx0XHR9LCAxMDAwICk7XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKjtcblx0QGludGVybmFsLW1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdENydXNoIHRoZSBwYXJhbWV0ZXIgZXh0cmFjdGluZyBzdHJpbmcgaW5mb3JtYXRpb24uXG5cblx0XHRTcGVjaWFsIHN1cHBvcnQgZm9yIGdsdWNvc2UgY29hdGVkIHBhcmFtZXRlcnMuXG5cdEBlbmQtaW50ZXJuYWwtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5jb25zdCBjcnVzaCA9IGZ1bmN0aW9uIGNydXNoKCBwYXJhbWV0ZXIsIG9wdGlvbiApe1xuXHRvcHRpb24gPSBvcHRpb24gfHwgdGhpcy5pbnNwZWN0IHx8IHsgfTtcblxuXHRsZXQgZGVwdGggPSBvcHRpb24uZGVwdGggfHwgMTtcblx0bGV0IGxlbmd0aCA9IG9wdGlvbi5sZW5ndGggfHwgMjAwO1xuXHRsZXQgc3BhY2UgPSAvXFxzezIsfS9nO1xuXG5cdGlmKCBhc2VhLnNlcnZlciAmJiBwcm90eXBlKCBwYXJhbWV0ZXIsIE9CSkVDVCApICYmIHBhcmFtZXRlci5DT0FURUQgPT09IENPQVRFRCApe1xuXHRcdGlmKCBwYXJhbWV0ZXIuc2VsZiApe1xuXHRcdFx0dGhpcy5zZXQoIENPTlRFWFQsIHBhcmFtZXRlci5zZWxmICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHV0aWwuaW5zcGVjdCggcGFyYW1ldGVyLCB7IFwiZGVwdGhcIjogZGVwdGggfSApXG5cdFx0XHQucmVwbGFjZSggc3BhY2UsIFwiIFwiIClcblx0XHRcdC5zdWJzdHJpbmcoIDAsIGxlbmd0aCApICsgXCIuLi5cIjtcblxuXHR9ZWxzZSBpZiggcGFyYW1ldGVyICYmIGNsYXpvZiggcGFyYW1ldGVyLCBFcnJvciApICYmIHBhcmFtZXRlci5zdGFjayApe1xuXHRcdHRoaXMuZXJyb3IgPSBwYXJhbWV0ZXI7XG5cblx0XHR0aGlzLmdldFRyYWNlKCApO1xuXG5cdFx0cmV0dXJuIHBhcmFtZXRlci5zdGFjay50b1N0cmluZyggKTtcblxuXHR9ZWxzZSBpZiggY2xhem9mKCBwYXJhbWV0ZXIsIE9saXZhbnQgKSApe1xuXHRcdHJldHVybiBwYXJhbWV0ZXIubWVzc2FnZTtcblxuXHR9ZWxzZSBpZiggcHJvdHlwZSggcGFyYW1ldGVyLCBGVU5DVElPTiApICl7XG5cdFx0cmV0dXJuIHBhcmFtZXRlci50b1N0cmluZyggKVxuXHRcdFx0LnJlcGxhY2UoIHNwYWNlLCBcIiBcIiApXG5cdFx0XHQuc3Vic3RyaW5nKCAwLCBsZW5ndGggKSArIFwiLi4uXCI7XG5cblx0fWVsc2UgaWYoIHByb3R5cGUoIHBhcmFtZXRlciwgU1RSSU5HICkgfHxcblx0XHRwcm90eXBlKCBwYXJhbWV0ZXIsIE5VTUJFUiApIHx8XG5cdFx0cHJvdHlwZSggcGFyYW1ldGVyLCBCT09MRUFOICkgKVxuXHR7XG5cdFx0cmV0dXJuIHBhcmFtZXRlci50b1N0cmluZyggKTtcblxuXHR9ZWxzZSBpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRyZXR1cm4gdXRpbC5pbnNwZWN0KCBwYXJhbWV0ZXIsIHsgXCJkZXB0aFwiOiBkZXB0aCB9IClcblx0XHRcdC5yZXBsYWNlKCBzcGFjZSwgXCIgXCIgKVxuXHRcdFx0LnN1YnN0cmluZyggMCwgbGVuZ3RoICkgKyBcIi4uLlwiO1xuXG5cdH1lbHNlIGlmKCBhc2VhLmNsaWVudCApe1xuXHRcdHJldHVybiBwYXJhbWV0ZXIudG9TdHJpbmcoICk7XG5cblx0fWVsc2V7XG5cdFx0cmV0dXJuIHBhcmFtZXRlci50b1N0cmluZyggKTtcblx0fVxufTtcblxuLyo7XG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRBcHBlbmQgbWVzc2FnZXMgdG8gdGhlIGN1cnJlbnQgbWVzc2FnZS5cblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLnJlbWluZCA9IGZ1bmN0aW9uIHJlbWluZCggKXtcblx0bGV0IHBhcmFtZXRlciA9IHJhemUoIGFyZ3VtZW50cyApO1xuXG5cdGlmKCBhcmlkKCBwYXJhbWV0ZXIgKSApe1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0bGV0IHBhcnNlID0gY3J1c2guYmluZCggdGhpcyApO1xuXG5cdHRoaXMubWVzc2FnZSA9IFUyMDBiKCBwYXJhbWV0ZXJcblx0XHQubWFwKCBmdW5jdGlvbiBvbkVhY2hQYXJhbWV0ZXIoIHBhcmFtZXRlciApe1xuXHRcdFx0aWYoIGRvdWJ0KCBwYXJhbWV0ZXIsIEFTX0FSUkFZICkgKXtcblx0XHRcdFx0cGFyYW1ldGVyID0gcmF6ZSggcGFyYW1ldGVyIClcblx0XHRcdFx0XHQubWFwKCAoIHBhcmFtZXRlciApID0+IHsgcmV0dXJuIHBhcnNlKCBwYXJhbWV0ZXIgKSB9ICk7XG5cblx0XHRcdFx0cmV0dXJuIFUyMDBiKCBwYXJhbWV0ZXJcblx0XHRcdFx0XHQuZmlsdGVyKCAoIG1lc3NhZ2UgKSA9PiB7IHJldHVybiB0cnVseSggbWVzc2FnZSApOyB9ICkgKVxuXHRcdFx0XHRcdC5qb2luKCBcIiwgXCIgKTtcblxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHJldHVybiBwYXJzZSggcGFyYW1ldGVyICk7XG5cdFx0XHR9XG5cdFx0fSApXG5cdFx0LnJldmVyc2UoIClcblx0XHQuY29uY2F0KCBbIHRoaXMubWVzc2FnZSBdIClcblx0XHQuZmlsdGVyKCAoIG1lc3NhZ2UgKSA9PiB7IHJldHVybiB0cnVseSggbWVzc2FnZSApOyB9IClcblx0XHQucmV2ZXJzZSggKSApXG5cdFx0LmpvaW4oIFwiLCBcIiApO1xuXG5cdHRoaXMucmVwb3J0KCApO1xuXG5cdHJldHVybiB0aGlzO1xufTtcblxuLyo7XG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRTaWxlbmNlIHRoZSBsb2dnaW5nIGNhcGFiaWxpdGllcy5cblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLnNpbGVuY2UgPSBmdW5jdGlvbiBzaWxlbmNlKCApe1xuXHR0aGlzLnNpbGVudCA9IHRydWU7XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdERlYWN0aXZhdGUgc2lsZW5jZS5cblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLnNob3V0ID0gZnVuY3Rpb24gc2hvdXQoICl7XG5cdHRoaXMuc2lsZW50ID0gZmFsc2U7XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdExvZyB0aGUgZGF0YS5cblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLnByb21wdCA9IGZ1bmN0aW9uIHByb21wdCggKXtcblx0dGhpcy5yZW1pbmQuYXBwbHkoIHRoaXMsIHJhemUoIGFyZ3VtZW50cyApICk7XG5cblx0c25hcGQuYmluZCggdGhpcyApXG5cdFx0KCBmdW5jdGlvbiBkZWxheSggKXtcblx0XHRcdGlmKCB0aGlzLmRlcHRoID09PSAyICl7XG5cdFx0XHRcdHRoaXMubG9nKCB0aGlzLmdldE1lc3NhZ2UoICkgKTtcblxuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblxuXHRcdFx0aWYoIGRvdWJ0KCB0aGlzLnN0YWNrLCBBUlJBWSApICYmIGZpbGxlZCggdGhpcy5zdGFjayApICl7XG5cdFx0XHRcdHRoaXMubG9nKCB0aGlzLmdldE1lc3NhZ2UoICkgKTtcblxuXHRcdFx0fWVsc2UgaWYoIHRoaXMuZGVwdGggPiA1ICl7XG5cdFx0XHRcdHRoaXMuZ2V0VHJhY2UoICggZXJyb3IsIHN0YWNrICkgPT4ge1xuXHRcdFx0XHRcdGlmKCBjbGF6b2YoIGVycm9yLCBFcnJvciApICl7XG5cdFx0XHRcdFx0XHR0aGlzLnJlbWluZCggYGVycm9yIGdldHRpbmcgc3RhY2sgdHJhY2UsICR7IGVycm9yIH1gICk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYoIHRydXUoIHN0YWNrICkgKXtcblx0XHRcdFx0XHRcdHRoaXMuc3RhY2sgPSBzdGFjaztcblxuXHRcdFx0XHRcdFx0dGhpcy5sb2coIHRoaXMuZ2V0TWVzc2FnZSggKSApO1xuXG5cdFx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0XHR0aGlzLmxvZyggdGhpcy5nZXRNZXNzYWdlKCApICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9ICk7XG5cblx0XHRcdH1lbHNle1xuXHRcdFx0XHR0aGlzLmxvZyggdGhpcy5nZXRNZXNzYWdlKCApICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdHJldHVybiB0aGlzO1xufTtcblxuLyo7XG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRTZXQgdGhlIHJlZGlyZWN0aW9uIGNvbmZpZ3VyYXRpb24uXG5cblx0XHRUaGlzIHdpbGwgdHJpZ2dlciByZWRpcmVjdCByZXNwb25zZSB3aGVuIHNlbmQgaXMgY2FsbGVkLlxuXG5cdFx0RGVmYXVsdCBvZiBERUZBVUxUX1JFRElSRUNUX1BBVEggd2lsbCBiZSB1c2VkIGlmIHBhdGggaXMgbm90IGdpdmVuLlxuXHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuT2xpdmFudC5wcm90b3R5cGUucmVkaXJlY3QgPSBmdW5jdGlvbiByZWRpcmVjdCggcGF0aCApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcInBhdGg6cmVxdWlyZWRcIjogXCJzdHJpbmdcIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0dGhpcy5zdGF0ZSA9IFJFRElSRUNUO1xuXHR0aGlzLnBhdGggPSBwYXRoO1xuXG5cdGlmKCBmYWx6eSggdGhpcy5wYXRoICkgJiZcblx0XHR0cnVseSggREVGQVVMVF9SRURJUkVDVF9QQVRIICkgJiZcblx0XHRwcm90eXBlKCBERUZBVUxUX1JFRElSRUNUX1BBVEgsIFNUUklORyApIClcblx0e1xuXHRcdHRoaXMucGF0aCA9IERFRkFVTFRfUkVESVJFQ1RfUEFUSDtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0aWYoICFwcm90eXBlKCB0aGlzLnBhdGgsIFNUUklORyApICl7XG5cdFx0dGhpcy5yZXNldCggSXNzdWUsIHRydWUgKVxuXHRcdFx0LnNpbGVuY2UoIClcblx0XHRcdC5wcm9tcHQoIFwiaW52YWxpZCByZWRpcmVjdCBwYXRoXCIgKTtcblxuXHR9ZWxzZSBpZiggZmFsenkoIHRoaXMucGF0aCApICl7XG5cdFx0dGhpcy5yZXNldCggSXNzdWUsIHRydWUgKVxuXHRcdFx0LnNpbGVuY2UoIClcblx0XHRcdC5wcm9tcHQoIFwiZW1wdHkgcmVkaXJlY3QgcGF0aFwiICk7XG5cdH1cblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbk9saXZhbnQucHJvdG90eXBlLmZsdXNoU3RhdGUgPSBmdW5jdGlvbiBmbHVzaFN0YXRlKCApe1xuXHR0aGlzLnN0YXRlID0gXCJcIjtcblx0dGhpcy5wYXRoID0gXCJcIjtcblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qO1xuXHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0UGFzcyB0aGUgaW5zdGFuY2UgdG8gdGhlIGNhbGxiYWNrIGZpcnN0IHBhcmFtZXRlci5cblxuXHRcdFRoaXMgZm9sbG93cyB0aGUgc3RhbmRhcmQgZXJyb3ItcmVzdWx0LW9wdGlvbiBjb252ZW50aW9uLlxuXG5cdFx0SGFzIHNwZWNpYWwgc3VwcG9ydCBmb3IgZ2x1Y29zZSBjb2F0ZWQgb3B0aW9uLlxuXHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuT2xpdmFudC5wcm90b3R5cGUucGFzcyA9IGZ1bmN0aW9uIHBhc3MoIGNhbGxiYWNrLCByZXN1bHQsIG9wdGlvbiApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcImNhbGxiYWNrOnJlcXVpcmVkXCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0aWYoICFwcm90eXBlKCBjYWxsYmFjaywgRlVOQ1RJT04gKSApe1xuXHRcdHRoaXMucmVzZXQoIEJ1ZywgdHJ1ZSApXG5cdFx0XHQucHJvbXB0KCBcImludmFsaWQgY2FsbGJhY2tcIiApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRpZiggdHJ1dSggb3B0aW9uICkgJiYgdHJ1dSggb3B0aW9uLnNlbGYgKSAmJiBvcHRpb24uQ09BVEVEID09PSBDT0FURUQgKXtcblx0XHR0aGlzLnNldCggQ09OVEVYVCwgb3B0aW9uLnNlbGYgKTtcblx0fVxuXG5cdGlmKCB0aGlzLmNvbnRleHQgKXtcblx0XHRjYWxsYmFjayA9IGNhbGxlZC5iaW5kKCB0aGlzLmNvbnRleHQgKSggY2FsbGJhY2sgKTtcblxuXHR9ZWxzZXtcblx0XHRjYWxsYmFjayA9IGNhbGxlZCggY2FsbGJhY2sgKTtcblx0fVxuXG5cdGNhbGxiYWNrKCB0aGlzLCByZXN1bHQsIG9wdGlvbiApO1xuXG5cdHJldHVybiB0aGlzO1xufTtcblxuaGFyZGVuKCBcImNyZWF0ZVwiLCBmdW5jdGlvbiBjcmVhdGUoIG5hbWUsIG9wdGlvbiApe1xuXHRsZXQgTG9nRW5naW5lID0gZGlhdG9tKCBuYW1lICk7XG5cblx0aGVyZWRpdG8oIExvZ0VuZ2luZSwgT2xpdmFudCApO1xuXG5cdExvZ0VuZ2luZS5wcm90b3R5cGUubmFtZSA9IG9wdGlvbi5uYW1lO1xuXHRMb2dFbmdpbmUucHJvdG90eXBlLnN0YXR1cyA9IG9wdGlvbi5zdGF0dXM7XG5cdExvZ0VuZ2luZS5wcm90b3R5cGUuY29kZSA9IG9wdGlvbi5jb2RlO1xuXHRMb2dFbmdpbmUucHJvdG90eXBlLnNpbGVudCA9IG9wdGlvbi5zaWxlbnQ7XG5cdExvZ0VuZ2luZS5wcm90b3R5cGUuZGVwdGggPSBvcHRpb24uZGVwdGg7XG5cdExvZ0VuZ2luZS5wcm90b3R5cGUuY29sb3IgPSBvcHRpb24uY29sb3I7XG5cdExvZ0VuZ2luZS5wcm90b3R5cGUuaW5zcGVjdCA9IG9wdGlvbi5pbnNwZWN0O1xuXHRMb2dFbmdpbmUucHJvdG90eXBlLmluaXRpYWxpemUgPSBvcHRpb24uaW5pdGlhbGl6ZSB8fFxuXHRcdGZ1bmN0aW9uIGluaXRpYWxpemUoICl7XG5cdFx0XHR0aGlzLm5hbWUgPSBvcHRpb24ubmFtZTtcblxuXHRcdFx0dGhpcy5zdGF0dXMgPSBvcHRpb24uc3RhdHVzO1xuXG5cdFx0XHR0aGlzLmNvZGUgPSBvcHRpb24uY29kZTtcblxuXHRcdFx0dGhpcy5zaWxlbnQgPSBvcHRpb24uc2lsZW50O1xuXG5cdFx0XHR0aGlzLmRlcHRoID0gb3B0aW9uLmRlcHRoO1xuXHRcdH07XG5cblx0c3ltYmlvdGUoIExvZ0VuZ2luZSApO1xuXG5cdGhhcmRlbiggTG9nRW5naW5lLm5hbWUsIExvZ0VuZ2luZSApO1xufSwgT2xpdmFudCApO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9saXZhbnQ7XG4iXX0=
