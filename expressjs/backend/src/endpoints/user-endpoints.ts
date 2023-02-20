import { Router } from "express";
import GenericEndpoints from "./generic-endpoints.js";
import { User } from "@entities/user.js";

export class UserEndpoints extends GenericEndpoints<User> {
  protected readonly router: Router;

  constructor(router: Router) {
    super(router);
    this.router = router;
  }

  protected getClass(): ReturnType<any> {
    return UserEndpoints;
  }


  protected getEntity(): ReturnType<any> {
    return User;
  }
}