import React from "react";
import AdminVector from "./AdminVector";
import AdminForm from "./AdminForm";

function AdminPage() {
  return (
    <div>
      <div className="container-fluid adminFullDiv">
        <div className="row">
          <AdminVector />
          <AdminForm />
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
