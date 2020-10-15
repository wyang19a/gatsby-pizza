var plugins = [{
      plugin: require('/Users/wootaeyang/dev/master-gatsby/working/gatsby/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/wootaeyang/dev/master-gatsby/working/gatsby/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/wootaeyang/dev/master-gatsby/working/gatsby/node_modules/gatsby-source-sanity/gatsby-ssr'),
      options: {"plugins":[],"projectId":"czf7udhy","dataset":"production","watchMode":true,"token":"skq8s4WLhzBy5dxSH3Wq44M1Il5HWSaXwmdp9y6KHZYwygrbYdrc5BekVoNWXWG5ifCI6hOIaNdt6uRfz8zELz5nJnHZI550fx7HBwiMSpgvWxAjWimU6uB7qVTz5ITwjQYrdqsOqwYTxwTlm4ACXS9ZSO0T1YUVnEcXMGAVr9FrArw2rNwe"},
    },{
      plugin: require('/Users/wootaeyang/dev/master-gatsby/working/gatsby/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
