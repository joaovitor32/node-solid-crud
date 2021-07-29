import { User } from "../../entities/User";
import AppError from "../../errors/AppError";
import { FakeUsersRepository } from "../../repositories/fakeImplementations/FakeUsersRepository";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

let deleteUserUseCase: DeleteUserUseCase;

let fakeUsersRepository: FakeUsersRepository;

describe("Deleting user", () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();

    deleteUserUseCase = new DeleteUserUseCase(fakeUsersRepository);
  });

  it("Should be not able to delete user", async () => {
    expect(
      deleteUserUseCase.execute({ id: "not-a-valid-id" })
    ).rejects.toBeInstanceOf(AppError);
  });

  it("Should be  able to delete user", async () => {
    const user = new User({
      email: "joaovitor@gmail.com",
      name: "joao vitor",
      userPassword: "teste",
    });

    fakeUsersRepository.save(user);

    expect(deleteUserUseCase.execute({ id: user.id })).resolves.not.toThrow();
  });
});
