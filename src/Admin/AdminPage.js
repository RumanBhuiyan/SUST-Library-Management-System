import React, { useState } from "react";
import AdminVector from "./AdminVector";
import AdminForm from "./AdminForm";
import AdminDashboard from "./AdminDashboard";

function AdminPage() {
  const [isLoggedIn, setLoggedIn] = useState(true);
  return (
    <div>
      {!isLoggedIn ? (
        <div className="container-fluid adminFullDiv">
          <div className="row overflow-hidden">
            <AdminVector />
            <AdminForm />
          </div>
        </div>
      ) : (
        <AdminDashboard />
      )}
    </div>
  );
}

export default AdminPage;
