import React from "react";
import type { NextPage } from "next";
import AdminResources from "@src/components/atoms/AdminResources";
import Layout from "@src/components/atoms/AdminLayout";

const Page: NextPage = () => {
  return (
    <Layout>
      <AdminResources />
    </Layout>
  );
};

export default Page;
