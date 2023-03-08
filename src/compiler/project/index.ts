import { readFileSync } from 'fs';
import { join } from 'path';

export * from './types';
// DefaultConfig
export const DefaultConfig = JSON.parse(readFileSync(join(__dirname, './default-config.json')).toString('utf-8'));
