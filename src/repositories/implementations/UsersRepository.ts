import pg from 'pg'
import {ICreateUserRequestDTO} from '../../useCases/CreateUser/CreateUserDTO';
import {IUsersRepository} from '../IUsersRepository';
import {User} from '../../entities/User';

export class UsersRepository implements IUsersRepository{

    config={
        user:"postgres",
        host: "node-solid-crud_db_1",
        database:"simplecrud",
        password:"postgres",
        port:5432
    }

    async findByEmail(email:string):Promise<User|undefined>{
    
        let response;
        let db = new pg.Client(this.config)
        await db.connect();

        const querySelect = 'SELECT * FROM usuariocrud WHERE email=$1';
        
        response = await db.query(querySelect,[email]);

        await db.end();
       
        return response.rows[0];

    }

    async save({email,name,userPassword}:ICreateUserRequestDTO):Promise<void>{
    
        let db = new pg.Client(this.config)
        let user = new  User({email,name,userPassword});
        
        await db.connect();
    
        const queryInsert = "INSERT INTO usuariocrud (id,nome,email,userPassword) VALUES ($1,$2,$3,$4);";

        await db.query(queryInsert,[
            user.id,
            user.name,
            user.email,
            user.userPassword
        ])

        await db.end();
    }

}