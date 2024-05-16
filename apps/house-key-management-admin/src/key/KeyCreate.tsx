import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { ClientTitle } from "../client/ClientTitle";
import { HouseTitle } from "../house/HouseTitle";

export const KeyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="client.id" reference="Client" label="Client">
          <SelectInput optionText={ClientTitle} />
        </ReferenceInput>
        <ReferenceInput source="house.id" reference="House" label="House">
          <SelectInput optionText={HouseTitle} />
        </ReferenceInput>
        <BooleanInput label="isActive" source="isActive" />
        <DateTimeInput label="issuedAt" source="issuedAt" />
        <TextInput label="label" source="label" />
      </SimpleForm>
    </Create>
  );
};
