import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { KeyTitle } from "../key/KeyTitle";

export const ClientCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <ReferenceArrayInput
          source="keys"
          reference="Key"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={KeyTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <TextInput label="phoneNumber" source="phoneNumber" />
      </SimpleForm>
    </Create>
  );
};
