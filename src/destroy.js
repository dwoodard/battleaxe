import _ from 'lodash'
import { removeFromState } from './utils/state'
import cleanup from './cleanup'
import config from './config'

export default function () {
  _.forEach(config.state, (item, key) => {
    removeFromState(key)
  })

  cleanup() // this doesn't clear out the trash correctly
}
