"use strict";

const webpack = require( "webpack" );

const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
	"entry": "./browser.js",
	"resolve": {
		"descriptionFiles": [
			"package.json",
			"bower.json"
		],
		"modules": [
			"node_modules",
			"bower_components"
		],
		"mainFields": [
			"support",
			"browser",
			"module",
			"main"
		],
		"alias": {
			"handlebars": "handlebars/dist/handlebars.js",
			"stacktrace-js": "stacktrace-js/dist/stacktrace.js"
		}
	},
	"module": {
		"rules": [
			{
				"enforce": "pre",
				"test": /\.support\.js$/,
				"loader": "source-map-loader"
			}
		]
	},
	"output": {
		"library": "olivant",
		"libraryTarget": "umd",
		"filename": "olivant.deploy.js"
	},
	"plugins": [
		new UglifyJsPlugin( {
			"compress": {
					"keep_fargs": true,
					"keep_fnames": true,
					"warnings": false
			},
			"comments": false,
			"sourceMap": true,
			"mangle": false
		} )
	],
	"devtool": "#cheap-module-inline-source-map"
};
