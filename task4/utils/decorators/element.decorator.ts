import { Locator, browser } from 'protractor';
import { Page } from '@task/pages';

export function element(locator: Locator): any {
  return function<TPage extends Page>(target: TPage, propertyKey: string): any {
    const findedElement = browser.findElement(locator);
    Object.defineProperty(target, propertyKey, {
      value: findedElement
    });
    return findedElement;
  };
}
