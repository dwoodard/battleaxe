import _ from 'lodash'
import fs from 'fs-promise'
import { removeFromState } from '../utils/state'
import config from '../config'

export default function () {
  const QUEUE = []

  _.forEach(config.trashCan, (item, key) => {
    const { serviceProvider, serviceType } = item
    const moduleName = `./providers/${serviceProvider}/${serviceType}`
    const module = require(moduleName)

    console.log(`=> destroying ${key}`)

    const chain = module.destroy(item)
      .then(() => removeFromState(key))
      .catch(err => console.log(err))

    QUEUE.push(chain)
  })

  Promise.all(QUEUE)
    .catch(err => console.log(err))
}
