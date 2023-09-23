/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import type { NextPage } from "next";
import Layout from "@src/components/atoms/AdminLayout";
import { useGetAnnouncementQuery } from "@src/utils/services/ApiService";
import DOMPurify from "dompurify";
export interface Page {
  slug: string;
}

const Page: NextPage<Page> = ({ slug }) => {
  const { data } = useGetAnnouncementQuery(slug);
  const sanitizedHtmlContent = DOMPurify.sanitize(data?.body ?? "");
  return (
    <Layout>
      <div className="p-6">
        <div dangerouslySetInnerHTML={{ __html: sanitizedHtmlContent }} />
      </div>
    </Layout>
  );
};
// eslint-disable-next-line @typescript-eslint/require-await
Page.getInitialProps = async ({ query }: any) => {
  const { slug } = query;
  return { slug };
};
export default Page;
