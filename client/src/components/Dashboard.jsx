import React from "react";
import NavigationBar from "./NavigationBar";
import DashboardCard from "./DashboardCard";
import PriorityCard from "./PriorityCard";
import "../css/dashboard.css";
import ProjectForm from "./ProjectForm";

const Dashboard = () => {
  return (
    <>
      <section>
        <NavigationBar />
        <DashboardCard />
        <PriorityCard />
        <ProjectForm />
      </section>
    </>
  );
};

export default Dashboard;
