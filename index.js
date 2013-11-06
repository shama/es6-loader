var loaderUtils = require('loader-utils');
var path = require('path');

module.exports = function(source) {
  this.cacheable && this.cacheable();
  var done = this.async();
  var options = loaderUtils.parseQuery(this.query);
  var filename = options.filename || this.resourcePath;
  
  var Compiler = require('es6-module-transpiler').Compiler;
  var ext = path.extname(filename);

  if (ext.slice(1) === 'coffee') {
    options.coffee = true;
  }

  var moduleName = path.join(path.dirname(filename), path.basename(filename, ext)).replace(/[\\]/g, '/');
  var compiler = new Compiler(source, moduleName, options);
  done(null, compiler.toCJS());
};
