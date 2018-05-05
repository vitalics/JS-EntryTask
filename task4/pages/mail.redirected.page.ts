import { by, WebElementPromise } from 'protractor';

import { Page } from '@task/pages';
import { page, element } from '../utils/decorators';

@page('https://mail.yandex.ru')
export class RedirectedMailPage extends Page {
  @element(by.css('[href="#compose"]'))
  public writeMessageButton: WebElementPromise | undefined;
  @element(by.css('[name]=to'))
  public toField: WebElementPromise | undefined;
}
