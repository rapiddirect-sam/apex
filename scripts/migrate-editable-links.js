const fs = require("fs");
const path = require("path");

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(fullPath, files);
    else if (fullPath.endsWith(".tsx")) files.push(fullPath);
  }
  return files;
}

let updated = 0;

for (const file of walk(path.join(__dirname, "../src"))) {
  let content = fs.readFileSync(file, "utf8");
  if (!content.includes("EditableText") || !content.includes("<Link")) continue;

  const original = content;

  content = content.replace(
    /import\s+\{([^}]+)\}\s+from\s+"@\/components\/cms";/g,
    (match, inner) => {
      if (inner.includes("EditableLink")) return match;
      return `import {${inner.trim()}, EditableLink } from "@/components/cms";`;
    }
  );

  content = content.replace(/<Link\b/g, "<EditableLink").replace(/<\/Link>/g, "</EditableLink>");

  if (content !== original) {
    fs.writeFileSync(file, content);
    updated += 1;
    console.log(file);
  }
}

console.log(`Updated ${updated} files`);
