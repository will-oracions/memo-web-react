import { BaseModel } from "../../common/base.model";

export interface Event extends BaseModel {
  name: string;
  description: string;
  community: any;
}
