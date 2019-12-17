
import { readFileSync, statSync, writeFileSync, unlinkSync } from 'fs'
import { join, parse } from 'path'
import utils from './utils'
import cli from './cli'

const { version } = require("../package.json")

export default {

  /**
   * Command documentation
   * @type {Object} doc
   */
  doc: {
    /**
     * Absolute path
     * @param {String} docname
     * @return {String}
     */
    abspath(docname: string): string {
      return join(__dirname, 'doc', docname.concat('.txt'))
    },

    /**
     * @param {String} docname
     * @return {void}
     */
    print(docname: string): void {
      process.stdout.write(readFileSync(this.abspath(docname), 'UTF-8'))
    }, 

    // App command
    commands(): void {
      this.print('tcg')
    }, 

    // App version
    version(): void {
      process.stdout.write(`\nVersion ${version}\n`)
    }, 
    generate(): void {
      this.print('generate')
    },
    use(): void {
      this.print('use')
    },
    remove(): void {
      this.print('remove')
    }
  },

  /**
   * Generating templates
   * @return {void}
   */
  generate(): void {
    const { files } = cli
    if (files.length) {

      // Flags point to specific origin e.g. tcg g app.js --react
      const flags = (cli.flags.length)? cli.flags: ['_']

      for (const file of cli.files) {
        const { ext } = parse(file)

        // By matching extension
        const availtemp: Array<string> = utils.list
            .filter((temp: string) => (parse(temp).ext === ext)? temp: null)

        if (availtemp.length) {
          // Match the flag value
          const requiredtemp: Array<string> = availtemp
              .filter((item: string) => (flags.includes(parse(item).name))? item: null)

          for (const publishtemp of requiredtemp) {
            // Copying to the current dir
            writeFileSync(`${process.env.PWD}/${file}`, readFileSync(publishtemp), "UTF-8")
          }
        } else {
          process.stdout.write(`Cannot find template with ${utils.errorText(ext)} extension.\n`)
        }
      }
    } else {
      // If file parameter is not supplied
      this.doc.generate()
    }
  },

  /**
   * Add new template
   * @return {void}
   */
  use(): void {
    const { files } = cli
    if (files.length) {
      for (const file of files) {
        const abspath: string = join(process.env.PWD, file)
        utils.add(abspath)
      }
    } else {
      // Command help
      this.doc.use()
    }
  },

  /**
   * Listing all existing templates
   * @return {void}
   */
  list(): void {
    const { list } = utils
    process.stdout.write(`${list.length} Active templates\n\n`)

    for (const item of list) {
      const bdate: Date = new Date(statSync(item).birthtime)
      const { ext, name } = parse(item)
      process.stdout.write(`${bdate.toLocaleString()}\t${utils.cyanText(ext)}\t${utils.magentaText((name === '_')? '-': name)}\n`)
    }
  },

  /**
   * Remove template from storage
   * @return {void}
   */
  remove(): void {
    const { files } = cli

    if (files.length) {

      for (const file of files) {
        // Single template file
        const storagetemp: string = utils.list
              .find((temp: string) => parse(temp).base === file)

        if (storagetemp) {
          // Delete template file
          unlinkSync(storagetemp)
        } else {
          // Err
          process.stdout.write(`Template <${utils.errorText(file)}> not available inside storage\n`)
        }
      }
    } else {
      // Command help
      this.doc.remove()
    }
  }
}