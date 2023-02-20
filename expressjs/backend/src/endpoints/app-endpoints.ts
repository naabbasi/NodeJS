import { Router } from "express";
import GenericEndpoints from "./generic-endpoints.js";
import { Application } from "@entities/application.js";

export class AppEndpoints extends GenericEndpoints<Application> {
  protected readonly router: Router;

  constructor(router: Router) {
    super(router);
    this.router = router;
  }

  protected getClass(): ReturnType<any> {
    return AppEndpoints;
  }


  protected getEntity(): ReturnType<any> {
    return Application;
  }
}