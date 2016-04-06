import minimist from 'minimist'
import path from 'path'
import fs from 'fs-extra'

const args = minimist(process.argv.slice(2))
const command = args._[0]

const keysFile = path.resolve(args.k || args.keys || 'battleaxe-keys.js')
const configFile = path.resolve(args.c || args.config || 'battleaxe-config.js')
const stateFile = path.resolve(args.s || args.state || 'battleaxe-state.json')
const trashCanFile = path.resolve(args.t || args.trash || 'battleaxe-trash.json')

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
