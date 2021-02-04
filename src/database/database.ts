import pg from 'pg'

const client = new pg.Client({
    user:"postgres",
    host:"localhost",
    password:"postgres",
    port:5432
})

export default client;