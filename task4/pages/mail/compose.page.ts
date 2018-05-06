import { WebElementPromise, by, WebElement } from 'protractor';

import { SharedMailPage } from './shared.page';
import { page, element } from '../../utils';

@page('https://mail.yandex.ru/#compose')
export class MailComposePage extends SharedMailPage {

    @element(by.css('.mail-Compose-Field-Input [contenteditable="true"]'))
    public readonly toField!: WebElementPromise;

    @element(by.css('[name="subj"]'))
    public readonly subjectField!: WebElementPromise;

    @element(by.css('div.cke_editable'))
    public readonly messageBodyField!: WebElementPromise;

    @element(by.css('[type="submit"]'))
    public readonly sendMailButton!: WebElementPromise;

    @element(by.css('[href="#sent"] .mail-NestedList-Item-Name '))
    public readonly sendedMessageButton!: WebElementPromise;

    @element(by.css('[title="test1.user2@tut.by"]'))
    public readonly suggestionMail!: WebElementPromise;
}
