import User from "../../entities/User";
import AppError from "../../errors/AppError";
// import { FakeMailProvider } from "../../providers/fakeimplementations/FakeMaileProvider";
import FakeUsersRepository from "../../repositories/fakeImplementations/FakeUsersRepository";
import ReadUserUseCase from "./ReadUserUseCase";

let fakeUsersRepository: FakeUsersRepository;
// slet fakeMailProvider: FakeMailProvider;

let readUserUseCase: ReadUserUseCase;

describe("Reading User", () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    // fakeMailProvider = new FakeMailProvider();
    readUserUseCase = new ReadUserUseCase(fakeUsersRepository);
  });

  it("Should be able to read a new user", async () => {
    const userCreated = new User({
      email: "joao@gmail.com",
      name: "Jhon Doe",
      userPassword: "123457",
    });

    const user = await fakeUsersRepository.save(userCreated);

    const userRead = await readUserUseCase.execute(user.id);

    expect(userRead).toEqual({
      id: user.id,
      email: "joao@gmail.com",
      name: "Jhon Doe",
      userPassword: "123457",
    });
  });

  it("Should no tbe able to read a new user", async () => {
    expect(readUserUseCase.execute("not-a-valid-id")).rejects.toBeInstanceOf(
      AppError
    );
  });
});
