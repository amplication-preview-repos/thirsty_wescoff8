import { House as THouse } from "../api/house/House";

export const HOUSE_TITLE_FIELD = "address";

export const HouseTitle = (record: THouse): string => {
  return record.address?.toString() || String(record.id);
};
