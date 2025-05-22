const fs = require('node:fs');
const { execSync } = require('node:child_process');
const process = require('node:process');

const isLibraryBuild = process.argv.includes('--build');

const additionalProperties = fs.readFileSync(
  './package-lib-properties.json',
  'utf-8'
);
const packageFile = fs.readFileSync('./package.json', 'utf-8');

const additionalPropertiesObject = JSON.parse(additionalProperties);
const packageFileObject = JSON.parse(packageFile);

let resultedPackageFileObject = packageFileObject;

if (isLibraryBuild) {
  resultedPackageFileObject = {
    ...packageFileObject,
    ...additionalPropertiesObject,
  };
} else {
  for (const key in additionalPropertiesObject) {
    if (key in packageFileObject) delete packageFileObject[key];
  }
}

console.log(
  `[expense-tracker-ui-internal] Writing in package.json file using ${isLibraryBuild ? 'BUILD' : 'STORYBOOK'} strategy`
);
fs.writeFileSync('./package.json', JSON.stringify(resultedPackageFileObject));

console.log('[expense-tracker-ui-internal] Running prettier');

execSync(`npx prettier --write ./package.json`);

console.log('[expense-tracker-ui-internal] Build prepare script completed');
