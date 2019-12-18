
import { join } from 'path';

export default {

  module: {

    /**
     * Default template dir path
     * @type {Getter} defaultDefaultTemplateDir
     * @return {String}
     */
    get defaultTemplateDir(): string {
      return join(__dirname, "defaults/codes")
    }
  },

  /**
   * User home dir
   * @type {Getter} home
   * @return {String}
   */
  get home(): string {
    return process.env.HOME;
  },

  /**
   * Working dir
   * @type {Getter} pwd
   * @return {String}
   */
  get pwd(): string {
    return process.env.PWD;
  },

  /**
   * Prefix path
   * @type {Getter} 
   * @return {String}
   */
  get prefix(): string {
    return join(this.home, ".tcg")
  }
}