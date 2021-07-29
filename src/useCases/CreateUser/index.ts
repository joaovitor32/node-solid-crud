import MailtrapMailProvider from "../../providers/implementations/MailtrapMailProvider";
import UsersRepository from "../../repositories/implementations/UsersRepository";
import CreateUserController from "./CreateUserController";
import CreateUserUseCase from "./CreateUserUseCase";

const mailtrapMailProvider = new MailtrapMailProvider();
const postgresUsersRepository = new UsersRepository();

// Injeção de dependências
const createUserUseCase = new CreateUserUseCase(
  postgresUsersRepository,
  mailtrapMailProvider
);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
