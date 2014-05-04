var assert = require('assert');
var read = require('fs').readFileSync;
var rework = require('rework');
var namespace = require('./');

var css = read('test.css').toString();
var style = rework(css).use(namespace());
var rules = style.obj.stylesheet.rules;

describe('nasty hack', function() {
  it('prefixes in a namespace', function() {
    assert.equal(rules[0].selectors[0].indexOf('.some-prefix'), 0);
    assert.equal(rules[0].selectors[1].indexOf('.some-prefix'), 0);
    assert.equal(rules[1].selectors[0].indexOf('.some-prefix'), 0);
  });
  it('does not prefix between namespaces', function() {
    assert.equal(rules[2].selectors[0].indexOf('.some-prefix'), -1);
  });
  it('prefixes after gap', function() {
    assert.equal(rules[3].selectors[0].indexOf('another-prefix'), 0);
  });
  it('prefixes in media query', function() {
    assert.equal(rules[4].rules[0].selectors[0].indexOf('another-prefix'), 0);
  });
});
