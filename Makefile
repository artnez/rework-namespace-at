NODE=node_modules

test: $(NODE)
	./$(NODE)/.bin/mocha test/test.js

$(NODE):
	npm install

.PHONY: test
