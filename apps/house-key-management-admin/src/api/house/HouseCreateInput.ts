import { KeyCreateNestedManyWithoutHousesInput } from "./KeyCreateNestedManyWithoutHousesInput";
import { RealEstateAgentWhereUniqueInput } from "../realEstateAgent/RealEstateAgentWhereUniqueInput";

export type HouseCreateInput = {
  address?: string | null;
  keys?: KeyCreateNestedManyWithoutHousesInput;
  listedAt?: Date | null;
  price?: number | null;
  realEstateAgent?: RealEstateAgentWhereUniqueInput | null;
};
