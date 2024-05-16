import { KeyUpdateManyWithoutHousesInput } from "./KeyUpdateManyWithoutHousesInput";
import { RealEstateAgentWhereUniqueInput } from "../realEstateAgent/RealEstateAgentWhereUniqueInput";

export type HouseUpdateInput = {
  address?: string | null;
  keys?: KeyUpdateManyWithoutHousesInput;
  listedAt?: Date | null;
  price?: number | null;
  realEstateAgent?: RealEstateAgentWhereUniqueInput | null;
};
