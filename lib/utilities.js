import path from "node:path";
import {writeFileSync, mkdirSync} from "node:fs";
import {fileURLToPath} from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * @param pathname string
 * @param filename string
 * @param data string
 */
export function writeFile(pathname, filename, data) {
	const outputDir = path.join(`${__dirname}/../`, pathname);

	mkdirSync(outputDir, {recursive: true});
	writeFileSync(`${outputDir}/${filename}`, data);
}

/**
 * @param content string
 * @param time number
 */
export function summaryLog(content, time) {
	console.log(`\u001B[32m${content} in ${Date.now() - time}ms\u001B[0m\n`);
}
