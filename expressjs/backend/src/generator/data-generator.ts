import { User } from "@entities/user.js";
import { faker, Sex } from "@faker-js/faker";

export class DataGenerator {
  static createRandomUser(howMuch: number): User[] {
    const USERS: User[] = [];

    Array.from({ length: howMuch }).forEach((value, index) => {
      let user = new User();
      user.username = `${faker.internet.userName()}.${index+1}`;
      user.password = faker.internet.password();
      user.firstName = faker.name.firstName(Sex.Male);
      user.lastName = faker.name.lastName(Sex.Male);
      user.creator = user.username;
      USERS.push(user);
    });

    console.log(USERS)
    return USERS;
  }
}