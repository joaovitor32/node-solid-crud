import { IMailProvider, IMessage } from "../IMailProvider";

export default class FakeMailProvider implements IMailProvider {
  private messages: IMessage[] = [];

  public async sendMail(message: IMessage): Promise<void> {
    this.messages.push(message);
  }
}
