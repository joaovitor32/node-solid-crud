import { Request, Response } from "express";

import UpdateUserUseCase from "./UpdateUserUseCase";

export default class UpdateUserController {
  constructor(private updateUserUseCase: UpdateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, email, userPassword } = request.body;

    try {
      const user = await this.updateUserUseCase.execute({
        id,
        name,
        email,
        userPassword,
      });

      return response.status(200).send(user);
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error",
      });
    }
  }
}
