import { KeyUpdateManyWithoutClientsInput } from "./KeyUpdateManyWithoutClientsInput";

export type ClientUpdateInput = {
  email?: string | null;
  keys?: KeyUpdateManyWithoutClientsInput;
  name?: string | null;
  phoneNumber?: string | null;
};
