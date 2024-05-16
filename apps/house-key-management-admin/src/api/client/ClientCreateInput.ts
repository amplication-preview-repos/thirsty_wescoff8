import { KeyCreateNestedManyWithoutClientsInput } from "./KeyCreateNestedManyWithoutClientsInput";

export type ClientCreateInput = {
  email?: string | null;
  keys?: KeyCreateNestedManyWithoutClientsInput;
  name?: string | null;
  phoneNumber?: string | null;
};
