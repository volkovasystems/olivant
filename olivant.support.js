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
	} else {
		this.reset(Issue, true).silence().prompt("cannot reset to given option", option);
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
			return frame.toString();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9saXZhbnQuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhcmlkIiwicmVxdWlyZSIsImFzZWEiLCJidWRnZSIsImNhbGxlZCIsImNsYXpvZiIsImRpYXRvbSIsImRvdWJ0IiwiRXRoZXJuaXR5IiwiZmFsemUiLCJmYWx6eSIsImZpbGxlZCIsImdsdWNvc2UiLCJoYXJkZW4iLCJoZXJlZGl0byIsImtlaW4iLCJtZWVrIiwib3V0cmUiLCJwbG91Z2giLCJwcm90eXBlIiwicmF6ZSIsInNuYXBkIiwic3ltYmlvdGUiLCJ0cnVseSIsInRydXUiLCJVMjAwYiIsInRyYWNlIiwid2luZG93IiwiREVGQVVMVF9SRURJUkVDVF9QQVRIIiwiT2xpdmFudCIsIkRFRkFVTFRfSU5TUEVDVF9PUFRJT04iLCJERUZBVUxUX0xPR19FTkdJTkUiLCJjbGllbnQiLCJjb25zb2xlIiwiZGVidWciLCJsb2ciLCJwcm90b3R5cGUiLCJpbml0aWFsaXplIiwib3B0aW9uIiwiZHVyYXRpb24iLCJEYXRlIiwibm93IiwiYXJndW1lbnRzIiwiT0JKRUNUIiwiQVJHVU1FTlRTIiwiRXJyb3IiLCJDT0FURUQiLCJsb2FkIiwicGFyYW1ldGVyIiwibGVuZ3RoIiwiZXJyb3IiLCJyZW1pbmQiLCJhcHBseSIsIm1lc3NhZ2UiLCJjb25jYXQiLCJTVFJJTkciLCJjb25zdHJ1Y3RvciIsIkZVTkNUSU9OIiwibmFtZSIsImJpbmQiLCJFQ0hPIiwic3RhdHVzIiwiY29kZSIsIkVDSE9fQ09ERSIsImNvbnRleHQiLCJzZWxmIiwic2lsZW50IiwiQk9PTEVBTiIsImRlcHRoIiwiTlVNQkVSIiwic2VydmVyIiwiY29sb3IiLCJjaGFsayIsIndoaXRlIiwic3RhdGUiLCJzdGFjayIsImluc3BlY3QiLCJyZWRzZWEiLCJJc3N1ZSIsImJsYWNrc2VhIiwiRmF0YWwiLCJyZXNldCIsInJlbmV3IiwibG9nRW5naW5lIiwiZGF0YSIsInNpbGVuY2UiLCJwcm9tcHQiLCJ0b1N0cmluZyIsImpvaW4iLCJ2YWx1ZU9mIiwiZ2V0VGltZXN0YW1wIiwidGltZXN0YW1wIiwicHJpbnRUaW1lIiwiZGltIiwiY29sb3JNZXNzYWdlIiwicmVzb2x2ZU1lc3NhZ2UiLCJmaWx0ZXIiLCJyZXNvbHZlVHJhY2UiLCJBUlJBWSIsIm1hcCIsImZyYW1lIiwicmVkIiwiZ2V0TWVzc2FnZSIsImdldFRyYWNlIiwiY2FsbGJhY2siLCJmcm9tRXJyb3IiLCJ0aGVuIiwiZnJhbWVMaXN0IiwiY2F0Y2giLCJnZXQiLCJwYXJzZSIsInNldCIsInByb3BlcnR5IiwidmFsdWUiLCJMT0ciLCJTSUxFTlQiLCJDT05URVhUIiwic2VuZCIsInJhdyIsInByb2NlZHVyZSIsIlJFRElSRUNUIiwicGF0aCIsImh0dHAiLCJTZXJ2ZXJSZXNwb25zZSIsInNlZ3dheSIsImZsdXNoU3RhdGUiLCJyZXBvcnQiLCJkZWxheSIsInByb2Nlc3MiLCJlbWl0IiwiZXZlbnQiLCJFdmVudCIsImRvY3VtZW50IiwiZGlzcGF0Y2hFdmVudCIsImNydXNoIiwic3BhY2UiLCJ1dGlsIiwicmVwbGFjZSIsInN1YnN0cmluZyIsIm9uRWFjaFBhcmFtZXRlciIsIkFTX0FSUkFZIiwicmV2ZXJzZSIsInNob3V0IiwicmVkaXJlY3QiLCJwYXNzIiwicmVzdWx0IiwiQnVnIiwiY3JlYXRlIiwiTG9nRW5naW5lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0ZBLElBQU1BLE9BQU9DLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTUMsT0FBT0QsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNRSxRQUFRRixRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1HLFNBQVNILFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUksU0FBU0osUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNSyxTQUFTTCxRQUFTLFFBQVQsQ0FB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NkJ2QixPQUFPdUIsTUFBcEM7QUFDQXVGLFdBQVVoSCxTQUFWLENBQW9CMEIsSUFBcEIsR0FBMkJ4QixPQUFPd0IsSUFBbEM7QUFDQXNGLFdBQVVoSCxTQUFWLENBQW9COEIsTUFBcEIsR0FBNkI1QixPQUFPNEIsTUFBcEM7QUFDQWtGLFdBQVVoSCxTQUFWLENBQW9CZ0MsS0FBcEIsR0FBNEI5QixPQUFPOEIsS0FBbkM7QUFDQWdGLFdBQVVoSCxTQUFWLENBQW9CbUMsS0FBcEIsR0FBNEJqQyxPQUFPaUMsS0FBbkM7QUFDQTZFLFdBQVVoSCxTQUFWLENBQW9Cd0MsT0FBcEIsR0FBOEJ0QyxPQUFPc0MsT0FBckM7QUFDQXdFLFdBQVVoSCxTQUFWLENBQW9CQyxVQUFwQixHQUFpQ0MsT0FBT0QsVUFBUCxJQUNoQyxTQUFTQSxVQUFULEdBQXNCO0FBQ3JCLE9BQUtxQixJQUFMLEdBQVlwQixPQUFPb0IsSUFBbkI7O0FBRUEsT0FBS0csTUFBTCxHQUFjdkIsT0FBT3VCLE1BQXJCOztBQUVBLE9BQUtDLElBQUwsR0FBWXhCLE9BQU93QixJQUFuQjs7QUFFQSxPQUFLSSxNQUFMLEdBQWM1QixPQUFPNEIsTUFBckI7O0FBRUEsT0FBS0UsS0FBTCxHQUFhOUIsT0FBTzhCLEtBQXBCO0FBQ0EsRUFYRjs7QUFhQTlDLFVBQVU4SCxTQUFWOztBQUVBdkksUUFBUXVJLFVBQVUxRixJQUFsQixFQUF3QjBGLFNBQXhCO0FBQ0EsQ0E1QkQsRUE0Qkd2SCxPQTVCSDs7QUE4QkF3SCxPQUFPQyxPQUFQLEdBQWlCekgsT0FBakIiLCJmaWxlIjoib2xpdmFudC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJvbGl2YW50XCIsXG5cdFx0XHRcInBhdGhcIjogXCJvbGl2YW50L29saXZhbnQuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcIm9saXZhbnQuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwib2xpdmFudFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL29saXZhbnQuZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJvbGl2YW50LXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWUsXG5cdFx0XHRcImNsYXNzXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0RWNobyB0aGUgZGVzdHJ1Y3Rpb24gY2F1c2VkIGJ5IHlvdXIgY29kZS5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXJpZFwiOiBcImFyaWRcIixcblx0XHRcdFwiYXNlYVwiOiBcImFzZWFcIixcblx0XHRcdFwiYnVkZ2VcIjogXCJidWRnZVwiLFxuXHRcdFx0XCJibGFja3NlYVwiOiBcImJsYWNrc2VhXCIsXG5cdFx0XHRcImNhbGxlZFwiOiBcImNhbGxlZFwiLFxuXHRcdFx0XCJjaGFsa1wiOiBcImNoYWxrXCIsXG5cdFx0XHRcImNsYXpvZlwiOiBcImNsYXpvZlwiLFxuXHRcdFx0XCJkZXhpc3RcIjogXCJkZXhpc3RcIixcblx0XHRcdFwiZGlhdG9tXCI6IFwiZGlhdG9tXCIsXG5cdFx0XHRcIkV0aGVybml0eVwiOiBcImV0aGVybml0eVwiLFxuXHRcdFx0XCJFdmVudEVtaXR0ZXJcIjogXCJldmVudHNcIixcblx0XHRcdFwiZmFsemVcIjogXCJmYWx6ZVwiLFxuXHRcdFx0XCJmYWx6eVwiOiBcImZhbHp5XCIsXG5cdFx0XHRcImdsdWNvc2VcIjogXCJnbHVjb3NlXCIsXG5cdFx0XHRcImhhcmRlblwiOiBcImhhcmRlblwiLFxuXHRcdFx0XCJoZXJlZGl0b1wiOiBcImhlcmVkaXRvXCIsXG5cdFx0XHRcImtlaW5cIjogXCJrZWluXCIsXG5cdFx0XHRcImh0dHBcIjogXCJodHRwXCIsXG5cdFx0XHRcIm1lZWtcIjogXCJtZWVrXCJcblx0XHRcdFwib3V0cmVcIjogXCJvdXRyZVwiLFxuXHRcdFx0XCJwbG91Z2hcIjogXCJwbG91Z2hcIixcblx0XHRcdFwicHJvdHlwZVwiOiBcInByb3R5cGVcIixcblx0XHRcdFwicmF6ZVwiOiBcInJhemVcIixcblx0XHRcdFwicmVkc2VhXCI6IFwicmVkc2VhXCIsXG5cdFx0XHRcInNuYXBkXCI6IFwic25hcGRcIixcblx0XHRcdFwic2Vnd2F5XCI6IFwic2Vnd2F5XCIsXG5cdFx0XHRcInN5bWJpb3RlXCI6IFwic3ltYmlvdGVcIixcblx0XHRcdFwidHJhY2VcIjogWyBcInN0YWNrdHJhY2UtanNcIiwgXCJzdGFjay10cmFjZVwiIF0sXG5cdFx0XHRcInRydWx5XCI6IFwidHJ1bHlcIixcblx0XHRcdFwidHJ1dVwiOiBcInRydXVcIixcblx0XHRcdFwiVTIwMGJcIjogXCJ1MjAwYlwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFyaWQgPSByZXF1aXJlKCBcImFyaWRcIiApO1xuY29uc3QgYXNlYSA9IHJlcXVpcmUoIFwiYXNlYVwiICk7XG5jb25zdCBidWRnZSA9IHJlcXVpcmUoIFwiYnVkZ2VcIiApO1xuY29uc3QgY2FsbGVkID0gcmVxdWlyZSggXCJjYWxsZWRcIiApO1xuY29uc3QgY2xhem9mID0gcmVxdWlyZSggXCJjbGF6b2ZcIiApO1xuY29uc3QgZGlhdG9tID0gcmVxdWlyZSggXCJkaWF0b21cIiApO1xuY29uc3QgZG91YnQgPSByZXF1aXJlKCBcImRvdWJ0XCIgKTtcbmNvbnN0IEV0aGVybml0eSA9IHJlcXVpcmUoIFwiZXRoZXJuaXR5XCIgKTtcbmNvbnN0IGZhbHplID0gcmVxdWlyZSggXCJmYWx6ZVwiICk7XG5jb25zdCBmYWx6eSA9IHJlcXVpcmUoIFwiZmFsenlcIiApO1xuY29uc3QgZmlsbGVkID0gcmVxdWlyZSggXCJmaWxsZWRcIiApO1xuY29uc3QgZ2x1Y29zZSA9IHJlcXVpcmUoIFwiZ2x1Y29zZVwiICk7XG5jb25zdCBoYXJkZW4gPSByZXF1aXJlKCBcImhhcmRlblwiICk7XG5jb25zdCBoZXJlZGl0byA9IHJlcXVpcmUoIFwiaGVyZWRpdG9cIiApO1xuY29uc3Qga2VpbiA9IHJlcXVpcmUoIFwia2VpblwiICk7XG5jb25zdCBtZWVrID0gcmVxdWlyZSggXCJtZWVrXCIgKTtcbmNvbnN0IG91dHJlID0gcmVxdWlyZSggXCJvdXRyZVwiICk7XG5jb25zdCBwbG91Z2ggPSByZXF1aXJlKCBcInBsb3VnaFwiICk7XG5jb25zdCBwcm90eXBlID0gcmVxdWlyZSggXCJwcm90eXBlXCIgKTtcbmNvbnN0IHJhemUgPSByZXF1aXJlKCBcInJhemVcIiApO1xuY29uc3Qgc25hcGQgPSByZXF1aXJlKCBcInNuYXBkXCIgKTtcbmNvbnN0IHN5bWJpb3RlID0gcmVxdWlyZSggXCJzeW1iaW90ZVwiICk7XG5jb25zdCB0cnVseSA9IHJlcXVpcmUoIFwidHJ1bHlcIiApO1xuY29uc3QgdHJ1dSA9IHJlcXVpcmUoIFwidHJ1dVwiICk7XG5jb25zdCBVMjAwYiA9IHJlcXVpcmUoIFwidTIwMGJcIiApO1xuXG4vLzogQGNsaWVudDpcbmNvbnN0IHRyYWNlID0gcmVxdWlyZSggXCJzdGFja3RyYWNlLWpzXCIgKTtcbmhhcmRlbiggXCJERUZBVUxUX1JFRElSRUNUX1BBVEhcIiwgd2luZG93LkRFRkFVTFRfUkVESVJFQ1RfUEFUSCB8fCBcIi92aWV3L3N0YXR1cy9wYWdlXCIgKTtcbi8vOiBAZW5kLWNsaWVudFxuXG5cblxuY29uc3QgT2xpdmFudCA9IGRpYXRvbSggXCJPbGl2YW50XCIgKTtcblxuY29uc3QgREVGQVVMVF9JTlNQRUNUX09QVElPTiA9IHsgXCJkZXB0aFwiOiAxLCBcImxlbmd0aFwiOiAyMDAgfTtcbmNvbnN0IERFRkFVTFRfTE9HX0VOR0lORSA9IGFzZWEuY2xpZW50PyBjb25zb2xlLmRlYnVnIDogY29uc29sZS5sb2c7XG5cbi8qO1xuXHRAbm90ZTpcblx0XHRUaGlzIGlzIHRoZSBkZWZhdWx0IG5hbWUvc3RhdHVzIGFuZCBjb2RlIG9mIHRoZSBvbGl2YW50LlxuXHRAZW5kLW5vdGVcbiovXG5oYXJkZW4oIFwiRUNIT1wiLCBcImVjaG9cIiApO1xuaGFyZGVuKCBcIkVDSE9fQ09ERVwiLCAyMDAgKTtcblxuaGFyZGVuKCBcIlJFRElSRUNUXCIsIFwicmVkaXJlY3RcIiApO1xuaGFyZGVuKCBcIkNPTlRFWFRcIiwgXCJjb250ZXh0XCIgKTtcbmhhcmRlbiggXCJMT0dcIiwgXCJsb2dcIiApO1xuaGFyZGVuKCBcIlNJTEVOVFwiLCBcInNpbGVudFwiICk7XG5cbi8qO1xuXHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0T3B0aW9uIHNob3VsZCBub3QgYmUgZ2x1Y29zZSBjb2F0ZWQuXG5cdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5PbGl2YW50LnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gaW5pdGlhbGl6ZSggb3B0aW9uICl7XG5cdHRoaXMuZHVyYXRpb24gPSBEYXRlLm5vdyggKTtcblxuXHRpZiggcHJvdHlwZSggYXJndW1lbnRzWyAwIF0sIE9CSkVDVCApICYmXG5cdFx0IWRvdWJ0KCBhcmd1bWVudHNbIDAgXSwgQVJHVU1FTlRTICkgJiZcblx0XHQhKCBjbGF6b2YoIGFyZ3VtZW50c1sgMCBdLCBFcnJvciApICkgJiZcblx0XHRvcHRpb24uQ09BVEVEICE9PSBDT0FURUQgKVxuXHR7XG5cdFx0dGhpcy5sb2FkKCBvcHRpb24gKTtcblxuXHR9ZWxzZXtcblx0XHR0aGlzLmxvYWQoICk7XG5cdH1cblxuXHRsZXQgcGFyYW1ldGVyID0gYXJndW1lbnRzWyAwIF07XG5cblx0aWYoIGFyZ3VtZW50cy5sZW5ndGggPT0gMCApe1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH1lbHNlIGlmKCBjbGF6b2YoIHBhcmFtZXRlciwgRXJyb3IgKSApe1xuXHRcdGxldCBlcnJvciA9IHBhcmFtZXRlcjtcblxuXHRcdHRoaXMucmVtaW5kLmFwcGx5KCB0aGlzLCBbIGVycm9yLm1lc3NhZ2UsIGVycm9yIF0uY29uY2F0KCBidWRnZSggYXJndW1lbnRzICkgKSApO1xuXG5cdH1lbHNlIGlmKCBjbGF6b2YoIHBhcmFtZXRlciwgT2xpdmFudCApICl7XG5cdFx0dGhpcy5sb2FkKCBwYXJhbWV0ZXIgKTtcblxuXHR9ZWxzZSBpZiggZG91YnQoIHBhcmFtZXRlciwgQVJHVU1FTlRTICkgKXtcblx0XHR0aGlzLnJlbWluZC5hcHBseSggdGhpcywgcGxvdWdoKCBwYXJhbWV0ZXIgKSApO1xuXG5cdH1lbHNlIGlmKCBwcm90eXBlKCBwYXJhbWV0ZXIsIFNUUklORyApICl7XG5cdFx0dGhpcy5yZW1pbmQuYXBwbHkoIHRoaXMsIHJhemUoIGFyZ3VtZW50cyApICk7XG5cblx0fWVsc2UgaWYoIHByb3R5cGUoIHBhcmFtZXRlciwgT0JKRUNUICkgJiZcblx0XHRwYXJhbWV0ZXIuY29uc3RydWN0b3IgJiZcblx0XHRwcm90eXBlKCBwYXJhbWV0ZXIuY29uc3RydWN0b3IsIEZVTkNUSU9OICkgJiZcblx0XHRwYXJhbWV0ZXIuY29uc3RydWN0b3IubmFtZSAhPSBcIkZ1bmN0aW9uXCIgJiZcblx0XHRjbGF6b2YoIHBhcmFtZXRlciwgcGFyYW1ldGVyLmNvbnN0cnVjdG9yICkgKVxuXHR7XG5cdFx0dGhpcy5sb2FkKCBwYXJhbWV0ZXIgKTtcblxuXHRcdHRoaXMucmVtaW5kLmFwcGx5KCB0aGlzLCByYXplKCBhcmd1bWVudHMgKSApO1xuXG5cdH1lbHNlIGlmKCBwcm90eXBlKCBwYXJhbWV0ZXIsIE9CSkVDVCApICl7XG5cdFx0dGhpcy5yZW1pbmQuYXBwbHkoIHRoaXMsIHJhemUoIGFyZ3VtZW50cyApICk7XG5cdH1cblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbk9saXZhbnQucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbiBsb2FkKCBvcHRpb24gKXtcblx0b3B0aW9uID0gZ2x1Y29zZS5iaW5kKCB0aGlzICkoIG9wdGlvbiApO1xuXG5cdHRoaXMubmFtZSA9IG9wdGlvbi5uYW1lIHx8IHRoaXMubmFtZSB8fCBFQ0hPXG5cblx0dGhpcy5zdGF0dXMgPSBvcHRpb24uc3RhdHVzIHx8IHRoaXMuc3RhdHVzIHx8IEVDSE87XG5cblx0dGhpcy5jb2RlID0gb3B0aW9uLmNvZGUgfHwgdGhpcy5jb2RlIHx8IEVDSE9fQ09ERTtcblxuXHR0aGlzLmxvZyA9IG9wdGlvbi5sb2cgfHwgdGhpcy5sb2cgfHwgREVGQVVMVF9MT0dfRU5HSU5FO1xuXG5cdGlmKCBmYWx6ZSggdGhpcy5jb250ZXh0ICkgJiYgdHJ1dSggb3B0aW9uLnNlbGYgKSApe1xuXHRcdHRoaXMuY29udGV4dCA9IG9wdGlvbi5zZWxmO1xuXHR9XG5cblx0dGhpcy5zaWxlbnQgPSBrZWluKCBvcHRpb24sIFwic2lsZW50XCIgKT8gb3B0aW9uLnNpbGVudCA6XG5cdFx0a2VpbiggdGhpcywgXCJzaWxlbnRcIiApPyB0aGlzLnNpbGVudCA6IHRydWU7XG5cblx0aWYoICFwcm90eXBlKCB0aGlzLnNpbGVudCwgQk9PTEVBTiApICl7XG5cdFx0dGhpcy5zaWxlbnQgPSB0cnVlO1xuXHR9XG5cblx0Ly86IERlcHRoIGRpY3RhdGVzIHJlZmluZWQgc2V0dGluZ3Mgb2YgdGhpcyBwcm9jZWR1cmUuXG5cdHRoaXMuZGVwdGggPSBrZWluKCBvcHRpb24sIFwiZGVwdGhcIiApPyBvcHRpb24uZGVwdGggOlxuXHRcdGtlaW4oIHRoaXMsIFwiZGVwdGhcIiApPyB0aGlzLmRlcHRoIDogMTtcblxuXHRpZiggIXByb3R5cGUoIHRoaXMuZGVwdGgsIE5VTUJFUiApICl7XG5cdFx0dGhpcy5kZXB0aCA9IDE7XG5cdH1cblxuXHQvLzogRGVwdGggaXMgb25seSBmcm9tIDEtMCBvciAxLTIzNDUtNjc4OS0wLlxuXHQvLzogRGVwdGggMiBpcyBkZWVwIHNpbGVudCBkZXB0aC5cblx0dGhpcy5kZXB0aCA9IHRoaXMuZGVwdGggJSAxMDtcblxuXHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHR0aGlzLmNvbG9yID0gb3B0aW9uLmNvbG9yIHx8IHRoaXMuY29sb3IgfHwgY2hhbGsud2hpdGU7XG5cdH1cblxuXHR0aGlzLnN0YXRlID0gXCJcIjtcblxuXHR0aGlzLnN0YWNrID0gb3B0aW9uLnN0YWNrIHx8IHRoaXMuc3RhY2sgfHwgWyBdO1xuXG5cdHRoaXMubWVzc2FnZSA9IG9wdGlvbi5tZXNzYWdlIHx8IHRoaXMubWVzc2FnZSB8fCBcIlwiO1xuXG5cdHRoaXMuaW5zcGVjdCA9IG9wdGlvbi5pbnNwZWN0IHx8IHRoaXMuaW5zcGVjdCB8fCBERUZBVUxUX0lOU1BFQ1RfT1BUSU9OO1xuXG5cdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdHJlZHNlYSggSXNzdWUgKTtcblxuXHRcdGJsYWNrc2VhKCBGYXRhbCApO1xuXHR9XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdE1vZGlmaWVzIHRoZSBsb2cgZW5naW5lIHdoaWxlIG1haW50YWluaW5nIGVudmlyb25tZW50IHByb3BlcnRpZXMuXG5cdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5PbGl2YW50LnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uIHJlc2V0KCBvcHRpb24sIHJlbmV3ICl7XG5cdGlmKCBwcm90eXBlKCBvcHRpb24sIEZVTkNUSU9OICkgJiYgY2xhem9mKCBvcHRpb24sIE9saXZhbnQgKSApe1xuXHRcdGxldCBsb2dFbmdpbmUgPSBvcHRpb247XG5cblx0XHRpZiggcHJvdHlwZSggcmVuZXcsIEJPT0xFQU4gKSAmJiByZW5ldyApe1xuXHRcdFx0bGV0IGRhdGEgPSB7XG5cdFx0XHRcdFwibWVzc2FnZVwiOiB0aGlzLm1lc3NhZ2UsXG5cdFx0XHRcdFwic3RhY2tcIjogdGhpcy5zdGFja1xuXHRcdFx0fTtcblxuXHRcdFx0cmV0dXJuIGxvZ0VuZ2luZSggZGF0YSApO1xuXG5cdFx0fWVsc2V7XG5cdFx0XHR0aGlzLmxvYWQoIGxvZ0VuZ2luZS5wcm90b3R5cGUgKTtcblx0XHR9XG5cblx0fWVsc2UgaWYoIHByb3R5cGUoIG9wdGlvbiwgT0JKRUNUICkgKXtcblx0XHR0aGlzLmxvYWQoIG9wdGlvbiApO1xuXG5cdH1lbHNle1xuXHRcdHRoaXMucmVzZXQoIElzc3VlLCB0cnVlIClcblx0XHRcdC5zaWxlbmNlKCApXG5cdFx0XHQucHJvbXB0KCBcImNhbm5vdCByZXNldCB0byBnaXZlbiBvcHRpb25cIiwgb3B0aW9uICk7XG5cdH1cblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbk9saXZhbnQucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoICl7XG5cdHJldHVybiBVMjAwYiggb3V0cmUoIFsgdGhpcy5uYW1lLCB0aGlzLnN0YXR1cywgdGhpcy5tZXNzYWdlIF0gKSApLmpvaW4oIFwiLCBcIiApO1xufTtcblxuT2xpdmFudC5wcm90b3R5cGUudmFsdWVPZiA9IGZ1bmN0aW9uIHZhbHVlT2YoICl7XG5cdHJldHVybiBVMjAwYiggb3V0cmUoIFsgdGhpcy5uYW1lLCB0aGlzLnN0YXR1cywgdGhpcy5tZXNzYWdlIF0gKSApLmpvaW4oIFwiLCBcIiApO1xufTtcblxuT2xpdmFudC5wcm90b3R5cGUuZ2V0VGltZXN0YW1wID0gZnVuY3Rpb24gZ2V0VGltZXN0YW1wKCApe1xuXHRsZXQgdGltZXN0YW1wID0gRXRoZXJuaXR5KCApLnByaW50VGltZSggdHJ1ZSApO1xuXG5cdHRpbWVzdGFtcCA9IGAkeyB0aW1lc3RhbXAgfSB8ICR7ICggRGF0ZS5ub3coICkgLSB0aGlzLmR1cmF0aW9uICkgfW1zYDtcblxuXHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRyZXR1cm4gY2hhbGsuZGltKCB0aW1lc3RhbXAgKTtcblx0fVxuXG5cdHJldHVybiB0aW1lc3RhbXA7XG59O1xuXG5PbGl2YW50LnByb3RvdHlwZS5jb2xvck1lc3NhZ2UgPSBmdW5jdGlvbiBjb2xvck1lc3NhZ2UoIGNvbG9yLCBtZXNzYWdlICl7XG5cdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdGlmKCBwcm90eXBlKCBjb2xvciwgRlVOQ1RJT04gKSApe1xuXHRcdFx0cmV0dXJuIGNvbG9yKCBtZXNzYWdlICk7XG5cblx0XHR9ZWxzZSBpZiggcHJvdHlwZSggY29sb3IsIFNUUklORyApICYmIHRydWx5KCBjb2xvciApICl7XG5cdFx0XHRpZigga2VpbiggY2hhbGssIGNvbG9yICkgJiYgcHJvdHlwZSggY2hhbGtbIGNvbG9yIF0sIEZVTkNUSU9OICkgKXtcblx0XHRcdFx0cmV0dXJuIGNoYWxrWyBjb2xvciBdKCBtZXNzYWdlICk7XG5cblx0XHRcdH1lbHNle1xuXHRcdFx0XHR0aGlzLnJlbWluZCggYGludmFsaWQgbWVzc2FnZSBjb2xvciwgJHsgY29sb3IgfWAgKTtcblxuXHRcdFx0XHRyZXR1cm4gY2hhbGsud2hpdGUoIG1lc3NhZ2UgKTtcblx0XHRcdH1cblxuXHRcdH1lbHNle1xuXHRcdFx0cmV0dXJuIGNoYWxrLndoaXRlKCBtZXNzYWdlICk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIG1lc3NhZ2U7XG59O1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFRoZSBtZXNzYWdlIGlzIGRpdmlkZWQgaW50byB0aHJlZSBwYXJ0cyxcblx0XHQxLiBuYW1lc3BhY2UsXG5cdFx0Mi4gc3RhdHVzLFxuXHRcdDMuIGFjdHVhbCBtZXNzYWdlXG5cdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5PbGl2YW50LnByb3RvdHlwZS5yZXNvbHZlTWVzc2FnZSA9IGZ1bmN0aW9uIHJlc29sdmVNZXNzYWdlKCApe1xuXHRsZXQgbWVzc2FnZSA9IFUyMDBiKCBvdXRyZSggWyB0aGlzLm5hbWUsIHRoaXMuc3RhdHVzLCB0aGlzLm1lc3NhZ2UgXSApXG5cdFx0LmZpbHRlciggdHJ1bHkgKSApLmpvaW4oIFwiLCBcIiApO1xuXG5cdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdHJldHVybiB0aGlzLmNvbG9yTWVzc2FnZSggdGhpcy5jb2xvciwgbWVzc2FnZSApO1xuXHR9XG5cblx0cmV0dXJuIG1lc3NhZ2U7XG59O1xuXG5PbGl2YW50LnByb3RvdHlwZS5yZXNvbHZlVHJhY2UgPSBmdW5jdGlvbiByZXNvbHZlVHJhY2UoICl7XG5cdGxldCBzdGFjayA9IFwic3RhY2sgdHJhY2Ugbm90IGF2YWlsYWJsZVwiO1xuXG5cdGlmKCAhdGhpcy5zaWxlbnQgJiYgZG91YnQoIHRoaXMuc3RhY2ssIEFSUkFZICkgJiYgZmlsbGVkKCB0aGlzLnN0YWNrICkgKXtcblx0XHRzdGFjayA9IHRoaXMuc3RhY2s7XG5cblx0XHRzdGFjayA9IHN0YWNrLm1hcCggKCBmcmFtZSApID0+IHsgcmV0dXJuIGZyYW1lLnRvU3RyaW5nKCApOyB9ICk7XG5cblx0XHRzdGFjayA9IFUyMDBiKCBzdGFjayApLmpvaW4oIFwiXFxuXCIgKTtcblxuXHRcdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdFx0cmV0dXJuIGNoYWxrLmRpbS5yZWQoIHN0YWNrICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHN0YWNrO1xuXHR9XG5cblx0aWYoIHRoaXMuZGVwdGggPCA1ICYmXG5cdFx0dGhpcy5zaWxlbnQgJiZcblx0XHR0cnV1KCB0aGlzLmNvbnRleHQgKSAmJlxuXHQgXHRwcm90eXBlKCB0aGlzLmNvbnRleHQuY29uc3RydWN0b3IsIEZVTkNUSU9OICkgJiZcblx0XHR0cnVseSggdGhpcy5jb250ZXh0LmNvbnN0cnVjdG9yLm5hbWUgKSApXG5cdHtcblx0XHRzdGFjayA9IGBjYWxsZWQgd2l0aCBjb250ZXh0LCAkeyB0aGlzLmNvbnRleHQuY29uc3RydWN0b3IubmFtZSB9YDtcblxuXHRcdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdFx0cmV0dXJuIGNoYWxrLmRpbSggc3RhY2sgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc3RhY2s7XG5cdH1cblxuXHRpZiggdGhpcy5zaWxlbnQgKXtcblx0XHRzdGFjayA9IFwic3RhY2sgdHJhY2UgaXMgbm90IGF2YWlsYWJsZSBvbiBzaWxlbnQgbW9kZVwiO1xuXG5cdFx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0XHRyZXR1cm4gY2hhbGsuZGltKCBzdGFjayApO1xuXHRcdH1cblxuXHRcdHJldHVybiBzdGFjaztcblx0fVxuXG5cdGlmKCB0aGlzLmRlcHRoID4gNSApe1xuXHRcdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdFx0cmV0dXJuIGNoYWxrLmRpbSggc3RhY2sgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc3RhY2s7XG5cdH1cbn07XG5cbi8qO1xuXHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0VGhlIG1lc3NhZ2UgY29uc2lzdCBvZiB0aHJlZSBsYXllciBvZiBzdHJpbmdzLFxuXHRcdFx0MS4gdGltZXN0YW1wIGluIHRydWUgdGltZSBmb3JtYXRcblx0XHRcdDIuIGFjdHVhbCByZWFkYWJsZSBtZXNzYWdlXG5cdFx0XHQzLiBtZXNzYWdlIHRyYWNlIG9yIG1lc3NhZ2UgY29udGV4dFxuXG5cdFx0VGhlc2UgaW5mb3JtYXRpb24gd2lsbCBiZSBkaXZpZGVkIHRocm91Z2ggemVyby13aWR0aCBzcGFjZSBjb252ZW50aW9uLlxuXHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuT2xpdmFudC5wcm90b3R5cGUuZ2V0TWVzc2FnZSA9IGZ1bmN0aW9uIGdldE1lc3NhZ2UoICl7XG5cdHJldHVybiBVMjAwYiggW1xuXHRcdHRoaXMuZ2V0VGltZXN0YW1wKCApLFxuXHRcdHRoaXMucmVzb2x2ZU1lc3NhZ2UoICksXG5cdFx0dGhpcy5yZXNvbHZlVHJhY2UoIClcblx0XSApLmpvaW4oIFwiXFxuXCIgKTtcbn07XG5cbi8qO1xuXHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0VGhpcyBzaG91bGQgYmUgdXNlZCBpbnRlcm5hbGx5IGFzIG11Y2ggYXMgcG9zc2libGUuXG5cdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5PbGl2YW50LnByb3RvdHlwZS5nZXRUcmFjZSA9IGZ1bmN0aW9uIGdldFRyYWNlKCBjYWxsYmFjayApe1xuXHRpZiggdGhpcy5kZXB0aCA9PSAyICl7XG5cdFx0dGhpcy5yZW1pbmQoIFwidHJhY2luZyBpcyBkaXNhYmxlZCBmb3IgZGVwdGggMlwiICkucHJvbXB0KCApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRjYWxsYmFjayA9IGNhbGxlZC5iaW5kKCB0aGlzICkoIGNhbGxiYWNrICk7XG5cblx0c25hcGQuYmluZCggdGhpcyApKCBjYWxsYmFjaywgMTAwMCApO1xuXG5cdGlmKCBhc2VhLmNsaWVudCApe1xuXHRcdGlmKCBjbGF6b2YoIHRoaXMuZXJyb3IsIEVycm9yICkgKXtcblx0XHRcdHRyYWNlLmZyb21FcnJvciggdGhpcy5lcnJvciApXG5cdFx0XHRcdC50aGVuKCAoIGZyYW1lTGlzdCApID0+IHtcblx0XHRcdFx0XHR0aGlzLnN0YWNrID0gZnJhbWVMaXN0O1xuXG5cdFx0XHRcdFx0Y2FsbGJhY2soIG51bGwsIHRoaXMuc3RhY2sgKTtcblx0XHRcdFx0fSApXG5cdFx0XHRcdC5jYXRjaCggKCBlcnJvciApID0+IHsgY2FsbGJhY2soIHRoaXMucmVtaW5kKCBlcnJvciApICk7IH0gKTtcblxuXHRcdH1lbHNlIGlmKCB0aGlzLmRlcHRoID4gNSApe1xuXHRcdFx0dHJhY2UuZ2V0KCApXG5cdFx0XHRcdC50aGVuKCAoIGZyYW1lTGlzdCApID0+IHtcblx0XHRcdFx0XHR0aGlzLnN0YWNrID0gZnJhbWVMaXN0O1xuXG5cdFx0XHRcdFx0Y2FsbGJhY2soIG51bGwsIHRoaXMuc3RhY2sgKTtcblx0XHRcdFx0fSApXG5cdFx0XHRcdC5jYXRjaCggKCBlcnJvciApID0+IHsgY2FsbGJhY2soIHRoaXMucmVtaW5kKCBlcnJvciApICk7IH0gKTtcblx0XHR9XG5cblx0fWVsc2UgaWYoIGFzZWEuc2VydmVyICl7XG5cdFx0aWYoIGNsYXpvZiggdGhpcy5lcnJvciwgRXJyb3IgKSApe1xuXHRcdFx0dGhpcy5zdGFjayA9IHRyYWNlLnBhcnNlKCB0aGlzLmVycm9yICk7XG5cblx0XHRcdGNhbGxiYWNrKCBudWxsLCB0aGlzLnN0YWNrICk7XG5cblx0XHR9ZWxzZSBpZiggdGhpcy5kZXB0aCA+IDUgKXtcblx0XHRcdHRoaXMuc3RhY2sgPSB0cmFjZS5nZXQoICk7XG5cblx0XHRcdGNhbGxiYWNrKCBudWxsLCB0aGlzLnN0YWNrICk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFNldHMgYSBwcm9wZXJ0eSBvZiB0aGlzIGxvZyBlbmdpbmUuXG5cblx0XHROb3QgYWxsIHByb3BlcnR5IGNhbiBiZSBzZXQgdG8gbGltaXQgdGhpcyBmdW5jdGlvblxuXHRcdFx0Zm9yIHNlY3VyaXR5IHB1cnBvc2VzLlxuXHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuT2xpdmFudC5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gc2V0KCBwcm9wZXJ0eSwgdmFsdWUgKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJwcm9wZXJ0eTpyZXF1aXJlZFwiOiBcInN0cmluZ1wiLFxuXHRcdFx0XHRcInZhbHVlXCI6IFwiKlwiXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRsZXQgcGFyYW1ldGVyID0gcmF6ZSggYXJndW1lbnRzICk7XG5cblx0aWYoIHBhcmFtZXRlci5sZW5ndGggPT0gMSAmJiBwcm90eXBlKCBwYXJhbWV0ZXJbIDAgXSwgT0JKRUNUICkgKXtcblx0XHRsZXQgb3B0aW9uID0gcGFyYW1ldGVyWyAwIF07XG5cdFx0Zm9yKCBsZXQgcHJvcGVydHkgaW4gb3B0aW9uICl7XG5cdFx0XHR0aGlzLnNldCggcHJvcGVydHksIG9wdGlvblsgcHJvcGVydHkgXSApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0aWYoICFwcm90eXBlKCBwcm9wZXJ0eSwgU1RSSU5HICkgKXtcblx0XHR0aGlzLnJlc2V0KCBJc3N1ZSwgdHJ1ZSApXG5cdFx0XHQuc2lsZW5jZSggKVxuXHRcdFx0LnByb21wdCggXCJpbnZhbGlkIHByb3BlcnR5XCIsIHByb3BlcnR5ICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGlmKCBwcm90eXBlKCBwcm9wZXJ0eSwgU1RSSU5HICkgJiZcblx0XHRwcm9wZXJ0eSAhPSBMT0cgICYmXG5cdFx0cHJvcGVydHkgIT0gU0lMRU5UICYmXG5cdFx0cHJvcGVydHkgIT0gQ09OVEVYVCApXG5cdHtcblx0XHR0aGlzLnJlc2V0KCBJc3N1ZSwgdHJ1ZSApXG5cdFx0XHQuc2lsZW5jZSggKVxuXHRcdFx0LnByb21wdCggXCJpbnZhbGlkIHByb3BlcnR5XCIsIHByb3BlcnR5ICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHRoaXNbIHByb3BlcnR5IF0gPSB2YWx1ZTtcblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qO1xuXHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0U2VuZCBkYXRhIHRvIHNlcnZlciBvciBjbGllbnQuXG5cdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5PbGl2YW50LnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gc2VuZCggKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJyZXNwb25zZVwiOiBcImh0dHAuU2VydmVyUmVzcG9uc2VcIixcblx0XHRcdFx0XCJwcm9jZWR1cmVcIjogXCJmdW5jdGlvblwiXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRpZiggdGhpcy5kZXB0aCA9PSAyICl7XG5cdFx0dGhpcy5yZW1pbmQoIFwic2VuZGluZyBpcyBkaXNhYmxlZCBmb3IgZGVwdGggMlwiICkucHJvbXB0KCApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRsZXQgbWVzc2FnZSA9IG1lZWsoIHRoaXMuc3RhdHVzLCBVMjAwYiggdGhpcy50b1N0cmluZyggKSApLnJhdyggKSApO1xuXG5cdGxldCBwcm9jZWR1cmUgPSBhcmd1bWVudHNbIDAgXTtcblxuXHRpZiggYXNlYS5zZXJ2ZXIgJiZcblx0XHR0aGlzLnN0YXRlID09PSBSRURJUkVDVCAmJlxuXHRcdHByb3R5cGUoIHRoaXMucGF0aCwgU1RSSU5HICkgJiZcblx0XHR0cnVseSggdGhpcy5wYXRoICkgJiZcblx0XHRjbGF6b2YoIHByb2NlZHVyZSwgaHR0cC5TZXJ2ZXJSZXNwb25zZSApIClcblx0e1xuXHRcdHNlZ3dheSgge1xuXHRcdFx0XCJyZXNwb25zZVwiOiBwcm9jZWR1cmUsXG5cdFx0XHRcInBhdGhcIjogdGhpcy5wYXRoLFxuXHRcdFx0XCJzdGF0dXNcIjogdGhpcy5zdGF0dXMsXG5cdFx0XHRcImRhdGFcIjogbWVzc2FnZSxcblx0XHR9ICk7XG5cblx0XHR0aGlzLmZsdXNoU3RhdGUoICk7XG5cblx0fWVsc2UgaWYoIGFzZWEuc2VydmVyICYmXG5cdFx0ZmFsenkoIHRoaXMuc3RhdGUgKSAmJlxuXHRcdGNsYXpvZiggcHJvY2VkdXJlLCBodHRwLlNlcnZlclJlc3BvbnNlICkgKVxuXHR7XG5cdFx0bWVzc2FnZS5zZW5kKCBwcm9jZWR1cmUsIHRoaXMuY29kZSApO1xuXG5cdH1lbHNlIGlmKCBhc2VhLmNsaWVudCAmJlxuXHRcdHRoaXMuc3RhdGUgPT0gUkVESVJFQ1QgJiZcblx0XHRwcm90eXBlKCB0aGlzLnBhdGgsIFNUUklORyApICYmXG5cdFx0dHJ1bHkoIHRoaXMucGF0aCApIClcblx0e1xuXHRcdHNlZ3dheSgge1xuXHRcdFx0XCJwYXRoXCI6IHRoaXMucGF0aCxcblx0XHRcdFwic3RhdHVzXCI6IHRoaXMuc3RhdHVzLFxuXHRcdFx0XCJkYXRhXCI6IG1lc3NhZ2UsXG5cdFx0fSApO1xuXG5cdFx0dGhpcy5mbHVzaFN0YXRlKCApO1xuXG5cdH1lbHNlIGlmKCBhc2VhLmNsaWVudCAmJlxuXHRcdGZhbHp5KCB0aGlzLnN0YXRlICkgJiZcblx0XHRwcm90eXBlKCBwcm9jZWR1cmUsIEZVTkNUSU9OICkgKVxuXHR7XG5cdFx0bWVzc2FnZS5zZW5kLmJpbmQoIHRoaXMgKSggcHJvY2VkdXJlICk7XG5cblx0fWVsc2UgaWYoIHRydWx5KCB0aGlzLnN0YXRlICkgKXtcblx0XHR0aGlzLnJlc2V0KCBJc3N1ZSwgdHJ1ZSApXG5cdFx0XHQuc2lsZW5jZSggKVxuXHRcdFx0LnByb21wdCggYGNhbm5vdCBpbnZva2Ugc2VuZGluZyBzdGF0ZSwgJHsgdGhpcy5zdGF0ZSB9LCBwcm9wZXJseWAgKVxuXHRcdFx0LnNlbmQoIHByb2NlZHVyZSApO1xuXG5cdFx0dGhpcy5mbHVzaFN0YXRlKCApO1xuXG5cdH1lbHNle1xuXHRcdHRoaXMucmVzZXQoIElzc3VlLCB0cnVlIClcblx0XHRcdC5zaWxlbmNlKCApXG5cdFx0XHQucHJvbXB0KCBcImNhbm5vdCBzZW5kIHByb3Blcmx5XCIgKTtcblx0fVxuXG5cdHJldHVybiB0aGlzO1xufTtcblxuLyo7XG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRTdHJlYW0gZGF0YSB0byBsaXN0ZW5lcnMuXG5cdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5PbGl2YW50LnByb3RvdHlwZS5yZXBvcnQgPSBmdW5jdGlvbiByZXBvcnQoICl7XG5cdGlmKCB0aGlzLmRlcHRoID09IDIgKXtcblx0XHR0aGlzLnJlbWluZCggXCJyZXBvcnRpbmcgaXMgZGlzYWJsZWQgZm9yIGRlcHRoIDJcIiApLnByb21wdCggKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c25hcGQuYmluZCggdGhpcyApXG5cdFx0KCBmdW5jdGlvbiBkZWxheSggKXtcblx0XHRcdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdFx0XHRwcm9jZXNzLmVtaXQoIHRoaXMubmFtZSwgdGhpcyApO1xuXG5cdFx0XHR9ZWxzZSBpZiggYXNlYS5jbGllbnQgKXtcblx0XHRcdFx0bGV0IGV2ZW50ID0gbmV3IEV2ZW50KCB0aGlzLm5hbWUgKTtcblx0XHRcdFx0ZXZlbnQuZGF0YSA9IHRoaXM7XG5cblx0XHRcdFx0ZG9jdW1lbnQuZGlzcGF0Y2hFdmVudCggZXZlbnQgKTtcblx0XHRcdH1cblx0XHR9LCAxMDAwICk7XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKjtcblx0QGludGVybmFsLW1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdENydXNoIHRoZSBwYXJhbWV0ZXIgZXh0cmFjdGluZyBzdHJpbmcgaW5mb3JtYXRpb24uXG5cblx0XHRTcGVjaWFsIHN1cHBvcnQgZm9yIGdsdWNvc2UgY29hdGVkIHBhcmFtZXRlcnMuXG5cdEBlbmQtaW50ZXJuYWwtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5jb25zdCBjcnVzaCA9IGZ1bmN0aW9uIGNydXNoKCBwYXJhbWV0ZXIsIG9wdGlvbiApe1xuXHRvcHRpb24gPSBvcHRpb24gfHwgdGhpcy5pbnNwZWN0IHx8IHsgfTtcblxuXHRsZXQgZGVwdGggPSBvcHRpb24uZGVwdGggfHwgMTtcblx0bGV0IGxlbmd0aCA9IG9wdGlvbi5sZW5ndGggfHwgMjAwO1xuXHRsZXQgc3BhY2UgPSAvXFxzezIsfS9nO1xuXG5cdGlmKCBhc2VhLnNlcnZlciAmJiBwcm90eXBlKCBwYXJhbWV0ZXIsIE9CSkVDVCApICYmIHBhcmFtZXRlci5DT0FURUQgPT09IENPQVRFRCApe1xuXHRcdGlmKCBwYXJhbWV0ZXIuc2VsZiApe1xuXHRcdFx0dGhpcy5zZXQoIENPTlRFWFQsIHBhcmFtZXRlci5zZWxmICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHV0aWwuaW5zcGVjdCggcGFyYW1ldGVyLCB7IFwiZGVwdGhcIjogZGVwdGggfSApXG5cdFx0XHQucmVwbGFjZSggc3BhY2UsIFwiIFwiIClcblx0XHRcdC5zdWJzdHJpbmcoIDAsIGxlbmd0aCApICsgXCIuLi5cIjtcblxuXHR9ZWxzZSBpZiggcGFyYW1ldGVyICYmIGNsYXpvZiggcGFyYW1ldGVyLCBFcnJvciApICYmIHBhcmFtZXRlci5zdGFjayApe1xuXHRcdHRoaXMuZXJyb3IgPSBwYXJhbWV0ZXI7XG5cblx0XHR0aGlzLmdldFRyYWNlKCApO1xuXG5cdFx0cmV0dXJuIHBhcmFtZXRlci5zdGFjay50b1N0cmluZyggKTtcblxuXHR9ZWxzZSBpZiggY2xhem9mKCBwYXJhbWV0ZXIsIE9saXZhbnQgKSApe1xuXHRcdHJldHVybiBwYXJhbWV0ZXIubWVzc2FnZTtcblxuXHR9ZWxzZSBpZiggcHJvdHlwZSggcGFyYW1ldGVyLCBGVU5DVElPTiApICl7XG5cdFx0cmV0dXJuIHBhcmFtZXRlci50b1N0cmluZyggKVxuXHRcdFx0LnJlcGxhY2UoIHNwYWNlLCBcIiBcIiApXG5cdFx0XHQuc3Vic3RyaW5nKCAwLCBsZW5ndGggKSArIFwiLi4uXCI7XG5cblx0fWVsc2UgaWYoIHByb3R5cGUoIHBhcmFtZXRlciwgU1RSSU5HICkgfHxcblx0XHRwcm90eXBlKCBwYXJhbWV0ZXIsIE5VTUJFUiApIHx8XG5cdFx0cHJvdHlwZSggcGFyYW1ldGVyLCBCT09MRUFOICkgKVxuXHR7XG5cdFx0cmV0dXJuIHBhcmFtZXRlci50b1N0cmluZyggKTtcblxuXHR9ZWxzZSBpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRyZXR1cm4gdXRpbC5pbnNwZWN0KCBwYXJhbWV0ZXIsIHsgXCJkZXB0aFwiOiBkZXB0aCB9IClcblx0XHRcdC5yZXBsYWNlKCBzcGFjZSwgXCIgXCIgKVxuXHRcdFx0LnN1YnN0cmluZyggMCwgbGVuZ3RoICk7XG5cblx0fWVsc2UgaWYoIGFzZWEuY2xpZW50ICl7XG5cdFx0cmV0dXJuIHBhcmFtZXRlci50b1N0cmluZyggKTtcblxuXHR9ZWxzZXtcblx0XHRyZXR1cm4gcGFyYW1ldGVyLnRvU3RyaW5nKCApO1xuXHR9XG59O1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdEFwcGVuZCBtZXNzYWdlcyB0byB0aGUgY3VycmVudCBtZXNzYWdlLlxuXHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuT2xpdmFudC5wcm90b3R5cGUucmVtaW5kID0gZnVuY3Rpb24gcmVtaW5kKCApe1xuXHRsZXQgcGFyYW1ldGVyID0gcmF6ZSggYXJndW1lbnRzICk7XG5cblx0aWYoIGFyaWQoIHBhcmFtZXRlciApICl7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRsZXQgcGFyc2UgPSBjcnVzaC5iaW5kKCB0aGlzICk7XG5cblx0dGhpcy5tZXNzYWdlID0gVTIwMGIoIHBhcmFtZXRlclxuXHRcdC5tYXAoIGZ1bmN0aW9uIG9uRWFjaFBhcmFtZXRlciggcGFyYW1ldGVyICl7XG5cdFx0XHRpZiggZG91YnQoIHBhcmFtZXRlciwgQVNfQVJSQVkgKSApe1xuXHRcdFx0XHRwYXJhbWV0ZXIgPSByYXplKCBwYXJhbWV0ZXIgKVxuXHRcdFx0XHRcdC5tYXAoICggcGFyYW1ldGVyICkgPT4geyByZXR1cm4gcGFyc2UoIHBhcmFtZXRlciApIH0gKTtcblxuXHRcdFx0XHRyZXR1cm4gVTIwMGIoIHBhcmFtZXRlclxuXHRcdFx0XHRcdC5maWx0ZXIoICggbWVzc2FnZSApID0+IHsgcmV0dXJuIHRydWx5KCBtZXNzYWdlICk7IH0gKSApXG5cdFx0XHRcdFx0LmpvaW4oIFwiLCBcIiApO1xuXG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0cmV0dXJuIHBhcnNlKCBwYXJhbWV0ZXIgKTtcblx0XHRcdH1cblx0XHR9IClcblx0XHQucmV2ZXJzZSggKVxuXHRcdC5jb25jYXQoIFsgdGhpcy5tZXNzYWdlIF0gKVxuXHRcdC5maWx0ZXIoICggbWVzc2FnZSApID0+IHsgcmV0dXJuIHRydWx5KCBtZXNzYWdlICk7IH0gKVxuXHRcdC5yZXZlcnNlKCApIClcblx0XHQuam9pbiggXCIsIFwiICk7XG5cblx0dGhpcy5yZXBvcnQoICk7XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFNpbGVuY2UgdGhlIGxvZ2dpbmcgY2FwYWJpbGl0aWVzLlxuXHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuT2xpdmFudC5wcm90b3R5cGUuc2lsZW5jZSA9IGZ1bmN0aW9uIHNpbGVuY2UoICl7XG5cdHRoaXMuc2lsZW50ID0gdHJ1ZTtcblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qO1xuXHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0RGVhY3RpdmF0ZSBzaWxlbmNlLlxuXHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuT2xpdmFudC5wcm90b3R5cGUuc2hvdXQgPSBmdW5jdGlvbiBzaG91dCggKXtcblx0dGhpcy5zaWxlbnQgPSBmYWxzZTtcblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qO1xuXHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0TG9nIHRoZSBkYXRhLlxuXHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuT2xpdmFudC5wcm90b3R5cGUucHJvbXB0ID0gZnVuY3Rpb24gcHJvbXB0KCApe1xuXHR0aGlzLnJlbWluZC5hcHBseSggdGhpcywgcmF6ZSggYXJndW1lbnRzICkgKTtcblxuXHRzbmFwZC5iaW5kKCB0aGlzIClcblx0XHQoIGZ1bmN0aW9uIGRlbGF5KCApe1xuXHRcdFx0aWYoIHRoaXMuZGVwdGggPT09IDIgKXtcblx0XHRcdFx0dGhpcy5sb2coIHRoaXMuZ2V0TWVzc2FnZSggKSApO1xuXG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggZG91YnQoIHRoaXMuc3RhY2ssIEFSUkFZICkgJiYgZmlsbGVkKCB0aGlzLnN0YWNrICkgKXtcblx0XHRcdFx0dGhpcy5sb2coIHRoaXMuZ2V0TWVzc2FnZSggKSApO1xuXG5cdFx0XHR9ZWxzZSBpZiggdGhpcy5kZXB0aCA+IDUgKXtcblx0XHRcdFx0dGhpcy5nZXRUcmFjZSggKCBlcnJvciwgc3RhY2sgKSA9PiB7XG5cdFx0XHRcdFx0aWYoIGNsYXpvZiggZXJyb3IsIEVycm9yICkgKXtcblx0XHRcdFx0XHRcdHRoaXMucmVtaW5kKCBgZXJyb3IgZ2V0dGluZyBzdGFjayB0cmFjZSwgJHsgZXJyb3IgfWAgKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiggdHJ1dSggc3RhY2sgKSApe1xuXHRcdFx0XHRcdFx0dGhpcy5zdGFjayA9IHN0YWNrO1xuXG5cdFx0XHRcdFx0XHR0aGlzLmxvZyggdGhpcy5nZXRNZXNzYWdlKCApICk7XG5cblx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdHRoaXMubG9nKCB0aGlzLmdldE1lc3NhZ2UoICkgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gKTtcblxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHRoaXMubG9nKCB0aGlzLmdldE1lc3NhZ2UoICkgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFNldCB0aGUgcmVkaXJlY3Rpb24gY29uZmlndXJhdGlvbi5cblxuXHRcdFRoaXMgd2lsbCB0cmlnZ2VyIHJlZGlyZWN0IHJlc3BvbnNlIHdoZW4gc2VuZCBpcyBjYWxsZWQuXG5cblx0XHREZWZhdWx0IG9mIERFRkFVTFRfUkVESVJFQ1RfUEFUSCB3aWxsIGJlIHVzZWQgaWYgcGF0aCBpcyBub3QgZ2l2ZW4uXG5cdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5PbGl2YW50LnByb3RvdHlwZS5yZWRpcmVjdCA9IGZ1bmN0aW9uIHJlZGlyZWN0KCBwYXRoICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwicGF0aDpyZXF1aXJlZFwiOiBcInN0cmluZ1wiXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHR0aGlzLnN0YXRlID0gUkVESVJFQ1Q7XG5cdHRoaXMucGF0aCA9IHBhdGg7XG5cblx0aWYoICF0aGlzLnBhdGggJiYgcHJvdHlwZSggREVGQVVMVF9SRURJUkVDVF9QQVRILCBTVFJJTkcgKSApe1xuXHRcdHRoaXMucGF0aCA9IERFRkFVTFRfUkVESVJFQ1RfUEFUSDtcblxuXHR9ZWxzZXtcblx0XHR0aGlzLnJlc2V0KCBJc3N1ZSwgdHJ1ZSApXG5cdFx0XHQuc2lsZW5jZSggKVxuXHRcdFx0LnByb21wdCggXCJlbXB0eSBwYXRoIHRvIGJlIHJlZGlyZWN0ZWRcIiApO1xuXHR9XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG5PbGl2YW50LnByb3RvdHlwZS5mbHVzaFN0YXRlID0gZnVuY3Rpb24gZmx1c2hTdGF0ZSggKXtcblx0dGhpcy5zdGF0ZSA9IFwiXCI7XG5cdHRoaXMucGF0aCA9IFwiXCI7XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFBhc3MgdGhlIGluc3RhbmNlIHRvIHRoZSBjYWxsYmFjayBmaXJzdCBwYXJhbWV0ZXIuXG5cblx0XHRUaGlzIGZvbGxvd3MgdGhlIHN0YW5kYXJkIGVycm9yLXJlc3VsdC1vcHRpb24gY29udmVudGlvbi5cblxuXHRcdEhhcyBzcGVjaWFsIHN1cHBvcnQgZm9yIGdsdWNvc2UgY29hdGVkIG9wdGlvbi5cblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLnBhc3MgPSBmdW5jdGlvbiBwYXNzKCBjYWxsYmFjaywgcmVzdWx0LCBvcHRpb24gKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJjYWxsYmFjazpyZXF1aXJlZFwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCAhcHJvdHlwZSggY2FsbGJhY2ssIEZVTkNUSU9OICkgKXtcblx0XHR0aGlzLnJlc2V0KCBCdWcsIHRydWUgKVxuXHRcdFx0LnByb21wdCggXCJpbnZhbGlkIGNhbGxiYWNrXCIgKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0aWYoIHRydXUoIG9wdGlvbiApICYmIHRydXUoIG9wdGlvbi5zZWxmICkgJiYgb3B0aW9uLkNPQVRFRCA9PT0gQ09BVEVEICl7XG5cdFx0dGhpcy5zZXQoIENPTlRFWFQsIG9wdGlvbi5zZWxmICk7XG5cdH1cblxuXHRpZiggdGhpcy5jb250ZXh0ICl7XG5cdFx0Y2FsbGJhY2sgPSBjYWxsZWQuYmluZCggdGhpcy5jb250ZXh0ICkoIGNhbGxiYWNrICk7XG5cblx0fWVsc2V7XG5cdFx0Y2FsbGJhY2sgPSBjYWxsZWQoIGNhbGxiYWNrICk7XG5cdH1cblxuXHRjYWxsYmFjayggdGhpcywgcmVzdWx0LCBvcHRpb24gKTtcblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbmhhcmRlbiggXCJjcmVhdGVcIiwgZnVuY3Rpb24gY3JlYXRlKCBuYW1lLCBvcHRpb24gKXtcblx0bGV0IExvZ0VuZ2luZSA9IGRpYXRvbSggbmFtZSApO1xuXG5cdGhlcmVkaXRvKCBMb2dFbmdpbmUsIE9saXZhbnQgKTtcblxuXHRMb2dFbmdpbmUucHJvdG90eXBlLm5hbWUgPSBvcHRpb24ubmFtZTtcblx0TG9nRW5naW5lLnByb3RvdHlwZS5zdGF0dXMgPSBvcHRpb24uc3RhdHVzO1xuXHRMb2dFbmdpbmUucHJvdG90eXBlLmNvZGUgPSBvcHRpb24uY29kZTtcblx0TG9nRW5naW5lLnByb3RvdHlwZS5zaWxlbnQgPSBvcHRpb24uc2lsZW50O1xuXHRMb2dFbmdpbmUucHJvdG90eXBlLmRlcHRoID0gb3B0aW9uLmRlcHRoO1xuXHRMb2dFbmdpbmUucHJvdG90eXBlLmNvbG9yID0gb3B0aW9uLmNvbG9yO1xuXHRMb2dFbmdpbmUucHJvdG90eXBlLmluc3BlY3QgPSBvcHRpb24uaW5zcGVjdDtcblx0TG9nRW5naW5lLnByb3RvdHlwZS5pbml0aWFsaXplID0gb3B0aW9uLmluaXRpYWxpemUgfHxcblx0XHRmdW5jdGlvbiBpbml0aWFsaXplKCApe1xuXHRcdFx0dGhpcy5uYW1lID0gb3B0aW9uLm5hbWU7XG5cblx0XHRcdHRoaXMuc3RhdHVzID0gb3B0aW9uLnN0YXR1cztcblxuXHRcdFx0dGhpcy5jb2RlID0gb3B0aW9uLmNvZGU7XG5cblx0XHRcdHRoaXMuc2lsZW50ID0gb3B0aW9uLnNpbGVudDtcblxuXHRcdFx0dGhpcy5kZXB0aCA9IG9wdGlvbi5kZXB0aDtcblx0XHR9O1xuXG5cdHN5bWJpb3RlKCBMb2dFbmdpbmUgKTtcblxuXHRoYXJkZW4oIExvZ0VuZ2luZS5uYW1lLCBMb2dFbmdpbmUgKTtcbn0sIE9saXZhbnQgKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPbGl2YW50O1xuIl19
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9saXZhbnQuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhcmlkIiwicmVxdWlyZSIsImFzZWEiLCJidWRnZSIsImNhbGxlZCIsImNsYXpvZiIsImRpYXRvbSIsImRvdWJ0IiwiRXRoZXJuaXR5IiwiZmFsemUiLCJmYWx6eSIsImZpbGxlZCIsImdsdWNvc2UiLCJoYXJkZW4iLCJoZXJlZGl0byIsImtlaW4iLCJtZWVrIiwib3V0cmUiLCJwbG91Z2giLCJwcm90eXBlIiwicmF6ZSIsInNuYXBkIiwic3ltYmlvdGUiLCJ0cnVseSIsInRydXUiLCJVMjAwYiIsInRyYWNlIiwid2luZG93IiwiREVGQVVMVF9SRURJUkVDVF9QQVRIIiwiT2xpdmFudCIsIkRFRkFVTFRfSU5TUEVDVF9PUFRJT04iLCJERUZBVUxUX0xPR19FTkdJTkUiLCJjbGllbnQiLCJjb25zb2xlIiwiZGVidWciLCJsb2ciLCJwcm90b3R5cGUiLCJpbml0aWFsaXplIiwib3B0aW9uIiwiZHVyYXRpb24iLCJEYXRlIiwibm93IiwiYXJndW1lbnRzIiwiT0JKRUNUIiwiQVJHVU1FTlRTIiwiRXJyb3IiLCJDT0FURUQiLCJsb2FkIiwibGV0IiwicGFyYW1ldGVyIiwibGVuZ3RoIiwiZXJyb3IiLCJyZW1pbmQiLCJhcHBseSIsIm1lc3NhZ2UiLCJjb25jYXQiLCJTVFJJTkciLCJjb25zdHJ1Y3RvciIsIkZVTkNUSU9OIiwibmFtZSIsImJpbmQiLCJFQ0hPIiwic3RhdHVzIiwiY29kZSIsIkVDSE9fQ09ERSIsImNvbnRleHQiLCJzZWxmIiwic2lsZW50IiwiQk9PTEVBTiIsImRlcHRoIiwiTlVNQkVSIiwic2VydmVyIiwiY29sb3IiLCJjaGFsayIsIndoaXRlIiwic3RhdGUiLCJzdGFjayIsImluc3BlY3QiLCJyZWRzZWEiLCJJc3N1ZSIsImJsYWNrc2VhIiwiRmF0YWwiLCJyZXNldCIsInJlbmV3IiwibG9nRW5naW5lIiwiZGF0YSIsInNpbGVuY2UiLCJwcm9tcHQiLCJ0b1N0cmluZyIsImpvaW4iLCJ2YWx1ZU9mIiwiZ2V0VGltZXN0YW1wIiwidGltZXN0YW1wIiwicHJpbnRUaW1lIiwiZGltIiwiY29sb3JNZXNzYWdlIiwicmVzb2x2ZU1lc3NhZ2UiLCJmaWx0ZXIiLCJyZXNvbHZlVHJhY2UiLCJBUlJBWSIsIm1hcCIsImZyYW1lIiwicmVkIiwiZ2V0TWVzc2FnZSIsImdldFRyYWNlIiwiY2FsbGJhY2siLCJmcm9tRXJyb3IiLCJ0aGVuIiwiZnJhbWVMaXN0IiwiZ2V0IiwicGFyc2UiLCJzZXQiLCJwcm9wZXJ0eSIsInZhbHVlIiwiTE9HIiwiU0lMRU5UIiwiQ09OVEVYVCIsInNlbmQiLCJyYXciLCJwcm9jZWR1cmUiLCJSRURJUkVDVCIsInBhdGgiLCJodHRwIiwiU2VydmVyUmVzcG9uc2UiLCJzZWd3YXkiLCJmbHVzaFN0YXRlIiwicmVwb3J0IiwiZGVsYXkiLCJwcm9jZXNzIiwiZW1pdCIsImV2ZW50IiwiRXZlbnQiLCJkb2N1bWVudCIsImRpc3BhdGNoRXZlbnQiLCJjcnVzaCIsInNwYWNlIiwidXRpbCIsInJlcGxhY2UiLCJzdWJzdHJpbmciLCJvbkVhY2hQYXJhbWV0ZXIiLCJBU19BUlJBWSIsInJldmVyc2UiLCJzaG91dCIsInJlZGlyZWN0IiwicGFzcyIsInJlc3VsdCIsIkJ1ZyIsImNyZWF0ZSIsIkxvZ0VuZ2luZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3RlosTUFBTUEsS0FBSyxFQUFFQyxPQUFPLEVBQUUsT0FBTyxDQUFDO0FBQzlCLE1BQU1DLEtBQUssRUFBRUQsT0FBTyxFQUFFLE9BQU8sQ0FBQztBQUM5QixNQUFNRSxNQUFNLEVBQUVGLE9BQU8sRUFBRSxRQUFRLENBQUM7QUFDaEMsTUFBTUcsT0FBTyxFQUFFSCxPQUFPLEVBQUUsU0FBUyxDQUFDO0FBQ2xDLE1BQU1JLE9BQU8sRUFB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Q0FBQzBCLE9BQU8sRUFBRXhCLE1BQU0sQ0FBQ3dCLE1BQU07Q0FDMUNzRixTQUFTLENBQUNoSCxTQUFTLENBQUMyQixLQUFLLEVBQUV6QixNQUFNLENBQUN5QixJQUFJO0NBQ3RDcUYsU0FBUyxDQUFDaEgsU0FBUyxDQUFDK0IsT0FBTyxFQUFFN0IsTUFBTSxDQUFDNkIsTUFBTTtDQUMxQ2lGLFNBQVMsQ0FBQ2hILFNBQVMsQ0FBQ2lDLE1BQU0sRUFBRS9CLE1BQU0sQ0FBQytCLEtBQUs7Q0FDeEMrRSxTQUFTLENBQUNoSCxTQUFTLENBQUNvQyxNQUFNLEVBQUVsQyxNQUFNLENBQUNrQyxLQUFLO0NBQ3hDNEUsU0FBUyxDQUFDaEgsU0FBUyxDQUFDeUMsUUFBUSxFQUFFdkMsTUFBTSxDQUFDdUMsT0FBTztDQUM1Q3VFLFNBQVMsQ0FBQ2hILFNBQVMsQ0FBQ0MsV0FBVyxFQUFFQyxNQUFNLENBQUNELFdBQVc7RUFDbEQsU0FBU0EsVUFBVSxFQUFFLENBQUM7R0FDckIsSUFBSSxDQUFDc0IsS0FBSyxFQUFFckIsTUFBTSxDQUFDcUIsSUFBSTs7R0FFdkIsSUFBSSxDQUFDRyxPQUFPLEVBQUV4QixNQUFNLENBQUN3QixNQUFNOztHQUUzQixJQUFJLENBQUNDLEtBQUssRUFBRXpCLE1BQU0sQ0FBQ3lCLElBQUk7O0dBRXZCLElBQUksQ0FBQ0ksT0FBTyxFQUFFN0IsTUFBTSxDQUFDNkIsTUFBTTs7R0FFM0IsSUFBSSxDQUFDRSxNQUFNLEVBQUUvQixNQUFNLENBQUMrQixLQUFLO0VBQzFCLENBQUM7O0NBRUYvQyxRQUFRLEVBQUU4SCxVQUFVLENBQUM7O0NBRXJCdkksTUFBTSxFQUFFdUksU0FBUyxDQUFDekYsSUFBSSxFQUFFeUYsVUFBVSxDQUFDO0FBQ3BDLENBQUMsRUFBRXZILFFBQVEsQ0FBQzs7QUFFWndILE1BQU0sQ0FBQ0MsUUFBUSxFQUFFekgsT0FBTyIsImZpbGUiOiJvbGl2YW50LnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEBtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXG5cblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcIm9saXZhbnRcIixcblx0XHRcdFwicGF0aFwiOiBcIm9saXZhbnQvb2xpdmFudC5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwib2xpdmFudC5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJvbGl2YW50XCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvb2xpdmFudC5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcIm9saXZhbnQtdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZSxcblx0XHRcdFwiY2xhc3NcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRFY2hvIHRoZSBkZXN0cnVjdGlvbiBjYXVzZWQgYnkgeW91ciBjb2RlLlxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhcmlkXCI6IFwiYXJpZFwiLFxuXHRcdFx0XCJhc2VhXCI6IFwiYXNlYVwiLFxuXHRcdFx0XCJidWRnZVwiOiBcImJ1ZGdlXCIsXG5cdFx0XHRcImJsYWNrc2VhXCI6IFwiYmxhY2tzZWFcIixcblx0XHRcdFwiY2FsbGVkXCI6IFwiY2FsbGVkXCIsXG5cdFx0XHRcImNoYWxrXCI6IFwiY2hhbGtcIixcblx0XHRcdFwiY2xhem9mXCI6IFwiY2xhem9mXCIsXG5cdFx0XHRcImRleGlzdFwiOiBcImRleGlzdFwiLFxuXHRcdFx0XCJkaWF0b21cIjogXCJkaWF0b21cIixcblx0XHRcdFwiRXRoZXJuaXR5XCI6IFwiZXRoZXJuaXR5XCIsXG5cdFx0XHRcIkV2ZW50RW1pdHRlclwiOiBcImV2ZW50c1wiLFxuXHRcdFx0XCJmYWx6ZVwiOiBcImZhbHplXCIsXG5cdFx0XHRcImZhbHp5XCI6IFwiZmFsenlcIixcblx0XHRcdFwiZ2x1Y29zZVwiOiBcImdsdWNvc2VcIixcblx0XHRcdFwiaGFyZGVuXCI6IFwiaGFyZGVuXCIsXG5cdFx0XHRcImhlcmVkaXRvXCI6IFwiaGVyZWRpdG9cIixcblx0XHRcdFwia2VpblwiOiBcImtlaW5cIixcblx0XHRcdFwiaHR0cFwiOiBcImh0dHBcIixcblx0XHRcdFwibWVla1wiOiBcIm1lZWtcIlxuXHRcdFx0XCJvdXRyZVwiOiBcIm91dHJlXCIsXG5cdFx0XHRcInBsb3VnaFwiOiBcInBsb3VnaFwiLFxuXHRcdFx0XCJwcm90eXBlXCI6IFwicHJvdHlwZVwiLFxuXHRcdFx0XCJyYXplXCI6IFwicmF6ZVwiLFxuXHRcdFx0XCJyZWRzZWFcIjogXCJyZWRzZWFcIixcblx0XHRcdFwic25hcGRcIjogXCJzbmFwZFwiLFxuXHRcdFx0XCJzZWd3YXlcIjogXCJzZWd3YXlcIixcblx0XHRcdFwic3ltYmlvdGVcIjogXCJzeW1iaW90ZVwiLFxuXHRcdFx0XCJ0cmFjZVwiOiBbIFwic3RhY2t0cmFjZS1qc1wiLCBcInN0YWNrLXRyYWNlXCIgXSxcblx0XHRcdFwidHJ1bHlcIjogXCJ0cnVseVwiLFxuXHRcdFx0XCJ0cnV1XCI6IFwidHJ1dVwiLFxuXHRcdFx0XCJVMjAwYlwiOiBcInUyMDBiXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXJpZCA9IHJlcXVpcmUoIFwiYXJpZFwiICk7XG5jb25zdCBhc2VhID0gcmVxdWlyZSggXCJhc2VhXCIgKTtcbmNvbnN0IGJ1ZGdlID0gcmVxdWlyZSggXCJidWRnZVwiICk7XG5jb25zdCBjYWxsZWQgPSByZXF1aXJlKCBcImNhbGxlZFwiICk7XG5jb25zdCBjbGF6b2YgPSByZXF1aXJlKCBcImNsYXpvZlwiICk7XG5jb25zdCBkaWF0b20gPSByZXF1aXJlKCBcImRpYXRvbVwiICk7XG5jb25zdCBkb3VidCA9IHJlcXVpcmUoIFwiZG91YnRcIiApO1xuY29uc3QgRXRoZXJuaXR5ID0gcmVxdWlyZSggXCJldGhlcm5pdHlcIiApO1xuY29uc3QgZmFsemUgPSByZXF1aXJlKCBcImZhbHplXCIgKTtcbmNvbnN0IGZhbHp5ID0gcmVxdWlyZSggXCJmYWx6eVwiICk7XG5jb25zdCBmaWxsZWQgPSByZXF1aXJlKCBcImZpbGxlZFwiICk7XG5jb25zdCBnbHVjb3NlID0gcmVxdWlyZSggXCJnbHVjb3NlXCIgKTtcbmNvbnN0IGhhcmRlbiA9IHJlcXVpcmUoIFwiaGFyZGVuXCIgKTtcbmNvbnN0IGhlcmVkaXRvID0gcmVxdWlyZSggXCJoZXJlZGl0b1wiICk7XG5jb25zdCBrZWluID0gcmVxdWlyZSggXCJrZWluXCIgKTtcbmNvbnN0IG1lZWsgPSByZXF1aXJlKCBcIm1lZWtcIiApO1xuY29uc3Qgb3V0cmUgPSByZXF1aXJlKCBcIm91dHJlXCIgKTtcbmNvbnN0IHBsb3VnaCA9IHJlcXVpcmUoIFwicGxvdWdoXCIgKTtcbmNvbnN0IHByb3R5cGUgPSByZXF1aXJlKCBcInByb3R5cGVcIiApO1xuY29uc3QgcmF6ZSA9IHJlcXVpcmUoIFwicmF6ZVwiICk7XG5jb25zdCBzbmFwZCA9IHJlcXVpcmUoIFwic25hcGRcIiApO1xuY29uc3Qgc3ltYmlvdGUgPSByZXF1aXJlKCBcInN5bWJpb3RlXCIgKTtcbmNvbnN0IHRydWx5ID0gcmVxdWlyZSggXCJ0cnVseVwiICk7XG5jb25zdCB0cnV1ID0gcmVxdWlyZSggXCJ0cnV1XCIgKTtcbmNvbnN0IFUyMDBiID0gcmVxdWlyZSggXCJ1MjAwYlwiICk7XG5cbi8vOiBAY2xpZW50OlxuY29uc3QgdHJhY2UgPSByZXF1aXJlKCBcInN0YWNrdHJhY2UtanNcIiApO1xuaGFyZGVuKCBcIkRFRkFVTFRfUkVESVJFQ1RfUEFUSFwiLCB3aW5kb3cuREVGQVVMVF9SRURJUkVDVF9QQVRIIHx8IFwiL3ZpZXcvc3RhdHVzL3BhZ2VcIiApO1xuLy86IEBlbmQtY2xpZW50XG5cblxuXG5jb25zdCBPbGl2YW50ID0gZGlhdG9tKCBcIk9saXZhbnRcIiApO1xuXG5jb25zdCBERUZBVUxUX0lOU1BFQ1RfT1BUSU9OID0geyBcImRlcHRoXCI6IDEsIFwibGVuZ3RoXCI6IDIwMCB9O1xuY29uc3QgREVGQVVMVF9MT0dfRU5HSU5FID0gYXNlYS5jbGllbnQ/IGNvbnNvbGUuZGVidWcgOiBjb25zb2xlLmxvZztcblxuLyo7XG5cdEBub3RlOlxuXHRcdFRoaXMgaXMgdGhlIGRlZmF1bHQgbmFtZS9zdGF0dXMgYW5kIGNvZGUgb2YgdGhlIG9saXZhbnQuXG5cdEBlbmQtbm90ZVxuKi9cbmhhcmRlbiggXCJFQ0hPXCIsIFwiZWNob1wiICk7XG5oYXJkZW4oIFwiRUNIT19DT0RFXCIsIDIwMCApO1xuXG5oYXJkZW4oIFwiUkVESVJFQ1RcIiwgXCJyZWRpcmVjdFwiICk7XG5oYXJkZW4oIFwiQ09OVEVYVFwiLCBcImNvbnRleHRcIiApO1xuaGFyZGVuKCBcIkxPR1wiLCBcImxvZ1wiICk7XG5oYXJkZW4oIFwiU0lMRU5UXCIsIFwic2lsZW50XCIgKTtcblxuLyo7XG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRPcHRpb24gc2hvdWxkIG5vdCBiZSBnbHVjb3NlIGNvYXRlZC5cblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiBpbml0aWFsaXplKCBvcHRpb24gKXtcblx0dGhpcy5kdXJhdGlvbiA9IERhdGUubm93KCApO1xuXG5cdGlmKCBwcm90eXBlKCBhcmd1bWVudHNbIDAgXSwgT0JKRUNUICkgJiZcblx0XHQhZG91YnQoIGFyZ3VtZW50c1sgMCBdLCBBUkdVTUVOVFMgKSAmJlxuXHRcdCEoIGNsYXpvZiggYXJndW1lbnRzWyAwIF0sIEVycm9yICkgKSAmJlxuXHRcdG9wdGlvbi5DT0FURUQgIT09IENPQVRFRCApXG5cdHtcblx0XHR0aGlzLmxvYWQoIG9wdGlvbiApO1xuXG5cdH1lbHNle1xuXHRcdHRoaXMubG9hZCggKTtcblx0fVxuXG5cdGxldCBwYXJhbWV0ZXIgPSBhcmd1bWVudHNbIDAgXTtcblxuXHRpZiggYXJndW1lbnRzLmxlbmd0aCA9PSAwICl7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fWVsc2UgaWYoIGNsYXpvZiggcGFyYW1ldGVyLCBFcnJvciApICl7XG5cdFx0bGV0IGVycm9yID0gcGFyYW1ldGVyO1xuXG5cdFx0dGhpcy5yZW1pbmQuYXBwbHkoIHRoaXMsIFsgZXJyb3IubWVzc2FnZSwgZXJyb3IgXS5jb25jYXQoIGJ1ZGdlKCBhcmd1bWVudHMgKSApICk7XG5cblx0fWVsc2UgaWYoIGNsYXpvZiggcGFyYW1ldGVyLCBPbGl2YW50ICkgKXtcblx0XHR0aGlzLmxvYWQoIHBhcmFtZXRlciApO1xuXG5cdH1lbHNlIGlmKCBkb3VidCggcGFyYW1ldGVyLCBBUkdVTUVOVFMgKSApe1xuXHRcdHRoaXMucmVtaW5kLmFwcGx5KCB0aGlzLCBwbG91Z2goIHBhcmFtZXRlciApICk7XG5cblx0fWVsc2UgaWYoIHByb3R5cGUoIHBhcmFtZXRlciwgU1RSSU5HICkgKXtcblx0XHR0aGlzLnJlbWluZC5hcHBseSggdGhpcywgcmF6ZSggYXJndW1lbnRzICkgKTtcblxuXHR9ZWxzZSBpZiggcHJvdHlwZSggcGFyYW1ldGVyLCBPQkpFQ1QgKSAmJlxuXHRcdHBhcmFtZXRlci5jb25zdHJ1Y3RvciAmJlxuXHRcdHByb3R5cGUoIHBhcmFtZXRlci5jb25zdHJ1Y3RvciwgRlVOQ1RJT04gKSAmJlxuXHRcdHBhcmFtZXRlci5jb25zdHJ1Y3Rvci5uYW1lICE9IFwiRnVuY3Rpb25cIiAmJlxuXHRcdGNsYXpvZiggcGFyYW1ldGVyLCBwYXJhbWV0ZXIuY29uc3RydWN0b3IgKSApXG5cdHtcblx0XHR0aGlzLmxvYWQoIHBhcmFtZXRlciApO1xuXG5cdFx0dGhpcy5yZW1pbmQuYXBwbHkoIHRoaXMsIHJhemUoIGFyZ3VtZW50cyApICk7XG5cblx0fWVsc2UgaWYoIHByb3R5cGUoIHBhcmFtZXRlciwgT0JKRUNUICkgKXtcblx0XHR0aGlzLnJlbWluZC5hcHBseSggdGhpcywgcmF6ZSggYXJndW1lbnRzICkgKTtcblx0fVxuXG5cdHJldHVybiB0aGlzO1xufTtcblxuT2xpdmFudC5wcm90b3R5cGUubG9hZCA9IGZ1bmN0aW9uIGxvYWQoIG9wdGlvbiApe1xuXHRvcHRpb24gPSBnbHVjb3NlLmJpbmQoIHRoaXMgKSggb3B0aW9uICk7XG5cblx0dGhpcy5uYW1lID0gb3B0aW9uLm5hbWUgfHwgdGhpcy5uYW1lIHx8IEVDSE9cblxuXHR0aGlzLnN0YXR1cyA9IG9wdGlvbi5zdGF0dXMgfHwgdGhpcy5zdGF0dXMgfHwgRUNITztcblxuXHR0aGlzLmNvZGUgPSBvcHRpb24uY29kZSB8fCB0aGlzLmNvZGUgfHwgRUNIT19DT0RFO1xuXG5cdHRoaXMubG9nID0gb3B0aW9uLmxvZyB8fCB0aGlzLmxvZyB8fCBERUZBVUxUX0xPR19FTkdJTkU7XG5cblx0aWYoIGZhbHplKCB0aGlzLmNvbnRleHQgKSAmJiB0cnV1KCBvcHRpb24uc2VsZiApICl7XG5cdFx0dGhpcy5jb250ZXh0ID0gb3B0aW9uLnNlbGY7XG5cdH1cblxuXHR0aGlzLnNpbGVudCA9IGtlaW4oIG9wdGlvbiwgXCJzaWxlbnRcIiApPyBvcHRpb24uc2lsZW50IDpcblx0XHRrZWluKCB0aGlzLCBcInNpbGVudFwiICk/IHRoaXMuc2lsZW50IDogdHJ1ZTtcblxuXHRpZiggIXByb3R5cGUoIHRoaXMuc2lsZW50LCBCT09MRUFOICkgKXtcblx0XHR0aGlzLnNpbGVudCA9IHRydWU7XG5cdH1cblxuXHQvLzogRGVwdGggZGljdGF0ZXMgcmVmaW5lZCBzZXR0aW5ncyBvZiB0aGlzIHByb2NlZHVyZS5cblx0dGhpcy5kZXB0aCA9IGtlaW4oIG9wdGlvbiwgXCJkZXB0aFwiICk/IG9wdGlvbi5kZXB0aCA6XG5cdFx0a2VpbiggdGhpcywgXCJkZXB0aFwiICk/IHRoaXMuZGVwdGggOiAxO1xuXG5cdGlmKCAhcHJvdHlwZSggdGhpcy5kZXB0aCwgTlVNQkVSICkgKXtcblx0XHR0aGlzLmRlcHRoID0gMTtcblx0fVxuXG5cdC8vOiBEZXB0aCBpcyBvbmx5IGZyb20gMS0wIG9yIDEtMjM0NS02Nzg5LTAuXG5cdC8vOiBEZXB0aCAyIGlzIGRlZXAgc2lsZW50IGRlcHRoLlxuXHR0aGlzLmRlcHRoID0gdGhpcy5kZXB0aCAlIDEwO1xuXG5cdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdHRoaXMuY29sb3IgPSBvcHRpb24uY29sb3IgfHwgdGhpcy5jb2xvciB8fCBjaGFsay53aGl0ZTtcblx0fVxuXG5cdHRoaXMuc3RhdGUgPSBcIlwiO1xuXG5cdHRoaXMuc3RhY2sgPSBvcHRpb24uc3RhY2sgfHwgdGhpcy5zdGFjayB8fCBbIF07XG5cblx0dGhpcy5tZXNzYWdlID0gb3B0aW9uLm1lc3NhZ2UgfHwgdGhpcy5tZXNzYWdlIHx8IFwiXCI7XG5cblx0dGhpcy5pbnNwZWN0ID0gb3B0aW9uLmluc3BlY3QgfHwgdGhpcy5pbnNwZWN0IHx8IERFRkFVTFRfSU5TUEVDVF9PUFRJT047XG5cblx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0cmVkc2VhKCBJc3N1ZSApO1xuXG5cdFx0YmxhY2tzZWEoIEZhdGFsICk7XG5cdH1cblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qO1xuXHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0TW9kaWZpZXMgdGhlIGxvZyBlbmdpbmUgd2hpbGUgbWFpbnRhaW5pbmcgZW52aXJvbm1lbnQgcHJvcGVydGllcy5cblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gcmVzZXQoIG9wdGlvbiwgcmVuZXcgKXtcblx0aWYoIHByb3R5cGUoIG9wdGlvbiwgRlVOQ1RJT04gKSAmJiBjbGF6b2YoIG9wdGlvbiwgT2xpdmFudCApICl7XG5cdFx0bGV0IGxvZ0VuZ2luZSA9IG9wdGlvbjtcblxuXHRcdGlmKCBwcm90eXBlKCByZW5ldywgQk9PTEVBTiApICYmIHJlbmV3ICl7XG5cdFx0XHRsZXQgZGF0YSA9IHtcblx0XHRcdFx0XCJtZXNzYWdlXCI6IHRoaXMubWVzc2FnZSxcblx0XHRcdFx0XCJzdGFja1wiOiB0aGlzLnN0YWNrXG5cdFx0XHR9O1xuXG5cdFx0XHRyZXR1cm4gbG9nRW5naW5lKCBkYXRhICk7XG5cblx0XHR9ZWxzZXtcblx0XHRcdHRoaXMubG9hZCggbG9nRW5naW5lLnByb3RvdHlwZSApO1xuXHRcdH1cblxuXHR9ZWxzZSBpZiggcHJvdHlwZSggb3B0aW9uLCBPQkpFQ1QgKSApe1xuXHRcdHRoaXMubG9hZCggb3B0aW9uICk7XG5cblx0fWVsc2V7XG5cdFx0dGhpcy5yZXNldCggSXNzdWUsIHRydWUgKVxuXHRcdFx0LnNpbGVuY2UoIClcblx0XHRcdC5wcm9tcHQoIFwiY2Fubm90IHJlc2V0IHRvIGdpdmVuIG9wdGlvblwiLCBvcHRpb24gKTtcblx0fVxuXG5cdHJldHVybiB0aGlzO1xufTtcblxuT2xpdmFudC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyggKXtcblx0cmV0dXJuIFUyMDBiKCBvdXRyZSggWyB0aGlzLm5hbWUsIHRoaXMuc3RhdHVzLCB0aGlzLm1lc3NhZ2UgXSApICkuam9pbiggXCIsIFwiICk7XG59O1xuXG5PbGl2YW50LnByb3RvdHlwZS52YWx1ZU9mID0gZnVuY3Rpb24gdmFsdWVPZiggKXtcblx0cmV0dXJuIFUyMDBiKCBvdXRyZSggWyB0aGlzLm5hbWUsIHRoaXMuc3RhdHVzLCB0aGlzLm1lc3NhZ2UgXSApICkuam9pbiggXCIsIFwiICk7XG59O1xuXG5PbGl2YW50LnByb3RvdHlwZS5nZXRUaW1lc3RhbXAgPSBmdW5jdGlvbiBnZXRUaW1lc3RhbXAoICl7XG5cdGxldCB0aW1lc3RhbXAgPSBFdGhlcm5pdHkoICkucHJpbnRUaW1lKCB0cnVlICk7XG5cblx0dGltZXN0YW1wID0gYCR7IHRpbWVzdGFtcCB9IHwgJHsgKCBEYXRlLm5vdyggKSAtIHRoaXMuZHVyYXRpb24gKSB9bXNgO1xuXG5cdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdHJldHVybiBjaGFsay5kaW0oIHRpbWVzdGFtcCApO1xuXHR9XG5cblx0cmV0dXJuIHRpbWVzdGFtcDtcbn07XG5cbk9saXZhbnQucHJvdG90eXBlLmNvbG9yTWVzc2FnZSA9IGZ1bmN0aW9uIGNvbG9yTWVzc2FnZSggY29sb3IsIG1lc3NhZ2UgKXtcblx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0aWYoIHByb3R5cGUoIGNvbG9yLCBGVU5DVElPTiApICl7XG5cdFx0XHRyZXR1cm4gY29sb3IoIG1lc3NhZ2UgKTtcblxuXHRcdH1lbHNlIGlmKCBwcm90eXBlKCBjb2xvciwgU1RSSU5HICkgJiYgdHJ1bHkoIGNvbG9yICkgKXtcblx0XHRcdGlmKCBrZWluKCBjaGFsaywgY29sb3IgKSAmJiBwcm90eXBlKCBjaGFsa1sgY29sb3IgXSwgRlVOQ1RJT04gKSApe1xuXHRcdFx0XHRyZXR1cm4gY2hhbGtbIGNvbG9yIF0oIG1lc3NhZ2UgKTtcblxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHRoaXMucmVtaW5kKCBgaW52YWxpZCBtZXNzYWdlIGNvbG9yLCAkeyBjb2xvciB9YCApO1xuXG5cdFx0XHRcdHJldHVybiBjaGFsay53aGl0ZSggbWVzc2FnZSApO1xuXHRcdFx0fVxuXG5cdFx0fWVsc2V7XG5cdFx0XHRyZXR1cm4gY2hhbGsud2hpdGUoIG1lc3NhZ2UgKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gbWVzc2FnZTtcbn07XG5cbi8qO1xuXHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0VGhlIG1lc3NhZ2UgaXMgZGl2aWRlZCBpbnRvIHRocmVlIHBhcnRzLFxuXHRcdDEuIG5hbWVzcGFjZSxcblx0XHQyLiBzdGF0dXMsXG5cdFx0My4gYWN0dWFsIG1lc3NhZ2Vcblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLnJlc29sdmVNZXNzYWdlID0gZnVuY3Rpb24gcmVzb2x2ZU1lc3NhZ2UoICl7XG5cdGxldCBtZXNzYWdlID0gVTIwMGIoIG91dHJlKCBbIHRoaXMubmFtZSwgdGhpcy5zdGF0dXMsIHRoaXMubWVzc2FnZSBdIClcblx0XHQuZmlsdGVyKCB0cnVseSApICkuam9pbiggXCIsIFwiICk7XG5cblx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0cmV0dXJuIHRoaXMuY29sb3JNZXNzYWdlKCB0aGlzLmNvbG9yLCBtZXNzYWdlICk7XG5cdH1cblxuXHRyZXR1cm4gbWVzc2FnZTtcbn07XG5cbk9saXZhbnQucHJvdG90eXBlLnJlc29sdmVUcmFjZSA9IGZ1bmN0aW9uIHJlc29sdmVUcmFjZSggKXtcblx0bGV0IHN0YWNrID0gXCJzdGFjayB0cmFjZSBub3QgYXZhaWxhYmxlXCI7XG5cblx0aWYoICF0aGlzLnNpbGVudCAmJiBkb3VidCggdGhpcy5zdGFjaywgQVJSQVkgKSAmJiBmaWxsZWQoIHRoaXMuc3RhY2sgKSApe1xuXHRcdHN0YWNrID0gdGhpcy5zdGFjaztcblxuXHRcdHN0YWNrID0gc3RhY2subWFwKCAoIGZyYW1lICkgPT4geyByZXR1cm4gZnJhbWUudG9TdHJpbmcoICk7IH0gKTtcblxuXHRcdHN0YWNrID0gVTIwMGIoIHN0YWNrICkuam9pbiggXCJcXG5cIiApO1xuXG5cdFx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0XHRyZXR1cm4gY2hhbGsuZGltLnJlZCggc3RhY2sgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc3RhY2s7XG5cdH1cblxuXHRpZiggdGhpcy5kZXB0aCA8IDUgJiZcblx0XHR0aGlzLnNpbGVudCAmJlxuXHRcdHRydXUoIHRoaXMuY29udGV4dCApICYmXG5cdCBcdHByb3R5cGUoIHRoaXMuY29udGV4dC5jb25zdHJ1Y3RvciwgRlVOQ1RJT04gKSAmJlxuXHRcdHRydWx5KCB0aGlzLmNvbnRleHQuY29uc3RydWN0b3IubmFtZSApIClcblx0e1xuXHRcdHN0YWNrID0gYGNhbGxlZCB3aXRoIGNvbnRleHQsICR7IHRoaXMuY29udGV4dC5jb25zdHJ1Y3Rvci5uYW1lIH1gO1xuXG5cdFx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0XHRyZXR1cm4gY2hhbGsuZGltKCBzdGFjayApO1xuXHRcdH1cblxuXHRcdHJldHVybiBzdGFjaztcblx0fVxuXG5cdGlmKCB0aGlzLnNpbGVudCApe1xuXHRcdHN0YWNrID0gXCJzdGFjayB0cmFjZSBpcyBub3QgYXZhaWxhYmxlIG9uIHNpbGVudCBtb2RlXCI7XG5cblx0XHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRcdHJldHVybiBjaGFsay5kaW0oIHN0YWNrICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHN0YWNrO1xuXHR9XG5cblx0aWYoIHRoaXMuZGVwdGggPiA1ICl7XG5cdFx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0XHRyZXR1cm4gY2hhbGsuZGltKCBzdGFjayApO1xuXHRcdH1cblxuXHRcdHJldHVybiBzdGFjaztcblx0fVxufTtcblxuLyo7XG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRUaGUgbWVzc2FnZSBjb25zaXN0IG9mIHRocmVlIGxheWVyIG9mIHN0cmluZ3MsXG5cdFx0XHQxLiB0aW1lc3RhbXAgaW4gdHJ1ZSB0aW1lIGZvcm1hdFxuXHRcdFx0Mi4gYWN0dWFsIHJlYWRhYmxlIG1lc3NhZ2Vcblx0XHRcdDMuIG1lc3NhZ2UgdHJhY2Ugb3IgbWVzc2FnZSBjb250ZXh0XG5cblx0XHRUaGVzZSBpbmZvcm1hdGlvbiB3aWxsIGJlIGRpdmlkZWQgdGhyb3VnaCB6ZXJvLXdpZHRoIHNwYWNlIGNvbnZlbnRpb24uXG5cdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5PbGl2YW50LnByb3RvdHlwZS5nZXRNZXNzYWdlID0gZnVuY3Rpb24gZ2V0TWVzc2FnZSggKXtcblx0cmV0dXJuIFUyMDBiKCBbXG5cdFx0dGhpcy5nZXRUaW1lc3RhbXAoICksXG5cdFx0dGhpcy5yZXNvbHZlTWVzc2FnZSggKSxcblx0XHR0aGlzLnJlc29sdmVUcmFjZSggKVxuXHRdICkuam9pbiggXCJcXG5cIiApO1xufTtcblxuLyo7XG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRUaGlzIHNob3VsZCBiZSB1c2VkIGludGVybmFsbHkgYXMgbXVjaCBhcyBwb3NzaWJsZS5cblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLmdldFRyYWNlID0gZnVuY3Rpb24gZ2V0VHJhY2UoIGNhbGxiYWNrICl7XG5cdGlmKCB0aGlzLmRlcHRoID09IDIgKXtcblx0XHR0aGlzLnJlbWluZCggXCJ0cmFjaW5nIGlzIGRpc2FibGVkIGZvciBkZXB0aCAyXCIgKS5wcm9tcHQoICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGNhbGxiYWNrID0gY2FsbGVkLmJpbmQoIHRoaXMgKSggY2FsbGJhY2sgKTtcblxuXHRzbmFwZC5iaW5kKCB0aGlzICkoIGNhbGxiYWNrLCAxMDAwICk7XG5cblx0aWYoIGFzZWEuY2xpZW50ICl7XG5cdFx0aWYoIGNsYXpvZiggdGhpcy5lcnJvciwgRXJyb3IgKSApe1xuXHRcdFx0dHJhY2UuZnJvbUVycm9yKCB0aGlzLmVycm9yIClcblx0XHRcdFx0LnRoZW4oICggZnJhbWVMaXN0ICkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuc3RhY2sgPSBmcmFtZUxpc3Q7XG5cblx0XHRcdFx0XHRjYWxsYmFjayggbnVsbCwgdGhpcy5zdGFjayApO1xuXHRcdFx0XHR9IClcblx0XHRcdFx0LmNhdGNoKCAoIGVycm9yICkgPT4geyBjYWxsYmFjayggdGhpcy5yZW1pbmQoIGVycm9yICkgKTsgfSApO1xuXG5cdFx0fWVsc2UgaWYoIHRoaXMuZGVwdGggPiA1ICl7XG5cdFx0XHR0cmFjZS5nZXQoIClcblx0XHRcdFx0LnRoZW4oICggZnJhbWVMaXN0ICkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuc3RhY2sgPSBmcmFtZUxpc3Q7XG5cblx0XHRcdFx0XHRjYWxsYmFjayggbnVsbCwgdGhpcy5zdGFjayApO1xuXHRcdFx0XHR9IClcblx0XHRcdFx0LmNhdGNoKCAoIGVycm9yICkgPT4geyBjYWxsYmFjayggdGhpcy5yZW1pbmQoIGVycm9yICkgKTsgfSApO1xuXHRcdH1cblxuXHR9ZWxzZSBpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRpZiggY2xhem9mKCB0aGlzLmVycm9yLCBFcnJvciApICl7XG5cdFx0XHR0aGlzLnN0YWNrID0gdHJhY2UucGFyc2UoIHRoaXMuZXJyb3IgKTtcblxuXHRcdFx0Y2FsbGJhY2soIG51bGwsIHRoaXMuc3RhY2sgKTtcblxuXHRcdH1lbHNlIGlmKCB0aGlzLmRlcHRoID4gNSApe1xuXHRcdFx0dGhpcy5zdGFjayA9IHRyYWNlLmdldCggKTtcblxuXHRcdFx0Y2FsbGJhY2soIG51bGwsIHRoaXMuc3RhY2sgKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qO1xuXHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0U2V0cyBhIHByb3BlcnR5IG9mIHRoaXMgbG9nIGVuZ2luZS5cblxuXHRcdE5vdCBhbGwgcHJvcGVydHkgY2FuIGJlIHNldCB0byBsaW1pdCB0aGlzIGZ1bmN0aW9uXG5cdFx0XHRmb3Igc2VjdXJpdHkgcHVycG9zZXMuXG5cdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5PbGl2YW50LnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQoIHByb3BlcnR5LCB2YWx1ZSApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcInByb3BlcnR5OnJlcXVpcmVkXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcdFwidmFsdWVcIjogXCIqXCJcblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGxldCBwYXJhbWV0ZXIgPSByYXplKCBhcmd1bWVudHMgKTtcblxuXHRpZiggcGFyYW1ldGVyLmxlbmd0aCA9PSAxICYmIHByb3R5cGUoIHBhcmFtZXRlclsgMCBdLCBPQkpFQ1QgKSApe1xuXHRcdGxldCBvcHRpb24gPSBwYXJhbWV0ZXJbIDAgXTtcblx0XHRmb3IoIGxldCBwcm9wZXJ0eSBpbiBvcHRpb24gKXtcblx0XHRcdHRoaXMuc2V0KCBwcm9wZXJ0eSwgb3B0aW9uWyBwcm9wZXJ0eSBdICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRpZiggIXByb3R5cGUoIHByb3BlcnR5LCBTVFJJTkcgKSApe1xuXHRcdHRoaXMucmVzZXQoIElzc3VlLCB0cnVlIClcblx0XHRcdC5zaWxlbmNlKCApXG5cdFx0XHQucHJvbXB0KCBcImludmFsaWQgcHJvcGVydHlcIiwgcHJvcGVydHkgKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0aWYoIHByb3R5cGUoIHByb3BlcnR5LCBTVFJJTkcgKSAmJlxuXHRcdHByb3BlcnR5ICE9IExPRyAgJiZcblx0XHRwcm9wZXJ0eSAhPSBTSUxFTlQgJiZcblx0XHRwcm9wZXJ0eSAhPSBDT05URVhUIClcblx0e1xuXHRcdHRoaXMucmVzZXQoIElzc3VlLCB0cnVlIClcblx0XHRcdC5zaWxlbmNlKCApXG5cdFx0XHQucHJvbXB0KCBcImludmFsaWQgcHJvcGVydHlcIiwgcHJvcGVydHkgKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0dGhpc1sgcHJvcGVydHkgXSA9IHZhbHVlO1xuXG5cdHJldHVybiB0aGlzO1xufTtcblxuLyo7XG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRTZW5kIGRhdGEgdG8gc2VydmVyIG9yIGNsaWVudC5cblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiBzZW5kKCApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcInJlc3BvbnNlXCI6IFwiaHR0cC5TZXJ2ZXJSZXNwb25zZVwiLFxuXHRcdFx0XHRcInByb2NlZHVyZVwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCB0aGlzLmRlcHRoID09IDIgKXtcblx0XHR0aGlzLnJlbWluZCggXCJzZW5kaW5nIGlzIGRpc2FibGVkIGZvciBkZXB0aCAyXCIgKS5wcm9tcHQoICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGxldCBtZXNzYWdlID0gbWVlayggdGhpcy5zdGF0dXMsIFUyMDBiKCB0aGlzLnRvU3RyaW5nKCApICkucmF3KCApICk7XG5cblx0bGV0IHByb2NlZHVyZSA9IGFyZ3VtZW50c1sgMCBdO1xuXG5cdGlmKCBhc2VhLnNlcnZlciAmJlxuXHRcdHRoaXMuc3RhdGUgPT09IFJFRElSRUNUICYmXG5cdFx0cHJvdHlwZSggdGhpcy5wYXRoLCBTVFJJTkcgKSAmJlxuXHRcdHRydWx5KCB0aGlzLnBhdGggKSAmJlxuXHRcdGNsYXpvZiggcHJvY2VkdXJlLCBodHRwLlNlcnZlclJlc3BvbnNlICkgKVxuXHR7XG5cdFx0c2Vnd2F5KCB7XG5cdFx0XHRcInJlc3BvbnNlXCI6IHByb2NlZHVyZSxcblx0XHRcdFwicGF0aFwiOiB0aGlzLnBhdGgsXG5cdFx0XHRcInN0YXR1c1wiOiB0aGlzLnN0YXR1cyxcblx0XHRcdFwiZGF0YVwiOiBtZXNzYWdlLFxuXHRcdH0gKTtcblxuXHRcdHRoaXMuZmx1c2hTdGF0ZSggKTtcblxuXHR9ZWxzZSBpZiggYXNlYS5zZXJ2ZXIgJiZcblx0XHRmYWx6eSggdGhpcy5zdGF0ZSApICYmXG5cdFx0Y2xhem9mKCBwcm9jZWR1cmUsIGh0dHAuU2VydmVyUmVzcG9uc2UgKSApXG5cdHtcblx0XHRtZXNzYWdlLnNlbmQoIHByb2NlZHVyZSwgdGhpcy5jb2RlICk7XG5cblx0fWVsc2UgaWYoIGFzZWEuY2xpZW50ICYmXG5cdFx0dGhpcy5zdGF0ZSA9PSBSRURJUkVDVCAmJlxuXHRcdHByb3R5cGUoIHRoaXMucGF0aCwgU1RSSU5HICkgJiZcblx0XHR0cnVseSggdGhpcy5wYXRoICkgKVxuXHR7XG5cdFx0c2Vnd2F5KCB7XG5cdFx0XHRcInBhdGhcIjogdGhpcy5wYXRoLFxuXHRcdFx0XCJzdGF0dXNcIjogdGhpcy5zdGF0dXMsXG5cdFx0XHRcImRhdGFcIjogbWVzc2FnZSxcblx0XHR9ICk7XG5cblx0XHR0aGlzLmZsdXNoU3RhdGUoICk7XG5cblx0fWVsc2UgaWYoIGFzZWEuY2xpZW50ICYmXG5cdFx0ZmFsenkoIHRoaXMuc3RhdGUgKSAmJlxuXHRcdHByb3R5cGUoIHByb2NlZHVyZSwgRlVOQ1RJT04gKSApXG5cdHtcblx0XHRtZXNzYWdlLnNlbmQuYmluZCggdGhpcyApKCBwcm9jZWR1cmUgKTtcblxuXHR9ZWxzZSBpZiggdHJ1bHkoIHRoaXMuc3RhdGUgKSApe1xuXHRcdHRoaXMucmVzZXQoIElzc3VlLCB0cnVlIClcblx0XHRcdC5zaWxlbmNlKCApXG5cdFx0XHQucHJvbXB0KCBgY2Fubm90IGludm9rZSBzZW5kaW5nIHN0YXRlLCAkeyB0aGlzLnN0YXRlIH0sIHByb3Blcmx5YCApXG5cdFx0XHQuc2VuZCggcHJvY2VkdXJlICk7XG5cblx0XHR0aGlzLmZsdXNoU3RhdGUoICk7XG5cblx0fWVsc2V7XG5cdFx0dGhpcy5yZXNldCggSXNzdWUsIHRydWUgKVxuXHRcdFx0LnNpbGVuY2UoIClcblx0XHRcdC5wcm9tcHQoIFwiY2Fubm90IHNlbmQgcHJvcGVybHlcIiApO1xuXHR9XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFN0cmVhbSBkYXRhIHRvIGxpc3RlbmVycy5cblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLnJlcG9ydCA9IGZ1bmN0aW9uIHJlcG9ydCggKXtcblx0aWYoIHRoaXMuZGVwdGggPT0gMiApe1xuXHRcdHRoaXMucmVtaW5kKCBcInJlcG9ydGluZyBpcyBkaXNhYmxlZCBmb3IgZGVwdGggMlwiICkucHJvbXB0KCApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzbmFwZC5iaW5kKCB0aGlzIClcblx0XHQoIGZ1bmN0aW9uIGRlbGF5KCApe1xuXHRcdFx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0XHRcdHByb2Nlc3MuZW1pdCggdGhpcy5uYW1lLCB0aGlzICk7XG5cblx0XHRcdH1lbHNlIGlmKCBhc2VhLmNsaWVudCApe1xuXHRcdFx0XHRsZXQgZXZlbnQgPSBuZXcgRXZlbnQoIHRoaXMubmFtZSApO1xuXHRcdFx0XHRldmVudC5kYXRhID0gdGhpcztcblxuXHRcdFx0XHRkb2N1bWVudC5kaXNwYXRjaEV2ZW50KCBldmVudCApO1xuXHRcdFx0fVxuXHRcdH0sIDEwMDAgKTtcblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qO1xuXHRAaW50ZXJuYWwtbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0Q3J1c2ggdGhlIHBhcmFtZXRlciBleHRyYWN0aW5nIHN0cmluZyBpbmZvcm1hdGlvbi5cblxuXHRcdFNwZWNpYWwgc3VwcG9ydCBmb3IgZ2x1Y29zZSBjb2F0ZWQgcGFyYW1ldGVycy5cblx0QGVuZC1pbnRlcm5hbC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbmNvbnN0IGNydXNoID0gZnVuY3Rpb24gY3J1c2goIHBhcmFtZXRlciwgb3B0aW9uICl7XG5cdG9wdGlvbiA9IG9wdGlvbiB8fCB0aGlzLmluc3BlY3QgfHwgeyB9O1xuXG5cdGxldCBkZXB0aCA9IG9wdGlvbi5kZXB0aCB8fCAxO1xuXHRsZXQgbGVuZ3RoID0gb3B0aW9uLmxlbmd0aCB8fCAyMDA7XG5cdGxldCBzcGFjZSA9IC9cXHN7Mix9L2c7XG5cblx0aWYoIGFzZWEuc2VydmVyICYmIHByb3R5cGUoIHBhcmFtZXRlciwgT0JKRUNUICkgJiYgcGFyYW1ldGVyLkNPQVRFRCA9PT0gQ09BVEVEICl7XG5cdFx0aWYoIHBhcmFtZXRlci5zZWxmICl7XG5cdFx0XHR0aGlzLnNldCggQ09OVEVYVCwgcGFyYW1ldGVyLnNlbGYgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdXRpbC5pbnNwZWN0KCBwYXJhbWV0ZXIsIHsgXCJkZXB0aFwiOiBkZXB0aCB9IClcblx0XHRcdC5yZXBsYWNlKCBzcGFjZSwgXCIgXCIgKVxuXHRcdFx0LnN1YnN0cmluZyggMCwgbGVuZ3RoICkgKyBcIi4uLlwiO1xuXG5cdH1lbHNlIGlmKCBwYXJhbWV0ZXIgJiYgY2xhem9mKCBwYXJhbWV0ZXIsIEVycm9yICkgJiYgcGFyYW1ldGVyLnN0YWNrICl7XG5cdFx0dGhpcy5lcnJvciA9IHBhcmFtZXRlcjtcblxuXHRcdHRoaXMuZ2V0VHJhY2UoICk7XG5cblx0XHRyZXR1cm4gcGFyYW1ldGVyLnN0YWNrLnRvU3RyaW5nKCApO1xuXG5cdH1lbHNlIGlmKCBjbGF6b2YoIHBhcmFtZXRlciwgT2xpdmFudCApICl7XG5cdFx0cmV0dXJuIHBhcmFtZXRlci5tZXNzYWdlO1xuXG5cdH1lbHNlIGlmKCBwcm90eXBlKCBwYXJhbWV0ZXIsIEZVTkNUSU9OICkgKXtcblx0XHRyZXR1cm4gcGFyYW1ldGVyLnRvU3RyaW5nKCApXG5cdFx0XHQucmVwbGFjZSggc3BhY2UsIFwiIFwiIClcblx0XHRcdC5zdWJzdHJpbmcoIDAsIGxlbmd0aCApICsgXCIuLi5cIjtcblxuXHR9ZWxzZSBpZiggcHJvdHlwZSggcGFyYW1ldGVyLCBTVFJJTkcgKSB8fFxuXHRcdHByb3R5cGUoIHBhcmFtZXRlciwgTlVNQkVSICkgfHxcblx0XHRwcm90eXBlKCBwYXJhbWV0ZXIsIEJPT0xFQU4gKSApXG5cdHtcblx0XHRyZXR1cm4gcGFyYW1ldGVyLnRvU3RyaW5nKCApO1xuXG5cdH1lbHNlIGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdHJldHVybiB1dGlsLmluc3BlY3QoIHBhcmFtZXRlciwgeyBcImRlcHRoXCI6IGRlcHRoIH0gKVxuXHRcdFx0LnJlcGxhY2UoIHNwYWNlLCBcIiBcIiApXG5cdFx0XHQuc3Vic3RyaW5nKCAwLCBsZW5ndGggKTtcblxuXHR9ZWxzZSBpZiggYXNlYS5jbGllbnQgKXtcblx0XHRyZXR1cm4gcGFyYW1ldGVyLnRvU3RyaW5nKCApO1xuXG5cdH1lbHNle1xuXHRcdHJldHVybiBwYXJhbWV0ZXIudG9TdHJpbmcoICk7XG5cdH1cbn07XG5cbi8qO1xuXHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0QXBwZW5kIG1lc3NhZ2VzIHRvIHRoZSBjdXJyZW50IG1lc3NhZ2UuXG5cdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5PbGl2YW50LnByb3RvdHlwZS5yZW1pbmQgPSBmdW5jdGlvbiByZW1pbmQoICl7XG5cdGxldCBwYXJhbWV0ZXIgPSByYXplKCBhcmd1bWVudHMgKTtcblxuXHRpZiggYXJpZCggcGFyYW1ldGVyICkgKXtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGxldCBwYXJzZSA9IGNydXNoLmJpbmQoIHRoaXMgKTtcblxuXHR0aGlzLm1lc3NhZ2UgPSBVMjAwYiggcGFyYW1ldGVyXG5cdFx0Lm1hcCggZnVuY3Rpb24gb25FYWNoUGFyYW1ldGVyKCBwYXJhbWV0ZXIgKXtcblx0XHRcdGlmKCBkb3VidCggcGFyYW1ldGVyLCBBU19BUlJBWSApICl7XG5cdFx0XHRcdHBhcmFtZXRlciA9IHJhemUoIHBhcmFtZXRlciApXG5cdFx0XHRcdFx0Lm1hcCggKCBwYXJhbWV0ZXIgKSA9PiB7IHJldHVybiBwYXJzZSggcGFyYW1ldGVyICkgfSApO1xuXG5cdFx0XHRcdHJldHVybiBVMjAwYiggcGFyYW1ldGVyXG5cdFx0XHRcdFx0LmZpbHRlciggKCBtZXNzYWdlICkgPT4geyByZXR1cm4gdHJ1bHkoIG1lc3NhZ2UgKTsgfSApIClcblx0XHRcdFx0XHQuam9pbiggXCIsIFwiICk7XG5cblx0XHRcdH1lbHNle1xuXHRcdFx0XHRyZXR1cm4gcGFyc2UoIHBhcmFtZXRlciApO1xuXHRcdFx0fVxuXHRcdH0gKVxuXHRcdC5yZXZlcnNlKCApXG5cdFx0LmNvbmNhdCggWyB0aGlzLm1lc3NhZ2UgXSApXG5cdFx0LmZpbHRlciggKCBtZXNzYWdlICkgPT4geyByZXR1cm4gdHJ1bHkoIG1lc3NhZ2UgKTsgfSApXG5cdFx0LnJldmVyc2UoICkgKVxuXHRcdC5qb2luKCBcIiwgXCIgKTtcblxuXHR0aGlzLnJlcG9ydCggKTtcblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qO1xuXHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0U2lsZW5jZSB0aGUgbG9nZ2luZyBjYXBhYmlsaXRpZXMuXG5cdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5PbGl2YW50LnByb3RvdHlwZS5zaWxlbmNlID0gZnVuY3Rpb24gc2lsZW5jZSggKXtcblx0dGhpcy5zaWxlbnQgPSB0cnVlO1xuXG5cdHJldHVybiB0aGlzO1xufTtcblxuLyo7XG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHREZWFjdGl2YXRlIHNpbGVuY2UuXG5cdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5PbGl2YW50LnByb3RvdHlwZS5zaG91dCA9IGZ1bmN0aW9uIHNob3V0KCApe1xuXHR0aGlzLnNpbGVudCA9IGZhbHNlO1xuXG5cdHJldHVybiB0aGlzO1xufTtcblxuLyo7XG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRMb2cgdGhlIGRhdGEuXG5cdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5PbGl2YW50LnByb3RvdHlwZS5wcm9tcHQgPSBmdW5jdGlvbiBwcm9tcHQoICl7XG5cdHRoaXMucmVtaW5kLmFwcGx5KCB0aGlzLCByYXplKCBhcmd1bWVudHMgKSApO1xuXG5cdHNuYXBkLmJpbmQoIHRoaXMgKVxuXHRcdCggZnVuY3Rpb24gZGVsYXkoICl7XG5cdFx0XHRpZiggdGhpcy5kZXB0aCA9PT0gMiApe1xuXHRcdFx0XHR0aGlzLmxvZyggdGhpcy5nZXRNZXNzYWdlKCApICk7XG5cblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCBkb3VidCggdGhpcy5zdGFjaywgQVJSQVkgKSAmJiBmaWxsZWQoIHRoaXMuc3RhY2sgKSApe1xuXHRcdFx0XHR0aGlzLmxvZyggdGhpcy5nZXRNZXNzYWdlKCApICk7XG5cblx0XHRcdH1lbHNlIGlmKCB0aGlzLmRlcHRoID4gNSApe1xuXHRcdFx0XHR0aGlzLmdldFRyYWNlKCAoIGVycm9yLCBzdGFjayApID0+IHtcblx0XHRcdFx0XHRpZiggY2xhem9mKCBlcnJvciwgRXJyb3IgKSApe1xuXHRcdFx0XHRcdFx0dGhpcy5yZW1pbmQoIGBlcnJvciBnZXR0aW5nIHN0YWNrIHRyYWNlLCAkeyBlcnJvciB9YCApO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmKCB0cnV1KCBzdGFjayApICl7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YWNrID0gc3RhY2s7XG5cblx0XHRcdFx0XHRcdHRoaXMubG9nKCB0aGlzLmdldE1lc3NhZ2UoICkgKTtcblxuXHRcdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdFx0dGhpcy5sb2coIHRoaXMuZ2V0TWVzc2FnZSggKSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSApO1xuXG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0dGhpcy5sb2coIHRoaXMuZ2V0TWVzc2FnZSggKSApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qO1xuXHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0U2V0IHRoZSByZWRpcmVjdGlvbiBjb25maWd1cmF0aW9uLlxuXG5cdFx0VGhpcyB3aWxsIHRyaWdnZXIgcmVkaXJlY3QgcmVzcG9uc2Ugd2hlbiBzZW5kIGlzIGNhbGxlZC5cblxuXHRcdERlZmF1bHQgb2YgREVGQVVMVF9SRURJUkVDVF9QQVRIIHdpbGwgYmUgdXNlZCBpZiBwYXRoIGlzIG5vdCBnaXZlbi5cblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLnJlZGlyZWN0ID0gZnVuY3Rpb24gcmVkaXJlY3QoIHBhdGggKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJwYXRoOnJlcXVpcmVkXCI6IFwic3RyaW5nXCJcblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdHRoaXMuc3RhdGUgPSBSRURJUkVDVDtcblx0dGhpcy5wYXRoID0gcGF0aDtcblxuXHRpZiggIXRoaXMucGF0aCAmJiBwcm90eXBlKCBERUZBVUxUX1JFRElSRUNUX1BBVEgsIFNUUklORyApICl7XG5cdFx0dGhpcy5wYXRoID0gREVGQVVMVF9SRURJUkVDVF9QQVRIO1xuXG5cdH1lbHNle1xuXHRcdHRoaXMucmVzZXQoIElzc3VlLCB0cnVlIClcblx0XHRcdC5zaWxlbmNlKCApXG5cdFx0XHQucHJvbXB0KCBcImVtcHR5IHBhdGggdG8gYmUgcmVkaXJlY3RlZFwiICk7XG5cdH1cblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbk9saXZhbnQucHJvdG90eXBlLmZsdXNoU3RhdGUgPSBmdW5jdGlvbiBmbHVzaFN0YXRlKCApe1xuXHR0aGlzLnN0YXRlID0gXCJcIjtcblx0dGhpcy5wYXRoID0gXCJcIjtcblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qO1xuXHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0UGFzcyB0aGUgaW5zdGFuY2UgdG8gdGhlIGNhbGxiYWNrIGZpcnN0IHBhcmFtZXRlci5cblxuXHRcdFRoaXMgZm9sbG93cyB0aGUgc3RhbmRhcmQgZXJyb3ItcmVzdWx0LW9wdGlvbiBjb252ZW50aW9uLlxuXG5cdFx0SGFzIHNwZWNpYWwgc3VwcG9ydCBmb3IgZ2x1Y29zZSBjb2F0ZWQgb3B0aW9uLlxuXHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuT2xpdmFudC5wcm90b3R5cGUucGFzcyA9IGZ1bmN0aW9uIHBhc3MoIGNhbGxiYWNrLCByZXN1bHQsIG9wdGlvbiApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcImNhbGxiYWNrOnJlcXVpcmVkXCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0aWYoICFwcm90eXBlKCBjYWxsYmFjaywgRlVOQ1RJT04gKSApe1xuXHRcdHRoaXMucmVzZXQoIEJ1ZywgdHJ1ZSApXG5cdFx0XHQucHJvbXB0KCBcImludmFsaWQgY2FsbGJhY2tcIiApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRpZiggdHJ1dSggb3B0aW9uICkgJiYgdHJ1dSggb3B0aW9uLnNlbGYgKSAmJiBvcHRpb24uQ09BVEVEID09PSBDT0FURUQgKXtcblx0XHR0aGlzLnNldCggQ09OVEVYVCwgb3B0aW9uLnNlbGYgKTtcblx0fVxuXG5cdGlmKCB0aGlzLmNvbnRleHQgKXtcblx0XHRjYWxsYmFjayA9IGNhbGxlZC5iaW5kKCB0aGlzLmNvbnRleHQgKSggY2FsbGJhY2sgKTtcblxuXHR9ZWxzZXtcblx0XHRjYWxsYmFjayA9IGNhbGxlZCggY2FsbGJhY2sgKTtcblx0fVxuXG5cdGNhbGxiYWNrKCB0aGlzLCByZXN1bHQsIG9wdGlvbiApO1xuXG5cdHJldHVybiB0aGlzO1xufTtcblxuaGFyZGVuKCBcImNyZWF0ZVwiLCBmdW5jdGlvbiBjcmVhdGUoIG5hbWUsIG9wdGlvbiApe1xuXHRsZXQgTG9nRW5naW5lID0gZGlhdG9tKCBuYW1lICk7XG5cblx0aGVyZWRpdG8oIExvZ0VuZ2luZSwgT2xpdmFudCApO1xuXG5cdExvZ0VuZ2luZS5wcm90b3R5cGUubmFtZSA9IG9wdGlvbi5uYW1lO1xuXHRMb2dFbmdpbmUucHJvdG90eXBlLnN0YXR1cyA9IG9wdGlvbi5zdGF0dXM7XG5cdExvZ0VuZ2luZS5wcm90b3R5cGUuY29kZSA9IG9wdGlvbi5jb2RlO1xuXHRMb2dFbmdpbmUucHJvdG90eXBlLnNpbGVudCA9IG9wdGlvbi5zaWxlbnQ7XG5cdExvZ0VuZ2luZS5wcm90b3R5cGUuZGVwdGggPSBvcHRpb24uZGVwdGg7XG5cdExvZ0VuZ2luZS5wcm90b3R5cGUuY29sb3IgPSBvcHRpb24uY29sb3I7XG5cdExvZ0VuZ2luZS5wcm90b3R5cGUuaW5zcGVjdCA9IG9wdGlvbi5pbnNwZWN0O1xuXHRMb2dFbmdpbmUucHJvdG90eXBlLmluaXRpYWxpemUgPSBvcHRpb24uaW5pdGlhbGl6ZSB8fFxuXHRcdGZ1bmN0aW9uIGluaXRpYWxpemUoICl7XG5cdFx0XHR0aGlzLm5hbWUgPSBvcHRpb24ubmFtZTtcblxuXHRcdFx0dGhpcy5zdGF0dXMgPSBvcHRpb24uc3RhdHVzO1xuXG5cdFx0XHR0aGlzLmNvZGUgPSBvcHRpb24uY29kZTtcblxuXHRcdFx0dGhpcy5zaWxlbnQgPSBvcHRpb24uc2lsZW50O1xuXG5cdFx0XHR0aGlzLmRlcHRoID0gb3B0aW9uLmRlcHRoO1xuXHRcdH07XG5cblx0c3ltYmlvdGUoIExvZ0VuZ2luZSApO1xuXG5cdGhhcmRlbiggTG9nRW5naW5lLm5hbWUsIExvZ0VuZ2luZSApO1xufSwgT2xpdmFudCApO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9saXZhbnQ7XG4iXX0=
