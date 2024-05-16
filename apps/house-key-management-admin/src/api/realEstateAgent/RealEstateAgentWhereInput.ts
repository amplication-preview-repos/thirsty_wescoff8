import { StringNullableFilter } from "../../util/StringNullableFilter";
import { HouseListRelationFilter } from "../house/HouseListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type RealEstateAgentWhereInput = {
  email?: StringNullableFilter;
  houses?: HouseListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
};
