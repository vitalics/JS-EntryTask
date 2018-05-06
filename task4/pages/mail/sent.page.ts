import { SharedMailPage } from './shared.page';
import { page, element, elements } from '../../utils';
import { by, WebElementPromise, promise, WebElement } from 'protractor';

@page('https://mail.yandex.ru#sent')
export class MailSentPage extends SharedMailPage {
    @elements(by.css('[href^="#message/"]'))
    public readonly messagesList!: Promise<WebElement[]>;
}
