import {UsersRepository} from '../../repositories/implementations/UsersRepository';
import { ReadUserController } from './ReadUserController';
import { ReadUserUseCase } from './ReadUserUseCase';


const postgresUsersRepository = new UsersRepository()

//Injeção de dependências
const readUserUseCase = new ReadUserUseCase(
    postgresUsersRepository,
)

const readUserController = new ReadUserController(readUserUseCase)

export {readUserUseCase,readUserController}