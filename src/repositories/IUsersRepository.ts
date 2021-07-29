import { User } from "../entities/User";

export interface IUsersRepository {
  findByEmail(email: string): Promise<User | undefined>;
  save(user: User): Promise<User>;
  read(id: string): Promise<User | undefined>;
  delete(id: string): Promise<void>;
  update(user: User): Promise<User>;
}
