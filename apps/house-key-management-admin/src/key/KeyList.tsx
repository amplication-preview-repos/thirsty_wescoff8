import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { CLIENT_TITLE_FIELD } from "../client/ClientTitle";
import { HOUSE_TITLE_FIELD } from "../house/HouseTitle";

export const KeyList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Keys"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField label="Client" source="client.id" reference="Client">
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
    </List>
  );
};
