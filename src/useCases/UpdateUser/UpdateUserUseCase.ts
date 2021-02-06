import {User} from '../../entities/User';
import AppError from '../../errors/AppError';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import { IUpdateUserDTO } from './UpdateUserDTO';

export class UpdateUserUseCase{

    private usersRepository:IUsersRepository;

    //Injeção de dependências
    constructor(usersRepository:IUsersRepository){
        
        this.usersRepository = usersRepository;

    }
    
    async execute(data:IUpdateUserDTO ){
    
        const response = await this.usersRepository.update(data);

        if(!response){
            throw new AppError('Was not possible to update user')
        }

        const user = new User(response,data.id);
    
        return user;

    }

}
