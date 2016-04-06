import _ from 'lodash'
import fs from 'fs-promise'
import config from '../config'

export function saveToState(id, data, service) {
  config.state = Object.assign({}, config.state, {
    [id]: data
  })
  config.state[id] = {
    ...data,
    ...service,
  }

  return fs.outputJson(config.stateFile, config.state)
}

export function removeFromState(id) {
  const trashed = {}
  trashed[config.state[id].contentHash] = config.state[id]

  config.trashCan = Object.assign({}, config.trashCan, trashed)
  config.state = _.omit(config.state, id)

  return fs.outputJson(config.trashCanFile, config.trashCan)
    .then(() => fs.outputJson(config.stateFile, config.state))
}
