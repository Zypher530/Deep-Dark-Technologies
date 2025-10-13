
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const modsDir = path.join(root, 'mods');
const mdFile = path.join(root, 'MODS.md');

function readMods(dir) {
	if (!fs.existsSync(dir)) return [];
	const items = fs.readdirSync(dir, { withFileTypes: true });
	// include files and folders commonly used for mods
	return items
		.filter(i => i.isFile() && /\.(jar|zip|litemod|disabled)$/i.test(i.name) || i.isDirectory())
		.map(i => i.name)
		.sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase()));
}

function buildListLines(modNames) {
	if (modNames.length === 0) return ['- (no mods detected in /mods)'];
	return modNames.map(n => {
		// strip common file extensions for cleaner display
		const display = n.replace(/\.(jar|zip|litemod|disabled)$/i, '');
		return `- ${display}`;
	});
}

function updateMdFile(mdPath, listLines) {
	let md = fs.readFileSync(mdPath, 'utf8');
	const start = '<!-- MODS_LIST_START -->';
	const end = '<!-- MODS_LIST_END -->';
	const regex = new RegExp(`${start}[\\s\\S]*?${end}`, 'm');

	const replacement = `${start}\n${listLines.join('\n')}\n${end}`;
	if (!regex.test(md)) {
		console.error('Markers not found in MODS.md. Please ensure <!-- MODS_LIST_START --> and <!-- MODS_LIST_END --> are present.');
		process.exit(1);
	}
	md = md.replace(regex, replacement);
	fs.writeFileSync(mdPath, md, 'utf8');
	console.log(`Updated ${mdPath} with ${listLines.length} mods.`);
}

(function main() {
	const mods = readMods(modsDir);
	const listLines = buildListLines(mods);
	if (!fs.existsSync(mdFile)) {
		console.error('MODS.md not found at', mdFile);
		process.exit(1);
	}
	updateMdFile(mdFile, listLines);
})();
