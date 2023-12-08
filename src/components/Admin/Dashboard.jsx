import React, { useEffect, useState } from "react";
import DashStatsGrid from "./DashStatsGrid";
import DashChart from "./DashChart";
import DashUserProfileChart from "./DashUserProfileChart";
import RecentTrax from "./RecentTrax";
import NewUser from "./NewUser";

const Dashboard = ({ token, user }) => {

  return (
    <div className="flex flex-col m-4">
      <DashStatsGrid token={token} user={user}/>
      <div className="flex flex-row gap-4 w-full">
        <DashChart token={token}/>
        <DashUserProfileChart token={token}/>
      </div>
      <div className="flex flex-row gap-4 w-full">
        <RecentTrax token={token}/>
        <NewUser token={token}/>
      </div>
    </div>
  );
};

export default Dashboard;