import { MailInboxPage } from '@task/pages';
import { browser } from 'protractor';
import { expect } from 'chai';
import { User } from '@task/types';
import { config } from 'dotenv';
import { resolve } from 'path';

const user1 = config({ path: resolve(process.cwd() + '/environment/user1.creds.env') }).parsed as User;

describe('check inbox messages', () => {
    const mailInboxPageInstance = new MailInboxPage();
    beforeAll(async () => {
        mailInboxPageInstance.open();
    });
    it(`should be new message from ${user1.username}`, async () => {
        const firstMail = (await mailInboxPageInstance.inboxMails)[0];
        if (firstMail.isElementPresent('[title="test1.user1@tut.by"]')) {
            const senderName = await firstMail.findElement('[title="test1.user1@tut.by"]').getCssValue('title');
            const fullSenderName = `${senderName}@tut.by`;
            expect(fullSenderName).to.be.equal(user1.username);
        }
    });

});
