"use client";

import { memo } from "react";
import Container from "@mui/material/Container";
import CommandSection from "../components/control-section/CommandSection";
import ConfigSection from "../components/control-section/ConfigSection";
import SkillsSection from "../components/control-section/SkillsSection";

function Dashboard() {
  return (
    <Container sx={{
      display: "flex",
      flexDirection: "column",
      gap: "20px"
    }}>
      <CommandSection />
      <ConfigSection />
      <SkillsSection />
    </Container>
  )
}

const DashboardPage = memo(Dashboard);
export default DashboardPage;