import { Locator, browser } from 'protractor';
import { Page } from '@task/pages';

export function elements(locator: Locator): any {
  return function<TPage extends Page>(target: TPage, propertyKey: string): any {
    Object.defineProperty(target, propertyKey, {
      value: browser.findElements(locator)
    });
    return browser.findElements(locator);
  };
}
