import { HouseCreateNestedManyWithoutRealEstateAgentsInput } from "./HouseCreateNestedManyWithoutRealEstateAgentsInput";

export type RealEstateAgentCreateInput = {
  email?: string | null;
  houses?: HouseCreateNestedManyWithoutRealEstateAgentsInput;
  name?: string | null;
  phoneNumber?: string | null;
};
