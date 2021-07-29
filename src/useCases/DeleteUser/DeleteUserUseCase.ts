import AppError from "../../errors/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IDeleteUserDTO } from "./DeleteUserDTO";

export default class DeleteUserUseCase {
  private usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute({ id }: IDeleteUserDTO): Promise<void> {
    const userExists = await this.usersRepository.read(id);

    if (!userExists) {
      throw new AppError("User does not exists");
    }

    await this.usersRepository.delete(id);
  }
}
