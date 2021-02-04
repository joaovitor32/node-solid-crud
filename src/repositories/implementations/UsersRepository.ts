import {ICreateUserRequestDTO} from '../../useCases/CreateUser/CreateUserDTO';
import {IUsersRepository} from '../IUsersRepository';
import {User} from '../../entities/User';

import db from '../../database/database';

export class UsersRepository implements IUsersRepository{

    db;

    constructor(){
        this.db=db;
    }

    async findByEmail(email:string):Promise<User|undefined>{
      
        let response,user:User;
        await db.connect();
      
        const querySelect = "SELECT * FROM user WHERE id=$1";
        
        response = await db.query(querySelect,[email]);

        await db.end();
        
        user = new User(response.rows[0]);

        return user;

    }

    async save({email,name,password}:ICreateUserRequestDTO):Promise<void>{

        await db.connect();
        let user = new  User({email,name,password});

        const queryInsert = "INSERT INTO user (id,name,email,password) VALUES ($1,$2,$3,$4)"
        
        await db.query(queryInsert,[
            user.id,
            user.name,
            user.email,
            user.password
        ])

        await db.end();
    }

}