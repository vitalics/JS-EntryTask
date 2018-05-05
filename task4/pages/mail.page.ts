import { Page } from './abstract.page';
import { ElementFinder, browser, by, Locator, WebElement, WebElementPromise } from 'protractor';
import { page, element } from '../utils/decorators';

@page('https://mail.tut.by/')
export class MailPage extends Page {
  @element(by.css('#Username'))
  public userNameInput: WebElementPromise | undefined;
  @element(by.css('#Password'))
  public passwordInput: WebElementPromise | undefined;
  @element(by.css('.loginButton'))
  public submitButton: WebElementPromise | undefined;

  constructor() {
    super();
  }
}
