import React from "react";
import type { NextPage } from "next";
import AdminUser from "@src/components/atoms/AdminUser";
import Layout from "@src/components/atoms/AdminLayout";

const Page: NextPage = () => {
  return (
    <Layout>
      <AdminUser />
    </Layout>
  );
};

export default Page;
