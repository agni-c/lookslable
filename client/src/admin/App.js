import * as React from "react";

import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import { UserList } from "./users";
import { PostList, PostEdit, PostCreate } from "./posts";
import jsonServerProvider from "ra-data-json-server";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
const AdminApp = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={UserList} />
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
    />
  </Admin>
);

export default AdminApp;
