import { Locator, browser, WebElement, promise } from 'protractor';
import { Page } from '@task/pages';

export function elements(locator: Locator): any {
  return function <TPage extends Page>(target: TPage, propertyKey: string): any {
    Reflect.defineProperty(target, propertyKey, {
      get: async function (): Promise<WebElement[]> {
        return await browser.findElements(locator);
      }
    });
  };
}
