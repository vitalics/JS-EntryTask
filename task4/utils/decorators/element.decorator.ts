import 'reflect-metadata';

import { Locator, browser, WebElementPromise, WebElement, promise } from 'protractor';
import { Page } from '@task/pages';

export function element(locator: Locator, timeout: number = 500): any {
  return function <TPage extends Page>(target: TPage, propertyKey: string): any {
    Reflect.defineProperty(target, propertyKey, {
      get: function (): promise.Promise<WebElement> {
        const elem = browser.sleep(timeout).then(() => browser.findElement(locator));
        return elem;
      }
    });
  };
}
