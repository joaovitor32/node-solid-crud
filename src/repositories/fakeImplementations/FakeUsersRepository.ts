import User from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

export default class FakeUsersRepository implements IUsersRepository {
  private users: User[] = [];

  async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.users.find((userElem) => userElem.email === email);

    return user;
  }

  async save(user: User): Promise<User> {
    this.users.push(user);
    return user;
  }

  async read(id: string): Promise<User | undefined> {
    const user = await this.users.find((userElem) => userElem.id === id);

    return user;
  }

  async delete(id: string): Promise<void> {
    this.users = await this.users.filter((userElem) => userElem.id !== id);
  }

  async update(user: User): Promise<User> {
    const findUserIndex = await this.users.findIndex(
      (elem) => elem.id === user.id
    );

    this.users.forEach((element, index) => {
      if (element.id === user.id) {
        this.users[index] = new User(user, user.id);
      }
    });

    return this.users[findUserIndex];
  }
}
