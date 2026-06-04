#!/usr/bin/env node
const { spawnSyncWithAutoShell } = require('./util');

const args = process.argv.slice(2);
const result = spawnSyncWithAutoShell('jest', args, { stdio: 'inherit' });
process.exit(result.status ?? 0);
