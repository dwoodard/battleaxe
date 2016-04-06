module.exports = {
  providers: {
    aws: [
      // {
      //   serviceType: 's3-bucket',
      //   uniqueId: 'BCK1',
      //   name: 'battleaxeTesting3',
      //   acl: 'public-read',
      // },
      {
        uniqueId: 'IST1',
        serviceType: 'ec2-instance',
        name: 'whatup1',
        image: 'ami-08111162',
      },
    ],
    cloudflare: [
      {
        uniqueId: 'REC1',
        serviceType: 'record',
        domain: 'maur.co',
        name: 'ba.maur.co',
        value: '{{ INST1.dnsName }}',
        type: 'CNAME',
        ttl: 1,
      },
    ],
  },
}
