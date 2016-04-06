import aws from './'

const ec2 = new aws.EC2()

export function create(options) {
  return new Promise((resolve, reject) => {
    resolve()

    // ec2.runInstances({
    //   ImageId: options.image,
    //   MaxCount: 1,
    //   MinCount: 1,
    //   InstanceType: 't2.nano',
    // }, (err, data) => {
    //   if (err) return reject(err)
    //   console.log(data.Instances[0])
    //   ec2.createTags({
    //     Resources: [data.Instances[0].InstanceId],
    //     Tags: [{ Key: 'Name', Value: options.name }]
    //   }, (err) => {
    //     if (err) reject(err)
    //     else resolve(data)
    //   })
    // })
  })
}

export function destroy(options) {
  return new Promise((resolve, reject) => {
    resolve()
    // const instanceId = options.returnData.Instances[0].InstanceId
    //
    // ec2.terminateInstances({
    //   InstanceIds: [instanceId],
    // }, (err, data) => {
    //   if (err) reject(err)
    //   else resolve()
    // })
  })
}
