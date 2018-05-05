import { Locator } from 'protractor';

export class ElementError extends Error {
  public name = 'ElementError';

  public constructor(public locator: Locator) {
    super();
    this.message = `cannot find element with locator ${this.locator.toString}`;
  }
}
