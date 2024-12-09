"use client";

import users from "@/operations/users";
import { Admin, Resource } from "react-admin";
import Login from "./login";
import { authProvider } from "@/providers/authProviders";
import dataProvider from "@/providers/dataProvider";

export default function AdminApp() {
  return (
    <Admin
      title="Portfolio"
      authProvider={authProvider}
      dataProvider={dataProvider}
      loginPage={Login}
      requireAuth
    >
      <Resource name="trosa"></Resource>
      <Resource name="users" {...users} />
    </Admin>
  );
}
