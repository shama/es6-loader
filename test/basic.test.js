var should = require('should');

describe('basic', function() {
	it('should compile a es6 module', function() {
		var result = require('../!./fixtures/basic.js').default();
		(typeof result).should.be.eql('string');
		result.should.equal('test');
	});
});
