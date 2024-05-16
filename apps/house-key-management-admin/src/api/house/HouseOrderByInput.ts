import { SortOrder } from "../../util/SortOrder";

export type HouseOrderByInput = {
  address?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  listedAt?: SortOrder;
  price?: SortOrder;
  realEstateAgentId?: SortOrder;
  updatedAt?: SortOrder;
};
