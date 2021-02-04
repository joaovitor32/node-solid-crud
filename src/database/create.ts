import db from './database';
import AppError from '../errors/AppError';

const createTables = async ()=>{
    
    await db.connect();

    try {

        await db.query(`CREATE TABLE user{

            id text,
            nome VARCHAR (50) UNIQUE NOT NULL,
            email VARCHAR (50) UNIQUE NOT NULL,
            password VARCHAR (50) UNIQUE NOT NULL

        }`)

    }catch(err){

        throw new AppError(err.message);

    }
    
    await db.end();
}

export default createTables;