import AppError from '../../errors/AppError';

import { FakeUsersRepository } from '../../repositories/fakeImplementations/FakeUsersRepository';
import { FakeMailProvider } from '../../providers/fakeimplementations/FakeMaileProvider'

import { CreateUserUseCase } from './CreateUserUseCase';

let fakeUsersRepository: FakeUsersRepository;
let fakeMailProvider: FakeMailProvider;

let createUserUseCase: CreateUserUseCase;

describe('Creating user', () => {

    beforeEach(() => {

        fakeUsersRepository=new  FakeUsersRepository();
        fakeMailProvider=new  FakeMailProvider();

        createUserUseCase=new  CreateUserUseCase(fakeUsersRepository,fakeMailProvider);

    })

    it('Should be able to create a new user',async ()=>{


        const user = await createUserUseCase.execute({
            email:"joao@gmail.com",
            name:"Jhon Doe",
            password:"123457"
        })

        expect(user).toHaveProperty('id');


    })


    it('should no be able to create a new user with same email from another', async () => {

        const email ="joaovitormunizlopes@gmail.com";

        await createUserUseCase.execute({
            email:email,
            name:"Jhon Doe",
            password:"123457"
        })

        expect(createUserUseCase.execute({
            email:email,
            name:"Jhasdasdasda",
            password:"1234527"
        })).rejects.toBeInstanceOf(AppError);

    });



})