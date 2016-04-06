import _ from 'lodash'
import crypto from 'crypto-extra'
import shortid from 'shortid'
import { saveToState, removeFromState } from './utils/state'
import config from './config'

export default function () {
  _.forEach(config.data.providers, (providerConfig, provider) => {
    _.forEach(providerConfig, (service, serviceName) => {
      if (!service.id) {
        throw new Error(`${serviceName} needs an id!`)
      }

      const moduleName = serviceName.replace(/_/g, '-')
      const module = require(`./${provider}/${moduleName}`)
      const generatedId = shortid.generate()

      const idHash = crypto.hash(service.id, {
        algorithm: 'md5'
      })
      const contentHash = crypto.hash(JSON.stringify(service), {
        algorithm: 'md5'
      })

      if (
        config.state[idHash]
        && config.state[idHash].contentHash === contentHash
      ) return

      if (config.state[idHash]) {
        removeFromState(idHash)
      }

      module.create(service)
        .catch(err => console.log(err))
        .then(res => {
          return saveToState(idHash, {
            contentHash,
            ...service,
          }, {
            serviceProvider: provider,
            serviceName,
          })
        })
    })
  })
}
