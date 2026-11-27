// Builds the self-contained site (../index.html) from the template and data files.
// Usage: node src/merge.js && node src/build.js   (or: npm run build)
const fs = require("fs"), path = require("path");
const dir = __dirname;
const read = f => fs.readFileSync(path.join(dir, f), "utf8");
const strip = s => s.replace(/if \(typeof module[^\n]*\n?/, "");
const body = read("template.html")
  .replace("/*__DATA__*/", strip(read("roadmaps.js")))
  .replace("/*__CHEAT__*/", strip(read("cheat.js")))
  .replace("/*__SUBRES__*/", read("subdata.js"))
  .replace("/*__INIT__*/", "");
const SITE = "https://alexduncan2100.github.io/ecommerce-roadmap/";
const desc = "Amazon, Etsy, Shopify, eBay, Zalando, Kaufland, Wayfair ve 3PL için roadmap.sh tarzı interaktif, ücretsiz e-ticaret öğrenme yol haritaları. Türkçe ve İngilizce, doğrulanmış kaynak linkleriyle.";
const head = `<!doctype html>
<html lang="tr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="${desc}">
<meta property="og:type" content="website">
<meta property="og:title" content="E-ticaret Yol Haritaları">
<meta property="og:description" content="${desc}">
<meta property="og:url" content="${SITE}">
<meta property="og:image" content="${SITE}assets/preview.png">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🛒</text></svg>">
</head>
<body>
`;
fs.writeFileSync(path.join(dir, "..", "index.html"), head + body + "\n</body>\n</html>\n");
console.log("index.html built");
