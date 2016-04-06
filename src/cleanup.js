import _ from 'lodash'
import fs from 'fs-promise'
import config from './config'

export default function () {
  _.forEach(config.trashCan, async (item) => {
    const moduleName = item.serviceName.replace(/_/g, '-')
    const module = require(`./${item.serviceProvider}/${moduleName}`)
    await module.destroy(item)
  })

  fs.outputJson(config.trashCanFile, {})
}
