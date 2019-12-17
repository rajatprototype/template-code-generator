/**
 * Template Code Generator(TCG) public npm module
 * written in 2019
 */

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
