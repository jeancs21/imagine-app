import { AdminAccount, UserAccount } from "../pages/models/accounts";
import { LoggedUser } from "../pages/models/loggedUser.model";

export function mockAuthentication(user: LoggedUser): Promise<boolean> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user.email === AdminAccount.email && user.password === AdminAccount.password) {
        user.username = AdminAccount.username;
        resolve(true);
      }
      else if (user.email === UserAccount.email && user.password === UserAccount.password) {
        user.username = UserAccount.username
        resolve(true);
      }
       else {
        reject(new Error("Credenciales de usuario inválidas"));
      }
    }, 1000);
  });
}