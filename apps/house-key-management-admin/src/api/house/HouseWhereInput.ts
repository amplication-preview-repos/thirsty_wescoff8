import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { KeyListRelationFilter } from "../key/KeyListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { RealEstateAgentWhereUniqueInput } from "../realEstateAgent/RealEstateAgentWhereUniqueInput";

export type HouseWhereInput = {
  address?: StringNullableFilter;
  id?: StringFilter;
  keys?: KeyListRelationFilter;
  listedAt?: DateTimeNullableFilter;
  price?: FloatNullableFilter;
  realEstateAgent?: RealEstateAgentWhereUniqueInput;
};
