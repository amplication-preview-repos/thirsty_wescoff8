import { KeyWhereInput } from "./KeyWhereInput";
import { KeyOrderByInput } from "./KeyOrderByInput";

export type KeyFindManyArgs = {
  where?: KeyWhereInput;
  orderBy?: Array<KeyOrderByInput>;
  skip?: number;
  take?: number;
};
