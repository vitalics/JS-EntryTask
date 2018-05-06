import { by, WebElementPromise, WebElement } from 'protractor';

import { Page } from '@task/pages';
import { page, element, elements } from '../../utils/decorators';
import { SharedMailPage } from './shared.page';

@page('https://mail.yandex.ru#inbox')
export class MailInboxPage extends SharedMailPage {

  @elements(by.css('[href^="#thread/"]'))
  public readonly inboxMails!: Promise<WebElement[]>;

}
