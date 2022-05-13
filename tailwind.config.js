const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  theme: {},
  variants: {},
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.4xl')},
        'h2': { fontSize: theme('fontSize.2xl')},
        'h3': { fontSize: theme('fontSize.xl')},
        'h4': { fontSize: theme('fontSize.lg')},
        'h5': { fontSize: theme('fontSize.md')},
        'h6': { fontSize: theme('fontSize.sm')},
      })
    })
  ]
}
