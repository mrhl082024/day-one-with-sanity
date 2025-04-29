import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {structure} from "./structure"



export default defineConfig({
  name: 'default',
  title: 'Day one with Sanity',

  projectId: 'zb7sj3m7',
  dataset: 'production',

  plugins: [structureTool({structure}), structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
