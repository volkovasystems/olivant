"use strict";

const webpack = require( "webpack" );
const IgnorePlugin = webpack.IgnorePlugin;
const ResolverPlugin = webpack.ResolverPlugin;
const DirectoryDescriptionFilePlugin = ResolverPlugin.DirectoryDescriptionFilePlugin;
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
	"entry": "./olivant.support.js",
	"resolve": {
		"modulesDirectories": [ "bower_components", "node_modules" ]
	},
	"module": {
		"preLoaders": [
			{
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
		new IgnorePlugin( /blacksea|chalk|dexist|events|http|redsea|util/ ),
		new ResolverPlugin( new DirectoryDescriptionFilePlugin( "bower.json", [ "support" ] ) ),
		new ResolverPlugin( new DirectoryDescriptionFilePlugin( ".bower.json", [ "main" ] ) ),
		new ResolverPlugin( new DirectoryDescriptionFilePlugin( "package.json", [ "browser" ] ) ),
		new ResolverPlugin( new DirectoryDescriptionFilePlugin( "package.json", [ "main" ] ) ),
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
	"devtool": "#inline-source-map"
};