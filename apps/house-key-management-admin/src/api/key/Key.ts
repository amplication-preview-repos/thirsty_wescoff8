import { Client } from "../client/Client";
import { House } from "../house/House";

export type Key = {
  client?: Client | null;
  createdAt: Date;
  house?: House | null;
  id: string;
  isActive: boolean | null;
  issuedAt: Date | null;
  label: string | null;
  updatedAt: Date;
};
