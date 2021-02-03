import {IMailProvider, IMessage} from '../IMailProvider';

export class FakeMailProvider implements IMailProvider{
    
    private messages : IMessage[] =[];

    public async sendMail(message:IMessage):Promise<void>{
        this.messages.push(message)
    }
}