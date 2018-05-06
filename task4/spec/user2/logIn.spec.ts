import { config } from 'dotenv';
import { resolve } from 'path';
import { User } from '@task/types';
import { MailPage } from '@task/pages';
import { browser } from 'protractor';

const user2 = config({ path: resolve(process.cwd() + '/environment/user2.creds.env') }).parsed as User;


describe('log in to user2', () => {
    const mailPageInstance = new MailPage();
    beforeAll(async () => {
        await mailPageInstance.open();
    });

    afterEach(async () => {
        await browser.sleep(5000);
    });

    it('fill login', async () => {
        await mailPageInstance.userNameInput.sendKeys(user2.username);
    });

    it('fill password', async () => {
        await mailPageInstance.passwordInput.sendKeys(user2.password);
    });

    it('click login button', async () => {
        await mailPageInstance.submitButton.click();
    });
});
