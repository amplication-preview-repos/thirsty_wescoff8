import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { HouseWhereUniqueInput } from "../house/HouseWhereUniqueInput";

export type KeyCreateInput = {
  client?: ClientWhereUniqueInput | null;
  house?: HouseWhereUniqueInput | null;
  isActive?: boolean | null;
  issuedAt?: Date | null;
  label?: string | null;
};
