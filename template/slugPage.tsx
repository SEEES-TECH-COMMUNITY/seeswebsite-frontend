import React from "react";
import type { NextPage } from "next";

export interface Page {
  slblockNameug: string;
}

const Page: NextPage<Page> = ({ blockName }) => {
  return <section>blockName</section>;
};
Page.getInitialProps = async ({ query }: any) => {
  const { blockName } = query;
  return { blockName };
};
export default Page;
