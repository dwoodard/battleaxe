import { config } from '../config'
import { log } from '../utils/emit'

export default function () {
  log('hello')
  console.log(config)
}
