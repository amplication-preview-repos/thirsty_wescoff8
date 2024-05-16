import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { HouseList } from "./house/HouseList";
import { HouseCreate } from "./house/HouseCreate";
import { HouseEdit } from "./house/HouseEdit";
import { HouseShow } from "./house/HouseShow";
import { RealEstateAgentList } from "./realEstateAgent/RealEstateAgentList";
import { RealEstateAgentCreate } from "./realEstateAgent/RealEstateAgentCreate";
import { RealEstateAgentEdit } from "./realEstateAgent/RealEstateAgentEdit";
import { RealEstateAgentShow } from "./realEstateAgent/RealEstateAgentShow";
import { ClientList } from "./client/ClientList";
import { ClientCreate } from "./client/ClientCreate";
import { ClientEdit } from "./client/ClientEdit";
import { ClientShow } from "./client/ClientShow";
import { KeyList } from "./key/KeyList";
import { KeyCreate } from "./key/KeyCreate";
import { KeyEdit } from "./key/KeyEdit";
import { KeyShow } from "./key/KeyShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"HouseKeyManagement"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="House"
          list={HouseList}
          edit={HouseEdit}
          create={HouseCreate}
          show={HouseShow}
        />
        <Resource
          name="RealEstateAgent"
          list={RealEstateAgentList}
          edit={RealEstateAgentEdit}
          create={RealEstateAgentCreate}
          show={RealEstateAgentShow}
        />
        <Resource
          name="Client"
          list={ClientList}
          edit={ClientEdit}
          create={ClientCreate}
          show={ClientShow}
        />
        <Resource
          name="Key"
          list={KeyList}
          edit={KeyEdit}
          create={KeyCreate}
          show={KeyShow}
        />
      </Admin>
    </div>
  );
};

export default App;
