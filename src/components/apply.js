import _ from 'lodash'
import crypto from 'crypto-extra'
import { saveToState, cleanUpState } from '../utils/state'
import { config } from '../config'

const QUEUE = []

export default function () {
  const hashes = []

  _.forEach(config.data.providers, (services, provider) => {
    _.forEach(services, (service) => {
      const hash = crypto.hash(JSON.stringify(service), {
        algorithm: 'md5'
      })

      hashes.push(hash)
      createService(provider, service, hash)

      Promise.all(QUEUE)
        .catch((err) => console.log(err))
    })
  })

  cleanUpState(hashes)
}

export function createService (provider, service, hash) {
  const moduleName = `../providers/${provider}/${service.serviceType}`
  const module = require(moduleName)

  service.serviceProvider = provider
  if (config.state[hash]) return

  const chain = module.create(service)
    .then((data) => saveToState(hash, service, data))
    .catch((err) => console.log(err))

  QUEUE.push(chain)
  return chain
}
