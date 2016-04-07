import path from 'path'
import fs from 'fs-promise'

export const config = { }

export async function setupConfig (args) {
  const keysFile = path.resolve('battleaxe-keys.js')
  const configFile = path.resolve('battleaxe-config.js')

  const baseDir = path.resolve('.battleaxe')
  const stateFile = path.resolve(baseDir, 'state.json')
  const trashCanFile = path.resolve(baseDir, 'trash.json')

  await fs.ensureDir(baseDir)

  if (!await fs.exists(stateFile)) {
    await fs.outputJson(stateFile, {})
  }

  if (!await fs.exists(trashCanFile)) {
    await fs.outputJson(trashCanFile, {})
  }

  config.keys = require(keysFile)
  config.data = require(configFile)
  config.state = require(stateFile)
  config.trashCan = require(trashCanFile)

  config.stateFile = stateFile
  config.trashCanFile = trashCanFile
  // const config = {
  //   keys: require(keysFile),
  //   keysFile,
  //
  //   data: require(configFile),
  //   configFile,
  //
  //   state: require(stateFile),
  //   stateFile,
  //
  //   trashCan: require(trashCanFile),
  //   trashCanFile
  // }
}
