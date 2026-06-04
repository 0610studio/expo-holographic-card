#!/usr/bin/env node
const { spawnSyncWithAutoShell } = require('./util');
const fs = require('fs');
const path = require('path');

function run(cmd, args = []) {
  const result = spawnSyncWithAutoShell(cmd, args, { stdio: 'inherit' });
  if (result.status !== 0) process.exit(result.status ?? 1);
}

fs.rmSync(path.join(process.cwd(), 'build'), { recursive: true, force: true });
run('tsc');
