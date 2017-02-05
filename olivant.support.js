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
harden("DEFAULT_REDIRECT_PATH", window.DEFAULT_REDIRECT_PATH || "/view/notify");
//: @end-client


var Olivant = diatom("Olivant");

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

	this.log = option.log || this.log || (asea.client ? console.debug : console.log);

	if (falze(this.context) && option.self) {
		this.context = option.self;
	}

	this.silent = kein(option, "silent") ? option.silent : kein(this, "silent") ? this.silent : true;

	//: Depth dictates refined settings of this procedure.
	this.depth = kein(option, "depth") ? option.depth : kein(this, "depth") ? this.depth : +this.silent;

	//: Depth is only from 1-0 or 1-2345-6789-0.
	//: Depth 2 is deep silent depth.
	this.depth = this.depth % 10;

	if (asea.server) {
		this.color = option.color || this.color || chalk.white;
	}

	this.state = "";

	this.stack = option.stack || this.stack || [];

	this.message = option.message || this.message || "";

	this.inspect = option.inspect || this.inspect || { "depth": 1, "length": 200 };

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
			"status": this.code,
			"data": message
		});

		this.flushState();
	} else if (asea.server && falzy(this.state) && clazof(procedure, http.ServerResponse)) {
		message.send(procedure, this.code);
	} else if (asea.client && this.state == REDIRECT && protype(this.path, STRING) && truly(this.path)) {
		segway({
			"path": this.path,
			"status": this.code,
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
	@static-method-documentation:
		Crush the parameter extracting string information.

		Special support for glucose coated parameters.
	@end-static-method-documentation
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

	if (this.context) {
		callback = called.bind(this.context)(callback);
	} else {
		callback = called(callback);
	}

	if (truu(option) && truu(option.self) && option.COATED === COATED) {
		this.set(CONTEXT, option.self);
	}

	callback(this, result, option);

	return this;
};

harden("create", function create(name, option) {
	var Clone = diatom(name);

	heredito(Clone, Olivant);

	Clone.prototype.name = option.name;
	Clone.prototype.status = option.status;
	Clone.prototype.code = option.code;
	Clone.prototype.silent = option.silent;
	Clone.prototype.depth = option.depth;
	Clone.prototype.color = option.color;
	Clone.prototype.inspect = option.inspect;
	Clone.prototype.initialize = option.initialize || function initialize() {
		this.name = option.name;

		this.status = option.status;

		this.code = option.code;

		this.silent = option.silent;

		this.depth = option.depth;
	};

	symbiote(Clone);

	harden(name, Clone);
}, Olivant);

module.exports = Olivant;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9saXZhbnQuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhcmlkIiwicmVxdWlyZSIsImFzZWEiLCJidWRnZSIsImNhbGxlZCIsImNsYXpvZiIsImRpYXRvbSIsImRvdWJ0IiwiRXRoZXJuaXR5IiwiZmFsemUiLCJmYWx6eSIsImZpbGxlZCIsImdsdWNvc2UiLCJoYXJkZW4iLCJoZXJlZGl0byIsImtlaW4iLCJtZWVrIiwib3V0cmUiLCJwbG91Z2giLCJwcm90eXBlIiwicmF6ZSIsInNuYXBkIiwic3ltYmlvdGUiLCJ0cnVseSIsInRydXUiLCJVMjAwYiIsInRyYWNlIiwid2luZG93IiwiREVGQVVMVF9SRURJUkVDVF9QQVRIIiwiT2xpdmFudCIsInByb3RvdHlwZSIsImluaXRpYWxpemUiLCJvcHRpb24iLCJkdXJhdGlvbiIsIkRhdGUiLCJub3ciLCJhcmd1bWVudHMiLCJPQkpFQ1QiLCJBUkdVTUVOVFMiLCJFcnJvciIsIkNPQVRFRCIsImxvYWQiLCJwYXJhbWV0ZXIiLCJsZW5ndGgiLCJlcnJvciIsInJlbWluZCIsImFwcGx5IiwibWVzc2FnZSIsImNvbmNhdCIsIlNUUklORyIsImNvbnN0cnVjdG9yIiwiRlVOQ1RJT04iLCJuYW1lIiwiYmluZCIsIkVDSE8iLCJzdGF0dXMiLCJjb2RlIiwiRUNIT19DT0RFIiwibG9nIiwiY2xpZW50IiwiY29uc29sZSIsImRlYnVnIiwiY29udGV4dCIsInNlbGYiLCJzaWxlbnQiLCJkZXB0aCIsInNlcnZlciIsImNvbG9yIiwiY2hhbGsiLCJ3aGl0ZSIsInN0YXRlIiwic3RhY2siLCJpbnNwZWN0IiwicmVkc2VhIiwiSXNzdWUiLCJibGFja3NlYSIsIkZhdGFsIiwicmVzZXQiLCJyZW5ldyIsImxvZ0VuZ2luZSIsIkJPT0xFQU4iLCJkYXRhIiwic2lsZW5jZSIsInByb21wdCIsInRvU3RyaW5nIiwiam9pbiIsInZhbHVlT2YiLCJnZXRUaW1lc3RhbXAiLCJ0aW1lc3RhbXAiLCJwcmludFRpbWUiLCJkaW0iLCJjb2xvck1lc3NhZ2UiLCJyZXNvbHZlTWVzc2FnZSIsImZpbHRlciIsInJlc29sdmVUcmFjZSIsIkFSUkFZIiwibWFwIiwiZnJhbWUiLCJyZWQiLCJnZXRNZXNzYWdlIiwiZ2V0VHJhY2UiLCJjYWxsYmFjayIsImZyb21FcnJvciIsInRoZW4iLCJmcmFtZUxpc3QiLCJjYXRjaCIsImdldCIsInBhcnNlIiwic2V0IiwicHJvcGVydHkiLCJ2YWx1ZSIsIkxPRyIsIlNJTEVOVCIsIkNPTlRFWFQiLCJzZW5kIiwicmF3IiwicHJvY2VkdXJlIiwiUkVESVJFQ1QiLCJwYXRoIiwiaHR0cCIsIlNlcnZlclJlc3BvbnNlIiwic2Vnd2F5IiwiZmx1c2hTdGF0ZSIsInJlcG9ydCIsImRlbGF5IiwicHJvY2VzcyIsImVtaXQiLCJldmVudCIsIkV2ZW50IiwiZG9jdW1lbnQiLCJkaXNwYXRjaEV2ZW50IiwiY3J1c2giLCJzcGFjZSIsInV0aWwiLCJyZXBsYWNlIiwic3Vic3RyaW5nIiwiTlVNQkVSIiwib25FYWNoUGFyYW1ldGVyIiwiQVNfQVJSQVkiLCJyZXZlcnNlIiwic2hvdXQiLCJyZWRpcmVjdCIsInBhc3MiLCJyZXN1bHQiLCJCdWciLCJjcmVhdGUiLCJDbG9uZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNGQSxJQUFNQSxPQUFPQyxRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1DLE9BQU9ELFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTUUsUUFBUUYsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNRyxTQUFTSCxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1JLFNBQVNKLFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUssU0FBU0wsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNTSxRQUFRTixRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1PLFlBQVlQ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QUFPRCxVQUFQLElBQzVCLFNBQVNBLFVBQVQsR0FBc0I7QUFDckIsT0FBS3FCLElBQUwsR0FBWXBCLE9BQU9vQixJQUFuQjs7QUFFQSxPQUFLRyxNQUFMLEdBQWN2QixPQUFPdUIsTUFBckI7O0FBRUEsT0FBS0MsSUFBTCxHQUFZeEIsT0FBT3dCLElBQW5COztBQUVBLE9BQUtRLE1BQUwsR0FBY2hDLE9BQU9nQyxNQUFyQjs7QUFFQSxPQUFLQyxLQUFMLEdBQWFqQyxPQUFPaUMsS0FBcEI7QUFDQSxFQVhGOztBQWFBM0MsVUFBVTRILEtBQVY7O0FBRUFySSxRQUFRdUMsSUFBUixFQUFjOEYsS0FBZDtBQUNBLENBNUJELEVBNEJHckgsT0E1Qkg7O0FBOEJBc0gsT0FBT0MsT0FBUCxHQUFpQnZILE9BQWpCIiwiZmlsZSI6Im9saXZhbnQuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwib2xpdmFudFwiLFxuXHRcdFx0XCJwYXRoXCI6IFwib2xpdmFudC9vbGl2YW50LmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJvbGl2YW50LmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcIm9saXZhbnRcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9vbGl2YW50LmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwib2xpdmFudC10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlLFxuXHRcdFx0XCJjbGFzc1wiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdEVjaG8gdGhlIGRlc3RydWN0aW9uIGNhdXNlZCBieSB5b3VyIGNvZGUuXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFyaWRcIjogXCJhcmlkXCIsXG5cdFx0XHRcImFzZWFcIjogXCJhc2VhXCIsXG5cdFx0XHRcImJ1ZGdlXCI6IFwiYnVkZ2VcIixcblx0XHRcdFwiYmxhY2tzZWFcIjogXCJibGFja3NlYVwiLFxuXHRcdFx0XCJjYWxsZWRcIjogXCJjYWxsZWRcIixcblx0XHRcdFwiY2hhbGtcIjogXCJjaGFsa1wiLFxuXHRcdFx0XCJjbGF6b2ZcIjogXCJjbGF6b2ZcIixcblx0XHRcdFwiZGV4aXN0XCI6IFwiZGV4aXN0XCIsXG5cdFx0XHRcImRpYXRvbVwiOiBcImRpYXRvbVwiLFxuXHRcdFx0XCJFdGhlcm5pdHlcIjogXCJldGhlcm5pdHlcIixcblx0XHRcdFwiRXZlbnRFbWl0dGVyXCI6IFwiZXZlbnRzXCIsXG5cdFx0XHRcImZhbHplXCI6IFwiZmFsemVcIixcblx0XHRcdFwiZmFsenlcIjogXCJmYWx6eVwiLFxuXHRcdFx0XCJnbHVjb3NlXCI6IFwiZ2x1Y29zZVwiLFxuXHRcdFx0XCJoYXJkZW5cIjogXCJoYXJkZW5cIixcblx0XHRcdFwiaGVyZWRpdG9cIjogXCJoZXJlZGl0b1wiLFxuXHRcdFx0XCJrZWluXCI6IFwia2VpblwiLFxuXHRcdFx0XCJodHRwXCI6IFwiaHR0cFwiLFxuXHRcdFx0XCJtZWVrXCI6IFwibWVla1wiXG5cdFx0XHRcIm91dHJlXCI6IFwib3V0cmVcIixcblx0XHRcdFwicGxvdWdoXCI6IFwicGxvdWdoXCIsXG5cdFx0XHRcInByb3R5cGVcIjogXCJwcm90eXBlXCIsXG5cdFx0XHRcInJhemVcIjogXCJyYXplXCIsXG5cdFx0XHRcInJlZHNlYVwiOiBcInJlZHNlYVwiLFxuXHRcdFx0XCJzbmFwZFwiOiBcInNuYXBkXCIsXG5cdFx0XHRcInNlZ3dheVwiOiBcInNlZ3dheVwiLFxuXHRcdFx0XCJzeW1iaW90ZVwiOiBcInN5bWJpb3RlXCIsXG5cdFx0XHRcInRyYWNlXCI6IFsgXCJzdGFja3RyYWNlLWpzXCIsIFwic3RhY2stdHJhY2VcIiBdLFxuXHRcdFx0XCJ0cnVseVwiOiBcInRydWx5XCIsXG5cdFx0XHRcInRydXVcIjogXCJ0cnV1XCIsXG5cdFx0XHRcIlUyMDBiXCI6IFwidTIwMGJcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhcmlkID0gcmVxdWlyZSggXCJhcmlkXCIgKTtcbmNvbnN0IGFzZWEgPSByZXF1aXJlKCBcImFzZWFcIiApO1xuY29uc3QgYnVkZ2UgPSByZXF1aXJlKCBcImJ1ZGdlXCIgKTtcbmNvbnN0IGNhbGxlZCA9IHJlcXVpcmUoIFwiY2FsbGVkXCIgKTtcbmNvbnN0IGNsYXpvZiA9IHJlcXVpcmUoIFwiY2xhem9mXCIgKTtcbmNvbnN0IGRpYXRvbSA9IHJlcXVpcmUoIFwiZGlhdG9tXCIgKTtcbmNvbnN0IGRvdWJ0ID0gcmVxdWlyZSggXCJkb3VidFwiICk7XG5jb25zdCBFdGhlcm5pdHkgPSByZXF1aXJlKCBcImV0aGVybml0eVwiICk7XG5jb25zdCBmYWx6ZSA9IHJlcXVpcmUoIFwiZmFsemVcIiApO1xuY29uc3QgZmFsenkgPSByZXF1aXJlKCBcImZhbHp5XCIgKTtcbmNvbnN0IGZpbGxlZCA9IHJlcXVpcmUoIFwiZmlsbGVkXCIgKTtcbmNvbnN0IGdsdWNvc2UgPSByZXF1aXJlKCBcImdsdWNvc2VcIiApO1xuY29uc3QgaGFyZGVuID0gcmVxdWlyZSggXCJoYXJkZW5cIiApO1xuY29uc3QgaGVyZWRpdG8gPSByZXF1aXJlKCBcImhlcmVkaXRvXCIgKTtcbmNvbnN0IGtlaW4gPSByZXF1aXJlKCBcImtlaW5cIiApO1xuY29uc3QgbWVlayA9IHJlcXVpcmUoIFwibWVla1wiICk7XG5jb25zdCBvdXRyZSA9IHJlcXVpcmUoIFwib3V0cmVcIiApO1xuY29uc3QgcGxvdWdoID0gcmVxdWlyZSggXCJwbG91Z2hcIiApO1xuY29uc3QgcHJvdHlwZSA9IHJlcXVpcmUoIFwicHJvdHlwZVwiICk7XG5jb25zdCByYXplID0gcmVxdWlyZSggXCJyYXplXCIgKTtcbmNvbnN0IHNuYXBkID0gcmVxdWlyZSggXCJzbmFwZFwiICk7XG5jb25zdCBzeW1iaW90ZSA9IHJlcXVpcmUoIFwic3ltYmlvdGVcIiApO1xuY29uc3QgdHJ1bHkgPSByZXF1aXJlKCBcInRydWx5XCIgKTtcbmNvbnN0IHRydXUgPSByZXF1aXJlKCBcInRydXVcIiApO1xuY29uc3QgVTIwMGIgPSByZXF1aXJlKCBcInUyMDBiXCIgKTtcblxuLy86IEBjbGllbnQ6XG5jb25zdCB0cmFjZSA9IHJlcXVpcmUoIFwic3RhY2t0cmFjZS1qc1wiICk7XG5oYXJkZW4oIFwiREVGQVVMVF9SRURJUkVDVF9QQVRIXCIsIHdpbmRvdy5ERUZBVUxUX1JFRElSRUNUX1BBVEggfHwgXCIvdmlldy9ub3RpZnlcIiApO1xuLy86IEBlbmQtY2xpZW50XG5cblxuXG5jb25zdCBPbGl2YW50ID0gZGlhdG9tKCBcIk9saXZhbnRcIiApO1xuXG5oYXJkZW4oIFwiRUNIT1wiLCBcImVjaG9cIiApO1xuaGFyZGVuKCBcIkVDSE9fQ09ERVwiLCAyMDAgKTtcblxuaGFyZGVuKCBcIlJFRElSRUNUXCIsIFwicmVkaXJlY3RcIiApO1xuaGFyZGVuKCBcIkNPTlRFWFRcIiwgXCJjb250ZXh0XCIgKTtcbmhhcmRlbiggXCJMT0dcIiwgXCJsb2dcIiApO1xuaGFyZGVuKCBcIlNJTEVOVFwiLCBcInNpbGVudFwiICk7XG5cbi8qO1xuXHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0T3B0aW9uIHNob3VsZCBub3QgYmUgZ2x1Y29zZSBjb2F0ZWQuXG5cdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5PbGl2YW50LnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gaW5pdGlhbGl6ZSggb3B0aW9uICl7XG5cdHRoaXMuZHVyYXRpb24gPSBEYXRlLm5vdyggKTtcblxuXHRpZiggcHJvdHlwZSggYXJndW1lbnRzWyAwIF0sIE9CSkVDVCApICYmXG5cdFx0IWRvdWJ0KCBhcmd1bWVudHNbIDAgXSwgQVJHVU1FTlRTICkgJiZcblx0XHQhKCBjbGF6b2YoIGFyZ3VtZW50c1sgMCBdLCBFcnJvciApICkgJiZcblx0XHRvcHRpb24uQ09BVEVEICE9PSBDT0FURUQgKVxuXHR7XG5cdFx0dGhpcy5sb2FkKCBvcHRpb24gKTtcblxuXHR9ZWxzZXtcblx0XHR0aGlzLmxvYWQoICk7XG5cdH1cblxuXHRsZXQgcGFyYW1ldGVyID0gYXJndW1lbnRzWyAwIF07XG5cblx0aWYoIGFyZ3VtZW50cy5sZW5ndGggPT0gMCApe1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH1lbHNlIGlmKCBjbGF6b2YoIHBhcmFtZXRlciwgRXJyb3IgKSApe1xuXHRcdGxldCBlcnJvciA9IHBhcmFtZXRlcjtcblxuXHRcdHRoaXMucmVtaW5kLmFwcGx5KCB0aGlzLCBbIGVycm9yLm1lc3NhZ2UsIGVycm9yIF0uY29uY2F0KCBidWRnZSggYXJndW1lbnRzICkgKSApO1xuXG5cdH1lbHNlIGlmKCBjbGF6b2YoIHBhcmFtZXRlciwgT2xpdmFudCApICl7XG5cdFx0dGhpcy5sb2FkKCBwYXJhbWV0ZXIgKTtcblxuXHR9ZWxzZSBpZiggZG91YnQoIHBhcmFtZXRlciwgQVJHVU1FTlRTICkgKXtcblx0XHR0aGlzLnJlbWluZC5hcHBseSggdGhpcywgcGxvdWdoKCBwYXJhbWV0ZXIgKSApO1xuXG5cdH1lbHNlIGlmKCBwcm90eXBlKCBwYXJhbWV0ZXIsIFNUUklORyApICl7XG5cdFx0dGhpcy5yZW1pbmQuYXBwbHkoIHRoaXMsIHJhemUoIGFyZ3VtZW50cyApICk7XG5cblx0fWVsc2UgaWYoIHByb3R5cGUoIHBhcmFtZXRlciwgT0JKRUNUICkgJiZcblx0XHRwYXJhbWV0ZXIuY29uc3RydWN0b3IgJiZcblx0XHRwcm90eXBlKCBwYXJhbWV0ZXIuY29uc3RydWN0b3IsIEZVTkNUSU9OICkgJiZcblx0XHRwYXJhbWV0ZXIuY29uc3RydWN0b3IubmFtZSAhPSBcIkZ1bmN0aW9uXCIgJiZcblx0XHRjbGF6b2YoIHBhcmFtZXRlciwgcGFyYW1ldGVyLmNvbnN0cnVjdG9yICkgKVxuXHR7XG5cdFx0dGhpcy5sb2FkKCBwYXJhbWV0ZXIgKTtcblxuXHRcdHRoaXMucmVtaW5kLmFwcGx5KCB0aGlzLCByYXplKCBhcmd1bWVudHMgKSApO1xuXG5cdH1lbHNlIGlmKCBwcm90eXBlKCBwYXJhbWV0ZXIsIE9CSkVDVCApICl7XG5cdFx0dGhpcy5yZW1pbmQuYXBwbHkoIHRoaXMsIHJhemUoIGFyZ3VtZW50cyApICk7XG5cdH1cblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbk9saXZhbnQucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbiBsb2FkKCBvcHRpb24gKXtcblx0b3B0aW9uID0gZ2x1Y29zZS5iaW5kKCB0aGlzICkoIG9wdGlvbiApO1xuXG5cdHRoaXMubmFtZSA9IG9wdGlvbi5uYW1lIHx8IHRoaXMubmFtZSB8fCBFQ0hPXG5cblx0dGhpcy5zdGF0dXMgPSBvcHRpb24uc3RhdHVzIHx8IHRoaXMuc3RhdHVzIHx8IEVDSE87XG5cblx0dGhpcy5jb2RlID0gb3B0aW9uLmNvZGUgfHwgdGhpcy5jb2RlIHx8IEVDSE9fQ09ERTtcblxuXHR0aGlzLmxvZyA9IG9wdGlvbi5sb2cgfHwgdGhpcy5sb2cgfHwgKCAoIGFzZWEuY2xpZW50ICk/IGNvbnNvbGUuZGVidWcgOiBjb25zb2xlLmxvZyApO1xuXG5cdGlmKCBmYWx6ZSggdGhpcy5jb250ZXh0ICkgJiYgb3B0aW9uLnNlbGYgKXtcblx0XHR0aGlzLmNvbnRleHQgPSBvcHRpb24uc2VsZjtcblx0fVxuXG5cdHRoaXMuc2lsZW50ID0ga2Vpbiggb3B0aW9uLCBcInNpbGVudFwiICk/IG9wdGlvbi5zaWxlbnQgOlxuXHRcdGtlaW4oIHRoaXMsIFwic2lsZW50XCIgKT8gdGhpcy5zaWxlbnQgOiB0cnVlO1xuXG5cdC8vOiBEZXB0aCBkaWN0YXRlcyByZWZpbmVkIHNldHRpbmdzIG9mIHRoaXMgcHJvY2VkdXJlLlxuXHR0aGlzLmRlcHRoID0ga2Vpbiggb3B0aW9uLCBcImRlcHRoXCIgKT8gb3B0aW9uLmRlcHRoIDpcblx0XHRrZWluKCB0aGlzLCBcImRlcHRoXCIgKT8gdGhpcy5kZXB0aCA6ICt0aGlzLnNpbGVudDtcblxuXHQvLzogRGVwdGggaXMgb25seSBmcm9tIDEtMCBvciAxLTIzNDUtNjc4OS0wLlxuXHQvLzogRGVwdGggMiBpcyBkZWVwIHNpbGVudCBkZXB0aC5cblx0dGhpcy5kZXB0aCA9IHRoaXMuZGVwdGggJSAxMDtcblxuXHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHR0aGlzLmNvbG9yID0gb3B0aW9uLmNvbG9yIHx8IHRoaXMuY29sb3IgfHwgY2hhbGsud2hpdGU7XG5cdH1cblxuXHR0aGlzLnN0YXRlID0gXCJcIjtcblxuXHR0aGlzLnN0YWNrID0gb3B0aW9uLnN0YWNrIHx8IHRoaXMuc3RhY2sgfHwgWyBdO1xuXG5cdHRoaXMubWVzc2FnZSA9IG9wdGlvbi5tZXNzYWdlIHx8IHRoaXMubWVzc2FnZSB8fCBcIlwiO1xuXG5cdHRoaXMuaW5zcGVjdCA9IG9wdGlvbi5pbnNwZWN0IHx8IHRoaXMuaW5zcGVjdCB8fCB7IFwiZGVwdGhcIjogMSwgXCJsZW5ndGhcIjogMjAwIH07XG5cblx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0cmVkc2VhKCBJc3N1ZSApO1xuXG5cdFx0YmxhY2tzZWEoIEZhdGFsICk7XG5cdH1cblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qO1xuXHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0TW9kaWZpZXMgdGhlIGxvZyBlbmdpbmUgd2hpbGUgbWFpbnRhaW5pbmcgZW52aXJvbm1lbnQgcHJvcGVydGllcy5cblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gcmVzZXQoIG9wdGlvbiwgcmVuZXcgKXtcblx0aWYoIHByb3R5cGUoIG9wdGlvbiwgRlVOQ1RJT04gKSAmJiBjbGF6b2YoIG9wdGlvbiwgT2xpdmFudCApICl7XG5cdFx0bGV0IGxvZ0VuZ2luZSA9IG9wdGlvbjtcblxuXHRcdGlmKCBwcm90eXBlKCByZW5ldywgQk9PTEVBTiApICYmIHJlbmV3ICl7XG5cdFx0XHRsZXQgZGF0YSA9IHtcblx0XHRcdFx0XCJtZXNzYWdlXCI6IHRoaXMubWVzc2FnZSxcblx0XHRcdFx0XCJzdGFja1wiOiB0aGlzLnN0YWNrXG5cdFx0XHR9O1xuXG5cdFx0XHRyZXR1cm4gbG9nRW5naW5lKCBkYXRhICk7XG5cblx0XHR9ZWxzZXtcblx0XHRcdHRoaXMubG9hZCggbG9nRW5naW5lLnByb3RvdHlwZSApO1xuXHRcdH1cblxuXHR9ZWxzZSBpZiggcHJvdHlwZSggb3B0aW9uLCBPQkpFQ1QgKSApe1xuXHRcdHRoaXMubG9hZCggb3B0aW9uICk7XG5cblx0fWVsc2V7XG5cdFx0dGhpcy5yZXNldCggSXNzdWUsIHRydWUgKVxuXHRcdFx0LnNpbGVuY2UoIClcblx0XHRcdC5wcm9tcHQoIFwiY2Fubm90IHJlc2V0IHRvIGdpdmVuIG9wdGlvblwiLCBvcHRpb24gKTtcblx0fVxuXG5cdHJldHVybiB0aGlzO1xufTtcblxuT2xpdmFudC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyggKXtcblx0cmV0dXJuIFUyMDBiKCBvdXRyZSggWyB0aGlzLm5hbWUsIHRoaXMuc3RhdHVzLCB0aGlzLm1lc3NhZ2UgXSApICkuam9pbiggXCIsIFwiICk7XG59O1xuXG5PbGl2YW50LnByb3RvdHlwZS52YWx1ZU9mID0gZnVuY3Rpb24gdmFsdWVPZiggKXtcblx0cmV0dXJuIFUyMDBiKCBvdXRyZSggWyB0aGlzLm5hbWUsIHRoaXMuc3RhdHVzLCB0aGlzLm1lc3NhZ2UgXSApICkuam9pbiggXCIsIFwiICk7XG59O1xuXG5PbGl2YW50LnByb3RvdHlwZS5nZXRUaW1lc3RhbXAgPSBmdW5jdGlvbiBnZXRUaW1lc3RhbXAoICl7XG5cdGxldCB0aW1lc3RhbXAgPSBFdGhlcm5pdHkoICkucHJpbnRUaW1lKCB0cnVlICk7XG5cblx0dGltZXN0YW1wID0gYCR7IHRpbWVzdGFtcCB9IHwgJHsgKCBEYXRlLm5vdyggKSAtIHRoaXMuZHVyYXRpb24gKSB9bXNgO1xuXG5cdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdHJldHVybiBjaGFsay5kaW0oIHRpbWVzdGFtcCApO1xuXHR9XG5cblx0cmV0dXJuIHRpbWVzdGFtcDtcbn07XG5cbk9saXZhbnQucHJvdG90eXBlLmNvbG9yTWVzc2FnZSA9IGZ1bmN0aW9uIGNvbG9yTWVzc2FnZSggY29sb3IsIG1lc3NhZ2UgKXtcblx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0aWYoIHByb3R5cGUoIGNvbG9yLCBGVU5DVElPTiApICl7XG5cdFx0XHRyZXR1cm4gY29sb3IoIG1lc3NhZ2UgKTtcblxuXHRcdH1lbHNlIGlmKCBwcm90eXBlKCBjb2xvciwgU1RSSU5HICkgJiYgdHJ1bHkoIGNvbG9yICkgKXtcblx0XHRcdGlmKCBrZWluKCBjaGFsaywgY29sb3IgKSAmJiBwcm90eXBlKCBjaGFsa1sgY29sb3IgXSwgRlVOQ1RJT04gKSApe1xuXHRcdFx0XHRyZXR1cm4gY2hhbGtbIGNvbG9yIF0oIG1lc3NhZ2UgKTtcblxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHRoaXMucmVtaW5kKCBgaW52YWxpZCBtZXNzYWdlIGNvbG9yLCAkeyBjb2xvciB9YCApO1xuXG5cdFx0XHRcdHJldHVybiBjaGFsay53aGl0ZSggbWVzc2FnZSApO1xuXHRcdFx0fVxuXG5cdFx0fWVsc2V7XG5cdFx0XHRyZXR1cm4gY2hhbGsud2hpdGUoIG1lc3NhZ2UgKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gbWVzc2FnZTtcbn07XG5cbi8qO1xuXHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0VGhlIG1lc3NhZ2UgaXMgZGl2aWRlZCBpbnRvIHRocmVlIHBhcnRzLFxuXHRcdDEuIG5hbWVzcGFjZSxcblx0XHQyLiBzdGF0dXMsXG5cdFx0My4gYWN0dWFsIG1lc3NhZ2Vcblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLnJlc29sdmVNZXNzYWdlID0gZnVuY3Rpb24gcmVzb2x2ZU1lc3NhZ2UoICl7XG5cdGxldCBtZXNzYWdlID0gVTIwMGIoIG91dHJlKCBbIHRoaXMubmFtZSwgdGhpcy5zdGF0dXMsIHRoaXMubWVzc2FnZSBdIClcblx0XHQuZmlsdGVyKCB0cnVseSApICkuam9pbiggXCIsIFwiICk7XG5cblx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0cmV0dXJuIHRoaXMuY29sb3JNZXNzYWdlKCB0aGlzLmNvbG9yLCBtZXNzYWdlICk7XG5cdH1cblxuXHRyZXR1cm4gbWVzc2FnZTtcbn07XG5cbk9saXZhbnQucHJvdG90eXBlLnJlc29sdmVUcmFjZSA9IGZ1bmN0aW9uIHJlc29sdmVUcmFjZSggKXtcblx0bGV0IHN0YWNrID0gXCJzdGFjayB0cmFjZSBub3QgYXZhaWxhYmxlXCI7XG5cblx0aWYoICF0aGlzLnNpbGVudCAmJiBkb3VidCggdGhpcy5zdGFjaywgQVJSQVkgKSAmJiBmaWxsZWQoIHRoaXMuc3RhY2sgKSApe1xuXHRcdHN0YWNrID0gdGhpcy5zdGFjaztcblxuXHRcdHN0YWNrID0gc3RhY2subWFwKCAoIGZyYW1lICkgPT4geyByZXR1cm4gZnJhbWUudG9TdHJpbmcoICk7IH0gKTtcblxuXHRcdHN0YWNrID0gVTIwMGIoIHN0YWNrICkuam9pbiggXCJcXG5cIiApO1xuXG5cdFx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0XHRyZXR1cm4gY2hhbGsuZGltLnJlZCggc3RhY2sgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc3RhY2s7XG5cdH1cblxuXHRpZiggdGhpcy5kZXB0aCA8IDUgJiZcblx0XHR0aGlzLnNpbGVudCAmJlxuXHRcdHRydXUoIHRoaXMuY29udGV4dCApICYmXG5cdCBcdHByb3R5cGUoIHRoaXMuY29udGV4dC5jb25zdHJ1Y3RvciwgRlVOQ1RJT04gKSAmJlxuXHRcdHRydWx5KCB0aGlzLmNvbnRleHQuY29uc3RydWN0b3IubmFtZSApIClcblx0e1xuXHRcdHN0YWNrID0gYGNhbGxlZCB3aXRoIGNvbnRleHQsICR7IHRoaXMuY29udGV4dC5jb25zdHJ1Y3Rvci5uYW1lIH1gO1xuXG5cdFx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0XHRyZXR1cm4gY2hhbGsuZGltKCBzdGFjayApO1xuXHRcdH1cblxuXHRcdHJldHVybiBzdGFjaztcblx0fVxuXG5cdGlmKCB0aGlzLnNpbGVudCApe1xuXHRcdHN0YWNrID0gXCJzdGFjayB0cmFjZSBpcyBub3QgYXZhaWxhYmxlIG9uIHNpbGVudCBtb2RlXCI7XG5cblx0XHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRcdHJldHVybiBjaGFsay5kaW0oIHN0YWNrICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHN0YWNrO1xuXHR9XG5cblx0aWYoIHRoaXMuZGVwdGggPiA1ICl7XG5cdFx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0XHRyZXR1cm4gY2hhbGsuZGltKCBzdGFjayApO1xuXHRcdH1cblxuXHRcdHJldHVybiBzdGFjaztcblx0fVxufTtcblxuLyo7XG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRUaGUgbWVzc2FnZSBjb25zaXN0IG9mIHRocmVlIGxheWVyIG9mIHN0cmluZ3MsXG5cdFx0XHQxLiB0aW1lc3RhbXAgaW4gdHJ1ZSB0aW1lIGZvcm1hdFxuXHRcdFx0Mi4gYWN0dWFsIHJlYWRhYmxlIG1lc3NhZ2Vcblx0XHRcdDMuIG1lc3NhZ2UgdHJhY2Ugb3IgbWVzc2FnZSBjb250ZXh0XG5cblx0XHRUaGVzZSBpbmZvcm1hdGlvbiB3aWxsIGJlIGRpdmlkZWQgdGhyb3VnaCB6ZXJvLXdpZHRoIHNwYWNlIGNvbnZlbnRpb24uXG5cdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5PbGl2YW50LnByb3RvdHlwZS5nZXRNZXNzYWdlID0gZnVuY3Rpb24gZ2V0TWVzc2FnZSggKXtcblx0cmV0dXJuIFUyMDBiKCBbXG5cdFx0dGhpcy5nZXRUaW1lc3RhbXAoICksXG5cdFx0dGhpcy5yZXNvbHZlTWVzc2FnZSggKSxcblx0XHR0aGlzLnJlc29sdmVUcmFjZSggKVxuXHRdICkuam9pbiggXCJcXG5cIiApO1xufTtcblxuLyo7XG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRUaGlzIHNob3VsZCBiZSB1c2VkIGludGVybmFsbHkgYXMgbXVjaCBhcyBwb3NzaWJsZS5cblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLmdldFRyYWNlID0gZnVuY3Rpb24gZ2V0VHJhY2UoIGNhbGxiYWNrICl7XG5cdGlmKCB0aGlzLmRlcHRoID09IDIgKXtcblx0XHR0aGlzLnJlbWluZCggXCJ0cmFjaW5nIGlzIGRpc2FibGVkIGZvciBkZXB0aCAyXCIgKS5wcm9tcHQoICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGNhbGxiYWNrID0gY2FsbGVkLmJpbmQoIHRoaXMgKSggY2FsbGJhY2sgKTtcblxuXHRzbmFwZC5iaW5kKCB0aGlzICkoIGNhbGxiYWNrLCAxMDAwICk7XG5cblx0aWYoIGFzZWEuY2xpZW50ICl7XG5cdFx0aWYoIGNsYXpvZiggdGhpcy5lcnJvciwgRXJyb3IgKSApe1xuXHRcdFx0dHJhY2UuZnJvbUVycm9yKCB0aGlzLmVycm9yIClcblx0XHRcdFx0LnRoZW4oICggZnJhbWVMaXN0ICkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuc3RhY2sgPSBmcmFtZUxpc3Q7XG5cblx0XHRcdFx0XHRjYWxsYmFjayggbnVsbCwgdGhpcy5zdGFjayApO1xuXHRcdFx0XHR9IClcblx0XHRcdFx0LmNhdGNoKCAoIGVycm9yICkgPT4geyBjYWxsYmFjayggdGhpcy5yZW1pbmQoIGVycm9yICkgKTsgfSApO1xuXG5cdFx0fWVsc2UgaWYoIHRoaXMuZGVwdGggPiA1ICl7XG5cdFx0XHR0cmFjZS5nZXQoIClcblx0XHRcdFx0LnRoZW4oICggZnJhbWVMaXN0ICkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuc3RhY2sgPSBmcmFtZUxpc3Q7XG5cblx0XHRcdFx0XHRjYWxsYmFjayggbnVsbCwgdGhpcy5zdGFjayApO1xuXHRcdFx0XHR9IClcblx0XHRcdFx0LmNhdGNoKCAoIGVycm9yICkgPT4geyBjYWxsYmFjayggdGhpcy5yZW1pbmQoIGVycm9yICkgKTsgfSApO1xuXHRcdH1cblxuXHR9ZWxzZSBpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRpZiggY2xhem9mKCB0aGlzLmVycm9yLCBFcnJvciApICl7XG5cdFx0XHR0aGlzLnN0YWNrID0gdHJhY2UucGFyc2UoIHRoaXMuZXJyb3IgKTtcblxuXHRcdFx0Y2FsbGJhY2soIG51bGwsIHRoaXMuc3RhY2sgKTtcblxuXHRcdH1lbHNlIGlmKCB0aGlzLmRlcHRoID4gNSApe1xuXHRcdFx0dGhpcy5zdGFjayA9IHRyYWNlLmdldCggKTtcblxuXHRcdFx0Y2FsbGJhY2soIG51bGwsIHRoaXMuc3RhY2sgKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qO1xuXHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0U2V0cyBhIHByb3BlcnR5IG9mIHRoaXMgbG9nIGVuZ2luZS5cblxuXHRcdE5vdCBhbGwgcHJvcGVydHkgY2FuIGJlIHNldCB0byBsaW1pdCB0aGlzIGZ1bmN0aW9uXG5cdFx0XHRmb3Igc2VjdXJpdHkgcHVycG9zZXMuXG5cdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5PbGl2YW50LnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQoIHByb3BlcnR5LCB2YWx1ZSApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcInByb3BlcnR5OnJlcXVpcmVkXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcdFwidmFsdWVcIjogXCIqXCJcblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGxldCBwYXJhbWV0ZXIgPSByYXplKCBhcmd1bWVudHMgKTtcblxuXHRpZiggcGFyYW1ldGVyLmxlbmd0aCA9PSAxICYmIHByb3R5cGUoIHBhcmFtZXRlclsgMCBdLCBPQkpFQ1QgKSApe1xuXHRcdGxldCBvcHRpb24gPSBwYXJhbWV0ZXJbIDAgXTtcblx0XHRmb3IoIGxldCBwcm9wZXJ0eSBpbiBvcHRpb24gKXtcblx0XHRcdHRoaXMuc2V0KCBwcm9wZXJ0eSwgb3B0aW9uWyBwcm9wZXJ0eSBdICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRpZiggIXByb3R5cGUoIHByb3BlcnR5LCBTVFJJTkcgKSApe1xuXHRcdHRoaXMucmVzZXQoIElzc3VlLCB0cnVlIClcblx0XHRcdC5zaWxlbmNlKCApXG5cdFx0XHQucHJvbXB0KCBcImludmFsaWQgcHJvcGVydHlcIiwgcHJvcGVydHkgKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0aWYoIHByb3R5cGUoIHByb3BlcnR5LCBTVFJJTkcgKSAmJlxuXHRcdHByb3BlcnR5ICE9IExPRyAgJiZcblx0XHRwcm9wZXJ0eSAhPSBTSUxFTlQgJiZcblx0XHRwcm9wZXJ0eSAhPSBDT05URVhUIClcblx0e1xuXHRcdHRoaXMucmVzZXQoIElzc3VlLCB0cnVlIClcblx0XHRcdC5zaWxlbmNlKCApXG5cdFx0XHQucHJvbXB0KCBcImludmFsaWQgcHJvcGVydHlcIiwgcHJvcGVydHkgKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0dGhpc1sgcHJvcGVydHkgXSA9IHZhbHVlO1xuXG5cdHJldHVybiB0aGlzO1xufTtcblxuLyo7XG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRTZW5kIGRhdGEgdG8gc2VydmVyIG9yIGNsaWVudC5cblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiBzZW5kKCApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcInJlc3BvbnNlXCI6IFwiaHR0cC5TZXJ2ZXJSZXNwb25zZVwiLFxuXHRcdFx0XHRcInByb2NlZHVyZVwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCB0aGlzLmRlcHRoID09IDIgKXtcblx0XHR0aGlzLnJlbWluZCggXCJzZW5kaW5nIGlzIGRpc2FibGVkIGZvciBkZXB0aCAyXCIgKS5wcm9tcHQoICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGxldCBtZXNzYWdlID0gbWVlayggdGhpcy5zdGF0dXMsIFUyMDBiKCB0aGlzLnRvU3RyaW5nKCApICkucmF3KCApICk7XG5cblx0bGV0IHByb2NlZHVyZSA9IGFyZ3VtZW50c1sgMCBdO1xuXG5cdGlmKCBhc2VhLnNlcnZlciAmJlxuXHRcdHRoaXMuc3RhdGUgPT09IFJFRElSRUNUICYmXG5cdFx0cHJvdHlwZSggdGhpcy5wYXRoLCBTVFJJTkcgKSAmJlxuXHRcdHRydWx5KCB0aGlzLnBhdGggKSAmJlxuXHRcdGNsYXpvZiggcHJvY2VkdXJlLCBodHRwLlNlcnZlclJlc3BvbnNlICkgKVxuXHR7XG5cdFx0c2Vnd2F5KCB7XG5cdFx0XHRcInJlc3BvbnNlXCI6IHByb2NlZHVyZSxcblx0XHRcdFwicGF0aFwiOiB0aGlzLnBhdGgsXG5cdFx0XHRcInN0YXR1c1wiOiB0aGlzLmNvZGUsXG5cdFx0XHRcImRhdGFcIjogbWVzc2FnZSxcblx0XHR9ICk7XG5cblx0XHR0aGlzLmZsdXNoU3RhdGUoICk7XG5cblx0fWVsc2UgaWYoIGFzZWEuc2VydmVyICYmXG5cdFx0ZmFsenkoIHRoaXMuc3RhdGUgKSAmJlxuXHRcdGNsYXpvZiggcHJvY2VkdXJlLCBodHRwLlNlcnZlclJlc3BvbnNlICkgKVxuXHR7XG5cdFx0bWVzc2FnZS5zZW5kKCBwcm9jZWR1cmUsIHRoaXMuY29kZSApO1xuXG5cdH1lbHNlIGlmKCBhc2VhLmNsaWVudCAmJlxuXHRcdHRoaXMuc3RhdGUgPT0gUkVESVJFQ1QgJiZcblx0XHRwcm90eXBlKCB0aGlzLnBhdGgsIFNUUklORyApICYmXG5cdFx0dHJ1bHkoIHRoaXMucGF0aCApIClcblx0e1xuXHRcdHNlZ3dheSgge1xuXHRcdFx0XCJwYXRoXCI6IHRoaXMucGF0aCxcblx0XHRcdFwic3RhdHVzXCI6IHRoaXMuY29kZSxcblx0XHRcdFwiZGF0YVwiOiBtZXNzYWdlLFxuXHRcdH0gKTtcblxuXHRcdHRoaXMuZmx1c2hTdGF0ZSggKTtcblxuXHR9ZWxzZSBpZiggYXNlYS5jbGllbnQgJiZcblx0XHRmYWx6eSggdGhpcy5zdGF0ZSApICYmXG5cdFx0cHJvdHlwZSggcHJvY2VkdXJlLCBGVU5DVElPTiApIClcblx0e1xuXHRcdG1lc3NhZ2Uuc2VuZC5iaW5kKCB0aGlzICkoIHByb2NlZHVyZSApO1xuXG5cdH1lbHNlIGlmKCB0cnVseSggdGhpcy5zdGF0ZSApICl7XG5cdFx0dGhpcy5yZXNldCggSXNzdWUsIHRydWUgKVxuXHRcdFx0LnNpbGVuY2UoIClcblx0XHRcdC5wcm9tcHQoIGBjYW5ub3QgaW52b2tlIHNlbmRpbmcgc3RhdGUsICR7IHRoaXMuc3RhdGUgfSwgcHJvcGVybHlgIClcblx0XHRcdC5zZW5kKCBwcm9jZWR1cmUgKTtcblxuXHRcdHRoaXMuZmx1c2hTdGF0ZSggKTtcblxuXHR9ZWxzZXtcblx0XHR0aGlzLnJlc2V0KCBJc3N1ZSwgdHJ1ZSApXG5cdFx0XHQuc2lsZW5jZSggKVxuXHRcdFx0LnByb21wdCggXCJjYW5ub3Qgc2VuZCBwcm9wZXJseVwiICk7XG5cdH1cblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qO1xuXHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0U3RyZWFtIGRhdGEgdG8gbGlzdGVuZXJzLlxuXHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuT2xpdmFudC5wcm90b3R5cGUucmVwb3J0ID0gZnVuY3Rpb24gcmVwb3J0KCApe1xuXHRpZiggdGhpcy5kZXB0aCA9PSAyICl7XG5cdFx0dGhpcy5yZW1pbmQoIFwicmVwb3J0aW5nIGlzIGRpc2FibGVkIGZvciBkZXB0aCAyXCIgKS5wcm9tcHQoICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNuYXBkLmJpbmQoIHRoaXMgKVxuXHRcdCggZnVuY3Rpb24gZGVsYXkoICl7XG5cdFx0XHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRcdFx0cHJvY2Vzcy5lbWl0KCB0aGlzLm5hbWUsIHRoaXMgKTtcblxuXHRcdFx0fWVsc2UgaWYoIGFzZWEuY2xpZW50ICl7XG5cdFx0XHRcdGxldCBldmVudCA9IG5ldyBFdmVudCggdGhpcy5uYW1lICk7XG5cdFx0XHRcdGV2ZW50LmRhdGEgPSB0aGlzO1xuXG5cdFx0XHRcdGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoIGV2ZW50ICk7XG5cdFx0XHR9XG5cdFx0fSwgMTAwMCApO1xuXG5cdHJldHVybiB0aGlzO1xufTtcblxuLyo7XG5cdEBzdGF0aWMtbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0Q3J1c2ggdGhlIHBhcmFtZXRlciBleHRyYWN0aW5nIHN0cmluZyBpbmZvcm1hdGlvbi5cblxuXHRcdFNwZWNpYWwgc3VwcG9ydCBmb3IgZ2x1Y29zZSBjb2F0ZWQgcGFyYW1ldGVycy5cblx0QGVuZC1zdGF0aWMtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5jb25zdCBjcnVzaCA9IGZ1bmN0aW9uIGNydXNoKCBwYXJhbWV0ZXIsIG9wdGlvbiApe1xuXHRvcHRpb24gPSBvcHRpb24gfHwgdGhpcy5pbnNwZWN0IHx8IHsgfTtcblxuXHRsZXQgZGVwdGggPSBvcHRpb24uZGVwdGggfHwgMTtcblx0bGV0IGxlbmd0aCA9IG9wdGlvbi5sZW5ndGggfHwgMjAwO1xuXHRsZXQgc3BhY2UgPSAvXFxzezIsfS9nO1xuXG5cdGlmKCBhc2VhLnNlcnZlciAmJiBwcm90eXBlKCBwYXJhbWV0ZXIsIE9CSkVDVCApICYmIHBhcmFtZXRlci5DT0FURUQgPT09IENPQVRFRCApe1xuXHRcdGlmKCBwYXJhbWV0ZXIuc2VsZiApe1xuXHRcdFx0dGhpcy5zZXQoIENPTlRFWFQsIHBhcmFtZXRlci5zZWxmICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHV0aWwuaW5zcGVjdCggcGFyYW1ldGVyLCB7IFwiZGVwdGhcIjogZGVwdGggfSApXG5cdFx0XHQucmVwbGFjZSggc3BhY2UsIFwiIFwiIClcblx0XHRcdC5zdWJzdHJpbmcoIDAsIGxlbmd0aCApICsgXCIuLi5cIjtcblxuXHR9ZWxzZSBpZiggcGFyYW1ldGVyICYmIGNsYXpvZiggcGFyYW1ldGVyLCBFcnJvciApICYmIHBhcmFtZXRlci5zdGFjayApe1xuXHRcdHRoaXMuZXJyb3IgPSBwYXJhbWV0ZXI7XG5cblx0XHR0aGlzLmdldFRyYWNlKCApO1xuXG5cdFx0cmV0dXJuIHBhcmFtZXRlci5zdGFjay50b1N0cmluZyggKTtcblxuXHR9ZWxzZSBpZiggY2xhem9mKCBwYXJhbWV0ZXIsIE9saXZhbnQgKSApe1xuXHRcdHJldHVybiBwYXJhbWV0ZXIubWVzc2FnZTtcblxuXHR9ZWxzZSBpZiggcHJvdHlwZSggcGFyYW1ldGVyLCBGVU5DVElPTiApICl7XG5cdFx0cmV0dXJuIHBhcmFtZXRlci50b1N0cmluZyggKVxuXHRcdFx0LnJlcGxhY2UoIHNwYWNlLCBcIiBcIiApXG5cdFx0XHQuc3Vic3RyaW5nKCAwLCBsZW5ndGggKSArIFwiLi4uXCI7XG5cblx0fWVsc2UgaWYoIHByb3R5cGUoIHBhcmFtZXRlciwgU1RSSU5HICkgfHxcblx0XHRwcm90eXBlKCBwYXJhbWV0ZXIsIE5VTUJFUiApIHx8XG5cdFx0cHJvdHlwZSggcGFyYW1ldGVyLCBCT09MRUFOICkgKVxuXHR7XG5cdFx0cmV0dXJuIHBhcmFtZXRlci50b1N0cmluZyggKTtcblxuXHR9ZWxzZSBpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRyZXR1cm4gdXRpbC5pbnNwZWN0KCBwYXJhbWV0ZXIsIHsgXCJkZXB0aFwiOiBkZXB0aCB9IClcblx0XHRcdC5yZXBsYWNlKCBzcGFjZSwgXCIgXCIgKVxuXHRcdFx0LnN1YnN0cmluZyggMCwgbGVuZ3RoICk7XG5cblx0fWVsc2UgaWYoIGFzZWEuY2xpZW50ICl7XG5cdFx0cmV0dXJuIHBhcmFtZXRlci50b1N0cmluZyggKTtcblxuXHR9ZWxzZXtcblx0XHRyZXR1cm4gcGFyYW1ldGVyLnRvU3RyaW5nKCApO1xuXHR9XG59O1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdEFwcGVuZCBtZXNzYWdlcyB0byB0aGUgY3VycmVudCBtZXNzYWdlLlxuXHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuT2xpdmFudC5wcm90b3R5cGUucmVtaW5kID0gZnVuY3Rpb24gcmVtaW5kKCApe1xuXHRsZXQgcGFyYW1ldGVyID0gcmF6ZSggYXJndW1lbnRzICk7XG5cblx0aWYoIGFyaWQoIHBhcmFtZXRlciApICl7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRsZXQgcGFyc2UgPSBjcnVzaC5iaW5kKCB0aGlzICk7XG5cblx0dGhpcy5tZXNzYWdlID0gVTIwMGIoIHBhcmFtZXRlclxuXHRcdC5tYXAoIGZ1bmN0aW9uIG9uRWFjaFBhcmFtZXRlciggcGFyYW1ldGVyICl7XG5cdFx0XHRpZiggZG91YnQoIHBhcmFtZXRlciwgQVNfQVJSQVkgKSApe1xuXHRcdFx0XHRwYXJhbWV0ZXIgPSByYXplKCBwYXJhbWV0ZXIgKVxuXHRcdFx0XHRcdC5tYXAoICggcGFyYW1ldGVyICkgPT4geyByZXR1cm4gcGFyc2UoIHBhcmFtZXRlciApIH0gKTtcblxuXHRcdFx0XHRyZXR1cm4gVTIwMGIoIHBhcmFtZXRlclxuXHRcdFx0XHRcdC5maWx0ZXIoICggbWVzc2FnZSApID0+IHsgcmV0dXJuIHRydWx5KCBtZXNzYWdlICk7IH0gKSApXG5cdFx0XHRcdFx0LmpvaW4oIFwiLCBcIiApO1xuXG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0cmV0dXJuIHBhcnNlKCBwYXJhbWV0ZXIgKTtcblx0XHRcdH1cblx0XHR9IClcblx0XHQucmV2ZXJzZSggKVxuXHRcdC5jb25jYXQoIFsgdGhpcy5tZXNzYWdlIF0gKVxuXHRcdC5maWx0ZXIoICggbWVzc2FnZSApID0+IHsgcmV0dXJuIHRydWx5KCBtZXNzYWdlICk7IH0gKVxuXHRcdC5yZXZlcnNlKCApIClcblx0XHQuam9pbiggXCIsIFwiICk7XG5cblx0dGhpcy5yZXBvcnQoICk7XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFNpbGVuY2UgdGhlIGxvZ2dpbmcgY2FwYWJpbGl0aWVzLlxuXHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuT2xpdmFudC5wcm90b3R5cGUuc2lsZW5jZSA9IGZ1bmN0aW9uIHNpbGVuY2UoICl7XG5cdHRoaXMuc2lsZW50ID0gdHJ1ZTtcblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qO1xuXHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0RGVhY3RpdmF0ZSBzaWxlbmNlLlxuXHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuT2xpdmFudC5wcm90b3R5cGUuc2hvdXQgPSBmdW5jdGlvbiBzaG91dCggKXtcblx0dGhpcy5zaWxlbnQgPSBmYWxzZTtcblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qO1xuXHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0TG9nIHRoZSBkYXRhLlxuXHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuT2xpdmFudC5wcm90b3R5cGUucHJvbXB0ID0gZnVuY3Rpb24gcHJvbXB0KCApe1xuXHR0aGlzLnJlbWluZC5hcHBseSggdGhpcywgcmF6ZSggYXJndW1lbnRzICkgKTtcblxuXHRzbmFwZC5iaW5kKCB0aGlzIClcblx0XHQoIGZ1bmN0aW9uIGRlbGF5KCApe1xuXHRcdFx0aWYoIHRoaXMuZGVwdGggPT09IDIgKXtcblx0XHRcdFx0dGhpcy5sb2coIHRoaXMuZ2V0TWVzc2FnZSggKSApO1xuXG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggZG91YnQoIHRoaXMuc3RhY2ssIEFSUkFZICkgJiYgZmlsbGVkKCB0aGlzLnN0YWNrICkgKXtcblx0XHRcdFx0dGhpcy5sb2coIHRoaXMuZ2V0TWVzc2FnZSggKSApO1xuXG5cdFx0XHR9ZWxzZSBpZiggdGhpcy5kZXB0aCA+IDUgKXtcblx0XHRcdFx0dGhpcy5nZXRUcmFjZSggKCBlcnJvciwgc3RhY2sgKSA9PiB7XG5cdFx0XHRcdFx0aWYoIGNsYXpvZiggZXJyb3IsIEVycm9yICkgKXtcblx0XHRcdFx0XHRcdHRoaXMucmVtaW5kKCBgZXJyb3IgZ2V0dGluZyBzdGFjayB0cmFjZSwgJHsgZXJyb3IgfWAgKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiggdHJ1dSggc3RhY2sgKSApe1xuXHRcdFx0XHRcdFx0dGhpcy5zdGFjayA9IHN0YWNrO1xuXG5cdFx0XHRcdFx0XHR0aGlzLmxvZyggdGhpcy5nZXRNZXNzYWdlKCApICk7XG5cblx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdHRoaXMubG9nKCB0aGlzLmdldE1lc3NhZ2UoICkgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gKTtcblxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHRoaXMubG9nKCB0aGlzLmdldE1lc3NhZ2UoICkgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFNldCB0aGUgcmVkaXJlY3Rpb24gY29uZmlndXJhdGlvbi5cblxuXHRcdFRoaXMgd2lsbCB0cmlnZ2VyIHJlZGlyZWN0IHJlc3BvbnNlIHdoZW4gc2VuZCBpcyBjYWxsZWQuXG5cblx0XHREZWZhdWx0IG9mIERFRkFVTFRfUkVESVJFQ1RfUEFUSCB3aWxsIGJlIHVzZWQgaWYgcGF0aCBpcyBub3QgZ2l2ZW4uXG5cdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5PbGl2YW50LnByb3RvdHlwZS5yZWRpcmVjdCA9IGZ1bmN0aW9uIHJlZGlyZWN0KCBwYXRoICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwicGF0aDpyZXF1aXJlZFwiOiBcInN0cmluZ1wiXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHR0aGlzLnN0YXRlID0gUkVESVJFQ1Q7XG5cdHRoaXMucGF0aCA9IHBhdGg7XG5cblx0aWYoICF0aGlzLnBhdGggJiYgcHJvdHlwZSggREVGQVVMVF9SRURJUkVDVF9QQVRILCBTVFJJTkcgKSApe1xuXHRcdHRoaXMucGF0aCA9IERFRkFVTFRfUkVESVJFQ1RfUEFUSDtcblxuXHR9ZWxzZXtcblx0XHR0aGlzLnJlc2V0KCBJc3N1ZSwgdHJ1ZSApXG5cdFx0XHQuc2lsZW5jZSggKVxuXHRcdFx0LnByb21wdCggXCJlbXB0eSBwYXRoIHRvIGJlIHJlZGlyZWN0ZWRcIiApO1xuXHR9XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG5PbGl2YW50LnByb3RvdHlwZS5mbHVzaFN0YXRlID0gZnVuY3Rpb24gZmx1c2hTdGF0ZSggKXtcblx0dGhpcy5zdGF0ZSA9IFwiXCI7XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFBhc3MgdGhlIGluc3RhbmNlIHRvIHRoZSBjYWxsYmFjayBmaXJzdCBwYXJhbWV0ZXIuXG5cblx0XHRUaGlzIGZvbGxvd3MgdGhlIHN0YW5kYXJkIGVycm9yLXJlc3VsdC1vcHRpb24gY29udmVudGlvbi5cblxuXHRcdEhhcyBzcGVjaWFsIHN1cHBvcnQgZm9yIGdsdWNvc2UgY29hdGVkIG9wdGlvbi5cblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLnBhc3MgPSBmdW5jdGlvbiBwYXNzKCBjYWxsYmFjaywgcmVzdWx0LCBvcHRpb24gKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJjYWxsYmFjazpyZXF1aXJlZFwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCAhcHJvdHlwZSggY2FsbGJhY2ssIEZVTkNUSU9OICkgKXtcblx0XHR0aGlzLnJlc2V0KCBCdWcsIHRydWUgKVxuXHRcdFx0LnByb21wdCggXCJpbnZhbGlkIGNhbGxiYWNrXCIgKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0aWYoIHRoaXMuY29udGV4dCApe1xuXHRcdGNhbGxiYWNrID0gY2FsbGVkLmJpbmQoIHRoaXMuY29udGV4dCApKCBjYWxsYmFjayApO1xuXG5cdH1lbHNle1xuXHRcdGNhbGxiYWNrID0gY2FsbGVkKCBjYWxsYmFjayApO1xuXHR9XG5cblx0aWYoIHRydXUoIG9wdGlvbiApICYmIHRydXUoIG9wdGlvbi5zZWxmICkgJiYgb3B0aW9uLkNPQVRFRCA9PT0gQ09BVEVEICl7XG5cdFx0dGhpcy5zZXQoIENPTlRFWFQsIG9wdGlvbi5zZWxmICk7XG5cdH1cblxuXHRjYWxsYmFjayggdGhpcywgcmVzdWx0LCBvcHRpb24gKTtcblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbmhhcmRlbiggXCJjcmVhdGVcIiwgZnVuY3Rpb24gY3JlYXRlKCBuYW1lLCBvcHRpb24gKXtcblx0bGV0IENsb25lID0gZGlhdG9tKCBuYW1lICk7XG5cblx0aGVyZWRpdG8oIENsb25lLCBPbGl2YW50ICk7XG5cblx0Q2xvbmUucHJvdG90eXBlLm5hbWUgPSBvcHRpb24ubmFtZTtcblx0Q2xvbmUucHJvdG90eXBlLnN0YXR1cyA9IG9wdGlvbi5zdGF0dXM7XG5cdENsb25lLnByb3RvdHlwZS5jb2RlID0gb3B0aW9uLmNvZGU7XG5cdENsb25lLnByb3RvdHlwZS5zaWxlbnQgPSBvcHRpb24uc2lsZW50O1xuXHRDbG9uZS5wcm90b3R5cGUuZGVwdGggPSBvcHRpb24uZGVwdGg7XG5cdENsb25lLnByb3RvdHlwZS5jb2xvciA9IG9wdGlvbi5jb2xvcjtcblx0Q2xvbmUucHJvdG90eXBlLmluc3BlY3QgPSBvcHRpb24uaW5zcGVjdDtcblx0Q2xvbmUucHJvdG90eXBlLmluaXRpYWxpemUgPSBvcHRpb24uaW5pdGlhbGl6ZSB8fFxuXHRcdGZ1bmN0aW9uIGluaXRpYWxpemUoICl7XG5cdFx0XHR0aGlzLm5hbWUgPSBvcHRpb24ubmFtZTtcblxuXHRcdFx0dGhpcy5zdGF0dXMgPSBvcHRpb24uc3RhdHVzO1xuXG5cdFx0XHR0aGlzLmNvZGUgPSBvcHRpb24uY29kZTtcblxuXHRcdFx0dGhpcy5zaWxlbnQgPSBvcHRpb24uc2lsZW50O1xuXG5cdFx0XHR0aGlzLmRlcHRoID0gb3B0aW9uLmRlcHRoO1xuXHRcdH07XG5cblx0c3ltYmlvdGUoIENsb25lICk7XG5cblx0aGFyZGVuKCBuYW1lLCBDbG9uZSApO1xufSwgT2xpdmFudCApO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9saXZhbnQ7XG4iXX0=
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9saXZhbnQuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhcmlkIiwicmVxdWlyZSIsImFzZWEiLCJidWRnZSIsImNhbGxlZCIsImNsYXpvZiIsImRpYXRvbSIsImRvdWJ0IiwiRXRoZXJuaXR5IiwiZmFsemUiLCJmYWx6eSIsImZpbGxlZCIsImdsdWNvc2UiLCJoYXJkZW4iLCJoZXJlZGl0byIsImtlaW4iLCJtZWVrIiwib3V0cmUiLCJwbG91Z2giLCJwcm90eXBlIiwicmF6ZSIsInNuYXBkIiwic3ltYmlvdGUiLCJ0cnVseSIsInRydXUiLCJVMjAwYiIsInRyYWNlIiwid2luZG93IiwiREVGQVVMVF9SRURJUkVDVF9QQVRIIiwiT2xpdmFudCIsInByb3RvdHlwZSIsImluaXRpYWxpemUiLCJvcHRpb24iLCJkdXJhdGlvbiIsIkRhdGUiLCJub3ciLCJhcmd1bWVudHMiLCJPQkpFQ1QiLCJBUkdVTUVOVFMiLCJFcnJvciIsIkNPQVRFRCIsImxvYWQiLCJsZXQiLCJwYXJhbWV0ZXIiLCJsZW5ndGgiLCJlcnJvciIsInJlbWluZCIsImFwcGx5IiwibWVzc2FnZSIsImNvbmNhdCIsIlNUUklORyIsImNvbnN0cnVjdG9yIiwiRlVOQ1RJT04iLCJuYW1lIiwiYmluZCIsIkVDSE8iLCJzdGF0dXMiLCJjb2RlIiwiRUNIT19DT0RFIiwibG9nIiwiY2xpZW50IiwiY29uc29sZSIsImRlYnVnIiwiY29udGV4dCIsInNlbGYiLCJzaWxlbnQiLCJkZXB0aCIsInNlcnZlciIsImNvbG9yIiwiY2hhbGsiLCJ3aGl0ZSIsInN0YXRlIiwic3RhY2siLCJpbnNwZWN0IiwicmVkc2VhIiwiSXNzdWUiLCJibGFja3NlYSIsIkZhdGFsIiwicmVzZXQiLCJyZW5ldyIsImxvZ0VuZ2luZSIsIkJPT0xFQU4iLCJkYXRhIiwic2lsZW5jZSIsInByb21wdCIsInRvU3RyaW5nIiwiam9pbiIsInZhbHVlT2YiLCJnZXRUaW1lc3RhbXAiLCJ0aW1lc3RhbXAiLCJwcmludFRpbWUiLCJkaW0iLCJjb2xvck1lc3NhZ2UiLCJyZXNvbHZlTWVzc2FnZSIsImZpbHRlciIsInJlc29sdmVUcmFjZSIsIkFSUkFZIiwibWFwIiwiZnJhbWUiLCJyZWQiLCJnZXRNZXNzYWdlIiwiZ2V0VHJhY2UiLCJjYWxsYmFjayIsImZyb21FcnJvciIsInRoZW4iLCJmcmFtZUxpc3QiLCJnZXQiLCJwYXJzZSIsInNldCIsInByb3BlcnR5IiwidmFsdWUiLCJMT0ciLCJTSUxFTlQiLCJDT05URVhUIiwic2VuZCIsInJhdyIsInByb2NlZHVyZSIsIlJFRElSRUNUIiwicGF0aCIsImh0dHAiLCJTZXJ2ZXJSZXNwb25zZSIsInNlZ3dheSIsImZsdXNoU3RhdGUiLCJyZXBvcnQiLCJkZWxheSIsInByb2Nlc3MiLCJlbWl0IiwiZXZlbnQiLCJFdmVudCIsImRvY3VtZW50IiwiZGlzcGF0Y2hFdmVudCIsImNydXNoIiwic3BhY2UiLCJ1dGlsIiwicmVwbGFjZSIsInN1YnN0cmluZyIsIk5VTUJFUiIsIm9uRWFjaFBhcmFtZXRlciIsIkFTX0FSUkFZIiwicmV2ZXJzZSIsInNob3V0IiwicmVkaXJlY3QiLCJwYXNzIiwicmVzdWx0IiwiQnVnIiwiY3JlYXRlIiwiQ2xvbmUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0ZaLE1BQU1BLEtBQUssRUFBRUMsT0FBTyxFQUFFLE9BQU8sQ0FBQztBQUM5QixNQUFNQyxLQUFLLEVBQUVELE9BQU8sRUFBRSxPQUFPLENBQUM7QUFDOUIsTUFBTUUsTUFBTSxFQUFFRixPQUFPLEVBQUUsUUFBUSxDQUFDO0FBQ2hDLE1BQU1HLE9BQU8sRUFBRUgsT0FBTyxFQUFFLFNBQVMsQ0FBQztBQUNsQyxNQUFNSSxPQUFPLEVBQUVKLE9BQU8sRUFBRSxTQUFTLENBQUM7QUFDbEMsTUFBTUssT0FBTyxFQUFFTCxPQUFP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QVMsQ0FBQ0MsV0FBVyxFQUFFQyxNQUFNLENBQUNELFdBQVc7RUFDOUMsU0FBU0EsVUFBVSxFQUFFLENBQUM7R0FDckIsSUFBSSxDQUFDc0IsS0FBSyxFQUFFckIsTUFBTSxDQUFDcUIsSUFBSTs7R0FFdkIsSUFBSSxDQUFDRyxPQUFPLEVBQUV4QixNQUFNLENBQUN3QixNQUFNOztHQUUzQixJQUFJLENBQUNDLEtBQUssRUFBRXpCLE1BQU0sQ0FBQ3lCLElBQUk7O0dBRXZCLElBQUksQ0FBQ1EsT0FBTyxFQUFFakMsTUFBTSxDQUFDaUMsTUFBTTs7R0FFM0IsSUFBSSxDQUFDQyxNQUFNLEVBQUVsQyxNQUFNLENBQUNrQyxLQUFLO0VBQzFCLENBQUM7O0NBRUY1QyxRQUFRLEVBQUU0SCxNQUFNLENBQUM7O0NBRWpCckksTUFBTSxFQUFFd0MsSUFBSSxFQUFFNkYsTUFBTSxDQUFDO0FBQ3RCLENBQUMsRUFBRXJILFFBQVEsQ0FBQzs7QUFFWnNILE1BQU0sQ0FBQ0MsUUFBUSxFQUFFdkgsT0FBTyIsImZpbGUiOiJvbGl2YW50LnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEBtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXG5cblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcIm9saXZhbnRcIixcblx0XHRcdFwicGF0aFwiOiBcIm9saXZhbnQvb2xpdmFudC5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwib2xpdmFudC5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJvbGl2YW50XCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvb2xpdmFudC5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcIm9saXZhbnQtdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZSxcblx0XHRcdFwiY2xhc3NcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRFY2hvIHRoZSBkZXN0cnVjdGlvbiBjYXVzZWQgYnkgeW91ciBjb2RlLlxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhcmlkXCI6IFwiYXJpZFwiLFxuXHRcdFx0XCJhc2VhXCI6IFwiYXNlYVwiLFxuXHRcdFx0XCJidWRnZVwiOiBcImJ1ZGdlXCIsXG5cdFx0XHRcImJsYWNrc2VhXCI6IFwiYmxhY2tzZWFcIixcblx0XHRcdFwiY2FsbGVkXCI6IFwiY2FsbGVkXCIsXG5cdFx0XHRcImNoYWxrXCI6IFwiY2hhbGtcIixcblx0XHRcdFwiY2xhem9mXCI6IFwiY2xhem9mXCIsXG5cdFx0XHRcImRleGlzdFwiOiBcImRleGlzdFwiLFxuXHRcdFx0XCJkaWF0b21cIjogXCJkaWF0b21cIixcblx0XHRcdFwiRXRoZXJuaXR5XCI6IFwiZXRoZXJuaXR5XCIsXG5cdFx0XHRcIkV2ZW50RW1pdHRlclwiOiBcImV2ZW50c1wiLFxuXHRcdFx0XCJmYWx6ZVwiOiBcImZhbHplXCIsXG5cdFx0XHRcImZhbHp5XCI6IFwiZmFsenlcIixcblx0XHRcdFwiZ2x1Y29zZVwiOiBcImdsdWNvc2VcIixcblx0XHRcdFwiaGFyZGVuXCI6IFwiaGFyZGVuXCIsXG5cdFx0XHRcImhlcmVkaXRvXCI6IFwiaGVyZWRpdG9cIixcblx0XHRcdFwia2VpblwiOiBcImtlaW5cIixcblx0XHRcdFwiaHR0cFwiOiBcImh0dHBcIixcblx0XHRcdFwibWVla1wiOiBcIm1lZWtcIlxuXHRcdFx0XCJvdXRyZVwiOiBcIm91dHJlXCIsXG5cdFx0XHRcInBsb3VnaFwiOiBcInBsb3VnaFwiLFxuXHRcdFx0XCJwcm90eXBlXCI6IFwicHJvdHlwZVwiLFxuXHRcdFx0XCJyYXplXCI6IFwicmF6ZVwiLFxuXHRcdFx0XCJyZWRzZWFcIjogXCJyZWRzZWFcIixcblx0XHRcdFwic25hcGRcIjogXCJzbmFwZFwiLFxuXHRcdFx0XCJzZWd3YXlcIjogXCJzZWd3YXlcIixcblx0XHRcdFwic3ltYmlvdGVcIjogXCJzeW1iaW90ZVwiLFxuXHRcdFx0XCJ0cmFjZVwiOiBbIFwic3RhY2t0cmFjZS1qc1wiLCBcInN0YWNrLXRyYWNlXCIgXSxcblx0XHRcdFwidHJ1bHlcIjogXCJ0cnVseVwiLFxuXHRcdFx0XCJ0cnV1XCI6IFwidHJ1dVwiLFxuXHRcdFx0XCJVMjAwYlwiOiBcInUyMDBiXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXJpZCA9IHJlcXVpcmUoIFwiYXJpZFwiICk7XG5jb25zdCBhc2VhID0gcmVxdWlyZSggXCJhc2VhXCIgKTtcbmNvbnN0IGJ1ZGdlID0gcmVxdWlyZSggXCJidWRnZVwiICk7XG5jb25zdCBjYWxsZWQgPSByZXF1aXJlKCBcImNhbGxlZFwiICk7XG5jb25zdCBjbGF6b2YgPSByZXF1aXJlKCBcImNsYXpvZlwiICk7XG5jb25zdCBkaWF0b20gPSByZXF1aXJlKCBcImRpYXRvbVwiICk7XG5jb25zdCBkb3VidCA9IHJlcXVpcmUoIFwiZG91YnRcIiApO1xuY29uc3QgRXRoZXJuaXR5ID0gcmVxdWlyZSggXCJldGhlcm5pdHlcIiApO1xuY29uc3QgZmFsemUgPSByZXF1aXJlKCBcImZhbHplXCIgKTtcbmNvbnN0IGZhbHp5ID0gcmVxdWlyZSggXCJmYWx6eVwiICk7XG5jb25zdCBmaWxsZWQgPSByZXF1aXJlKCBcImZpbGxlZFwiICk7XG5jb25zdCBnbHVjb3NlID0gcmVxdWlyZSggXCJnbHVjb3NlXCIgKTtcbmNvbnN0IGhhcmRlbiA9IHJlcXVpcmUoIFwiaGFyZGVuXCIgKTtcbmNvbnN0IGhlcmVkaXRvID0gcmVxdWlyZSggXCJoZXJlZGl0b1wiICk7XG5jb25zdCBrZWluID0gcmVxdWlyZSggXCJrZWluXCIgKTtcbmNvbnN0IG1lZWsgPSByZXF1aXJlKCBcIm1lZWtcIiApO1xuY29uc3Qgb3V0cmUgPSByZXF1aXJlKCBcIm91dHJlXCIgKTtcbmNvbnN0IHBsb3VnaCA9IHJlcXVpcmUoIFwicGxvdWdoXCIgKTtcbmNvbnN0IHByb3R5cGUgPSByZXF1aXJlKCBcInByb3R5cGVcIiApO1xuY29uc3QgcmF6ZSA9IHJlcXVpcmUoIFwicmF6ZVwiICk7XG5jb25zdCBzbmFwZCA9IHJlcXVpcmUoIFwic25hcGRcIiApO1xuY29uc3Qgc3ltYmlvdGUgPSByZXF1aXJlKCBcInN5bWJpb3RlXCIgKTtcbmNvbnN0IHRydWx5ID0gcmVxdWlyZSggXCJ0cnVseVwiICk7XG5jb25zdCB0cnV1ID0gcmVxdWlyZSggXCJ0cnV1XCIgKTtcbmNvbnN0IFUyMDBiID0gcmVxdWlyZSggXCJ1MjAwYlwiICk7XG5cbi8vOiBAY2xpZW50OlxuY29uc3QgdHJhY2UgPSByZXF1aXJlKCBcInN0YWNrdHJhY2UtanNcIiApO1xuaGFyZGVuKCBcIkRFRkFVTFRfUkVESVJFQ1RfUEFUSFwiLCB3aW5kb3cuREVGQVVMVF9SRURJUkVDVF9QQVRIIHx8IFwiL3ZpZXcvbm90aWZ5XCIgKTtcbi8vOiBAZW5kLWNsaWVudFxuXG5cblxuY29uc3QgT2xpdmFudCA9IGRpYXRvbSggXCJPbGl2YW50XCIgKTtcblxuaGFyZGVuKCBcIkVDSE9cIiwgXCJlY2hvXCIgKTtcbmhhcmRlbiggXCJFQ0hPX0NPREVcIiwgMjAwICk7XG5cbmhhcmRlbiggXCJSRURJUkVDVFwiLCBcInJlZGlyZWN0XCIgKTtcbmhhcmRlbiggXCJDT05URVhUXCIsIFwiY29udGV4dFwiICk7XG5oYXJkZW4oIFwiTE9HXCIsIFwibG9nXCIgKTtcbmhhcmRlbiggXCJTSUxFTlRcIiwgXCJzaWxlbnRcIiApO1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdE9wdGlvbiBzaG91bGQgbm90IGJlIGdsdWNvc2UgY29hdGVkLlxuXHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuT2xpdmFudC5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIGluaXRpYWxpemUoIG9wdGlvbiApe1xuXHR0aGlzLmR1cmF0aW9uID0gRGF0ZS5ub3coICk7XG5cblx0aWYoIHByb3R5cGUoIGFyZ3VtZW50c1sgMCBdLCBPQkpFQ1QgKSAmJlxuXHRcdCFkb3VidCggYXJndW1lbnRzWyAwIF0sIEFSR1VNRU5UUyApICYmXG5cdFx0ISggY2xhem9mKCBhcmd1bWVudHNbIDAgXSwgRXJyb3IgKSApICYmXG5cdFx0b3B0aW9uLkNPQVRFRCAhPT0gQ09BVEVEIClcblx0e1xuXHRcdHRoaXMubG9hZCggb3B0aW9uICk7XG5cblx0fWVsc2V7XG5cdFx0dGhpcy5sb2FkKCApO1xuXHR9XG5cblx0bGV0IHBhcmFtZXRlciA9IGFyZ3VtZW50c1sgMCBdO1xuXG5cdGlmKCBhcmd1bWVudHMubGVuZ3RoID09IDAgKXtcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9ZWxzZSBpZiggY2xhem9mKCBwYXJhbWV0ZXIsIEVycm9yICkgKXtcblx0XHRsZXQgZXJyb3IgPSBwYXJhbWV0ZXI7XG5cblx0XHR0aGlzLnJlbWluZC5hcHBseSggdGhpcywgWyBlcnJvci5tZXNzYWdlLCBlcnJvciBdLmNvbmNhdCggYnVkZ2UoIGFyZ3VtZW50cyApICkgKTtcblxuXHR9ZWxzZSBpZiggY2xhem9mKCBwYXJhbWV0ZXIsIE9saXZhbnQgKSApe1xuXHRcdHRoaXMubG9hZCggcGFyYW1ldGVyICk7XG5cblx0fWVsc2UgaWYoIGRvdWJ0KCBwYXJhbWV0ZXIsIEFSR1VNRU5UUyApICl7XG5cdFx0dGhpcy5yZW1pbmQuYXBwbHkoIHRoaXMsIHBsb3VnaCggcGFyYW1ldGVyICkgKTtcblxuXHR9ZWxzZSBpZiggcHJvdHlwZSggcGFyYW1ldGVyLCBTVFJJTkcgKSApe1xuXHRcdHRoaXMucmVtaW5kLmFwcGx5KCB0aGlzLCByYXplKCBhcmd1bWVudHMgKSApO1xuXG5cdH1lbHNlIGlmKCBwcm90eXBlKCBwYXJhbWV0ZXIsIE9CSkVDVCApICYmXG5cdFx0cGFyYW1ldGVyLmNvbnN0cnVjdG9yICYmXG5cdFx0cHJvdHlwZSggcGFyYW1ldGVyLmNvbnN0cnVjdG9yLCBGVU5DVElPTiApICYmXG5cdFx0cGFyYW1ldGVyLmNvbnN0cnVjdG9yLm5hbWUgIT0gXCJGdW5jdGlvblwiICYmXG5cdFx0Y2xhem9mKCBwYXJhbWV0ZXIsIHBhcmFtZXRlci5jb25zdHJ1Y3RvciApIClcblx0e1xuXHRcdHRoaXMubG9hZCggcGFyYW1ldGVyICk7XG5cblx0XHR0aGlzLnJlbWluZC5hcHBseSggdGhpcywgcmF6ZSggYXJndW1lbnRzICkgKTtcblxuXHR9ZWxzZSBpZiggcHJvdHlwZSggcGFyYW1ldGVyLCBPQkpFQ1QgKSApe1xuXHRcdHRoaXMucmVtaW5kLmFwcGx5KCB0aGlzLCByYXplKCBhcmd1bWVudHMgKSApO1xuXHR9XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG5PbGl2YW50LnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24gbG9hZCggb3B0aW9uICl7XG5cdG9wdGlvbiA9IGdsdWNvc2UuYmluZCggdGhpcyApKCBvcHRpb24gKTtcblxuXHR0aGlzLm5hbWUgPSBvcHRpb24ubmFtZSB8fCB0aGlzLm5hbWUgfHwgRUNIT1xuXG5cdHRoaXMuc3RhdHVzID0gb3B0aW9uLnN0YXR1cyB8fCB0aGlzLnN0YXR1cyB8fCBFQ0hPO1xuXG5cdHRoaXMuY29kZSA9IG9wdGlvbi5jb2RlIHx8IHRoaXMuY29kZSB8fCBFQ0hPX0NPREU7XG5cblx0dGhpcy5sb2cgPSBvcHRpb24ubG9nIHx8IHRoaXMubG9nIHx8ICggKCBhc2VhLmNsaWVudCApPyBjb25zb2xlLmRlYnVnIDogY29uc29sZS5sb2cgKTtcblxuXHRpZiggZmFsemUoIHRoaXMuY29udGV4dCApICYmIG9wdGlvbi5zZWxmICl7XG5cdFx0dGhpcy5jb250ZXh0ID0gb3B0aW9uLnNlbGY7XG5cdH1cblxuXHR0aGlzLnNpbGVudCA9IGtlaW4oIG9wdGlvbiwgXCJzaWxlbnRcIiApPyBvcHRpb24uc2lsZW50IDpcblx0XHRrZWluKCB0aGlzLCBcInNpbGVudFwiICk/IHRoaXMuc2lsZW50IDogdHJ1ZTtcblxuXHQvLzogRGVwdGggZGljdGF0ZXMgcmVmaW5lZCBzZXR0aW5ncyBvZiB0aGlzIHByb2NlZHVyZS5cblx0dGhpcy5kZXB0aCA9IGtlaW4oIG9wdGlvbiwgXCJkZXB0aFwiICk/IG9wdGlvbi5kZXB0aCA6XG5cdFx0a2VpbiggdGhpcywgXCJkZXB0aFwiICk/IHRoaXMuZGVwdGggOiArdGhpcy5zaWxlbnQ7XG5cblx0Ly86IERlcHRoIGlzIG9ubHkgZnJvbSAxLTAgb3IgMS0yMzQ1LTY3ODktMC5cblx0Ly86IERlcHRoIDIgaXMgZGVlcCBzaWxlbnQgZGVwdGguXG5cdHRoaXMuZGVwdGggPSB0aGlzLmRlcHRoICUgMTA7XG5cblx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0dGhpcy5jb2xvciA9IG9wdGlvbi5jb2xvciB8fCB0aGlzLmNvbG9yIHx8IGNoYWxrLndoaXRlO1xuXHR9XG5cblx0dGhpcy5zdGF0ZSA9IFwiXCI7XG5cblx0dGhpcy5zdGFjayA9IG9wdGlvbi5zdGFjayB8fCB0aGlzLnN0YWNrIHx8IFsgXTtcblxuXHR0aGlzLm1lc3NhZ2UgPSBvcHRpb24ubWVzc2FnZSB8fCB0aGlzLm1lc3NhZ2UgfHwgXCJcIjtcblxuXHR0aGlzLmluc3BlY3QgPSBvcHRpb24uaW5zcGVjdCB8fCB0aGlzLmluc3BlY3QgfHwgeyBcImRlcHRoXCI6IDEsIFwibGVuZ3RoXCI6IDIwMCB9O1xuXG5cdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdHJlZHNlYSggSXNzdWUgKTtcblxuXHRcdGJsYWNrc2VhKCBGYXRhbCApO1xuXHR9XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdE1vZGlmaWVzIHRoZSBsb2cgZW5naW5lIHdoaWxlIG1haW50YWluaW5nIGVudmlyb25tZW50IHByb3BlcnRpZXMuXG5cdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5PbGl2YW50LnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uIHJlc2V0KCBvcHRpb24sIHJlbmV3ICl7XG5cdGlmKCBwcm90eXBlKCBvcHRpb24sIEZVTkNUSU9OICkgJiYgY2xhem9mKCBvcHRpb24sIE9saXZhbnQgKSApe1xuXHRcdGxldCBsb2dFbmdpbmUgPSBvcHRpb247XG5cblx0XHRpZiggcHJvdHlwZSggcmVuZXcsIEJPT0xFQU4gKSAmJiByZW5ldyApe1xuXHRcdFx0bGV0IGRhdGEgPSB7XG5cdFx0XHRcdFwibWVzc2FnZVwiOiB0aGlzLm1lc3NhZ2UsXG5cdFx0XHRcdFwic3RhY2tcIjogdGhpcy5zdGFja1xuXHRcdFx0fTtcblxuXHRcdFx0cmV0dXJuIGxvZ0VuZ2luZSggZGF0YSApO1xuXG5cdFx0fWVsc2V7XG5cdFx0XHR0aGlzLmxvYWQoIGxvZ0VuZ2luZS5wcm90b3R5cGUgKTtcblx0XHR9XG5cblx0fWVsc2UgaWYoIHByb3R5cGUoIG9wdGlvbiwgT0JKRUNUICkgKXtcblx0XHR0aGlzLmxvYWQoIG9wdGlvbiApO1xuXG5cdH1lbHNle1xuXHRcdHRoaXMucmVzZXQoIElzc3VlLCB0cnVlIClcblx0XHRcdC5zaWxlbmNlKCApXG5cdFx0XHQucHJvbXB0KCBcImNhbm5vdCByZXNldCB0byBnaXZlbiBvcHRpb25cIiwgb3B0aW9uICk7XG5cdH1cblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbk9saXZhbnQucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoICl7XG5cdHJldHVybiBVMjAwYiggb3V0cmUoIFsgdGhpcy5uYW1lLCB0aGlzLnN0YXR1cywgdGhpcy5tZXNzYWdlIF0gKSApLmpvaW4oIFwiLCBcIiApO1xufTtcblxuT2xpdmFudC5wcm90b3R5cGUudmFsdWVPZiA9IGZ1bmN0aW9uIHZhbHVlT2YoICl7XG5cdHJldHVybiBVMjAwYiggb3V0cmUoIFsgdGhpcy5uYW1lLCB0aGlzLnN0YXR1cywgdGhpcy5tZXNzYWdlIF0gKSApLmpvaW4oIFwiLCBcIiApO1xufTtcblxuT2xpdmFudC5wcm90b3R5cGUuZ2V0VGltZXN0YW1wID0gZnVuY3Rpb24gZ2V0VGltZXN0YW1wKCApe1xuXHRsZXQgdGltZXN0YW1wID0gRXRoZXJuaXR5KCApLnByaW50VGltZSggdHJ1ZSApO1xuXG5cdHRpbWVzdGFtcCA9IGAkeyB0aW1lc3RhbXAgfSB8ICR7ICggRGF0ZS5ub3coICkgLSB0aGlzLmR1cmF0aW9uICkgfW1zYDtcblxuXHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRyZXR1cm4gY2hhbGsuZGltKCB0aW1lc3RhbXAgKTtcblx0fVxuXG5cdHJldHVybiB0aW1lc3RhbXA7XG59O1xuXG5PbGl2YW50LnByb3RvdHlwZS5jb2xvck1lc3NhZ2UgPSBmdW5jdGlvbiBjb2xvck1lc3NhZ2UoIGNvbG9yLCBtZXNzYWdlICl7XG5cdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdGlmKCBwcm90eXBlKCBjb2xvciwgRlVOQ1RJT04gKSApe1xuXHRcdFx0cmV0dXJuIGNvbG9yKCBtZXNzYWdlICk7XG5cblx0XHR9ZWxzZSBpZiggcHJvdHlwZSggY29sb3IsIFNUUklORyApICYmIHRydWx5KCBjb2xvciApICl7XG5cdFx0XHRpZigga2VpbiggY2hhbGssIGNvbG9yICkgJiYgcHJvdHlwZSggY2hhbGtbIGNvbG9yIF0sIEZVTkNUSU9OICkgKXtcblx0XHRcdFx0cmV0dXJuIGNoYWxrWyBjb2xvciBdKCBtZXNzYWdlICk7XG5cblx0XHRcdH1lbHNle1xuXHRcdFx0XHR0aGlzLnJlbWluZCggYGludmFsaWQgbWVzc2FnZSBjb2xvciwgJHsgY29sb3IgfWAgKTtcblxuXHRcdFx0XHRyZXR1cm4gY2hhbGsud2hpdGUoIG1lc3NhZ2UgKTtcblx0XHRcdH1cblxuXHRcdH1lbHNle1xuXHRcdFx0cmV0dXJuIGNoYWxrLndoaXRlKCBtZXNzYWdlICk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIG1lc3NhZ2U7XG59O1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFRoZSBtZXNzYWdlIGlzIGRpdmlkZWQgaW50byB0aHJlZSBwYXJ0cyxcblx0XHQxLiBuYW1lc3BhY2UsXG5cdFx0Mi4gc3RhdHVzLFxuXHRcdDMuIGFjdHVhbCBtZXNzYWdlXG5cdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5PbGl2YW50LnByb3RvdHlwZS5yZXNvbHZlTWVzc2FnZSA9IGZ1bmN0aW9uIHJlc29sdmVNZXNzYWdlKCApe1xuXHRsZXQgbWVzc2FnZSA9IFUyMDBiKCBvdXRyZSggWyB0aGlzLm5hbWUsIHRoaXMuc3RhdHVzLCB0aGlzLm1lc3NhZ2UgXSApXG5cdFx0LmZpbHRlciggdHJ1bHkgKSApLmpvaW4oIFwiLCBcIiApO1xuXG5cdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdHJldHVybiB0aGlzLmNvbG9yTWVzc2FnZSggdGhpcy5jb2xvciwgbWVzc2FnZSApO1xuXHR9XG5cblx0cmV0dXJuIG1lc3NhZ2U7XG59O1xuXG5PbGl2YW50LnByb3RvdHlwZS5yZXNvbHZlVHJhY2UgPSBmdW5jdGlvbiByZXNvbHZlVHJhY2UoICl7XG5cdGxldCBzdGFjayA9IFwic3RhY2sgdHJhY2Ugbm90IGF2YWlsYWJsZVwiO1xuXG5cdGlmKCAhdGhpcy5zaWxlbnQgJiYgZG91YnQoIHRoaXMuc3RhY2ssIEFSUkFZICkgJiYgZmlsbGVkKCB0aGlzLnN0YWNrICkgKXtcblx0XHRzdGFjayA9IHRoaXMuc3RhY2s7XG5cblx0XHRzdGFjayA9IHN0YWNrLm1hcCggKCBmcmFtZSApID0+IHsgcmV0dXJuIGZyYW1lLnRvU3RyaW5nKCApOyB9ICk7XG5cblx0XHRzdGFjayA9IFUyMDBiKCBzdGFjayApLmpvaW4oIFwiXFxuXCIgKTtcblxuXHRcdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdFx0cmV0dXJuIGNoYWxrLmRpbS5yZWQoIHN0YWNrICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHN0YWNrO1xuXHR9XG5cblx0aWYoIHRoaXMuZGVwdGggPCA1ICYmXG5cdFx0dGhpcy5zaWxlbnQgJiZcblx0XHR0cnV1KCB0aGlzLmNvbnRleHQgKSAmJlxuXHQgXHRwcm90eXBlKCB0aGlzLmNvbnRleHQuY29uc3RydWN0b3IsIEZVTkNUSU9OICkgJiZcblx0XHR0cnVseSggdGhpcy5jb250ZXh0LmNvbnN0cnVjdG9yLm5hbWUgKSApXG5cdHtcblx0XHRzdGFjayA9IGBjYWxsZWQgd2l0aCBjb250ZXh0LCAkeyB0aGlzLmNvbnRleHQuY29uc3RydWN0b3IubmFtZSB9YDtcblxuXHRcdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdFx0cmV0dXJuIGNoYWxrLmRpbSggc3RhY2sgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc3RhY2s7XG5cdH1cblxuXHRpZiggdGhpcy5zaWxlbnQgKXtcblx0XHRzdGFjayA9IFwic3RhY2sgdHJhY2UgaXMgbm90IGF2YWlsYWJsZSBvbiBzaWxlbnQgbW9kZVwiO1xuXG5cdFx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0XHRyZXR1cm4gY2hhbGsuZGltKCBzdGFjayApO1xuXHRcdH1cblxuXHRcdHJldHVybiBzdGFjaztcblx0fVxuXG5cdGlmKCB0aGlzLmRlcHRoID4gNSApe1xuXHRcdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdFx0cmV0dXJuIGNoYWxrLmRpbSggc3RhY2sgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc3RhY2s7XG5cdH1cbn07XG5cbi8qO1xuXHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0VGhlIG1lc3NhZ2UgY29uc2lzdCBvZiB0aHJlZSBsYXllciBvZiBzdHJpbmdzLFxuXHRcdFx0MS4gdGltZXN0YW1wIGluIHRydWUgdGltZSBmb3JtYXRcblx0XHRcdDIuIGFjdHVhbCByZWFkYWJsZSBtZXNzYWdlXG5cdFx0XHQzLiBtZXNzYWdlIHRyYWNlIG9yIG1lc3NhZ2UgY29udGV4dFxuXG5cdFx0VGhlc2UgaW5mb3JtYXRpb24gd2lsbCBiZSBkaXZpZGVkIHRocm91Z2ggemVyby13aWR0aCBzcGFjZSBjb252ZW50aW9uLlxuXHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuT2xpdmFudC5wcm90b3R5cGUuZ2V0TWVzc2FnZSA9IGZ1bmN0aW9uIGdldE1lc3NhZ2UoICl7XG5cdHJldHVybiBVMjAwYiggW1xuXHRcdHRoaXMuZ2V0VGltZXN0YW1wKCApLFxuXHRcdHRoaXMucmVzb2x2ZU1lc3NhZ2UoICksXG5cdFx0dGhpcy5yZXNvbHZlVHJhY2UoIClcblx0XSApLmpvaW4oIFwiXFxuXCIgKTtcbn07XG5cbi8qO1xuXHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0VGhpcyBzaG91bGQgYmUgdXNlZCBpbnRlcm5hbGx5IGFzIG11Y2ggYXMgcG9zc2libGUuXG5cdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5PbGl2YW50LnByb3RvdHlwZS5nZXRUcmFjZSA9IGZ1bmN0aW9uIGdldFRyYWNlKCBjYWxsYmFjayApe1xuXHRpZiggdGhpcy5kZXB0aCA9PSAyICl7XG5cdFx0dGhpcy5yZW1pbmQoIFwidHJhY2luZyBpcyBkaXNhYmxlZCBmb3IgZGVwdGggMlwiICkucHJvbXB0KCApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRjYWxsYmFjayA9IGNhbGxlZC5iaW5kKCB0aGlzICkoIGNhbGxiYWNrICk7XG5cblx0c25hcGQuYmluZCggdGhpcyApKCBjYWxsYmFjaywgMTAwMCApO1xuXG5cdGlmKCBhc2VhLmNsaWVudCApe1xuXHRcdGlmKCBjbGF6b2YoIHRoaXMuZXJyb3IsIEVycm9yICkgKXtcblx0XHRcdHRyYWNlLmZyb21FcnJvciggdGhpcy5lcnJvciApXG5cdFx0XHRcdC50aGVuKCAoIGZyYW1lTGlzdCApID0+IHtcblx0XHRcdFx0XHR0aGlzLnN0YWNrID0gZnJhbWVMaXN0O1xuXG5cdFx0XHRcdFx0Y2FsbGJhY2soIG51bGwsIHRoaXMuc3RhY2sgKTtcblx0XHRcdFx0fSApXG5cdFx0XHRcdC5jYXRjaCggKCBlcnJvciApID0+IHsgY2FsbGJhY2soIHRoaXMucmVtaW5kKCBlcnJvciApICk7IH0gKTtcblxuXHRcdH1lbHNlIGlmKCB0aGlzLmRlcHRoID4gNSApe1xuXHRcdFx0dHJhY2UuZ2V0KCApXG5cdFx0XHRcdC50aGVuKCAoIGZyYW1lTGlzdCApID0+IHtcblx0XHRcdFx0XHR0aGlzLnN0YWNrID0gZnJhbWVMaXN0O1xuXG5cdFx0XHRcdFx0Y2FsbGJhY2soIG51bGwsIHRoaXMuc3RhY2sgKTtcblx0XHRcdFx0fSApXG5cdFx0XHRcdC5jYXRjaCggKCBlcnJvciApID0+IHsgY2FsbGJhY2soIHRoaXMucmVtaW5kKCBlcnJvciApICk7IH0gKTtcblx0XHR9XG5cblx0fWVsc2UgaWYoIGFzZWEuc2VydmVyICl7XG5cdFx0aWYoIGNsYXpvZiggdGhpcy5lcnJvciwgRXJyb3IgKSApe1xuXHRcdFx0dGhpcy5zdGFjayA9IHRyYWNlLnBhcnNlKCB0aGlzLmVycm9yICk7XG5cblx0XHRcdGNhbGxiYWNrKCBudWxsLCB0aGlzLnN0YWNrICk7XG5cblx0XHR9ZWxzZSBpZiggdGhpcy5kZXB0aCA+IDUgKXtcblx0XHRcdHRoaXMuc3RhY2sgPSB0cmFjZS5nZXQoICk7XG5cblx0XHRcdGNhbGxiYWNrKCBudWxsLCB0aGlzLnN0YWNrICk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFNldHMgYSBwcm9wZXJ0eSBvZiB0aGlzIGxvZyBlbmdpbmUuXG5cblx0XHROb3QgYWxsIHByb3BlcnR5IGNhbiBiZSBzZXQgdG8gbGltaXQgdGhpcyBmdW5jdGlvblxuXHRcdFx0Zm9yIHNlY3VyaXR5IHB1cnBvc2VzLlxuXHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuT2xpdmFudC5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gc2V0KCBwcm9wZXJ0eSwgdmFsdWUgKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJwcm9wZXJ0eTpyZXF1aXJlZFwiOiBcInN0cmluZ1wiLFxuXHRcdFx0XHRcInZhbHVlXCI6IFwiKlwiXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRsZXQgcGFyYW1ldGVyID0gcmF6ZSggYXJndW1lbnRzICk7XG5cblx0aWYoIHBhcmFtZXRlci5sZW5ndGggPT0gMSAmJiBwcm90eXBlKCBwYXJhbWV0ZXJbIDAgXSwgT0JKRUNUICkgKXtcblx0XHRsZXQgb3B0aW9uID0gcGFyYW1ldGVyWyAwIF07XG5cdFx0Zm9yKCBsZXQgcHJvcGVydHkgaW4gb3B0aW9uICl7XG5cdFx0XHR0aGlzLnNldCggcHJvcGVydHksIG9wdGlvblsgcHJvcGVydHkgXSApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0aWYoICFwcm90eXBlKCBwcm9wZXJ0eSwgU1RSSU5HICkgKXtcblx0XHR0aGlzLnJlc2V0KCBJc3N1ZSwgdHJ1ZSApXG5cdFx0XHQuc2lsZW5jZSggKVxuXHRcdFx0LnByb21wdCggXCJpbnZhbGlkIHByb3BlcnR5XCIsIHByb3BlcnR5ICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGlmKCBwcm90eXBlKCBwcm9wZXJ0eSwgU1RSSU5HICkgJiZcblx0XHRwcm9wZXJ0eSAhPSBMT0cgICYmXG5cdFx0cHJvcGVydHkgIT0gU0lMRU5UICYmXG5cdFx0cHJvcGVydHkgIT0gQ09OVEVYVCApXG5cdHtcblx0XHR0aGlzLnJlc2V0KCBJc3N1ZSwgdHJ1ZSApXG5cdFx0XHQuc2lsZW5jZSggKVxuXHRcdFx0LnByb21wdCggXCJpbnZhbGlkIHByb3BlcnR5XCIsIHByb3BlcnR5ICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHRoaXNbIHByb3BlcnR5IF0gPSB2YWx1ZTtcblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qO1xuXHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0U2VuZCBkYXRhIHRvIHNlcnZlciBvciBjbGllbnQuXG5cdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5PbGl2YW50LnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gc2VuZCggKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJyZXNwb25zZVwiOiBcImh0dHAuU2VydmVyUmVzcG9uc2VcIixcblx0XHRcdFx0XCJwcm9jZWR1cmVcIjogXCJmdW5jdGlvblwiXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRpZiggdGhpcy5kZXB0aCA9PSAyICl7XG5cdFx0dGhpcy5yZW1pbmQoIFwic2VuZGluZyBpcyBkaXNhYmxlZCBmb3IgZGVwdGggMlwiICkucHJvbXB0KCApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRsZXQgbWVzc2FnZSA9IG1lZWsoIHRoaXMuc3RhdHVzLCBVMjAwYiggdGhpcy50b1N0cmluZyggKSApLnJhdyggKSApO1xuXG5cdGxldCBwcm9jZWR1cmUgPSBhcmd1bWVudHNbIDAgXTtcblxuXHRpZiggYXNlYS5zZXJ2ZXIgJiZcblx0XHR0aGlzLnN0YXRlID09PSBSRURJUkVDVCAmJlxuXHRcdHByb3R5cGUoIHRoaXMucGF0aCwgU1RSSU5HICkgJiZcblx0XHR0cnVseSggdGhpcy5wYXRoICkgJiZcblx0XHRjbGF6b2YoIHByb2NlZHVyZSwgaHR0cC5TZXJ2ZXJSZXNwb25zZSApIClcblx0e1xuXHRcdHNlZ3dheSgge1xuXHRcdFx0XCJyZXNwb25zZVwiOiBwcm9jZWR1cmUsXG5cdFx0XHRcInBhdGhcIjogdGhpcy5wYXRoLFxuXHRcdFx0XCJzdGF0dXNcIjogdGhpcy5jb2RlLFxuXHRcdFx0XCJkYXRhXCI6IG1lc3NhZ2UsXG5cdFx0fSApO1xuXG5cdFx0dGhpcy5mbHVzaFN0YXRlKCApO1xuXG5cdH1lbHNlIGlmKCBhc2VhLnNlcnZlciAmJlxuXHRcdGZhbHp5KCB0aGlzLnN0YXRlICkgJiZcblx0XHRjbGF6b2YoIHByb2NlZHVyZSwgaHR0cC5TZXJ2ZXJSZXNwb25zZSApIClcblx0e1xuXHRcdG1lc3NhZ2Uuc2VuZCggcHJvY2VkdXJlLCB0aGlzLmNvZGUgKTtcblxuXHR9ZWxzZSBpZiggYXNlYS5jbGllbnQgJiZcblx0XHR0aGlzLnN0YXRlID09IFJFRElSRUNUICYmXG5cdFx0cHJvdHlwZSggdGhpcy5wYXRoLCBTVFJJTkcgKSAmJlxuXHRcdHRydWx5KCB0aGlzLnBhdGggKSApXG5cdHtcblx0XHRzZWd3YXkoIHtcblx0XHRcdFwicGF0aFwiOiB0aGlzLnBhdGgsXG5cdFx0XHRcInN0YXR1c1wiOiB0aGlzLmNvZGUsXG5cdFx0XHRcImRhdGFcIjogbWVzc2FnZSxcblx0XHR9ICk7XG5cblx0XHR0aGlzLmZsdXNoU3RhdGUoICk7XG5cblx0fWVsc2UgaWYoIGFzZWEuY2xpZW50ICYmXG5cdFx0ZmFsenkoIHRoaXMuc3RhdGUgKSAmJlxuXHRcdHByb3R5cGUoIHByb2NlZHVyZSwgRlVOQ1RJT04gKSApXG5cdHtcblx0XHRtZXNzYWdlLnNlbmQuYmluZCggdGhpcyApKCBwcm9jZWR1cmUgKTtcblxuXHR9ZWxzZSBpZiggdHJ1bHkoIHRoaXMuc3RhdGUgKSApe1xuXHRcdHRoaXMucmVzZXQoIElzc3VlLCB0cnVlIClcblx0XHRcdC5zaWxlbmNlKCApXG5cdFx0XHQucHJvbXB0KCBgY2Fubm90IGludm9rZSBzZW5kaW5nIHN0YXRlLCAkeyB0aGlzLnN0YXRlIH0sIHByb3Blcmx5YCApXG5cdFx0XHQuc2VuZCggcHJvY2VkdXJlICk7XG5cblx0XHR0aGlzLmZsdXNoU3RhdGUoICk7XG5cblx0fWVsc2V7XG5cdFx0dGhpcy5yZXNldCggSXNzdWUsIHRydWUgKVxuXHRcdFx0LnNpbGVuY2UoIClcblx0XHRcdC5wcm9tcHQoIFwiY2Fubm90IHNlbmQgcHJvcGVybHlcIiApO1xuXHR9XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFN0cmVhbSBkYXRhIHRvIGxpc3RlbmVycy5cblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLnJlcG9ydCA9IGZ1bmN0aW9uIHJlcG9ydCggKXtcblx0aWYoIHRoaXMuZGVwdGggPT0gMiApe1xuXHRcdHRoaXMucmVtaW5kKCBcInJlcG9ydGluZyBpcyBkaXNhYmxlZCBmb3IgZGVwdGggMlwiICkucHJvbXB0KCApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzbmFwZC5iaW5kKCB0aGlzIClcblx0XHQoIGZ1bmN0aW9uIGRlbGF5KCApe1xuXHRcdFx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0XHRcdHByb2Nlc3MuZW1pdCggdGhpcy5uYW1lLCB0aGlzICk7XG5cblx0XHRcdH1lbHNlIGlmKCBhc2VhLmNsaWVudCApe1xuXHRcdFx0XHRsZXQgZXZlbnQgPSBuZXcgRXZlbnQoIHRoaXMubmFtZSApO1xuXHRcdFx0XHRldmVudC5kYXRhID0gdGhpcztcblxuXHRcdFx0XHRkb2N1bWVudC5kaXNwYXRjaEV2ZW50KCBldmVudCApO1xuXHRcdFx0fVxuXHRcdH0sIDEwMDAgKTtcblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qO1xuXHRAc3RhdGljLW1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdENydXNoIHRoZSBwYXJhbWV0ZXIgZXh0cmFjdGluZyBzdHJpbmcgaW5mb3JtYXRpb24uXG5cblx0XHRTcGVjaWFsIHN1cHBvcnQgZm9yIGdsdWNvc2UgY29hdGVkIHBhcmFtZXRlcnMuXG5cdEBlbmQtc3RhdGljLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuY29uc3QgY3J1c2ggPSBmdW5jdGlvbiBjcnVzaCggcGFyYW1ldGVyLCBvcHRpb24gKXtcblx0b3B0aW9uID0gb3B0aW9uIHx8IHRoaXMuaW5zcGVjdCB8fCB7IH07XG5cblx0bGV0IGRlcHRoID0gb3B0aW9uLmRlcHRoIHx8IDE7XG5cdGxldCBsZW5ndGggPSBvcHRpb24ubGVuZ3RoIHx8IDIwMDtcblx0bGV0IHNwYWNlID0gL1xcc3syLH0vZztcblxuXHRpZiggYXNlYS5zZXJ2ZXIgJiYgcHJvdHlwZSggcGFyYW1ldGVyLCBPQkpFQ1QgKSAmJiBwYXJhbWV0ZXIuQ09BVEVEID09PSBDT0FURUQgKXtcblx0XHRpZiggcGFyYW1ldGVyLnNlbGYgKXtcblx0XHRcdHRoaXMuc2V0KCBDT05URVhULCBwYXJhbWV0ZXIuc2VsZiApO1xuXHRcdH1cblxuXHRcdHJldHVybiB1dGlsLmluc3BlY3QoIHBhcmFtZXRlciwgeyBcImRlcHRoXCI6IGRlcHRoIH0gKVxuXHRcdFx0LnJlcGxhY2UoIHNwYWNlLCBcIiBcIiApXG5cdFx0XHQuc3Vic3RyaW5nKCAwLCBsZW5ndGggKSArIFwiLi4uXCI7XG5cblx0fWVsc2UgaWYoIHBhcmFtZXRlciAmJiBjbGF6b2YoIHBhcmFtZXRlciwgRXJyb3IgKSAmJiBwYXJhbWV0ZXIuc3RhY2sgKXtcblx0XHR0aGlzLmVycm9yID0gcGFyYW1ldGVyO1xuXG5cdFx0dGhpcy5nZXRUcmFjZSggKTtcblxuXHRcdHJldHVybiBwYXJhbWV0ZXIuc3RhY2sudG9TdHJpbmcoICk7XG5cblx0fWVsc2UgaWYoIGNsYXpvZiggcGFyYW1ldGVyLCBPbGl2YW50ICkgKXtcblx0XHRyZXR1cm4gcGFyYW1ldGVyLm1lc3NhZ2U7XG5cblx0fWVsc2UgaWYoIHByb3R5cGUoIHBhcmFtZXRlciwgRlVOQ1RJT04gKSApe1xuXHRcdHJldHVybiBwYXJhbWV0ZXIudG9TdHJpbmcoIClcblx0XHRcdC5yZXBsYWNlKCBzcGFjZSwgXCIgXCIgKVxuXHRcdFx0LnN1YnN0cmluZyggMCwgbGVuZ3RoICkgKyBcIi4uLlwiO1xuXG5cdH1lbHNlIGlmKCBwcm90eXBlKCBwYXJhbWV0ZXIsIFNUUklORyApIHx8XG5cdFx0cHJvdHlwZSggcGFyYW1ldGVyLCBOVU1CRVIgKSB8fFxuXHRcdHByb3R5cGUoIHBhcmFtZXRlciwgQk9PTEVBTiApIClcblx0e1xuXHRcdHJldHVybiBwYXJhbWV0ZXIudG9TdHJpbmcoICk7XG5cblx0fWVsc2UgaWYoIGFzZWEuc2VydmVyICl7XG5cdFx0cmV0dXJuIHV0aWwuaW5zcGVjdCggcGFyYW1ldGVyLCB7IFwiZGVwdGhcIjogZGVwdGggfSApXG5cdFx0XHQucmVwbGFjZSggc3BhY2UsIFwiIFwiIClcblx0XHRcdC5zdWJzdHJpbmcoIDAsIGxlbmd0aCApO1xuXG5cdH1lbHNlIGlmKCBhc2VhLmNsaWVudCApe1xuXHRcdHJldHVybiBwYXJhbWV0ZXIudG9TdHJpbmcoICk7XG5cblx0fWVsc2V7XG5cdFx0cmV0dXJuIHBhcmFtZXRlci50b1N0cmluZyggKTtcblx0fVxufTtcblxuLyo7XG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRBcHBlbmQgbWVzc2FnZXMgdG8gdGhlIGN1cnJlbnQgbWVzc2FnZS5cblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLnJlbWluZCA9IGZ1bmN0aW9uIHJlbWluZCggKXtcblx0bGV0IHBhcmFtZXRlciA9IHJhemUoIGFyZ3VtZW50cyApO1xuXG5cdGlmKCBhcmlkKCBwYXJhbWV0ZXIgKSApe1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0bGV0IHBhcnNlID0gY3J1c2guYmluZCggdGhpcyApO1xuXG5cdHRoaXMubWVzc2FnZSA9IFUyMDBiKCBwYXJhbWV0ZXJcblx0XHQubWFwKCBmdW5jdGlvbiBvbkVhY2hQYXJhbWV0ZXIoIHBhcmFtZXRlciApe1xuXHRcdFx0aWYoIGRvdWJ0KCBwYXJhbWV0ZXIsIEFTX0FSUkFZICkgKXtcblx0XHRcdFx0cGFyYW1ldGVyID0gcmF6ZSggcGFyYW1ldGVyIClcblx0XHRcdFx0XHQubWFwKCAoIHBhcmFtZXRlciApID0+IHsgcmV0dXJuIHBhcnNlKCBwYXJhbWV0ZXIgKSB9ICk7XG5cblx0XHRcdFx0cmV0dXJuIFUyMDBiKCBwYXJhbWV0ZXJcblx0XHRcdFx0XHQuZmlsdGVyKCAoIG1lc3NhZ2UgKSA9PiB7IHJldHVybiB0cnVseSggbWVzc2FnZSApOyB9ICkgKVxuXHRcdFx0XHRcdC5qb2luKCBcIiwgXCIgKTtcblxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHJldHVybiBwYXJzZSggcGFyYW1ldGVyICk7XG5cdFx0XHR9XG5cdFx0fSApXG5cdFx0LnJldmVyc2UoIClcblx0XHQuY29uY2F0KCBbIHRoaXMubWVzc2FnZSBdIClcblx0XHQuZmlsdGVyKCAoIG1lc3NhZ2UgKSA9PiB7IHJldHVybiB0cnVseSggbWVzc2FnZSApOyB9IClcblx0XHQucmV2ZXJzZSggKSApXG5cdFx0LmpvaW4oIFwiLCBcIiApO1xuXG5cdHRoaXMucmVwb3J0KCApO1xuXG5cdHJldHVybiB0aGlzO1xufTtcblxuLyo7XG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRTaWxlbmNlIHRoZSBsb2dnaW5nIGNhcGFiaWxpdGllcy5cblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLnNpbGVuY2UgPSBmdW5jdGlvbiBzaWxlbmNlKCApe1xuXHR0aGlzLnNpbGVudCA9IHRydWU7XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdERlYWN0aXZhdGUgc2lsZW5jZS5cblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLnNob3V0ID0gZnVuY3Rpb24gc2hvdXQoICl7XG5cdHRoaXMuc2lsZW50ID0gZmFsc2U7XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdExvZyB0aGUgZGF0YS5cblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLnByb21wdCA9IGZ1bmN0aW9uIHByb21wdCggKXtcblx0dGhpcy5yZW1pbmQuYXBwbHkoIHRoaXMsIHJhemUoIGFyZ3VtZW50cyApICk7XG5cblx0c25hcGQuYmluZCggdGhpcyApXG5cdFx0KCBmdW5jdGlvbiBkZWxheSggKXtcblx0XHRcdGlmKCB0aGlzLmRlcHRoID09PSAyICl7XG5cdFx0XHRcdHRoaXMubG9nKCB0aGlzLmdldE1lc3NhZ2UoICkgKTtcblxuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblxuXHRcdFx0aWYoIGRvdWJ0KCB0aGlzLnN0YWNrLCBBUlJBWSApICYmIGZpbGxlZCggdGhpcy5zdGFjayApICl7XG5cdFx0XHRcdHRoaXMubG9nKCB0aGlzLmdldE1lc3NhZ2UoICkgKTtcblxuXHRcdFx0fWVsc2UgaWYoIHRoaXMuZGVwdGggPiA1ICl7XG5cdFx0XHRcdHRoaXMuZ2V0VHJhY2UoICggZXJyb3IsIHN0YWNrICkgPT4ge1xuXHRcdFx0XHRcdGlmKCBjbGF6b2YoIGVycm9yLCBFcnJvciApICl7XG5cdFx0XHRcdFx0XHR0aGlzLnJlbWluZCggYGVycm9yIGdldHRpbmcgc3RhY2sgdHJhY2UsICR7IGVycm9yIH1gICk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYoIHRydXUoIHN0YWNrICkgKXtcblx0XHRcdFx0XHRcdHRoaXMuc3RhY2sgPSBzdGFjaztcblxuXHRcdFx0XHRcdFx0dGhpcy5sb2coIHRoaXMuZ2V0TWVzc2FnZSggKSApO1xuXG5cdFx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0XHR0aGlzLmxvZyggdGhpcy5nZXRNZXNzYWdlKCApICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9ICk7XG5cblx0XHRcdH1lbHNle1xuXHRcdFx0XHR0aGlzLmxvZyggdGhpcy5nZXRNZXNzYWdlKCApICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdHJldHVybiB0aGlzO1xufTtcblxuLyo7XG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRTZXQgdGhlIHJlZGlyZWN0aW9uIGNvbmZpZ3VyYXRpb24uXG5cblx0XHRUaGlzIHdpbGwgdHJpZ2dlciByZWRpcmVjdCByZXNwb25zZSB3aGVuIHNlbmQgaXMgY2FsbGVkLlxuXG5cdFx0RGVmYXVsdCBvZiBERUZBVUxUX1JFRElSRUNUX1BBVEggd2lsbCBiZSB1c2VkIGlmIHBhdGggaXMgbm90IGdpdmVuLlxuXHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuT2xpdmFudC5wcm90b3R5cGUucmVkaXJlY3QgPSBmdW5jdGlvbiByZWRpcmVjdCggcGF0aCApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcInBhdGg6cmVxdWlyZWRcIjogXCJzdHJpbmdcIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0dGhpcy5zdGF0ZSA9IFJFRElSRUNUO1xuXHR0aGlzLnBhdGggPSBwYXRoO1xuXG5cdGlmKCAhdGhpcy5wYXRoICYmIHByb3R5cGUoIERFRkFVTFRfUkVESVJFQ1RfUEFUSCwgU1RSSU5HICkgKXtcblx0XHR0aGlzLnBhdGggPSBERUZBVUxUX1JFRElSRUNUX1BBVEg7XG5cblx0fWVsc2V7XG5cdFx0dGhpcy5yZXNldCggSXNzdWUsIHRydWUgKVxuXHRcdFx0LnNpbGVuY2UoIClcblx0XHRcdC5wcm9tcHQoIFwiZW1wdHkgcGF0aCB0byBiZSByZWRpcmVjdGVkXCIgKTtcblx0fVxuXG5cdHJldHVybiB0aGlzO1xufTtcblxuT2xpdmFudC5wcm90b3R5cGUuZmx1c2hTdGF0ZSA9IGZ1bmN0aW9uIGZsdXNoU3RhdGUoICl7XG5cdHRoaXMuc3RhdGUgPSBcIlwiO1xuXG5cdHJldHVybiB0aGlzO1xufTtcblxuLyo7XG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRQYXNzIHRoZSBpbnN0YW5jZSB0byB0aGUgY2FsbGJhY2sgZmlyc3QgcGFyYW1ldGVyLlxuXG5cdFx0VGhpcyBmb2xsb3dzIHRoZSBzdGFuZGFyZCBlcnJvci1yZXN1bHQtb3B0aW9uIGNvbnZlbnRpb24uXG5cblx0XHRIYXMgc3BlY2lhbCBzdXBwb3J0IGZvciBnbHVjb3NlIGNvYXRlZCBvcHRpb24uXG5cdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5PbGl2YW50LnByb3RvdHlwZS5wYXNzID0gZnVuY3Rpb24gcGFzcyggY2FsbGJhY2ssIHJlc3VsdCwgb3B0aW9uICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwiY2FsbGJhY2s6cmVxdWlyZWRcIjogXCJmdW5jdGlvblwiXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRpZiggIXByb3R5cGUoIGNhbGxiYWNrLCBGVU5DVElPTiApICl7XG5cdFx0dGhpcy5yZXNldCggQnVnLCB0cnVlIClcblx0XHRcdC5wcm9tcHQoIFwiaW52YWxpZCBjYWxsYmFja1wiICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGlmKCB0aGlzLmNvbnRleHQgKXtcblx0XHRjYWxsYmFjayA9IGNhbGxlZC5iaW5kKCB0aGlzLmNvbnRleHQgKSggY2FsbGJhY2sgKTtcblxuXHR9ZWxzZXtcblx0XHRjYWxsYmFjayA9IGNhbGxlZCggY2FsbGJhY2sgKTtcblx0fVxuXG5cdGlmKCB0cnV1KCBvcHRpb24gKSAmJiB0cnV1KCBvcHRpb24uc2VsZiApICYmIG9wdGlvbi5DT0FURUQgPT09IENPQVRFRCApe1xuXHRcdHRoaXMuc2V0KCBDT05URVhULCBvcHRpb24uc2VsZiApO1xuXHR9XG5cblx0Y2FsbGJhY2soIHRoaXMsIHJlc3VsdCwgb3B0aW9uICk7XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG5oYXJkZW4oIFwiY3JlYXRlXCIsIGZ1bmN0aW9uIGNyZWF0ZSggbmFtZSwgb3B0aW9uICl7XG5cdGxldCBDbG9uZSA9IGRpYXRvbSggbmFtZSApO1xuXG5cdGhlcmVkaXRvKCBDbG9uZSwgT2xpdmFudCApO1xuXG5cdENsb25lLnByb3RvdHlwZS5uYW1lID0gb3B0aW9uLm5hbWU7XG5cdENsb25lLnByb3RvdHlwZS5zdGF0dXMgPSBvcHRpb24uc3RhdHVzO1xuXHRDbG9uZS5wcm90b3R5cGUuY29kZSA9IG9wdGlvbi5jb2RlO1xuXHRDbG9uZS5wcm90b3R5cGUuc2lsZW50ID0gb3B0aW9uLnNpbGVudDtcblx0Q2xvbmUucHJvdG90eXBlLmRlcHRoID0gb3B0aW9uLmRlcHRoO1xuXHRDbG9uZS5wcm90b3R5cGUuY29sb3IgPSBvcHRpb24uY29sb3I7XG5cdENsb25lLnByb3RvdHlwZS5pbnNwZWN0ID0gb3B0aW9uLmluc3BlY3Q7XG5cdENsb25lLnByb3RvdHlwZS5pbml0aWFsaXplID0gb3B0aW9uLmluaXRpYWxpemUgfHxcblx0XHRmdW5jdGlvbiBpbml0aWFsaXplKCApe1xuXHRcdFx0dGhpcy5uYW1lID0gb3B0aW9uLm5hbWU7XG5cblx0XHRcdHRoaXMuc3RhdHVzID0gb3B0aW9uLnN0YXR1cztcblxuXHRcdFx0dGhpcy5jb2RlID0gb3B0aW9uLmNvZGU7XG5cblx0XHRcdHRoaXMuc2lsZW50ID0gb3B0aW9uLnNpbGVudDtcblxuXHRcdFx0dGhpcy5kZXB0aCA9IG9wdGlvbi5kZXB0aDtcblx0XHR9O1xuXG5cdHN5bWJpb3RlKCBDbG9uZSApO1xuXG5cdGhhcmRlbiggbmFtZSwgQ2xvbmUgKTtcbn0sIE9saXZhbnQgKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPbGl2YW50O1xuIl19
