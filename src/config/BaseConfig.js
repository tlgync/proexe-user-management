export const BaseConfig = {
  config: {
    /**
     * [GENERAL]
     */
    // eslint-disable-next-line func-names, prefer-arrow-callback, no-unused-vars
    debug: /param/.test(function (param) { }),
  },
  api: {
    release: {
      user: 'https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data',
    },
    debug: {
      user: 'https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data',
    },
    user: url => (BaseConfig.config.debug ? BaseConfig.api.debug.user.concat(url) : BaseConfig.api.release.user.concat(url)),
  },
  service: {
    user: {},
  },
};
