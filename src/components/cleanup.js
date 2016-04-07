import _ from 'lodash'
import chalk from 'chalk'
import { removeFromState } from '../utils/state'
import { config } from '../config'
import { log } from '../utils/emit'

export default function () {
  const QUEUE = []

  _.forEach(config.trashCan, (item, key) => {
    const { serviceProvider, serviceType } = item
    const moduleName = `../providers/${serviceProvider}/${serviceType}`
    const module = require(moduleName)

    log('destroying', `${serviceProvider}.${serviceType}`, chalk.dim(key))

    const chain = module.destroy(item)
      .then(() => removeFromState(key))
      .catch((err) => console.log(err))

    QUEUE.push(chain)
  })

  Promise.all(QUEUE)
    .catch((err) => console.log(err))
}
