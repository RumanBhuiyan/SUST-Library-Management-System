import React, { useEffect } from "react";
import AdminVector from "./AdminVector";
import AdminForm from "./AdminForm";
import AdminDashboard from "./AdminDashboard";
import { MyContext } from "../App";

function AdminPage() {
  const { infoStore } = React.useContext(MyContext);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      {!infoStore.adminLoggedIn ? (
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
