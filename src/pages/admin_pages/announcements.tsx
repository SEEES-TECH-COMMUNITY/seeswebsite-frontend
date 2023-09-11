import React from "react";
import type { NextPage } from "next";
import AdminAnnouncement from "@src/components/atoms/AdminAnnouncements";
import Layout from "@src/components/atoms/AdminLayout";

const Page: NextPage = () => {
  return (
    <Layout>
      <AdminAnnouncement />
    </Layout>
  );
};

export default Page;
