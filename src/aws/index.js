import aws from 'aws-sdk'
import config from '../config'

aws.config.update({
  accessKeyId: config.keys.aws.accessKey,
  secretAccessKey: config.keys.aws.secretAccessKey,
  region: config.keys.aws.region,
})

export default aws
