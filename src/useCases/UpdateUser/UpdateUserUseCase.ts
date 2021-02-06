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
        
        const usersAlreadyExists = await this.usersRepository.read(data.id);

        if(!usersAlreadyExists){
            throw new AppError('Cannot update user that does not exists')
        }

        const response = await this.usersRepository.update(data);

        const user = new User(response,data.id);

    
        return user;

    }

}
