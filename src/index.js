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
  case 'create':
    require('./create').default()
    break
  case 'destroy':
    require('./destroy').default()
    break
  case 'cleanup':
    require('./cleanup').default()
    break
}
