import { Request, Response } from "express";

import ReadUserUseCase from "./ReadUserUseCase";

export default class ReadUserController {
  constructor(private readUserUseCase: ReadUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      const user = await this.readUserUseCase.execute(id);

      return response.status(200).send(user);
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error",
      });
    }
  }
}
