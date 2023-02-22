import { Request, Response, Router } from "express";
import { DataGenerator } from "../generator/data-generator.js";
import { User } from "@entities/user.js";
import { AppDataSource } from "@data-source/data-source.js";

export class DataGeneratorEndpoints {
  protected readonly router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  generateUsers = () => {
    this.router.get("/users/:howMany", async (req: Request, res: Response) => {
      let users: User[] = DataGenerator.createRandomUser(Number.parseInt(req.params['howMany']));
      //Saving bulk users
      await AppDataSource.manager.save(users);

      let result = users.length !== 0 ? {created: `Users ${users.length} created`} : null;
      if (result == null) {
        res.status(404).send(`No result found`);
      } else {
        res.status(200).json(result);
      }
    });
  };

  getEndpoints(): Router {
    this.generateUsers();
    return this.router;
  }
}