;(async () => {
  await import('reflect-metadata')
  const { Ignitor, prettyPrintError } = await import('@adonisjs/core')
  const { pathToFileURL } = await import('url')
  const path = await import('path')

  const APP_ROOT = pathToFileURL(path.join(__dirname, '../')).href

  const IMPORTER = async (filePath) => {
    if (filePath.startsWith('./') || filePath.startsWith('../')) {
      return import(new URL(filePath, APP_ROOT))
    }
    return import(filePath)
  }

  new Ignitor(APP_ROOT, { importer: IMPORTER })
    .tap((app) => {
      app.booting(async () => {
        await import('#start/env')
      })
      app.listen('SIGTERM', () => app.terminate())
      app.listenIf(app.managedByPm2, 'SIGINT', () => app.terminate())
    })
    .httpServer()
    .start()
    .catch((error) => {
      process.exitCode = 1
      prettyPrintError(error)
    })
})()
