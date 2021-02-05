import { Router } from "express";
import { createUserController } from "./useCases/CreateUser";
import { readUserController } from "./useCases/ReadUser";
import { deleteUserController } from "./useCases/DeleteUser";
import { updateUserController } from "./useCases/UpdateUser";

const router = Router()

router.post('/users', (request, response) => {
  return createUserController.handle(request, response);
});

router.get('/:id', (request, response) => {
  return readUserController.handle(request, response);
});

router.delete('/:id', (request, response) => {
  return deleteUserController.handle(request, response);
});

router.patch('/:id', (request, response) => {
  return updateUserController.handle(request, response);
});

export { router }