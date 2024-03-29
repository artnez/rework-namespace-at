var assert = require('assert');
var read = require('fs').readFileSync;
var rework = require('rework');
var namespace = require('../');

var css = read('test/test.css').toString();
var style = rework(css).use(namespace());
var rules = style.obj.stylesheet.rules;

describe('crazy hack', function() {
  it('supports $namespace only', function() {
    assert.equal(rules[0].selectors[0], '.some-prefix');
  });
  it('supports $namespace prefix', function() {
    assert.equal(rules[1].selectors[0], '.some-prefix.foo');
  });
  it('supports $namespace multi', function() {
    assert.equal(rules[2].selectors[0], '.some-prefix.bar .some-prefix');
  });
  it('supports $namespace replace', function() {
    assert.equal(rules[6].selectors[0], 'body.another-prefix');
  });
  it('prefixes standard rules', function() {
    assert.equal(rules[3].selectors[0].indexOf('.some-prefix'), 0);
    assert.equal(rules[3].selectors[1].indexOf('.some-prefix'), 0);
    assert.equal(rules[4].selectors[0].indexOf('.some-prefix'), 0);
  });
  it('does not prefix between namespaces', function() {
    assert.equal(rules[5].selectors[0], '.foo');
  });
  it('prefixes after gap', function() {
    assert.equal(rules[7].selectors[0].indexOf('another-prefix'), 0);
  });
  it('prefixes in media query', function() {
    assert.equal(rules[8].rules[0].selectors[0].indexOf('another-prefix'), 0);
  });
});
