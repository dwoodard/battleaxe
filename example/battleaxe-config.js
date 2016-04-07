module.exports = {
  providers: {
    aws: [
      // {
      //   serviceType: 's3-bucket',
      //   battleaxeId: 'BCK1',
      //   name: '{{ IST1.instanceId }}',
      //   acl: 'public-read'
      // },

      // {
      //   battleaxeId: 'IST1',
      //   serviceType: 'ec2-instance',
      //   name: 'whatup1',
      //   image: 'ami-08111162'
      // }
    ],
    cloudflare: [
      {
        battleaxeId: 'REC1',
        serviceType: 'record',
        domain: 'maur.co',
        name: 'ba.maur.co',
        value: '{{ INST1.dnsName }}',
        type: 'CNAME',
        ttl: 1
      }
    ]
  }
}
