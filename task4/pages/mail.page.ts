import { Page } from './abstract.page';
import { ElementFinder, browser, by, Locator, WebElement, WebElementPromise } from 'protractor';
import { page, element } from '../utils/decorators';

@page('https://mail.tut.by/')
export class MailPage extends Page {
  @element(by.css('#Username'))
  public readonly userNameInput!: WebElementPromise;
  @element(by.css('#Password'))
  public readonly passwordInput!: WebElementPromise;
  @element(by.css('.loginButton'))
  public readonly submitButton!: WebElementPromise;

  constructor() {
    super();
  }
}
