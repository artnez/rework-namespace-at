NODE=node_modules

test: $(NODE)
	./$(NODE)/.bin/mocha test.js

$(NODE):
	npm install

.PHONY: test
