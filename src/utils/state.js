import _ from 'lodash'
import fs from 'fs-promise'
import chalk from 'chalk'
import config from '../config'
import { log } from './emit'

export function saveToState(hash, service, returnData) {
  const { serviceProvider, serviceType } = service

  if (config.trashCan[hash]) {
    log(`${serviceProvider}.${serviceType} restored`, chalk.dim(hash))
    return restoreFromTrash(hash)
  }

  log(`${serviceProvider}.${serviceType} created`, chalk.dim(hash))
  config.state[hash] = { ...service, returnData }

  return fs.outputJson(config.stateFile, config.state)
}

export function cleanUpState(validHashes) {
  const hashes = Object.keys(config.state)

  const invalidatedHashes = _.pickBy(hashes, (hash) => {
    return validHashes.indexOf(hash) === -1
  })

  _.forEach(invalidatedHashes, (hash) => {
    removeFromState(hash)
  })
}

export function removeFromState(id) {
  config.trashCan[id] = config.state[id]
  config.state = _.omit(config.state, id)

  return fs.outputJson(config.trashCanFile, config.trashCan)
    .then(() => fs.outputJson(config.stateFile, config.state))
}

export function restoreFromTrash(id) {
  config.state[id] = config.trashCan[id]
  config.trashCan = _.omit(config.trashCan, id)

  return fs.outputJson(config.trashCanFile, config.trashCan)
    .then(() => fs.outputJson(config.stateFile, config.state))
}
