// This file isn't transpiled, so must use COmmonJS ans ES5

// Register babel to transpile before our tests run.
require('@babel/register')();

// Disable webapck features that Mocha doesn't unsderstand
require.extensions['.css'] = function() {};

