install:
	npm ci

brain-games: #run brain-games.js
	node bin/brain-games.js
brain-even: #run brain-even.js
	node bin/brain-even.js
publish:
	npm publish --dry-run
lint: #run eslint
	npx eslint .