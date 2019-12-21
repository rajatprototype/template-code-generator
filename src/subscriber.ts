
import actions from './actions'

export default class Subscriber {
  /**
   * Invoking actions
   * @param {String} action
   */
  public constructor(public action: string) {
    this.invoke()
  }

  /**
   * Resolving commands
   * @return {void}
   */
  public invoke(): void {
    switch(this.action) {
      case 'g':
      case 'generate':
        actions.generate()
        break
      case 'u':
      case 'use':
        actions.use()
        break
      case 'l':
      case 'list':
        actions.list()
        break
      case 'r':
      case 'remove':
        actions.remove()
        break
      case 'rename':
        actions.rename()
        break
      case 'view':
        actions.view()
        break
      case 'h':
      case 'help':
        actions.doc.commands()
        break
      case 'v':
      case 'version':
        actions.doc.version()
        break
      default:
        // For quick access
        if (this.action) {
          this.action = 'generate'
          this.invoke()
          return
        }
        actions.doc.commands()
    }
  }
}