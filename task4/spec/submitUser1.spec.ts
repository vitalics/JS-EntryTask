import { resolve } from 'path';

import { browser } from 'protractor';
import { config } from 'dotenv';

import { User } from '@task/types';
import { MailPage } from '../pages/mail.page';

const user1 = config({ path: resolve(process.cwd() + '/environment/user1.creds.env') }).parsed as User;
const user2 = config({ path: resolve(process.cwd() + '/environment/user2.creds.env') }).parsed as User;

if (!user1 || !user2) {
  throw new Error(`cannot find user1 or user2`);
}
console.dir(user1);

const mailPage = new MailPage();

describe(`login user with username ${user1.username} and password ${user1.password}`, () => {
  beforeAll(async () => {
    await mailPage.open();
  });
  it('fill username field', async () => {
    if (!mailPage.userNameInput) {
      throw 'lol';
    }
    await mailPage.userNameInput.sendKeys(user1.username);
    await browser.sleep(4000);
  });
  it('fill password field', async () => {
    if (!mailPage.passwordInput) {
      throw 'lol';
    }
    await mailPage.passwordInput.sendKeys(user1.password);
  });
  it('submit user', async () => {
    if (!mailPage.submitButton) {
      throw 'lol';
    }
    await mailPage.submitButton.click();
  });
  afterAll(async () => {
    await browser.sleep(5000);
  });
});
