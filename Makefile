install:
	npm ci

brain-games: #run brain-games.js
	node bin/brain-games.js
brain-even: #run brain-even.js
	node bin/brain-even.js
brain-calc: #run brain-calc.js
	node bin/brain-calc.js
brain-gcd: #run brain-gcd.js
	node bin/brain-gcd.js
publish:
	npm publish --dry-run
lint: #run eslint
	npx eslint .