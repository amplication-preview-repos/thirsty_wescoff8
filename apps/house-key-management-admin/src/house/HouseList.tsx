import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { REALESTATEAGENT_TITLE_FIELD } from "../realEstateAgent/RealEstateAgentTitle";

export const HouseList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Houses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
