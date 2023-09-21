import React from "react";
import NavigationBar from "../NavigationBar";
import DashboardCard from "../dashboardComponents/DashboardCard";
import PriorityCard from "../dashboardComponents/PriorityCard";
import "../../css/dashboard.css";
import ProjectForm from "../dashboardComponents/ProjectForm";

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
