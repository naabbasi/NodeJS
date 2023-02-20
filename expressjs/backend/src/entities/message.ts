import { v4 as uuidv4 } from "uuid";

export class Message {
  gkey = uuidv4();
  message = "";
}