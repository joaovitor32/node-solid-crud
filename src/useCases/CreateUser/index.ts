import { MailtrapMailProvider} from '../../providers/implementations/MailtrapMailProvider'
import {PostgresUsersRepository} from '../../repositories/implementations/UsersRepository';
import { CreateUserController } from './CreateUserController';
import { CreateUserUseCase } from './CreateUserUseCase';

const mailtrapMailProvider = new MailtrapMailProvider();
const postgresUsersRepository = new PostgresUsersRepository()

//Injeção de dependências
const createUserUseCase = new CreateUserUseCase(
    postgresUsersRepository,
    mailtrapMailProvider
)

const createUserController = new CreateUserController(createUserUseCase)

export {createUserUseCase,createUserController}