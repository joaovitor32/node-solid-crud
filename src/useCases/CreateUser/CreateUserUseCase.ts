import User from "../../entities/User";
import AppError from "../../errors/AppError";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export default class CreateUserUseCase {
  private usersRepository: IUsersRepository;

  private mailProvider: IMailProvider;

  // Injeção de dependências
  constructor(usersRepository: IUsersRepository, mailProvider: IMailProvider) {
    this.usersRepository = usersRepository;
    this.mailProvider = mailProvider;
  }

  async execute(data: ICreateUserRequestDTO): Promise<User> {
    const usersAlreadyExists = await this.usersRepository.findByEmail(
      data.email
    );

    if (usersAlreadyExists) {
      throw new AppError("User already exists");
    }

    const user = new User(data);

    await this.usersRepository.save(user);

    await this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email,
      },
      from: {
        name: "Equipe do meu app",
        email: "equipe@meuapp.com",
      },
      subject: "Seja bem vindo a plataforma",
      body: "<p>Você já pode fazer login na nossa plataforma</p>",
    });

    return user;
  }
}
