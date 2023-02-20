import { Request, Response, Router } from "express";
import { AppDataSource } from "@data-source/data-source.js";
import { Repository } from "typeorm";

export default abstract class GenericEndpoints<T extends object> {
  protected readonly router: Router;

  protected constructor(router: Router) {
    this.router = router;
  }

  get = () => {
    this.router.get("/:gkey", async (req: Request, res: Response) => {
      let gkey = req.params["gkey"];
      let result = await AppDataSource.manager.findOneBy(this.getEntity().name, { gkey: gkey });

      console.log(`${this.getEntity().name} `, result);
      if (result == null) {
        res.status(404).send(`No result found`);
      } else {
        res.status(200).json(result);
      }
    });
  };

  all = () => {
    this.router.get("/", async (req: Request, res: Response) => {
      let repository: Repository<T> = AppDataSource.getRepository(this.getEntity().name);
      let result = await repository.find();
      res.status(200).json(result);
    });
  };

  post = () => {
    this.router.post("/", (req: Request, res: Response) => {
      res.status(201).send("Hello World");
    });
  };

  put = () => {
    this.router.put("/", (req: Request, res: Response) => {
      res.status(202).send("Hello World");
    });
  };

  delete = () => {
    this.router.delete("/", (req: Request, res: Response) => {
      res.status(202).send("Hello World");
    });
  };

  getEndpoints() {
    this.all();
    this.get();
    this.post();
    this.put();
    this.delete();
    return this.router;
  }

  protected abstract getClass(): ReturnType<any>;

  protected abstract getEntity(): ReturnType<any>;
}