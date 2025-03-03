module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
		'node': true
	},
	'extends': [
		'eslint:recommended',
		// 'standard-with-typescript',
		'plugin:vue/vue3-essential'
	],
	'overrides': [
		{
			'env': {
				'node': true
			},
			'files': ['.eslintrc.{js,cjs}'],
			'parserOptions': {
				'sourceType': 'script'
			}
		}
	],
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module',
		'project': './tsconfig.json'
	},
	'plugins': ['vue'],
	'rules': {}
};
