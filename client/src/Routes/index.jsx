import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard, Login, Register } from "../Pages";
import ProtectedRoute from "../components/Common/privateRoute";

const index = () => {
  return (
    <div>
      <Router>
        <div className="main-content">
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Dashboard />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default index;
