import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '67z7k6f2',
    dataset: 'production'
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
})
