import path from 'path'
import fs from 'fs-extra'

const keysFile = path.resolve('battleaxe-keys.js')
const configFile = path.resolve('battleaxe-config.js')

const baseDir = path.resolve('.battleaxe')
const stateFile = path.resolve(baseDir, 'state.json')
const trashCanFile = path.resolve(baseDir, 'trash.json')

fs.ensureDirSync(baseDir)
if (!fs.existsSync(stateFile)) fs.outputJsonSync(stateFile, {})
if (!fs.existsSync(trashCanFile)) fs.outputJsonSync(trashCanFile, {})

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
