/* eslint-disable @typescript-eslint/no-var-requires */
import pg from "pg";

import User from "../../entities/User";
import { ICreateUserRequestDTO } from "../../useCases/CreateUser/CreateUserDTO";
import { IUpdateUserDTO } from "../../useCases/UpdateUser/UpdateUserDTO";
import { IUsersRepository } from "../IUsersRepository";

require("dotenv").config();

export default class UsersRepository implements IUsersRepository {
  config = {
    user: process.env.user || "postgres",
    host: process.env.host || "node-solid-crud_db_1",
    database: process.env.database || "simplecrud",
    password: process.env.password || "postgres",
    port: process.env.portDB ? parseInt(process.env.portDB, 10) : 5432,
  };

  async findByEmail(email: string): Promise<User | undefined> {
    const db = new pg.Client(this.config);
    await db.connect();

    const querySelect = "SELECT * FROM usuariocrud WHERE email=$1";

    const response = await db.query(querySelect, [email]);

    await db.end();

    return response.rows[0];
  }

  async save({
    email,
    name,
    userPassword,
  }: ICreateUserRequestDTO): Promise<User> {
    const db = new pg.Client(this.config);
    const user = new User({ email, name, userPassword });

    await db.connect();

    const queryInsert =
      "INSERT INTO usuariocrud (id,nome,email,userPassword) VALUES ($1,$2,$3,$4) RETURNING * ;";

    const response = await db.query(queryInsert, [
      user.id,
      user.name,
      user.email,
      user.userPassword,
    ]);

    await db.end();

    return response.rows[0];
  }

  async read(id: string): Promise<User | undefined> {
    const db = new pg.Client(this.config);

    await db.connect();

    const query = "SELECT * FROM usuariocrud WHERE id=$1";

    const response = await db.query(query, [id]);

    await db.end();

    return response.rows[0];
  }

  async delete(id: string): Promise<void> {
    const db = new pg.Client(this.config);

    await db.connect();

    const query = "DELETE FROM usuariocrud WHERE id=$1";

    await db.query(query, [id]);

    await db.end();
  }

  async update({
    id,
    email,
    name,
    userPassword,
  }: IUpdateUserDTO): Promise<User> {
    const db = new pg.Client(this.config);

    await db.connect();

    const query =
      "UPDATE usuariocrud SET nome=$1, email=$2, userPassword=$3 WHERE id=$4 RETURNING *";

    const response = await db.query(query, [name, email, userPassword, id]);

    await db.end();

    return response.rows[0];
  }
}
