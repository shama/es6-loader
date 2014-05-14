var should = require('should');

describe('basic', function() {
	it('should compile a es6 module', function() {
		var App = require('../!./fixtures/basic.js').default;
    var result = (new App()).result;
		(typeof result).should.be.eql('string');
		result.should.equal('testtest');
	});
});
