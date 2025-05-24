module.exports = {
  i18n: {
    defaultLocale: 'en',
    localeDetection: true,
    locales: ['en', 'ar'],
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  localePath: './translations',
};
