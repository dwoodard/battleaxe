import minimist from 'minimist'
import updateNotifier from 'update-notifier'
import pkg from '../package.json'

updateNotifier({ pkg }).notify()

// -----------------------------------------------------------------------------
// run command
// -----------------------------------------------------------------------------

const args = minimist(process.argv.slice(2))
const command = args._[0]

switch (command) {
  case 'plan':
    require('./components/plan').default()
    break
  case 'apply':
    require('./components/apply').default()
    break
  case 'cleanup':
    require('./components/cleanup').default()
    break
  default:
    require('./components/help').default()
    break
}
