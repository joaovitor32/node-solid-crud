import pg from 'pg'
import {ICreateUserRequestDTO} from '../../useCases/CreateUser/CreateUserDTO';
import {IUsersRepository} from '../IUsersRepository';
import {User} from '../../entities/User';
import { IReadUserRequestDTO } from '../../useCases/ReadUser/ReadUserDTO';
import { IDeleteUserDTO } from '../../useCases/DeleteUser/DeleteUserDTO';
import { IUpdateUserDTO } from '../../useCases/UpdateUser/UpdateUserDTO';

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
        
        console.log(user.id)
        await db.end();
    }

    async read(id:string):Promise<User|undefined>{
    
        const db = new pg.Client(this.config)
        let response;

        await db.connect();

        const query = "SELECT * FROM usuariocrud WHERE id=$1";

        response = await db.query(query,[id]);
    
        await db.end()

        return response.rows[0];

    }

    async delete(id:string):Promise<void>{

        const db = new pg.Client(this.config);

        await db.connect();

        const query = "DELETE FROM usuariocrud WHERE id=$1";

        await db.query(query,[id]);

        await db.end();

    }

    async update({id,email,name,userPassword}:IUpdateUserDTO):Promise<User>{
    
        const db = new pg.Client(this.config);

        await db.connect();

        const query = "UPDATE usuariocrud SET nome=$1, email=$2, userPassword=$3 WHERE id=$4";

        const response = await db.query(query,[name,email,userPassword,id]);
    
        await db.end();
       
        return response.rows[0];

    }

}