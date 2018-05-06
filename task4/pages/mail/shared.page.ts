import { by, WebElementPromise } from 'protractor';

import { Page } from '@task/pages';
import { page, element, elements } from '../../utils';

@page('https://mail.yandex.ru')
export class SharedMailPage extends Page {

    @element(by.css('.mail-ComposeButton[href="#compose"]'))
    public readonly writeMessageButton!: WebElementPromise;

    @element(by.css('[href="#inbox"]'))
    public readonly inboxButton!: WebElementPromise;

    @element(by.css('[href="#sent"]'))
    public readonly sentButton!: WebElementPromise;

    @element(by.css('[href="#trash"]'))
    public readonly trashButton!: WebElementPromise;

    @element(by.css('[href="#spam"]'))
    public readonly spamButton!: WebElementPromise;

    @element(by.css('[href="#draft"]'))
    public readonly draftButton!: WebElementPromise;

    @element(by.css('.ns-view-head-user.mail-User'))
    public readonly userInteractiveButton!: WebElementPromise;

    @element(by.css('._nb-popup-content .b-user-dropdown-content'))
    public readonly userPopupMenu!: WebElementPromise;

    @element(by.css('[data-metric^="Выход"]'))
    public readonly logoutButton!: WebElementPromise;

    public async getCountOfSendedMessages(): Promise<number> {
        const regexDigit = /\d+/g;

        const title = await (await this.sentButton).getAttribute('title');
        const matchedIndex = title.search(regexDigit);
        const numberOfSendedMessages = parseInt(title[matchedIndex], 10);
        return numberOfSendedMessages;
    }
}
