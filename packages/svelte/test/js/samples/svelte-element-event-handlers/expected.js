/* generated by Svelte vX.Y.Z */
import {
	SvelteComponent,
	append,
	bubble,
	detach,
	element,
	init,
	insert,
	listen,
	noop,
	run_all,
	safe_not_equal,
	set_dynamic_element_data
} from "svelte/internal";

function create_dynamic_element(ctx) {
	let svelte_element1;
	let svelte_element0;
	let mounted;
	let dispose;

	return {
		c() {
			svelte_element1 = element(a);
			svelte_element0 = element(span);
			set_dynamic_element_data(span)(svelte_element0, { class: "inner" });
			set_dynamic_element_data(a)(svelte_element1, { class: "outer" });
		},
		m(target, anchor) {
			insert(target, svelte_element1, anchor);
			append(svelte_element1, svelte_element0);

			if (!mounted) {
				dispose = [
					bubble(/*$$self*/ ctx[0], listen, svelte_element0, "keydown"),
					bubble(/*$$self*/ ctx[0], listen, svelte_element0, "keyup"),
					bubble(/*$$self*/ ctx[0], listen, svelte_element1, "keydown"),
					bubble(/*$$self*/ ctx[0], listen, svelte_element1, "keyup")
				];

				mounted = true;
			}
		},
		p: noop,
		d(detaching) {
			if (detaching) {
				detach(svelte_element1);
			}

			mounted = false;
			run_all(dispose);
		}
	};
}

function create_fragment(ctx) {
	let svelte_element = a && create_dynamic_element(ctx);

	return {
		c() {
			if (svelte_element) svelte_element.c();
		},
		m(target, anchor) {
			if (svelte_element) svelte_element.m(target, anchor);
		},
		p(ctx, [dirty]) {
			if (a) {
				svelte_element.p(ctx, dirty);
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (svelte_element) svelte_element.d(detaching);
		}
	};
}

const a = 'a';
const span = 'span';

function instance($$self) {
	return [$$self];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default Component;