import { print } from 'esrap';
import { VERSION } from '../../../version.js';
import { server_component, server_module } from './server/transform-server.js';
import { client_component, client_module } from './client/transform-client.js';
import { getLocator } from 'locate-character';

/**
 * @param {import('../types').ComponentAnalysis} analysis
 * @param {string} source
 * @param {import('#compiler').ValidatedCompileOptions} options
 * @returns {import('#compiler').CompileResult}
 */
export function transform_component(analysis, source, options) {
	if (options.generate === false) {
		return {
			js: /** @type {any} */ (null),
			css: null,
			warnings: transform_warnings(source, options.filename, analysis.warnings),
			metadata: {
				runes: analysis.runes
			}
		};
	}

	const program =
		options.generate === 'server'
			? server_component(analysis, options)
			: client_component(source, analysis, options);

	const basename = (options.filename ?? 'Component').split(/[/\\]/).at(-1);
	if (program.body.length > 0) {
		program.body[0].leadingComments = [
			{
				type: 'Line',
				value: ` ${basename} (Svelte v${VERSION})`
			},
			{
				type: 'Line',
				value: ' Note: compiler output will change before 5.0 is released!'
			}
		];
	}

	return {
		js: print(program, { sourceMapSource: options.filename }), // TODO needs more logic to apply map from preprocess
		css:
			analysis.stylesheet.has_styles && !analysis.inject_styles
				? analysis.stylesheet.render(options.filename ?? 'TODO', source, options.dev)
				: null,
		warnings: transform_warnings(source, options.filename, analysis.warnings),
		metadata: {
			runes: analysis.runes
		}
	};
}

/**
 * @param {import('../types').Analysis} analysis
 * @param {string} source
 * @param {import('#compiler').ValidatedModuleCompileOptions} options
 * @returns {import('#compiler').CompileResult}
 */
export function transform_module(analysis, source, options) {
	if (options.generate === false) {
		return {
			js: /** @type {any} */ (null),
			css: null,
			warnings: transform_warnings(source, analysis.name, analysis.warnings),
			metadata: {
				runes: true
			}
		};
	}

	const program =
		options.generate === 'server'
			? server_module(analysis, options)
			: client_module(analysis, options);

	const basename = (options.filename ?? 'Module').split(/[/\\]/).at(-1);
	if (program.body.length > 0) {
		program.body[0].leadingComments = [
			{
				type: 'Block',
				value: ` ${basename} generated by Svelte v${VERSION} `
			}
		];
	}

	return {
		js: print(program, {}),
		css: null,
		warnings: transform_warnings(source, analysis.name, analysis.warnings),
		metadata: {
			runes: true
		}
	};
}

/**
 * @param {string} source
 * @param {string | undefined} name
 * @param {import('../types').RawWarning[]} warnings
 * @returns {import('#compiler').Warning[]}
 */
function transform_warnings(source, name, warnings) {
	if (warnings.length === 0) return [];

	const locate = getLocator(source, { offsetLine: 1 });

	/** @type {import('#compiler').Warning[]} */
	const result = [];

	for (const warning of warnings) {
		const start =
			warning.position &&
			/** @type {import('locate-character').Location} */ (locate(warning.position[0]));

		const end =
			warning.position &&
			/** @type {import('locate-character').Location} */ (locate(warning.position[1]));

		result.push({
			start,
			end,
			filename: name,
			message: warning.message,
			code: warning.code
		});
	}

	return result;
}
