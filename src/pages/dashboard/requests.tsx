import React from "react";
import type { NextPage } from "next";
import AdminRequest from "@src/components/atoms/AdminRequest";
import Layout from "@src/components/atoms/AdminLayout";

const Page: NextPage = () => {
  return (
    <Layout>
      <AdminRequest />
    </Layout>
  );
};

export default Page;
