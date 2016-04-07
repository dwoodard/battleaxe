import minimist from 'minimist'
import updateNotifier from 'update-notifier'
import pkg from '../package.json'
import { setupConfig } from './config'

updateNotifier({ pkg }).notify()

const args = minimist(process.argv.slice(2))

setupConfig(args).then(() => {
  switch (args._[0]) {
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
}).catch((err) => console.log(err))
