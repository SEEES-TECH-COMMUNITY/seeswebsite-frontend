import React, { type FC, type ReactNode } from "react";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";
import { Montserrat, Space_Grotesk } from "next/font/google";
import AuthProvider from "./AuthProvider";

export interface ILayoutProps {
  children: ReactNode;
}

const montserrat = Montserrat({
  weight: ["400"],
  subsets: ["latin", "latin-ext"],
});
const spaceGrotesk = Space_Grotesk({
  weight: ["400"],
  subsets: ["latin", "latin-ext"],
});

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <section
      className={`flex min-h-screen flex-col ${spaceGrotesk.className} `}
    >
      <div className="w-full">
        <AdminHeader />
      </div>
      <div className="flex w-full">
        <div className="w-1/6">
          <AdminSidebar />
        </div>
        <div className=" w-5/6 basis-5/6">{children}</div>
      </div>
      <AuthProvider />
    </section>
  );
};

export default Layout;
