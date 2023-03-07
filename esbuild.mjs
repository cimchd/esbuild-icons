import * as esbuild from 'esbuild';
import Icons from 'unplugin-icons/esbuild';

esbuild.build({
    entryPoints: ['./index.jsx'],
    bundle: true,
    outfile: './bundle.js',
    platform: 'browser',
    format: 'esm',
    plugins: [Icons({ compiler: 'jsx', jsx: 'preact' })],
    external: ['~icons'],
});