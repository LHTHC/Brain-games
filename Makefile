install:
	npm ci
publish:
	npm publish --dry-run
lint: #run eslint
	npx eslint .