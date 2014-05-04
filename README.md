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

:local {
  margin: 10px;
}

.foo {
  color: #fff;
}

.bar {
  background: green;
}

@namespace end;
```

After:

```css
.some-prefix {
  margin: 10px;
}

.some-prefix .foo {
  color: #fff;
}

.some-prefix .bar {
  background: green;
}
```

License
-------

MIT
