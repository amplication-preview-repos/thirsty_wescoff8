import { RealEstateAgent as TRealEstateAgent } from "../api/realEstateAgent/RealEstateAgent";

export const REALESTATEAGENT_TITLE_FIELD = "name";

export const RealEstateAgentTitle = (record: TRealEstateAgent): string => {
  return record.name?.toString() || String(record.id);
};
