
import { IUsersRepository } from "../IUsersRepository";
import { User } from "../../entities/User";

export class FakeUsersRepository implements IUsersRepository {
  private users: User[] = [];

  async findByEmail(email: string): Promise<User|undefined> {
    const user = this.users.find(user => user.email === email);

    return user;
  }

  async save(user: User): Promise<void> {
    this.users.push(user);
  }

  async read(id:string): Promise<User|undefined> {
    const user = this.users.find(user => user.id === id);

    return user;
  }

  async delete(id:string): Promise<void> {
    this.users=this.users.filter(user => user.id !== id);
  }

}