import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { KeyListRelationFilter } from "../key/KeyListRelationFilter";

export type ClientWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  keys?: KeyListRelationFilter;
  name?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
};
