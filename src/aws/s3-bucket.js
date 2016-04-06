import { requiredValues } from '../utils/common'
import aws from './index'

const s3 = new aws.S3()

export function create(options) {
  return new Promise((resolve, reject) => {
    requiredValues(options, 's3Bucket', ['name'])
    options.acl = options.acl || 'private'

    s3.createBucket({
      Bucket: options.name,
      ACL: options.acl,
    }, (err, data) => {
      if (err) reject(err)
      else resolve(data)
    })
  })
}

export function destroy(options) {
  return new Promise((resolve, reject) => {
    if (!options.name) return resolve()

    s3.deleteBucket({
      Bucket: options.name,
    }, (err, data) => {
      if (err) reject(err)
      else resolve()
    })
  })
}
