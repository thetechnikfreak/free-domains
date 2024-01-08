addSubDomain({
  description: '...', // describe your project in this field
  domain: 'is-an.app', // aka "root-domain". select between '1bt.uk' and 'is-an.app'
  subdomain: 'schulsani', // desired subdomain name
  owner: {
    repo: '<https://github.com/schulsani>',
    email: 'info@thetechnikfreak.is-a.dev',
  },
  record: {
    //CNAME: '<cname-domain>', // e.g.: <your-github-account>.github.io
    TXT: ['h31ec4275e1ef4b55a7bc23c810e6eb07'],
    //A: ['list', 'of', 'IPv4', 'addresses', 'like', 'a', '127.0.0.1'],
    //AAAA: ['list', 'of', 'IPv6', 'addresses', 'like', 'a', '::1'],
    NS: ['freedns1.registrar-servers.com', 'freedns2.registrar-servers.com', 'freedns3.registrar-servers.com', 'freedns4.registrar-servers.com', 'freedns5.registrar-servers.com'],
  },
  //proxy: false, // disable Cloudflare proxy (with is enabled by default). In this case, your origin server
                  // should provide valid a SSL certificate and protection CF will be disabled
  // nested: [{ // in addition, you may define the required nested subdomains
  //   subdomain: 'foo',
  //   record: {
  //     CNAME: '...',
  //   },
  //   proxy: false,
  // }, {
  //   subdomain: 'bar',
  //   record: {
  //     A: ['...'],
  //   },
  //   proxy: true,
  // }]
})
