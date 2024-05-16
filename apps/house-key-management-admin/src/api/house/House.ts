import { Key } from "../key/Key";
import { RealEstateAgent } from "../realEstateAgent/RealEstateAgent";

export type House = {
  address: string | null;
  createdAt: Date;
  id: string;
  keys?: Array<Key>;
  listedAt: Date | null;
  price: number | null;
  realEstateAgent?: RealEstateAgent | null;
  updatedAt: Date;
};
