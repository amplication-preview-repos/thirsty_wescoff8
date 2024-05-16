import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { KeyTitle } from "../key/KeyTitle";
import { RealEstateAgentTitle } from "../realEstateAgent/RealEstateAgentTitle";

export const HouseEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="address" source="address" />
        <ReferenceArrayInput
          source="keys"
          reference="Key"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={KeyTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="listedAt" source="listedAt" />
        <NumberInput label="price" source="price" />
        <ReferenceInput
          source="realEstateAgent.id"
          reference="RealEstateAgent"
          label="RealEstateAgent"
        >
          <SelectInput optionText={RealEstateAgentTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
