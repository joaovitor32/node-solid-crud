import User from "../../entities/User";
import AppError from "../../errors/AppError";
import FakeUsersRepository from "../../repositories/fakeImplementations/FakeUsersRepository";
import UpdateUserUseCase from "./UpdateUserUseCase";

let updateUserUseCase: UpdateUserUseCase;
let fakeUsersRepository: FakeUsersRepository;

describe("Updating user", () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    updateUserUseCase = new UpdateUserUseCase(fakeUsersRepository);
  });

  it("Should not be able to update", async () => {
    const user = new User({
      name: "João Vitor",
      email: "joaovitormunizlopes@gmail.com",
      userPassword: "mensalao63",
    });

    expect(updateUserUseCase.execute(user)).rejects.toBeInstanceOf(AppError);
  });

  it("Should be able to update", async () => {
    const user = new User({
      name: "João Vitor",
      email: "joaovitormunizlopes@gmail.com",
      userPassword: "mensalao63",
    });

    fakeUsersRepository.save(user);

    const updatedUser = await updateUserUseCase.execute({
      id: user.id,
      name: "Joao 2",
      userPassword: "adasdasdasd",
      email: "joao@gmail.com",
    });

    expect(updatedUser.name).toBe("Joao 2");
    expect(updatedUser.email).toBe("joao@gmail.com");
    expect(updatedUser.userPassword).toBe("adasdasdasd");
  });
});
