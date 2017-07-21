import { Enterprise } from "./enterprise.model";

export class Sector {

  id: number;
  code: string;
  description: string;
  processTime: number;
  enterprise: Enterprise;
}
