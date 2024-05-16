import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { CLIENT_TITLE_FIELD } from "../client/ClientTitle";
import { HOUSE_TITLE_FIELD } from "./HouseTitle";
import { REALESTATEAGENT_TITLE_FIELD } from "../realEstateAgent/RealEstateAgentTitle";

export const HouseShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="address" source="address" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="listedAt" source="listedAt" />
        <TextField label="price" source="price" />
        <ReferenceField
          label="RealEstateAgent"
          source="realestateagent.id"
          reference="RealEstateAgent"
        >
          <TextField source={REALESTATEAGENT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Key" target="houseId" label="Keys">
          <Datagrid rowClick="show">
            <ReferenceField
              label="Client"
              source="client.id"
              reference="Client"
            >
              <TextField source={CLIENT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <ReferenceField label="House" source="house.id" reference="House">
              <TextField source={HOUSE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <BooleanField label="isActive" source="isActive" />
            <TextField label="issuedAt" source="issuedAt" />
            <TextField label="label" source="label" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
