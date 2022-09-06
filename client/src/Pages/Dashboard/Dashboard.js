import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Icon1 from "../../Assets/GridIcon";
import Icon2 from "../../Assets/ProductIcon";
import CardItem from "./CardItem";
import Spinner from "../../components/Common/spinner.jsx";

export const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    cars: [],
    users: [],
  });
  
  return (
    <Sidebar>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <h2>Dashboard</h2>
          <div className="row">
            <CardItem
              title="Total Cars"
              Icon={Icon1}
              value={data.cars.length}
              bgcolor="bg-green"
              txtcolor="text-green"
              borderColor="border-green"
            />
            <CardItem
              title="Total Users"
              Icon={Icon2}
              value={data.users.length}
              bgcolor="bg-blue"
              txtcolor="text-blue"
              borderColor="border-blue"
            />
          </div>
        </div>
      )}
    </Sidebar>
  );
};
