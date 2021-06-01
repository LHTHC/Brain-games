install:
	npm ci

brain-games: #run brain-games.js
	node bin/brain-games.js
publish:
	npm publish --dry-run