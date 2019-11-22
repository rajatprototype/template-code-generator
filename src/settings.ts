
import routes from './routes'
import * as fs from 'fs'

interface AppConfigVar {
  import?(): Map<string, string>
  prefix: string
  extension: string
}

const settings: AppConfigVar = {
  /**
   * Return app command settings
   * @param {String} rcpath
   * @return {Map<String, String>}
   */
  import(rcpath: string = routes.rc): Map<string, string> {
    if (fs.existsSync(rcpath)) {
      const context: string[][] = fs.readFileSync(rcpath, "UTF-8")
            .split(/\n/)
            .map(val => val.split(/=/))
      const iter: Map<string, string> = new Map()

      context.map(item => iter.set(item[0], item[1]))

      return iter
    } else {
      throw(`Unable to find ${rcpath} file.`)
    }
  },
  
  /**
   * Prefix path
   * @type {Getter} 
   * @return {String}
   */
  get prefix(): string {
    return this.import().get('prefix')
  },

  /**
   * Default template extension
   * @type {Getter}
   * @return {String}
   */
  get extension(): string {
    return this.import().get('ext')
  }
};

export default settings;