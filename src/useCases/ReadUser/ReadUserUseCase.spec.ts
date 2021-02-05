import AppError from '../../errors/AppError';

import { FakeUsersRepository } from '../../repositories/fakeImplementations/FakeUsersRepository';
import { FakeMailProvider } from '../../providers/fakeimplementations/FakeMaileProvider'

import { ReadUserUseCase} from './ReadUserUseCase';
import { CreateUserUseCase} from '../CreateUser/CreateUserUseCase';

let fakeUsersRepository:FakeUsersRepository ;
let fakeMailProvider:FakeMailProvider;

let readUserUseCase:ReadUserUseCase;
let createUserUseCase:CreateUserUseCase;

describe('Reading User',()=>{

    beforeEach(() => {

        fakeUsersRepository = new  FakeUsersRepository()
        fakeMailProvider=new  FakeMailProvider();
        createUserUseCase = new  CreateUserUseCase(fakeUsersRepository,fakeMailProvider);
        readUserUseCase = new  ReadUserUseCase(fakeUsersRepository);

    })

    it('Should be able to read a new user',async ()=>{


        const user = await createUserUseCase.execute({
            email:"joao@gmail.com",
            name:"Jhon Doe",
            userPassword:"123457"
        })

        const userRead = await readUserUseCase.execute(user.id);

        expect(userRead).toEqual({
            id:user.id,
            email:"joao@gmail.com",
            name:"Jhon Doe",
            userPassword:"123457"
        })
        

    })

    it('Should no tbe able to read a new user',async ()=>{
        
        expect(readUserUseCase.execute('not-a-valid-id')).rejects.toBeInstanceOf(AppError)

    })

})