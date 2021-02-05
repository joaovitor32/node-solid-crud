import AppError from '../../errors/AppError';

import { FakeUsersRepository } from '../../repositories/fakeImplementations/FakeUsersRepository';
import { FakeMailProvider } from '../../providers/fakeimplementations/FakeMaileProvider'

import { DeleteUserUseCase } from './DeleteUserUseCase';
import { CreateUserUseCase} from '../CreateUser/CreateUserUseCase';

let deleteUserUseCase:DeleteUserUseCase;
let createUserUseCase:CreateUserUseCase;

let fakeUsersRepository:FakeUsersRepository;
let fakeMailProvider:FakeMailProvider;

describe('Deleting user',()=>{

    beforeEach(()=>{

        fakeUsersRepository = new  FakeUsersRepository();
        fakeMailProvider = new  FakeMailProvider();

        createUserUseCase = new  CreateUserUseCase(fakeUsersRepository,fakeMailProvider);
        deleteUserUseCase = new  DeleteUserUseCase(fakeUsersRepository);

    })

    it('Should be able to delete user',async ()=>{


    })

})