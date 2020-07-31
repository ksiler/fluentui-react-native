// @ts-check

const path = require('path');
const { tscTask, argv } = require('just-scripts');
const { readdirSync } = require('fs');

const libPath = path.resolve(process.cwd(), 'lib');
const srcPath = path.resolve(process.cwd(), 'src');

function getAllTypesButJasmine() {
  // get the jasmine package dir, then pop up two directories to @types
  const typesDir = path.resolve(require.resolve('@types/jasmine/package.json'), '../..');
  // filter it to every type but jasmine
  const allTypesButJasmine = readdirSync(typesDir, { withFileTypes: true }).filter(dirent => dirent.isDirectory() && dirent.name !== 'jasmine').map(dirent => dirent.name);
  // Turn it into a comma delimited string for the cli
  return allTypesButJasmine.toString();
}

function getExtraTscParams(args) {
  return {
    pretty: true,
    target: 'es5',
    // ...(!args.useJasmineTypes && { types: getAllTypesButJasmine() }),
    ...(args.production && { inlineSources: true, sourceRoot: path.relative(libPath, srcPath) })
  };
}

module.exports.ts = {
  commonjs: () => {
    const extraOptions = getExtraTscParams(argv());
    return tscTask({ ...extraOptions, outDir: 'lib-commonjs', module: 'commonjs' });
  },
  esm: () => {
    const extraOptions = getExtraTscParams(argv());
    return tscTask({ ...extraOptions, outDir: 'lib', module: 'esnext' });
  },
  amd: () => {
    const extraOptions = getExtraTscParams(argv());
    return tscTask({ ...extraOptions, outDir: 'lib-amd', module: 'amd' });
  },
  commonjsOnly: () => {
    const extraOptions = getExtraTscParams(argv());
    return tscTask({ ...extraOptions, outDir: 'lib', module: 'commonjs' });
  }
};
