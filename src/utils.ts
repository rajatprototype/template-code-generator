
import { readdirSync, copyFileSync, existsSync, mkdirSync } from 'fs'
import routes from './routes'
import { join, basename } from 'path'

const { prefix } = routes

export default {
  /**
   * Template list
   * @type {Getter} list
   * @return {Array<string>}
   */
  get list(): Array<string> {
    if (existsSync(prefix)) {
      return readdirSync(prefix, "utf-8")
        .map(file => join(prefix, file)) // Abs path
    }
    throw(`Cannot find storage path: ${prefix}`)
  },

  /**
   * Add new template to storage 
   * @param {String} path
   * @return {String}
   */
  add(path: string): string {
    if (existsSync(path)) {
      const absdest: string = join(prefix, basename(path))

      if (!existsSync(absdest)) {
        // Copying dest path to prefix path
        copyFileSync(path, absdest)
        return absdest
      } else {
        // Err
        process.stdout.write(`Template <${this.errorText(basename(absdest))}> already exists in records\n`)
      }
    } else {
      // Err 
      process.stdout.write(`Cannot find <${this.errorText(basename(path))}> base file\n`)
    }
    return null
  },

  /**
   * Generate default template
   * @return {void}
   */
  generateDefaultTemplates(): void {
    const { defaultTemplateDir: deftempdir } = routes.module

    // Generate DIR
    mkdirSync(prefix)

    for(const tempfile of readdirSync(deftempdir)) {
      const srcpath: string = join(deftempdir, tempfile) // Inside module
      const destpath: string = join(routes.prefix, tempfile) // Refer to home dir
      copyFileSync(srcpath, destpath)
    }
  },

  /**
   * For bright and red colored text
   * @param {String} text
   * @return {String}
   */
  errorText(text: string): string {
    return (`\u001B[31m\u001B[1m${text}\x1b[0m\x1b[0m`)
  }, 

  /**
   * For bright cyan colored text
   * @param {String} text
   * @return {String}
   */
  cyanText(text: string): string {
    return (`\u001B[36m\u001B[1m${text}\x1b[0m\x1b[0m`)
  }, 

  /**
   * For magenta colored text
   * @param {String} text
   * @return {String}
   */
  magentaText(text: string): string {
    return (`\u001B[35m${text}\x1b[0m`)
  }
}