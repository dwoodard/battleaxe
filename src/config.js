import path from 'path'
import fs from 'fs-extra'

const keysFile = path.resolve('battleaxe-keys.js')
const configFile = path.resolve('battleaxe-config.js')
const stateFile = path.resolve('battleaxe-state.json')
const trashCanFile = path.resolve('battleaxe-trash.json')

fs.ensureFileSync(keysFile)
fs.ensureFileSync(configFile)
fs.ensureFileSync(stateFile)
fs.ensureFileSync(trashCanFile)

const config = {
  keys: require(keysFile),
  keysFile,

  data: require(configFile),
  configFile,

  state: require(stateFile),
  stateFile,

  trashCan: require(trashCanFile),
  trashCanFile,
}

export default config
