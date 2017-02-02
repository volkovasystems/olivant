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
	if (protype(arguments[0], OBJECT) && !doubt(arguments[0], ARGUMENTS) && !clazof(arguments[0], Error) && option.COATED !== COATED) {
		this.load(option);
	} else {
		this.load();
	}

	this.getTrace();

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
	var stack = "stack trace not ready";

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
		trace.get().then(function (frameList) {
			_this.stack = frameList;

			callback(null, _this.stack);
		}).catch(function (error) {
			callback(_this.remind(error));
		});
	} else if (asea.server) {
		this.stack = trace.get();

		callback(null, this.stack);
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
		} else {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9saXZhbnQuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhcmlkIiwicmVxdWlyZSIsImFzZWEiLCJidWRnZSIsImNhbGxlZCIsImNsYXpvZiIsImRpYXRvbSIsImRvdWJ0IiwiRXRoZXJuaXR5IiwiZmFsemUiLCJmYWx6eSIsImZpbGxlZCIsImdsdWNvc2UiLCJoYXJkZW4iLCJoZXJlZGl0byIsImtlaW4iLCJtZWVrIiwib3V0cmUiLCJwbG91Z2giLCJwcm90eXBlIiwicmF6ZSIsInNuYXBkIiwic3ltYmlvdGUiLCJ0cnVseSIsInRydXUiLCJVMjAwYiIsInRyYWNlIiwid2luZG93IiwiREVGQVVMVF9SRURJUkVDVF9QQVRIIiwiT2xpdmFudCIsInByb3RvdHlwZSIsImluaXRpYWxpemUiLCJvcHRpb24iLCJhcmd1bWVudHMiLCJPQkpFQ1QiLCJBUkdVTUVOVFMiLCJFcnJvciIsIkNPQVRFRCIsImxvYWQiLCJnZXRUcmFjZSIsInBhcmFtZXRlciIsImxlbmd0aCIsImVycm9yIiwicmVtaW5kIiwiYXBwbHkiLCJtZXNzYWdlIiwiY29uY2F0IiwiU1RSSU5HIiwiY29uc3RydWN0b3IiLCJGVU5DVElPTiIsIm5hbWUiLCJiaW5kIiwiRUNITyIsInN0YXR1cyIsImNvZGUiLCJFQ0hPX0NPREUiLCJsb2ciLCJjbGllbnQiLCJjb25zb2xlIiwiZGVidWciLCJjb250ZXh0Iiwic2VsZiIsInNpbGVudCIsImRlcHRoIiwic2VydmVyIiwiY29sb3IiLCJjaGFsayIsIndoaXRlIiwic3RhdGUiLCJzdGFjayIsImluc3BlY3QiLCJyZWRzZWEiLCJJc3N1ZSIsImJsYWNrc2VhIiwiRmF0YWwiLCJyZXNldCIsInJlbmV3IiwibG9nRW5naW5lIiwiQk9PTEVBTiIsImRhdGEiLCJzaWxlbmNlIiwicHJvbXB0IiwidG9TdHJpbmciLCJqb2luIiwidmFsdWVPZiIsImdldFRpbWVzdGFtcCIsInRpbWVzdGFtcCIsInByaW50VGltZSIsImRpbSIsImNvbG9yTWVzc2FnZSIsInJlc29sdmVNZXNzYWdlIiwiZmlsdGVyIiwicmVzb2x2ZVRyYWNlIiwiQVJSQVkiLCJtYXAiLCJmcmFtZSIsInJlZCIsImdldE1lc3NhZ2UiLCJjYWxsYmFjayIsImdldCIsInRoZW4iLCJmcmFtZUxpc3QiLCJjYXRjaCIsInNldCIsInByb3BlcnR5IiwidmFsdWUiLCJMT0ciLCJTSUxFTlQiLCJDT05URVhUIiwic2VuZCIsInJhdyIsInByb2NlZHVyZSIsIlJFRElSRUNUIiwicGF0aCIsImh0dHAiLCJTZXJ2ZXJSZXNwb25zZSIsInNlZ3dheSIsImZsdXNoU3RhdGUiLCJyZXBvcnQiLCJkZWxheSIsInByb2Nlc3MiLCJlbWl0IiwiZXZlbnQiLCJFdmVudCIsImRvY3VtZW50IiwiZGlzcGF0Y2hFdmVudCIsImNydXNoIiwic3BhY2UiLCJ1dGlsIiwicmVwbGFjZSIsInN1YnN0cmluZyIsIk5VTUJFUiIsInBhcnNlIiwib25FYWNoUGFyYW1ldGVyIiwiQVNfQVJSQVkiLCJyZXZlcnNlIiwic2hvdXQiLCJyZWRpcmVjdCIsInBhc3MiLCJyZXN1bHQiLCJCdWciLCJjcmVhdGUiLCJDbG9uZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNGQSxJQUFNQSxPQUFPQyxRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1DLE9BQU9ELFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTUUsUUFBUUYsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNRyxTQUFTSCxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1JLFNBQVNKLFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUssU0FBU0wsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNTSxRQUFRTixRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1PLFlBQVlQLFFBQVMsV0FBVCxDQUFsQjtBQUNBLElBQU1RLFFBQVFSLFFB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aEgsU0FBTixDQUFnQndDLE9BQWhCLEdBQTBCdEMsT0FBT3NDLE9BQWpDO0FBQ0F3RSxPQUFNaEgsU0FBTixDQUFnQkMsVUFBaEIsR0FBNkJDLE9BQU9ELFVBQVAsSUFDNUIsU0FBU0EsVUFBVCxHQUFzQjtBQUNyQixPQUFLbUIsSUFBTCxHQUFZbEIsT0FBT2tCLElBQW5COztBQUVBLE9BQUtHLE1BQUwsR0FBY3JCLE9BQU9xQixNQUFyQjs7QUFFQSxPQUFLQyxJQUFMLEdBQVl0QixPQUFPc0IsSUFBbkI7O0FBRUEsT0FBS1EsTUFBTCxHQUFjOUIsT0FBTzhCLE1BQXJCOztBQUVBLE9BQUtDLEtBQUwsR0FBYS9CLE9BQU8rQixLQUFwQjtBQUNBLEVBWEY7O0FBYUF6QyxVQUFVd0gsS0FBVjs7QUFFQWpJLFFBQVFxQyxJQUFSLEVBQWM0RixLQUFkO0FBQ0EsQ0E1QkQsRUE0QkdqSCxPQTVCSDs7QUE4QkFrSCxPQUFPQyxPQUFQLEdBQWlCbkgsT0FBakIiLCJmaWxlIjoib2xpdmFudC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJvbGl2YW50XCIsXG5cdFx0XHRcInBhdGhcIjogXCJvbGl2YW50L29saXZhbnQuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcIm9saXZhbnQuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwib2xpdmFudFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL29saXZhbnQuZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJvbGl2YW50LXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWUsXG5cdFx0XHRcImNsYXNzXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0RWNobyB0aGUgZGVzdHJ1Y3Rpb24gY2F1c2VkIGJ5IHlvdXIgY29kZS5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXJpZFwiOiBcImFyaWRcIixcblx0XHRcdFwiYXNlYVwiOiBcImFzZWFcIixcblx0XHRcdFwiYnVkZ2VcIjogXCJidWRnZVwiLFxuXHRcdFx0XCJibGFja3NlYVwiOiBcImJsYWNrc2VhXCIsXG5cdFx0XHRcImNhbGxlZFwiOiBcImNhbGxlZFwiLFxuXHRcdFx0XCJjaGFsa1wiOiBcImNoYWxrXCIsXG5cdFx0XHRcImNsYXpvZlwiOiBcImNsYXpvZlwiLFxuXHRcdFx0XCJkZXhpc3RcIjogXCJkZXhpc3RcIixcblx0XHRcdFwiZGlhdG9tXCI6IFwiZGlhdG9tXCIsXG5cdFx0XHRcIkV0aGVybml0eVwiOiBcImV0aGVybml0eVwiLFxuXHRcdFx0XCJFdmVudEVtaXR0ZXJcIjogXCJldmVudHNcIixcblx0XHRcdFwiZmFsemVcIjogXCJmYWx6ZVwiLFxuXHRcdFx0XCJmYWx6eVwiOiBcImZhbHp5XCIsXG5cdFx0XHRcImdsdWNvc2VcIjogXCJnbHVjb3NlXCIsXG5cdFx0XHRcImhhcmRlblwiOiBcImhhcmRlblwiLFxuXHRcdFx0XCJoZXJlZGl0b1wiOiBcImhlcmVkaXRvXCIsXG5cdFx0XHRcImtlaW5cIjogXCJrZWluXCIsXG5cdFx0XHRcImh0dHBcIjogXCJodHRwXCIsXG5cdFx0XHRcIm1lZWtcIjogXCJtZWVrXCJcblx0XHRcdFwib3V0cmVcIjogXCJvdXRyZVwiLFxuXHRcdFx0XCJwbG91Z2hcIjogXCJwbG91Z2hcIixcblx0XHRcdFwicHJvdHlwZVwiOiBcInByb3R5cGVcIixcblx0XHRcdFwicmF6ZVwiOiBcInJhemVcIixcblx0XHRcdFwicmVkc2VhXCI6IFwicmVkc2VhXCIsXG5cdFx0XHRcInNuYXBkXCI6IFwic25hcGRcIixcblx0XHRcdFwic2Vnd2F5XCI6IFwic2Vnd2F5XCIsXG5cdFx0XHRcInN5bWJpb3RlXCI6IFwic3ltYmlvdGVcIixcblx0XHRcdFwidHJhY2VcIjogWyBcInN0YWNrdHJhY2UtanNcIiwgXCJzdGFjay10cmFjZVwiIF0sXG5cdFx0XHRcInRydWx5XCI6IFwidHJ1bHlcIixcblx0XHRcdFwidHJ1dVwiOiBcInRydXVcIixcblx0XHRcdFwiVTIwMGJcIjogXCJ1MjAwYlwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFyaWQgPSByZXF1aXJlKCBcImFyaWRcIiApO1xuY29uc3QgYXNlYSA9IHJlcXVpcmUoIFwiYXNlYVwiICk7XG5jb25zdCBidWRnZSA9IHJlcXVpcmUoIFwiYnVkZ2VcIiApO1xuY29uc3QgY2FsbGVkID0gcmVxdWlyZSggXCJjYWxsZWRcIiApO1xuY29uc3QgY2xhem9mID0gcmVxdWlyZSggXCJjbGF6b2ZcIiApO1xuY29uc3QgZGlhdG9tID0gcmVxdWlyZSggXCJkaWF0b21cIiApO1xuY29uc3QgZG91YnQgPSByZXF1aXJlKCBcImRvdWJ0XCIgKTtcbmNvbnN0IEV0aGVybml0eSA9IHJlcXVpcmUoIFwiZXRoZXJuaXR5XCIgKTtcbmNvbnN0IGZhbHplID0gcmVxdWlyZSggXCJmYWx6ZVwiICk7XG5jb25zdCBmYWx6eSA9IHJlcXVpcmUoIFwiZmFsenlcIiApO1xuY29uc3QgZmlsbGVkID0gcmVxdWlyZSggXCJmaWxsZWRcIiApO1xuY29uc3QgZ2x1Y29zZSA9IHJlcXVpcmUoIFwiZ2x1Y29zZVwiICk7XG5jb25zdCBoYXJkZW4gPSByZXF1aXJlKCBcImhhcmRlblwiICk7XG5jb25zdCBoZXJlZGl0byA9IHJlcXVpcmUoIFwiaGVyZWRpdG9cIiApO1xuY29uc3Qga2VpbiA9IHJlcXVpcmUoIFwia2VpblwiICk7XG5jb25zdCBtZWVrID0gcmVxdWlyZSggXCJtZWVrXCIgKTtcbmNvbnN0IG91dHJlID0gcmVxdWlyZSggXCJvdXRyZVwiICk7XG5jb25zdCBwbG91Z2ggPSByZXF1aXJlKCBcInBsb3VnaFwiICk7XG5jb25zdCBwcm90eXBlID0gcmVxdWlyZSggXCJwcm90eXBlXCIgKTtcbmNvbnN0IHJhemUgPSByZXF1aXJlKCBcInJhemVcIiApO1xuY29uc3Qgc25hcGQgPSByZXF1aXJlKCBcInNuYXBkXCIgKTtcbmNvbnN0IHN5bWJpb3RlID0gcmVxdWlyZSggXCJzeW1iaW90ZVwiICk7XG5jb25zdCB0cnVseSA9IHJlcXVpcmUoIFwidHJ1bHlcIiApO1xuY29uc3QgdHJ1dSA9IHJlcXVpcmUoIFwidHJ1dVwiICk7XG5jb25zdCBVMjAwYiA9IHJlcXVpcmUoIFwidTIwMGJcIiApO1xuXG4vLzogQGNsaWVudDpcbmNvbnN0IHRyYWNlID0gcmVxdWlyZSggXCJzdGFja3RyYWNlLWpzXCIgKTtcbmhhcmRlbiggXCJERUZBVUxUX1JFRElSRUNUX1BBVEhcIiwgd2luZG93LkRFRkFVTFRfUkVESVJFQ1RfUEFUSCB8fCBcIi92aWV3L25vdGlmeVwiICk7XG4vLzogQGVuZC1jbGllbnRcblxuXG5cbmNvbnN0IE9saXZhbnQgPSBkaWF0b20oIFwiT2xpdmFudFwiICk7XG5cbmhhcmRlbiggXCJFQ0hPXCIsIFwiZWNob1wiICk7XG5oYXJkZW4oIFwiRUNIT19DT0RFXCIsIDIwMCApO1xuXG5oYXJkZW4oIFwiUkVESVJFQ1RcIiwgXCJyZWRpcmVjdFwiICk7XG5oYXJkZW4oIFwiQ09OVEVYVFwiLCBcImNvbnRleHRcIiApO1xuaGFyZGVuKCBcIkxPR1wiLCBcImxvZ1wiICk7XG5oYXJkZW4oIFwiU0lMRU5UXCIsIFwic2lsZW50XCIgKTtcblxuLyo7XG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRPcHRpb24gc2hvdWxkIG5vdCBiZSBnbHVjb3NlIGNvYXRlZC5cblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiBpbml0aWFsaXplKCBvcHRpb24gKXtcblx0aWYoIHByb3R5cGUoIGFyZ3VtZW50c1sgMCBdLCBPQkpFQ1QgKSAmJlxuXHRcdCFkb3VidCggYXJndW1lbnRzWyAwIF0sIEFSR1VNRU5UUyApICYmXG5cdFx0ISggY2xhem9mKCBhcmd1bWVudHNbIDAgXSwgRXJyb3IgKSApICYmXG5cdFx0b3B0aW9uLkNPQVRFRCAhPT0gQ09BVEVEIClcblx0e1xuXHRcdHRoaXMubG9hZCggb3B0aW9uICk7XG5cblx0fWVsc2V7XG5cdFx0dGhpcy5sb2FkKCApO1xuXHR9XG5cblx0dGhpcy5nZXRUcmFjZSggKTtcblxuXHRsZXQgcGFyYW1ldGVyID0gYXJndW1lbnRzWyAwIF07XG5cblx0aWYoIGFyZ3VtZW50cy5sZW5ndGggPT0gMCApe1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH1lbHNlIGlmKCBjbGF6b2YoIHBhcmFtZXRlciwgRXJyb3IgKSApe1xuXHRcdGxldCBlcnJvciA9IHBhcmFtZXRlcjtcblxuXHRcdHRoaXMucmVtaW5kLmFwcGx5KCB0aGlzLCBbIGVycm9yLm1lc3NhZ2UsIGVycm9yIF0uY29uY2F0KCBidWRnZSggYXJndW1lbnRzICkgKSApO1xuXG5cdH1lbHNlIGlmKCBjbGF6b2YoIHBhcmFtZXRlciwgT2xpdmFudCApICl7XG5cdFx0dGhpcy5sb2FkKCBwYXJhbWV0ZXIgKTtcblxuXHR9ZWxzZSBpZiggZG91YnQoIHBhcmFtZXRlciwgQVJHVU1FTlRTICkgKXtcblx0XHR0aGlzLnJlbWluZC5hcHBseSggdGhpcywgcGxvdWdoKCBwYXJhbWV0ZXIgKSApO1xuXG5cdH1lbHNlIGlmKCBwcm90eXBlKCBwYXJhbWV0ZXIsIFNUUklORyApICl7XG5cdFx0dGhpcy5yZW1pbmQuYXBwbHkoIHRoaXMsIHJhemUoIGFyZ3VtZW50cyApICk7XG5cblx0fWVsc2UgaWYoIHByb3R5cGUoIHBhcmFtZXRlciwgT0JKRUNUICkgJiZcblx0XHRwYXJhbWV0ZXIuY29uc3RydWN0b3IgJiZcblx0XHRwcm90eXBlKCBwYXJhbWV0ZXIuY29uc3RydWN0b3IsIEZVTkNUSU9OICkgJiZcblx0XHRwYXJhbWV0ZXIuY29uc3RydWN0b3IubmFtZSAhPSBcIkZ1bmN0aW9uXCIgJiZcblx0XHRjbGF6b2YoIHBhcmFtZXRlciwgcGFyYW1ldGVyLmNvbnN0cnVjdG9yICkgKVxuXHR7XG5cdFx0dGhpcy5sb2FkKCBwYXJhbWV0ZXIgKTtcblxuXHRcdHRoaXMucmVtaW5kLmFwcGx5KCB0aGlzLCByYXplKCBhcmd1bWVudHMgKSApO1xuXG5cdH1lbHNlIGlmKCBwcm90eXBlKCBwYXJhbWV0ZXIsIE9CSkVDVCApICl7XG5cdFx0dGhpcy5yZW1pbmQuYXBwbHkoIHRoaXMsIHJhemUoIGFyZ3VtZW50cyApICk7XG5cdH1cblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbk9saXZhbnQucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbiBsb2FkKCBvcHRpb24gKXtcblx0b3B0aW9uID0gZ2x1Y29zZS5iaW5kKCB0aGlzICkoIG9wdGlvbiApO1xuXG5cdHRoaXMubmFtZSA9IG9wdGlvbi5uYW1lIHx8IHRoaXMubmFtZSB8fCBFQ0hPXG5cblx0dGhpcy5zdGF0dXMgPSBvcHRpb24uc3RhdHVzIHx8IHRoaXMuc3RhdHVzIHx8IEVDSE87XG5cblx0dGhpcy5jb2RlID0gb3B0aW9uLmNvZGUgfHwgdGhpcy5jb2RlIHx8IEVDSE9fQ09ERTtcblxuXHR0aGlzLmxvZyA9IG9wdGlvbi5sb2cgfHwgdGhpcy5sb2cgfHwgKCAoIGFzZWEuY2xpZW50ICk/IGNvbnNvbGUuZGVidWcgOiBjb25zb2xlLmxvZyApO1xuXG5cdGlmKCBmYWx6ZSggdGhpcy5jb250ZXh0ICkgJiYgb3B0aW9uLnNlbGYgKXtcblx0XHR0aGlzLmNvbnRleHQgPSBvcHRpb24uc2VsZjtcblx0fVxuXG5cdHRoaXMuc2lsZW50ID0ga2Vpbiggb3B0aW9uLCBcInNpbGVudFwiICk/IG9wdGlvbi5zaWxlbnQgOlxuXHRcdGtlaW4oIHRoaXMsIFwic2lsZW50XCIgKT8gdGhpcy5zaWxlbnQgOiB0cnVlO1xuXG5cdC8vOiBEZXB0aCBkaWN0YXRlcyByZWZpbmVkIHNldHRpbmdzIG9mIHRoaXMgcHJvY2VkdXJlLlxuXHR0aGlzLmRlcHRoID0ga2Vpbiggb3B0aW9uLCBcImRlcHRoXCIgKT8gb3B0aW9uLmRlcHRoIDpcblx0XHRrZWluKCB0aGlzLCBcImRlcHRoXCIgKT8gdGhpcy5kZXB0aCA6ICt0aGlzLnNpbGVudDtcblxuXHQvLzogRGVwdGggaXMgb25seSBmcm9tIDEtMCBvciAxLTIzNDUtNjc4OS0wLlxuXHQvLzogRGVwdGggMiBpcyBkZWVwIHNpbGVudCBkZXB0aC5cblx0dGhpcy5kZXB0aCA9IHRoaXMuZGVwdGggJSAxMDtcblxuXHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHR0aGlzLmNvbG9yID0gb3B0aW9uLmNvbG9yIHx8IHRoaXMuY29sb3IgfHwgY2hhbGsud2hpdGU7XG5cdH1cblxuXHR0aGlzLnN0YXRlID0gXCJcIjtcblxuXHR0aGlzLnN0YWNrID0gb3B0aW9uLnN0YWNrIHx8IHRoaXMuc3RhY2sgfHwgWyBdO1xuXG5cdHRoaXMubWVzc2FnZSA9IG9wdGlvbi5tZXNzYWdlIHx8IHRoaXMubWVzc2FnZSB8fCBcIlwiO1xuXG5cdHRoaXMuaW5zcGVjdCA9IG9wdGlvbi5pbnNwZWN0IHx8IHRoaXMuaW5zcGVjdCB8fCB7IFwiZGVwdGhcIjogMSwgXCJsZW5ndGhcIjogMjAwIH07XG5cblx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0cmVkc2VhKCBJc3N1ZSApO1xuXG5cdFx0YmxhY2tzZWEoIEZhdGFsICk7XG5cdH1cblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qO1xuXHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0TW9kaWZpZXMgdGhlIGxvZyBlbmdpbmUgd2hpbGUgbWFpbnRhaW5pbmcgZW52aXJvbm1lbnQgcHJvcGVydGllcy5cblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gcmVzZXQoIG9wdGlvbiwgcmVuZXcgKXtcblx0aWYoIHByb3R5cGUoIG9wdGlvbiwgRlVOQ1RJT04gKSAmJiBjbGF6b2YoIG9wdGlvbiwgT2xpdmFudCApICl7XG5cdFx0bGV0IGxvZ0VuZ2luZSA9IG9wdGlvbjtcblxuXHRcdGlmKCBwcm90eXBlKCByZW5ldywgQk9PTEVBTiApICYmIHJlbmV3ICl7XG5cdFx0XHRsZXQgZGF0YSA9IHtcblx0XHRcdFx0XCJtZXNzYWdlXCI6IHRoaXMubWVzc2FnZSxcblx0XHRcdFx0XCJzdGFja1wiOiB0aGlzLnN0YWNrXG5cdFx0XHR9O1xuXG5cdFx0XHRyZXR1cm4gbG9nRW5naW5lKCBkYXRhICk7XG5cblx0XHR9ZWxzZXtcblx0XHRcdHRoaXMubG9hZCggbG9nRW5naW5lLnByb3RvdHlwZSApO1xuXHRcdH1cblxuXHR9ZWxzZSBpZiggcHJvdHlwZSggb3B0aW9uLCBPQkpFQ1QgKSApe1xuXHRcdHRoaXMubG9hZCggb3B0aW9uICk7XG5cblx0fWVsc2V7XG5cdFx0dGhpcy5yZXNldCggSXNzdWUsIHRydWUgKVxuXHRcdFx0LnNpbGVuY2UoIClcblx0XHRcdC5wcm9tcHQoIFwiY2Fubm90IHJlc2V0IHRvIGdpdmVuIG9wdGlvblwiLCBvcHRpb24gKTtcblx0fVxuXG5cdHJldHVybiB0aGlzO1xufTtcblxuT2xpdmFudC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyggKXtcblx0cmV0dXJuIFUyMDBiKCBvdXRyZSggWyB0aGlzLm5hbWUsIHRoaXMuc3RhdHVzLCB0aGlzLm1lc3NhZ2UgXSApICkuam9pbiggXCIsIFwiICk7XG59O1xuXG5PbGl2YW50LnByb3RvdHlwZS52YWx1ZU9mID0gZnVuY3Rpb24gdmFsdWVPZiggKXtcblx0cmV0dXJuIFUyMDBiKCBvdXRyZSggWyB0aGlzLm5hbWUsIHRoaXMuc3RhdHVzLCB0aGlzLm1lc3NhZ2UgXSApICkuam9pbiggXCIsIFwiICk7XG59O1xuXG5PbGl2YW50LnByb3RvdHlwZS5nZXRUaW1lc3RhbXAgPSBmdW5jdGlvbiBnZXRUaW1lc3RhbXAoICl7XG5cdGxldCB0aW1lc3RhbXAgPSBFdGhlcm5pdHkoICkucHJpbnRUaW1lKCB0cnVlICk7XG5cblx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0cmV0dXJuIGNoYWxrLmRpbSggdGltZXN0YW1wICk7XG5cdH1cblxuXHRyZXR1cm4gdGltZXN0YW1wO1xufTtcblxuT2xpdmFudC5wcm90b3R5cGUuY29sb3JNZXNzYWdlID0gZnVuY3Rpb24gY29sb3JNZXNzYWdlKCBjb2xvciwgbWVzc2FnZSApe1xuXHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRpZiggcHJvdHlwZSggY29sb3IsIEZVTkNUSU9OICkgKXtcblx0XHRcdHJldHVybiBjb2xvciggbWVzc2FnZSApO1xuXG5cdFx0fWVsc2UgaWYoIHByb3R5cGUoIGNvbG9yLCBTVFJJTkcgKSAmJiB0cnVseSggY29sb3IgKSApe1xuXHRcdFx0aWYoIGtlaW4oIGNoYWxrLCBjb2xvciApICYmIHByb3R5cGUoIGNoYWxrWyBjb2xvciBdLCBGVU5DVElPTiApICl7XG5cdFx0XHRcdHJldHVybiBjaGFsa1sgY29sb3IgXSggbWVzc2FnZSApO1xuXG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0dGhpcy5yZW1pbmQoIGBpbnZhbGlkIG1lc3NhZ2UgY29sb3IsICR7IGNvbG9yIH1gICk7XG5cblx0XHRcdFx0cmV0dXJuIGNoYWxrLndoaXRlKCBtZXNzYWdlICk7XG5cdFx0XHR9XG5cblx0XHR9ZWxzZXtcblx0XHRcdHJldHVybiBjaGFsay53aGl0ZSggbWVzc2FnZSApO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBtZXNzYWdlO1xufTtcblxuLyo7XG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRUaGUgbWVzc2FnZSBpcyBkaXZpZGVkIGludG8gdGhyZWUgcGFydHMsXG5cdFx0MS4gbmFtZXNwYWNlLFxuXHRcdDIuIHN0YXR1cyxcblx0XHQzLiBhY3R1YWwgbWVzc2FnZVxuXHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuT2xpdmFudC5wcm90b3R5cGUucmVzb2x2ZU1lc3NhZ2UgPSBmdW5jdGlvbiByZXNvbHZlTWVzc2FnZSggKXtcblx0bGV0IG1lc3NhZ2UgPSBVMjAwYiggb3V0cmUoIFsgdGhpcy5uYW1lLCB0aGlzLnN0YXR1cywgdGhpcy5tZXNzYWdlIF0gKVxuXHRcdC5maWx0ZXIoIHRydWx5ICkgKS5qb2luKCBcIiwgXCIgKTtcblxuXHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRyZXR1cm4gdGhpcy5jb2xvck1lc3NhZ2UoIHRoaXMuY29sb3IsIG1lc3NhZ2UgKTtcblx0fVxuXG5cdHJldHVybiBtZXNzYWdlO1xufTtcblxuT2xpdmFudC5wcm90b3R5cGUucmVzb2x2ZVRyYWNlID0gZnVuY3Rpb24gcmVzb2x2ZVRyYWNlKCApe1xuXHRsZXQgc3RhY2sgPSBcInN0YWNrIHRyYWNlIG5vdCByZWFkeVwiO1xuXG5cdGlmKCAhdGhpcy5zaWxlbnQgJiYgZG91YnQoIHRoaXMuc3RhY2ssIEFSUkFZICkgJiYgZmlsbGVkKCB0aGlzLnN0YWNrICkgKXtcblx0XHRzdGFjayA9IHRoaXMuc3RhY2s7XG5cblx0XHRzdGFjayA9IHN0YWNrLm1hcCggKCBmcmFtZSApID0+IHsgcmV0dXJuIGZyYW1lLnRvU3RyaW5nKCApOyB9ICk7XG5cblx0XHRzdGFjayA9IFUyMDBiKCBzdGFjayApLmpvaW4oIFwiXFxuXCIgKTtcblxuXHRcdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdFx0cmV0dXJuIGNoYWxrLmRpbS5yZWQoIHN0YWNrICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHN0YWNrO1xuXHR9XG5cblx0aWYoIHRoaXMuZGVwdGggPCA1ICYmXG5cdFx0dGhpcy5zaWxlbnQgJiZcblx0XHR0cnV1KCB0aGlzLmNvbnRleHQgKSAmJlxuXHQgXHRwcm90eXBlKCB0aGlzLmNvbnRleHQuY29uc3RydWN0b3IsIEZVTkNUSU9OICkgJiZcblx0XHR0cnVseSggdGhpcy5jb250ZXh0LmNvbnN0cnVjdG9yLm5hbWUgKSApXG5cdHtcblx0XHRzdGFjayA9IGBjYWxsZWQgd2l0aCBjb250ZXh0LCAkeyB0aGlzLmNvbnRleHQuY29uc3RydWN0b3IubmFtZSB9YDtcblxuXHRcdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdFx0cmV0dXJuIGNoYWxrLmRpbSggc3RhY2sgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc3RhY2s7XG5cdH1cblxuXHRpZiggdGhpcy5zaWxlbnQgKXtcblx0XHRzdGFjayA9IFwic3RhY2sgdHJhY2UgaXMgbm90IGF2YWlsYWJsZSBvbiBzaWxlbnQgbW9kZVwiO1xuXG5cdFx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0XHRyZXR1cm4gY2hhbGsuZGltKCBzdGFjayApO1xuXHRcdH1cblxuXHRcdHJldHVybiBzdGFjaztcblx0fVxuXG5cdGlmKCB0aGlzLmRlcHRoID4gNSApe1xuXHRcdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdFx0cmV0dXJuIGNoYWxrLmRpbSggc3RhY2sgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc3RhY2s7XG5cdH1cbn07XG5cbi8qO1xuXHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0VGhlIG1lc3NhZ2UgY29uc2lzdCBvZiB0aHJlZSBsYXllciBvZiBzdHJpbmdzLFxuXHRcdFx0MS4gdGltZXN0YW1wIGluIHRydWUgdGltZSBmb3JtYXRcblx0XHRcdDIuIGFjdHVhbCByZWFkYWJsZSBtZXNzYWdlXG5cdFx0XHQzLiBtZXNzYWdlIHRyYWNlIG9yIG1lc3NhZ2UgY29udGV4dFxuXG5cdFx0VGhlc2UgaW5mb3JtYXRpb24gd2lsbCBiZSBkaXZpZGVkIHRocm91Z2ggemVyby13aWR0aCBzcGFjZSBjb252ZW50aW9uLlxuXHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuT2xpdmFudC5wcm90b3R5cGUuZ2V0TWVzc2FnZSA9IGZ1bmN0aW9uIGdldE1lc3NhZ2UoICl7XG5cdHJldHVybiBVMjAwYiggW1xuXHRcdHRoaXMuZ2V0VGltZXN0YW1wKCApLFxuXHRcdHRoaXMucmVzb2x2ZU1lc3NhZ2UoICksXG5cdFx0dGhpcy5yZXNvbHZlVHJhY2UoIClcblx0XSApLmpvaW4oIFwiXFxuXCIgKTtcbn07XG5cbi8qO1xuXHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0VGhpcyBzaG91bGQgYmUgdXNlZCBpbnRlcm5hbGx5IGFzIG11Y2ggYXMgcG9zc2libGUuXG5cdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5PbGl2YW50LnByb3RvdHlwZS5nZXRUcmFjZSA9IGZ1bmN0aW9uIGdldFRyYWNlKCBjYWxsYmFjayApe1xuXHRpZiggdGhpcy5kZXB0aCA9PSAyICl7XG5cdFx0dGhpcy5yZW1pbmQoIFwidHJhY2luZyBpcyBkaXNhYmxlZCBmb3IgZGVwdGggMlwiICkucHJvbXB0KCApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRjYWxsYmFjayA9IGNhbGxlZC5iaW5kKCB0aGlzICkoIGNhbGxiYWNrICk7XG5cblx0c25hcGQuYmluZCggdGhpcyApKCBjYWxsYmFjaywgMTAwMCApO1xuXG5cdGlmKCBhc2VhLmNsaWVudCApe1xuXHRcdHRyYWNlLmdldCggKVxuXHRcdFx0LnRoZW4oICggZnJhbWVMaXN0ICkgPT4ge1xuXHRcdFx0XHR0aGlzLnN0YWNrID0gZnJhbWVMaXN0O1xuXG5cdFx0XHRcdGNhbGxiYWNrKCBudWxsLCB0aGlzLnN0YWNrICk7XG5cdFx0XHR9IClcblx0XHRcdC5jYXRjaCggKCBlcnJvciApID0+IHsgY2FsbGJhY2soIHRoaXMucmVtaW5kKCBlcnJvciApICk7IH0gKTtcblxuXHR9ZWxzZSBpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHR0aGlzLnN0YWNrID0gdHJhY2UuZ2V0KCApO1xuXG5cdFx0Y2FsbGJhY2soIG51bGwsIHRoaXMuc3RhY2sgKTtcblx0fVxuXG5cdHJldHVybiB0aGlzO1xufTtcblxuLyo7XG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRTZXRzIGEgcHJvcGVydHkgb2YgdGhpcyBsb2cgZW5naW5lLlxuXG5cdFx0Tm90IGFsbCBwcm9wZXJ0eSBjYW4gYmUgc2V0IHRvIGxpbWl0IHRoaXMgZnVuY3Rpb25cblx0XHRcdGZvciBzZWN1cml0eSBwdXJwb3Nlcy5cblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIHNldCggcHJvcGVydHksIHZhbHVlICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwicHJvcGVydHk6cmVxdWlyZWRcIjogXCJzdHJpbmdcIixcblx0XHRcdFx0XCJ2YWx1ZVwiOiBcIipcIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0bGV0IHBhcmFtZXRlciA9IHJhemUoIGFyZ3VtZW50cyApO1xuXG5cdGlmKCBwYXJhbWV0ZXIubGVuZ3RoID09IDEgJiYgcHJvdHlwZSggcGFyYW1ldGVyWyAwIF0sIE9CSkVDVCApICl7XG5cdFx0bGV0IG9wdGlvbiA9IHBhcmFtZXRlclsgMCBdO1xuXHRcdGZvciggbGV0IHByb3BlcnR5IGluIG9wdGlvbiApe1xuXHRcdFx0dGhpcy5zZXQoIHByb3BlcnR5LCBvcHRpb25bIHByb3BlcnR5IF0gKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGlmKCAhcHJvdHlwZSggcHJvcGVydHksIFNUUklORyApICl7XG5cdFx0dGhpcy5yZXNldCggSXNzdWUsIHRydWUgKVxuXHRcdFx0LnNpbGVuY2UoIClcblx0XHRcdC5wcm9tcHQoIFwiaW52YWxpZCBwcm9wZXJ0eVwiLCBwcm9wZXJ0eSApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRpZiggcHJvdHlwZSggcHJvcGVydHksIFNUUklORyApICYmXG5cdFx0cHJvcGVydHkgIT0gTE9HICAmJlxuXHRcdHByb3BlcnR5ICE9IFNJTEVOVCAmJlxuXHRcdHByb3BlcnR5ICE9IENPTlRFWFQgKVxuXHR7XG5cdFx0dGhpcy5yZXNldCggSXNzdWUsIHRydWUgKVxuXHRcdFx0LnNpbGVuY2UoIClcblx0XHRcdC5wcm9tcHQoIFwiaW52YWxpZCBwcm9wZXJ0eVwiLCBwcm9wZXJ0eSApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHR0aGlzWyBwcm9wZXJ0eSBdID0gdmFsdWU7XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFNlbmQgZGF0YSB0byBzZXJ2ZXIgb3IgY2xpZW50LlxuXHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuT2xpdmFudC5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uIHNlbmQoICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwicmVzcG9uc2VcIjogXCJodHRwLlNlcnZlclJlc3BvbnNlXCIsXG5cdFx0XHRcdFwicHJvY2VkdXJlXCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0aWYoIHRoaXMuZGVwdGggPT0gMiApe1xuXHRcdHRoaXMucmVtaW5kKCBcInNlbmRpbmcgaXMgZGlzYWJsZWQgZm9yIGRlcHRoIDJcIiApLnByb21wdCggKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0bGV0IG1lc3NhZ2UgPSBtZWVrKCB0aGlzLnN0YXR1cywgVTIwMGIoIHRoaXMudG9TdHJpbmcoICkgKS5yYXcoICkgKTtcblxuXHRsZXQgcHJvY2VkdXJlID0gYXJndW1lbnRzWyAwIF07XG5cblx0aWYoIGFzZWEuc2VydmVyICYmXG5cdFx0dGhpcy5zdGF0ZSA9PT0gUkVESVJFQ1QgJiZcblx0XHRwcm90eXBlKCB0aGlzLnBhdGgsIFNUUklORyApICYmXG5cdFx0dHJ1bHkoIHRoaXMucGF0aCApICYmXG5cdFx0Y2xhem9mKCBwcm9jZWR1cmUsIGh0dHAuU2VydmVyUmVzcG9uc2UgKSApXG5cdHtcblx0XHRzZWd3YXkoIHtcblx0XHRcdFwicmVzcG9uc2VcIjogcHJvY2VkdXJlLFxuXHRcdFx0XCJwYXRoXCI6IHRoaXMucGF0aCxcblx0XHRcdFwic3RhdHVzXCI6IHRoaXMuY29kZSxcblx0XHRcdFwiZGF0YVwiOiBtZXNzYWdlLFxuXHRcdH0gKTtcblxuXHRcdHRoaXMuZmx1c2hTdGF0ZSggKTtcblxuXHR9ZWxzZSBpZiggYXNlYS5zZXJ2ZXIgJiZcblx0XHRmYWx6eSggdGhpcy5zdGF0ZSApICYmXG5cdFx0Y2xhem9mKCBwcm9jZWR1cmUsIGh0dHAuU2VydmVyUmVzcG9uc2UgKSApXG5cdHtcblx0XHRtZXNzYWdlLnNlbmQoIHByb2NlZHVyZSwgdGhpcy5jb2RlICk7XG5cblx0fWVsc2UgaWYoIGFzZWEuY2xpZW50ICYmXG5cdFx0dGhpcy5zdGF0ZSA9PSBSRURJUkVDVCAmJlxuXHRcdHByb3R5cGUoIHRoaXMucGF0aCwgU1RSSU5HICkgJiZcblx0XHR0cnVseSggdGhpcy5wYXRoICkgKVxuXHR7XG5cdFx0c2Vnd2F5KCB7XG5cdFx0XHRcInBhdGhcIjogdGhpcy5wYXRoLFxuXHRcdFx0XCJzdGF0dXNcIjogdGhpcy5jb2RlLFxuXHRcdFx0XCJkYXRhXCI6IG1lc3NhZ2UsXG5cdFx0fSApO1xuXG5cdFx0dGhpcy5mbHVzaFN0YXRlKCApO1xuXG5cdH1lbHNlIGlmKCBhc2VhLmNsaWVudCAmJlxuXHRcdGZhbHp5KCB0aGlzLnN0YXRlICkgJiZcblx0XHRwcm90eXBlKCBwcm9jZWR1cmUsIEZVTkNUSU9OICkgKVxuXHR7XG5cdFx0bWVzc2FnZS5zZW5kLmJpbmQoIHRoaXMgKSggcHJvY2VkdXJlICk7XG5cblx0fWVsc2UgaWYoIHRydWx5KCB0aGlzLnN0YXRlICkgKXtcblx0XHR0aGlzLnJlc2V0KCBJc3N1ZSwgdHJ1ZSApXG5cdFx0XHQuc2lsZW5jZSggKVxuXHRcdFx0LnByb21wdCggYGNhbm5vdCBpbnZva2Ugc2VuZGluZyBzdGF0ZSwgJHsgdGhpcy5zdGF0ZSB9LCBwcm9wZXJseWAgKVxuXHRcdFx0LnNlbmQoIHByb2NlZHVyZSApO1xuXG5cdFx0dGhpcy5mbHVzaFN0YXRlKCApO1xuXG5cdH1lbHNle1xuXHRcdHRoaXMucmVzZXQoIElzc3VlLCB0cnVlIClcblx0XHRcdC5zaWxlbmNlKCApXG5cdFx0XHQucHJvbXB0KCBcImNhbm5vdCBzZW5kIHByb3Blcmx5XCIgKTtcblx0fVxuXG5cdHJldHVybiB0aGlzO1xufTtcblxuLyo7XG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRTdHJlYW0gZGF0YSB0byBsaXN0ZW5lcnMuXG5cdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5PbGl2YW50LnByb3RvdHlwZS5yZXBvcnQgPSBmdW5jdGlvbiByZXBvcnQoICl7XG5cdGlmKCB0aGlzLmRlcHRoID09IDIgKXtcblx0XHR0aGlzLnJlbWluZCggXCJyZXBvcnRpbmcgaXMgZGlzYWJsZWQgZm9yIGRlcHRoIDJcIiApLnByb21wdCggKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c25hcGQuYmluZCggdGhpcyApXG5cdFx0KCBmdW5jdGlvbiBkZWxheSggKXtcblx0XHRcdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdFx0XHRwcm9jZXNzLmVtaXQoIHRoaXMubmFtZSwgdGhpcyApO1xuXG5cdFx0XHR9ZWxzZSBpZiggYXNlYS5jbGllbnQgKXtcblx0XHRcdFx0bGV0IGV2ZW50ID0gbmV3IEV2ZW50KCB0aGlzLm5hbWUgKTtcblx0XHRcdFx0ZXZlbnQuZGF0YSA9IHRoaXM7XG5cblx0XHRcdFx0ZG9jdW1lbnQuZGlzcGF0Y2hFdmVudCggZXZlbnQgKTtcblx0XHRcdH1cblx0XHR9LCAxMDAwICk7XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKjtcblx0QHN0YXRpYy1tZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRDcnVzaCB0aGUgcGFyYW1ldGVyIGV4dHJhY3Rpbmcgc3RyaW5nIGluZm9ybWF0aW9uLlxuXG5cdFx0U3BlY2lhbCBzdXBwb3J0IGZvciBnbHVjb3NlIGNvYXRlZCBwYXJhbWV0ZXJzLlxuXHRAZW5kLXN0YXRpYy1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbmNvbnN0IGNydXNoID0gZnVuY3Rpb24gY3J1c2goIHBhcmFtZXRlciwgb3B0aW9uICl7XG5cdG9wdGlvbiA9IG9wdGlvbiB8fCB0aGlzLmluc3BlY3QgfHwgeyB9O1xuXG5cdGxldCBkZXB0aCA9IG9wdGlvbi5kZXB0aCB8fCAxO1xuXHRsZXQgbGVuZ3RoID0gb3B0aW9uLmxlbmd0aCB8fCAyMDA7XG5cdGxldCBzcGFjZSA9IC9cXHN7Mix9L2c7XG5cblx0aWYoIGFzZWEuc2VydmVyICYmIHByb3R5cGUoIHBhcmFtZXRlciwgT0JKRUNUICkgJiYgcGFyYW1ldGVyLkNPQVRFRCA9PT0gQ09BVEVEICl7XG5cdFx0aWYoIHBhcmFtZXRlci5zZWxmICl7XG5cdFx0XHR0aGlzLnNldCggQ09OVEVYVCwgcGFyYW1ldGVyLnNlbGYgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdXRpbC5pbnNwZWN0KCBwYXJhbWV0ZXIsIHsgXCJkZXB0aFwiOiBkZXB0aCB9IClcblx0XHRcdC5yZXBsYWNlKCBzcGFjZSwgXCIgXCIgKVxuXHRcdFx0LnN1YnN0cmluZyggMCwgbGVuZ3RoICkgKyBcIi4uLlwiO1xuXG5cdH1lbHNlIGlmKCBwYXJhbWV0ZXIgJiYgY2xhem9mKCBwYXJhbWV0ZXIsIEVycm9yICkgJiYgcGFyYW1ldGVyLnN0YWNrICl7XG5cdFx0cmV0dXJuIHBhcmFtZXRlci5zdGFjay50b1N0cmluZyggKTtcblxuXHR9ZWxzZSBpZiggY2xhem9mKCBwYXJhbWV0ZXIsIE9saXZhbnQgKSApe1xuXHRcdHJldHVybiBwYXJhbWV0ZXIubWVzc2FnZTtcblxuXHR9ZWxzZSBpZiggcHJvdHlwZSggcGFyYW1ldGVyLCBGVU5DVElPTiApICl7XG5cdFx0cmV0dXJuIHBhcmFtZXRlci50b1N0cmluZyggKVxuXHRcdFx0LnJlcGxhY2UoIHNwYWNlLCBcIiBcIiApXG5cdFx0XHQuc3Vic3RyaW5nKCAwLCBsZW5ndGggKSArIFwiLi4uXCI7XG5cblx0fWVsc2UgaWYoIHByb3R5cGUoIHBhcmFtZXRlciwgU1RSSU5HICkgfHxcblx0XHRwcm90eXBlKCBwYXJhbWV0ZXIsIE5VTUJFUiApIHx8XG5cdFx0cHJvdHlwZSggcGFyYW1ldGVyLCBCT09MRUFOICkgKVxuXHR7XG5cdFx0cmV0dXJuIHBhcmFtZXRlci50b1N0cmluZyggKTtcblxuXHR9ZWxzZSBpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRyZXR1cm4gdXRpbC5pbnNwZWN0KCBwYXJhbWV0ZXIsIHsgXCJkZXB0aFwiOiBkZXB0aCB9IClcblx0XHRcdC5yZXBsYWNlKCBzcGFjZSwgXCIgXCIgKVxuXHRcdFx0LnN1YnN0cmluZyggMCwgbGVuZ3RoICk7XG5cblx0fWVsc2UgaWYoIGFzZWEuY2xpZW50ICl7XG5cdFx0cmV0dXJuIHBhcmFtZXRlci50b1N0cmluZyggKTtcblxuXHR9ZWxzZXtcblx0XHRyZXR1cm4gcGFyYW1ldGVyLnRvU3RyaW5nKCApO1xuXHR9XG59O1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdEFwcGVuZCBtZXNzYWdlcyB0byB0aGUgY3VycmVudCBtZXNzYWdlLlxuXHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuT2xpdmFudC5wcm90b3R5cGUucmVtaW5kID0gZnVuY3Rpb24gcmVtaW5kKCApe1xuXHRsZXQgcGFyYW1ldGVyID0gcmF6ZSggYXJndW1lbnRzICk7XG5cblx0aWYoIGFyaWQoIHBhcmFtZXRlciApICl7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRsZXQgcGFyc2UgPSBjcnVzaC5iaW5kKCB0aGlzICk7XG5cblx0dGhpcy5tZXNzYWdlID0gVTIwMGIoIHBhcmFtZXRlclxuXHRcdC5tYXAoIGZ1bmN0aW9uIG9uRWFjaFBhcmFtZXRlciggcGFyYW1ldGVyICl7XG5cdFx0XHRpZiggZG91YnQoIHBhcmFtZXRlciwgQVNfQVJSQVkgKSApe1xuXHRcdFx0XHRwYXJhbWV0ZXIgPSByYXplKCBwYXJhbWV0ZXIgKVxuXHRcdFx0XHRcdC5tYXAoICggcGFyYW1ldGVyICkgPT4geyByZXR1cm4gcGFyc2UoIHBhcmFtZXRlciApIH0gKTtcblxuXHRcdFx0XHRyZXR1cm4gVTIwMGIoIHBhcmFtZXRlclxuXHRcdFx0XHRcdC5maWx0ZXIoICggbWVzc2FnZSApID0+IHsgcmV0dXJuIHRydWx5KCBtZXNzYWdlICk7IH0gKSApXG5cdFx0XHRcdFx0LmpvaW4oIFwiLCBcIiApO1xuXG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0cmV0dXJuIHBhcnNlKCBwYXJhbWV0ZXIgKTtcblx0XHRcdH1cblx0XHR9IClcblx0XHQucmV2ZXJzZSggKVxuXHRcdC5jb25jYXQoIFsgdGhpcy5tZXNzYWdlIF0gKVxuXHRcdC5maWx0ZXIoICggbWVzc2FnZSApID0+IHsgcmV0dXJuIHRydWx5KCBtZXNzYWdlICk7IH0gKVxuXHRcdC5yZXZlcnNlKCApIClcblx0XHQuam9pbiggXCIsIFwiICk7XG5cblx0dGhpcy5yZXBvcnQoICk7XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFNpbGVuY2UgdGhlIGxvZ2dpbmcgY2FwYWJpbGl0aWVzLlxuXHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuT2xpdmFudC5wcm90b3R5cGUuc2lsZW5jZSA9IGZ1bmN0aW9uIHNpbGVuY2UoICl7XG5cdHRoaXMuc2lsZW50ID0gdHJ1ZTtcblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qO1xuXHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0RGVhY3RpdmF0ZSBzaWxlbmNlLlxuXHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuT2xpdmFudC5wcm90b3R5cGUuc2hvdXQgPSBmdW5jdGlvbiBzaG91dCggKXtcblx0dGhpcy5zaWxlbnQgPSBmYWxzZTtcblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qO1xuXHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0TG9nIHRoZSBkYXRhLlxuXHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuT2xpdmFudC5wcm90b3R5cGUucHJvbXB0ID0gZnVuY3Rpb24gcHJvbXB0KCApe1xuXHR0aGlzLnJlbWluZC5hcHBseSggdGhpcywgcmF6ZSggYXJndW1lbnRzICkgKTtcblxuXHRzbmFwZC5iaW5kKCB0aGlzIClcblx0XHQoIGZ1bmN0aW9uIGRlbGF5KCApe1xuXHRcdFx0aWYoIHRoaXMuZGVwdGggPT09IDIgKXtcblx0XHRcdFx0dGhpcy5sb2coIHRoaXMuZ2V0TWVzc2FnZSggKSApO1xuXG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggZG91YnQoIHRoaXMuc3RhY2ssIEFSUkFZICkgJiYgZmlsbGVkKCB0aGlzLnN0YWNrICkgKXtcblx0XHRcdFx0dGhpcy5sb2coIHRoaXMuZ2V0TWVzc2FnZSggKSApO1xuXG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0dGhpcy5nZXRUcmFjZSggKCBlcnJvciwgc3RhY2sgKSA9PiB7XG5cdFx0XHRcdFx0aWYoIGNsYXpvZiggZXJyb3IsIEVycm9yICkgKXtcblx0XHRcdFx0XHRcdHRoaXMucmVtaW5kKCBgZXJyb3IgZ2V0dGluZyBzdGFjayB0cmFjZSwgJHsgZXJyb3IgfWAgKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiggdHJ1dSggc3RhY2sgKSApe1xuXHRcdFx0XHRcdFx0dGhpcy5zdGFjayA9IHN0YWNrO1xuXG5cdFx0XHRcdFx0XHR0aGlzLmxvZyggdGhpcy5nZXRNZXNzYWdlKCApICk7XG5cblx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdHRoaXMubG9nKCB0aGlzLmdldE1lc3NhZ2UoICkgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFNldCB0aGUgcmVkaXJlY3Rpb24gY29uZmlndXJhdGlvbi5cblxuXHRcdFRoaXMgd2lsbCB0cmlnZ2VyIHJlZGlyZWN0IHJlc3BvbnNlIHdoZW4gc2VuZCBpcyBjYWxsZWQuXG5cblx0XHREZWZhdWx0IG9mIERFRkFVTFRfUkVESVJFQ1RfUEFUSCB3aWxsIGJlIHVzZWQgaWYgcGF0aCBpcyBub3QgZ2l2ZW4uXG5cdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5PbGl2YW50LnByb3RvdHlwZS5yZWRpcmVjdCA9IGZ1bmN0aW9uIHJlZGlyZWN0KCBwYXRoICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwicGF0aDpyZXF1aXJlZFwiOiBcInN0cmluZ1wiXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHR0aGlzLnN0YXRlID0gUkVESVJFQ1Q7XG5cdHRoaXMucGF0aCA9IHBhdGg7XG5cblx0aWYoICF0aGlzLnBhdGggJiYgcHJvdHlwZSggREVGQVVMVF9SRURJUkVDVF9QQVRILCBTVFJJTkcgKSApe1xuXHRcdHRoaXMucGF0aCA9IERFRkFVTFRfUkVESVJFQ1RfUEFUSDtcblxuXHR9ZWxzZXtcblx0XHR0aGlzLnJlc2V0KCBJc3N1ZSwgdHJ1ZSApXG5cdFx0XHQuc2lsZW5jZSggKVxuXHRcdFx0LnByb21wdCggXCJlbXB0eSBwYXRoIHRvIGJlIHJlZGlyZWN0ZWRcIiApO1xuXHR9XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG5PbGl2YW50LnByb3RvdHlwZS5mbHVzaFN0YXRlID0gZnVuY3Rpb24gZmx1c2hTdGF0ZSggKXtcblx0dGhpcy5zdGF0ZSA9IFwiXCI7XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFBhc3MgdGhlIGluc3RhbmNlIHRvIHRoZSBjYWxsYmFjayBmaXJzdCBwYXJhbWV0ZXIuXG5cblx0XHRUaGlzIGZvbGxvd3MgdGhlIHN0YW5kYXJkIGVycm9yLXJlc3VsdC1vcHRpb24gY29udmVudGlvbi5cblxuXHRcdEhhcyBzcGVjaWFsIHN1cHBvcnQgZm9yIGdsdWNvc2UgY29hdGVkIG9wdGlvbi5cblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLnBhc3MgPSBmdW5jdGlvbiBwYXNzKCBjYWxsYmFjaywgcmVzdWx0LCBvcHRpb24gKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJjYWxsYmFjazpyZXF1aXJlZFwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCAhcHJvdHlwZSggY2FsbGJhY2ssIEZVTkNUSU9OICkgKXtcblx0XHR0aGlzLnJlc2V0KCBCdWcsIHRydWUgKVxuXHRcdFx0LnByb21wdCggXCJpbnZhbGlkIGNhbGxiYWNrXCIgKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0aWYoIHRoaXMuY29udGV4dCApe1xuXHRcdGNhbGxiYWNrID0gY2FsbGVkLmJpbmQoIHRoaXMuY29udGV4dCApKCBjYWxsYmFjayApO1xuXG5cdH1lbHNle1xuXHRcdGNhbGxiYWNrID0gY2FsbGVkKCBjYWxsYmFjayApO1xuXHR9XG5cblx0aWYoIHRydXUoIG9wdGlvbiApICYmIHRydXUoIG9wdGlvbi5zZWxmICkgJiYgb3B0aW9uLkNPQVRFRCA9PT0gQ09BVEVEICl7XG5cdFx0dGhpcy5zZXQoIENPTlRFWFQsIG9wdGlvbi5zZWxmICk7XG5cdH1cblxuXHRjYWxsYmFjayggdGhpcywgcmVzdWx0LCBvcHRpb24gKTtcblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbmhhcmRlbiggXCJjcmVhdGVcIiwgZnVuY3Rpb24gY3JlYXRlKCBuYW1lLCBvcHRpb24gKXtcblx0bGV0IENsb25lID0gZGlhdG9tKCBuYW1lICk7XG5cblx0aGVyZWRpdG8oIENsb25lLCBPbGl2YW50ICk7XG5cblx0Q2xvbmUucHJvdG90eXBlLm5hbWUgPSBvcHRpb24ubmFtZTtcblx0Q2xvbmUucHJvdG90eXBlLnN0YXR1cyA9IG9wdGlvbi5zdGF0dXM7XG5cdENsb25lLnByb3RvdHlwZS5jb2RlID0gb3B0aW9uLmNvZGU7XG5cdENsb25lLnByb3RvdHlwZS5zaWxlbnQgPSBvcHRpb24uc2lsZW50O1xuXHRDbG9uZS5wcm90b3R5cGUuZGVwdGggPSBvcHRpb24uZGVwdGg7XG5cdENsb25lLnByb3RvdHlwZS5jb2xvciA9IG9wdGlvbi5jb2xvcjtcblx0Q2xvbmUucHJvdG90eXBlLmluc3BlY3QgPSBvcHRpb24uaW5zcGVjdDtcblx0Q2xvbmUucHJvdG90eXBlLmluaXRpYWxpemUgPSBvcHRpb24uaW5pdGlhbGl6ZSB8fFxuXHRcdGZ1bmN0aW9uIGluaXRpYWxpemUoICl7XG5cdFx0XHR0aGlzLm5hbWUgPSBvcHRpb24ubmFtZTtcblxuXHRcdFx0dGhpcy5zdGF0dXMgPSBvcHRpb24uc3RhdHVzO1xuXG5cdFx0XHR0aGlzLmNvZGUgPSBvcHRpb24uY29kZTtcblxuXHRcdFx0dGhpcy5zaWxlbnQgPSBvcHRpb24uc2lsZW50O1xuXG5cdFx0XHR0aGlzLmRlcHRoID0gb3B0aW9uLmRlcHRoO1xuXHRcdH07XG5cblx0c3ltYmlvdGUoIENsb25lICk7XG5cblx0aGFyZGVuKCBuYW1lLCBDbG9uZSApO1xufSwgT2xpdmFudCApO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9saXZhbnQ7XG4iXX0=
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9saXZhbnQuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhcmlkIiwicmVxdWlyZSIsImFzZWEiLCJidWRnZSIsImNhbGxlZCIsImNsYXpvZiIsImRpYXRvbSIsImRvdWJ0IiwiRXRoZXJuaXR5IiwiZmFsemUiLCJmYWx6eSIsImZpbGxlZCIsImdsdWNvc2UiLCJoYXJkZW4iLCJoZXJlZGl0byIsImtlaW4iLCJtZWVrIiwib3V0cmUiLCJwbG91Z2giLCJwcm90eXBlIiwicmF6ZSIsInNuYXBkIiwic3ltYmlvdGUiLCJ0cnVseSIsInRydXUiLCJVMjAwYiIsInRyYWNlIiwid2luZG93IiwiREVGQVVMVF9SRURJUkVDVF9QQVRIIiwiT2xpdmFudCIsInByb3RvdHlwZSIsImluaXRpYWxpemUiLCJvcHRpb24iLCJhcmd1bWVudHMiLCJPQkpFQ1QiLCJBUkdVTUVOVFMiLCJFcnJvciIsIkNPQVRFRCIsImxvYWQiLCJnZXRUcmFjZSIsImxldCIsInBhcmFtZXRlciIsImxlbmd0aCIsImVycm9yIiwicmVtaW5kIiwiYXBwbHkiLCJtZXNzYWdlIiwiY29uY2F0IiwiU1RSSU5HIiwiY29uc3RydWN0b3IiLCJGVU5DVElPTiIsIm5hbWUiLCJiaW5kIiwiRUNITyIsInN0YXR1cyIsImNvZGUiLCJFQ0hPX0NPREUiLCJsb2ciLCJjbGllbnQiLCJjb25zb2xlIiwiZGVidWciLCJjb250ZXh0Iiwic2VsZiIsInNpbGVudCIsImRlcHRoIiwic2VydmVyIiwiY29sb3IiLCJjaGFsayIsIndoaXRlIiwic3RhdGUiLCJzdGFjayIsImluc3BlY3QiLCJyZWRzZWEiLCJJc3N1ZSIsImJsYWNrc2VhIiwiRmF0YWwiLCJyZXNldCIsInJlbmV3IiwibG9nRW5naW5lIiwiQk9PTEVBTiIsImRhdGEiLCJzaWxlbmNlIiwicHJvbXB0IiwidG9TdHJpbmciLCJqb2luIiwidmFsdWVPZiIsImdldFRpbWVzdGFtcCIsInRpbWVzdGFtcCIsInByaW50VGltZSIsImRpbSIsImNvbG9yTWVzc2FnZSIsInJlc29sdmVNZXNzYWdlIiwiZmlsdGVyIiwicmVzb2x2ZVRyYWNlIiwiQVJSQVkiLCJtYXAiLCJmcmFtZSIsInJlZCIsImdldE1lc3NhZ2UiLCJjYWxsYmFjayIsImdldCIsInRoZW4iLCJmcmFtZUxpc3QiLCJzZXQiLCJwcm9wZXJ0eSIsInZhbHVlIiwiTE9HIiwiU0lMRU5UIiwiQ09OVEVYVCIsInNlbmQiLCJyYXciLCJwcm9jZWR1cmUiLCJSRURJUkVDVCIsInBhdGgiLCJodHRwIiwiU2VydmVyUmVzcG9uc2UiLCJzZWd3YXkiLCJmbHVzaFN0YXRlIiwicmVwb3J0IiwiZGVsYXkiLCJwcm9jZXNzIiwiZW1pdCIsImV2ZW50IiwiRXZlbnQiLCJkb2N1bWVudCIsImRpc3BhdGNoRXZlbnQiLCJjcnVzaCIsInNwYWNlIiwidXRpbCIsInJlcGxhY2UiLCJzdWJzdHJpbmciLCJOVU1CRVIiLCJwYXJzZSIsIm9uRWFjaFBhcmFtZXRlciIsIkFTX0FSUkFZIiwicmV2ZXJzZSIsInNob3V0IiwicmVkaXJlY3QiLCJwYXNzIiwicmVzdWx0IiwiQnVnIiwiY3JlYXRlIiwiQ2xvbmUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0ZaLE1BQU1BLEtBQUssRUFBRUMsT0FBTyxFQUFFLE9BQU8sQ0FBQztBQUM5QixNQUFNQyxLQUFLLEVBQUVELE9BQU8sRUFBRSxPQUFPLENBQUM7QUFDOUIsTUFBTUUsTUFBTSxFQUFFRixPQUFPLEVBQUUsUUFBUSxDQUFDO0FBQ2hDLE1BQU1HLE9BQU8sRUFBRUgsT0FBTyxFQUFFLFNBQVMsQ0FBQztBQUNsQyxNQUFNSSxPQUFPLEVBQUVKLE9BQU8sRUFBRSxTQUFTLENBQUM7QUFDbEMsTUFBTUssT0FBTyxFQUFFTCxPQUFPLEVBQUUsU0FBUyxDQUFDO0FBQ2xDLE1BQU1NLE1BQU0sRUFB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QUksQ0FBQ0MsS0FBSyxFQUFFdkIsTUFBTSxDQUFDdUIsSUFBSTs7R0FFdkIsSUFBSSxDQUFDUSxPQUFPLEVBQUUvQixNQUFNLENBQUMrQixNQUFNOztHQUUzQixJQUFJLENBQUNDLE1BQU0sRUFBRWhDLE1BQU0sQ0FBQ2dDLEtBQUs7RUFDMUIsQ0FBQzs7Q0FFRjFDLFFBQVEsRUFBRXdILE1BQU0sQ0FBQzs7Q0FFakJqSSxNQUFNLEVBQUVzQyxJQUFJLEVBQUUyRixNQUFNLENBQUM7QUFDdEIsQ0FBQyxFQUFFakgsUUFBUSxDQUFDOztBQUVaa0gsTUFBTSxDQUFDQyxRQUFRLEVBQUVuSCxPQUFPIiwiZmlsZSI6Im9saXZhbnQuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwib2xpdmFudFwiLFxuXHRcdFx0XCJwYXRoXCI6IFwib2xpdmFudC9vbGl2YW50LmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJvbGl2YW50LmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcIm9saXZhbnRcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9vbGl2YW50LmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwib2xpdmFudC10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlLFxuXHRcdFx0XCJjbGFzc1wiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdEVjaG8gdGhlIGRlc3RydWN0aW9uIGNhdXNlZCBieSB5b3VyIGNvZGUuXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFyaWRcIjogXCJhcmlkXCIsXG5cdFx0XHRcImFzZWFcIjogXCJhc2VhXCIsXG5cdFx0XHRcImJ1ZGdlXCI6IFwiYnVkZ2VcIixcblx0XHRcdFwiYmxhY2tzZWFcIjogXCJibGFja3NlYVwiLFxuXHRcdFx0XCJjYWxsZWRcIjogXCJjYWxsZWRcIixcblx0XHRcdFwiY2hhbGtcIjogXCJjaGFsa1wiLFxuXHRcdFx0XCJjbGF6b2ZcIjogXCJjbGF6b2ZcIixcblx0XHRcdFwiZGV4aXN0XCI6IFwiZGV4aXN0XCIsXG5cdFx0XHRcImRpYXRvbVwiOiBcImRpYXRvbVwiLFxuXHRcdFx0XCJFdGhlcm5pdHlcIjogXCJldGhlcm5pdHlcIixcblx0XHRcdFwiRXZlbnRFbWl0dGVyXCI6IFwiZXZlbnRzXCIsXG5cdFx0XHRcImZhbHplXCI6IFwiZmFsemVcIixcblx0XHRcdFwiZmFsenlcIjogXCJmYWx6eVwiLFxuXHRcdFx0XCJnbHVjb3NlXCI6IFwiZ2x1Y29zZVwiLFxuXHRcdFx0XCJoYXJkZW5cIjogXCJoYXJkZW5cIixcblx0XHRcdFwiaGVyZWRpdG9cIjogXCJoZXJlZGl0b1wiLFxuXHRcdFx0XCJrZWluXCI6IFwia2VpblwiLFxuXHRcdFx0XCJodHRwXCI6IFwiaHR0cFwiLFxuXHRcdFx0XCJtZWVrXCI6IFwibWVla1wiXG5cdFx0XHRcIm91dHJlXCI6IFwib3V0cmVcIixcblx0XHRcdFwicGxvdWdoXCI6IFwicGxvdWdoXCIsXG5cdFx0XHRcInByb3R5cGVcIjogXCJwcm90eXBlXCIsXG5cdFx0XHRcInJhemVcIjogXCJyYXplXCIsXG5cdFx0XHRcInJlZHNlYVwiOiBcInJlZHNlYVwiLFxuXHRcdFx0XCJzbmFwZFwiOiBcInNuYXBkXCIsXG5cdFx0XHRcInNlZ3dheVwiOiBcInNlZ3dheVwiLFxuXHRcdFx0XCJzeW1iaW90ZVwiOiBcInN5bWJpb3RlXCIsXG5cdFx0XHRcInRyYWNlXCI6IFsgXCJzdGFja3RyYWNlLWpzXCIsIFwic3RhY2stdHJhY2VcIiBdLFxuXHRcdFx0XCJ0cnVseVwiOiBcInRydWx5XCIsXG5cdFx0XHRcInRydXVcIjogXCJ0cnV1XCIsXG5cdFx0XHRcIlUyMDBiXCI6IFwidTIwMGJcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhcmlkID0gcmVxdWlyZSggXCJhcmlkXCIgKTtcbmNvbnN0IGFzZWEgPSByZXF1aXJlKCBcImFzZWFcIiApO1xuY29uc3QgYnVkZ2UgPSByZXF1aXJlKCBcImJ1ZGdlXCIgKTtcbmNvbnN0IGNhbGxlZCA9IHJlcXVpcmUoIFwiY2FsbGVkXCIgKTtcbmNvbnN0IGNsYXpvZiA9IHJlcXVpcmUoIFwiY2xhem9mXCIgKTtcbmNvbnN0IGRpYXRvbSA9IHJlcXVpcmUoIFwiZGlhdG9tXCIgKTtcbmNvbnN0IGRvdWJ0ID0gcmVxdWlyZSggXCJkb3VidFwiICk7XG5jb25zdCBFdGhlcm5pdHkgPSByZXF1aXJlKCBcImV0aGVybml0eVwiICk7XG5jb25zdCBmYWx6ZSA9IHJlcXVpcmUoIFwiZmFsemVcIiApO1xuY29uc3QgZmFsenkgPSByZXF1aXJlKCBcImZhbHp5XCIgKTtcbmNvbnN0IGZpbGxlZCA9IHJlcXVpcmUoIFwiZmlsbGVkXCIgKTtcbmNvbnN0IGdsdWNvc2UgPSByZXF1aXJlKCBcImdsdWNvc2VcIiApO1xuY29uc3QgaGFyZGVuID0gcmVxdWlyZSggXCJoYXJkZW5cIiApO1xuY29uc3QgaGVyZWRpdG8gPSByZXF1aXJlKCBcImhlcmVkaXRvXCIgKTtcbmNvbnN0IGtlaW4gPSByZXF1aXJlKCBcImtlaW5cIiApO1xuY29uc3QgbWVlayA9IHJlcXVpcmUoIFwibWVla1wiICk7XG5jb25zdCBvdXRyZSA9IHJlcXVpcmUoIFwib3V0cmVcIiApO1xuY29uc3QgcGxvdWdoID0gcmVxdWlyZSggXCJwbG91Z2hcIiApO1xuY29uc3QgcHJvdHlwZSA9IHJlcXVpcmUoIFwicHJvdHlwZVwiICk7XG5jb25zdCByYXplID0gcmVxdWlyZSggXCJyYXplXCIgKTtcbmNvbnN0IHNuYXBkID0gcmVxdWlyZSggXCJzbmFwZFwiICk7XG5jb25zdCBzeW1iaW90ZSA9IHJlcXVpcmUoIFwic3ltYmlvdGVcIiApO1xuY29uc3QgdHJ1bHkgPSByZXF1aXJlKCBcInRydWx5XCIgKTtcbmNvbnN0IHRydXUgPSByZXF1aXJlKCBcInRydXVcIiApO1xuY29uc3QgVTIwMGIgPSByZXF1aXJlKCBcInUyMDBiXCIgKTtcblxuLy86IEBjbGllbnQ6XG5jb25zdCB0cmFjZSA9IHJlcXVpcmUoIFwic3RhY2t0cmFjZS1qc1wiICk7XG5oYXJkZW4oIFwiREVGQVVMVF9SRURJUkVDVF9QQVRIXCIsIHdpbmRvdy5ERUZBVUxUX1JFRElSRUNUX1BBVEggfHwgXCIvdmlldy9ub3RpZnlcIiApO1xuLy86IEBlbmQtY2xpZW50XG5cblxuXG5jb25zdCBPbGl2YW50ID0gZGlhdG9tKCBcIk9saXZhbnRcIiApO1xuXG5oYXJkZW4oIFwiRUNIT1wiLCBcImVjaG9cIiApO1xuaGFyZGVuKCBcIkVDSE9fQ09ERVwiLCAyMDAgKTtcblxuaGFyZGVuKCBcIlJFRElSRUNUXCIsIFwicmVkaXJlY3RcIiApO1xuaGFyZGVuKCBcIkNPTlRFWFRcIiwgXCJjb250ZXh0XCIgKTtcbmhhcmRlbiggXCJMT0dcIiwgXCJsb2dcIiApO1xuaGFyZGVuKCBcIlNJTEVOVFwiLCBcInNpbGVudFwiICk7XG5cbi8qO1xuXHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0T3B0aW9uIHNob3VsZCBub3QgYmUgZ2x1Y29zZSBjb2F0ZWQuXG5cdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5PbGl2YW50LnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gaW5pdGlhbGl6ZSggb3B0aW9uICl7XG5cdGlmKCBwcm90eXBlKCBhcmd1bWVudHNbIDAgXSwgT0JKRUNUICkgJiZcblx0XHQhZG91YnQoIGFyZ3VtZW50c1sgMCBdLCBBUkdVTUVOVFMgKSAmJlxuXHRcdCEoIGNsYXpvZiggYXJndW1lbnRzWyAwIF0sIEVycm9yICkgKSAmJlxuXHRcdG9wdGlvbi5DT0FURUQgIT09IENPQVRFRCApXG5cdHtcblx0XHR0aGlzLmxvYWQoIG9wdGlvbiApO1xuXG5cdH1lbHNle1xuXHRcdHRoaXMubG9hZCggKTtcblx0fVxuXG5cdHRoaXMuZ2V0VHJhY2UoICk7XG5cblx0bGV0IHBhcmFtZXRlciA9IGFyZ3VtZW50c1sgMCBdO1xuXG5cdGlmKCBhcmd1bWVudHMubGVuZ3RoID09IDAgKXtcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9ZWxzZSBpZiggY2xhem9mKCBwYXJhbWV0ZXIsIEVycm9yICkgKXtcblx0XHRsZXQgZXJyb3IgPSBwYXJhbWV0ZXI7XG5cblx0XHR0aGlzLnJlbWluZC5hcHBseSggdGhpcywgWyBlcnJvci5tZXNzYWdlLCBlcnJvciBdLmNvbmNhdCggYnVkZ2UoIGFyZ3VtZW50cyApICkgKTtcblxuXHR9ZWxzZSBpZiggY2xhem9mKCBwYXJhbWV0ZXIsIE9saXZhbnQgKSApe1xuXHRcdHRoaXMubG9hZCggcGFyYW1ldGVyICk7XG5cblx0fWVsc2UgaWYoIGRvdWJ0KCBwYXJhbWV0ZXIsIEFSR1VNRU5UUyApICl7XG5cdFx0dGhpcy5yZW1pbmQuYXBwbHkoIHRoaXMsIHBsb3VnaCggcGFyYW1ldGVyICkgKTtcblxuXHR9ZWxzZSBpZiggcHJvdHlwZSggcGFyYW1ldGVyLCBTVFJJTkcgKSApe1xuXHRcdHRoaXMucmVtaW5kLmFwcGx5KCB0aGlzLCByYXplKCBhcmd1bWVudHMgKSApO1xuXG5cdH1lbHNlIGlmKCBwcm90eXBlKCBwYXJhbWV0ZXIsIE9CSkVDVCApICYmXG5cdFx0cGFyYW1ldGVyLmNvbnN0cnVjdG9yICYmXG5cdFx0cHJvdHlwZSggcGFyYW1ldGVyLmNvbnN0cnVjdG9yLCBGVU5DVElPTiApICYmXG5cdFx0cGFyYW1ldGVyLmNvbnN0cnVjdG9yLm5hbWUgIT0gXCJGdW5jdGlvblwiICYmXG5cdFx0Y2xhem9mKCBwYXJhbWV0ZXIsIHBhcmFtZXRlci5jb25zdHJ1Y3RvciApIClcblx0e1xuXHRcdHRoaXMubG9hZCggcGFyYW1ldGVyICk7XG5cblx0XHR0aGlzLnJlbWluZC5hcHBseSggdGhpcywgcmF6ZSggYXJndW1lbnRzICkgKTtcblxuXHR9ZWxzZSBpZiggcHJvdHlwZSggcGFyYW1ldGVyLCBPQkpFQ1QgKSApe1xuXHRcdHRoaXMucmVtaW5kLmFwcGx5KCB0aGlzLCByYXplKCBhcmd1bWVudHMgKSApO1xuXHR9XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG5PbGl2YW50LnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24gbG9hZCggb3B0aW9uICl7XG5cdG9wdGlvbiA9IGdsdWNvc2UuYmluZCggdGhpcyApKCBvcHRpb24gKTtcblxuXHR0aGlzLm5hbWUgPSBvcHRpb24ubmFtZSB8fCB0aGlzLm5hbWUgfHwgRUNIT1xuXG5cdHRoaXMuc3RhdHVzID0gb3B0aW9uLnN0YXR1cyB8fCB0aGlzLnN0YXR1cyB8fCBFQ0hPO1xuXG5cdHRoaXMuY29kZSA9IG9wdGlvbi5jb2RlIHx8IHRoaXMuY29kZSB8fCBFQ0hPX0NPREU7XG5cblx0dGhpcy5sb2cgPSBvcHRpb24ubG9nIHx8IHRoaXMubG9nIHx8ICggKCBhc2VhLmNsaWVudCApPyBjb25zb2xlLmRlYnVnIDogY29uc29sZS5sb2cgKTtcblxuXHRpZiggZmFsemUoIHRoaXMuY29udGV4dCApICYmIG9wdGlvbi5zZWxmICl7XG5cdFx0dGhpcy5jb250ZXh0ID0gb3B0aW9uLnNlbGY7XG5cdH1cblxuXHR0aGlzLnNpbGVudCA9IGtlaW4oIG9wdGlvbiwgXCJzaWxlbnRcIiApPyBvcHRpb24uc2lsZW50IDpcblx0XHRrZWluKCB0aGlzLCBcInNpbGVudFwiICk/IHRoaXMuc2lsZW50IDogdHJ1ZTtcblxuXHQvLzogRGVwdGggZGljdGF0ZXMgcmVmaW5lZCBzZXR0aW5ncyBvZiB0aGlzIHByb2NlZHVyZS5cblx0dGhpcy5kZXB0aCA9IGtlaW4oIG9wdGlvbiwgXCJkZXB0aFwiICk/IG9wdGlvbi5kZXB0aCA6XG5cdFx0a2VpbiggdGhpcywgXCJkZXB0aFwiICk/IHRoaXMuZGVwdGggOiArdGhpcy5zaWxlbnQ7XG5cblx0Ly86IERlcHRoIGlzIG9ubHkgZnJvbSAxLTAgb3IgMS0yMzQ1LTY3ODktMC5cblx0Ly86IERlcHRoIDIgaXMgZGVlcCBzaWxlbnQgZGVwdGguXG5cdHRoaXMuZGVwdGggPSB0aGlzLmRlcHRoICUgMTA7XG5cblx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0dGhpcy5jb2xvciA9IG9wdGlvbi5jb2xvciB8fCB0aGlzLmNvbG9yIHx8IGNoYWxrLndoaXRlO1xuXHR9XG5cblx0dGhpcy5zdGF0ZSA9IFwiXCI7XG5cblx0dGhpcy5zdGFjayA9IG9wdGlvbi5zdGFjayB8fCB0aGlzLnN0YWNrIHx8IFsgXTtcblxuXHR0aGlzLm1lc3NhZ2UgPSBvcHRpb24ubWVzc2FnZSB8fCB0aGlzLm1lc3NhZ2UgfHwgXCJcIjtcblxuXHR0aGlzLmluc3BlY3QgPSBvcHRpb24uaW5zcGVjdCB8fCB0aGlzLmluc3BlY3QgfHwgeyBcImRlcHRoXCI6IDEsIFwibGVuZ3RoXCI6IDIwMCB9O1xuXG5cdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdHJlZHNlYSggSXNzdWUgKTtcblxuXHRcdGJsYWNrc2VhKCBGYXRhbCApO1xuXHR9XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdE1vZGlmaWVzIHRoZSBsb2cgZW5naW5lIHdoaWxlIG1haW50YWluaW5nIGVudmlyb25tZW50IHByb3BlcnRpZXMuXG5cdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5PbGl2YW50LnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uIHJlc2V0KCBvcHRpb24sIHJlbmV3ICl7XG5cdGlmKCBwcm90eXBlKCBvcHRpb24sIEZVTkNUSU9OICkgJiYgY2xhem9mKCBvcHRpb24sIE9saXZhbnQgKSApe1xuXHRcdGxldCBsb2dFbmdpbmUgPSBvcHRpb247XG5cblx0XHRpZiggcHJvdHlwZSggcmVuZXcsIEJPT0xFQU4gKSAmJiByZW5ldyApe1xuXHRcdFx0bGV0IGRhdGEgPSB7XG5cdFx0XHRcdFwibWVzc2FnZVwiOiB0aGlzLm1lc3NhZ2UsXG5cdFx0XHRcdFwic3RhY2tcIjogdGhpcy5zdGFja1xuXHRcdFx0fTtcblxuXHRcdFx0cmV0dXJuIGxvZ0VuZ2luZSggZGF0YSApO1xuXG5cdFx0fWVsc2V7XG5cdFx0XHR0aGlzLmxvYWQoIGxvZ0VuZ2luZS5wcm90b3R5cGUgKTtcblx0XHR9XG5cblx0fWVsc2UgaWYoIHByb3R5cGUoIG9wdGlvbiwgT0JKRUNUICkgKXtcblx0XHR0aGlzLmxvYWQoIG9wdGlvbiApO1xuXG5cdH1lbHNle1xuXHRcdHRoaXMucmVzZXQoIElzc3VlLCB0cnVlIClcblx0XHRcdC5zaWxlbmNlKCApXG5cdFx0XHQucHJvbXB0KCBcImNhbm5vdCByZXNldCB0byBnaXZlbiBvcHRpb25cIiwgb3B0aW9uICk7XG5cdH1cblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbk9saXZhbnQucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoICl7XG5cdHJldHVybiBVMjAwYiggb3V0cmUoIFsgdGhpcy5uYW1lLCB0aGlzLnN0YXR1cywgdGhpcy5tZXNzYWdlIF0gKSApLmpvaW4oIFwiLCBcIiApO1xufTtcblxuT2xpdmFudC5wcm90b3R5cGUudmFsdWVPZiA9IGZ1bmN0aW9uIHZhbHVlT2YoICl7XG5cdHJldHVybiBVMjAwYiggb3V0cmUoIFsgdGhpcy5uYW1lLCB0aGlzLnN0YXR1cywgdGhpcy5tZXNzYWdlIF0gKSApLmpvaW4oIFwiLCBcIiApO1xufTtcblxuT2xpdmFudC5wcm90b3R5cGUuZ2V0VGltZXN0YW1wID0gZnVuY3Rpb24gZ2V0VGltZXN0YW1wKCApe1xuXHRsZXQgdGltZXN0YW1wID0gRXRoZXJuaXR5KCApLnByaW50VGltZSggdHJ1ZSApO1xuXG5cdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdHJldHVybiBjaGFsay5kaW0oIHRpbWVzdGFtcCApO1xuXHR9XG5cblx0cmV0dXJuIHRpbWVzdGFtcDtcbn07XG5cbk9saXZhbnQucHJvdG90eXBlLmNvbG9yTWVzc2FnZSA9IGZ1bmN0aW9uIGNvbG9yTWVzc2FnZSggY29sb3IsIG1lc3NhZ2UgKXtcblx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0aWYoIHByb3R5cGUoIGNvbG9yLCBGVU5DVElPTiApICl7XG5cdFx0XHRyZXR1cm4gY29sb3IoIG1lc3NhZ2UgKTtcblxuXHRcdH1lbHNlIGlmKCBwcm90eXBlKCBjb2xvciwgU1RSSU5HICkgJiYgdHJ1bHkoIGNvbG9yICkgKXtcblx0XHRcdGlmKCBrZWluKCBjaGFsaywgY29sb3IgKSAmJiBwcm90eXBlKCBjaGFsa1sgY29sb3IgXSwgRlVOQ1RJT04gKSApe1xuXHRcdFx0XHRyZXR1cm4gY2hhbGtbIGNvbG9yIF0oIG1lc3NhZ2UgKTtcblxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHRoaXMucmVtaW5kKCBgaW52YWxpZCBtZXNzYWdlIGNvbG9yLCAkeyBjb2xvciB9YCApO1xuXG5cdFx0XHRcdHJldHVybiBjaGFsay53aGl0ZSggbWVzc2FnZSApO1xuXHRcdFx0fVxuXG5cdFx0fWVsc2V7XG5cdFx0XHRyZXR1cm4gY2hhbGsud2hpdGUoIG1lc3NhZ2UgKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gbWVzc2FnZTtcbn07XG5cbi8qO1xuXHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0VGhlIG1lc3NhZ2UgaXMgZGl2aWRlZCBpbnRvIHRocmVlIHBhcnRzLFxuXHRcdDEuIG5hbWVzcGFjZSxcblx0XHQyLiBzdGF0dXMsXG5cdFx0My4gYWN0dWFsIG1lc3NhZ2Vcblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLnJlc29sdmVNZXNzYWdlID0gZnVuY3Rpb24gcmVzb2x2ZU1lc3NhZ2UoICl7XG5cdGxldCBtZXNzYWdlID0gVTIwMGIoIG91dHJlKCBbIHRoaXMubmFtZSwgdGhpcy5zdGF0dXMsIHRoaXMubWVzc2FnZSBdIClcblx0XHQuZmlsdGVyKCB0cnVseSApICkuam9pbiggXCIsIFwiICk7XG5cblx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0cmV0dXJuIHRoaXMuY29sb3JNZXNzYWdlKCB0aGlzLmNvbG9yLCBtZXNzYWdlICk7XG5cdH1cblxuXHRyZXR1cm4gbWVzc2FnZTtcbn07XG5cbk9saXZhbnQucHJvdG90eXBlLnJlc29sdmVUcmFjZSA9IGZ1bmN0aW9uIHJlc29sdmVUcmFjZSggKXtcblx0bGV0IHN0YWNrID0gXCJzdGFjayB0cmFjZSBub3QgcmVhZHlcIjtcblxuXHRpZiggIXRoaXMuc2lsZW50ICYmIGRvdWJ0KCB0aGlzLnN0YWNrLCBBUlJBWSApICYmIGZpbGxlZCggdGhpcy5zdGFjayApICl7XG5cdFx0c3RhY2sgPSB0aGlzLnN0YWNrO1xuXG5cdFx0c3RhY2sgPSBzdGFjay5tYXAoICggZnJhbWUgKSA9PiB7IHJldHVybiBmcmFtZS50b1N0cmluZyggKTsgfSApO1xuXG5cdFx0c3RhY2sgPSBVMjAwYiggc3RhY2sgKS5qb2luKCBcIlxcblwiICk7XG5cblx0XHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRcdHJldHVybiBjaGFsay5kaW0ucmVkKCBzdGFjayApO1xuXHRcdH1cblxuXHRcdHJldHVybiBzdGFjaztcblx0fVxuXG5cdGlmKCB0aGlzLmRlcHRoIDwgNSAmJlxuXHRcdHRoaXMuc2lsZW50ICYmXG5cdFx0dHJ1dSggdGhpcy5jb250ZXh0ICkgJiZcblx0IFx0cHJvdHlwZSggdGhpcy5jb250ZXh0LmNvbnN0cnVjdG9yLCBGVU5DVElPTiApICYmXG5cdFx0dHJ1bHkoIHRoaXMuY29udGV4dC5jb25zdHJ1Y3Rvci5uYW1lICkgKVxuXHR7XG5cdFx0c3RhY2sgPSBgY2FsbGVkIHdpdGggY29udGV4dCwgJHsgdGhpcy5jb250ZXh0LmNvbnN0cnVjdG9yLm5hbWUgfWA7XG5cblx0XHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRcdHJldHVybiBjaGFsay5kaW0oIHN0YWNrICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHN0YWNrO1xuXHR9XG5cblx0aWYoIHRoaXMuc2lsZW50ICl7XG5cdFx0c3RhY2sgPSBcInN0YWNrIHRyYWNlIGlzIG5vdCBhdmFpbGFibGUgb24gc2lsZW50IG1vZGVcIjtcblxuXHRcdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdFx0cmV0dXJuIGNoYWxrLmRpbSggc3RhY2sgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc3RhY2s7XG5cdH1cblxuXHRpZiggdGhpcy5kZXB0aCA+IDUgKXtcblx0XHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRcdHJldHVybiBjaGFsay5kaW0oIHN0YWNrICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHN0YWNrO1xuXHR9XG59O1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFRoZSBtZXNzYWdlIGNvbnNpc3Qgb2YgdGhyZWUgbGF5ZXIgb2Ygc3RyaW5ncyxcblx0XHRcdDEuIHRpbWVzdGFtcCBpbiB0cnVlIHRpbWUgZm9ybWF0XG5cdFx0XHQyLiBhY3R1YWwgcmVhZGFibGUgbWVzc2FnZVxuXHRcdFx0My4gbWVzc2FnZSB0cmFjZSBvciBtZXNzYWdlIGNvbnRleHRcblxuXHRcdFRoZXNlIGluZm9ybWF0aW9uIHdpbGwgYmUgZGl2aWRlZCB0aHJvdWdoIHplcm8td2lkdGggc3BhY2UgY29udmVudGlvbi5cblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLmdldE1lc3NhZ2UgPSBmdW5jdGlvbiBnZXRNZXNzYWdlKCApe1xuXHRyZXR1cm4gVTIwMGIoIFtcblx0XHR0aGlzLmdldFRpbWVzdGFtcCggKSxcblx0XHR0aGlzLnJlc29sdmVNZXNzYWdlKCApLFxuXHRcdHRoaXMucmVzb2x2ZVRyYWNlKCApXG5cdF0gKS5qb2luKCBcIlxcblwiICk7XG59O1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFRoaXMgc2hvdWxkIGJlIHVzZWQgaW50ZXJuYWxseSBhcyBtdWNoIGFzIHBvc3NpYmxlLlxuXHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuT2xpdmFudC5wcm90b3R5cGUuZ2V0VHJhY2UgPSBmdW5jdGlvbiBnZXRUcmFjZSggY2FsbGJhY2sgKXtcblx0aWYoIHRoaXMuZGVwdGggPT0gMiApe1xuXHRcdHRoaXMucmVtaW5kKCBcInRyYWNpbmcgaXMgZGlzYWJsZWQgZm9yIGRlcHRoIDJcIiApLnByb21wdCggKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Y2FsbGJhY2sgPSBjYWxsZWQuYmluZCggdGhpcyApKCBjYWxsYmFjayApO1xuXG5cdHNuYXBkLmJpbmQoIHRoaXMgKSggY2FsbGJhY2ssIDEwMDAgKTtcblxuXHRpZiggYXNlYS5jbGllbnQgKXtcblx0XHR0cmFjZS5nZXQoIClcblx0XHRcdC50aGVuKCAoIGZyYW1lTGlzdCApID0+IHtcblx0XHRcdFx0dGhpcy5zdGFjayA9IGZyYW1lTGlzdDtcblxuXHRcdFx0XHRjYWxsYmFjayggbnVsbCwgdGhpcy5zdGFjayApO1xuXHRcdFx0fSApXG5cdFx0XHQuY2F0Y2goICggZXJyb3IgKSA9PiB7IGNhbGxiYWNrKCB0aGlzLnJlbWluZCggZXJyb3IgKSApOyB9ICk7XG5cblx0fWVsc2UgaWYoIGFzZWEuc2VydmVyICl7XG5cdFx0dGhpcy5zdGFjayA9IHRyYWNlLmdldCggKTtcblxuXHRcdGNhbGxiYWNrKCBudWxsLCB0aGlzLnN0YWNrICk7XG5cdH1cblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qO1xuXHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0U2V0cyBhIHByb3BlcnR5IG9mIHRoaXMgbG9nIGVuZ2luZS5cblxuXHRcdE5vdCBhbGwgcHJvcGVydHkgY2FuIGJlIHNldCB0byBsaW1pdCB0aGlzIGZ1bmN0aW9uXG5cdFx0XHRmb3Igc2VjdXJpdHkgcHVycG9zZXMuXG5cdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5PbGl2YW50LnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQoIHByb3BlcnR5LCB2YWx1ZSApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcInByb3BlcnR5OnJlcXVpcmVkXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcdFwidmFsdWVcIjogXCIqXCJcblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGxldCBwYXJhbWV0ZXIgPSByYXplKCBhcmd1bWVudHMgKTtcblxuXHRpZiggcGFyYW1ldGVyLmxlbmd0aCA9PSAxICYmIHByb3R5cGUoIHBhcmFtZXRlclsgMCBdLCBPQkpFQ1QgKSApe1xuXHRcdGxldCBvcHRpb24gPSBwYXJhbWV0ZXJbIDAgXTtcblx0XHRmb3IoIGxldCBwcm9wZXJ0eSBpbiBvcHRpb24gKXtcblx0XHRcdHRoaXMuc2V0KCBwcm9wZXJ0eSwgb3B0aW9uWyBwcm9wZXJ0eSBdICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRpZiggIXByb3R5cGUoIHByb3BlcnR5LCBTVFJJTkcgKSApe1xuXHRcdHRoaXMucmVzZXQoIElzc3VlLCB0cnVlIClcblx0XHRcdC5zaWxlbmNlKCApXG5cdFx0XHQucHJvbXB0KCBcImludmFsaWQgcHJvcGVydHlcIiwgcHJvcGVydHkgKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0aWYoIHByb3R5cGUoIHByb3BlcnR5LCBTVFJJTkcgKSAmJlxuXHRcdHByb3BlcnR5ICE9IExPRyAgJiZcblx0XHRwcm9wZXJ0eSAhPSBTSUxFTlQgJiZcblx0XHRwcm9wZXJ0eSAhPSBDT05URVhUIClcblx0e1xuXHRcdHRoaXMucmVzZXQoIElzc3VlLCB0cnVlIClcblx0XHRcdC5zaWxlbmNlKCApXG5cdFx0XHQucHJvbXB0KCBcImludmFsaWQgcHJvcGVydHlcIiwgcHJvcGVydHkgKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0dGhpc1sgcHJvcGVydHkgXSA9IHZhbHVlO1xuXG5cdHJldHVybiB0aGlzO1xufTtcblxuLyo7XG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRTZW5kIGRhdGEgdG8gc2VydmVyIG9yIGNsaWVudC5cblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiBzZW5kKCApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcInJlc3BvbnNlXCI6IFwiaHR0cC5TZXJ2ZXJSZXNwb25zZVwiLFxuXHRcdFx0XHRcInByb2NlZHVyZVwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCB0aGlzLmRlcHRoID09IDIgKXtcblx0XHR0aGlzLnJlbWluZCggXCJzZW5kaW5nIGlzIGRpc2FibGVkIGZvciBkZXB0aCAyXCIgKS5wcm9tcHQoICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGxldCBtZXNzYWdlID0gbWVlayggdGhpcy5zdGF0dXMsIFUyMDBiKCB0aGlzLnRvU3RyaW5nKCApICkucmF3KCApICk7XG5cblx0bGV0IHByb2NlZHVyZSA9IGFyZ3VtZW50c1sgMCBdO1xuXG5cdGlmKCBhc2VhLnNlcnZlciAmJlxuXHRcdHRoaXMuc3RhdGUgPT09IFJFRElSRUNUICYmXG5cdFx0cHJvdHlwZSggdGhpcy5wYXRoLCBTVFJJTkcgKSAmJlxuXHRcdHRydWx5KCB0aGlzLnBhdGggKSAmJlxuXHRcdGNsYXpvZiggcHJvY2VkdXJlLCBodHRwLlNlcnZlclJlc3BvbnNlICkgKVxuXHR7XG5cdFx0c2Vnd2F5KCB7XG5cdFx0XHRcInJlc3BvbnNlXCI6IHByb2NlZHVyZSxcblx0XHRcdFwicGF0aFwiOiB0aGlzLnBhdGgsXG5cdFx0XHRcInN0YXR1c1wiOiB0aGlzLmNvZGUsXG5cdFx0XHRcImRhdGFcIjogbWVzc2FnZSxcblx0XHR9ICk7XG5cblx0XHR0aGlzLmZsdXNoU3RhdGUoICk7XG5cblx0fWVsc2UgaWYoIGFzZWEuc2VydmVyICYmXG5cdFx0ZmFsenkoIHRoaXMuc3RhdGUgKSAmJlxuXHRcdGNsYXpvZiggcHJvY2VkdXJlLCBodHRwLlNlcnZlclJlc3BvbnNlICkgKVxuXHR7XG5cdFx0bWVzc2FnZS5zZW5kKCBwcm9jZWR1cmUsIHRoaXMuY29kZSApO1xuXG5cdH1lbHNlIGlmKCBhc2VhLmNsaWVudCAmJlxuXHRcdHRoaXMuc3RhdGUgPT0gUkVESVJFQ1QgJiZcblx0XHRwcm90eXBlKCB0aGlzLnBhdGgsIFNUUklORyApICYmXG5cdFx0dHJ1bHkoIHRoaXMucGF0aCApIClcblx0e1xuXHRcdHNlZ3dheSgge1xuXHRcdFx0XCJwYXRoXCI6IHRoaXMucGF0aCxcblx0XHRcdFwic3RhdHVzXCI6IHRoaXMuY29kZSxcblx0XHRcdFwiZGF0YVwiOiBtZXNzYWdlLFxuXHRcdH0gKTtcblxuXHRcdHRoaXMuZmx1c2hTdGF0ZSggKTtcblxuXHR9ZWxzZSBpZiggYXNlYS5jbGllbnQgJiZcblx0XHRmYWx6eSggdGhpcy5zdGF0ZSApICYmXG5cdFx0cHJvdHlwZSggcHJvY2VkdXJlLCBGVU5DVElPTiApIClcblx0e1xuXHRcdG1lc3NhZ2Uuc2VuZC5iaW5kKCB0aGlzICkoIHByb2NlZHVyZSApO1xuXG5cdH1lbHNlIGlmKCB0cnVseSggdGhpcy5zdGF0ZSApICl7XG5cdFx0dGhpcy5yZXNldCggSXNzdWUsIHRydWUgKVxuXHRcdFx0LnNpbGVuY2UoIClcblx0XHRcdC5wcm9tcHQoIGBjYW5ub3QgaW52b2tlIHNlbmRpbmcgc3RhdGUsICR7IHRoaXMuc3RhdGUgfSwgcHJvcGVybHlgIClcblx0XHRcdC5zZW5kKCBwcm9jZWR1cmUgKTtcblxuXHRcdHRoaXMuZmx1c2hTdGF0ZSggKTtcblxuXHR9ZWxzZXtcblx0XHR0aGlzLnJlc2V0KCBJc3N1ZSwgdHJ1ZSApXG5cdFx0XHQuc2lsZW5jZSggKVxuXHRcdFx0LnByb21wdCggXCJjYW5ub3Qgc2VuZCBwcm9wZXJseVwiICk7XG5cdH1cblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qO1xuXHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0U3RyZWFtIGRhdGEgdG8gbGlzdGVuZXJzLlxuXHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuT2xpdmFudC5wcm90b3R5cGUucmVwb3J0ID0gZnVuY3Rpb24gcmVwb3J0KCApe1xuXHRpZiggdGhpcy5kZXB0aCA9PSAyICl7XG5cdFx0dGhpcy5yZW1pbmQoIFwicmVwb3J0aW5nIGlzIGRpc2FibGVkIGZvciBkZXB0aCAyXCIgKS5wcm9tcHQoICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNuYXBkLmJpbmQoIHRoaXMgKVxuXHRcdCggZnVuY3Rpb24gZGVsYXkoICl7XG5cdFx0XHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRcdFx0cHJvY2Vzcy5lbWl0KCB0aGlzLm5hbWUsIHRoaXMgKTtcblxuXHRcdFx0fWVsc2UgaWYoIGFzZWEuY2xpZW50ICl7XG5cdFx0XHRcdGxldCBldmVudCA9IG5ldyBFdmVudCggdGhpcy5uYW1lICk7XG5cdFx0XHRcdGV2ZW50LmRhdGEgPSB0aGlzO1xuXG5cdFx0XHRcdGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoIGV2ZW50ICk7XG5cdFx0XHR9XG5cdFx0fSwgMTAwMCApO1xuXG5cdHJldHVybiB0aGlzO1xufTtcblxuLyo7XG5cdEBzdGF0aWMtbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0Q3J1c2ggdGhlIHBhcmFtZXRlciBleHRyYWN0aW5nIHN0cmluZyBpbmZvcm1hdGlvbi5cblxuXHRcdFNwZWNpYWwgc3VwcG9ydCBmb3IgZ2x1Y29zZSBjb2F0ZWQgcGFyYW1ldGVycy5cblx0QGVuZC1zdGF0aWMtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5jb25zdCBjcnVzaCA9IGZ1bmN0aW9uIGNydXNoKCBwYXJhbWV0ZXIsIG9wdGlvbiApe1xuXHRvcHRpb24gPSBvcHRpb24gfHwgdGhpcy5pbnNwZWN0IHx8IHsgfTtcblxuXHRsZXQgZGVwdGggPSBvcHRpb24uZGVwdGggfHwgMTtcblx0bGV0IGxlbmd0aCA9IG9wdGlvbi5sZW5ndGggfHwgMjAwO1xuXHRsZXQgc3BhY2UgPSAvXFxzezIsfS9nO1xuXG5cdGlmKCBhc2VhLnNlcnZlciAmJiBwcm90eXBlKCBwYXJhbWV0ZXIsIE9CSkVDVCApICYmIHBhcmFtZXRlci5DT0FURUQgPT09IENPQVRFRCApe1xuXHRcdGlmKCBwYXJhbWV0ZXIuc2VsZiApe1xuXHRcdFx0dGhpcy5zZXQoIENPTlRFWFQsIHBhcmFtZXRlci5zZWxmICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHV0aWwuaW5zcGVjdCggcGFyYW1ldGVyLCB7IFwiZGVwdGhcIjogZGVwdGggfSApXG5cdFx0XHQucmVwbGFjZSggc3BhY2UsIFwiIFwiIClcblx0XHRcdC5zdWJzdHJpbmcoIDAsIGxlbmd0aCApICsgXCIuLi5cIjtcblxuXHR9ZWxzZSBpZiggcGFyYW1ldGVyICYmIGNsYXpvZiggcGFyYW1ldGVyLCBFcnJvciApICYmIHBhcmFtZXRlci5zdGFjayApe1xuXHRcdHJldHVybiBwYXJhbWV0ZXIuc3RhY2sudG9TdHJpbmcoICk7XG5cblx0fWVsc2UgaWYoIGNsYXpvZiggcGFyYW1ldGVyLCBPbGl2YW50ICkgKXtcblx0XHRyZXR1cm4gcGFyYW1ldGVyLm1lc3NhZ2U7XG5cblx0fWVsc2UgaWYoIHByb3R5cGUoIHBhcmFtZXRlciwgRlVOQ1RJT04gKSApe1xuXHRcdHJldHVybiBwYXJhbWV0ZXIudG9TdHJpbmcoIClcblx0XHRcdC5yZXBsYWNlKCBzcGFjZSwgXCIgXCIgKVxuXHRcdFx0LnN1YnN0cmluZyggMCwgbGVuZ3RoICkgKyBcIi4uLlwiO1xuXG5cdH1lbHNlIGlmKCBwcm90eXBlKCBwYXJhbWV0ZXIsIFNUUklORyApIHx8XG5cdFx0cHJvdHlwZSggcGFyYW1ldGVyLCBOVU1CRVIgKSB8fFxuXHRcdHByb3R5cGUoIHBhcmFtZXRlciwgQk9PTEVBTiApIClcblx0e1xuXHRcdHJldHVybiBwYXJhbWV0ZXIudG9TdHJpbmcoICk7XG5cblx0fWVsc2UgaWYoIGFzZWEuc2VydmVyICl7XG5cdFx0cmV0dXJuIHV0aWwuaW5zcGVjdCggcGFyYW1ldGVyLCB7IFwiZGVwdGhcIjogZGVwdGggfSApXG5cdFx0XHQucmVwbGFjZSggc3BhY2UsIFwiIFwiIClcblx0XHRcdC5zdWJzdHJpbmcoIDAsIGxlbmd0aCApO1xuXG5cdH1lbHNlIGlmKCBhc2VhLmNsaWVudCApe1xuXHRcdHJldHVybiBwYXJhbWV0ZXIudG9TdHJpbmcoICk7XG5cblx0fWVsc2V7XG5cdFx0cmV0dXJuIHBhcmFtZXRlci50b1N0cmluZyggKTtcblx0fVxufTtcblxuLyo7XG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRBcHBlbmQgbWVzc2FnZXMgdG8gdGhlIGN1cnJlbnQgbWVzc2FnZS5cblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLnJlbWluZCA9IGZ1bmN0aW9uIHJlbWluZCggKXtcblx0bGV0IHBhcmFtZXRlciA9IHJhemUoIGFyZ3VtZW50cyApO1xuXG5cdGlmKCBhcmlkKCBwYXJhbWV0ZXIgKSApe1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0bGV0IHBhcnNlID0gY3J1c2guYmluZCggdGhpcyApO1xuXG5cdHRoaXMubWVzc2FnZSA9IFUyMDBiKCBwYXJhbWV0ZXJcblx0XHQubWFwKCBmdW5jdGlvbiBvbkVhY2hQYXJhbWV0ZXIoIHBhcmFtZXRlciApe1xuXHRcdFx0aWYoIGRvdWJ0KCBwYXJhbWV0ZXIsIEFTX0FSUkFZICkgKXtcblx0XHRcdFx0cGFyYW1ldGVyID0gcmF6ZSggcGFyYW1ldGVyIClcblx0XHRcdFx0XHQubWFwKCAoIHBhcmFtZXRlciApID0+IHsgcmV0dXJuIHBhcnNlKCBwYXJhbWV0ZXIgKSB9ICk7XG5cblx0XHRcdFx0cmV0dXJuIFUyMDBiKCBwYXJhbWV0ZXJcblx0XHRcdFx0XHQuZmlsdGVyKCAoIG1lc3NhZ2UgKSA9PiB7IHJldHVybiB0cnVseSggbWVzc2FnZSApOyB9ICkgKVxuXHRcdFx0XHRcdC5qb2luKCBcIiwgXCIgKTtcblxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHJldHVybiBwYXJzZSggcGFyYW1ldGVyICk7XG5cdFx0XHR9XG5cdFx0fSApXG5cdFx0LnJldmVyc2UoIClcblx0XHQuY29uY2F0KCBbIHRoaXMubWVzc2FnZSBdIClcblx0XHQuZmlsdGVyKCAoIG1lc3NhZ2UgKSA9PiB7IHJldHVybiB0cnVseSggbWVzc2FnZSApOyB9IClcblx0XHQucmV2ZXJzZSggKSApXG5cdFx0LmpvaW4oIFwiLCBcIiApO1xuXG5cdHRoaXMucmVwb3J0KCApO1xuXG5cdHJldHVybiB0aGlzO1xufTtcblxuLyo7XG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRTaWxlbmNlIHRoZSBsb2dnaW5nIGNhcGFiaWxpdGllcy5cblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLnNpbGVuY2UgPSBmdW5jdGlvbiBzaWxlbmNlKCApe1xuXHR0aGlzLnNpbGVudCA9IHRydWU7XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdERlYWN0aXZhdGUgc2lsZW5jZS5cblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLnNob3V0ID0gZnVuY3Rpb24gc2hvdXQoICl7XG5cdHRoaXMuc2lsZW50ID0gZmFsc2U7XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKjtcblx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdExvZyB0aGUgZGF0YS5cblx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuKi9cbk9saXZhbnQucHJvdG90eXBlLnByb21wdCA9IGZ1bmN0aW9uIHByb21wdCggKXtcblx0dGhpcy5yZW1pbmQuYXBwbHkoIHRoaXMsIHJhemUoIGFyZ3VtZW50cyApICk7XG5cblx0c25hcGQuYmluZCggdGhpcyApXG5cdFx0KCBmdW5jdGlvbiBkZWxheSggKXtcblx0XHRcdGlmKCB0aGlzLmRlcHRoID09PSAyICl7XG5cdFx0XHRcdHRoaXMubG9nKCB0aGlzLmdldE1lc3NhZ2UoICkgKTtcblxuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblxuXHRcdFx0aWYoIGRvdWJ0KCB0aGlzLnN0YWNrLCBBUlJBWSApICYmIGZpbGxlZCggdGhpcy5zdGFjayApICl7XG5cdFx0XHRcdHRoaXMubG9nKCB0aGlzLmdldE1lc3NhZ2UoICkgKTtcblxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHRoaXMuZ2V0VHJhY2UoICggZXJyb3IsIHN0YWNrICkgPT4ge1xuXHRcdFx0XHRcdGlmKCBjbGF6b2YoIGVycm9yLCBFcnJvciApICl7XG5cdFx0XHRcdFx0XHR0aGlzLnJlbWluZCggYGVycm9yIGdldHRpbmcgc3RhY2sgdHJhY2UsICR7IGVycm9yIH1gICk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYoIHRydXUoIHN0YWNrICkgKXtcblx0XHRcdFx0XHRcdHRoaXMuc3RhY2sgPSBzdGFjaztcblxuXHRcdFx0XHRcdFx0dGhpcy5sb2coIHRoaXMuZ2V0TWVzc2FnZSggKSApO1xuXG5cdFx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0XHR0aGlzLmxvZyggdGhpcy5nZXRNZXNzYWdlKCApICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9ICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdHJldHVybiB0aGlzO1xufTtcblxuLyo7XG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRTZXQgdGhlIHJlZGlyZWN0aW9uIGNvbmZpZ3VyYXRpb24uXG5cblx0XHRUaGlzIHdpbGwgdHJpZ2dlciByZWRpcmVjdCByZXNwb25zZSB3aGVuIHNlbmQgaXMgY2FsbGVkLlxuXG5cdFx0RGVmYXVsdCBvZiBERUZBVUxUX1JFRElSRUNUX1BBVEggd2lsbCBiZSB1c2VkIGlmIHBhdGggaXMgbm90IGdpdmVuLlxuXHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG4qL1xuT2xpdmFudC5wcm90b3R5cGUucmVkaXJlY3QgPSBmdW5jdGlvbiByZWRpcmVjdCggcGF0aCApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcInBhdGg6cmVxdWlyZWRcIjogXCJzdHJpbmdcIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0dGhpcy5zdGF0ZSA9IFJFRElSRUNUO1xuXHR0aGlzLnBhdGggPSBwYXRoO1xuXG5cdGlmKCAhdGhpcy5wYXRoICYmIHByb3R5cGUoIERFRkFVTFRfUkVESVJFQ1RfUEFUSCwgU1RSSU5HICkgKXtcblx0XHR0aGlzLnBhdGggPSBERUZBVUxUX1JFRElSRUNUX1BBVEg7XG5cblx0fWVsc2V7XG5cdFx0dGhpcy5yZXNldCggSXNzdWUsIHRydWUgKVxuXHRcdFx0LnNpbGVuY2UoIClcblx0XHRcdC5wcm9tcHQoIFwiZW1wdHkgcGF0aCB0byBiZSByZWRpcmVjdGVkXCIgKTtcblx0fVxuXG5cdHJldHVybiB0aGlzO1xufTtcblxuT2xpdmFudC5wcm90b3R5cGUuZmx1c2hTdGF0ZSA9IGZ1bmN0aW9uIGZsdXNoU3RhdGUoICl7XG5cdHRoaXMuc3RhdGUgPSBcIlwiO1xuXG5cdHJldHVybiB0aGlzO1xufTtcblxuLyo7XG5cdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRQYXNzIHRoZSBpbnN0YW5jZSB0byB0aGUgY2FsbGJhY2sgZmlyc3QgcGFyYW1ldGVyLlxuXG5cdFx0VGhpcyBmb2xsb3dzIHRoZSBzdGFuZGFyZCBlcnJvci1yZXN1bHQtb3B0aW9uIGNvbnZlbnRpb24uXG5cblx0XHRIYXMgc3BlY2lhbCBzdXBwb3J0IGZvciBnbHVjb3NlIGNvYXRlZCBvcHRpb24uXG5cdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cbiovXG5PbGl2YW50LnByb3RvdHlwZS5wYXNzID0gZnVuY3Rpb24gcGFzcyggY2FsbGJhY2ssIHJlc3VsdCwgb3B0aW9uICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwiY2FsbGJhY2s6cmVxdWlyZWRcIjogXCJmdW5jdGlvblwiXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRpZiggIXByb3R5cGUoIGNhbGxiYWNrLCBGVU5DVElPTiApICl7XG5cdFx0dGhpcy5yZXNldCggQnVnLCB0cnVlIClcblx0XHRcdC5wcm9tcHQoIFwiaW52YWxpZCBjYWxsYmFja1wiICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGlmKCB0aGlzLmNvbnRleHQgKXtcblx0XHRjYWxsYmFjayA9IGNhbGxlZC5iaW5kKCB0aGlzLmNvbnRleHQgKSggY2FsbGJhY2sgKTtcblxuXHR9ZWxzZXtcblx0XHRjYWxsYmFjayA9IGNhbGxlZCggY2FsbGJhY2sgKTtcblx0fVxuXG5cdGlmKCB0cnV1KCBvcHRpb24gKSAmJiB0cnV1KCBvcHRpb24uc2VsZiApICYmIG9wdGlvbi5DT0FURUQgPT09IENPQVRFRCApe1xuXHRcdHRoaXMuc2V0KCBDT05URVhULCBvcHRpb24uc2VsZiApO1xuXHR9XG5cblx0Y2FsbGJhY2soIHRoaXMsIHJlc3VsdCwgb3B0aW9uICk7XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG5oYXJkZW4oIFwiY3JlYXRlXCIsIGZ1bmN0aW9uIGNyZWF0ZSggbmFtZSwgb3B0aW9uICl7XG5cdGxldCBDbG9uZSA9IGRpYXRvbSggbmFtZSApO1xuXG5cdGhlcmVkaXRvKCBDbG9uZSwgT2xpdmFudCApO1xuXG5cdENsb25lLnByb3RvdHlwZS5uYW1lID0gb3B0aW9uLm5hbWU7XG5cdENsb25lLnByb3RvdHlwZS5zdGF0dXMgPSBvcHRpb24uc3RhdHVzO1xuXHRDbG9uZS5wcm90b3R5cGUuY29kZSA9IG9wdGlvbi5jb2RlO1xuXHRDbG9uZS5wcm90b3R5cGUuc2lsZW50ID0gb3B0aW9uLnNpbGVudDtcblx0Q2xvbmUucHJvdG90eXBlLmRlcHRoID0gb3B0aW9uLmRlcHRoO1xuXHRDbG9uZS5wcm90b3R5cGUuY29sb3IgPSBvcHRpb24uY29sb3I7XG5cdENsb25lLnByb3RvdHlwZS5pbnNwZWN0ID0gb3B0aW9uLmluc3BlY3Q7XG5cdENsb25lLnByb3RvdHlwZS5pbml0aWFsaXplID0gb3B0aW9uLmluaXRpYWxpemUgfHxcblx0XHRmdW5jdGlvbiBpbml0aWFsaXplKCApe1xuXHRcdFx0dGhpcy5uYW1lID0gb3B0aW9uLm5hbWU7XG5cblx0XHRcdHRoaXMuc3RhdHVzID0gb3B0aW9uLnN0YXR1cztcblxuXHRcdFx0dGhpcy5jb2RlID0gb3B0aW9uLmNvZGU7XG5cblx0XHRcdHRoaXMuc2lsZW50ID0gb3B0aW9uLnNpbGVudDtcblxuXHRcdFx0dGhpcy5kZXB0aCA9IG9wdGlvbi5kZXB0aDtcblx0XHR9O1xuXG5cdHN5bWJpb3RlKCBDbG9uZSApO1xuXG5cdGhhcmRlbiggbmFtZSwgQ2xvbmUgKTtcbn0sIE9saXZhbnQgKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPbGl2YW50O1xuIl19
