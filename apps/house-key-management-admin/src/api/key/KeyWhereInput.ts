import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { HouseWhereUniqueInput } from "../house/HouseWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type KeyWhereInput = {
  client?: ClientWhereUniqueInput;
  house?: HouseWhereUniqueInput;
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  issuedAt?: DateTimeNullableFilter;
  label?: StringNullableFilter;
};
