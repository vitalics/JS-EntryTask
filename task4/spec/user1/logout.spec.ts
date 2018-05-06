import { SharedMailPage } from '@task/pages';
import { browser } from 'protractor';


describe('logout user1', () => {
    const sharedPageInstance = new SharedMailPage();
    it('click to header', async () => {
        await (await sharedPageInstance.userInteractiveButton).click();
    });
    it('click to logout button', async () => {
        await (await sharedPageInstance.logoutButton).click();
    });
    afterAll(async () => {
        browser.sleep(5000);
    });

    afterEach(async () => {
        await browser.sleep(5000);
    });
});
