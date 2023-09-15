import React from "react";
import type { NextPage } from "next";
import AdminDashboard from "@src/components/atoms/AdminDashboard";
import Layout from "@src/components/atoms/AdminLayout";

const Page: NextPage = () => {
  return (
    <Layout>
      <AdminDashboard />
    </Layout>
  );
};

export default Page;
