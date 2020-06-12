import * as React from "react";

import { Admin, Resource, ListGuesser, EditGuesser,ImageField  } from "react-admin";
import {
  FirebaseDataProvider,
  FirebaseAuthProvider
} from "react-admin-firebase";

import {config} from "../firebase"
import Firebase from 'firebase'
const options ={
  rootRef: `http://localhost:5000/spring-internship/us-central1/app/api/profile/puser`
}

const dataProvider = FirebaseDataProvider(config , options );
// const authProvider = FirebaseAuthProvider(config );



const AdminApp = () => (
  <Admin dataProvider={dataProvider}>
     <Resource
          name="Puser"
          
        />
  </Admin>
);

export default AdminApp;
