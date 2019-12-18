
import { extname } from 'path'
import Subscriber from './subscriber'

export default {

  /**
   * CLI arguments
   * @type {Getter} args
   * @return {Array<string>}
   */
  get args(): Array<string> {
    return process.argv.slice(2)
  }, 

  /**
   * Must be second parameter
   * @type {Getter} action
   * @return {String}
   */
  get action(): string {
    return this.args[0]
  },

  /**
   * Filtering items started with dot character
   * @type {Getter} extensions
   * @return {Array<string>}
   */ 
  get extensions(): Array<string> {
    return this.args
        .filter((arg: string) => /\.\w\w*$/.test(arg))
        .map((file: string) => extname(file))
  }, 

  /**
   * Flag options
   * @type {Getter} flags
   * @return {Array<string>}
   */
  get flags(): Array<string> {
    return this.args
          .filter((arg: string) => /\-\-[\w-_]*$/.test(arg))
          .map((opt: string) => opt.substr(2))
  },

  /**
   * Argumented flles
   * @type {Getter} files
   * @return {Array<string>}
   */
  get files(): Array<string> {
    return this.args.filter((arg: string) => /^[\w,-]+\.[A-Za-z]/.test(arg))
  }, 

  /**
   * Invoking subscribers
   * @return {Subscriber}
   */
  handle(): Object { 
    return new Subscriber(this.action)
  }
}