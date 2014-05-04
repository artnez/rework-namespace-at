rework-namespace-at
===================

A [rework](https://github.com/reworkcss/rework) plugin that hijacks the
@namespace rule as a selector prefix decorator. Because who uses @namespace
anyway?

This is obviously a hack.

Install
-------

```
npm install rework-namespace-at
```

Usage
-----

```js
var namespace = require('rework-namespace-at');
var str = 'your css here';
var css = new rework(str).use(namespace()).toString();
console.log(css);
```

Results
-------

Before:

```css
@namespace .some-prefix;

$namespace {
  margin: 10px;
}

$namespace.foo {
  padding: 10px;
}

body$namespace {
  background: white;
}

.bar {
  color: #fff;
}

.baz {
  background: green;
}

@namespace end;
```

After:

```css
.some-prefix {
  margin: 10px;
}

.some-prefix.foo {
  padding: 10px;
}

body.some-prefix {
  background: white;
}

.some-prefix .bar {
  color: #fff;
}

.some-prefix .baz {
  background: green;
}
```

License
-------

MIT
