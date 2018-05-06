import { resolve } from 'path';
import { config } from 'dotenv';
import { User } from '@task/types';
import { browser } from 'protractor';
import { expect } from 'chai';

import { MailComposePage, MailInboxPage, MailSentPage } from '@task/pages';

const user2 = config({ path: resolve(process.cwd() + '/environment/user2.creds.env') }).parsed as User;

let countOfMessages: number;

describe('write message user2', () => {
  const mailComposeInstance: MailComposePage = new MailComposePage();

  afterEach(async () => {
    await browser.sleep(5000);
  });

  it('navigate to compose', async () => {
    countOfMessages = await mailComposeInstance.getCountOfSendedMessages();
    await (await mailComposeInstance.writeMessageButton).click();
    await mailComposeInstance.open();
  });

  it('fill "To" field', async () => {
    await (await mailComposeInstance.toField).sendKeys(`${user2.username}@tut.by`);
  });

  it('fill "Subject" field', async () => {
    await (await mailComposeInstance.subjectField).sendKeys('test subject');
  });

  it('fill "Message body" field', async () => {
    await (await mailComposeInstance.messageBodyField).sendKeys('test message body');
  });

  it('click "Отправить" button', async () => {
    await (await mailComposeInstance.sendMailButton).click();
  });

  afterAll(async () => {
    browser.sleep(5000);
    const newCountOfMessages = await mailComposeInstance.getCountOfSendedMessages();
    expect(newCountOfMessages, 'Message is sended').to.be.greaterThan(countOfMessages);
  });
});
