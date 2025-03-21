import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: true,
  clean: true,
  outDir: 'build',
  target: 'node16',
  banner: { // 脚本文件开头的配置
    js: '#!/usr/bin/env node',
  },
});