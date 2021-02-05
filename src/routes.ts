import { Router } from "express";
import { createUserController } from "./useCases/CreateUser";
import { readUserController } from "./useCases/ReadUser";

const router = Router()

router.post('/users', (request, response) => {
  return createUserController.handle(request, response);
});

router.get('/:id', (request, response) => {
  return readUserController.handle(request, response);
});

export { router }