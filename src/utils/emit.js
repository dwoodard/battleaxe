import chalk from 'chalk'

export function log(...msg) {
  console.log('  ', chalk.dim.bold('>'), ...msg)
}
