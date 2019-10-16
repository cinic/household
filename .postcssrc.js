module.exports = {
  modules: true,
  plugins: {
    'postcss-mixins': {
      mixinsFiles: './src/ui/mixins.css'
    },
    'postcss-preset-env': {
      preserve: false,
      importFrom: ['./src/ui/theme.css'],
      features: {
        'nesting-rules': true
      }
    }
  }
}