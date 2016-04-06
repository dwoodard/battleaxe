import program from 'commander'
import updateNotifier from 'update-notifier'
import pkg from '../package.json'

updateNotifier({ pkg }).notify()

program
  .version(pkg.version)
  .parse(process.argv)
