const { declare } = require('@babel/helper-plugin-utils')

module.exports = declare((api) => {
  api.assertVersion('^7.0.0')

  return {
    presets: [
      [require('@babel/preset-env'), { useBuiltIns: 'usage', corejs: 3 }],
      require('@babel/preset-react'),
    ],
    plugins: [
      require('@babel/plugin-transform-runtime'),
      require('@babel/plugin-proposal-object-rest-spread'),
      [
        require('babel-plugin-import'),
        {
          libraryName: 'antd',
          style: 'css',
        },
        'antd',
      ],
      [
        require('babel-plugin-import'),
        {
          libraryName: 'react-use',
          camel2DashComponentName: false,
        },
        'react-use',
      ],
      require('@babel/plugin-proposal-class-properties'),
      require('@babel/plugin-proposal-optional-chaining'),
      require('@babel/plugin-proposal-nullish-coalescing-operator'),
    ],
  }
})
