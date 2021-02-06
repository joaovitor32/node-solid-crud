
import { IUsersRepository } from "../IUsersRepository";
import { User } from "../../entities/User";

export class FakeUsersRepository implements IUsersRepository {
  private users: User[] = [];

  async findByEmail(email: string): Promise<User|undefined> {
    const user = await this.users.find(user => user.email === email);

    return user;
  }

  async save(user: User): Promise<User> {
    this.users.push(user);
    return user;
  }

  async read(id:string): Promise<User|undefined> {
    const user = await this.users.find(user => user.id === id);

    return user;
  }

  async delete(id:string): Promise<void> {
    this.users =await this.users.filter(user => user.id !== id);
  }
  
  async update(user:User):Promise<User>{

    let findUserIndex = await this.users.findIndex(elem=>elem.id===user.id);
  
    this.users.forEach((element,index)=>{
        if(element.id === user.id) {
          this.users[index] = new User(user,user.id) ;
        }
    })

    return this.users[findUserIndex];


  }
  

}