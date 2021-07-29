import UsersRepository from "../../repositories/implementations/UsersRepository";
import UpdateUserController from "./UpdateUserController";
import UpdateUserUseCase from "./UpdateUserUseCase";

const postgresUsersRepository = new UsersRepository();

// Injeção de dependências
const updateUserUseCase = new UpdateUserUseCase(postgresUsersRepository);

const updateUserController = new UpdateUserController(updateUserUseCase);

export { updateUserUseCase, updateUserController };
