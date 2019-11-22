
import * as path from 'path';

const routes = {

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
   * Command values
   * @type {Getter} rc
   * @return {String}
   */
  get rc(): string {
    return path.join(this.home, '.tcgrc');
  }
};

export default routes;