import { resolve } from 'path';

import { browser } from 'protractor';
import { config } from 'dotenv';

import { User } from '@task/types';
import { MailPage } from '../../pages/mail.page';

const user1 = config({ path: resolve(process.cwd() + '/environment/user1.creds.env') }).parsed as User;

describe(`login user with username ${user1.username} and password ${user1.password}`, () => {
  const mailPageInstance = new MailPage();
  beforeAll(async () => {
    await mailPageInstance.open();
  });
  it('fill username field', async () => {
    await (await mailPageInstance.userNameInput).sendKeys(user1.username);
  });
  it('fill password field', async () => {
    await (await mailPageInstance.passwordInput).sendKeys(user1.password);
  });
  it('submit user', async () => {
    await (await mailPageInstance.submitButton).click();
  });
  afterAll(async () => {
    browser.sleep(5000);
  });
});
