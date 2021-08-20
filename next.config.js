const withPWA = require('next-pwa');
const isProd = process.env.NODE_ENV === 'production';
module.exports = withPWA({
    reactStrictMode: false,
    pwa: {
        dest: 'public',
        disable: !isProd
    }
});

