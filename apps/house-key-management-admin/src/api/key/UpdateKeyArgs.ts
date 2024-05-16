import { KeyWhereUniqueInput } from "./KeyWhereUniqueInput";
import { KeyUpdateInput } from "./KeyUpdateInput";

export type UpdateKeyArgs = {
  where: KeyWhereUniqueInput;
  data: KeyUpdateInput;
};
