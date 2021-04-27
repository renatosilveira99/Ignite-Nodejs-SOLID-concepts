/* eslint-disable prettier/prettier */
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

// interface IRequest {
//   user_id: string;
// }

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }): User[] {
    const user = this.usersRepository.findById(user_id);

    if (!user || !user.admin) {
      throw new Error("User doesn't have permission");
    }

    const all = this.usersRepository.list();

    return all;
  }
}

export { ListAllUsersUseCase };
