import { browser, promise, until } from 'protractor';

export abstract class Page {
  [name: string]: any;

  public async open(url?: string | undefined): Promise<any> {
    const metaUrl = Reflect.getOwnMetadata('url', this.constructor);
    return await browser.get(metaUrl || url || browser.baseUrl);
  }

  public async isLoaded(): Promise<boolean> {
    if (browser.wait(until.elementIsVisible(browser.element('body')))) {
      return true;
    } else {
      return false;
    }
  }
}
