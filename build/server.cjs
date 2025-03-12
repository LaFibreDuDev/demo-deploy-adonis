import('./build/ace.js')
  .then(({ default: ace }) => ace())
  .catch((err) => {
    console.error('Failed to run Ace CLI:', err)
    process.exit(1)
  })
