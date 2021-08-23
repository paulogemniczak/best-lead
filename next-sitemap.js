const siteUrl = 'https://best-lead.vercel.app';
module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotTxtOptions: {
    policies: [
      {userAgent: '*', disallow: '/secret'},
      {userAgent: '*', allow: '/'}
    ]
  },
  exclude: ['/secret'],
}
