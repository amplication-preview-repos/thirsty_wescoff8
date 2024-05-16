import { RealEstateAgentWhereInput } from "./RealEstateAgentWhereInput";
import { RealEstateAgentOrderByInput } from "./RealEstateAgentOrderByInput";

export type RealEstateAgentFindManyArgs = {
  where?: RealEstateAgentWhereInput;
  orderBy?: Array<RealEstateAgentOrderByInput>;
  skip?: number;
  take?: number;
};
