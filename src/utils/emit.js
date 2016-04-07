import chalk from 'chalk'

export function log (...msg) {
  console.log('  ', chalk.dim('>'), ...msg)
}

export function warn (...msg) {
  console.log('  ', chalk.dim.yellow('>'), chalk.yellow(...msg))
}

export function error (...msg) {
  console.log('  ', chalk.dim.red('>'), chalk.red(...msg))
}
