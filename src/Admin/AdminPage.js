import React, { useState, useEffect } from "react";
import AdminVector from "./AdminVector";
import AdminForm from "./AdminForm";
import AdminDashboard from "./AdminDashboard";

function AdminPage() {
  //const [isLoggedIn, setLoggedIn] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

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
