import { HouseUpdateManyWithoutRealEstateAgentsInput } from "./HouseUpdateManyWithoutRealEstateAgentsInput";

export type RealEstateAgentUpdateInput = {
  email?: string | null;
  houses?: HouseUpdateManyWithoutRealEstateAgentsInput;
  name?: string | null;
  phoneNumber?: string | null;
};
