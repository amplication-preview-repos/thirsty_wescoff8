import { Key } from "../key/Key";

export type Client = {
  createdAt: Date;
  email: string | null;
  id: string;
  keys?: Array<Key>;
  name: string | null;
  phoneNumber: string | null;
  updatedAt: Date;
};
