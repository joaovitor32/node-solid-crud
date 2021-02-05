CREATE USER $POSTGRES_USER;
CREATE DATABASE $POSTGRES_DB;
CREATE TABLE usuariocrud(
    id VARCHAR(200) ,
    nome VARCHAR (50) ,
    email VARCHAR (50) ,
    userPassword VARCHAR (50) 
);
GRANT ALL PRIVILEGES ON DATABASE $POSTGRES_DB TO $POSTGRES_USER;
