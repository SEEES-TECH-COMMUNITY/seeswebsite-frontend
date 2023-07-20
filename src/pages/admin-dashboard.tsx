import DashSidebar from "@src/components/atoms/DashSidebar";

import React from "react";

const AdminDashboard = () => {
  return (
    <section className="flex-row">
      <div className="w-1/6  basis-1/6">
        <DashSidebar />
      </div>
      <div className="w-5/6 basis-5/6"></div>
    </section>
  );
};

export default AdminDashboard;
