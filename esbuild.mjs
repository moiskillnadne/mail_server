import * as esbuild from 'esbuild'
import packages from './package.json' assert { type: "json" };

const env = {
  'process.env.PORT': JSON.stringify(process.env.PORT),
};

esbuild
  .build({
    entryPoints: ['./src/index.ts'], // Entry point
    bundle: true,
    platform: 'node',
    outdir: 'dist', // Outdir
    target: 'node22', // Node version
    tsconfig: './tsconfig.json', // Path to tsconfig
    alias: {
      '~/*': './src',
    },
    external: Object.keys(packages.dependencies), // External dependencies
    define: {
      ...env,
    },
    minify: true,
  })
  .catch(() => process.exit(1));
