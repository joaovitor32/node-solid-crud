import UsersRepository from "../../repositories/implementations/UsersRepository";
import DeleteUserController from "./DeleteUserController";
import DeleteUserUseCase from "./DeleteUserUseCase";

const postgresUsersRepository = new UsersRepository();

const deleteUserUseCase = new DeleteUserUseCase(postgresUsersRepository);

const deleteUserController = new DeleteUserController(deleteUserUseCase);

export { deleteUserUseCase, deleteUserController };
