import { HouseWhereInput } from "./HouseWhereInput";
import { HouseOrderByInput } from "./HouseOrderByInput";

export type HouseFindManyArgs = {
  where?: HouseWhereInput;
  orderBy?: Array<HouseOrderByInput>;
  skip?: number;
  take?: number;
};
