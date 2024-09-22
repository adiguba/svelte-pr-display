/* This file is generated by scripts/process-messages/index.js. Do not edit! */

import { DEV } from 'esm-env';

var bold = 'font-weight: bold';
var normal = 'font-weight: normal';

/**
 * `%binding%` (%location%) is binding to a non-reactive property
 * @param {string} binding
 * @param {string | undefined | null} [location]
 */
export function binding_property_non_reactive(binding, location) {
	if (DEV) {
		console.warn(`%c[svelte] binding_property_non_reactive\n%c${location ? `\`${binding}\` (${location}) is binding to a non-reactive property` : `\`${binding}\` is binding to a non-reactive property`}`, bold, normal);
	} else {
		// TODO print a link to the documentation
		console.warn("binding_property_non_reactive");
	}
}

/**
 * %handler% should be a function. Did you mean to %suggestion%?
 * @param {string} handler
 * @param {string} suggestion
 */
export function event_handler_invalid(handler, suggestion) {
	if (DEV) {
		console.warn(`%c[svelte] event_handler_invalid\n%c${handler} should be a function. Did you mean to ${suggestion}?`, bold, normal);
	} else {
		// TODO print a link to the documentation
		console.warn("event_handler_invalid");
	}
}

/**
 * The `%attribute%` attribute on `%html%` changed its value between server and client renders. The client value, `%value%`, will be ignored in favour of the server value
 * @param {string} attribute
 * @param {string} html
 * @param {string} value
 */
export function hydration_attribute_changed(attribute, html, value) {
	if (DEV) {
		console.warn(`%c[svelte] hydration_attribute_changed\n%cThe \`${attribute}\` attribute on \`${html}\` changed its value between server and client renders. The client value, \`${value}\`, will be ignored in favour of the server value`, bold, normal);
	} else {
		// TODO print a link to the documentation
		console.warn("hydration_attribute_changed");
	}
}

/**
 * The value of an `{@html ...}` block %location% changed between server and client renders. The client value will be ignored in favour of the server value
 * @param {string | undefined | null} [location]
 */
export function hydration_html_changed(location) {
	if (DEV) {
		console.warn(`%c[svelte] hydration_html_changed\n%c${location ? `The value of an \`{@html ...}\` block ${location} changed between server and client renders. The client value will be ignored in favour of the server value` : "The value of an `{@html ...}` block changed between server and client renders. The client value will be ignored in favour of the server value"}`, bold, normal);
	} else {
		// TODO print a link to the documentation
		console.warn("hydration_html_changed");
	}
}

/**
 * Hydration failed because the initial UI does not match what was rendered on the server. The error occurred near %location%
 * @param {string | undefined | null} [location]
 */
export function hydration_mismatch(location) {
	if (DEV) {
		console.warn(`%c[svelte] hydration_mismatch\n%c${location ? `Hydration failed because the initial UI does not match what was rendered on the server. The error occurred near ${location}` : "Hydration failed because the initial UI does not match what was rendered on the server"}`, bold, normal);
	} else {
		// TODO print a link to the documentation
		console.warn("hydration_mismatch");
	}
}

/**
 * The `render` function passed to `createRawSnippet` should return HTML for a single element
 */
export function invalid_raw_snippet_render() {
	if (DEV) {
		console.warn(`%c[svelte] invalid_raw_snippet_render\n%cThe \`render\` function passed to \`createRawSnippet\` should return HTML for a single element`, bold, normal);
	} else {
		// TODO print a link to the documentation
		console.warn("invalid_raw_snippet_render");
	}
}

/**
 * Tried to unmount a component that was not mounted
 */
export function lifecycle_double_unmount() {
	if (DEV) {
		console.warn(`%c[svelte] lifecycle_double_unmount\n%cTried to unmount a component that was not mounted`, bold, normal);
	} else {
		// TODO print a link to the documentation
		console.warn("lifecycle_double_unmount");
	}
}

/**
 * Using of the directive `on:%event_name%` on the `%component_name%` component might not work. You should probably use `on%event_name%` instead.
 * @param {string} event_name
 * @param {string} component_name
 */
export function on_directive_on_svelte5_component(event_name, component_name) {
	if (DEV) {
		console.warn(`%c[svelte] on_directive_on_svelte5_component\n%cUsing of the directive \`on:${event_name}\` on the \`${component_name}\` component might not work. You should probably use \`on${event_name}\` instead.`, bold, normal);
	} else {
		// TODO print a link to the documentation
		console.warn("on_directive_on_svelte5_component");
	}
}

/**
 * %parent% passed a value to %child% with `bind:`, but the value is owned by %owner%. Consider creating a binding between %owner% and %parent%
 * @param {string} parent
 * @param {string} child
 * @param {string} owner
 */
export function ownership_invalid_binding(parent, child, owner) {
	if (DEV) {
		console.warn(`%c[svelte] ownership_invalid_binding\n%c${parent} passed a value to ${child} with \`bind:\`, but the value is owned by ${owner}. Consider creating a binding between ${owner} and ${parent}`, bold, normal);
	} else {
		// TODO print a link to the documentation
		console.warn("ownership_invalid_binding");
	}
}

/**
 * %component% mutated a value owned by %owner%. This is strongly discouraged. Consider passing values to child components with `bind:`, or use a callback instead
 * @param {string | undefined | null} [component]
 * @param {string | undefined | null} [owner]
 */
export function ownership_invalid_mutation(component, owner) {
	if (DEV) {
		console.warn(`%c[svelte] ownership_invalid_mutation\n%c${component ? `${component} mutated a value owned by ${owner}. This is strongly discouraged. Consider passing values to child components with \`bind:\`, or use a callback instead` : "Mutating a value outside the component that created it is strongly discouraged. Consider passing values to child components with `bind:`, or use a callback instead"}`, bold, normal);
	} else {
		// TODO print a link to the documentation
		console.warn("ownership_invalid_mutation");
	}
}

/**
 * Reactive `$state(...)` proxies and the values they proxy have different identities. Because of this, comparisons with `%operator%` will produce unexpected results
 * @param {string} operator
 */
export function state_proxy_equality_mismatch(operator) {
	if (DEV) {
		console.warn(`%c[svelte] state_proxy_equality_mismatch\n%cReactive \`$state(...)\` proxies and the values they proxy have different identities. Because of this, comparisons with \`${operator}\` will produce unexpected results`, bold, normal);
	} else {
		// TODO print a link to the documentation
		console.warn("state_proxy_equality_mismatch");
	}
}