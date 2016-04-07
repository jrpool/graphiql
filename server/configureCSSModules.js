import path from 'path'
import genericNames from 'generic-names'

export default function configureCSSModules() {
  const hook = require('css-modules-require-hook')
  const sass = require('node-sass')
  hook({
    extensions: ['.css', '.scss'],
    generateScopedName: (name, filepath) => {
      // there are some names that we don't want scoped, like the graphiql CSS
      // see the webpack configuration for more details
      const dontGenerate = /node_modules\/graphiql/
      if (filepath.match(dontGenerate)) {
        return name
      }

      const generateScopedName = genericNames('[name]__[local]__[hash:base64:5]', {context: path.join(__dirname, '..')})
      return generateScopedName(name, filepath)
    },
    preprocessCss: (css, file) => {
      const includePaths = [path.join(__dirname, '..'), path.dirname(file)]
      const result = sass.renderSync({
        data: css,
        includePaths,
      })
      return result.css
    },
  })
}
