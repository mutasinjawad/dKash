import React, { useEffect, useState } from "react";
import DashStatsGrid from "./DashStatsGrid";
import DashChart from "./DashChart";
import DashUserProfileChart from "./DashUserProfileChart";
import RecentTrax from "./RecentTrax";
import NewUser from "./NewUser";

const Dashboard = ({ token, user, setUser }) => {

  return (
    <div className="flex flex-col m-4">
      <DashStatsGrid />
      <div className="flex flex-row gap-4 w-full">
        <DashChart />
        <DashUserProfileChart />
      </div>
      <div className="flex flex-row gap-4 w-full">
        <RecentTrax />
        <NewUser />
      </div>
    </div>
  );
};

export default Dashboard;