import { LoggedUser } from "../pages/models/loggedUser.model";

export function mockAuthentication(user: LoggedUser): Promise<boolean> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user.email === "admin@test.com" && user.password === "supersecret") {
        user.username = "admin";
        resolve(true);
      }
      else if (user.email === "user@test.com" && user.password === "secret") {
        user.username = "imagine user"
        resolve(true);
      }
       else {
        reject(new Error("Credenciales de usuario inválidas"));
      }
    }, 1000);
  });
}