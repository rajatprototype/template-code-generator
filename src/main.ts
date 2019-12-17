#!/usr/bin/env node

import { existsSync } from 'fs'
import cli from './cli'
import routes from './routes'
import utils from './utils'

// Initial setup
if (!existsSync(routes.prefix)) {
  utils.generateDefaultTemplates()
}

// Invoking functions
cli.handle()
