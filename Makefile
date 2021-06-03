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
brain-progression: #run brain-progression.js
	node bin/brain-progression.js
brain-prime: #run brain-prime.js
	node bin/brain-prime.js
publish:
	npm publish --dry-run
lint: #run eslint
	npx eslint .