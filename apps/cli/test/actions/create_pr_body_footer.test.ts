import { describe, expect, it } from "bun:test";
import {
	buildPrDependencyTreeFooter,
	footerFooter,
	footerTitle,
} from "../../src/actions/create_pr_body_footer";

describe("buildPrDependencyTreeFooter", () => {
	const tree = "\n* **PR #1** 👈";

	it("appends the Pancake attribution line when enabled", () => {
		expect(buildPrDependencyTreeFooter(tree, true)).toBe(
			`${footerTitle}${tree}${footerFooter}`,
		);
	});

	it("omits the Pancake attribution line when disabled", () => {
		expect(buildPrDependencyTreeFooter(tree, false)).toBe(
			`${footerTitle}${tree}`,
		);
	});
});
