
import * as path from 'path'

const supportedActions: Array<string> = require("./values/supportedActions.json")

const cli = {

  /**
   * CLI arguments
   * @type {Getter} args
   * @return {Array<string>}
   */
  get args(): Array<string> {
    return process.argv.slice(2)
  }, 

  /**
   * Return second argument if they Supported by app
   * @type {Getter} action
   * @return {String}
   */
  get action(): string {
    return supportedActions.find((act: string) => act === this.args[0] || null)
  },

  /**
   * Filtering items started with dot character
   * @type {Getter} extensions
   * @return {Array<string>}
   */
  get extensions(): Array<string> {
    return this.args
        .filter((arg: string) => /\.\w\w*$/.test(arg))
        .map((file: string) => path.extname(file))
  }, 

  get files(): Array<string> {
    return this.args.filter((arg: string) => /^[\w,-]+\.[A-Za-z]/.test(arg))
  }
}

export default cli