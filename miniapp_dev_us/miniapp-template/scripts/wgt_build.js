const fs = require("fs");
const AdmZip = require("adm-zip");

const manifest = JSON.parse(fs.readFileSync("./dist/build/app/manifest.json"));
const appId = manifest.id;

if (typeof manifest.version.name !== 'string' || manifest.version.name.length > 50 || !/^[0-9]+\.[0-9]+\.[0-9]+$/.test(manifest.version.name)) {
  console.log("\u001b[31mPlease set the versionName in the src\\manifest.json to the \"X.X.X\" style with less than 50 characters.\u001b[0m")
  process.exit(-1)
}

if (typeof manifest.version.code !== 'number' || isNaN(manifest.version.code) || manifest.version.code < 1 || manifest.version.code > 2147483647 || Math.floor(manifest.version.code) !== manifest.version.code) {
  console.log("\u001b[31mPlease set the versionCode in the src\\manifest.json to 1~2147483647.\u001b[0m")
  process.exit(-1)
}

if (process.argv[2]) {
  manifest.version.channel = `${process.argv[2].toUpperCase()}`;
} else {
  manifest.version.channel = "PROD";
}
fs.writeFileSync("./dist/build/app/manifest.json", JSON.stringify(manifest));

const zip = new AdmZip();
zip.addLocalFolder("./dist/build/app/");
zip.writeZip(`./dist/${appId}.wgt`);
