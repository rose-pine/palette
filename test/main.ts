import test from "ava";
import {variantColors, roleColors} from "../source/index.js";

test("main", (t) => {
	t.deepEqual(variantColors.dawn.highlightLow, {
		hex: "f4ede8",
		rgb: [244, 237, 232],
		hsl: [25, 35, 93],
		alpha: {
			hex: "6e6a860d",
			rgb: [110, 106, 134, 0.05],
			hsl: [249, 12, 47, 0.05],
		},
	});

	t.deepEqual(roleColors.base, {
		main: {hex: "191724", rgb: [25, 23, 36], hsl: [249, 22, 12]},
		moon: {hex: "232136", rgb: [35, 33, 54], hsl: [246, 24, 17]},
		dawn: {hex: "faf4ed", rgb: [250, 244, 237], hsl: [32, 57, 95]},
	});
});
