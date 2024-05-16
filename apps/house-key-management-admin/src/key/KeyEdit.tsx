import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { ClientTitle } from "../client/ClientTitle";
import { HouseTitle } from "../house/HouseTitle";

export const KeyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
