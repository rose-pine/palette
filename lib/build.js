import path from "node:path";
import {writeFileSync, mkdirSync} from "node:fs";
import {fileURLToPath} from "node:url";
import {minify} from "csso";
import palette from "../source/index.js";

function makeFileWriter(pathname) {
	const ORIGIN_DIR = path.dirname(fileURLToPath(import.meta.url));
	const ROOT_DIR = path.join(ORIGIN_DIR, "..");
	const START_TIME_IN_MILLISECONDS = Date.now();

	let count = 0;

	function writeFile(filename, content) {
		const relativePath = path.join(pathname, filename);
		const absolutePath = path.join(ROOT_DIR, relativePath);

		incrementCount();
		mkdirSync(path.join(ROOT_DIR, pathname), {recursive: true});
		writeFileSync(absolutePath, content);

		return relativePath;
	}

	function incrementCount() {
		count++;
	}

	function getCount() {
		return count;
	}

	function getRuntime() {
		return Date.now() - START_TIME_IN_MILLISECONDS;
	}

	return {writeFile, getCount, getRuntime};
}

function getTemplate(template) {
	const templates = {
		root: ({main, moon, dawn}) => `:root {\n${main}\n${moon}\n${dawn}}`,
		class: ({main, moon, dawn}) =>
			`.theme-rp {\n${main}}\n\n.theme-rp-moon {\n${moon}}\n\n.theme-rp-dawn {\n${dawn}}`,
		media: ({main, moon, dawn}) =>
			`:root {\n\t/* Rosé Pine Dawn */\n${dawn}}\n\n@media (prefers-color-scheme: dark) {\n\t:root {\n\t\t/* Rosé Pine */\n${main
				.split("\n")
				.map((v) => `\t${v}`)
				.join("\n")}\n\t\t/* Rosé Pine Moon */\n${moon
				.split("\n")
				.map((v) => (v ? `\t\t/* ${v.replace("\t", "")} */` : ""))
				.join("\n")}\t}\n}`,
		tailwindConfig: (data) =>
			`export default ${JSON.stringify(data, null, "\t")}`,
	};

	return templates[template];
}

function getColors(palette) {
	const colors = {
		hex: {main: "", moon: "", dawn: ""},
		rgb: {main: "", moon: "", dawn: ""},
		hsl: {main: "", moon: "", dawn: ""},
	};
	const scopedColors = {
		hex: {main: "", moon: "", dawn: ""},
		rgb: {main: "", moon: "", dawn: ""},
		hsl: {main: "", moon: "", dawn: ""},
	};
	const tailwindColors = {main: "", moon: "", dawn: ""};
	const tailwindPreset = {theme: {colors: {}}};
	const tailwindClassPreset = {darkMode: ["class"], theme: {colors: {}}};
	const tailwindMediaPreset = {theme: {colors: {}}};

	const variants = Object.keys(palette.variants);
	const roles = Object.keys(palette.roles);

	for (const variant of variants) {
		const scope = variant === "main" ? "" : `-${variant}`;

		tailwindPreset.theme.colors[`rp${scope}`] = {};

		for (const role of roles) {
			const label = role.startsWith("highlight")
				? role.split("highlight").join("highlight-").toLowerCase()
				: role;
			const {hex, rgb, hsl} = palette.variants[variant][role];
			const [r, g, b] = rgb;
			const [h, s, l] = hsl;
			const rgbFunction = `rgb(${r}, ${g}, ${b})`;
			const hslFunction = `hsl(${h}deg, ${s}%, ${l}%)`;

			colors.hex[variant] += `\t--rp-${label}: #${hex};\n`;
			colors.rgb[variant] += `\t--rp-${label}: ${rgbFunction};\n`;
			colors.hsl[variant] += `\t--rp-${label}: ${hslFunction};\n`;
			scopedColors.hex[variant] += `\t--rp${scope}-${label}: #${hex};\n`;
			scopedColors.rgb[variant] += `\t--rp${scope}-${label}: ${rgbFunction};\n`;
			scopedColors.hsl[variant] += `\t--rp${scope}-${label}: ${hslFunction};\n`;
			tailwindColors[variant] += `\t--rp-${label}: ${h} ${s} ${l};\n`;
			tailwindPreset.theme.colors[`rp${scope}`][label] = `#${hex}`;

			// Run on first iteration only
			if (variant === variants[0]) {
				tailwindClassPreset.theme.colors[
					`rp-${label}`
				] = `hsl(--rp-${label} / <alpha-value>)`;
				tailwindMediaPreset.theme.colors[
					`rp-${label}`
				] = `hsl(--rp-${label} / <alpha-value>)`;
			}
		}
	}

	return {
		colors,
		scopedColors,
		tailwindColors,
		tailwindPreset,
		tailwindClassPreset,
		tailwindMediaPreset,
	};
}

function build(palette) {
	const {
		colors: {hex, rgb, hsl},
		scopedColors: {hex: prefixedHex, rgb: prefixedRgb, hsl: prefixedHsl},
		tailwindColors,
		tailwindPreset,
		tailwindClassPreset,
		tailwindMediaPreset,
	} = getColors(palette);

	const withRoot = getTemplate("root");
	const withClass = getTemplate("class");
	const withMedia = getTemplate("media");
	const withTailwind = getTemplate("tailwindConfig");

	const cssWriter = makeFileWriter("dist/css");
	const cssMinWriter = makeFileWriter("dist/css/min");
	const cssFiles = [
		["rose-pine.css", withRoot(prefixedHex)],
		["rose-pine-rgb.css", withRoot(prefixedRgb)],
		["rose-pine-hsl.css", withRoot(prefixedHsl)],
		["rose-pine-class.css", withClass(hex)],
		["rose-pine-class-rgb.css", withClass(rgb)],
		["rose-pine-class-hsl.css", withClass(hsl)],
		["rose-pine-class-tailwind.css", withClass(tailwindColors)],
		["rose-pine-media.css", withMedia(hex)],
		["rose-pine-media-rgb.css", withMedia(rgb)],
		["rose-pine-media-hsl.css", withMedia(hsl)],
		["rose-pine-media-tailwind.css", withMedia(tailwindColors)],
	];

	for (const [filename, content] of cssFiles) {
		console.log(`[css] Writing ${cssWriter.writeFile(filename, content)}`);
		console.log(
			`[css] Writing ${cssMinWriter.writeFile(
				filename.replace(".css", ".min.css"),
				minify(content).css
			)}`
		);
	}

	console.log(
		`\u001B[32m[css] Wrote ${cssWriter.getCount()} file(s) in ${cssWriter.getRuntime()}ms\u001B[0m\n`
	);

	const tailwindWriter = makeFileWriter("dist/tailwindcss");
	[
		["rose-pine.js", withTailwind(tailwindPreset)],
		["rose-pine-class.js", withTailwind(tailwindClassPreset)],
		["rose-pine-media.js", withTailwind(tailwindMediaPreset)],
	].map(([filename, content]) =>
		console.log(
			`[tailwind] Writing ${tailwindWriter.writeFile(filename, content)}`
		)
	);
	console.log(
		`\u001B[32m[tailwind] Wrote ${tailwindWriter.getCount()} file(s) in ${tailwindWriter.getRuntime()}ms\u001B[0m\n`
	);
}

build(palette);
